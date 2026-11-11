import { TopicContent } from '../types';

export const factoryFeedersContent: TopicContent = {
  title: 'Protéger les moteurs et les départs',
  subtitle: 'Un moteur se protège contre deux dangers différents : la surcharge lente qui le cuit, et le court-circuit brutal. Awa compose chaque départ moteur, puis le gros câble qui alimente l’armoire de la salle des machines.',
  blocks: [
    { type: 'scene', text: 'Mois 2 · Bureau d’études' },
    { type: 'illustration', name: 'factory-sld', props: { highlight: 'motors' }, caption: 'Les départs moteurs du TGBT' },
    {
      type: 'dialogue',
      speaker: 'Ibrahim Traoré',
      role: 'client',
      text: 'L’an dernier, une pompe a grillé alors que son disjoncteur n’avait jamais sauté. Comment est-ce possible ?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Parce que ce disjoncteur était sûrement calibré pour protéger le câble, pas le moteur. Une pompe qui force un peu, par exemple à cause d’un roulement usé, tire 20 ou 30 % de trop pendant des heures. Le câble le supporte, le bobinage du moteur non. Il faut une protection réglée exactement sur le courant de la plaque.',
    },

    { type: 'heading', text: '1 · Le départ moteur' },
    {
      type: 'table',
      headers: ['Élément', 'Rôle', 'Réglage'],
      rows: [
        ['Disjoncteur (partie magnétique)', 'coupe le court-circuit en quelques millisecondes', 'seuil élevé (environ 10 à 13 × In) pour laisser passer le démarrage'],
        ['Protection thermique (relais ou disjoncteur-moteur)', 'coupe la surcharge prolongée et la marche sur deux phases', 'réglée au courant de plaque, jamais au-dessus'],
        ['Contacteur', 'met en marche et arrête le moteur, des milliers de fois', 'commandé par l’automate ou un bouton'],
        ['Sectionneur de proximité', 'permet au mécanicien de couper et de cadenasser sur place', 'visible depuis la machine'],
      ],
    },
    {
      type: 'text',
      text: 'Pour la pompe de 15 kW (28,3 A), Awa choisit un disjoncteur-moteur réglé à 28,3 A : il réunit la protection thermique et magnétique. Pour le compresseur (98 A), un disjoncteur réglable 125 A dont la protection thermique est réglée à 98 A, associé au démarreur progressif.',
    },
    { type: 'formula', text: 'Pompe : I_r = I_{plaque} = 28,3 A   ;   compresseur : I_r = 98 A sur un disjoncteur de 125 A' },
    {
      type: 'note',
      text: 'Le sectionneur de proximité n’est pas un luxe : sans lui, un mécanicien qui intervient sur une pompe dépend de quelqu’un, loin, à l’armoire, qui pourrait remettre en marche par erreur. Consignation : on coupe, on cadenasse, on vérifie l’absence de tension.',
    },
    { type: 'fiche', id: 'circuit-breaker', why: 'Disjoncteurs moteur, réglages Ir et Im, courbes.' },
    { type: 'fiche', id: 'disconnect-switches', why: 'Choisir et dimensionner les sectionneurs, y compris pour les moteurs.' },

    { type: 'heading', text: '2 · Le départ qui alimente l’armoire des machines' },
    {
      type: 'text',
      text: 'Le compresseur, les quatre pompes et la pompe de nettoyage sont regroupés dans une armoire de la salle des machines, alimentée par un seul câble depuis le TGBT. Pour ce « feeder », la règle classique : on prend 1,25 fois le courant du plus gros moteur, plus le courant de tous les autres.',
    },
    { type: 'formula', text: 'I_{feeder} = 1,25 × I_{plus gros} + Σ I_{autres} = 1,25 × 98 + 4 × 28,3 + 21 ≈ 257 A' },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Le facteur 1,25 sur le plus gros moteur couvre le cas où il démarre ou force pendant que tous les autres tournent. Je prends donc un disjoncteur réglable de 400 A, réglé à 0,8 × 400 = 320 A. Il laisse passer les démarrages sans déclencher, et protège le câble qu’on dimensionnera à l’étape suivante.',
    },
    { type: 'fiche', id: 'feeders', why: 'Dimensionnement des feeders moteurs et tableaux.' },
    { type: 'fiche', id: 'panel-design-examples', why: 'Deux exemples complets de tableaux avec moteurs.' },

    { type: 'heading', text: '3 · La machine américaine' },
    {
      type: 'text',
      text: 'La nouvelle remplisseuse vient des États-Unis. Son dossier est rédigé selon le code américain (NEC) : câbles dimensionnés à 125 % du courant de pleine charge du moteur, tensions 480 V et fréquence 60 Hz.',
    },
    {
      type: 'dialogue',
      speaker: 'Paul Ndiaye (maintenance)',
      role: 'team',
      text: 'On peut la brancher directement ? Le fournisseur dit « 400 à 480 V ».',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Attention à la fréquence : nos moteurs sont en 50 Hz, les siens en 60 Hz. Branché en 50 Hz, un moteur prévu pour 60 Hz tourne 17 % moins vite, et à tension égale il chauffe. Je demande au fabricant la version 400 V / 50 Hz, ou une confirmation écrite que ses moteurs et son électronique l’acceptent. Les méthodes du NEC restent utiles pour vérifier ses câbles.',
    },
    { type: 'fiche', id: 'nec-conductors', why: 'Le NEC : conducteurs, moteurs (FLC × 1,25) et conduits.' },
    {
      type: 'regional',
      text: 'Les machines importées d’occasion d’Amérique du Nord sont fréquentes dans l’agro-industrie : vérifiez toujours la tension et surtout la fréquence (60 Hz) avant l’achat. Un transformateur ne change pas la fréquence ; seul un variateur ou un convertisseur peut alimenter correctement un moteur 60 Hz.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Un départ moteur combine protection contre le court-circuit, protection thermique réglée sur le courant de plaque, contacteur et sectionneur de proximité.',
        'La protection thermique protège le moteur ; le calibre du disjoncteur protège le câble.',
        'Feeder d’un groupe de moteurs : 1,25 × le plus gros + la somme des autres.',
        'Machines importées : vérifier tension et fréquence (50/60 Hz) avant tout.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'On ajoute une 5e pompe de 15 kW dans l’armoire. Recalculez le courant du feeder. Le réglage à 320 A suffit-il ?',
      solution: [
        'I = 1,25 × 98 + 5 × 28,3 + 21 = 122,5 + 141,5 + 21 = 285 A.',
        '285 A < 320 A : le réglage suffit, à condition que le câble supporte au moins 320 A une fois corrigé.',
      ],
    },
    {
      type: 'exercise',
      question: 'Pourquoi ne règle-t-on pas la protection thermique de la pompe à 1,25 × 28,3 A, comme pour un câble ?',
      solution: [
        'La protection thermique protège le moteur : au-delà de son courant de plaque, il chauffe anormalement.',
        'Réglée à 35 A, elle laisserait le moteur surchargé de 25 % sans jamais réagir, ce qui le grille en quelques mois.',
      ],
    },
  ],
};
