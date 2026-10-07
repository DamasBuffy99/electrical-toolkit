import { TopicContent } from '../../types';
import { SLIDES } from '../../slides';

export const necConductorsContent: TopicContent = {
  title: 'NEC: conductors, motors and conduits',
  subtitle: 'Sizing branch, motor, feeder and service conductors, then the conduits',
  blocks: [
    {
      type: 'text',
      text: 'After the protective devices, the NEC sets the minimum conductor size. The idea is the same everywhere: start from the load current (125% for continuous load), apply the correction factors, then respect the termination temperature.',
    },

    { type: 'heading', text: '1 · Branch-circuit conductors (NEC 210.19)' },
    {
      type: 'bullets',
      items: [
        '(a) Ampacity ≥ noncontinuous load + 125% of the continuous load.',
        '(b) Ampacity ≥ maximum load served, after correction factors.',
        'Take the larger of the two. Exception: with a 100%-listed device, ampacity ≥ continuous + noncontinuous.',
        'A grounded conductor not connected to an overcurrent device may be sized at 100% (NEC 215).',
      ],
    },
    { type: 'image', source: SLIDES['nec-41'], caption: 'NEC correction factors' },

    { type: 'heading', text: '2 · Correction factors and neutral (NEC 310.15)' },
    {
      type: 'bullets',
      items: [
        'If several ampacities apply along a circuit, use the lowest (unless the lower portion is under 3 m and under 10% of the circuit).',
        'A neutral carrying only the unbalanced current is not counted as a current-carrying conductor.',
        'In a 3-wire circuit (2 phases + neutral of a 4-wire wye system), the neutral is counted.',
        'With nonlinear loads (harmonics), the neutral is always counted.',
        'The grounding conductor (EGC) is never counted.',
      ],
    },

    { type: 'heading', text: '3 · Termination temperature (NEC 110.14)' },
    { type: 'text', text: 'The ampacity used must not exceed the lowest-rated termination in the circuit.' },
    {
      type: 'table',
      headers: ['Circuit', 'Ampacity column to use'],
      rows: [
        ['≤ 100 A, or 14 to 1 AWG conductors', '60 °C (75 °C for design B, C, D motors)'],
        ['> 100 A, or conductors > 1 AWG', '75 °C'],
      ],
    },
    {
      type: 'note',
      text: '📌 An 8 AWG THHN 90 °C conductor is limited to 40 A on 60 °C terminals, 50 A on 75 °C terminals. Lug markings: AL7CU = 75 °C, AL9CU = 90 °C.',
    },
    {
      type: 'text',
      text: "NEC 240.4(B): if the cable ampacity doesn't match a standard rating, the next higher standard rating may be used, up to 800 A (not for a multi-receptacle branch circuit).",
    },
    { type: 'image', source: SLIDES['nec-46'], caption: 'NEC 110.14: termination temperature' },
    { type: 'image', source: SLIDES['nec-47'], caption: '≤ 100 A and > 100 A terminations' },
    { type: 'image', source: SLIDES['nec-48'], caption: 'NEC 240.4(B)' },

    { type: 'heading', text: '4 · Correction examples' },
    { type: 'subheading', text: 'Example 1: 2 AWG THHN copper in a raceway at 50 °C' },
    { type: 'formula', text: '130 A × 0.82 = 106.6 A' },
    { type: 'formula', text: 'With 6 conductors in the raceway: 106.6 × 0.8 = 85.28 A' },
    { type: 'subheading', text: 'Example 2: 200 A fluorescent lighting feeder, 40 °C, 75 °C terminations' },
    {
      type: 'bullets',
      items: [
        'Nonlinear load → the neutral counts: 4 current-carrying conductors → factor 0.8.',
        'Temperature correction: 0.88 (75 °C column), 0.91 (90 °C column).',
      ],
    },
    { type: 'formula', text: '75 °C: 200 / (0.88 × 0.8) = 284 A → 300 kcmil (285 A)' },
    { type: 'formula', text: '90 °C: 200 / (0.91 × 0.8) = 274.7 A → 250 kcmil (290 A)' },
    { type: 'formula', text: 'Check: 0.91 × 0.8 × 290 = 211 A < 255 A (250 kcmil at 75 °C) ✓' },
    { type: 'note', text: '💡 The 90 °C cable allows one size smaller (300 → 250 kcmil): that is its main advantage.' },
    { type: 'image', source: SLIDES['nec-54'], caption: 'Example 1' },
    { type: 'image', source: SLIDES['nec-55'], caption: 'Example 1 with 6 conductors' },
    { type: 'image', source: SLIDES['nec-57'], caption: 'Example 2' },
    { type: 'image', source: SLIDES['nec-58'], caption: 'Example 2: 75 °C check' },

    { type: 'heading', text: '5 · Motor conductors (NEC 430.22)' },
    { type: 'formula', text: 'Ampacity ≥ 1.25 × FLC (tables 430.248 / 430.250)' },
    { type: 'formula', text: '7.5 HP motor, 230 V three-phase: FLC = 22 A → 22 × 1.25 = 27.5 A → 10 AWG (35 A at 75 °C)' },
    { type: 'formula', text: '2 HP motor, 230 V single-phase: FLC = 12 A → 12 × 1.25 = 15 A → 14 AWG (20 A)' },
    {
      type: 'text',
      text: 'Wye-delta starting (NEC 430.22 and 430.44): line side 125% of FLC; between the controller and the motor each winding carries 58% of the current (1/√3), so 1.25 × 58% = 72% of FLC. Overload relay: FLA × 0.577 × 1.15 or 1.25.',
    },
    { type: 'image', source: SLIDES['nec-61'], caption: '7.5 HP motor' },
    { type: 'image', source: SLIDES['nec-62'], caption: '2 HP motor' },
    { type: 'image', source: SLIDES['nec-20'], caption: 'Wye-delta starting' },
    { type: 'image', source: SLIDES['nec-21'], caption: '58% / 72% conductors' },

    { type: 'heading', text: '6 · Feeder for several motors (NEC 430.24)' },
    {
      type: 'bullets',
      items: [
        '125% of the FLC of the largest motor',
        '+ sum of the FLCs of the other motors',
        '+ 100% of the noncontinuous non-motor load',
        '+ 125% of the continuous non-motor load',
      ],
    },
    { type: 'formula', text: '20 HP (27 A) + 10 HP (14 A) motors, 460 V: 27 × 1.25 + 14 = 47.75 ≈ 48 A → 6 AWG (55 A at 60 °C)' },
    { type: 'image', source: SLIDES['nec-64'], caption: 'NEC 430.24' },
    { type: 'image', source: SLIDES['nec-66'], caption: 'Motor feeder example' },

    { type: 'heading', text: '7 · Air conditioning (NEC 440)' },
    {
      type: 'bullets',
      items: [
        'Use the nameplate rated-load current (RLA) or the branch-circuit selection current (BCSC), whichever is greater.',
        'Single compressor: ampacity ≥ 125% of that current.',
        'Several: Σ compressors + Σ other motors + 25% of the largest.',
        'Wye-delta compressor: 72% between controller and motor.',
      ],
    },
    { type: 'formula', text: '1.25 × 27 + 2.2 = 36 A    ·    1.25 × 22.1 + 1.8 = 29.4 A    ·    1.25 × 16 + 1.3 = 21.3 A' },
    { type: 'image', source: SLIDES['nec-71'], caption: 'Example: 1.25 × 27 + 2.2 = 36 A' },

    { type: 'heading', text: '8 · Service-entrance conductors (NEC 230.42)' },
    {
      type: 'bullets',
      items: [
        'Ampacity ≥ noncontinuous load + 125% of continuous load, and ≥ maximum load after correction.',
        'Exceptions: unprotected grounded conductor at 100%; device and assembly listed at 100%.',
        'NEC 230.9: 2 to 6 breakers may serve as protection; their sum may exceed the conductor ampacity if the calculated load does not.',
      ],
    },
    { type: 'formula', text: 'Example 1: 32,450 VA / 240 V = 135 A → 1/0 AWG copper (75 °C column)' },
    {
      type: 'text',
      text: 'Example 2: 3 conductors + neutral (nonlinear loads) in one raceway at 35 °C, 90 °C insulation, 75 °C terminations. Actual load 95,500 VA; factors 0.7 (grouping) and 0.96 (temperature).',
    },
    { type: 'formula', text: '95,500 / 0.7 / 0.96 = 142,000 VA → 142,000 / (480 × √3) = 171 A → 2/0 AWG (195 A at 90 °C)' },
    { type: 'formula', text: 'Check: 0.7 × 0.96 × 195 = 131 A ≤ 175 A (2/0 at 75 °C, termination limit) ✓' },
    { type: 'image', source: SLIDES['nec-79'], caption: 'Service conductors: example 2' },
    { type: 'image', source: SLIDES['nec-80'], caption: 'Applying correction factors' },

    { type: 'heading', text: '9 · Conduits (NEC chapter 9)' },
    {
      type: 'table',
      headers: ['Number of conductors', 'Maximum fill (Table 1)'],
      rows: [
        ['1', '53%'],
        ['2', '31%'],
        ['Over 2', '40%'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'Grounding and bonding conductors count toward the fill (with their actual dimensions).',
        'Short nipples (≤ 600 mm) between boxes: up to 60% fill, no adjustment factor.',
        'If the calculation gives a decimal ≥ 0.8, round up to the next conductor.',
      ],
    },
    { type: 'subheading', text: 'Example 1: 10 mixed conductors in an RMC conduit' },
    { type: 'formula', text: '4 × 12 AWG THWN (0.0133 in²) + 3 × 8 AWG TW (0.0437 in²) + 3 × 6 AWG THW (0.0726 in²)' },
    { type: 'formula', text: '0.0532 + 0.1311 + 0.2178 = 0.4021 in² → 1¼ in RMC (0.610 in² at 40%)' },
    { type: 'subheading', text: 'Example 2: how many 10 AWG THHN in a 1¼ in RMC?' },
    { type: 'formula', text: '0.610 / 0.0211 = 28.9 → 29 conductors' },
    { type: 'image', source: SLIDES['nec-82'], caption: 'Table 1: fill percentage' },
    { type: 'image', source: SLIDES['nec-86'], caption: 'Nipples ≤ 600 mm: 60%' },
    { type: 'image', source: SLIDES['nec-89'], caption: 'Example 1: conductor areas' },
    { type: 'image', source: SLIDES['nec-90'], caption: 'Example 1: choosing 1¼ in RMC' },
    { type: 'image', source: SLIDES['nec-92'], caption: 'Example 2: 29 conductors' },
  ],
};
