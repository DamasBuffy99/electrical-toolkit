import { TopicContent } from '../types';

export const scNeedsContent: TopicContent = {
  title: 'Le bilan d’un centre de santé',
  subtitle: 'À Kalé, le centre de santé n’a jamais vu le réseau. Un groupe de 40 kVA tourne 14 heures par jour, les nuits se passent à la lampe torche et les vaccins dépendent de réfrigérateurs à gaz. Fanta Coulibaly vient avec le Dr Mamadou Sy faire le bilan de chaque service.',
  blocks: [
    { type: 'scene', text: 'Mois 1 · Centre de santé de Kalé, avec le Dr Mamadou Sy et Aminata Koné (sage-femme)' },
    {
      type: 'objectives',
      items: [
        'Établir le bilan énergétique d’un établissement de santé isolé, service par service.',
        'Repérer les charges critiques, la pointe simultanée et le plus gros appel au démarrage.',
        'Mesurer ce que coûte aujourd’hui le groupe électrogène.',
        'Fixer les objectifs du futur système : continuité, part solaire, groupe en secours.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '≈ 134 kWh/j', label: 'consommation totale' },
        { value: '43 kWh', label: 'consommés la nuit' },
        { value: '17,2 kW', label: 'pointe simultanée, ≈ 5,7 kW par phase' },
        { value: '≈ 14 M FCFA/an', label: 'de gasoil et d’entretien aujourd’hui' },
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Dr Mamadou Sy',
      role: 'client',
      text: 'La nuit dernière, Aminata a fait un accouchement à la lampe frontale, parce qu’on coupe le groupe à 22 h pour économiser le gasoil. Et chaque semaine on se demande si les vaccins ont tenu au froid.',
    },
    {
      type: 'dialogue',
      speaker: 'Fanta Coulibaly',
      role: 'engineer',
      text: 'Le solaire peut changer ça, à condition de ne rien oublier dans le bilan. Dans un centre de santé, une charge oubliée, c’est une coupure le jour où l’on en a le plus besoin. On fait le tour de chaque service ensemble, avec les heures réelles d’utilisation.',
    },

    { type: 'heading', text: '1 · Le bilan service par service' },
    { type: 'illustration', name: 'pv-system', props: { highlight: 'loads' }, caption: 'Un système isolé : tout ce qui est consommé doit être produit sur place, la nuit comme le jour' },
    {
      type: 'consumptionSheet',
      sheet: {
        project: 'Centre de santé de Kalé',
        simultaneity: 0.85,
        items: [
          { name: 'Éclairage LED intérieur et extérieur', power: 1200, qty: 1, hDay: 3, hNight: 8 },
          { name: 'Réfrigérateurs vaccins et médicaments', power: 150, qty: 3, hDay: 8, hNight: 8, surge: 800 },
          { name: 'Clim maternité et salle d’accouchement (moyenne)', power: 1200, qty: 2, hDay: 8, hNight: 6 },
          { name: 'Clim laboratoire et pharmacie (moyenne)', power: 900, qty: 2, hDay: 9, hNight: 0 },
          { name: 'Ventilateurs hospitalisation', power: 60, qty: 12, hDay: 6, hNight: 8 },
          { name: 'Laboratoire (analyseurs, centrifugeuse)', power: 2500, qty: 1, hDay: 6, hNight: 0, surge: 3000 },
          { name: 'Autoclave de stérilisation (triphasé)', power: 6000, qty: 1, hDay: 1.5, hNight: 0 },
          { name: 'Concentrateurs d’oxygène', power: 400, qty: 2, hDay: 6, hNight: 6 },
          { name: 'Informatique, échographe, radio', power: 600, qty: 1, hDay: 8, hNight: 2 },
          { name: 'Pompe du forage (3 kW)', power: 3000, qty: 1, hDay: 3, hNight: 0, surge: 9000 },
          { name: 'Logements du personnel', power: 800, qty: 1, hDay: 2, hNight: 5 },
        ],
      },
    },
    {
      type: 'calc',
      title: 'Ce que dit le bilan',
      steps: [
        { label: 'Énergie par jour', formula: 'E ≈ 91,1 (jour) + 43,4 (nuit) ≈ 134,5 kWh/jour' },
        { label: 'Pointe simultanée', formula: 'P = 0,85 × 20 270 ≈ 17,2 kW   →   ≈ 5,7 kW par phase' },
        { label: 'Plus gros appel : la pompe, sur la phase 1', formula: 'I_d ≈ 3 × I_n   →   ≈ 9 kW pendant 1 à 2 s' },
        { label: 'Charges critiques (froid, oxygène, accouchement, éclairage)', formula: '≈ 5,5 kW à garantir à toute heure' },
      ],
      result: '134 kWh par jour, dont un tiers la nuit ; 17 kW de pointe ; une pompe qui appelle 9 kW au démarrage',
    },
    {
      type: 'note',
      text: 'Le bilan fait aussi apparaître ce qui peut être déplacé : l’autoclave (6 kW), la pompe et le laboratoire fonctionneront en milieu de journée, quand le soleil produit le plus. C’est la gestion de la demande : chaque kWh consommé directement de jour évite de passer par la batterie.',
    },

    { type: 'heading', text: '2 · Ce que coûte la situation actuelle' },
    {
      type: 'calc',
      title: 'Le groupe de 40 kVA',
      steps: [
        { label: 'Fonctionnement 14 h par jour, souvent à 25–30 % de charge', formula: 'consommation ≈ 3,6 L/h  →  ≈ 50 L/jour' },
        { label: 'Gasoil livré à Kalé (transport compris)', formula: '50 × 700 × 365 ≈ 12,8 millions de FCFA/an' },
        { label: 'Vidanges, filtres, pièces, révision toutes les 1 000 h', formula: '≈ 1,5 million de FCFA/an' },
      ],
      result: '≈ 14 millions de FCFA par an, pour 10 heures de nuit sans électricité',
    },
    {
      type: 'decision',
      title: 'Objectifs du système',
      choice: 'Électricité 24 h sur 24, au moins 85 % d’énergie solaire sur l’année, groupe conservé en secours et piloté automatiquement',
      reasons: [
        'La continuité de nuit est la première exigence médicale (accouchements, oxygène, vaccins).',
        'Viser 100 % solaire imposerait une batterie énorme pour les quelques jours sans soleil de la saison des pluies.',
        'Le groupe existant, démarré seulement quand la batterie est basse, devient une assurance bon marché.',
      ],
      rejected: 'Un système 100 % solaire sans groupe : 2 à 3 fois plus de batteries pour couvrir trois jours de pluie, et aucune réserve en cas de panne.',
    },
    { type: 'fiche', id: 'pv-design-steps', why: 'La méthode de dimensionnement d’un système isolé.' },

    { type: 'heading', text: '3 · Ce que disent les normes' },
    {
      type: 'norms',
      title: 'Électrification des établissements de santé',
      rows: [
        { norm: 'OMS / UNICEF (PQS)', rule: 'Réfrigérateurs de vaccins homologués, dont modèles solaires à entraînement direct ; chaîne du froid 2–8 °C.', result: 'froid vaccinal garanti' },
        { norm: 'IEC 62257', rule: 'Systèmes d’électrification rurale : évaluation des besoins, conception, sécurité.', result: 'cadre de conception' },
        { norm: 'IEC 60364-7-710', rule: 'Locaux médicaux : continuité d’alimentation selon le groupe de locaux.', result: 'salle d’accouchement prioritaire' },
        { norm: 'IEEE 1562 / 1013', rule: 'Dimensionnement des champs et des batteries des systèmes PV autonomes.', result: 'bilan jour / nuit' },
      ],
    },
    {
      type: 'regional',
      text: 'Des programmes comme l’initiative « Healthcare facilities electrification » soutiennent l’équipement solaire des centres de santé ruraux en Afrique de l’Ouest. Ils exigent en général un bilan détaillé, un contrat de maintenance et une supervision à distance. Fanta prépare le dossier pour le district sanitaire avec ces trois éléments.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'En site isolé, le bilan doit être exhaustif : une charge oubliée devient une coupure.',
        'Séparer jour et nuit ; repérer la pointe par phase et le plus gros appel.',
        'Déplacer les gros consommateurs (autoclave, pompe, laboratoire) aux heures de soleil.',
        'Le coût du gasoil actuel fixe l’enjeu économique du projet.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Si l’autoclave fonctionnait le soir (1,5 h de nuit), que deviendrait l’énergie de nuit ?',
      solution: ['43,4 + 6 × 1,5 = 52,4 kWh, soit 21 % de plus.', 'La batterie devrait grandir d’autant : planifier la stérilisation en journée est une économie directe.'],
    },
    {
      type: 'exercise',
      question: 'Aujourd’hui, le groupe fournit environ 110 kWh par jour avec 50 L de gasoil. Combien coûte un kWh produit par le groupe ?',
      solution: ['50 / 110 ≈ 0,45 L/kWh ; 0,45 × 700 ≈ 318 FCFA de gasoil par kWh.', 'Avec l’entretien, près de 360 FCFA/kWh : trois fois le prix du réseau en ville. C’est ce coût que le solaire va remplacer.'],
    },
  ],
};
