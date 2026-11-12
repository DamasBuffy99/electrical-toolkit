import { TopicContent } from '../../types';

export const svDesignContent: TopicContent = {
  title: 'Hybrid inverter, battery and panels',
  subtitle: 'With 1.65 kW and 8.4 kWh to back up every night, Fanta chooses the inverter family, its power, the battery technology and size, then the peak power the roof can hold.',
  blocks: [
    { type: 'scene', text: 'Year 2 · Design office, with Awa' },
    {
      type: 'objectives',
      items: [
        'Choose the inverter family suited to a load-shedding site.',
        'Size the hybrid inverter: continuous power, phases, surge.',
        'Size a lithium battery from the night-time energy.',
        'Choose the peak power of the PV array.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '8 kW', label: 'three-phase 48 V hybrid inverter' },
        { value: '10.24 kWh', label: 'LFP battery 51.2 V (2 × 100 Ah)' },
        { value: '6.6 kWp', label: '12 modules of 550 Wp' },
        { value: '≈ 24 kWh/day', label: 'average production' },
      ],
    },

    { type: 'heading', text: '1 · Which inverter family?' },
    { type: 'illustration', name: 'pv-system', props: { highlight: 'inverter' }, caption: 'Panels, battery and inverter: three linked choices, made in this order of constraints' },
    {
      type: 'dialogue',
      speaker: 'Koffi Mensah',
      role: 'client',
      text: 'My neighbour put in panels with a “grid” inverter. He told me he has no power during outages. Is that normal?',
    },
    {
      type: 'dialogue',
      speaker: 'Fanta Coulibaly',
      role: 'engineer',
      text: 'Yes: a grid-tie inverter stops as soon as the grid disappears, for safety. You need a device that can make power itself from a battery: a hybrid inverter, which brings panels, battery and grid together in one box.',
    },
    {
      type: 'decision',
      title: 'Inverter family',
      choice: '48 V hybrid inverter, designed to run durably without the grid (“battery-first”), with a three-phase backup output',
      reasons: [
        'Load shedding is daily: real stand-alone operation is needed, not just occasional backup.',
        '48 V batteries are available locally and easy to expand.',
        'A single device (DC coupling): simple to install and monitor for a house.',
      ],
      rejected: 'A grid-tie inverter alone: no power during outages. A separate inverter-charger + grid-tie inverter: more scalable, but dearer and more complex than needed here.',
    },
    { type: 'fiche', id: 'pv-inverter-types', why: 'Inverter families and their behaviour during an outage.' },

    { type: 'heading', text: '2 · Inverter power' },
    {
      type: 'calc',
      title: 'Hybrid inverter checks',
      steps: [
        { label: 'Basic rule on the backed-up loads', formula: 'P_{continuous} ≥ 1.2 × 1.65 ≈ 2.0 kW' },
        { label: 'Three-phase output: backed-up loads spread over the three phases', formula: 'L1 ≈ 0.63 kW  ;  L2 ≈ 0.42 kW  ;  L3 ≈ 0.60 kW' },
        { label: '8 kW three-phase hybrid, in the garage at 35 °C (≈ 5 % derating)', formula: '\\frac{8 × 0.95}{3} ≈ 2.5 kW per phase ≥ 1.2 × 0.63 ✓' },
        { label: 'Peak on L2: running loads + fridge start', formula: '0.42 + 0.9 ≈ 1.3 kW ≤ inverter peak (2 × 2.67 kW for 10 s) ✓' },
        { label: 'Panel side: 6.6 kWp for 8 kW AC', formula: 'DC/AC ratio = \\frac{6.6}{8} ≈ 0.83' },
      ],
      result: 'An 8 kW three-phase hybrid comfortably covers the backup and accepts the whole array the roof can carry',
    },
    {
      type: 'decision',
      title: 'Power and number of phases',
      choice: '8 kW three-phase hybrid',
      reasons: [
        'Awa’s priority circuit is spread over the three phases: it connects as is to the backup output.',
        'The backup stays light (≈ 2 kW), but the inverter must also convert 6.6 kWp of panels in the daytime.',
      ],
      rejected: '5 kW single-phase hybrid: the backed-up circuits would have to be regrouped on one phase and the array limited to ≈ 6 kWp.',
    },
    { type: 'fiche', id: 'pv-inverter-sizing', why: 'Reading a datasheet: continuous, peak, temperature, VA and W.' },

    { type: 'heading', text: '3 · The battery' },
    {
      type: 'calc',
      title: 'Battery capacity',
      steps: [
        { label: 'Backed-up night energy (balance)', formula: 'E_{night} = 8.37 kWh' },
        { label: 'Lithium iron phosphate battery: 90 % depth of discharge, 95 % efficiency', formula: 'C = \\frac{8.37}{0.90 × 0.95} ≈ 9.8 kWh' },
        { label: '5.12 kWh modules (51.2 V, 100 Ah)', formula: '2 modules = 10.24 kWh ≥ 9.8 kWh ✓' },
        { label: 'Discharge current during load shedding', formula: 'I = \\frac{1 650}{51.2} ≈ 32 A  (≈ 0.16 C)' },
      ],
      result: 'LFP battery 51.2 V – 200 Ah (10.24 kWh), communicating with the inverter',
    },
    {
      type: 'table',
      headers: ['Criterion', 'Lithium LFP', 'Lead-acid (AGM / GEL)'],
      rows: [
        ['Usable discharge', '80 to 90 %', '50 % to last'],
        ['Nominal capacity for 8.4 kWh usable', '≈ 10 kWh', '≈ 20 kWh'],
        ['Life at 35 °C', '≈ 4,000 to 6,000 cycles, 10 years and more', '≈ 3 to 4 years'],
        ['Weight', '≈ 90 kg', '≈ 550 kg'],
        ['Purchase price', 'higher', 'lower'],
      ],
    },
    {
      type: 'decision',
      title: 'Battery technology',
      choice: 'Lithium iron phosphate (LFP) with electronic management (BMS) linked to the inverter',
      reasons: [
        'Half the capacity to buy for the same usable energy.',
        'Three times the life in a hot garage: over 10 years, a lead-acid battery would be replaced two or three times.',
        'The BMS tells the inverter the exact state of charge and protects every cell.',
      ],
      rejected: 'Lead-acid batteries: cheaper to buy, but dearer over 10 years and 550 kg to house.',
    },
    { type: 'fiche', id: 'pv-batteries-controllers', why: 'Battery types, charge and discharge currents.' },

    { type: 'heading', text: '4 · Panel power' },
    {
      type: 'calc',
      title: 'How many kWp?',
      steps: [
        { label: 'Recharge the battery every day', formula: '\\frac{8.37}{0.95} ≈ 8.8 kWh' },
        { label: 'Daytime backed-up loads + part of the house’s daytime use', formula: '3.4 + 12.4 ≈ 15.8 kWh' },
        { label: 'Total daytime need, at 3.6 kWh/kWp/day', formula: '\\frac{8.8 + 15.8}{3.6} ≈ 6.8 kWp' },
        { label: 'The south-east / south-west roof holds 12 modules of 550 Wp', formula: '12 × 0.55 = 6.6 kWp   →   6.6 × 3.6 ≈ 23.8 kWh/day' },
        { label: 'Rainy season (≈ 3.8 equivalent sun hours)', formula: '6.6 × 3.8 × 0.75 ≈ 18.8 kWh ≥ 8.8 + 3.4 ✓' },
      ],
      result: '6.6 kWp: the battery is always recharged, even in the rainy season, and the surplus cuts the daytime bill',
    },
    {
      type: 'note',
      text: 'Expected savings: about 460,000 FCFA of petrol avoided per year, and nearly 15 kWh less from the grid every sunny day (≈ 600,000 FCFA a year). For an investment of around 6 million FCFA, payback is about 6 years, with evenings free of generator noise as a bonus.',
    },

    { type: 'heading', text: '5 · What the standards say' },
    {
      type: 'norms',
      title: 'Hybrid inverters and batteries',
      rows: [
        { norm: 'IEC 62109-1 / -2', rule: 'Safety of PV inverters and battery-charging functions.', result: 'certificate required' },
        { norm: 'IEC 62619', rule: 'Safety of lithium batteries for stationary applications.', result: 'certified LFP battery' },
        { norm: 'IEC 62040 / IEC 62477', rule: 'Transfer to the backup output and converter safety.', result: 'transfer < 20 ms' },
        { norm: 'UL 9540 / UL 1973 (USA)', rule: 'Energy storage systems and stationary batteries.', result: 'North American equivalent' },
      ],
    },
    {
      type: 'regional',
      text: 'Low-cost 48 V hybrid brands abound on the West African market. Fanta requires: an IEC 62109 certificate, a battery declared compatible by the inverter manufacturer (CAN or RS485 communication), a local representative for the warranty and a monitoring app. A “no-name” lithium battery without a communicating BMS is a frequent cause of failures, and even fires.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'Load-shedding site: a hybrid inverter able to run without the grid, not a grid-tie inverter.',
        'Inverter: continuous power ≥ 1.2 × backed-up loads, phase by phase, then check the surge.',
        'Battery: night energy ÷ (depth of discharge × efficiency); lithium halves the capacity needed.',
        'Panels: recharge the battery and cover the daytime, at 3.6 kWh/kWp/day on the coast; check the rainy season.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'With bedroom 2’s AC as well (11.37 kWh at night), what LFP battery is needed?',
      solution: ['C = 11.37 / (0.90 × 0.95) ≈ 13.3 kWh.', 'Three 5.12 kWh modules (15.36 kWh).'],
    },
    {
      type: 'exercise',
      question: 'The roof only allowed 8 modules (4.4 kWp). Would the battery still be recharged in the rainy season?',
      solution: ['4.4 × 3.8 × 0.75 ≈ 12.5 kWh per day.', 'The priority need is 8.8 + 3.4 = 12.2 kWh: just enough. Nothing would be left for the house in the daytime.'],
    },
  ],
};
