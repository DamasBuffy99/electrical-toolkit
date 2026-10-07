import { TopicContent } from '../../../types';

export const pvOffgridExample1Content: TopicContent = {
  title: 'Example 1: off-grid PV system',
  subtitle: 'A lamp, a fan and a refrigerator in Canada — full sizing, step by step',
  blocks: [
    {
      type: 'text',
      text: 'We apply the method to a small isolated house in Canada with three appliances. At each step: calculate, choose real equipment, then check its datasheet.',
    },
    { type: 'illustration', name: 'pv-system', caption: 'The system to size' },

    { type: 'heading', text: '1 · The loads' },
    {
      type: 'table',
      headers: ['Device', 'Number', 'Power', 'Hours/day', 'Energy'],
      rows: [
        ['Lamp', '1', '18 W', '4', '72 Wh'],
        ['Fan', '1', '60 W', '2', '120 Wh'],
        ['Refrigerator', '1', '75 W', '12', '900 Wh'],
        ['Total', '', '153 W', '', '1092 Wh/day'],
      ],
    },
    { type: 'formula', text: 'E.g. refrigerator: 1 × 75 W × 12 h = 900 Wh' },
    {
      type: 'text',
      text: 'Two results are kept: 153 W of total power (for the inverter) and 1092 Wh/day of energy (for the panels and batteries).',
    },
    { type: 'illustration', name: 'pv-system', props: { highlight: 'loads' }, caption: '153 W and 1092 Wh/day' },

    { type: 'heading', text: '2 · The inverter' },
    { type: 'text', text: 'Continuous power: 30% more than the total load power.' },
    { type: 'formula', text: 'Continuous power = 1.3 × 153 = 198.9 W' },
    {
      type: 'text',
      text: 'Surge power: the refrigerator has a compressor (motor), so 4 times its power is counted at start-up. The lamp and the fan are taken at their normal power.',
    },
    { type: 'formula', text: 'Surge power = 18 + 60 + 4 × 75 = 378 W' },
    { type: 'text', text: 'With 153 W of loads (under 1200 W), a 12 V system is chosen.' },
    {
      type: 'table',
      headers: ['Victron Phoenix 12/250 (pure sine)', 'Datasheet', 'Required', ''],
      rows: [
        ['Continuous power (25 °C)', '250 W', '198.9 W', '✓'],
        ['Peak power', '400 W', '378 W', '✓'],
        ['Battery voltage', '12 V (12/250 model)', '12 V', '✓'],
        ['AC output', '230 V', '—', ''],
      ],
    },
    { type: 'note', text: '💡 "12/250" = 12 V on the battery side, 250 W of continuous power.' },
    { type: 'illustration', name: 'pv-system', props: { highlight: 'inverter' }, caption: '250 W, 12 V inverter' },
    { type: 'illustration', name: 'pv-waveforms', caption: "Pure sine wave: suited to the fridge's compressor" },

    { type: 'heading', text: '3 · The panels' },
    { type: 'formula', text: 'Panel energy = 1092 × 1.3 = 1419.6 Wh/day' },
    { type: 'text', text: "In Canada (on the course's solar map), we count 2 peak sun hours per day:" },
    { type: 'formula', text: 'Panel power = 1419.6 / 2 = 709.8 W' },
    {
      type: 'table',
      headers: ['SunPower SPR-200-BLK-U', 'Value'],
      rows: [
        ['STC power', '200 W'],
        ['Imp / Vmp', '5 A / 40 V'],
        ['Isc (short circuit)', '5.4 A'],
        ['Voc (open circuit)', '47.8 V'],
        ['Voc temperature coef.', '−0.065 V/K'],
        ['Isc / power temperature coef.', '0.02%/K / −0.38%/K'],
        ['Series fuse / max system voltage', '15 A / 1000 V'],
      ],
    },
    { type: 'formula', text: 'Number = 709.8 / 200 = 3.55 → 4 panels → 4 × 200 = 800 W' },
    {
      type: 'note',
      text: '💡 Location changes everything: on the same map, West Africa sits in the 5 to 6 hour zones. With 5 h, 1419.6 / 5 ≈ 284 W would be enough, i.e. 2 × 200 W panels.',
    },
    { type: 'illustration', name: 'peak-sun-hours', props: { hours: 2 }, caption: 'Canada: 2 peak sun hours' },
    { type: 'illustration', name: 'pv-system', props: { highlight: 'panels' }, caption: '4 × 200 W panels' },

    { type: 'heading', text: '4 · The batteries' },
    {
      type: 'table',
      headers: ['Victron LFP-Smart 12.8/330 (LiFePO4)', 'Value'],
      rows: [
        ['Nominal voltage', '12.8 V'],
        ['Capacity at 25 °C', '330 Ah'],
        ['Capacity at 0 °C', '260 Ah'],
        ['Capacity at −20 °C', '160 Ah'],
        ['Cycles at 80% / 70% / 50% DoD', '2500 / 3000 / 5000'],
      ],
    },
    { type: 'text', text: 'The lowest site temperature is −20 °C: the battery only delivers 160 Ah instead of 330 Ah.' },
    { type: 'formula', text: 'Temperature coef. = 160 / 330 = 0.48' },
    { type: 'formula', text: 'Ah = (1419.6 × 2 days) / (0.8 × 12 V × 0.48) = 616.15 Ah' },
    { type: 'formula', text: 'In series = 12 / 12 = 1 · In parallel = 616.15 / 330 = 1.86 → 2' },
    { type: 'formula', text: 'Total = 1 × 2 = 2 batteries → 12 V, 660 Ah bank' },
    {
      type: 'note',
      text: '💡 Another way (annotated in the course): calculate without the coefficient, 1419.6 × 2 / (0.8 × 12) ≈ 296 Ah ≈ 300 Ah, then divide by the capacity at −20 °C: 300 / 160 ≈ 1.9 → 2 batteries. Same result.',
    },
    { type: 'illustration', name: 'battery-bank', props: { series: 1, parallel: 2, battV: 12, battAh: 330 }, caption: '2 × 12 V 330 Ah in parallel = 12 V, 660 Ah' },

    { type: 'heading', text: '5 · The charge controller' },
    { type: 'text', text: 'Panels: 800 W · System: 12 V. We choose a Victron SmartSolar MPPT 150/70:' },
    {
      type: 'table',
      headers: ['SmartSolar MPPT 150/70', 'Datasheet', 'Our system', ''],
      rows: [
        ['Battery voltage', '12/24/48 V auto', '12 V', '✓'],
        ['Rated charge current', '70 A', '67 A', '✓'],
        ['Nominal PV power at 12 V', '1000 W', '800 W', '✓'],
        ['Max PV short-circuit current', '50 A (max 30 A per MC4 connector)', '13.5 A (step 6)', '✓'],
        ['Max PV open-circuit voltage', '150 V (coldest conditions)', '101.45 V (step 6)', '✓'],
      ],
    },
    { type: 'text', text: "The controller's charge current must be sufficient to prevent any power loss:" },
    { type: 'formula', text: 'Max charge current = 800 / 12 = 67 A ≤ 70 A ✓' },
    { type: 'illustration', name: 'pv-system', props: { highlight: 'controller' }, caption: 'MPPT 150/70' },
    { type: 'text', text: 'The batteries must withstand this current. With 2 batteries in parallel, each one takes half:' },
    { type: 'formula', text: '67 / 2 = 33.5 A per battery' },
    {
      type: 'table',
      headers: ['LFP-Smart 12.8/330 — charge', 'Value'],
      rows: [
        ['Maximum charge current', '400 A'],
        ['Recommended charge current', '≤ 150 A'],
        ['Charge voltage', '14 to 14.4 V (14.2 V recommended)'],
      ],
    },
    { type: 'formula', text: '33.5 A < 150 A recommended ✓' },
    { type: 'illustration', name: 'battery-bank', props: { series: 1, parallel: 2, battV: 12, battAh: 330, current: 67 }, caption: '67 A split: 33.5 A per battery' },

    { type: 'heading', text: '6 · Connecting the panels' },
    { type: 'text', text: "Victron doesn't give an MPPT range: we aim for half of the maximum PV open-circuit voltage." },
    { type: 'formula', text: 'Design voltage = 150 / 2 = 75 V' },
    { type: 'formula', text: 'In series = 75 / 47.8 = 1.57 → 2 panels' },
    { type: 'formula', text: 'In parallel = 4 / 2 = 2 strings' },
    { type: 'illustration', name: 'pv-array', props: { series: 2, parallel: 2, voc: 47.8 }, caption: '2 panels in series × 2 strings' },
    {
      type: 'text',
      text: 'We rounded up (2 panels in series), so the voltage must be checked in extreme cold. Between 25 °C and −20 °C, the difference is 45 K:',
    },
    { type: 'formula', text: 'Cold Voc = 2 × (47.8 + 0.065 × (25 + 20)) = 101.45 V < 150 V ✓' },
    { type: 'text', text: 'Without a temperature coefficient, with NEC table 690.7(A) (factor 1.18 between −16 and −20 °C):' },
    { type: 'formula', text: 'Cold Voc = 2 × 47.8 × 1.18 = 112.8 V < 150 V ✓' },
    { type: 'text', text: 'Finally, the controller input current:' },
    { type: 'formula', text: 'Input current = 1.25 × 2 × 5.4 = 13.5 A < 50 A ✓' },
    { type: 'illustration', name: 'mppt-window', props: { max: 150, design: 75, cold: 101.45, nec: 112.8 }, caption: 'Every voltage stays below 150 V' },

    { type: 'heading', text: 'System summary' },
    {
      type: 'table',
      headers: ['Component', 'Choice'],
      rows: [
        ['System voltage', '12 V'],
        ['Inverter', 'Victron Phoenix 12/250, pure sine (250 W, 400 W peak)'],
        ['Panels', '4 × SunPower 200 W = 800 W (2 in series × 2 in parallel)'],
        ['Batteries', '2 × LiFePO4 12.8 V 330 Ah in parallel = 12 V, 660 Ah'],
        ['Charge controller', 'Victron SmartSolar MPPT 150/70'],
      ],
    },
    { type: 'illustration', name: 'pv-system', caption: 'The sized system' },
  ],
};
