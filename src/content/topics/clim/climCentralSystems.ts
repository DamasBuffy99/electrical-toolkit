import { TopicContent } from '../../types';
import { fig } from './fig';

export const climCentralSystemsContent: TopicContent = {
  title: 'Les familles d’installations centralisées',
  subtitle: 'Tout air, air/eau, ventilo-convecteurs et procédés complémentaires',
  blocks: [
    {
      type: 'text',
      text: "Dans une installation centralisée, le froid est produit à un seul endroit (une salle des machines, une toiture) puis transporté vers les locaux. Elle comporte toujours trois étages : la production (groupe frigorifique, centrale de traitement d’air), la distribution (gaines d’air, tuyauteries d’eau) et les terminaux dans les locaux (bouches, ventilo-convecteurs).",
    },
    { type: 'illustration', name: 'clim-central', caption: 'Une centrale à eau glacée : production, distribution, terminaux' },
    fig('p110_0', 'Figure 5.1 — constituants d’un système : équipements centralisés, fluides primaires, terminaux'),
    {
      type: 'text',
      text: 'Le fluide qui transporte le froid définit la famille : de l’air seul (« tout air »), ou de l’eau pour le froid et de l’air pour l’hygiène (« air/eau »). On ajoute toujours la régulation et la sécurité : thermostats, pressostats, détecteurs incendie, trappes de désenfumage.',
    },

    { type: 'heading', text: 'Les installations « tout air » à débit constant' },
    {
      type: 'text',
      text: "Une centrale de traitement d’air (CTA) refroidit et déshumidifie l’air, puis le souffle dans les locaux par des gaines. Le débit reste constant ; seule la température varie avec la charge. On compte 1 000 à 100 000 m³/h, soufflés à basse vitesse (2 à 6 m/s) par des bouches murales ou plafonnières.",
    },
    {
      type: 'bullets',
      items: [
        'CTA unizone à eau glacée : la batterie froide est alimentée par un groupe d’eau glacée.',
        'CTA à détente directe : l’évaporateur de la machine frigorifique est dans le caisson de traitement d’air.',
        'En pays chaud, inutile de commander les batteries chaudes et de réchauffage ; l’humidificateur ne sert qu’en climat sahélien.',
        'Les systèmes à deux conduits (chaud/froid) sont réservés aux exigences très strictes : inadaptés aux besoins courants des pays chauds.',
      ],
    },
    fig('p112_0', 'Figure 5.2 — centrale à un conduit à débit d’air constant'),
    { type: 'illustration', name: 'clim-central', props: { highlight: 'ahu' }, caption: 'La CTA : elle traite l’air (et l’air neuf) avant de le distribuer' },
    { type: 'subheading', text: 'Le rooftop' },
    {
      type: 'text',
      text: "Le rooftop est une centrale unizone à détente directe posée sur le toit : tout est dans un seul caisson. Idéal pour les grandes salles de bureaux, halls recevant du public, supermarchés, restaurants et ateliers. Inconvénient : les ventilateurs qui déplacent tout cet air coûtent cher en énergie.",
    },
    fig('p113_0', 'Figure 5.3 — centrale de toiture (rooftop)'),

    { type: 'heading', text: 'Les installations « tout air » à débit variable (VAV)' },
    {
      type: 'text',
      text: "Ici, l’air est soufflé à température constante, mais son débit varie selon les besoins de chaque local. Un thermostat commande un clapet motorisé dans une « boîte de détente » (tapissée d’absorbants acoustiques) ou directement dans le diffuseur. Le réseau de gaines est à basse (2 à 6 m/s) ou moyenne vitesse (6 à 15 m/s).",
    },
    fig('p114_0', 'Figure 5.4 — centrale à débit d’air variable'),
    fig('p115_0', 'Figures 5.5 et 5.6 — réglage du débit par boîte de détente ou par diffuseur'),
    {
      type: 'bullets',
      items: [
        'Très intéressant pour des locaux à charges faibles mais variables : bonne optimisation de l’énergie.',
        'Les ventilateurs doivent suivre les variations de pression : la vitesse variable est la meilleure solution.',
        'Piège : à faible débit, l’air se mélange mal et tombe sur les occupants. On utilise des diffuseurs spéciaux qui soufflent le long du plafond (effet Coanda).',
      ],
    },

    { type: 'heading', text: 'Les installations mixtes « air/eau »' },
    {
      type: 'text',
      text: "L’eau évacue la chaleur des locaux, un réseau d’air apporte l’air neuf hygiénique (et l’assèche). Elles offrent souplesse et confort, et coûtent moins cher à l’exploitation que le « tout air » : transporter le froid par l’eau (une pompe) consomme bien moins que par l’air (un ventilateur).",
    },
    { type: 'subheading', text: 'Les éjecto-convecteurs' },
    {
      type: 'text',
      text: "Placés en allège des fenêtres, ils reçoivent de l’air primaire sous pression (100 à 400 Pa, 15 à 25 m/s). Les jets aspirent par induction l’air du local, qui passe sur une batterie froide. Rigides à installer et énergivores (air primaire pulsé en permanence), ils sont pratiquement absents des pays chauds.",
    },
    fig('p116_0', 'Figures 5.7 et 5.8 — fonctionnement et vue d’un éjecto-convecteur'),
    { type: 'subheading', text: 'Les ventilo-convecteurs : le système roi' },
    {
      type: 'text',
      text: "Un réseau de tuyauteries amène l’eau glacée à une batterie incorporée dans un ventilo-convecteur (VC) placé dans chaque local. Son ventilateur souffle l’air repris du local, éventuellement mélangé à de l’air neuf. C’est de très loin le système centralisé le plus utilisé : on peut arrêter une chambre d’hôtel inoccupée et la remettre en température très vite.",
    },
    { type: 'illustration', name: 'clim-central', props: { highlight: 'fancoil' }, caption: 'Un ventilo-convecteur par local, alimenté en eau glacée' },
    fig('p117_0', 'Figure 5.9 — climatisation par ventilo-convecteurs'),
    fig('p118_0', 'Figures 5.10 et 5.11 — fonctionnement et vue d’un ventilo-convecteur'),
    fig('p118_1', 'Figure 5.12 — les différentes façons d’amener l’air neuf à un ventilo-convecteur'),
    fig('p119_0', 'Figure 5.13 — ventilo-convecteur gainable monté en faux plafond'),
    fig('p119_1', 'Figure 5.14 — intégration dans une chambre d’hôtel'),

    { type: 'heading', text: 'Les procédés complémentaires' },
    {
      type: 'text',
      text: 'D’autres dispositifs réduisent la charge sans assurer seuls la climatisation. On les associe aux systèmes précédents :',
    },
    {
      type: 'table',
      headers: ['Procédé', 'Principe', 'À retenir'],
      rows: [
        ['Luminaires refroidis', 'De l’eau circule autour des luminaires', '~70 % de leur chaleur évacuée, eau +5 °C'],
        ['Volets thermiques', 'Eau dans des volets devant les vitres', 'Supprime le rayonnement chaud des vitrages'],
        ['Diffuseurs sources', 'Air soufflé au ras du sol, lentement, 1 à 3 K plus froid', 'Air propre en bas, chaleur repoussée vers le haut'],
        ['Plafonds rayonnants', 'Eau froide dans dalles, nattes capillaires ou faux plafond', 'Risque de condensation : réguler l’eau au-dessus du point de rosée'],
        ['Poutres froides', 'Batterie sous plafond, convection naturelle ou induction', 'Pas de récupération des condensats'],
        ['Plancher rafraîchissant', 'Eau ou fluide frigorigène dans le plancher', 'Silencieux, mais inertie et condensation'],
        ['Armoire à convection naturelle', 'Batterie froide, circulation par thermosiphon', 'Sans ventilateur : silencieux et sobre, puissance limitée'],
      ],
    },
    fig('p120_0', 'Figure 5.15 — réseau de refroidissement par eau des luminaires'),
    fig('p122_0', 'Figure 5.17 — diffuseurs sources (à gauche) contre soufflage classique (à droite)'),
    fig('p123_0', 'Figure 5.18 — plafonds rafraîchissants associés à des ventilo-convecteurs'),
    fig('p124_0', 'Figures 5.19 et 5.20 — poutres froides à convection naturelle et à induction'),
    { type: 'subheading', text: 'Refroidissement adiabatique et procédé DEC' },
    {
      type: 'text',
      text: "Humidifier de l’air le refroidit (enthalpie quasi constante). Pour ne pas rendre l’air soufflé trop humide, on humidifie l’air repris et on transfère son froid à l’air neuf par un échangeur à plaques. Associé à une machine classique, ce procédé réduit la puissance frigorifique installée d’environ 50 %. Le procédé DEC va plus loin : il assèche l’air neuf par adsorption puis le refroidit par évaporation, sans machine frigorifique.",
    },
    fig('p126_0', 'Figure 5.22 — échangeur de chaleur avec refroidissement adiabatique'),
    { type: 'subheading', text: 'Le stockage de froid' },
    {
      type: 'text',
      text: "Avec une centrale à eau glacée, on peut fabriquer de la glace la nuit et la fondre le jour : on réduit la puissance du groupe et l’abonnement, et on profite des heures creuses. Mais dans beaucoup de pays d’Afrique subsaharienne il n’y a pas de tarif heures creuses, ou l’écart de prix est trop faible pour amortir le stockage en 3 ou 4 ans.",
    },
    fig('p127_0', 'Figures 5.23 et 5.24 — stockage de glace sur tubes et par nodules'),

    { type: 'heading', text: 'Comparer les systèmes' },
    fig('p129_0', 'Tableau 5.2 — appréciation des systèmes : couverture des charges, confort, frais de fonctionnement'),
    {
      type: 'bullets',
      items: [
        'Les installations où l’air est soufflé de bas en haut (diffuseurs sources) sont les plus onéreuses.',
        'Les systèmes air/eau sont très intéressants en coût d’exploitation : ce sont les seuls utilisés dans les immeubles de grande hauteur.',
        'Le « tout air » à débit variable est intéressant si l’exploitation implique des débits réduits une grande partie de l’année.',
      ],
    },
  ],
};
