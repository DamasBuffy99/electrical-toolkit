import React from 'react';
import { Circle, G, Line, Path, Polygon, Rect } from 'react-native-svg';
import type { Lang } from '../../lib/language';
import { Arrow, CheckBadge, Label, P, SceneFrame, Tag } from './kit';

type SceneProps = { lang: Lang };
const pick = (lang: Lang) => (fr: string, en: string) => (lang === 'fr' ? fr : en);

const COLD = '#4c8fe0';
const COLD_LIGHT = '#cfe2fb';
const HOT = '#e4572e';
const HOT_LIGHT = '#fde3d6';

/** Pressure–enthalpy chart with the saturation dome and the 7 points of a real cycle. */
export function PhDiagram({ lang, highlight }: SceneProps & { highlight?: string }) {
  const L = pick(lang);
  const on = (k: string) => !highlight || highlight === k;
  // chart frame: x 50..380 (enthalpy), y 40..250 (pressure, up = higher)
  const dome = 'M 70 250 C 80 150 140 70 205 62 C 270 70 320 150 345 250';
  const yHP = 95;
  const yBP = 205;
  return (
    <SceneFrame>
      <Line x1={50} y1={260} x2={385} y2={260} stroke={P.ink} strokeWidth={1.6} />
      <Line x1={50} y1={260} x2={50} y2={40} stroke={P.ink} strokeWidth={1.6} />
      <Label x={380} y={276} text={L('h (kJ/kg)', 'h (kJ/kg)')} size={10} color={P.inkSoft} anchor="end" />
      <Label x={20} y={46} text={L('p (bar)', 'p (bar)')} size={10} color={P.inkSoft} anchor="start" />
      <Path d={dome} stroke={P.green} strokeWidth={2.4} fill={P.mint} opacity={0.9} />
      <Label x={110} y={238} text={L('liquide', 'liquid')} size={9.5} color={P.green} />
      <Label x={205} y={150} text={L('liquide + vapeur', 'liquid + vapour')} size={9.5} color={P.green} />
      <Label x={374} y={128} text={L('vapeur', 'vapour')} size={9.5} color={P.green} />

      {/* condensation line (HP): 2 → 3 → 4 → 5 */}
      <G opacity={on('condenser') ? 1 : 0.25}>
        <Line x1={330} y1={yHP} x2={290} y2={yHP} stroke={HOT} strokeWidth={4} />
        <Line x1={290} y1={yHP} x2={118} y2={yHP} stroke={HOT} strokeWidth={4} />
        <Line x1={118} y1={yHP} x2={88} y2={yHP} stroke={P.orange} strokeWidth={4} />
        <Label x={210} y={yHP - 8} text={L('condensation (HP)', 'condensation (HP)')} size={9.5} color={HOT} />
      </G>
      {/* expansion 5 → 6 */}
      <G opacity={on('valve') ? 1 : 0.25}>
        <Line x1={88} y1={yHP} x2={88} y2={yBP} stroke={P.greenMid} strokeWidth={3} strokeDasharray="6 4" />
        <Label x={95} y={172} text={L('détente', 'expansion')} size={9.5} color={P.greenMid} anchor="start" />
      </G>
      {/* evaporation 6 → 7 → 1 */}
      <G opacity={on('evaporator') ? 1 : 0.25}>
        <Line x1={88} y1={yBP} x2={300} y2={yBP} stroke={COLD} strokeWidth={4} />
        <Line x1={300} y1={yBP} x2={318} y2={yBP} stroke="#93bdf0" strokeWidth={4} />
        <Label x={200} y={yBP + 16} text={L('évaporation (BP)', 'evaporation (LP)')} size={9.5} color={COLD} />
      </G>
      {/* compression 1 → 2 */}
      <G opacity={on('compressor') ? 1 : 0.25}>
        <Line x1={318} y1={yBP} x2={345} y2={yHP} stroke={P.ink} strokeWidth={3.2} />
        <Label x={396} y={182} text={L('compression', 'compression')} size={9.5} anchor="end" />
      </G>
      {[
        [318, yBP, '1'],
        [345, yHP, '2'],
        [290, yHP, '3'],
        [118, yHP, '4'],
        [88, yHP, '5'],
        [88, yBP, '6'],
        [300, yBP, '7'],
      ].map(([x, y, n]) => (
        <G key={n as string}>
          <Circle cx={x as number} cy={y as number} r={8} fill={P.white} stroke={P.ink} strokeWidth={1.5} />
          <Label x={x as number} y={(y as number) + 3.5} text={n as string} size={9} />
        </G>
      ))}
      {/* enthalpy differences */}
      <Line x1={88} y1={240} x2={318} y2={240} stroke={COLD} strokeWidth={1.4} />
      <Label x={210} y={252} text={L('h1 − h5 : froid utile par kg', 'h1 − h5: useful cooling per kg')} size={9.5} color={COLD} />
      <Line x1={318} y1={58} x2={345} y2={58} stroke={P.ink} strokeWidth={1.4} />
      <Label x={330} y={52} text={L('travail', 'work')} size={9} />
      <Label x={103} y={yHP - 14} text={L('sous-refr.', 'subcool.')} size={8.5} color={P.orange} />
      <Label x={309} y={yBP - 13} text={L('surch.', 'superh.')} size={8.5} color={COLD} />
    </SceneFrame>
  );
}

function Gauge({ x, y, r = 20, color, value, label }: { x: number; y: number; r?: number; color: string; value: string; label: string }) {
  return (
    <G>
      <Circle cx={x} cy={y} r={r} fill={P.white} stroke={color} strokeWidth={3} />
      <Line x1={x} y1={y} x2={x + r * 0.6} y2={y - r * 0.5} stroke={P.ink} strokeWidth={1.6} />
      <Label x={x} y={y + r + 13} text={value} size={9.5} color={color} />
      <Label x={x} y={y - r - 5} text={label} size={9} color={P.inkSoft} weight="600" />
    </G>
  );
}

function Thermo({ x, y, value }: { x: number; y: number; value: string }) {
  return (
    <G>
      <Rect x={x - 4} y={y - 26} width={8} height={26} rx={4} fill={P.white} stroke={P.ink} strokeWidth={1.2} />
      <Circle cx={x} cy={y + 3} r={6} fill={HOT} />
      <Rect x={x - 1.5} y={y - 16} width={3} height={18} fill={HOT} />
      <Label x={x + 10} y={y - 6} text={value} size={9.5} anchor="start" />
    </G>
  );
}

/** How superheat and subcooling are measured with gauges and a contact thermometer. */
export function SuperheatSubcooling({ lang }: SceneProps) {
  const L = pick(lang);
  return (
    <SceneFrame>
      {/* evaporator side */}
      <Rect x={12} y={40} width={182} height={220} rx={12} fill={COLD_LIGHT} opacity={0.5} />
      <Label x={103} y={58} text={L('Évaporateur (BP)', 'Evaporator (LP)')} size={11} color={COLD} />
      <Rect x={30} y={140} width={90} height={56} rx={6} fill={P.white} stroke={COLD} strokeWidth={2} />
      <Path d="M 38 150 L 112 150 L 112 162 L 38 162 L 38 174 L 112 174 L 112 186" stroke={COLD} strokeWidth={2.4} fill="none" />
      <Line x1={112} y1={186} x2={170} y2={186} stroke={COLD} strokeWidth={3} />
      <Gauge x={80} y={94} color={COLD} value={L('BP → 2 °C', 'LP → 2 °C')} label={L('manomètre', 'gauge')} />
      <Thermo x={160} y={180} value="9 °C" />
      <Label x={103} y={214} text={L('Surchauffe = T sortie − T évap.', 'Superheat = T outlet − T evap.')} size={10} />
      <Label x={103} y={232} text="9 − 2 = 7 K" size={12} color={COLD} />
      <Label x={103} y={250} text={L('normal : 5 à 8 K', 'normal: 5 to 8 K')} size={9.5} color={P.inkSoft} weight="600" />

      {/* condenser side */}
      <Rect x={206} y={40} width={182} height={220} rx={12} fill={HOT_LIGHT} opacity={0.6} />
      <Label x={297} y={58} text={L('Condenseur (HP)', 'Condenser (HP)')} size={11} color={HOT} />
      <Rect x={226} y={140} width={90} height={56} rx={6} fill={P.white} stroke={HOT} strokeWidth={2} />
      <Path d="M 234 150 L 308 150 L 308 162 L 234 162 L 234 174 L 308 174 L 308 186" stroke={HOT} strokeWidth={2.4} fill="none" />
      <Line x1={308} y1={186} x2={366} y2={186} stroke={P.orange} strokeWidth={3} />
      <Gauge x={276} y={94} color={HOT} value={L('HP → 45 °C', 'HP → 45 °C')} label={L('manomètre', 'gauge')} />
      <Thermo x={356} y={180} value="40 °C" />
      <Label x={297} y={214} text={L('Sous-refr. = T cond. − T sortie', 'Subcool. = T cond. − T outlet')} size={10} />
      <Label x={297} y={232} text="45 − 40 = 5 K" size={12} color={HOT} />
      <Label x={297} y={250} text={L('normal : 4 à 7 K', 'normal: 4 to 7 K')} size={9.5} color={P.inkSoft} weight="600" />
      <Label x={200} y={284} text={L('La pression lue donne la température de saturation (réglette du fluide)', 'The gauge pressure gives the saturation temperature (refrigerant scale)')} size={9.5} color={P.inkSoft} weight="600" />
    </SceneFrame>
  );
}

/** Simplified psychrometric chart: cooling coil process (sensible, dehumidification, reheat). */
export function PsychroProcess({ lang, variant = 'cooling' }: SceneProps & { variant?: string }) {
  const L = pick(lang);
  const X = (t: number) => 50 + ((t - 0) / 45) * 320;
  const Y = (w: number) => 250 - (w / 30) * 200; // w in g/kg
  const ws = (t: number) => 622 * (0.61094 * Math.exp((17.625 * t) / (t + 243.04))) / (101.325 - 0.61094 * Math.exp((17.625 * t) / (t + 243.04)));
  let sat = '';
  for (let t = 0; t <= 34; t += 1) sat += `${sat ? 'L' : 'M'} ${X(t).toFixed(1)} ${Y(ws(t)).toFixed(1)} `;
  let rh50 = '';
  for (let t = 0; t <= 42; t += 1) rh50 += `${rh50 ? 'L' : 'M'} ${X(t).toFixed(1)} ${Y(ws(t) * 0.5).toFixed(1)} `;
  const A = { t: 32, w: 21 }; // hot humid outdoor-ish air
  const dew = { t: 25.5, w: 21 };
  const B = { t: 13, w: 9.3 };
  const C = { t: 22, w: 9.3 };
  return (
    <SceneFrame>
      <Line x1={50} y1={250} x2={380} y2={250} stroke={P.ink} strokeWidth={1.5} />
      <Line x1={380} y1={250} x2={380} y2={45} stroke={P.ink} strokeWidth={1.5} />
      {[0, 10, 20, 30, 40].map((t) => (
        <G key={t}>
          <Line x1={X(t)} y1={250} x2={X(t)} y2={254} stroke={P.ink} />
          <Label x={X(t)} y={266} text={`${t}`} size={9} color={P.inkSoft} />
        </G>
      ))}
      {[0, 10, 20, 30].map((w) => (
        <G key={w}>
          <Line x1={380} y1={Y(w)} x2={384} y2={Y(w)} stroke={P.ink} />
          <Label x={388} y={Y(w) + 3} text={`${w}`} size={9} color={P.inkSoft} anchor="start" />
        </G>
      ))}
      <Label x={215} y={282} text={L('Température sèche (°C)', 'Dry-bulb temperature (°C)')} size={10} color={P.inkSoft} />
      <Label x={372} y={40} text={L('ω (g/kg)', 'ω (g/kg)')} size={9.5} color={P.inkSoft} anchor="end" />
      <Path d={sat} stroke={P.green} strokeWidth={2.4} fill="none" />
      <Label x={X(18)} y={Y(ws(18)) - 8} text={L('saturation 100 %', 'saturation 100 %')} size={9} color={P.green} anchor="end" />
      <Path d={rh50} stroke={P.greenLight} strokeWidth={1.5} fill="none" strokeDasharray="4 3" />
      <Label x={X(40)} y={Y(ws(40) * 0.5) - 6} text="50 %" size={9} color={P.greenMid} />

      {variant === 'cooling' ? (
        <G>
          <Arrow x1={X(A.t)} y1={Y(A.w)} x2={X(dew.t) + 4} y2={Y(dew.w)} color={COLD} width={2.6} />
          <Path d={`M ${X(dew.t)} ${Y(dew.w)} Q ${X(19)} ${Y(14)} ${X(B.t)} ${Y(B.w)}`} stroke={COLD} strokeWidth={2.6} fill="none" />
          <Arrow x1={X(B.t)} y1={Y(B.w)} x2={X(C.t)} y2={Y(C.w)} color={HOT} width={2.4} />
          {[
            [A, 'A'],
            [dew, 'R'],
            [B, 'B'],
            [C, 'C'],
          ].map(([pt, n]) => (
            <G key={n as string}>
              <Circle cx={X((pt as typeof A).t)} cy={Y((pt as typeof A).w)} r={6} fill={P.white} stroke={P.ink} strokeWidth={1.5} />
              <Label x={X((pt as typeof A).t)} y={Y((pt as typeof A).w) - 10} text={n as string} size={10} />
            </G>
          ))}
          <Rect x={54} y={44} width={146} height={64} rx={8} fill={P.white} stroke={P.line} />
          <Label x={61} y={59} text={L('A→R : refroidissement', 'A→R: sensible cooling')} size={9} color={COLD} anchor="start" />
          <Label x={61} y={73} text={L('R : rosée, l’eau condense', 'R: dew point, condensing')} size={9} color={COLD} anchor="start" />
          <Label x={61} y={87} text={L('R→B : froid + séchage', 'R→B: cooling + drying')} size={9} color={COLD} anchor="start" />
          <Label x={61} y={101} text={L('B→C : réchauffage', 'B→C: reheating')} size={9} color={HOT} anchor="start" />
        </G>
      ) : (
        <G>
          <Arrow x1={X(38)} y1={Y(10)} x2={X(26)} y2={Y(15)} color={COLD} width={2.6} />
          <Circle cx={X(38)} cy={Y(10)} r={6} fill={P.white} stroke={P.ink} strokeWidth={1.5} />
          <Circle cx={X(26)} cy={Y(15)} r={6} fill={P.white} stroke={P.ink} strokeWidth={1.5} />
          <Rect x={54} y={44} width={168} height={52} rx={8} fill={P.white} stroke={P.line} />
          <Label x={61} y={60} text={L('Refroidissement évaporatif', 'Evaporative cooling')} size={9.5} color={COLD} anchor="start" />
          <Label x={61} y={74} text={L('l’air sec se rafraîchit', 'dry air cools down')} size={9} color={P.inkSoft} anchor="start" weight="600" />
          <Label x={61} y={87} text={L('en s’humidifiant', 'while humidifying')} size={9} color={P.inkSoft} anchor="start" weight="600" />
        </G>
      )}
    </SceneFrame>
  );
}

/** The main compressor technologies and their usual power ranges. */
export function CompressorTypes({ lang }: SceneProps) {
  const L = pick(lang);
  const card = (x: number, y: number, title: string, range: string, children: React.ReactNode) => (
    <G>
      <Rect x={x} y={y} width={182} height={112} rx={12} fill={P.white} stroke={P.line} />
      {children}
      <Label x={x + 91} y={y + 90} text={title} size={11} />
      <Label x={x + 91} y={y + 104} text={range} size={9} color={P.inkSoft} weight="600" />
    </G>
  );
  return (
    <SceneFrame>
      {card(
        12,
        36,
        L('À pistons', 'Reciprocating'),
        L('hermétique, semi-hermétique, ouvert', 'hermetic, semi-hermetic, open'),
        <G>
          <Rect x={80} y={46} width={26} height={36} fill={P.greyLight} stroke={P.steel} />
          <Rect x={82} y={58} width={22} height={12} fill={P.green} />
          <Line x1={93} y1={70} x2={93} y2={80} stroke={P.ink} strokeWidth={2} />
          <Circle cx={93} cy={80} r={4} fill={P.ink} />
        </G>
      )}
      {card(
        206,
        36,
        L('Rotatif', 'Rotary'),
        L('piston roulant ou palettes, petits splits', 'rolling piston or vanes, small splits'),
        <G>
          <Circle cx={297} cy={64} r={22} fill={P.greyLight} stroke={P.steel} />
          <Circle cx={301} cy={68} r={14} fill={P.green} />
          <Line x1={297} y1={42} x2={297} y2={54} stroke={P.ink} strokeWidth={2.4} />
        </G>
      )}
      {card(
        12,
        156,
        L('Scroll (spiro-orbital)', 'Scroll'),
        L('silencieux, idéal en vitesse variable', 'quiet, ideal for variable speed'),
        <G>
          <Path d="M 93 186 m -4 0 a 4 4 0 1 1 8 0 a 8 8 0 1 1 -16 0 a 12 12 0 1 1 24 0 a 16 16 0 1 1 -32 0" stroke={P.green} strokeWidth={2.4} fill="none" />
          <Path d="M 96 186 m -4 0 a 6 6 0 1 0 12 0 a 10 10 0 1 0 -20 0 a 14 14 0 1 0 28 0" stroke={P.orange} strokeWidth={2} fill="none" />
        </G>
      )}
      {card(
        206,
        156,
        L('Vis et centrifuge', 'Screw and centrifugal'),
        L('vis 30–1 000 kW · centrifuge > 1 000 kW', 'screw 30–1,000 kW · centrifugal > 1,000 kW'),
        <G>
          <Path d="M 250 186 q 6 -14 12 0 t 12 0 t 12 0 t 12 0" stroke={P.green} strokeWidth={3} fill="none" />
          <Path d="M 250 196 q 6 -14 12 0 t 12 0 t 12 0 t 12 0" stroke={P.greenMid} strokeWidth={3} fill="none" />
          <Circle cx={334} cy={190} r={14} fill={P.greyLight} stroke={P.steel} />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <Line key={i} x1={334} y1={190} x2={334 + Math.cos((i * Math.PI) / 3) * 13} y2={190 + Math.sin((i * Math.PI) / 3) * 13} stroke={P.steel} strokeWidth={1.4} />
          ))}
        </G>
      )}
      <Label x={200} y={286} text={L('Inverter : la fréquence fait varier la vitesse, donc la puissance', 'Inverter: frequency varies the speed, hence the capacity')} size={10} color={P.inkSoft} weight="600" />
    </SceneFrame>
  );
}

/** Manifold gauge set connected to the service valves for reading, evacuation or charging. */
export function ManifoldSetup({ lang, mode = 'read' }: SceneProps & { mode?: string }) {
  const L = pick(lang);
  const title = mode === 'vacuum' ? L('Tirage au vide', 'Evacuation') : mode === 'charge' ? L('Charge en fluide', 'Refrigerant charging') : L('Lecture des pressions', 'Reading pressures');
  return (
    <SceneFrame>
      <Tag x={200} y={22} w={220} text={title} />
      {/* manifold body */}
      <Rect x={130} y={92} width={140} height={34} rx={8} fill={P.greyLight} stroke={P.steel} strokeWidth={1.6} />
      <Gauge x={150} y={66} r={18} color={COLD} value="" label="BP" />
      <Gauge x={250} y={66} r={18} color={HOT} value="" label="HP" />
      <Circle cx={145} cy={109} r={7} fill={mode === 'read' ? P.white : COLD} stroke={COLD} strokeWidth={2} />
      <Circle cx={255} cy={109} r={7} fill={mode === 'read' ? P.white : HOT} stroke={HOT} strokeWidth={2} />
      {/* hoses */}
      <Path d="M 145 126 C 145 170 90 170 80 210" stroke={COLD} strokeWidth={4} fill="none" />
      <Path d="M 255 126 C 255 170 310 170 320 210" stroke={HOT} strokeWidth={4} fill="none" />
      <Path d="M 200 126 L 200 200" stroke={P.yellow} strokeWidth={4} fill="none" />
      {/* unit service valves */}
      <Rect x={40} y={210} width={320} height={44} rx={8} fill={P.white} stroke={P.line} />
      <Rect x={70} y={204} width={20} height={14} rx={3} fill={COLD} />
      <Rect x={310} y={204} width={20} height={14} rx={3} fill={HOT} />
      <Label x={80} y={240} text={L('vanne BP (aspiration)', 'LP valve (suction)')} size={9.5} color={COLD} />
      <Label x={320} y={240} text={L('vanne HP (liquide)', 'HP valve (liquid)')} size={9.5} color={HOT} />
      {/* center device */}
      {mode === 'vacuum' ? (
        <G>
          <Rect x={176} y={200} width={48} height={30} rx={6} fill={P.navy} />
          <Label x={200} y={220} text={L('pompe', 'pump')} size={9.5} color={P.white} />
          <Label x={200} y={272} text={L('vide < tension de vapeur (ex. 17 mbar à 15 °C)', 'vacuum < vapour pressure (e.g. 17 mbar at 15 °C)')} size={9.5} />
        </G>
      ) : mode === 'charge' ? (
        <G>
          <Rect x={184} y={186} width={32} height={44} rx={10} fill={P.green} />
          <Rect x={176} y={230} width={48} height={8} rx={2} fill={P.steel} />
          <Label x={200} y={250} text={L('balance', 'scale')} size={9} color={P.inkSoft} />
          <Label x={200} y={272} text={L('zéotropes (R407C, R410A) : charger en liquide', 'zeotropes (R407C, R410A): charge as liquid')} size={9.5} />
        </G>
      ) : (
        <G>
          <Label x={200} y={196} text={L('voie centrale fermée', 'centre port closed')} size={9} color={P.inkSoft} />
          <Label x={200} y={272} text={L('vannes du manifold fermées : on lit seulement', 'manifold valves closed: reading only')} size={9.5} />
        </G>
      )}
    </SceneFrame>
  );
}

/** Heat pump: the 4-way valve swaps the roles of the two coils. */
export function FourWayValve({ lang }: SceneProps) {
  const L = pick(lang);
  const loop = (x: number, mode: 'cool' | 'heat') => {
    const inside = mode === 'cool' ? COLD : HOT;
    const outside = mode === 'cool' ? HOT : COLD;
    return (
      <G>
        <Rect x={x} y={40} width={182} height={222} rx={12} fill={P.white} stroke={P.line} />
        <Label x={x + 91} y={60} text={mode === 'cool' ? L('Mode froid (été)', 'Cooling mode') : L('Mode chaud (hiver)', 'Heating mode')} size={11} color={mode === 'cool' ? COLD : HOT} />
        <Rect x={x + 14} y={80} width={60} height={46} rx={6} fill={mode === 'cool' ? COLD_LIGHT : HOT_LIGHT} stroke={inside} strokeWidth={2} />
        <Label x={x + 44} y={100} text={L('intérieur', 'indoor')} size={9} />
        <Label x={x + 44} y={114} text={mode === 'cool' ? L('évaporateur', 'evaporator') : L('condenseur', 'condenser')} size={8.5} color={inside} />
        <Rect x={x + 108} y={80} width={60} height={46} rx={6} fill={mode === 'cool' ? HOT_LIGHT : COLD_LIGHT} stroke={outside} strokeWidth={2} />
        <Label x={x + 138} y={100} text={L('extérieur', 'outdoor')} size={9} />
        <Label x={x + 138} y={114} text={mode === 'cool' ? L('condenseur', 'condenser') : L('évaporateur', 'evaporator')} size={8.5} color={outside} />
        {/* 4-way valve */}
        <Rect x={x + 71} y={160} width={40} height={26} rx={5} fill={P.navy} />
        <Label x={x + 91} y={177} text="V4V" size={9.5} color={P.white} />
        <Circle cx={x + 91} cy={226} r={14} fill={P.green} />
        <Label x={x + 91} y={230} text="C" size={10} color={P.white} />
        <Path d={`M ${x + 85} 213 L ${x + 85} 186`} stroke={HOT} strokeWidth={3} />
        <Path d={`M ${x + 97} 186 L ${x + 97} 213`} stroke={COLD} strokeWidth={3} />
        <Path
          d={mode === 'cool' ? `M ${x + 111} 168 L ${x + 138} 168 L ${x + 138} 126` : `M ${x + 71} 168 L ${x + 44} 168 L ${x + 44} 126`}
          stroke={HOT}
          strokeWidth={3}
          fill="none"
        />
        <Path
          d={mode === 'cool' ? `M ${x + 44} 126 L ${x + 44} 180 L ${x + 71} 180` : `M ${x + 138} 126 L ${x + 138} 180 L ${x + 111} 180`}
          stroke={COLD}
          strokeWidth={3}
          fill="none"
        />
        <Path d={`M ${x + 74} 103 L ${x + 108} 103`} stroke={P.greenMid} strokeWidth={2} strokeDasharray="4 3" />
        <Label x={x + 91} y={75} text={L('détendeur', 'exp. valve')} size={8} color={P.greenMid} />
        <Label x={x + 91} y={254} text={L('gaz chaud → ', 'hot gas → ') + (mode === 'cool' ? L('dehors', 'outside') : L('dedans', 'inside'))} size={9} color={HOT} />
      </G>
    );
  };
  return (
    <SceneFrame>
      {loop(12, 'cool')}
      {loop(206, 'heat')}
      <Label x={200} y={286} text={L('Le dégivrage se fait aussi en inversant le cycle quelques minutes', 'Defrosting is also done by reversing the cycle for a few minutes')} size={9.5} color={P.inkSoft} weight="600" />
    </SceneFrame>
  );
}

/** Motorised 3-way valve: mixing (variable temperature) vs diverting (variable flow). */
export function ThreeWayValve({ lang }: SceneProps) {
  const L = pick(lang);
  const WARM = P.orange;
  const valve = (vx: number, vy: number, side: 'left' | 'right') => (
    <G>
      <Polygon points={`${vx - 7},${vy - 9} ${vx + 7},${vy - 9} ${vx},${vy}`} fill={P.navy} />
      <Polygon points={`${vx - 7},${vy + 9} ${vx + 7},${vy + 9} ${vx},${vy}`} fill={P.navy} />
      <Polygon points={side === 'right' ? `${vx + 9},${vy - 7} ${vx + 9},${vy + 7} ${vx},${vy}` : `${vx - 9},${vy - 7} ${vx - 9},${vy + 7} ${vx},${vy}`} fill={P.navy} />
      <Label x={side === 'right' ? vx - 11 : vx + 11} y={vy + 3} text="V3V" size={9} color={P.navy} anchor={side === 'right' ? 'end' : 'start'} />
    </G>
  );
  const pump = (cx: number, cy: number) => (
    <G>
      <Circle cx={cx} cy={cy} r={9} fill={P.green} />
      <Label x={cx} y={cy + 3.5} text="P" size={9} color={P.white} />
    </G>
  );
  const panel = (x: number, mode: 'mix' | 'divert') => {
    const lx = x + 34;
    const rx = x + 148;
    const supply = mode === 'mix' ? HOT : COLD;
    const ret = mode === 'mix' ? COLD : WARM;
    return (
      <G>
        <Rect x={x} y={40} width={182} height={222} rx={12} fill={P.white} stroke={P.line} />
        <Label x={x + 91} y={60} text={mode === 'mix' ? L('Montage en mélange', 'Mixing') : L('Montage en décharge', 'Diverting')} size={11} />
        {/* coil */}
        <Rect x={x + 61} y={72} width={60} height={28} rx={6} fill={P.mint} stroke={P.green} strokeWidth={2} />
        <Label x={x + 91} y={90} text={L('batterie', 'coil')} size={9.5} color={P.green} />
        {/* production */}
        <Rect x={x + 22} y={176} width={138} height={22} rx={6} fill={mode === 'mix' ? HOT_LIGHT : COLD_LIGHT} stroke={supply} strokeWidth={1.5} />
        <Label x={x + 91} y={191} text={mode === 'mix' ? L('chaudière / PAC', 'boiler / heat pump') : L('groupe d’eau glacée', 'chiller')} size={9} />
        {mode === 'mix' ? (
          <G>
            <Path d={`M ${lx} 176 L ${lx} 154`} stroke={supply} strokeWidth={3} fill="none" />
            <Path d={`M ${lx} 136 L ${lx} 86 L ${x + 61} 86`} stroke={WARM} strokeWidth={3} fill="none" />
            <Path d={`M ${x + 121} 86 L ${rx} 86 L ${rx} 176`} stroke={ret} strokeWidth={3} fill="none" />
            <Arrow x1={rx} y1={145} x2={lx + 10} y2={145} color={ret} width={2.4} />
            {valve(lx, 145, 'right')}
            {pump(lx, 114)}
          </G>
        ) : (
          <G>
            <Path d={`M ${lx} 176 L ${lx} 86 L ${x + 61} 86`} stroke={supply} strokeWidth={3} fill="none" />
            <Path d={`M ${x + 121} 86 L ${rx} 86 L ${rx} 136`} stroke={ret} strokeWidth={3} fill="none" />
            <Path d={`M ${rx} 154 L ${rx} 176`} stroke={WARM} strokeWidth={3} fill="none" />
            <Arrow x1={lx} y1={145} x2={rx - 10} y2={145} color={supply} width={2.4} />
            {valve(rx, 145, 'left')}
            {pump(lx, 163)}
          </G>
        )}
        <Label x={x + 91} y={222} text={mode === 'mix' ? L('débit constant, T° variable', 'constant flow, variable T') : L('T° constante, débit variable', 'constant T, variable flow')} size={9.5} color={P.inkSoft} weight="600" />
        <Label x={x + 91} y={237} text={mode === 'mix' ? L('dans la batterie : chauffage', 'in the coil: heating') : L('dans la batterie : climatisation', 'in the coil: cooling')} size={9} color={P.inkSoft} weight="600" />
        <Label x={x + 91} y={252} text={mode === 'mix' ? L('le retour est recyclé', 'return water is recycled') : L('l’excédent contourne la batterie', 'surplus bypasses the coil')} size={9} color={P.inkSoft} weight="600" />
      </G>
    );
  };
  return (
    <SceneFrame>
      {panel(12, 'mix')}
      {panel(206, 'divert')}
      <Label x={200} y={286} text={L('Autorité de vanne conseillée : 0,5 à 0,7', 'Recommended valve authority: 0.5 to 0.7')} size={10} color={P.inkSoft} weight="600" />
    </SceneFrame>
  );
}

/** Star–delta starting of a three-phase motor. */
export function StarDelta({ lang }: SceneProps) {
  const L = pick(lang);
  return (
    <SceneFrame>
      <Rect x={12} y={40} width={182} height={200} rx={12} fill={P.white} stroke={P.line} />
      <Label x={103} y={60} text={L('1. Étoile (démarrage)', '1. Star (starting)')} size={11} color={P.green} />
      {[0, 1, 2].map((i) => {
        const a = -Math.PI / 2 + (i * 2 * Math.PI) / 3;
        return <Line key={i} x1={103} y1={140} x2={103 + Math.cos(a) * 58} y2={140 + Math.sin(a) * 58} stroke={P.green} strokeWidth={4} />;
      })}
      <Circle cx={103} cy={140} r={6} fill={P.ink} />
      <Label x={103} y={222} text={L('230 V par enroulement', '230 V per winding')} size={10} />
      <Rect x={206} y={40} width={182} height={200} rx={12} fill={P.white} stroke={P.line} />
      <Label x={297} y={60} text={L('2. Triangle (marche)', '2. Delta (running)')} size={11} color={HOT} />
      <Polygon points="297,86 349,176 245,176" fill="none" stroke={HOT} strokeWidth={4} />
      <Label x={297} y={222} text={L('400 V par enroulement', '400 V per winding')} size={10} />
      <Rect x={60} y={250} width={280} height={36} rx={8} fill="#fff7e6" stroke={P.orange} />
      <Label x={200} y={265} text={L('Courant de démarrage ÷ 3 (au lieu de 4 à 8 × In)', 'Starting current ÷ 3 (instead of 4 to 8 × In)')} size={10.5} />
      <Label x={200} y={280} text={L('moteur 400/690 V sur réseau 400 V', '400/690 V motor on a 400 V network')} size={9.5} color={P.inkSoft} weight="600" />
    </SceneFrame>
  );
}

/** Response of on/off, P and PI control to a setpoint. */
export function ControlResponse({ lang }: SceneProps) {
  const L = pick(lang);
  const x0 = 60;
  const x1 = 380;
  const ySet = 120;
  let onoff = '';
  for (let x = x0; x <= x1; x += 4) onoff += `${onoff ? 'L' : 'M'} ${x} ${(ySet + Math.sin((x - x0) / 14) * 22).toFixed(1)} `;
  let prop = '';
  for (let x = x0; x <= x1; x += 4) {
    const t = (x - x0) / 60;
    prop += `${prop ? 'L' : 'M'} ${x} ${(ySet + 26 + 70 * Math.exp(-t) * Math.cos(t * 1.4)).toFixed(1)} `;
  }
  let pi = '';
  for (let x = x0; x <= x1; x += 4) {
    const t = (x - x0) / 60;
    pi += `${pi ? 'L' : 'M'} ${x} ${(ySet + 96 * Math.exp(-t * 1.1) * Math.cos(t * 1.6)).toFixed(1)} `;
  }
  return (
    <SceneFrame>
      <Line x1={x0} y1={250} x2={x1} y2={250} stroke={P.ink} strokeWidth={1.5} />
      <Line x1={x0} y1={250} x2={x0} y2={50} stroke={P.ink} strokeWidth={1.5} />
      <Label x={x1} y={266} text={L('temps', 'time')} size={10} color={P.inkSoft} anchor="end" />
      <Label x={x0 - 6} y={56} text="T" size={11} color={P.inkSoft} anchor="end" />
      <Line x1={x0} y1={ySet} x2={x1} y2={ySet} stroke={P.ink} strokeDasharray="6 4" strokeWidth={1.4} />
      <Label x={x0 + 6} y={ySet - 6} text={L('consigne', 'setpoint')} size={9.5} anchor="start" />
      <Path d={onoff} stroke={P.orange} strokeWidth={2.4} fill="none" />
      <Path d={prop} stroke={P.greenMid} strokeWidth={2.4} fill="none" />
      <Path d={pi} stroke={P.green} strokeWidth={3} fill="none" />
      <Rect x={176} y={180} width={200} height={62} rx={8} fill={P.white} stroke={P.line} />
      <Line x1={186} y1={196} x2={206} y2={196} stroke={P.orange} strokeWidth={3} />
      <Label x={212} y={200} text={L('Tout ou rien : oscille', 'On/off: oscillates')} size={9.5} anchor="start" />
      <Line x1={186} y1={214} x2={206} y2={214} stroke={P.greenMid} strokeWidth={3} />
      <Label x={212} y={218} text={L('P : stable, mais écart résiduel', 'P: stable, but steady error')} size={9.5} anchor="start" />
      <Line x1={186} y1={232} x2={206} y2={232} stroke={P.green} strokeWidth={3} />
      <Label x={212} y={236} text={L('PI(D) : rejoint la consigne', 'PI(D): reaches the setpoint')} size={9.5} anchor="start" />
    </SceneFrame>
  );
}

/** Data center: cold aisle / hot aisle with raised floor and containment. */
export function DataCenterAisles({ lang }: SceneProps) {
  const L = pick(lang);
  const rack = (x: number) => (
    <G>
      <Rect x={x} y={110} width={38} height={110} rx={3} fill={P.screen} />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <Rect key={i} x={x + 4} y={116 + i * 17} width={30} height={11} rx={2} fill="#3d4a52" />
      ))}
    </G>
  );
  return (
    <SceneFrame>
      <Rect x={20} y={70} width={360} height={150} fill={P.white} stroke={P.ink} strokeWidth={2} />
      <Rect x={20} y={220} width={360} height={34} fill={P.greyLight} stroke={P.ink} strokeWidth={2} />
      <Label x={200} y={248} text={L('faux plancher : air froid', 'raised floor: cold air')} size={10} color={COLD} />
      {rack(88)}
      {rack(126)}
      {rack(236)}
      {rack(274)}
      {/* cold aisle */}
      <Rect x={164} y={86} width={72} height={134} fill={COLD_LIGHT} opacity={0.7} />
      <Line x1={164} y1={86} x2={236} y2={86} stroke={P.ink} strokeWidth={2} />
      <Label x={200} y={102} text={L('allée froide', 'cold aisle')} size={9.5} color={COLD} />
      <Arrow x1={200} y1={226} x2={200} y2={180} color={COLD} width={3} />
      <Arrow x1={176} y1={160} x2={168} y2={160} color={COLD} width={2.4} />
      <Arrow x1={224} y1={160} x2={232} y2={160} color={COLD} width={2.4} />
      {/* hot aisles */}
      <Rect x={36} y={86} width={50} height={134} fill={HOT_LIGHT} opacity={0.7} />
      <Rect x={314} y={86} width={50} height={134} fill={HOT_LIGHT} opacity={0.7} />
      <Label x={61} y={212} text={L('chaude', 'hot')} size={9.5} color={HOT} />
      <Label x={339} y={212} text={L('chaude', 'hot')} size={9.5} color={HOT} />
      <Arrow x1={61} y1={190} x2={61} y2={80} color={HOT} width={2.6} />
      <Arrow x1={339} y1={190} x2={339} y2={80} color={HOT} width={2.6} />
      <Arrow x1={86} y1={160} x2={72} y2={160} color={HOT} width={2.4} />
      <Arrow x1={314} y1={160} x2={328} y2={160} color={HOT} width={2.4} />
      <Label x={200} y={58} text={L('reprise de l’air chaud en partie haute', 'hot air returned at high level')} size={10} color={HOT} />
      <Label x={200} y={286} text={L('~2 kW par m² de baies : confiner l’allée froide', '~2 kW per m² of racks: contain the cold aisle')} size={10} color={P.inkSoft} weight="600" />
    </SceneFrame>
  );
}

/** Quick diagnosis matrix: HP, LP, superheat and subcooling trends for common faults. */
export function DiagnosisMatrix({ lang }: SceneProps) {
  const L = pick(lang);
  const rows: [string, string, string, string, string][] = [
    [L('Manque de fluide', 'Undercharge'), '↓', '↓', '↑', '↓'],
    [L('Excès de fluide', 'Overcharge'), '↑', '↑', '↓', '↑'],
    [L('Incondensables', 'Non-condensables'), '↑', '↑', '=', '='],
    [L('Condenseur sale / ventilo', 'Dirty condenser / fan'), '↑', '↑', '=', '↓'],
    [L('Évaporateur (débit d’air)', 'Evaporator (airflow)'), '↓', '↓', '↓', '='],
    [L('Détendeur trop fermé / prédétente', 'TXV too closed / flash gas'), '=', '↓', '↑', '='],
    [L('Compresseur faible (clapets)', 'Weak compressor (valves)'), '↓', '↑', '=', '='],
  ];
  const cols = ['HP', 'BP', L('Surch.', 'SH'), L('S-refr.', 'SC')];
  const color = (v: string) => (v === '↑' ? HOT : v === '↓' ? COLD : P.inkSoft);
  return (
    <SceneFrame>
      <Tag x={200} y={22} w={250} text={L('Lire les symptômes', 'Reading the symptoms')} />
      <Rect x={14} y={38} width={372} height={22} rx={6} fill={P.mint} />
      {cols.map((c, i) => (
        <Label key={c} x={222 + i * 44} y={53} text={c} size={10} color={P.green} />
      ))}
      {rows.map((r, j) => (
        <G key={r[0]}>
          <Rect x={14} y={62 + j * 30} width={372} height={28} rx={4} fill={j % 2 ? P.white : '#f8fafd'} />
          <Label x={22} y={80 + j * 30} text={r[0]} size={9.8} anchor="start" />
          {r.slice(1).map((v, i) => (
            <Label key={i} x={222 + i * 44} y={81 + j * 30} text={v} size={14} color={color(v)} />
          ))}
        </G>
      ))}
      <Label x={200} y={286} text={L('↑ trop haut · ↓ trop bas · = normal (tendances indicatives)', '↑ too high · ↓ too low · = normal (indicative trends)')} size={9.5} color={P.inkSoft} weight="600" />
    </SceneFrame>
  );
}

/** Copper piping workflow: cut, deburr, flare or braze under nitrogen, test, evacuate. */
export function InstallSteps({ lang }: SceneProps) {
  const L = pick(lang);
  const steps: [string, string][] = [
    [L('Couper', 'Cut'), L('au coupe-tube', 'with a tube cutter')],
    [L('Ébavurer', 'Deburr'), L('tube vers le bas', 'tube pointing down')],
    [L('Raccorder', 'Join'), L('dudgeon, brasure sous N₂', 'flare, braze under N₂')],
    [L('Essai à l’azote', 'Nitrogen test'), L('plusieurs jours', 'several days')],
    [L('Tirage au vide', 'Evacuation'), L('contrôle au vacuomètre', 'check the vacuum gauge')],
    [L('Charge pesée', 'Weighed charge'), L('puis mise en service', 'then start-up')],
  ];
  return (
    <SceneFrame>
      <Tag x={200} y={22} w={240} text={L('Les gestes dans l’ordre', 'The steps in order')} />
      {steps.map(([title, detail], i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const x = 20 + col * 186;
        const y = 44 + row * 74;
        return (
          <G key={title}>
            <Rect x={x} y={y} width={174} height={62} rx={10} fill={P.white} stroke={P.line} />
            <Circle cx={x + 24} cy={y + 31} r={14} fill={i < 3 ? P.green : i < 5 ? P.greenMid : P.orange} />
            <Label x={x + 24} y={y + 36} text={String(i + 1)} size={12} color={P.white} />
            <Label x={x + 46} y={y + 28} text={title} size={10.5} anchor="start" />
            <Label x={x + 46} y={y + 43} text={detail} size={9} color={P.inkSoft} weight="600" anchor="start" />
          </G>
        );
      })}
      <CheckBadge x={372} y={22} r={11} />
    </SceneFrame>
  );
}

/** Heating curve of 1 kg of water: sensible heat on the slopes, latent heat on the plateaus. */
export function HeatingCurve({ lang }: SceneProps) {
  const L = pick(lang);
  // energy axis (kJ) 0..3100 → x 50..380 ; temperature −20..120 → y 250..50
  const X = (e: number) => 50 + (e / 3100) * 330;
  const Y = (t: number) => 250 - ((t + 20) / 140) * 200;
  const pts: [number, number][] = [
    [0, -20],
    [42, 0],
    [377, 0],
    [796, 100],
    [3053, 100],
    [3100, 120],
  ];
  const segs = pts.slice(1).map(([e, t], i) => ({ x1: X(pts[i][0]), y1: Y(pts[i][1]), x2: X(e), y2: Y(t), plateau: t === pts[i][1] }));
  return (
    <SceneFrame>
      <Line x1={50} y1={250} x2={385} y2={250} stroke={P.ink} strokeWidth={1.5} />
      <Line x1={50} y1={250} x2={50} y2={44} stroke={P.ink} strokeWidth={1.5} />
      <Label x={383} y={268} text={L('énergie apportée (kJ)', 'energy supplied (kJ)')} size={9.5} color={P.inkSoft} anchor="end" />
      <Label x={56} y={46} text="°C" size={10} color={P.inkSoft} anchor="start" />
      {[0, 100].map((t) => (
        <G key={t}>
          <Line x1={46} y1={Y(t)} x2={385} y2={Y(t)} stroke={P.line} strokeDasharray="3 4" />
          <Label x={42} y={Y(t) + 3} text={`${t}`} size={9} color={P.inkSoft} anchor="end" />
        </G>
      ))}
      {segs.map((s, i) => (
        <Line key={i} x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2} stroke={s.plateau ? HOT : P.orange} strokeWidth={3.2} strokeLinecap="round" />
      ))}
      <Label x={58} y={Y(0) + 16} text={L('fusion : 335 kJ', 'melting: 335 kJ')} size={9.5} color={HOT} anchor="start" />
      <Label x={X(560)} y={Y(55)} text={L('eau : 419 kJ', 'water: 419 kJ')} size={9.5} color={P.orange} anchor="end" />
      <Label x={X(1925)} y={Y(100) - 10} text={L('vaporisation : 2 257 kJ', 'vaporisation: 2,257 kJ')} size={10} color={HOT} />
      <Rect x={150} y={150} width={226} height={56} rx={8} fill={P.white} stroke={P.line} />
      <Line x1={160} y1={168} x2={180} y2={168} stroke={P.orange} strokeWidth={3} />
      <Label x={186} y={172} text={L('pente = chaleur sensible (T monte)', 'slope = sensible heat (T rises)')} size={9.5} anchor="start" />
      <Line x1={160} y1={190} x2={180} y2={190} stroke={HOT} strokeWidth={3} />
      <Label x={186} y={194} text={L('palier = chaleur latente (T fixe)', 'plateau = latent heat (T fixed)')} size={9.5} anchor="start" />
      <Label x={200} y={288} text={L('1 kg d’eau à pression atmosphérique', '1 kg of water at atmospheric pressure')} size={9.5} color={P.inkSoft} weight="600" />
    </SceneFrame>
  );
}

/** Absolute vs gauge pressure scale. */
export function PressureScale({ lang }: SceneProps) {
  const L = pick(lang);
  const Y = (bar: number) => 240 - (bar / 6) * 180;
  return (
    <SceneFrame>
      <Tag x={200} y={24} w={240} text={L('Pression absolue et relative', 'Absolute and gauge pressure')} />
      <Line x1={150} y1={Y(0)} x2={150} y2={Y(6)} stroke={P.ink} strokeWidth={2} />
      <Line x1={250} y1={Y(0)} x2={250} y2={Y(6)} stroke={P.ink} strokeWidth={2} />
      <Label x={150} y={Y(6) - 8} text={L('absolue', 'absolute')} size={10.5} color={P.green} />
      <Label x={250} y={Y(6) - 8} text={L('relative (manomètre)', 'gauge')} size={10.5} color={P.orange} />
      {[0, 1, 2, 3, 4, 5, 6].map((b) => (
        <G key={b}>
          <Line x1={144} y1={Y(b)} x2={156} y2={Y(b)} stroke={P.ink} />
          <Label x={140} y={Y(b) + 3} text={`${b}`} size={9} anchor="end" color={P.green} />
          {b >= 1 ? (
            <G>
              <Line x1={244} y1={Y(b)} x2={256} y2={Y(b)} stroke={P.ink} />
              <Label x={262} y={Y(b) + 3} text={`${b - 1}`} size={9} anchor="start" color={P.orange} />
            </G>
          ) : null}
        </G>
      ))}
      <Rect x={150} y={Y(1.013)} width={100} height={2} fill={COLD} />
      <Label x={200} y={Y(1.013) - 6} text={L('atmosphère 1,013 bar', 'atmosphere 1.013 bar')} size={9.5} color={COLD} />
      <Rect x={150} y={Y(0) - 2} width={100} height={4} fill={P.ink} />
      <Label x={200} y={Y(0) + 16} text={L('vide absolu (0 bar abs = −1 bar rel)', 'absolute vacuum (0 bar abs = −1 bar gauge)')} size={9.5} />
      <Rect x={290} y={110} width={100} height={60} rx={8} fill={P.white} stroke={P.line} />
      <Label x={340} y={130} text="p abs =" size={10} />
      <Label x={340} y={146} text="p rel + 1,013" size={10} />
      <Label x={340} y={162} text="(bar)" size={9} color={P.inkSoft} />
      <Label x={60} y={130} text="1 bar" size={10} />
      <Label x={60} y={146} text="= 100 000 Pa" size={9.5} color={P.inkSoft} />
      <Label x={60} y={162} text="≈ 14,5 psi" size={9.5} color={P.inkSoft} />
    </SceneFrame>
  );
}
