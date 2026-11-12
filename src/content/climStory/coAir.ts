import { TopicContent } from '../types';
import { fig } from '../topics/clim/fig';

export const coAirContent: TopicContent = {
  title: 'Air neuf, humidité et récupération d’énergie',
  subtitle: 'Dix mille mètres cubes d’air tropical par heure : c’est 140 kW de chaleur, surtout de l’eau. Ousmane conçoit une centrale d’air neuf qui sèche l’air avant qu’il entre, récupère l’énergie de l’air extrait, et adapte le débit de la salle de réunion au nombre de personnes présentes.',
  blocks: [
    { type: 'scene', text: 'Mois 4 · Bureau d’études, avec Jean-Marc Kouadio' },
    {
      type: 'objectives',
      items: [
        'Calculer l’enthalpie de l’air humide et la puissance d’une batterie froide.',
        'Suivre le traitement de l’air neuf sur le diagramme de l’air humide.',
        'Mesurer l’intérêt d’une roue de récupération enthalpique.',
        'Régler le débit d’air neuf sur la qualité de l’air (CO₂).',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '10 000 m³/h', label: 'd’air neuf pour le bâtiment' },
        { value: '196 → 89 kW', label: 'batterie froide sans / avec roue' },
        { value: '≈ 59 L/h', label: 'd’eau condensée à la pointe' },
        { value: '≤ 1 000 ppm', label: 'de CO₂ dans la salle de réunion' },
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Jean-Marc Kouadio (Kora Assurances)',
      role: 'client',
      text: 'Pourquoi une machine de plus ? Les unités intérieures du VRV ne peuvent pas prendre l’air dehors directement ?',
    },
    {
      type: 'dialogue',
      speaker: 'Ousmane Cissé',
      role: 'engineer',
      text: 'Elles le pourraient, mais elles sont faites pour refroidir l’air d’un bureau, pas pour sécher un air à 32 °C saturé d’eau. On aurait des bureaux froids et humides, des moisissures dans les gaines et la salle de réunion « irrespirable » que vous avez connue. Une centrale dédiée sèche l’air neuf une fois pour toutes, et récupère au passage la fraîcheur de l’air qu’on rejette.',
    },

    { type: 'heading', text: '1 · L’enthalpie, la monnaie de l’air humide' },
    {
      type: 'text',
      text: 'L’enthalpie h d’un air humide (en kJ par kg d’air sec) additionne la chaleur sensible de l’air et la chaleur latente de la vapeur qu’il contient. La puissance d’une batterie froide se calcule simplement : débit d’air sec × écart d’enthalpie. C’est ce qui rend le diagramme de l’air humide si pratique.',
    },
    { type: 'formula', text: 'h = 1,006 × θ + ω × (2 501 + 1,86 × θ)   (θ en °C, ω en kg/kg)   ;   P = q_m × Δh' },
    {
      type: 'calc',
      title: 'Enthalpies de l’air extérieur et de l’air repris',
      steps: [
        { label: 'Air extérieur O : 32 °C, 25,5 g/kg', formula: 'h_O = 1,006 × 32 + 0,0255 × (2 501 + 59,5) ≈ 97,5 kJ/kg' },
        { label: 'Air repris des bureaux R : 26 °C, 10,8 g/kg', formula: 'h_R = 1,006 × 26 + 0,0108 × (2 501 + 48,4) ≈ 53,7 kJ/kg' },
        { label: 'Débit massique de 10 000 m³/h', formula: 'q_m = \\frac{10 000 × 1,18}{3 600} ≈ 3,28 kg/s' },
        { label: 'Amener l’air neuf aux conditions intérieures', formula: 'P = 3,28 × (97,5 − 53,7) ≈ 144 kW' },
      ],
      result: '≈ 140 kW pour le seul air neuf du bâtiment, dont plus de 80 % de latent',
    },
    { type: 'fiche', id: 'abc-psychro', why: 'L’air humide : enthalpie, point de rosée, séchage et humidification.' },

    { type: 'heading', text: '2 · La centrale d’air neuf, point par point' },
    { type: 'illustration', name: 'psychro-doas', caption: 'O → A : la roue récupère la fraîcheur et la sécheresse de l’air repris ; A → B : la batterie refroidit et condense ; B → S : réchauffage gratuit par caloduc' },
    {
      type: 'calc',
      title: 'Traitement de l’air neuf (roue enthalpique, efficacité 75 %)',
      steps: [
        { label: 'Après la roue : l’air neuf s’approche de l’air repris', formula: 'h_A = h_O − 0,75 × (h_O − h_R) = 97,5 − 0,75 × 43,8 ≈ 64,7 kJ/kg   (27,5 °C ; 14,5 g/kg)' },
        { label: 'Sortie de batterie : 13,5 °C, 9,5 g/kg (air séché sous le point de rosée de la pièce)', formula: 'h_B = 1,006 × 13,5 + 0,0095 × (2 501 + 25) ≈ 37,6 kJ/kg' },
        { label: 'Puissance de la batterie froide', formula: 'P = 3,28 × (64,7 − 37,6) ≈ 89 kW' },
        { label: 'Sans roue, de O à B', formula: 'P = 3,28 × (97,5 − 37,6) ≈ 196 kW' },
        { label: 'Eau condensée sur la batterie', formula: '3,28 × (14,5 − 9,5) × 3,6 ≈ 59 L/h' },
      ],
      result: 'La roue divise par plus de deux la puissance de froid de l’air neuf : 107 kW de moins, à chaque heure de fonctionnement',
    },
    {
      type: 'text',
      text: 'Après la batterie, l’air à 13,5 °C serait trop froid pour être soufflé directement près des occupants. Un caloduc le réchauffe à 18 °C sans énergie, en prenant la chaleur de l’air avant la batterie (ce qui la soulage d’autant). L’air arrive dans les bureaux à 18 °C et 9,5 g/kg : plus sec que l’ambiance, il absorbe une partie de l’humidité dégagée par les occupants.',
    },
    {
      type: 'decision',
      title: 'Traitement de l’air neuf',
      choice: 'Centrale d’air neuf en toiture, 10 000 m³/h : roue enthalpique (75 %), batterie à détente directe de 90 kW (2 × 45 kW), caloduc de réchauffage, soufflage à 18 °C et 9,5 g/kg',
      reasons: [
        'Tout le latent de l’air neuf est traité au même endroit, par une machine conçue pour sécher.',
        'La roue économise environ 107 kW à la pointe, soit près de 35 kW électriques.',
        'Les unités intérieures du VRV n’ont plus que les apports des bureaux : la salle de réunion retrouve un facteur sensible d’environ 0,7, que ses unités savent traiter.',
      ],
      rejected: 'Air neuf pris directement par les unités intérieures : humidité non maîtrisée, gaines humides, inconfort. Récupérateur à plaques seul (sensible) : il ne récupère pas l’humidité, qui est l’essentiel ici.',
    },
    fig('p118_1', 'Figure 5.12 du guide IEPF — différentes façons d’amener l’air neuf aux unités terminales'),
    { type: 'fiche', id: 'abc-airside', why: 'CTA, filtration, récupération, ventilateurs.' },

    { type: 'heading', text: '3 · La ventilation à la demande de la salle de réunion' },
    {
      type: 'calc',
      title: 'Combien d’air neuf pour rester sous 1 000 ppm de CO₂ ?',
      steps: [
        { label: 'Une personne assise rejette environ 18 litres de CO₂ par heure ; dehors : ≈ 420 ppm', formula: 'G = 24 × 0,018 = 0,432 m³/h de CO₂' },
        { label: 'Avec 25 m³/h par personne (600 m³/h)', formula: 'C = 420 + \\frac{0,432}{600} × 10^{6} ≈ 1 140 ppm' },
        { label: 'Débit nécessaire pour 1 000 ppm', formula: 'q = \\frac{0,432 × 10^{6}}{1 000 − 420} ≈ 745 m³/h  (≈ 31 m³/h par personne)' },
      ],
      result: 'Salle pleine : 750 m³/h ; salle vide : 150 m³/h de balayage. Un registre motorisé suit une sonde de CO₂',
    },
    {
      type: 'note',
      text: 'La salle de réunion est vide plus de la moitié du temps. Avec un débit fixe de 750 m³/h, on traiterait toute la journée de l’air humide pour personne. La ventilation à la demande (sonde de CO₂ + registre) réduit le débit moyen de moitié dans cette salle, et la centrale ajuste la vitesse de ses ventilateurs à la somme des demandes.',
    },
    {
      type: 'text',
      text: 'Dernier réglage : Ousmane souffle 10 % d’air de plus qu’il n’en extrait. Le bâtiment est en légère surpression : l’air chaud et humide de l’extérieur ne s’infiltre pas par les portes et les joints de façade, ce qui évite la condensation dans les plafonds et sur les menuiseries.',
    },

    { type: 'heading', text: '4 · Ce que disent les normes' },
    {
      type: 'norms',
      title: 'Ventilation, humidité et récupération',
      rows: [
        { norm: 'ASHRAE 62.1', rule: 'Débits d’air neuf, ventilation à la demande admise ; humidité relative limitée à 65 % dans les systèmes à déshumidification.', result: '≤ 65 % HR, DCV admise' },
        { norm: 'ASHRAE 90.1', rule: 'Récupération d’énergie obligatoire au-delà de certains débits d’air neuf, surtout en climat chaud et humide (zones 0A–1A).', result: 'roue exigée à ce débit' },
        { norm: 'EN 16798-3 / EN 308', rule: 'Performances des installations de ventilation et des récupérateurs ; puissance spécifique des ventilateurs (SFP).', result: 'récupération ≥ 73 %' },
        { norm: 'EN 16798-1', rule: 'CO₂ : catégorie II ≈ 800 ppm au-dessus de l’extérieur.', result: '≈ 1 200 ppm max' },
      ],
    },
    {
      type: 'regional',
      text: 'Les roues enthalpiques et les caloducs sont encore peu répandus dans la région, mais ils sont la réponse naturelle au climat chaud et humide. Exigez un traitement anticorrosion des batteries (air salin en zone côtière) et prévoyez des filtres épais : poussières d’harmattan au nord, pollens et embruns sur la côte. Un filtre encrassé fait chuter le débit d’air neuf sans que personne ne s’en aperçoive : la sonde de CO₂ sert aussi d’alarme.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'L’enthalpie additionne chaleur sensible et latente : P = débit massique × Δh.',
        'Sous les tropiques, l’air neuf est d’abord un problème d’eau à condenser.',
        'Une centrale d’air neuf dédiée sèche l’air et décharge les unités terminales.',
        'La roue enthalpique récupère fraîcheur et sécheresse de l’air extrait : plus de la moitié de la puissance.',
        'Le débit d’air neuf suit l’occupation grâce à une sonde de CO₂.',
        'Légère surpression du bâtiment : pas d’infiltration d’air humide.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Avec une roue de 60 % d’efficacité au lieu de 75 %, quelle puissance de batterie ?',
      solution: ['h_A = 97,5 − 0,60 × 43,8 ≈ 71,2 kJ/kg.', 'P = 3,28 × (71,2 − 37,6) ≈ 110 kW au lieu de 89 kW.'],
    },
    {
      type: 'exercise',
      question: 'Quelle est l’enthalpie d’un air à 24 °C et 9 g/kg ? Est-il plus « chargé » que l’air repris des bureaux ?',
      solution: ['h = 1,006 × 24 + 0,009 × (2 501 + 44,6) ≈ 47,0 kJ/kg.', 'Moins que l’air repris (53,7 kJ/kg) : il contient moins d’énergie à retirer, même si sa température est proche.'],
    },
  ],
};
