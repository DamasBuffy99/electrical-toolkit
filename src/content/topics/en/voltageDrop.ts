import { TopicContent } from '../../types';
import { SLIDES } from '../../slides';

export const voltageDropContent: TopicContent = {
  title: 'Voltage drop',
  subtitle: 'Checking that the chosen section keeps enough voltage at the end of the cable',
  blocks: [
    {
      type: 'text',
      text: 'A cable that carries the current can still be too long: its resistance makes the voltage drop between the source and the load. So we check the voltage drop with the cross-section (CSA) already chosen.',
    },
    { type: 'image', source: SLIDES['gen-13'], caption: '10 A through a 0.8 Ω cable: 120 V at the start, 112 V at the end' },

    { type: 'heading', text: 'Why limit it?' },
    {
      type: 'bullets',
      items: [
        'Motors: torque is proportional to the square of the voltage. A voltage drop reduces starting and maximum torque: the motor struggles to start.',
        'Incandescent lamps: the lower the voltage, the weaker the light.',
        'Electronic appliances: very sensitive to voltage variations, hence their internal stabilizers.',
      ],
    },
    { type: 'image', source: SLIDES['gen-14'], caption: 'Effects of voltage drop and IEC limits' },

    { type: 'heading', text: 'Permissible limits (IEC 60364-5-52)' },
    {
      type: 'table',
      headers: ['Type of installation', 'Lighting', 'Other uses'],
      rows: [
        ['A — supplied directly from the public LV network', '3%', '5%'],
        ['B — supplied from a private substation (own transformer)', '6%', '8%'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'A larger drop is accepted for motors during starting and for equipment with high inrush current, provided the voltage stays within their equipment standard.',
        'Voltage transients and variations due to abnormal operation are excluded.',
      ],
    },
    { type: 'image', source: SLIDES['gen-15'], caption: 'Exceptions to IEC 60364-5-52' },

    { type: 'heading', text: 'Method 1: catalogue value (mV/A/m)' },
    { type: 'text', text: 'Cable catalogues give, for each section, the voltage drop in millivolts per amp per metre.' },
    { type: 'formula', text: 'VD = (catalogue mV/A/m) × 10⁻³ × I_rated × Length' },
    { type: 'formula', text: '%VD = VD / V × 100    (V = 380 V three-phase, 220 V single-phase)' },
    { type: 'subheading', text: 'Example: 75 HP motor, 3×70 + 35 mm² Cu/PVC/PVC cable, 120 m, 400 V' },
    { type: 'formula', text: 'I_rated ≈ 1.5 × 75 = 112.5 A' },
    { type: 'formula', text: 'Catalogue 70 mm²: 0.524 mV/A/m → VD = 0.524 × 10⁻³ × 112.5 × 120 = 7.074 V' },
    { type: 'formula', text: '%VD = 7.074 / 380 × 100 = 1.86% ≤ 5% ✓' },
    { type: 'note', text: '💡 "I ≈ 1.5 × HP": three-phase 380 V with pf = 0.8, 746 / (√3 × 380 × 0.8) = 1.41 ≈ 1.5 A per HP.' },
    { type: 'image', source: SLIDES['gen-16'], caption: 'Calculation with the catalogue value' },
    { type: 'image', source: SLIDES['gen-17'], caption: 'Example: 75 HP motor over 120 m' },

    { type: 'heading', text: 'Method 2: cable R and X (IEC)' },
    { type: 'formula', text: 'Single-phase: ΔV = 2 × I × L × (R cos φ + X sin φ)' },
    { type: 'formula', text: 'Three-phase: ΔV = √3 × I × L × (R cos φ + X sin φ)' },
    { type: 'formula', text: '%ΔV = ΔV / V × 100' },
    {
      type: 'text',
      text: 'R and X in Ω/m (or Ω/km × length in km). V = phase voltage single-phase, line voltage three-phase. Usual limits in the course: 5% for the whole installation, 3% for lighting.',
    },
    { type: 'image', source: SLIDES['iec-9'], caption: 'IEC formula with R and X' },

    { type: 'heading', text: 'Solutions when the drop is too high' },
    { type: 'formula', text: 'R = ρ × L / A' },
    {
      type: 'bullets',
      items: [
        'Increase the cable cross-section: resistance decreases.',
        'Increase the number of parallel cables: total resistance decreases.',
        'Reduce the distance from the supply to the load.',
        'Power factor correction: improves the voltage profile.',
      ],
    },
    { type: 'image', source: SLIDES['gen-18'], caption: 'Voltage drop solutions' },
  ],
};
