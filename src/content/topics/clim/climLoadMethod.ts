import { TopicContent } from '../../types';
import { fig } from './fig';

export const climLoadMethodContent: TopicContent = {
  title: 'La méthode pas à pas et la feuille de calcul',
  subtitle: 'Cahier des charges, heure de pointe, feuille de calcul et puissance électrique à souscrire',
  blocks: [
    {
      type: 'text',
      text: "Un calcul exact heure par heure, tenant compte de l’inertie des murs, est long et réservé aux grands projets (bureaux d’études, logiciels). Pour un local ordinaire, le guide propose une méthode simplifiée et fiable, en 5 étapes :",
    },
    {
      type: 'bullets',
      items: [
        '1 → Rassembler les données (cahier des charges)',
        '2 → Fixer les conditions de base extérieures et intérieures',
        '3 → Trouver l’heure où la charge est maximale',
        '4 → Calculer les apports sur la feuille de calcul',
        '5 → Choisir l’appareil et la puissance électrique à souscrire',
      ],
    },
    { type: 'illustration', name: 'clim-heat-gains', caption: 'Ce qu’il faut connaître du local avant de calculer' },

    { type: 'heading', text: '1 · Le cahier des charges : ce qu’il faut relever' },
    {
      type: 'text',
      text: 'Avant tout calcul, le technicien doit connaître tous les facteurs qui influencent la chaleur du local. Des relevés précis évitent de prendre de grosses marges « au cas où » — cause principale du surdimensionnement.',
    },
    {
      type: 'bullets',
      items: [
        'Orientation du local (points cardinaux, latitude), bâtiments voisins qui font de l’ombre, surfaces réfléchissantes (eau, sable, parking).',
        'Plans d’architecte et dimensions : longueur, largeur, hauteur sous plafond.',
        'Matériaux des murs, toit, plafond, plancher et cloisons, avec leur épaisseur et leur couleur.',
        'Ce qu’il y a autour : locaux climatisés ou non, comble, cuisine, vide sanitaire.',
        'Fenêtres et portes : dimensions, type de vitrage et de châssis, protections solaires.',
        'Occupants : nombre, activité, horaires ; éclairage : type et puissance ; appareils : puissance et durée de fonctionnement.',
        'Destination du local (bureau, hôpital, boutique…), conditions intérieures à maintenir, emplacement possible des équipements.',
      ],
    },

    { type: 'heading', text: '2 · Les conditions de base' },
    {
      type: 'text',
      text: 'On choisit dans les tableaux du guide les conditions extérieures du mois de base de la ville (tableau 1.3) et les conditions intérieures de confort (tableaux 1.4 et 1.5). On en déduit les deux écarts qui serviront dans toutes les formules :',
    },
    { type: 'formula', text: 'Δθ = θe − θi  (°C)     et     Δω = ωe − ωi  (g ou kg d’eau / kg d’air sec)' },
    fig('p020_0', 'Tableau 1.3 — conditions de base extérieures par ville'),

    { type: 'heading', text: '3 · À quelle heure faire le calcul ?' },
    {
      type: 'text',
      text: "Le soleil tourne : un mur Est reçoit le maximum le matin, un mur Ouest l’après-midi, un mur Sud vers midi. Le bilan doit être fait à l’heure où la somme des apports est la plus forte — l’heure de charge de réfrigération maximale.",
    },
    {
      type: 'bullets',
      items: [
        'Étape 1 : repérer le type d’orientation du local parmi les 31 cas de la figure 1.1 (quels murs donnent sur l’extérieur).',
        'Étape 2 : le tableau 1.8, combiné au tableau 1.14 (rayonnement heure par heure), donne l’heure où les apports solaires des murs exposés sont maximaux.',
        'Si les heures diffèrent selon les murs, on privilégie la paroi la plus grande et on vérifie que l’heure tombe pendant l’occupation du local.',
      ],
    },
    fig('p025_0', 'Figure 1.1 — les 31 types d’orientation possibles d’un local à climatiser'),
    fig('p026_0', 'Tableau 1.8 — orientation des locaux et heure de charge maximale'),
    {
      type: 'note',
      text: 'Exemple : un bureau dont les murs Nord, Sud et Ouest sont ensoleillés a son maximum à 12 h au Nord, 13 h au Sud, 14 h à l’Ouest. Le mur Sud étant le plus grand et le bureau étant occupé de 8 h à 18 h, on calcule à 13 h.',
    },

    { type: 'heading', text: '4 · La feuille de calcul' },
    {
      type: 'text',
      text: 'Le guide fournit une feuille de calcul qui structure tout le bilan et évite les oublis. Un tableau en colonnes (I à IX) décrit chaque paroi ; en bas, les apports sensibles et latents sont numérotés de (1) à (14).',
    },
    fig('p048', 'Annexe — feuille de calcul du bilan thermique (relevé des parois, colonnes I à IX)'),
    { type: 'subheading', text: '1re étape : relevé des données' },
    {
      type: 'bullets',
      items: [
        'Colonne I : désignation et orientation de chaque paroi et vitrage.',
        'Colonne II : dimensions et nombre de vitrages ; colonne III : surface nette (murs sans les ouvertures).',
        'Colonne IV : coefficient k (tableaux 1.7 et 1.9) ; colonne V : écart de température Δθ (tableau 1.10).',
        'Type et débit de renouvellement d’air (naturel ou mécanique, tableau 1.15).',
      ],
    },
    { type: 'subheading', text: '2e étape : calcul des charges' },
    fig('p049', 'Annexe — bas de la feuille : apports sensibles (1 à 7), latents (8 à 12), puissance (13) et déshumidification (14)'),
    {
      type: 'table',
      headers: ['Ligne', 'Apport', 'Formule'],
      rows: [
        ['(1)', 'Transmission parois et vitrages', 'k × S × Δθ (col. VI)'],
        ['(2)', 'Rayonnement solaire murs et vitrages', 'α·F·S·Rm et α·g·S·Rv (col. VII-IX)'],
        ['(3)', 'Occupants sensibles', 'n × CSoc'],
        ['(4)', 'Appareils électriques et éclairage', 'Σ P × cu ; 1,25 P (fluo)'],
        ['(5)', 'Sources diverses (moteurs…)', 'puissance dissipée'],
        ['(6)', 'Renouvellement d’air sensible', 'qv × Δθ × 0,33'],
        ['(7)', 'CHARGE SENSIBLE', '1+2+3+4+5+6'],
        ['(8)–(11)', 'Latents : occupants, appareils, divers, air neuf', 'n × CLoc ; … ; qv × Δω × 0,84'],
        ['(12)', 'CHARGE LATENTE', '8+9+10+11'],
        ['(13)', 'PUISSANCE DU CLIMATISEUR', '7 + 12'],
        ['(14)', 'Puissance de déshumidification (tropical humide)', '= 12'],
      ],
    },

    { type: 'heading', text: 'Le coefficient de sécurité' },
    {
      type: 'text',
      text: "Il est d’usage d’ajouter une petite marge pour les incertitudes. Le guide conseille 0 à 5 % au maximum : au-delà, on augmente le prix de l’équipement, le coût d’exploitation et la puissance électrique à souscrire, et la machine déshumidifie moins bien.",
    },
    { type: 'formula', text: 'Puissance retenue = QT × (1 + 0 à 0,05)' },

    { type: 'heading', text: '5 · La puissance électrique à souscrire' },
    {
      type: 'text',
      text: 'Une fois les appareils choisis, il faut demander à la compagnie d’électricité un abonnement suffisant pour l’ensemble des équipements (compresseurs, ventilateurs, pompes, autres appareils). On utilise deux facteurs :',
    },
    {
      type: 'bullets',
      items: [
        'Ku, facteur d’utilisation : rapport entre la puissance réellement utilisée et la puissance nominale (souvent 1 pour un climatiseur).',
        'Ks, facteur de simultanéité : tous les appareils ne fonctionnent pas en même temps (entre 0 et 1).',
      ],
    },
    { type: 'formula', text: 'Pat = Pn × Ks × Ku   (puissance active totale, W)' },
    { type: 'formula', text: 'Qat = Pat × tan φ   (puissance réactive, var)' },
    { type: 'formula', text: 'Sa = √(Pat² + Qat²)   (puissance apparente à souscrire, VA)' },
    {
      type: 'text',
      text: 'Le facteur de puissance cos φ de l’installation est fixé par la compagnie d’électricité (environ 0,8 au Cameroun, 0,86 en Côte d’Ivoire). La puissance nominale Pn d’un climatiseur se lit sur sa plaque signalétique ; sinon Pn = U·I·cos φ en monophasé et √3·U·I·cos φ en triphasé.',
    },
    fig('p039_0', 'Tableau 1.19 — facteur de puissance selon le pays'),
    { type: 'note', text: 'C’est la puissance apparente (VA) et non la puissance frigorifique qui détermine l’abonnement : un split de 8,5 kW de froid ne demande que ~4 kVA.' },
  ],
};
