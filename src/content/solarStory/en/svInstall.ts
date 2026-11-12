import { TopicContent } from '../../types';

export const svInstallContent: TopicContent = {
  title: 'Protection, installation and acceptance',
  subtitle: 'Direct current doesn’t switch off like AC: a DC arc can hold and burn. Fanta chooses cables, fuses, isolators and surge protectors on the panel side and the battery side, sets up the earthing of the backup output, then accepts the installation with Yao, measurements in hand.',
  blocks: [
    { type: 'scene', text: 'Year 2 · On site, with Yao Kouamé and Awa' },
    {
      type: 'objectives',
      items: [
        'Know when string fuses are needed.',
        'Choose the DC isolator, surge protector and cables.',
        'Protect the battery link, the most dangerous part of the installation.',
        'Ensure protection of people on the backup output (TT system).',
        'Accept an installation through measurements (IEC 62446-1).',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '0 fuses', label: 'on strings: one string per MPPT' },
        { value: '≥ 600 V', label: 'DC surge protector voltage' },
        { value: '1.5 %', label: 'voltage drop of the DC cables' },
        { value: '200 A', label: 'battery link protection' },
      ],
    },

    { type: 'heading', text: '1 · The panel side' },
    { type: 'illustration', name: 'pv-system', props: { highlight: 'wiring' }, caption: 'The DC wiring: panels, isolator, surge protector, inverter' },
    {
      type: 'calc',
      title: 'Are string fuses needed?',
      steps: [
        { label: 'Maximum reverse current into a faulty string: that of the other strings on the same MPPT', formula: 'I_{reverse} = (N_p − 1) × I_{sc} = (1 − 1) × 14 = 0 A' },
        { label: 'Module reverse-current withstand (datasheet: maximum series fuse)', formula: 'I_{max,module} = 25 A' },
        { label: 'Rule: fuses needed if (N_p − 1) × I_{sc} > I_{max,module}', formula: '0 A ≤ 25 A  →  no fuse' },
      ],
      result: 'With one string per MPPT, no string fuse. They become mandatory from 3 strings in parallel (2 × 14 = 28 A > 25 A)',
    },
    {
      type: 'calc',
      title: '4 mm² solar cable (H1Z2Z2-K), 25 m to the inverter',
      steps: [
        { label: 'Cable ampacity on a hot roof', formula: 'I_Z ≈ 45 A ≥ 1.25 × I_{sc} = 17.5 A ✓' },
        { label: 'Round-trip voltage drop at the maximum power point', formula: 'ΔU = \\frac{2 × L × I × ρ}{S} = \\frac{2 × 25 × 13.2 × 0.0225}{4} ≈ 3.7 V' },
        { label: 'Relative to the string voltage in the afternoon', formula: '\\frac{3.7}{210} ≈ 1.8 %   ;   in the morning \\frac{3.7}{258} ≈ 1.4 %' },
      ],
      result: '4 mm²: about 1.5 % drop on average, under the 3 % DC target',
    },
    {
      type: 'table',
      headers: ['DC-side item', 'Choice', 'Why'],
      rows: [
        ['Cables', 'H1Z2Z2-K 4 mm², double insulation, UV-resistant', 'no ordinary electrical cable in the sun'],
        ['Connectors', 'MC4 of the same brand, crimped with the tool', 'two different brands = heating and arcing'],
        ['DC isolator', '1,000 V DC switch-disconnector, 2 poles per string', 'isolate the panels to work'],
        ['DC surge protector', 'type 2, U_{cpv} ≥ 1.2 × 306 ≈ 367 V → 600 V model', 'lightning-induced surges'],
        ['Frames', 'frames and rails earthed (6 mm²)', 'equipotential bonding and surge discharge'],
      ],
    },

    { type: 'heading', text: '2 · The battery link' },
    {
      type: 'calc',
      title: 'Battery current and protection',
      steps: [
        { label: 'Maximum discharge if the inverter delivers its full power from the battery', formula: 'I = \\frac{8 000}{48 × 0.94} ≈ 177 A' },
        { label: 'Limit set in the inverter (5 kW of discharge is enough for the house)', formula: 'I_{max} = 100 A ; short peak ≈ 150 A' },
        { label: 'Short battery cables (1.5 m), 50 mm² flexible copper', formula: 'I_Z ≈ 230 A ≥ 200 A ✓' },
        { label: 'Short-circuit current of an LFP battery (internal resistance ≈ 10 mΩ)', formula: 'I_{sc} ≈ \\frac{51.2}{0.010} ≈ 5 kA' },
      ],
      result: '200 A DC breaker or fuse, DC breaking capacity ≥ 5 kA, as close as possible to the battery',
    },
    {
      type: 'note',
      text: 'A 48 V battery doesn’t seem dangerous to the touch, but a bolted short circuit drives thousands of amps through it: the cables glow red within seconds. The protection goes at the battery outlet, and Yao tightens the lugs with a torque wrench: a loose lug heats up at 100 A.',
    },

    { type: 'heading', text: '3 · The backup output and earthing' },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'team',
      text: 'Careful with a point many forget: the villa is a TT system, the neutral is earthed at the utility. During load shedding, the inverter is disconnected from the grid; if its neutral is no longer earthed, my 30 mA RCDs won’t see anything any more.',
    },
    {
      type: 'decision',
      title: 'Protection of people in backup mode',
      choice: 'Neutral-to-earth relay in island mode (built-in inverter function, enabled and tested), backup board with its own 30 mA type A RCD',
      reasons: [
        'The neutral is bonded to the villa earth only when the inverter is isolated from the grid: the RCD gets a fault path back.',
        'Type A, because the electronics of the inverter and appliances produce non-sinusoidal leakage currents.',
      ],
      rejected: 'Leaving the backup output “floating”: at the first insulation fault, an appliance casing can stay live without anything tripping.',
    },

    { type: 'heading', text: '4 · The equipment list' },
    {
      type: 'solarEquipment',
      list: {
        title: 'Mensah villa hybrid system',
        project: 'Mensah villa',
        rows: [
          { tag: 'PV-1/2', item: 'Monocrystalline modules 550 Wp', qty: 12, rating: '6.6 kWp', data: '2 strings of 6, SE and SW slopes', protection: 'no fuse (1 string / MPPT)', kwp: 6.6 },
          { tag: 'INV-1', item: 'Three-phase 48 V hybrid inverter', qty: 1, rating: '8 kW AC', data: '2 MPPT 160–650 V, backup output', protection: 'built-in + external DC isolator', kw: 8 },
          { tag: 'BAT-1', item: 'LFP battery 51.2 V 100 Ah (CAN BMS)', qty: 2, rating: '10.24 kWh', data: 'discharge limited to 100 A', protection: '200 A DC breaker, 5 kA', kwh: 10.24 },
          { tag: 'DC-1', item: 'DC box: isolator + surge protector', qty: 1, rating: '1,000 V DC', data: 'type 2 SPD, Ucpv 600 V', protection: '—' },
          { tag: 'AC-B', item: 'Backup board (priority circuit)', qty: 1, rating: '3 × 16 A', data: 'lighting, cold, sockets, bedroom 1 AC', protection: '30 mA type A RCD' },
          { tag: 'AC-G', item: 'Grid ↔ inverter link', qty: 1, rating: '4P 32 A', data: 'from the main board', protection: '32 A curve C breaker' },
        ],
      },
    },

    { type: 'heading', text: '5 · Acceptance' },
    {
      type: 'table',
      headers: ['Test (IEC 62446-1)', 'Expected', 'Measured', 'Verdict'],
      rows: [
        ['Polarity of each string', '+ and − correct', 'compliant', '✓'],
        ['String 1 Voc (cells at 45 °C)', '6 × 49.6 × 0.946 ≈ 282 V', '279 V', '✓ (1 % gap)'],
        ['String 1 Isc (850 W/m²)', '14.0 × 0.85 ≈ 11.9 A', '11.6 A', '✓'],
        ['String insulation at 1,000 V', '≥ 1 MΩ', '> 200 MΩ', '✓'],
        ['Continuity of frames', '< 1 Ω', '0.3 Ω', '✓'],
        ['Transfer on grid outage', 'backed-up loads maintained', 'transfer in 10 ms, no visible break', '✓'],
        ['RCD test in backup mode', 'trip at 30 mA', '22 mA, 18 ms', '✓'],
      ],
    },
    {
      type: 'note',
      text: 'The expected Voc is always corrected to the cell temperature at the time of measurement: at 45 °C, the voltage is about 5 % below the datasheet value. A gap of more than 5 % between two identical strings points to a faulty module or a badly crimped connector.',
    },
    { type: 'fiche', id: 'pv-offgrid-example-1', why: 'A complete system calculated from end to end.' },

    { type: 'heading', text: '6 · What the standards say' },
    {
      type: 'norms',
      title: 'Installation and acceptance',
      rows: [
        { norm: 'IEC 60364-7-712', rule: 'Installation rules for PV systems: protection, isolation, DC wiring.', result: 'international baseline' },
        { norm: 'NF C 15-712-1 / -2', rule: 'French guides for grid-connected PV and PV with storage.', result: 'francophone practice' },
        { norm: 'NEC 690 / 706', rule: 'PV systems and storage in the United States; rooftop rapid shutdown (690.12).', result: 'rapid shutdown required in the USA' },
        { norm: 'IEC 62446-1', rule: 'Commissioning tests and documentation of grid-connected PV systems.', result: 'acceptance report' },
      ],
    },
    {
      type: 'regional',
      text: 'Counterfeit MC4 connectors and poor-quality “solar” cables are the leading cause of fires in small installations in the region. Fanta requires a single connector brand, the matching crimping tool, and a thermal-camera check in the first month of operation. The Mensahs get access to the monitoring app: production, battery state and alerts.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'String fuses only if (N_p − 1) × I_sc exceeds the module’s reverse-current withstand.',
        'Double-insulated solar cables, single-brand connectors, DC isolator and surge protector sized on the maximum Voc.',
        'The battery link, with its high short-circuit current, is protected as close as possible to the battery.',
        'In backup mode, the neutral must be re-earthed for the RCDs to work.',
        'Acceptance is proven by measurements: polarity, Voc, Isc, insulation, transfer, RCD.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'An array has 4 strings in parallel on one input, modules with I_sc = 14 A and a 25 A maximum series fuse. Are fuses needed? What rating?',
      solution: ['Reverse current: (4 − 1) × 14 = 42 A > 25 A: fuses mandatory on every string.', 'Rating between 1.5 × I_sc = 21 A and 2.4 × I_sc ≈ 34 A, and ≤ 25 A: 25 A gPV fuse.'],
    },
    {
      type: 'exercise',
      question: 'At acceptance, string 2 shows 262 V open-circuit against 279 V for string 1, in the same conditions. What do you suspect?',
      solution: ['A 17 V gap, about a third of a module (≈ 16 V per third of 49.6 V).', 'A short-circuited bypass diode in one module: a third of the module is bypassed. Measure module by module.'],
    },
  ],
};
