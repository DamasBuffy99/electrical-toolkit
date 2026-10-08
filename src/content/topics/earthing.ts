import { TopicContent } from '../types';
import { SLIDES } from '../slides';

export const earthingContent: TopicContent = {
  title: 'Concevoir la mise à la terre',
  subtitle: 'Sol, électrodes, section du conducteur de terre et mesure de la résistance',
  blocks: [
    {
      type: 'text',
      text: "On sait pourquoi il faut une terre (leçon « Le danger électrique ») et on connaît le courant de court-circuit. On peut maintenant dimensionner la mise à la terre elle-même : le sol, les électrodes et le conducteur.",
    },
    { type: 'heading', text: '1 · Composants et résistivité du sol' },
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
    { type: 'image', source: SLIDES['earth-19'], caption: 'Résistivité selon le type de sol', focus: { x: 0.02, y: 0.34, w: 0.75, h: 0.37 } },

    { type: 'heading', text: '2 · Section du conducteur de terre' },
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
    { type: 'image', source: SLIDES['earth-23'], caption: 'Formule et constantes K, β', focus: { x: 0.48, y: 0.55, w: 0.47, h: 0.43 } },
    { type: 'image', source: SLIDES['earth-24'], caption: 'Exemple : transformateur 1,5 MVA' },

    { type: 'heading', text: '3 · Résistance des électrodes' },
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
    { type: 'image', source: SLIDES['earth-28'], caption: 'Piquets en ligne : facteur λ', focus: { x: 0.39, y: 0.27, w: 0.58, h: 0.3 } },
    { type: 'image', source: SLIDES['earth-27'], caption: 'Piquets en carré creux' },
    { type: 'image', source: SLIDES['earth-30'], caption: 'Résistance globale du système' },

    { type: 'heading', text: '4 · Si la résistance est trop élevée, et comment la mesurer' },
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
