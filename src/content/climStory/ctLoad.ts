import { TopicContent } from '../types';

export const ctLoadContent: TopicContent = {
  title: 'Le bilan d’une chambre froide',
  subtitle: 'Ibrahim veut stocker 20 tonnes de jus par jour à 2 °C et ses fruits à 10 °C. Dans une chambre froide, ce ne sont plus les occupants ni le soleil qui comptent, mais les produits, les portes qui s’ouvrent et les ventilateurs. Ousmane refait le bilan avec cette nouvelle logique.',
  blocks: [
    { type: 'scene', text: 'Mois 7 · Usine Tropica, avec Ibrahim Traoré et Paul Ndiaye' },
    {
      type: 'objectives',
      items: [
        'Identifier les apports d’une chambre froide : parois, produits, air extérieur, équipements internes.',
        'Calculer la chaleur à retirer aux produits qui entrent.',
        'Réduire les entrées d’air par les portes.',
        'Passer d’un bilan sur 24 h à la puissance des compresseurs (temps de marche).',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '2 °C / 10 °C', label: 'chambre produits finis / chambre fruits' },
        { value: '≈ 23 kW', label: 'pour refroidir 20 t de jus par jour' },
        { value: '44,9 kW', label: 'bilan moyen sur 24 h, marge 10 %' },
        { value: '≈ 60 kW', label: 'puissance froid installée (marche 18 h/24)' },
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Ibrahim Traoré',
      role: 'client',
      text: 'Une chambre froide, c’est une grande pièce climatisée bien fermée, non ? Mettez-moi trois gros splits.',
    },
    {
      type: 'dialogue',
      speaker: 'Ousmane Cissé',
      role: 'engineer',
      text: 'Un split est fait pour garder 26 °C dans une pièce occupée. Ici il faut descendre à 2 °C, et surtout refroidir chaque jour 20 tonnes de jus qui arrivent à 25 °C : c’est cette chaleur-là qui domine. Il faut un groupe frigorifique conçu pour ça, avec des évaporateurs qui supportent le givre.',
    },

    { type: 'heading', text: '1 · Les apports d’une chambre froide' },
    {
      type: 'table',
      headers: ['Apport', 'Comment il se calcule', 'Poids typique'],
      rows: [
        ['Parois (murs, plafond, sol)', 'k × S × Δθ, avec des panneaux isolants', '5 à 15 %'],
        ['Produits entrants', 'm × c_p × Δθ / durée de refroidissement', '40 à 70 %'],
        ['Respiration des fruits', 'chaleur dégagée par kg de fruit stocké', 'quelques %'],
        ['Air extérieur (portes)', 'masse d’air × écart d’enthalpie', '5 à 20 %'],
        ['Ventilateurs, éclairage, chariots, personnes', 'puissance × durée d’utilisation', '5 à 10 %'],
      ],
    },

    { type: 'heading', text: '2 · Les produits, premier poste' },
    {
      type: 'calc',
      title: 'Refroidir le jus du jour (chambre à 2 °C)',
      steps: [
        { label: 'Entrée quotidienne : 20 t de jus en bouteilles, de 25 °C à 4 °C', formula: 'm = 20 000 kg   ;   Δθ = 25 − 4 = 21 °C' },
        { label: 'Chaleur massique du jus (proche de l’eau)', formula: 'c_p ≈ 3,8 kJ/(kg·K)' },
        { label: 'Refroidissement en 20 h', formula: 'Q = \\frac{20 000 × 3,8 × 21}{20 × 3 600} ≈ 22,2 kW' },
        { label: 'Bouteilles et palettes (2 t, c_p ≈ 1,5)', formula: 'Q ≈ \\frac{2 000 × 1,5 × 21}{72 000} ≈ 0,9 kW' },
      ],
      result: 'Environ 23 kW rien que pour les produits, soit plus de 80 % de cette chambre',
    },
    {
      type: 'note',
      text: 'Si le jus pouvait sortir de la ligne à 15 °C au lieu de 25 °C (refroidisseur à plaques alimenté par l’eau de la tour, par exemple), le poste produits baisserait de moitié. En froid industriel, le meilleur bilan commence souvent dans le process.',
    },

    { type: 'heading', text: '3 · Les portes : l’air chaud qui entre' },
    {
      type: 'calc',
      title: 'Entrées d’air de la chambre produits finis (384 m³)',
      steps: [
        { label: 'Usage intensif par chariot élévateur : environ 8 renouvellements par jour', formula: 'm_{air} = 8 × 384 × 1,2 ≈ 3 690 kg/jour' },
        { label: 'Air du hall (35 °C, 60 %) et air de la chambre (2 °C, 90 %) : écart d’enthalpie', formula: 'Δh ≈ 90 − 12 = 78 kJ/kg' },
        { label: 'Puissance moyenne', formula: 'Q = \\frac{3 690 × 78}{86 400} ≈ 3,3 kW' },
        { label: 'Avec rideau à lanières et porte rapide (≈ − 60 %)', formula: 'Q ≈ 1,3 kW  (dont ≈ 0,9 kW latent : de l’eau qui givrera)' },
      ],
      result: 'Le rideau à lanières économise environ 2 kW en permanence, et autant de givre sur les évaporateurs',
    },
    {
      type: 'decision',
      title: 'Accès à la chambre',
      choice: 'Porte rapide à enroulement + rideau à lanières, sas sur le quai de chargement',
      reasons: [
        'L’air du hall à 35 °C est très humide : chaque entrée apporte de l’eau qui se transforme en givre.',
        'Moins de givre, c’est moins de dégivrages et une température plus stable pour les produits.',
      ],
      rejected: 'Une porte battante classique laissée ouverte pendant les chargements : 2 à 3 kW de plus et des évaporateurs pris en glace.',
    },

    { type: 'heading', text: '4 · La feuille de bilan des deux chambres' },
    {
      type: 'heatLoadSheet',
      sheet: {
        project: 'Chambres froides Tropica',
        location: 'Hall de l’usine (35 °C, sous toiture 40 °C)',
        outdoor: 'hall 35 °C · 60 %',
        indoor: '+2 °C (jus) · +10 °C (fruits)',
        peakHour: 'bilan moyen sur 24 h',
        margin: 0.1,
        runHours: 18,
        rooms: [
          { name: 'Produits finis +2 °C (12 × 8 m)', area: 96, walls: 2714, glazing: 0, product: 23100, people: 90, lighting: 190, equipment: 1250, air: 400, peopleLat: 0, airLat: 900 },
          { name: 'Fruits +10 °C (8 × 6 m)', area: 48, walls: 1192, glazing: 0, product: 9700, people: 50, lighting: 100, equipment: 650, air: 150, peopleLat: 0, airLat: 360 },
        ],
      },
    },
    {
      type: 'calc',
      title: 'Du bilan à la puissance des compresseurs',
      steps: [
        { label: 'Parois de la chambre à 2 °C : panneaux de 100 mm (k ≈ 0,22), sol isolé (k ≈ 0,3)', formula: 'Q = 0,22 × 160 × 33 + 0,22 × 96 × 38 + 0,3 × 96 × 26 ≈ 2,7 kW' },
        { label: 'Équipements internes : 4 ventilateurs d’évaporateur (1 kW) et chariot', formula: 'Q ≈ 1,0 + 0,25 = 1,25 kW  (toute l’électricité devient chaleur)' },
        { label: 'Total moyen des deux chambres avec 10 % de marge', formula: 'Q_{24h} ≈ 40,8 × 1,10 ≈ 44,9 kW' },
        { label: 'Les compresseurs ne tournent que 18 h sur 24 (dégivrage, régulation, sécurité)', formula: 'Q_0 = 44,9 × \\frac{24}{18} ≈ 59,9 kW' },
      ],
      result: 'Puissance frigorifique à installer : environ 60 kW',
    },
    {
      type: 'note',
      text: 'Pourquoi ne pas compter 24 h de marche ? Il faut du temps pour dégivrer, et une machine qui tourne en permanence n’a plus aucune réserve le jour où il fait plus chaud ou où un camion arrive en retard. Les frigoristes dimensionnent sur 16 à 20 h de marche.',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'team',
      text: 'Avec un rendement de l’ordre de 2 en froid industriel, 60 kW de froid demandent environ 30 kW électriques : c’est exactement le départ « chambre froide » que j’avais réservé au TGBT de Tropica.',
    },
    { type: 'fiche', id: 'clim-heat-gains', why: 'Les apports de chaleur, un par un.' },
    { type: 'fiche', id: 'abc-special', why: 'Applications particulières : salles propres, froid, data centers.' },

    { type: 'heading', text: '5 · Ce que disent les normes' },
    {
      type: 'norms',
      title: 'Bilan et conception des chambres froides',
      rows: [
        { norm: 'ASHRAE Refrigeration Handbook', rule: 'Méthode de calcul des charges (chap. 24), tables de renouvellements d’air selon le volume et l’usage, chaleurs de respiration.', result: 'méthode utilisée ici' },
        { norm: 'EN 13164 / EN 14509', rule: 'Isolants et panneaux sandwich autoportants : performances thermiques et mécaniques.', result: 'panneaux 100 mm, k ≈ 0,22' },
        { norm: 'Codex / HACCP', rule: 'Maîtrise de la chaîne du froid pour les denrées : températures, enregistrement, alarmes.', result: 'enregistreur + alarme' },
        { norm: 'EN 378', rule: 'Sécurité de l’installation frigorifique : charge, salle des machines, détection.', result: 'voir étape 4' },
      ],
    },
    {
      type: 'regional',
      text: 'Les coupures de réseau sont l’ennemi des chambres froides : une chambre bien isolée et fermée perd environ 1 °C par heure. Awa avait prévu le groupe de secours de Tropica ; Ousmane ajoute un enregistreur de température avec alarme par SMS, et une consigne simple : pendant une coupure, on n’ouvre pas les portes.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Dans une chambre froide, les produits entrants dominent le bilan.',
        'Q = m × c_p × Δθ / durée : la quantité, l’écart de température et le temps de mise en froid font la puissance.',
        'Les portes font entrer de l’air chaud et humide : rideau, porte rapide, sas.',
        'Ventilateurs, éclairage et chariots à l’intérieur sont des apports à part entière.',
        'Bilan sur 24 h, puis puissance des compresseurs pour 16 à 20 h de marche.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Le jus sort de la ligne à 15 °C au lieu de 25 °C. Que devient le poste produits de la chambre à 2 °C ?',
      solution: ['Δθ = 15 − 4 = 11 °C au lieu de 21 °C.', 'Q = 20 000 × 3,8 × 11 / 72 000 ≈ 11,6 kW : près de deux fois moins.'],
    },
    {
      type: 'exercise',
      question: 'On dimensionne pour 20 h de marche au lieu de 18 h. Quelle puissance frigorifique ?',
      solution: ['Q_0 = 44,9 × 24 / 20 ≈ 53,9 kW.', 'Moins de puissance installée, mais aussi moins de réserve et moins de temps pour dégivrer.'],
    },
  ],
};
