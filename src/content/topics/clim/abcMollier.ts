import { TopicContent } from '../../types';

export const abcMollierContent: TopicContent = {
  title: 'Le diagramme enthalpique et le bilan du cycle',
  subtitle: 'Lire le diagramme de Mollier, tracer un cycle réel et en tirer puissance et COP',
  blocks: [
    {
      type: 'text',
      text: "Le diagramme enthalpique (ou de Mollier, du nom du physicien allemand) est la carte d’identité d’un fluide frigorigène. On y suit l’état du fluide à chaque étape du cycle, et on y lit directement l’énergie échangée. Chaque fluide a son propre diagramme.",
    },
    { type: 'illustration', name: 'tech-ph', caption: 'Le cycle réel sur le diagramme pression–enthalpie' },

    { type: 'heading', text: 'Lire le diagramme' },
    {
      type: 'bullets',
      items: [
        'En abscisse : l’enthalpie h (kJ/kg), l’énergie contenue dans 1 kg de fluide.',
        'En ordonnée : la pression ABSOLUE (bar), souvent sur une échelle logarithmique.',
        'La courbe en cloche (courbe de saturation) sépare le liquide (à gauche), le mélange liquide + vapeur (dedans) et la vapeur (à droite).',
        'Isobares (pression constante) : horizontales. Isothermes (température constante) : horizontales DANS la cloche, puis plongeantes dans la vapeur.',
        'Isotitres : proportion de vapeur dans le mélange (de 0 à 1). Isochores : volume massique constant. Isentropes : courbes suivies par une compression idéale.',
      ],
    },
    { type: 'note', text: 'Dans la cloche, pression et température sont liées : à une pression correspond une seule température de saturation. C’est ce que traduit la réglette du manomètre.' },

    { type: 'heading', text: 'Les 7 étapes du cycle réel' },
    {
      type: 'table',
      headers: ['Points', 'Étape', 'Ce qui se passe'],
      rows: [
        ['1 → 2', 'Compression', 'vapeur BP surchauffée → vapeur HP très chaude ; l’enthalpie augmente du travail fourni'],
        ['2 → 3', 'Désurchauffe', 'la vapeur se refroidit jusqu’à la saturation (refoulement, entrée condenseur)'],
        ['3 → 4', 'Condensation', 'la vapeur devient liquide à pression ET température constantes'],
        ['4 → 5', 'Sous-refroidissement', 'le liquide continue de se refroidir sous la température de condensation'],
        ['5 → 6', 'Détente', 'la pression chute brutalement dans le détendeur ; une partie du liquide se vaporise ; h ne change pas'],
        ['6 → 7', 'Évaporation', 'le mélange s’évapore à pression et température constantes en captant la chaleur'],
        ['7 → 1', 'Surchauffe', 'la vapeur se réchauffe encore : garantie qu’il ne reste aucune goutte de liquide'],
      ],
    },
    { type: 'illustration', name: 'tech-ph', props: { highlight: 'evaporator' }, caption: 'Évaporation (6 → 7) puis surchauffe (7 → 1) : c’est là qu’on produit le froid' },
    { type: 'illustration', name: 'tech-ph', props: { highlight: 'condenser' }, caption: 'Désurchauffe, condensation et sous-refroidissement : la chaleur est rejetée' },
    {
      type: 'warning',
      text: "Le livre écrit que pendant la détente « l’enthalpie est nulle ». Il faut lire : la VARIATION d’enthalpie est nulle (détente isenthalpique, les points 5 et 6 sont à la même abscisse). L’enthalpie elle-même n’est pas nulle.",
    },

    { type: 'heading', text: 'Tracer un cycle à partir des relevés' },
    {
      type: 'bullets',
      items: [
        'Isobare d’évaporation : pression BP lue au manomètre + 1 bar (pression absolue).',
        'Isobare de condensation : pression HP lue + 1 bar.',
        'Point 1 (entrée compresseur) : sur l’isobare BP, à la température d’évaporation + la surchauffe (≈ 5 K).',
        'Point 2 (sortie compresseur) : on suit l’isentrope depuis le point 1 jusqu’à l’isobare HP.',
        'Point 5 (entrée détendeur) : sur l’isobare HP, à la température du liquide mesurée (sous-refroidissement compris).',
        'Point 6 (entrée évaporateur) : verticale depuis le point 5 jusqu’à l’isobare BP.',
      ],
    },
    { type: 'illustration', name: 'tech-ph', props: { highlight: 'compressor' }, caption: 'La compression suit (à peu près) une isentrope' },

    { type: 'heading', text: 'Le bilan énergétique' },
    { type: 'formula', text: 'Froid produit par kg de fluide = h1 − h5   (kJ/kg)' },
    { type: 'formula', text: 'Travail de compression par kg = h2 − h1' },
    { type: 'formula', text: 'Chaleur rejetée au condenseur par kg = h2 − h5 = froid + travail' },
    { type: 'formula', text: 'COP théorique = (h1 − h5) / (h2 − h1)   ;   Puissance frigorifique = débit massique × (h1 − h5)' },
    {
      type: 'bullets',
      items: [
        'Pour comparaison, il faut 2 257 kJ pour vaporiser 1 kg d’eau : un fluide frigorigène est choisi pour s’évaporer à basse température avec une forte chaleur latente.',
        'Plus le sous-refroidissement est grand, plus h5 est petit, plus chaque kg de fluide produit de froid. Exemple du livre : sur du R407C, abaisser le liquide de 25 à 15 °C avant le détendeur augmente la production frigorifique d’environ 7 % (c’est le rôle de l’échangeur liquide/vapeur).',
        'Plus l’écart entre évaporation et condensation est grand (taux de compression), plus le travail augmente et le COP baisse.',
      ],
    },

    { type: 'heading', text: 'Le vocabulaire à maîtriser' },
    {
      type: 'table',
      headers: ['Terme', 'Signification'],
      rows: [
        ['Enthalpie', 'énergie contenue dans le fluide (kJ/kg)'],
        ['Entropie', 'grandeur liée à la chaleur échangée et au « désordre » ; constante dans une compression idéale'],
        ['Température / pression de saturation', 'couple (T, p) où se produisent ébullition et condensation'],
        ['Liquide sous-refroidi', 'liquide plus froid que sa température de saturation'],
        ['Liquide saturé', 'liquide à la température de saturation, prêt à bouillir'],
        ['Vapeur saturée', 'vapeur sans liquide, à la température de saturation'],
        ['Vapeur surchauffée', 'vapeur plus chaude que sa température de saturation'],
      ],
    },

    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Sur un diagramme, vous relevez h5 = 250 kJ/kg, h1 = 425 kJ/kg et h2 = 465 kJ/kg. Calculez le froid produit par kg, le travail, la chaleur rejetée et le COP théorique.',
      solution: ['Froid : 425 − 250 = 175 kJ/kg.', 'Travail : 465 − 425 = 40 kJ/kg.', 'Rejet au condenseur : 465 − 250 = 215 kJ/kg (= 175 + 40).', 'COP théorique = 175 / 40 ≈ 4,4 (le COP réel sera plus bas à cause des pertes).'],
    },
    {
      type: 'exercise',
      question: 'Avec le même cycle, quel débit de fluide faut-il pour produire 7 kW de froid ? Quelle puissance le condenseur rejette-t-il ?',
      solution: ['Débit = 7 / 175 = 0,04 kg/s (144 kg/h).', 'Condenseur : 0,04 × 215 = 8,6 kW, soit les 7 kW du local + 1,6 kW de compression.'],
    },
  ],
};
