import React from 'react';
import type { Lang } from '../../lib/language';
import {
  ConsultantOffice,
  ContractorSite,
  EngDesign,
  EngExecution,
  EngineerRoles,
  EngShopDrawing,
  EngSupervision,
  EngTechnicalOffice,
  OrgChart,
  OwnerLand,
  SupervisorSite,
} from './sceneProject';
import { Coordination, DrawingSheet, DrawingsEvolution } from './sceneDrawings';
import { DesignRoadmap } from './sceneRoadmap';
import { PlanSymbols } from './scenePlans';
import { BatteryBank, MpptWindow, PeakSunHours, PvArray, PvStc, PvSystem, PvWaveforms } from './sceneSolar';

export type IllustrationProps = Record<string, string | number | boolean | undefined>;

const num = (v: IllustrationProps[string]) => (typeof v === 'number' ? v : undefined);

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
    case 'eng-shop-drawing':
      return <EngShopDrawing lang={lang} />;
    case 'drawings-evolution':
      return <DrawingsEvolution lang={lang} />;
    case 'drawing-sheet':
      return <DrawingSheet lang={lang} variant={p.variant as 'conceptual' | 'shop' | 'asbuilt'} />;
    case 'coordination':
      return <Coordination lang={lang} variant={p.variant as 'architect' | 'civil' | 'mechanical'} />;
    case 'design-roadmap':
      return <DesignRoadmap lang={lang} step={typeof p.step === 'number' ? p.step : 0} />;
    case 'pv-system':
      return <PvSystem lang={lang} highlight={typeof p.highlight === 'string' ? p.highlight : undefined} />;
    case 'pv-waveforms':
      return <PvWaveforms lang={lang} />;
    case 'battery-bank':
      return (
        <BatteryBank
          lang={lang}
          series={num(p.series)}
          parallel={num(p.parallel)}
          battV={num(p.battV)}
          battAh={num(p.battAh)}
          current={num(p.current)}
        />
      );
    case 'pv-array':
      return <PvArray lang={lang} series={num(p.series)} parallel={num(p.parallel)} voc={num(p.voc)} />;
    case 'mppt-window':
      return (
        <MpptWindow
          lang={lang}
          max={num(p.max)}
          design={num(p.design)}
          cold={num(p.cold)}
          nec={num(p.nec)}
          rangeMin={num(p.rangeMin)}
          rangeMax={num(p.rangeMax)}
        />
      );
    case 'pv-stc':
      return <PvStc lang={lang} />;
    case 'peak-sun-hours':
      return <PeakSunHours lang={lang} hours={num(p.hours)} />;
    case 'plan-symbols':
      return <PlanSymbols lang={lang} variant={p.variant as 'stairs' | 'shaft' | 'doors'} />;
    default:
      return null;
  }
}
