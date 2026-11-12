import { TopicContent } from '../../types';

export const pvInverterSizingContent: TopicContent = {
  title: 'Lire une fiche et dimensionner un onduleur',
  subtitle: 'Puissance continue, sur 30 minutes, de pointe ; VA ou W ; déclassement en température. Puis un cas d’école : un centre de santé isolé de 17 kW, où une lecture trop rapide du nom commercial ferait installer deux fois trop peu d’onduleurs.',
  blocks: [
    {
      type: 'objectives',
      items: [
        'Distinguer puissance continue, puissance sur 30 minutes et pointe de démarrage.',
        'Ne pas confondre VA et W sur les fiches.',
        'Tenir compte du déclassement en température du local technique.',
        'Appliquer la règle de dimensionnement phase par phase et vérifier la pointe du plus gros moteur.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '6,0 kW', label: 'continus pour un Sunny Island « 8.0H »' },
        { value: '5,43 kW', label: 'le même appareil à 45 °C' },
        { value: '× 1,2', label: 'marge sur les charges simultanées' },
        { value: '6 unités', label: 'et non 3, pour le centre de santé de 17 kW' },
      ],
    },
    {
      type: 'text',
      text: 'Un onduleur affiche plusieurs puissances selon la durée et la température. On dimensionne sur la puissance continue à la température réelle du local, et on vérifie à part la pointe de démarrage.',
    },

    { type: 'heading', text: '1 · Continu, 30 minutes, pointe' },
    { type: 'image', source: require('../../../../assets/solar/inverters/power-durations.webp'), caption: 'Puissance d’un Sunny Island 8.0H selon la durée : « 8.0 » est sa puissance sur 30 minutes ; on dimensionne sur les barres bleues', height: 240 },
    {
      type: 'text',
      text: 'Le nom commercial ne donne pas la puissance continue. Le « 8.0 » du Sunny Island 8.0H correspond à sa puissance sur 30 minutes ; il ne tient que 6 kW en continu à 25 °C.',
    },
    {
      type: 'table',
      headers: ['Appareil', 'Nom commercial', 'Continu à 25 °C', 'Pointe'],
      rows: [
        ['SMA Sunny Island 4.4M', '4,4 kW (30 min)', '3,3 kW', '5,5 kW pendant 3 s'],
        ['SMA Sunny Island 6.0H', '6,0 kW (30 min)', '4,6 kW', '11 kW pendant 3 s'],
        ['SMA Sunny Island 8.0H', '8,0 kW (30 min)', '6,0 kW', '11 kW pendant 3 s'],
        ['Victron MultiPlus-II 48/5000', '5 000 VA', '4,0 kW', '9 kW'],
        ['Victron MultiPlus-II 48/10000', '10 000 VA', '8,0 kW', '18 kW'],
        ['Victron MultiPlus-II 48/15000', '15 000 VA', '12,0 kW', '27 kW'],
      ],
    },

    { type: 'heading', text: '2 · VA et W' },
    {
      type: 'text',
      text: 'Victron, comme d’autres fabricants, désigne ses appareils par leur puissance apparente en VA. La puissance active en W, celle qui compte pour les charges, est plus faible : un MultiPlus-II 48/5000 fournit 4 000 W en continu à 25 °C, un 48/15000 en fournit 12 000.',
    },
    { type: 'formula', text: 'P (W) = S (VA) × cos φ   ;   MultiPlus-II 48/5000 : 5 000 VA → 4 000 W en continu  (rapport 0,8)' },

    { type: 'heading', text: '3 · La température' },
    {
      type: 'text',
      text: 'Les puissances sont données à 25 °C. Au-delà, l’appareil se protège en réduisant sa puissance : un Sunny Island 8.0H ne tient plus que 5,43 kW à 45 °C, et un MultiPlus-II 48/10000 passe de 8 kW à 7 kW à 40 °C. Dans un local technique non climatisé d’Afrique de l’Ouest, c’est cette valeur-là qui compte.',
    },
    {
      type: 'table',
      headers: ['Caractéristique', 'SI 4.4M', 'SI 6.0H', 'SI 8.0H'],
      rows: [
        ['Continu à 25 °C', '3,3 kW', '4,6 kW', '6,0 kW'],
        ['Sur 30 min', '4,4 kW', '6,0 kW', '8,0 kW'],
        ['Pointe pendant 3 s', '5,5 kW', '11 kW', '11 kW'],
        ['Continu à 45 °C', '3,0 kW', '3,7 kW', '5,43 kW'],
        ['PV couplé en AC au maximum', '5 kW', '9,2 kW', '12 kW'],
      ],
    },

    { type: 'heading', text: '4 · La règle de dimensionnement' },
    { type: 'formula', text: 'P_{continue à la température du local} ≥ 1,2 × P_{charges simultanées}' },
    {
      type: 'bullets',
      items: [
        'Le facteur 1,2 est une marge de conception usuelle, à ajuster selon le projet.',
        'En triphasé, la vérification se fait phase par phase : chaque onduleur ne porte que sa phase.',
        'Ensuite, la pointe de quelques secondes doit couvrir la charge déjà en service plus l’appel de démarrage du plus gros moteur.',
      ],
    },

    { type: 'heading', text: '5 · Cas d’école : un centre de santé isolé de 17 kW' },
    {
      type: 'table',
      headers: ['Donnée', 'Valeur'],
      rows: [
        ['Site', 'centre de santé rural triphasé, sans réseau, avec groupe de secours et panneaux couplés par un Sunny Tripower'],
        ['Charges simultanées', '17 kW, soit environ 5,7 kW par phase'],
        ['Plus gros moteur', 'pompe de forage de 3 kW sur L1, appel ≈ 9 kW pendant 1 à 2 s'],
        ['Local technique', 'ventilé mais non climatisé : 45 °C en saison chaude'],
      ],
    },
    {
      type: 'calc',
      title: 'Vérification par phase avec des Sunny Island 8.0H',
      steps: [
        { label: 'Puissance continue requise par phase (marge 1,2)', formula: 'P = 1,2 × 5,7 ≈ 6,8 kW' },
        { label: 'Une unité par phase, à 45 °C', formula: '5,43 kW < 6,8 kW  ✗' },
        { label: 'Pointe sur L1 : charge déjà en service + démarrage de la pompe', formula: '5,7 + 9 = 14,7 kW > 11 kW (3 s)  ✗  →  décrochage' },
        { label: 'Deux unités par phase, à 45 °C', formula: '2 × 5,43 = 10,9 kW ≥ 6,8 kW ✓   ;   pointe 2 × 11 = 22 kW ≥ 14,7 kW ✓' },
      ],
      result: 'Il faut 6 Sunny Island 8.0H (deux clusters de trois, reliés par une Multicluster-Box), et non 3',
    },
    { type: 'image', source: require('../../../../assets/solar/inverters/cluster-example.webp'), caption: 'À gauche, 3 unités : sous-dimensionné à 45 °C et décrochage au démarrage de la pompe. À droite, 6 unités : correct', height: 260 },
    {
      type: 'decision',
      title: 'Onduleurs du centre de santé',
      choice: '6 Sunny Island 8.0H en multicluster (ou 3 MultiPlus-II 48/15000, un par phase, après vérification à 45 °C)',
      reasons: [
        'Lire « 8.0H » comme 8 kW continus aurait conduit à trois unités pour « 24 kW » : la réalité est 16,3 kW à 45 °C, sans tenir la pompe.',
        'La pointe de démarrage, vérifiée sur la phase la plus chargée, décide autant que la puissance continue.',
        'Alternative Victron : 12 kW à 25 °C, 10 kW à 40 °C et 27 kW de pointe par appareil ; à confirmer sur la courbe de déclassement à 45 °C.',
      ],
      rejected: 'Trois Sunny Island 8.0H choisis sur leur nom commercial : coupures dès la première journée chaude et à chaque démarrage de la pompe.',
    },
    {
      type: 'note',
      text: 'Une autre voie consiste à baisser la température du local : un local technique ombragé, bien ventilé, voire climatisé, rend aux onduleurs (et aux batteries) leur puissance et leur durée de vie. Le coût d’une petite clim se compare à celui de trois onduleurs supplémentaires.',
    },

    { type: 'heading', text: '6 · Ce que disent les normes' },
    {
      type: 'norms',
      title: 'Données des fiches et installation',
      rows: [
        { norm: 'IEC 62109-1 / -2', rule: 'Sécurité des onduleurs PV et des onduleurs-chargeurs, y compris les conditions d’essai thermique.', result: 'puissances garanties à température donnée' },
        { norm: 'IEC 61683', rule: 'Mesure du rendement des conditionneurs de puissance photovoltaïques.', result: 'rendements comparables' },
        { norm: 'NF C 15-712-2 (France)', rule: 'Installations PV autonomes ou avec stockage : protections, sectionnement, câblage DC batterie.', result: 'guide d’installation' },
        { norm: 'IEC 60364-7-712', rule: 'Règles d’installation des systèmes photovoltaïques.', result: 'cadre international' },
      ],
    },
    {
      type: 'regional',
      text: 'Les relais télécoms, centres de santé et écoles de la région sont souvent équipés d’onduleurs choisis sur leur nom commercial, dans des locaux à 40–45 °C. Résultat : coupures aux heures chaudes et onduleurs qui vieillissent vite. Exigez la courbe de déclassement en température du fabricant et dimensionnez avec la température mesurée du local, pas avec les 25 °C de la fiche.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Le nom commercial n’est pas la puissance continue : lire le tableau « continu », « 30 min », « pointe ».',
        'VA ≠ W : la puissance active disponible est plus faible que la puissance apparente du nom.',
        'Toujours prendre la puissance continue à la température réelle du local.',
        'Règle : P continue ≥ 1,2 × charges simultanées, phase par phase.',
        'Vérifier ensuite la pointe : charge en service + démarrage du plus gros moteur.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Une maison isolée monophasée a 3 kW de charges simultanées et un réfrigérateur dont l’appel atteint 2 kW. Le local est à 40 °C. Un MultiPlus-II 48/5000 (4 kW à 25 °C, environ 3,5 kW à 40 °C, 9 kW de pointe) convient-il ?',
      solution: ['Continu requis : 1,2 × 3 = 3,6 kW > 3,5 kW à 40 °C : légèrement insuffisant.', 'Pointe : 3 + 2 = 5 kW ≤ 9 kW ✓. Il faut soit un modèle 8 000 VA, soit réduire les charges simultanées, soit rafraîchir le local.'],
    },
    {
      type: 'exercise',
      question: 'Combien de Sunny Island 6.0H faudrait-il par phase pour le centre de santé (6,8 kW continus à 45 °C, pointe de 14,7 kW sur L1) ?',
      solution: ['À 45 °C, un SI 6.0H tient 3,7 kW : 2 unités = 7,4 kW ≥ 6,8 kW ✓.', 'Pointe : 2 × 11 = 22 kW ≥ 14,7 kW ✓. Deux par phase également, mais avec moins de marge en continu qu’avec des 8.0H.'],
    },
  ],
};
