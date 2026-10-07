import { TopicContent } from '../types';
import { SLIDES } from '../slides';

export const panelDesignExamplesContent: TopicContent = {
  title: 'Conception d’un tableau : 2 exemples',
  subtitle: 'Disjoncteurs, câbles, disjoncteur général et câble d’arrivée d’un tableau de moteurs, pas à pas',
  blocks: [
    {
      type: 'text',
      text: "On réunit tout ce qui précède pour concevoir un tableau complet : pour chaque départ moteur, le disjoncteur puis le câble ; ensuite le disjoncteur général et le câble d'arrivée.",
    },
    {
      type: 'bullets',
      items: [
        '1 → Courant du moteur : I_rated ≈ 1,5 × HP (triphasé 380 V, cos φ = 0,8)',
        '2 → Disjoncteur : I_CB = 1,25 × I_rated → calibre normalisé supérieur',
        '3 → Câble : I_câble = I_CB / facteur de correction → catalogue',
        '4 → Disjoncteur général : 1,25 × I du plus gros + facteur de demande × Σ I des autres',
        "5 → Câble d'arrivée : I_CB général / facteur de correction",
      ],
    },
    { type: 'formula', text: '746 / (√3 × 380 × 0,8) = 1,41 ≈ 1,5 A par HP' },
    { type: 'image', source: require('../../../assets/reference/circuit_breaker_ratings_ranges.png'), caption: 'Calibres normalisés de disjoncteurs (A) : MCB, MCCB, ACB' },

    { type: 'heading', text: 'Exemple 1 : 3 moteurs de 30 HP et 2 moteurs de 20 HP' },
    {
      type: 'text',
      text: "Tous les câbles sont sur un même chemin de câbles, à 50 °C. Chaque groupe a un moteur de réserve (4 × 30 HP dont 1 réserve, 3 × 20 HP dont 1 réserve).",
    },
    { type: 'image', source: SLIDES['paneldes-3'], caption: 'Énoncé de l’exemple 1' },

    { type: 'heading', text: 'Départs 30 HP et 20 HP' },
    {
      type: 'table',
      headers: ['', 'Moteur 30 HP', 'Moteur 20 HP'],
      rows: [
        ['I_rated', '30 × 1,5 = 45 A', '20 × 1,5 = 30 A'],
        ['I_CB = 1,25 × I', '56 A → 63 A', '37,5 A → 40 A'],
        ['Facteur (50 °C, PVC)', '0,82', '0,82'],
        ['I_câble', '63 / 0,82 = 77 A', '40 / 0,82 = 50 A'],
        ['Câble (catalogue El-Sewedy)', 'Cu/PVC/PVC 4×16 + 16 mm²', 'Cu/PVC/PVC 4×10 + 10 mm²'],
      ],
    },
    {
      type: 'note',
      text: '💡 Facteur de groupement pris égal à 1 dans le cours ; seul le facteur de température 0,82 (PVC à 50 °C) s’applique.',
    },
    { type: 'image', source: SLIDES['paneldes-4'], caption: 'Disjoncteur du moteur 30 HP : 63 A' },
    { type: 'image', source: SLIDES['paneldes-5'], caption: 'Câble du moteur 30 HP : 77 A' },
    { type: 'image', source: SLIDES['paneldes-6'], caption: 'Choix 4×16 + 16 mm² dans le catalogue' },

    { type: 'heading', text: 'Disjoncteur général et câble d’arrivée' },
    { type: 'formula', text: 'I_général = 1,25 × I_plus gros + FD × Σ I_autres' },
    { type: 'formula', text: 'I_général = 1,25 × 45 + (45 + 45 + 30 + 30) = 206 A → disjoncteur 200 A' },
    {
      type: 'note',
      text: '📌 206 A n’est pas un calibre normalisé : on retient le calibre normalisé le plus proche, 200 A (comme pour un feeder moteurs NEC 430.62, la protection ne doit pas dépasser la valeur calculée).',
    },
    { type: 'formula', text: 'Câble : 200 / 0,82 = 244 ≈ 250 A → Cu/PVC/PVC (3×120 + 70) + 70 mm²' },
    { type: 'image', source: SLIDES['paneldes-11'], caption: 'Disjoncteur général : 200 A' },
    { type: 'image', source: SLIDES['paneldes-12'], caption: "Câble d'arrivée : 250 A" },
    { type: 'image', source: SLIDES['paneldes-13'], caption: 'Choix (3×120 + 70) + 70 mm²' },
    { type: 'image', source: SLIDES['paneldes-14'], caption: 'Tableau final de l’exemple 1' },

    { type: 'heading', text: 'Exemple 2 : 3 moteurs de 100 HP et 2 moteurs de 300 HP' },
    { type: 'text', text: 'Mêmes conditions : un chemin de câbles, 50 °C. Les gros courants imposent du câble XLPE (facteur 0,9 à 50 °C).' },
    {
      type: 'table',
      headers: ['', 'Moteur 100 HP', 'Moteur 300 HP'],
      rows: [
        ['I_rated', '100 × 1,5 = 150 A', '300 × 1,5 = 450 A'],
        ['I_CB = 1,25 × I', '187,5 A → 200 A', '565 A → 630 A'],
        ['Isolant · facteur', 'PVC · 0,82', 'XLPE · 0,9'],
        ['I_câble', '200 / 0,82 = 250 A', '630 / 0,9 = 700 A'],
        ['Câble', 'Cu/PVC/PVC (3×120 + 70) + 70 mm²', 'Cu/XLPE/PVC 2 × (3×150 + 70) + 70 mm²'],
      ],
    },
    { type: 'image', source: SLIDES['paneldes-15'], caption: 'Énoncé de l’exemple 2' },
    { type: 'image', source: SLIDES['paneldes-16'], caption: 'Disjoncteur du moteur 100 HP : 200 A' },
    { type: 'image', source: SLIDES['paneldes-19'], caption: 'Disjoncteur du moteur 300 HP : 630 A' },
    { type: 'image', source: SLIDES['paneldes-21'], caption: 'Câble du moteur 300 HP : 2 câbles en parallèle' },

    { type: 'heading', text: 'Exemple 2 : disjoncteur général et arrivée' },
    { type: 'formula', text: 'I_général = 1,25 × 450 + (450 + 3 × 150) = 1 460 A → disjoncteur 1 600 A' },
    { type: 'formula', text: 'Câble : 1 600 / 0,9 = 1 780 A → Cu/XLPE/PVC 4 × (3×240 + 120) + 120 mm²' },
    { type: 'text', text: 'Jeu de barres 380 V, 50 Hz, 36 kA ; disjoncteur général MCCB 1 600 A.' },
    { type: 'image', source: SLIDES['paneldes-22'], caption: 'Disjoncteur général : 1 600 A' },
    { type: 'image', source: SLIDES['paneldes-24'], caption: "Câble d'arrivée : 4 câbles en parallèle" },
    { type: 'image', source: SLIDES['paneldes-25'], caption: 'Tableau final de l’exemple 2' },
  ],
};
