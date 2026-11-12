import { TopicContent } from '../types';

export const buildingSwitchboardContent: TopicContent = {
  title: 'Construire les tableaux : TGBT et tableaux d’appartement',
  subtitle: 'Choisir les disjoncteurs ne suffit pas : il faut une enveloppe qui les tienne, les refroidisse et résiste au court-circuit. Didier soumet les plans du TGBT, Awa vérifie les jeux de barres, la forme de séparation et les essais, puis dessine le tableau type d’un appartement.',
  blocks: [
    { type: 'scene', text: 'Mois 6 · Atelier du tableautier, avec Didier et Marc' },
    {
      type: 'objectives',
      items: [
        'Savoir ce qu’exige la norme des ensembles d’appareillage (IEC 61439).',
        'Choisir une forme de séparation, un indice IP et un indice IK.',
        'Vérifier un jeu de barres : courant permanent, tenue thermique et crête de court-circuit.',
        'Choisir les transformateurs de courant du comptage.',
        'Construire le tableau de répartition monophasé d’un appartement.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: 'Forme 2b', label: 'séparation du TGBT' },
        { value: '25 × 5 mm', label: 'barres cuivre, ≈ 300 A en armoire' },
        { value: '9,5 kA', label: 'crête de court-circuit I_{pk}' },
        { value: '250/5 A', label: 'TC de comptage, classe 0,5' },
        { value: '45 A', label: 'appel d’un appartement avec réserve' },
      ],
    },

    { type: 'heading', text: '1 · Un tableau est un produit certifié' },
    {
      type: 'text',
      text: 'Un tableau n’est pas une simple boîte où l’on visse des disjoncteurs. La norme IEC 61439 le traite comme un produit : le constructeur d’origine (le fabricant du système d’armoires) prouve par des essais que son système tient l’échauffement, le court-circuit et les tensions de choc. Le tableautier qui assemble ensuite le TGBT doit respecter ces règles et réaliser des vérifications individuelles sur chaque tableau.',
    },
    {
      type: 'table',
      headers: ['Partie', 'Concerne', 'Dans ce projet'],
      rows: [
        ['IEC 61439-1', 'règles générales', 'toutes les armoires'],
        ['IEC 61439-2', 'ensembles de puissance (PSC)', 'TGBT, TD-SG'],
        ['IEC 61439-3', 'tableaux de distribution manœuvrés par des personnes ordinaires (DBO)', 'tableaux des appartements'],
        ['IEC 61439-6', 'canalisations préfabriquées', 'gaines à barres (projet 3)'],
      ],
    },
    {
      type: 'table',
      headers: ['Vérification de conception (une fois, par le constructeur d’origine)', 'Vérification individuelle (chaque tableau, par le tableautier)'],
      rows: [
        ['échauffement à courant assigné', 'contrôle visuel, câblage conforme au schéma'],
        ['tenue au court-circuit (I_{cw}, I_{pk})', 'serrage des connexions au couple'],
        ['propriétés diélectriques', 'essai diélectrique ou mesure d’isolement'],
        ['continuité du circuit de protection', 'continuité du PE et des masses'],
        ['degré de protection IP, résistance mécanique', 'fonctionnement mécanique, verrouillages'],
      ],
    },

    { type: 'heading', text: '2 · Formes de séparation, IP et IK' },
    {
      type: 'text',
      text: 'La forme de séparation dit ce qui est cloisonné à l’intérieur de l’armoire : les jeux de barres, les appareils et les bornes de raccordement. Plus la forme est élevée, plus on peut intervenir sur un départ en laissant les autres sous tension, mais plus l’armoire est grande et chère.',
    },
    {
      type: 'table',
      headers: ['Forme', 'Séparation', 'Usage typique'],
      rows: [
        ['1', 'aucune', 'petits tableaux, coffrets'],
        ['2a / 2b', 'barres séparées des unités fonctionnelles ; en 2b, bornes séparées des barres', 'TGBT de bâtiment'],
        ['3a / 3b', '+ chaque unité fonctionnelle séparée des autres', 'industrie, tertiaire important'],
        ['4a / 4b', '+ bornes de chaque départ séparées entre elles', 'process continu, hôpitaux, data centers'],
      ],
    },
    {
      type: 'decision',
      title: 'Forme du TGBT',
      choice: 'Forme 2b, IP31, IK08',
      reasons: [
        'Cinq départs seulement : une forme 3 ou 4 doublerait le volume pour un gain faible.',
        'En 2b, l’électricien raccorde un câble sans approcher les barres sous tension.',
        'IP31 suffit dans un local technique fermé et sec ; IK08 résiste aux chocs courants.',
      ],
      rejected: 'Forme 4b : réservée à l’usine et à la clinique, où l’on doit intervenir sur un départ sans arrêter les autres.',
    },
    {
      type: 'table',
      headers: ['Indice', 'Signification', 'Exemple'],
      rows: [
        ['IP2X', 'pas de doigt sur les parties actives', 'intérieur des tableaux, face avant ouverte'],
        ['IP31', '+ corps de 2,5 mm, chute verticale de gouttes', 'local technique'],
        ['IP54 / IP55', 'poussière, projections / jets d’eau', 'local pompes, extérieur abrité'],
        ['IP65 / IP66', 'étanche aux poussières, jets puissants', 'extérieur, zones de lavage'],
        ['IK08 / IK10', 'chocs de 5 J / 20 J', 'circulations, parkings'],
      ],
    },

    { type: 'heading', text: '3 · Le jeu de barres du TGBT' },
    {
      type: 'calc',
      title: 'Vérifier les barres proposées par Didier (cuivre 25 × 5 mm)',
      steps: [
        { label: 'Courant permanent : barres peintes, en armoire à 35 °C', formula: 'I_{admissible} ≈ 300 A ≥ I_n = 250 A ✓' },
        { label: 'Tenue thermique au court-circuit pendant 1 s (k = 143 pour le cuivre)', formula: 'S_{min} = \\frac{I_{cw} × \\sqrt{t}}{k} = \\frac{5 600 × \\sqrt{1}}{143} ≈ 39 mm² ≤ 125 mm² ✓' },
        { label: 'Crête du premier pic : n = 1,7 entre 5 et 10 kA (IEC 61439-1, tableau 7)', formula: 'I_{pk} = n × I_{cc} = 1,7 × 5,6 ≈ 9,5 kA' },
        { label: 'Données du constructeur d’origine pour ce système', formula: 'I_{cw} = 25 kA 1 s   ;   I_{pk} = 52,5 kA' },
      ],
      result: 'Barres 25 × 5 mm validées : 300 A, I_{cw} 25 kA ≫ 5,6 kA, I_{pk} 52,5 kA ≫ 9,5 kA',
    },
    {
      type: 'text',
      text: 'Le neutre a la même section que les phases (charges monophasées et harmoniques des logements). La barre PE, en bas d’armoire, fait au moins la moitié. Le TGBT est dimensionné pour la température ambiante du local : la norme suppose 35 °C en moyenne sur 24 h et 40 °C en pointe. Dans un local mal ventilé où l’on mesure 45 °C l’après-midi, il faudrait déclasser les barres et les disjoncteurs.',
    },

    { type: 'heading', text: '4 · Le comptage du TGBT' },
    {
      type: 'calc',
      title: 'Transformateurs de courant (TC) pour la centrale de mesure',
      steps: [
        { label: 'Courant nominal du transformateur', formula: 'I_n = 231 A' },
        { label: 'Calibre primaire normalisé juste au-dessus', formula: 'TC 250/5 A' },
        { label: 'Charge du secondaire : appareil 1 VA + 10 m de fil 2,5 mm² aller-retour', formula: 'P = 1 + 5^{2} × \\frac{0,0225 × 20}{2,5} ≈ 5,5 VA  →  TC 10 VA' },
      ],
      result: 'TC 250/5 A, 10 VA, classe 0,5 (classe 0,5S si la mesure sert à facturer)',
    },
    {
      type: 'note',
      text: 'Ne jamais ouvrir le secondaire d’un TC en service : sans charge, sa tension monte à plusieurs centaines de volts et le TC peut être détruit. On court-circuite d’abord ses bornes, grâce au bornier sectionnable prévu à cet effet.',
    },

    { type: 'heading', text: '5 · Le tableau type d’un appartement' },
    {
      type: 'dialogue',
      speaker: 'Marc Adjovi (supervision)',
      role: 'team',
      text: 'Les seize appartements ont le même tableau. Si on se trompe sur le premier, on se trompe seize fois. Montre-moi le tableau de répartition avant qu’Électra ne commande.',
    },
    {
      type: 'text',
      text: 'Le tableau d’un appartement est monophasé : une seule colonne de kVA. Le principe du tableau de répartition reste le même, avec la somme des circuits, la demande après foisonnement et la réserve. On vérifie surtout que le courant final reste sous le réglage du disjoncteur de branchement du palier (45 A).',
    },
    {
      type: 'panelSchedule',
      panel: {
        name: 'TD Appartement type (T3)',
        location: 'Entrée de l’appartement, h = 1,30 m',
        voltage: '230 V · 1P+N+PE · 50 Hz',
        panelType: 'Coffret IEC 61439-3, 3 × 13 modules',
        mounting: 'Encastré',
        scRating: 'Icn 6 kA',
        main: 'Interrupteur 2P 63 A (branchement 45 A au palier)',
        feeder: '3G10 mm² Cu depuis le palier',
        singlePhase: true,
        left: [
          { desc: 'Éclairage séjour, cuisine · ID1', kva: 0.15, cb: 'C10', wire: '1,5 mm²' },
          { desc: 'Éclairage chambres · ID2', kva: 0.12, cb: 'C10', wire: '1,5 mm²' },
          { desc: 'Prises séjour · ID1', kva: 1.0, cb: 'C20', wire: '2,5 mm²' },
          { desc: 'Prises chambres · ID2', kva: 0.8, cb: 'C20', wire: '2,5 mm²' },
          { desc: 'Prises cuisine · ID1', kva: 1.2, cb: 'C20', wire: '2,5 mm²' },
          { desc: 'Plaque de cuisson · ID1 (A)', kva: 3.5, cb: 'C32', wire: '6 mm²' },
          { desc: 'Lave-linge · ID1 (A)', kva: 2.1, cb: 'C20', wire: '2,5 mm²' },
        ],
        right: [
          { desc: 'Circuit prioritaire · ID2', kva: 0.6, cb: 'C16', wire: '2,5 mm²' },
          { desc: 'Chauffe-eau · ID2', kva: 1.5, cb: 'C20', wire: '2,5 mm²' },
          { desc: 'Clim séjour · ID2 (A)', kva: 1.7, cb: 'C16', wire: '2,5 mm²' },
          { desc: 'Clim chambre 1 · ID2 (A)', kva: 1.0, cb: 'C16', wire: '2,5 mm²' },
          { desc: 'Clim chambre 2 · ID2 (A)', kva: 1.0, cb: 'C16', wire: '2,5 mm²' },
          { desc: '', spare: true },
          { desc: '', spare: true },
        ],
        demandKva: 9,
        spareMargin: 15,
      },
    },
    {
      type: 'calc',
      title: 'Lire le bas du tableau de l’appartement',
      steps: [
        { label: 'Puissance installée', formula: 'S_{inst} = 8,87 + 5,80 ≈ 14,7 kVA' },
        { label: 'Demande retenue pour un logement (étape 1)', formula: 'S_{demande} = 9 kVA   (coefficient ≈ 0,61)' },
        { label: 'Avec 15 % de réserve, en monophasé', formula: 'I = \\frac{9 000 × 1,15}{230} = 45 A' },
      ],
      result: 'Le tableau tient exactement dans le branchement de 45 A : la réserve de 15 % est déjà « payée »',
    },
    {
      type: 'decision',
      title: 'Organisation du tableau d’appartement',
      choice: 'Deux interrupteurs différentiels 40 A 30 mA type A, éclairage réparti entre les deux, une rangée de réserve',
      reasons: [
        'Plaque, lave-linge et clims inverter imposent le type A.',
        'Éclairage séjour sur ID1, chambres sur ID2 : jamais tout le logement dans le noir.',
        'La rangée libre pourra recevoir un jour l’onduleur du circuit prioritaire (on y revient à l’étape du secours).',
      ],
      rejected: 'Un seul différentiel de 63 A pour tout le logement : moins cher, mais refusé par Ndeye Faye (la NF C 15-100 impose plusieurs dispositifs et limite le nombre de circuits par différentiel).',
    },

    { type: 'heading', text: '6 · Ce que disent les normes' },
    {
      type: 'norms',
      title: 'Le tableau lui-même',
      rows: [
        { norm: 'IEC 61439-1/-2/-3', rule: 'Vérification de conception par le constructeur d’origine, vérification individuelle par le tableautier ; I_{cw}, I_{pk}, formes 1 à 4.', result: 'TGBT forme 2b, I_{cw} 25 kA' },
        { norm: 'NF C 15-100', rule: 'Tableau de logement : 20 % de réserve, au moins un emplacement libre, différentiels selon la surface, repérage des circuits.', result: '2 × ID 40 A type A, réserve' },
        { norm: 'BS 7671 (421.1.201)', rule: 'Les « consumer units » des logements doivent avoir une enveloppe incombustible (métal).', result: 'coffret métallique au Royaume-Uni' },
        { norm: 'NEC / UL 67, UL 891', rule: 'Panelboards (UL 67) et switchboards (UL 891) listés ; protection générale du panelboard (408.36).', result: 'appareils « listed »' },
      ],
    },
    {
      type: 'norms',
      title: 'Espace devant les tableaux',
      rows: [
        { norm: 'NF C 15-100', rule: 'Reprend les règles des locaux de service électrique : passage libre d’au moins 0,70 m devant les tableaux.', result: '≥ 0,70 m' },
        { norm: 'IEC 60364-7-729', rule: 'Couloirs de service : 700 mm minimum, 500 mm entre une porte ouverte et l’obstacle d’en face.', result: '≥ 0,70 m' },
        { norm: 'NEC 110.26', rule: 'Profondeur libre selon la tension par rapport à la terre et la condition 1, 2 ou 3.', result: '0,9 à 1,2 m sous 600 V' },
      ],
    },
    { type: 'image', source: require('../../../assets/reference/clearance_low_voltage.png'), caption: 'NEC 110.26 : profondeur de l’espace de travail selon la tension et ce qui se trouve en face', focus: { x: 0.5, y: 0.25, w: 0.48, h: 0.45 } },
    {
      type: 'regional',
      text: 'Beaucoup de TGBT sont assemblés localement dans des armoires génériques, sans vérification de conception : le chiffre I_{cw} n’existe alors pas. Pour un projet financé ou contrôlé, Awa exige un système d’armoires dont le constructeur d’origine fournit les rapports d’essai IEC 61439, et un procès-verbal de vérification individuelle signé. Dans les locaux techniques chauds, prévoyez une ventilation haute et basse, voire un extracteur thermostaté : chaque 10 °C de trop réduit fortement la durée de vie des appareils.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Un tableau est un produit : vérification de conception (constructeur d’origine) et vérification individuelle (tableautier).',
        'La forme de séparation (1 à 4) règle ce qu’on peut toucher en laissant le reste sous tension.',
        'IP pour les corps et l’eau, IK pour les chocs.',
        'Jeu de barres : courant permanent, tenue thermique I_{cw} et crête I_{pk} = n × I_{cc}.',
        'TC : primaire juste au-dessus de I_n, puissance supérieure à la charge du secondaire, classe selon l’usage.',
        'Un tableau monophasé se lit comme un triphasé, avec une seule colonne de kVA.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'À l’usine du projet 3, le court-circuit au TGBT atteindra 14,4 kA. Quel facteur n et quelle crête I_{pk} retenir ?',
      solution: ['Entre 10 et 20 kA, n = 2,0.', 'I_{pk} = 2,0 × 14,4 ≈ 28,8 kA : le système d’armoires doit avoir un I_{pk} assigné supérieur.'],
    },
    {
      type: 'exercise',
      question: 'Un appartement plus grand a 11 kVA de demande. Le branchement de 45 A suffit-il avec la réserve de 15 % ?',
      solution: ['I = 11 000 × 1,15 / 230 ≈ 55 A > 45 A : non.', 'Il faut un branchement de 60 A (ou passer en triphasé), et vérifier le câble du palier.'],
    },
    {
      type: 'exercise',
      question: 'Pourquoi court-circuite-t-on le secondaire d’un TC avant de débrancher l’ampèremètre ?',
      solution: ['Le TC impose son courant secondaire. Si le circuit est ouvert, il génère une tension très élevée pour essayer de le faire passer : danger pour l’opérateur et destruction de l’isolant du TC.'],
    },
  ],
};
