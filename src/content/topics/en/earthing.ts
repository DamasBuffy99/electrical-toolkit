import { TopicContent } from '../../types';
import { SLIDES } from '../../slides';

export const earthingContent: TopicContent = {
  title: 'Earthing system',
  subtitle: 'Current hazards, TT / TN / IT systems, earthing conductor and electrode resistance',
  blocks: [
    {
      type: 'text',
      text: 'Earthing protects people against indirect electric shocks and lets the protective devices trip on a fault. Before sizing it, we need to understand what current does to the human body.',
    },
    { type: 'image', source: SLIDES['earth-12'], caption: 'Without earthing the fault current flows through the person; with earthing it flows through the conductor' },

    { type: 'heading', text: '1 · Effect of current on the human body' },
    { type: 'text', text: 'Four factors set how severe a shock is: the current amplitude, its duration, its frequency and its path through the body.' },
    {
      type: 'table',
      headers: ['AC current', 'Effect'],
      rows: [
        ['1 mA', 'Threshold of sensation'],
        ['5 mA', 'Maximum still harmless'],
        ['10 – 20 mA', "Loss of muscle control, can't let go"],
        ['50 mA', 'Difficulty breathing'],
        ['100 – 300 mA', 'Breathing stops, often fatal'],
        ['1,000 – 6,000 mA', 'Internal organs and tissues burn'],
      ],
    },
    {
      type: 'text',
      text: 'Duration matters as much as amplitude: above 100 mA for more than 20 ms, a shock can be fatal. The current a person can withstand for a time t is:',
    },
    { type: 'formula', text: 'I = 116 mA / √t   (e.g. t = 10 s → I = 36.68 mA)' },
    {
      type: 'bullets',
      items: [
        'Frequency: 300 to 500 mA of DC is needed for the effect of 30 mA of AC; low-frequency AC is the most dangerous.',
        'Path: hand to hand and left hand to feet are the worst cases, because the current crosses the heart.',
      ],
    },
    { type: 'image', source: SLIDES['earth-4'], caption: 'Effects of AC current on the body' },
    { type: 'image', source: SLIDES['earth-5'], caption: 'Effect versus duration' },
    { type: 'image', source: SLIDES['earth-6'], caption: 'Withstand current versus time' },

    { type: 'heading', text: '2 · Direct and indirect contact' },
    {
      type: 'table',
      headers: ['Hazard', 'Cause', 'Protection'],
      rows: [
        ['Direct contact', 'Touching a live part', 'Insulation of live parts · barriers or enclosures · residual current device (RCD)'],
        ['Indirect contact', 'Insulation failure: a metal frame becomes live', 'Earthing'],
      ],
    },
    {
      type: 'text',
      text: 'Earthing means connecting the non-current-carrying metal parts (frames, enclosures) or the supply neutral to the ground through a low-resistance conductor, to discharge the fault current immediately.',
    },
    { type: 'image', source: SLIDES['earth-9'], caption: 'Direct contact (left) and indirect contact through an insulation failure (right)' },

    { type: 'heading', text: '3 · Earthing systems: TT, TN, IT' },
    {
      type: 'bullets',
      items: [
        '1st letter = the source: T = neutral connected to earth · I = isolated from earth.',
        '2nd letter = the installation frames: T = connected to a local earth · N = connected to the neutral.',
      ],
    },
    {
      type: 'table',
      headers: ['System', 'Principle', 'Key points'],
      rows: [
        ['TT', 'Earthed neutral, frames on a local earth', 'Simplest to design and install · RCD required'],
        ['TN (TN-C, TN-S)', 'Frames connected to the neutral (common PEN in TN-C, separate PE in TN-S)', 'The circuit breaker clears the fault · no RCD needed unless cables are very long'],
        ['IT', 'Isolated or impedance-earthed neutral', 'Best continuity of service (hospitals) · insulation monitoring device (IMD) · expensive'],
      ],
    },
    { type: 'image', source: SLIDES['earth-14'], caption: 'TT system' },
    { type: 'image', source: SLIDES['earth-15'], caption: 'TN-C and TN-S systems' },
    { type: 'image', source: SLIDES['earth-16'], caption: 'IT system with insulation monitoring' },

    { type: 'heading', text: '4 · Components and soil resistivity' },
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
    { type: 'image', source: SLIDES['earth-19'], caption: 'Resistivity by soil type' },

    { type: 'heading', text: '5 · Earthing conductor size' },
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
    { type: 'image', source: SLIDES['earth-23'], caption: 'Formula and K, β constants' },
    { type: 'image', source: SLIDES['earth-24'], caption: 'Example: 1.5 MVA transformer' },

    { type: 'heading', text: '6 · Electrode resistance' },
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
    { type: 'image', source: SLIDES['earth-28'], caption: 'Rods in line: factor λ' },
    { type: 'image', source: SLIDES['earth-27'], caption: 'Rods arranged in a hollow square' },
    { type: 'image', source: SLIDES['earth-30'], caption: 'Overall system resistance' },

    { type: 'heading', text: '7 · If the resistance is too high, and how to measure it' },
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
