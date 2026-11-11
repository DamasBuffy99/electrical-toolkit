import { TopicContent } from './types';
import { Lang } from '../lib/language';

import { villaMeetingContent } from './story/villaMeeting';
import { villaPlansContent } from './story/villaPlans';
import { villaBasicsContent } from './story/villaBasics';
import { villaLoadContent } from './story/villaLoad';
import { villaLightingContent } from './story/villaLighting';
import { villaBoardContent } from './story/villaBoard';
import { villaSafetyContent } from './story/villaSafety';
import { villaCablesContent } from './story/villaCables';
import { villaHandoverContent } from './story/villaHandover';
import { buildingFeasibilityContent } from './story/buildingFeasibility';
import { buildingSubstationContent } from './story/buildingSubstation';
import { buildingRisersContent } from './story/buildingRisers';
import { buildingServicesContent } from './story/buildingServices';
import { buildingShortCircuitContent } from './story/buildingShortCircuit';
import { buildingBackupContent } from './story/buildingBackup';

import { villaMeetingContent as villaMeetingContentEn } from './story/en/villaMeeting';
import { villaPlansContent as villaPlansContentEn } from './story/en/villaPlans';
import { villaBasicsContent as villaBasicsContentEn } from './story/en/villaBasics';
import { villaLoadContent as villaLoadContentEn } from './story/en/villaLoad';
import { villaLightingContent as villaLightingContentEn } from './story/en/villaLighting';
import { villaBoardContent as villaBoardContentEn } from './story/en/villaBoard';
import { villaSafetyContent as villaSafetyContentEn } from './story/en/villaSafety';
import { villaCablesContent as villaCablesContentEn } from './story/en/villaCables';
import { villaHandoverContent as villaHandoverContentEn } from './story/en/villaHandover';
import { buildingFeasibilityContent as buildingFeasibilityContentEn } from './story/en/buildingFeasibility';
import { buildingSubstationContent as buildingSubstationContentEn } from './story/en/buildingSubstation';
import { buildingRisersContent as buildingRisersContentEn } from './story/en/buildingRisers';
import { buildingServicesContent as buildingServicesContentEn } from './story/en/buildingServices';
import { buildingShortCircuitContent as buildingShortCircuitContentEn } from './story/en/buildingShortCircuit';
import { buildingBackupContent as buildingBackupContentEn } from './story/en/buildingBackup';

export const STORY_CONTENT_FR: Record<string, TopicContent | undefined> = {
  'villa-meeting': villaMeetingContent,
  'villa-plans': villaPlansContent,
  'villa-basics': villaBasicsContent,
  'villa-load': villaLoadContent,
  'villa-lighting': villaLightingContent,
  'villa-board': villaBoardContent,
  'villa-safety': villaSafetyContent,
  'villa-cables': villaCablesContent,
  'villa-handover': villaHandoverContent,
  'building-feasibility': buildingFeasibilityContent,
  'building-substation': buildingSubstationContent,
  'building-risers': buildingRisersContent,
  'building-services': buildingServicesContent,
  'building-shortcircuit': buildingShortCircuitContent,
  'building-backup': buildingBackupContent,
};

export const STORY_CONTENT_EN: Record<string, TopicContent | undefined> = {
  'villa-meeting': villaMeetingContentEn,
  'villa-plans': villaPlansContentEn,
  'villa-basics': villaBasicsContentEn,
  'villa-load': villaLoadContentEn,
  'villa-lighting': villaLightingContentEn,
  'villa-board': villaBoardContentEn,
  'villa-safety': villaSafetyContentEn,
  'villa-cables': villaCablesContentEn,
  'villa-handover': villaHandoverContentEn,
  'building-feasibility': buildingFeasibilityContentEn,
  'building-substation': buildingSubstationContentEn,
  'building-risers': buildingRisersContentEn,
  'building-services': buildingServicesContentEn,
  'building-shortcircuit': buildingShortCircuitContentEn,
  'building-backup': buildingBackupContentEn,
};

export function getStoryContent(lang: Lang, id: string): TopicContent | undefined {
  return (lang === 'en' ? STORY_CONTENT_EN : STORY_CONTENT_FR)[id];
}
