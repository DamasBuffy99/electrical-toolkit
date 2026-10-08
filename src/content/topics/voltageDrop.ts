import { TopicContent } from '../types';
import { SLIDES } from '../slides';

export const voltageDropContent: TopicContent = {
  title: 'Chute de tension',
  subtitle: 'Vérifier que la section choisie garde une tension suffisante au bout du câble',
  blocks: [
    {
      type: 'text',
      text: "Un câble qui supporte le courant peut quand même être trop long : sa résistance fait chuter la tension entre la source et la charge. On vérifie donc la chute de tension avec la section (CSA) déjà choisie.",
    },
    { type: 'image', source: SLIDES['gen-13'], caption: '10 A dans un câble de 0,8 Ω : 120 V au départ, 112 V à l’arrivée' },

    { type: 'heading', text: 'Pourquoi la limiter ?' },
    {
      type: 'bullets',
      items: [
        'Moteurs : le couple est proportionnel au carré de la tension. Une chute de tension réduit le couple de démarrage et le couple maximal : le moteur démarre difficilement.',
        "Lampes à incandescence : plus la tension baisse, plus la lumière faiblit.",
        'Appareils électroniques : très sensibles aux variations, d’où leurs stabilisateurs internes.',
      ],
    },
    { type: 'image', source: SLIDES['gen-14'], caption: 'Effets de la chute de tension et limites IEC', focus: { x: 0.17, y: 0.66, w: 0.62, h: 0.28 } },

    { type: 'heading', text: 'Limites admissibles (IEC 60364-5-52)' },
    {
      type: 'table',
      headers: ["Type d'installation", 'Éclairage', 'Autres usages'],
      rows: [
        ['A — alimentée directement par le réseau public BT', '3 %', '5 %'],
        ['B — alimentée par un poste privé (transformateur propre)', '6 %', '8 %'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'Une chute plus importante est admise pour les moteurs pendant le démarrage et les équipements à fort courant d’appel, si la tension reste dans les limites de leur norme.',
        'Les transitoires et les variations dues à un fonctionnement anormal ne sont pas concernés.',
      ],
    },
    { type: 'image', source: SLIDES['gen-15'], caption: 'Exceptions à la norme IEC 60364-5-52' },

    { type: 'heading', text: 'Méthode 1 : avec la valeur catalogue (mV/A/m)' },
    { type: 'text', text: 'Les catalogues de câbles donnent, pour chaque section, la chute de tension en millivolts par ampère et par mètre.' },
    { type: 'formula', text: 'VD = (valeur catalogue mV/A/m) × 10⁻³ × I_rated × Longueur' },
    { type: 'formula', text: '%VD = VD / V × 100    (V = 380 V en triphasé, 220 V en monophasé)' },
    { type: 'subheading', text: 'Exemple : moteur 75 HP, câble 3×70 + 35 mm² Cu/PVC/PVC, 120 m, 400 V' },
    { type: 'formula', text: 'I_rated ≈ 1,5 × 75 = 112,5 A' },
    { type: 'formula', text: 'Catalogue 70 mm² : 0,524 mV/A/m → VD = 0,524 × 10⁻³ × 112,5 × 120 = 7,074 V' },
    { type: 'formula', text: '%VD = 7,074 / 380 × 100 = 1,86 % ≤ 5 % ✓' },
    { type: 'note', text: "💡 « I ≈ 1,5 × HP » : en triphasé 380 V avec cos φ = 0,8, 746 / (√3 × 380 × 0,8) = 1,41 ≈ 1,5 A par HP." },
    { type: 'image', source: SLIDES['gen-16'], caption: 'Calcul avec la valeur catalogue' },
    { type: 'image', source: SLIDES['gen-17'], caption: 'Exemple : moteur 75 HP sur 120 m' },

    { type: 'heading', text: 'Méthode 2 : avec R et X du câble (IEC)' },
    { type: 'formula', text: 'Monophasé : ΔV = 2 × I × L × (R cos φ + X sin φ)' },
    { type: 'formula', text: 'Triphasé : ΔV = √3 × I × L × (R cos φ + X sin φ)' },
    { type: 'formula', text: '%ΔV = ΔV / V × 100' },
    {
      type: 'text',
      text: "R et X en Ω/m (ou Ω/km × longueur en km). V = tension simple en monophasé, tension composée en triphasé. Limites usuelles du cours : 5 % pour l'installation totale, 3 % pour l'éclairage.",
    },
    { type: 'image', source: SLIDES['iec-9'], caption: 'Formule IEC avec R et X' },

    { type: 'heading', text: 'Solutions si la chute est trop grande' },
    { type: 'formula', text: 'R = ρ × L / A' },
    {
      type: 'bullets',
      items: [
        'Augmenter la section du câble : la résistance diminue.',
        'Augmenter le nombre de câbles en parallèle : la résistance totale diminue.',
        "Réduire la distance entre l'alimentation et la charge.",
        'Corriger le facteur de puissance : le profil de tension s’améliore.',
      ],
    },
    { type: 'image', source: SLIDES['gen-18'], caption: 'Solutions de la chute de tension' },
  ],
};
