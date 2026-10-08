import { TopicContent } from './types';
import { Lang } from '../lib/language';

import { pvDesignStepsContent } from './topics/solar/pvDesignSteps';
import { pvOffgridExample1Content } from './topics/solar/pvOffgridExample1';
import { pvOffgridExample2Content } from './topics/solar/pvOffgridExample2';
import { pvBatteriesControllersContent } from './topics/solar/pvBatteriesControllers';

import { pvDesignStepsContent as pvDesignStepsContentEn } from './topics/solar/en/pvDesignSteps';
import { pvOffgridExample1Content as pvOffgridExample1ContentEn } from './topics/solar/en/pvOffgridExample1';
import { pvOffgridExample2Content as pvOffgridExample2ContentEn } from './topics/solar/en/pvOffgridExample2';
import { pvBatteriesControllersContent as pvBatteriesControllersContentEn } from './topics/solar/en/pvBatteriesControllers';

export const SOLAR_TOPIC_CONTENT_FR: Record<string, TopicContent | undefined> = {
  'pv-design-steps': pvDesignStepsContent,
  'pv-offgrid-example-1': pvOffgridExample1Content,
  'pv-offgrid-example-2': pvOffgridExample2Content,
  'pv-batteries-controllers': pvBatteriesControllersContent,
};

export const SOLAR_TOPIC_CONTENT_EN: Record<string, TopicContent | undefined> = {
  'pv-design-steps': pvDesignStepsContentEn,
  'pv-offgrid-example-1': pvOffgridExample1ContentEn,
  'pv-offgrid-example-2': pvOffgridExample2ContentEn,
  'pv-batteries-controllers': pvBatteriesControllersContentEn,
};

export function getSolarTopicContent(lang: Lang, id: string): TopicContent | undefined {
  return (lang === 'en' ? SOLAR_TOPIC_CONTENT_EN : SOLAR_TOPIC_CONTENT_FR)[id];
}
