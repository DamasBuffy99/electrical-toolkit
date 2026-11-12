import { TopicContent } from '../types';
import { fig } from '../topics/clim/fig';

export const cvBriefContent: TopicContent = {
  title: 'Le confort, ça se mesure',
  subtitle: 'Koffi veut « du froid comme à l’hôtel, 18 °C ». Ousmane Cissé, l’ingénieur climaticien de Lumen Ingénierie, explique ce qu’est le confort sous les tropiques, fixe les conditions de calcul et commence par réduire la chaleur avant d’acheter du froid.',
  blocks: [
    { type: 'scene', text: 'Semaine 2 · Bureau d’études, avec Koffi, Esther et Jules Agbo' },
    {
      type: 'objectives',
      items: [
        'Comprendre ce qui fait le confort : température, humidité, mouvement de l’air, parois.',
        'Fixer les conditions de base extérieures et la consigne intérieure.',
        'Mesurer le coût d’un degré de consigne en moins.',
        'Réduire les apports solaires avant de dimensionner les machines.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '32 °C', label: 'base extérieure, 25,5 g d’eau/kg' },
        { value: '26 °C · 50 %', label: 'consigne intérieure' },
        { value: '≈ 7 %', label: 'de consommation en plus par degré en moins' },
        { value: '− 1,2 kW', label: 'gagnés par le brise-soleil du séjour' },
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'team',
      text: 'Koffi, Esther, je vous présente Ousmane Cissé, notre ingénieur climaticien. J’ai réservé dans le tableau quatre circuits pour vos clims ; c’est lui qui va dire combien de froid il faut et quels appareils poser.',
    },
    {
      type: 'dialogue',
      speaker: 'Koffi Mensah',
      role: 'client',
      text: 'Je veux du froid comme à l’hôtel : 18 °C dans toute la maison.',
    },
    {
      type: 'dialogue',
      speaker: 'Ousmane Cissé',
      role: 'engineer',
      text: 'À 18 °C, vous aurez froid au bout d’une heure, et en sortant sur la terrasse à 33 °C le choc sera désagréable. Le confort, ce n’est pas une température basse : c’est un équilibre entre température, humidité, mouvement de l’air et chaleur rayonnée par les murs. Sous notre climat, on vise 25 à 26 °C avec un air sec, et c’est l’humidité qu’on retire qui fait la sensation de fraîcheur.',
    },

    { type: 'heading', text: '1 · Les quatre paramètres du confort' },
    { type: 'illustration', name: 'clim-comfort', caption: 'La zone de confort sur le diagramme de l’air humide : température et humidité ensemble' },
    {
      type: 'table',
      headers: ['Paramètre', 'Effet', 'Valeur recherchée'],
      rows: [
        ['Température de l’air', 'échanges par convection avec la peau', '25 à 27 °C en climat chaud'],
        ['Humidité relative', 'la sueur s’évapore mal si l’air est humide', '40 à 60 %'],
        ['Vitesse de l’air', 'rafraîchit, mais devient un courant d’air', '≤ 0,2 m/s dans la zone occupée'],
        ['Température des parois', 'un mur ou une vitre chaude rayonne vers le corps', 'proche de celle de l’air'],
      ],
    },
    fig('p021_0', 'Tableau 1.4 du guide IEPF — conditions intérieures de confort recommandées'),
    {
      type: 'calc',
      title: 'Ce que coûtent 8 degrés de moins',
      steps: [
        { label: 'Écart de consigne demandé par Koffi', formula: 'Δθ = 26 − 18 = 8 °C' },
        { label: 'Règle pratique : chaque degré en moins augmente la consommation d’environ 7 %', formula: '1,07^{8} ≈ 1,72' },
        { label: 'Avec 18 °C, l’humidité condensée sur les murs froids et les bouches augmente aussi', formula: 'point de rosée de l’air extérieur ≈ 28 °C > 18 °C' },
      ],
      result: '+ 70 % de consommation environ, et des risques de condensation : consigne retenue 26 °C, réglable de 24 à 27 °C',
    },
    {
      type: 'decision',
      title: 'Conditions intérieures',
      choice: '26 °C et 50 % d’humidité relative dans les pièces climatisées',
      reasons: [
        'C’est la zone de confort des recommandations du guide IEPF pour les climats chauds et humides.',
        'L’écart avec l’extérieur reste de 6 à 7 °C : pas de choc thermique en sortant.',
        'Avec un air à 50 %, 26 °C paraît frais : on achète moins de froid sensible.',
      ],
      rejected: '18 à 20 °C : inconfort par refroidissement, condensation, et une facture presque doublée.',
    },

    { type: 'heading', text: '2 · Les conditions de base extérieures' },
    {
      type: 'text',
      text: 'On ne dimensionne pas pour le jour le plus chaud de l’histoire, mais pour des conditions dépassées seulement quelques heures par an : les conditions de base. Elles se lisent dans les tables du guide IEPF ou des normes, ville par ville. Pour une ville côtière d’Afrique de l’Ouest, Ousmane retient 32 °C et une humidité absolue de 25,5 g d’eau par kg d’air sec.',
    },
    fig('p020_0', 'Tableau 1.3 du guide IEPF — conditions de base extérieures par ville (température, humidité, vent)'),
    {
      type: 'calc',
      title: 'Écarts de calcul',
      steps: [
        { label: 'Écart de température extérieur – intérieur', formula: 'Δθ = θ_e − θ_i = 32 − 26 = 6 °C' },
        { label: 'Écart d’humidité absolue (26 °C, 50 % ≈ 10,8 g/kg)', formula: 'Δω = ω_e − ω_i = 25,5 − 10,8 = 14,7 g/kg' },
      ],
      result: 'Δθ = 6 °C ; Δω = 14,7 g/kg : l’humidité pèsera autant que la température dans le bilan de l’air neuf',
    },
    { type: 'fiche', id: 'clim-intro', why: 'Climats tropicaux, confort et conditions de base.' },
    { type: 'fiche', id: 'abc-psychro', why: 'L’air humide : humidité absolue, relative, point de rosée.' },

    { type: 'heading', text: '3 · D’abord réduire la chaleur, ensuite acheter du froid' },
    {
      type: 'dialogue',
      speaker: 'Jules Agbo (architecte)',
      role: 'team',
      text: 'Le séjour a une grande baie vitrée plein ouest, sur le jardin. C’est l’atout de la maison.',
    },
    {
      type: 'dialogue',
      speaker: 'Ousmane Cissé',
      role: 'engineer',
      text: 'Et c’est son radiateur à 16 h. Le soleil d’ouest arrive bas, juste quand le séjour est occupé. Je vous propose un débord de toiture et des lames verticales orientables : la vue reste, le soleil direct ne rentre plus.',
    },
    fig('p164_0', 'Figure 6.4 du guide — protections solaires horizontales, verticales et mixtes'),
    {
      type: 'calc',
      title: 'Ce que gagne le brise-soleil de la baie ouest (6 m²)',
      steps: [
        { label: 'Rayonnement sur un vitrage ouest à 16 h (ordre de grandeur, tables du guide)', formula: 'R_v ≈ 450 W/m²' },
        { label: 'Sans protection (vitrage clair, g ≈ 0,85)', formula: 'Q = g × S × R_v = 0,85 × 6 × 450 ≈ 2 300 W' },
        { label: 'Avec débord et lames (facteur de réduction ≈ 0,4)', formula: 'Q ≈ 0,4 × 2 300 ≈ 920 W' },
      ],
      result: 'Environ 1,2 kW de moins pour le seul séjour (le reste du vitrage est compté au bilan) : le split passe d’un 24 000 à un 18 000 BTU/h',
    },
    {
      type: 'decision',
      title: 'Protections solaires',
      choice: 'Débord de toiture de 80 cm et lames verticales orientables sur la baie ouest ; vitrages des chambres à l’est et au nord protégés par des volets',
      reasons: [
        'Un watt de soleil arrêté dehors ne coûte rien à l’exploitation ; un watt de froid se paie chaque jour.',
        'Le surcoût des lames est compensé par un split plus petit et une facture plus faible.',
      ],
      rejected: 'Un film réfléchissant seul : moins efficace qu’une protection extérieure, et il assombrit le séjour toute la journée.',
    },
    { type: 'fiche', id: 'clim-building', why: 'Orientation, protections solaires, inertie et isolation.' },

    { type: 'heading', text: '4 · Ce que disent les normes' },
    {
      type: 'norms',
      title: 'Définir le confort',
      rows: [
        { norm: 'ISO 7730', rule: 'Indices PMV et PPD : confort calculé à partir de la température, de l’humidité, de l’air, de l’habillement et de l’activité.', result: '26 °C, habillement léger : PMV ≈ 0' },
        { norm: 'ASHRAE 55', rule: 'Zone de confort sur le diagramme psychrométrique ; méthode adaptative pour les bâtiments ventilés naturellement.', result: 'même zone' },
        { norm: 'EN 16798-1', rule: 'Catégories de qualité d’ambiance I à IV ; 25,5 °C en été pour la catégorie II (bureaux, logements).', result: 'catégorie II' },
        { norm: 'Guide IEPF', rule: 'Conditions de base extérieures et intérieures par ville pour l’Afrique et l’océan Indien.', result: '32 °C / 26 °C' },
      ],
    },
    {
      type: 'regional',
      text: 'Beaucoup de clients règlent leur télécommande sur 16 ou 18 °C « pour que ça refroidisse plus vite ». C’est faux : le split refroidit à la même vitesse, il s’arrête seulement plus tard. Ousmane fera paramétrer une consigne minimale de 24 °C sur les télécommandes, et Esther a déjà prévu de l’expliquer à leur employée de maison. Pensez aussi aux plafonds et toitures : une dalle non isolée en plein soleil peut dépasser 50 °C en surface.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Le confort combine température, humidité, vitesse de l’air et température des parois.',
        'Sous les tropiques, on vise 25 à 26 °C et 50 % d’humidité ; retirer l’humidité fait autant que baisser la température.',
        'On dimensionne pour des conditions de base, pas pour un record.',
        'Chaque degré de consigne en moins coûte environ 7 % de consommation.',
        'Une protection solaire extérieure est le froid le moins cher.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Un client règle sa clim sur 22 °C au lieu de 26 °C. Quelle surconsommation approximative ?',
      solution: ['Quatre degrés : 1,07⁴ ≈ 1,31.', 'Environ 30 % de consommation en plus.'],
    },
    {
      type: 'exercise',
      question: 'Une baie de 4 m² au sud reçoit 150 W/m² à l’heure de pointe, vitrage clair g = 0,85, sans protection. Quel apport solaire ?',
      solution: ['Q = 0,85 × 4 × 150 ≈ 510 W.', 'Au sud, sous nos latitudes proches de l’équateur, le soleil est haut : un simple débord suffit à le réduire fortement.'],
    },
  ],
};
