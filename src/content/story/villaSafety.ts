import { TopicContent } from '../types';

export const villaSafetyContent: TopicContent = {
  title: 'Protéger la famille : différentiels et terre',
  subtitle: 'Esther a deux enfants et une question simple : « Est-ce qu’ils risquent de s’électrocuter ? ». Awa lui explique comment la prise de terre et les différentiels 30 mA travaillent ensemble.',
  blocks: [
    { type: 'scene', text: 'Semaine 4 · Chez les Mensah' },
    {
      type: 'dialogue',
      speaker: 'Esther Mensah',
      role: 'client',
      text: 'Chez ma sœur, le lave-linge « pique » quand on le touche pieds nus. Comment être sûre que ça n’arrivera pas chez nous ?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Ce picotement, c’est du courant qui passe par le corps de votre sœur pour rejoindre la terre. C’est un signal d’alarme : la machine a un défaut et l’installation ne la protège pas. Chez vous, deux dispositifs vont travailler ensemble pour que cela ne puisse pas durer plus d’une fraction de seconde.',
    },

    { type: 'heading', text: '1 · Ce qui est dangereux, c’est le courant' },
    {
      type: 'text',
      text: 'Le corps humain conduit l’électricité. Ce qui fait mal, puis tue, c’est l’intensité du courant qui le traverse et la durée pendant laquelle elle passe.',
    },
    {
      type: 'table',
      headers: ['Courant dans le corps', 'Effet'],
      rows: [
        ['1 mA', 'seuil de perception : un picotement'],
        ['10 à 20 mA', 'contraction des muscles : on ne peut plus lâcher'],
        ['50 mA', 'difficultés respiratoires'],
        ['100 à 300 mA', 'fibrillation du cœur, souvent mortelle'],
      ],
    },
    {
      type: 'text',
      text: 'Avec une résistance du corps d’environ 1 000 Ω (pieds nus sur un sol humide, encore moins), une tension de 230 V peut faire passer plus de 200 mA : bien au-delà du seuil mortel. D’où la règle de base : une tension de contact au-delà de 50 V ne doit jamais durer.',
    },
    { type: 'fiche', id: 'electrical-safety', why: 'Effets du courant, contacts direct et indirect, schémas de liaison à la terre.' },

    { type: 'heading', text: '2 · Le défaut : quand la carcasse devient sous tension' },
    { type: 'illustration', name: 'earthing-tt', caption: 'Schéma TT : le courant de défaut revient au transformateur par le sol, le différentiel le détecte' },
    {
      type: 'text',
      text: 'Imaginons que, dans le lave-linge, un fil abîmé touche la carcasse métallique. Grâce au conducteur de protection vert-jaune (le PE), la carcasse est reliée à la prise de terre de la maison (R_A). Le courant de défaut repart donc par le sol jusqu’à la prise de terre du transformateur du distributeur (R_B).',
    },
    { type: 'formula', text: 'I_d = \\frac{U}{R_A + R_B} = \\frac{230}{38 + 10} ≈ 4,8 A' },
    {
      type: 'dialogue',
      speaker: 'Koffi Mensah',
      role: 'client',
      text: '4,8 ampères ? Mais alors le disjoncteur de 20 A du lave-linge ne va jamais sauter !',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Exactement, vous avez trouvé le piège. Et pendant ce temps, la carcasse monte à environ 180 V par rapport au sol. Le disjoncteur ne sert à rien ici : c’est le différentiel qui sauve la situation.',
    },
    { type: 'formula', text: 'U_{contact} = R_A × I_d = 38 × 4,8 ≈ 182 V   (≫ 50 V : dangereux)' },

    { type: 'heading', text: '3 · Le différentiel : il compte ce qui part et ce qui revient' },
    {
      type: 'text',
      text: 'Un interrupteur différentiel compare en permanence le courant qui part par la phase et celui qui revient par le neutre. Normalement, ils sont égaux. S’il manque plus de 30 mA au retour, c’est que ce courant s’échappe ailleurs, peut-être dans un corps humain : il coupe en quelques dizaines de millisecondes.',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Dans notre exemple, la fuite fait 4,8 A, soit 160 fois le seuil de 30 mA. Le différentiel coupe instantanément, avant que quiconque touche la machine. Et même si un enfant met les doigts dans une prise malgré les cache-prises, le courant qui traverse son corps vers le sol est aussi une fuite : le 30 mA coupe avant le seuil dangereux.',
    },
    {
      type: 'note',
      text: 'Le disjoncteur et le différentiel n’ont pas le même métier. Le disjoncteur protège les câbles contre les surcharges et les courts-circuits (des ampères). Le différentiel protège les personnes contre les fuites (des milliampères). Il faut les deux.',
    },

    { type: 'heading', text: '4 · La prise de terre : combien d’ohms ?' },
    {
      type: 'text',
      text: 'Dans ce schéma, appelé TT, la condition de sécurité s’écrit simplement : la tension de défaut ne doit pas dépasser 50 V tant que le différentiel n’a pas coupé.',
    },
    { type: 'formula', text: 'R_A × I_{Δn} ≤ 50 V' },
    {
      type: 'bullets',
      items: [
        'Avec des différentiels 30 mA : R_A ≤ 50 / 0,03 ≈ 1 667 Ω. Très facile à respecter.',
        'Mais le disjoncteur de branchement, en tête d’installation, est un différentiel de 500 mA : R_A ≤ 50 / 0,5 = 100 Ω. C’est cette valeur qu’on vise.',
      ],
    },
    {
      type: 'text',
      text: 'La boucle de cuivre posée dans les fondations à la première semaine porte ses fruits : sur le chantier, Moussa mesurera 38 Ω, bien en dessous des 100 Ω. Un simple piquet planté dans un sol sec aurait pu donner plusieurs centaines d’ohms.',
    },
    { type: 'fiche', id: 'earthing', why: 'Résistivité du sol, piquets, boucle en fond de fouille, calcul de la résistance.' },

    { type: 'heading', text: '5 · La salle de bain : la liaison équipotentielle' },
    {
      type: 'text',
      text: 'Dans la salle de bain, le corps mouillé est beaucoup plus conducteur. Awa fait relier entre elles toutes les parties métalliques (canalisations, bonde de douche, cadre métallique) et au conducteur de protection : si un défaut survient, elles montent toutes à la même tension et aucun courant ne traverse la personne qui les touche.',
    },
    {
      type: 'regional',
      text: 'Le schéma TT est la règle pour les abonnés raccordés au réseau basse tension public. Les sols latéritiques secs peuvent avoir une forte résistivité en saison sèche : la boucle en fond de fouille, ou plusieurs piquets reliés entre eux et éloignés de leur longueur, donne de bien meilleurs résultats qu’un piquet unique. Mesurez la terre en saison sèche, c’est le cas le plus défavorable.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Ce qui tue, c’est le courant qui traverse le corps : quelques dizaines de milliampères suffisent.',
        'En TT, un défaut d’isolement fait passer quelques ampères seulement : le disjoncteur ne coupe pas, le différentiel si.',
        'Condition de sécurité : R_A × I_Δn ≤ 50 V ; avec un branchement 500 mA, on vise R_A ≤ 100 Ω.',
        'Tout appareil métallique est relié au PE ; la salle de bain reçoit une liaison équipotentielle.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'La terre d’une maison mesure 150 Ω. Le branchement est protégé par un différentiel de 500 mA. Est-ce acceptable ? Que proposez-vous ?',
      solution: [
        '150 × 0,5 = 75 V > 50 V : la condition n’est pas respectée pour le différentiel de branchement.',
        'Il faut améliorer la terre (piquets supplémentaires reliés entre eux, boucle, amélioration du sol) jusqu’à passer sous 100 Ω.',
        'Les différentiels 30 mA restent efficaces (150 × 0,03 = 4,5 V), mais la protection en tête n’est plus garantie.',
      ],
    },
    {
      type: 'exercise',
      question: 'Pourquoi le bouton « Test » d’un différentiel doit-il être actionné régulièrement ?',
      solution: [
        'Le bouton crée une fuite artificielle et vérifie que le mécanisme s’ouvre. Un différentiel qui n’a jamais fonctionné pendant des années peut se gripper.',
        'Awa conseille aux Mensah de l’actionner une fois par mois : si le différentiel ne coupe pas, il faut le faire remplacer.',
      ],
    },
  ],
};
