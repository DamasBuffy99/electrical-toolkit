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
      text: 'Chaque apport a une part sensible (Q_S, elle chauffe l’air) et parfois une part latente (Q_L, elle humidifie l’air). Les deux s’additionnent :',
    },
    { type: 'formula', text: 'Q_T = Q_S + Q_L   (bilan total, en W)' },

    { type: 'heading', text: '1 · Transmission à travers les parois' },
    {
      type: 'text',
      text: 'La chaleur traverse murs, toit, plancher, portes et vitres parce qu’il fait plus chaud d’un côté que de l’autre. Plus la paroi est grande, mauvaise isolante et l’écart de température élevé, plus le flux est fort :',
    },
    { type: 'formula', text: 'Q_{Str} = k × S × Δθ   (W)' },
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
    { type: 'formula', text: 'k = \\frac{1}{\\frac{1}{h_e} + Σ \\frac{e}{λ} + \\frac{1}{h_i}}' },
    {
      type: 'text',
      text: 'h_e et h_i sont les échanges superficiels extérieur et intérieur (tableau 1.7), e l’épaisseur de chaque couche (m) et λ sa conductivité (W/m.°C, tableau 1.6). Dans la pratique, on lit directement k dans le tableau 1.9 pour les parois courantes.',
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
        ['Mur extérieur', 'θ_e − θ_i'],
        ['Mur contre un local non climatisé', 'θ_e − θ_i − 3 °C'],
        ['Plafond sous comble ventilé', 'θ_e − θ_i + 3 °C'],
        ['Plafond sous comble non ventilé', 'θ_e − θ_i + 12 °C'],
        ['Plancher sur terre-plein', '20 °C − θ_i'],
        ['Mur contre une cuisine', 'θ_e − θ_i + 18 °C'],
      ],
    },
    fig('p030_0', 'Tableau 1.10 — différence de température selon la position de la paroi'),

    { type: 'heading', text: '2 · Le soleil sur les murs et le toit' },
    {
      type: 'text',
      text: 'Un mur au soleil absorbe une partie du rayonnement et en transmet une fraction à l’intérieur. Elle dépend de la couleur du mur et de son isolation :',
    },
    { type: 'formula', text: 'Q_{SRm} = α × F × S × R_m   (W)' },
    {
      type: 'bullets',
      items: [
        'α : coefficient d’absorption, lié à la couleur — 0,4 très clair (blanc), 0,7 foncé (brique, bois), 0,9 très foncé (ardoise, bitume).',
        'F : facteur de rayonnement solaire, lié à k — 0 pour k = 0 ; 0,05 pour k = 1 ; 0,10 pour k = 2 ; 0,15 pour k = 3 ; 0,20 pour k = 4.',
        'R_m : intensité du rayonnement sur le mur (W/m²) selon l’orientation et l’heure — tableau 1.14.',
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
    { type: 'formula', text: 'Q_{SRv} = α × g × S × R_v   (W)' },
    {
      type: 'bullets',
      items: [
        'α : 1 pour un vitrage simple, 0,9 pour un double, 0,8 pour un triple.',
        'g : facteur de réduction de la protection solaire (tableau 1.13).',
        'S : surface vitrée (m²) ; R_v : rayonnement sur le vitrage (W/m², tableau 1.14).',
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
    { type: 'formula', text: 'Sensible : Q_{Sr} = q_v × (θ_e − θ_i) × 0,33   (W)' },
    { type: 'formula', text: 'Latente : Q_{Lr} = q_v × (ω_e − ω_i) × 0,84   (W, ω en g d’eau / kg d’air sec)' },
    {
      type: 'bullets',
      items: [
        'q_v : débit d’air neuf (m³/h). En ventilation naturelle, on compte 1 volume du local par heure.',
        'En ventilation mécanique, on prend le débit réglementaire par personne (tableau 1.15) : 18 m³/h par personne dans un bureau non-fumeur, 25 fumeur.',
        'θ_e, θ_i : températures extérieure et intérieure de base ; ω_e, ω_i : teneurs en eau correspondantes.',
      ],
    },
    { type: 'warning', text: "Unités : la formule (5) est écrite avec ω en g/kg, alors que le tableau des conditions donne ω en kg/kg. L’exemple multiplie donc par 1 000 : QLr = qv × (ωe − ωi) [kg/kg] × 0,84 × 1 000. Ne mélangez pas les deux unités, sinon le résultat est faux d’un facteur 1 000." },
    fig('p033_0', 'Tableau 1.15 — débit d’air neuf par personne et densité d’occupation par type de local'),

    { type: 'heading', text: '5 · Les occupants' },
    { type: 'illustration', name: 'clim-heat-gains', props: { focus: 'internal' }, caption: 'Les apports internes (5 à 7)' },
    { type: 'formula', text: 'Q_{Soc} = n × C_{Soc}   ;   Q_{Loc} = n × C_{Loc}   (W)' },
    {
      type: 'text',
      text: 'Une personne dégage de la chaleur sensible (sa peau) et latente (transpiration, respiration), selon son activité et la température du local. Pour un employé de bureau à 26 °C : environ 63 W sensibles et 59 W latents. Les valeurs du tableau sont pour un homme adulte ; on les réduit de 20 % pour des femmes, de 20 à 40 % pour des enfants et de 10 % pour un public mixte.',
    },
    { type: 'warning', text: "Incohérence du tableau 1.16 : pour le « travail léger » à 26 °C, il donne 63 W sensibles + 59 W latents = 122 W, alors que la colonne « émission totale » indique 116 W (et 25 °C : 67 + 49 = 116, 27 °C : 56 + 60 = 116). La valeur latente cohérente à 26 °C serait 53 W. L’exemple de Douala utilise 59 W : il surestime de ~32 W la charge latente des occupants." },
    fig('p034_0', 'Tableau 1.16 — chaleur dégagée par les personnes selon l’activité'),
    { type: 'note', text: 'Le nombre d’occupants n se déduit de la surface et de la densité du tableau 1.15 : 0,10 personne/m² pour des bureaux, 0,67 pour une salle de classe.' },

    { type: 'heading', text: '6 · L’éclairage' },
    { type: 'formula', text: 'Fluorescent : Q_{écl} = 1,25 × P   ;   Incandescent : Q_{écl} = P   (W)' },
    {
      type: 'text',
      text: 'Toute l’électricité d’une lampe finit en chaleur dans le local. Pour les tubes fluorescents, on ajoute 25 % pour le ballast. Si la puissance installée n’est pas connue, on prend une densité en W/m² (tableau 1.17) : 16 W/m² en fluorescent pour un bureau, 65 W/m² en incandescent.',
    },
    { type: 'warning', text: "Incohérence du guide : la formule (8) impose 1,25 × P pour les tubes fluorescents (ballast), mais l’exemple d’application calcule 16 W/m² × 60 m² = 960 W sans ce facteur (il donnerait 1 200 W). Si vous partez d’une densité en W/m² du tableau 1.17, vérifiez si elle inclut déjà le ballast ; dans le doute, appliquez 1,25." },
    fig('p035_0', 'Tableau 1.17 — chaleur dégagée par l’éclairage (W/m²)'),

    { type: 'heading', text: '7 · Les machines et appareils' },
    {
      type: 'text',
      text: 'Chaque appareil dégage sa puissance en chaleur sensible, parfois latente (cafetière, cuisson). Comme tous ne fonctionnent pas en continu, on applique un coefficient d’utilisation : un ordinateur compte à 100 %, une photocopieuse à 20 %, une cafetière à 25 %.',
    },
    { type: 'formula', text: 'Q_{équip} = Σ (Puissance × coefficient d’utilisation)' },
    fig('p035_1', 'Tableau 1.18 — appareils électriques et à gaz : chaleur sensible et latente'),

    { type: 'heading', text: 'Le total : puissance et déshumidification' },
    { type: 'formula', text: 'Q_S = transmission + soleil murs + soleil vitrages + air neuf (S) + occupants (S) + éclairage + appareils (S)' },
    { type: 'formula', text: 'Q_L = air neuf (L) + occupants (L) + appareils (L)' },
    { type: 'formula', text: 'Puissance frigorifique du climatiseur = Q_T = Q_S + Q_L' },
    {
      type: 'bullets',
      items: [
        'La charge latente Q_L est la puissance de déshumidification que doit avoir l’appareil en pays tropical humide.',
        'Puissance absorbée par le compresseur : Pa = Pf / COP (COP ≈ 2 à 2,5 pour un monobloc ou un split).',
        'Coefficient de sécurité : 0 à 5 % au maximum. Au-delà, on surdimensionne.',
      ],
    },
    { type: 'note', text: 'On choisit un appareil de puissance égale ou légèrement supérieure au bilan (ex. 2,5 kW pour 2,3 kW calculés). Si l’écart est faible, on peut aussi prendre le modèle juste en dessous (2,5 kW pour 2,7 kW calculés) : le bilan correspond à l’heure la plus chaude, qui ne dure pas.' },
    { type: 'heading', text: "Exercices" },
    {
      type: 'exercise',
      question: "Un mur Sud de 20 m² en parpaing creux de 20 cm enduit (k = 2,09) est peint en blanc. Δθ = 6 °C et R_m = 352 W/m². Calculez la transmission et l’apport solaire. Que se passe-t-il s’il est peint en couleur foncée ?",
      solution: [
        "Transmission : Q_{Str} = 2,09 × 20 × 6 = 251 W.",
        "F pour k = 2,09 ≈ 0,105 (interpolation du tableau 1.12).",
        "Soleil, mur blanc (α = 0,4) : 0,4 × 0,105 × 20 × 352 = 296 W.",
        "Mur foncé (α = 0,7) : 0,7 × 0,105 × 20 × 352 = 517 W, soit +221 W juste à cause de la couleur.",
      ],
    },
    {
      type: 'exercise',
      question: "Une salle de réunion à Douala reçoit 12 personnes (public mixte, 63 W sensibles et 59 W latents chacun). L’air neuf est mécanique : 18 m³/h par personne. Calculez les apports des occupants et de l’air neuf (Δθ = 6 °C, Δω = 0,0147 kg/kg).",
      solution: [
        "Occupants : Q_S = 12 × 63 × 0,9 = 680 W ; Q_L = 12 × 59 × 0,9 = 637 W.",
        "Débit d’air neuf : q_v = 12 × 18 = 216 m³/h.",
        "Air neuf sensible : 216 × 6 × 0,33 = 428 W.",
        "Air neuf latent : 216 × 0,0147 × 0,84 × 1 000 = 2 667 W.",
        "Bilan partiel : 1 108 W sensibles et 3 304 W latents — en climat humide, l’air neuf domine.",
      ],
    },
    {
      type: 'exercise',
      question: "Une fenêtre de 2 m² en simple vitrage (α = 1) reçoit R_v = 288 W/m². Comparez un store intérieur à moitié baissé (g = 0,63) et un store extérieur en toile écrue (g = 0,28).",
      solution: [
        "Store intérieur : 1 × 0,63 × 2 × 288 = 363 W.",
        "Store extérieur : 1 × 0,28 × 2 × 288 = 161 W.",
        "Le store extérieur divise l’apport par plus de 2 (−202 W).",
      ],
    },
  ],
};
