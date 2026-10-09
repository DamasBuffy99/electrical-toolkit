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
};

export function getClimTopicContent(lang: Lang, id: string): TopicContent | undefined {
  return (lang === 'en' ? CLIM_TOPIC_CONTENT_EN : CLIM_TOPIC_CONTENT_FR)[id];
}
