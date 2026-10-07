import { TopicContent } from './types';
import { Lang } from '../lib/language';

import { projectPartiesContent } from './topics/projectParties';
import { drawingsCoordinationContent } from './topics/drawingsCoordination';
import { designStepsContent } from './topics/designSteps';
import { architecturalDrawingsContent } from './topics/architecturalDrawings';
import { loadEstimationContent } from './topics/loadEstimation';
import { demandDiversityContent } from './topics/demandDiversity';
import { transformerGeneratorContent } from './topics/transformerGenerator';
import { lightingContent } from './topics/lighting';
import { panelScheduleContent } from './topics/panelSchedule';
import { circuitBreakerContent } from './topics/circuitBreaker';
import { feedersContent } from './topics/feeders';
import { cableSizingContent } from './topics/cableSizing';
import { notionsDiversesContent } from './topics/notionsDiverses';
import { voltageDropContent } from './topics/voltageDrop';
import { panelBasicsContent } from './topics/panelBasics';

import { projectPartiesContent as projectPartiesContentEn } from './topics/en/projectParties';
import { drawingsCoordinationContent as drawingsCoordinationContentEn } from './topics/en/drawingsCoordination';
import { designStepsContent as designStepsContentEn } from './topics/en/designSteps';
import { architecturalDrawingsContent as architecturalDrawingsContentEn } from './topics/en/architecturalDrawings';
import { loadEstimationContent as loadEstimationContentEn } from './topics/en/loadEstimation';
import { demandDiversityContent as demandDiversityContentEn } from './topics/en/demandDiversity';
import { transformerGeneratorContent as transformerGeneratorContentEn } from './topics/en/transformerGenerator';
import { lightingContent as lightingContentEn } from './topics/en/lighting';
import { panelScheduleContent as panelScheduleContentEn } from './topics/en/panelSchedule';
import { circuitBreakerContent as circuitBreakerContentEn } from './topics/en/circuitBreaker';
import { feedersContent as feedersContentEn } from './topics/en/feeders';
import { cableSizingContent as cableSizingContentEn } from './topics/en/cableSizing';
import { notionsDiversesContent as notionsDiversesContentEn } from './topics/en/notionsDiverses';
import { voltageDropContent as voltageDropContentEn } from './topics/en/voltageDrop';
import { panelBasicsContent as panelBasicsContentEn } from './topics/en/panelBasics';

export const TOPIC_CONTENT_FR: Record<string, TopicContent | undefined> = {
  'project-parties': projectPartiesContent,
  'drawings-coordination': drawingsCoordinationContent,
  'design-steps': designStepsContent,
  'architectural-drawings': architecturalDrawingsContent,
  'demand-diversity': demandDiversityContent,
  'load-estimation': loadEstimationContent,
  'transformer-generator': transformerGeneratorContent,
  lighting: lightingContent,
  'panel-schedule': panelScheduleContent,
  'circuit-breaker': circuitBreakerContent,
  feeders: feedersContent,
  'cable-sizing': cableSizingContent,
  'voltage-drop': voltageDropContent,
  'panel-basics': panelBasicsContent,
  'notions-diverses': notionsDiversesContent,
};

export const TOPIC_CONTENT_EN: Record<string, TopicContent | undefined> = {
  'project-parties': projectPartiesContentEn,
  'drawings-coordination': drawingsCoordinationContentEn,
  'design-steps': designStepsContentEn,
  'architectural-drawings': architecturalDrawingsContentEn,
  'demand-diversity': demandDiversityContentEn,
  'load-estimation': loadEstimationContentEn,
  'transformer-generator': transformerGeneratorContentEn,
  lighting: lightingContentEn,
  'panel-schedule': panelScheduleContentEn,
  'circuit-breaker': circuitBreakerContentEn,
  feeders: feedersContentEn,
  'cable-sizing': cableSizingContentEn,
  'voltage-drop': voltageDropContentEn,
  'panel-basics': panelBasicsContentEn,
  'notions-diverses': notionsDiversesContentEn,
};

export function getTopicContent(lang: Lang, id: string): TopicContent | undefined {
  return (lang === 'en' ? TOPIC_CONTENT_EN : TOPIC_CONTENT_FR)[id];
}
