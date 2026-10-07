import React from 'react';
import { G, Line, Path, Rect } from 'react-native-svg';
import type { Lang } from '../../lib/language';
import { Arrow, CheckBadge, Label, P, SceneFrame, Tag } from './kit';

const pick = (lang: Lang) => (fr: string, en: string) => (lang === 'fr' ? fr : en);

function XBox({ x, y, s, color = P.ink }: { x: number; y: number; s: number; color?: string }) {
  return (
    <G>
      <Rect x={x} y={y} width={s} height={s} fill={P.white} stroke={color} strokeWidth={1.8} />
      <Line x1={x} y1={y} x2={x + s} y2={y + s} stroke={color} strokeWidth={1.4} />
      <Line x1={x + s} y1={y} x2={x} y2={y + s} stroke={color} strokeWidth={1.4} />
    </G>
  );
}

function MiniFloor({ x, y, withX, label }: { x: number; y: number; withX: boolean; label: string }) {
  return (
    <G>
      <Rect x={x} y={y} width={120} height={46} fill={P.white} stroke={P.ink} strokeWidth={2} />
      <Line x1={x + 70} y1={y} x2={x + 70} y2={y + 46} stroke={P.ink} strokeWidth={1.4} />
      {withX ? <XBox x={x + 82} y={y + 9} s={28} color={P.orange} /> : <Rect x={x + 82} y={y + 9} width={28} height={28} fill="none" stroke={P.line} strokeDasharray="3 2" />}
      <Label x={x + 34} y={y + 28} text={label} size={9.5} color={P.inkSoft} weight="600" />
    </G>
  );
}

type PlanVariant = 'stairs' | 'shaft' | 'doors';

export function PlanSymbols({ lang, variant = 'stairs' }: { lang: Lang; variant?: PlanVariant }) {
  const L = pick(lang);

  if (variant === 'stairs') {
    const steps = 10;
    return (
      <SceneFrame>
        <Rect x={26} y={36} width={300} height={226} rx={14} fill="none" stroke={P.greenMid} strokeWidth={1.5} strokeDasharray="6 5" />
        <Label x={176} y={30} text={L('Noyau de circulation verticale', 'Vertical circulation core')} size={11} color={P.green} />
        <Rect x={48} y={56} width={120} height={190} fill={P.white} stroke={P.ink} strokeWidth={2.5} />
        {Array.from({ length: steps - 1 }).map((_, i) => (
          <Line key={i} x1={48} y1={56 + (i + 1) * 19} x2={168} y2={56 + (i + 1) * 19} stroke={P.ink} strokeWidth={1.2} />
        ))}
        {Array.from({ length: steps }).map((_, i) => (
          <Label key={i} x={58} y={240 - i * 19} text={String(i + 1)} size={8.5} color={P.inkSoft} weight="600" />
        ))}
        <Path d="M 48 160 L 168 132" stroke={P.ink} strokeWidth={1.6} />
        <Arrow x1={118} y1={236} x2={118} y2={70} color={P.green} width={2.5} />
        <Tag x={118} y={154} w={74} text={L('MONTÉE', 'UP')} />

        <Rect x={196} y={56} width={110} height={100} fill={P.white} stroke={P.ink} strokeWidth={2.5} />
        <Line x1={196} y1={56} x2={306} y2={156} stroke={P.ink} strokeWidth={1.4} />
        <Line x1={306} y1={56} x2={196} y2={156} stroke={P.ink} strokeWidth={1.4} />
        <Rect x={218} y={156} width={66} height={6} fill={P.steel} />
        <Label x={251} y={186} text={L('Ascenseur', 'Elevator')} size={12} />
        <Label x={251} y={202} text={L('toujours à côté', 'always next')} size={9.5} color={P.inkSoft} weight="600" />
        <Label x={251} y={215} text={L("de l'escalier", 'to the stairs')} size={9.5} color={P.inkSoft} weight="600" />
        <Label x={362} y={150} text={L('Marches', 'Steps')} size={10} color={P.inkSoft} weight="600" />
        <Label x={362} y={164} text={L('numérotées', 'numbered')} size={10} color={P.inkSoft} weight="600" />
      </SceneFrame>
    );
  }

  if (variant === 'shaft') {
    return (
      <SceneFrame>
        <Tag x={104} y={34} w={160} text={L('X sur un seul étage', 'X on one floor only')} fill={P.orange} />
        <Tag x={296} y={34} w={160} text={L('X sur tous les étages', 'X on every floor')} fill={P.green} />
        <MiniFloor x={44} y={92} withX={false} label={L('Étage 2', 'Floor 2')} />
        <MiniFloor x={44} y={152} withX label={L('Étage 1', 'Floor 1')} />
        <MiniFloor x={236} y={62} withX label={L('Étage 3', 'Floor 3')} />
        <MiniFloor x={236} y={122} withX label={L('Étage 2', 'Floor 2')} />
        <MiniFloor x={236} y={182} withX label={L('Étage 1', 'Floor 1')} />
        <Line x1={332} y1={56} x2={332} y2={236} stroke={P.green} strokeWidth={2} strokeDasharray="5 4" />
        <Label x={104} y={238} text={L('= Double hauteur', '= Double-height space')} size={12} color={P.orange} />
        <Label x={104} y={254} text={L('(ouvert sur l’étage du dessus)', '(open to the floor above)')} size={9.5} color={P.inkSoft} weight="600" />
        <Label x={296} y={258} text={L('= Gaine technique / puits', '= Shaft / light well')} size={12} color={P.green} />
      </SceneFrame>
    );
  }

  return (
    <SceneFrame>
      <Rect x={20} y={56} width={360} height={10} fill={P.ink} />
      <Rect x={70} y={56} width={46} height={10} fill={P.white} />
      <Line x1={70} y1={66} x2={70} y2={112} stroke={P.ink} strokeWidth={2} />
      <Path d="M 70 112 A 46 46 0 0 0 116 66" fill="none" stroke={P.inkSoft} strokeWidth={1} strokeDasharray="3 2" />
      <Rect x={160} y={56} width={84} height={10} fill={P.white} />
      <Line x1={160} y1={66} x2={160} y2={108} stroke={P.ink} strokeWidth={2} />
      <Line x1={244} y1={66} x2={244} y2={108} stroke={P.ink} strokeWidth={2} />
      <Path d="M 160 108 A 42 42 0 0 0 202 66" fill="none" stroke={P.inkSoft} strokeWidth={1} strokeDasharray="3 2" />
      <Path d="M 244 108 A 42 42 0 0 1 202 66" fill="none" stroke={P.inkSoft} strokeWidth={1} strokeDasharray="3 2" />
      <Rect x={290} y={56} width={60} height={10} fill={P.white} stroke={P.ink} strokeWidth={1} />
      <Line x1={290} y1={59} x2={350} y2={59} stroke={P.blue} strokeWidth={1.2} />
      <Line x1={290} y1={61} x2={350} y2={61} stroke={P.blue} strokeWidth={1.2} />
      <Line x1={290} y1={63} x2={350} y2={63} stroke={P.blue} strokeWidth={1.2} />
      <Label x={93} y={44} text={L('Porte', 'Door')} size={11} />
      <Label x={202} y={44} text={L('Porte double', 'Double door')} size={11} />
      <Label x={320} y={44} text={L('Fenêtre', 'Window')} size={11} />

      <Rect x={20} y={140} width={360} height={130} rx={10} fill={P.white} opacity={0.85} />
      <Rect x={40} y={162} width={70} height={90} rx={4} fill="#dfe9f3" stroke={P.blue} strokeWidth={1.2} />
      <Rect x={46} y={166} width={26} height={14} rx={3} fill={P.white} stroke={P.blue} />
      <Rect x={78} y={166} width={26} height={14} rx={3} fill={P.white} stroke={P.blue} />
      <Rect x={116} y={162} width={24} height={22} rx={2} fill="#efe2cf" stroke={P.brown} />
      <Path d={`M 140 154 A 6 6 0 0 0 152 154 Z`} fill={P.white} stroke={P.greenMid} strokeWidth={1.3} />
      <CheckBadge x={146} y={196} r={9} />

      <Path d="M 230 252 L 230 200 L 340 200 L 340 252" fill="none" stroke={P.brown} strokeWidth={12} strokeLinejoin="round" />
      <Path d={`M 279 194 A 6 6 0 0 1 291 194 Z`} fill={P.white} stroke={P.red} strokeWidth={1.3} />
      <CheckBadge x={285} y={228} r={9} ok={false} />
      <Label x={200} y={290} text={L('Les meubles guident la position des prises et interrupteurs', 'Furniture guides socket and switch positions')} size={10} color={P.inkSoft} weight="600" />
    </SceneFrame>
  );
}
