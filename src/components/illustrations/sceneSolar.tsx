import React from 'react';
import { Circle, G, Line, Path, Polygon, Rect } from 'react-native-svg';
import type { Lang } from '../../lib/language';
import { Arrow, CheckBadge, Label, P, SceneFrame, Tag } from './kit';

type SceneProps = { lang: Lang };
const pick = (lang: Lang) => (fr: string, en: string) => (lang === 'fr' ? fr : en);

const WIRE = '#d9534f';
const PANEL = '#2f6db5';
const PANEL_DARK = '#1d4f8c';
const BATTERY = '#3a86c8';

const fmt = (n: number, lang: Lang) => {
  const s = String(Math.round(n * 100) / 100);
  return lang === 'fr' ? s.replace('.', ',') : s;
};

function Sun({ x, y, r = 18 }: { x: number; y: number; r?: number }) {
  return (
    <G>
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * Math.PI) / 6;
        return (
          <Line
            key={i}
            x1={x + Math.cos(a) * (r + 4)}
            y1={y + Math.sin(a) * (r + 4)}
            x2={x + Math.cos(a) * (r + 11)}
            y2={y + Math.sin(a) * (r + 11)}
            stroke={P.orange}
            strokeWidth={2.2}
            strokeLinecap="round"
          />
        );
      })}
      <Circle cx={x} cy={y} r={r} fill={P.yellow} stroke={P.orange} strokeWidth={2} />
    </G>
  );
}

/** Tilted solar panel seen in perspective. */
function TiltedPanel({ x, y, w = 92, h = 56, skew = 20 }: { x: number; y: number; w?: number; h?: number; skew?: number }) {
  const lines: React.ReactNode[] = [];
  for (let i = 1; i < 4; i++) {
    lines.push(<Line key={`v${i}`} x1={x + skew + (w * i) / 4} y1={y} x2={x + (w * i) / 4} y2={y + h} stroke="#9cc3ec" strokeWidth={1} />);
  }
  for (let j = 1; j < 3; j++) {
    const yy = y + (h * j) / 3;
    const off = skew - (skew * j) / 3;
    lines.push(<Line key={`h${j}`} x1={x + off} y1={yy} x2={x + w + off} y2={yy} stroke="#9cc3ec" strokeWidth={1} />);
  }
  return (
    <G>
      <Polygon points={`${x + skew},${y} ${x + w + skew},${y} ${x + w},${y + h} ${x},${y + h}`} fill={PANEL} stroke={PANEL_DARK} strokeWidth={2} />
      {lines}
    </G>
  );
}

/** Front view of a module (portrait). */
function FlatPanel({ x, y, w = 44, h = 64 }: { x: number; y: number; w?: number; h?: number }) {
  return (
    <G>
      <Rect x={x} y={y} width={w} height={h} rx={3} fill={PANEL} stroke={PANEL_DARK} strokeWidth={2} />
      {[1, 2].map((i) => (
        <Line key={`v${i}`} x1={x + (w * i) / 3} y1={y + 2} x2={x + (w * i) / 3} y2={y + h - 2} stroke="#9cc3ec" strokeWidth={0.8} />
      ))}
      {[1, 2, 3, 4, 5].map((j) => (
        <Line key={`h${j}`} x1={x + 2} y1={y + (h * j) / 6} x2={x + w - 2} y2={y + (h * j) / 6} stroke="#9cc3ec" strokeWidth={0.8} />
      ))}
    </G>
  );
}

function SmallBattery({ x, y }: { x: number; y: number }) {
  return (
    <G>
      <Rect x={x + 6} y={y - 4} width={6} height={4} fill={P.ink} />
      <Rect x={x + 22} y={y - 4} width={6} height={4} fill={P.ink} />
      <Rect x={x} y={y} width={34} height={24} rx={3} fill={P.white} stroke={P.ink} strokeWidth={1.8} />
      <Label x={x + 9} y={y + 16} text="−" size={11} />
      <Label x={x + 25} y={y + 16} text="+" size={11} />
    </G>
  );
}

function Controller({ x, y }: { x: number; y: number }) {
  return (
    <G>
      <Rect x={x} y={y} width={48} height={40} rx={4} fill="#3b4248" />
      <Rect x={x + 8} y={y + 6} width={32} height={12} rx={2} fill="#8fd3ff" />
      <Circle cx={x + 14} cy={y + 28} r={3} fill={P.greenMid} />
      <Circle cx={x + 24} cy={y + 28} r={3} fill={P.blue} />
      <Circle cx={x + 34} cy={y + 28} r={3} fill={P.red} />
    </G>
  );
}

function Inverter({ x, y }: { x: number; y: number }) {
  return (
    <G>
      <Rect x={x} y={y} width={40} height={56} rx={4} fill={P.white} stroke={P.steel} strokeWidth={1.6} />
      <Rect x={x + 10} y={y + 34} width={20} height={9} rx={1.5} fill={P.screen} />
      <Path d={`M ${x + 30} ${y + 8} Q ${x + 20} ${y + 28} ${x + 34} ${y + 50}`} stroke={P.orange} strokeWidth={2} fill="none" />
    </G>
  );
}

function House({ x, y }: { x: number; y: number }) {
  // x, y = top-left of the house body (88 × 82)
  return (
    <G>
      <Rect x={x + 62} y={y - 40} width={12} height={30} fill="#8b1e1e" />
      <Polygon points={`${x - 8},${y + 2} ${x + 44},${y - 40} ${x + 96},${y + 2}`} fill="#8b1e1e" />
      <Rect x={x} y={y} width={88} height={82} fill={P.white} stroke={P.ink} strokeWidth={1.8} />
      <Rect x={x + 36} y={y + 44} width={18} height={38} fill="#a31f1f" />
      <Rect x={x + 8} y={y + 18} width={20} height={18} fill={P.yellow} stroke={P.ink} strokeWidth={1.2} />
      <Rect x={x + 60} y={y + 18} width={20} height={18} fill={P.yellow} stroke={P.ink} strokeWidth={1.2} />
    </G>
  );
}

const HALOS: Record<string, [number, number, number, number]> = {
  panels: [64, 34, 140, 78],
  controller: [90, 130, 68, 60],
  batteries: [58, 208, 132, 56],
  inverter: [222, 130, 60, 76],
  loads: [284, 130, 112, 142],
  wiring: [64, 34, 140, 156],
};

/** The off-grid PV system; `highlight` emphasizes the component sized at the current step. */
export function PvSystem({ lang, highlight }: SceneProps & { highlight?: string }) {
  const L = pick(lang);
  const h = highlight && HALOS[highlight] ? highlight : undefined;
  const dim = (key: string | string[]) => {
    if (!h) return 1;
    const keys = Array.isArray(key) ? key : [key];
    return keys.includes(h) ? 1 : 0.32;
  };
  const steps: Record<string, string> = {
    loads: L('Étape 1 · Charges', 'Step 1 · Loads'),
    inverter: L('Étape 2 · Onduleur', 'Step 2 · Inverter'),
    panels: L('Étape 3 · Panneaux', 'Step 3 · Panels'),
    batteries: L('Étape 4 · Batteries', 'Step 4 · Batteries'),
    controller: L('Étape 5 · Régulateur', 'Step 5 · Controller'),
    wiring: L('Étape 6 · Raccordement', 'Step 6 · Panel connection'),
  };
  const halo = h ? HALOS[h] : undefined;
  return (
    <SceneFrame>
      {halo ? (
        <Rect x={halo[0]} y={halo[1]} width={halo[2]} height={halo[3]} rx={12} fill={P.mint} stroke={P.green} strokeWidth={2} strokeDasharray="6 4" />
      ) : null}

      <G opacity={dim(['panels', 'wiring'])}>
        <Polygon points="40,46 60,34 176,100 82,102" fill={P.yellow} opacity={0.35} />
        <Sun x={40} y={40} />
        <TiltedPanel x={80} y={46} />
        <Label x={196} y={62} text={L('Panneaux', 'Panels')} size={10.5} anchor="start" />
      </G>

      <G opacity={dim(['panels', 'controller', 'wiring'])}>
        <Line x1={124} y1={102} x2={124} y2={140} stroke={WIRE} strokeWidth={2.5} />
      </G>
      <G opacity={dim(['controller', 'wiring'])}>
        <Controller x={100} y={140} />
        <Label x={94} y={164} text={L('Régulateur', 'Controller')} size={10} anchor="end" />
      </G>

      <G opacity={dim(['controller', 'batteries'])}>
        <Line x1={124} y1={180} x2={124} y2={220} stroke={WIRE} strokeWidth={2.5} />
      </G>
      <G opacity={dim('batteries')}>
        <Line x1={84} y1={220} x2={166} y2={220} stroke={WIRE} strokeWidth={2.5} />
        {[66, 107, 148].map((bx) => (
          <G key={bx}>
            <Line x1={bx + 17} y1={220} x2={bx + 17} y2={228} stroke={WIRE} strokeWidth={2} />
            <SmallBattery x={bx} y={232} />
          </G>
        ))}
        <Label x={124} y={276} text="Batteries" size={10.5} />
      </G>

      <G opacity={dim(['batteries', 'inverter'])}>
        <Path d="M 166 220 L 200 220 L 200 168 L 230 168" stroke={WIRE} strokeWidth={2.5} fill="none" />
        <Label x={206} y={206} text="DC" size={11} color={WIRE} anchor="start" />
      </G>
      <G opacity={dim('inverter')}>
        <Inverter x={230} y={140} />
        <Label x={250} y={132} text={L('Onduleur', 'Inverter')} size={10} />
      </G>

      <G opacity={dim(['inverter', 'loads'])}>
        <Path d="M 250 196 L 250 236 L 296 236" stroke={WIRE} strokeWidth={2.5} fill="none" />
        <Label x={258} y={226} text="AC" size={11} color={WIRE} anchor="start" />
      </G>
      <G opacity={dim('loads')}>
        <House x={300} y={182} />
        <Label x={344} y={280} text={L('Maison (charges)', 'House (loads)')} size={10} />
      </G>

      <Tag x={300} y={28} w={176} text={h ? steps[h] : L('Système PV hors réseau', 'Off-grid PV system')} />
    </SceneFrame>
  );
}

function sinePath(x0: number, x1: number, yc: number, amp: number, periods: number) {
  const pts: string[] = [];
  for (let x = x0; x <= x1; x += 3) {
    const t = ((x - x0) / (x1 - x0)) * periods * 2 * Math.PI;
    pts.push(`${pts.length ? 'L' : 'M'} ${x.toFixed(1)} ${(yc - Math.sin(t) * amp).toFixed(1)}`);
  }
  return pts.join(' ');
}

function modifiedPath(x0: number, x1: number, yc: number, amp: number, periods: number) {
  const half = (x1 - x0) / (periods * 2);
  const gap = half / 6;
  let d = `M ${x0} ${yc}`;
  for (let k = 0; k < periods * 2; k++) {
    const s = x0 + k * half;
    const level = k % 2 === 0 ? yc - amp : yc + amp;
    d += ` L ${s + gap} ${yc} L ${s + gap} ${level} L ${s + half - gap} ${level} L ${s + half - gap} ${yc} L ${s + half} ${yc}`;
  }
  return d;
}

/** Pure vs modified sine wave inverter output. */
export function PvWaveforms({ lang }: SceneProps) {
  const L = pick(lang);
  return (
    <SceneFrame>
      <Rect x={20} y={36} width={360} height={116} rx={12} fill={P.white} stroke={P.line} />
      <Label x={36} y={58} text={L('Onde sinusoïdale pure', 'Pure sine wave')} size={12} anchor="start" />
      <CheckBadge x={358} y={54} r={10} />
      <Line x1={40} y1={100} x2={364} y2={100} stroke={P.line} strokeDasharray="4 3" />
      <Path d={sinePath(44, 360, 100, 26, 2)} stroke={P.green} strokeWidth={3} fill="none" />
      <Label x={36} y={144} text={L('Comme le réseau : convient à tous les appareils', 'Like the grid: suits every appliance')} size={9.5} color={P.inkSoft} weight="600" anchor="start" />

      <Rect x={20} y={164} width={360} height={116} rx={12} fill={P.white} stroke={P.line} />
      <Label x={36} y={186} text={L('Onde sinusoïdale modifiée', 'Modified sine wave')} size={12} anchor="start" />
      <Circle cx={358} cy={182} r={10} fill={P.orange} />
      <Label x={358} y={186.5} text="!" size={12} color={P.white} />
      <Line x1={40} y1={228} x2={364} y2={228} stroke={P.line} strokeDasharray="4 3" />
      <Path d={modifiedPath(44, 360, 228, 24, 2)} stroke={P.orange} strokeWidth={3} fill="none" />
      <Label x={36} y={272} text={L('Moins chère, mais à éviter pour moteurs et frigo', 'Cheaper, but avoid it for motors and fridges')} size={9.5} color={P.inkSoft} weight="600" anchor="start" />
    </SceneFrame>
  );
}

/** Battery bank: `series` batteries per string, `parallel` strings, optional charging current split. */
export function BatteryBank({
  lang,
  series = 1,
  parallel = 2,
  battV = 12,
  battAh = 330,
  current,
}: SceneProps & { series?: number; parallel?: number; battV?: number; battAh?: number; current?: number }) {
  const L = pick(lang);
  const cols = Math.max(1, Math.min(3, series));
  const rows = Math.max(1, Math.min(4, parallel));
  const compact = rows >= 4;
  const bw = 70;
  const bh = compact ? 36 : 48;
  const gapX = 28;
  const gapY = compact ? 18 : 34;
  const totalW = cols * bw + (cols - 1) * gapX;
  const totalH = rows * bh + (rows - 1) * gapY;
  const x0 = 208 - totalW / 2;
  const y0 = (compact ? 162 : 152) - totalH / 2;
  const xL = x0 - 34;
  const xR = x0 + totalW + 34;
  const per = current !== undefined ? Math.round((current / rows) * 10) / 10 : undefined;

  const items: React.ReactNode[] = [];
  for (let r = 0; r < rows; r++) {
    const by = y0 + r * (bh + gapY);
    const busY = by - 10;
    // + bus to first battery, − from last battery
    items.push(<Line key={`p${r}`} x1={xL} y1={busY} x2={x0 + 14} y2={busY} stroke={WIRE} strokeWidth={2.2} />);
    items.push(<Line key={`pv${r}`} x1={x0 + 14} y1={busY} x2={x0 + 14} y2={by - 4} stroke={WIRE} strokeWidth={2.2} />);
    const lastX = x0 + (cols - 1) * (bw + gapX);
    items.push(<Line key={`n${r}`} x1={lastX + bw - 14} y1={by - 4} x2={lastX + bw - 14} y2={busY} stroke={P.ink} strokeWidth={2.2} />);
    items.push(<Line key={`nh${r}`} x1={lastX + bw - 14} y1={busY} x2={xR} y2={busY} stroke={P.ink} strokeWidth={2.2} />);
    if (per !== undefined) {
      items.push(<Label key={`c${r}`} x={(xL + x0 + 14) / 2} y={busY - 5} text={`${fmt(per, lang)} A`} size={9.5} color={P.orange} />);
    }
    for (let c = 0; c < cols; c++) {
      const bx = x0 + c * (bw + gapX);
      if (c < cols - 1) {
        items.push(
          <Path key={`s${r}${c}`} d={`M ${bx + bw - 14} ${by - 4} L ${bx + bw - 14} ${by - 12} L ${bx + bw + gapX + 14} ${by - 12} L ${bx + bw + gapX + 14} ${by - 4}`} stroke={P.ink} strokeWidth={2} fill="none" />
        );
      }
      items.push(
        <G key={`b${r}${c}`}>
          <Rect x={bx + 9} y={by - 5} width={10} height={5} fill={P.steel} />
          <Rect x={bx + bw - 19} y={by - 5} width={10} height={5} fill={P.steel} />
          <Rect x={bx} y={by} width={bw} height={bh} rx={5} fill={BATTERY} />
          <Rect x={bx} y={by} width={bw} height={10} rx={5} fill="#2c6fa8" />
          <Label x={bx + 14} y={by + 8.5} text="+" size={9} color={P.white} />
          <Label x={bx + bw - 14} y={by + 8.5} text="−" size={9} color={P.white} />
          <Label x={bx + bw / 2} y={by + bh * 0.56} text={`${fmt(battV, lang)} V`} size={compact ? 10 : 11} color={P.white} />
          <Label x={bx + bw / 2} y={by + bh * 0.86} text={`${battAh} Ah`} size={compact ? 9 : 10} color={P.white} weight="600" />
        </G>
      );
    }
  }
  const firstBus = y0 - 10;
  const lastBus = y0 + (rows - 1) * (bh + gapY) - 10;

  return (
    <SceneFrame>
      <Tag x={200} y={26} w={220} text={L(`${series} en série × ${parallel} en parallèle`, `${series} in series × ${parallel} in parallel`)} />
      <Line x1={xL} y1={firstBus} x2={xL} y2={lastBus} stroke={WIRE} strokeWidth={2.4} />
      <Line x1={xR} y1={firstBus} x2={xR} y2={lastBus} stroke={P.ink} strokeWidth={2.4} />
      {items}
      <Label x={xL - 8} y={(firstBus + lastBus) / 2 + 4} text="+" size={14} color={WIRE} anchor="end" />
      <Label x={xR + 8} y={(firstBus + lastBus) / 2 + 4} text="−" size={14} anchor="start" />
      {current !== undefined ? (
        <G>
          <Arrow x1={xL - 62} y1={firstBus} x2={xL - 2} y2={firstBus} color={P.orange} width={2.6} />
          <Label x={xL - 60} y={firstBus - 7} text={`${fmt(current, lang)} A`} size={11} color={P.orange} anchor="start" />
        </G>
      ) : null}
      <Tag
        x={200}
        y={compact ? 282 : 276}
        w={190}
        text={`${L('Banc', 'Bank')} : ${fmt(series * battV, lang)} V · ${parallel * battAh} Ah`}
        fill={P.navy}
      />
    </SceneFrame>
  );
}

/** PV array: `series` modules per string, `parallel` strings, feeding the MPPT. */
export function PvArray({ lang, series = 2, parallel = 2, voc = 47.8 }: SceneProps & { series?: number; parallel?: number; voc?: number }) {
  const L = pick(lang);
  const cols = Math.max(1, Math.min(4, series));
  const rows = Math.max(1, Math.min(3, parallel));
  const pw = 40;
  const ph = 58;
  const gapX = 16;
  const gapY = rows > 2 ? 14 : 26;
  const totalW = cols * pw + (cols - 1) * gapX;
  const x0 = 150 - totalW / 2;
  const y0 = 50;
  const xL = x0 - 20;
  const xR = x0 + totalW + 20;
  const rowY = (r: number) => y0 + r * (ph + gapY);
  const lastMid = rowY(rows - 1) + ph / 2;

  const items: React.ReactNode[] = [];
  for (let r = 0; r < rows; r++) {
    const y = rowY(r);
    const mid = y + ph / 2;
    items.push(<Line key={`l${r}`} x1={xL} y1={mid} x2={x0} y2={mid} stroke={WIRE} strokeWidth={2} />);
    items.push(<Line key={`r${r}`} x1={x0 + totalW} y1={mid} x2={xR} y2={mid} stroke={P.ink} strokeWidth={2} />);
    items.push(<Label key={`t${r}`} x={xL - 6} y={mid + 3.5} text={L(`Chaîne ${r + 1}`, `String ${r + 1}`)} size={9} color={P.inkSoft} weight="600" anchor="end" />);
    for (let c = 0; c < cols; c++) {
      const x = x0 + c * (pw + gapX);
      if (c < cols - 1) items.push(<Line key={`s${r}${c}`} x1={x + pw} y1={mid} x2={x + pw + gapX} y2={mid} stroke={P.ink} strokeWidth={2} />);
      items.push(<FlatPanel key={`p${r}${c}`} x={x} y={y} w={pw} h={ph} />);
    }
  }
  const mpptX = 300;
  const mpptY = 118;
  return (
    <SceneFrame>
      <Tag x={200} y={24} w={260} text={L(`${series} en série × ${parallel} chaînes en parallèle`, `${series} in series × ${parallel} parallel strings`)} />
      <Line x1={xL} y1={rowY(0) + ph / 2} x2={xL} y2={lastMid} stroke={WIRE} strokeWidth={2.4} />
      <Line x1={xR} y1={rowY(0) + ph / 2} x2={xR} y2={lastMid} stroke={P.ink} strokeWidth={2.4} />
      {items}
      <Path d={`M ${xL} ${lastMid} L ${xL} ${lastMid + 24} L ${mpptX + 18} ${lastMid + 24} L ${mpptX + 18} ${mpptY + 46}`} stroke={WIRE} strokeWidth={2.4} fill="none" />
      <Path d={`M ${xR} ${rowY(0) + ph / 2} L ${mpptX + 46} ${rowY(0) + ph / 2} L ${mpptX + 46} ${mpptY}`} stroke={P.ink} strokeWidth={2.4} fill="none" />
      <Rect x={mpptX} y={mpptY} width={64} height={46} rx={5} fill="#3b4248" />
      <Rect x={mpptX + 8} y={mpptY + 7} width={48} height={14} rx={2} fill="#8fd3ff" />
      <Label x={mpptX + 32} y={mpptY + 37} text="MPPT" size={10.5} color={P.white} />
      <Label
        x={24}
        y={284}
        text={L(`Voc d'une chaîne = ${series} × ${fmt(voc, lang)} = ${fmt(series * voc, lang)} V`, `String Voc = ${series} × ${voc} = ${fmt(series * voc, lang)} V`)}
        size={11}
        anchor="start"
      />
    </SceneFrame>
  );
}

/** Voltage window of the charge controller: MPPT range, design point, cold Voc, absolute maximum. */
export function MpptWindow({
  lang,
  max = 150,
  design = 75,
  cold,
  nec,
  rangeMin,
  rangeMax,
}: SceneProps & { max?: number; design?: number; cold?: number; nec?: number; rangeMin?: number; rangeMax?: number }) {
  const L = pick(lang);
  const top = max * 1.12;
  const ax0 = 36;
  const ax1 = 368;
  const X = (v: number) => ax0 + (v / top) * (ax1 - ax0);
  const ay = 168;
  const step = max > 120 ? 25 : 20;
  const ticks: number[] = [];
  for (let v = 0; v <= top; v += step) ticks.push(v);
  return (
    <SceneFrame>
      <Tag x={200} y={26} w={250} text={L('Tension PV admise par le régulateur', 'PV voltage accepted by the controller')} />
      <Rect x={X(max)} y={ay - 30} width={ax1 - X(max)} height={60} fill={P.red} opacity={0.16} />
      <Label x={(X(max) + ax1) / 2} y={ay - 36} text={L('Interdit', 'Forbidden')} size={9.5} color={P.red} />
      {rangeMin !== undefined && rangeMax !== undefined ? (
        <G>
          <Rect x={X(rangeMin)} y={ay - 22} width={X(rangeMax) - X(rangeMin)} height={44} rx={6} fill={P.greenLight} opacity={0.55} />
          <Label x={(X(rangeMin) + X(rangeMax)) / 2} y={ay + 40} text={L(`Plage MPPT ${rangeMin}–${rangeMax} V`, `MPPT range ${rangeMin}–${rangeMax} V`)} size={10} color={P.green} />
        </G>
      ) : null}
      <Line x1={ax0} y1={ay} x2={ax1} y2={ay} stroke={P.ink} strokeWidth={2} />
      {ticks.map((v) => (
        <G key={v}>
          <Line x1={X(v)} y1={ay - 4} x2={X(v)} y2={ay + 4} stroke={P.ink} strokeWidth={1.2} />
          <Label x={X(v)} y={ay + 18} text={`${v}`} size={9} color={P.inkSoft} weight="600" />
        </G>
      ))}
      <Label x={ax1} y={ay + 18} text="V" size={9} color={P.inkSoft} />

      <Line x1={X(max)} y1={ay - 54} x2={X(max)} y2={ay + 4} stroke={P.red} strokeWidth={2.4} />
      <Label x={X(max)} y={ay - 60} text={`Max ${fmt(max, lang)} V`} size={10.5} color={P.red} />

      <Line x1={X(design)} y1={ay - 74} x2={X(design)} y2={ay} stroke={P.green} strokeWidth={2.4} strokeDasharray="5 3" />
      <Circle cx={X(design)} cy={ay} r={5} fill={P.green} />
      <Label x={X(design)} y={ay - 80} text={L(`Conception : ${fmt(design, lang)} V`, `Design: ${design} V`)} size={10.5} color={P.green} />

      {cold !== undefined ? (
        <G>
          <Circle cx={X(cold)} cy={ay} r={5} fill={P.blue} />
          <Line x1={X(cold)} y1={ay + 4} x2={X(cold)} y2={ay + 58} stroke={P.blue} strokeWidth={1.4} />
          <Label x={X(cold) - 4} y={ay + 70} text={L(`Voc à froid : ${fmt(cold, lang)} V ✓`, `Cold Voc: ${cold} V ✓`)} size={10} color={P.blue} anchor="end" />
        </G>
      ) : null}
      {nec !== undefined ? (
        <G>
          <Circle cx={X(nec)} cy={ay} r={5} fill={P.navy} />
          <Line x1={X(nec)} y1={ay + 4} x2={X(nec)} y2={ay + 88} stroke={P.navy} strokeWidth={1.4} />
          <Label x={X(nec) - 4} y={ay + 100} text={L(`Avec NEC 690.7 : ${fmt(nec, lang)} V ✓`, `With NEC 690.7: ${nec} V ✓`)} size={10} color={P.navy} anchor="end" />
        </G>
      ) : null}
    </SceneFrame>
  );
}

/** Standard Test Conditions and why real production is lower. */
export function PvStc({ lang }: SceneProps) {
  const L = pick(lang);
  const cards = [
    { x: 24, title: '25 °C', sub: L('Température cellule', 'Cell temperature') },
    { x: 145, title: '1000 W/m²', sub: L('Irradiance', 'Irradiance') },
    { x: 266, title: 'AM 1.5', sub: L('Masse d’air', 'Air mass') },
  ];
  return (
    <SceneFrame>
      <Tag x={200} y={26} w={250} text={L('Conditions STC de la fiche technique', 'Datasheet STC conditions')} />
      {cards.map((c, i) => (
        <G key={c.title}>
          <Rect x={c.x} y={50} width={110} height={112} rx={12} fill={P.white} stroke={P.line} />
          {i === 0 ? (
            <G>
              <Rect x={c.x + 50} y={62} width={10} height={40} rx={5} fill={P.white} stroke={P.ink} strokeWidth={1.5} />
              <Rect x={c.x + 52.5} y={80} width={5} height={24} fill={P.red} />
              <Circle cx={c.x + 55} cy={108} r={9} fill={P.red} stroke={P.ink} strokeWidth={1.5} />
            </G>
          ) : i === 1 ? (
            <Sun x={c.x + 55} y={88} r={15} />
          ) : (
            <G>
              <Path d={`M ${c.x + 20} 110 Q ${c.x + 55} 66 ${c.x + 90} 110`} stroke={P.blue} strokeWidth={2} fill="none" />
              <Path d={`M ${c.x + 30} 110 Q ${c.x + 55} 78 ${c.x + 80} 110`} stroke={P.sky} strokeWidth={2} fill="none" />
              <Line x1={c.x + 20} y1={110} x2={c.x + 90} y2={110} stroke={P.ink} strokeWidth={1.5} />
            </G>
          )}
          <Label x={c.x + 55} y={136} text={c.title} size={13} />
          <Label x={c.x + 55} y={152} text={c.sub} size={9.5} color={P.inkSoft} weight="600" />
        </G>
      ))}
      <Rect x={24} y={182} width={352} height={92} rx={12} fill={P.white} stroke={P.line} />
      <Label x={40} y={206} text={L('Sur le terrain : pertes (régulateur, batteries,', 'In the field: losses (controller, batteries,')} size={11} anchor="start" />
      <Label x={40} y={224} text={L('onduleur, câbles) + conditions ≠ STC', 'inverter, cables) + conditions ≠ STC')} size={11} anchor="start" />
      <Arrow x1={40} y1={248} x2={92} y2={248} color={P.green} width={2.6} />
      <Label x={100} y={253} text={L('Énergie panneaux = 1,3 × énergie charges', 'Panel energy = 1.3 × load energy')} size={11.5} color={P.green} anchor="start" />
    </SceneFrame>
  );
}

/** Peak sun hours: the real daily irradiance curve vs. its equivalent at 1000 W/m². */
export function PeakSunHours({ lang, hours = 2 }: SceneProps & { hours?: number }) {
  const L = pick(lang);
  const x0 = 50;
  const x1 = 362;
  const base = 238;
  const full = 150; // px for 1000 W/m²
  const X = (t: number) => x0 + ((t - 6) / 12) * (x1 - x0);
  const peak = (hours * 1000) / ((12 * 2) / Math.PI); // W/m², same area as `hours` at 1000 W/m²
  const yOf = (g: number) => base - (g / 1000) * full;
  let d = `M ${X(6)} ${base}`;
  for (let t = 6; t <= 18.001; t += 0.25) d += ` L ${X(t).toFixed(1)} ${yOf(peak * Math.sin(((t - 6) / 12) * Math.PI)).toFixed(1)}`;
  d += ` L ${X(18)} ${base} Z`;
  const r0 = X(12 - hours / 2);
  const r1 = X(12 + hours / 2);
  return (
    <SceneFrame>
      <Tag x={200} y={24} w={240} text={L('Heures de soleil crête (PSH)', 'Peak sun hours (PSH)')} />
      <Line x1={x0} y1={yOf(1000)} x2={x1} y2={yOf(1000)} stroke={P.inkSoft} strokeWidth={1} strokeDasharray="4 3" />
      <Label x={x0 - 4} y={yOf(1000) + 4} text="1000" size={9} color={P.inkSoft} anchor="end" />
      <Label x={x0 - 4} y={yOf(1000) + 15} text="W/m²" size={8} color={P.inkSoft} anchor="end" />
      <Path d={d} fill={P.orange} opacity={0.35} stroke={P.orange} strokeWidth={2} />
      <Rect x={r0} y={yOf(1000)} width={r1 - r0} height={full} fill={P.yellow} opacity={0.5} stroke={P.orange} strokeWidth={1.5} strokeDasharray="5 3" />
      <Label x={(r0 + r1) / 2} y={yOf(1000) - 8} text={L(`${fmt(hours, lang)} h à 1000 W/m²`, `${hours} h at 1000 W/m²`)} size={11} color={P.ink} />
      <Line x1={x0} y1={base} x2={x1} y2={base} stroke={P.ink} strokeWidth={2} />
      {[6, 9, 12, 15, 18].map((t) => (
        <Label key={t} x={X(t)} y={base + 16} text={`${t} h`} size={9.5} color={P.inkSoft} weight="600" />
      ))}
      <Label x={200} y={base + 38} text={L('Même énergie que la journée réelle (surface orange)', 'Same energy as the real day (orange area)')} size={10} color={P.inkSoft} weight="600" />
    </SceneFrame>
  );
}
