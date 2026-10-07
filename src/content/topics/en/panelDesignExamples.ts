import { TopicContent } from '../../types';
import { SLIDES } from '../../slides';

export const panelDesignExamplesContent: TopicContent = {
  title: 'Designing a panel: 2 examples',
  subtitle: 'Breakers, cables, main breaker and incoming cable of a motor panel, step by step',
  blocks: [
    {
      type: 'text',
      text: 'We bring everything together to design a complete panel: for each motor feeder, the breaker then the cable; then the main breaker and the incoming cable.',
    },
    {
      type: 'bullets',
      items: [
        '1 → Motor current: I_rated ≈ 1.5 × HP (three-phase 380 V, pf = 0.8)',
        '2 → Breaker: I_CB = 1.25 × I_rated → next standard rating',
        '3 → Cable: I_cable = I_CB / correction factor → catalogue',
        '4 → Main breaker: 1.25 × I of the largest + demand factor × Σ I of the others',
        '5 → Incoming cable: main I_CB / correction factor',
      ],
    },
    { type: 'formula', text: '746 / (√3 × 380 × 0.8) = 1.41 ≈ 1.5 A per HP' },
    { type: 'image', source: require('../../../../assets/reference/circuit_breaker_ratings_ranges.png'), caption: 'Standard circuit breaker ratings (A): MCB, MCCB, ACB' },

    { type: 'heading', text: 'Example 1: 3 motors of 30 HP and 2 motors of 20 HP' },
    {
      type: 'text',
      text: 'All cables are on one cable tray, at 50 °C. Each group has a spare motor (4 × 30 HP including 1 spare, 3 × 20 HP including 1 spare).',
    },
    { type: 'image', source: SLIDES['paneldes-3'], caption: 'Example 1 statement' },

    { type: 'heading', text: '30 HP and 20 HP feeders' },
    {
      type: 'table',
      headers: ['', '30 HP motor', '20 HP motor'],
      rows: [
        ['I_rated', '30 × 1.5 = 45 A', '20 × 1.5 = 30 A'],
        ['I_CB = 1.25 × I', '56 A → 63 A', '37.5 A → 40 A'],
        ['Factor (50 °C, PVC)', '0.82', '0.82'],
        ['I_cable', '63 / 0.82 = 77 A', '40 / 0.82 = 50 A'],
        ['Cable (El-Sewedy catalogue)', 'Cu/PVC/PVC 4×16 + 16 mm²', 'Cu/PVC/PVC 4×10 + 10 mm²'],
      ],
    },
    { type: 'note', text: '💡 The grouping factor is taken as 1 in the course; only the 0.82 temperature factor (PVC at 50 °C) applies.' },
    { type: 'image', source: SLIDES['paneldes-4'], caption: '30 HP motor breaker: 63 A' },
    { type: 'image', source: SLIDES['paneldes-5'], caption: '30 HP motor cable: 77 A' },
    { type: 'image', source: SLIDES['paneldes-6'], caption: 'Choosing 4×16 + 16 mm² in the catalogue' },

    { type: 'heading', text: 'Main breaker and incoming cable' },
    { type: 'formula', text: 'I_main = 1.25 × I_largest + DF × Σ I_others' },
    { type: 'formula', text: 'I_main = 1.25 × 45 + (45 + 45 + 30 + 30) = 206 A → 200 A breaker' },
    {
      type: 'note',
      text: '📌 206 A is not a standard rating: the nearest standard rating, 200 A, is chosen (as for an NEC 430.62 motor feeder, the protection must not exceed the calculated value).',
    },
    { type: 'formula', text: 'Cable: 200 / 0.82 = 244 ≈ 250 A → Cu/PVC/PVC (3×120 + 70) + 70 mm²' },
    { type: 'image', source: SLIDES['paneldes-11'], caption: 'Main breaker: 200 A' },
    { type: 'image', source: SLIDES['paneldes-12'], caption: 'Incoming cable: 250 A' },
    { type: 'image', source: SLIDES['paneldes-13'], caption: 'Choosing (3×120 + 70) + 70 mm²' },
    { type: 'image', source: SLIDES['paneldes-14'], caption: 'Final panel of example 1' },

    { type: 'heading', text: 'Example 2: 3 motors of 100 HP and 2 motors of 300 HP' },
    { type: 'text', text: 'Same conditions: one cable tray, 50 °C. The high currents call for XLPE cable (factor 0.9 at 50 °C).' },
    {
      type: 'table',
      headers: ['', '100 HP motor', '300 HP motor'],
      rows: [
        ['I_rated', '100 × 1.5 = 150 A', '300 × 1.5 = 450 A'],
        ['I_CB = 1.25 × I', '187.5 A → 200 A', '565 A → 630 A'],
        ['Insulation · factor', 'PVC · 0.82', 'XLPE · 0.9'],
        ['I_cable', '200 / 0.82 = 250 A', '630 / 0.9 = 700 A'],
        ['Cable', 'Cu/PVC/PVC (3×120 + 70) + 70 mm²', 'Cu/XLPE/PVC 2 × (3×150 + 70) + 70 mm²'],
      ],
    },
    { type: 'image', source: SLIDES['paneldes-15'], caption: 'Example 2 statement' },
    { type: 'image', source: SLIDES['paneldes-16'], caption: '100 HP motor breaker: 200 A' },
    { type: 'image', source: SLIDES['paneldes-19'], caption: '300 HP motor breaker: 630 A' },
    { type: 'image', source: SLIDES['paneldes-21'], caption: '300 HP motor cable: 2 cables in parallel' },

    { type: 'heading', text: 'Example 2: main breaker and incomer' },
    { type: 'formula', text: 'I_main = 1.25 × 450 + (450 + 3 × 150) = 1,460 A → 1,600 A breaker' },
    { type: 'formula', text: 'Cable: 1,600 / 0.9 = 1,780 A → Cu/XLPE/PVC 4 × (3×240 + 120) + 120 mm²' },
    { type: 'text', text: 'Busbar 380 V, 50 Hz, 36 kA; 1,600 A MCCB main breaker.' },
    { type: 'image', source: SLIDES['paneldes-22'], caption: 'Main breaker: 1,600 A' },
    { type: 'image', source: SLIDES['paneldes-24'], caption: 'Incoming cable: 4 cables in parallel' },
    { type: 'image', source: SLIDES['paneldes-25'], caption: 'Final panel of example 2' },
  ],
};
