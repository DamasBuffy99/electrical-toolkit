import { TopicContent } from '../../types';

export const spFieldContent: TopicContent = {
  title: 'The pump’s PV array',
  subtitle: 'With no battery, every cloud shows in the flow. Fanta sizes the array on April’s energy, checks the string against the drive’s voltage window, plots the pumping day hour by hour and draws up the equipment list.',
  blocks: [
    { type: 'scene', text: 'Month 2 · Sonkélé borehole site, with Yao Kouamé and Adama Ouédraogo' },
    {
      type: 'objectives',
      items: [
        'Size a sun-following pumping array from the daily electrical energy.',
        'Fill in the string sizing note with the drive’s MPPT window.',
        'Plot the flow hour by hour and check each season’s production.',
        'Protect the array: shading, fencing, theft, surges.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '7.7 kWp', label: '14 modules of 550 Wp in one string' },
        { value: '1.4', label: 'array / motor ratio' },
        { value: '≈ 85 m³/day', label: 'pumped on average in April' },
        { value: '≈ 100 m³', label: 'on a clear-sky day' },
      ],
    },

    { type: 'heading', text: '1 · How many panels?' },
    { type: 'illustration', name: 'pv-system', props: { highlight: 'panels' }, caption: 'No battery, no charge controller: the array feeds the pump drive directly' },
    {
      type: 'table',
      headers: ['Loss between panels and drive', 'Factor'],
      rows: [
        ['Cell temperature (≈ 65 °C: 40 K × 0.35 %/K)', '0.86'],
        ['Dust, with weekly cleaning', '0.95'],
        ['Cables, mismatch, MPPT', '0.96'],
        ['Total array losses', '≈ 0.78'],
        ['Morning and evening below the pumping threshold (step 2)', '0.90'],
      ],
    },
    {
      type: 'calc',
      title: 'Array peak power',
      steps: [
        { label: 'Electrical energy to supply in April (step 1)', formula: 'E_{el} = 27.7 kWh/day' },
        { label: 'Useful energy per kWp in April', formula: '5.8 × 0.78 × 0.90 ≈ 4.07 kWh/kWp/day' },
        { label: 'Minimum peak power', formula: 'P_{p} = \\frac{27.7}{4.07} ≈ 6.8 kWp' },
        { label: 'Rounded to the number of modules in one string', formula: '14 × 550 = 7.7 kWp   ;   ratio \\frac{7.7}{5.5} = 1.4' },
      ],
      result: '7.7 kWp: 13 % margin over April’s demand, within the recommended 1.3 to 1.5 times the motor',
    },
    {
      type: 'table',
      headers: ['Period', 'Sun (h)', 'Useful energy (kWh/day)', 'Water pumped (m³/day)', 'Demand (m³/day)'],
      rows: [
        ['April', '5.8', '31.3', '≈ 85', '75 ✓'],
        ['December', '5.2', '28.1', '≈ 76', '65 ✓'],
        ['August', '4.5', '24.3', '≈ 66', '55 ✓'],
      ],
    },

    { type: 'heading', text: '2 · The string and the drive' },
    {
      type: 'text',
      text: 'To supply a 400 V motor, the drive needs a high DC voltage: its MPPT window runs from 350 to 750 V, and it withstands no more than 800 V. Harmattan nights drop to 12 °C; on the ground and well ventilated, cells do not exceed 70 °C. The 14 modules form a single string.',
    },
    {
      type: 'stringSheet',
      sheet: {
        project: 'Sonkélé pumping',
        module: { name: 'Monocrystalline 550 Wp, half-cell', pmax: 550, voc: 49.6, vmp: 41.6, isc: 14.0, imp: 13.2, betaVoc: -0.27, gammaPmax: -0.35 },
        tMin: 12,
        tCellMax: 70,
        inverter: { name: '5.5 kW solar pump drive (DC input)', vmaxDc: 800, mpptMin: 350, mpptMax: 750, imaxMppt: 18, iscMaxMppt: 20, pac: 5.5, count: 1 },
        strings: [{ mppt: 'DC input', series: 14, parallel: 1 }],
      },
    },
    {
      type: 'calc',
      title: 'Checks for the 14-module string',
      steps: [
        { label: 'Voc at 12 °C', formula: '14 × 49.6 × [1 + 0.0027 × 13] ≈ 719 V ≤ 800 V ✓' },
        { label: 'Vmp at 70 °C', formula: '14 × 41.6 × [1 − 0.0035 × 45] ≈ 491 V ≥ 350 V ✓' },
        { label: 'Vmp at 12 °C', formula: '14 × 41.6 × [1 + 0.0035 × 13] ≈ 609 V ≤ 750 V ✓' },
        { label: 'Power available at noon (losses 0.78)', formula: '7.7 × 0.78 ≈ 6.0 kW ≥ 5.25 kW ✓  (the drive clips the surplus)' },
      ],
      result: 'One 14-module string, with no fuse or junction box',
    },

    { type: 'heading', text: '3 · A pumping day' },
    {
      type: 'table',
      headers: ['Hour', 'Array power (kW)', 'Power used (kW)', 'Flow (m³/h)'],
      rows: [
        ['7 am', '0.6', '0 (below threshold)', '0'],
        ['8 am', '2.0', '0 (below threshold)', '0'],
        ['9 am', '3.6', '3.6', '9'],
        ['10 am', '4.9', '4.9', '15'],
        ['11 am', '5.7', '5.25 (clipped)', '17'],
        ['12 pm', '6.0', '5.25 (clipped)', '17'],
        ['1 pm', '5.8', '5.25 (clipped)', '17'],
        ['2 pm', '5.1', '5.1', '16'],
        ['3 pm', '3.9', '3.9', '11'],
        ['4 pm', '2.4', '2.4', '2'],
        ['5 pm', '0.9', '0', '0'],
        ['Total, clear April day', '40.9 kWh', '35.7 kWh', '≈ 104 m³'],
      ],
    },
    {
      type: 'note',
      text: 'Peak flow stays at 17 m³/h, below the 18 m³/h the borehole can give: the level will not drop to the pump. An average, hazier April day gives about 85 m³. Pumping stops around 4:30 pm: everything the village drinks in the evening and the next morning must already be in the tower.',
    },
    {
      type: 'decision',
      title: 'Module mounting',
      choice: 'Fixed ground structure, tilted 15° due south, 10 m from the borehole, inside a fenced enclosure',
      reasons: [
        '15° slightly favours the dry season and lets the rain wash the modules.',
        'Two more modules cost far less than a tracker and have no moving parts.',
        'Near the borehole, away from the water tower and large trees: no shading between 8 am and 5 pm.',
      ],
      rejected: 'Single-axis tracker: 20 to 25 % more water, mostly morning and evening, but a motor, bearings and a controller to maintain in the village.',
    },

    { type: 'heading', text: '4 · The equipment list' },
    {
      type: 'solarEquipment',
      list: {
        title: 'Sonkélé solar pumping system',
        project: 'Sonkélé village',
        rows: [
          { tag: 'PV', item: 'Monocrystalline 550 Wp modules, fixed ground structure', qty: 14, rating: '7.7 kWp', data: '1 string of 14, 15° due south', protection: 'DC isolator + type 2 DC SPD', kwp: 7.7 },
          { tag: 'VFD', item: 'Solar pump drive', qty: 1, rating: '5.5 kW', data: 'MPPT 350–750 V, AC backup input', protection: 'output filter, dry-run probe', kw: 5.5 },
          { tag: 'PMP', item: '6" submersible pump + 400 V motor', qty: 1, rating: '17 m³/h at 61 m', data: 'set at 45 m, 5.5 kW motor', protection: '2 non-return valves' },
          { tag: 'CBL', item: '4G4 mm² submersible cable', qty: 1, rating: '65 m', data: 'heat-shrink joint', protection: 'ΔU 1.6 %' },
          { tag: 'LVL', item: 'Low-level probe + tank float switch', qty: 1, rating: '2 inputs', data: 'dry-run / tank-full stop' },
          { tag: 'PIP', item: 'DN90 PN10 PE pipeline', qty: 1, rating: '400 m', data: 'buried at 0.8 m', protection: 'air valve at the high point' },
          { tag: 'TWR', item: 'Steel water tank on a 12 m tower', qty: 1, rating: '60 m³', data: 'step 4' },
          { tag: 'GEN', item: 'Existing generator (backup)', qty: 1, rating: '15 kVA', data: 'on the drive’s AC input' },
          { tag: 'FNC', item: '2 m mesh fence, gate, anti-theft fasteners', qty: 1, rating: '≈ 60 m', data: 'array and wellhead' },
        ],
      },
    },
    {
      type: 'bullets',
      items: [
        'Module frames, structure and drive bonded to a common earth electrode.',
        'Anti-theft fasteners and numbers engraved on each module; the borehole guard is paid by the committee.',
        'Concrete slab and padlocked cover on the wellhead: water quality starts there.',
      ],
    },

    { type: 'heading', text: '5 · What the standards say' },
    {
      type: 'norms',
      title: 'Pumping array',
      rows: [
        { norm: 'IEC 62253', rule: 'Performance of a PV pumping system: flow / irradiance curve, subsystem tests.', result: 'flow checked at acceptance' },
        { norm: 'IEC 62548-1', rule: 'Array design: maximum voltage at minimum temperature, protection.', result: '14-module string' },
        { norm: 'IEC 61215 / IEC 61730', rule: 'Module qualification and safety.', result: 'certified modules' },
        { norm: 'IEC 60364-7-712', rule: 'PV installations: isolation, surge protection, earthing.', result: 'SPD and earthing' },
      ],
    },
    {
      type: 'regional',
      text: 'Module theft has become common around isolated boreholes. The villages that protect themselves best combine a fence, anti-theft fasteners, a guard paid from water sales and, above all, the feeling that the system belongs to the village. Fanta involves the water committee at every stage of the works.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'P_p = E_el ÷ (sun × array losses × threshold factor); the array is 1.3 to 1.5 times the motor power.',
        'The string must stay within the drive’s MPPT window, hot and cold.',
        'Flow follows the sun: the pumping day lasts 7 to 8 hours, and peak flow must not exceed the borehole’s yield.',
        'Fencing, earthing, surge protection and anti-theft measures are part of the design.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'With only 12 modules (6.6 kWp), would April’s demand be met?',
      solution: ['Useful energy: 6.6 × 4.07 ≈ 26.9 kWh; hydraulic: 26.9 × 0.45 ≈ 12.1 kWh.', 'Water: 12.1 × 367 / 61 ≈ 73 m³ < 75 m³: no, and with no margin for dust or ageing.'],
    },
    {
      type: 'exercise',
      question: 'Could 16 modules be wired in series on this drive?',
      solution: ['Voc at 12 °C: 16 × 49.6 × 1.0351 ≈ 821 V > 800 V: no.', 'For more power, two strings in parallel would be needed (if the drive accepts it) or a higher-voltage drive.'],
    },
  ],
};
