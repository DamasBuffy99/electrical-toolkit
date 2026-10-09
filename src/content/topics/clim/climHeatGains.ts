import { TopicContent } from '../../types';
import { fig } from './fig';

export const climHeatGainsContent: TopicContent = {
  title: 'Les apports de chaleur, un par un',
  subtitle: 'Parois, soleil, air neuf, occupants, éclairage, appareils : la formule de chacun',
  blocks: [
    {
      type: 'text',
      text: "Le bilan thermique, c’est la somme de toute la chaleur qui entre dans le local à l’heure la plus défavorable. Le climatiseur devra retirer exactement cette chaleur. On distingue deux familles d’apports :",
    },
    {
      type: 'bullets',
      items: [
        'Les apports externes : ils viennent de l’extérieur — à travers les parois (conduction), par le soleil (rayonnement) et par l’air neuf qui entre.',
        'Les apports internes : ils naissent dans le local — occupants, éclairage, ordinateurs et autres appareils.',
      ],
    },
    { type: 'illustration', name: 'clim-heat-gains', caption: 'Les 7 sources de chaleur d’un local climatisé' },
    {
      type: 'text',
      text: 'Chaque apport a une part sensible (QS, elle chauffe l’air) et parfois une part latente (QL, elle humidifie l’air). Les deux s’additionnent :',
    },
    { type: 'formula', text: 'QT = QS + QL   (bilan total, en W)' },

    { type: 'heading', text: '1 · Transmission à travers les parois' },
    {
      type: 'text',
      text: 'La chaleur traverse murs, toit, plancher, portes et vitres parce qu’il fait plus chaud d’un côté que de l’autre. Plus la paroi est grande, mauvaise isolante et l’écart de température élevé, plus le flux est fort :',
    },
    { type: 'formula', text: 'QStr = k × S × Δθ   (W)' },
    {
      type: 'bullets',
      items: [
        'k : coefficient de transmission de la paroi (W/m².°C) — tableau 1.9. Plus il est petit, plus la paroi isole.',
        'S : surface de la paroi (m²). Pour un mur, on retire la surface des fenêtres et portes, calculées à part.',
        'Δθ : écart de température entre les deux faces (°C) — tableau 1.10.',
      ],
    },
    { type: 'illustration', name: 'clim-heat-gains', props: { focus: 'external' }, caption: 'Les apports externes (1 à 4)' },
    { type: 'subheading', text: 'Calculer k d’une paroi' },
    { type: 'formula', text: 'k = 1 / ( 1/he + Σ e/λ + 1/hi )' },
    {
      type: 'text',
      text: 'he et hi sont les échanges superficiels extérieur et intérieur (tableau 1.7), e l’épaisseur de chaque couche (m) et λ sa conductivité (W/m.°C, tableau 1.6). Dans la pratique, on lit directement k dans le tableau 1.9 pour les parois courantes.',
    },
    fig('p023_0', 'Tableau 1.7 — coefficients d’échanges superficiels he et hi'),
    fig('p022_0', 'Tableau 1.6 — propriétés des matériaux locaux (λ, masse volumique, chaleur massique)'),
    {
      type: 'table',
      headers: ['Paroi (tableau 1.9)', 'k (W/m².°C)'],
      rows: [
        ['Parpaing creux 20 cm enduit des 2 côtés', '2,09'],
        ['Parpaing creux 10 cm enduit des 2 côtés', '2,37'],
        ['Porte bois pleine (2,5 cm)', '3,94'],
        ['Vitrage simple, châssis bois', '5,0'],
        ['Vitrage simple, châssis métallique', '5,8'],
        ['Double vitrage', '3,3 à 4,0'],
        ['Tôle galvanisée ondulée sans solivage', '9,28'],
      ],
    },
    fig('p029_0', 'Tableau 1.9 — coefficients globaux k des parois, toitures et vitrages'),
    { type: 'subheading', text: 'L’écart de température Δθ' },
    {
      type: 'table',
      headers: ['Type de paroi (tableau 1.10)', 'Δθ'],
      rows: [
        ['Mur extérieur', 'θe − θi'],
        ['Mur contre un local non climatisé', 'θe − θi − 3 °C'],
        ['Plafond sous comble ventilé', 'θe − θi + 3 °C'],
        ['Plafond sous comble non ventilé', 'θe − θi + 12 °C'],
        ['Plancher sur terre-plein', '20 °C − θi'],
        ['Mur contre une cuisine', 'θe − θi + 18 °C'],
      ],
    },
    fig('p030_0', 'Tableau 1.10 — différence de température selon la position de la paroi'),

    { type: 'heading', text: '2 · Le soleil sur les murs et le toit' },
    {
      type: 'text',
      text: 'Un mur au soleil absorbe une partie du rayonnement et en transmet une fraction à l’intérieur. Elle dépend de la couleur du mur et de son isolation :',
    },
    { type: 'formula', text: 'QSRm = α × F × S × Rm   (W)' },
    {
      type: 'bullets',
      items: [
        'α : coefficient d’absorption, lié à la couleur — 0,4 très clair (blanc), 0,7 foncé (brique, bois), 0,9 très foncé (ardoise, bitume).',
        'F : facteur de rayonnement solaire, lié à k — 0 pour k = 0 ; 0,05 pour k = 1 ; 0,10 pour k = 2 ; 0,15 pour k = 3 ; 0,20 pour k = 4.',
        'Rm : intensité du rayonnement sur le mur (W/m²) selon l’orientation et l’heure — tableau 1.14.',
      ],
    },
    fig('p030_1', 'Tableau 1.11 — coefficient d’absorption α selon la couleur'),
    fig('p030_2', 'Tableau 1.12 — facteur de rayonnement F en fonction de k'),
    { type: 'note', text: 'Peindre un mur en blanc plutôt qu’en couleur foncée divise presque par deux cet apport (0,4 au lieu de 0,7) : la mesure d’économie la moins chère qui soit.' },

    { type: 'heading', text: '3 · Le soleil à travers les vitrages' },
    {
      type: 'text',
      text: 'La vitre laisse passer directement le rayonnement : c’est souvent le plus gros apport d’un bureau vitré. Les stores et protections réduisent fortement ce flux :',
    },
    { type: 'formula', text: 'QSRv = α × g × S × Rv   (W)' },
    {
      type: 'bullets',
      items: [
        'α : 1 pour un vitrage simple, 0,9 pour un double, 0,8 pour un triple.',
        'g : facteur de réduction de la protection solaire (tableau 1.13).',
        'S : surface vitrée (m²) ; Rv : rayonnement sur le vitrage (W/m², tableau 1.14).',
      ],
    },
    {
      type: 'table',
      headers: ['Protection (tableau 1.13)', 'g'],
      rows: [
        ['Store extérieur en toile écrue', '0,28'],
        ['Store extérieur en toile aluminium', '0,22'],
        ['Persiennes extérieures baissées', '0,22'],
        ['Store intérieur baissé (aluminium)', '0,45'],
        ['Persiennes intérieures baissées', '0,58'],
        ['Store intérieur à moitié baissé', '0,63'],
      ],
    },
    fig('p031_0', 'Tableau 1.13 — facteur de réduction g des fenêtres protégées'),
    { type: 'note', text: 'Une protection extérieure est 2 fois plus efficace qu’une protection intérieure : elle arrête le soleil avant qu’il ne touche la vitre.' },
    fig('p031_1', 'Tableau 1.14a — rayonnement sur murs (m) et vitrages (v) à 4° Nord en février, heure par heure'),

    { type: 'heading', text: '4 · L’air neuf et les infiltrations' },
    {
      type: 'text',
      text: 'L’air extérieur qui entre (par ventilation ou par les fentes) doit être refroidi ET séché. En climat humide c’est souvent le premier poste de charge latente :',
    },
    { type: 'formula', text: 'Sensible : QSr = qv × (θe − θi) × 0,33   (W)' },
    { type: 'formula', text: 'Latente : QLr = qv × (ωe − ωi) × 0,84   (W, ω en g d’eau / kg d’air sec)' },
    {
      type: 'bullets',
      items: [
        'qv : débit d’air neuf (m³/h). En ventilation naturelle, on compte 1 volume du local par heure.',
        'En ventilation mécanique, on prend le débit réglementaire par personne (tableau 1.15) : 18 m³/h par personne dans un bureau non-fumeur, 25 fumeur.',
        'θe, θi : températures extérieure et intérieure de base ; ωe, ωi : teneurs en eau correspondantes.',
      ],
    },
    fig('p033_0', 'Tableau 1.15 — débit d’air neuf par personne et densité d’occupation par type de local'),

    { type: 'heading', text: '5 · Les occupants' },
    { type: 'illustration', name: 'clim-heat-gains', props: { focus: 'internal' }, caption: 'Les apports internes (5 à 7)' },
    { type: 'formula', text: 'QSoc = n × CSoc   ;   QLoc = n × CLoc   (W)' },
    {
      type: 'text',
      text: 'Une personne dégage de la chaleur sensible (sa peau) et latente (transpiration, respiration), selon son activité et la température du local. Pour un employé de bureau à 26 °C : environ 63 W sensibles et 59 W latents. Les valeurs du tableau sont pour un homme adulte ; on les réduit de 20 % pour des femmes, de 20 à 40 % pour des enfants et de 10 % pour un public mixte.',
    },
    fig('p034_0', 'Tableau 1.16 — chaleur dégagée par les personnes selon l’activité'),
    { type: 'note', text: 'Le nombre d’occupants n se déduit de la surface et de la densité du tableau 1.15 : 0,10 personne/m² pour des bureaux, 0,67 pour une salle de classe.' },

    { type: 'heading', text: '6 · L’éclairage' },
    { type: 'formula', text: 'Fluorescent : Qécl = 1,25 × P   ;   Incandescent : Qécl = P   (W)' },
    {
      type: 'text',
      text: 'Toute l’électricité d’une lampe finit en chaleur dans le local. Pour les tubes fluorescents, on ajoute 25 % pour le ballast. Si la puissance installée n’est pas connue, on prend une densité en W/m² (tableau 1.17) : 16 W/m² en fluorescent pour un bureau, 65 W/m² en incandescent.',
    },
    fig('p035_0', 'Tableau 1.17 — chaleur dégagée par l’éclairage (W/m²)'),

    { type: 'heading', text: '7 · Les machines et appareils' },
    {
      type: 'text',
      text: 'Chaque appareil dégage sa puissance en chaleur sensible, parfois latente (cafetière, cuisson). Comme tous ne fonctionnent pas en continu, on applique un coefficient d’utilisation : un ordinateur compte à 100 %, une photocopieuse à 20 %, une cafetière à 25 %.',
    },
    { type: 'formula', text: 'Qéquip = Σ (Puissance × coefficient d’utilisation)' },
    fig('p035_1', 'Tableau 1.18 — appareils électriques et à gaz : chaleur sensible et latente'),

    { type: 'heading', text: 'Le total : puissance et déshumidification' },
    { type: 'formula', text: 'QS = transmission + soleil murs + soleil vitrages + air neuf (S) + occupants (S) + éclairage + appareils (S)' },
    { type: 'formula', text: 'QL = air neuf (L) + occupants (L) + appareils (L)' },
    { type: 'formula', text: 'Puissance frigorifique du climatiseur = QT = QS + QL' },
    {
      type: 'bullets',
      items: [
        'La charge latente QL est la puissance de déshumidification que doit avoir l’appareil en pays tropical humide.',
        'Puissance absorbée par le compresseur : Pa = Pf / COP (COP ≈ 2 à 2,5 pour un monobloc ou un split).',
        'Coefficient de sécurité : 0 à 5 % au maximum. Au-delà, on surdimensionne.',
      ],
    },
    { type: 'note', text: 'On choisit un appareil de puissance égale ou légèrement supérieure au bilan (ex. 2,5 kW pour 2,3 kW calculés). Si l’écart est faible, on peut aussi prendre le modèle juste en dessous (2,5 kW pour 2,7 kW calculés) : le bilan correspond à l’heure la plus chaude, qui ne dure pas.' },
  ],
};
