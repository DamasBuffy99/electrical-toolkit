import { TopicContent } from './types';
import { Lang } from '../lib/language';

import { climIntroContent } from './topics/clim/climIntro';
import { climCycleContent } from './topics/clim/climCycle';
import { climHeatGainsContent } from './topics/clim/climHeatGains';
import { climLoadMethodContent } from './topics/clim/climLoadMethod';
import { climLoadExampleContent } from './topics/clim/climLoadExample';
import { climSystemChoiceContent } from './topics/clim/climSystemChoice';
import { climRoomAirContent } from './topics/clim/climRoomAir';
import { climRoomInstallContent } from './topics/clim/climRoomInstall';
import { climCentralSystemsContent } from './topics/clim/climCentralSystems';
import { climCentralNetworksContent } from './topics/clim/climCentralNetworks';
import { climBuildingContent } from './topics/clim/climBuilding';
import { climOperatingCostsContent } from './topics/clim/climOperatingCosts';

import { abcPhysicsContent } from './topics/clim/abcPhysics';
import { abcPsychroContent } from './topics/clim/abcPsychro';
import { abcMollierContent } from './topics/clim/abcMollier';
import { abcCompressorsContent } from './topics/clim/abcCompressors';
import { abcExchangersContent } from './topics/clim/abcExchangers';
import { abcComponentsContent } from './topics/clim/abcComponents';
import { abcRefrigerantsContent } from './topics/clim/abcRefrigerants';
import { abcHeatpumpsContent } from './topics/clim/abcHeatpumps';
import { abcSplitVrvContent } from './topics/clim/abcSplitVrv';
import { abcHydraulicsContent } from './topics/clim/abcHydraulics';
import { abcAirsideContent } from './topics/clim/abcAirside';
import { abcSpecialContent } from './topics/clim/abcSpecial';
import { abcElectricContent } from './topics/clim/abcElectric';
import { abcControlContent } from './topics/clim/abcControl';
import { abcInstallContent } from './topics/clim/abcInstall';
import { abcCommissioningContent } from './topics/clim/abcCommissioning';
import { abcTroubleshootingContent } from './topics/clim/abcTroubleshooting';

import { climIntroContent as climIntroContentEn } from './topics/clim/en/climIntro';
import { climCycleContent as climCycleContentEn } from './topics/clim/en/climCycle';
import { climHeatGainsContent as climHeatGainsContentEn } from './topics/clim/en/climHeatGains';
import { climLoadMethodContent as climLoadMethodContentEn } from './topics/clim/en/climLoadMethod';
import { climLoadExampleContent as climLoadExampleContentEn } from './topics/clim/en/climLoadExample';
import { climSystemChoiceContent as climSystemChoiceContentEn } from './topics/clim/en/climSystemChoice';
import { climRoomAirContent as climRoomAirContentEn } from './topics/clim/en/climRoomAir';
import { climRoomInstallContent as climRoomInstallContentEn } from './topics/clim/en/climRoomInstall';
import { climCentralSystemsContent as climCentralSystemsContentEn } from './topics/clim/en/climCentralSystems';
import { climCentralNetworksContent as climCentralNetworksContentEn } from './topics/clim/en/climCentralNetworks';
import { climBuildingContent as climBuildingContentEn } from './topics/clim/en/climBuilding';
import { climOperatingCostsContent as climOperatingCostsContentEn } from './topics/clim/en/climOperatingCosts';

import { abcPhysicsContent as abcPhysicsContentEn } from './topics/clim/en/abcPhysics';
import { abcPsychroContent as abcPsychroContentEn } from './topics/clim/en/abcPsychro';
import { abcMollierContent as abcMollierContentEn } from './topics/clim/en/abcMollier';
import { abcCompressorsContent as abcCompressorsContentEn } from './topics/clim/en/abcCompressors';
import { abcExchangersContent as abcExchangersContentEn } from './topics/clim/en/abcExchangers';
import { abcComponentsContent as abcComponentsContentEn } from './topics/clim/en/abcComponents';
import { abcRefrigerantsContent as abcRefrigerantsContentEn } from './topics/clim/en/abcRefrigerants';
import { abcHeatpumpsContent as abcHeatpumpsContentEn } from './topics/clim/en/abcHeatpumps';
import { abcSplitVrvContent as abcSplitVrvContentEn } from './topics/clim/en/abcSplitVrv';
import { abcHydraulicsContent as abcHydraulicsContentEn } from './topics/clim/en/abcHydraulics';
import { abcAirsideContent as abcAirsideContentEn } from './topics/clim/en/abcAirside';
import { abcSpecialContent as abcSpecialContentEn } from './topics/clim/en/abcSpecial';
import { abcElectricContent as abcElectricContentEn } from './topics/clim/en/abcElectric';
import { abcControlContent as abcControlContentEn } from './topics/clim/en/abcControl';
import { abcInstallContent as abcInstallContentEn } from './topics/clim/en/abcInstall';
import { abcCommissioningContent as abcCommissioningContentEn } from './topics/clim/en/abcCommissioning';
import { abcTroubleshootingContent as abcTroubleshootingContentEn } from './topics/clim/en/abcTroubleshooting';

export const CLIM_TOPIC_CONTENT_FR: Record<string, TopicContent | undefined> = {
  'clim-intro': climIntroContent,
  'clim-cycle': climCycleContent,
  'clim-heat-gains': climHeatGainsContent,
  'clim-load-method': climLoadMethodContent,
  'clim-load-example': climLoadExampleContent,
  'clim-system-choice': climSystemChoiceContent,
  'clim-room-air': climRoomAirContent,
  'clim-room-install': climRoomInstallContent,
  'clim-central-systems': climCentralSystemsContent,
  'clim-central-networks': climCentralNetworksContent,
  'clim-building': climBuildingContent,
  'clim-operating-costs': climOperatingCostsContent,
  'abc-physics': abcPhysicsContent,
  'abc-psychro': abcPsychroContent,
  'abc-mollier': abcMollierContent,
  'abc-compressors': abcCompressorsContent,
  'abc-exchangers': abcExchangersContent,
  'abc-components': abcComponentsContent,
  'abc-refrigerants': abcRefrigerantsContent,
  'abc-heatpumps': abcHeatpumpsContent,
  'abc-split-vrv': abcSplitVrvContent,
  'abc-hydraulics': abcHydraulicsContent,
  'abc-airside': abcAirsideContent,
  'abc-special': abcSpecialContent,
  'abc-electric': abcElectricContent,
  'abc-control': abcControlContent,
  'abc-install': abcInstallContent,
  'abc-commissioning': abcCommissioningContent,
  'abc-troubleshooting': abcTroubleshootingContent,
};

export const CLIM_TOPIC_CONTENT_EN: Record<string, TopicContent | undefined> = {
  'clim-intro': climIntroContentEn,
  'clim-cycle': climCycleContentEn,
  'clim-heat-gains': climHeatGainsContentEn,
  'clim-load-method': climLoadMethodContentEn,
  'clim-load-example': climLoadExampleContentEn,
  'clim-system-choice': climSystemChoiceContentEn,
  'clim-room-air': climRoomAirContentEn,
  'clim-room-install': climRoomInstallContentEn,
  'clim-central-systems': climCentralSystemsContentEn,
  'clim-central-networks': climCentralNetworksContentEn,
  'clim-building': climBuildingContentEn,
  'clim-operating-costs': climOperatingCostsContentEn,
  'abc-physics': abcPhysicsContentEn,
  'abc-psychro': abcPsychroContentEn,
  'abc-mollier': abcMollierContentEn,
  'abc-compressors': abcCompressorsContentEn,
  'abc-exchangers': abcExchangersContentEn,
  'abc-components': abcComponentsContentEn,
  'abc-refrigerants': abcRefrigerantsContentEn,
  'abc-heatpumps': abcHeatpumpsContentEn,
  'abc-split-vrv': abcSplitVrvContentEn,
  'abc-hydraulics': abcHydraulicsContentEn,
  'abc-airside': abcAirsideContentEn,
  'abc-special': abcSpecialContentEn,
  'abc-electric': abcElectricContentEn,
  'abc-control': abcControlContentEn,
  'abc-install': abcInstallContentEn,
  'abc-commissioning': abcCommissioningContentEn,
  'abc-troubleshooting': abcTroubleshootingContentEn,
};

export function getClimTopicContent(lang: Lang, id: string): TopicContent | undefined {
  return (lang === 'en' ? CLIM_TOPIC_CONTENT_EN : CLIM_TOPIC_CONTENT_FR)[id];
}
