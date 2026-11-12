import { TopicContent } from './types';
import { Lang } from '../lib/language';

import { cvBriefContent } from './climStory/cvBrief';
import { cvLoadContent } from './climStory/cvLoad';
import { cvSelectContent } from './climStory/cvSelect';
import { cvInstallContent } from './climStory/cvInstall';
import { ctLoadContent } from './climStory/ctLoad';
import { ctCycleContent } from './climStory/ctCycle';
import { ctEquipmentContent } from './climStory/ctEquipment';
import { ctServiceContent } from './climStory/ctService';
import { coLoadContent } from './climStory/coLoad';
import { coSystemContent } from './climStory/coSystem';
import { coAirContent } from './climStory/coAir';
import { coDuctsContent } from './climStory/coDucts';
import { chConceptContent } from './climStory/chConcept';
import { chChillersContent } from './climStory/chChillers';
import { chHydraulicsContent } from './climStory/chHydraulics';
import { chTerminalsContent } from './climStory/chTerminals';

import { cvBriefContent as cvBriefContentEn } from './climStory/en/cvBrief';
import { cvLoadContent as cvLoadContentEn } from './climStory/en/cvLoad';
import { cvSelectContent as cvSelectContentEn } from './climStory/en/cvSelect';
import { cvInstallContent as cvInstallContentEn } from './climStory/en/cvInstall';
import { ctLoadContent as ctLoadContentEn } from './climStory/en/ctLoad';
import { ctCycleContent as ctCycleContentEn } from './climStory/en/ctCycle';
import { ctEquipmentContent as ctEquipmentContentEn } from './climStory/en/ctEquipment';
import { ctServiceContent as ctServiceContentEn } from './climStory/en/ctService';
import { coLoadContent as coLoadContentEn } from './climStory/en/coLoad';
import { coSystemContent as coSystemContentEn } from './climStory/en/coSystem';
import { coAirContent as coAirContentEn } from './climStory/en/coAir';
import { coDuctsContent as coDuctsContentEn } from './climStory/en/coDucts';
import { chConceptContent as chConceptContentEn } from './climStory/en/chConcept';
import { chChillersContent as chChillersContentEn } from './climStory/en/chChillers';
import { chHydraulicsContent as chHydraulicsContentEn } from './climStory/en/chHydraulics';
import { chTerminalsContent as chTerminalsContentEn } from './climStory/en/chTerminals';

export const CLIM_STORY_CONTENT_FR: Record<string, TopicContent | undefined> = {
  'cv-brief': cvBriefContent,
  'cv-load': cvLoadContent,
  'cv-select': cvSelectContent,
  'cv-install': cvInstallContent,
  'ct-load': ctLoadContent,
  'ct-cycle': ctCycleContent,
  'ct-equipment': ctEquipmentContent,
  'ct-service': ctServiceContent,
  'co-load': coLoadContent,
  'co-system': coSystemContent,
  'co-air': coAirContent,
  'co-ducts': coDuctsContent,
  'ch-concept': chConceptContent,
  'ch-chillers': chChillersContent,
  'ch-hydraulics': chHydraulicsContent,
  'ch-terminals': chTerminalsContent,
};

export const CLIM_STORY_CONTENT_EN: Record<string, TopicContent | undefined> = {
  'cv-brief': cvBriefContentEn,
  'cv-load': cvLoadContentEn,
  'cv-select': cvSelectContentEn,
  'cv-install': cvInstallContentEn,
  'ct-load': ctLoadContentEn,
  'ct-cycle': ctCycleContentEn,
  'ct-equipment': ctEquipmentContentEn,
  'ct-service': ctServiceContentEn,
  'co-load': coLoadContentEn,
  'co-system': coSystemContentEn,
  'co-air': coAirContentEn,
  'co-ducts': coDuctsContentEn,
  'ch-concept': chConceptContentEn,
  'ch-chillers': chChillersContentEn,
  'ch-hydraulics': chHydraulicsContentEn,
  'ch-terminals': chTerminalsContentEn,
};

export function getClimStoryContent(lang: Lang, id: string): TopicContent | undefined {
  return (lang === 'en' ? CLIM_STORY_CONTENT_EN : CLIM_STORY_CONTENT_FR)[id];
}
