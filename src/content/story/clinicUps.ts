import { TopicContent } from '../types';

export const clinicUpsContent: TopicContent = {
  title: 'Onduleurs et bloc opératoire',
  subtitle: 'Au bloc et en réanimation, même dix secondes de noir sont inacceptables, et un simple défaut d’isolement ne doit pas couper un respirateur. Awa choisit le type d’onduleur, ses batteries et son by-pass, vérifie qu’un court-circuit est encore coupé derrière lui, puis explique l’IT médical.',
  blocks: [
    { type: 'scene', text: 'Mois 3 · Visite du futur bloc opératoire' },
    {
      type: 'objectives',
      items: [
        'Distinguer les trois types d’onduleurs (IEC 62040-3) et choisir le bon.',
        'Dimensionner l’onduleur et ses batteries, au vrai régime de décharge.',
        'Organiser la redondance (N+1, 2N) et le by-pass.',
        'Vérifier qu’un court-circuit est coupé quand seul l’onduleur alimente.',
        'Comprendre l’IT médical du bloc et dimensionner son transformateur d’isolement.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '2 × 20 kVA', label: 'onduleurs on-line VFI, N+1' },
        { value: '15 min', label: 'autonomie sur batteries' },
        { value: '32 × 12 V', label: 'blocs de 40 Ah par onduleur' },
        { value: 'courbe B', label: 'pour les départs derrière l’onduleur' },
        { value: '≤ 10 kVA', label: 'transformateur d’isolement par salle' },
      ],
    },
    { type: 'illustration', name: 'clinic-tiers', props: { highlight: 'ups' }, caption: 'L’onduleur alimente le niveau vital sans aucune coupure' },
    {
      type: 'dialogue',
      speaker: 'Dr Aïcha Bello',
      role: 'client',
      text: 'Dix secondes pour que le groupe reprenne, c’est trop pour un patient intubé. Comment fait-on ?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Avec un onduleur « en ligne ». Il transforme en permanence l’alternatif du réseau en continu, qui charge ses batteries, puis refabrique un alternatif propre pour les appareils. Quand le réseau disparaît, rien ne change pour les appareils : les batteries étaient déjà dans le circuit. Il n’y a pas de bascule, donc pas de coupure.',
    },

    { type: 'heading', text: '1 · Quel type d’onduleur ?' },
    {
      type: 'table',
      headers: ['Type (IEC 62040-3)', 'Fonctionnement', 'Au passage sur batterie', 'Usage'],
      rows: [
        ['VFD : off-line (attente passive)', 'la charge est sur le réseau ; l’onduleur démarre à la coupure', '4 à 10 ms de coupure', 'ordinateur de bureau'],
        ['VI : line-interactive', 'réseau corrigé par un autotransformateur ; onduleur en attente', '2 à 4 ms', 'petits serveurs, caisses'],
        ['VFI : on-line double conversion', 'redresseur + batterie + onduleur en permanence', 'aucune coupure', 'santé, data centers, process'],
      ],
    },
    {
      type: 'decision',
      title: 'Type d’onduleur',
      choice: 'On-line double conversion (VFI), redresseur à IGBT',
      reasons: [
        'Aucune coupure, et une tension de sortie indépendante des creux et des harmoniques du réseau ou du groupe.',
        'Redresseur à IGBT : courant d’entrée presque sinusoïdal (THD_i < 5 %, facteur de puissance ≈ 0,99), sans effet sur les groupes.',
      ],
      rejected: 'Line-interactive : moins cher et meilleur rendement, mais 2 à 4 ms de bascule et une sortie qui suit les défauts du réseau : inacceptable pour un respirateur.',
    },

    { type: 'heading', text: '2 · Dimensionner l’onduleur et ses batteries' },
    { type: 'formula', text: 'Niveau vital : 18 kW  →  S = \\frac{18}{0,9} = 20 kVA' },
    {
      type: 'text',
      text: 'Awa applique la même logique que pour les groupes : deux onduleurs de 20 kVA en parallèle, chacun capable de porter seul tout le niveau vital (N+1). L’un peut être en panne ou en maintenance sans que le bloc le sente.',
    },
    {
      type: 'dialogue',
      speaker: 'Serge (technicien biomédical)',
      role: 'team',
      text: 'Et quelle autonomie sur batteries ? Une heure ?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Les batteries n’ont qu’à couvrir le démarrage des groupes, normalement dix secondes. Je prévois quand même 15 minutes : si le premier groupe ne démarre pas et que le second hésite aussi, l’équipe a le temps de terminer un geste en cours et de passer en mode dégradé. Une heure coûterait très cher en batteries pour un cas qui n’arrive pas.',
    },
    { type: 'formula', text: 'Énergie pour 15 min : E = \\frac{18 kW × 0,25 h}{0,94} ≈ 4,8 kWh  (rendement de l’onduleur ≈ 94 %)' },
    {
      type: 'calc',
      title: 'Des kWh aux blocs de batteries (plomb étanche VRLA, 25 °C)',
      steps: [
        { label: 'Puissance demandée aux batteries', formula: 'P_{bat} = \\frac{18 000}{0,94} ≈ 19 100 W' },
        { label: 'Bus continu de 32 blocs de 12 V ; tension de fin de décharge 1,75 V par élément', formula: 'U_{fin} = 32 × 6 × 1,75 = 336 V   ;   I_{max} = \\frac{19 100}{336} ≈ 57 A' },
        { label: 'À ce régime rapide (15 min), un bloc ne rend qu’environ la moitié de sa capacité en 10 h', formula: 'C_{10} ≈ \\frac{57 × 0,25}{0,5} ≈ 29 Ah' },
        { label: 'Facteur de vieillissement (fin de vie à 80 % de capacité)', formula: 'C = 29 × 1,25 ≈ 36 Ah  →  blocs de 40 Ah' },
      ],
      result: 'Par onduleur : 32 blocs 12 V 40 Ah (≈ 15 kWh nominaux, pour 4,8 kWh réellement utiles)',
    },
    {
      type: 'note',
      text: 'Les 15 kWh « sur l’étiquette » ne contredisent pas les 4,8 kWh du calcul : une batterie au plomb déchargée en 15 minutes rend beaucoup moins que sa capacité nominale, et il faut garder 15 minutes en fin de vie, pas seulement le premier jour. On dimensionne toujours avec les tables de décharge à puissance constante du fabricant.',
    },
    {
      type: 'decision',
      title: 'Technologie des batteries',
      choice: 'Lithium-fer-phosphate (LFP) pour le local onduleurs, malgré un prix d’achat plus élevé',
      reasons: [
        'Durée de vie de 10 à 15 ans contre 3 à 5 ans pour du VRLA dans un local à 30 °C : un seul remplacement évité paie la différence.',
        'Deux à trois fois plus légères et compactes : le local prévu au plan suffit sans renforcer la dalle.',
        'Système de gestion (BMS) qui surveille chaque élément et alerte Serge avant la panne.',
      ],
      rejected: 'VRLA classique : 40 % moins cher à l’achat, mais très sensible à la chaleur et à remplacer deux ou trois fois pendant la vie de la clinique.',
    },

    { type: 'heading', text: '3 · By-pass et redondance' },
    {
      type: 'text',
      text: 'Chaque onduleur possède un by-pass statique : un commutateur électronique qui, en quelques millisecondes, relie directement la charge au TGBT secouru si l’onduleur tombe en panne ou est surchargé. Un by-pass manuel de maintenance, à l’extérieur de l’onduleur, permet en plus de le sortir complètement pour réparation sans couper le bloc.',
    },
    {
      type: 'table',
      headers: ['Architecture', 'Principe', 'Ce qu’elle tolère'],
      rows: [
        ['N', 'juste la puissance nécessaire', 'rien : une panne = by-pass sur le réseau'],
        ['N+1', 'un module de plus que nécessaire, en parallèle', 'la panne ou la maintenance d’un onduleur'],
        ['2N', 'deux chaînes complètes, sources et tableaux séparés jusqu’aux prises', 'la perte d’une chaîne entière, tableau compris'],
      ],
    },
    {
      type: 'text',
      text: 'Awa garde le N+1 pour la clinique, mais elle double les prises vitales du bloc : chaque salle a des prises alimentées par l’onduleur A et d’autres par l’onduleur B, repérées par couleur. Les appareils à double alimentation (certains respirateurs, moniteurs centraux) sont branchés sur les deux. C’est un pas vers le 2N, là où il compte vraiment.',
    },

    { type: 'heading', text: '4 · Un court-circuit derrière l’onduleur' },
    {
      type: 'text',
      text: 'Un onduleur protège ses transistors : en court-circuit, il limite son courant à environ 2 à 3 fois son courant nominal, pendant une centaine de millisecondes. Si le by-pass est disponible, il bascule et le réseau fournit le courant de défaut. Mais si le réseau est absent, seul l’onduleur alimente : le courant de défaut est faible, et un disjoncteur mal choisi ne le verra pas.',
    },
    {
      type: 'calc',
      title: 'Court-circuit sur un départ vital, réseau absent',
      steps: [
        { label: 'Courant nominal d’un onduleur de 20 kVA', formula: 'I_n = \\frac{20 000}{\\sqrt{3} × 400} ≈ 29 A' },
        { label: 'Courant de court-circuit limité par l’onduleur (≈ 2,5 I_n, 100 ms)', formula: 'I_{cc} ≈ 2,5 × 29 ≈ 72 A' },
        { label: 'Disjoncteur C16 : seuil magnétique maximal', formula: '10 × 16 = 160 A > 72 A  ✗  (coupure par le thermique, en secondes)' },
        { label: 'Disjoncteur B10 : seuil magnétique maximal', formula: '5 × 10 = 50 A < 72 A  ✓  (coupure en moins de 10 ms)' },
      ],
      result: 'Derrière l’onduleur, des départs de petit calibre en courbe B ; sinon l’onduleur s’arrête avant que le défaut ne soit éliminé',
    },
    {
      type: 'decision',
      title: 'Départs du tableau vital',
      choice: 'Disjoncteurs courbe B, calibre ≤ 10 A par circuit de prises vitales',
      reasons: [
        'Le défaut est éliminé par le magnétique même avec le seul courant de l’onduleur.',
        'Un circuit en défaut est coupé avant que l’onduleur ne se mette en protection : les autres salles restent alimentées.',
      ],
      rejected: 'Un C16 commun à plusieurs prises : sur batterie, un court-circuit ferait décrocher l’onduleur entier, donc tout le bloc.',
    },

    { type: 'heading', text: '5 · Onduleur et groupe électrogène' },
    {
      type: 'bullets',
      items: [
        'Montée en charge progressive (« walk-in ») : au retour du groupe, l’onduleur reprend sa charge en 10 à 20 s, pour ne pas faire chuter la fréquence.',
        'Le redresseur à IGBT absorbe un courant propre : le groupe peut être de puissance proche. Avec un ancien redresseur à thyristors, on prenait un groupe de 2 à 3 fois la puissance de l’onduleur.',
        'Recharge des batteries : jusqu’à 10 % de puissance en plus à l’entrée de l’onduleur, à compter dans le bilan des groupes.',
        'Synchronisation : l’onduleur suit la fréquence du groupe, avec une fenêtre élargie (± 2 Hz) pour que le by-pass reste disponible.',
      ],
    },

    { type: 'heading', text: '6 · Pourquoi pas de différentiel 30 mA au bloc ?' },
    {
      type: 'dialogue',
      speaker: 'Dr Aïcha Bello',
      role: 'client',
      text: 'Dans les maisons, on met des différentiels 30 mA partout pour la sécurité. Et ici ?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Justement, pas pour les appareils de survie au bloc. Imaginez qu’un câble d’éclairage de la table s’abîme pendant l’opération : le différentiel couperait le circuit… et le respirateur branché dessus. Pour ces circuits, on utilise un autre régime de neutre, l’IT médical, qui laisse fonctionner l’installation au premier défaut et donne seulement l’alarme.',
    },
    {
      type: 'bullets',
      items: [
        'Chaque salle d’opération est alimentée par un transformateur d’isolement 230 V / 230 V : son secondaire n’est pas relié à la terre.',
        'Au premier défaut d’isolement, aucun courant dangereux ne circule, car le circuit n’a pas de retour par la terre : on peut continuer d’opérer.',
        'Un contrôleur permanent d’isolement (CPI) surveille la résistance d’isolement et déclenche une alarme sonore et lumineuse dans la salle dès qu’elle baisse.',
        'L’électricien recherche et répare le défaut après l’intervention : un second défaut, lui, provoquerait une coupure.',
        'Toutes les masses métalliques de la salle sont reliées entre elles (liaison équipotentielle) pour qu’aucune tension n’apparaisse entre deux objets que l’on touche.',
      ],
    },
    {
      type: 'calc',
      title: 'Transformateur d’isolement d’une salle d’opération',
      steps: [
        { label: 'Appareils de la salle : scialytique, bistouri électrique, moniteurs, respirateur, pousse-seringues (avec simultanéité)', formula: 'P ≈ 5,5 kW  →  S ≈ \\frac{5,5}{0,9} ≈ 6,1 kVA' },
        { label: 'IEC 60364-7-710 : puissance du transformateur entre 0,5 et 10 kVA', formula: 'S_{transfo} = 8 kVA (marge pour un appareil de plus)' },
        { label: 'Seuils du contrôleur d’isolement', formula: 'alarme si R_{isolement} < 50 kΩ' },
      ],
      result: 'Un transformateur d’isolement de 8 kVA par salle, derrière les onduleurs, avec son CPI et son report d’alarme',
    },
    {
      type: 'note',
      text: 'Le schéma TT de la villa et l’IT médical poursuivent le même but, protéger les personnes, avec deux logiques opposées. En TT, on coupe dès qu’il y a une fuite. En IT, on garantit qu’un premier défaut n’est pas dangereux, et on ne coupe pas, parce qu’au bloc la coupure elle-même est le danger. Dans les chambres et les couloirs, en revanche, Awa utilise des disjoncteurs différentiels 30 mA (RCBO) par circuit : un défaut ne coupe qu’une chambre.',
    },
    { type: 'fiche', id: 'generator-ups-ats', why: 'Types d’onduleurs (off-line, line-interactive, on-line) et dimensionnement.' },
    { type: 'fiche', id: 'electrical-safety', why: 'Les schémas de liaison à la terre TT, TN et IT comparés.' },
    { type: 'fiche', id: 'earthing', why: 'Mise à la terre et liaisons équipotentielles.' },

    { type: 'heading', text: '7 · Ce que disent les normes' },
    {
      type: 'norms',
      title: 'Onduleurs et alimentation du bloc',
      rows: [
        { norm: 'IEC 62040-3', rule: 'Classement des onduleurs par dépendance à l’entrée : VFD, VI, VFI ; performances dynamiques de sortie.', result: 'VFI-SS-111' },
        { norm: 'IEC 60364-7-710', rule: 'Locaux médicaux groupe 2 : IT médical, transformateur ≤ 10 kVA, CPI, source de sécurité ≤ 0,5 s pour l’éclairage opératoire.', result: '8 kVA par salle, onduleur' },
        { norm: 'NF C 15-211', rule: 'Déclinaison française des installations dans les locaux à usage médical.', result: 'idem IEC 60364-7-710' },
        { norm: 'NFPA 99 / NEC 517', rule: 'Système « essential electrical » en trois branches (vie, critique, équipement) ; reprise ≤ 10 s ; « isolated power systems » au bloc si l’analyse de risque l’exige.', result: '10 s au lieu de 15 s' },
      ],
    },
    {
      type: 'regional',
      text: 'La durée de vie des batteries d’onduleur chute avec la chaleur : en règle approximative, elle est divisée par deux pour chaque tranche de 10 °C au-dessus de 25 °C. Dans un local technique à 35 °C, des batteries prévues pour 5 ans peuvent lâcher au bout de 2 à 3 ans. Le local onduleurs-batteries doit être climatisé, et cette clim placée sur le niveau essentiel. Exigez aussi un contrat de maintenance local : un onduleur dont personne ne sait réparer le redresseur dans le pays reste en by-pass pendant des mois.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Pour le vital, un onduleur on-line double conversion (VFI) : aucune coupure au passage sur batterie.',
        'Les batteries se dimensionnent au vrai régime de décharge et en fin de vie, pas avec les kWh de l’étiquette.',
        'N+1 avec by-pass statique et by-pass de maintenance ; double alimentation des prises vitales là où c’est critique.',
        'Sur batterie, l’onduleur limite le courant de court-circuit à 2 ou 3 I_n : départs en courbe B et petits calibres.',
        'Au bloc, l’IT médical (transformateur ≤ 10 kVA + CPI) évite de couper un appareil de survie au premier défaut.',
        'Les batteries craignent la chaleur : local climatisé, ou technologie lithium.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Quelle énergie de batterie faudrait-il pour 30 minutes d’autonomie au lieu de 15 ?',
      solution: ['E = 18 × 0,5 / 0,94 ≈ 9,6 kWh, le double.', 'Le coût et l’encombrement des batteries doublent aussi : on choisit l’autonomie en fonction du temps réellement nécessaire avant la reprise par les groupes.'],
    },
    {
      type: 'exercise',
      question: 'L’alarme du contrôleur d’isolement retentit en pleine opération. Que doit faire l’équipe ?',
      solution: [
        'Rien d’urgent : au premier défaut, l’installation reste sûre et alimentée. L’équipe termine l’intervention.',
        'Ensuite, le service technique cherche le défaut (souvent un appareil ou un câble abîmé) et le répare avant la prochaine opération, car un second défaut provoquerait une coupure.',
      ],
    },
    {
      type: 'exercise',
      question: 'Derrière un onduleur de 10 kVA monophasé (I_n ≈ 43 A, courant de court-circuit limité à 2 I_n), un C10 protège-t-il correctement un circuit sur batterie ?',
      solution: [
        'I_{cc} ≈ 2 × 43 = 86 A ; seuil magnétique maximal d’un C10 : 100 A > 86 A : pas de coupure instantanée garantie.',
        'Un B10 (50 A maximum) convient. Avec un by-pass disponible, le réseau fournirait le courant et le C10 déclencherait, mais on ne compte pas sur le by-pass pendant une coupure.',
      ],
    },
  ],
};
