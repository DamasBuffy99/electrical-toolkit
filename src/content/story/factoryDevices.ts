import { TopicContent } from '../types';
import { SLIDES } from '../slides';

export const factoryDevicesContent: TopicContent = {
  title: 'ACB, disjoncteurs-moteurs et fusibles',
  subtitle: 'Avec un transformateur de 400 kVA, le TGBT de Tropica change d’échelle. Awa choisit un disjoncteur ouvert pour l’arrivée, des disjoncteurs-moteurs coordonnés avec les contacteurs pour les pompes, et compare sa solution IEC à ce qu’aurait donné le code américain sur la machine importée.',
  blocks: [
    { type: 'scene', text: 'Mois 3 · Revue de l’offre du tableautier, avec Paul et Clarisse' },
    {
      type: 'objectives',
      items: [
        'Choisir entre MCCB et ACB pour l’arrivée d’un transformateur de 400 kVA.',
        'Comprendre la catégorie B et le courant de courte durée I_{cw}.',
        'Protéger un moteur : disjoncteur-moteur, classe de déclenchement, coordination type 1 ou 2.',
        'Vérifier la tenue d’un petit câble au court-circuit avec l’énergie I^{2}t.',
        'Situer les fusibles gG, aM et aR, et comparer la règle IEC à la NEC 430.52.',
        'Lire le tableau de répartition de l’armoire moteurs (MCC).',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: 'ACB 800 A', label: 'arrivée, I_r = 630 A, catégorie B' },
        { value: '14,4 kA', label: 'court-circuit au TGBT' },
        { value: 'Type 2', label: 'coordination des départs moteurs' },
        { value: 'Classe 10', label: 'pompes ; classe 20 pour le compresseur' },
        { value: '296 A', label: 'appel de l’armoire moteurs, réserve comprise' },
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Clarisse Houndé (achats)',
      role: 'team',
      text: 'Le tableautier propose un MCCB de 630 A pour l’arrivée, et une variante avec un disjoncteur ouvert de 800 A, beaucoup plus cher. Le MCCB fait 630 A, c’est exactement le réglage que vous voulez. Pourquoi payer plus ?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Parce qu’au TGBT de Tropica, la question n’est pas seulement le calibre. C’est la sélectivité à 14 kA, et la possibilité d’intervenir sans arrêter la production. Je vous montre le calcul.',
    },

    { type: 'heading', text: '1 · MCCB ou ACB pour l’arrivée ?' },
    {
      type: 'text',
      text: 'Le disjoncteur ouvert (ACB, « air circuit breaker », IEC 60947-2) est l’appareil des fortes intensités, de 630 à 6 300 A. Il est souvent débrochable : on le sort de son châssis comme un tiroir pour l’entretenir ou le remplacer en quelques minutes. Il a un mécanisme à ressorts, des bobines d’ouverture et de fermeture pilotables, et surtout un I_{cw} élevé : il sait supporter un court-circuit pendant une durée donnée sans déclencher. C’est la catégorie B.',
    },
    {
      type: 'table',
      headers: ['', 'MCCB 630 A', 'ACB 800 A'],
      rows: [
        ['Catégorie (IEC 60947-2)', 'A : pas de tenue de courte durée garantie', 'B : I_{cw} assigné, par ex. 50 kA 1 s'],
        ['Instantané', 'toujours actif, ≤ 15 I_n ≈ 9,5 kA', 'peut être désactivé (I_i = OFF)'],
        ['Maintenance', 'fixe ou embrochable', 'débrochable, contacts remplaçables'],
        ['Accessoires', 'limités', 'motorisation, bobines, contacts de position, communication'],
        ['Évolution', 'bloqué à 630 A', 'jusqu’à 800 A par simple réglage'],
      ],
    },
    {
      type: 'calc',
      title: 'Sélectivité entre l’arrivée et le départ de l’armoire moteurs (400 A)',
      steps: [
        { label: 'Court-circuit sur le départ, juste en aval du TGBT', formula: 'I_{cc} ≈ 14,4 kA' },
        { label: 'MCCB 630 A : son instantané coupe au plus à', formula: 'I_i ≤ 15 × 630 ≈ 9,5 kA < 14,4 kA' },
        { label: 'Donc, avec le MCCB', formula: 'sélectivité limitée à 9,5 kA : au-delà, l’arrivée coupe aussi' },
        { label: 'ACB : instantané désactivé, court retard seul', formula: 'I_{sd} = 10 × I_r = 6,3 kA   ;   t_{sd} = 0,2 s' },
        { label: 'Il doit tenir le défaut pendant ce retard', formula: 'I_{cw} = 50 kA (1 s) ≥ 14,4 kA ✓' },
      ],
      result: 'Avec l’ACB, sélectivité totale jusqu’à 14,4 kA : seul le départ en défaut coupe',
    },
    {
      type: 'decision',
      title: 'Arrivée du TGBT',
      choice: 'ACB 800 A débrochable, déclencheur LSIG, I_r = 630 A',
      reasons: [
        'Catégorie B : I_i désactivé, la sélectivité devient totale jusqu’au court-circuit maximal.',
        'Débrochable : un appareil de rechange se met en place sans démonter les barres, à la prochaine panne Paul gagne des heures.',
        'Fonction G : un défaut à la terre de quelques centaines d’ampères, que le court retard ne verrait pas, est coupé en 0,4 s.',
        'Réserve : si Tropica passe un jour à 500 kVA (722 A), on règle I_r sans changer d’appareil.',
      ],
      rejected: 'MCCB 630 A : 40 % moins cher, mais sélectivité limitée à 9,5 kA, aucune marge de puissance, et un remplacement qui impose d’arrêter toute l’usine.',
    },
    {
      type: 'table',
      headers: ['Réglage de l’ACB', 'Valeur', 'Justification'],
      rows: [
        ['L : I_r, t_r', '630 A ; 12 s à 6 I_r', 'au-dessus de 577 A (transformateur), sous la capacité des barres'],
        ['S : I_{sd}, t_{sd}', '6,3 kA ; 0,2 s', 'cran au-dessus du départ 400 A (0,1 s)'],
        ['I : I_i', 'OFF', 'sélectivité jusqu’à 14,4 kA, permise par I_{cw}'],
        ['G : I_g, t_g', '240 A ; 0,4 s', 'défauts terre résistants, en schéma TN-S'],
      ],
    },
    { type: 'image', source: SLIDES['af-5'], caption: 'Calibre de déclenchement (AT) et taille de boîtier (AF) : la même logique vaut pour l’ACB, réglé à 630 A dans un châssis de 800 A' },

    { type: 'heading', text: '2 · Protéger les moteurs : le disjoncteur-moteur' },
    {
      type: 'text',
      text: 'Pour les pompes, Awa a choisi à l’étape 3 des disjoncteurs-moteurs réglés au courant de plaque. Un disjoncteur-moteur (MPCB, IEC 60947-4-1 et 60947-2) réunit trois fonctions : un thermique réglable, adapté à l’échauffement d’un moteur ; un magnétique fixe, autour de 13 fois le haut de sa plage ; et une détection de perte de phase, qui déclenche si une phase manque, car un moteur qui tourne sur deux phases surchauffe en quelques minutes.',
    },
    {
      type: 'table',
      headers: ['Classe de déclenchement', 'Temps maxi à 7,2 I_r (démarrage à froid)', 'Moteurs'],
      rows: [
        ['10A / 10', '2 à 10 s', 'pompes, ventilateurs : démarrage rapide'],
        ['20', '6 à 20 s', 'compresseurs, broyeurs, fortes inerties'],
        ['30', '9 à 30 s', 'centrifugeuses, très longues accélérations'],
      ],
    },
    {
      type: 'decision',
      title: 'Classes de déclenchement',
      choice: 'Classe 10 pour les pompes, classe 20 pour le compresseur',
      reasons: [
        'Une pompe atteint sa vitesse en 1 à 3 s : la classe 10 la protège au plus près.',
        'Le compresseur, sur démarreur progressif, met environ 12 s à accélérer : en classe 10, il déclencherait à chaque démarrage.',
      ],
      rejected: 'Classe 30 « pour être tranquille » : le moteur bloqué chaufferait 30 s avant la coupure, ses bobinages vieilliraient vite.',
    },
    {
      type: 'calc',
      title: 'Tenue au court-circuit du câble de pompe (6 mm², XLPE)',
      steps: [
        { label: 'Court-circuit à l’armoire moteurs', formula: 'I_{cc} ≈ 11 kA' },
        { label: 'Méthode simple, avec une coupure en 0,1 s', formula: 'S ≥ \\frac{I_{cc} × \\sqrt{t}}{k} = \\frac{11 000 × \\sqrt{0,1}}{143} ≈ 24 mm²   ✗ ?' },
        { label: 'Mais le disjoncteur-moteur est limiteur : on compare des énergies', formula: 'k^{2} × S^{2} = 143^{2} × 6^{2} ≈ 736 000 A^{2}s' },
        { label: 'Énergie laissée passer à 11 kA (courbe I^{2}t du fabricant)', formula: 'I^{2}t ≈ 60 000 A^{2}s ≤ 736 000 A^{2}s ✓' },
      ],
      result: 'Le 6 mm² tient : un appareil limiteur coupe en 3 à 5 ms, bien avant que le câble chauffe',
    },
    { type: 'image', source: require('../../../assets/reference/iec_cable_size_selection.png'), caption: 'Valeurs de k selon l’isolant (IEC 60364-4-43) et temps d’élimination usuels : 0,1 s pour MCCB et MPCB, 0,2 s pour ACB à retard' },

    { type: 'heading', text: '3 · La coordination : type 1 ou type 2 ?' },
    {
      type: 'text',
      text: 'Un départ moteur associe un disjoncteur (ou des fusibles), un contacteur et un relais thermique. Lors d’un court-circuit, le disjoncteur coupe ; mais que devient le contacteur, traversé par plusieurs kiloampères pendant quelques millisecondes ? La norme IEC 60947-4-1 définit deux niveaux, vérifiés par essais à un courant de court-circuit conditionnel I_q.',
    },
    {
      type: 'table',
      headers: ['Coordination', 'Après un court-circuit', 'Conséquence'],
      rows: [
        ['Type 1', 'aucun danger pour les personnes, mais le contacteur et le relais peuvent être détruits', 'réparation avant redémarrage'],
        ['Type 2', 'aucun dommage ; une légère soudure des contacts, facilement séparable, est admise', 'redémarrage après inspection rapide'],
      ],
    },
    {
      type: 'decision',
      title: 'Coordination des départs moteurs',
      choice: 'Coordination type 2, associations tirées des tables du fabricant à I_q = 50 kA',
      reasons: [
        'Ibrahim a perdu 2 000 litres de jus pour une pompe : une remise en service rapide vaut plus que l’écart de prix.',
        'I_q = 50 kA couvre largement les 11 kA de l’armoire, même si le transformateur grossit.',
        'On ne compose pas soi-même : seules les associations testées par le fabricant sont garanties.',
      ],
      rejected: 'Type 1 : acceptable pour une ventilation de confort, pas pour une pompe de pasteurisation.',
    },

    { type: 'heading', text: '4 · Et les fusibles ?' },
    {
      type: 'text',
      text: 'Les fusibles restent très présents en industrie : ils coupent des courants énormes (jusqu’à 100 kA et plus), limitent fortement l’énergie et ne vieillissent presque pas. Leur défaut : il faut les remplacer, et une seule cartouche fondue laisse un moteur sur deux phases. On les choisit par leur classe de fonctionnement (IEC 60269).',
    },
    {
      type: 'table',
      headers: ['Classe', 'Protège contre', 'Usage'],
      rows: [
        ['gG', 'surcharges et courts-circuits', 'câbles, départs généraux'],
        ['aM', 'courts-circuits seulement', 'moteurs, associés à un relais thermique'],
        ['gR / aR', 'courts-circuits, très rapide', 'semi-conducteurs : variateurs, démarreurs progressifs'],
      ],
    },
    { type: 'image', source: SLIDES['iec-7'], caption: 'Choix d’un fusible selon IEC 60269 : calibre, classe et pouvoir de coupure' },
    {
      type: 'text',
      text: 'Chez Tropica, Awa garde des disjoncteurs pour tous les départs, mais elle place des fusibles aR en amont du démarreur progressif du compresseur, comme le demande son fabricant : seuls ces fusibles ultra-rapides protègent ses thyristors lors d’un court-circuit en aval.',
    },

    { type: 'heading', text: '5 · IEC ou NEC : la machine importée' },
    {
      type: 'text',
      text: 'La nouvelle étiqueteuse vient d’Amérique du Nord, avec un schéma au code américain (NEC). Paul demande pourquoi les calibres y sont si différents. Comparons pour une pompe de 15 kW.',
    },
    { type: 'image', source: require('../../../assets/reference/nec_table_430_52.png'), caption: 'NEC 430.52 : calibre maximal du dispositif de court-circuit en % du courant à pleine charge des tables (250 % pour un disjoncteur à temps inverse)' },
    {
      type: 'calc',
      title: 'Même pompe, deux philosophies',
      steps: [
        { label: 'IEC : un disjoncteur-moteur réglé au courant de plaque', formula: 'I_r = 28,3 A   ;   I_m ≈ 13 × 32 ≈ 420 A' },
        { label: 'NEC : courant de la table 430.250 (20 HP, 460 V), et non de la plaque', formula: 'FLC = 27 A' },
        { label: 'NEC 430.52 : disjoncteur à temps inverse au plus à 250 %', formula: 'I_{CB} ≤ 2,5 × 27 = 67,5 A  →  70 A (calibre normalisé au-dessus, 430.52(C)(1))' },
        { label: 'NEC 430.32 : relais de surcharge séparé, au plus à 125 % de la plaque', formula: 'I_{OL} ≤ 1,25 × 28,3 ≈ 35 A' },
      ],
      result: 'IEC : un seul appareil réglé à 28,3 A. NEC : disjoncteur 70 A pour le court-circuit + relais thermique ≤ 35 A pour la surcharge',
    },
    {
      type: 'text',
      text: 'Aucune des deux n’est fausse : la NEC sépare nettement la protection court-circuit (calibrée large pour laisser démarrer) et la protection surcharge (le relais). L’IEC réunit souvent les deux dans un disjoncteur-moteur. Ce qu’il ne faut pas faire, c’est mélanger : un disjoncteur de 70 A sans relais thermique laisserait la pompe griller, exactement comme celle qu’Ibrahim a perdue l’an dernier.',
    },

    { type: 'heading', text: '6 · Le tableau de répartition de l’armoire moteurs' },
    {
      type: 'panelSchedule',
      panel: {
        name: 'MCC salle des machines Tropica',
        location: 'Salle des machines, à 70 m du TGBT',
        voltage: '230/400 V · 3P+N+PE · TN-S',
        panelType: 'Armoire MCC forme 3b',
        mounting: 'Au sol, accès avant',
        scRating: 'Icw 25 kA 1 s · Iq 50 kA',
        main: 'Inter-sectionneur 4P 400 A',
        feeder: '4 × 150 mm² Cu + PE 95 mm², MCCB 400 A réglé 320 A',
        left: [
          { desc: 'Compresseur 55 kW (démarreur progr.)', kva: 68, cb: 'MCCB 125/98 A + aR', poles: 3, wire: '4G35 mm²' },
          { desc: 'Pompe 1 · 15 kW', kva: 19.6, cb: 'DM 25–32 A cl.10', poles: 3, wire: '4G6 mm²' },
          { desc: 'Pompe 3 · 15 kW', kva: 19.6, cb: 'DM 25–32 A cl.10', poles: 3, wire: '4G6 mm²' },
          { desc: 'Pompe de nettoyage · 11 kW', kva: 14.5, cb: 'DM 20–25 A cl.10', poles: 3, wire: '4G4 mm²' },
        ],
        right: [
          { desc: 'Pompe 2 · 15 kW', kva: 19.6, cb: 'DM 25–32 A cl.10', poles: 3, wire: '4G6 mm²' },
          { desc: 'Pompe 4 · 15 kW', kva: 19.6, cb: 'DM 25–32 A cl.10', poles: 3, wire: '4G6 mm²' },
          { desc: 'Transfo de commande 230/24 V', kva: 1.0, cb: 'C6', wire: '2,5 mm²' },
          { desc: 'Ventilation de l’armoire', kva: 0.3, cb: 'C6', wire: '1,5 mm²' },
          { desc: 'Éclairage salle des machines', kva: 0.4, cb: 'C10', wire: '1,5 mm²' },
          { desc: '', spare: true },
          { desc: '', spare: true },
          { desc: '', spare: true },
        ],
        demandKva: 178,
        spareMargin: 15,
      },
    },
    {
      type: 'calc',
      title: 'Ce que le tableau confirme',
      steps: [
        { label: 'Demande de l’armoire : la règle des 257 A de l’étape 3', formula: 'S = \\sqrt{3} × 400 × 257 ≈ 178 kVA' },
        { label: 'Avec 15 % de réserve', formula: 'I = \\frac{178 000 × 1,15}{\\sqrt{3} × 400} ≈ 296 A' },
        { label: 'Réglage du départ et câble (étape 4)', formula: 'I = 296 A ≤ I_r = 320 A ≤ I_Z(150 mm²) ≈ 363 A' },
      ],
      result: 'Le départ 400 A réglé à 320 A absorbe la réserve de 15 % ; trois emplacements restent libres',
    },
    {
      type: 'note',
      text: 'Ici, les moteurs triphasés équilibrés chargent les trois phases à l’identique : seuls les petits circuits monophasés créent un léger déséquilibre. Dans une armoire moteurs, c’est le courant total et la coordination qui dimensionnent, pas l’équilibre.',
    },

    { type: 'heading', text: '7 · Ce que disent les normes' },
    {
      type: 'norms',
      title: 'Protection d’un départ moteur',
      rows: [
        { norm: 'IEC 60947-4-1', rule: 'Classes de déclenchement 10A, 10, 20, 30 ; coordination type 1 ou 2 à I_q.', result: 'type 2, classe 10 / 20' },
        { norm: 'IEC 60364-4-43', rule: 'Protection du câble contre les surcharges et les courts-circuits ; k^{2}S^{2} ≥ I^{2}t.', result: '6 mm² validé par I^{2}t' },
        { norm: 'NEC 430', rule: 'Court-circuit selon 430.52 (250 % pour un disjoncteur à temps inverse), surcharge selon 430.32 (115 à 125 %).', result: '70 A + relais ≤ 35 A' },
        { norm: 'BS 7671 / BS EN 60947', rule: 'Mêmes normes produits qu’en IEC ; prise en compte du courant de démarrage dans le choix du dispositif.', result: '= IEC' },
      ],
    },
    {
      type: 'norms',
      title: 'Disjoncteurs de puissance',
      rows: [
        { norm: 'IEC 60947-2', rule: 'Catégorie A (sans tenue de courte durée) ou B (I_{cw} assigné) ; I_{cu}, I_{cs}.', result: 'ACB catégorie B' },
        { norm: 'UL 489 / UL 1066', rule: 'MCCB (UL 489) et disjoncteurs de puissance basse tension (UL 1066, ANSI C37.13) ; « short-time rating » pour les seconds.', result: 'équivalent catégorie B' },
        { norm: 'NEC 240.87', rule: 'Au-delà de 1 200 A : réduction de l’énergie d’arc obligatoire (maintenance mode, ZSI…).', result: 'non concerné à 800 A' },
      ],
    },
    {
      type: 'regional',
      text: 'Les ACB débrochables coûtent cher et les délais de livraison sont longs : Clarisse commande avec l’appareil un kit de pièces de rechange (bobines, moteur de réarmement) et une formation des électriciens de Paul aux manœuvres d’embrochage. Pour les machines d’occasion importées, Awa fait refaire la protection selon l’IEC quand le schéma d’origine repose sur des relais NEC dimensionnés pour du 60 Hz.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'ACB : fortes intensités, débrochable, catégorie B ; son I_{cw} permet de désactiver l’instantané pour une sélectivité totale.',
        'Disjoncteur-moteur : thermique au courant de plaque, magnétique ≈ 13 × calibre, détection de perte de phase.',
        'Classe 10 pour un démarrage rapide, 20 ou 30 pour les fortes inerties.',
        'Coordination type 2 pour les départs dont l’arrêt coûte cher ; on prend les associations du fabricant.',
        'Un appareil limiteur protège un petit câble : on compare k^{2}S^{2} à l’énergie I^{2}t.',
        'Fusibles : gG pour les câbles, aM pour les moteurs, aR pour l’électronique de puissance.',
        'NEC : court-circuit (430.52) et surcharge (430.32) séparés ; IEC : souvent réunis dans le disjoncteur-moteur.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Le TGBT passe un jour à un transformateur de 630 kVA (u_k = 6 %). Le MCCB 630 A refusé aurait-il encore été possible pour l’arrivée ?',
      solution: [
        'I_n = 630 000 / (√3 × 400) ≈ 909 A : au-delà de 630 A, le MCCB ne passe plus.',
        'L’ACB 800 A ne suffit plus non plus : il faudra un châssis de 1 000 ou 1 250 A. I_{cc} ≈ 909 / 0,06 ≈ 15 kA, toujours sous son I_{cw}.',
      ],
    },
    {
      type: 'exercise',
      question: 'Une pompe de 7,5 kW (14,5 A) démarre en 2 s. Quelle classe de déclenchement et quelle plage de disjoncteur-moteur ?',
      solution: ['Démarrage rapide : classe 10.', 'Une plage de 10–16 A, réglée à 14,5 A ; le magnétique (≈ 13 × 16 = 208 A) laisse passer l’appel d’environ 7 × 14,5 ≈ 100 A.'],
    },
    {
      type: 'exercise',
      question: 'Selon la NEC, quel calibre maximal de fusible temporisé (« dual element ») pour un moteur dont le courant de table vaut 40 A ?',
      solution: ['NEC 430.52 : 175 % pour un fusible temporisé : 1,75 × 40 = 70 A.', 'C’est un calibre normalisé : 70 A.'],
    },
  ],
};
