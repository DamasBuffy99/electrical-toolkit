import { TopicContent } from '../types';
import { SLIDES } from '../slides';

export const disconnectSwitchesContent: TopicContent = {
  title: 'Sectionneurs (disconnect switches)',
  subtitle: 'Où les placer, comment les dimensionner pour moteurs, chauffage, climatisation et condensateurs',
  blocks: [
    {
      type: 'text',
      text: "Un sectionneur (interrupteur de sécurité) permet de couper complètement un circuit de sa source pour la maintenance ou la réparation. Il est exigé pour la climatisation, les chauffe-eau, les extracteurs, les sèche-mains et les moteurs.",
    },
    { type: 'image', source: SLIDES['cond-117'], caption: 'Définition NEC du moyen de sectionnement' },

    { type: 'heading', text: '1 · Où le placer (NEC)' },
    {
      type: 'bullets',
      items: [
        "Visible depuis l'équipement (« in sight ») : à moins de 15 m (50 ft) et sans obstacle (mur) entre le sectionneur et l'appareil.",
        "NEC 110.22 : chaque sectionneur porte une étiquette durable et précise — « moteur, pompe à eau », pas seulement « moteur ».",
        "Sur le plan, chaque sectionneur correspond à un circuit du tableau : DB-FF/L1 en monophasé, DB-FF/L1,3,5 en triphasé.",
        "NEC 422.31 : pour un appareil ≤ 300 VA ou 1/8 HP, le disjoncteur du circuit suffit s'il est visible ou cadenassable ; au-delà, même règle avec 430.109 pour les moteurs.",
        "NEC 430.102 : un sectionneur visible du moteur et de la machine entraînée ; le sectionneur du démarreur peut servir s'il est visible.",
        "Équipement raccordé par cordon (climatiseur de fenêtre, frigo) : la fiche et la prise servent de sectionnement (440.13).",
        'Moteurs > 100 HP AC : un sectionneur d’isolement marqué « Ne pas manœuvrer en charge » est admis.',
      ],
    },
    { type: 'image', source: SLIDES['cond-118'], caption: 'Sectionneur « in sight » : 50 ft, sans obstacle' },
    { type: 'image', source: SLIDES['cond-131'], caption: "Éléments d'un circuit moteur" },

    { type: 'heading', text: '2 · Caractéristiques d’un sectionneur' },
    {
      type: 'table',
      headers: ['Caractéristique', 'Valeurs (Siemens)'],
      rows: [
        ['Usage général (general duty)', '30, 60, 100, 200, 400, 600 A · tenue au court-circuit 100 kA'],
        ['Usage intensif (heavy duty)', '30 à 1 200 A · tenue 200 kA'],
        ['À pression boulonnée', '800 à 4 000 A'],
        ['Tension', 'Au moins égale à celle du circuit (600 V sur 480 V : oui ; 240 V sur 480 V : non)'],
      ],
    },
    {
      type: 'bullets',
      items: [
        "Pôles : nombre de conducteurs coupés en même temps (un moteur triphasé → 3 pôles). Le neutre n'est pas compté dans les pôles.",
        "Fusible (F) ou non fusible (NF) : si une protection est nécessaire, on prend un sectionneur fusible.",
        'Positions (throws) : simple ou double ; un double sert à basculer une charge entre deux sources.',
        'Enveloppe NEMA : Type 1 en intérieur, Type 3R en extérieur (pluie, grésil).',
      ],
    },
    { type: 'image', source: SLIDES['cond-133'], caption: 'Calibres en ampères' },
    { type: 'image', source: SLIDES['cond-134'], caption: 'Tenue au court-circuit et tension' },
    { type: 'image', source: SLIDES['cond-137'], caption: 'Nombre de pôles' },
    { type: 'image', source: SLIDES['cond-139'], caption: 'Positions (throws)' },
    { type: 'image', source: SLIDES['cond-142'], caption: 'Lecture d’une référence catalogue' },
    { type: 'image', source: SLIDES['cond-144'], caption: 'Enveloppes NEMA' },

    { type: 'heading', text: '3 · Chauffage et équipements non moteurs' },
    {
      type: 'text',
      text: "NEC 424.19 / 425.19 : le sectionneur coupe simultanément tous les conducteurs non mis à la terre, avec un calibre ≥ 125 % de la charge totale (moteurs + résistances), et doit être cadenassable.",
    },
    { type: 'formula', text: 'Exemple : chauffage triphasé 240 V, 45 A → 1,25 × 45 = 56 A → sectionneur 60 A, 240 V, 3 pôles, non fusible, Type 1' },
    { type: 'image', source: SLIDES['cond-147'], caption: 'Exemple : chauffage 45 A' },

    { type: 'heading', text: '4 · Moteurs : sectionneur non fusible (NEC 430.110)' },
    { type: 'formula', text: 'Calibre ≥ 1,15 × FLC (tables NEC, pas la plaque)' },
    {
      type: 'text',
      text: 'On utilise les FLC des tables 430.247 à 430.250 pour les conducteurs, les protections et les sectionneurs ; le courant de plaque sert pour les relais thermiques (sauf moteurs lents < 1 200 tr/min, à fort couple ou multivitesses).',
    },
    { type: 'formula', text: 'Exemple : moteur 10 HP, 440 V → FLC = 14 A → 1,15 × 14 = 16,1 A → ABB OT16F3 (20 A, 10 HP)' },
    {
      type: 'text',
      text: "Charges combinées (430.110(C)) : on additionne les courants à pleine charge (FLC) et les courants de démarrage rotor bloqué (LRC, tables 430.251) de toutes les charges, comme un seul moteur équivalent. On choisit le HP le plus élevé entre celui donné par le FLC et celui donné par le LRC. Calibre ≥ 115 % de la somme des FLC.",
    },
    { type: 'formula', text: 'Exemple : HP équivalent selon FLC = 20 HP, selon LRC = 15 HP → sectionneur 20 HP' },
    { type: 'image', source: SLIDES['cond-150'], caption: 'NEC 430.110 : 115 % du FLC' },
    { type: 'image', source: SLIDES['cond-154'], caption: 'Exemple : moteur 10 HP' },
    { type: 'image', source: SLIDES['cond-157'], caption: 'Courants rotor bloqué (tables NEC)' },
    { type: 'image', source: SLIDES['cond-159'], caption: 'Exemple de charge combinée' },
    { type: 'image', source: SLIDES['cond-162'], caption: 'Choix dans le catalogue ABB' },

    { type: 'heading', text: '5 · Climatisation (NEC 440.12)' },
    {
      type: 'text',
      text: "Pour un compresseur hermétique, on prend le courant de plaque (RLA) ou le courant de sélection (BCSC), le plus grand. Calibre ≥ 115 % de ce courant, et HP équivalent selon les tables à partir du courant et du courant rotor bloqué.",
    },
    { type: 'image', source: SLIDES['cond-165'], caption: 'NEC 440.12' },

    { type: 'heading', text: '6 · Moteurs : sectionneur fusible' },
    {
      type: 'text',
      text: "Les sectionneurs Siemens ont une double puissance en HP : standard avec fusibles non temporisés, maximale avec fusibles temporisés.",
    },
    { type: 'subheading', text: 'Exemple : moteur 75 HP, 480 V triphasé, fusible temporisé RK5, Icc 200 kA' },
    { type: 'formula', text: 'FLC (table 430.250) = 96 A → fusible = 1,75 × 96 = 168 A → calibre normalisé 175 A' },
    { type: 'text', text: 'Sectionneur heavy duty 600 V, Type 1 intérieur, colonne « Max » (fusibles temporisés) : HF364, 200 A.' },
    { type: 'image', source: SLIDES['cond-170'], caption: 'Choix dans le catalogue Siemens' },
    { type: 'image', source: SLIDES['cond-173'], caption: 'Fusible 175 A selon NEC 430.52' },

    { type: 'heading', text: '7 · Condensateurs et lettre de code' },
    {
      type: 'text',
      text: "NEC 460 : conducteurs et sectionneur d'une batterie de condensateurs ≥ 135 % du courant nominal (tolérance de fabrication de 0 à +15 %). Pas de sectionneur séparé si le condensateur est côté charge d'un démarreur moteur.",
    },
    { type: 'formula', text: 'I = kvar × 1000 / (√3 × V)' },
    {
      type: 'text',
      text: "La lettre de code rotor bloqué (NEMA, NEC table 430.7(B)) inscrite sur la plaque donne les kVA de démarrage par HP : elle permet de calculer le courant de démarrage du moteur.",
    },
    { type: 'image', source: SLIDES['cond-175'], caption: 'NEC 460 : 135 %' },
    { type: 'image', source: SLIDES['cond-177'], caption: 'Lettre de code rotor bloqué' },
    { type: 'image', source: SLIDES['cond-179'], caption: 'Exemple de lettre de code' },
  ],
};
