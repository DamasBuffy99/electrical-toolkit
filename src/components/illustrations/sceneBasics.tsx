import React from 'react';
import { Circle, G, Line, Path, Polygon, Rect } from 'react-native-svg';
import type { Lang } from '../../lib/language';
import { Arrow, Label, P, SceneFrame, Tag } from './kit';

type SceneProps = { lang: Lang };
const pick = (lang: Lang) => (fr: string, en: string) => (lang === 'fr' ? fr : en);

const WATER = '#4c8fe0';
const WATER_LIGHT = '#bcd6f6';

/** Water analogy: tank height = voltage, flow = current, narrowing = resistance, wheel = power. */
export function WaterAnalogy({ lang }: SceneProps) {
  const L = pick(lang);
  return (
    <SceneFrame>
      <Tag x={200} y={24} w={250} text={L("L'électricité comme de l'eau", 'Electricity like water')} />

      {/* tank */}
      <Rect x={30} y={54} width={76} height={120} rx={6} fill={P.white} stroke={P.ink} strokeWidth={2} />
      <Rect x={33} y={78} width={70} height={93} rx={4} fill={WATER_LIGHT} />
      <Line x1={33} y1={78} x2={103} y2={78} stroke={WATER} strokeWidth={2} />
      <Arrow x1={20} y1={170} x2={20} y2={84} color={P.orange} width={2.4} />
      <Label x={68} y={196} text={L('Tension (V)', 'Voltage (V)')} size={11} color={P.orange} />
      <Label x={68} y={210} text={L('= pression', '= pressure')} size={10} color={P.inkSoft} weight="600" />

      {/* pipe with a narrowing */}
      <Path d="M 106 150 L 180 150 L 196 158 L 236 158 L 252 150 L 312 150" stroke={P.ink} strokeWidth={2} fill="none" />
      <Path d="M 106 166 L 180 166 L 196 160 L 236 160 L 252 166 L 312 166" stroke={P.ink} strokeWidth={2} fill="none" />
      <Rect x={106} y={151} width={74} height={14} fill={WATER_LIGHT} />
      <Rect x={252} y={151} width={60} height={14} fill={WATER_LIGHT} />
      <Rect x={196} y={158.5} width={40} height={1.5} fill={WATER} />
      {[120, 150, 266, 290].map((x) => (
        <Arrow key={x} x1={x} y1={158} x2={x + 16} y2={158} color={WATER} width={2} />
      ))}
      <Label x={143} y={140} text={L('Courant (A) = débit', 'Current (A) = flow')} size={10.5} color={WATER} />
      <Label x={216} y={186} text={L('Résistance (Ω)', 'Resistance (Ω)')} size={10.5} color={P.red} />
      <Label x={216} y={199} text={L('= rétrécissement', '= narrowing')} size={9.5} color={P.inkSoft} weight="600" />

      {/* water wheel */}
      <Circle cx={340} cy={158} r={28} fill={P.white} stroke={P.ink} strokeWidth={2} />
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * Math.PI) / 4;
        return <Line key={i} x1={340} y1={158} x2={340 + Math.cos(a) * 28} y2={158 + Math.sin(a) * 28} stroke={P.ink} strokeWidth={1.6} />;
      })}
      <Circle cx={340} cy={158} r={5} fill={P.orange} />
      <Label x={340} y={206} text={L('Puissance (W)', 'Power (W)')} size={11} color={P.green} />
      <Label x={340} y={220} text={L('= travail produit', '= work done')} size={9.5} color={P.inkSoft} weight="600" />

      <Rect x={60} y={240} width={280} height={44} rx={10} fill={P.white} stroke={P.line} />
      <Label x={130} y={267} text="U = R × I" size={15} color={P.ink} />
      <Line x1={200} y1={250} x2={200} y2={274} stroke={P.line} strokeWidth={1.5} />
      <Label x={270} y={267} text="P = U × I" size={15} color={P.ink} />
    </SceneFrame>
  );
}

/** Power triangle: P (W), Q (var), S (VA) and cos φ. */
export function PowerTriangle({ lang }: SceneProps) {
  const L = pick(lang);
  const ax = 70;
  const ay = 220;
  const bx = 300;
  const by = 220;
  const cx = 300;
  const cy = 80;
  return (
    <SceneFrame>
      <Tag x={200} y={24} w={230} text={L('Le triangle des puissances', 'The power triangle')} />
      <Polygon points={`${ax},${ay} ${bx},${by} ${cx},${cy}`} fill={P.mint} stroke="none" />
      <Line x1={ax} y1={ay} x2={bx} y2={by} stroke={P.green} strokeWidth={5} strokeLinecap="round" />
      <Line x1={bx} y1={by} x2={cx} y2={cy} stroke={P.orange} strokeWidth={5} strokeLinecap="round" />
      <Line x1={ax} y1={ay} x2={cx} y2={cy} stroke={P.ink} strokeWidth={5} strokeLinecap="round" />
      <Rect x={bx - 14} y={by - 14} width={14} height={14} fill="none" stroke={P.inkSoft} strokeWidth={1.4} />
      <Path d={`M ${ax + 44} ${ay} A 44 44 0 0 0 ${ax + 44 * Math.cos(0.546)} ${ay - 44 * Math.sin(0.546)}`} stroke={P.inkSoft} strokeWidth={1.6} fill="none" />
      <Label x={ax + 58} y={ay - 10} text="φ" size={15} color={P.ink} />

      <Label x={(ax + bx) / 2} y={ay + 24} text={L('P (W) : puissance active', 'P (W): active power')} size={11.5} color={P.green} />
      <Label x={(ax + bx) / 2} y={ay + 39} text={L('ce qui travaille (chaleur, lumière, mouvement)', 'what does the work (heat, light, motion)')} size={9.5} color={P.inkSoft} weight="600" />
      <Label x={bx + 10} y={150} text="Q (var)" size={11.5} color={P.orange} anchor="start" />
      <Label x={bx + 10} y={165} text={L('réactive', 'reactive')} size={9.5} color={P.inkSoft} weight="600" anchor="start" />
      <Label x={bx + 10} y={178} text={L('(moteurs)', '(motors)')} size={9.5} color={P.inkSoft} weight="600" anchor="start" />
      <Label x={118} y={100} text="S (VA)" size={12} color={P.ink} />
      <Label x={118} y={115} text={L('apparente', 'apparent')} size={9.5} color={P.inkSoft} weight="600" />
      <Label x={118} y={128} text={L('= ce que fournit le réseau', '= what the grid supplies')} size={9.5} color={P.inkSoft} weight="600" />

      <Rect x={232} y={44} width={154} height={30} rx={8} fill={P.white} stroke={P.line} />
      <Label x={309} y={64} text="cos φ = P / S" size={13} color={P.ink} />
    </SceneFrame>
  );
}

function wave(x0: number, x1: number, yc: number, amp: number, periods: number, shift: number) {
  const pts: string[] = [];
  for (let x = x0; x <= x1; x += 3) {
    const t = ((x - x0) / (x1 - x0)) * periods * 2 * Math.PI - shift;
    pts.push(`${pts.length ? 'L' : 'M'} ${x.toFixed(1)} ${(yc - Math.sin(t) * amp).toFixed(1)}`);
  }
  return pts.join(' ');
}

/** Single-phase vs three-phase supply. */
export function PhasesDiagram({ lang }: SceneProps) {
  const L = pick(lang);
  // IEC conductor colours: L1 brown, L2 black, L3 grey, N blue.
  const phaseColors = ['#8b5a2b', P.ink, '#94a3b8'];
  return (
    <SceneFrame>
      {/* single-phase */}
      <Rect x={14} y={36} width={178} height={248} rx={12} fill={P.white} stroke={P.line} />
      <Label x={103} y={58} text={L('Monophasé', 'Single-phase')} size={13} />
      <Line x1={34} y1={86} x2={172} y2={86} stroke="#8b5a2b" strokeWidth={3} />
      <Line x1={34} y1={116} x2={172} y2={116} stroke={P.blue} strokeWidth={3} />
      <Label x={30} y={90} text="L" size={11} color="#8b5a2b" anchor="end" />
      <Label x={30} y={120} text="N" size={11} color={P.blue} anchor="end" />
      <Line x1={150} y1={88} x2={150} y2={114} stroke={P.orange} strokeWidth={1.6} strokeDasharray="3 2" />
      <Label x={156} y={105} text="230 V" size={10} color={P.orange} anchor="start" />
      <Line x1={30} y1={190} x2={176} y2={190} stroke={P.line} strokeDasharray="4 3" />
      <Path d={wave(34, 176, 190, 34, 2, 0)} stroke="#8b5a2b" strokeWidth={2.4} fill="none" />
      <Label x={103} y={256} text={L('2 fils · petites charges', '2 wires · small loads')} size={10} color={P.inkSoft} weight="600" />
      <Label x={103} y={271} text={L('(≤ 5 kVA : maisons)', '(≤ 5 kVA: houses)')} size={10} color={P.inkSoft} weight="600" />

      {/* three-phase */}
      <Rect x={208} y={36} width={178} height={248} rx={12} fill={P.white} stroke={P.line} />
      <Label x={297} y={58} text={L('Triphasé', 'Three-phase')} size={13} />
      {['L1', 'L2', 'L3', 'N'].map((n, i) => (
        <G key={n}>
          <Line x1={232} y1={74 + i * 16} x2={366} y2={74 + i * 16} stroke={i < 3 ? phaseColors[i] : P.blue} strokeWidth={2.6} strokeDasharray={i === 3 ? '0' : undefined} />
          <Label x={228} y={78 + i * 16} text={n} size={9.5} color={i < 3 ? phaseColors[i] : P.blue} anchor="end" />
        </G>
      ))}
      <Line x1={330} y1={76} x2={330} y2={88} stroke={P.orange} strokeWidth={1.6} strokeDasharray="3 2" />
      <Label x={336} y={86} text="400 V" size={9.5} color={P.orange} anchor="start" />
      <Line x1={300} y1={76} x2={300} y2={120} stroke={P.green} strokeWidth={1.6} strokeDasharray="3 2" />
      <Label x={296} y={136} text={L('230 V phase-neutre', '230 V phase-neutral')} size={9} color={P.green} />
      <Line x1={228} y1={190} x2={370} y2={190} stroke={P.line} strokeDasharray="4 3" />
      {[0, 1, 2].map((i) => (
        <Path key={i} d={wave(228, 370, 190, 34, 2, (i * 2 * Math.PI) / 3)} stroke={phaseColors[i]} strokeWidth={2.2} fill="none" />
      ))}
      <Label x={297} y={256} text={L('3 phases décalées de 120°', '3 phases 120° apart')} size={10} color={P.inkSoft} weight="600" />
      <Label x={297} y={271} text={L('(> 5 kVA : moteurs, immeubles)', '(> 5 kVA: motors, buildings)')} size={10} color={P.inkSoft} weight="600" />
    </SceneFrame>
  );
}
