import { TopicContent } from '../../types';

export const abcExchangersContent: TopicContent = {
  title: 'Condenseur, détendeur, évaporateur : surchauffe et sous-refroidissement',
  subtitle: 'Comment fonctionnent les échangeurs et le détendeur, et les deux mesures qui disent si le circuit va bien',
  blocks: [
    {
      type: 'text',
      text: "Le compresseur fait circuler le fluide, mais ce sont le condenseur, le détendeur et l’évaporateur qui échangent la chaleur. Deux mesures simples, la surchauffe et le sous-refroidissement, permettent au technicien de savoir si ces organes sont correctement alimentés et si la charge en fluide est bonne.",
    },
    { type: 'illustration', name: 'tech-sh-sc', caption: 'Surchauffe à l’évaporateur, sous-refroidissement au condenseur' },

    { type: 'heading', text: 'Le condenseur' },
    {
      type: 'text',
      text: "Les vapeurs surchauffées venant du compresseur y entrent, se désurchauffent, se condensent (les premières gouttes apparaissent, puis il ne reste que du liquide), et le liquide se sous-refroidit avant de sortir vers le détendeur. Sa puissance est celle de l’évaporateur PLUS celle du moteur du compresseur.",
    },
    {
      type: 'bullets',
      items: [
        'Condenseur à air : l’écart entre l’entrée d’air et la température de condensation est à peu près constant pour un appareil donné, environ 15 K. Par 35 °C dehors, on condense donc vers 50 °C.',
        'Vitesse d’air conseillée sur la batterie : 2 à 4 m/s. Les ventilateurs sont régulés (étages ou variateur) car la température extérieure varie beaucoup.',
        'Un condenseur encrassé qui fait monter la condensation de 5 °C fait perdre environ 7 % de puissance et augmente la consommation d’environ 16 %.',
        'Condenseurs à eau : coaxial (deux tubes en spirale à contre-courant), bouteille (serpentin dans un réservoir), multitubulaire (démontable, nettoyable), à plaques (compact, efficace, sensible à l’encrassement). L’eau s’y réchauffe de 8 à 12 K.',
      ],
    },
    { type: 'illustration', name: 'clim-outdoor', caption: 'Un condenseur au frais et propre : moins de kWh' },

    { type: 'heading', text: 'Tours de refroidissement et traitement d’eau' },
    {
      type: 'table',
      headers: ['Type', 'Principe', 'Point clé'],
      rows: [
        ['Tour ouverte', 'l’eau du condenseur ruisselle face à l’air, une partie s’évapore', 'entretien lourd : tartre, algues, corrosion, légionelles'],
        ['Tour fermée', 'l’eau du condenseur reste dans un échangeur arrosé', 'moins d’eau à traiter, moins de bactéries'],
        ['Condenseur évaporatif', 'le condenseur lui-même est arrosé', 'plus de fluide frigorigène dans le circuit'],
        ['Dry cooler', 'échangeur sec ventilé (eau glycolée)', 'pas d’eau consommée'],
        ['Tour hybride', 'évaporative en été, sèche le reste de l’année', 'économise l’eau, limite les bactéries'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'Une tour mal entretenue diffuse des aérosols contaminés par Legionella, et se couvre de tartre, d’algues et de biofilm.',
        'Entretien : désinfection chlorée, vidange, nettoyage mécanique, puis traitement continu (contrôle de la dureté et de la conductivité, biocide, biodispersant, algicide si besoin).',
        'Seuils de Legionella : < 1 000 UFC/l → maintenance normale ; 1 000 à 10 000 UFC/l → actions correctives ; > 10 000 UFC/l → arrêt immédiat, vidange, nettoyage et désinfection.',
      ],
    },

    { type: 'heading', text: 'Le sous-refroidissement : un indicateur de charge' },
    { type: 'formula', text: 'Sous-refroidissement = T condensation (lue au manomètre HP) − T liquide en sortie de condenseur' },
    {
      type: 'bullets',
      items: [
        'Valeur normale : 4 à 7 K.',
        'Trop faible (< 4 K) : la dernière bulle se condense tout au bout du condenseur → probable manque de fluide.',
        'Trop fort (> 7 K) : le condenseur est « noyé » de liquide → probable excès de fluide.',
      ],
    },

    { type: 'heading', text: 'Les détendeurs' },
    {
      type: 'text',
      text: "Le détendeur fait chuter la pression du liquide (par laminage) pour qu’il s’évapore à basse température, et il dose le débit de fluide envoyé à l’évaporateur.",
    },
    {
      type: 'bullets',
      items: [
        'Capillaire : simple tube fin (0,5 à 2 mm) calibré en longueur. Fiable, sans pièce mobile, mais débit fixe : la surchauffe varie avec la charge. Il égalise HP et BP à l’arrêt (redémarrage facile) et exige une charge en fluide précise et un circuit très propre et sec.',
        'Détendeur thermostatique : un bulbe en fin d’évaporateur pousse pour ouvrir ; la pression d’évaporation et le ressort (vis de réglage) poussent pour fermer. Il maintient une surchauffe constante.',
        'Égalisation externe : pour les évaporateurs à forte perte de charge (plusieurs rangs, distributeur de liquide) ; un petit tube ramène la pression de SORTIE d’évaporateur sous la membrane.',
        'Détendeur électronique (pas à pas ou à impulsions) : piloté par un régulateur à partir de sondes et de transducteurs de pression ; très précis (1,5 à 1,8° par pas). Indispensable en VRV, multisplits, PAC ; existe en « bi-flow » (deux sens).',
      ],
    },
    {
      type: 'table',
      headers: ['Charge du bulbe', 'Comportement'],
      rows: [
        ['Standard (liquide)', 'réaction rapide, mais peut surcharger le compresseur au démarrage après un long arrêt'],
        ['MOP', 'charge limitée : au-delà d’une pression maxi, le détendeur se ferme (protège le moteur, surtout en froid négatif)'],
        ['Absorption', 'gaz inerte + absorbant : réagit doucement aux variations brusques'],
        ['Antipompage', 'MOP + matériau poreux : limite le pompage, réponse plus lente'],
      ],
    },
    {
      type: 'note',
      text: "Le bulbe : en contact intime avec le tube d’aspiration, sur une partie horizontale, avec son collier d’origine, isolé. Sur un tube de moins de 3/4\" il se place à « midi », au-delà vers « 4 heures ». Avec égalisation externe, le bulbe se place AVANT le piquage d’égalisation.",
    },

    { type: 'heading', text: 'L’évaporateur et la surchauffe' },
    {
      type: 'text',
      text: "Le liquide détendu entre majoritairement liquide, s’évapore en captant la chaleur de l’air ou de l’eau, et devient 100 % vapeur avant la sortie. La fin de l’évaporateur est la zone de surchauffe.",
    },
    { type: 'formula', text: 'Surchauffe = T mesurée au bulbe (sortie évaporateur) − T évaporation (lue au manomètre BP)' },
    {
      type: 'bullets',
      items: [
        'Valeur normale : 5 à 8 K selon les applications.',
        'Trop forte : évaporateur sous-alimenté (détendeur trop fermé ou manque de fluide) → BP basse, peu de froid, consigne non atteinte.',
        'Trop faible : évaporateur trop alimenté (détendeur trop ouvert ou excès de fluide) → risque de coup de liquide au compresseur.',
        'Surchauffe totale (jusqu’à l’entrée du compresseur) : 15 K au maximum, car les vapeurs aspirées refroidissent le moteur.',
        'Exemple : sortie évaporateur 6,5 °C, BP lue 4 bar au R22 (0 °C) → surchauffe 6,5 K.',
      ],
    },
    {
      type: 'table',
      headers: ['Évaporateurs à eau', 'Évaporateurs à air'],
      rows: [
        ['coaxial (entretien délicat, eau sans tartre)', 'statique / convection naturelle (vitrines)'],
        ['à plaques brasées (compact, performant, craint l’encrassement et le gel)', 'ventilé (convection forcée), ailettes de 3 à 8 mm'],
        ['multitubulaire à détente sèche', 'mural, plafonnier (bac à condensats et dégivrage)'],
      ],
    },
    { type: 'note', text: 'Plaques eutectiques : l’évaporateur baigne dans une solution qui gèle et stocke du froid sous forme latente (transport frigorifique).' },

    { type: 'heading', text: 'Les fluides à glissement (zéotropes)' },
    {
      type: 'text',
      text: "Un mélange zéotrope (série 400, comme le R407C) ne change pas d’état à température constante : à pression constante, la température augmente pendant l’évaporation et diminue pendant la condensation. Il faut alors distinguer la température de bulle (début d’ébullition, liquide saturé) et la température de rosée (vapeur saturée).",
    },
    {
      type: 'bullets',
      items: [
        'Surchauffe = T au bulbe − T de ROSÉE à la pression BP.',
        'Sous-refroidissement = T de BULLE à la pression HP − T du liquide.',
        'Exemple R407C : BP 4,8 bar (bulle 0,7 °C, rosée 6,8 °C), bulbe à 12 °C → surchauffe = 12 − 6,8 = 5,2 K, et non 11,3 K.',
      ],
    },
    {
      type: 'warning',
      text: "Le livre se contredit sur le R407C : à un endroit il le décrit comme « 23 % de R23 », qui bouillirait à −82 °C ; ailleurs, correctement, comme un mélange R32 / R125 / R134a. La composition réelle est 23 % de R32, 25 % de R125 et 52 % de R134a. Le livre qualifie aussi le R410A de zéotrope : c’est un mélange quasi azéotrope, au glissement négligeable (< 0,2 K), qui se comporte presque comme un fluide pur.",
    },
    {
      type: 'warning',
      text: "Les plages varient selon les pages du livre : surchauffe « 5 à 7 », « 5 à 8 » ou « 4 à 8 » K ; écart condensation – air « 15 », « 12 à 15 » ou « 11 à 15 » K. Ce sont des ordres de grandeur : la référence reste la notice du constructeur.",
    },

    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Sur un split, la BP correspond à 3 °C d’évaporation, le tube en sortie d’évaporateur est à 14 °C ; la HP correspond à 48 °C et le liquide sort à 46 °C. Diagnostic ?',
      solution: ['Surchauffe = 14 − 3 = 11 K : trop forte (évaporateur sous-alimenté).', 'Sous-refroidissement = 48 − 46 = 2 K : trop faible.', 'Les deux ensemble orientent vers un manque de fluide (fuite) : chercher la fuite avant de compléter la charge.'],
    },
    {
      type: 'exercise',
      question: 'Sur une installation au R407C, la HP est de 18 bar (rosée 48,2 °C, bulle 43,4 °C) et le liquide sort à 42 °C. Calculez correctement le sous-refroidissement.',
      solution: ['Fluide à glissement : on prend la température de BULLE.', 'Sous-refroidissement = 43,4 − 42 = 1,4 K (faible), et non 48,2 − 42 = 6,2 K qui ferait croire à tort que la charge est bonne.'],
    },
  ],
};
