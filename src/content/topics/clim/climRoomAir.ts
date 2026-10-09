import { TopicContent } from '../../types';
import { fig } from './fig';

export const climRoomAirContent: TopicContent = {
  title: 'Bien diffuser l’air dans le local',
  subtitle: 'Zone d’occupation, vitesses d’air, position du soufflage et de la reprise, condensats',
  blocks: [
    {
      type: 'text',
      text: "Un climatiseur bien dimensionné mais mal placé rend les occupants malheureux : courant d’air froid sur la nuque, coins chauds, bruit. L’emplacement de l’unité intérieure et la façon dont l’air circule comptent autant que la puissance.",
    },
    { type: 'illustration', name: 'clim-airflow', props: { variant: 'good' }, caption: 'La bonne disposition : soufflage horizontal sous plafond' },

    { type: 'heading', text: 'La zone d’occupation' },
    {
      type: 'text',
      text: "On n’a pas besoin du confort partout : seulement là où les gens se tiennent. Les recommandations EUROVENT définissent la zone d’occupation d’un bureau : jusqu’à 1,80 m de hauteur et à 0,50 m des murs. Le jet d’air doit se développer EN DEHORS de cette zone et ne jamais toucher les occupants avant de s’être mélangé à l’air ambiant.",
    },
    fig('p089_0', 'Figure 4.8 — zone d’occupation dans un bureau (EUROVENT)'),

    { type: 'heading', text: 'La vitesse d’air à ne pas dépasser' },
    {
      type: 'text',
      text: 'Un air froid qui bouge donne vite une sensation de courant d’air, surtout à la nuque et aux pieds. Dans la zone d’occupation, la vitesse moyenne de l’air est limitée à :',
    },
    {
      type: 'table',
      headers: ['Locaux (tableau 4.1)', 'Vitesse max'],
      rows: [
        ['Hébergement, hôpitaux, enseignement, réunion, spectacle, bureaux', '0,12 m/s'],
        ['Locaux commerciaux, ateliers', '0,17 m/s'],
        ['Locaux sportifs, grands magasins, locaux industriels', '0,25 m/s'],
      ],
    },
    fig('p088_0', 'Tableau 4.1 — vitesse maximale de déplacement de l’air'),

    { type: 'heading', text: 'Où souffler ?' },
    {
      type: 'text',
      text: "En refroidissement, la meilleure position est un soufflage horizontal sous le plafond : l’air froid, plus lourd, longe le plafond, se mélange, puis retombe doucement dans tout le local. On évite ainsi la stratification (air chaud en haut, froid en bas) et les courants d’air.",
    },
    fig('p089_1', 'Figures 4.9 et 4.10 — soufflage horizontal sous plafond et soufflage par grille'),
    {
      type: 'bullets',
      items: [
        'Les cloisons et meubles hauts ne doivent pas bloquer la circulation de l’air dans tout le local.',
        'Si la hauteur sous plafond est trop faible, il devient difficile d’éviter de souffler dans la zone occupée.',
        'Évitez rideaux et tablettes devant l’appareil : ils dévient le jet.',
      ],
    },
    fig('p090_0', 'Figure 4.11 — homogénéité de la distribution de l’air'),
    { type: 'illustration', name: 'clim-airflow', props: { variant: 'bad' }, caption: 'À éviter : le jet froid qui tombe sur les occupants' },

    { type: 'heading', text: 'Attention à la vitesse du ventilateur' },
    {
      type: 'text',
      text: "Les climatiseurs ont en général 3 vitesses de ventilateur. Si l’appareil est choisi sur sa vitesse maximale, il fonctionnera souvent en vitesse réduite… et le jet, moins puissant, retombera trop tôt sur les occupants. On choisit donc la puissance sur la vitesse MOYENNE (voire la plus petite) : vérifiez dans le catalogue sur quelle vitesse la puissance annoncée est calculée.",
    },
    fig('p090_1', 'Figure 4.12 — à vitesse réduite, le jet retombe dans la zone occupée'),

    { type: 'heading', text: 'Soufflage vertical et appareils en allège' },
    {
      type: 'text',
      text: "Une console en allège (sous la fenêtre) qui souffle vers le haut est idéale en chauffage, mais en refroidissement personne ne doit se trouver juste à côté. Les appareils qui soufflent horizontalement à mi-hauteur (window, climatiseur mobile) sont ceux qui posent le plus de problèmes d’inconfort.",
    },
    fig('p091_0', 'Figure 4.13 — distribution de l’air avec une pulsion verticale'),
    fig('p091_1', 'Figure 4.14 — inconfort lié au jet d’un climatiseur de fenêtre'),

    { type: 'heading', text: 'Où reprendre l’air ? (systèmes gainés)' },
    {
      type: 'text',
      text: 'Soufflage et reprise ne se comportent pas du tout pareil. À la même vitesse de 3 m/s, une grille de soufflage projette un jet sur 7 m, alors qu’une grille de reprise n’aspire efficacement que sur 0,3 m : l’air aspiré vient de partout autour.',
    },
    fig('p093_0', 'Figure 4.15 — portée d’un jet en soufflage (7 m) et en aspiration (0,3 m)'),
    {
      type: 'table',
      headers: ['Position de la reprise (tableau 4.2)', 'Vitesse conseillée'],
      rows: [
        ['Au-dessus de la zone d’occupation', '4,5 m/s'],
        ['Dans la zone occupée, loin des sièges', '3,5 à 4,5 m/s'],
        ['Dans la zone occupée, près des sièges', '2,5 à 3,5 m/s'],
        ['Bouches de portes', '1,5 à 2 m/s'],
        ['Sous les portes', '1 à 1,5 m/s'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'Court-circuit : si la reprise est trop près du soufflage, l’air froid est aspiré avant d’avoir refroidi le local. Placez-la au-delà de la portée du jet.',
        'Exception : les diffuseurs plafonniers qui soufflent par les cônes extérieurs et aspirent au centre brassent très bien l’air.',
        'Reprise au sol : toujours déconseillée, elle devient vite un collecteur de poussière.',
        'Avec un faux plafond, on peut reprendre l’air à travers les luminaires : la chaleur des lampes part directement, et elles durent plus longtemps.',
      ],
    },
    fig('p094_0', 'Figure 4.16 — mauvaise efficacité : la reprise aspire le jet avant qu’il ait agi'),
    fig('p094_1', 'Figure 4.17 — bonne efficacité des diffuseurs plafonniers'),
    fig('p095_1', 'Figure 4.19 — bouches murales : soufflage et reprise groupés en partie haute'),

    { type: 'heading', text: 'Les combinaisons, de la plus confortable à la moins confortable' },
    fig('p096', 'Page 81 du guide — configurations de soufflage et de reprise : avantages et inconvénients'),
    fig('p097', 'Page 82 — les dispositions à éviter (au sol, en colonne)'),

    { type: 'heading', text: 'Évacuer les condensats' },
    {
      type: 'text',
      text: "L’eau extraite de l’air sur l’évaporateur (près de 4 litres par heure pour le bureau de Douala !) doit être évacuée, par gravité ou par une pompe de relevage (cassette en faux plafond). C’est un point souvent négligé :",
    },
    {
      type: 'bullets',
      items: [
        'Un appareil en allège a moins de pente disponible qu’un appareil en plafond ; les poutres perpendiculaires compliquent le tracé.',
        'Le raccordement à une évacuation commune se fait via un siphon, contre les odeurs.',
        'Tube PVC rigide, raccordé à l’évaporateur par un flexible armé ; isoler la tuyauterie en faux plafond pour éviter qu’elle ne goutte.',
        'Vérifiez que l’évacuation est prévue ET comprise dans le devis de l’installateur.',
      ],
    },
    { type: 'note', text: 'Pensez aussi à l’accès : un évaporateur difficile à atteindre coûtera cher en entretien et en service après-vente.' },
    { type: 'heading', text: "Exercices" },
    {
      type: 'exercise',
      question: "Un bureau de 6 × 4 m, 3 m sous plafond, reçoit un split mural. Où le placer, quelle vitesse d’air viser, et sur quelle vitesse de ventilateur choisir l’appareil ?",
      solution: [
        "En haut du petit mur (4 m), soufflant horizontalement sous le plafond sur la longueur de 6 m, hors de la zone d’occupation.",
        "Vitesse dans la zone occupée : 0,12 m/s maximum (bureaux, tableau 4.1).",
        "Choisir la puissance sur la vitesse MOYENNE du ventilateur, pour que le jet ne retombe pas sur les occupants en marche réduite.",
      ],
    },
    {
      type: 'exercise',
      question: "Une grille de reprise doit aspirer 900 m³/h dans la zone occupée, près des sièges. Quelle section prévoir ?",
      solution: [
        "Vitesse conseillée près des sièges : 2,5 à 3,5 m/s → on prend 3 m/s.",
        "Débit : 900 / 3 600 = 0,25 m³/s.",
        "Section : S = 0,25 / 3 = 0,083 m², par exemple une grille de 30 × 28 cm (surface libre).",
      ],
    },
  ],
};
