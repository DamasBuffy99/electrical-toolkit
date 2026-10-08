import { TopicContent } from '../types';
import { SLIDES } from '../slides';

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
    {
      type: 'table',
      headers: ['Raccourci (HP ≈ kVA)', 'Courant'],
      rows: [
        ['Monophasé 220 V (S ≤ 5 kVA)', 'I ≈ 4,5 × kVA ≈ 4,5 × HP'],
        ['Triphasé 380 V (S > 5 kVA)', 'I ≈ 1,5 × kVA ≈ 1,5 × HP'],
      ],
    },
    { type: 'formula', text: 'Moteur 4 HP mono : I = 4,5 × 4 = 18 A → I_CB = 1,25 × 18 = 22,5 A → 25 A' },
    { type: 'formula', text: 'Charge 50 HP tri : I = 1,5 × 50 = 75 A → I_CB = 1,25 × 75 = 94 A → 100 A' },
    {
      type: 'note',
      text: "💡 Le facteur 1,25 utilisé ici est une pratique courante des ingénieurs (marge pour les extensions). L'IEC n'impose pas ce facteur ; le NEC l'utilise pour les charges continues.",
    },
    { type: 'image', source: SLIDES['panel-19'], caption: 'Exemple 1 : charge monophasée de 4 HP' },
    { type: 'image', source: SLIDES['panel-20'], caption: 'Exemple 1 : I_CB = 22,5 A → 25 A' },
    { type: 'image', source: SLIDES['panel-21'], caption: 'Exemple 2 : charge triphasée de 50 HP' },
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
        ['EC (code égyptien)', '+25 %', '1.25'],
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
    {
      type: 'bullets',
      items: [
        'Grand écart, valeur proche du calibre inférieur : 262,5 A entre 250 et 400 A → disjoncteur 250 A.',
        "Valeur au milieu : 300 A entre 250 et 400 A → disjoncteur réglable 400 A, réglé par molette (ex. Ir = 400 × 0,7 = 280 A).",
      ],
    },
    { type: 'image', source: require('../../../assets/reference/circuit_breaker_ratings_ranges.png'), caption: 'Calibres normalisés : plages MCB, MCCB et ACB' },
    { type: 'image', source: SLIDES['panel-22'], caption: 'Choisir entre deux calibres éloignés' },
    { type: 'image', source: SLIDES['panel-23'], caption: 'Disjoncteur réglable : molettes Ir et Im' },
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
        ['Z', '2 – 3 × In', 'Applications très sensibles : semi-conducteurs, électronique'],
        ['B', '3 – 5 × In', 'Charges statiques : éclairage, chauffages, prises'],
        ['C', '5 – 10 × In', 'Charges à fort courant de démarrage : moteurs, éclairage fluorescent'],
        ['K', '10 – 14 × In', 'Forts appels : moteurs et transformateurs'],
        ['D', '10 – 20 × In', 'Courants de démarrage très élevés : transformateurs, gros moteurs, radiologie'],
      ],
    },
    {
      type: 'text',
      text: "Les courbes sont définies par l'IEC 60898-1 et 60947-2. La partie haute (thermique, bilame) réagit lentement aux surcharges et est la même pour toutes les courbes ; la partie basse (magnétique, bobine) réagit en quelques millisecondes au court-circuit.",
    },
    { type: 'formula', text: 'Lecture : « C32 » = courbe C, 32 A' },
    { type: 'image', source: SLIDES['panel-24'], caption: 'Zones de déclenchement B, C et D' },
    { type: 'image', source: SLIDES['cond-28'], caption: 'Comparaison des courbes Z, B, C, K, D' },
    { type: 'image', source: SLIDES['cond-29'], caption: 'Exemple : MCB C32 unipolaire, 6 kA' },
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
      type: 'bullets',
      items: [
        'Ir : courant de réglage du disjoncteur (dépend des kVA de la charge).',
        'Im : seuil de déclenchement instantané en court-circuit.',
        "Icu : pouvoir de coupure ultime (kA) ; dépend de l'impédance en amont (câbles, jeux de barres, transformateurs).",
      ],
    },
    {
      type: 'table',
      headers: ['Tension', 'Valeurs', 'Technologie de disjoncteur'],
      rows: [
        ['Basse tension (1 V – 1 kV)', '220 V mono, 380 V tri', 'MCB, MCCB, ACB'],
        ['Moyenne tension (1 – 66 kV)', '3,3 · 6,6 · 11 · 22 kV', 'SF6, vide'],
        ['Haute tension (66 – 500 kV)', '132 · 220 · 500 kV', 'Huile, SF6'],
      ],
    },
    { type: 'image', source: SLIDES['panel-17'], caption: 'Fonctionnement : zones thermique et magnétique' },
    { type: 'image', source: SLIDES['panel-18'], caption: 'Tensions et technologies' },

    { type: 'heading', text: 'Ampere Frame (AF) et Ampere Trip (AT)' },
    {
      type: 'bullets',
      items: [
        "AF (Ampere Frame) : taille physique et capacité thermique du boîtier. C'est le courant maximal que le corps du disjoncteur (barres, contacts, enveloppe) supporte, quel que soit le réglage. Valeurs courantes : 100, 150, 250, 400, 630, 800 AF.",
        "AT (Ampere Trip) : le réglage, fixe ou ajustable, auquel le disjoncteur ouvre le circuit.",
      ],
    },
    { type: 'formula', text: 'Exemple : MCCB 150 AF réglé à 100 AT → boîtier de 150 A, déclenche à 100 A' },
    { type: 'image', source: SLIDES['af-3'], caption: 'Ampere Frame (AF)' },
    { type: 'image', source: SLIDES['af-5'], caption: 'Ampere Trip (AT)' },
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
      type: 'text',
      text: "Principe : en fonctionnement normal, le courant qui entre par la phase ressort par le neutre. Un écart signifie qu'une partie du courant fuit vers la terre — souvent à travers une personne. Le tore compare les courants ; le bouton test crée une petite fuite à travers une résistance.",
    },
    { type: 'formula', text: 'Monophasé : I_fuite = |I_L − I_N|    Triphasé : I_fuite = |(I_L1 + I_L2 + I_L3) + I_N|' },
    { type: 'formula', text: 'Déclenchement si I_fuite ≥ seuil : 30 mA pour protéger les personnes, 300 mA pour protéger les machines' },
    {
      type: 'table',
      headers: ['Marquage', 'Signification'],
      rows: [
        ['In = 40 A', 'Courant nominal permanent'],
        ['IΔn = 30 mA', 'Sensibilité : déclenche dès 30 mA de fuite'],
        ['Inc = IΔc = 10 kA', 'Tenue au court-circuit conditionnelle, associé à un MCB (il ne coupe pas le court-circuit lui-même)'],
        ['Un = 230 V~', 'Tension nominale, courant alternatif'],
        ['Im = 500 A', 'Pouvoir de fermeture et de coupure assigné'],
        ['~ à côté de 30 mA', 'Type AC'],
      ],
    },
    { type: 'image', source: SLIDES['rccb-5'], caption: 'Principe du RCCB' },
    { type: 'image', source: SLIDES['rccb-6'], caption: 'Tore, bobine de détection et bouton test' },
    { type: 'image', source: SLIDES['rccb-7'], caption: 'Lecture des caractéristiques' },
    { type: 'image', source: SLIDES['rccb-8'], caption: 'Types AC, A et B' },
    { type: 'image', source: SLIDES['rccb-9'], caption: 'RCCB triphasé' },
    { type: 'image', source: SLIDES['panel-31'], caption: '30 mA pour les personnes, 300 mA pour les machines' },
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
      headers: ['Déclencheur', 'Thermique (Ir)', 'Magnétique (Im)', 'Usage'],
      rows: [
        ['FTU (fixe)', 'Fixe (Ir = In)', 'Fixe (≈ 10 × In)', 'Usage général, économique'],
        ['FMU', 'Réglable (0,8 – 1 × In)', 'Fixe (≈ 10 × In)', 'Charges variables'],
        ['ATU (réglable)', 'Réglable (0,8 – 1 × In)', 'Réglable (5 – 10 × In), + court retard', 'Réglage fin, sélectivité'],
        ['MTU', 'Aucune', 'Réglable (6 – 12 × In)', 'Surcharge gérée à part (relais thermique) — ex. groupe électrogène'],
        ['MCP', 'Aucune', 'Instantané', 'Protection court-circuit des moteurs (démarreurs, MCC)'],
        ['Électronique (LSI / LSIG)', 'Réglable (L)', 'Réglable (S, I, G)', 'Charges critiques, data centers, mesure intégrée'],
      ],
    },
    { type: 'formula', text: 'MCP + relais de surcharge = protection complète du moteur' },
    { type: 'image', source: SLIDES['af-13'], caption: 'Résumé des déclencheurs de MCCB' },
    { type: 'divider' },

    { type: 'heading', text: 'Disjoncteurs moyenne tension' },
    {
      type: 'bullets',
      items: [
        'Tensions : 3,3 · 6,6 · 11 · 22 kV ; courants nominaux 630 à 4 000 A.',
        'Pouvoir de coupure du réseau : 6,6 kV → 250 MVA · 11 kV → 500 MVA · 22 kV → 750 MVA.',
      ],
    },
    {
      type: 'table',
      headers: ['Type', 'Tension', 'Pouvoir de coupure'],
      rows: [
        ['À huile', '1 – 330 kV', '150 – 2 000 MVA'],
        ['À air', '1 – 15 kV', '5 – 500 MVA'],
        ['SF6', '3,6 – 760 kV', '10 000 – 50 000 MVA'],
        ['À vide', '11 – 33 kV', '250 – 2 000 MVA'],
      ],
    },
    { type: 'subheading', text: 'Exemple : moteur 2 MVA, 11 kV' },
    { type: 'formula', text: 'I = 2 × 10⁶ / (√3 × 11 × 10³) = 104 A → disjoncteur SF6 630 A' },
    { type: 'formula', text: 'Isc = 500 × 10⁶ / (√3 × 11 × 10³) = 26 kA' },
    { type: 'formula', text: 'Apport des moteurs voisins (50 à 80 %) : Icu = 26 + 0,8 × 26 = 46,8 kA → 50 kA' },
    { type: 'image', source: SLIDES['panel-33'], caption: 'Disjoncteurs MT : tensions et types' },
    { type: 'image', source: SLIDES['panel-34'], caption: 'Exemple : moteur 2 MVA, 11 kV' },
    { type: 'image', source: SLIDES['panel-35'], caption: 'Pouvoir de coupure avec l’apport des moteurs' },
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
      focus: { x: 0.02, y: 0.16, w: 0.96, h: 0.45 },
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
