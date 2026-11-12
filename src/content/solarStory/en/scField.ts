import { TopicContent } from '../../types';

export const scFieldContent: TopicContent = {
  title: 'The PV array and the diesel saved',
  subtitle: 'The centre’s 134 kWh still have to be produced every day, a third of them through the battery. Fanta sizes the ground-mounted array, its strings and its three grid-tie inverters, estimates the solar share season by season, then quantifies the diesel saved.',
  blocks: [
    { type: 'scene', text: 'Month 3 · Borehole field, with Yao Kouamé and Dr Sy' },
    {
      type: 'objectives',
      items: [
        'Size a PV array for an off-grid system, accounting for storage losses.',
        'Fill in the string sizing note for three grid-tie inverters.',
        'Estimate the solar share and generator hours by season.',
        'Draw up the equipment list and the economic balance.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '36.3 kWp', label: '66 ground-mounted modules of 550 Wp' },
        { value: '3 × 10 kW', label: 'AC-coupled grid-tie inverters' },
        { value: '≈ 88 %', label: 'solar share over the year' },
        { value: '≈ 11 M FCFA/yr', label: 'of diesel and maintenance saved' },
      ],
    },

    { type: 'heading', text: '1 · How many panels?' },
    { type: 'illustration', name: 'pv-system', props: { highlight: 'panels' }, caption: 'The array must cover the day and fill the battery for the night' },
    {
      type: 'calc',
      title: 'Peak power of the array',
      steps: [
        { label: 'Savanna resource: 5.5 equivalent sun hours, PR 0.75', formula: '5.5 × 0.75 ≈ 4.1 kWh/kWp/day' },
        { label: 'Energy used directly in the daytime', formula: '\\frac{91.1}{4.1} ≈ 22.1 kWp' },
        { label: 'Night-time energy, going through the battery (AC coupling: efficiency ≈ 0.90)', formula: '\\frac{43.4 / 0.90}{4.1} ≈ 11.7 kWp' },
        { label: 'Total, rounded to the number of modules', formula: '22.1 + 11.7 ≈ 33.8 kWp   →   66 × 0.55 = 36.3 kWp' },
      ],
      result: '36.3 kWp: about 7 % margin for dust soiling and ageing',
    },
    {
      type: 'table',
      headers: ['Season', 'Equivalent sun', 'Production', 'Solar share', 'Generator'],
      rows: [
        ['Dry season (Nov – Apr)', '≈ 6.0 h', '≈ 163 kWh/day', '≈ 100 %', 'rarely'],
        ['Harmattan (Dec – Feb)', '≈ 5.0 h (dust)', '≈ 136 kWh/day', '≈ 95 %', 'a few hours a week'],
        ['Rainy season (Jun – Sep)', '≈ 4.3 h', '≈ 117 kWh/day', '≈ 70 %', '≈ 3 h a day'],
        ['Annual average', '≈ 5.5 h', '≈ 150 kWh/day', '≈ 88 %', '≈ 1.5 h a day'],
      ],
    },

    { type: 'heading', text: '2 · The strings of the three inverters' },
    {
      type: 'text',
      text: 'Each 10 kW three-phase grid-tie inverter takes 22 modules, in two strings of 11, one per MPPT input. Harmattan nights drop to 12 °C: that temperature sets the maximum voltage. On the ground the modules are well ventilated: a 70 °C cell temperature is enough for the hot check.',
    },
    {
      type: 'stringSheet',
      sheet: {
        project: 'Kalé health centre',
        module: { name: 'Monocrystalline 550 Wp, half-cell', pmax: 550, voc: 49.6, vmp: 41.6, isc: 14.0, imp: 13.2, betaVoc: -0.27, gammaPmax: -0.35 },
        tMin: 12,
        tCellMax: 70,
        inverter: { name: '10 kW three-phase grid-tie inverter', vmaxDc: 1000, mpptMin: 200, mpptMax: 800, imaxMppt: 20, iscMaxMppt: 30, pac: 10, count: 3 },
        strings: [
          { mppt: 'MPPT A', series: 11, parallel: 1 },
          { mppt: 'MPPT B', series: 11, parallel: 1 },
        ],
      },
    },
    {
      type: 'calc',
      title: 'Checks for an 11-module string',
      steps: [
        { label: 'Voc at 12 °C (harmattan dawn)', formula: '11 × 49.6 × [1 + 0.0027 × 13] ≈ 565 V ≤ 1 000 V ✓' },
        { label: 'Vmp at 70 °C', formula: '11 × 41.6 × [1 − 0.0035 × 45] ≈ 386 V ≥ 200 V ✓' },
        { label: 'Vmp at 12 °C', formula: '11 × 41.6 × [1 + 0.0035 × 13] ≈ 478 V ≤ 800 V ✓' },
        { label: 'AC coupling on the Sunny Islands: 12 kW limit per SI 8.0H', formula: '3 × 10 = 30 kW ≤ 6 × 12 = 72 kW ✓' },
      ],
      result: '3 inverters of 10 kW, 2 strings of 11 modules each; DC/AC ratio of 1.21',
    },
    {
      type: 'note',
      text: 'Why a DC/AC ratio of 1.21? Modules almost never deliver their peak power in 35 °C heat and dust: an array slightly larger than the inverters keeps them working longer near nominal power. A few hours a year, at noon in the dry season, production will be clipped; the loss is under 1 %.',
    },

    { type: 'heading', text: '3 · The equipment list' },
    {
      type: 'solarEquipment',
      list: {
        title: 'Kalé health centre off-grid system',
        project: 'Kalé health centre',
        rows: [
          { tag: 'PV', item: 'Monocrystalline modules 550 Wp, ground structure', qty: 66, rating: '36.3 kWp', data: '6 strings of 11, 12° tilt, due south', protection: 'no fuse (1 string / MPPT)', kwp: 36.3 },
          { tag: 'INV-G', item: 'Three-phase grid-tie inverters (AC coupling)', qty: 3, rating: '3 × 10 kW', data: '2 MPPT 200–800 V, 5 m from the array', protection: 'DC isolator + type 2 DC SPD', kw: 30 },
          { tag: 'SI', item: 'Sunny Island 8.0H inverter-chargers', qty: 6, rating: '6 × 6 kW (25 °C)', data: '2 three-phase clusters, 32.6 kW at 45 °C', protection: 'DC fuses per unit' },
          { tag: 'MCB', item: 'Multicluster-Box', qty: 1, rating: '≈ 55 kW', data: 'cluster coupling, generator input', protection: 'built-in breakers' },
          { tag: 'BAT', item: 'Approved LFP modules 51.2 V 100 Ah', qty: 14, rating: '71.7 kWh', data: 'BMS linked to the Sunny Islands', protection: 'DC breaker per branch', kwh: 71.7 },
          { tag: 'GEN', item: 'Existing generator', qty: 1, rating: '40 kVA', data: 'start at 30 %, stop at 80 %', protection: '37 A per phase input limit' },
          { tag: 'MSB', item: 'Vital board + non-critical board', qty: 1, rating: '4P 63 A', data: 'non-critical shed at 20 %', protection: '30 mA RCD per circuit' },
          { tag: 'LNK', item: 'Array ↔ plant room link', qty: 1, rating: '80 m', data: '5G16 mm² at 400 V AC, buried', protection: '4P 63 A breaker' },
        ],
      },
    },

    { type: 'heading', text: '4 · The diesel saved' },
    {
      type: 'calc',
      title: 'Economic balance',
      steps: [
        { label: 'Generator: from 14 h a day to ≈ 1.5 h a day on average', formula: 'diesel ≈ 50 L/day  →  ≈ 7 L/day' },
        { label: 'Diesel saved', formula: '43 × 700 × 365 ≈ 11.0 M FCFA/yr' },
        { label: 'Generator maintenance divided by about 5, solar maintenance added', formula: '≈ + 1.2 − 0.8 = + 0.4 M FCFA/yr' },
        { label: 'Indicative investment (inverters, batteries, array, installation, room)', formula: '≈ 64 M FCFA   →   payback ≈ 5.6 yr' },
      ],
      result: 'About 11.4 M FCFA saved per year, and above all electricity 24 hours a day for the maternity ward',
    },
    {
      type: 'decision',
      title: 'Operation',
      choice: '5-year maintenance contract with SolTech Afrique, remote monitoring through an online portal, training of the centre’s technical officer',
      reasons: [
        'The portal warns before failure: ageing battery, generator starting too often, inverter fault.',
        'Module cleaning (dust, harmattan) is the centre officer’s job, once a month.',
        'The technician’s six-monthly visit covers tightening, measurements and updates.',
      ],
      rejected: 'Installing with no contract or monitoring: in remote centres, it is the first cause of solar systems being abandoned after two or three years.',
    },
    { type: 'fiche', id: 'pv-inverter-finance', why: 'The economics of a battery system on a site without a reliable grid.' },

    { type: 'heading', text: '5 · What the standards say' },
    {
      type: 'norms',
      title: 'Performance and maintenance',
      rows: [
        { norm: 'IEC 61724-1', rule: 'PV system performance monitoring: sensors, indicators (PR, specific yield).', result: 'portal and indicators' },
        { norm: 'IEC 62446-2', rule: 'Maintenance of PV systems: inspections, cleaning, periodic tests.', result: 'maintenance plan' },
        { norm: 'IEC 62257-9-6', rule: 'Selection and sizing of individual and collective electrification systems.', result: 'target solar share' },
        { norm: 'IEC 62548', rule: 'PV array design: maximum voltage, protection, DC/AC ratio.', result: 'strings checked' },
      ],
    },
    {
      type: 'regional',
      text: 'Harmattan dust can cost 10 to 20 % of production within a few weeks. Washing with water, early in the morning (never on scorching modules), restores almost all the power. Fanta has a tap installed near the array, fed by the borehole, and a soft squeegee: the centre’s officer follows production on the portal and cleans as soon as it drops abnormally.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'Array = daytime energy ÷ production per kWp + night energy ÷ (storage efficiency × production per kWp).',
        'Off-grid, the solar share varies with the seasons: the generator fills the rainy season.',
        'With AC coupling, grid-tie inverter power is limited by the inverter-chargers.',
        'Monitoring and maintenance matter as much as sizing.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'With DC coupling (storage efficiency 0.95 instead of 0.90), what peak power would be needed?',
      solution: ['Night: (43.4 / 0.95) / 4.1 ≈ 11.1 kWp instead of 11.7.', 'Total ≈ 33.2 kWp: 0.6 kWp less, a little over one module. The efficiency gap weighs little against the 80 m constraint.'],
    },
    {
      type: 'exercise',
      question: 'What Voc would an 18-module string reach on a 12 °C dawn? Would it be allowed?',
      solution: ['18 × 49.6 × 1.0351 ≈ 924 V ≤ 1,000 V: allowed, just.', 'At 19 modules: 975 V, at 20 modules: 1,027 V, refused. Keep margin for cooler nights.'],
    },
  ],
};
