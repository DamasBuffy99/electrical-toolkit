import { TopicContent } from '../../../types';

const shot = {
  loads: require('../../../../../assets/reference/solar/example2/01_loads_table.png'),
  inverterPower: require('../../../../../assets/reference/solar/example2/02_inverter_power_surge.webp'),
  inverter: require('../../../../../assets/reference/solar/example2/03_inverter_1500w_24v.webp'),
  panels: require('../../../../../assets/reference/solar/example2/04_panels_lg300.webp'),
  batteries: require('../../../../../assets/reference/solar/example2/05_batteries_trojan.webp'),
  batteriesBank: require('../../../../../assets/reference/solar/example2/06_batteries_2x4.webp'),
  controller: require('../../../../../assets/reference/solar/example2/07_controller_150_70.webp'),
  connection: require('../../../../../assets/reference/solar/example2/08_panel_connection.webp'),
  wiring: require('../../../../../assets/reference/solar/example2/09_wiring_diagram.webp'),
  clipping: require('../../../../../assets/reference/solar/example2/10_controller_clipping.webp'),
  charge: require('../../../../../assets/reference/solar/example2/11_batteries_charge_current.webp'),
};

export const pvOffgridExample2Content: TopicContent = {
  title: 'Example 2: off-grid house at 24 V',
  subtitle: 'Six appliances, AGM batteries and a slightly undersized controller: full sizing',
  blocks: [
    {
      type: 'text',
      text: 'A better-equipped house than in example 1: LED lighting, TV, fans, refrigerator, laptop and washing machine. New this time: a 24 V system, AGM lead-acid batteries and a controller whose current rating is exceeded.',
    },
    { type: 'illustration', name: 'pv-system', caption: 'The system to size' },
    { type: 'image', source: shot.wiring, caption: 'Course — full wiring diagram' },

    { type: 'heading', text: '1 · The loads' },
    {
      type: 'table',
      headers: ['Device', 'Number', 'Power', 'Hours/day', 'Energy'],
      rows: [
        ['LED', '4', '10 W', '5', '200 Wh'],
        ['TV', '1', '100 W', '10', '1,000 Wh'],
        ['Fan', '2', '70 W', '7', '980 Wh'],
        ['Refrigerator', '1', '300 W', '10', '3,000 Wh'],
        ['Laptop', '1', '80 W', '8', '640 Wh'],
        ['Washing machine', '1', '300 W', '2', '600 Wh'],
        ['Total', '', '860 W', '', '6,420 Wh/day'],
      ],
    },
    { type: 'note', text: '💡 The total power counts each device: 4 LEDs × 10 W = 40 W, 2 fans × 70 W = 140 W.' },
    { type: 'illustration', name: 'pv-system', props: { highlight: 'loads' }, caption: '860 W and 6,420 Wh/day' },
    { type: 'image', source: shot.loads, caption: 'Course — step 1: the loads' },

    { type: 'heading', text: '2 · The inverter' },
    { type: 'formula', text: 'Continuous power = 1.3 × 860 = 1,118 W' },
    { type: 'text', text: 'Two appliances have a motor: the refrigerator (compressor) and the washing machine. Their power is counted 4 times at start-up:' },
    { type: 'formula', text: 'Surge power = 40 + 100 + 140 + 4 × 300 + 80 + 4 × 300 = 2,760 W' },
    {
      type: 'table',
      headers: ['24 V pure sine inverter', 'Datasheet', 'Required', ''],
      rows: [
        ['Rated power', '1,500 W', '1,118 W', '✓'],
        ['Peak power', '3,000 W', '2,760 W', '✓'],
        ['Battery voltage', '24 V DC', '24 V', '✓'],
      ],
    },
    {
      type: 'note',
      text: '📌 Why 24 V? The inverter exceeds 1,200 W, which puts it in the 1,200 – 2,000 W band, so 24 V. The battery-side current is half what it would be at 12 V.',
    },
    { type: 'illustration', name: 'pv-system', props: { highlight: 'inverter' }, caption: '1,500 W / 3,000 W, 24 V inverter' },
    { type: 'image', source: shot.inverterPower, caption: 'Course — 1,118 W continuous, 2,760 W surge' },
    { type: 'image', source: shot.inverter, caption: 'Course — 1,500 W, 24 V, pure sine inverter' },

    { type: 'heading', text: '3 · The panels' },
    { type: 'formula', text: 'Panel energy = 1.3 × 6,420 = 8,346 Wh/day' },
    { type: 'text', text: 'The site gets 5 peak sun hours per day:' },
    { type: 'formula', text: 'Panel power = 8,346 / 5 = 1,669.2 W' },
    {
      type: 'table',
      headers: ['LG Mono X Plus 300 W (LG300S1C-A5)', 'Value'],
      rows: [
        ['Maximum power', '300 W'],
        ['Vmpp / Impp', '31.6 V / 9.50 A'],
        ['Voc (open circuit)', '38.9 V'],
        ['Isc (short circuit)', '10.07 A'],
        ['Efficiency', '17.5%'],
        ['Max system voltage / max series fuse', '1,000 V / 20 A'],
      ],
    },
    { type: 'formula', text: 'Number = 1,669.2 / 300 = 5.56 → 6 panels → 6 × 300 = 1,800 W' },
    { type: 'illustration', name: 'peak-sun-hours', props: { hours: 5 }, caption: '5 peak sun hours' },
    { type: 'image', source: shot.panels, caption: 'Course — 1,669.2 W → 6 LG 300 W panels' },

    { type: 'heading', text: '4 · The batteries' },
    {
      type: 'table',
      headers: ['Trojan Solar SAGM 12 205', 'Value'],
      rows: [
        ['Voltage', '12 V'],
        ['Capacity', '205 Ah (20-hour rate)'],
        ['Technology', 'VRLA AGM lead-acid, non-spillable, maintenance-free'],
        ['Life (IEC 61427)', '8+ years'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'DoD = 0.5: an AGM lead-acid battery is only discharged to 50% to last (vs 80% for the lithium of example 1).',
        'Temperature coefficient = 0.9: on the Trojan curve, around 20 – 25 °C the battery delivers about 90% of its capacity.',
        'Autonomy: 1 day.',
      ],
    },
    { type: 'formula', text: 'Ah = (8,346 × 1) / (0.5 × 24 × 0.9) = 772 Ah' },
    { type: 'formula', text: 'In series = 24 / 12 = 2 · In parallel = 772 / 205 = 3.76 → 4' },
    { type: 'formula', text: 'Total = 2 × 4 = 8 batteries → 24 V, 4 × 205 = 820 Ah bank' },
    { type: 'illustration', name: 'battery-bank', props: { series: 2, parallel: 4, battV: 12, battAh: 205 }, caption: '2 in series × 4 in parallel = 24 V, 820 Ah' },
    { type: 'image', source: shot.batteries, caption: 'Course — Ah calculation and capacity vs temperature curve' },
    { type: 'image', source: shot.batteriesBank, caption: 'Course — 8 batteries: 24 V, 820 Ah' },

    { type: 'heading', text: '5 · The charge controller' },
    { type: 'text', text: 'Panels: 1,800 W · System: 24 V. Victron SmartSolar MPPT 150/70:' },
    {
      type: 'table',
      headers: ['MPPT 150/70', 'Datasheet', 'Our system', ''],
      rows: [
        ['Nominal PV power at 24 V', '2,000 W', '1,800 W', '✓'],
        ['Rated charge current', '70 A', '1,800 / 24 = 75 A', '⚠️'],
        ['Max PV Isc', '50 A (30 A per MC4 connector)', '37.76 A (step 6)', '✓'],
        ['Max PV Voc', '150 V', '79.3 V (step 6)', '✓'],
      ],
    },
    {
      type: 'text',
      text: 'This time the 75 A exceed the controller’s 70 A. The MPPT clips the extra 5 A and charges at 70 A maximum. Two options:',
    },
    {
      type: 'bullets',
      items: [
        'Upgrade to the 150/85 model (85 A).',
        'Accept the loss: 5 / 75 ≈ 6.7% of the panel output (24 × 70 = 1,680 W instead of 1,800 W).',
      ],
    },
    { type: 'illustration', name: 'pv-system', props: { highlight: 'controller' }, caption: 'MPPT 150/70: 75 A needed, 70 A delivered' },
    { type: 'image', source: shot.controller, caption: 'Course — 1,800 W ≤ 2,000 W at 24 V' },
    { type: 'image', source: shot.clipping, caption: 'Course — 75 A > 70 A: about 6.7% clipped' },

    { type: 'heading', text: 'Can the batteries take this current?' },
    { type: 'formula', text: '4 parallel branches: 70 / 4 = 17.5 A per branch' },
    { type: 'formula', text: 'Trojan max charge current = 20% of C20 = 0.2 × 205 = 41 A > 17.5 A ✓' },
    {
      type: 'table',
      headers: ['Charger settings (25 °C)', '12 V', '24 V', '36 V', '48 V'],
      rows: [
        ['Absorption (2.40 V/cell)', '14.40', '28.80', '43.20', '57.60'],
        ['Float (2.25 V/cell)', '13.50', '27.00', '40.50', '54.00'],
      ],
    },
    {
      type: 'note',
      text: '💡 In your notes: 75 / 4 = 18.75 A, the current before clipping. The course uses 70 / 4 = 17.5 A, the current the controller actually delivers. Either way it stays well under 41 A. Do not install these batteries in a sealed, non-ventilated compartment.',
    },
    { type: 'illustration', name: 'battery-bank', props: { series: 2, parallel: 4, battV: 12, battAh: 205, current: 70 }, caption: '70 A split: 17.5 A per branch' },
    { type: 'image', source: shot.charge, caption: 'Course — 17.5 A < 41 A (20% of C20)' },

    { type: 'heading', text: '6 · Connecting the panels' },
    { type: 'formula', text: 'Design voltage = 150 / 2 = 75 V' },
    { type: 'formula', text: 'In series = 75 / 38.9 = 1.92 → 2 panels' },
    { type: 'formula', text: 'In parallel = 6 / 2 = 3 strings' },
    { type: 'illustration', name: 'pv-array', props: { series: 2, parallel: 3, voc: 38.9 }, caption: '2 panels in series × 3 strings' },
    { type: 'text', text: 'Minimum site temperature: 20 °C → NEC 690.7(A) factor = 1.02 (24 to 20 °C band).' },
    { type: 'formula', text: 'Cold Voc = 2 × 38.9 × 1.02 = 79.3 V < 150 V ✓' },
    { type: 'formula', text: 'Input current = 1.25 × 3 × 10.07 = 37.76 A < 50 A ✓' },
    { type: 'text', text: 'The 3 strings are combined in a PV combiner box before the controller.' },
    { type: 'illustration', name: 'mppt-window', props: { max: 150, design: 75, cold: 79.3 }, caption: '79.3 V: wide margin below 150 V' },
    { type: 'image', source: shot.connection, caption: 'Course — 2 × 3 panels, 79.3 V and 37.76 A' },
    { type: 'image', source: shot.wiring, caption: 'Course — panels, PV combiner box, MPPT, batteries, inverter' },

    { type: 'heading', text: 'Summary and comparison with example 1' },
    {
      type: 'table',
      headers: ['', 'Example 1 (Canada)', 'Example 2'],
      rows: [
        ['Loads', '153 W · 1,092 Wh/day', '860 W · 6,420 Wh/day'],
        ['System voltage', '12 V', '24 V'],
        ['Inverter', '250 W / 400 W', '1,500 W / 3,000 W'],
        ['Peak sun hours', '2 h', '5 h'],
        ['Panels', '4 × 200 W (2S × 2P)', '6 × 300 W (2S × 3P)'],
        ['Batteries', '2 × LiFePO4 330 Ah (DoD 0.8)', '8 × AGM 205 Ah (DoD 0.5)'],
        ['Controller', 'MPPT 150/70 (67 A ✓)', 'MPPT 150/70 (75 A, clipped) or 150/85'],
      ],
    },
    { type: 'illustration', name: 'pv-system', caption: 'The sized system' },
  ],
};
