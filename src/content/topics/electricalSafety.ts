import { TopicContent } from '../types';
import { SLIDES } from '../slides';

export const electricalSafetyContent: TopicContent = {
  title: 'Le danger électrique et les schémas de liaison à la terre',
  subtitle: 'Ce que le courant fait au corps humain, et comment une installation protège les personnes',
  blocks: [
    {
      type: 'text',
      text: "La mise à la terre protège les personnes contre les chocs électriques indirects et permet aux protections de déclencher en cas de défaut. Avant de la dimensionner, il faut comprendre ce que le courant fait au corps humain.",
    },
    { type: 'image', source: SLIDES['earth-12'], caption: 'Sans terre, le courant de défaut traverse la personne ; avec la terre, il passe par le conducteur' },

    { type: 'heading', text: '1 · Effet du courant sur le corps humain' },
    {
      type: 'text',
      text: 'Quatre facteurs déterminent la gravité d’un choc : l’intensité du courant, sa durée, sa fréquence et son trajet dans le corps.',
    },
    {
      type: 'table',
      headers: ['Courant AC', 'Effet'],
      rows: [
        ['1 mA', 'Seuil de perception'],
        ['5 mA', 'Maximum encore sans danger'],
        ['10 – 20 mA', 'Perte du contrôle musculaire, impossible de lâcher'],
        ['50 mA', 'Difficulté à respirer'],
        ['100 – 300 mA', 'Arrêt respiratoire, souvent mortel'],
        ['1 000 – 6 000 mA', 'Brûlure des organes et des tissus'],
      ],
    },
    {
      type: 'text',
      text: 'La durée compte autant que l’intensité : au-delà de 100 mA pendant plus de 20 ms, le choc peut être mortel. Le courant supportable pendant un temps t est :',
    },
    { type: 'formula', text: 'I = 116 mA / √t   (ex. t = 10 s → I = 36,68 mA)' },
    {
      type: 'bullets',
      items: [
        "Fréquence : il faut 300 à 500 mA en DC pour l'effet de 30 mA en AC ; le courant alternatif basse fréquence est le plus dangereux.",
        'Trajet : main à main et main gauche aux pieds sont les pires cas, car le courant traverse le cœur.',
      ],
    },
    { type: 'image', source: SLIDES['earth-4'], caption: 'Effets du courant alternatif sur le corps' },
    { type: 'image', source: SLIDES['earth-5'], caption: 'Effet selon la durée' },
    { type: 'image', source: SLIDES['earth-6'], caption: 'Courant supportable en fonction du temps' },

    { type: 'heading', text: '2 · Contacts directs et indirects' },
    {
      type: 'table',
      headers: ['Danger', 'Origine', 'Protection'],
      rows: [
        ['Contact direct', 'On touche une partie sous tension', "Isolation des parties actives · barrières ou enveloppes · dispositif différentiel (DDR)"],
        ['Contact indirect', "Défaut d'isolement : une masse métallique devient sous tension", 'Mise à la terre'],
      ],
    },
    {
      type: 'text',
      text: "Mettre à la terre, c'est relier les parties métalliques qui ne transportent normalement pas de courant (carcasses, châssis) ou le neutre de la source au sol par un conducteur de faible résistance, pour évacuer immédiatement le courant de défaut.",
    },
    { type: 'image', source: SLIDES['earth-9'], caption: 'Contact direct (gauche) et contact indirect par défaut d’isolement (droite)' },

    { type: 'heading', text: '3 · Les schémas de liaison à la terre : TT, TN, IT' },
    {
      type: 'bullets',
      items: [
        '1re lettre = la source : T = neutre relié à la terre · I = isolé de la terre.',
        '2e lettre = les masses de l’installation : T = reliées à une terre locale · N = reliées au neutre.',
      ],
    },
    {
      type: 'table',
      headers: ['Schéma', 'Principe', 'À retenir'],
      rows: [
        ['TT', 'Neutre à la terre, masses à une terre locale', 'Le plus simple à concevoir et installer · DDR obligatoire'],
        ['TN (TN-C, TN-S)', 'Masses reliées au neutre (PEN commun en TN-C, PE séparé en TN-S)', "Le disjoncteur élimine le défaut · DDR non nécessaire sauf câbles très longs"],
        ['IT', 'Neutre isolé ou impédant', "Meilleure continuité de service (hôpitaux) · contrôleur permanent d'isolement (CPI/IMD) · coûteux"],
      ],
    },
    { type: 'image', source: SLIDES['earth-14'], caption: 'Schéma TT' },
    { type: 'image', source: SLIDES['earth-15'], caption: 'Schémas TN-C et TN-S' },
    { type: 'image', source: SLIDES['earth-16'], caption: 'Schéma IT avec contrôleur d’isolement' },

  ],
};
