import { TopicContent } from './types';
import { Lang } from '../lib/language';

import { svNeedsContent } from './solarStory/svNeeds';
import { svDesignContent } from './solarStory/svDesign';
import { svStringsContent } from './solarStory/svStrings';
import { svInstallContent } from './solarStory/svInstall';
import { scNeedsContent } from './solarStory/scNeeds';
import { scInvertersContent } from './solarStory/scInverters';
import { scBatteryContent } from './solarStory/scBattery';
import { scFieldContent } from './solarStory/scField';

import { svNeedsContent as svNeedsContentEn } from './solarStory/en/svNeeds';
import { svDesignContent as svDesignContentEn } from './solarStory/en/svDesign';
import { svStringsContent as svStringsContentEn } from './solarStory/en/svStrings';
import { svInstallContent as svInstallContentEn } from './solarStory/en/svInstall';
import { scNeedsContent as scNeedsContentEn } from './solarStory/en/scNeeds';
import { scInvertersContent as scInvertersContentEn } from './solarStory/en/scInverters';
import { scBatteryContent as scBatteryContentEn } from './solarStory/en/scBattery';
import { scFieldContent as scFieldContentEn } from './solarStory/en/scField';

export const SOLAR_STORY_CONTENT_FR: Record<string, TopicContent | undefined> = {
  'sv-needs': svNeedsContent,
  'sv-design': svDesignContent,
  'sv-strings': svStringsContent,
  'sv-install': svInstallContent,
  'sc-needs': scNeedsContent,
  'sc-inverters': scInvertersContent,
  'sc-battery': scBatteryContent,
  'sc-field': scFieldContent,
};

export const SOLAR_STORY_CONTENT_EN: Record<string, TopicContent | undefined> = {
  'sv-needs': svNeedsContentEn,
  'sv-design': svDesignContentEn,
  'sv-strings': svStringsContentEn,
  'sv-install': svInstallContentEn,
  'sc-needs': scNeedsContentEn,
  'sc-inverters': scInvertersContentEn,
  'sc-battery': scBatteryContentEn,
  'sc-field': scFieldContentEn,
};

export function getSolarStoryContent(lang: Lang, id: string): TopicContent | undefined {
  return (lang === 'en' ? SOLAR_STORY_CONTENT_EN : SOLAR_STORY_CONTENT_FR)[id];
}
