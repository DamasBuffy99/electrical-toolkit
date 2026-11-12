import { TopicContent } from '../../types';

export const pvInverterTypesContent: TopicContent = {
  title: 'Les familles d’onduleurs solaires',
  subtitle: 'Onduleur réseau, hybride, onduleur-chargeur et régulateur MPPT : qui fabrique la tension, où se branche la batterie, et ce qui se passe quand le réseau disparaît.',
  blocks: [
    {
      type: 'objectives',
      items: [
        'Distinguer les trois familles d’onduleurs et le régulateur MPPT.',
        'Reconnaître un appareil à ses bornes.',
        'Savoir ce que fait chaque famille pendant une coupure du réseau.',
        'Associer chaque famille à son usage : réseau fiable, réseau instable, site isolé.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '< 1 s', label: 'arrêt d’un onduleur réseau à la coupure (anti-îlotage)' },
        { value: '97–98,5 %', label: 'rendement maximal d’un onduleur réseau' },
        { value: '48 V', label: 'batterie usuelle des onduleurs-chargeurs' },
        { value: '< 20 ms', label: 'bascule d’un onduleur-chargeur Victron' },
      ],
    },
    {
      type: 'text',
      text: 'Deux questions suffisent à classer un onduleur solaire : qui fabrique la tension et la fréquence (le réseau public, ou l’onduleur lui-même) ? Et où se branche la batterie ? Un quatrième appareil, le régulateur MPPT, charge la batterie à partir des panneaux, mais ne produit pas d’alternatif.',
    },

    { type: 'heading', text: '1 · Chaque appareil se reconnaît à ses bornes' },
    { type: 'image', source: require('../../../../assets/solar/inverters/terminals.webp'), caption: 'Bornes des quatre appareils : PV (bleu), batterie (orange), alternatif 230/400 V (vert)', height: 260 },
    {
      type: 'note',
      text: 'Règle simple : un appareil sans entrée PV est un onduleur-chargeur, pas un hybride. Un appareil sans borne batterie est un onduleur réseau. Un appareil sans sortie alternative est un régulateur.',
    },

    { type: 'heading', text: '2 · L’onduleur réseau (grid-tie)' },
    {
      type: 'text',
      text: 'Il convertit le courant continu des panneaux en courant alternatif synchronisé sur le réseau. Il ne fabrique pas de réseau : il suit celui du distributeur. Quand le réseau disparaît, il s’arrête en moins d’une seconde. C’est la protection anti-îlotage, qui évite d’envoyer de la tension dans une ligne que des techniciens croient coupée.',
    },
    {
      type: 'table',
      headers: ['Élément', 'Détail'],
      rows: [
        ['Entrée', 'courant continu des panneaux, 1 à plusieurs MPPT, jusqu’à 1 000 V en résidentiel et petit tertiaire'],
        ['Sortie', 'monophasé 230 V ou triphasé 400 V'],
        ['Stockage', 'aucun : pas de borne batterie'],
        ['En cas de coupure', 'arrêt automatique'],
        ['Rendement maximal', 'environ 97 à 98,5 % (98,2 % pour un Sunny Tripower X)'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'Avantages : coût le plus bas, meilleur rendement, installation simple, peu de composants.',
        'Limites : aucune autonomie pendant une coupure, pas de stockage, le surplus est injecté ou bridé.',
        'Exemples : SMA Sunny Boy (monophasé) et Sunny Tripower (triphasé), Fronius Symo et Primo, Huawei SUN2000, SolarEdge.',
        'Pour qui : installation raccordée sans besoin de secours, qui consomme surtout de jour.',
      ],
    },

    { type: 'heading', text: '3 · L’onduleur hybride' },
    {
      type: 'text',
      text: 'Il réunit dans un même boîtier l’onduleur PV, le chargeur de batterie et la gestion du réseau. Panneaux et batterie partagent son bus continu interne : c’est un couplage DC. Pendant une coupure, il bascule sur une sortie de secours qui alimente les charges prioritaires.',
    },
    {
      type: 'table',
      headers: ['Élément', 'Détail'],
      rows: [
        ['Entrées DC', 'panneaux (MPPT) et batterie, basse tension 48 V ou haute tension 150–600 V selon le modèle'],
        ['Sorties AC', 'réseau, et une sortie secourue'],
        ['Modes', 'autoconsommation, décalage horaire, écrêtage des pointes, secours, site isolé sur certains modèles'],
        ['Puissance de secours', 'celle de l’onduleur, souvent 3 à 12 kW'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'Avantages : un seul appareil, secours automatique, stockage du surplus, programmation horaire.',
        'Limites : plus cher qu’un onduleur réseau ; s’il tombe en panne, tout s’arrête ; ajouter une batterie à un PV existant oblige à changer l’onduleur.',
        'Exemples : SMA Sunny Tripower Smart Energy (triphasé, 5 à 10 kW) et Sunny Boy Smart Energy ; Deye SG05LP3 (triphasé 48 V, 3 à 12 kW, port groupe électrogène, pointe de 2 fois la puissance pendant 10 s) ; Huawei SUN2000 + LUNA2000 ; Victron EasySolar-II GX.',
      ],
    },

    { type: 'heading', text: '4 · L’onduleur-chargeur pour site isolé (off-grid)' },
    {
      type: 'text',
      text: 'Il fabrique lui-même un réseau à 230 V et 50 Hz à partir d’une batterie, en permanence. Il recharge la batterie depuis un groupe électrogène ou le réseau, et bascule entre les sources sans coupure grâce à un commutateur de transfert intégré. Les panneaux s’y raccordent par un régulateur MPPT (couplage DC) ou par un onduleur réseau branché sur sa sortie (couplage AC).',
    },
    {
      type: 'table',
      headers: ['Élément', 'Détail'],
      rows: [
        ['Batterie', 'obligatoire, 48 V le plus souvent (12 ou 24 V sur les petits modèles)'],
        ['Réseau', 'facultatif : il fonctionne avec ou sans'],
        ['Groupe électrogène', 'démarrage et arrêt automatiques par relais'],
        ['Mise en parallèle', 'plusieurs unités par phase, et montage triphasé'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'Avantages : autonomie complète, conçu pour fonctionner jour et nuit, forte tenue aux pointes de démarrage, évolutif.',
        'Limites : dimensionnement exigeant (une erreur se paie en coupures), parc de batteries important, mise en service plus experte.',
        'Exemples : SMA Sunny Island (3,3 à 6,0 kW continus par unité), Victron MultiPlus-II (2,4 à 12 kW continus) et Quattro, Studer Xtender, Schneider Conext XW Pro.',
        'Pour qui : sites sans réseau ou au réseau très instable : relais télécoms, centres de santé, écoles, habitations isolées.',
      ],
    },

    { type: 'heading', text: '5 · Trois câblages types' },
    { type: 'image', source: require('../../../../assets/solar/inverters/wiring.webp'), caption: 'L’appareil encadré en bleu définit la famille. Seul l’onduleur-chargeur tient le réseau en permanence ; l’hybride ne secourt que sa sortie dédiée', height: 300 },
    {
      type: 'table',
      headers: ['Critère', 'Onduleur réseau', 'Hybride', 'Onduleur-chargeur (site isolé)'],
      rows: [
        ['Réseau public', 'indispensable', 'normalement présent', 'facultatif'],
        ['Batterie', 'aucune', 'oui, sur l’onduleur', 'obligatoire'],
        ['En cas de coupure', 'arrêt', 'secours sur une sortie dédiée', 'aucun effet'],
        ['Pointe de démarrage', 'sans objet', 'variable (jusqu’à 2× pendant 10 s chez Deye)', 'élevée (Sunny Island 8.0H : 11 kW pendant 3 s)'],
        ['Coût', 'bas', 'moyen', 'élevé'],
        ['Complexité', 'faible', 'moyenne', 'élevée'],
      ],
    },
    {
      type: 'decision',
      title: 'Quelle famille pour quel site ?',
      choice: 'Réseau fiable et objectif facture : onduleur réseau ou hybride. Réseau absent ou très instable : onduleur-chargeur (ou hybride conçu « batterie d’abord ») avec groupe piloté',
      reasons: [
        'L’onduleur réseau ne sert à rien pendant une coupure : il s’arrête avec le réseau.',
        'L’hybride secourt une partie de la maison, dans la limite de sa puissance.',
        'L’onduleur-chargeur est fait pour tenir seul, jour et nuit, avec un groupe en appoint.',
      ],
      rejected: 'Installer un onduleur réseau en pensant « avoir du courant pendant les délestages » : c’est l’erreur la plus fréquente sur les sites à coupures fréquentes.',
    },

    { type: 'heading', text: '6 · Ce que disent les normes' },
    {
      type: 'norms',
      title: 'Onduleurs raccordés au réseau',
      rows: [
        { norm: 'IEC 62116', rule: 'Méthode d’essai de la protection anti-îlotage des onduleurs raccordés.', result: 'arrêt en moins de 2 s exigé à l’essai' },
        { norm: 'IEC 62109-1 / -2', rule: 'Sécurité des convertisseurs de puissance pour systèmes photovoltaïques.', result: 'exigence de base pour tout onduleur PV' },
        { norm: 'VDE-AR-N 4105 / EN 50549-1', rule: 'Règles de raccordement des producteurs au réseau basse tension (Europe).', result: 'souvent reprises par les distributeurs' },
        { norm: 'IEEE 1547 / UL 1741', rule: 'Équivalents nord-américains : raccordement, anti-îlotage, certification.', result: 'même principe' },
      ],
    },
    {
      type: 'regional',
      text: 'Dans beaucoup de pays d’Afrique de l’Ouest, l’injection de surplus n’est pas rémunérée, voire pas autorisée pour les particuliers : un onduleur réseau doit alors être bridé (limitation d’injection à zéro). Et comme les délestages sont fréquents, c’est souvent l’onduleur-chargeur ou l’hybride qui répond vraiment au besoin.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Onduleur réseau : suit le réseau, s’arrête à la coupure, pas de batterie.',
        'Hybride : panneaux et batterie sur le même appareil (couplage DC), secours partiel sur une sortie dédiée.',
        'Onduleur-chargeur : fabrique le réseau à partir d’une batterie, en permanence, pilote un groupe.',
        'Régulateur MPPT : panneaux → batterie, sans sortie alternative.',
        'On reconnaît un appareil à ses bornes.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Un appareil possède une borne batterie 48 V, une entrée AC et une sortie AC, mais aucune entrée PV. De quelle famille s’agit-il ? Comment y raccorder des panneaux ?',
      solution: ['C’est un onduleur-chargeur.', 'Les panneaux s’y raccordent par un régulateur MPPT sur la batterie (couplage DC), ou par un onduleur réseau branché sur sa sortie AC (couplage AC).'],
    },
    {
      type: 'exercise',
      question: 'Un client a un onduleur réseau de 5 kW et subit 4 heures de délestage chaque soir. Pourquoi n’a-t-il pas de courant pendant les coupures, même en journée ?',
      solution: ['L’onduleur réseau a besoin de la tension du réseau pour se synchroniser ; sans elle, il s’arrête (anti-îlotage).', 'Il faut ajouter un stockage avec un appareil capable de fabriquer le réseau : hybride, ou onduleur-chargeur en couplage AC.'],
    },
  ],
};
