import { TopicContent } from '../types';

export const circuitBreakerContent: TopicContent = {
  title: 'Disjoncteurs & Protection',
  subtitle: "Calibrer un disjoncteur et choisir sa courbe de déclenchement",
  blocks: [
    {
      type: 'text',
      text: "Un disjoncteur protège un circuit contre les surcharges et les courts-circuits. Le choisir correctement demande de calculer le courant réel du circuit, d'y appliquer une marge de sécurité, puis de sélectionner un calibre standard et une courbe de déclenchement adaptés à la charge.",
    },
    {
      type: 'image',
      source: require('../../../assets/diagrams/breaker_selection_steps.png'),
      caption: 'Les 6 étapes de sélection d\'un disjoncteur',
      height: 520,
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Étape 1 — Calculer le courant de charge' },
    { type: 'formula', text: 'Monophasé : I_load = (S × 1000) / V' },
    { type: 'formula', text: 'Triphasé : I_load = (S × 1000) / (√3 × V)' },
    {
      type: 'text',
      text: 'S = puissance apparente en kVA, V = tension (phase-neutre en mono, phase-phase en tri). Ce courant représente la charge réelle qui transitera dans le circuit.',
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Étape 2 — Appliquer une marge de sécurité' },
    {
      type: 'text',
      text: "Le calibre du disjoncteur ne doit jamais coller exactement au courant de charge — une marge absorbe les pointes normales et évite les déclenchements intempestifs.",
    },
    {
      type: 'table',
      headers: ['Référence', 'Marge appliquée'],
      rows: [
        ['Règle du facteur de charge (FC)', '+25%'],
        ['IEC', '+20%'],
        ['NEC', '+10%'],
      ],
    },
    { type: 'formula', text: 'I_r = I_load × (1 + marge)' },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Étape 3 — Charges continues : la règle 80% / 100%' },
    {
      type: 'text',
      text: "Pour une charge continue (fonctionnement ≥ 3h sans interruption, ex : éclairage, climatisation), le disjoncteur doit être dimensionné avec une marge supplémentaire pour éviter tout échauffement prolongé.",
    },
    { type: 'formula', text: 'I_r = 1.25 × I_continue + I_non-continue' },
    {
      type: 'note',
      text: "📐 Concrètement : un disjoncteur standard (100%) ne doit être chargé qu'à 80% de son calibre en continu, sauf s'il est spécifiquement certifié \"100% rated\" pour un usage à pleine charge continue.",
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Étape 4 — Choisir le calibre standard' },
    {
      type: 'text',
      text: "Sélectionner, dans la série normalisée, le calibre directement supérieur à I_r. Si l'écart entre I_r et le calibre disponible est trop important, envisager un disjoncteur réglable (calibre ajustable) au calibre inférieur pour éviter un surdimensionnement excessif.",
    },
    {
      type: 'formula',
      text: 'Calibres standards (A) : 6·10·16·20·25·32·40·50·63·80·100·125·160·200·250·320·400·500·630·800·1000·1250',
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Étape 5 — Choisir la courbe de déclenchement' },
    {
      type: 'text',
      text: "La courbe détermine le seuil de déclenchement magnétique (court-circuit), exprimé en multiple du courant nominal In. Elle doit correspondre au type de charge alimentée, pour éviter les déclenchements intempestifs à la mise sous tension.",
    },
    {
      type: 'table',
      headers: ['Courbe', 'Seuil magnétique', 'Usage typique'],
      rows: [
        ['B', '3 – 5 × In', 'Circuits résistifs, charges statiques, longues lignes'],
        ['C', '5 – 10 × In', 'Usage général, charges avec appel de courant modéré (moteurs, luminaires)'],
        ['D', '10 – 20 × In', "Fort appel au démarrage : transformateurs, gros moteurs"],
      ],
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Types de disjoncteurs' },
    {
      type: 'table',
      headers: ['Type', 'Description'],
      rows: [
        ['MCB', 'Miniature Circuit Breaker — circuits basse puissance, jusqu\'à ~100A'],
        ['MCCB', 'Moulded Case Circuit Breaker — puissance moyenne à élevée, calibre réglable'],
        ['ACB', 'Air Circuit Breaker — arrivées principales, forts courants (tableaux généraux)'],
        ['RCD / RCCB', 'Différentiel — protection des personnes contre les fuites à la terre'],
      ],
    },
    {
      type: 'text',
      text: "Sous-types de MCB rencontrés sur les plans : FIU, FMU, MTU, MCP — chacun désigne une variante de boîtier ou de fonction (isolement, protection moteur, etc.) selon le fabricant ; toujours vérifier la légende du plan pour l'interprétation exacte.",
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Protection des moteurs (NEC)' },
    {
      type: 'text',
      text: "La protection des circuits moteurs suit une logique différente des charges statiques : le disjoncteur doit laisser passer le fort courant de démarrage tout en protégant le câble en régime établi. Le NEC encadre cela via plusieurs tables dédiées : 430.52 (calibre max de protection contre les courts-circuits, en % du FLC), 240.6 (calibres standards), 430.248/430.250 (courants à pleine charge — FLC — des moteurs mono/triphasés).",
    },
    {
      type: 'image',
      source: require('../../../assets/reference/nec_table_430_52.png'),
      caption: 'NEC Table 430.52 — Maximum Rating or Setting of Motor Branch-Circuit Protective Devices',
      height: 320,
    },
    {
      type: 'image',
      source: require('../../../assets/reference/nec_table_240_6a.png'),
      caption: 'NEC Table 240.6(A) — Standard Ampere Ratings for Fuses and Inverse Time Circuit Breakers',
      height: 260,
    },
    {
      type: 'note',
      text: "⚠️ Ces tables NEC contiennent des valeurs numériques précises par puissance de moteur — toujours se référer à l'édition en vigueur du NEC plutôt qu'à une valeur mémorisée, les tables sont révisées d'une édition à l'autre.",
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Exemple 1 — Moteur monophasé 2 HP, 230V' },
    {
      type: 'text',
      text: 'FLC (table 430.248) = 12A · Calibre disjoncteur = 2.5 × FLC = 2.5 × 12 = 30A (valeur standard, table 240.6).',
    },
    {
      type: 'image',
      source: require('../../../assets/reference/breaker_motor_example1_2hp.png'),
      caption: 'Exemple complet — sélection du disjoncteur pour un moteur monophasé 2 HP',
      height: 420,
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Exemple 2 — Moteur triphasé 7.5 HP, 230V' },
    {
      type: 'text',
      text: 'FLC (table 430.250) = 22A · Calibre calculé = 2.5 × 22 = 55A → calibre standard le plus proche : 60A.',
    },
    {
      type: 'image',
      source: require('../../../assets/reference/breaker_motor_example2_7hp5.png'),
      caption: 'Exemple complet — sélection du disjoncteur pour un moteur triphasé 7.5 HP',
      height: 420,
    },
  ],
};
