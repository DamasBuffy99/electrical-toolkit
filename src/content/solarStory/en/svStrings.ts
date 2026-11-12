import { TopicContent } from '../../types';

export const svStringsContent: TopicContent = {
  title: 'The roof and the strings',
  subtitle: 'Twelve modules on two roof slopes. Fanta chooses the tilt, hunts down shadows, then checks that the strings stay within the inverter limits on a cool dawn as well as on a scorching afternoon.',
  blocks: [
    { type: 'scene', text: 'Year 2 · On the roof, with Yao Kouamé (SolTech Afrique)' },
    {
      type: 'objectives',
      items: [
        'Choose module orientation and tilt near the equator.',
        'Read a module datasheet: Voc, Vmp, Isc, Imp, temperature coefficients.',
        'Calculate cell temperature and correct the voltages.',
        'Fill in the string sizing note and check the inverter limits.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '10 to 15°', label: 'tilt chosen' },
        { value: '≈ 66 °C', label: 'cell temperature in full sun' },
        { value: '2 × 6', label: 'modules: one string per slope, one per MPPT' },
        { value: '306 V', label: 'maximum Voc at dawn, under the 800 V allowed' },
      ],
    },

    { type: 'heading', text: '1 · Orientation, tilt, shading' },
    {
      type: 'dialogue',
      speaker: 'Yao Kouamé (installer)',
      role: 'team',
      text: 'Shall we put everything due south, tilted at 30°, like in Europe?',
    },
    {
      type: 'dialogue',
      speaker: 'Fanta Coulibaly',
      role: 'engineer',
      text: 'Not at 6° north: the sun passes almost overhead, a steep tilt would lose production. 10 to 15° is enough, just so the rain cleans the modules. And orientation matters little here: the south-east and south-west slopes will produce almost as much as a due-south one.',
    },
    {
      type: 'table',
      headers: ['Criterion', 'Choice', 'Why'],
      rows: [
        ['Tilt', '10 to 15°', 'close to the latitude, minimum for rain self-cleaning'],
        ['Orientation', 'south-east and south-west slopes', '< 5 % production difference near the equator'],
        ['Shading', 'none between 9 am and 4 pm', 'the mango tree is pruned, the solar water heater moved'],
        ['Mounting', 'aluminium rails on the roof frame, 10 cm under the modules', 'air flowing underneath cools the cells'],
      ],
    },
    {
      type: 'note',
      text: 'A shadow on a single module of a string drags down the current of the whole string, like a pinched hose. Bypass diodes limit the damage, but it is better to avoid any shadow during productive hours, or to use optimisers on exposed modules.',
    },

    { type: 'heading', text: '2 · The module and the heat' },
    {
      type: 'table',
      headers: ['550 Wp module data', 'Value', 'Meaning'],
      rows: [
        ['Pmax', '550 W', 'power at standard conditions (1,000 W/m², 25 °C cell)'],
        ['Voc', '49.6 V', 'open-circuit voltage: the highest, watch it in cool weather'],
        ['Vmp / Imp', '41.6 V / 13.2 A', 'maximum power point'],
        ['Isc', '14.0 A', 'short-circuit current'],
        ['β(Voc)', '− 0.27 %/K', 'voltage drops as the cell heats up'],
        ['γ(Pmax)', '− 0.35 %/K', 'power drops with heat too'],
        ['NOCT', '45 °C', 'cell temperature at 800 W/m² and 20 °C air'],
      ],
    },
    {
      type: 'calc',
      title: 'Cell temperature on a full afternoon',
      steps: [
        { label: 'Air at 35 °C, irradiance 1,000 W/m²', formula: 'θ_c = θ_a + \\frac{NOCT − 20}{800} × G = 35 + \\frac{25}{800} × 1 000 ≈ 66 °C' },
        { label: 'Roof-parallel mounting, poorly ventilated: design margin', formula: 'θ_{c,max} = 70 °C' },
        { label: 'Power loss due to heat', formula: '− 0.35 % × (66 − 25) ≈ − 14 %' },
      ],
      result: 'A 550 Wp module only delivers about 470 W in full sun at 35 °C: it is included in the 0.75 PR',
    },

    { type: 'heading', text: '3 · The string sizing note' },
    { type: 'illustration', name: 'pv-array', props: { series: 6, parallel: 1, voc: 49.6 }, caption: 'One string: 6 modules in series, voltages add up, the current stays that of one module' },
    {
      type: 'text',
      text: 'Each string of modules in series must respect three inverter limits: never exceed its maximum voltage (even at the coolest dawn, when the voltage is highest), stay within its MPPT range (even in the afternoon, when the voltage is lowest), and not exceed the current allowed by each input.',
    },
    {
      type: 'stringSheet',
      sheet: {
        project: 'Mensah villa',
        module: { name: 'Monocrystalline 550 Wp, half-cell', pmax: 550, voc: 49.6, vmp: 41.6, isc: 14.0, imp: 13.2, betaVoc: -0.27, gammaPmax: -0.35 },
        tMin: 15,
        tCellMax: 70,
        inverter: { name: '8 kW three-phase 48 V hybrid', vmaxDc: 800, mpptMin: 160, mpptMax: 650, imaxMppt: 16, iscMaxMppt: 20, pac: 8 },
        strings: [
          { mppt: 'MPPT 1 (SE slope)', series: 6, parallel: 1 },
          { mppt: 'MPPT 2 (SW slope)', series: 6, parallel: 1 },
        ],
      },
    },
    {
      type: 'calc',
      title: 'Details for a 6-module string',
      steps: [
        { label: 'Voc at dawn (15 °C)', formula: 'V_{oc} = 6 × 49.6 × [1 − 0.0027 × (15 − 25)] ≈ 306 V ≤ 800 V ✓' },
        { label: 'Vmp on a full afternoon (70 °C cell)', formula: 'V_{mp} = 6 × 41.6 × [1 − 0.0035 × (70 − 25)] ≈ 210 V ≥ 160 V ✓' },
        { label: 'Vmp on a cool morning (15 °C)', formula: 'V_{mp} = 6 × 41.6 × [1 + 0.0035 × 10] ≈ 258 V ≤ 650 V ✓' },
        { label: 'Currents per input', formula: 'I_{mp} = 13.2 A ≤ 16 A ✓   ;   I_{sc} = 14.0 A ≤ 20 A ✓' },
      ],
      result: 'Two strings of 6 modules, one per MPPT: every check is compliant',
    },
    {
      type: 'decision',
      title: 'Array wiring',
      choice: 'One string of 6 modules per slope, each slope on its own MPPT',
      reasons: [
        'The two slopes don’t get the sun at the same hours: each MPPT tracks the best point of its slope.',
        'At 210 V in the afternoon, the voltage stays comfortably above the 160 V threshold, even with an aged or shaded module.',
      ],
      rejected: 'A single string of 12 modules over both slopes: the voltage would pass (611 V at dawn), but modules of the two orientations would hold each other back all day.',
    },
    { type: 'fiche', id: 'pv-design-steps', why: 'MPPT range, maximum voltage and panel connection.' },
    { type: 'fiche', id: 'pv-offgrid-example-2', why: 'Another string calculation, with controller clipping.' },

    { type: 'heading', text: '4 · What the standards say' },
    {
      type: 'norms',
      title: 'PV array design',
      rows: [
        { norm: 'IEC 62548', rule: 'Design requirements for PV arrays: maximum voltage at minimum temperature, currents, protection.', result: 'Voc corrected at the minimum temperature' },
        { norm: 'NEC 690.7', rule: 'Maximum voltage corrected for the site’s minimum temperature (Table 690.7(A) or manufacturer coefficients).', result: 'same calculation' },
        { norm: 'IEC 61215 / IEC 61730', rule: 'Module qualification and safety; measured Voc, Isc and coefficients.', result: 'certified modules' },
        { norm: 'IEC 60891', rule: 'Procedures for correcting I-V characteristics for temperature and irradiance.', result: 'correction method' },
      ],
    },
    {
      type: 'regional',
      text: 'Here, it isn’t the cold that threatens inverters, it’s the heat that drags the voltage below the MPPT threshold in the afternoon, precisely during the most productive hours. Installers used to European calculations (Voc at −10 °C) often forget this hot check. In the Sahel, take 75 to 80 °C cells for poorly ventilated mounting.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'Near the equator: low tilt (10–15°), orientation not critical, no shade during useful hours.',
        'Cell temperature ≈ air + 25 to 35 °C in full sun; voltage and power drop with heat.',
        'Cold Voc ≤ maximum voltage; hot Vmp ≥ MPPT threshold; cold Vmp ≤ top of range; currents ≤ limits.',
        'One orientation per MPPT.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'With strings of 4 modules instead of 6, would the voltage stay within the MPPT range in the afternoon?',
      solution: ['V_mp at 70 °C = 4 × 41.6 × 0.8425 ≈ 140 V.', '140 V < 160 V: the inverter would drop out in the afternoon. At least 5 modules are needed (175 V), 6 to keep a margin.'],
    },
    {
      type: 'exercise',
      question: 'A more powerful module has an Imp of 17.5 A. Can it be connected to this inverter (16 A per MPPT)?',
      solution: ['17.5 A > 16 A: the inverter will clip the current; power above 16 A × V_mp is lost.', 'It isn’t dangerous as long as Isc stays below 20 A, but it is a loss to quantify. With an Isc of 18.5 A it passes; above 20 A, it doesn’t.'],
    },
  ],
};
