import { TopicContent } from '../../types';

export const abcInstallContent: TopicContent = {
  title: 'Tuyauterie, brasure, condensats, étanchéité et tirage au vide',
  subtitle: 'Les règles de pose qui font une installation propre, sèche et étanche',
  blocks: [
    {
      type: 'text',
      text: "La plupart des pannes de climatisation naissent à l’installation : tube mal ébavuré, calamine, humidité, fuite sur un dudgeon, vide insuffisant, condensats mal évacués. Cette leçon reprend, dans l’ordre, les gestes du frigoriste.",
    },
    { type: 'illustration', name: 'tech-install', caption: 'Les six étapes, du tube coupé à la mise en service' },

    { type: 'heading', text: 'Concevoir la tuyauterie frigorifique' },
    {
      type: 'bullets',
      items: [
        'Limiter les pertes de charge : on dimensionne pour une perte équivalente à environ 1 K de température de saturation, accessoires compris (électrovanne, déshydrateur, vannes).',
        'Coudes à grand rayon ou à 45° ; un cintrage au ressort se fait avec un rayon d’au moins 10 fois le diamètre ; tés espacés de 10 diamètres.',
        'Ligne liquide : une perte de charge excessive provoque une vaporisation partielle avant le détendeur (prédétente ou « flash gaz »).',
        'Ligne d’aspiration : pente d’environ 2 cm par mètre vers le compresseur, sans contre-pente, et vitesse suffisante pour ramener l’huile même à charge réduite.',
        'Refoulement : vitesse minimale dans les colonnes montantes, toujours pour le retour d’huile.',
        'Supports solides, éloignés des coudes pour laisser jouer la dilatation ; fourreaux aux traversées de murs et de planchers.',
      ],
    },
    {
      type: 'bullets',
      items: [
        'Isolation : la ligne d’aspiration est TOUJOURS isolée (sinon elle condense) ; isolant au contact du tube, sans vide d’air, accessoires compris. La ligne liquide seulement si l’ambiance est plus froide qu’elle.',
        'Isolants : mousse élastomère noire, polyéthylène blanc, coquilles polyuréthane ou élastomère revêtues d’aluminium.',
        'Les tubes frigorifiques sont en pouces (1/4", 3/8", 1/2", 5/8", 3/4", 7/8"…), plus épais que les tubes de plomberie (0,8 à 1,25 mm), livrés déshydratés et bouchés.',
      ],
    },

    { type: 'heading', text: 'Travailler le cuivre' },
    {
      type: 'bullets',
      items: [
        'Couper au coupe-tube, jamais à la scie (copeaux, coupe de travers).',
        'Ébavurer l’intérieur et l’extérieur en tenant le tube VERS LE BAS, pour que les copeaux tombent dehors.',
        'Dudgeon (évasement pour raccord vissé) : glisser l’écrou AVANT d’évaser ; dépassement du tube dans la matrice ≈ 1,5 mm (1/4", 3/8"), 1,8 mm (1/2"), 2 mm (5/8" et 3/4") ; surface lisse et régulière ; une goutte d’huile frigorifique du même type que celle du circuit ; serrage à deux clés, idéalement à la clé dynamométrique.',
        'Emboîture (évasement pour brasure) : en deux passes en tournant le tube, pour ne pas le fendre.',
        'Cintrage : sur tube recuit, avec ressort ou cintreuse ; recuire les barres et éliminer la calamine.',
      ],
    },

    { type: 'heading', text: 'La brasure (forte) sous azote' },
    {
      type: 'bullets',
      items: [
        'Brasage fort (> 450 °C) avec baguettes cuivre-phosphore ou à l’argent (20 à 55 % d’argent).',
        'Préparer : dégraisser, décaper, ajuster les pièces avec un faible jeu (la capillarité attire la brasure), appliquer du flux si nécessaire.',
        'Chalumeau oxy-acétylénique : acétylène 0,1 à 0,5 bar, oxygène ≈ 1 bar, flamme courte et régulière ; chauffer tout l’assemblage, plutôt la pièce femelle, buse à 45°.',
        'Laisser refroidir sans bouger ; contrôler une brasure lisse, homogène, sans trou.',
        'Protéger les organes sensibles (détendeurs, vannes 4 voies) avec un chiffon mouillé.',
        'Faire circuler un léger filet d’azote dans le tube pendant la brasure : sans oxygène, pas de calamine — indispensable pour les détendeurs électroniques et les VRV.',
      ],
    },

    { type: 'heading', text: 'Évacuer les condensats' },
    {
      type: 'bullets',
      items: [
        'Quantités : de quelques litres à des dizaines par jour ; compter environ 20 à 40 litres par jour pour 100 m² climatisés (bien plus sous climat tropical humide).',
        'PVC de vidange collé (Ø 32 à 63 mm) pour CTA et gainables ; tube souple Ø 16/20 pour splits.',
        'Pente d’au moins 1 cm par mètre, supports rapprochés, évent si le réseau est long.',
        'Siphon obligatoire sur les appareils en dépression (CTA, gainables) : hauteur supérieure à la dépression + 20 mm de sécurité (1 mmCE ≈ 10 Pa). Les siphons du commerce n’arrêtent que les odeurs.',
      ],
    },
    { type: 'formula', text: 'Hauteur de garde du siphon (mm) = dépression (Pa) / 10 + 20' },

    { type: 'heading', text: 'L’essai d’étanchéité' },
    {
      type: 'bullets',
      items: [
        'Circuit terminé (déshydrateur, voyant, vannes posés), électrovannes ouvertes (bobine alimentée ou aimant).',
        'Mettre sous azote sec à la pression d’épreuve prévue (pression maximale de service ; de l’ordre de 30 à 35 bar pour un VRV), par les vannes de service HP et BP. Sur un appareil préchargé, ne tester que les liaisons, vannes de l’unité extérieure fermées.',
        'Contrôler raccords et brasures à la bombe moussante, puis laisser plusieurs jours en corrigeant la pression lue selon la température (loi de Gay-Lussac).',
        'En recherche de fuite difficile : azote hydrogéné et détecteur adapté.',
      ],
    },
    {
      type: 'table',
      headers: ['Méthode de détection', 'Principe'],
      rows: [
        ['Produit moussant', 'bulles sur la fuite ; simple et universel'],
        ['Détecteur électronique', 'capteur sensible au fluide (ou à l’hydrogène)'],
        ['Traceur fluorescent', 'additif dans l’huile, visible sous lampe UV'],
        ['Lampe haloïde', 'la flamme vire au vert en présence de CHLORE'],
      ],
    },
    {
      type: 'warning',
      text: "Le livre dit que la lampe haloïde est « seulement adaptée aux HFC » tout en expliquant qu’elle réagit au chlore. C’est l’inverse : elle détecte les fluides CHLORÉS (CFC, HCFC comme le R22). Les HFC (R410A, R134a, R32…) ne contiennent pas de chlore : la lampe haloïde ne les voit pas.",
    },

    { type: 'heading', text: 'Le tirage au vide' },
    {
      type: 'text',
      text: "Le vide retire l’air (incondensable) et surtout l’humidité : en baissant la pression, l’eau bout à la température ambiante et s’évacue en vapeur. Le vide n’est PAS un essai d’étanchéité : on le fait après l’essai à l’azote.",
    },
    {
      type: 'bullets',
      items: [
        'Manifold sur les vannes de service HP et BP, pompe à vide sur la voie centrale, vacuomètre ; huile de la pompe vérifiée ; électrovannes ouvertes.',
        'Pomper d’une demi-heure à plusieurs heures selon la taille de l’installation.',
        'Objectif : descendre sous la tension de vapeur de l’eau à la température ambiante.',
        'En cas d’humidité importante : méthode des 3 vides — vide, cassage à l’azote sec (≈ 0,2 bar), vide, azote, vide final.',
        'Fermer les vannes, retirer la pompe, introduire la charge d’usine ou au moins une charge de sécurité notée.',
      ],
    },
    {
      type: 'table',
      headers: ['Température ambiante', '0 °C', '10 °C', '15 °C', '20 °C', '25 °C', '30 °C', '35 °C'],
      rows: [['Pression de vapeur de l’eau (mbar)', '6,1', '12,2', '17', '23,3', '31,7', '42,4', '56,2']],
    },
    { type: 'illustration', name: 'tech-manifold', props: { mode: 'vacuum' }, caption: 'Manifold en tirage au vide : pompe sur la voie centrale, vannes HP et BP ouvertes' },

    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Une CTA fonctionne avec une dépression de 600 Pa au niveau du bac. Quelle hauteur de garde donner au siphon ?',
      solution: ['600 / 10 = 60 mm, + 20 mm de sécurité = 80 mm de hauteur de garde.'],
    },
    {
      type: 'exercise',
      question: 'Vous tirez au vide un circuit dans un local technique à 30 °C. Quel niveau de vide minimum viser, et pourquoi ?',
      solution: ['Il faut descendre sous 42,4 mbar absolus (tension de vapeur de l’eau à 30 °C) pour que l’eau bouille et s’évacue.', 'En pratique, on vise bien plus bas (quelques mbar) et on vérifie que la pression ne remonte pas une fois la pompe isolée.'],
    },
    {
      type: 'exercise',
      question: 'Une ligne d’aspiration horizontale de 8 m rejoint un compresseur. Quelle pente lui donner, et dans quel sens ?',
      solution: ['≈ 2 cm/m × 8 m = 16 cm de dénivelé, descendant VERS le compresseur, pour que l’huile y retourne par gravité.'],
    },
  ],
};
