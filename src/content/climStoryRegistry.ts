import { TopicContent } from './types';
import { Lang } from '../lib/language';

import { cvBriefContent } from './climStory/cvBrief';
import { cvLoadContent } from './climStory/cvLoad';
import { cvSelectContent } from './climStory/cvSelect';
import { cvInstallContent } from './climStory/cvInstall';

import { cvBriefContent as cvBriefContentEn } from './climStory/en/cvBrief';
import { cvLoadContent as cvLoadContentEn } from './climStory/en/cvLoad';
import { cvSelectContent as cvSelectContentEn } from './climStory/en/cvSelect';
import { cvInstallContent as cvInstallContentEn } from './climStory/en/cvInstall';

export const CLIM_STORY_CONTENT_FR: Record<string, TopicContent | undefined> = {
  'cv-brief': cvBriefContent,
  'cv-load': cvLoadContent,
  'cv-select': cvSelectContent,
  'cv-install': cvInstallContent,
};

export const CLIM_STORY_CONTENT_EN: Record<string, TopicContent | undefined> = {
  'cv-brief': cvBriefContentEn,
  'cv-load': cvLoadContentEn,
  'cv-select': cvSelectContentEn,
  'cv-install': cvInstallContentEn,
};

export function getClimStoryContent(lang: Lang, id: string): TopicContent | undefined {
  return (lang === 'en' ? CLIM_STORY_CONTENT_EN : CLIM_STORY_CONTENT_FR)[id];
}
