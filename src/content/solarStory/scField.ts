import { TopicContent } from '../types';

export const scFieldContent: TopicContent = {
  title: 'Le champ PV et le gasoil économisé',
  subtitle: 'Il reste à produire chaque jour les 134 kWh du centre, dont un tiers passera par la batterie. Fanta dimensionne le champ au sol, ses chaînes et ses trois onduleurs réseau, estime la part solaire saison par saison, puis chiffre le gasoil économisé.',
  blocks: [
    { type: 'scene', text: 'Mois 3 · Terrain du forage, avec Yao Kouamé et le Dr Sy' },
    {
      type: 'objectives',
      items: [
        'Dimensionner un champ PV pour un système isolé, en tenant compte des pertes de stockage.',
        'Remplir la note de calcul des chaînes de trois onduleurs réseau.',
        'Estimer la part solaire et les heures de groupe selon la saison.',
        'Dresser la liste des équipements et le bilan économique.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '36,3 kWc', label: '66 modules de 550 Wc au sol' },
        { value: '3 × 10 kW', label: 'onduleurs réseau couplés en AC' },
        { value: '≈ 88 %', label: 'part solaire sur l’année' },
        { value: '≈ 11 M FCFA/an', label: 'de gasoil et d’entretien économisés' },
      ],
    },

    { type: 'heading', text: '1 · Combien de panneaux ?' },
    { type: 'illustration', name: 'pv-system', props: { highlight: 'panels' }, caption: 'Le champ doit couvrir la journée et remplir la batterie pour la nuit' },
    {
      type: 'calc',
      title: 'Puissance crête du champ',
      steps: [
        { label: 'Ressource en savane : 5,5 h de soleil équivalent, PR 0,75', formula: '5,5 × 0,75 ≈ 4,1 kWh/kWc/jour' },
        { label: 'Énergie consommée directement de jour', formula: '\\frac{91,1}{4,1} ≈ 22,1 kWc' },
        { label: 'Énergie de nuit, qui passe par la batterie (couplage AC : rendement ≈ 0,90)', formula: '\\frac{43,4 / 0,90}{4,1} ≈ 11,7 kWc' },
        { label: 'Total, arrondi au nombre de modules', formula: '22,1 + 11,7 ≈ 33,8 kWc   →   66 × 0,55 = 36,3 kWc' },
      ],
      result: '36,3 kWc : environ 7 % de marge pour l’encrassement par la poussière et le vieillissement',
    },
    {
      type: 'table',
      headers: ['Saison', 'Soleil équivalent', 'Production', 'Part solaire', 'Groupe'],
      rows: [
        ['Saison sèche (nov. – avril)', '≈ 6,0 h', '≈ 163 kWh/j', '≈ 100 %', 'rarement'],
        ['Harmattan (déc. – fév.)', '≈ 5,0 h (poussière)', '≈ 136 kWh/j', '≈ 95 %', 'quelques heures par semaine'],
        ['Saison des pluies (juin – sept.)', '≈ 4,3 h', '≈ 117 kWh/j', '≈ 70 %', '≈ 3 h par jour'],
        ['Moyenne annuelle', '≈ 5,5 h', '≈ 150 kWh/j', '≈ 88 %', '≈ 1,5 h par jour'],
      ],
    },

    { type: 'heading', text: '2 · Les chaînes des trois onduleurs' },
    {
      type: 'text',
      text: 'Chaque onduleur réseau triphasé de 10 kW reçoit 22 modules, en deux chaînes de 11, une par entrée MPPT. Les nuits d’harmattan descendent à 12 °C : c’est la température qui fixe la tension maximale. Au sol, les modules sont bien ventilés : 70 °C de cellule suffit pour la vérification à chaud.',
    },
    {
      type: 'stringSheet',
      sheet: {
        project: 'Centre de santé de Kalé',
        module: { name: 'Monocristallin 550 Wc, demi-cellules', pmax: 550, voc: 49.6, vmp: 41.6, isc: 14.0, imp: 13.2, betaVoc: -0.27, gammaPmax: -0.35 },
        tMin: 12,
        tCellMax: 70,
        inverter: { name: 'Onduleur réseau triphasé 10 kW', vmaxDc: 1000, mpptMin: 200, mpptMax: 800, imaxMppt: 20, iscMaxMppt: 30, pac: 10, count: 3 },
        strings: [
          { mppt: 'MPPT A', series: 11, parallel: 1 },
          { mppt: 'MPPT B', series: 11, parallel: 1 },
        ],
      },
    },
    {
      type: 'calc',
      title: 'Vérifications d’une chaîne de 11 modules',
      steps: [
        { label: 'Voc à 12 °C (aube d’harmattan)', formula: '11 × 49,6 × [1 + 0,0027 × 13] ≈ 565 V ≤ 1 000 V ✓' },
        { label: 'Vmp à 70 °C', formula: '11 × 41,6 × [1 − 0,0035 × 45] ≈ 386 V ≥ 200 V ✓' },
        { label: 'Vmp à 12 °C', formula: '11 × 41,6 × [1 + 0,0035 × 13] ≈ 478 V ≤ 800 V ✓' },
        { label: 'Couplage AC sur les Sunny Island : limite de 12 kW par SI 8.0H', formula: '3 × 10 = 30 kW ≤ 6 × 12 = 72 kW ✓' },
      ],
      result: '3 onduleurs de 10 kW, 2 chaînes de 11 modules chacun ; ratio DC/AC de 1,21',
    },
    {
      type: 'note',
      text: 'Pourquoi un ratio DC/AC de 1,21 ? Les modules ne délivrent presque jamais leur puissance crête sous 35 °C de chaleur et dans la poussière : un champ un peu plus grand que les onduleurs les fait travailler plus longtemps près de leur puissance nominale. Quelques heures par an, à midi en saison sèche, la production sera écrêtée ; la perte est inférieure à 1 %.',
    },

    { type: 'heading', text: '3 · La liste des équipements' },
    {
      type: 'solarEquipment',
      list: {
        title: 'Système isolé du centre de santé de Kalé',
        project: 'Centre de santé de Kalé',
        rows: [
          { tag: 'PV', item: 'Modules monocristallins 550 Wc, structure au sol', qty: 66, rating: '36,3 kWc', data: '6 chaînes de 11, inclinaison 12°, plein sud', protection: 'pas de fusible (1 chaîne / MPPT)', kwp: 36.3 },
          { tag: 'OND-R', item: 'Onduleurs réseau triphasés (couplage AC)', qty: 3, rating: '3 × 10 kW', data: '2 MPPT 200–800 V, à 5 m du champ', protection: 'sectionneur DC + parafoudre DC type 2', kw: 30 },
          { tag: 'SI', item: 'Onduleurs-chargeurs Sunny Island 8.0H', qty: 6, rating: '6 × 6 kW (25 °C)', data: '2 clusters triphasés, 32,6 kW à 45 °C', protection: 'fusibles DC par unité' },
          { tag: 'MCB', item: 'Multicluster-Box', qty: 1, rating: '≈ 55 kW', data: 'couplage des clusters, entrée groupe', protection: 'disjoncteurs intégrés' },
          { tag: 'BAT', item: 'Modules LFP 51,2 V 100 Ah homologués', qty: 14, rating: '71,7 kWh', data: 'BMS relié aux Sunny Island', protection: 'disjoncteur DC par branche', kwh: 71.7 },
          { tag: 'GE', item: 'Groupe électrogène existant', qty: 1, rating: '40 kVA', data: 'démarrage à 30 %, arrêt à 80 %', protection: 'limite d’entrée 37 A par phase' },
          { tag: 'TGBT', item: 'Tableau vital + tableau non critique', qty: 1, rating: '4P 63 A', data: 'délestage du non critique à 20 %', protection: 'différentiels 30 mA par départ' },
          { tag: 'LIA', item: 'Liaison champ ↔ local technique', qty: 1, rating: '80 m', data: '5G16 mm² en 400 V AC, enterrée', protection: 'disjoncteur 4P 63 A' },
        ],
      },
    },

    { type: 'heading', text: '4 · Le gasoil économisé' },
    {
      type: 'calc',
      title: 'Bilan économique',
      steps: [
        { label: 'Groupe : de 14 h par jour à ≈ 1,5 h par jour en moyenne', formula: 'gasoil ≈ 50 L/j  →  ≈ 7 L/j' },
        { label: 'Gasoil économisé', formula: '43 × 700 × 365 ≈ 11,0 M FCFA/an' },
        { label: 'Entretien du groupe divisé par 5 environ, maintenance du solaire en plus', formula: '≈ + 1,2 − 0,8 = + 0,4 M FCFA/an' },
        { label: 'Investissement indicatif (onduleurs, batteries, champ, pose, local)', formula: '≈ 64 M FCFA   →   retour ≈ 5,6 ans' },
      ],
      result: 'Environ 11,4 M FCFA économisés par an, et surtout l’électricité 24 h sur 24 pour la maternité',
    },
    {
      type: 'decision',
      title: 'Exploitation',
      choice: 'Contrat de maintenance de 5 ans avec SolTech Afrique, supervision à distance par portail en ligne, formation de l’agent technique du centre',
      reasons: [
        'Le portail alerte avant la panne : batterie qui vieillit, groupe qui démarre trop souvent, onduleur en défaut.',
        'Le nettoyage des modules (poussière, harmattan) relève de l’agent du centre, une fois par mois.',
        'La visite semestrielle du technicien couvre serrages, mesures et mises à jour.',
      ],
      rejected: 'Installer sans contrat ni supervision : dans les centres isolés, c’est la première cause d’abandon des systèmes solaires au bout de deux ou trois ans.',
    },
    { type: 'fiche', id: 'pv-inverter-finance', why: 'La rentabilité d’un système avec batterie sur un site sans réseau fiable.' },

    { type: 'heading', text: '5 · Ce que disent les normes' },
    {
      type: 'norms',
      title: 'Performance et maintenance',
      rows: [
        { norm: 'IEC 61724-1', rule: 'Surveillance des performances des systèmes PV : capteurs, indicateurs (PR, rendement spécifique).', result: 'portail et indicateurs' },
        { norm: 'IEC 62446-2', rule: 'Maintenance des systèmes PV : inspections, nettoyage, essais périodiques.', result: 'plan de maintenance' },
        { norm: 'IEC 62257-9-6', rule: 'Sélection et dimensionnement des systèmes d’électrification individuels et collectifs.', result: 'part solaire visée' },
        { norm: 'IEC 62548', rule: 'Conception des champs PV : tension maximale, protections, ratio DC/AC.', result: 'chaînes vérifiées' },
      ],
    },
    {
      type: 'regional',
      text: 'La poussière d’harmattan peut faire perdre 10 à 20 % de production en quelques semaines. Un nettoyage à l’eau, tôt le matin (jamais sur des modules brûlants), rend presque toute la puissance. Fanta fait installer un robinet près du champ, alimenté par le forage, et un racloir doux : l’agent du centre suit la production sur le portail et nettoie dès qu’elle baisse anormalement.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Champ = énergie de jour ÷ production par kWc + énergie de nuit ÷ (rendement de stockage × production par kWc).',
        'En site isolé, la part solaire varie avec les saisons : le groupe comble la saison des pluies.',
        'En couplage AC, la puissance des onduleurs réseau est limitée par les onduleurs-chargeurs.',
        'Supervision et maintenance sont aussi importantes que le dimensionnement.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Avec un couplage DC (rendement de stockage 0,95 au lieu de 0,90), quelle puissance crête faudrait-il ?',
      solution: ['Nuit : (43,4 / 0,95) / 4,1 ≈ 11,1 kWc au lieu de 11,7.', 'Total ≈ 33,2 kWc : 0,6 kWc de moins, soit un peu plus d’un module. L’écart de rendement pèse peu face à la contrainte des 80 m.'],
    },
    {
      type: 'exercise',
      question: 'Quelle Voc atteindrait une chaîne de 18 modules par une aube à 12 °C ? Serait-elle admise ?',
      solution: ['18 × 49,6 × 1,0351 ≈ 924 V ≤ 1 000 V : admise, de justesse.', 'À 19 modules : 975 V, à 20 modules : 1 027 V, refusée. On garde de la marge pour les nuits plus fraîches.'],
    },
  ],
};
