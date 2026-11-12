import { TopicContent } from '../types';

export const svStringsContent: TopicContent = {
  title: 'Le toit et les chaînes',
  subtitle: 'Douze modules sur deux pans de toiture. Fanta choisit l’inclinaison, chasse les ombres, puis vérifie que les chaînes restent dans les limites de l’onduleur au petit matin froid comme en plein après-midi brûlant.',
  blocks: [
    { type: 'scene', text: 'Année 2 · Sur le toit, avec Yao Kouamé (SolTech Afrique)' },
    {
      type: 'objectives',
      items: [
        'Choisir orientation et inclinaison des modules près de l’équateur.',
        'Lire une fiche de module : Voc, Vmp, Isc, Imp, coefficients de température.',
        'Calculer la température des cellules et corriger les tensions.',
        'Remplir la note de calcul des chaînes et vérifier les limites de l’onduleur.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '10 à 15°', label: 'inclinaison retenue' },
        { value: '≈ 66 °C', label: 'température des cellules en plein soleil' },
        { value: '2 × 6', label: 'modules : une chaîne par pan, une par MPPT' },
        { value: '306 V', label: 'Voc maximale à l’aube, sous les 800 V admis' },
      ],
    },

    { type: 'heading', text: '1 · Orientation, inclinaison, ombres' },
    {
      type: 'dialogue',
      speaker: 'Yao Kouamé (installateur)',
      role: 'team',
      text: 'On met tout plein sud, incliné à 30°, comme en Europe ?',
    },
    {
      type: 'dialogue',
      speaker: 'Fanta Coulibaly',
      role: 'engineer',
      text: 'Pas à 6° de latitude nord : le soleil passe presque à la verticale, une forte inclinaison ferait perdre de la production. 10 à 15° suffisent, juste assez pour que la pluie nettoie les modules. Et l’orientation compte peu ici : les deux pans sud-est et sud-ouest produiront presque autant qu’un pan plein sud.',
    },
    {
      type: 'table',
      headers: ['Critère', 'Choix', 'Pourquoi'],
      rows: [
        ['Inclinaison', '10 à 15°', 'proche de la latitude, minimum pour l’autonettoyage par la pluie'],
        ['Orientation', 'pans sud-est et sud-ouest', 'écart de production < 5 % près de l’équateur'],
        ['Ombres', 'aucune entre 9 h et 16 h', 'le manguier est élagué, le chauffe-eau solaire déplacé'],
        ['Fixation', 'rails aluminium sur la charpente, 10 cm sous les modules', 'l’air qui circule refroidit les cellules'],
      ],
    },
    {
      type: 'note',
      text: 'Une ombre sur un seul module d’une chaîne fait chuter le courant de toute la chaîne, comme un tuyau pincé. Les diodes de dérivation limitent les dégâts, mais il vaut mieux éviter toute ombre aux heures productives, ou utiliser des optimiseurs sur les modules exposés.',
    },

    { type: 'heading', text: '2 · Le module et la chaleur' },
    {
      type: 'table',
      headers: ['Donnée du module 550 Wc', 'Valeur', 'Signification'],
      rows: [
        ['Pmax', '550 W', 'puissance aux conditions standard (1 000 W/m², 25 °C de cellule)'],
        ['Voc', '49,6 V', 'tension à vide : la plus haute, à surveiller par temps froid'],
        ['Vmp / Imp', '41,6 V / 13,2 A', 'point de puissance maximale'],
        ['Isc', '14,0 A', 'courant de court-circuit'],
        ['β(Voc)', '− 0,27 %/K', 'la tension baisse quand la cellule chauffe'],
        ['γ(Pmax)', '− 0,35 %/K', 'la puissance baisse aussi avec la chaleur'],
        ['NOCT', '45 °C', 'température de cellule à 800 W/m² et 20 °C d’air'],
      ],
    },
    {
      type: 'calc',
      title: 'Température des cellules en plein après-midi',
      steps: [
        { label: 'Air à 35 °C, ensoleillement 1 000 W/m²', formula: 'θ_c = θ_a + \\frac{NOCT − 20}{800} × G = 35 + \\frac{25}{800} × 1 000 ≈ 66 °C' },
        { label: 'Pose en surimposition, peu ventilée : marge de calcul', formula: 'θ_{c,max} = 70 °C' },
        { label: 'Perte de puissance par la chaleur', formula: '− 0,35 % × (66 − 25) ≈ − 14 %' },
      ],
      result: 'Un module de 550 Wc ne fournit qu’environ 470 W en plein soleil à 35 °C : c’est inclus dans le PR de 0,75',
    },

    { type: 'heading', text: '3 · La note de calcul des chaînes' },
    { type: 'illustration', name: 'pv-array', props: { series: 6, parallel: 1, voc: 49.6 }, caption: 'Une chaîne : 6 modules en série, les tensions s’additionnent, le courant reste celui d’un module' },
    {
      type: 'text',
      text: 'Chaque chaîne de modules en série doit respecter trois limites de l’onduleur : ne jamais dépasser sa tension maximale (même à l’aube la plus fraîche, quand la tension est la plus haute), rester dans sa plage MPPT (même l’après-midi, quand la tension est la plus basse), et ne pas dépasser le courant admis par chaque entrée.',
    },
    {
      type: 'stringSheet',
      sheet: {
        project: 'Villa Mensah',
        module: { name: 'Monocristallin 550 Wc, demi-cellules', pmax: 550, voc: 49.6, vmp: 41.6, isc: 14.0, imp: 13.2, betaVoc: -0.27, gammaPmax: -0.35 },
        tMin: 15,
        tCellMax: 70,
        inverter: { name: 'Hybride 8 kW triphasé 48 V', vmaxDc: 800, mpptMin: 160, mpptMax: 650, imaxMppt: 16, iscMaxMppt: 20, pac: 8 },
        strings: [
          { mppt: 'MPPT 1 (pan SE)', series: 6, parallel: 1 },
          { mppt: 'MPPT 2 (pan SO)', series: 6, parallel: 1 },
        ],
      },
    },
    {
      type: 'calc',
      title: 'Le détail pour une chaîne de 6 modules',
      steps: [
        { label: 'Voc à l’aube (15 °C)', formula: 'V_{oc} = 6 × 49,6 × [1 − 0,0027 × (15 − 25)] ≈ 306 V ≤ 800 V ✓' },
        { label: 'Vmp en plein après-midi (70 °C de cellule)', formula: 'V_{mp} = 6 × 41,6 × [1 − 0,0035 × (70 − 25)] ≈ 210 V ≥ 160 V ✓' },
        { label: 'Vmp au matin frais (15 °C)', formula: 'V_{mp} = 6 × 41,6 × [1 + 0,0035 × 10] ≈ 258 V ≤ 650 V ✓' },
        { label: 'Courants par entrée', formula: 'I_{mp} = 13,2 A ≤ 16 A ✓   ;   I_{sc} = 14,0 A ≤ 20 A ✓' },
      ],
      result: 'Deux chaînes de 6 modules, une par MPPT : toutes les vérifications sont conformes',
    },
    {
      type: 'decision',
      title: 'Câblage du champ',
      choice: 'Une chaîne de 6 modules par pan, chaque pan sur son propre MPPT',
      reasons: [
        'Les deux pans ne reçoivent pas le soleil aux mêmes heures : chaque MPPT suit le meilleur point de son pan.',
        'À 210 V l’après-midi, la tension reste confortablement au-dessus du seuil de 160 V, même avec un module vieilli ou ombré.',
      ],
      rejected: 'Une seule chaîne de 12 modules sur les deux pans : la tension passerait (611 V à l’aube), mais les modules des deux orientations se freineraient mutuellement toute la journée.',
    },
    { type: 'fiche', id: 'pv-design-steps', why: 'Plage MPPT, tension maximale et raccordement des panneaux.' },
    { type: 'fiche', id: 'pv-offgrid-example-2', why: 'Un autre calcul de chaînes, avec écrêtage du régulateur.' },

    { type: 'heading', text: '4 · Ce que disent les normes' },
    {
      type: 'norms',
      title: 'Conception du champ photovoltaïque',
      rows: [
        { norm: 'IEC 62548', rule: 'Exigences de conception des champs PV : tension maximale à la température minimale, courants, protections.', result: 'Voc corrigée à la température minimale' },
        { norm: 'NEC 690.7', rule: 'Tension maximale corrigée par la température minimale du site (tableau 690.7(A) ou coefficients du fabricant).', result: 'même calcul' },
        { norm: 'IEC 61215 / IEC 61730', rule: 'Qualification et sécurité des modules ; données Voc, Isc, coefficients mesurés.', result: 'modules certifiés' },
        { norm: 'IEC 60891', rule: 'Procédures de correction des caractéristiques I-V en température et en éclairement.', result: 'méthode de correction' },
      ],
    },
    {
      type: 'regional',
      text: 'Ici, ce n’est pas le froid qui menace les onduleurs, c’est la chaleur qui fait chuter la tension sous le seuil MPPT l’après-midi, justement aux heures les plus productives. Les installateurs habitués aux calculs européens (Voc à −10 °C) oublient souvent cette vérification à chaud. Au Sahel, prenez 75 à 80 °C de cellule pour une pose peu ventilée.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Près de l’équateur : faible inclinaison (10–15°), orientation peu critique, aucune ombre aux heures utiles.',
        'Température de cellule ≈ air + 25 à 35 °C en plein soleil ; la tension et la puissance baissent avec la chaleur.',
        'Voc à froid ≤ tension maximale ; Vmp à chaud ≥ seuil MPPT ; Vmp à froid ≤ haut de plage ; courants ≤ limites.',
        'Une orientation par MPPT.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Avec des chaînes de 4 modules au lieu de 6, la tension resterait-elle dans la plage MPPT l’après-midi ?',
      solution: ['V_mp à 70 °C = 4 × 41,6 × 0,8425 ≈ 140 V.', '140 V < 160 V : l’onduleur décrocherait l’après-midi. Il faut au moins 5 modules (175 V), 6 pour garder une marge.'],
    },
    {
      type: 'exercise',
      question: 'Un module plus puissant a un Imp de 17,5 A. Peut-on le brancher sur cet onduleur (16 A par MPPT) ?',
      solution: ['17,5 A > 16 A : l’onduleur écrêtera le courant ; la puissance au-delà de 16 A × V_mp sera perdue.', 'Ce n’est pas dangereux tant que Isc reste sous 20 A, mais c’est une perte à chiffrer. Avec un Isc de 18,5 A, ça passe ; au-delà de 20 A, non.'],
    },
  ],
};
