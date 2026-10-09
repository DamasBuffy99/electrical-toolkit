import { ACTIVITIES, DT_TYPES, HOURS, Orientation, PUBLIC_FACTORS, radiationFactor, SOLAR_TABLES, SolarTableKey } from '../data/heatLoad';

export type SurfaceKind = 'wall' | 'window' | 'door';
export type Surface = {
  id: string;
  kind: SurfaceKind;
  /** 'none' = not sunlit (shaded or interior partition). */
  orientation: Orientation | 'none';
  area: string;
  k: string;
  /** Absorption coefficient α (colour for walls/doors, glazing type for windows). */
  alpha: string;
  /** Δθ type from table 1.10 (walls and doors). */
  dt: string;
  /** Solar protection factor g (windows). */
  g: string;
};
export type Equipment = { id: string; name: string; power: string; cu: string; latent: string };
export type CeilingType = 'noncond' | 'atticVent' | 'atticClosed' | 'roof' | 'conditioned';
export type FloorType = 'ground' | 'noncond' | 'conditioned';

export type HeatLoadState = {
  cityId: string;
  table: SolarTableKey;
  te: string;
  we: string;
  ti: string;
  wi: string;
  cosPhi: string;
  hour: number | 'auto';
  length: string;
  width: string;
  height: string;
  surfaces: Surface[];
  ceilingType: CeilingType;
  ceilingK: string;
  ceilingAlpha: string;
  floorType: FloorType;
  floorK: string;
  people: string;
  activity: string;
  publicId: string;
  airMode: 'natural' | 'mechanical' | 'custom';
  airPerPerson: string;
  airCustom: string;
  lightingDensity: string;
  ballast: boolean;
  equipment: Equipment[];
  safety: string;
  cop: string;
};

export const num = (v: string | undefined) => {
  const n = parseFloat((v ?? '').replace(',', '.'));
  return Number.isFinite(n) ? n : 0;
};

export type LoadLine = { key: string; label: string; labelEn: string; sensible: number; latent: number };
export type LoadResult = {
  hour: number;
  lines: LoadLine[];
  transmission: number;
  radiation: number;
  qs: number;
  ql: number;
  qt: number;
  area: number;
  volume: number;
  airFlow: number;
};

const KIND_LABEL: Record<SurfaceKind, [string, string]> = { wall: ['Mur', 'Wall'], window: ['Vitrage', 'Glazing'], door: ['Porte', 'Door'] };

export function computeLoad(s: HeatLoadState, hour: number): LoadResult {
  const te = num(s.te);
  const ti = num(s.ti);
  const dT = te - ti;
  const area = num(s.length) * num(s.width);
  const volume = area * num(s.height);
  const sun = SOLAR_TABLES[s.table].hours[hour];
  const lines: LoadLine[] = [];
  let transmission = 0;
  let radiation = 0;

  s.surfaces.forEach((sf, i) => {
    const S = num(sf.area);
    const k = num(sf.k);
    const dtType = DT_TYPES.find((d) => d.id === sf.dt) ?? DT_TYPES[0];
    const dt = Math.max(0, dT + (sf.kind === 'window' ? 0 : dtType.delta));
    const qTr = k * S * dt;
    let qRad = 0;
    const sunlit = sf.orientation !== 'none' && (sf.kind === 'window' || dtType.id === 'ext');
    if (sunlit && sun) {
      const [rm, rv] = sun[sf.orientation as Orientation];
      qRad = sf.kind === 'window' ? num(sf.alpha) * num(sf.g) * S * rv : num(sf.alpha) * radiationFactor(k) * S * rm;
    }
    transmission += qTr;
    radiation += qRad;
    const [fr, en] = KIND_LABEL[sf.kind];
    const o = sf.orientation === 'none' ? '' : ` ${sf.orientation}`;
    lines.push({ key: `s${i}`, label: `${fr}${o} (${S} m²)`, labelEn: `${en}${o.replace('O', 'W')} (${S} m²)`, sensible: qTr + qRad, latent: 0 });
  });

  // ceiling / roof
  const ceilingDelta = { noncond: -3, atticVent: 3, atticClosed: 12, roof: 0, conditioned: null }[s.ceilingType];
  if (ceilingDelta !== null && area > 0) {
    const k = num(s.ceilingK);
    const qTr = k * area * Math.max(0, dT + ceilingDelta);
    const qRad = s.ceilingType === 'roof' && sun ? num(s.ceilingAlpha) * radiationFactor(k) * area * sun.hor : 0;
    transmission += qTr;
    radiation += qRad;
    lines.push({ key: 'ceiling', label: s.ceilingType === 'roof' ? 'Toiture' : 'Plafond', labelEn: s.ceilingType === 'roof' ? 'Roof' : 'Ceiling', sensible: qTr + qRad, latent: 0 });
  }
  // floor
  if (s.floorType !== 'conditioned' && area > 0) {
    const dt = s.floorType === 'ground' ? 20 - ti : dT - 3;
    const q = num(s.floorK) * area * Math.max(0, dt);
    transmission += q;
    lines.push({ key: 'floor', label: 'Plancher', labelEn: 'Floor', sensible: q, latent: 0 });
  }

  // fresh air
  const people = num(s.people);
  const airFlow = s.airMode === 'natural' ? volume : s.airMode === 'mechanical' ? people * num(s.airPerPerson) : num(s.airCustom);
  lines.push({
    key: 'air',
    label: `Air neuf (${Math.round(airFlow)} m³/h)`,
    labelEn: `Fresh air (${Math.round(airFlow)} m³/h)`,
    sensible: airFlow * dT * 0.33,
    latent: Math.max(0, airFlow * (num(s.we) - num(s.wi)) * 0.84 * 1000),
  });

  // occupants (table 1.16 column closest to the indoor temperature)
  const act = ACTIVITIES.find((a) => a.id === s.activity) ?? ACTIVITIES[1];
  const col: 25 | 26 | 27 = ti < 25.5 ? 25 : ti < 26.5 ? 26 : 27;
  const pub = PUBLIC_FACTORS.find((p) => p.id === s.publicId)?.factor ?? 1;
  lines.push({
    key: 'people',
    label: `Occupants (${people})`,
    labelEn: `Occupants (${people})`,
    sensible: people * act.values[col][0] * pub,
    latent: people * act.values[col][1] * pub,
  });

  // lighting
  const light = num(s.lightingDensity) * area * (s.ballast ? 1.25 : 1);
  lines.push({ key: 'light', label: 'Éclairage', labelEn: 'Lighting', sensible: light, latent: 0 });

  // equipment
  let eqS = 0;
  let eqL = 0;
  s.equipment.forEach((e) => {
    const cu = num(e.cu) / 100;
    eqS += num(e.power) * cu;
    eqL += num(e.latent) * cu;
  });
  lines.push({ key: 'equip', label: 'Appareils', labelEn: 'Appliances', sensible: eqS, latent: eqL });

  const qs = lines.reduce((a, l) => a + l.sensible, 0);
  const ql = lines.reduce((a, l) => a + l.latent, 0);
  return { hour, lines, transmission, radiation, qs, ql, qt: qs + ql, area, volume, airFlow };
}

/** Load for every hour of the table, and the hour of maximum load. */
export function computeAllHours(s: HeatLoadState) {
  const all = HOURS.map((h) => computeLoad(s, h));
  const peak = all.reduce((best, r) => (r.qt > best.qt ? r : best), all[0]);
  return { all, peak };
}
