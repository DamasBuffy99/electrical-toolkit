import { TopicContent } from './types';
import { Lang } from '../lib/language';

import { loadEstimationContent } from './topics/loadEstimation';
import { demandDiversityContent } from './topics/demandDiversity';
import { transformerGeneratorContent } from './topics/transformerGenerator';
import { lightingContent } from './topics/lighting';
import { overviewContent } from './topics/overview';
import { architecturalDrawingsContent } from './topics/architecturalDrawings';
import { panelScheduleContent } from './topics/panelSchedule';
import { circuitBreakerContent } from './topics/circuitBreaker';
import { feedersContent } from './topics/feeders';
import { cableSizingContent } from './topics/cableSizing';
import { notionsDiversesContent } from './topics/notionsDiverses';

import { loadEstimationContent as loadEstimationContentEn } from './topics/en/loadEstimation';
import { demandDiversityContent as demandDiversityContentEn } from './topics/en/demandDiversity';
import { transformerGeneratorContent as transformerGeneratorContentEn } from './topics/en/transformerGenerator';
import { lightingContent as lightingContentEn } from './topics/en/lighting';
import { overviewContent as overviewContentEn } from './topics/en/overview';
import { architecturalDrawingsContent as architecturalDrawingsContentEn } from './topics/en/architecturalDrawings';
import { panelScheduleContent as panelScheduleContentEn } from './topics/en/panelSchedule';
import { circuitBreakerContent as circuitBreakerContentEn } from './topics/en/circuitBreaker';
import { feedersContent as feedersContentEn } from './topics/en/feeders';
import { cableSizingContent as cableSizingContentEn } from './topics/en/cableSizing';
import { notionsDiversesContent as notionsDiversesContentEn } from './topics/en/notionsDiverses';

export const TOPIC_CONTENT_FR: Record<string, TopicContent | undefined> = {
  'load-estimation': loadEstimationContent,
  'demand-diversity': demandDiversityContent,
  'transformer-generator': transformerGeneratorContent,
  lighting: lightingContent,
  overview: overviewContent,
  'architectural-drawings': architecturalDrawingsContent,
  'panel-schedule': panelScheduleContent,
  'circuit-breaker': circuitBreakerContent,
  feeders: feedersContent,
  'cable-sizing': cableSizingContent,
  'notions-diverses': notionsDiversesContent,
};

export const TOPIC_CONTENT_EN: Record<string, TopicContent | undefined> = {
  'load-estimation': loadEstimationContentEn,
  'demand-diversity': demandDiversityContentEn,
  'transformer-generator': transformerGeneratorContentEn,
  lighting: lightingContentEn,
  overview: overviewContentEn,
  'architectural-drawings': architecturalDrawingsContentEn,
  'panel-schedule': panelScheduleContentEn,
  'circuit-breaker': circuitBreakerContentEn,
  feeders: feedersContentEn,
  'cable-sizing': cableSizingContentEn,
  'notions-diverses': notionsDiversesContentEn,
};

/** Backward-compatible default export (French) — prefer getTopicContent(lang, id) in new code. */
export const TOPIC_CONTENT = TOPIC_CONTENT_FR;

export function getTopicContent(lang: Lang, id: string): TopicContent | undefined {
  return (lang === 'en' ? TOPIC_CONTENT_EN : TOPIC_CONTENT_FR)[id];
}
