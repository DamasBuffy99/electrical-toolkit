import { TopicContent } from '../types';

export const spNeedsContent: TopicContent = {
  title: 'Combien d’eau, à quelle hauteur ?',
  subtitle: 'À Sonkélé, la pompe diesel du forage tombe en panne deux mois par an et les femmes repartent au marigot. Avant de parler de panneaux, Fanta Coulibaly compte les litres, lit l’essai de pompage du forage et calcule la hauteur à laquelle il faut monter l’eau.',
  blocks: [
    { type: 'scene', text: 'Mois 1 · Village de Sonkélé, avec Adama Ouédraogo (chef du village) et Rokia Sanogo (trésorière du comité de l’eau)' },
    {
      type: 'objectives',
      items: [
        'Estimer le besoin en eau d’un village à l’horizon de dix ans.',
        'Lire un essai de pompage : niveau statique, niveau dynamique, rabattement.',
        'Calculer la hauteur manométrique totale (HMT) avec les pertes de charge.',
        'Traduire le besoin en énergie hydraulique et choisir le mois de dimensionnement.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '75 m³/j', label: 'besoin journalier dans 10 ans' },
        { value: '61 m', label: 'hauteur manométrique totale' },
        { value: '12,5 kWh/j', label: 'énergie hydraulique à fournir' },
        { value: 'avril', label: 'mois le plus contraignant' },
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Adama Ouédraogo',
      role: 'client',
      text: 'La pompe diesel a encore cassé en mars. Deux mois sans eau au château, et le gasoil coûte plus cher chaque année. Les gens ne veulent plus payer pour une pompe qui ne marche pas.',
    },
    {
      type: 'dialogue',
      speaker: 'Fanta Coulibaly',
      role: 'engineer',
      text: 'Une pompe solaire n’a ni gasoil ni vidange, et sa panne la plus fréquente se répare en changeant une pièce. Mais elle ne pompe que lorsqu’il y a du soleil : il faut donc bien connaître le besoin et stocker l’eau, pas l’électricité. Commençons par compter.',
    },

    { type: 'heading', text: '1 · Le besoin en eau' },
    {
      type: 'calc',
      title: 'Besoin journalier à 10 ans',
      steps: [
        { label: 'Population : 1 500 habitants, croissance de 3 % par an', formula: 'N = 1 500 × 1,03^{10} ≈ 2 000 habitants' },
        { label: 'Consommation aux bornes-fontaines : 30 L par personne et par jour', formula: '2 000 × 30 = 60 m³/j' },
        { label: 'École (450 élèves × 5 L) et poste de santé ; abreuvoir des petits ruminants', formula: '3 + 5 = 8 m³/j' },
        { label: 'Pertes du réseau et aux bornes : 10 %', formula: '(60 + 8) × 1,1 ≈ 75 m³/j' },
      ],
      result: '75 m³ par jour à fournir à l’horizon de dix ans',
    },
    {
      type: 'table',
      headers: ['Période', 'Besoin (m³/j)', 'Soleil équivalent (h)', 'Rapport besoin / soleil'],
      rows: [
        ['Avril (fin de saison sèche)', '75', '5,8', '12,9'],
        ['Décembre (harmattan)', '65', '5,2', '12,5'],
        ['Août (pluies, puits remplis)', '55', '4,5', '12,2'],
      ],
    },
    {
      type: 'note',
      text: 'Le mois de dimensionnement n’est pas forcément le moins ensoleillé : c’est celui où le rapport besoin / soleil est le plus élevé. À Sonkélé, c’est avril, quand il fait le plus chaud et que les puits traditionnels sont à sec. En août, le soleil baisse, mais le village boit l’eau de pluie.',
    },

    { type: 'heading', text: '2 · Ce que dit le forage' },
    {
      type: 'dialogue',
      speaker: 'Rokia Sanogo',
      role: 'client',
      text: 'Le forage a été fait en 2009 par un projet. On a gardé le dossier dans le coffre du comité, je ne sais pas ce qu’il y a dedans.',
    },
    {
      type: 'table',
      headers: ['Donnée de l’essai de pompage', 'Valeur', 'Ce que cela veut dire'],
      rows: [
        ['Profondeur du forage', '60 m', 'crépines (zone filtrante) entre 48 et 58 m'],
        ['Niveau statique', '25 m', 'niveau de l’eau au repos'],
        ['Niveau dynamique à 18 m³/h, après 24 h', '37 m', 'niveau quand on pompe : rabattement de 12 m'],
        ['Débit d’exploitation conseillé', '18 m³/h maximum', 'au-delà, le niveau descend trop'],
        ['Profondeur de pose de la pompe', '45 m', '8 m sous le niveau dynamique, au-dessus des crépines'],
      ],
    },
    {
      type: 'text',
      text: 'Le forage peut donner 18 m³/h. Une pompe solaire débite surtout autour de midi : il faudra vérifier que son débit de pointe ne dépasse pas cette valeur, sinon le niveau descend jusqu’à la pompe, qui tourne à sec et grille.',
    },

    { type: 'heading', text: '3 · La hauteur manométrique totale' },
    {
      type: 'calc',
      title: 'HMT au débit de pointe (18 m³/h)',
      steps: [
        { label: 'Niveau dynamique dans le forage', formula: 'H_{1} = 37 m' },
        { label: 'Dénivelé du terrain entre le forage et le château d’eau', formula: 'H_{2} = 3 m' },
        { label: 'Arrivée en haut de la cuve du château d’eau', formula: 'H_{3} = 15 m' },
        { label: 'Pertes de charge : 45 m de colonne + 400 m de PE DN90, 1,25 m/100 m, + 10 % de singularités', formula: 'ΔH = 445 × 0,0125 × 1,1 ≈ 6 m' },
        { label: 'Hauteur manométrique totale', formula: 'HMT = 37 + 3 + 15 + 6 = 61 m' },
      ],
      result: 'HMT = 61 m',
    },
    {
      type: 'note',
      text: 'Avec un tuyau DN63, comme le projet de 2009, la vitesse dépasserait 2 m/s à 18 m³/h et les pertes de charge dépasseraient 30 m : la pompe dépenserait plus d’un tiers de son énergie à frotter l’eau contre le tuyau. Fanta fait remplacer la conduite par du DN90.',
    },

    { type: 'heading', text: '4 · L’énergie à fournir' },
    {
      type: 'calc',
      title: 'Énergie hydraulique journalière',
      steps: [
        { label: 'Énergie pour élever un volume V à la hauteur HMT', formula: 'E_{h} = ρ × g × V × HMT = \\frac{V × HMT}{367}  (kWh, V en m³)' },
        { label: 'Avril : 75 m³ à 61 m', formula: 'E_{h} = \\frac{75 × 61}{367} ≈ 12,5 kWh/j' },
        { label: 'Rendement moyen sur la journée : pompe 65 %, moteur 84 %, variateur 96 %, fonctionnement à vitesse variable', formula: 'η ≈ 0,45' },
        { label: 'Énergie électrique à produire', formula: 'E_{el} = \\frac{12,5}{0,45} ≈ 27,7 kWh/j' },
      ],
      result: 'Environ 28 kWh électriques par jour en avril : c’est la base du dimensionnement du champ',
    },
    { type: 'fiche', id: 'pv-design-steps', why: 'La méthode générale : du besoin à la puissance crête.' },

    { type: 'heading', text: '5 · Ce que disent les normes' },
    {
      type: 'norms',
      title: 'Approvisionnement en eau et pompage solaire',
      rows: [
        { norm: 'OMS / standards Sphere', rule: 'Au moins 15 à 20 L par personne et par jour pour boire, cuisiner et l’hygiène de base ; point d’eau à moins de 500 m.', result: '30 L/j retenus' },
        { norm: 'Normes nationales d’hydraulique villageoise', rule: '20 à 35 L/j/hab aux bornes-fontaines, une borne pour 300 à 500 habitants.', result: '4 bornes-fontaines' },
        { norm: 'IEC 62253', rule: 'Systèmes de pompage photovoltaïque : exigences de conception et mesure des performances.', result: 'cadre du projet' },
        { norm: 'ISO 9906', rule: 'Essais de réception des pompes : débit, hauteur, rendement, tolérances.', result: 'point de fonctionnement vérifié' },
      ],
    },
    {
      type: 'regional',
      text: 'En Afrique de l’Ouest, des milliers de forages équipés de pompes diesel ou de pompes à motricité humaine sont en panne faute de pièces ou de gasoil. Les programmes d’hydraulique villageoise remplacent de plus en plus les pompes diesel par des pompes solaires, avec un château d’eau et quelques bornes-fontaines : on parle d’adduction d’eau potable simplifiée.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Le besoin se calcule à l’horizon de 10 ans, avec les usages collectifs et les pertes.',
        'Le mois de dimensionnement est celui où le rapport besoin / soleil est le plus grand.',
        'HMT = niveau dynamique + dénivelé + hauteur du réservoir + pertes de charge.',
        'E_h = V × HMT / 367 ; le rendement de toute la chaîne ramène ensuite à l’énergie électrique.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Si le comité choisit 20 L par personne au lieu de 30, quel devient le besoin journalier et l’énergie hydraulique ?',
      solution: ['(2 000 × 20 + 8 000) × 1,1 = 52,8 m³/j.', 'E_h = 52,8 × 61 / 367 ≈ 8,8 kWh/j, soit 30 % de moins.'],
    },
    {
      type: 'exercise',
      question: 'Le niveau statique baisse de 5 m en fin de saison sèche une année de sécheresse. Quelle nouvelle HMT ?',
      solution: ['Le niveau dynamique passe à 42 m (le rabattement reste à peu près le même).', 'HMT = 42 + 3 + 15 + 6 = 66 m : 8 % de hauteur en plus, donc 8 % d’eau en moins à énergie égale.'],
    },
  ],
};
