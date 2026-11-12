import { TopicContent } from '../types';

export const scInvertersContent: TopicContent = {
  title: 'Onduleurs-chargeurs et groupe électrogène',
  subtitle: 'Sans réseau, ce sont les onduleurs qui fabriquent le 230/400 V, jour et nuit. Fanta doit les choisir pour 17 kW de pointe dans un local à 45 °C, une pompe qui appelle 9 kW, un champ PV à 80 m et un groupe qui ne doit plus démarrer qu’en secours.',
  blocks: [
    { type: 'scene', text: 'Mois 2 · Bureau d’études, avec Awa Diallo' },
    {
      type: 'objectives',
      items: [
        'Choisir l’architecture d’un système isolé triphasé : couplage AC ou DC.',
        'Dimensionner les onduleurs-chargeurs à la température du local, phase par phase.',
        'Vérifier la pointe de démarrage du plus gros moteur.',
        'Régler la gestion du groupe électrogène et le délestage des charges non critiques.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '6 × SI 8.0H', label: 'deux clusters, Multicluster-Box' },
        { value: '32,6 kW', label: 'continus à 45 °C' },
        { value: '22 kW', label: 'de pointe sur la phase de la pompe' },
        { value: '30 %', label: 'état de charge qui démarre le groupe' },
      ],
    },

    { type: 'heading', text: '1 · L’architecture' },
    {
      type: 'dialogue',
      speaker: 'Dr Mamadou Sy',
      role: 'client',
      text: 'Le seul terrain dégagé pour les panneaux est près du forage, à 80 mètres du local technique. C’est un problème ?',
    },
    {
      type: 'dialogue',
      speaker: 'Fanta Coulibaly',
      role: 'engineer',
      text: 'Pas si l’on transporte l’énergie en alternatif. Les onduleurs réseau seront posés près des panneaux, et une simple liaison en 400 V les reliera aux onduleurs-chargeurs du local. En courant continu basse tension, il faudrait des câbles énormes pour 80 mètres.',
    },
    {
      type: 'decision',
      title: 'Architecture du système isolé',
      choice: 'Couplage AC : onduleurs-chargeurs Sunny Island + batterie 48 V au local technique, onduleurs réseau Sunny Tripower près du champ, groupe raccordé aux Sunny Island',
      reasons: [
        'Panneaux éloignés : la liaison se fait en 400 V alternatif, avec des câbles ordinaires.',
        'Système évolutif : on ajoutera des onduleurs réseau et des panneaux si le centre grandit.',
        'Les Sunny Island pilotent le groupe : démarrage et arrêt automatiques selon l’état de charge.',
      ],
      rejected: 'Couplage DC avec des régulateurs MPPT au local : rendement de stockage meilleur, mais 80 m de câbles DC basse tension de très forte section.',
    },
    { type: 'fiche', id: 'pv-coupling', why: 'Couplage DC ou AC : rendements, évolutivité, panneaux éloignés.' },

    { type: 'heading', text: '2 · Combien d’onduleurs-chargeurs ?' },
    { type: 'image', source: require('../../../assets/solar/inverters/power-durations.webp'), caption: 'Un Sunny Island « 8.0H » ne tient que 6 kW en continu à 25 °C, et 5,43 kW à 45 °C', height: 240 },
    {
      type: 'calc',
      title: 'Vérification par phase (local technique à 45 °C)',
      steps: [
        { label: 'Puissance continue requise par phase, marge 1,2', formula: 'P = 1,2 × 5,7 ≈ 6,8 kW' },
        { label: 'Un SI 8.0H par phase à 45 °C', formula: '5,43 kW < 6,8 kW  ✗' },
        { label: 'Pointe sur L1 : charge en service + démarrage de la pompe', formula: '5,7 + 9 = 14,7 kW > 11 kW pendant 3 s  ✗' },
        { label: 'Deux SI 8.0H par phase', formula: '10,9 kW ≥ 6,8 kW ✓   ;   2 × 11 = 22 kW ≥ 14,7 kW ✓' },
      ],
      result: '6 Sunny Island 8.0H : deux clusters de trois, couplés par une Multicluster-Box',
    },
    { type: 'image', source: require('../../../assets/solar/inverters/cluster-example.webp'), caption: '3 unités : sous-dimensionné à 45 °C et décrochage au démarrage de la pompe ; 6 unités : correct', height: 260 },
    {
      type: 'decision',
      title: 'Onduleurs-chargeurs',
      choice: '6 Sunny Island 8.0H en multicluster, local technique ombragé et ventilé',
      reasons: [
        'Le nom « 8.0H » désigne la puissance sur 30 minutes : en continu à 45 °C, il ne reste que 5,43 kW par unité.',
        'Deux unités par phase tiennent la charge et le démarrage de la pompe avec de la marge.',
        'Une unité peut tomber en panne sans arrêter le centre : la phase concernée tourne sur l’autre unité, à puissance réduite.',
      ],
      rejected: 'Trois Sunny Island choisis sur leur nom commercial : coupures aux heures chaudes et à chaque démarrage de la pompe. Alternative étudiée : trois MultiPlus-II 48/15000, un par phase, à confirmer sur la courbe de déclassement à 45 °C.',
    },
    { type: 'fiche', id: 'pv-inverter-sizing', why: 'Puissance continue, pointe, température : la méthode complète.' },
    { type: 'fiche', id: 'pv-sma-victron', why: 'Les gammes SMA et Victron, clusters et multiclusters.' },

    { type: 'heading', text: '3 · Le groupe, piloté par les onduleurs' },
    {
      type: 'calc',
      title: 'Limiter la puissance demandée au groupe',
      steps: [
        { label: 'Groupe existant : 40 kVA, soit 32 kW à cos φ 0,8 ; on le charge au plus à 80 %', formula: 'P_{groupe} ≤ 0,8 × 32 ≈ 25,6 kW' },
        { label: 'Les Sunny Island chargent la batterie en même temps qu’ils alimentent le centre : sans limite, ils demanderaient', formula: '17 kW + charge ≈ 17 + 30 > 40 kW  ✗' },
        { label: 'Limite de courant d’entrée réglée dans les Sunny Island', formula: 'I = \\frac{25 600}{3 × 230} ≈ 37 A par phase' },
      ],
      result: 'Courant d’entrée groupe limité à 37 A par phase : le groupe tourne près de son meilleur rendement, sans surcharge',
    },
    {
      type: 'table',
      headers: ['Réglage de gestion', 'Valeur', 'Effet'],
      rows: [
        ['Démarrage du groupe', 'état de charge ≤ 30 %', 'jamais de batterie vide'],
        ['Arrêt du groupe', 'état de charge ≥ 80 %, ou soleil suffisant', 'le solaire finit la charge, gratuitement'],
        ['Démarrage forcé', 'charge > 28 kW pendant 2 min', 'pointe exceptionnelle couverte'],
        ['Délestage des charges non critiques', 'état de charge ≤ 20 %', 'clims du labo et logements coupés, le vital est gardé'],
        ['Charge d’égalisation (si plomb)', 'non applicable en lithium', '—'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'team',
      text: 'Je sépare le tableau en deux : un jeu de barres « vital » (maternité, froid, oxygène, éclairage) et un jeu « non critique » commandé par un contacteur que les Sunny Island ouvrent à 20 % d’état de charge. Comme à la clinique Espoir, c’est la hiérarchie des charges qui garantit la continuité.',
    },

    { type: 'heading', text: '4 · Ce que disent les normes' },
    {
      type: 'norms',
      title: 'Systèmes isolés et groupes hybrides',
      rows: [
        { norm: 'IEC 62257-9-2', rule: 'Micro-réseaux d’électrification rurale : conception, sécurité, protection.', result: 'architecture et protections' },
        { norm: 'IEC 62109-2', rule: 'Exigences particulières des onduleurs, dont les fonctions de formation de réseau.', result: 'Sunny Island certifiés' },
        { norm: 'ISO 8528', rule: 'Groupes électrogènes : puissances assignées (secours, principale, continue) et performances.', result: 'groupe en puissance principale' },
        { norm: 'IEEE 1547.4', rule: 'Conception et exploitation des systèmes îlotés avec production distribuée.', result: 'gestion de l’îlotage' },
      ],
    },
    {
      type: 'regional',
      text: 'Dans les centres de santé ruraux, le local technique est souvent un simple abri en tôle exposé au soleil : 50 °C l’après-midi. Fanta fait construire un local en parpaings, sous l’ombre du préau, avec ventilation haute et basse et un extracteur thermostaté. Gagner 5 à 10 °C dans le local, c’est gagner de la puissance d’onduleur et des années de batterie.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Panneaux éloignés ou système appelé à grandir : couplage AC.',
        'Onduleurs-chargeurs dimensionnés en continu à la température du local, phase par phase, puis vérifiés sur la pointe du plus gros moteur.',
        'Le groupe est piloté par les onduleurs : démarrage sur état de charge bas, arrêt quand le solaire peut finir.',
        'Limiter le courant demandé au groupe ; délester le non critique quand la batterie baisse.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Si le local était climatisé à 30 °C (≈ 5,9 kW continus par SI 8.0H), un seul Sunny Island par phase suffirait-il ?',
      solution: ['Continu : 5,9 kW < 6,8 kW ✗.', 'Pointe : 14,7 kW > 11 kW ✗. Même au frais, il en faut deux par phase : ici, c’est la pompe qui impose le nombre.'],
    },
    {
      type: 'exercise',
      question: 'Avec un groupe de 60 kVA, quelle limite de courant d’entrée régler par phase ?',
      solution: ['60 kVA × 0,8 = 48 kW ; 80 % : 38,4 kW.', 'I = 38 400 / (3 × 230) ≈ 56 A par phase.'],
    },
  ],
};
