import React from 'react';
import { Circle, G, Path } from 'react-native-svg';
import type { Lang } from '../../lib/language';
import { Label, P, SceneFrame, Tag } from './kit';

export const ROADMAP_STEPS: { fr: [string, string?]; en: [string, string?] }[] = [
  { fr: ['Plans', 'architecturaux'], en: ['Architectural', 'plans'] },
  { fr: ['Estimation', 'de charge'], en: ['Load', 'estimation'] },
  { fr: ['Éclairage'], en: ['Lighting'] },
  { fr: ['Prises &', 'puissance'], en: ['Sockets &', 'power'] },
  { fr: ['Panel', 'schedule'], en: ['Panel', 'schedule'] },
  { fr: ['Protections'], en: ['Protection'] },
  { fr: ['Câbles &', 'conduits'], en: ['Cables &', 'conduits'] },
  { fr: ['Tableaux', '& schéma'], en: ['Panels', '& SLD'] },
];

const POS = [
  { x: 52, y: 100 },
  { x: 148, y: 100 },
  { x: 252, y: 100 },
  { x: 348, y: 100 },
  { x: 348, y: 212 },
  { x: 252, y: 212 },
  { x: 148, y: 212 },
  { x: 52, y: 212 },
];

/** The engineer's design journey; `step` (1-8) highlights the current step, 0 shows the whole path. */
export function DesignRoadmap({ lang, step = 0 }: { lang: Lang; step?: number }) {
  const complete = step > POS.length;
  const header = complete
    ? lang === 'fr'
      ? 'Parcours complet ✓'
      : 'Journey complete ✓'
    : step > 0
      ? lang === 'fr'
        ? `Étape ${step} sur 8`
        : `Step ${step} of 8`
      : lang === 'fr'
        ? "Le parcours de l'ingénieur"
        : "The engineer's journey";
  return (
    <SceneFrame>
      <Tag x={200} y={34} w={step > 0 && !complete ? 120 : 210} text={header} />
      <Path
        d={`M ${POS[0].x} ${POS[0].y} L ${POS[3].x} ${POS[3].y} C 396 100 396 212 ${POS[4].x} ${POS[4].y} L ${POS[7].x} ${POS[7].y}`}
        stroke={P.greenLight}
        strokeWidth={6}
        fill="none"
        strokeLinecap="round"
        strokeDasharray={step > 0 ? undefined : '10 8'}
      />
      {step > 1 && (
        <Path
          d={pathUpTo(step)}
          stroke={P.greenMid}
          strokeWidth={6}
          fill="none"
          strokeLinecap="round"
        />
      )}
      {POS.map((p, i) => {
        const n = i + 1;
        const active = n === step;
        const done = step > 0 && n < step;
        const label = ROADMAP_STEPS[i][lang];
        const r = active ? 24 : 18;
        return (
          <G key={n}>
            {active && <Circle cx={p.x} cy={p.y} r={33} fill={P.greenLight} opacity={0.45} />}
            <Circle
              cx={p.x}
              cy={p.y}
              r={r}
              fill={active ? P.green : done ? P.greenMid : P.white}
              stroke={active || done ? P.green : P.greenMid}
              strokeWidth={2.5}
            />
            {done ? (
              <Path
                d={`M ${p.x - 7} ${p.y} l 5 5 l 9 -10`}
                stroke={P.white}
                strokeWidth={3}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <Label x={p.x} y={p.y + (active ? 7 : 5)} text={String(n)} size={active ? 19 : 14} color={active ? P.white : P.green} />
            )}
            <Label
              x={p.x}
              y={p.y + (active ? 42 : 36)}
              text={label[0]}
              size={active ? 11.5 : 10}
              color={active ? P.green : step > 0 && !done ? P.inkSoft : P.ink}
            />
            {label[1] ? (
              <Label
                x={p.x}
                y={p.y + (active ? 56 : 49)}
                text={label[1]}
                size={active ? 11.5 : 10}
                color={active ? P.green : step > 0 && !done ? P.inkSoft : P.ink}
              />
            ) : null}
          </G>
        );
      })}
    </SceneFrame>
  );
}

function pathUpTo(step: number) {
  const pts = POS.slice(0, Math.min(step, POS.length));
  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 1; i < pts.length; i++) {
    if (i === 4) d += ` C 396 100 396 212 ${pts[i].x} ${pts[i].y}`;
    else d += ` L ${pts[i].x} ${pts[i].y}`;
  }
  return d;
}
