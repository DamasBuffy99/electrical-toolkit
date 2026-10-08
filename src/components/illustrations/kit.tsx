import React, { useId } from 'react';
import { Platform } from 'react-native';
import Svg, {
  Circle,
  ClipPath,
  Defs,
  Ellipse,
  G,
  Line,
  LinearGradient,
  Path,
  Polygon,
  Rect,
  Stop,
  Text as SvgText,
} from 'react-native-svg';

export const P = {
  // Navy + amber palette (keys kept from the first palette to avoid churn: "green" = primary).
  bg: '#eef2fb',
  bg2: '#dde4f2',
  green: '#1e3a8a',
  greenMid: '#3b5bdb',
  greenLight: '#a9b8ec',
  mint: '#e8eefb',
  ink: '#0f172a',
  inkSoft: '#475569',
  line: '#cbd5e1',
  white: '#ffffff',
  paper: '#fbfbf7',
  skin1: '#f2c29b',
  skin2: '#c98d62',
  skin3: '#8d5a3b',
  hair1: '#2b2b2b',
  hair2: '#5a3a22',
  hair3: '#8a5a2b',
  navy: '#24476b',
  navyDark: '#1a3450',
  blue: '#3f7cc0',
  sky: '#cfe3f3',
  orange: '#f59e0b',
  yellow: '#fbbf24',
  red: '#dc4c4c',
  grey: '#94a3b8',
  greyLight: '#e2e8f0',
  brown: '#a0703f',
  concrete: '#c9cfcc',
  steel: '#7f8c8d',
  screen: '#2f3a40',
};

const FONT = Platform.OS === 'web' ? 'system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif' : undefined;

function useSafeId(prefix: string) {
  return prefix + useId().replace(/[^a-zA-Z0-9_-]/g, '');
}

/** Standard 400×300 illustration canvas with a soft background. */
export function SceneFrame({ children, tint = P.bg }: { children: React.ReactNode; tint?: string }) {
  const grad = useSafeId('bg');
  return (
    <Svg width="100%" height="100%" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet">
      <Defs>
        <LinearGradient id={grad} x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor={P.white} />
          <Stop offset="1" stopColor={tint} />
        </LinearGradient>
      </Defs>
      <Rect x={0} y={0} width={400} height={300} rx={18} fill={`url(#${grad})`} />
      <Circle cx={326} cy={74} r={72} fill={P.mint} opacity={0.6} />
      {children}
    </Svg>
  );
}

export function Label({
  x,
  y,
  text,
  size = 12,
  color = P.ink,
  weight = '700',
  anchor = 'middle',
}: {
  x: number;
  y: number;
  text: string;
  size?: number;
  color?: string;
  weight?: '400' | '600' | '700';
  anchor?: 'start' | 'middle' | 'end';
}) {
  return (
    <SvgText x={x} y={y} fontSize={size} fontWeight={weight} fill={color} textAnchor={anchor} fontFamily={FONT}>
      {text}
    </SvgText>
  );
}

/** Rounded pill with centered text, used for captions inside scenes. */
export function Tag({ x, y, text, w, fill = P.green, color = P.white }: { x: number; y: number; text: string; w: number; fill?: string; color?: string }) {
  return (
    <G>
      <Rect x={x - w / 2} y={y - 11} width={w} height={22} rx={11} fill={fill} />
      <Label x={x} y={y + 4} text={text} size={11} color={color} />
    </G>
  );
}

export function Ground({ y = 262, color = P.bg2 }: { y?: number; color?: string }) {
  return <Rect x={0} y={y} width={400} height={300 - y} rx={0} fill={color} />;
}

export function Tree({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <G transform={`translate(${x},${y}) scale(${s})`}>
      <Rect x={-3} y={-22} width={6} height={22} fill={P.brown} />
      <Circle cx={0} cy={-34} r={16} fill={P.greenMid} />
      <Circle cx={-9} cy={-28} r={10} fill={P.green} opacity={0.85} />
    </G>
  );
}

export function Cloud({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <G transform={`translate(${x},${y}) scale(${s})`} opacity={0.9}>
      <Ellipse cx={0} cy={0} rx={22} ry={10} fill={P.white} />
      <Circle cx={-8} cy={-6} r={9} fill={P.white} />
      <Circle cx={6} cy={-8} r={11} fill={P.white} />
    </G>
  );
}

export type Accessory = 'none' | 'clipboard' | 'laptop' | 'tablet' | 'plans' | 'cable' | 'briefcase' | 'pen';

type PersonProps = {
  x: number;
  y: number;
  s?: number;
  skin?: string;
  hair?: string;
  hairStyle?: 'short' | 'side' | 'bun' | 'long';
  shirt?: string;
  pants?: string;
  shoes?: string;
  helmet?: string | null;
  vest?: string | null;
  tie?: string | null;
  accessory?: Accessory;
  flip?: boolean;
  hideLegs?: boolean;
};

/** Flat front-facing character. Origin is between the feet; height ≈ 126 at s=1. */
export function Person({
  x,
  y,
  s = 1,
  skin = P.skin1,
  hair = P.hair1,
  hairStyle = 'short',
  shirt = P.blue,
  pants = P.navyDark,
  shoes = P.ink,
  helmet = null,
  vest = null,
  tie = null,
  accessory = 'none',
  flip = false,
  hideLegs = false,
}: PersonProps) {
  const holdsAtChest = accessory === 'clipboard' || accessory === 'laptop' || accessory === 'tablet';
  return (
    <G transform={`translate(${x},${y}) scale(${flip ? -s : s},${s})`}>
      {!hideLegs && (
        <G>
          <Rect x={-11} y={-44} width={9.5} height={42} rx={3} fill={pants} />
          <Rect x={1.5} y={-44} width={9.5} height={42} rx={3} fill={pants} />
          <Ellipse cx={-7} cy={-2} rx={8} ry={3.5} fill={shoes} />
          <Ellipse cx={7} cy={-2} rx={8} ry={3.5} fill={shoes} />
        </G>
      )}

      {/* torso */}
      <Rect x={-17} y={-86} width={34} height={46} rx={10} fill={shirt} />
      {tie && (
        <G>
          <Polygon points="-6,-86 0,-79 6,-86" fill={P.white} />
          <Polygon points="0,-82 -3,-77 0,-58 3,-77" fill={tie} />
        </G>
      )}
      {vest && (
        <G>
          <Rect x={-17} y={-85} width={12} height={44} rx={5} fill={vest} />
          <Rect x={5} y={-85} width={12} height={44} rx={5} fill={vest} />
          <Rect x={-17} y={-62} width={12} height={4} fill="#f4f1d0" />
          <Rect x={5} y={-62} width={12} height={4} fill="#f4f1d0" />
          <Rect x={-17} y={-52} width={12} height={4} fill="#f4f1d0" />
          <Rect x={5} y={-52} width={12} height={4} fill="#f4f1d0" />
        </G>
      )}

      {/* arms */}
      {holdsAtChest ? (
        <G>
          <Rect x={-25} y={-82} width={9} height={24} rx={4.5} fill={shirt} />
          <Rect x={16} y={-82} width={9} height={24} rx={4.5} fill={shirt} />
          <Line x1={-20.5} y1={-60} x2={-11} y2={-58} stroke={shirt} strokeWidth={9} strokeLinecap="round" />
          <Line x1={20.5} y1={-60} x2={11} y2={-58} stroke={shirt} strokeWidth={9} strokeLinecap="round" />
        </G>
      ) : (
        <G>
          <Rect x={-25} y={-82} width={9} height={38} rx={4.5} fill={shirt} />
          <Rect x={16} y={-82} width={9} height={38} rx={4.5} fill={shirt} />
          <Circle cx={-20.5} cy={-43} r={4.5} fill={skin} />
          <Circle cx={20.5} cy={-43} r={4.5} fill={skin} />
        </G>
      )}

      {/* accessories held at chest */}
      {accessory === 'clipboard' && (
        <G>
          <Rect x={-11} y={-76} width={22} height={28} rx={2} fill={P.brown} />
          <Rect x={-9} y={-73} width={18} height={23} fill={P.paper} />
          <Rect x={-4} y={-78} width={8} height={4} rx={1} fill={P.steel} />
          <Path d="M -6 -67 l 2 2 l 4 -4" stroke={P.green} strokeWidth={1.6} fill="none" />
          <Line x1={1} y1={-66} x2={7} y2={-66} stroke={P.grey} strokeWidth={1.2} />
          <Path d="M -6 -59 l 2 2 l 4 -4" stroke={P.green} strokeWidth={1.6} fill="none" />
          <Line x1={1} y1={-58} x2={7} y2={-58} stroke={P.grey} strokeWidth={1.2} />
        </G>
      )}
      {accessory === 'laptop' && (
        <G>
          <Rect x={-15} y={-74} width={30} height={19} rx={2} fill={P.screen} />
          <Rect x={-12} y={-71} width={24} height={13} fill={P.sky} />
          <Rect x={-17} y={-56} width={34} height={3.5} rx={1.5} fill={P.grey} />
        </G>
      )}
      {accessory === 'tablet' && (
        <G>
          <Rect x={-10} y={-76} width={20} height={26} rx={2.5} fill={P.screen} />
          <Rect x={-8} y={-73} width={16} height={20} fill={P.sky} />
          <Line x1={-5} y1={-68} x2={5} y2={-68} stroke={P.blue} strokeWidth={1.4} />
          <Line x1={-5} y1={-63} x2={3} y2={-63} stroke={P.blue} strokeWidth={1.4} />
        </G>
      )}
      {holdsAtChest && (
        <G>
          <Circle cx={-11} cy={-58} r={4.5} fill={skin} />
          <Circle cx={11} cy={-58} r={4.5} fill={skin} />
        </G>
      )}
      {accessory === 'plans' && (
        <G transform="rotate(-28 20 -48)">
          <Rect x={10} y={-52} width={36} height={8} rx={4} fill="#eaf2fb" stroke={P.blue} strokeWidth={1.2} />
          <Ellipse cx={46} cy={-48} rx={2.5} ry={4} fill={P.sky} stroke={P.blue} strokeWidth={1} />
        </G>
      )}
      {accessory === 'cable' && (
        <G>
          <Circle cx={24} cy={-40} r={9} stroke={P.orange} strokeWidth={3} fill="none" />
          <Circle cx={24} cy={-40} r={4} stroke={P.orange} strokeWidth={2.5} fill="none" />
          <Path d="M 30 -34 Q 36 -20 30 -6" stroke={P.orange} strokeWidth={3} fill="none" />
        </G>
      )}
      {accessory === 'briefcase' && (
        <G>
          <Rect x={16} y={-42} width={20} height={14} rx={2.5} fill={P.brown} />
          <Rect x={22} y={-45} width={8} height={4} rx={1.5} fill="none" stroke={P.brown} strokeWidth={1.6} />
        </G>
      )}
      {accessory === 'pen' && <Line x1={20.5} y1={-44} x2={28} y2={-56} stroke={P.ink} strokeWidth={2} strokeLinecap="round" />}

      {/* neck & head */}
      <Rect x={-4} y={-92} width={8} height={8} fill={skin} />
      <Circle cx={-14} cy={-104} r={3} fill={skin} />
      <Circle cx={14} cy={-104} r={3} fill={skin} />
      <Circle cx={0} cy={-104} r={14} fill={skin} />
      <Circle cx={-5} cy={-105} r={1.7} fill={P.ink} />
      <Circle cx={5} cy={-105} r={1.7} fill={P.ink} />
      <Path d="M -5 -98 Q 0 -94 5 -98" stroke={P.ink} strokeWidth={1.4} fill="none" strokeLinecap="round" />

      {helmet ? (
        <G>
          <Path d="M -16 -107 Q -16 -127 0 -127 Q 16 -127 16 -107 Z" fill={helmet} />
          <Rect x={-19} y={-109} width={38} height={4.5} rx={2.2} fill={helmet} />
          <Rect x={-2} y={-127} width={4} height={18} fill="#000" opacity={0.08} />
        </G>
      ) : hairStyle === 'long' ? (
        <G>
          <Path d="M -15 -100 Q -17 -123 0 -122 Q 17 -123 15 -100 L 16 -84 L 10 -86 L 11 -108 Q 0 -114 -11 -108 L -10 -86 L -16 -84 Z" fill={hair} />
        </G>
      ) : (
        <G>
          <Path
            d={
              hairStyle === 'side'
                ? 'M -14 -103 Q -16 -122 2 -121 Q 16 -121 14 -104 Q 12 -112 -2 -112 Q -10 -112 -14 -103 Z'
                : 'M -14 -104 Q -15 -122 0 -121 Q 15 -122 14 -104 Q 10 -113 0 -113 Q -10 -113 -14 -104 Z'
            }
            fill={hair}
          />
          {hairStyle === 'bun' && <Circle cx={0} cy={-122} r={6} fill={hair} />}
        </G>
      )}
    </G>
  );
}

/** Round avatar (head & shoulders), useful for org charts. */
export function Bust({
  x,
  y,
  r = 26,
  skin = P.skin1,
  hair = P.hair1,
  hairStyle = 'short',
  shirt = P.blue,
  helmet = null,
  vest = null,
  tie = null,
  ring = P.green,
}: {
  x: number;
  y: number;
  r?: number;
  skin?: string;
  hair?: string;
  hairStyle?: 'short' | 'side' | 'bun' | 'long';
  shirt?: string;
  helmet?: string | null;
  vest?: string | null;
  tie?: string | null;
  ring?: string;
}) {
  const clip = useSafeId('bust');
  const k = r / 26;
  return (
    <G>
      <Defs>
        <ClipPath id={clip}>
          <Circle cx={x} cy={y} r={r} />
        </ClipPath>
      </Defs>
      <Circle cx={x} cy={y} r={r} fill={P.mint} />
      <G clipPath={`url(#${clip})`}>
        <Person
          x={x}
          y={y + 92 * k}
          s={0.82 * k}
          skin={skin}
          hair={hair}
          hairStyle={hairStyle}
          shirt={shirt}
          helmet={helmet}
          vest={vest}
          tie={tie}
          hideLegs
        />
      </G>
      <Circle cx={x} cy={y} r={r} fill="none" stroke={ring} strokeWidth={2.5} />
    </G>
  );
}

export function Building({
  x,
  y,
  w,
  h,
  color = P.sky,
  windowColor = P.blue,
  floors,
  cols = 3,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  color?: string;
  windowColor?: string;
  floors?: number;
  cols?: number;
}) {
  const nFloors = floors ?? Math.max(2, Math.floor(h / 22));
  const fh = (h - 10) / nFloors;
  const cw = (w - 10) / cols;
  const windows: React.ReactNode[] = [];
  for (let f = 0; f < nFloors; f++) {
    for (let c = 0; c < cols; c++) {
      windows.push(
        <Rect
          key={`${f}-${c}`}
          x={x + 5 + c * cw + cw * 0.18}
          y={y - h + 6 + f * fh + fh * 0.2}
          width={cw * 0.64}
          height={fh * 0.55}
          rx={1.5}
          fill={windowColor}
          opacity={0.75}
        />
      );
    }
  }
  return (
    <G>
      <Rect x={x} y={y - h} width={w} height={h} rx={3} fill={color} />
      {windows}
    </G>
  );
}

/** Building skeleton under construction. */
export function Frame({ x, y, w, h, levels = 4, bays = 3 }: { x: number; y: number; w: number; h: number; levels?: number; bays?: number }) {
  const lines: React.ReactNode[] = [];
  for (let i = 0; i <= bays; i++) {
    const cx = x + (w / bays) * i;
    lines.push(<Line key={`c${i}`} x1={cx} y1={y} x2={cx} y2={y - h} stroke={P.steel} strokeWidth={4} />);
  }
  for (let j = 0; j <= levels; j++) {
    const cy = y - (h / levels) * j;
    lines.push(<Line key={`b${j}`} x1={x - 2} y1={cy} x2={x + w + 2} y2={cy} stroke={P.steel} strokeWidth={j === 0 ? 0 : 3.5} />);
  }
  for (let i = 0; i < bays; i++) {
    for (let j = 0; j < levels; j++) {
      if ((i + j) % 2 === 0) {
        lines.push(
          <Line
            key={`d${i}-${j}`}
            x1={x + (w / bays) * i}
            y1={y - (h / levels) * j}
            x2={x + (w / bays) * (i + 1)}
            y2={y - (h / levels) * (j + 1)}
            stroke={P.steel}
            strokeWidth={1.5}
            opacity={0.6}
          />
        );
      }
    }
  }
  return <G>{lines}</G>;
}

export function Crane({ x, y, h = 170, jib = 140 }: { x: number; y: number; h?: number; jib?: number }) {
  return (
    <G>
      <Rect x={x - 5} y={y - h} width={10} height={h} fill={P.yellow} />
      {Array.from({ length: Math.floor(h / 14) }).map((_, i) => (
        <Line key={i} x1={x - 5} y1={y - i * 14} x2={x + 5} y2={y - (i + 1) * 14} stroke="#c9a43a" strokeWidth={1.2} />
      ))}
      <Rect x={x - jib * 0.28} y={y - h - 8} width={jib} height={8} fill={P.yellow} />
      <Rect x={x - jib * 0.28} y={y - h - 2} width={18} height={14} fill={P.steel} />
      <Polygon points={`${x - 6},${y - h - 8} ${x},${y - h - 26} ${x + 6},${y - h - 8}`} fill={P.yellow} />
      <Line x1={x} y1={y - h - 26} x2={x + jib * 0.68} y2={y - h - 8} stroke={P.steel} strokeWidth={1.2} />
      <Line x1={x + jib * 0.55} y1={y - h} x2={x + jib * 0.55} y2={y - h + 60} stroke={P.ink} strokeWidth={1.2} />
      <Rect x={x + jib * 0.55 - 9} y={y - h + 60} width={18} height={10} fill={P.orange} />
    </G>
  );
}

export function Desk({ x, y, w = 150 }: { x: number; y: number; w?: number }) {
  return (
    <G>
      <Rect x={x} y={y} width={w} height={8} rx={2} fill={P.brown} />
      <Rect x={x + 8} y={y + 8} width={6} height={44} fill="#8a5f33" />
      <Rect x={x + w - 14} y={y + 8} width={6} height={44} fill="#8a5f33" />
    </G>
  );
}

/** Monitor showing a small floor plan with lighting/socket symbols. */
export function Monitor({ x, y, w = 92, h = 62, dark = true }: { x: number; y: number; w?: number; h?: number; dark?: boolean }) {
  const ink = dark ? '#a9b8ec' : P.blue;
  return (
    <G>
      <Rect x={x} y={y} width={w} height={h} rx={4} fill={P.screen} />
      <Rect x={x + 4} y={y + 4} width={w - 8} height={h - 8} fill={dark ? '#0b1222' : P.white} />
      <Rect x={x + 10} y={y + 10} width={w - 20} height={h - 20} fill="none" stroke={ink} strokeWidth={1.2} />
      <Line x1={x + w / 2} y1={y + 10} x2={x + w / 2} y2={y + h - 10} stroke={ink} strokeWidth={1} />
      <Line x1={x + 10} y1={y + h / 2} x2={x + w / 2} y2={y + h / 2} stroke={ink} strokeWidth={1} />
      <Circle cx={x + w * 0.3} cy={y + h * 0.32} r={3} fill="none" stroke={P.yellow} strokeWidth={1.3} />
      <Circle cx={x + w * 0.72} cy={y + h * 0.32} r={3} fill="none" stroke={P.yellow} strokeWidth={1.3} />
      <Circle cx={x + w * 0.72} cy={y + h * 0.7} r={3} fill="none" stroke={P.yellow} strokeWidth={1.3} />
      <Rect x={x + w * 0.24} y={y + h * 0.68} width={6} height={4} fill={P.orange} />
      <Rect x={x + w / 2 - 4} y={y + h} width={8} height={10} fill={P.grey} />
      <Rect x={x + w / 2 - 16} y={y + h + 10} width={32} height={3.5} rx={1.5} fill={P.grey} />
    </G>
  );
}

/** Electrical distribution board with breakers. */
export function Panelboard({ x, y, w = 64, h = 96, open = true }: { x: number; y: number; w?: number; h?: number; open?: boolean }) {
  const rows = 4;
  const cols = 4;
  const items: React.ReactNode[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      items.push(
        <Rect
          key={`${r}-${c}`}
          x={x + 9 + c * ((w - 18) / cols)}
          y={y + 22 + r * 16}
          width={(w - 18) / cols - 3}
          height={11}
          rx={1.5}
          fill={P.white}
          stroke={P.grey}
          strokeWidth={0.8}
        />
      );
    }
  }
  return (
    <G>
      <Rect x={x} y={y} width={w} height={h} rx={4} fill={P.greyLight} stroke={P.steel} strokeWidth={1.5} />
      <Rect x={x + 6} y={y + 6} width={w - 12} height={11} rx={2} fill={P.navy} />
      {open && items}
      <Path d={`M ${x + w / 2 - 6} ${y + h - 14} l 6 -10 l -2 7 l 6 0 l -6 10 l 2 -7 z`} fill={P.yellow} stroke={P.ink} strokeWidth={0.8} />
    </G>
  );
}

/** Drawing sheet with a title block. */
export function Sheet({ x, y, w = 120, h = 86, title }: { x: number; y: number; w?: number; h?: number; title?: string }) {
  return (
    <G>
      <Rect x={x + 3} y={y + 4} width={w} height={h} rx={3} fill="#000" opacity={0.08} />
      <Rect x={x} y={y} width={w} height={h} rx={3} fill={P.paper} stroke={P.line} strokeWidth={1.2} />
      <Rect x={x + 5} y={y + 5} width={w - 10} height={h - 10} fill="none" stroke={P.inkSoft} strokeWidth={0.8} />
      <Rect x={x + w - 44} y={y + h - 19} width={39} height={14} fill={P.white} stroke={P.inkSoft} strokeWidth={0.8} />
      {title ? <Label x={x + w - 24.5} y={y + h - 9} text={title} size={6.5} color={P.inkSoft} /> : null}
    </G>
  );
}

export function CheckBadge({ x, y, r = 12, ok = true }: { x: number; y: number; r?: number; ok?: boolean }) {
  return (
    <G>
      <Circle cx={x} cy={y} r={r} fill={ok ? P.greenMid : P.red} />
      {ok ? (
        <Path d={`M ${x - r * 0.45} ${y} l ${r * 0.3} ${r * 0.32} l ${r * 0.6} ${-r * 0.62}`} stroke={P.white} strokeWidth={r * 0.22} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <G>
          <Line x1={x - r * 0.4} y1={y - r * 0.4} x2={x + r * 0.4} y2={y + r * 0.4} stroke={P.white} strokeWidth={r * 0.22} strokeLinecap="round" />
          <Line x1={x + r * 0.4} y1={y - r * 0.4} x2={x - r * 0.4} y2={y + r * 0.4} stroke={P.white} strokeWidth={r * 0.22} strokeLinecap="round" />
        </G>
      )}
    </G>
  );
}

export function Arrow({ x1, y1, x2, y2, color = P.green, width = 3 }: { x1: number; y1: number; x2: number; y2: number; color?: string; width?: number }) {
  const ang = Math.atan2(y2 - y1, x2 - x1);
  const hl = 9;
  const p1x = x2 - hl * Math.cos(ang - 0.45);
  const p1y = y2 - hl * Math.sin(ang - 0.45);
  const p2x = x2 - hl * Math.cos(ang + 0.45);
  const p2y = y2 - hl * Math.sin(ang + 0.45);
  return (
    <G>
      <Line x1={x1} y1={y1} x2={x2 - 4 * Math.cos(ang)} y2={y2 - 4 * Math.sin(ang)} stroke={color} strokeWidth={width} strokeLinecap="round" />
      <Polygon points={`${x2},${y2} ${p1x},${p1y} ${p2x},${p2y}`} fill={color} />
    </G>
  );
}
