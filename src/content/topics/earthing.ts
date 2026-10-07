import { TopicContent } from '../types';
import { SLIDES } from '../slides';

export const earthingContent: TopicContent = {
  title: 'Mise à la terre',
  subtitle: 'Dangers du courant, schémas TT / TN / IT, conducteur de terre et résistance des électrodes',
  blocks: [
    {
      type: 'text',
      text: "La mise à la terre protège les personnes contre les chocs électriques indirects et permet aux protections de déclencher en cas de défaut. Avant de la dimensionner, il faut comprendre ce que le courant fait au corps humain.",
    },
    { type: 'image', source: SLIDES['earth-12'], caption: 'Sans terre, le courant de défaut traverse la personne ; avec la terre, il passe par le conducteur' },

    { type: 'heading', text: '1 · Effet du courant sur le corps humain' },
    {
      type: 'text',
      text: 'Quatre facteurs déterminent la gravité d’un choc : l’intensité du courant, sa durée, sa fréquence et son trajet dans le corps.',
    },
    {
      type: 'table',
      headers: ['Courant AC', 'Effet'],
      rows: [
        ['1 mA', 'Seuil de perception'],
        ['5 mA', 'Maximum encore sans danger'],
        ['10 – 20 mA', 'Perte du contrôle musculaire, impossible de lâcher'],
        ['50 mA', 'Difficulté à respirer'],
        ['100 – 300 mA', 'Arrêt respiratoire, souvent mortel'],
        ['1 000 – 6 000 mA', 'Brûlure des organes et des tissus'],
      ],
    },
    {
      type: 'text',
      text: 'La durée compte autant que l’intensité : au-delà de 100 mA pendant plus de 20 ms, le choc peut être mortel. Le courant supportable pendant un temps t est :',
    },
    { type: 'formula', text: 'I = 116 mA / √t   (ex. t = 10 s → I = 36,68 mA)' },
    {
      type: 'bullets',
      items: [
        "Fréquence : il faut 300 à 500 mA en DC pour l'effet de 30 mA en AC ; le courant alternatif basse fréquence est le plus dangereux.",
        'Trajet : main à main et main gauche aux pieds sont les pires cas, car le courant traverse le cœur.',
      ],
    },
    { type: 'image', source: SLIDES['earth-4'], caption: 'Effets du courant alternatif sur le corps' },
    { type: 'image', source: SLIDES['earth-5'], caption: 'Effet selon la durée' },
    { type: 'image', source: SLIDES['earth-6'], caption: 'Courant supportable en fonction du temps' },

    { type: 'heading', text: '2 · Contacts directs et indirects' },
    {
      type: 'table',
      headers: ['Danger', 'Origine', 'Protection'],
      rows: [
        ['Contact direct', 'On touche une partie sous tension', "Isolation des parties actives · barrières ou enveloppes · dispositif différentiel (DDR)"],
        ['Contact indirect', "Défaut d'isolement : une masse métallique devient sous tension", 'Mise à la terre'],
      ],
    },
    {
      type: 'text',
      text: "Mettre à la terre, c'est relier les parties métalliques qui ne transportent normalement pas de courant (carcasses, châssis) ou le neutre de la source au sol par un conducteur de faible résistance, pour évacuer immédiatement le courant de défaut.",
    },
    { type: 'image', source: SLIDES['earth-9'], caption: 'Contact direct (gauche) et contact indirect par défaut d’isolement (droite)' },

    { type: 'heading', text: '3 · Les schémas de liaison à la terre : TT, TN, IT' },
    {
      type: 'bullets',
      items: [
        '1re lettre = la source : T = neutre relié à la terre · I = isolé de la terre.',
        '2e lettre = les masses de l’installation : T = reliées à une terre locale · N = reliées au neutre.',
      ],
    },
    {
      type: 'table',
      headers: ['Schéma', 'Principe', 'À retenir'],
      rows: [
        ['TT', 'Neutre à la terre, masses à une terre locale', 'Le plus simple à concevoir et installer · DDR obligatoire'],
        ['TN (TN-C, TN-S)', 'Masses reliées au neutre (PEN commun en TN-C, PE séparé en TN-S)', "Le disjoncteur élimine le défaut · DDR non nécessaire sauf câbles très longs"],
        ['IT', 'Neutre isolé ou impédant', "Meilleure continuité de service (hôpitaux) · contrôleur permanent d'isolement (CPI/IMD) · coûteux"],
      ],
    },
    { type: 'image', source: SLIDES['earth-14'], caption: 'Schéma TT' },
    { type: 'image', source: SLIDES['earth-15'], caption: 'Schémas TN-C et TN-S' },
    { type: 'image', source: SLIDES['earth-16'], caption: 'Schéma IT avec contrôleur d’isolement' },

    { type: 'heading', text: '4 · Composants et résistivité du sol' },
    {
      type: 'bullets',
      items: [
        'Composants : le sol · les électrodes (piquets) · les conducteurs de terre · les accessoires (raccords, liaisons, soudures).',
        'La résistance de terre dépend de la nature du sol, de son humidité, de sa température, de la profondeur et du nombre d’électrodes.',
      ],
    },
    {
      type: 'table',
      headers: ['Type de sol', 'Résistivité (Ω·m)'],
      rows: [
        ['Humus humide', '30'],
        ['Terre agricole, argile', '100'],
        ['Argile sableuse', '150'],
        ['Sable humide', '300'],
        ['Gravier humide', '500'],
        ['Sable ou gravier sec', '1 000'],
        ['Sol rocheux', '30 000'],
      ],
    },
    {
      type: 'text',
      text: "En sol pauvre, on améliore la résistivité par traitement chimique : trous à 10 cm de l'électrode et 30 cm de profondeur, remplis de sulfate de cuivre, de sulfate de magnésium ou de chlorure de sodium.",
    },
    {
      type: 'note',
      text: "💡 L'électrode (cuivre, fer galvanisé…) doit être du même matériau que le conducteur de terre. L'acier galvanisé est un bon choix car les canalisations et structures enterrées sont aussi en acier : pas de corrosion entre métaux différents.",
    },
    { type: 'image', source: SLIDES['earth-17'], caption: 'Composants d’un système de mise à la terre' },
    { type: 'image', source: SLIDES['earth-18'], caption: 'Facteurs qui influencent la résistance de terre' },
    { type: 'image', source: SLIDES['earth-19'], caption: 'Résistivité selon le type de sol' },

    { type: 'heading', text: '5 · Section du conducteur de terre' },
    { type: 'formula', text: 'S ≥ I × √t / k' },
    {
      type: 'bullets',
      items: [
        'I = courant de défaut le plus défavorable (court-circuit triphasé), en A.',
        "t = durée pendant laquelle le conducteur supporte le défaut avant l'ouverture du disjoncteur, en s.",
        'k = constante du matériau : k = K × √(ln((T₂ + β)/(T₁ + β))), avec K = 226 et β = 254 pour le cuivre (148 / 228 pour l’aluminium, 78 / 202 pour l’acier).',
      ],
    },
    { type: 'subheading', text: 'Exemple : terre d’un transformateur 1,5 MVA, X = 0,05 pu, 380 V' },
    { type: 'formula', text: 'MVA_cc = 1,5 / 0,05 = 30 MVA' },
    { type: 'formula', text: 'Isc = 30 / (√3 × 0,38) = 45,58 kA' },
    { type: 'formula', text: 'S = 6 × √1 × 45,58 = 273,48 mm² → 300 mm² (valeur normalisée)' },
    {
      type: 'note',
      text: "💡 Le cours utilise le raccourci S ≈ 6 × √t × Isc(kA) pour le cuivre (k ≈ 167), avec t = 1 s.",
    },
    { type: 'image', source: SLIDES['earth-23'], caption: 'Formule et constantes K, β' },
    { type: 'image', source: SLIDES['earth-24'], caption: 'Exemple : transformateur 1,5 MVA' },

    { type: 'heading', text: '6 · Résistance des électrodes' },
    { type: 'formula', text: 'Piquet seul : R = ρ / (2πL) × [ln(8L / d) − 1]' },
    { type: 'text', text: 'ρ = résistivité du sol (Ω·m) · L = longueur du piquet (m) · d = diamètre (m).' },
    { type: 'formula', text: 'Conducteur enterré : R = ρ / (2πL) × ln(L² / (1,85 × h × d))   (h = profondeur)' },
    {
      type: 'text',
      text: 'Plusieurs piquets en parallèle, espacés de s, ne divisent pas simplement R par n : ils s’influencent. On utilise un facteur λ (tables selon la disposition) :',
    },
    { type: 'formula', text: 'Rₙ = R × (1 + λ × a) / n   avec   a = ρ / (2π × R × s)' },
    {
      type: 'table',
      headers: ['Piquets en ligne (n)', '2', '3', '4', '5', '6', '8', '10'],
      rows: [['Facteur λ', '1,00', '1,66', '2,15', '2,54', '2,87', '3,39', '3,81']],
    },
    { type: 'formula', text: 'Résistance totale : 1 / R_système = 1 / R_piquets + 1 / R_conducteur' },
    { type: 'subheading', text: "Exemple d'application" },
    { type: 'formula', text: 'ρ = 100 Ω·m, L = 3 m, d = 16 mm : R = 100 / (2π × 3) × [ln(8 × 3 / 0,016) − 1] ≈ 33,5 Ω' },
    { type: 'formula', text: '4 piquets en ligne espacés de 3 m : a = 100 / (2π × 33,5 × 3) ≈ 0,158 → R₄ = 33,5 × (1 + 2,15 × 0,158) / 4 ≈ 11,2 Ω' },
    { type: 'image', source: SLIDES['earth-26'], caption: 'Résistance d’un piquet' },
    { type: 'image', source: SLIDES['earth-28'], caption: 'Piquets en ligne : facteur λ' },
    { type: 'image', source: SLIDES['earth-27'], caption: 'Piquets en carré creux' },
    { type: 'image', source: SLIDES['earth-30'], caption: 'Résistance globale du système' },

    { type: 'heading', text: '7 · Si la résistance est trop élevée, et comment la mesurer' },
    {
      type: 'bullets',
      items: [
        'Allonger les électrodes',
        'Augmenter leur diamètre',
        'Augmenter leur nombre',
        'Ajouter des sels dans le sol',
      ],
    },
    {
      type: 'text',
      text: "Mesure de la résistivité (méthode des 4 piquets, Wenner) : 4 piquets alignés et équidistants de a ; on injecte un courant entre les piquets extérieurs et on mesure la résistance R entre les piquets intérieurs.",
    },
    { type: 'formula', text: 'ρ = 2π × a × R' },
    {
      type: 'text',
      text: "Mesure de la résistance de terre (méthode des 3 points) : un courant I est injecté entre l'électrode testée X et un piquet de courant Z ; la tension E est mesurée entre X et un piquet de potentiel Y.",
    },
    { type: 'formula', text: 'R_terre = E / I' },
    { type: 'image', source: SLIDES['earth-32'], caption: 'Mesure de la résistivité au telluromètre' },
    { type: 'image', source: SLIDES['earth-33'], caption: 'Méthode des 3 points' },
  ],
};
