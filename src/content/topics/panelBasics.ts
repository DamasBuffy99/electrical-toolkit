import { TopicContent } from '../types';
import { SLIDES } from '../slides';

export const panelBasicsContent: TopicContent = {
  title: 'Tableaux : construction et schéma unifilaire',
  subtitle: 'Ce que contient un tableau, comment le représenter, et les règles de construction',
  blocks: [
    {
      type: 'text',
      text: "Les circuits, protections et câbles sont dimensionnés : il reste à les loger dans des tableaux adaptés à leur emplacement, puis à les représenter sur le schéma unifilaire (SLD).",
    },

    { type: 'heading', text: '1 · Ce que contient un tableau' },
    {
      type: 'table',
      headers: ['Élément', 'Rôle'],
      rows: [
        ['Disjoncteur général', 'Protège le tableau contre les courts-circuits et surcharges (MCB, MCCB ou ACB)'],
        ['Jeux de barres R, S, T, N, E', "Distribuent l'énergie de l'arrivée vers les départs"],
        ['Disjoncteurs ou fusibles de départ', 'Protègent chaque câble de départ et sa charge'],
        ['Appareils de mesure et voyants', 'Tension, courant, kW, kVA, cos φ, kvar · état du circuit (marche, arrêt, test)'],
        ['Transformateurs de courant (TC) et de tension (TT)', 'Abaissent courant et tension pour la mesure'],
        ['Isolants', 'Supportent et isolent les parties sous tension'],
      ],
    },
    { type: 'image', source: SLIDES['panel-3'], caption: 'Construction d’un tableau' },

    { type: 'heading', text: '2 · Jeux de barres et départs' },
    {
      type: 'bullets',
      items: [
        'Jeux de barres en cuivre, montés sur des isolateurs adaptés à la tension.',
        "Revêtus d'un isolant (PVC) contre l'humidité et les gaz.",
        'Choisis selon le courant nominal, le courant de court-circuit et la taille du tableau.',
        'Départs unipolaires pour les circuits monophasés (éclairage, prises) ; bipolaires ou tripolaires pour le biphasé et le triphasé.',
      ],
    },
    { type: 'image', source: SLIDES['panel-5'], caption: 'Jeux de barres' },
    { type: 'image', source: SLIDES['panel-6'], caption: 'Disjoncteurs de départ' },

    { type: 'heading', text: '3 · Mesure : TC et appareils' },
    {
      type: 'text',
      text: "Le TC (transformateur de courant) mesure le courant : le conducteur qui passe dans le tore joue le rôle de primaire, la bobine du TC fournit un courant réduit aux appareils de mesure. Les voyants, alimentés depuis l'arrivée, indiquent l'état des circuits.",
    },
    { type: 'image', source: SLIDES['panel-7'], caption: 'Appareils de mesure et voyants' },
    { type: 'image', source: SLIDES['panel-8'], caption: 'Transformateur de courant' },

    { type: 'heading', text: '4 · Règles de construction' },
    {
      type: 'table',
      headers: ['Tableau', 'Indice IP'],
      rows: [
        ['Tableau extérieur (outdoor panel)', 'IP65'],
        ['Tableau général (MDB, Main Distribution Board)', 'IP54'],
        ['Tableau divisionnaire (SDB, Sub Distribution Board)', 'IP44'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'Épaisseur de tôle : au moins 2 mm.',
        'La mise à la terre du tableau est obligatoire.',
        "Montage en saillie (sur le mur) ou encastré (dans le mur).",
      ],
    },
    {
      type: 'note',
      text: "💡 Le 1er chiffre de l'IP indique la protection contre les corps solides (poussière), le 2e contre l'eau. Plus les chiffres sont élevés, plus le tableau est protégé — d'où IP65 à l'extérieur.",
    },
    { type: 'image', source: SLIDES['panel-9'], caption: 'IP, épaisseur et mise à la terre' },
    { type: 'image', source: SLIDES['cond-187'], caption: 'Montage en saillie ou encastré' },

    { type: 'heading', text: '5 · Le schéma unifilaire (SLD)' },
    {
      type: 'text',
      text: "Le SLD représente chaque circuit par un seul trait : arrivée (câble, disjoncteur général), jeu de barres (tension, fréquence, pouvoir de coupure), puis chaque départ avec son disjoncteur, son câble et sa charge.",
    },
    {
      type: 'bullets',
      items: [
        "Exemple 1 : tableau de 3 moteurs de 30 HP et 2 de 20 HP — arrivée 3×150 + 70 + 70 mm², MCCB 250 A, 25 kA ; départs MCCB 40 A et 63 A.",
        'Exemple 2 : 2 circuits d’éclairage, 2 de prises normales, 2 de prises de puissance — arrivée 4×10 + 10 mm², MCCB 25 A ; départs MCB 16 A et 20 A.',
      ],
    },
    { type: 'image', source: SLIDES['panel-10'], caption: 'Exemple 1 : câblage du tableau de moteurs' },
    { type: 'image', source: SLIDES['panel-11'], caption: 'Exemple 1 : schéma unifilaire' },
    { type: 'image', source: SLIDES['panel-12'], caption: 'Exemple 2 : câblage éclairage et prises' },
    { type: 'image', source: SLIDES['panel-13'], caption: 'Exemple 2 : schéma unifilaire' },

    { type: 'heading', text: '6 · Types de tableaux' },
    {
      type: 'text',
      text: "Dans un bâtiment, le tableau général basse tension (MLVDB) reçoit le transformateur et le groupe via un inverseur (ATS) ; il alimente les tableaux divisionnaires, le tableau ondulé (UPS) et les tableaux de moteurs.",
    },
    {
      type: 'bullets',
      items: [
        'Tableau monophasé : compteur, disjoncteur 2P, différentiel 2P, puis MCB 1P sur le jeu de barres phase.',
        'Tableau triphasé (TPN) : MCCB général, jeux de barres L1-L2-L3, neutre et terre ; ex. 250 A — 12 départs.',
      ],
    },
    { type: 'image', source: SLIDES['panel-14'], caption: 'Architecture des tableaux d’un bâtiment' },
    { type: 'image', source: SLIDES['cond-182'], caption: 'Tableau monophasé' },
    { type: 'image', source: SLIDES['cond-183'], caption: 'Tableau triphasé' },
    { type: 'image', source: SLIDES['cond-186'], caption: 'Tableau TPN 250 A' },
    { type: 'image', source: SLIDES['panel-15'], caption: 'Exemples de tableaux' },
  ],
};
