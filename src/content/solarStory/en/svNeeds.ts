import { TopicContent } from '../../types';

export const svNeedsContent: TopicContent = {
  title: 'What needs backing up',
  subtitle: 'A year after moving in, the Mensahs live with four hours of load shedding every evening and a noisy petrol generator. Fanta Coulibaly, Lumen’s PV engineer, starts with a simple question: what really needs to work during outages?',
  blocks: [
    { type: 'scene', text: 'Year 2 · Visit to the Mensahs, with Awa Diallo' },
    {
      type: 'objectives',
      items: [
        'Tell the whole house’s consumption from what needs backing up.',
        'Fill in a load balance: power, daytime and night-time hours, energy, starting surge.',
        'Separate energy used in the daytime (sun) and at night (battery).',
        'Understand why not everything is backed up.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '≈ 33 kWh/day', label: 'whole-house consumption' },
        { value: '11.7 kWh/day', label: 'backed-up circuits' },
        { value: '8.4 kWh', label: 'backed-up energy at night' },
        { value: '1.65 kW', label: 'power of the backed-up loads' },
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Koffi Mensah',
      role: 'client',
      text: 'The generator costs us a fortune in petrol and the neighbours complain about the noise. We’d like solar that replaces everything, night and day.',
    },
    {
      type: 'dialogue',
      speaker: 'Fanta Coulibaly',
      role: 'engineer',
      text: 'Replacing everything, including four air conditioners at night, would need a battery the size of a car. Let’s first list what must work during outages, and what can wait for the grid to return. That sorting is what sets the price of the system.',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'team',
      text: 'Good news: I wired a separate priority circuit in the villa board, precisely for this day. It just needs connecting to the inverter’s backup output.',
    },

    { type: 'heading', text: '1 · The load balance' },
    { type: 'illustration', name: 'pv-system', props: { highlight: 'loads' }, caption: 'Everything starts with the loads: they set the size of every component' },
    {
      type: 'text',
      text: 'For each appliance, Fanta notes its power, the number of units, the hours of use in the daytime (when the panels produce) and at night (when the battery must be drawn on), and the starting surge for motors. For compressor appliances (fridge, inverter AC), she takes the average power actually drawn, not the nameplate value.',
    },
    {
      type: 'consumptionSheet',
      sheet: {
        project: 'Mensah villa',
        simultaneity: 0.6,
        items: [
          { name: 'LED lighting, whole house', power: 360, qty: 1, hDay: 1, hNight: 5, backup: true },
          { name: 'Fridge-freezer', power: 150, qty: 1, hDay: 5, hNight: 5, surge: 900, backup: true },
          { name: 'Chest freezer', power: 120, qty: 1, hDay: 4, hNight: 4, surge: 700, backup: true },
          { name: 'TV, router, decoder', power: 150, qty: 1, hDay: 3, hNight: 4, backup: true },
          { name: 'Laptops', power: 60, qty: 2, hDay: 6, hNight: 2, backup: true },
          { name: 'Fans', power: 50, qty: 3, hDay: 4, hNight: 6, backup: true },
          { name: 'Bedroom 1 AC (inverter, average)', power: 600, qty: 1, hDay: 0, hNight: 6, backup: true },
          { name: 'Bedroom 2 and 3 ACs (average)', power: 500, qty: 2, hDay: 0, hNight: 6 },
          { name: 'Living-room AC (average)', power: 1000, qty: 1, hDay: 4, hNight: 2 },
          { name: 'Water heater', power: 1500, qty: 1, hDay: 2, hNight: 0 },
          { name: 'Washing machine', power: 2000, qty: 1, hDay: 1, hNight: 0, surge: 3000 },
          { name: 'Oven', power: 2500, qty: 1, hDay: 0.5, hNight: 0.5 },
          { name: 'Borehole pump', power: 1400, qty: 1, hDay: 1.5, hNight: 0, surge: 10500 },
        ],
      },
    },
    {
      type: 'calc',
      title: 'What the balance says',
      steps: [
        { label: 'Whole house', formula: 'E ≈ 33.3 kWh/day   (Awa estimated 32 kWh in the electrical load study)' },
        { label: 'Backed-up circuits: day + night', formula: 'E_{backup} = 3.36 + 8.37 ≈ 11.7 kWh/day' },
        { label: 'Power of the backed-up loads', formula: 'P = 360 + 150 + 120 + 150 + 120 + 150 + 600 = 1 650 W' },
        { label: 'During the 4 h of load shedding (6 pm – 10 pm)', formula: '1.65 kW × 4 h ≈ 6.6 kWh' },
      ],
      result: 'Back up 1.65 kW and about 8.4 kWh at night, instead of 6.63 kW and 33 kWh for the whole house',
    },

    { type: 'heading', text: '2 · Why not everything is backed up' },
    {
      type: 'table',
      headers: ['Appliance', 'Backed up?', 'Reason'],
      rows: [
        ['Lighting, fridge, freezer', 'yes', 'essential, low power'],
        ['TV, router, computers, fans', 'yes', 'comfort and work, low power'],
        ['Parents’ bedroom AC', 'yes, at 26 °C', 'night comfort; a single inverter unit, no starting surge'],
        ['Other ACs', 'no', '6 kWh more per night: the battery would double'],
        ['Water heater, oven, washing machine', 'no', 'used in the daytime or can wait'],
        ['Borehole pump', 'no', '10 kVA starting surge; the tank lasts the evening, it runs in the daytime'],
      ],
    },
    {
      type: 'decision',
      title: 'Backup scope',
      choice: 'The villa’s priority circuit (lighting, food cold, TV and office sockets, fans) + bedroom 1 AC, i.e. 1.65 kW and ≈ 8.4 kWh per night',
      reasons: [
        'These loads are enough to live normally during load shedding.',
        'Excluding the pump avoids oversizing the inverter just for a 10 kVA surge a few seconds a day.',
        'The other appliances stay on the grid, or on solar in the daytime.',
      ],
      rejected: 'Backing up the whole house: a 12 kW inverter and 35 kWh of battery, three to four times dearer.',
    },
    {
      type: 'note',
      text: 'The whole-house simultaneous peak (6.63 kW) and the pump surge don’t disappear: they stay served by the grid when it is there. The hybrid inverter passes the grid through to the house and only supplies the backed-up part itself during outages.',
    },

    { type: 'heading', text: '3 · Available sunshine' },
    {
      type: 'calc',
      title: 'Solar resource on the West African coast',
      steps: [
        { label: 'Average irradiation on the module plane', formula: '≈ 4.8 kWh/m²/day, i.e. 4.8 peak sun hours' },
        { label: 'Performance ratio (heat, dust, cables, inverter)', formula: 'PR ≈ 0.75' },
        { label: 'Production of one kWp', formula: '4.8 × 0.75 ≈ 3.6 kWh/kWp/day  (≈ 1 300 kWh/kWp/yr)' },
      ],
      result: 'Each installed kWp produces about 3.6 kWh per day on average over the year, less in the rainy season',
    },
    { type: 'fiche', id: 'pv-design-steps', why: 'The full method: loads, inverter, panels, batteries, controller, connection.' },
    { type: 'fiche', id: 'pv-inverter-finance', why: 'Grid-tie or hybrid: the economics on a load-shedding site.' },

    { type: 'heading', text: '4 · What the standards say' },
    {
      type: 'norms',
      title: 'Assessing needs',
      rows: [
        { norm: 'IEC 62257 (series)', rule: 'Recommendations for small renewable energy systems for rural electrification, including needs assessment.', result: 'balance by use and period' },
        { norm: 'NF C 15-712-2', rule: 'PV installations with storage: identifying backed-up circuits.', result: 'labelled backup board' },
        { norm: 'IEEE 1562', rule: 'Guide for sizing arrays and batteries of stand-alone PV systems.', result: 'day / night energy' },
        { norm: 'IEC 61724-1', rule: 'Performance monitoring: definition of the performance ratio (PR).', result: 'PR ≈ 0.75' },
      ],
    },
    {
      type: 'regional',
      text: 'Load shedding often follows a schedule published by the utility, by district. Fanta asks the Mensahs to note the real outage hours for two weeks: that is the figure that sizes the battery. She also records the generator’s consumption: 1.8 litres of petrol per evening, about 460,000 FCFA a year, not counting maintenance.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'The balance lists power, quantity, daytime and night-time hours, starting surge.',
        'Night-time energy sizes the battery; power and surges size the inverter.',
        'Only the essential is backed up: the sorting sets the price.',
        'One kWp produces about 3.6 kWh a day on the coast, with a PR of 0.75.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'Esther would also like bedroom 2’s AC backed up at night (500 W average for 6 h). What becomes of the backed-up night energy?',
      solution: ['8.37 + 0.5 × 6 = 11.37 kWh.', 'Almost 36 % more: the 10 kWh battery would no longer last the whole night.'],
    },
    {
      type: 'exercise',
      question: 'Why take 150 W for the fridge when its nameplate shows 1.2 A, about 280 W?',
      solution: ['The compressor only runs part of the time and draws less than the nameplate value in steady state.', 'For energy, use the measured average power (or the annual consumption on the label ÷ 8,760 h); for the inverter, keep the starting surge (≈ 900 W).'],
    },
  ],
};
