import { TopicContent } from '../types';

export const circuitBreakerContent: TopicContent = {
  title: 'Disjoncteurs & Protection',
  subtitle: 'Calibrer un disjoncteur, choisir sa courbe, et connaître les types de disjoncteurs et de déclencheurs',
  blocks: [
    {
      type: 'text',
      text: "Un disjoncteur protège un circuit contre les surcharges et les courts-circuits. Sa sélection se fait en quatre temps : courant de charge, courant du disjoncteur avec facteur de sécurité, choix du calibre standard, puis choix de la courbe.",
    },
    {
      type: 'bullets',
      items: [
        '1 → Calculer le courant de charge I_load',
        '2 → Calculer le courant du disjoncteur I_CB (facteur de sécurité)',
        '3 → Choisir le calibre standard',
        '4 → Choisir la courbe de déclenchement (B, C ou D)',
      ],
    },
    { type: 'divider' },

    { type: 'heading', text: '1 · Calculer le courant de charge (I_load)' },
    { type: 'text', text: "C'est le courant nominal de la charge (rated load current)." },
    { type: 'formula', text: 'Monophasé : I_load = (S × 1000) / V' },
    { type: 'formula', text: 'Triphasé : I_load = (S × 1000) / (√3 × V)' },
    { type: 'text', text: 'S = puissance apparente en kVA, V = tension (phase-neutre en mono, phase-phase en tri).' },
    { type: 'formula', text: 'Exemple : 5 kVA en 220 V → I_load = 5 × 1000 / 220 = 22.7 A' },
    { type: 'divider' },

    { type: 'heading', text: '2 · Calculer le courant du disjoncteur (I_CB)' },
    {
      type: 'text',
      text: "On applique un facteur de sécurité au courant de charge. Sa valeur dépend du code utilisé :",
    },
    { type: 'formula', text: 'I_CB = facteur de sécurité × I_load' },
    {
      type: 'table',
      headers: ['Code', 'Marge', 'Facteur'],
      rows: [
        ['EC', '+25 %', '1.25'],
        ['IEC', '+20 %', '1.2'],
        ['NEC (surcharge)', '+10 %', '1.1'],
      ],
    },
    { type: 'formula', text: 'Exemple IEC : I_CB = 1.2 × 22.7 = 27.3 A' },
    { type: 'divider' },

    { type: 'heading', text: '3 · Choisir le calibre standard' },
    {
      type: 'text',
      text: "On prend le calibre standard disponible juste au-dessus de I_CB — jamais celui d'en dessous.",
    },
    {
      type: 'note',
      text: "⚠️ Exception : quand l'écart entre I_CB et les calibres disponibles est très grand, on peut choisir le calibre précédent ou le suivant, ou bien un disjoncteur réglable (ajustable).",
    },
    {
      type: 'formula',
      text: 'Calibres standards (A) : 6·10·16·20·25·32·40·50·63·80·100·125·160·200·250·320·400·500·630·800·1000·1250',
    },
    { type: 'formula', text: 'Exemple : I_CB = 27.3 A → disjoncteur 32 A' },
    { type: 'divider' },

    { type: 'heading', text: '4 · Choisir la courbe de déclenchement' },
    {
      type: 'text',
      text: "La courbe fixe le seuil de déclenchement magnétique, en multiple du courant nominal In. Elle dépend du courant de démarrage de la charge protégée.",
    },
    {
      type: 'table',
      headers: ['Courbe', 'Seuil magnétique', 'Charges protégées'],
      rows: [
        ['B', '3 – 5 × In', 'Charges statiques : éclairage, chauffages, prises'],
        ['C', '5 – 10 × In', 'Charges à fort courant de démarrage : moteurs'],
        ['D', '10 – 20 × In', 'Courants de démarrage très élevés : transformateurs'],
      ],
    },
    {
      type: 'note',
      text: "💡 Les MCB existent en courbes B, C, D et Z (la courbe Z, 2 – 3 × In, sert aux circuits électroniques très sensibles).",
    },
    { type: 'divider' },

    { type: 'heading', text: 'Les types de disjoncteurs : MCB, MCCB, ACB' },
    {
      type: 'table',
      headers: ['Type', 'Description'],
      rows: [
        ['MCB', 'Miniature Circuit Breaker — petits calibres, circuits terminaux'],
        ['MCCB', 'Moulded Case Circuit Breaker — calibres moyens à élevés'],
        ['ACB', 'Air Circuit Breaker — arrivées principales, forts courants (TGBT)'],
      ],
    },
    {
      type: 'text',
      text: "Ampere Frame (taille de boîtier) : jusqu'à cette valeur de courant, la structure (les dimensions) du disjoncteur reste la même. Elle dépend du fabricant.",
    },
    { type: 'divider' },

    { type: 'heading', text: 'Protection différentielle : ELCB et RCCB' },
    {
      type: 'text',
      text: "ELCB (différentiel) : il faut que la fuite aille vers la terre pour que l'ELCB constate la différence de potentiel.",
    },
    {
      type: 'text',
      text: "RCCB : il coupe l'alimentation lorsqu'il détecte un courant de fuite vers la terre, généralement dû à un défaut d'isolement ou à un contact accidentel avec un conducteur.",
    },
    {
      type: 'note',
      text: "⚠️ Le RCCB ne protège que contre les courants de fuite, pas contre les courts-circuits. Pour le court-circuit, il faut un MCB.",
    },
    {
      type: 'table',
      headers: ['Type de différentiel', 'Courants de fuite détectés'],
      rows: [
        ['Type AC', 'Alternatifs sinusoïdaux'],
        ['Type A', 'Alternatifs + continus pulsés'],
        ['Type B', 'Alternatifs, continus pulsés et continus lisses'],
      ],
    },
    { type: 'divider' },

    { type: 'heading', text: 'Les déclencheurs (trip units)' },
    {
      type: 'text',
      text: "Ir = réglage du seuil de surcharge (thermique) · Im = réglage du seuil de court-circuit (magnétique).",
    },
    {
      type: 'table',
      headers: ['Déclencheur', 'Réglages', 'Usage'],
      rows: [
        ['FTU', 'Ir et Im fixes', 'Usage courant'],
        ['FMU', 'Ir réglable, Im fixe', 'Usage courant'],
        ['ATU', 'Ir et Im réglables', 'Réglage fin des protections'],
        ['MTU', "Pas de protection surcharge — magnétique seul, réglable", 'Quand la surcharge est gérée à part (relais de surcharge) — ex. groupe électrogène'],
        ['MCP', 'Déclenchement instantané (magnétique seul)', 'Protection court-circuit des moteurs'],
      ],
    },
    { type: 'formula', text: 'MCP + relais de surcharge = protection complète du moteur' },
    { type: 'divider' },

    { type: 'heading', text: 'Protection contre les surintensités (circuit de branche, NEC)' },
    {
      type: 'text',
      text: "Charge continue : charge dont le courant maximal est censé durer 3 heures ou plus.",
    },
    { type: 'formula', text: 'I_r = 1.25 × I_continue + I_non-continue' },
    {
      type: 'text',
      text: "Si on ne connaît pas encore la durée de fonctionnement, on considère toutes les charges comme continues :",
    },
    { type: 'formula', text: 'I_r = 1.25 × ΣI' },
    {
      type: 'note',
      text: "⚠️ Exception : avec un disjoncteur « 100 % », on additionne charge continue et non continue sans surdimensionnement.",
    },
    {
      type: 'table',
      headers: ['Conception', 'Charge minimale totale'],
      rows: [
        ['Standard 80 % (80%-rated)', 'Charge non continue + 125 % de la charge continue'],
        ['Standard 100 % (100%-rated)', 'Charge non continue + charge continue'],
      ],
    },
    {
      type: 'note',
      text: "📌 Quand il déclenche, un disjoncteur doit ouvrir tous les conducteurs non mis à la terre du circuit.",
    },
    { type: 'divider' },

    { type: 'heading', text: 'Protection des moteurs (NEC)' },
    {
      type: 'bullets',
      items: [
        "Pour trouver le courant à pleine charge (FLC) d'un moteur, ne pas utiliser I = S / 230 : lire la table NEC 430.248 (monophasé) ou 430.250 (triphasé) à partir de la puissance en HP.",
        'Appliquer au FLC le coefficient de la table NEC 430.52.',
        'Choisir le calibre dans la table des calibres standards NEC 240.6(A).',
      ],
    },
    {
      type: 'note',
      text: "⚠️ Exceptions : si la valeur calculée n'est pas un calibre standard, toujours prendre le calibre suivant. Et si nécessaire (démarrage), on peut dépasser la valeur indiquée par la table.",
    },
    {
      type: 'table',
      headers: ['Courant', 'Source', 'Usage'],
      rows: [
        ['FLC (Full Load Current)', 'Tables NEC', 'Dimensionner les protections court-circuit'],
        ['FLA (Full Load Amps)', 'Plaque signalétique du moteur', 'Protection surcharge, ou toute exception prévue par le NEC'],
      ],
    },
    {
      type: 'bullets',
      items: [
        "Un seul appareil pour surcharge + court-circuit : disjoncteur choisi à 1.25 × FLA.",
        'Appareils séparés : court-circuit selon la table 430.52 (2.5 × FLC pour un disjoncteur, 1.75 × FLC pour un fusible) ; surcharge selon NEC 430.32 (1.25 × FLA — jusqu’à 1.4 en exception — ou 1.15 × FLA pour les autres moteurs).',
      ],
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
    { type: 'divider' },

    { type: 'heading', text: 'Exemple 1 — Moteur monophasé 2 HP, 230 V' },
    {
      type: 'text',
      text: 'FLC (table 430.248) = 12 A · Calibre disjoncteur = 2.5 × FLC = 2.5 × 12 = 30 A (valeur standard, table 240.6).',
    },
    {
      type: 'image',
      source: require('../../../assets/reference/breaker_motor_example1_2hp.png'),
      caption: 'Exemple complet — sélection du disjoncteur pour un moteur monophasé 2 HP',
      height: 420,
    },
    { type: 'divider' },

    { type: 'heading', text: 'Exemple 2 — Moteur triphasé 7.5 HP, 230 V' },
    {
      type: 'text',
      text: 'FLC (table 430.250) = 22 A · Calibre calculé = 2.5 × 22 = 55 A → pas un calibre standard → calibre suivant : 60 A.',
    },
    {
      type: 'image',
      source: require('../../../assets/reference/breaker_motor_example2_7hp5.png'),
      caption: 'Exemple complet — sélection du disjoncteur pour un moteur triphasé 7.5 HP',
      height: 420,
    },
  ],
};
