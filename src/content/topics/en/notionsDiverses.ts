import { TopicContent } from '../../types';

export const notionsDiversesContent: TopicContent = {
  title: 'Miscellaneous Notions',
  subtitle: 'Wiring, switches, and quick reference (HP/kVA conversion, voltage classes)',
  blocks: [
    { type: 'heading', text: '🔷 Switches — types and uses' },
    {
      type: 'table',
      headers: ['Switch type', 'Function'],
      rows: [
        ['One-way, one-gang', 'Switches one group of luminaires from one location'],
        ['One-way, two-gang', 'Switches two groups of luminaires from one location'],
        ['One-way, one-gang (wet area)', 'Rated for damp/wet locations'],
        ['Two-way', 'Controls the same circuit from 2 different locations'],
        ['Dimmer switch', 'Adjustable light intensity'],
      ],
    },
    {
      type: 'note',
      text: '📐 Installation reference: switch mounting height = 120 cm · distance from door = 10 cm.',
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 HP / kVA conversion' },
    { type: 'formula', text: '1 HP = 0.746 kW = 1 kVA (at pf = 0.8)' },
    {
      type: 'text',
      text: "Quick conversion used to go from a motor's mechanical power (HP, on its nameplate) to its apparent electrical power (kVA), useful for every current calculation (I = kVA×1000/V).",
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Voltage classes' },
    {
      type: 'table',
      headers: ['Class', 'Range', 'Typical breaker technology'],
      rows: [
        ['Low Voltage (LV)', '1V – 1kV', 'MCB, MCCB, ACB'],
        ['Medium Voltage (MV)', '1kV – 66kV', 'SF6, vacuum'],
        ['High Voltage (HV)', '66kV – 500kV', 'Oil, SF6'],
      ],
    },
    {
      type: 'note',
      text: "💡 ELCB (Earth Leakage Circuit Breaker) and RCCB (Residual Current Circuit Breaker) refer to the same family of earth-leakage protection devices, alongside MCB/MCCB/ACB.",
    },
  ],
};
