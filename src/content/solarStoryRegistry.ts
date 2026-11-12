import { TopicContent } from './types';
import { Lang } from '../lib/language';

import { svNeedsContent } from './solarStory/svNeeds';
import { svDesignContent } from './solarStory/svDesign';
import { svStringsContent } from './solarStory/svStrings';
import { svInstallContent } from './solarStory/svInstall';

import { svNeedsContent as svNeedsContentEn } from './solarStory/en/svNeeds';
import { svDesignContent as svDesignContentEn } from './solarStory/en/svDesign';
import { svStringsContent as svStringsContentEn } from './solarStory/en/svStrings';
import { svInstallContent as svInstallContentEn } from './solarStory/en/svInstall';

export const SOLAR_STORY_CONTENT_FR: Record<string, TopicContent | undefined> = {
  'sv-needs': svNeedsContent,
  'sv-design': svDesignContent,
  'sv-strings': svStringsContent,
  'sv-install': svInstallContent,
};

export const SOLAR_STORY_CONTENT_EN: Record<string, TopicContent | undefined> = {
  'sv-needs': svNeedsContentEn,
  'sv-design': svDesignContentEn,
  'sv-strings': svStringsContentEn,
  'sv-install': svInstallContentEn,
};

export function getSolarStoryContent(lang: Lang, id: string): TopicContent | undefined {
  return (lang === 'en' ? SOLAR_STORY_CONTENT_EN : SOLAR_STORY_CONTENT_FR)[id];
}
