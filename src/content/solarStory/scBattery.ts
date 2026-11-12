import { TopicContent } from '../types';

export const scBatteryContent: TopicContent = {
  title: 'Le parc de batteries',
  subtitle: 'La batterie doit tenir la nuit, la matinée nuageuse qui suit, et dix ans dans la chaleur. Fanta compare lithium et plomb stationnaire, calcule la capacité, les courants et la ventilation du local, et explique au Dr Sy pourquoi la batterie la moins chère à l’achat est souvent la plus chère.',
  blocks: [
    { type: 'scene', text: 'Mois 2 · Bureau d’études, avec le Dr Mamadou Sy' },
    {
      type: 'objectives',
      items: [
        'Dimensionner une batterie à partir de l’énergie de nuit et d’une réserve.',
        'Comparer lithium (LFP) et plomb stationnaire (OPzV) sur la durée de vie.',
        'Vérifier les courants de charge et de décharge.',
        'Concevoir le local des batteries : température, ventilation, sécurité.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '52 kWh', label: 'énergie utile à garantir' },
        { value: '71,7 kWh', label: '14 modules LFP de 5,12 kWh' },
        { value: '≈ 0,25 C', label: 'décharge à la pointe de 17 kW' },
        { value: '≤ 30 °C', label: 'température visée dans le local batteries' },
      ],
    },

    { type: 'heading', text: '1 · Combien de kWh ?' },
    { type: 'illustration', name: 'pv-system', props: { highlight: 'batteries' }, caption: 'La batterie fait le lien entre le soleil du jour et les besoins de la nuit' },
    {
      type: 'calc',
      title: 'Capacité de la batterie lithium',
      steps: [
        { label: 'Énergie de nuit (bilan)', formula: 'E_{nuit} = 43,4 kWh' },
        { label: 'Réserve de 20 % pour un début de matinée sans soleil, avant le démarrage du groupe', formula: 'E_{utile} = 43,4 × 1,2 ≈ 52 kWh' },
        { label: 'LFP : décharge utile 85 % (le groupe démarre à 30 %, marge de vieillissement), rendement 95 %', formula: 'C = \\frac{52}{0,85 × 0,95} ≈ 64,4 kWh' },
        { label: 'Modules de 5,12 kWh (51,2 V, 100 Ah) homologués pour les Sunny Island', formula: '14 modules = 71,7 kWh (1 400 Ah)' },
      ],
      result: 'Batterie LFP 51,2 V – 1 400 Ah (71,7 kWh), répartie entre les deux clusters',
    },
    {
      type: 'calc',
      title: 'Courants dans la batterie',
      steps: [
        { label: 'Décharge à la pointe de 17,2 kW (rendement des onduleurs 94 %)', formula: 'I = \\frac{17 200}{48 × 0,94} ≈ 381 A  →  \\frac{381}{1 400} ≈ 0,27 C' },
        { label: 'Décharge moyenne de nuit (43,4 kWh sur 12 h)', formula: 'I ≈ \\frac{3 600}{48} ≈ 75 A  (≈ 0,05 C)' },
        { label: 'Charge maximale en milieu de journée (≈ 20 kW de surplus solaire)', formula: 'I ≈ \\frac{20 000}{54} ≈ 370 A  (≈ 0,26 C)' },
      ],
      result: 'Tous les courants restent sous 0,5 C, limite courante des modules LFP : la batterie travaille sans contrainte',
    },
    { type: 'fiche', id: 'pv-batteries-controllers', why: 'Courant de charge, courant de décharge, types de batteries.' },

    { type: 'heading', text: '2 · Lithium ou plomb stationnaire ?' },
    {
      type: 'table',
      headers: ['Critère', 'LFP 71,7 kWh', 'Plomb OPzV pour la même énergie utile'],
      rows: [
        ['Décharge utile', '85 %', '50 % pour atteindre 1 500 cycles'],
        ['Capacité nominale', '71,7 kWh (1 400 Ah en 48 V)', '≈ 122 kWh (24 éléments de 2 V – 2 500 Ah)'],
        ['Masse', '≈ 650 kg', '≈ 4 tonnes'],
        ['Durée de vie à 30 °C', '≈ 6 000 cycles, 15 ans', '≈ 1 500 cycles, 5 à 6 ans'],
        ['Rendement de cycle', '≈ 95 %', '≈ 80 %'],
        ['Entretien', 'aucun, surveillance par le BMS', 'contrôle des tensions, égalisation, ventilation'],
        ['Prix d’achat', '≈ 1,5 fois plus cher', 'référence'],
      ],
    },
    {
      type: 'calc',
      title: 'Coût sur 15 ans (ordres de grandeur)',
      steps: [
        { label: 'LFP : un seul parc sur 15 ans', formula: '≈ 22 M FCFA' },
        { label: 'OPzV : deux remplacements sur 15 ans', formula: '≈ 15 M × 3 = 45 M FCFA' },
        { label: 'Énergie perdue en plus par le plomb (rendement 80 % au lieu de 95 %)', formula: '≈ 43 kWh × 15 % × 365 ≈ 2,4 MWh/an de solaire ou de gasoil en plus' },
      ],
      result: 'Le lithium coûte deux fois moins cher sur la durée de vie du centre',
    },
    {
      type: 'decision',
      title: 'Technologie de batterie',
      choice: 'Lithium fer phosphate (LFP) en modules homologués par SMA, avec BMS communiquant avec les Sunny Island',
      reasons: [
        'Deux fois moins cher sur 15 ans, malgré un prix d’achat plus élevé.',
        '650 kg au lieu de 4 tonnes : pas de dalle renforcée, transport possible par pick-up jusqu’à Kalé.',
        'Aucun entretien d’électrolyte : un atout majeur pour un site isolé sans technicien sur place.',
      ],
      rejected: 'Plomb stationnaire OPzV : robuste et moins cher à l’achat, mais trois parcs sur 15 ans, une ventilation obligatoire et 4 tonnes à loger.',
    },

    { type: 'heading', text: '3 · Le local des batteries' },
    {
      type: 'text',
      text: 'La température est l’ennemi des batteries : chaque tranche de 10 °C au-dessus de 25 °C divise environ par deux la durée de vie d’une batterie au plomb, et réduit sensiblement celle du lithium. Fanta place les batteries dans une pièce séparée, à l’intérieur du local technique, orientée nord, isolée en toiture, ventilée, et refroidie par un petit climatiseur inverter alimenté par le système lui-même.',
    },
    {
      type: 'calc',
      title: 'Et si l’on avait choisi le plomb : la ventilation obligatoire',
      steps: [
        { label: 'Hydrogène dégagé en charge (méthode EN IEC 62485-2)', formula: 'Q = 0,05 × n × I_{gaz} × C × 10^{−3}  (m³/h)' },
        { label: '24 éléments, 2 500 Ah, I_{gaz} = 8 mA/Ah en charge rapide pour du plomb étanche', formula: 'Q = 0,05 × 24 × 8 × 2 500 × 10^{−3} = 24 m³/h' },
      ],
      result: 'Une ventilation d’au moins 24 m³/h serait exigée ; une batterie LFP ne dégage pas d’hydrogène en fonctionnement normal',
    },
    {
      type: 'bullets',
      items: [
        'Protection de chaque branche de batterie par fusible ou disjoncteur DC au plus près des bornes (plusieurs kA de court-circuit).',
        'Câbles de même longueur entre chaque module et le jeu de barres, pour que les courants se répartissent également.',
        'Extincteur adapté (CO₂ ou poudre) à l’extérieur de la pièce, panneau d’avertissement, accès réservé.',
        'Supervision de l’état de charge, des températures et des alarmes du BMS sur le portail en ligne.',
      ],
    },

    { type: 'heading', text: '4 · Ce que disent les normes' },
    {
      type: 'norms',
      title: 'Batteries stationnaires',
      rows: [
        { norm: 'IEC 62619 / IEC 62620', rule: 'Sécurité et performances des batteries lithium stationnaires.', result: 'modules LFP certifiés' },
        { norm: 'EN IEC 62485-2', rule: 'Sécurité des installations de batteries : ventilation, distances, protections.', result: '24 m³/h si plomb' },
        { norm: 'IEC 60896-21/22', rule: 'Batteries plomb stationnaires à soupape (VRLA) : essais et exigences.', result: 'référence OPzV' },
        { norm: 'NFPA 855', rule: 'Installation des systèmes de stockage d’énergie (Amérique du Nord) : distances, ventilation, extinction.', result: 'pratique nord-américaine' },
      ],
    },
    {
      type: 'regional',
      text: 'Le transport compte en zone rurale : une piste en saison des pluies, un pont limité à 3,5 tonnes. Les 4 tonnes de batteries au plomb auraient demandé un camion et plusieurs voyages. Pensez aussi au recyclage : les batteries au plomb usagées sont souvent démontées dans de mauvaises conditions ; exigez du fournisseur une reprise en fin de vie, quelle que soit la technologie.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Capacité = énergie de nuit × réserve ÷ (décharge utile × rendement).',
        'Vérifier les courants en C : décharge à la pointe et charge maximale au soleil.',
        'Le lithium coûte plus cher à l’achat, deux fois moins sur la durée de vie, et ne demande ni entretien ni ventilation d’hydrogène.',
        'Un local frais, ventilé et protégé allonge la vie des batteries et des onduleurs.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Le Dr Sy voudrait 2 jours d’autonomie sans groupe ni soleil. Quelle capacité LFP faudrait-il ?',
      solution: ['Énergie : 2 × 134,5 ≈ 269 kWh (deux journées complètes).', 'C = 269 / (0,85 × 0,95) ≈ 333 kWh : près de cinq fois la batterie retenue. Le groupe de secours est bien plus économique pour ces cas rares.'],
    },
    {
      type: 'exercise',
      question: 'Quelle ventilation faudrait-il pour une batterie au plomb de 24 éléments de 1 500 Ah ?',
      solution: ['Q = 0,05 × 24 × 8 × 1 500 × 10⁻³ = 14,4 m³/h.', 'Une simple ventilation naturelle haute et basse dimensionnée pour ce débit suffit, à condition qu’elle ne soit jamais obstruée.'],
    },
  ],
};
