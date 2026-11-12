import { TopicContent } from '../types';

export const spPumpContent: TopicContent = {
  title: 'La pompe et son variateur solaire',
  subtitle: 'Soixante et un mètres de hauteur, jusqu’à 17 m³ par heure à midi et rien la nuit. Fanta choisit l’architecture du pompage, la pompe immergée et son moteur, puis le variateur qui transforme directement le courant des panneaux en vitesse de pompe.',
  blocks: [
    { type: 'scene', text: 'Mois 2 · Bureau d’études Lumen, puis au forage avec Yao Kouamé' },
    {
      type: 'objectives',
      items: [
        'Comparer les architectures de pompage solaire : pompe DC, pompe AC avec variateur, batteries.',
        'Choisir une pompe immergée à partir de son point de fonctionnement.',
        'Utiliser les lois de similitude pour comprendre le seuil de pompage.',
        'Paramétrer les protections du variateur et dimensionner le câble moteur.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '17 m³/h à 61 m', label: 'point de fonctionnement à pleine vitesse' },
        { value: '5,5 kW', label: 'moteur immergé triphasé 400 V' },
        { value: '≈ 2,2 kW', label: 'puissance minimale avant que l’eau n’arrive au château' },
        { value: '0 batterie', label: 'on stocke de l’eau, pas de l’électricité' },
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Adama Ouédraogo',
      role: 'client',
      text: 'Et la nuit ? Les femmes viennent puiser à 5 heures du matin, bien avant le soleil.',
    },
    {
      type: 'dialogue',
      speaker: 'Fanta Coulibaly',
      role: 'engineer',
      text: 'La nuit, c’est le château d’eau qui donne. On pompe tout ce qu’il faut pendant le jour, on stocke en hauteur, et la gravité fait le reste. Une cuve en acier dure trente ans ; une batterie, huit à dix. C’est pour ça qu’en pompage on stocke de l’eau, pas des kilowattheures.',
    },

    { type: 'heading', text: '1 · Quelle architecture ?' },
    {
      type: 'table',
      headers: ['Solution', 'Principe', 'Atouts', 'Limites'],
      rows: [
        ['Pompe à moteur DC sans balais + contrôleur', 'moteur à aimants alimenté par les panneaux', 'très bon rendement, idéale sous 3 kW', 'pièces propres au fabricant, peu de modèles au-delà de 4 kW'],
        ['Pompe immergée AC standard + variateur solaire', 'variateur de fréquence avec MPPT, entrée DC directe', 'pompe et moteur standards réparables localement, secours par groupe possible', 'rendement un peu inférieur'],
        ['Onduleur + batteries + pompe AC', 'pompage à toute heure', 'débit constant', 'batteries chères, à remplacer tous les 8 à 10 ans'],
      ],
    },
    {
      type: 'decision',
      title: 'Architecture du pompage',
      choice: 'Pompe immergée 6" à moteur asynchrone 400 V, pilotée par un variateur solaire alimenté directement par le champ, sans batterie',
      reasons: [
        'À 5,5 kW, la pompe AC standard est la solution la plus répandue : pièces et réparateurs disponibles dans le pays.',
        'Le variateur accepte aussi une entrée AC : l’ancien groupe de 15 kVA reste en secours pour les jours couverts.',
        'Le stockage se fait dans le château d’eau : aucune batterie à remplacer.',
      ],
      rejected: 'Batteries et onduleur : environ 12 M FCFA de batteries tous les 8 ans pour pomper la nuit une eau qu’un château d’eau stocke gratuitement.',
    },

    { type: 'heading', text: '2 · Le choix de la pompe' },
    {
      type: 'calc',
      title: 'Point de fonctionnement et moteur',
      steps: [
        { label: 'Débit de pointe visé, limité par le forage (18 m³/h)', formula: 'Q = 17 m³/h à HMT = 61 m' },
        { label: 'Puissance hydraulique', formula: 'P_{h} = \\frac{Q × HMT}{367} = \\frac{17 × 61}{367} ≈ 2,83 kW' },
        { label: 'Pompe immergée 6", rendement 66 % au point de fonctionnement', formula: 'P_{arbre} = \\frac{2,83}{0,66} ≈ 4,3 kW' },
        { label: 'Moteur 5,5 kW (chargé à 78 %), rendement 85 %, variateur 96 %', formula: 'P_{DC} = \\frac{4,3}{0,85 × 0,96} ≈ 5,25 kW' },
      ],
      result: 'Pompe 17 m³/h à 61 m, moteur immergé 5,5 kW 400 V : 5,25 kW à fournir par le champ à pleine vitesse',
    },
    {
      type: 'text',
      text: 'Une pompe centrifuge n’élève de l’eau qu’à partir d’une certaine vitesse. Les lois de similitude disent qu’en ralentissant, le débit baisse comme la vitesse, la hauteur comme son carré et la puissance comme son cube. Le matin, tant que le variateur ne peut pas faire tourner la pompe assez vite pour vaincre la hauteur géométrique, l’eau monte dans le tuyau mais n’arrive pas au château.',
    },
    {
      type: 'calc',
      title: 'Le seuil de pompage',
      steps: [
        { label: 'Hauteur à débit nul de la pompe à pleine vitesse (courbe du fabricant)', formula: 'H_{0} = 86 m' },
        { label: 'Hauteur géométrique en début de pompage (niveau à ≈ 30 m)', formula: 'H_{géo} = 30 + 3 + 15 = 48 m' },
        { label: 'Vitesse minimale : la hauteur varie comme le carré de la vitesse', formula: '\\frac{n_{min}}{n} = \\sqrt{\\frac{48}{86}} ≈ 0,75  →  37,5 Hz' },
        { label: 'Puissance correspondante : elle varie comme le cube de la vitesse', formula: 'P_{min} ≈ 0,75^{3} × 5,25 ≈ 2,2 kW' },
      ],
      result: 'Il faut déjà ≈ 2,2 kW, soit 40 % de la pleine puissance, avant le premier litre au château',
    },
    {
      type: 'note',
      text: 'C’est pour cela qu’on surdimensionne le champ par rapport au moteur (ratio 1,3 à 1,5) : le seuil de 2,2 kW est atteint plus tôt le matin et plus tard le soir, et la journée de pompage s’allonge. À midi, le surplus est simplement écrêté par le variateur.',
    },

    { type: 'heading', text: '3 · Le variateur solaire' },
    { type: 'illustration', name: 'pv-system', props: { highlight: 'inverter' }, caption: 'Ici, le « convertisseur » est un variateur de fréquence : il transforme le courant continu des panneaux en vitesse de pompe' },
    {
      type: 'table',
      headers: ['Fonction du variateur', 'Réglage', 'Rôle'],
      rows: [
        ['Recherche du point de puissance maximale (MPPT)', 'automatique', 'tirer du champ le maximum à chaque instant'],
        ['Fréquence minimale', '37 Hz', 'ne pas faire tourner la pompe sans débit'],
        ['Protection contre la marche à sec', 'sonde de niveau à 43 m + détection de sous-charge', 'arrêt, redémarrage après 30 min'],
        ['Château plein', 'flotteur en haut de la cuve', 'arrêt, redémarrage quand le niveau baisse d’1 m'],
        ['Rampe de démarrage et d’arrêt', '5 s', 'pas de coup de bélier dans la conduite'],
        ['Entrée AC de secours', 'groupe 15 kVA existant', 'pompage les jours très couverts'],
      ],
    },
    { type: 'fiche', id: 'pv-inverter-types', why: 'Les familles d’onduleurs et de convertisseurs photovoltaïques.' },

    { type: 'heading', text: '4 · Le câble du moteur' },
    {
      type: 'calc',
      title: 'Câble immergé du variateur au moteur',
      steps: [
        { label: 'Courant nominal du moteur 5,5 kW, rendement 0,84, cos φ 0,82', formula: 'I = \\frac{5 500}{\\sqrt{3} × 400 × 0,84 × 0,82} ≈ 12 A' },
        { label: 'Longueur : 45 m dans le forage + 20 m jusqu’au local', formula: 'L = 65 m, câble immergé 4G4 mm²' },
        { label: 'Chute de tension', formula: 'ΔU = \\frac{\\sqrt{3} × 0,0225 × 65 × 12 × 0,82}{4} ≈ 6,2 V  →  1,6 % ✓' },
      ],
      result: 'Câble immergé 4G4 mm², chute de tension 1,6 %',
    },
    {
      type: 'dialogue',
      speaker: 'Yao Kouamé',
      role: 'team',
      text: 'Avec un variateur, 65 m de câble, ce n’est pas rien. La tension de sortie est découpée : sur un câble long, des pointes de tension remontent jusqu’au bobinage et l’usent. Le fabricant demande un filtre de sortie au-delà de 50 m. On le met, ça coûte moins cher qu’un rebobinage au fond d’un forage.',
    },
    {
      type: 'bullets',
      items: [
        'Clapet anti-retour au-dessus de la pompe et un second en tête de forage : la colonne reste pleine à l’arrêt.',
        'Câble de sécurité en inox pour remonter la pompe, jamais par le câble électrique ni par le tuyau.',
        'Jonction câble moteur–câble immergé par manchon thermorétractable étanche, testée à l’isolement avant la descente.',
        'Sens de rotation vérifié au démarrage : à l’envers, une pompe immergée débite trois fois moins sans faire de bruit.',
      ],
    },

    { type: 'heading', text: '5 · Ce que disent les normes' },
    {
      type: 'norms',
      title: 'Pompes, moteurs et variateurs',
      rows: [
        { norm: 'IEC 62253', rule: 'Pompage photovoltaïque : conception, essais de performance du sous-ensemble moteur-pompe-variateur.', result: 'débit garanti à l’éclairement donné' },
        { norm: 'IEC 61800-5-1', rule: 'Sécurité des entraînements électriques à vitesse variable.', result: 'variateur certifié' },
        { norm: 'IEC TS 61800-8', rule: 'Tensions aux bornes du moteur alimenté par variateur, influence de la longueur de câble.', result: 'filtre au-delà de 50 m' },
        { norm: 'IEC 60034-1', rule: 'Machines tournantes : caractéristiques assignées, échauffement.', result: 'moteur 5,5 kW chargé à 78 %' },
      ],
    },
    {
      type: 'regional',
      text: 'Le meilleur matériel ne sert à rien s’il ne se répare pas. Fanta choisit une marque de pompe représentée dans la capitale, avec un stock de pièces, et fait former un artisan réparateur du canton. Dans beaucoup de programmes, c’est le réseau d’artisans réparateurs, plus que la technologie, qui distingue les forages qui marchent de ceux qui sont abandonnés.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'En pompage solaire, on stocke de l’eau en hauteur plutôt que de l’électricité.',
        'P_h = Q × HMT / 367 ; la pompe se choisit sur son point de fonctionnement, sous le débit maximal du forage.',
        'Lois de similitude : Q ∝ n, H ∝ n², P ∝ n³ ; il existe un seuil de puissance sous lequel l’eau n’arrive pas.',
        'Le variateur solaire assure MPPT, protection contre la marche à sec, arrêt sur château plein et démarrage progressif.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'À 45 Hz (90 % de la vitesse), quels débit, hauteur à débit nul et puissance obtient-on, d’après les lois de similitude ?',
      solution: ['Débit ≈ 0,9 × 17 = 15,3 m³/h (à hauteur proportionnelle) ; H₀ = 0,81 × 86 ≈ 70 m.', 'Puissance ≈ 0,73 × 5,25 ≈ 3,8 kW. En pratique, à 61 m, le débit réel baisse davantage, car la hauteur à vaincre ne diminue pas.'],
    },
    {
      type: 'exercise',
      question: 'Le château d’eau était à 20 m au lieu de 15 m. Quelle puissance minimale faudrait-il avant le premier litre ?',
      solution: ['H_géo = 30 + 3 + 20 = 53 m ; n_min/n = √(53/86) ≈ 0,785.', 'P_min ≈ 0,785³ × 5,25 ≈ 2,5 kW : le pompage commencerait plus tard le matin.'],
    },
  ],
};
