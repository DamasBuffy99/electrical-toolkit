import React from 'react';
import type { Lang } from '../../lib/language';
import {
  ConsultantOffice,
  ContractorSite,
  EngDesign,
  EngExecution,
  EngineerRoles,
  EngSupervision,
  EngTechnicalOffice,
  OrgChart,
  OwnerLand,
  SupervisorSite,
} from './sceneProject';
import { Coordination, DrawingSheet, DrawingsEvolution } from './sceneDrawings';
import { DesignRoadmap } from './sceneRoadmap';
import { PlanSymbols } from './scenePlans';

export type IllustrationProps = Record<string, string | number | boolean | undefined>;

export function Illustration({ name, props, lang }: { name: string; props?: IllustrationProps; lang: Lang }) {
  const p = props ?? {};
  switch (name) {
    case 'org-chart':
      return <OrgChart lang={lang} />;
    case 'owner-land':
      return <OwnerLand lang={lang} />;
    case 'consultant-office':
      return <ConsultantOffice lang={lang} />;
    case 'contractor-site':
      return <ContractorSite lang={lang} />;
    case 'supervisor-site':
      return <SupervisorSite lang={lang} />;
    case 'engineer-roles':
      return <EngineerRoles lang={lang} />;
    case 'eng-design':
      return <EngDesign lang={lang} />;
    case 'eng-supervision':
      return <EngSupervision lang={lang} />;
    case 'eng-execution':
      return <EngExecution lang={lang} />;
    case 'eng-technical-office':
      return <EngTechnicalOffice lang={lang} />;
    case 'drawings-evolution':
      return <DrawingsEvolution lang={lang} />;
    case 'drawing-sheet':
      return <DrawingSheet lang={lang} variant={p.variant as 'conceptual' | 'shop' | 'asbuilt'} />;
    case 'coordination':
      return <Coordination lang={lang} variant={p.variant as 'architect' | 'civil' | 'mechanical'} />;
    case 'design-roadmap':
      return <DesignRoadmap lang={lang} step={typeof p.step === 'number' ? p.step : 0} />;
    case 'plan-symbols':
      return <PlanSymbols lang={lang} variant={p.variant as 'stairs' | 'shaft' | 'doors'} />;
    default:
      return null;
  }
}
