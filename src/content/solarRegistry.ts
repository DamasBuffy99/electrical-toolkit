import { TopicContent } from './types';
import { Lang } from '../lib/language';

import { pvDesignStepsContent } from './topics/solar/pvDesignSteps';
import { pvOffgridExample1Content } from './topics/solar/pvOffgridExample1';
import { pvOffgridExample2Content } from './topics/solar/pvOffgridExample2';
import { pvBatteriesControllersContent } from './topics/solar/pvBatteriesControllers';
import { pvInverterTypesContent } from './topics/solar/pvInverterTypes';
import { pvInverterSizingContent } from './topics/solar/pvInverterSizing';
import { pvCouplingContent } from './topics/solar/pvCoupling';
import { pvSmaVictronContent } from './topics/solar/pvSmaVictron';
import { pvInverterFinanceContent } from './topics/solar/pvInverterFinance';

import { pvDesignStepsContent as pvDesignStepsContentEn } from './topics/solar/en/pvDesignSteps';
import { pvOffgridExample1Content as pvOffgridExample1ContentEn } from './topics/solar/en/pvOffgridExample1';
import { pvOffgridExample2Content as pvOffgridExample2ContentEn } from './topics/solar/en/pvOffgridExample2';
import { pvBatteriesControllersContent as pvBatteriesControllersContentEn } from './topics/solar/en/pvBatteriesControllers';
import { pvInverterTypesContent as pvInverterTypesContentEn } from './topics/solar/en/pvInverterTypes';
import { pvInverterSizingContent as pvInverterSizingContentEn } from './topics/solar/en/pvInverterSizing';
import { pvCouplingContent as pvCouplingContentEn } from './topics/solar/en/pvCoupling';
import { pvSmaVictronContent as pvSmaVictronContentEn } from './topics/solar/en/pvSmaVictron';
import { pvInverterFinanceContent as pvInverterFinanceContentEn } from './topics/solar/en/pvInverterFinance';

export const SOLAR_TOPIC_CONTENT_FR: Record<string, TopicContent | undefined> = {
  'pv-design-steps': pvDesignStepsContent,
  'pv-offgrid-example-1': pvOffgridExample1Content,
  'pv-offgrid-example-2': pvOffgridExample2Content,
  'pv-batteries-controllers': pvBatteriesControllersContent,
  'pv-inverter-types': pvInverterTypesContent,
  'pv-inverter-sizing': pvInverterSizingContent,
  'pv-coupling': pvCouplingContent,
  'pv-sma-victron': pvSmaVictronContent,
  'pv-inverter-finance': pvInverterFinanceContent,
};

export const SOLAR_TOPIC_CONTENT_EN: Record<string, TopicContent | undefined> = {
  'pv-design-steps': pvDesignStepsContentEn,
  'pv-offgrid-example-1': pvOffgridExample1ContentEn,
  'pv-offgrid-example-2': pvOffgridExample2ContentEn,
  'pv-batteries-controllers': pvBatteriesControllersContentEn,
  'pv-inverter-types': pvInverterTypesContentEn,
  'pv-inverter-sizing': pvInverterSizingContentEn,
  'pv-coupling': pvCouplingContentEn,
  'pv-sma-victron': pvSmaVictronContentEn,
  'pv-inverter-finance': pvInverterFinanceContentEn,
};

export function getSolarTopicContent(lang: Lang, id: string): TopicContent | undefined {
  return (lang === 'en' ? SOLAR_TOPIC_CONTENT_EN : SOLAR_TOPIC_CONTENT_FR)[id];
}
