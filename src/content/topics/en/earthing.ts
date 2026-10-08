import { TopicContent } from '../../types';
import { SLIDES } from '../../slides';

export const earthingContent: TopicContent = {
  title: 'Designing the earthing system',
  subtitle: 'Soil, electrodes, earthing conductor size and resistance measurement',
  blocks: [
    {
      type: 'text',
      text: 'We know why earthing is needed (lesson "Electrical hazards") and we know the short-circuit current. Now we can size the earthing system itself: the soil, the electrodes and the conductor.',
    },
    { type: 'heading', text: '1 · Components and soil resistivity' },
    {
      type: 'bullets',
      items: [
        'Components: the soil · earthing electrodes (rods) · earthing conductors · accessories (fittings, bonding, welding kits).',
        'Earth resistance depends on the soil composition, moisture, temperature, depth and the number of electrodes.',
      ],
    },
    {
      type: 'table',
      headers: ['Soil type', 'Resistivity (Ω·m)'],
      rows: [
        ['Moist humus soil', '30'],
        ['Farmland, loamy and clay soils', '100'],
        ['Sandy clay soil', '150'],
        ['Moist sandy soil', '300'],
        ['Moist gravel', '500'],
        ['Dry sandy or gravel soil', '1,000'],
        ['Rocky ground', '30,000'],
      ],
    },
    {
      type: 'text',
      text: 'In poor soil, resistivity is improved by chemical treatment: holes 10 cm from the electrode and 30 cm deep, filled with copper sulfate, magnesium sulfate or sodium chloride.',
    },
    {
      type: 'note',
      text: '💡 The electrode (copper, galvanized iron…) should be the same material as the earthing conductor. Galvanized steel is a good choice because buried pipelines and building structures are also steel: no corrosion between dissimilar metals.',
    },
    { type: 'image', source: SLIDES['earth-17'], caption: 'Components of an earthing system' },
    { type: 'image', source: SLIDES['earth-18'], caption: 'Factors affecting earth resistance' },
    { type: 'image', source: SLIDES['earth-19'], caption: 'Resistivity by soil type', focus: { x: 0.02, y: 0.34, w: 0.75, h: 0.37 } },

    { type: 'heading', text: '2 · Earthing conductor size' },
    { type: 'formula', text: 'S ≥ I × √t / k' },
    {
      type: 'bullets',
      items: [
        'I = worst-case fault current (three-phase short circuit), in A.',
        't = time the conductor withstands the fault before the breaker operates, in s.',
        'k = material constant: k = K × √(ln((T₂ + β)/(T₁ + β))), with K = 226 and β = 254 for copper (148 / 228 for aluminium, 78 / 202 for steel).',
      ],
    },
    { type: 'subheading', text: 'Example: earthing of a 1.5 MVA transformer, X = 0.05 pu, 380 V' },
    { type: 'formula', text: 'MVA_sc = 1.5 / 0.05 = 30 MVA' },
    { type: 'formula', text: 'Isc = 30 / (√3 × 0.38) = 45.58 kA' },
    { type: 'formula', text: 'S = 6 × √1 × 45.58 = 273.48 mm² → 300 mm² (standard size)' },
    { type: 'note', text: '💡 The course uses the shortcut S ≈ 6 × √t × Isc(kA) for copper (k ≈ 167), with t = 1 s.' },
    { type: 'image', source: SLIDES['earth-23'], caption: 'Formula and K, β constants', focus: { x: 0.48, y: 0.55, w: 0.47, h: 0.43 } },
    { type: 'image', source: SLIDES['earth-24'], caption: 'Example: 1.5 MVA transformer' },

    { type: 'heading', text: '3 · Electrode resistance' },
    { type: 'formula', text: 'Single rod: R = ρ / (2πL) × [ln(8L / d) − 1]' },
    { type: 'text', text: 'ρ = soil resistivity (Ω·m) · L = rod length (m) · d = diameter (m).' },
    { type: 'formula', text: 'Buried conductor: R = ρ / (2πL) × ln(L² / (1.85 × h × d))   (h = depth)' },
    {
      type: 'text',
      text: 'Several parallel rods spaced s apart do not simply divide R by n: they interact. A factor λ (tabulated by arrangement) is used:',
    },
    { type: 'formula', text: 'Rₙ = R × (1 + λ × a) / n   with   a = ρ / (2π × R × s)' },
    {
      type: 'table',
      headers: ['Rods in line (n)', '2', '3', '4', '5', '6', '8', '10'],
      rows: [['Factor λ', '1.00', '1.66', '2.15', '2.54', '2.87', '3.39', '3.81']],
    },
    { type: 'formula', text: 'Overall resistance: 1 / R_system = 1 / R_rods + 1 / R_conductor' },
    { type: 'subheading', text: 'Worked example' },
    { type: 'formula', text: 'ρ = 100 Ω·m, L = 3 m, d = 16 mm: R = 100 / (2π × 3) × [ln(8 × 3 / 0.016) − 1] ≈ 33.5 Ω' },
    { type: 'formula', text: '4 rods in line, 3 m apart: a = 100 / (2π × 33.5 × 3) ≈ 0.158 → R₄ = 33.5 × (1 + 2.15 × 0.158) / 4 ≈ 11.2 Ω' },
    { type: 'image', source: SLIDES['earth-26'], caption: 'Resistance of a single rod' },
    { type: 'image', source: SLIDES['earth-28'], caption: 'Rods in line: factor λ', focus: { x: 0.39, y: 0.27, w: 0.58, h: 0.3 } },
    { type: 'image', source: SLIDES['earth-27'], caption: 'Rods arranged in a hollow square' },
    { type: 'image', source: SLIDES['earth-30'], caption: 'Overall system resistance' },

    { type: 'heading', text: '4 · If the resistance is too high, and how to measure it' },
    {
      type: 'bullets',
      items: ['Increase the electrode length', 'Increase the electrode diameter', 'Increase the number of electrodes', 'Add salts to the soil'],
    },
    {
      type: 'text',
      text: 'Soil resistivity (four-point Wenner method): 4 equally spaced rods a apart; current is injected between the outer rods and the resistance R is measured between the inner rods.',
    },
    { type: 'formula', text: 'ρ = 2π × a × R' },
    {
      type: 'text',
      text: 'Earth resistance (three-point method): current I is injected between the electrode under test X and a current spike Z; the voltage E is measured between X and a potential spike Y.',
    },
    { type: 'formula', text: 'R_earth = E / I' },
    { type: 'image', source: SLIDES['earth-32'], caption: 'Resistivity measurement with an earth tester' },
    { type: 'image', source: SLIDES['earth-33'], caption: 'Three-point method' },
  ],
};
