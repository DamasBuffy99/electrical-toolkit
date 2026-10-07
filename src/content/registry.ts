import { TopicContent } from './types';
import { Lang } from '../lib/language';

import { projectPartiesContent } from './topics/projectParties';
import { drawingsCoordinationContent } from './topics/drawingsCoordination';
import { designStepsContent } from './topics/designSteps';
import { architecturalDrawingsContent } from './topics/architecturalDrawings';
import { loadEstimationContent } from './topics/loadEstimation';
import { demandDiversityContent } from './topics/demandDiversity';
import { transformerGeneratorContent } from './topics/transformerGenerator';
import { hvacMechanicalContent } from './topics/hvacMechanical';
import { lightingContent } from './topics/lighting';
import { lightingCircuitsSocketsContent } from './topics/lightingCircuitsSockets';
import { panelScheduleContent } from './topics/panelSchedule';
import { circuitBreakerContent } from './topics/circuitBreaker';
import { fusesContent } from './topics/fuses';
import { feedersContent } from './topics/feeders';
import { necConductorsContent } from './topics/necConductors';
import { disconnectSwitchesContent } from './topics/disconnectSwitches';
import { cableSizingContent } from './topics/cableSizing';
import { voltageDropContent } from './topics/voltageDrop';
import { shortCircuitContent } from './topics/shortCircuit';
import { panelBasicsContent } from './topics/panelBasics';
import { panelDesignExamplesContent } from './topics/panelDesignExamples';
import { generatorUpsAtsContent } from './topics/generatorUpsAts';
import { earthingContent } from './topics/earthing';
import { notionsDiversesContent } from './topics/notionsDiverses';

import { projectPartiesContent as projectPartiesContentEn } from './topics/en/projectParties';
import { drawingsCoordinationContent as drawingsCoordinationContentEn } from './topics/en/drawingsCoordination';
import { designStepsContent as designStepsContentEn } from './topics/en/designSteps';
import { architecturalDrawingsContent as architecturalDrawingsContentEn } from './topics/en/architecturalDrawings';
import { loadEstimationContent as loadEstimationContentEn } from './topics/en/loadEstimation';
import { demandDiversityContent as demandDiversityContentEn } from './topics/en/demandDiversity';
import { transformerGeneratorContent as transformerGeneratorContentEn } from './topics/en/transformerGenerator';
import { hvacMechanicalContent as hvacMechanicalContentEn } from './topics/en/hvacMechanical';
import { lightingContent as lightingContentEn } from './topics/en/lighting';
import { lightingCircuitsSocketsContent as lightingCircuitsSocketsContentEn } from './topics/en/lightingCircuitsSockets';
import { panelScheduleContent as panelScheduleContentEn } from './topics/en/panelSchedule';
import { circuitBreakerContent as circuitBreakerContentEn } from './topics/en/circuitBreaker';
import { fusesContent as fusesContentEn } from './topics/en/fuses';
import { feedersContent as feedersContentEn } from './topics/en/feeders';
import { necConductorsContent as necConductorsContentEn } from './topics/en/necConductors';
import { disconnectSwitchesContent as disconnectSwitchesContentEn } from './topics/en/disconnectSwitches';
import { cableSizingContent as cableSizingContentEn } from './topics/en/cableSizing';
import { voltageDropContent as voltageDropContentEn } from './topics/en/voltageDrop';
import { shortCircuitContent as shortCircuitContentEn } from './topics/en/shortCircuit';
import { panelBasicsContent as panelBasicsContentEn } from './topics/en/panelBasics';
import { panelDesignExamplesContent as panelDesignExamplesContentEn } from './topics/en/panelDesignExamples';
import { generatorUpsAtsContent as generatorUpsAtsContentEn } from './topics/en/generatorUpsAts';
import { earthingContent as earthingContentEn } from './topics/en/earthing';
import { notionsDiversesContent as notionsDiversesContentEn } from './topics/en/notionsDiverses';

export const TOPIC_CONTENT_FR: Record<string, TopicContent | undefined> = {
  'project-parties': projectPartiesContent,
  'drawings-coordination': drawingsCoordinationContent,
  'design-steps': designStepsContent,
  'architectural-drawings': architecturalDrawingsContent,
  'demand-diversity': demandDiversityContent,
  'load-estimation': loadEstimationContent,
  'hvac-mechanical': hvacMechanicalContent,
  'transformer-generator': transformerGeneratorContent,
  lighting: lightingContent,
  'lighting-circuits-sockets': lightingCircuitsSocketsContent,
  'panel-schedule': panelScheduleContent,
  'circuit-breaker': circuitBreakerContent,
  fuses: fusesContent,
  feeders: feedersContent,
  'nec-conductors': necConductorsContent,
  'disconnect-switches': disconnectSwitchesContent,
  'cable-sizing': cableSizingContent,
  'voltage-drop': voltageDropContent,
  'short-circuit': shortCircuitContent,
  'panel-basics': panelBasicsContent,
  'panel-design-examples': panelDesignExamplesContent,
  'generator-ups-ats': generatorUpsAtsContent,
  earthing: earthingContent,
  'notions-diverses': notionsDiversesContent,
};

export const TOPIC_CONTENT_EN: Record<string, TopicContent | undefined> = {
  'project-parties': projectPartiesContentEn,
  'drawings-coordination': drawingsCoordinationContentEn,
  'design-steps': designStepsContentEn,
  'architectural-drawings': architecturalDrawingsContentEn,
  'demand-diversity': demandDiversityContentEn,
  'load-estimation': loadEstimationContentEn,
  'hvac-mechanical': hvacMechanicalContentEn,
  'transformer-generator': transformerGeneratorContentEn,
  lighting: lightingContentEn,
  'lighting-circuits-sockets': lightingCircuitsSocketsContentEn,
  'panel-schedule': panelScheduleContentEn,
  'circuit-breaker': circuitBreakerContentEn,
  fuses: fusesContentEn,
  feeders: feedersContentEn,
  'nec-conductors': necConductorsContentEn,
  'disconnect-switches': disconnectSwitchesContentEn,
  'cable-sizing': cableSizingContentEn,
  'voltage-drop': voltageDropContentEn,
  'short-circuit': shortCircuitContentEn,
  'panel-basics': panelBasicsContentEn,
  'panel-design-examples': panelDesignExamplesContentEn,
  'generator-ups-ats': generatorUpsAtsContentEn,
  earthing: earthingContentEn,
  'notions-diverses': notionsDiversesContentEn,
};

export function getTopicContent(lang: Lang, id: string): TopicContent | undefined {
  return (lang === 'en' ? TOPIC_CONTENT_EN : TOPIC_CONTENT_FR)[id];
}
