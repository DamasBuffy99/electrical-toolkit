import { TopicContent } from '../types';

export const svNeedsContent: TopicContent = {
  title: 'Ce qu’il faut secourir',
  subtitle: 'Un an après leur emménagement, les Mensah vivent avec quatre heures de délestage chaque soir et un groupe à essence bruyant. Fanta Coulibaly, l’ingénieure photovoltaïque de Lumen, commence par une question simple : qu’est-ce qui doit vraiment fonctionner pendant les coupures ?',
  blocks: [
    { type: 'scene', text: 'Année 2 · Visite chez les Mensah, avec Awa Diallo' },
    {
      type: 'objectives',
      items: [
        'Distinguer la consommation de toute la maison de celle qu’il faut secourir.',
        'Remplir un bilan de consommation : puissance, heures de jour et de nuit, énergie, appel au démarrage.',
        'Séparer l’énergie consommée de jour (soleil) et de nuit (batterie).',
        'Comprendre pourquoi on ne secourt pas tout.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '≈ 33 kWh/j', label: 'consommation de toute la maison' },
        { value: '11,7 kWh/j', label: 'circuits secourus' },
        { value: '8,4 kWh', label: 'énergie secourue la nuit' },
        { value: '1,65 kW', label: 'puissance des charges secourues' },
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Koffi Mensah',
      role: 'client',
      text: 'Le groupe nous coûte une fortune en essence et les voisins se plaignent du bruit. On voudrait du solaire qui remplace tout, la nuit comme le jour.',
    },
    {
      type: 'dialogue',
      speaker: 'Fanta Coulibaly',
      role: 'engineer',
      text: 'Tout remplacer, y compris les quatre climatiseurs la nuit, demanderait une batterie de la taille d’une voiture. Commençons par lister ce qui doit fonctionner pendant les coupures, et ce qui peut attendre le retour du réseau. C’est ce tri qui fait le prix du système.',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'team',
      text: 'Bonne nouvelle : j’avais câblé à part un circuit prioritaire dans le tableau de la villa, justement pour ce jour-là. Il suffira de le raccorder à la sortie secourue de l’onduleur.',
    },

    { type: 'heading', text: '1 · Le bilan de consommation' },
    { type: 'illustration', name: 'pv-system', props: { highlight: 'loads' }, caption: 'Tout commence par les charges : ce sont elles qui fixent la taille de chaque composant' },
    {
      type: 'text',
      text: 'Pour chaque appareil, Fanta note sa puissance, le nombre d’appareils, les heures d’utilisation de jour (quand les panneaux produisent) et de nuit (quand il faudra puiser dans la batterie), et l’appel de courant au démarrage pour les moteurs. Pour les appareils à compresseur (réfrigérateur, clim inverter), elle prend la puissance moyenne réellement absorbée, pas celle de la plaque.',
    },
    {
      type: 'consumptionSheet',
      sheet: {
        project: 'Villa Mensah',
        simultaneity: 0.6,
        items: [
          { name: 'Éclairage LED de toute la maison', power: 360, qty: 1, hDay: 1, hNight: 5, backup: true },
          { name: 'Réfrigérateur-congélateur', power: 150, qty: 1, hDay: 5, hNight: 5, surge: 900, backup: true },
          { name: 'Congélateur coffre', power: 120, qty: 1, hDay: 4, hNight: 4, surge: 700, backup: true },
          { name: 'TV, box, décodeur', power: 150, qty: 1, hDay: 3, hNight: 4, backup: true },
          { name: 'Ordinateurs portables', power: 60, qty: 2, hDay: 6, hNight: 2, backup: true },
          { name: 'Ventilateurs', power: 50, qty: 3, hDay: 4, hNight: 6, backup: true },
          { name: 'Clim chambre 1 (inverter, moyenne)', power: 600, qty: 1, hDay: 0, hNight: 6, backup: true },
          { name: 'Clims chambres 2 et 3 (moyenne)', power: 500, qty: 2, hDay: 0, hNight: 6 },
          { name: 'Clim séjour (moyenne)', power: 1000, qty: 1, hDay: 4, hNight: 2 },
          { name: 'Chauffe-eau', power: 1500, qty: 1, hDay: 2, hNight: 0 },
          { name: 'Lave-linge', power: 2000, qty: 1, hDay: 1, hNight: 0, surge: 3000 },
          { name: 'Four', power: 2500, qty: 1, hDay: 0.5, hNight: 0.5 },
          { name: 'Pompe du forage', power: 1400, qty: 1, hDay: 1.5, hNight: 0, surge: 10500 },
        ],
      },
    },
    {
      type: 'calc',
      title: 'Ce que dit le bilan',
      steps: [
        { label: 'Toute la maison', formula: 'E ≈ 33,3 kWh/jour   (Awa estimait 32 kWh lors du bilan électrique)' },
        { label: 'Circuits secourus : jour + nuit', formula: 'E_{secouru} = 3,36 + 8,37 ≈ 11,7 kWh/jour' },
        { label: 'Puissance des charges secourues', formula: 'P = 360 + 150 + 120 + 150 + 120 + 150 + 600 = 1 650 W' },
        { label: 'Pendant les 4 h de délestage (18 h – 22 h)', formula: '1,65 kW × 4 h ≈ 6,6 kWh' },
      ],
      result: 'Secourir 1,65 kW et environ 8,4 kWh la nuit, au lieu de 6,63 kW et 33 kWh pour toute la maison',
    },

    { type: 'heading', text: '2 · Pourquoi on ne secourt pas tout' },
    {
      type: 'table',
      headers: ['Appareil', 'Secouru ?', 'Raison'],
      rows: [
        ['Éclairage, réfrigérateur, congélateur', 'oui', 'indispensables, faibles puissances'],
        ['TV, box, ordinateurs, ventilateurs', 'oui', 'confort et travail, faibles puissances'],
        ['Clim de la chambre des parents', 'oui, à 26 °C', 'confort de nuit ; un seul appareil inverter, sans appel au démarrage'],
        ['Autres clims', 'non', '6 kWh de plus par nuit : la batterie doublerait'],
        ['Chauffe-eau, four, lave-linge', 'non', 'utilisés de jour ou reportables'],
        ['Pompe du forage', 'non', 'appel de 10 kVA au démarrage ; le réservoir tient la soirée, elle tourne en journée'],
      ],
    },
    {
      type: 'decision',
      title: 'Périmètre du secours',
      choice: 'Le circuit prioritaire de la villa (éclairage, froid alimentaire, prises de la TV et du bureau, ventilateurs) + la clim de la chambre 1, soit 1,65 kW et ≈ 8,4 kWh par nuit',
      reasons: [
        'Ces charges suffisent à vivre normalement pendant un délestage.',
        'Exclure la pompe évite un onduleur surdimensionné rien que pour un appel de 10 kVA quelques secondes par jour.',
        'Les autres appareils restent alimentés par le réseau ou par le solaire en journée.',
      ],
      rejected: 'Secourir toute la maison : un onduleur de 12 kW et 35 kWh de batterie, trois à quatre fois plus cher.',
    },
    {
      type: 'note',
      text: 'La pointe simultanée de toute la maison (6,63 kW) et l’appel de la pompe ne disparaissent pas : ils restent servis par le réseau quand il est là. L’onduleur hybride laisse passer le réseau vers la maison et ne fournit lui-même que la partie secourue pendant les coupures.',
    },

    { type: 'heading', text: '3 · Le soleil disponible' },
    {
      type: 'calc',
      title: 'Ressource solaire de la côte ouest-africaine',
      steps: [
        { label: 'Irradiation moyenne sur le plan des modules', formula: '≈ 4,8 kWh/m²/jour, soit 4,8 heures d’ensoleillement maximal' },
        { label: 'Ratio de performance (chaleur, poussière, câbles, onduleur)', formula: 'PR ≈ 0,75' },
        { label: 'Production d’un kWc', formula: '4,8 × 0,75 ≈ 3,6 kWh/kWc/jour  (≈ 1 300 kWh/kWc/an)' },
      ],
      result: 'Chaque kWc installé produit environ 3,6 kWh par jour en moyenne sur l’année, moins en saison des pluies',
    },
    { type: 'fiche', id: 'pv-design-steps', why: 'La méthode complète : charges, onduleur, panneaux, batteries, régulateur, raccordement.' },
    { type: 'fiche', id: 'pv-inverter-finance', why: 'Onduleur réseau ou hybride : la rentabilité sur un site à délestages.' },

    { type: 'heading', text: '4 · Ce que disent les normes' },
    {
      type: 'norms',
      title: 'Évaluer les besoins',
      rows: [
        { norm: 'IEC 62257 (série)', rule: 'Recommandations pour les petits systèmes d’énergie renouvelable d’électrification rurale, dont l’évaluation des besoins.', result: 'bilan par usage et par période' },
        { norm: 'NF C 15-712-2', rule: 'Installations PV avec stockage : identification des circuits secourus.', result: 'tableau secouru repéré' },
        { norm: 'IEEE 1562', rule: 'Guide de dimensionnement des champs et batteries des systèmes PV autonomes.', result: 'énergie jour / nuit' },
        { norm: 'IEC 61724-1', rule: 'Surveillance des performances : définition du ratio de performance (PR).', result: 'PR ≈ 0,75' },
      ],
    },
    {
      type: 'regional',
      text: 'Les délestages suivent souvent un calendrier publié par le distributeur, par quartier. Fanta demande aux Mensah de noter pendant deux semaines les heures réelles de coupure : c’est la donnée qui dimensionne la batterie. Elle relève aussi la consommation du groupe : 1,8 litre d’essence par soir, environ 460 000 FCFA par an, sans compter l’entretien.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Le bilan liste puissance, quantité, heures de jour et de nuit, appel au démarrage.',
        'L’énergie de nuit dimensionne la batterie ; la puissance et les appels dimensionnent l’onduleur.',
        'On ne secourt que l’indispensable : c’est le tri qui fait le prix.',
        'Un kWc produit environ 3,6 kWh par jour sur la côte, avec un PR de 0,75.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Esther voudrait aussi secourir la clim de la chambre 2 la nuit (500 W moyens pendant 6 h). Que devient l’énergie de nuit secourue ?',
      solution: ['8,37 + 0,5 × 6 = 11,37 kWh.', 'Près de 36 % de plus : la batterie de 10 kWh ne suffirait plus pour toute la nuit.'],
    },
    {
      type: 'exercise',
      question: 'Pourquoi prendre 150 W pour le réfrigérateur alors que sa plaque indique 1,2 A, soit environ 280 W ?',
      solution: ['Le compresseur ne tourne qu’une partie du temps et absorbe moins que la valeur de plaque en régime établi.', 'Pour l’énergie, on prend la puissance moyenne mesurée (ou la consommation annuelle de l’étiquette ÷ 8 760 h) ; pour l’onduleur, on garde l’appel au démarrage (≈ 900 W).'],
    },
  ],
};
