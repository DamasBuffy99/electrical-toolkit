import { TopicContent } from './types';
import { Lang } from '../lib/language';

import { villaMeetingContent } from './story/villaMeeting';
import { villaPlansContent } from './story/villaPlans';
import { villaBasicsContent } from './story/villaBasics';
import { villaLoadContent } from './story/villaLoad';
import { villaLightingContent } from './story/villaLighting';
import { villaBoardContent } from './story/villaBoard';
import { villaSafetyContent } from './story/villaSafety';
import { villaDevicesContent } from './story/villaDevices';
import { villaCablesContent } from './story/villaCables';
import { villaHandoverContent } from './story/villaHandover';
import { buildingFeasibilityContent } from './story/buildingFeasibility';
import { buildingTeamContent } from './story/buildingTeam';
import { buildingSubstationContent } from './story/buildingSubstation';
import { buildingRisersContent } from './story/buildingRisers';
import { buildingServicesContent } from './story/buildingServices';
import { buildingShortCircuitContent } from './story/buildingShortCircuit';
import { buildingProtectionContent } from './story/buildingProtection';
import { buildingEarthingContent } from './story/buildingEarthing';
import { buildingSwitchboardContent } from './story/buildingSwitchboard';
import { buildingBackupContent } from './story/buildingBackup';
import { factorySurveyContent } from './story/factorySurvey';
import { factoryStartingContent } from './story/factoryStarting';
import { factoryFeedersContent } from './story/factoryFeeders';
import { factoryCablesContent } from './story/factoryCables';
import { factorySelectivityContent } from './story/factorySelectivity';
import { factoryDevicesContent } from './story/factoryDevices';
import { factoryTraysContent } from './story/factoryTrays';
import { factoryPowerFactorContent } from './story/factoryPowerFactor';
import { factoryHarmonicsContent } from './story/factoryHarmonics';
import { clinicLoadsContent } from './story/clinicLoads';
import { clinicGeneratorContent } from './story/clinicGenerator';
import { clinicUpsContent } from './story/clinicUps';
import { clinicSafetyContent } from './story/clinicSafety';

import { villaMeetingContent as villaMeetingContentEn } from './story/en/villaMeeting';
import { villaPlansContent as villaPlansContentEn } from './story/en/villaPlans';
import { villaBasicsContent as villaBasicsContentEn } from './story/en/villaBasics';
import { villaLoadContent as villaLoadContentEn } from './story/en/villaLoad';
import { villaLightingContent as villaLightingContentEn } from './story/en/villaLighting';
import { villaBoardContent as villaBoardContentEn } from './story/en/villaBoard';
import { villaSafetyContent as villaSafetyContentEn } from './story/en/villaSafety';
import { villaDevicesContent as villaDevicesContentEn } from './story/en/villaDevices';
import { villaCablesContent as villaCablesContentEn } from './story/en/villaCables';
import { villaHandoverContent as villaHandoverContentEn } from './story/en/villaHandover';
import { buildingFeasibilityContent as buildingFeasibilityContentEn } from './story/en/buildingFeasibility';
import { buildingTeamContent as buildingTeamContentEn } from './story/en/buildingTeam';
import { buildingSubstationContent as buildingSubstationContentEn } from './story/en/buildingSubstation';
import { buildingRisersContent as buildingRisersContentEn } from './story/en/buildingRisers';
import { buildingServicesContent as buildingServicesContentEn } from './story/en/buildingServices';
import { buildingShortCircuitContent as buildingShortCircuitContentEn } from './story/en/buildingShortCircuit';
import { buildingProtectionContent as buildingProtectionContentEn } from './story/en/buildingProtection';
import { buildingEarthingContent as buildingEarthingContentEn } from './story/en/buildingEarthing';
import { buildingSwitchboardContent as buildingSwitchboardContentEn } from './story/en/buildingSwitchboard';
import { buildingBackupContent as buildingBackupContentEn } from './story/en/buildingBackup';
import { factorySurveyContent as factorySurveyContentEn } from './story/en/factorySurvey';
import { factoryStartingContent as factoryStartingContentEn } from './story/en/factoryStarting';
import { factoryFeedersContent as factoryFeedersContentEn } from './story/en/factoryFeeders';
import { factoryCablesContent as factoryCablesContentEn } from './story/en/factoryCables';
import { factorySelectivityContent as factorySelectivityContentEn } from './story/en/factorySelectivity';
import { factoryDevicesContent as factoryDevicesContentEn } from './story/en/factoryDevices';
import { factoryTraysContent as factoryTraysContentEn } from './story/en/factoryTrays';
import { factoryPowerFactorContent as factoryPowerFactorContentEn } from './story/en/factoryPowerFactor';
import { factoryHarmonicsContent as factoryHarmonicsContentEn } from './story/en/factoryHarmonics';
import { clinicLoadsContent as clinicLoadsContentEn } from './story/en/clinicLoads';
import { clinicGeneratorContent as clinicGeneratorContentEn } from './story/en/clinicGenerator';
import { clinicUpsContent as clinicUpsContentEn } from './story/en/clinicUps';
import { clinicSafetyContent as clinicSafetyContentEn } from './story/en/clinicSafety';

export const STORY_CONTENT_FR: Record<string, TopicContent | undefined> = {
  'villa-meeting': villaMeetingContent,
  'villa-plans': villaPlansContent,
  'villa-basics': villaBasicsContent,
  'villa-load': villaLoadContent,
  'villa-lighting': villaLightingContent,
  'villa-board': villaBoardContent,
  'villa-safety': villaSafetyContent,
  'villa-devices': villaDevicesContent,
  'villa-cables': villaCablesContent,
  'villa-handover': villaHandoverContent,
  'building-feasibility': buildingFeasibilityContent,
  'building-team': buildingTeamContent,
  'building-substation': buildingSubstationContent,
  'building-risers': buildingRisersContent,
  'building-services': buildingServicesContent,
  'building-shortcircuit': buildingShortCircuitContent,
  'building-protection': buildingProtectionContent,
  'building-earthing': buildingEarthingContent,
  'building-switchboard': buildingSwitchboardContent,
  'building-backup': buildingBackupContent,
  'factory-survey': factorySurveyContent,
  'factory-starting': factoryStartingContent,
  'factory-feeders': factoryFeedersContent,
  'factory-cables': factoryCablesContent,
  'factory-selectivity': factorySelectivityContent,
  'factory-devices': factoryDevicesContent,
  'factory-trays': factoryTraysContent,
  'factory-powerfactor': factoryPowerFactorContent,
  'factory-harmonics': factoryHarmonicsContent,
  'clinic-loads': clinicLoadsContent,
  'clinic-generator': clinicGeneratorContent,
  'clinic-ups': clinicUpsContent,
  'clinic-safety': clinicSafetyContent,
};

export const STORY_CONTENT_EN: Record<string, TopicContent | undefined> = {
  'villa-meeting': villaMeetingContentEn,
  'villa-plans': villaPlansContentEn,
  'villa-basics': villaBasicsContentEn,
  'villa-load': villaLoadContentEn,
  'villa-lighting': villaLightingContentEn,
  'villa-board': villaBoardContentEn,
  'villa-safety': villaSafetyContentEn,
  'villa-devices': villaDevicesContentEn,
  'villa-cables': villaCablesContentEn,
  'villa-handover': villaHandoverContentEn,
  'building-feasibility': buildingFeasibilityContentEn,
  'building-team': buildingTeamContentEn,
  'building-substation': buildingSubstationContentEn,
  'building-risers': buildingRisersContentEn,
  'building-services': buildingServicesContentEn,
  'building-shortcircuit': buildingShortCircuitContentEn,
  'building-protection': buildingProtectionContentEn,
  'building-earthing': buildingEarthingContentEn,
  'building-switchboard': buildingSwitchboardContentEn,
  'building-backup': buildingBackupContentEn,
  'factory-survey': factorySurveyContentEn,
  'factory-starting': factoryStartingContentEn,
  'factory-feeders': factoryFeedersContentEn,
  'factory-cables': factoryCablesContentEn,
  'factory-selectivity': factorySelectivityContentEn,
  'factory-devices': factoryDevicesContentEn,
  'factory-trays': factoryTraysContentEn,
  'factory-powerfactor': factoryPowerFactorContentEn,
  'factory-harmonics': factoryHarmonicsContentEn,
  'clinic-loads': clinicLoadsContentEn,
  'clinic-generator': clinicGeneratorContentEn,
  'clinic-ups': clinicUpsContentEn,
  'clinic-safety': clinicSafetyContentEn,
};

export function getStoryContent(lang: Lang, id: string): TopicContent | undefined {
  return (lang === 'en' ? STORY_CONTENT_EN : STORY_CONTENT_FR)[id];
}
