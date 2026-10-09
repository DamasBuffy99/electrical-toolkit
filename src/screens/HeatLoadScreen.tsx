import React, { useMemo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
  ACTIVITIES,
  ALPHAS,
  CITY_PRESETS,
  DT_TYPES,
  HOURS,
  LIGHTING_DENSITIES,
  ORIENTATION_EN,
  ORIENTATIONS,
  PROTECTIONS,
  PUBLIC_FACTORS,
  SOLAR_TABLES,
  SolarTableKey,
} from '../data/heatLoad';
import { CeilingType, computeAllHours, computeLoad, Equipment, FloorType, HeatLoadState, num, Surface, SurfaceKind } from '../lib/heatLoadCalc';
import { usePersistedField } from '../lib/storage';
import { useSnapshots } from '../lib/useSnapshots';
import { useLanguage } from '../lib/language';
import SavedCalculations from '../components/SavedCalculations';
import { colors, radius, spacing } from '../theme/theme';
import {
  Card,
  Chip,
  ChipRow,
  Divider,
  ExportButton,
  FieldLabel,
  FieldRow,
  Formula,
  LabeledField,
  MiniChip,
  Note,
  ResultRow,
  ScreenContainer,
  SectionTitle,
  Title,
} from '../components/ui';

let idSeq = 0;
const newId = () => `${Date.now().toString(36)}${(idSeq++).toString(36)}`;

const wall = (orientation: Surface['orientation'], area: string, k = '2.09', alpha = '0.4', dt = 'ext'): Surface => ({
  id: newId(),
  kind: 'wall',
  orientation,
  area,
  k,
  alpha,
  dt,
  g: '1',
});

/** The worked example of the guide (office in Douala), so the result can be checked against the book: 7,407 W. */
export const GUIDE_EXAMPLE: HeatLoadState = {
  cityId: 'douala',
  table: 'lat4feb',
  te: '32',
  we: '0.0255',
  ti: '26',
  wi: '0.0108',
  cosPhi: '0.8',
  hour: 13,
  length: '10',
  width: '6',
  height: '3',
  surfaces: [
    wall('N', '30'),
    wall('S', '28'),
    wall('O', '16.5'),
    wall('none', '18', '2.37', '0.4', 'noncond'),
    { id: newId(), kind: 'window', orientation: 'O', area: '1.5', k: '5', alpha: '0.86', dt: 'ext', g: '0.28' },
    { id: newId(), kind: 'door', orientation: 'S', area: '2', k: '3.94', alpha: '0.7', dt: 'ext', g: '1' },
  ],
  ceilingType: 'noncond',
  ceilingK: '1.14',
  ceilingAlpha: '0.4',
  floorType: 'ground',
  floorK: '1.36',
  people: '6',
  activity: 'office',
  publicId: 'mixed',
  airMode: 'natural',
  airPerPerson: '18',
  airCustom: '180',
  lightingDensity: '16',
  ballast: false,
  equipment: [
    { id: 'e1', name: 'Ordinateur', power: '250', cu: '100', latent: '0' },
    { id: 'e2', name: 'Photocopieuse', power: '750', cu: '20', latent: '0' },
    { id: 'e3', name: 'Fax', power: '62', cu: '15', latent: '0' },
    { id: 'e4', name: 'Chaîne stéréo', power: '40', cu: '10', latent: '0' },
    { id: 'e5', name: 'Cafetière', power: '750', cu: '25', latent: '300' },
    { id: 'e6', name: 'Imprimante', power: '52', cu: '15', latent: '0' },
  ],
  safety: '0',
  cop: '2.6',
};

const fmt = (v: number, locale: string, d = 0) => v.toLocaleString(locale, { maximumFractionDigits: d, minimumFractionDigits: d });

export default function HeatLoadScreen() {
  const [state, setState] = usePersistedField<HeatLoadState>('heatLoad:current', GUIDE_EXAMPLE);
  const { snapshots, save, remove } = useSnapshots<HeatLoadState>('heatLoad:snapshots');
  const { lang, t } = useLanguage();
  const locale = lang === 'fr' ? 'fr-FR' : 'en-US';
  const set = <K extends keyof HeatLoadState>(key: K, value: HeatLoadState[K]) => setState((p) => ({ ...p, [key]: value }));
  const orientLabel = (o: string) => (lang === 'fr' || o === 'none' ? o : ORIENTATION_EN[o as keyof typeof ORIENTATION_EN]);

  const { all, peak } = useMemo(() => computeAllHours(state), [state]);
  const result = state.hour === 'auto' ? peak : computeLoad(state, state.hour);
  const safety = 1 + Math.min(Math.max(num(state.safety), 0), 100) / 100;
  const qtFinal = result.qt * safety;
  const kw = qtFinal / 1000;
  const btu = kw * 3412;
  const shr = result.qt > 0 ? result.qs / result.qt : 0;
  const dehum = (result.ql / 1000) * 3600 / 2500; // litres of water per hour
  const cop = num(state.cop) || 2.5;
  const pa = kw / cop;
  const cosPhi = num(state.cosPhi) || 0.8;
  const sa = pa / cosPhi;
  const maxQt = Math.max(...all.map((r) => r.qt), 1);
  const family =
    kw <= 2.5
      ? t('Window ou split', 'Window unit or split')
      : kw <= 75
        ? t('Split system ou armoire', 'Split system or packaged unit')
        : t('Armoire ou centrale (eau glacée, rooftop)', 'Packaged unit or central plant (chilled water, rooftop)');
  const city = CITY_PRESETS.find((c) => c.id === state.cityId);

  function pickCity(id: string) {
    const c = CITY_PRESETS.find((x) => x.id === id);
    if (!c) return set('cityId', 'custom');
    setState((p) => ({ ...p, cityId: c.id, table: c.table, te: String(c.te), we: String(c.we), ti: String(c.ti), wi: String(c.wi), cosPhi: String(c.cosPhi) }));
  }
  const updateSurface = (id: string, patch: Partial<Surface>) =>
    setState((p) => ({ ...p, surfaces: p.surfaces.map((s) => (s.id === id ? { ...s, ...patch } : s)) }));
  const addSurface = (kind: SurfaceKind) =>
    setState((p) => ({
      ...p,
      surfaces: [
        ...p.surfaces,
        kind === 'wall'
          ? wall('S', '10')
          : kind === 'window'
            ? { id: newId(), kind, orientation: 'S', area: '1.5', k: '5.8', alpha: '1', dt: 'ext', g: '1' }
            : { id: newId(), kind, orientation: 'none', area: '2', k: '3.94', alpha: '0.7', dt: 'ext', g: '1' },
      ],
    }));
  const removeSurface = (id: string) => setState((p) => ({ ...p, surfaces: p.surfaces.filter((s) => s.id !== id) }));
  const updateEquip = (id: string, patch: Partial<Equipment>) =>
    setState((p) => ({ ...p, equipment: p.equipment.map((e) => (e.id === id ? { ...e, ...patch } : e)) }));

  const kindLabel: Record<SurfaceKind, string> = { wall: t('Mur', 'Wall'), window: t('Vitrage', 'Glazing'), door: t('Porte', 'Door') };

  return (
    <ScreenContainer>
      <Title>{t('Bilan thermique de climatisation', 'Air-conditioning heat load')}</Title>
      <Note>
        {t(
          'Méthode simplifiée du guide IEPF (chapitre 1, onglet Climatisation). Pré-rempli avec l’exemple du bureau de Douala : vous devez retrouver 7 407 W à 13 h.',
          'Simplified method of the IEPF guide (chapter 1, Air conditioning tab). Pre-filled with the Douala office example: you should find 7,407 W at 13:00.'
        )}
      </Note>
      <ChipRow style={{ marginBottom: spacing.sm }}>
        <Chip label={t('↺ Recharger l’exemple du guide', '↺ Reload the guide example')} onPress={() => setState(GUIDE_EXAMPLE)} />
      </ChipRow>

      <SectionTitle>{t('1. Ville et conditions de base', '1. City and design conditions')}</SectionTitle>
      <ChipRow>
        {CITY_PRESETS.map((c) => (
          <Chip key={c.id} label={c.name} selected={state.cityId === c.id} onPress={() => pickCity(c.id)} />
        ))}
        <Chip label={t('Personnalisé', 'Custom')} selected={state.cityId === 'custom'} onPress={() => pickCity('custom')} />
      </ChipRow>
      {city?.note ? <Note>{lang === 'fr' ? city.note : city.noteEn}</Note> : null}
      <FieldRow>
        <LabeledField label={t('Température extérieure (°C)', 'Outdoor temperature (°C)')} value={state.te} onChangeText={(v) => setState((p) => ({ ...p, te: v, cityId: 'custom' }))} />
        <LabeledField label={t('Teneur en eau ext. (kg/kg)', 'Outdoor moisture (kg/kg)')} value={state.we} onChangeText={(v) => setState((p) => ({ ...p, we: v, cityId: 'custom' }))} />
        <LabeledField label={t('Température intérieure (°C)', 'Indoor temperature (°C)')} value={state.ti} onChangeText={(v) => setState((p) => ({ ...p, ti: v, cityId: 'custom' }))} />
        <LabeledField label={t('Teneur en eau int. (kg/kg)', 'Indoor moisture (kg/kg)')} value={state.wi} onChangeText={(v) => setState((p) => ({ ...p, wi: v, cityId: 'custom' }))} />
      </FieldRow>
      <FieldLabel>{t('Table d’ensoleillement', 'Solar table')}</FieldLabel>
      <ChipRow>
        {(Object.keys(SOLAR_TABLES) as SolarTableKey[]).map((k) => (
          <MiniChip key={k} label={lang === 'fr' ? SOLAR_TABLES[k].label : SOLAR_TABLES[k].labelEn} selected={state.table === k} onPress={() => set('table', k)} />
        ))}
      </ChipRow>
      <FieldLabel>{t('Heure de calcul', 'Calculation hour')}</FieldLabel>
      <ChipRow>
        <MiniChip label={t('Auto (pointe)', 'Auto (peak)')} selected={state.hour === 'auto'} onPress={() => set('hour', 'auto')} />
        {HOURS.map((h) => (
          <MiniChip key={h} label={`${h} h`} selected={state.hour === h} onPress={() => set('hour', h)} />
        ))}
      </ChipRow>

      <SectionTitle>{t('2. Dimensions du local', '2. Room dimensions')}</SectionTitle>
      <FieldRow>
        <LabeledField label={t('Longueur (m)', 'Length (m)')} value={state.length} onChangeText={(v) => set('length', v)} />
        <LabeledField label={t('Largeur (m)', 'Width (m)')} value={state.width} onChangeText={(v) => set('width', v)} />
        <LabeledField label={t('Hauteur (m)', 'Height (m)')} value={state.height} onChangeText={(v) => set('height', v)} />
      </FieldRow>
      <Text style={styles.hint}>
        {t('Surface', 'Area')} {fmt(result.area, locale, 1)} m² · {t('Volume', 'Volume')} {fmt(result.volume, locale, 1)} m³
      </Text>

      <SectionTitle>{t('3. Parois, vitrages et portes', '3. Walls, glazing and doors')}</SectionTitle>
      <Note>
        {t(
          'Surfaces NETTES (murs sans les ouvertures). Orientation « aucune » = paroi à l’ombre ou cloison intérieure (pas de rayonnement).',
          'NET areas (walls without openings). Orientation “none” = shaded wall or interior partition (no radiation).'
        )}
      </Note>
      {state.surfaces.map((sf) => (
        <View key={sf.id} style={styles.surfaceCard}>
          <View style={styles.surfaceHead}>
            <Text style={styles.surfaceTitle}>{kindLabel[sf.kind]}</Text>
            <TouchableOpacity onPress={() => removeSurface(sf.id)} accessibilityRole="button">
              <Text style={styles.remove}>{t('Supprimer', 'Remove')}</Text>
            </TouchableOpacity>
          </View>
          <ChipRow>
            <MiniChip label={t('aucune', 'none')} selected={sf.orientation === 'none'} onPress={() => updateSurface(sf.id, { orientation: 'none' })} />
            {ORIENTATIONS.map((o) => (
              <MiniChip key={o} label={orientLabel(o)} selected={sf.orientation === o} onPress={() => updateSurface(sf.id, { orientation: o })} />
            ))}
          </ChipRow>
          <FieldRow>
            <LabeledField label={t('Surface (m²)', 'Area (m²)')} value={sf.area} onChangeText={(v) => updateSurface(sf.id, { area: v })} />
            <LabeledField label={t('Coef. k (W/m².°C)', 'k value (W/m².°C)')} value={sf.k} onChangeText={(v) => updateSurface(sf.id, { k: v })} />
            <LabeledField label={sf.kind === 'window' ? t('Absorption (vitrage)', 'Absorption (glazing)') : t('Absorption (couleur)', 'Absorption (colour)')} value={sf.alpha} onChangeText={(v) => updateSurface(sf.id, { alpha: v })} />
          </FieldRow>
          {sf.kind === 'window' ? (
            <ChipRow style={styles.chipGap}>
              {PROTECTIONS.map((p) => (
                <MiniChip key={p.value} label={`${lang === 'fr' ? p.label : p.labelEn} (${p.value})`} selected={num(sf.g) === p.value} onPress={() => updateSurface(sf.id, { g: String(p.value) })} />
              ))}
            </ChipRow>
          ) : (
            <>
              <ChipRow style={styles.chipGap}>
                {ALPHAS.map((a) => (
                  <MiniChip key={a.value} label={`${lang === 'fr' ? a.label : a.labelEn} (${a.value})`} selected={num(sf.alpha) === a.value} onPress={() => updateSurface(sf.id, { alpha: String(a.value) })} />
                ))}
              </ChipRow>
              <ChipRow style={styles.chipGap}>
                {DT_TYPES.map((d) => (
                  <MiniChip key={d.id} label={lang === 'fr' ? d.label : d.labelEn} selected={sf.dt === d.id} onPress={() => updateSurface(sf.id, { dt: d.id })} />
                ))}
              </ChipRow>
            </>
          )}
        </View>
      ))}
      <ChipRow>
        <Chip label={t('+ Mur', '+ Wall')} onPress={() => addSurface('wall')} />
        <Chip label={t('+ Vitrage', '+ Glazing')} onPress={() => addSurface('window')} />
        <Chip label={t('+ Porte', '+ Door')} onPress={() => addSurface('door')} />
      </ChipRow>
      <Note>
        {t(
          'Repères k (tableau 1.9) : parpaing 20 cm enduit 2,09 · parpaing 10 cm 2,37 · porte bois 3,94 · vitrage simple bois 5,0 / métal 5,8 · double vitrage 3,3–4. α vitrage : simple 1, double 0,9, triple 0,8.',
          'k guide values (table 1.9): rendered 20 cm block 2.09 · 10 cm block 2.37 · wooden door 3.94 · single glazing wood 5.0 / metal 5.8 · double glazing 3.3–4. Glazing α: single 1, double 0.9, triple 0.8.'
        )}
      </Note>

      <SectionTitle>{t('4. Plafond / toiture et plancher', '4. Ceiling / roof and floor')}</SectionTitle>
      <ChipRow>
        {(
          [
            ['noncond', t('Local non climatisé au-dessus', 'Non-conditioned room above')],
            ['atticVent', t('Comble ventilé', 'Ventilated attic')],
            ['atticClosed', t('Comble non ventilé', 'Unventilated attic')],
            ['roof', t('Toiture au soleil', 'Sunlit roof')],
            ['conditioned', t('Local climatisé au-dessus', 'Conditioned room above')],
          ] as [CeilingType, string][]
        ).map(([id, label]) => (
          <MiniChip key={id} label={label} selected={state.ceilingType === id} onPress={() => set('ceilingType', id)} />
        ))}
      </ChipRow>
      <FieldRow>
        <LabeledField label={t('k plafond / toiture', 'k ceiling / roof')} value={state.ceilingK} onChangeText={(v) => set('ceilingK', v)} />
        {state.ceilingType === 'roof' ? <LabeledField label={t('Absorption toiture', 'Roof absorption')} value={state.ceilingAlpha} onChangeText={(v) => set('ceilingAlpha', v)} /> : null}
        <LabeledField label={t('k plancher', 'k floor')} value={state.floorK} onChangeText={(v) => set('floorK', v)} />
      </FieldRow>
      <ChipRow style={styles.chipGap}>
        {(
          [
            ['ground', t('Plancher sur terre-plein (20 − θi)', 'Slab on grade (20 − θi)')],
            ['noncond', t('Sur local non climatisé', 'Over non-conditioned room')],
            ['conditioned', t('Sur local climatisé', 'Over conditioned room')],
          ] as [FloorType, string][]
        ).map(([id, label]) => (
          <MiniChip key={id} label={label} selected={state.floorType === id} onPress={() => set('floorType', id)} />
        ))}
      </ChipRow>
      {state.ceilingType === 'roof' && num(state.ceilingK) > 4 ? (
        <Note>
          {t(
            'k > 4 : le tableau 1.12 s’arrête à k = 4 ; le facteur F est extrapolé (0,05 × k). Une tôle non isolée est un très mauvais choix sous les tropiques.',
            'k > 4: table 1.12 stops at k = 4; factor F is extrapolated (0.05 × k). An uninsulated metal roof is a very poor choice in the tropics.'
          )}
        </Note>
      ) : null}

      <SectionTitle>{t('5. Occupants et air neuf', '5. Occupants and fresh air')}</SectionTitle>
      <FieldRow>
        <LabeledField label={t('Nombre d’occupants', 'Number of occupants')} value={state.people} onChangeText={(v) => set('people', v)} />
      </FieldRow>
      <Text style={styles.hint}>{t('Repère : bureaux 0,10 pers/m² → ', 'Guide: offices 0.10 pers/m² → ')}{fmt(result.area * 0.1, locale, 1)}</Text>
      <ChipRow style={styles.chipGap}>
        {ACTIVITIES.map((a) => (
          <MiniChip key={a.id} label={lang === 'fr' ? a.label : a.labelEn} selected={state.activity === a.id} onPress={() => set('activity', a.id)} />
        ))}
      </ChipRow>
      <ChipRow style={styles.chipGap}>
        {PUBLIC_FACTORS.map((p) => (
          <MiniChip key={p.id} label={lang === 'fr' ? p.label : p.labelEn} selected={state.publicId === p.id} onPress={() => set('publicId', p.id)} />
        ))}
      </ChipRow>
      <FieldLabel>{t('Renouvellement d’air', 'Air renewal')}</FieldLabel>
      <ChipRow>
        <MiniChip label={t('Naturel : 1 volume/h', 'Natural: 1 volume/h')} selected={state.airMode === 'natural'} onPress={() => set('airMode', 'natural')} />
        <MiniChip label={t('Mécanique : m³/h par personne', 'Mechanical: m³/h per person')} selected={state.airMode === 'mechanical'} onPress={() => set('airMode', 'mechanical')} />
        <MiniChip label={t('Débit imposé', 'Fixed flow')} selected={state.airMode === 'custom'} onPress={() => set('airMode', 'custom')} />
      </ChipRow>
      {state.airMode === 'mechanical' ? (
        <LabeledField label={t('m³/h par personne (bureaux 18, réunion 18–30)', 'm³/h per person (offices 18, meeting 18–30)')} value={state.airPerPerson} onChangeText={(v) => set('airPerPerson', v)} />
      ) : state.airMode === 'custom' ? (
        <LabeledField label={t('Débit d’air neuf (m³/h)', 'Fresh-air flow (m³/h)')} value={state.airCustom} onChangeText={(v) => set('airCustom', v)} />
      ) : null}

      <SectionTitle>{t('6. Éclairage et appareils', '6. Lighting and appliances')}</SectionTitle>
      <FieldRow>
        <LabeledField label={t('Éclairage (W/m²)', 'Lighting (W/m²)')} value={state.lightingDensity} onChangeText={(v) => set('lightingDensity', v)} />
      </FieldRow>
      <ChipRow style={styles.chipGap}>
        {LIGHTING_DENSITIES.map((l) => (
          <MiniChip key={l.id} label={`${lang === 'fr' ? l.label : l.labelEn} — fluo ${l.fluo}`} selected={num(state.lightingDensity) === l.fluo} onPress={() => set('lightingDensity', String(l.fluo))} />
        ))}
      </ChipRow>
      <ChipRow style={styles.chipGap}>
        <MiniChip label={t('Fluorescent : × 1,25 (ballast)', 'Fluorescent: × 1.25 (ballast)')} selected={state.ballast} onPress={() => set('ballast', true)} />
        <MiniChip label={t('Sans majoration (comme l’exemple du guide)', 'No factor (as in the guide example)')} selected={!state.ballast} onPress={() => set('ballast', false)} />
      </ChipRow>
      <FieldLabel>{t('Appareils (puissance, coefficient d’utilisation, part latente)', 'Appliances (power, usage factor, latent part)')}</FieldLabel>
      {state.equipment.map((e) => (
        <View key={e.id} style={styles.equipRow}>
          <FieldRow>
            <LabeledField label={t('Appareil', 'Appliance')} keyboardType="default" value={e.name} onChangeText={(v) => updateEquip(e.id, { name: v })} />
            <LabeledField label={t('Puissance (W)', 'Power (W)')} value={e.power} onChangeText={(v) => updateEquip(e.id, { power: v })} />
            <LabeledField label={t('Utilisation (%)', 'Usage (%)')} value={e.cu} onChangeText={(v) => updateEquip(e.id, { cu: v })} />
            <LabeledField label={t('Latent (W)', 'Latent (W)')} value={e.latent} onChangeText={(v) => updateEquip(e.id, { latent: v })} />
          </FieldRow>
          <TouchableOpacity onPress={() => setState((p) => ({ ...p, equipment: p.equipment.filter((x) => x.id !== e.id) }))}>
            <Text style={styles.remove}>{t('Supprimer', 'Remove')}</Text>
          </TouchableOpacity>
        </View>
      ))}
      <ChipRow>
        <Chip
          label={t('+ Appareil', '+ Appliance')}
          onPress={() => setState((p) => ({ ...p, equipment: [...p.equipment, { id: newId(), name: t('Ordinateur', 'Computer'), power: '250', cu: '100', latent: '0' }] }))}
        />
      </ChipRow>

      <SectionTitle>{t('7. Résultat', '7. Result')}</SectionTitle>
      <Card>
        <Text style={styles.hint}>
          {t('Charge totale heure par heure', 'Total load hour by hour')} ({lang === 'fr' ? SOLAR_TABLES[state.table].label : SOLAR_TABLES[state.table].labelEn})
        </Text>
        <View style={styles.bars}>
          {all.map((r) => (
            <TouchableOpacity key={r.hour} style={styles.barCol} onPress={() => set('hour', r.hour)}>
              <Text style={styles.barValue}>{fmt(r.qt / 1000, locale, 1)}</Text>
              <View
                style={[
                  styles.bar,
                  { height: 8 + (r.qt / maxQt) * 80 },
                  r.hour === peak.hour && styles.barPeak,
                  r.hour === result.hour && styles.barSelected,
                ]}
              />
              <Text style={styles.barHour}>{r.hour}h</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.hint}>
          {t('Pointe à', 'Peak at')} {peak.hour} h ({fmt(peak.qt, locale)} W) · {t('calcul affiché à', 'shown at')} {result.hour} h
        </Text>
        <Divider />
        <View style={styles.tableHead}>
          <Text style={[styles.cellLabel, styles.headText]}>{t('Poste', 'Item')}</Text>
          <Text style={[styles.cell, styles.headText]}>{t('Sensible (W)', 'Sensible (W)')}</Text>
          <Text style={[styles.cell, styles.headText]}>{t('Latent (W)', 'Latent (W)')}</Text>
        </View>
        {result.lines.map((l) => (
          <View key={l.key} style={styles.tableRow}>
            <Text style={styles.cellLabel}>{lang === 'fr' ? l.label : l.labelEn}</Text>
            <Text style={styles.cell}>{fmt(l.sensible, locale)}</Text>
            <Text style={styles.cell}>{l.latent ? fmt(l.latent, locale) : '—'}</Text>
          </View>
        ))}
        <View style={[styles.tableRow, styles.totalRow]}>
          <Text style={[styles.cellLabel, styles.headText]}>{t('Total', 'Total')}</Text>
          <Text style={[styles.cell, styles.headText]}>{fmt(result.qs, locale)}</Text>
          <Text style={[styles.cell, styles.headText]}>{fmt(result.ql, locale)}</Text>
        </View>
        <Divider />
        <FieldRow>
          <LabeledField label={t('Coefficient de sécurité (%) — 0 à 5', 'Safety factor (%) — 0 to 5')} value={state.safety} onChangeText={(v) => set('safety', v)} />
          <LabeledField label={t('COP de l’appareil', 'Unit COP')} value={state.cop} onChangeText={(v) => set('cop', v)} />
          <LabeledField label="cos φ" value={state.cosPhi} onChangeText={(v) => set('cosPhi', v)} />
        </FieldRow>
        {num(state.safety) > 5 ? (
          <Formula>{t('⚠️ Le guide limite le coefficient de sécurité à 5 % : au-delà, on surdimensionne.', '⚠️ The guide limits the safety factor to 5 %: beyond that, you oversize.')}</Formula>
        ) : null}
        <ResultRow label={t('Puissance frigorifique QT', 'Cooling capacity QT')} value={`${fmt(qtFinal, locale)} W`} variant="big" />
        <ResultRow label={t('Soit', 'That is')} value={`${fmt(kw, locale, 2)} kW · ${fmt(btu, locale)} BTU/h`} variant="accent" />
        <ResultRow label={t('Facteur de chaleur sensible', 'Sensible heat ratio')} value={fmt(shr, locale, 2)} />
        <ResultRow label={t('Déshumidification (charge latente)', 'Dehumidification (latent load)')} value={`${fmt(result.ql / 1000, locale, 2)} kW ≈ ${fmt(dehum, locale, 2)} l/h`} />
        <ResultRow label={t('Famille d’équipement conseillée', 'Recommended equipment family')} value={family} />
        <ResultRow label={t('Puissance électrique absorbée (QT / COP)', 'Electrical power input (QT / COP)')} value={`${fmt(pa, locale, 2)} kW`} />
        <ResultRow label={t('Puissance apparente à souscrire (Ks = Ku = 1)', 'Apparent power to subscribe (Ks = Ku = 1)')} value={`${fmt(sa, locale, 2)} kVA`} variant="accent" />
        {shr < 0.75 ? (
          <Note>
            {t(
              'Facteur de chaleur sensible bas : la charge latente est forte (climat humide, air neuf). Vérifiez que l’appareil choisi déshumidifie suffisamment (SHR catalogue ≤ celui calculé).',
              'Low sensible heat ratio: the latent load is high (humid climate, fresh air). Check the chosen unit dehumidifies enough (catalogue SHR ≤ calculated).'
            )}
          </Note>
        ) : null}
        <Note>
          {t(
            'Formules : k·S·Δθ ; α·F·S·Rm (F = 0,05·k) ; α·g·S·Rv ; air neuf qv·Δθ·0,33 et qv·Δω·0,84·1000 ; occupants tableau 1.16 ; éclairage P (×1,25 fluo). Limites du guide : voir les avertissements ⚠️ des leçons « apports de chaleur » et « exemple de Douala ».',
            'Formulas: k·S·Δθ; α·F·S·Rm (F = 0.05·k); α·g·S·Rv; fresh air qv·Δθ·0.33 and qv·Δω·0.84·1000; occupants table 1.16; lighting P (×1.25 fluorescent). Guide limits: see the ⚠️ warnings in the “heat gains” and “Douala example” lessons.'
          )}
        </Note>
      </Card>

      <ExportButton
        title={t('Bilan thermique de climatisation', 'Air-conditioning heat load')}
        subtitle={`${city ? city.name : t('Personnalisé', 'Custom')} · ${result.hour} h`}
        sections={[
          {
            heading: t('Conditions', 'Conditions'),
            rows: [
              { label: 'θe / ωe', value: `${state.te} °C / ${state.we}` },
              { label: 'θi / ωi', value: `${state.ti} °C / ${state.wi}` },
              { label: t('Local', 'Room'), value: `${state.length} × ${state.width} × ${state.height} m` },
            ],
          },
          {
            heading: t('Apports (W)', 'Gains (W)'),
            rows: result.lines.map((l) => ({ label: lang === 'fr' ? l.label : l.labelEn, value: `S ${fmt(l.sensible, locale)} · L ${fmt(l.latent, locale)}` })),
          },
          {
            heading: t('Résultat', 'Result'),
            rows: [
              { label: 'QS / QL', value: `${fmt(result.qs, locale)} / ${fmt(result.ql, locale)} W` },
              { label: 'QT', value: `${fmt(qtFinal, locale)} W (${fmt(btu, locale)} BTU/h)` },
              { label: t('Déshumidification', 'Dehumidification'), value: `${fmt(dehum, locale, 2)} l/h` },
              { label: t('Puissance à souscrire', 'Power to subscribe'), value: `${fmt(sa, locale, 2)} kVA` },
            ],
          },
        ]}
      />

      <SavedCalculations snapshots={snapshots} onSave={(name) => save(name, state)} onLoad={(data) => setState(data)} onRemove={remove} />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  hint: { fontSize: 12.5, color: colors.textMuted, marginBottom: spacing.sm },
  chipGap: { marginTop: spacing.sm },
  surfaceCard: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    backgroundColor: colors.surface,
    padding: spacing.md,
    marginBottom: spacing.sm,
    gap: spacing.sm,
  },
  surfaceHead: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  surfaceTitle: { fontSize: 14, fontWeight: '800', color: colors.accent },
  remove: { fontSize: 12.5, color: '#dc2626', fontWeight: '700', marginTop: 4 },
  equipRow: { borderBottomWidth: 1, borderBottomColor: colors.border, paddingBottom: spacing.sm, marginBottom: spacing.sm },
  bars: { flexDirection: 'row', alignItems: 'flex-end', gap: 4, height: 120, marginBottom: spacing.xs },
  barCol: { flex: 1, alignItems: 'center', justifyContent: 'flex-end' },
  bar: { width: '70%', backgroundColor: colors.accentSoft, borderRadius: 4, borderWidth: 1, borderColor: '#c7d2fe' },
  barPeak: { backgroundColor: colors.highlight, borderColor: colors.highlight },
  barSelected: { borderColor: colors.accent, borderWidth: 2 },
  barValue: { fontSize: 9.5, color: colors.textMuted, marginBottom: 2 },
  barHour: { fontSize: 10.5, color: colors.text, fontWeight: '700', marginTop: 2 },
  tableHead: { flexDirection: 'row', paddingVertical: 6, backgroundColor: colors.accentSoft, borderRadius: radius.sm, paddingHorizontal: 6 },
  tableRow: { flexDirection: 'row', paddingVertical: 6, paddingHorizontal: 6, borderBottomWidth: 1, borderBottomColor: colors.border },
  totalRow: { backgroundColor: colors.highlightSoft },
  cellLabel: { flex: 2, fontSize: 13, color: colors.text },
  cell: { flex: 1, fontSize: 13, color: colors.text, textAlign: 'right' },
  headText: { fontWeight: '800', color: colors.accent },
});
