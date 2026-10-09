import { TopicContent } from '../../types';

export const abcSplitVrvContent: TopicContent = {
  title: 'Split, multisplit et VRV/DRV en pratique',
  subtitle: 'Ce qu’il faut savoir pour poser un split, choisir un multisplit et comprendre un système à débit de réfrigérant variable',
  blocks: [
    {
      type: 'text',
      text: "Les systèmes « à détente directe » à unités séparées dominent la climatisation des bureaux, hôtels et logements : du simple split mural au VRV qui alimente des dizaines d’unités intérieures depuis une seule unité extérieure. Cette leçon donne les règles de pose et les particularités techniques de chacun.",
    },
    { type: 'illustration', name: 'clim-systems', props: { highlight: 'medium' }, caption: 'Splits, multisplits et VRV couvrent la plage de 2,5 à 90 kW environ' },

    { type: 'heading', text: 'Le split-system' },
    {
      type: 'bullets',
      items: [
        'Une unité intérieure (murale, console, plafonnier, cassette, gainable) et une unité extérieure, reliées par deux tubes cuivre isolés et un câble de liaison à 3 ou 4 conducteurs (alimentation du ventilateur, de la carte, communication).',
        'Unité intérieure parfaitement de niveau, soufflant de préférence dans la longueur de la pièce.',
        'Unité extérieure sur silentblocs (balcon, console murale, toit avec support adapté), avec un accès et des dégagements suffisants pour l’entretien, sans obstacle au rejet d’air.',
        'Liaison frigorifique généralement limitée à 20 à 30 m ; étanchéité parfaitement testée.',
        'Alimentation électrique : de préférence une ligne dédiée avec son disjoncteur, câble de section adaptée.',
        'Condensats : tube PVC rigide ou souple en légère pente vers l’extérieur ou une évacuation (pompe de relevage si la pente manque).',
        'Pose d’un split complet : une journée de travail en moyenne.',
      ],
    },
    { type: 'illustration', name: 'clim-airflow', caption: 'Unité intérieure en haut du mur, soufflage horizontal dans la longueur de la pièce' },

    { type: 'heading', text: 'Le multisplit' },
    {
      type: 'bullets',
      items: [
        'Une unité extérieure inverter alimente 2 à 5 unités intérieures autonomes, qui doivent toutes fonctionner dans le MÊME mode (froid ou chaud).',
        'Avantages : un seul groupe en façade, pose rapide, consommation réduite et température homogène grâce à l’inverter, types d’unités et puissances panachables.',
        'Exemple de panachage pour 7 000 W : 2 128 + 4 472 W, ou 1 917 + 1 917 + 3 166 W, ou 4 × 1 825 W.',
        'Les « mini-VRV » (4 à 17 kW, 4 à 9 pièces) font le lien entre multisplit et VRV.',
      ],
    },

    { type: 'heading', text: 'Les systèmes à débit de réfrigérant variable (VRV, DRV, VRF)' },
    {
      type: 'text',
      text: "Une unité extérieure à compresseur(s) à vitesse variable alimente, par des tubes frigorifiques de petit diamètre, un grand nombre d’unités intérieures de types et puissances différents. Le débit de fluide suit la demande réelle. Les noms varient selon les marques : VRV, DRV, VRF, DVM.",
    },
    {
      type: 'table',
      headers: ['Caractéristique (selon fabricants)', 'Ordre de grandeur'],
      rows: [
        ['Puissance frigorifique', '5 à 90 kW par groupe (modulaire)'],
        ['Unités intérieures', 'jusqu’à 64 sur un circuit'],
        ['Longueur de tubes cumulée', 'jusqu’à 1 000 m'],
        ['Dénivelé intérieur / extérieur', 'jusqu’à 90 m'],
        ['Fonctionnement', 'jusqu’à −15 °C extérieur'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'Compresseurs : un inverter seul en petite puissance ; en grosse puissance, un inverter + un ou deux compresseurs fixes, ou deux inverters, ou un digital scroll (paliers de 7 à 100 %).',
        'Chaque unité intérieure a son détendeur électronique et sa carte ; la régulation (PID) s’appuie sur les transducteurs de pression et les sondes.',
        'Retour d’huile : à faible vitesse, l’huile revient mal ; l’électronique lance un cycle de récupération d’huile environ toutes les 8 heures.',
        'VRV 2 tubes : tout le système en froid OU en chaud. VRV 3 tubes « à récupération d’énergie » : chaque unité choisit son mode grâce à des boîtiers de sélection (électrovannes) ; la chaleur retirée d’un local réchauffe un autre.',
        'Existent aussi en condensation par eau (boucle d’eau, nappe), et en remplacement d’anciens systèmes au R22 en réutilisant les liaisons.',
      ],
    },
    {
      type: 'note',
      text: "Mise en œuvre d’un VRV : brasure sous balayage d’azote obligatoire (la calamine boucherait les détendeurs électroniques), essai de pression à l’azote vers 30 à 35 bar pendant plusieurs jours, tirage au vide poussé, charge complémentaire calculée selon les longueurs réelles de tubes.",
    },
    { type: 'illustration', name: 'tech-install', caption: 'L’ordre des gestes, du tube coupé à la mise en service' },
    {
      type: 'note',
      text: 'Le guide IEPF rappelle qu’en Afrique, les VRV/VRF coûtent environ 50 % plus cher à l’installation qu’une centrale à eau glacée, mais s’imposent dans les immeubles de bureaux et les grandes banques pour leur souplesse.',
    },

    { type: 'heading', text: 'La pompe de relevage des condensats' },
    {
      type: 'bullets',
      items: [
        'Quand la pente manque ou qu’aucune évacuation n’est proche, une pompe relève l’eau de condensation.',
        'Pompe en deux parties (bloc détection à flotteur + pompe) pour splits : 8 à 15 l/h, refoulement jusqu’à 6 m.',
        'Pompe monobloc à réservoir : jusqu’à 500 l/h et 20 m de refoulement.',
        'Pompe péristaltique : idéale pour les eaux chargées, fait office de clapet anti-retour.',
        'Toujours raccorder le contact de sécurité (arrêt du climatiseur en cas de débordement) et nettoyer régulièrement les filtres d’aspiration, sinon gare aux fuites d’eau.',
      ],
    },

    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Un appartement compte un séjour de 4 kW et deux chambres de 1,8 kW. Proposez une solution.',
      solution: ['Total ≈ 7,6 kW : un multisplit à 3 unités intérieures sur une seule unité extérieure inverter de ≈ 7–8 kW (en tenant compte du foisonnement : séjour et chambres ne sont pas à pleine charge en même temps).', 'Alternative : trois splits indépendants (plus de groupes en façade, mais une panne n’arrête qu’une pièce).'],
    },
    {
      type: 'exercise',
      question: 'Un hôtel veut chauffer certaines chambres le matin pendant que d’autres, au soleil, sont climatisées. Quel type de VRV faut-il ?',
      solution: ['Un VRV 3 tubes « à récupération d’énergie » : chaque unité choisit son mode via des boîtiers de sélection, et la chaleur extraite des chambres climatisées sert aux chambres chauffées.', 'Un VRV 2 tubes imposerait le même mode à tout le système.'],
    },
  ],
};
