import React from 'react';
import { Circle, G, Line, Path, Polygon, Rect } from 'react-native-svg';
import type { Lang } from '../../lib/language';
import { Arrow, Label, P, SceneFrame, Tag } from './kit';

type SceneProps = { lang: Lang };
const pick = (lang: Lang) => (fr: string, en: string) => (lang === 'fr' ? fr : en);

const COLD = '#4c8fe0';
const HOT = '#e4572e';
const OK = '#059669';

// ---------------------------------------------------------------------------
// The four projects of the course

function HouseIcon({ x, y }: { x: number; y: number }) {
  return (
    <G transform={`translate(${x},${y})`}>
      <Polygon points="-30,0 0,-24 30,0" fill={HOT} />
      <Rect x={-24} y={0} width={48} height={30} fill={P.paper} stroke={P.navy} strokeWidth={1.5} />
      <Rect x={-6} y={12} width={12} height={18} fill={P.brown} />
      <Rect x={-19} y={7} width={9} height={9} fill={P.sky} />
      <Rect x={10} y={7} width={9} height={9} fill={P.sky} />
    </G>
  );
}

function BlockIcon({ x, y }: { x: number; y: number }) {
  return (
    <G transform={`translate(${x},${y})`}>
      <Rect x={-22} y={-30} width={44} height={60} fill={P.paper} stroke={P.navy} strokeWidth={1.5} />
      {[0, 1, 2, 3, 4].map((r) =>
        [0, 1, 2].map((c) => <Rect key={`${r}-${c}`} x={-17 + c * 13} y={-25 + r * 11} width={8} height={7} fill={P.sky} />),
      )}
      <Rect x={-6} y={24} width={12} height={6} fill={P.brown} />
    </G>
  );
}

function FactoryIcon({ x, y }: { x: number; y: number }) {
  return (
    <G transform={`translate(${x},${y})`}>
      <Path d="M -32 30 L -32 0 L -20 -10 L -20 0 L -8 -10 L -8 0 L 4 -10 L 4 0 L 16 -10 L 16 30 Z" fill={P.concrete} stroke={P.navy} strokeWidth={1.5} />
      <Rect x={18} y={-26} width={8} height={56} fill={P.steel} />
      <Circle cx={24} cy={-32} r={5} fill={P.greyLight} />
      <Circle cx={30} cy={-40} r={6} fill={P.greyLight} />
      <Rect x={-26} y={10} width={10} height={8} fill={P.sky} />
      <Rect x={-10} y={10} width={10} height={8} fill={P.sky} />
      <Rect x={28} y={8} width={12} height={22} rx={5} fill={P.orange} />
    </G>
  );
}

function ClinicIcon({ x, y }: { x: number; y: number }) {
  return (
    <G transform={`translate(${x},${y})`}>
      <Rect x={-32} y={-14} width={64} height={44} fill={P.paper} stroke={P.navy} strokeWidth={1.5} />
      <Rect x={-10} y={-30} width={20} height={20} rx={3} fill={P.white} stroke={P.red} strokeWidth={1.5} />
      <Rect x={-2.5} y={-27} width={5} height={14} fill={P.red} />
      <Rect x={-7} y={-22.5} width={14} height={5} fill={P.red} />
      {[-24, -12, 6, 18].map((wx) => (
        <Rect key={wx} x={wx} y={-4} width={8} height={8} fill={P.sky} />
      ))}
      <Rect x={-7} y={14} width={14} height={16} fill={P.sky} stroke={P.navy} strokeWidth={1} />
    </G>
  );
}

/** Hero of the story course: the engineer's four projects. */
export function StoryCast({ lang }: SceneProps) {
  const L = pick(lang);
  const cards = [
    { x: 14, y: 46, icon: <HouseIcon x={50} y={62} />, n: '1', title: L('Villa Mensah', 'Mensah villa'), who: 'Koffi & Esther', what: L('une famille', 'a family') },
    { x: 206, y: 46, icon: <BlockIcon x={46} y={66} />, n: '2', title: L('Les Palmiers', 'Les Palmiers'), who: 'Fatou Sow', what: L('16 logements', '16 flats') },
    { x: 14, y: 170, icon: <FactoryIcon x={46} y={68} />, n: '3', title: L('Usine Tropica', 'Tropica plant'), who: 'Ibrahim Traoré', what: L('jus de fruits', 'fruit juice') },
    { x: 206, y: 170, icon: <ClinicIcon x={46} y={64} />, n: '4', title: L('Clinique Espoir', 'Espoir Clinic'), who: 'Dr Aïcha Bello', what: L('30 lits + bloc', '30 beds + theatre') },
  ];
  return (
    <SceneFrame>
      <Tag x={200} y={24} w={290} text={L('Awa Diallo, ingénieure électricienne : 4 projets', 'Awa Diallo, electrical engineer: 4 projects')} />
      {cards.map((c) => (
        <G key={c.n} transform={`translate(${c.x},${c.y})`}>
          <Rect x={0} y={0} width={180} height={114} rx={12} fill={P.white} stroke={P.line} />
          {c.icon}
          <Circle cx={18} cy={18} r={11} fill={P.green} />
          <Label x={18} y={22} text={c.n} size={11} color={P.white} />
          <Label x={96} y={46} text={c.title} size={10.5} anchor="start" />
          <Label x={96} y={64} text={c.who} size={10} color={P.greenMid} anchor="start" />
          <Label x={96} y={80} text={c.what} size={9.5} color={P.inkSoft} weight="600" anchor="start" />
        </G>
      ))}
      <Label x={200} y={296} text={L('du plus simple au plus exigeant', 'from the simplest to the most demanding')} size={9.5} color={P.inkSoft} weight="600" />
    </SceneFrame>
  );
}

// ---------------------------------------------------------------------------
// Villa floor plan

type Room = { id: string; x: number; y: number; w: number; h: number; fr: string; en: string };
const ROOMS: Room[] = [
  { id: 'living', x: 30, y: 46, w: 120, h: 124, fr: 'Séjour', en: 'Living room' },
  { id: 'kitchen', x: 150, y: 46, w: 80, h: 74, fr: 'Cuisine', en: 'Kitchen' },
  { id: 'bath', x: 230, y: 46, w: 60, h: 74, fr: 'SdB', en: 'Bath' },
  { id: 'hall', x: 150, y: 120, w: 140, h: 30, fr: 'Couloir', en: 'Corridor' },
  { id: 'bed1', x: 30, y: 170, w: 120, h: 86, fr: 'Ch. 1 (parents)', en: 'Bed 1 (parents)' },
  { id: 'bed2', x: 150, y: 150, w: 70, h: 106, fr: 'Ch. 2', en: 'Bed 2' },
  { id: 'bed3', x: 220, y: 150, w: 70, h: 106, fr: 'Ch. 3', en: 'Bed 3' },
];
const center = (r: Room) => ({ cx: r.x + r.w / 2, cy: r.y + r.h / 2 });
const DB = { x: 136, y: 160 };

function LightPoint({ x, y }: { x: number; y: number }) {
  return (
    <G>
      <Circle cx={x} cy={y} r={6} fill={P.white} stroke={P.orange} strokeWidth={2} />
      <Line x1={x - 4} y1={y - 4} x2={x + 4} y2={y + 4} stroke={P.orange} strokeWidth={1.6} />
      <Line x1={x - 4} y1={y + 4} x2={x + 4} y2={y - 4} stroke={P.orange} strokeWidth={1.6} />
    </G>
  );
}

function Socket({ x, y, dir = 'up' }: { x: number; y: number; dir?: 'up' | 'down' | 'left' | 'right' }) {
  const rot = { up: 0, right: 90, down: 180, left: 270 }[dir];
  return (
    <G transform={`translate(${x},${y}) rotate(${rot})`}>
      <Path d="M -5 0 A 5 5 0 0 1 5 0 Z" fill={P.greenMid} />
      <Line x1={0} y1={0} x2={0} y2={4} stroke={P.greenMid} strokeWidth={1.6} />
    </G>
  );
}

function AcUnit({ x, y, w = 24 }: { x: number; y: number; w?: number }) {
  return <Rect x={x - w / 2} y={y - 4} width={w} height={8} rx={3} fill={COLD} />;
}

/** Plan of the Mensah villa; `focus` overlays lighting points, sockets, AC units or circuits. */
export function VillaPlan({ lang, focus = 'rooms' }: SceneProps & { focus?: string }) {
  const L = pick(lang);
  const titles: Record<string, string> = {
    rooms: L('Plan de la villa (plain-pied, 160 m²)', 'Villa plan (single storey, 160 m²)'),
    lighting: L('Points lumineux et interrupteurs', 'Lighting points and switches'),
    sockets: L('Prises de courant', 'Socket outlets'),
    ac: L('Climatiseurs (unités intérieures)', 'Air conditioners (indoor units)'),
    circuits: L('Du tableau vers chaque pièce', 'From the board to each room'),
  };
  return (
    <SceneFrame>
      <Tag x={165} y={22} w={250} text={titles[focus] ?? titles.rooms} />
      {/* garden */}
      <Rect x={296} y={46} width={96} height={210} rx={8} fill="#e6f4ea" />
      <Label x={344} y={62} text={L('Jardin', 'Garden')} size={9.5} color={OK} />
      {/* rooms */}
      {ROOMS.map((r) => (
        <Rect key={r.id} x={r.x} y={r.y} width={r.w} height={r.h} fill={P.paper} stroke={P.navy} strokeWidth={2} />
      ))}
      {ROOMS.map((r) => {
        const { cx, cy } = center(r);
        return <Label key={`l-${r.id}`} x={cx} y={r.id === 'hall' ? cy + 4 : cy + 22} text={L(r.fr, r.en)} size={9} color={P.inkSoft} weight="600" />;
      })}
      {/* entrance */}
      <Rect x={60} y={252} width={30} height={8} fill={P.white} />
      <Label x={75} y={270} text={L('entrée', 'entrance')} size={8.5} color={P.inkSoft} weight="600" />
      {/* distribution board */}
      <Rect x={DB.x - 8} y={DB.y - 10} width={16} height={20} rx={2} fill={focus === 'circuits' ? P.orange : P.navy} />
      <Label x={DB.x - 12} y={DB.y + 4} text={L('Tableau', 'Board')} size={8.5} anchor="end" color={P.navy} />
      {/* garden pump */}
      <Circle cx={362} cy={230} r={11} fill={P.white} stroke={COLD} strokeWidth={2} />
      <Label x={362} y={234} text="M" size={10} color={COLD} />
      <Label x={344} y={212} text={L('Pompe à 80 m', 'Pump 80 m away')} size={8.5} color={COLD} />

      {focus === 'lighting' &&
        ROOMS.map((r) => {
          const { cx, cy } = center(r);
          // points per room, as in the lesson: living 6, kitchen 2, corridor 2, bath 1, bedrooms 1
          const pts: [number, number][] =
            r.id === 'living'
              ? [-32, 0, 32].flatMap((dx) => [[cx + dx, cy - 32], [cx + dx, cy - 4]] as [number, number][])
              : r.id === 'kitchen'
                ? [[cx - 18, cy - 8], [cx + 18, cy - 8]]
                : r.id === 'hall'
                  ? [[cx - 48, cy], [cx + 48, cy]]
                  : [[cx, cy - 6]];
          return (
            <G key={`lp-${r.id}`}>
              {pts.map(([x, y]) => (
                <LightPoint key={`${x}-${y}`} x={x} y={y} />
              ))}
            </G>
          );
        })}
      {focus === 'lighting' && (
        <G>
          {[
            [146, 176],
            [154, 160],
            [224, 160],
            [154, 112],
            [234, 112],
            [60, 248],
          ].map(([x, y]) => (
            <Rect key={`${x}-${y}`} x={x - 3} y={y - 3} width={6} height={6} fill={P.green} />
          ))}
          <Rect x={150} y={279} width={6} height={6} fill={P.green} />
          <Label x={160} y={286} text={L('= interrupteur', '= switch')} size={8.5} color={P.green} anchor="start" />
        </G>
      )}
      {focus === 'sockets' && (
        <G>
          {[
            [40, 80, 'right'],
            [40, 140, 'right'],
            [100, 50, 'down'],
            [62, 164, 'up'],
            [170, 50, 'down'],
            [200, 50, 'down'],
            [225, 90, 'left'],
            [40, 200, 'right'],
            [140, 230, 'left'],
            [160, 240, 'right'],
            [210, 240, 'left'],
            [230, 240, 'right'],
            [280, 240, 'left'],
            [282, 70, 'left'],
          ].map(([x, y, d]) => (
            <Socket key={`${x}-${y}`} x={x as number} y={y as number} dir={d as 'up'} />
          ))}
        </G>
      )}
      {focus === 'ac' && (
        <G>
          <AcUnit x={90} y={52} w={34} />
          <Label x={90} y={72} text="18 000 BTU" size={8.5} color={COLD} />
          <AcUnit x={90} y={176} />
          <AcUnit x={185} y={156} />
          <AcUnit x={255} y={156} />
          {[90, 185, 255].map((x) => (
            <Label key={x} x={x} y={196} text="9 000" size={8.5} color={COLD} />
          ))}
        </G>
      )}
      {focus === 'circuits' && (
        <G>
          {ROOMS.map((r, i) => {
            const { cx, cy } = center(r);
            const colors = [P.orange, P.greenMid, COLD, OK];
            return <Path key={`c-${r.id}`} d={`M ${DB.x} ${DB.y} L ${cx} ${DB.y} L ${cx} ${cy}`} stroke={colors[i % 4]} strokeWidth={2.2} fill="none" strokeDasharray={i % 2 ? '5 3' : undefined} />;
          })}
          <Path d={`M ${DB.x} ${DB.y + 10} L ${DB.x} 262 L 362 262 L 362 241`} stroke={COLD} strokeWidth={2.4} fill="none" strokeDasharray="7 4" />
        </G>
      )}
    </SceneFrame>
  );
}

// ---------------------------------------------------------------------------
// Villa distribution board

/** Residential board: main breaker, then four 30 mA RCDs each feeding a row of breakers. */
export function VillaBoard({ lang }: SceneProps) {
  const L = pick(lang);
  const rows: { rcd: string; mcbs: [string, string][] }[] = [
    { rcd: L('30 mA · AC', '30 mA · AC'), mcbs: [[L('Écl. séjour', 'Light liv.'), '10 A'], [L('Prises séj.', 'Sock. liv.'), '20 A'], [L('Prises ch.', 'Sock. bed'), '20 A'], [L('Écl. ext.', 'Light out.'), '10 A']] },
    { rcd: L('30 mA · A', '30 mA · A'), mcbs: [[L('Four', 'Oven'), '32 A'], [L('Lave-linge', 'Washer'), '20 A'], [L('Prises cuis.', 'Sock. kit.'), '20 A']] },
    { rcd: L('30 mA · AC', '30 mA · AC'), mcbs: [[L('Écl. pièces', 'Light rooms'), '10 A'], [L('Chauffe-eau', 'Water htr'), '16 A'], [L('Pompe', 'Pump'), '16 A']] },
    { rcd: L('30 mA · AC', '30 mA · AC'), mcbs: [[L('Clim séj.', 'AC liv.'), '16 A'], [L('Clim ch.1', 'AC bed1'), '16 A'], [L('Clim ch.2', 'AC bed2'), '16 A'], [L('Clim ch.3', 'AC bed3'), '16 A']] },
  ];
  return (
    <SceneFrame>
      <Rect x={22} y={14} width={356} height={272} rx={10} fill={P.white} stroke={P.navy} strokeWidth={2} />
      <Rect x={40} y={26} width={120} height={34} rx={5} fill={P.navy} />
      <Label x={100} y={40} text={L('Disjoncteur général', 'Main breaker')} size={9.5} color={P.white} />
      <Label x={100} y={53} text={L('4P · 500 mA', '4P · 500 mA')} size={9} color={P.yellow} />
      <Label x={176} y={40} text={L('coupe tout · protège contre', 'cuts everything · protects')} size={8.5} color={P.inkSoft} anchor="start" weight="600" />
      <Label x={176} y={53} text={L('les fuites vers la terre', 'against earth leakage')} size={8.5} color={P.inkSoft} anchor="start" weight="600" />
      {rows.map((row, ri) => {
        const y = 74 + ri * 52;
        return (
          <G key={ri}>
            <Line x1={36} y1={y + 44} x2={364} y2={y + 44} stroke={P.line} />
            <Rect x={36} y={y} width={58} height={38} rx={4} fill={COLD} />
            <Label x={65} y={y + 15} text={L('Diff. 40 A', 'RCD 40 A')} size={8.5} color={P.white} />
            <Label x={65} y={y + 29} text={row.rcd} size={8.5} color={P.white} />
            {row.mcbs.map(([name, rating], mi) => (
              <G key={mi}>
                <Rect x={102 + mi * 66} y={y} width={60} height={38} rx={4} fill={P.mint} stroke={P.greenLight} />
                <Label x={132 + mi * 66} y={y + 15} text={name} size={8.5} color={P.ink} />
                <Label x={132 + mi * 66} y={y + 30} text={rating} size={10} color={P.green} />
              </G>
            ))}
          </G>
        );
      })}
    </SceneFrame>
  );
}

// ---------------------------------------------------------------------------
// TT earthing system and RCD

function EarthSymbol({ x, y, color = P.green }: { x: number; y: number; color?: string }) {
  return (
    <G>
      <Line x1={x - 10} y1={y} x2={x + 10} y2={y} stroke={color} strokeWidth={2} />
      <Line x1={x - 6} y1={y + 4} x2={x + 6} y2={y + 4} stroke={color} strokeWidth={2} />
      <Line x1={x - 2} y1={y + 8} x2={x + 2} y2={y + 8} stroke={color} strokeWidth={2} />
    </G>
  );
}

/** TT system: a fault current returns through the soil; the RCD sees the imbalance and trips. */
export function EarthingTT({ lang }: SceneProps) {
  const L = pick(lang);
  return (
    <SceneFrame>
      <Rect x={0} y={238} width={400} height={62} fill="#e8dcc8" />
      <Label x={200} y={292} text={L('le sol ramène le courant de défaut au transformateur', 'the soil carries the fault current back to the transformer')} size={9} color={P.brown} />
      {/* utility transformer */}
      <Circle cx={44} cy={96} r={16} fill="none" stroke={P.navy} strokeWidth={2.2} />
      <Circle cx={44} cy={118} r={16} fill="none" stroke={P.navy} strokeWidth={2.2} />
      <Label x={44} y={66} text={L('Réseau', 'Utility')} size={9.5} />
      <Line x1={60} y1={86} x2={200} y2={86} stroke={HOT} strokeWidth={2.4} />
      <Label x={130} y={80} text={L('phase', 'line')} size={9} color={HOT} />
      <Line x1={60} y1={128} x2={200} y2={128} stroke={COLD} strokeWidth={2.4} />
      <Label x={130} y={142} text={L('neutre', 'neutral')} size={9} color={COLD} />
      <Line x1={44} y1={134} x2={44} y2={232} stroke={P.green} strokeWidth={2} />
      <EarthSymbol x={44} y={232} />
      <Label x={64} y={226} text="R_B" size={9} color={P.green} anchor="start" />
      {/* house + RCD */}
      <Rect x={190} y={60} width={196} height={170} rx={6} fill={P.paper} stroke={P.navy} strokeWidth={1.5} />
      <Rect x={200} y={78} width={44} height={60} rx={4} fill={COLD} />
      <Label x={222} y={100} text={L('Diff.', 'RCD')} size={9.5} color={P.white} />
      <Label x={222} y={116} text="30 mA" size={9.5} color={P.white} />
      <Label x={222} y={154} text={L('compare', 'compares')} size={8.5} color={COLD} />
      <Label x={222} y={166} text={L('aller / retour', 'out / back')} size={8.5} color={COLD} />
      {/* appliance */}
      <Rect x={300} y={122} width={60} height={70} rx={6} fill={P.white} stroke={P.steel} strokeWidth={2} />
      <Circle cx={330} cy={157} r={18} fill={P.sky} stroke={P.steel} strokeWidth={2} />
      <Label x={330} y={114} text={L('Lave-linge', 'Washer')} size={9} />
      <Path d="M 244 92 L 300 92 L 300 140" stroke={HOT} strokeWidth={2} fill="none" />
      <Path d="M 244 124 L 290 124 L 290 160 L 300 160" stroke={COLD} strokeWidth={2} fill="none" />
      {/* fault */}
      <Path d="M 300 140 l 8 4 l -6 4 l 8 4" stroke={P.yellow} strokeWidth={3} fill="none" />
      <Label x={330} y={206} text={L('défaut : la phase', 'fault: the line')} size={8.5} color={HOT} />
      <Label x={330} y={218} text={L('touche la carcasse', 'touches the casing')} size={8.5} color={HOT} />
      {/* PE and fault path */}
      <Path d="M 360 180 L 372 180 L 372 250" stroke={P.green} strokeWidth={2.2} fill="none" />
      <EarthSymbol x={372} y={252} />
      <Label x={360} y={268} text="R_A" size={9} color={P.green} anchor="end" />
      <Path d="M 372 258 Q 210 286 52 244" stroke={HOT} strokeWidth={2.2} fill="none" strokeDasharray="6 4" />
      <Label x={210} y={262} text={L('courant de défaut I_d', 'fault current I_d')} size={9.5} color={HOT} />
      <Rect x={62} y={150} width={122} height={36} rx={8} fill={P.white} stroke={OK} strokeWidth={1.5} />
      <Label x={123} y={165} text={L('I_d > 30 mA → coupure', 'I_d > 30 mA → trip')} size={9.5} color={OK} />
      <Label x={123} y={179} text={L('en moins de 0,3 s', 'in under 0.3 s')} size={9} color={OK} weight="600" />
    </SceneFrame>
  );
}

// ---------------------------------------------------------------------------
// Long cable to the garden pump: voltage drop for three cross-sections

export function CableRun({ lang }: SceneProps) {
  const L = pick(lang);
  const opts = [
    { s: '1,5 mm²', sEn: '1.5 mm²', d: '6,3 %', dEn: '6.3%', ok: false, end: 216 },
    { s: '2,5 mm²', sEn: '2.5 mm²', d: '3,8 %', dEn: '3.8%', ok: true, warn: true, end: 221 },
    { s: '4 mm²', sEn: '4 mm²', d: '2,4 %', dEn: '2.4%', ok: true, end: 224.5 },
  ];
  const X0 = 70;
  const X1 = 290;
  const Y = (v: number) => 250 - (v - 210) * 7; // volts → y
  return (
    <SceneFrame>
      <Tag x={200} y={22} w={300} text={L('Pompe 1,1 kW à 80 m du tableau', '1.1 kW pump 80 m from the board')} />
      <Rect x={X0 - 34} y={44} width={30} height={40} rx={4} fill={P.navy} />
      <Label x={X0 - 19} y={98} text={L('Tableau', 'Board')} size={9} />
      <Circle cx={X1 + 24} cy={64} r={16} fill={P.white} stroke={COLD} strokeWidth={2.2} />
      <Label x={X1 + 24} y={69} text="M" size={12} color={COLD} />
      <Line x1={X0 - 4} y1={64} x2={X1 + 8} y2={64} stroke={P.orange} strokeWidth={3} />
      <Label x={(X0 + X1) / 2} y={58} text="80 m" size={10} color={P.orange} />
      {/* chart */}
      <Line x1={X0} y1={Y(210)} x2={X0} y2={Y(232)} stroke={P.ink} strokeWidth={1.2} />
      <Line x1={X0} y1={Y(210)} x2={X1} y2={Y(210)} stroke={P.ink} strokeWidth={1.2} />
      {[230, 220].map((v) => (
        <G key={v}>
          <Line x1={X0 - 3} y1={Y(v)} x2={X1} y2={Y(v)} stroke={P.line} strokeDasharray="3 4" />
          <Label x={X0 - 6} y={Y(v) + 3} text={`${v} V`} size={9} color={P.inkSoft} anchor="end" />
        </G>
      ))}
      <Line x1={X0} y1={Y(218.5)} x2={X1} y2={Y(218.5)} stroke={HOT} strokeWidth={1.2} strokeDasharray="6 3" />
      <Label x={X0 + 6} y={Y(218.5) + 13} text={L('limite 5 % (218,5 V)', '5% limit (218.5 V)')} size={8.5} color={HOT} anchor="start" />
      {opts.map((o, i) => {
        const color = !o.ok ? HOT : o.warn ? P.orange : OK;
        return (
          <G key={i}>
            <Line x1={X0} y1={Y(230)} x2={X1} y2={Y(o.end)} stroke={color} strokeWidth={2.6} />
            <Label x={X1 + 6} y={Y(o.end) + 4} text={`${L(o.s, o.sEn)} · ${L(o.d, o.dEn)}`} size={9} color={color} anchor="start" />
          </G>
        );
      })}
      <Label x={200} y={290} text={L('la tension baisse le long du câble ; plus la section est grande, moins elle baisse', 'voltage falls along the cable; the larger the section, the less it falls')} size={8.5} color={P.inkSoft} weight="600" />
    </SceneFrame>
  );
}

// ---------------------------------------------------------------------------
// Building: substation, main board, risers, meters, lift and pumps

export function BuildingRiser({ lang, highlight = 'all' }: SceneProps & { highlight?: string }) {
  const L = pick(lang);
  const hl = (k: string) => highlight === 'all' || highlight === k;
  const floors = [1, 2, 3, 4];
  return (
    <SceneFrame>
      <Rect x={0} y={250} width={400} height={50} fill={P.bg2} />
      {/* building */}
      <Rect x={150} y={40} width={200} height={210} fill={P.paper} stroke={P.navy} strokeWidth={2} />
      {floors.map((f, i) => {
        const y = 200 - i * 40;
        return (
          <G key={f}>
            <Line x1={150} y1={y} x2={350} y2={y} stroke={P.line} strokeWidth={1.5} />
            <Label x={330} y={y - 14} text={`R+${f}`} size={9} color={P.inkSoft} />
            {[0, 1, 2, 3].map((k) => (
              <Rect key={k} x={232 + k * 18} y={y - 30} width={12} height={12} fill={P.sky} />
            ))}
            <Rect x={180} y={y - 32} width={28} height={20} rx={3} fill={hl('risers') ? P.orange : P.greyLight} />
            <Label x={194} y={y - 18} text="4 kWh" size={7.5} color={P.ink} />
          </G>
        );
      })}
      <Label x={290} y={232} text={L('RDC : parking', 'Ground: car park')} size={8.5} color={P.inkSoft} weight="600" />
      {/* riser */}
      <Line x1={170} y1={244} x2={170} y2={52} stroke={hl('risers') ? P.orange : P.grey} strokeWidth={4} />
      <Label x={144} y={66} text={L('colonne montante', 'riser')} size={8.5} color={hl('risers') ? P.orange : P.inkSoft} anchor="end" />
      <Line x1={146} y1={63} x2={168} y2={63} stroke={hl('risers') ? P.orange : P.grey} strokeWidth={1.2} />
      {/* lift */}
      <Rect x={214} y={40} width={14} height={210} fill={hl('services') ? '#dbeafe' : P.greyLight} />
      <Rect x={210} y={28} width={22} height={12} rx={2} fill={hl('services') ? COLD : P.grey} />
      <Label x={221} y={22} text={L('ascenseur', 'lift')} size={8.5} color={hl('services') ? COLD : P.inkSoft} />
      {/* substation, main board, generator */}
      <Rect x={14} y={176} width={56} height={70} rx={4} fill={hl('substation') ? P.navy : P.grey} />
      <Circle cx={42} cy={200} r={10} fill="none" stroke={P.white} strokeWidth={2} />
      <Circle cx={42} cy={214} r={10} fill="none" stroke={P.white} strokeWidth={2} />
      <Label x={42} y={240} text="160 kVA" size={8.5} color={P.white} />
      <Label x={42} y={170} text={L('poste MT/BT', 'MV/LV sub.')} size={8.5} color={hl('substation') ? P.navy : P.inkSoft} />
      <Rect x={86} y={196} width={40} height={50} rx={4} fill={hl('substation') || hl('shortcircuit') ? P.orange : P.grey} />
      <Label x={106} y={225} text="TGBT" size={9} color={P.white} />
      {hl('shortcircuit') ? <Path d="M 100 186 l 8 -8 l -4 10 l 8 -6" stroke={HOT} strokeWidth={3} fill="none" /> : null}
      <Line x1={70} y1={222} x2={86} y2={222} stroke={P.navy} strokeWidth={3} />
      <Line x1={126} y1={232} x2={170} y2={232} stroke={P.orange} strokeWidth={3} />
      <Rect x={14} y={100} width={56} height={40} rx={4} fill={hl('backup') ? OK : P.grey} />
      <Label x={42} y={118} text={L('Groupe', 'Genset')} size={9} color={P.white} />
      <Label x={42} y={132} text="40 kVA" size={8.5} color={P.white} />
      <Rect x={86} y={110} width={40} height={24} rx={4} fill={hl('backup') ? OK : P.grey} />
      <Label x={106} y={126} text={L('Inverseur', 'ATS')} size={8} color={P.white} />
      <Line x1={70} y1={122} x2={86} y2={122} stroke={hl('backup') ? OK : P.grey} strokeWidth={2.5} />
      <Line x1={106} y1={134} x2={106} y2={196} stroke={hl('backup') ? OK : P.grey} strokeWidth={2.5} strokeDasharray="5 3" />
      {/* pumps */}
      <Rect x={290} y={256} width={52} height={22} rx={4} fill={hl('services') ? COLD : P.grey} />
      <Label x={316} y={271} text={L('surpresseur', 'booster')} size={8} color={P.white} />
      <Label x={316} y={292} text={L('bâche à eau', 'water tank')} size={8} color={P.inkSoft} />
    </SceneFrame>
  );
}

// ---------------------------------------------------------------------------
// Factory single-line diagram

export function FactorySld({ lang, highlight = 'all' }: SceneProps & { highlight?: string }) {
  const L = pick(lang);
  const hl = (k: string) => highlight === 'all' || highlight === k;
  const feeders = [
    { x: 52, label: L('Pompe', 'Pump'), sub: '15 kW', mode: L('direct', 'DOL'), k: 'motors' },
    { x: 116, label: L('Compresseur', 'Compressor'), sub: '55 kW', mode: L('démarreur progr.', 'soft starter'), k: 'motors' },
    { x: 180, label: L('Convoyeur', 'Conveyor'), sub: '7,5 kW', mode: L('variateur', 'VFD'), k: 'motors' },
    { x: 244, label: L('Ch. froide', 'Cold room'), sub: '30 kW', mode: L('groupe froid', 'refrig. unit'), k: 'motors' },
    { x: 300, label: L('Éclairage', 'Lighting'), sub: L('bureaux', 'offices'), mode: '', k: 'other' },
    { x: 352, label: L('Condens.', 'Capacitors'), sub: '100 kvar', mode: '', k: 'capacitor' },
  ];
  return (
    <SceneFrame>
      <Label x={200} y={22} text={L('Réseau MT 20 kV', 'MV network 20 kV')} size={10} color={hl('mv') ? HOT : P.ink} />
      <Line x1={200} y1={28} x2={200} y2={48} stroke={P.ink} strokeWidth={2} />
      <Rect x={190} y={48} width={20} height={18} rx={3} fill={hl('mv') ? HOT : P.grey} />
      <Label x={216} y={61} text={L('interrupteur-fusible', 'switch-fuse')} size={8.5} anchor="start" color={P.inkSoft} weight="600" />
      <Line x1={200} y1={66} x2={200} y2={76} stroke={P.ink} strokeWidth={2} />
      <Circle cx={200} cy={88} r={12} fill="none" stroke={P.navy} strokeWidth={2.2} />
      <Circle cx={200} cy={104} r={12} fill="none" stroke={P.navy} strokeWidth={2.2} />
      <Label x={218} y={100} text={L('400 kVA · 20/0,4 kV · u_k 4 %', '400 kVA · 20/0.4 kV · u_k 4%')} size={8.5} anchor="start" />
      <Line x1={200} y1={116} x2={200} y2={128} stroke={P.ink} strokeWidth={2} />
      <Rect x={188} y={128} width={24} height={16} rx={3} fill={hl('selectivity') ? P.orange : P.navy} />
      <Label x={218} y={140} text={L('disj. général 630 A', 'main breaker 630 A')} size={8.5} anchor="start" color={P.inkSoft} weight="600" />
      <Line x1={200} y1={144} x2={200} y2={156} stroke={P.ink} strokeWidth={2} />
      <Line x1={30} y1={156} x2={374} y2={156} stroke={P.navy} strokeWidth={5} />
      <Label x={30} y={150} text={L('TGBT 400 V', 'Main LV board 400 V')} size={8.5} anchor="start" color={P.navy} />
      {feeders.map((f) => {
        const on = hl(f.k) || (highlight === 'selectivity' && f.x === 52);
        return (
          <G key={f.x} opacity={on ? 1 : 0.35}>
            <Line x1={f.x} y1={156} x2={f.x} y2={176} stroke={P.ink} strokeWidth={2} />
            <Rect x={f.x - 9} y={176} width={18} height={14} rx={2} fill={P.greenMid} />
            <Line x1={f.x} y1={190} x2={f.x} y2={210} stroke={P.ink} strokeWidth={2} />
            {f.k === 'capacitor' ? (
              <G>
                <Line x1={f.x - 12} y1={212} x2={f.x + 12} y2={212} stroke={P.ink} strokeWidth={2.5} />
                <Line x1={f.x - 12} y1={220} x2={f.x + 12} y2={220} stroke={P.ink} strokeWidth={2.5} />
              </G>
            ) : f.k === 'other' ? (
              <Rect x={f.x - 12} y={210} width={24} height={18} rx={3} fill={P.yellow} />
            ) : (
              <G>
                <Circle cx={f.x} cy={222} r={12} fill={P.white} stroke={COLD} strokeWidth={2} />
                <Label x={f.x} y={226} text="M" size={10} color={COLD} />
              </G>
            )}
            <Label x={f.x} y={250} text={f.label} size={8.5} />
            <Label x={f.x} y={262} text={f.sub} size={8.5} color={P.greenMid} />
            {f.mode ? <Label x={f.x} y={274} text={f.mode} size={7.5} color={P.inkSoft} weight="600" /> : null}
          </G>
        );
      })}
      {highlight === 'selectivity' ? (
        <G>
          <Path d="M 52 236 l 6 -6 l -3 8 l 6 -5" stroke={HOT} strokeWidth={2.5} fill="none" />
          <Label x={200} y={292} text={L('seul le disjoncteur de la pompe doit s’ouvrir', 'only the pump breaker must open')} size={9} color={HOT} />
        </G>
      ) : null}
    </SceneFrame>
  );
}

// ---------------------------------------------------------------------------
// Motor starting current

export function MotorStart({ lang }: SceneProps) {
  const L = pick(lang);
  const X = (t: number) => 60 + t * 300; // t in s (0..1)
  const Y = (i: number) => 250 - i * 26; // multiple of In
  const curves = [
    { name: L('direct : 7 × In', 'DOL: 7 × In'), color: HOT, pts: [[0, 1], [0.02, 7], [0.4, 6.6], [0.55, 5], [0.62, 1.2], [1, 1]] },
    { name: L('étoile-triangle : ≈ 2,3 × In', 'star-delta: ≈ 2.3 × In'), color: P.orange, pts: [[0, 1], [0.02, 2.3], [0.5, 2.1], [0.52, 4.2], [0.6, 1.2], [1, 1]] },
    { name: L('démarreur progressif : ≈ 3 × In', 'soft starter: ≈ 3 × In'), color: P.greenMid, pts: [[0, 1], [0.08, 3], [0.6, 3], [0.75, 1.1], [1, 1]] },
    { name: L('variateur : ≈ 1,2 × In', 'VFD: ≈ 1.2 × In'), color: OK, pts: [[0, 1], [0.05, 1.25], [0.8, 1.2], [0.9, 1], [1, 1]] },
  ];
  return (
    <SceneFrame>
      <Line x1={60} y1={250} x2={370} y2={250} stroke={P.ink} strokeWidth={1.5} />
      <Line x1={60} y1={250} x2={60} y2={50} stroke={P.ink} strokeWidth={1.5} />
      <Label x={372} y={264} text={L('temps', 'time')} size={9} color={P.inkSoft} anchor="end" />
      <Label x={64} y={48} text={L('courant (× In)', 'current (× In)')} size={9.5} color={P.inkSoft} anchor="start" />
      {[1, 3, 5, 7].map((i) => (
        <G key={i}>
          <Line x1={56} y1={Y(i)} x2={370} y2={Y(i)} stroke={P.line} strokeDasharray="3 4" />
          <Label x={52} y={Y(i) + 3} text={`${i}`} size={9} color={P.inkSoft} anchor="end" />
        </G>
      ))}
      {curves.map((c) => (
        <Path
          key={c.name}
          d={c.pts.map(([t, i], k) => `${k ? 'L' : 'M'} ${X(t)} ${Y(i)}`).join(' ')}
          stroke={c.color}
          strokeWidth={2.6}
          fill="none"
          strokeLinejoin="round"
        />
      ))}
      {curves.map((c, k) => {
        const lx = k % 2 === 0 ? 40 : 214;
        const ly = k < 2 ? 279 : 294;
        return (
          <G key={`lg-${k}`}>
            <Line x1={lx} y1={ly - 3} x2={lx + 14} y2={ly - 3} stroke={c.color} strokeWidth={3} />
            <Label x={lx + 18} y={ly} text={c.name} size={8.5} anchor="start" />
          </G>
        );
      })}
    </SceneFrame>
  );
}

// ---------------------------------------------------------------------------
// Selectivity: two breaker curves that never cross

export function Selectivity({ lang }: SceneProps) {
  const L = pick(lang);
  const curve = (x0: number, mag: number) =>
    `M ${x0} 60 C ${x0 + 6} 130 ${x0 + 30} 170 ${mag} 190 L ${mag} 236 L ${mag + 60} 240`;
  return (
    <SceneFrame>
      <Line x1={50} y1={250} x2={375} y2={250} stroke={P.ink} strokeWidth={1.5} />
      <Line x1={50} y1={250} x2={50} y2={44} stroke={P.ink} strokeWidth={1.5} />
      <Label x={372} y={266} text={L('courant de défaut →', 'fault current →')} size={9.5} color={P.inkSoft} anchor="end" />
      <Label x={56} y={42} text={L('temps de coupure', 'tripping time')} size={9.5} color={P.inkSoft} anchor="start" />
      <Path d={curve(80, 170)} stroke={P.greenMid} strokeWidth={3} fill="none" />
      <Path d={curve(160, 300)} stroke={P.navy} strokeWidth={3} fill="none" />
      <Label x={54} y={228} text={L('départ pompe 32 A', 'pump feeder 32 A')} size={8.5} color={P.greenMid} anchor="start" />
      <Label x={190} y={70} text={L('général 630 A', 'main 630 A')} size={9} color={P.navy} anchor="start" />
      <Line x1={140} y1={62} x2={140} y2={250} stroke={HOT} strokeWidth={1.5} strokeDasharray="5 4" />
      <Label x={144} y={58} text={L('défaut sur la pompe', 'fault at the pump')} size={8.5} color={HOT} anchor="start" />
      <Rect x={208} y={92} width={166} height={40} rx={8} fill={P.white} stroke={OK} strokeWidth={1.5} />
      <Label x={291} y={108} text={L('les courbes ne se croisent pas :', 'the curves never cross:')} size={9} color={OK} />
      <Label x={291} y={122} text={L('seul le départ en défaut s’ouvre', 'only the faulty feeder opens')} size={9} color={OK} />
    </SceneFrame>
  );
}

// ---------------------------------------------------------------------------
// Clinic: sources and levels of continuity

export function ClinicTiers({ lang, highlight = 'all' }: SceneProps & { highlight?: string }) {
  const L = pick(lang);
  const hl = (k: string) => highlight === 'all' || highlight === k;
  return (
    <SceneFrame>
      {/* sources */}
      <Rect x={14} y={40} width={80} height={40} rx={6} fill={P.navy} />
      <Label x={54} y={58} text={L('Réseau', 'Utility')} size={10} color={P.white} />
      <Label x={54} y={72} text="400 V" size={9} color={P.yellow} />
      <Rect x={14} y={100} width={80} height={40} rx={6} fill={hl('generator') ? OK : P.grey} />
      <Label x={54} y={118} text={L('2 groupes', '2 gensets')} size={10} color={P.white} />
      <Label x={54} y={132} text={L('≤ 15 s', '≤ 15 s')} size={9} color={P.white} />
      <Line x1={94} y1={60} x2={124} y2={60} stroke={P.ink} strokeWidth={2.5} />
      <Line x1={94} y1={120} x2={124} y2={120} stroke={P.ink} strokeWidth={2.5} />
      <Rect x={124} y={50} width={40} height={80} rx={6} fill={hl('generator') ? OK : P.grey} />
      <Label x={144} y={86} text={L('Inver-', 'ATS')} size={9} color={P.white} />
      <Label x={144} y={98} text={L('seur', '')} size={9} color={P.white} />
      {/* main board */}
      <Line x1={164} y1={90} x2={186} y2={90} stroke={P.ink} strokeWidth={2.5} />
      <Rect x={186} y={46} width={60} height={88} rx={6} fill={P.white} stroke={P.navy} strokeWidth={2} />
      <Label x={216} y={84} text="TGBT" size={10} />
      <Label x={216} y={98} text={L('général', 'main')} size={8.5} color={P.inkSoft} weight="600" />
      {/* tiers */}
      {[
        { y: 40, k: 'loads', color: P.grey, t: L('Normal', 'Normal'), s: L('clim confort, bureaux', 'comfort AC, offices'), time: L('délesté', 'shed') },
        { y: 92, k: 'generator', color: OK, t: L('Essentiel', 'Essential'), s: L('chambres, labo, frigos', 'wards, lab, fridges'), time: '≤ 15 s' },
        { y: 144, k: 'ups', color: COLD, t: L('Vital', 'Vital'), s: L('bloc, réanimation', 'theatre, ICU'), time: '0 s' },
      ].map((tier) => (
        <G key={tier.k} opacity={hl(tier.k) ? 1 : 0.4}>
          <Rect x={278} y={tier.y} width={110} height={44} rx={8} fill={P.white} stroke={tier.color} strokeWidth={2} />
          <Rect x={278} y={tier.y} width={8} height={44} rx={3} fill={tier.color} />
          <Label x={292} y={tier.y + 16} text={tier.t} size={10} anchor="start" color={tier.color === P.grey ? P.ink : tier.color} />
          <Label x={292} y={tier.y + 29} text={tier.s} size={8} anchor="start" color={P.inkSoft} weight="600" />
          <Label x={292} y={tier.y + 40} text={tier.time} size={8} anchor="start" color={P.ink} />
        </G>
      ))}
      <Path d="M 246 62 L 278 62" stroke={P.ink} strokeWidth={2} />
      <Path d="M 246 112 L 278 112" stroke={P.ink} strokeWidth={2} />
      {/* UPS */}
      <Rect x={200} y={150} width={46} height={30} rx={5} fill={hl('ups') ? COLD : P.grey} />
      <Label x={223} y={169} text={L('Onduleur', 'UPS')} size={8.5} color={P.white} />
      <Line x1={216} y1={134} x2={216} y2={150} stroke={P.ink} strokeWidth={2} />
      <Line x1={246} y1={166} x2={278} y2={166} stroke={P.ink} strokeWidth={2} />
      {/* safety lighting */}
      <G opacity={hl('safety') ? 1 : 0.4}>
        <Rect x={278} y={204} width={110} height={44} rx={8} fill={P.white} stroke={P.orange} strokeWidth={2} />
        <Rect x={278} y={204} width={8} height={44} rx={3} fill={P.orange} />
        <Label x={292} y={220} text={L('Sécurité', 'Safety')} size={10} anchor="start" color={P.orange} />
        <Label x={292} y={233} text={L('blocs autonomes (BAES)', 'self-contained units')} size={8} anchor="start" color={P.inkSoft} weight="600" />
        <Label x={292} y={244} text={L('batterie intégrée, 1 h', 'own battery, 1 h')} size={8} anchor="start" color={P.ink} />
        <Rect x={196} y={212} width={50} height={26} rx={4} fill={P.orange} />
        <Label x={221} y={229} text="EXIT →" size={9} color={P.white} />
      </G>
      <Label x={130} y={280} text={L('plus le niveau est critique, plus la reprise est rapide', 'the more critical the level, the faster the takeover')} size={9} color={P.inkSoft} weight="600" />
    </SceneFrame>
  );
}
