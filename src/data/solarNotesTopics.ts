import { NotesTopic } from './notesTopics';

export const SOLAR_NOTES_TOPICS: NotesTopic[] = [
  {
    id: 'pv-design-steps',
    icon: '🔆',
    title: 'Méthodologie de dimensionnement',
    subtitle: 'Les 6 étapes : charges, onduleur, panneaux, batteries, régulateur, câblage',
    titleEn: 'PV Sizing Methodology',
    subtitleEn: 'The 6 steps: loads, inverter, panels, batteries, controller, wiring',
  },
  {
    id: 'pv-batteries-controllers',
    icon: '🔋',
    title: 'Batteries & Régulateurs de charge',
    subtitle: 'Types de batteries, courants de charge/décharge, PWM vs MPPT',
    titleEn: 'Batteries & Charge Controllers',
    subtitleEn: 'Battery types, charge/discharge current, PWM vs MPPT',
  },
];
