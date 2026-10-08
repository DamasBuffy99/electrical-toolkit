import { TopicContent } from '../../../types';

export const pvDesignStepsContent: TopicContent = {
  title: 'Method: sizing an off-grid PV system',
  subtitle: 'The components, the DC → AC path, and the 6 calculation steps',
  blocks: [
    {
      type: 'text',
      text: 'An off-grid PV system powers a house with no grid connection. The panels produce the energy, the charge controller charges the batteries, and the inverter supplies alternating current to the appliances.',
    },
    { type: 'illustration', name: 'pv-system', caption: 'Panels → controller → batteries → inverter → house' },

    { type: 'heading', text: 'The energy path: DC then AC' },
    {
      type: 'bullets',
      items: [
        'Panels → controller → batteries: direct current (DC).',
        'Batteries → inverter → house: the inverter converts DC into alternating current (AC) for the appliances.',
      ],
    },
    { type: 'text', text: 'The components are sized in this order, each step using the result of the previous one:' },
    {
      type: 'bullets',
      items: [
        '1 → Define the loads',
        '2 → Size the inverter',
        '3 → Size the panels',
        '4 → Size the batteries',
        '5 → Size the charge controller',
        '6 → Connect the panels (series / parallel)',
      ],
    },
    { type: 'illustration', name: 'pv-system', caption: 'The complete system' },
    { type: 'image', source: require('../../../../../assets/reference/solar/example1/02_system_dc_ac.png'), caption: 'Course — DC on the panel and battery side, AC to the house' },

    { type: 'heading', text: '1 · Define the loads' },
    { type: 'text', text: 'List each appliance with its quantity, its power and its number of hours of use per day.' },
    { type: 'formula', text: 'Energy (Wh) = Number × Power (W) × Hours' },
    {
      type: 'bullets',
      items: [
        'The sum of the powers gives the total power (W) → used for the inverter.',
        'The sum of the energies gives the daily energy (Wh/day) → used for the panels and batteries.',
      ],
    },
    { type: 'illustration', name: 'pv-system', props: { highlight: 'loads' }, caption: 'What the house consumes' },

    { type: 'heading', text: '2 · Size the inverter' },
    {
      type: 'bullets',
      items: [
        'An inverter is needed whenever AC output is required.',
        'Its rating should never be lower than the total wattage of the appliances.',
        'It must have the same nominal voltage as the batteries (12, 24 or 48 V).',
        'Stand-alone system: it must handle the total wattage used at one time.',
        'Grid-tie system: its input rating should be the same as the PV array rating.',
      ],
    },
    { type: 'formula', text: 'Inverter continuous power = 1.25 to 1.3 × total load power' },
    {
      type: 'text',
      text: 'Motors, compressors, refrigerators, pumps and washing machines draw a high starting current: the inverter must withstand it. Their surge power is on their label; if unknown, assume 3 to 4 times their wattage.',
    },
    { type: 'formula', text: 'Surge power = loads without motor + (3 to 4) × motor loads' },
    {
      type: 'table',
      headers: ['System voltage', 'Installation'],
      rows: [
        ['12 V DC', 'Small installations, loads up to 1200 W'],
        ['24 V DC', 'Medium installations, 1200 W to 2000 W'],
        ['48 V or 96 V DC', 'Large installations, over 2000 W'],
      ],
    },
    { type: 'illustration', name: 'pv-system', props: { highlight: 'inverter' }, caption: 'The inverter: from battery (DC) to house (AC)' },
    {
      type: 'note',
      text: '💡 Prefer a pure sine wave inverter: its output matches the grid. A modified sine wave (stepped) is cheaper but makes motors and refrigerators run hot and hum.',
    },
    { type: 'illustration', name: 'pv-waveforms', caption: 'Pure vs modified sine wave' },
    { type: 'image', source: require('../../../../../assets/reference/solar/example1/03_inverter_rules.webp'), caption: 'Course — inverter sizing rules' },

    { type: 'heading', text: '3 · Size the panels' },
    {
      type: 'text',
      text: 'The panels must produce more than the load energy: a 1.3 safety factor covers the system losses and the fact that panels do not operate at the optimal STC conditions (25 °C, 1000 W/m², AM 1.5).',
    },
    { type: 'formula', text: 'Panel energy = 1.3 × load energy (Wh/day)' },
    {
      type: 'text',
      text: "Peak sun hours (PSH) express a day's sunshine as the equivalent number of hours at 1000 W/m². They depend on the location (solar maps).",
    },
    { type: 'formula', text: 'Panel power (W) = panel energy / peak sun hours' },
    { type: 'formula', text: 'Number of panels = panel power / power of one panel (round up)' },
    { type: 'illustration', name: 'pv-system', props: { highlight: 'panels' }, caption: "The panels produce the day's energy" },
    { type: 'illustration', name: 'pv-stc', caption: 'Why the 1.3 factor' },
    { type: 'illustration', name: 'peak-sun-hours', props: { hours: 5 }, caption: 'Example: 5 peak sun hours' },

    { type: 'heading', text: '4 · Size the batteries' },
    {
      type: 'text',
      text: 'Cold reduces battery capacity. The datasheet gives the capacity at low temperature, from which a correction coefficient is derived.',
    },
    { type: 'formula', text: 'Temperature coef. = capacity at T_min / nominal capacity (25 °C)' },
    { type: 'formula', text: 'Ah = (E × days of autonomy) / (DoD × system voltage × temperature coef.)' },
    {
      type: 'bullets',
      items: [
        'DoD = depth of discharge (e.g. 0.8 = 80%). The deeper the discharge, the fewer cycles the battery lasts.',
        'Batteries in series = system voltage / battery voltage',
        'Parallel strings = Ah required / Ah of one battery (round up)',
        'Total = batteries in series × parallel strings',
      ],
    },
    { type: 'illustration', name: 'pv-system', props: { highlight: 'batteries' }, caption: 'The batteries store energy for the night and cloudy days' },
    { type: 'illustration', name: 'battery-bank', props: { series: 2, parallel: 2, battV: 12, battAh: 200 }, caption: 'Example: 24 V bank of 4 × 12 V 200 Ah batteries' },

    { type: 'heading', text: '5 · Size the charge controller (MPPT)' },
    {
      type: 'text',
      text: 'An MPPT controller is named "max PV voltage / max charge current": a 150/70 accepts 150 V on the panel side and charges up to 70 A.',
    },
    {
      type: 'bullets',
      items: [
        "The panel power must be ≤ the controller's nominal PV power at the system voltage.",
        'The charge current rating must be sufficient to prevent any power loss:',
      ],
    },
    { type: 'formula', text: "Max charge current = panel power / system voltage ≤ controller's charge current" },
    { type: 'text', text: 'The batteries must withstand this current too. With several parallel strings, it splits between them:' },
    { type: 'formula', text: 'Current per string = charge current / number of parallel strings ≤ recommended charge current' },
    { type: 'formula', text: 'Example 2: 1800 W / 24 V = 75 A → 4 parallel groups: 75 / 4 = 18.75 A each' },
    { type: 'illustration', name: 'pv-system', props: { highlight: 'controller' }, caption: 'The controller charges the batteries' },

    { type: 'heading', text: 'Important note: the MPPT range' },
    {
      type: 'bullets',
      items: [
        "The series panel connection depends on the controller's MPPT voltage range.",
        'We aim for a panel voltage in the middle of this range.',
        'If the MPPT range is not available, take half of the maximum PV open-circuit voltage.',
      ],
    },
    {
      type: 'text',
      text: 'A voltage that is too low keeps the controller from working properly: it needs a PV voltage well above the battery voltage.',
    },
    { type: 'formula', text: 'Example: range "V_bat + 2 V to 72 V" with a 24 V battery → 26 to 72 V → middle ≈ 49 V' },
    { type: 'illustration', name: 'mppt-window', props: { max: 100, design: 49, rangeMin: 26, rangeMax: 72 }, caption: 'Aim for the middle of the MPPT range' },
    { type: 'image', source: require('../../../../../assets/reference/solar/example1/15_mppt_range_note.webp'), caption: 'Course — important note on the MPPT range' },
    { type: 'image', source: require('../../../../../assets/reference/solar/example1/16_mppt_range_tracer.webp'), caption: 'Course — Tracer controller: V_bat + 2 V to 72 V range, 100 V max' },

    { type: 'heading', text: '6 · Connect the panels' },
    { type: 'formula', text: 'Panels in series = design voltage / Voc of one panel (rounded)' },
    { type: 'formula', text: 'Parallel strings = total number of panels / panels in series' },
    {
      type: 'text',
      text: "In cold weather the panels' Voc rises: check that it stays below the controller's maximum voltage.",
    },
    { type: 'formula', text: "Cold Voc = N_series × (Voc + |V coef.| × (25 − T_min)) < controller's max Voc" },
    { type: 'text', text: 'If the temperature coefficient is not on the datasheet, use the factor from NEC table 690.7(A):' },
    { type: 'formula', text: 'Cold Voc = N_series × Voc × NEC factor' },
    {
      type: 'table',
      headers: ['Ambient temperature (°C)', 'Factor'],
      rows: [
        ['24 to 20', '1.02'],
        ['19 to 15', '1.04'],
        ['14 to 10', '1.06'],
        ['9 to 5', '1.08'],
        ['4 to 0', '1.10'],
        ['−1 to −5', '1.12'],
        ['−6 to −10', '1.14'],
        ['−11 to −15', '1.16'],
        ['−16 to −20', '1.18'],
        ['−21 to −25', '1.20'],
        ['−26 to −30', '1.21'],
        ['−31 to −35', '1.23'],
        ['−36 to −40', '1.25'],
      ],
    },
    { type: 'formula', text: "Controller input current = Isc × parallel strings × 1.25 (or 1.3) < controller's max Isc" },
    { type: 'subheading', text: 'Example 2: 2 panels in series, 3 parallel strings' },
    { type: 'formula', text: 'Cold Voc = 2 × 38.9 × 1.02 = 79.3 V < 150 V ✓' },
    { type: 'formula', text: 'Input current = 3 × 1.25 × 10.07 = 37.76 A' },
    { type: 'illustration', name: 'pv-system', props: { highlight: 'wiring' }, caption: 'The panels connected to the controller' },
    { type: 'illustration', name: 'pv-array', props: { series: 2, parallel: 3, voc: 38.9 }, caption: '2 panels in series × 3 parallel strings' },
    { type: 'image', source: require('../../../../../assets/reference/solar/example1/19_nec_690_7a.png'), caption: 'NEC Table 690.7(A) — voltage correction factors' },
    { type: 'note', text: "⚠️ Always compare the cold voltage and the input current with the limits on the controller's datasheet." },
  ],
};
