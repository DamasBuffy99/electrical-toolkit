import { TopicContent } from '../../../types';

export const pvInverterSizingContent: TopicContent = {
  title: 'Reading a datasheet and sizing an inverter',
  subtitle: 'Continuous, 30-minute and peak power; VA or W; temperature derating. Then a case study: a 17 kW off-grid health centre, where reading the commercial name too quickly would install half the inverters needed.',
  blocks: [
    {
      type: 'objectives',
      items: [
        'Distinguish continuous power, 30-minute power and surge power.',
        'Not confuse VA and W on datasheets.',
        'Account for temperature derating in the plant room.',
        'Apply the sizing rule phase by phase and check the surge of the largest motor.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '6.0 kW', label: 'continuous for a Sunny Island “8.0H”' },
        { value: '5.43 kW', label: 'the same device at 45 °C' },
        { value: '× 1.2', label: 'margin on simultaneous loads' },
        { value: '6 units', label: 'not 3, for the 17 kW health centre' },
      ],
    },
    {
      type: 'text',
      text: 'An inverter shows several power ratings depending on duration and temperature. Size on the continuous power at the real room temperature, and check the starting surge separately.',
    },

    { type: 'heading', text: '1 · Continuous, 30 minutes, peak' },
    { type: 'image', source: require('../../../../../assets/solar/inverters/power-durations.webp'), caption: 'Power of a Sunny Island 8.0H by duration: “8.0” is its 30-minute power; size on the blue bars (figure from the guide, in French)', height: 240 },
    {
      type: 'text',
      text: 'The commercial name doesn’t give the continuous power. The “8.0” of the Sunny Island 8.0H is its 30-minute power; it only holds 6 kW continuously at 25 °C.',
    },
    {
      type: 'table',
      headers: ['Device', 'Commercial name', 'Continuous at 25 °C', 'Peak'],
      rows: [
        ['SMA Sunny Island 4.4M', '4.4 kW (30 min)', '3.3 kW', '5.5 kW for 3 s'],
        ['SMA Sunny Island 6.0H', '6.0 kW (30 min)', '4.6 kW', '11 kW for 3 s'],
        ['SMA Sunny Island 8.0H', '8.0 kW (30 min)', '6.0 kW', '11 kW for 3 s'],
        ['Victron MultiPlus-II 48/5000', '5,000 VA', '4.0 kW', '9 kW'],
        ['Victron MultiPlus-II 48/10000', '10,000 VA', '8.0 kW', '18 kW'],
        ['Victron MultiPlus-II 48/15000', '15,000 VA', '12.0 kW', '27 kW'],
      ],
    },

    { type: 'heading', text: '2 · VA and W' },
    {
      type: 'text',
      text: 'Victron, like other manufacturers, names its devices by their apparent power in VA. The active power in W, the one that matters for loads, is lower: a MultiPlus-II 48/5000 delivers 4,000 W continuously at 25 °C, a 48/15000 delivers 12,000.',
    },
    { type: 'formula', text: 'P (W) = S (VA) × cos φ   ;   MultiPlus-II 48/5000: 5 000 VA → 4 000 W continuous  (ratio 0.8)' },

    { type: 'heading', text: '3 · Temperature' },
    {
      type: 'text',
      text: 'Ratings are given at 25 °C. Above that, the device protects itself by reducing its power: a Sunny Island 8.0H only holds 5.43 kW at 45 °C, and a MultiPlus-II 48/10000 drops from 8 kW to 7 kW at 40 °C. In a non-air-conditioned West African plant room, that is the value that counts.',
    },
    {
      type: 'table',
      headers: ['Characteristic', 'SI 4.4M', 'SI 6.0H', 'SI 8.0H'],
      rows: [
        ['Continuous at 25 °C', '3.3 kW', '4.6 kW', '6.0 kW'],
        ['30 min', '4.4 kW', '6.0 kW', '8.0 kW'],
        ['Peak for 3 s', '5.5 kW', '11 kW', '11 kW'],
        ['Continuous at 45 °C', '3.0 kW', '3.7 kW', '5.43 kW'],
        ['Maximum AC-coupled PV', '5 kW', '9.2 kW', '12 kW'],
      ],
    },

    { type: 'heading', text: '4 · The sizing rule' },
    { type: 'formula', text: 'P_{continuous at room temperature} ≥ 1.2 × P_{simultaneous loads}' },
    {
      type: 'bullets',
      items: [
        'The 1.2 factor is a usual design margin, to be adjusted to the project.',
        'In three-phase, the check is done phase by phase: each inverter carries only its phase.',
        'Then the few-second peak must cover the load already running plus the starting surge of the largest motor.',
      ],
    },

    { type: 'heading', text: '5 · Case study: a 17 kW off-grid health centre' },
    {
      type: 'table',
      headers: ['Data', 'Value'],
      rows: [
        ['Site', 'rural three-phase health centre, no grid, with a backup generator and panels coupled through a Sunny Tripower'],
        ['Simultaneous loads', '17 kW, about 5.7 kW per phase'],
        ['Largest motor', '3 kW borehole pump on L1, surge ≈ 9 kW for 1 to 2 s'],
        ['Plant room', 'ventilated but not air-conditioned: 45 °C in the hot season'],
      ],
    },
    {
      type: 'calc',
      title: 'Phase-by-phase check with Sunny Island 8.0H',
      steps: [
        { label: 'Continuous power required per phase (1.2 margin)', formula: 'P = 1.2 × 5.7 ≈ 6.8 kW' },
        { label: 'One unit per phase, at 45 °C', formula: '5.43 kW < 6.8 kW  ✗' },
        { label: 'Peak on L1: load already running + pump start', formula: '5.7 + 9 = 14.7 kW > 11 kW (3 s)  ✗  →  trip' },
        { label: 'Two units per phase, at 45 °C', formula: '2 × 5.43 = 10.9 kW ≥ 6.8 kW ✓   ;   peak 2 × 11 = 22 kW ≥ 14.7 kW ✓' },
      ],
      result: '6 Sunny Island 8.0H are needed (two clusters of three, linked by a Multicluster-Box), not 3',
    },
    { type: 'image', source: require('../../../../../assets/solar/inverters/cluster-example.webp'), caption: 'Left, 3 units: undersized at 45 °C and tripping when the pump starts. Right, 6 units: correct (figure from the guide, in French)', height: 260 },
    {
      type: 'decision',
      title: 'Health-centre inverters',
      choice: '6 Sunny Island 8.0H in multicluster (or 3 MultiPlus-II 48/15000, one per phase, after checking at 45 °C)',
      reasons: [
        'Reading “8.0H” as 8 kW continuous would have led to three units for “24 kW”: the reality is 16.3 kW at 45 °C, without holding the pump.',
        'The starting surge, checked on the most loaded phase, matters as much as the continuous power.',
        'Victron alternative: 12 kW at 25 °C, 10 kW at 40 °C and 27 kW peak per unit; to be confirmed on the 45 °C derating curve.',
      ],
      rejected: 'Three Sunny Island 8.0H chosen by their commercial name: outages from the first hot day and at every pump start.',
    },
    {
      type: 'note',
      text: 'Another route is to lower the room temperature: a shaded, well-ventilated or even air-conditioned plant room gives the inverters (and batteries) back their power and lifespan. The cost of a small AC unit compares with that of three extra inverters.',
    },

    { type: 'heading', text: '6 · What the standards say' },
    {
      type: 'norms',
      title: 'Datasheet data and installation',
      rows: [
        { norm: 'IEC 62109-1 / -2', rule: 'Safety of PV inverters and inverter-chargers, including thermal test conditions.', result: 'ratings guaranteed at a given temperature' },
        { norm: 'IEC 61683', rule: 'Measurement of the efficiency of photovoltaic power conditioners.', result: 'comparable efficiencies' },
        { norm: 'NF C 15-712-2 (France)', rule: 'Stand-alone PV installations or with storage: protection, isolation, battery DC wiring.', result: 'installation guide' },
        { norm: 'IEC 60364-7-712', rule: 'Installation rules for photovoltaic systems.', result: 'international framework' },
      ],
    },
    {
      type: 'regional',
      text: 'Telecom relays, health centres and schools in the region are often fitted with inverters chosen by their commercial name, in rooms at 40–45 °C. The result: outages in the hot hours and inverters that age fast. Ask for the manufacturer’s temperature derating curve and size with the measured room temperature, not the datasheet’s 25 °C.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'The commercial name is not the continuous power: read the “continuous”, “30 min” and “peak” table.',
        'VA ≠ W: the available active power is lower than the apparent power in the name.',
        'Always take the continuous power at the real room temperature.',
        'Rule: continuous P ≥ 1.2 × simultaneous loads, phase by phase.',
        'Then check the peak: running load + start of the largest motor.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'An off-grid single-phase house has 3 kW of simultaneous loads and a fridge whose surge reaches 2 kW. The room is at 40 °C. Is a MultiPlus-II 48/5000 (4 kW at 25 °C, about 3.5 kW at 40 °C, 9 kW peak) suitable?',
      solution: ['Continuous required: 1.2 × 3 = 3.6 kW > 3.5 kW at 40 °C: slightly short.', 'Peak: 3 + 2 = 5 kW ≤ 9 kW ✓. Either an 8,000 VA model, fewer simultaneous loads, or a cooler room.'],
    },
    {
      type: 'exercise',
      question: 'How many Sunny Island 6.0H per phase would the health centre need (6.8 kW continuous at 45 °C, 14.7 kW peak on L1)?',
      solution: ['At 45 °C, an SI 6.0H holds 3.7 kW: 2 units = 7.4 kW ≥ 6.8 kW ✓.', 'Peak: 2 × 11 = 22 kW ≥ 14.7 kW ✓. Also two per phase, but with less continuous margin than with 8.0H units.'],
    },
  ],
};
