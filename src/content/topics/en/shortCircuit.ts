import { TopicContent } from '../../types';
import { SLIDES } from '../../slides';

export const shortCircuitContent: TopicContent = {
  title: 'Short-circuit current',
  subtitle: 'Calculating Isc at the main and sub-distribution boards to choose the breaking capacity',
  blocks: [
    {
      type: 'text',
      text: 'Every circuit breaker must be able to interrupt the maximum short-circuit current where it is installed (Icu ≥ Isc). The further from the transformer, the higher the impedance and the lower Isc.',
    },
    { type: 'image', source: SLIDES['gen-19'], caption: '30 kA at the main board, 19 kA after 11 m of 50 mm² cable' },

    { type: 'heading', text: '1 · The basic formula' },
    { type: 'formula', text: 'Isc = U₂₀ / (√3 × Z_T)    with    Z_T = √(R_T² + X_T²)' },
    {
      type: 'bullets',
      items: [
        "U₂₀ = open-circuit phase-to-phase voltage of the transformer's secondary (e.g. 400 V).",
        'R_T = sum of all resistances upstream of the fault.',
        'X_T = sum of all reactances upstream of the fault.',
      ],
    },
    { type: 'text', text: 'So we add, from the network to the fault: upstream network, transformer, circuit breakers, busbars and cables.' },
    { type: 'image', source: SLIDES['gen-20'], caption: 'Isc = U₂₀ / (√3 Z_T)' },

    { type: 'heading', text: '2 · Upstream network impedance' },
    { type: 'text', text: 'The utility gives the short-circuit power of the MV network, from which an equivalent LV impedance is derived:' },
    { type: 'formula', text: 'Zs = U₀² / Psc' },
    { type: 'bullets', items: ['11 kV network → 500 MVA short circuit', '22 kV network → 750 MVA short circuit'] },
    { type: 'image', source: SLIDES['gen-21'], caption: 'Upstream network impedance' },

    { type: 'heading', text: '3 · Transformer impedance' },
    { type: 'formula', text: 'Z_tr = (U₂₀² / Pn) × (Usc / 100)' },
    { type: 'text', text: 'Pn = transformer rating (kVA) · Usc = short-circuit impedance voltage (%) from the nameplate.' },
    { type: 'formula', text: 'R_tr = Pcu × 10³ / (3 × In²)   (in mΩ, Pcu = copper losses in W)' },
    { type: 'formula', text: 'X_tr = √(Z_tr² − R_tr²)' },
    { type: 'image', source: SLIDES['gen-22'], caption: 'Transformer impedance' },
    { type: 'image', source: SLIDES['gen-23'], caption: 'Resistance derived from copper losses' },
    { type: 'image', source: SLIDES['gen-24'], caption: 'Typical values by transformer rating', focus: { x: 0.52, y: 0.3, w: 0.46, h: 0.17 } },

    { type: 'heading', text: '4 · Circuit breakers, busbars and cables' },
    {
      type: 'bullets',
      items: [
        'Circuit breaker upstream of the fault: conventional reactance of 0.15 mΩ per device, resistance neglected.',
        'LV busbar: negligible resistance, reactance ≈ 0.15 mΩ per metre.',
      ],
    },
    { type: 'formula', text: 'Cable: R = ρ × L / S    with ρ = 22.5 mΩ·mm²/m (copper) or 36 mΩ·mm²/m (aluminium)' },
    { type: 'formula', text: 'Cable: X = 0.08 mΩ/m × L three-phase (0.12 mΩ/m single-phase)' },
    {
      type: 'note',
      text: '💡 In practice the upstream network, circuit breaker and busbar impedances are often neglected: the calculated Isc is then slightly higher, which is on the safe side.',
    },
    { type: 'image', source: SLIDES['gen-25'], caption: 'Circuit breaker and busbar impedance' },
    { type: 'image', source: SLIDES['gen-26'], caption: 'Cable impedance' },

    { type: 'heading', text: '5 · Example: 500 kVA transformer, Usc = 4%, Pcu = 5,500 W' },
    { type: 'subheading', text: 'Method 1: impedances' },
    { type: 'formula', text: 'Z_tr = (400² / 500,000) × 0.04 = 12.8 mΩ' },
    { type: 'formula', text: 'In = 500,000 / (√3 × 400) = 722 A → R_tr = 5,500 × 10³ / (3 × 722²) = 3.52 mΩ' },
    { type: 'formula', text: 'X_tr = √(12.8² − 3.52²) = 12.3 mΩ' },
    { type: 'formula', text: 'Isc = 400 / (√3 × √(3.52² + 12.3²)) ≈ 18 kA' },
    { type: 'subheading', text: 'Method 2: short-circuit power' },
    { type: 'formula', text: 'Ssc = 500 / 0.04 = 12.5 MVA → Isc = 12.5 / (0.4 × √3) ≈ 18 kA' },
    { type: 'text', text: 'A standard breaking capacity of 20 kA is chosen at the main distribution panel (MDP).' },
    { type: 'image', source: SLIDES['gen-27'], caption: 'Method 1 at the main board' },
    { type: 'image', source: SLIDES['gen-28'], caption: 'Method 2: Ssc = Sn / Z%' },

    { type: 'heading', text: '6 · At sub-distribution board DP-1 (20 m of 3×50 + 25 mm² cable)' },
    { type: 'formula', text: 'R_cable = 22.5 × 20 / 50 = 9 mΩ    X_cable = 0.08 × 20 = 1.6 mΩ' },
    { type: 'formula', text: 'R_total = 3.52 + 9 = 12.52 mΩ    X_total = 12.3 + 1.6 = 13.9 mΩ' },
    { type: 'formula', text: 'Isc = 400 / (√3 × √(12.52² + 13.9²)) ≈ 12 kA → breaking capacity chosen: 15 kA' },
    {
      type: 'note',
      text: '📌 Isc decreases along the network: 18 kA at the main board, 12 kA at DP-1. Downstream breakers can have a lower, cheaper breaking capacity.',
    },
    { type: 'image', source: SLIDES['gen-29'], caption: 'Isc at board DP-1' },
  ],
};
