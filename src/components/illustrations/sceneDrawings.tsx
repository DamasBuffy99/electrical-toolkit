import React, { useId } from 'react';
import { Circle, ClipPath, Defs, G, Line, Path, Rect } from 'react-native-svg';
import type { Lang } from '../../lib/language';
import { Arrow, CheckBadge, Label, P, SceneFrame, Sheet, Tag } from './kit';

const pick = (lang: Lang) => (fr: string, en: string) => (lang === 'fr' ? fr : en);

function cloudPath(x: number, y: number, w: number, h: number, b = 6) {
  const nx = Math.max(1, Math.round(w / (2 * b)));
  const ny = Math.max(1, Math.round(h / (2 * b)));
  let d = `M ${x} ${y}`;
  for (let i = 0; i < nx; i++) d += ` a ${b} ${b} 0 0 1 ${2 * b} 0`;
  for (let i = 0; i < ny; i++) d += ` a ${b} ${b} 0 0 1 0 ${2 * b}`;
  for (let i = 0; i < nx; i++) d += ` a ${b} ${b} 0 0 1 ${-2 * b} 0`;
  for (let i = 0; i < ny; i++) d += ` a ${b} ${b} 0 0 1 0 ${-2 * b}`;
  return d;
}

function Luminaire({ x, y, r = 7, color = P.ink }: { x: number; y: number; r?: number; color?: string }) {
  const k = r * 0.7;
  return (
    <G>
      <Circle cx={x} cy={y} r={r} fill={P.white} stroke={color} strokeWidth={1.3} />
      <Line x1={x - k} y1={y - k} x2={x + k} y2={y + k} stroke={color} strokeWidth={1.1} />
      <Line x1={x + k} y1={y - k} x2={x - k} y2={y + k} stroke={color} strokeWidth={1.1} />
    </G>
  );
}

function Socket({ x, y, rot = 0, color = P.ink }: { x: number; y: number; rot?: number; color?: string }) {
  return (
    <G transform={`rotate(${rot} ${x} ${y})`}>
      <Path d={`M ${x - 6} ${y} A 6 6 0 0 1 ${x + 6} ${y} Z`} fill={P.white} stroke={color} strokeWidth={1.2} />
      <Line x1={x - 3} y1={y - 3} x2={x - 3} y2={y - 9} stroke={color} strokeWidth={1.1} />
      <Line x1={x + 3} y1={y - 3} x2={x + 3} y2={y - 9} stroke={color} strokeWidth={1.1} />
    </G>
  );
}

function DoorArc({ x, y, r, dir = 1 }: { x: number; y: number; r: number; dir?: 1 | -1 }) {
  return (
    <G>
      <Line x1={x} y1={y} x2={x} y2={y - r * dir} stroke={P.ink} strokeWidth={1.4} />
      <Path d={`M ${x} ${y - r * dir} A ${r} ${r} 0 0 ${dir === 1 ? 1 : 0} ${x + r} ${y}`} fill="none" stroke={P.inkSoft} strokeWidth={0.9} strokeDasharray="3 2" />
    </G>
  );
}

/** Small residential plan (3 rooms) at (px,py) of size (pw,ph). */
function FloorPlan({ px, py, pw, ph }: { px: number; py: number; pw: number; ph: number }) {
  const vx = px + pw * 0.56;
  const hy = py + ph * 0.48;
  return (
    <G>
      <Rect x={px} y={py} width={pw} height={ph} fill={P.white} stroke={P.ink} strokeWidth={3} />
      <Line x1={vx} y1={py} x2={vx} y2={py + ph * 0.62} stroke={P.ink} strokeWidth={2.4} />
      <Line x1={vx} y1={py + ph * 0.84} x2={vx} y2={py + ph} stroke={P.ink} strokeWidth={2.4} />
      <Line x1={vx} y1={hy} x2={vx + (pw - (vx - px)) * 0.3} y2={hy} stroke={P.ink} strokeWidth={2.4} />
      <Line x1={vx + (pw - (vx - px)) * 0.62} y1={hy} x2={px + pw} y2={hy} stroke={P.ink} strokeWidth={2.4} />
      <DoorArc x={vx} y={py + ph * 0.84} r={ph * 0.22} dir={1} />
    </G>
  );
}

type DrawingVariant = 'conceptual' | 'shop' | 'asbuilt';

export function DrawingSheet({ lang, variant = 'conceptual' }: { lang: Lang; variant?: DrawingVariant }) {
  const L = pick(lang);
  const px = 66;
  const py = 54;
  const pw = 236;
  const ph = 172;
  const vx = px + pw * 0.56;
  const hy = py + ph * 0.48;
  const title = variant === 'conceptual' ? 'CONCEPT' : variant === 'shop' ? 'SHOP DWG' : 'AS-BUILT';
  const lights = [
    { x: px + 40, y: py + 52 },
    { x: px + 92, y: py + 122 },
    { x: vx + 52, y: py + 40 },
    { x: vx + 52, y: hy + 48 },
  ];
  const movedLight = variant === 'asbuilt';
  return (
    <SceneFrame>
      <Sheet x={30} y={20} w={340} h={262} title={title} />
      <FloorPlan px={px} py={py} pw={pw} ph={ph} />

      {lights.map((l, i) =>
        movedLight && i === 3 ? (
          <G key={i}>
            <Circle cx={l.x} cy={l.y} r={7} fill="none" stroke={P.red} strokeWidth={1.2} strokeDasharray="2 2" />
            <Luminaire x={l.x + 34} y={l.y + 10} color={P.red} />
          </G>
        ) : (
          <Luminaire key={i} x={l.x} y={l.y} />
        )
      )}
      <Socket x={px + 20} y={py + ph} rot={180} />
      <Socket x={px + 120} y={py + ph} rot={180} />
      <Socket x={px + pw} y={py + 40} rot={90} />
      <Socket x={px + pw} y={hy + 60} rot={90} />

      <Path
        d={`M ${lights[0].x + 7} ${lights[0].y} Q ${px + 80} ${py + 60} ${lights[1].x} ${lights[1].y - 7} M ${lights[2].x} ${lights[2].y + 7} Q ${vx + 60} ${hy} ${lights[3].x} ${lights[3].y - 7}`}
        stroke={P.blue}
        strokeWidth={1.3}
        strokeDasharray="4 3"
        fill="none"
      />
      <Rect x={px + pw - 18} y={py + ph - 14} width={14} height={9} fill={P.navy} />
      <Arrow x1={lights[3].x + 4} y1={lights[3].y + 8} x2={px + pw - 14} y2={py + ph - 16} color={P.blue} width={1.4} />

      {(variant === 'shop' || variant === 'asbuilt') && (
        <G>
          <Line x1={px} y1={py - 14} x2={vx} y2={py - 14} stroke={P.inkSoft} strokeWidth={0.9} />
          <Line x1={vx} y1={py - 14} x2={px + pw} y2={py - 14} stroke={P.inkSoft} strokeWidth={0.9} />
          {[px, vx, px + pw].map((t) => (
            <Line key={t} x1={t - 3} y1={py - 11} x2={t + 3} y2={py - 17} stroke={P.inkSoft} strokeWidth={1} />
          ))}
          <Label x={(px + vx) / 2} y={py - 18} text="4.20" size={8.5} color={P.inkSoft} />
          <Label x={(vx + px + pw) / 2} y={py - 18} text="3.30" size={8.5} color={P.inkSoft} />
          <Line x1={px - 14} y1={py} x2={px - 14} y2={py + ph} stroke={P.inkSoft} strokeWidth={0.9} />
          <Label x={px - 20} y={py + ph / 2} text="5.50" size={8.5} color={P.inkSoft} />
          <Label x={px + 66} y={py + 96} text="3×1.5 mm²" size={8} color={P.blue} />
          <Label x={vx + 26} y={hy + 14} text="3×2.5 mm²" size={8} color={P.blue} anchor="start" />
        </G>
      )}

      {variant === 'shop' && (
        <G transform="rotate(-10 320 70)">
          <Rect x={282} y={52} width={78} height={26} rx={4} fill="none" stroke={P.greenMid} strokeWidth={2.2} />
          <Label x={321} y={70} text={L('APPROUVÉ', 'APPROVED')} size={10.5} color={P.greenMid} />
        </G>
      )}

      {variant === 'asbuilt' && (
        <G>
          <Path d={cloudPath(vx + 26, hy + 26, 84, 48, 6)} fill="none" stroke={P.red} strokeWidth={1.6} />
          <Line x1={vx + 110} y1={hy + 50} x2={vx + 118} y2={hy + 50} stroke={P.red} strokeWidth={1} />
          <Label x={vx + 90} y={hy + 92} text={L('Déplacé sur site', 'Moved on site')} size={8.5} color={P.red} />
          <G transform="rotate(-10 320 70)">
            <Rect x={282} y={52} width={78} height={26} rx={4} fill="none" stroke={P.red} strokeWidth={2.2} />
            <Label x={321} y={70} text="AS-BUILT" size={10.5} color={P.red} />
          </G>
        </G>
      )}

      {variant === 'conceptual' && (
        <G>
          <Label x={px + 4} y={py + ph + 32} text={L('— Éclairage    ⌒ Prises    ┅ Circuit', '— Lighting    ⌒ Sockets    ┅ Circuit')} size={8.5} color={P.inkSoft} weight="600" anchor="start" />
        </G>
      )}
    </SceneFrame>
  );
}

function MiniSheet({ x, y, level }: { x: number; y: number; level: 1 | 2 | 3 }) {
  const w = 104;
  const h = 80;
  return (
    <G>
      <Sheet x={x} y={y} w={w} h={h} />
      <Rect x={x + 14} y={y + 14} width={60} height={44} fill="none" stroke={P.ink} strokeWidth={1.6} />
      <Line x1={x + 46} y1={y + 14} x2={x + 46} y2={y + 58} stroke={P.ink} strokeWidth={1.2} />
      <Luminaire x={x + 30} y={y + 30} r={4.5} />
      <Luminaire x={x + 60} y={y + 44} r={4.5} color={level === 3 ? P.red : P.ink} />
      {level >= 2 && (
        <G>
          <Line x1={x + 14} y1={y + 9} x2={x + 74} y2={y + 9} stroke={P.inkSoft} strokeWidth={0.8} />
          <Line x1={x + 80} y1={y + 14} x2={x + 80} y2={y + 58} stroke={P.inkSoft} strokeWidth={0.8} />
          <Line x1={x + 24} y1={y + 52} x2={x + 40} y2={y + 52} stroke={P.blue} strokeWidth={1} />
        </G>
      )}
      {level === 2 && <CheckBadge x={x + 92} y={y + 18} r={8} />}
      {level === 3 && <Path d={cloudPath(x + 50, y + 34, 22, 20, 4)} fill="none" stroke={P.red} strokeWidth={1.2} />}
    </G>
  );
}

export function DrawingsEvolution({ lang }: { lang: Lang }) {
  const L = pick(lang);
  const cols = [
    { x: 14, level: 1 as const, t1: L('Conceptuel', 'Conceptual'), t2: 'Consultant' },
    { x: 148, level: 2 as const, t1: L('Exécution', 'Shop drawing'), t2: L('Entrepreneur', 'Contractor') },
    { x: 282, level: 3 as const, t1: 'As-built', t2: L('Remis au propriétaire', 'Handed to owner') },
  ];
  return (
    <SceneFrame>
      <Tag x={200} y={46} w={240} text={L("De l'idée à ce qui est réellement construit", 'From the idea to what is actually built')} />
      {cols.map((c) => (
        <G key={c.x}>
          <MiniSheet x={c.x} y={92} level={c.level} />
          <Label x={c.x + 52} y={198} text={c.t1} size={12} />
          <Label x={c.x + 52} y={214} text={c.t2} size={10} color={P.inkSoft} weight="600" />
        </G>
      ))}
      <Arrow x1={122} y1={132} x2={144} y2={132} />
      <Arrow x1={256} y1={132} x2={278} y2={132} />
      <Line x1={40} y1={244} x2={360} y2={244} stroke={P.line} strokeWidth={2} />
      <Arrow x1={60} y1={244} x2={360} y2={244} color={P.greenLight} width={2} />
      <Label x={200} y={266} text={L('Avancement du projet', 'Project progress')} size={10} color={P.inkSoft} weight="600" />
    </SceneFrame>
  );
}

function Hatch({ x, y, w, h, color = P.orange }: { x: number; y: number; w: number; h: number; color?: string }) {
  const clip = 'h' + useId().replace(/[^a-zA-Z0-9_-]/g, '');
  const lines: React.ReactNode[] = [];
  for (let i = -h; i < w; i += 9) {
    lines.push(<Line key={i} x1={x + i} y1={y + h} x2={x + i + h} y2={y} stroke={color} strokeWidth={1.2} opacity={0.55} />);
  }
  return (
    <G>
      <Defs>
        <ClipPath id={clip}>
          <Rect x={x} y={y} width={w} height={h} />
        </ClipPath>
      </Defs>
      <G clipPath={`url(#${clip})`}>{lines}</G>
    </G>
  );
}

type CoordVariant = 'architect' | 'civil' | 'mechanical';

export function Coordination({ lang, variant = 'architect' }: { lang: Lang; variant?: CoordVariant }) {
  const L = pick(lang);
  if (variant === 'architect') {
    return (
      <SceneFrame>
        <Rect x={30} y={40} width={250} height={220} fill={P.white} stroke={P.ink} strokeWidth={3} />
        <Line x1={150} y1={40} x2={150} y2={200} stroke={P.ink} strokeWidth={2.4} />
        <Rect x={44} y={56} width={80} height={60} rx={4} fill="#dfe9f3" stroke={P.blue} strokeWidth={1.2} />
        <Rect x={50} y={60} width={30} height={14} rx={3} fill={P.white} stroke={P.blue} strokeWidth={1} />
        <Rect x={88} y={60} width={30} height={14} rx={3} fill={P.white} stroke={P.blue} strokeWidth={1} />
        <Path d="M 44 200 L 44 170 L 128 170 L 128 200" fill="none" stroke={P.brown} strokeWidth={9} strokeLinejoin="round" />
        <Rect x={190} y={110} width={60} height={40} rx={4} fill="#efe2cf" stroke={P.brown} strokeWidth={1.2} />
        <Socket x={134} y={40} rot={180} color={P.greenMid} />
        <CheckBadge x={134} y={24} r={8} />
        <Socket x={86} y={206} rot={0} color={P.red} />
        <CheckBadge x={86} y={226} r={8} ok={false} />
        <Luminaire x={220} y={80} />

        <Rect x={292} y={40} width={84} height={220} fill="#fff6ea" stroke={P.ink} strokeWidth={3} />
        <Hatch x={294} y={42} w={80} h={216} />
        <Rect x={300} y={130} width={68} height={40} rx={6} fill={P.white} />
        <Label x={334} y={147} text={L('Local', 'Elec.')} size={11} />
        <Label x={334} y={162} text={L('TGBT/groupe', 'room')} size={10} />
        <Tag x={155} y={284} w={250} text={L('Prises dégagées du mobilier · locaux réservés', 'Sockets clear of furniture · rooms reserved')} />
      </SceneFrame>
    );
  }
  if (variant === 'civil') {
    const slabs = [250, 190, 130, 70];
    return (
      <SceneFrame>
        <Rect x={20} y={250} width={360} height={36} fill="#d7cfc2" />
        <Hatch x={20} y={252} w={360} h={34} color={P.brown} />
        {[50, 200, 350].map((cx) => (
          <Rect key={cx} x={cx - 6} y={64} width={12} height={186} fill={P.concrete} stroke={P.steel} strokeWidth={1} />
        ))}
        {slabs.map((sy) => (
          <Rect key={sy} x={40} y={sy - 6} width={320} height={8} fill={P.concrete} stroke={P.steel} strokeWidth={1} />
        ))}
        <Rect x={78} y={200} width={86} height={44} rx={4} fill={P.navy} />
        <Label x={121} y={220} text="TR" size={14} color={P.white} />
        <Label x={121} y={236} text="1 MVA" size={9} color={P.sky} weight="600" />
        <Rect x={232} y={208} width={96} height={36} rx={4} fill={P.greenMid} />
        <Label x={280} y={231} text={L('Groupe', 'Genset')} size={12} color={P.white} />
        <Arrow x1={121} y1={150} x2={121} y2={194} color={P.red} />
        <Arrow x1={280} y1={156} x2={280} y2={202} color={P.red} />
        <Tag x={121} y={140} w={80} text={L('Poids', 'Weight')} fill={P.red} />
        <Tag x={280} y={146} w={80} text={L('Poids', 'Weight')} fill={P.red} />
        <Tag x={200} y={36} w={250} text={L('Équipements lourds au rez-de-chaussée', 'Heavy equipment on the ground floor')} />
      </SceneFrame>
    );
  }
  const panel = (ox: number, ok: boolean) => (
    <G>
      <Rect x={ox} y={52} width={180} height={18} fill={P.concrete} />
      <Rect x={ox} y={226} width={180} height={8} fill={P.greyLight} stroke={P.grey} strokeWidth={1} />
      <Rect x={ox + 74} y={234} width={32} height={6} rx={2} fill={P.yellow} />
      <Rect x={ox + 14} y={84} width={70} height={36} rx={3} fill={P.sky} stroke={P.blue} strokeWidth={1.2} />
      <Circle cx={ok ? ox + 158 : ox + 132} cy={100} r={11} fill="#5b8fd1" stroke={P.navy} strokeWidth={1.2} />
      <Line x1={ok ? ox + 158 : ox + 132} y1={70} x2={ok ? ox + 158 : ox + 132} y2={89} stroke={P.steel} strokeWidth={1.5} />
      {(() => {
        const tx = ok ? ox + 96 : ox + 112;
        const ty = ok ? 178 : 132;
        return (
          <G>
            <Path d={`M ${tx} ${ty} L ${tx} ${ty + 10} L ${tx + 42} ${ty + 10} L ${tx + 42} ${ty}`} fill="none" stroke={P.steel} strokeWidth={3} />
            <Line x1={tx + 4} y1={ty + 6} x2={tx + 38} y2={ty + 6} stroke={P.orange} strokeWidth={2} />
            <Line x1={tx + 4} y1={ty + 3} x2={tx + 38} y2={ty + 3} stroke={P.ink} strokeWidth={2} />
            <Line x1={tx + 21} y1={70} x2={tx + 21} y2={ty} stroke={P.steel} strokeWidth={1} />
          </G>
        );
      })()}
      {!ok && <Path d={`M ${ox + 132} ${112} q -4 8 0 11 q 4 -3 0 -11 z`} fill="#5b8fd1" />}
      <CheckBadge x={ox + 160} y={210} r={11} ok={ok} />
    </G>
  );
  return (
    <SceneFrame>
      {panel(14, false)}
      {panel(206, true)}
      <Tag x={104} y={30} w={150} text={L('✗ Sous le tuyau d\'eau', '✗ Under the water pipe')} fill={P.red} />
      <Tag x={296} y={30} w={150} text={L('✓ Décalé, sans conflit', '✓ Offset, no clash')} fill={P.greenMid} />
      <Label x={63} y={136} text={L('Gaine CVC', 'HVAC duct')} size={9} color={P.navy} />
      <Label x={146} y={82} text={L('Eau', 'Water')} size={9} color={P.navy} />
      <Label x={60} y={268} text={L('Chemin de câbles', 'Cable tray')} size={9.5} color={P.inkSoft} weight="600" />
      <Label x={300} y={268} text={L('Faux-plafond + luminaire', 'False ceiling + luminaire')} size={9.5} color={P.inkSoft} weight="600" />
    </SceneFrame>
  );
}
