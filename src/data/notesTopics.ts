export type NotesTopic = {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  titleEn: string;
  subtitleEn: string;
};

export const NOTES_TOPICS: NotesTopic[] = [
  {
    id: 'overview',
    icon: '🧭',
    title: 'Vue d\'ensemble du projet',
    subtitle: 'Parties prenantes, types de dessins, coordination',
    titleEn: 'Project Overview',
    subtitleEn: 'Stakeholders, drawing types, coordination',
  },
  {
    id: 'demand-diversity',
    icon: '⚖️',
    title: 'Facteur de demande & diversité',
    subtitle: 'Demand factor, simultanéité, cascade',
    titleEn: 'Demand Factor & Diversity',
    subtitleEn: 'Demand factor, coincidence, cascade',
  },
  {
    id: 'load-estimation',
    icon: '📐',
    title: 'Estimation de charge',
    subtitle: 'Méthode VA/m², méthodes NEC/IEC, exemple complet',
    titleEn: 'Load Estimation',
    subtitleEn: 'VA/m² method, NEC/IEC methods, full example',
  },
  {
    id: 'transformer-generator',
    icon: '🔌',
    title: 'Transformateur & Groupe électrogène',
    subtitle: 'Dimensionnement des locaux, dégagements',
    titleEn: 'Transformer & Generator',
    subtitleEn: 'Room sizing, clearances',
  },
  {
    id: 'lighting',
    icon: '💡',
    title: 'Conception d\'éclairage',
    subtitle: 'Lampes, méthode des lumens, IP, CRI',
    titleEn: 'Lighting Design',
    subtitleEn: 'Lamps, lumen method, IP, CRI',
  },
  {
    id: 'architectural-drawings',
    icon: '📝',
    title: 'Lecture des plans architecturaux',
    subtitle: 'Escaliers, ascenseurs, gaines, préparation AutoCAD',
    titleEn: 'Reading Architectural Drawings',
    subtitleEn: 'Stairs, elevators, shafts, AutoCAD prep',
  },
  {
    id: 'panel-schedule',
    icon: '🗂️',
    title: 'Panel Schedule',
    subtitle: 'Équilibrage des phases, facteurs de demande, câbles',
    titleEn: 'Panel Schedule',
    subtitleEn: 'Phase balancing, demand factors, cables',
  },
  {
    id: 'circuit-breaker',
    icon: '🛡️',
    title: 'Disjoncteurs & Protection',
    subtitle: 'Sélection, courbes B/C/D, charge continue',
    titleEn: 'Circuit Breakers & Protection',
    subtitleEn: 'Selection, B/C/D curves, continuous load',
  },
  {
    id: 'feeders',
    icon: '🧵',
    title: 'Feeders — Protection moteurs & panneaux',
    subtitle: 'Feeder moteur combiné, feeder de panneau, NEC 240.6/430.52',
    titleEn: 'Feeders — Motor & Panel Protection',
    subtitleEn: 'Combined motor feeder, panel feeder, NEC 240.6/430.52',
  },
  {
    id: 'cable-sizing',
    icon: '🔗',
    title: 'Dimensionnement des câbles (CSA)',
    subtitle: 'Section de câble, dérating, conduits, coordination IEC',
    titleEn: 'Cable Sizing (CSA)',
    subtitleEn: 'Cable section, derating, conduits, IEC coordination',
  },
  {
    id: 'notions-diverses',
    icon: '🧩',
    title: 'Notions diverses',
    subtitle: 'Interrupteurs, conversion HP/kVA, classes de tension',
    titleEn: 'Miscellaneous Notions',
    subtitleEn: 'Switches, HP/kVA conversion, voltage classes',
  },
];
