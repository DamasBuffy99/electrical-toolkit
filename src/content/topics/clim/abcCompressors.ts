import { TopicContent } from '../../types';

export const abcCompressorsContent: TopicContent = {
  title: 'Les compresseurs : technologies, inverter et lubrification',
  subtitle: 'Pistons, rotatif, scroll, vis, centrifuge ; régulation de puissance ; graissage',
  blocks: [
    {
      type: 'text',
      text: "Le compresseur aspire la vapeur basse pression et la refoule à haute pression et haute température. C’est l’organe qui consomme l’électricité, celui qui coûte le plus cher et celui dont la panne immobilise l’installation. Chaque technologie a sa plage de puissance et ses points faibles.",
    },
    { type: 'illustration', name: 'tech-compressors', caption: 'Les grandes familles de compresseurs' },

    { type: 'heading', text: 'Le compresseur à pistons' },
    {
      type: 'text',
      text: "Un vilebrequin (ou un excentrique pour les petites puissances) transforme la rotation du moteur en mouvement alternatif des pistons. Quand le piston descend, la dépression ouvre le clapet d’aspiration ; quand il remonte, il comprime le gaz puis ouvre le clapet de refoulement.",
    },
    {
      type: 'table',
      headers: ['Construction', 'Description', 'Usage'],
      rows: [
        ['Hermétique', 'moteur et compresseur dans une coque soudée ; moteur refroidi par les gaz aspirés (~3 000 tr/min)', 'petites puissances, non réparable'],
        ['Semi-hermétique', 'moteur et compresseur dans un même corps boulonné ; pompe à huile', 'moyennes puissances, réparable'],
        ['Ouvert', 'moteur séparé ; garniture d’étanchéité sur l’arbre, bien lubrifiée', 'grosses puissances, tout type de moteur'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'Les clapets (aspiration et refoulement) sont les pièces fragiles : du liquide aspiré les use ou les casse (« coup de liquide »), car un liquide est incompressible.',
        'Le carter, à la pression d’aspiration, contient la réserve d’huile.',
        'Variante « Discus » : clapets coniques intégrés à la plaque, moins d’espace mort ; environ 10 à 15 % de consommation en moins.',
      ],
    },

    { type: 'heading', text: 'Rotatif et scroll' },
    {
      type: 'bullets',
      items: [
        'Rotatif à piston roulant : un piston excentré tourne dans un cylindre, une palette sépare aspiration et refoulement. Souple, couple régulier, silencieux : très utilisé en petits splits.',
        'Rotatif à palettes : un rotor excentré muni de palettes coulissantes ; technologie ancienne.',
        'Scroll (spiro-orbital) : une spirale mobile orbite dans une spirale fixe ; le gaz est comprimé de la périphérie vers le centre. Peu de pièces, compression continue, démarrage facile, tolère un peu de liquide, idéal en vitesse variable.',
      ],
    },
    { type: 'note', text: 'Un scroll triphasé ne comprime que dans un sens de rotation. À la mise en service, vérifiez l’ordre des phases : un scroll qui tourne à l’envers est bruyant et ne crée pas d’écart de pression.' },

    { type: 'heading', text: 'Vis et centrifuge : les grosses puissances' },
    {
      type: 'bullets',
      items: [
        'Vis (mono-vis avec satellites, ou bi-vis mâle/femelle) : compression continue le long des rotors, abondamment huilée (étanchéité et refroidissement) avec séparateur d’huile. Puissance réglée de 15 à 100 % par tiroir ou vitesse variable. De 30 à 1 000 kW environ.',
        'Centrifuge : une roue à très grande vitesse transforme l’énergie en pression, comme une pompe centrifuge ; plusieurs roues en série. Au-delà de 1 000 kW (grands centres commerciaux, industrie). Réglage 20 à 100 % par aubes pivotantes ; risque de « pompage » à faible charge ; circuit d’huile complexe.',
      ],
    },
    {
      type: 'note',
      text: 'Rappel du guide IEPF : en Afrique, les compresseurs à vis ont parfois fini à l’arrêt faute de maintenance adaptée ; les technologies rustiques (pistons, centrifuges) ont fait leurs preuves sur 20 ans.',
    },

    { type: 'heading', text: 'L’inverter : la vitesse variable' },
    {
      type: 'text',
      text: "Un compresseur classique fonctionne en tout ou rien. L’inverter fait varier la fréquence du courant, donc la vitesse, donc le volume aspiré et la puissance : le compresseur suit en permanence le besoin du local, sans à-coups de température ni pointes de démarrage.",
    },
    {
      type: 'bullets',
      items: [
        'L’électronique redresse le courant alternatif, le filtre (courant continu), puis le « découpe » à la fréquence voulue (onduleur, modulation de largeur d’impulsion PWM).',
        'Deux familles : moteur asynchrone triphasé alimenté à fréquence variable, ou — le plus courant aujourd’hui — moteur à courant continu sans balais à aimants permanents (« DC inverter »).',
        'Une carte alimentée en monophasé recrée elle-même trois phases pour un compresseur triphasé.',
      ],
    },
    { type: 'formula', text: 'Vitesse de synchronisme Ns = 60 × f / p   (f en Hz, p = nombre de paires de pôles)' },
    {
      type: 'warning',
      text: "Le livre écrit qu’un moteur « 2 pôles » tourne à 1 500 tr/min à 50 Hz. C’est faux : un moteur à 2 pôles (1 paire) tourne à 3 000 tr/min ; c’est un moteur à 4 pôles (2 paires) qui tourne à 1 500 tr/min. Les proportions données restent justes : à 30 Hz il tourne à 900 tr/min, à 60 Hz à 1 800 tr/min.",
    },

    { type: 'heading', text: 'Régler la puissance d’un compresseur' },
    {
      type: 'table',
      headers: ['Méthode', 'Principe', 'Remarque'],
      rows: [
        ['Tout ou rien', 'marche/arrêt sur thermostat', 'simple, mais variations de température et pointes de consommation'],
        ['Pump down', 'électrovanne liquide + pressostat BP', 'arrêt « à vide », évite la migration de liquide'],
        ['Mise hors service de cylindres', 'clapets d’aspiration bloqués ouverts', 'compresseurs à pistons'],
        ['Injection de gaz chauds', 'by-pass refoulement → aspiration', 'maintient une BP correcte, mais gaspille de l’énergie'],
        ['Tiroir', 'une partie de la vis ne comprime plus', 'compresseurs à vis'],
        ['Vitesse variable', 'inverter ou variateur de fréquence', 'la méthode la plus efficace'],
        ['Digital scroll', 'la spirale fixe se soulève par périodes (électrovanne)', 'paliers de 7 à 100 %, simple et fiable'],
      ],
    },

    { type: 'heading', text: 'La lubrification' },
    {
      type: 'bullets',
      items: [
        'L’huile lubrifie les pièces en mouvement et évacue la chaleur du travail mécanique.',
        'Barbotage : les têtes de bielle plongent dans l’huile du carter (petits compresseurs lents, ≤ 900 tr/min).',
        'Pompe à huile en bout d’arbre : alimente paliers et axes par des canaux (semi-hermétiques).',
        'Hermétiques (pistons, scroll) : arbre creux à rainure hélicoïdale qui aspire l’huile par force centrifuge.',
        'Vis : injection d’huile entre les rotors sous la pression HP, avec séparateur d’huile obligatoire.',
      ],
    },

    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Un moteur à 4 pôles est alimenté à 50 Hz, puis par un variateur à 35 Hz. Quelles sont ses vitesses de synchronisme ? Sa vitesse réelle à 50 Hz, avec 4 % de glissement ?',
      solution: ['4 pôles = 2 paires : Ns = 60 × 50 / 2 = 1 500 tr/min ; à 35 Hz : 60 × 35 / 2 = 1 050 tr/min.', 'Vitesse réelle à 50 Hz : 1 500 × (1 − 0,04) = 1 440 tr/min.'],
    },
    {
      type: 'exercise',
      question: 'Un local a des besoins très variables au cours de la journée. Entre un compresseur tout-ou-rien avec injection de gaz chauds et un inverter, lequel choisir et pourquoi ?',
      solution: [
        'L’inverter : il réduit réellement la puissance absorbée en réduisant la vitesse.',
        'L’injection de gaz chauds maintient le compresseur à pleine vitesse et recycle du gaz comprimé : la puissance électrique reste presque la même, on gaspille de l’énergie.',
      ],
    },
  ],
};
