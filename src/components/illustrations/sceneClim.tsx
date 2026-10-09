import React from 'react';
import { Circle, G, Line, Path, Polygon, Rect } from 'react-native-svg';
import type { Lang } from '../../lib/language';
import { Arrow, CheckBadge, Label, P, Person, SceneFrame, Tag } from './kit';

type SceneProps = { lang: Lang };
const pick = (lang: Lang) => (fr: string, en: string) => (lang === 'fr' ? fr : en);

const COLD = '#4c8fe0';
const COLD_LIGHT = '#cfe2fb';
const HOT = '#e4572e';
const HOT_LIGHT = '#fde3d6';

/** Amber halo drawn behind a highlighted component. */
function Halo({ x, y, w, h, on }: { x: number; y: number; w: number; h: number; on: boolean }) {
  if (!on) return null;
  return <Rect x={x - 6} y={y - 6} width={w + 12} height={h + 12} rx={10} fill={P.yellow} opacity={0.35} stroke={P.orange} strokeWidth={2} />;
}

function Coil({ x, y, w, h, color }: { x: number; y: number; w: number; h: number; color: string }) {
  const n = 5;
  const step = h / n;
  let d = `M ${x + 8} ${y + step / 2}`;
  for (let i = 0; i < n; i++) {
    const yy = y + step / 2 + i * step;
    d += i % 2 === 0 ? ` L ${x + w - 8} ${yy}` : ` L ${x + 8} ${yy}`;
    if (i < n - 1) d += i % 2 === 0 ? ` L ${x + w - 8} ${yy + step}` : ` L ${x + 8} ${yy + step}`;
  }
  return (
    <G>
      <Rect x={x} y={y} width={w} height={h} rx={8} fill={P.white} stroke={P.ink} strokeWidth={1.8} />
      <Path d={d} stroke={color} strokeWidth={3} fill="none" strokeLinejoin="round" />
    </G>
  );
}

/** The refrigeration cycle of an air conditioner: evaporator → compressor → condenser → expansion valve. */
export function RefrigerationCycle({ lang, highlight }: SceneProps & { highlight?: string }) {
  const L = pick(lang);
  const hl = (k: string) => highlight === k;
  return (
    <SceneFrame>
      {/* inside / outside */}
      <Rect x={8} y={44} width={156} height={214} rx={12} fill={COLD_LIGHT} opacity={0.55} />
      <Rect x={176} y={44} width={216} height={214} rx={12} fill={HOT_LIGHT} opacity={0.6} />
      <Rect x={164} y={40} width={12} height={222} fill={P.concrete} />
      <Label x={86} y={60} text={L('Intérieur (local)', 'Inside (room)')} size={11} color={P.green} />
      <Label x={284} y={60} text={L('Extérieur', 'Outside')} size={11} color={HOT} />

      {/* pipes */}
      <Path d="M 100 112 L 100 92 L 228 92" stroke={COLD} strokeWidth={4} fill="none" strokeDasharray="7 4" />
      <Path d="M 262 92 L 330 92 L 330 112" stroke={HOT} strokeWidth={5} fill="none" />
      <Path d="M 330 196 L 330 224 L 262 224" stroke={P.greenMid} strokeWidth={5} fill="none" />
      <Path d="M 228 224 L 100 224 L 100 196" stroke={COLD} strokeWidth={5} fill="none" />
      <Arrow x1={150} y1={92} x2={176} y2={92} color={COLD} width={3} />
      <Arrow x1={300} y1={224} x2={280} y2={224} color={P.greenMid} width={3} />
      <Arrow x1={190} y1={224} x2={150} y2={224} color={COLD} width={3} />

      {/* evaporator */}
      <Halo x={58} y={112} w={84} h={84} on={hl('evaporator')} />
      <Coil x={58} y={112} w={84} h={84} color={COLD} />
      <Label x={100} y={210} text={L('Évaporateur', 'Evaporator')} size={10.5} color={P.ink} />
      <Arrow x1={14} y1={154} x2={54} y2={154} color={P.orange} width={3} />
      <Label x={30} y={140} text="Q1" size={12} color={P.orange} />
      <Label x={86} y={250} text={L('le fluide bout et absorbe', 'the fluid boils and absorbs')} size={9} color={P.inkSoft} weight="600" />
      <Label x={86} y={240} text={L('Le local se refroidit :', 'The room cools down:')} size={9} color={P.inkSoft} weight="600" />

      {/* compressor */}
      <Halo x={228} y={74} w={34} h={36} on={hl('compressor')} />
      <Rect x={228} y={74} width={34} height={36} rx={9} fill={P.green} />
      <Circle cx={245} cy={92} r={8} fill={P.greenLight} />
      <Label x={245} y={128} text={L('Compresseur', 'Compressor')} size={10.5} />
      <Arrow x1={245} y1={36} x2={245} y2={70} color={P.yellow} width={3} />
      <Label x={262} y={44} text={L('W (électricité)', 'W (electricity)')} size={10} color={P.orange} anchor="start" />

      {/* condenser */}
      <Halo x={288} y={112} w={84} h={84} on={hl('condenser')} />
      <Coil x={288} y={112} w={84} h={84} color={HOT} />
      <Label x={330} y={210} text={L('Condenseur', 'Condenser')} size={10.5} />
      <Arrow x1={376} y1={154} x2={396} y2={154} color={HOT} width={3} />
      <Label x={384} y={140} text="Q2" size={12} color={HOT} />

      {/* expansion valve */}
      <Halo x={228} y={212} w={34} h={24} on={hl('valve')} />
      <Polygon points="228,212 262,236 262,212 228,236" fill={P.white} stroke={P.ink} strokeWidth={1.8} />
      <Label x={245} y={252} text={L('Détendeur', 'Expansion valve')} size={10.5} />

      <Rect x={186} y={150} width={92} height={46} rx={8} fill={P.white} stroke={P.line} />
      <Label x={232} y={168} text="Q2 = Q1 + W" size={11} />
      <Label x={232} y={186} text="COP = Q1 / W" size={11} color={P.green} />
    </SceneFrame>
  );
}

/** Heat gains of an air-conditioned room: external (envelope, sun, air) and internal (people, lighting, appliances). */
export function HeatGains({ lang, focus = 'all' }: SceneProps & { focus?: string }) {
  const L = pick(lang);
  const ext = focus === 'all' || focus === 'external' ? 1 : 0.25;
  const int = focus === 'all' || focus === 'internal' ? 1 : 0.25;
  const Num = ({ x, y, n, c }: { x: number; y: number; n: number; c: string }) => (
    <G>
      <Circle cx={x} cy={y} r={9} fill={c} />
      <Label x={x} y={y + 4} text={String(n)} size={10.5} color={P.white} />
    </G>
  );
  return (
    <SceneFrame>
      {/* sun */}
      <G opacity={ext}>
        <Circle cx={362} cy={36} r={18} fill={P.yellow} />
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
          const a = (i * Math.PI) / 4;
          return <Line key={i} x1={362 + Math.cos(a) * 22} y1={36 + Math.sin(a) * 22} x2={362 + Math.cos(a) * 29} y2={36 + Math.sin(a) * 29} stroke={P.orange} strokeWidth={2} />;
        })}
        <Arrow x1={340} y1={56} x2={300} y2={78} color={P.orange} width={2.4} />
        <Arrow x1={350} y1={68} x2={334} y2={130} color={P.orange} width={2.4} />
      </G>

      {/* room */}
      <Rect x={40} y={80} width={290} height={170} fill={P.white} stroke={P.ink} strokeWidth={3} />
      <Rect x={326} y={124} width={8} height={56} fill={P.sky} stroke={P.blue} strokeWidth={1.5} />
      <Rect x={36} y={190} width={8} height={60} fill={P.brown} />
      <Rect x={0} y={250} width={400} height={50} fill={P.bg2} />

      {/* split unit */}
      <Rect x={56} y={90} width={70} height={18} rx={6} fill={P.white} stroke={P.green} strokeWidth={2} />
      <Line x1={64} y1={104} x2={118} y2={104} stroke={P.greenLight} strokeWidth={2} />
      <Path d="M 128 106 Q 170 112 200 104" stroke={COLD} strokeWidth={2} fill="none" strokeDasharray="4 3" />

      {/* internal sources */}
      <G opacity={int}>
        <Line x1={200} y1={80} x2={200} y2={96} stroke={P.ink} strokeWidth={1.5} />
        <Path d="M 186 96 L 214 96 L 208 106 L 192 106 Z" fill={P.yellow} />
        <Person x={150} y={246} s={0.62} shirt={P.greenMid} skin={P.skin3} />
        <Rect x={196} y={196} width={92} height={6} rx={2} fill={P.brown} />
        <Rect x={202} y={202} width={5} height={46} fill="#8a5f33" />
        <Rect x={278} y={202} width={5} height={46} fill="#8a5f33" />
        <Rect x={226} y={170} width={36} height={24} rx={2} fill={P.screen} />
        <Rect x={229} y={173} width={30} height={18} fill={P.sky} />
        <Num x={168} y={150} n={5} c={P.green} />
        <Num x={222} y={118} n={6} c={P.green} />
        <Num x={270} y={164} n={7} c={P.green} />
      </G>

      {/* external numbers */}
      <G opacity={ext}>
        <Num x={60} y={150} n={1} c={P.orange} />
        <Num x={286} y={70} n={2} c={P.orange} />
        <Num x={312} y={150} n={3} c={P.orange} />
        <Arrow x1={12} y1={224} x2={50} y2={224} color={P.orange} width={2.4} />
        <Num x={22} y={208} n={4} c={P.orange} />
      </G>

      {/* legend */}
      <G opacity={ext}>
        <Label x={12} y={268} text={L('Externes : 1 parois · 2 soleil sur parois', 'External: 1 walls · 2 sun on walls')} size={9.5} color={P.orange} anchor="start" />
        <Label x={12} y={281} text={L('3 soleil par vitrages · 4 air neuf', '3 sun through glazing · 4 fresh air')} size={9.5} color={P.orange} anchor="start" />
      </G>
      <G opacity={int}>
        <Label x={232} y={268} text={L('Internes : 5 occupants', 'Internal: 5 occupants')} size={9.5} color={P.green} anchor="start" />
        <Label x={232} y={281} text={L('6 éclairage · 7 appareils', '6 lighting · 7 appliances')} size={9.5} color={P.green} anchor="start" />
      </G>
      <Label x={200} y={295} text={L('Sensible = chaleur (°C) · Latente = vapeur d’eau', 'Sensible = heat (°C) · Latent = water vapour')} size={9} color={P.inkSoft} weight="600" />
    </SceneFrame>
  );
}

/** Temperature / humidity plane with the comfort zone and the tropical climates. */
export function ComfortZone({ lang }: SceneProps) {
  const L = pick(lang);
  const X = (t: number) => 50 + ((t - 15) / 27) * 330;
  const Y = (h: number) => 250 - (h / 100) * 190;
  return (
    <SceneFrame>
      <Tag x={200} y={22} w={250} text={L('Où est le confort ?', 'Where is comfort?')} />
      {/* axes */}
      <Line x1={50} y1={250} x2={384} y2={250} stroke={P.ink} strokeWidth={1.6} />
      <Line x1={50} y1={250} x2={50} y2={56} stroke={P.ink} strokeWidth={1.6} />
      {[15, 20, 25, 30, 35, 40].map((t) => (
        <G key={t}>
          <Line x1={X(t)} y1={250} x2={X(t)} y2={254} stroke={P.ink} />
          <Label x={X(t)} y={266} text={`${t}`} size={9.5} color={P.inkSoft} />
        </G>
      ))}
      {[20, 40, 60, 80, 100].map((h) => (
        <G key={h}>
          <Line x1={46} y1={Y(h)} x2={384} y2={Y(h)} stroke={P.line} strokeDasharray="3 4" />
          <Label x={42} y={Y(h) + 3} text={`${h}`} size={9.5} color={P.inkSoft} anchor="end" />
        </G>
      ))}
      <Label x={216} y={284} text={L('Température de l’air (°C)', 'Air temperature (°C)')} size={10} color={P.inkSoft} />
      <Label x={20} y={50} text={L('HR %', 'RH %')} size={10} color={P.inkSoft} anchor="start" />

      {/* comfort zone 20–27 °C, 20–80 % */}
      <Rect x={X(20)} y={Y(80)} width={X(27) - X(20)} height={Y(20) - Y(80)} fill={P.mint} stroke={P.green} strokeWidth={2} rx={6} />
      <Rect x={X(24)} y={Y(65)} width={X(26) - X(24)} height={Y(45) - Y(65)} fill={P.yellow} opacity={0.6} rx={3} />
      <Label x={X(23.5)} y={Y(84)} text={L('Zone de confort', 'Comfort zone')} size={10.5} color={P.green} />
      <Label x={X(25)} y={Y(38)} text={L('consigne 24–26', 'setpoint 24–26')} size={9} color={'#7c2d12'} />

      {/* climates */}
      <Circle cx={X(32)} cy={Y(80)} r={7} fill={COLD} />
      <Label x={X(32) + 10} y={Y(80) - 8} text={L('Douala ext. 32 °C · 80 %', 'Douala out. 32 °C · 80 %')} size={9.5} color={COLD} anchor="start" />
      <Label x={X(32) + 10} y={Y(80) + 5} text={L('humide : refroidir + sécher', 'humid: cool + dry')} size={9} color={P.inkSoft} anchor="start" weight="600" />
      <Arrow x1={X(31.4)} y1={Y(76)} x2={X(26.4)} y2={Y(54)} color={COLD} width={2.4} />
      <Circle cx={X(40)} cy={Y(25)} r={7} fill={HOT} />
      <Label x={X(40) - 4} y={Y(25) - 14} text={L('Garoua 40 °C · 25 %', 'Garoua 40 °C · 25 %')} size={9.5} color={HOT} anchor="end" />
      <Label x={X(40) - 4} y={Y(25) + 18} text={L('sec : refroidir', 'dry: cool')} size={9} color={P.inkSoft} anchor="end" weight="600" />
      <Arrow x1={X(39.2)} y1={Y(27)} x2={X(27.6)} y2={Y(36)} color={HOT} width={2.4} />
    </SceneFrame>
  );
}

function WallUnit({ x, y, w = 56 }: { x: number; y: number; w?: number }) {
  return (
    <G>
      <Rect x={x} y={y} width={w} height={18} rx={6} fill={P.white} stroke={P.green} strokeWidth={2} />
      <Line x1={x + 6} y1={y + 13} x2={x + w - 6} y2={y + 13} stroke={P.greenLight} strokeWidth={2} />
    </G>
  );
}

function OutdoorBox({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <G transform={`translate(${x},${y}) scale(${s})`}>
      <Rect x={0} y={0} width={52} height={40} rx={4} fill={P.greyLight} stroke={P.steel} strokeWidth={1.6} />
      <Circle cx={22} cy={20} r={13} fill={P.white} stroke={P.steel} strokeWidth={1.4} />
      <Line x1={22} y1={8} x2={22} y2={32} stroke={P.steel} />
      <Line x1={10} y1={20} x2={34} y2={20} stroke={P.steel} />
      {[0, 1, 2, 3].map((i) => (
        <Line key={i} x1={40} y1={8 + i * 8} x2={48} y2={8 + i * 8} stroke={P.steel} />
      ))}
    </G>
  );
}

/** Which family of system for which cooling power. */
export function SystemLadder({ lang, highlight }: SceneProps & { highlight?: string }) {
  const L = pick(lang);
  const col = (k: string) => (highlight && highlight !== k ? 0.35 : 1);
  return (
    <SceneFrame>
      <Tag x={200} y={22} w={290} text={L('Puissance frigorifique → type de système', 'Cooling power → type of system')} />

      <G opacity={col('small')}>
        <Rect x={14} y={44} width={118} height={170} rx={12} fill={P.white} stroke={P.line} />
        <Rect x={30} y={70} width={86} height={60} fill={P.mint} />
        <WallUnit x={44} y={76} />
        <OutdoorBox x={47} y={146} s={1} />
        <Label x={73} y={202} text={L('Window · split mural', 'Window · wall split')} size={9.5} />
      </G>
      <G opacity={col('medium')}>
        <Rect x={141} y={44} width={118} height={170} rx={12} fill={P.white} stroke={P.line} />
        <Rect x={160} y={64} width={30} height={84} rx={4} fill={P.white} stroke={P.green} strokeWidth={2} />
        {[0, 1, 2, 3].map((i) => (
          <Line key={i} x1={165} y1={74 + i * 8} x2={185} y2={74 + i * 8} stroke={P.greenLight} strokeWidth={2} />
        ))}
        <OutdoorBox x={198} y={104} s={0.9} />
        <OutdoorBox x={198} y={146} s={0.9} />
        <Label x={200} y={202} text={L('Splits · armoires', 'Splits · packaged units')} size={9.5} />
      </G>
      <G opacity={col('large')}>
        <Rect x={268} y={44} width={118} height={170} rx={12} fill={P.white} stroke={P.line} />
        <Rect x={286} y={92} width={82} height={92} fill={P.sky} />
        {[0, 1, 2].map((r) =>
          [0, 1, 2].map((c) => <Rect key={`${r}${c}`} x={292 + c * 26} y={100 + r * 28} width={18} height={16} fill={P.blue} opacity={0.7} rx={2} />)
        )}
        <Rect x={296} y={70} width={38} height={22} rx={3} fill={P.greyLight} stroke={P.steel} />
        <Circle cx={307} cy={81} r={6} fill={P.white} stroke={P.steel} />
        <Circle cx={323} cy={81} r={6} fill={P.white} stroke={P.steel} />
        <Rect x={340} y={76} width={20} height={16} rx={3} fill={P.green} />
        <Label x={327} y={202} text={L('Centrale · rooftop · eau glacée', 'Central · rooftop · chilled water')} size={8.8} />
      </G>

      {/* scale */}
      <Rect x={14} y={226} width={372} height={10} rx={5} fill={P.bg2} />
      <Rect x={14} y={226} width={118} height={10} rx={5} fill={P.greenLight} />
      <Rect x={141} y={226} width={118} height={10} rx={5} fill={P.greenMid} />
      <Rect x={268} y={226} width={118} height={10} rx={5} fill={P.green} />
      <Label x={73} y={254} text="≤ 2,5 kW" size={12} color={P.green} />
      <Label x={200} y={254} text="2,5 → 75 kW" size={12} color={P.green} />
      <Label x={327} y={254} text="> 75 kW" size={12} color={P.green} />
      <Label x={200} y={282} text={L('1 kWr = 3 412 BTU/h · 1 CV ≈ 8 000 BTU/h ≈ 2,3 kWr', '1 kWr = 3,412 BTU/h · 1 HP ≈ 8,000 BTU/h ≈ 2.3 kWr')} size={10} color={P.inkSoft} weight="600" />
    </SceneFrame>
  );
}

/** Air distribution in a room: horizontal ceiling throw (good) vs jet on the occupants (bad). */
export function RoomAirflow({ lang, variant = 'good' }: SceneProps & { variant?: string }) {
  const L = pick(lang);
  const good = variant !== 'bad';
  return (
    <SceneFrame>
      <Rect x={24} y={46} width={352} height={204} fill={P.white} stroke={P.ink} strokeWidth={3} />
      <Rect x={0} y={250} width={400} height={50} fill={P.bg2} />
      {/* occupied zone: 0.5 m from walls, 1.8 m high (room 2.7 m) */}
      <Rect x={62} y={114} width={276} height={136} fill={P.mint} opacity={0.7} stroke={P.green} strokeDasharray="6 4" strokeWidth={1.6} />
      <Label x={200} y={130} text={L('Zone d’occupation (1,80 m · 0,50 m des murs)', 'Occupied zone (1.80 m · 0.50 m from walls)')} size={9.5} color={P.green} />

      <WallUnit x={30} y={56} w={60} />
      <Person x={200} y={246} s={0.68} shirt={P.greenMid} skin={P.skin2} />

      {good ? (
        <G>
          <Path d="M 92 70 Q 240 58 352 70 Q 372 120 340 180" stroke={COLD} strokeWidth={4} fill="none" />
          <Arrow x1={346} y1={168} x2={336} y2={192} color={COLD} width={4} />
          <Path d="M 300 214 Q 200 236 110 214 Q 70 170 90 96" stroke={COLD} strokeWidth={2} fill="none" strokeDasharray="5 4" />
          <Arrow x1={92} y1={108} x2={90} y2={90} color={COLD} width={2} />
          <CheckBadge x={360} y={30} r={12} />
          <Label x={340} y={34} text={L('Soufflage horizontal sous plafond', 'Horizontal throw along the ceiling')} size={10} anchor="end" color={P.green} />
          <Label x={200} y={272} text={L('Vitesse dans la zone occupée : 0,12 à 0,25 m/s', 'Speed in the occupied zone: 0.12 to 0.25 m/s')} size={10.5} color={P.ink} />
        </G>
      ) : (
        <G>
          <Path d="M 92 72 Q 150 90 186 156" stroke={HOT} strokeWidth={6} fill="none" />
          <Arrow x1={178} y1={140} x2={190} y2={164} color={HOT} width={6} />
          <CheckBadge x={360} y={30} r={12} ok={false} />
          <Label x={340} y={34} text={L('Jet dirigé sur les occupants', 'Jet aimed at the occupants')} size={10} anchor="end" color={P.red} />
          <Label x={200} y={272} text={L('Courant d’air froid sur la nuque = inconfort, maladies', 'Cold draught on the neck = discomfort, illness')} size={10.5} color={P.red} />
        </G>
      )}
    </SceneFrame>
  );
}

/** Where to place the outdoor unit. */
export function OutdoorUnitPlacement({ lang }: SceneProps) {
  const L = pick(lang);
  const bad = [
    L('En plein soleil (toiture > 70 °C)', 'In full sun (roof > 70 °C)'),
    L('Face aux vents dominants', 'Facing the prevailing wind'),
    L('Toit inaccessible (pas d’entretien)', 'Unreachable roof (no maintenance)'),
    L('Au sol près des parterres (feuilles, terre)', 'On the ground near flowerbeds'),
    L('Sans fixation antivibratile', 'Without anti-vibration mounts'),
  ];
  return (
    <SceneFrame>
      <Tag x={200} y={22} w={230} text={L('Placer l’unité extérieure', 'Placing the outdoor unit')} />
      <Rect x={12} y={42} width={168} height={222} rx={12} fill={P.white} stroke={P.line} />
      {/* shade canopy + wall */}
      <Rect x={22} y={60} width={14} height={190} fill={P.concrete} />
      <Polygon points="36,92 150,92 150,100 36,104" fill={P.green} />
      <OutdoorBox x={56} y={150} s={1.3} />
      <Rect x={50} y={204} width={80} height={6} fill={P.steel} />
      <Arrow x1={124} y1={176} x2={170} y2={176} color={HOT} width={2.6} />
      <Label x={96} y={124} text={L('à l’ombre, ventilée', 'shaded, ventilated')} size={10} color={P.green} />
      <Label x={96} y={234} text={L('accessible, sur', 'accessible, on')} size={10} color={P.green} />
      <Label x={96} y={248} text={L('silentblocs', 'rubber mounts')} size={10} color={P.green} />
      <CheckBadge x={166} y={56} r={11} />

      {bad.map((b, i) => (
        <G key={i}>
          <CheckBadge x={204} y={66 + i * 40} r={10} ok={false} />
          <Label x={220} y={70 + i * 40} text={b} size={9.6} anchor="start" />
        </G>
      ))}
      <Label x={200} y={290} text={L('Un condenseur au chaud = moins de froid et plus de kWh', 'A hot condenser = less cooling and more kWh')} size={10} color={P.inkSoft} weight="600" />
    </SceneFrame>
  );
}

/** Chilled-water central plant: chiller, cooling tower, AHU and fan coils. */
export function CentralPlant({ lang, highlight }: SceneProps & { highlight?: string }) {
  const L = pick(lang);
  const hl = (k: string) => highlight === k;
  return (
    <SceneFrame>
      {/* building */}
      <Rect x={120} y={84} width={260} height={176} fill={P.white} stroke={P.ink} strokeWidth={2.5} />
      <Line x1={120} y1={172} x2={380} y2={172} stroke={P.ink} strokeWidth={2} />
      <Rect x={0} y={260} width={400} height={40} fill={P.bg2} />

      {/* plant room (ground, left) */}
      <Halo x={14} y={204} w={90} h={52} on={hl('chiller')} />
      <Rect x={14} y={204} width={90} height={52} rx={6} fill={P.greyLight} stroke={P.steel} strokeWidth={1.6} />
      <Circle cx={36} cy={230} r={11} fill={P.white} stroke={P.steel} />
      <Rect x={54} y={218} width={42} height={24} rx={4} fill={P.green} />
      <Label x={59} y={198} text={L('Groupe d’eau glacée', 'Chiller')} size={10} />

      {/* cooling tower on roof */}
      <Halo x={318} y={40} w={46} h={44} on={hl('tower')} />
      <Polygon points="322,84 360,84 352,44 330,44" fill={P.greyLight} stroke={P.steel} strokeWidth={1.6} />
      <Path d="M 334 40 Q 340 30 336 22 M 346 40 Q 352 30 348 22" stroke={P.grey} strokeWidth={2} fill="none" />
      <Label x={312} y={34} text={L('Tour', 'Tower')} size={10} anchor="end" />
      <Path d="M 100 214 L 110 214 L 110 48 L 300 48 L 300 70 L 324 70" stroke={HOT} strokeWidth={3} fill="none" />
      <Path d="M 100 222 L 114 222 L 114 52 L 296 52 L 296 78 L 324 78" stroke={'#f2a07f'} strokeWidth={3} fill="none" />

      {/* AHU on roof */}
      <Halo x={150} y={58} w={70} h={26} on={hl('ahu')} />
      <Rect x={150} y={58} width={70} height={26} rx={4} fill={P.white} stroke={P.green} strokeWidth={2} />
      <Label x={185} y={75} text={L('CTA', 'AHU')} size={11} color={P.green} />
      <Arrow x1={232} y1={71} x2={222} y2={71} color={P.greenMid} width={2} />
      <Label x={236} y={74} text={L('air neuf', 'fresh air')} size={9} color={P.greenMid} anchor="start" />
      <Rect x={180} y={84} width={10} height={150} fill={P.mint} stroke={P.greenLight} />

      {/* chilled water risers */}
      <Halo x={126} y={90} w={14} h={166} on={hl('water')} />
      <Path d="M 104 236 L 130 236 L 130 92" stroke={COLD} strokeWidth={4} fill="none" />
      <Path d="M 104 246 L 138 246 L 138 100" stroke={'#93bdf0'} strokeWidth={4} fill="none" />
      <Label x={150} y={252} text="7 °C → / ← 12 °C" size={9} color={COLD} anchor="start" />

      {/* fan coils */}
      {[96, 184].map((y) => (
        <G key={y}>
          <Path d={`M 130 ${y + 10} L 250 ${y + 10}`} stroke={COLD} strokeWidth={2} fill="none" />
          <Path d={`M 138 ${y + 16} L 250 ${y + 16}`} stroke={'#93bdf0'} strokeWidth={2} fill="none" />
          <Halo x={250} y={y + 4} w={48} h={18} on={hl('fancoil')} />
          <Rect x={250} y={y + 4} width={48} height={18} rx={4} fill={P.white} stroke={P.green} strokeWidth={2} />
          <Label x={274} y={y + 17} text={L('VC', 'FCU')} size={10} color={P.green} />
          <Path d={`M 300 ${y + 24} Q 330 ${y + 34} 352 ${y + 28}`} stroke={COLD} strokeWidth={2} fill="none" strokeDasharray="4 3" />
          <Person x={330} y={y + 76} s={0.4} shirt={P.greenMid} />
        </G>
      ))}
      <Label x={200} y={284} text={L('Eau glacée → ventilo-convecteurs ; CTA → air neuf traité', 'Chilled water → fan coils; AHU → treated fresh air')} size={10} color={P.inkSoft} weight="600" />
    </SceneFrame>
  );
}

/** Bioclimatic design: orientation, shading, colours and insulation. */
export function BuildingDesign({ lang }: SceneProps) {
  const L = pick(lang);
  return (
    <SceneFrame>
      {/* plan view: long E–W axis */}
      <Rect x={12} y={40} width={182} height={230} rx={12} fill={P.white} stroke={P.line} />
      <Label x={103} y={60} text={L('Vue en plan', 'Plan view')} size={10.5} color={P.inkSoft} />
      <Arrow x1={30} y1={104} x2={30} y2={74} color={P.inkSoft} width={2} />
      <Label x={30} y={70} text="N" size={10} color={P.inkSoft} />
      <Rect x={44} y={84} width={118} height={46} fill={P.sky} stroke={P.ink} strokeWidth={2} />
      <Rect x={40} y={84} width={8} height={46} fill={P.navy} />
      <Rect x={158} y={84} width={8} height={46} fill={P.navy} />
      {[0, 1, 2, 3].map((i) => (
        <G key={i}>
          <Rect x={56 + i * 26} y={81} width={14} height={6} fill={P.blue} />
          <Rect x={56 + i * 26} y={127} width={14} height={6} fill={P.blue} />
        </G>
      ))}
      <Path d="M 30 146 Q 103 236 176 146" stroke={P.orange} strokeWidth={2} fill="none" strokeDasharray="5 4" />
      <Circle cx={103} cy={191} r={10} fill={P.yellow} />
      <Label x={24} y={146} text={L('O', 'W')} size={11} color={P.orange} />
      <Label x={182} y={146} text={L('E', 'E')} size={11} color={P.orange} />
      <Label x={103} y={170} text={L('Sud', 'South')} size={9} color={P.inkSoft} weight="600" />
      <Label x={103} y={238} text={L('Façades longues au N et au S', 'Long facades facing N and S')} size={9.5} />
      <Label x={103} y={252} text={L('Murs E / O aveugles', 'Blind E / W walls')} size={9.5} color={P.navy} />

      {/* section: overhang & insulation */}
      <Rect x={206} y={40} width={182} height={230} rx={12} fill={P.white} stroke={P.line} />
      <Label x={297} y={60} text={L('Coupe', 'Section')} size={10.5} color={P.inkSoft} />
      <Circle cx={372} cy={80} r={10} fill={P.yellow} />
      <Arrow x1={362} y1={88} x2={320} y2={126} color={P.orange} width={2.4} />
      <Rect x={232} y={130} width={110} height={110} fill={P.mint} stroke={P.ink} strokeWidth={2} />
      <Rect x={222} y={118} width={150} height={10} fill={P.white} stroke={P.ink} strokeWidth={1.5} />
      <Rect x={226} y={128} width={120} height={4} fill={P.yellow} />
      <Rect x={338} y={160} width={6} height={50} fill={P.sky} stroke={P.blue} />
      <Label x={334} y={110} text={L('auvent', 'overhang')} size={9.5} anchor="end" color={P.orange} />
      <Label x={287} y={150} text={L('isolation toiture', 'roof insulation')} size={9} color={'#7c2d12'} />
      <Label x={287} y={256} text={L('Toit et murs clairs', 'Light roof and walls')} size={9.5} />
      <Label x={287} y={190} text={L('inertie', 'inertia')} size={9.5} color={P.green} />
    </SceneFrame>
  );
}

/** Annual energy breakdown of the chapter 2 example. */
export function EnergyBreakdown({ lang }: SceneProps) {
  const L = pick(lang);
  const rows = [
    { k: L('Compresseur', 'Compressor'), v: 29556, c: P.green },
    { k: L('Auxiliaires permanents', 'Permanent auxiliaries'), v: 4380, c: P.greenMid },
    { k: L('Dégivrage', 'Defrost'), v: 2188, c: P.greenLight },
    { k: L('Auxiliaires non permanents', 'Non-permanent aux.'), v: 1651, c: P.grey },
  ];
  const max = 29556;
  return (
    <SceneFrame>
      <Tag x={200} y={22} w={280} text={L('Où partent les kWh ? (exemple, 1 an)', 'Where do the kWh go? (example, 1 year)')} />
      {rows.map((r, i) => (
        <G key={r.k}>
          <Label x={150} y={66 + i * 36} text={r.k} size={10} anchor="end" />
          <Rect x={158} y={54 + i * 36} width={(r.v / max) * 180} height={18} rx={4} fill={r.c} />
          <Label x={162 + (r.v / max) * 180} y={67 + i * 36} text={`${r.v.toLocaleString(lang === 'fr' ? 'fr-FR' : 'en-US')}`} size={9.5} anchor="start" color={P.inkSoft} />
        </G>
      ))}
      <Line x1={20} y1={198} x2={380} y2={198} stroke={P.line} />
      <Label x={20} y={220} text={L('Électricité C = 37 775 kWh/an', 'Electricity C = 37,775 kWh/yr')} size={11} anchor="start" />
      <Label x={20} y={240} text={L('Froid produit EF = 61 120 kWh/an', 'Cooling produced EF = 61,120 kWh/yr')} size={11} anchor="start" color={COLD} />
      <Rect x={250} y={208} width={136} height={40} rx={8} fill={'#fff7e6'} stroke={P.orange} />
      <Label x={318} y={226} text="COE = EF / C" size={11} />
      <Label x={318} y={242} text="= 1,62 (< 3 !)" size={11} color={P.red} />
      <Label x={200} y={278} text={L('Les auxiliaires et le dégivrage pèsent ~22 % de la facture', 'Auxiliaries and defrost weigh ~22 % of the bill')} size={10} color={P.inkSoft} weight="600" />
    </SceneFrame>
  );
}
