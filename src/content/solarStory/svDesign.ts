import { TopicContent } from '../types';

export const svDesignContent: TopicContent = {
  title: 'Onduleur hybride, batterie et panneaux',
  subtitle: 'Avec 1,65 kW et 8,4 kWh à secourir chaque nuit, Fanta choisit la famille d’onduleur, sa puissance, la technologie et la taille de la batterie, puis la puissance crête que le toit peut accueillir.',
  blocks: [
    { type: 'scene', text: 'Année 2 · Bureau d’études, avec Awa' },
    {
      type: 'objectives',
      items: [
        'Choisir la famille d’onduleur adaptée à un site à délestages.',
        'Dimensionner l’onduleur hybride : puissance continue, phases, pointe.',
        'Dimensionner une batterie lithium à partir de l’énergie de nuit.',
        'Choisir la puissance crête du champ photovoltaïque.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '8 kW', label: 'onduleur hybride triphasé 48 V' },
        { value: '10,24 kWh', label: 'batterie LFP 51,2 V (2 × 100 Ah)' },
        { value: '6,6 kWc', label: '12 modules de 550 Wc' },
        { value: '≈ 24 kWh/j', label: 'production moyenne' },
      ],
    },

    { type: 'heading', text: '1 · Quelle famille d’onduleur ?' },
    { type: 'illustration', name: 'pv-system', props: { highlight: 'inverter' }, caption: 'Panneaux, batterie et onduleur : trois choix liés, faits dans cet ordre de contraintes' },
    {
      type: 'dialogue',
      speaker: 'Koffi Mensah',
      role: 'client',
      text: 'Mon voisin a mis des panneaux avec un onduleur « réseau ». Il m’a dit qu’il n’avait pas de courant pendant les coupures. C’est normal ?',
    },
    {
      type: 'dialogue',
      speaker: 'Fanta Coulibaly',
      role: 'engineer',
      text: 'Oui : un onduleur réseau s’arrête dès que le réseau disparaît, par sécurité. Pour vous, il faut un appareil capable de fabriquer lui-même le courant à partir d’une batterie : un onduleur hybride, qui réunit panneaux, batterie et réseau dans le même boîtier.',
    },
    {
      type: 'decision',
      title: 'Famille d’onduleur',
      choice: 'Onduleur hybride 48 V, conçu pour fonctionner durablement sans réseau (« batterie d’abord »), avec sortie secourue triphasée',
      reasons: [
        'Les délestages sont quotidiens : il faut un vrai fonctionnement autonome, pas un simple secours occasionnel.',
        'La batterie 48 V se trouve localement et s’agrandit facilement.',
        'Un seul appareil (couplage DC) : simple à poser et à surveiller pour une maison.',
      ],
      rejected: 'Onduleur réseau seul : aucun courant pendant les coupures. Onduleur-chargeur + onduleur réseau séparés : plus évolutif, mais plus cher et plus complexe que nécessaire ici.',
    },
    { type: 'fiche', id: 'pv-inverter-types', why: 'Les familles d’onduleurs et leur comportement pendant une coupure.' },

    { type: 'heading', text: '2 · La puissance de l’onduleur' },
    {
      type: 'calc',
      title: 'Vérifications de l’onduleur hybride',
      steps: [
        { label: 'Règle de base sur les charges secourues', formula: 'P_{continue} ≥ 1,2 × 1,65 ≈ 2,0 kW' },
        { label: 'Sortie triphasée : charges secourues réparties sur les trois phases', formula: 'L1 ≈ 0,63 kW  ;  L2 ≈ 0,42 kW  ;  L3 ≈ 0,60 kW' },
        { label: 'Hybride 8 kW triphasé, au garage à 35 °C (déclassement ≈ 5 %)', formula: '\\frac{8 × 0,95}{3} ≈ 2,5 kW par phase ≥ 1,2 × 0,63 ✓' },
        { label: 'Pointe sur L2 : charges en service + démarrage du réfrigérateur', formula: '0,42 + 0,9 ≈ 1,3 kW ≤ pointe de l’onduleur (2 × 2,67 kW pendant 10 s) ✓' },
        { label: 'Côté panneaux : 6,6 kWc pour 8 kW AC', formula: 'ratio DC/AC = \\frac{6,6}{8} ≈ 0,83' },
      ],
      result: 'Un hybride 8 kW triphasé couvre largement le secours et accepte tout le champ que le toit peut porter',
    },
    {
      type: 'decision',
      title: 'Puissance et nombre de phases',
      choice: 'Hybride triphasé 8 kW',
      reasons: [
        'Le circuit prioritaire d’Awa est réparti sur les trois phases : on le raccorde tel quel à la sortie secourue.',
        'Le secours reste léger (≈ 2 kW), mais l’onduleur doit aussi convertir 6,6 kWc de panneaux en journée.',
      ],
      rejected: 'Hybride monophasé 5 kW : il aurait fallu regrouper les circuits secourus sur une seule phase et limiter le champ à ≈ 6 kWc.',
    },
    { type: 'fiche', id: 'pv-inverter-sizing', why: 'Lire une fiche : continu, pointe, température, VA et W.' },

    { type: 'heading', text: '3 · La batterie' },
    {
      type: 'calc',
      title: 'Capacité de la batterie',
      steps: [
        { label: 'Énergie secourue la nuit (bilan)', formula: 'E_{nuit} = 8,37 kWh' },
        { label: 'Batterie lithium fer phosphate : profondeur de décharge 90 %, rendement 95 %', formula: 'C = \\frac{8,37}{0,90 × 0,95} ≈ 9,8 kWh' },
        { label: 'Modules de 5,12 kWh (51,2 V, 100 Ah)', formula: '2 modules = 10,24 kWh ≥ 9,8 kWh ✓' },
        { label: 'Courant de décharge pendant le délestage', formula: 'I = \\frac{1 650}{51,2} ≈ 32 A  (≈ 0,16 C)' },
      ],
      result: 'Batterie LFP 51,2 V – 200 Ah (10,24 kWh), communicante avec l’onduleur',
    },
    {
      type: 'table',
      headers: ['Critère', 'Lithium LFP', 'Plomb (AGM / GEL)'],
      rows: [
        ['Décharge utilisable', '80 à 90 %', '50 % pour durer'],
        ['Capacité nominale pour 8,4 kWh utiles', '≈ 10 kWh', '≈ 20 kWh'],
        ['Durée de vie à 35 °C', '≈ 4 000 à 6 000 cycles, 10 ans et plus', '≈ 3 à 4 ans'],
        ['Poids', '≈ 90 kg', '≈ 550 kg'],
        ['Prix d’achat', 'plus élevé', 'plus bas'],
      ],
    },
    {
      type: 'decision',
      title: 'Technologie de batterie',
      choice: 'Lithium fer phosphate (LFP) avec gestion électronique (BMS) reliée à l’onduleur',
      reasons: [
        'Deux fois moins de capacité à acheter pour la même énergie utile.',
        'Trois fois plus de durée de vie dans un garage chaud : sur 10 ans, la batterie au plomb serait changée deux ou trois fois.',
        'Le BMS informe l’onduleur de l’état de charge exact et protège chaque cellule.',
      ],
      rejected: 'Batteries au plomb : moins chères à l’achat, mais un coût sur 10 ans plus élevé et 550 kg à loger.',
    },
    { type: 'fiche', id: 'pv-batteries-controllers', why: 'Types de batteries, courants de charge et de décharge.' },

    { type: 'heading', text: '4 · La puissance des panneaux' },
    {
      type: 'calc',
      title: 'Combien de kWc ?',
      steps: [
        { label: 'Recharger la batterie chaque jour', formula: '\\frac{8,37}{0,95} ≈ 8,8 kWh' },
        { label: 'Charges secourues de jour + une partie des usages de jour de la maison', formula: '3,4 + 12,4 ≈ 15,8 kWh' },
        { label: 'Besoin total de jour, à 3,6 kWh/kWc/jour', formula: '\\frac{8,8 + 15,8}{3,6} ≈ 6,8 kWc' },
        { label: 'Le toit sud-est / sud-ouest accueille 12 modules de 550 Wc', formula: '12 × 0,55 = 6,6 kWc   →   6,6 × 3,6 ≈ 23,8 kWh/jour' },
        { label: 'Saison des pluies (≈ 3,8 h de soleil équivalent)', formula: '6,6 × 3,8 × 0,75 ≈ 18,8 kWh ≥ 8,8 + 3,4 ✓' },
      ],
      result: '6,6 kWc : la batterie est toujours rechargée, même en saison des pluies, et le surplus réduit la facture de jour',
    },
    {
      type: 'note',
      text: 'Économie attendue : environ 460 000 FCFA d’essence évitée par an, et près de 15 kWh de réseau en moins chaque jour de soleil (≈ 600 000 FCFA par an). Pour un investissement de l’ordre de 6 millions de FCFA, le retour se situe autour de 6 ans, avec en prime des soirées sans bruit de groupe.',
    },

    { type: 'heading', text: '5 · Ce que disent les normes' },
    {
      type: 'norms',
      title: 'Onduleurs hybrides et batteries',
      rows: [
        { norm: 'IEC 62109-1 / -2', rule: 'Sécurité des onduleurs PV et des fonctions de charge de batterie.', result: 'certificat exigé' },
        { norm: 'IEC 62619', rule: 'Sécurité des batteries lithium pour applications stationnaires.', result: 'batterie LFP certifiée' },
        { norm: 'IEC 62040 / IEC 62477', rule: 'Commutation vers la sortie secourue et sécurité des convertisseurs.', result: 'bascule < 20 ms' },
        { norm: 'UL 9540 / UL 1973 (USA)', rule: 'Systèmes de stockage d’énergie et batteries stationnaires.', result: 'équivalent nord-américain' },
      ],
    },
    {
      type: 'regional',
      text: 'Les marques d’hybrides 48 V à bas prix abondent sur le marché ouest-africain. Fanta exige : un certificat IEC 62109, une batterie compatible déclarée par le fabricant de l’onduleur (communication CAN ou RS485), un représentant local pour la garantie et une application de supervision. Une batterie lithium « sans marque » sans BMS communicant est une source fréquente de pannes, voire d’incendies.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Site à délestages : onduleur hybride capable de fonctionner sans réseau, pas un onduleur réseau.',
        'Onduleur : puissance continue ≥ 1,2 × charges secourues, phase par phase, puis vérification de la pointe.',
        'Batterie : énergie de nuit ÷ (profondeur de décharge × rendement) ; le lithium divise la capacité nécessaire par deux.',
        'Panneaux : recharger la batterie et couvrir le jour, à 3,6 kWh/kWc/jour sur la côte ; vérifier la saison des pluies.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Avec la clim de la chambre 2 en plus (11,37 kWh la nuit), quelle batterie LFP faut-il ?',
      solution: ['C = 11,37 / (0,90 × 0,95) ≈ 13,3 kWh.', 'Trois modules de 5,12 kWh (15,36 kWh).'],
    },
    {
      type: 'exercise',
      question: 'Le toit ne permettait que 8 modules (4,4 kWc). La batterie serait-elle encore rechargée en saison des pluies ?',
      solution: ['4,4 × 3,8 × 0,75 ≈ 12,5 kWh par jour.', 'Le besoin prioritaire est 8,8 + 3,4 = 12,2 kWh : tout juste. Il ne resterait rien pour la maison en journée.'],
    },
  ],
};
