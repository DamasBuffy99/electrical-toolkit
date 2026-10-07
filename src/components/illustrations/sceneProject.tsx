import React from 'react';
import { Circle, G, Line, Path, Polygon, Rect } from 'react-native-svg';
import type { Lang } from '../../lib/language';
import {
  Building,
  Bust,
  CheckBadge,
  Cloud,
  Crane,
  Desk,
  Frame,
  Ground,
  Label,
  Monitor,
  P,
  Panelboard,
  Person,
  SceneFrame,
  Sheet,
  Tag,
  Tree,
} from './kit';

type SceneProps = { lang: Lang };
const pick = (lang: Lang) => (fr: string, en: string) => (lang === 'fr' ? fr : en);

export function OrgChart({ lang }: SceneProps) {
  const L = pick(lang);
  return (
    <SceneFrame>
      <Bust x={200} y={68} r={32} shirt={P.navy} tie={P.red} hair={P.hair2} hairStyle="side" />
      <Label x={200} y={120} text={L('Propriétaire', 'Owner')} size={13} />

      <Line x1={200} y1={128} x2={200} y2={150} stroke={P.green} strokeWidth={2.5} />
      <Line x1={80} y1={150} x2={320} y2={150} stroke={P.green} strokeWidth={2.5} />
      <Line x1={80} y1={150} x2={80} y2={170} stroke={P.green} strokeWidth={2.5} />
      <Line x1={200} y1={150} x2={200} y2={170} stroke={P.green} strokeWidth={2.5} />
      <Line x1={320} y1={150} x2={320} y2={170} stroke={P.green} strokeWidth={2.5} />

      <Bust x={80} y={198} r={28} shirt={P.white} tie={P.blue} skin={P.skin2} hairStyle="short" />
      <Label x={80} y={246} text="Consultant" size={12.5} />
      <Label x={80} y={261} text={L("Bureau d'études", 'Design firm')} size={10} color={P.inkSoft} weight="600" />

      <Bust x={200} y={198} r={28} shirt={P.blue} helmet={P.yellow} vest={P.orange} skin={P.skin3} />
      <Label x={200} y={246} text={L('Entrepreneur', 'Contractor')} size={12.5} />
      <Label x={200} y={261} text={L('Construction', 'Construction')} size={10} color={P.inkSoft} weight="600" />

      <Bust x={320} y={198} r={28} shirt={P.navy} helmet={P.white} vest={P.yellow} hairStyle="bun" />
      <Label x={320} y={246} text={L('Superviseur', 'Supervisor')} size={12.5} />
      <Label x={320} y={261} text={L('Contrôle', 'Control')} size={10} color={P.inkSoft} weight="600" />
    </SceneFrame>
  );
}

export function OwnerLand({ lang }: SceneProps) {
  const L = pick(lang);
  return (
    <SceneFrame>
      <Cloud x={60} y={40} />
      <Building x={250} y={200} w={40} h={46} color="#dfe8ef" windowColor={P.grey} cols={2} floors={2} />
      <Building x={300} y={200} w={56} h={64} color="#e3ebe5" windowColor={P.grey} cols={3} floors={3} />
      <Ground y={200} color="#d6e5d9" />
      <Polygon points="170,262 392,262 362,212 204,212" fill="#d9c995" />
      <Polygon points="170,262 392,262 362,212 204,212" fill="none" stroke={P.brown} strokeWidth={1.5} strokeDasharray="6 4" />
      <Tree x={385} y={214} s={0.8} />
      <Tree x={182} y={214} s={0.7} />
      <Rect x={290} y={204} width={3} height={36} fill={P.brown} />
      <Rect x={262} y={196} width={58} height={20} rx={3} fill={P.white} stroke={P.brown} strokeWidth={1.4} />
      <Label x={291} y={210} text={L('TERRAIN', 'PLOT')} size={10} color={P.brown} />

      <Person x={98} y={272} s={1.12} shirt={P.navy} pants={P.navyDark} tie={P.red} hair={P.hair2} hairStyle="side" accessory="briefcase" />

      {/* thought bubble: the project he imagines */}
      <Circle cx={128} cy={118} r={4} fill={P.white} stroke={P.line} />
      <Circle cx={140} cy={102} r={6} fill={P.white} stroke={P.line} />
      <Rect x={140} y={22} width={110} height={74} rx={16} fill={P.white} stroke={P.line} strokeWidth={1.2} />
      <Building x={170} y={86} w={50} h={56} color={P.sky} windowColor={P.blue} cols={3} floors={3} />
      <Label x={195} y={38} text={L('Son projet', 'His project')} size={9.5} color={P.inkSoft} weight="600" />
    </SceneFrame>
  );
}

export function ConsultantOffice({ lang }: SceneProps) {
  const L = pick(lang);
  const disciplines = [L('Archi', 'Arch.'), L('Élec', 'Elec.'), L('Méca', 'Mech.'), L('Struct', 'Struct.')];
  return (
    <SceneFrame>
      <Sheet x={28} y={28} w={210} h={156} title={L('PLANS', 'DRAWINGS')} />
      <Building x={70} y={160} w={70} h={100} color="#e8f0f8" windowColor={P.blue} cols={3} floors={4} />
      <Rect x={150} y={70} width={70} height={48} fill="none" stroke={P.blue} strokeWidth={1.2} />
      <Line x1={185} y1={70} x2={185} y2={118} stroke={P.blue} strokeWidth={1} />
      <Circle cx={166} cy={86} r={4} fill="none" stroke={P.orange} strokeWidth={1.4} />
      <Circle cx={204} cy={86} r={4} fill="none" stroke={P.orange} strokeWidth={1.4} />
      <Circle cx={204} cy={104} r={4} fill="none" stroke={P.orange} strokeWidth={1.4} />
      <Path d="M 166 90 Q 175 112 204 108" stroke={P.orange} strokeWidth={1} strokeDasharray="3 2" fill="none" />

      {disciplines.map((d, i) => (
        <Tag key={d} x={58 + i * 50} y={208} w={44} text={d} fill={i === 1 ? P.green : P.greenLight} color={i === 1 ? P.white : P.ink} />
      ))}

      <Person x={318} y={272} s={1.14} shirt={P.white} pants={P.navy} tie={P.blue} skin={P.skin2} accessory="plans" />
      <Person x={268} y={272} s={0.95} shirt="#7fa7cf" pants={P.navyDark} hair={P.hair3} hairStyle="long" accessory="tablet" />
    </SceneFrame>
  );
}

export function ContractorSite({ lang }: SceneProps) {
  const L = pick(lang);
  return (
    <SceneFrame tint="#f3efe2">
      <Cloud x={330} y={36} s={0.9} />
      <Ground y={262} color="#e2d6b8" />
      <Frame x={170} y={262} w={150} h={168} levels={5} bays={3} />
      <Crane x={120} y={262} h={196} jib={210} />
      <Polygon points="56,262 64,240 72,262" fill={P.orange} />
      <Polygon points="350,262 358,240 366,262" fill={P.orange} />
      <Person x={250} y={276} s={1.08} shirt={P.blue} pants={P.navyDark} helmet={P.yellow} vest={P.orange} skin={P.skin3} accessory="plans" />
      <Person x={340} y={276} s={1} shirt="#5a6f7f" pants={P.navyDark} helmet={P.yellow} vest={P.orange} accessory="cable" />
      <Tag x={86} y={28} w={136} text={L('Exécution des travaux', 'Building the works')} fill={P.yellow} color={P.ink} />
    </SceneFrame>
  );
}

export function SupervisorSite({ lang }: SceneProps) {
  const L = pick(lang);
  const items = [L('Sécurité', 'Safety'), L('Qualité', 'Quality'), L('Planning', 'Schedule')];
  return (
    <SceneFrame>
      <Ground y={262} />
      <Building x={30} y={262} w={150} h={160} color="#dbe7f1" windowColor={P.blue} cols={4} floors={6} />
      <CheckBadge x={170} y={110} r={16} />
      <Person x={262} y={276} s={1.16} shirt={P.navy} pants={P.navyDark} helmet={P.white} vest={P.yellow} hairStyle="bun" accessory="clipboard" />

      <Rect x={240} y={26} width={146} height={96} rx={14} fill={P.white} stroke={P.line} strokeWidth={1.2} />
      <Polygon points="268,122 284,122 270,136" fill={P.white} />
      {items.map((it, i) => (
        <G key={it}>
          <CheckBadge x={262} y={50 + i * 26} r={8} />
          <Label x={278} y={54 + i * 26} text={it} size={12} anchor="start" />
        </G>
      ))}
    </SceneFrame>
  );
}

export function EngineerRoles({ lang }: SceneProps) {
  const L = pick(lang);
  return (
    <SceneFrame>
      <Rect x={12} y={34} width={184} height={248} rx={16} fill={P.white} opacity={0.85} />
      <Rect x={204} y={34} width={184} height={248} rx={16} fill={P.white} opacity={0.85} />
      <Tag x={104} y={54} w={150} text={L("Bureau d'études", 'Consulting firm')} />
      <Tag x={296} y={54} w={150} text={L('Entreprise', 'Construction co.')} fill={P.yellow} color={P.ink} />

      <Person x={62} y={234} s={0.92} shirt={P.white} pants={P.navy} tie={P.blue} skin={P.skin2} accessory="laptop" />
      <Person x={148} y={234} s={0.92} shirt={P.navy} pants={P.navyDark} helmet={P.white} vest={P.yellow} hairStyle="bun" accessory="clipboard" />
      <Person x={252} y={234} s={0.92} shirt={P.blue} pants={P.navyDark} helmet={P.yellow} vest={P.orange} skin={P.skin3} accessory="cable" />
      <Person x={340} y={234} s={0.92} shirt="#5a6f7f" pants={P.navyDark} hair={P.hair3} hairStyle="long" accessory="tablet" />

      <Label x={62} y={254} text={L('Conception', 'Design')} size={11} />
      <Label x={148} y={254} text="Supervision" size={11} />
      <Label x={252} y={254} text={L('Exécution', 'Execution')} size={11} />
      <Label x={340} y={254} text={L('Bureau', 'Technical')} size={11} />
      <Label x={340} y={268} text={L('technique', 'office')} size={11} />
    </SceneFrame>
  );
}

export function EngDesign({ lang }: SceneProps) {
  const L = pick(lang);
  return (
    <SceneFrame>
      <Rect x={0} y={0} width={400} height={300} rx={18} fill="#e9f0ec" opacity={0.5} />
      <Monitor x={78} y={96} w={116} h={78} dark />
      <Monitor x={206} y={96} w={116} h={78} dark={false} />
      <Desk x={30} y={196} w={340} />
      <Rect x={150} y={186} width={80} height={9} rx={2} fill={P.screen} />
      <Rect x={250} y={188} width={18} height={7} rx={3} fill={P.screen} />
      <Rect x={322} y={168} width={6} height={28} fill={P.steel} />
      <Path d="M 312 168 L 338 168 L 330 156 L 320 156 Z" fill={P.yellow} />
      <Rect x={44} y={172} width={22} height={24} rx={3} fill={P.white} stroke={P.line} />
      <Circle cx={55} cy={164} r={10} fill={P.greenMid} />

      {/* engineer seen from behind */}
      <Path d="M 98 300 Q 104 246 168 242 Q 232 246 238 300 Z" fill={P.blue} />
      <Rect x={158} y={226} width={20} height={18} fill={P.skin1} />
      <Circle cx={168} cy={212} r={25} fill={P.hair2} />
      <Circle cx={143} cy={214} r={5} fill={P.skin1} />
      <Circle cx={193} cy={214} r={5} fill={P.skin1} />
      <Tag x={200} y={30} w={196} text={L('Conception sur AutoCAD / DIALux', 'Design in AutoCAD / DIALux')} />
    </SceneFrame>
  );
}

export function EngSupervision({ lang }: SceneProps) {
  const L = pick(lang);
  return (
    <SceneFrame>
      <Rect x={0} y={0} width={210} height={262} fill="#e7ece9" />
      <Ground y={262} />
      <Panelboard x={66} y={86} w={86} h={124} />
      <Sheet x={20} y={30} w={60} h={44} title="IFC" />
      <CheckBadge x={160} y={92} r={14} />
      <Path d="M 196 160 Q 180 140 160 130" stroke={P.green} strokeWidth={2} strokeDasharray="4 3" fill="none" />
      <Person x={262} y={276} s={1.16} shirt={P.white} pants={P.navy} helmet={P.white} vest={P.yellow} skin={P.skin2} accessory="clipboard" />
      <Tag x={300} y={38} w={150} text={L('Conforme aux plans ?', 'Matches the drawings?')} />
    </SceneFrame>
  );
}

export function EngExecution({ lang }: SceneProps) {
  const L = pick(lang);
  return (
    <SceneFrame tint="#f3efe2">
      <Rect x={0} y={0} width={400} height={36} rx={0} fill={P.concrete} />
      <Line x1={70} y1={36} x2={70} y2={70} stroke={P.steel} strokeWidth={2} />
      <Line x1={200} y1={36} x2={200} y2={70} stroke={P.steel} strokeWidth={2} />
      <Line x1={330} y1={36} x2={330} y2={70} stroke={P.steel} strokeWidth={2} />
      <Path d="M 30 70 L 30 80 L 370 80 L 370 70" stroke={P.steel} strokeWidth={4} fill="none" />
      <Line x1={34} y1={74} x2={366} y2={74} stroke={P.ink} strokeWidth={2} />
      <Line x1={34} y1={77} x2={366} y2={77} stroke={P.orange} strokeWidth={2} />
      <Ground y={262} color="#e2d6b8" />

      <Line x1={176} y1={262} x2={196} y2={92} stroke={P.steel} strokeWidth={4} />
      <Line x1={216} y1={262} x2={236} y2={92} stroke={P.steel} strokeWidth={4} />
      {Array.from({ length: 8 }).map((_, i) => (
        <Line key={i} x1={178 + i * 2.4} y1={240 - i * 20} x2={218 + i * 2.4} y2={240 - i * 20} stroke={P.steel} strokeWidth={3} />
      ))}

      <Circle cx={318} cy={234} r={28} fill={P.brown} />
      <Circle cx={318} cy={234} r={20} fill="none" stroke={P.ink} strokeWidth={3} />
      <Circle cx={318} cy={234} r={13} fill="none" stroke={P.ink} strokeWidth={3} />
      <Circle cx={318} cy={234} r={5} fill={P.steel} />
      <Path d="M 340 220 Q 372 160 360 80" stroke={P.ink} strokeWidth={2.5} fill="none" />

      <Person x={104} y={276} s={1.12} shirt={P.blue} pants={P.navyDark} helmet={P.yellow} vest={P.orange} skin={P.skin3} accessory="cable" />
      <Tag x={110} y={110} w={150} text={L('Pose des câbles', 'Cable installation')} fill={P.yellow} color={P.ink} />
    </SceneFrame>
  );
}

export function EngTechnicalOffice({ lang }: SceneProps) {
  const L = pick(lang);
  return (
    <SceneFrame>
      <Sheet x={238} y={30} w={138} h={100} title="SHOP DWG" />
      <Rect x={252} y={46} width={60} height={50} fill="none" stroke={P.blue} strokeWidth={1.2} />
      <Line x1={282} y1={46} x2={282} y2={96} stroke={P.blue} strokeWidth={1} />
      <Line x1={252} y1={104} x2={312} y2={104} stroke={P.inkSoft} strokeWidth={0.8} />
      <G transform="rotate(-12 334 70)">
        <Rect x={300} y={58} width={70} height={22} rx={4} fill="none" stroke={P.greenMid} strokeWidth={2} />
        <Label x={335} y={73} text={L('APPROUVÉ', 'APPROVED')} size={9.5} color={P.greenMid} />
      </G>

      <Person x={150} y={268} s={1.12} shirt={P.navy} pants={P.navyDark} hair={P.hair3} hairStyle="long" accessory="tablet" />
      <Desk x={22} y={200} w={250} />
      <Rect x={44} y={184} width={46} height={16} rx={2} fill={P.paper} stroke={P.line} />
      <Rect x={46} y={172} width={46} height={12} rx={2} fill={P.paper} stroke={P.line} />
      <Rect x={44} y={162} width={46} height={10} rx={2} fill={P.sky} stroke={P.line} />
      <Rect x={200} y={186} width={56} height={14} rx={2} fill={P.paper} stroke={P.line} />

      <Rect x={296} y={206} width={70} height={56} rx={3} fill="#c9a06a" />
      <Line x1={331} y1={206} x2={331} y2={262} stroke="#a77f4c" strokeWidth={4} />
      <Rect x={310} y={176} width={48} height={32} rx={3} fill="#d6b07c" />
      <Line x1={334} y1={176} x2={334} y2={208} stroke="#a77f4c" strokeWidth={3} />
      <Label x={331} y={282} text={L('Achats matériel', 'Procurement')} size={10.5} color={P.inkSoft} weight="600" />
    </SceneFrame>
  );
}
