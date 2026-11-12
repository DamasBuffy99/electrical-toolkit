import { TopicContent } from '../types';

export const villaLoadContent: TopicContent = {
  title: 'Le bilan de puissance de la villa',
  subtitle: 'Additionner tous les appareils donne 15,5 kW. Pourtant Awa va conseiller 12 kVA. La raison tient en un mot : tout ne fonctionne pas en même temps.',
  blocks: [
    { type: 'scene', text: 'Semaine 2 · Bureau d’études' },
    {
      type: 'objectives',
      items: [
        'Faire le bilan de puissance installée.',
        'Appliquer les coefficients de foisonnement.',
        'Vérifier le résultat par une seconde méthode.',
        'Choisir entre monophasé et triphasé et la puissance d’abonnement.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '15,46 kW', label: 'puissance installée' },
        { value: '10,17 kW', label: 'puissance retenue' },
        { value: '11,3 kVA', label: 'demande' },
        { value: '12 kVA tri', label: 'abonnement choisi' },
      ],
    },
    {
      type: 'text',
      text: 'De retour au bureau, Awa reprend le questionnaire des Mensah et liste chaque usage avec sa puissance. C’est la « puissance installée » : ce que la maison consommerait si tout fonctionnait à fond, au même instant.',
    },
    { type: 'illustration', name: 'villa-plan', props: { focus: 'ac' }, caption: 'Les quatre climatiseurs : le plus gros poste de la maison' },

    { type: 'heading', text: '1 · La puissance installée' },
    {
      type: 'table',
      headers: ['Usage', 'Détail', 'Puissance installée'],
      rows: [
        ['Climatisation', 'séjour 18 000 BTU (1,8 kW) + 3 chambres 9 000 BTU (0,9 kW)', '4,50 kW'],
        ['Four électrique', '', '2,50 kW'],
        ['Lave-linge', 'chauffage de l’eau compris', '2,00 kW'],
        ['Chauffe-eau', '100 L', '1,50 kW'],
        ['Pompe du forage', '1,1 kW utile, rendement 80 %', '1,40 kW'],
        ['Prises séjour et SdB', 'TV, fer à repasser, divers', '1,30 kW'],
        ['Prises cuisine', 'micro-ondes, frigo, congélateur', '1,30 kW'],
        ['Prises chambres', 'ordinateurs, chargeurs, ventilateurs', '0,60 kW'],
        ['Éclairage LED', '20 points lumineux', '0,36 kW'],
        ['Total', '', '15,46 kW'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Koffi Mensah',
      role: 'client',
      text: 'Donc il nous faut 16 kVA, c’est ça ?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Non, et c’est là que mon métier sert à quelque chose. Est-ce que vous repassez en faisant tourner le four, la machine à laver et les quatre clims à fond ? Jamais. Si je dimensionne pour 15,5 kW, vous payez toute votre vie un abonnement trop gros pour une situation qui n’arrive pas.',
    },

    { type: 'heading', text: '2 · Le foisonnement : tout ne marche pas ensemble' },
    {
      type: 'text',
      text: 'Pour chaque famille d’usages, Awa applique un coefficient de simultanéité : la part de la puissance qu’on peut raisonnablement retrouver en même temps, au pire moment de la journée. Pour une maison, c’est le soir, quand tout le monde rentre : clims allumées, cuisine, chauffe-eau.',
    },
    {
      type: 'table',
      headers: ['Usage', 'Installé', 'Coefficient', 'Retenu', 'Pourquoi'],
      rows: [
        ['Éclairage', '0,36 kW', '1', '0,36 kW', 'le soir, presque tout est allumé'],
        ['Prises (3 circuits)', '3,20 kW', '0,4', '1,28 kW', 'fer et micro-ondes ne servent que quelques minutes'],
        ['Four', '2,50 kW', '0,5', '1,25 kW', 'le thermostat coupe une fois la température atteinte'],
        ['Lave-linge', '2,00 kW', '0,5', '1,00 kW', 'il ne chauffe qu’au début du cycle'],
        ['Chauffe-eau', '1,50 kW', '1', '1,50 kW', 'il peut chauffer au pire moment'],
        ['Climatisation', '4,50 kW', '0,75', '3,38 kW', 'les compresseurs inverter ne tournent pas tous à fond'],
        ['Pompe', '1,40 kW', '1', '1,40 kW', 'elle démarre quand le réservoir est bas, à n’importe quelle heure'],
        ['Total', '15,46 kW', '', '10,17 kW', ''],
      ],
    },
    { type: 'formula', text: 'P_{retenue} = Σ (P_{installée} × coefficient) = 10,17 kW' },
    { type: 'formula', text: 'S = \\frac{P}{cos φ} = \\frac{10,17}{0,9} ≈ 11,3 kVA  →  abonnement de 12 kVA' },
    {
      type: 'dialogue',
      speaker: 'Esther Mensah',
      role: 'client',
      text: 'Et si un jour tout s’allume en même temps ?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Le disjoncteur de branchement coupera, comme un fusible de sécurité. Vous le réarmerez après avoir éteint un appareil. Avec ces coefficients, c’est rarissime. Et si vos habitudes changent, une augmentation d’abonnement se demande sans travaux, parce que les câbles que je vais prévoir le permettront.',
    },
    { type: 'fiche', id: 'demand-diversity', why: 'Facteur de demande, facteur de diversité et simultanéité en cascade.' },

    { type: 'heading', text: '3 · Vérifier par une autre méthode' },
    {
      type: 'text',
      text: 'Un bon ingénieur ne fait jamais confiance à un seul calcul. Awa vérifie l’ordre de grandeur avec la méthode des ratios au mètre carré, utilisée en avant-projet quand on ne connaît pas encore les appareils.',
    },
    { type: 'formula', text: '160 m² × 70 VA/m² ≈ 11,2 kVA' },
    {
      type: 'text',
      text: 'Les deux méthodes donnent environ 11 kVA : le résultat est cohérent. Si l’écart avait été grand, Awa aurait cherché l’erreur avant d’aller plus loin.',
    },
    { type: 'fiche', id: 'load-estimation', why: 'La méthode VA/m² et les tables par type de bâtiment.' },

    { type: 'heading', text: '4 · Monophasé ou triphasé ?' },
    {
      type: 'table',
      headers: ['', 'Monophasé 12 kVA', 'Triphasé 12 kVA'],
      rows: [
        ['Courant au branchement', '12 000 / 230 ≈ 52 A', '12 000 / (√3 × 400) ≈ 17 A par phase'],
        ['Câble de branchement', 'gros (16 mm² environ)', 'plus fin, sur 4 conducteurs'],
        ['Démarrage de la pompe et des clims', 'creux de tension sur toute la maison', 'réparti, moins sensible'],
        ['Coupure d’une phase du réseau', 'toute la maison est dans le noir', 'deux tiers des circuits restent alimentés'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Je vous conseille le triphasé 12 kVA. Tous vos appareils restent en 230 V ; je les répartirai sur les trois phases quand je composerai le tableau. Et je garde 20 % de place libre dans le tableau pour le solaire ou un groupe plus tard.',
    },
    {
      type: 'regional',
      text: 'Les distributeurs proposent des puissances normalisées (par exemple par paliers de quelques kVA) et limitent souvent le monophasé au-delà d’un certain seuil. La demande de branchement se fait tôt, car les délais de raccordement peuvent atteindre plusieurs semaines voire plusieurs mois : Awa conseille aux Mensah de déposer le dossier dès le début du gros œuvre.',
    },
    { type: 'fiche', id: 'hvac-mechanical', why: 'Comment estimer la puissance des climatiseurs, pompes et moteurs.' },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Puissance installée = somme de tous les appareils ; elle n’arrive jamais en totalité.',
        'On applique un coefficient de simultanéité par usage, en pensant au pire moment de la journée.',
        'On vérifie avec une seconde méthode (VA/m²) : les ordres de grandeur doivent concorder.',
        'On convertit les kW en kVA avec le cos φ, puis on choisit la puissance normalisée juste au-dessus.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Les Mensah décident finalement d’installer une plaque de cuisson électrique de 6 kW (coefficient 0,5). Que devient l’abonnement ?',
      solution: [
        'P retenue = 10,17 + 6 × 0,5 = 13,17 kW.',
        'S = 13,17 / 0,9 ≈ 14,6 kVA : il faut passer à la puissance normalisée supérieure, par exemple 15 kVA en triphasé.',
        'C’est exactement pour cela qu’on pose la question de la cuisson au premier rendez-vous.',
      ],
    },
    {
      type: 'exercise',
      question: 'Pourquoi le coefficient de la pompe est-il de 1, alors qu’elle ne tourne qu’une heure par jour ?',
      solution: [
        'Le coefficient de simultanéité ne mesure pas la durée de fonctionnement, mais la probabilité d’être en marche au moment de la pointe.',
        'La pompe démarre quand le réservoir est bas, sans tenir compte de l’heure : elle peut tourner pile pendant la pointe du soir. On la compte donc en entier.',
        'La durée (1 h/jour) sert au calcul de l’énergie et de la facture, pas de la puissance.',
      ],
    },
  ],
};
