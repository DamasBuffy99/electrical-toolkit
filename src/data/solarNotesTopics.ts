import { NotesTopic } from './notesTopics';

export const SOLAR_NOTES_TOPICS: NotesTopic[] = [
  {
    id: 'pv-design-steps',
    icon: '🔆',
    title: 'Méthode de dimensionnement',
    subtitle: 'Composants, trajet DC → AC et les 6 étapes : charges, onduleur, panneaux, batteries, régulateur, raccordement',
    titleEn: 'Sizing method',
    subtitleEn: 'Components, DC → AC path and the 6 steps: loads, inverter, panels, batteries, controller, connection',
    transition: 'La méthode est posée : appliquons-la à un vrai cas, avec de vrais équipements et leurs fiches techniques.',
    transitionEn: "The method is set: let's apply it to a real case, with real equipment and their datasheets.",
  },
  {
    id: 'pv-offgrid-example-1',
    icon: '🏠',
    title: 'Exemple 1 : système hors réseau',
    subtitle: 'Lampe, ventilateur et réfrigérateur au Canada : le calcul complet',
    titleEn: 'Example 1: off-grid system',
    subtitleEn: 'Lamp, fan and refrigerator in Canada: the full calculation',
    transition: 'Batteries et régulateur sont au cœur du système : approfondissons leurs types et leurs courants.',
    transitionEn: "Batteries and the controller are at the heart of the system: let's go deeper into their types and currents.",
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
