import { TopicContent } from '../../types';

export const spPumpContent: TopicContent = {
  title: 'The pump and its solar drive',
  subtitle: 'Sixty-one metres of head, up to 17 m³ an hour at noon and nothing at night. Fanta chooses the pumping architecture, the submersible pump and its motor, then the drive that turns panel current directly into pump speed.',
  blocks: [
    { type: 'scene', text: 'Month 2 · Lumen design office, then at the borehole with Yao Kouamé' },
    {
      type: 'objectives',
      items: [
        'Compare solar pumping architectures: DC pump, AC pump with drive, batteries.',
        'Choose a submersible pump from its duty point.',
        'Use the affinity laws to understand the pumping threshold.',
        'Set the drive’s protections and size the motor cable.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '17 m³/h at 61 m', label: 'duty point at full speed' },
        { value: '5.5 kW', label: 'three-phase 400 V submersible motor' },
        { value: '≈ 2.2 kW', label: 'minimum power before water reaches the tower' },
        { value: '0 batteries', label: 'store water, not electricity' },
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Adama Ouédraogo',
      role: 'client',
      text: 'And at night? The women come to fetch water at 5 in the morning, long before sunrise.',
    },
    {
      type: 'dialogue',
      speaker: 'Fanta Coulibaly',
      role: 'engineer',
      text: 'At night the water tower supplies. We pump everything needed during the day, store it high up, and gravity does the rest. A steel tank lasts thirty years; a battery, eight to ten. That’s why in pumping we store water, not kilowatt-hours.',
    },

    { type: 'heading', text: '1 · Which architecture?' },
    {
      type: 'table',
      headers: ['Solution', 'Principle', 'Strengths', 'Limits'],
      rows: [
        ['Brushless DC pump + controller', 'permanent-magnet motor fed by the panels', 'very efficient, ideal below 3 kW', 'manufacturer-specific parts, few models above 4 kW'],
        ['Standard AC submersible pump + solar drive', 'variable-frequency drive with MPPT, direct DC input', 'standard pump and motor repairable locally, generator backup possible', 'slightly lower efficiency'],
        ['Inverter + batteries + AC pump', 'pumping at any hour', 'constant flow', 'expensive batteries, replaced every 8 to 10 years'],
      ],
    },
    {
      type: 'decision',
      title: 'Pumping architecture',
      choice: '6" submersible pump with a 400 V induction motor, driven by a solar drive fed directly by the array, no battery',
      reasons: [
        'At 5.5 kW, the standard AC pump is the most widespread solution: parts and repairers available in the country.',
        'The drive also accepts an AC input: the old 15 kVA generator remains as backup for overcast days.',
        'Storage is in the water tower: no battery to replace.',
      ],
      rejected: 'Batteries and inverter: about 12 M FCFA of batteries every 8 years to pump at night water that a tower stores for free.',
    },

    { type: 'heading', text: '2 · Choosing the pump' },
    {
      type: 'calc',
      title: 'Duty point and motor',
      steps: [
        { label: 'Target peak flow, limited by the borehole (18 m³/h)', formula: 'Q = 17 m³/h at TDH = 61 m' },
        { label: 'Hydraulic power', formula: 'P_{h} = \\frac{Q × TDH}{367} = \\frac{17 × 61}{367} ≈ 2.83 kW' },
        { label: '6" submersible pump, 66 % efficiency at the duty point', formula: 'P_{shaft} = \\frac{2.83}{0.66} ≈ 4.3 kW' },
        { label: '5.5 kW motor (78 % loaded), 85 % efficiency, drive 96 %', formula: 'P_{DC} = \\frac{4.3}{0.85 × 0.96} ≈ 5.25 kW' },
      ],
      result: 'Pump 17 m³/h at 61 m, 5.5 kW 400 V submersible motor: 5.25 kW to be supplied by the array at full speed',
    },
    {
      type: 'text',
      text: 'A centrifugal pump only lifts water above a certain speed. The affinity laws say that when it slows down, flow falls with speed, head with its square and power with its cube. In the morning, as long as the drive cannot spin the pump fast enough to overcome the static head, water rises in the pipe but does not reach the tower.',
    },
    {
      type: 'calc',
      title: 'The pumping threshold',
      steps: [
        { label: 'Shut-off head of the pump at full speed (manufacturer’s curve)', formula: 'H_{0} = 86 m' },
        { label: 'Static head at the start of pumping (level ≈ 30 m)', formula: 'H_{static} = 30 + 3 + 15 = 48 m' },
        { label: 'Minimum speed: head varies with the square of speed', formula: '\\frac{n_{min}}{n} = \\sqrt{\\frac{48}{86}} ≈ 0.75  →  37.5 Hz' },
        { label: 'Corresponding power: it varies with the cube of speed', formula: 'P_{min} ≈ 0.75^{3} × 5.25 ≈ 2.2 kW' },
      ],
      result: '≈ 2.2 kW, i.e. 40 % of full power, are needed before the first litre reaches the tower',
    },
    {
      type: 'note',
      text: 'That is why the array is oversized relative to the motor (ratio 1.3 to 1.5): the 2.2 kW threshold is reached earlier in the morning and later in the evening, and the pumping day gets longer. At noon the surplus is simply clipped by the drive.',
    },

    { type: 'heading', text: '3 · The solar drive' },
    { type: 'illustration', name: 'pv-system', props: { highlight: 'inverter' }, caption: 'Here the “converter” is a variable-frequency drive: it turns the panels’ DC into pump speed' },
    {
      type: 'table',
      headers: ['Drive function', 'Setting', 'Role'],
      rows: [
        ['Maximum power point tracking (MPPT)', 'automatic', 'draw the most from the array at every instant'],
        ['Minimum frequency', '37 Hz', 'never run the pump without flow'],
        ['Dry-run protection', 'level probe at 43 m + underload detection', 'stop, restart after 30 min'],
        ['Tank full', 'float switch at the top of the tank', 'stop, restart when the level drops 1 m'],
        ['Start and stop ramps', '5 s', 'no water hammer in the pipeline'],
        ['AC backup input', 'existing 15 kVA generator', 'pumping on heavily overcast days'],
      ],
    },
    { type: 'fiche', id: 'pv-inverter-types', why: 'Families of photovoltaic inverters and converters.' },

    { type: 'heading', text: '4 · The motor cable' },
    {
      type: 'calc',
      title: 'Submersible cable from drive to motor',
      steps: [
        { label: 'Rated current of the 5.5 kW motor, efficiency 0.84, PF 0.82', formula: 'I = \\frac{5,500}{\\sqrt{3} × 400 × 0.84 × 0.82} ≈ 12 A' },
        { label: 'Length: 45 m in the borehole + 20 m to the pump house', formula: 'L = 65 m, 4G4 mm² submersible cable' },
        { label: 'Voltage drop', formula: 'ΔU = \\frac{\\sqrt{3} × 0.0225 × 65 × 12 × 0.82}{4} ≈ 6.2 V  →  1.6 % ✓' },
      ],
      result: '4G4 mm² submersible cable, 1.6 % voltage drop',
    },
    {
      type: 'dialogue',
      speaker: 'Yao Kouamé',
      role: 'team',
      text: 'With a drive, 65 m of cable is no small thing. The output voltage is chopped: on a long cable, voltage spikes travel up to the winding and wear it out. The manufacturer requires an output filter beyond 50 m. We fit it: cheaper than rewinding a motor at the bottom of a borehole.',
    },
    {
      type: 'bullets',
      items: [
        'Non-return valve above the pump and a second one at the wellhead: the column stays full when stopped.',
        'Stainless steel safety rope to pull the pump, never by the electric cable or the pipe.',
        'Motor lead to drop cable joint with a watertight heat-shrink kit, insulation-tested before lowering.',
        'Direction of rotation checked at start-up: running backwards, a submersible pump delivers three times less without making any noise.',
      ],
    },

    { type: 'heading', text: '5 · What the standards say' },
    {
      type: 'norms',
      title: 'Pumps, motors and drives',
      rows: [
        { norm: 'IEC 62253', rule: 'PV pumping: design, performance tests of the motor-pump-drive subsystem.', result: 'flow guaranteed at a given irradiance' },
        { norm: 'IEC 61800-5-1', rule: 'Safety of adjustable speed electrical power drive systems.', result: 'certified drive' },
        { norm: 'IEC TS 61800-8', rule: 'Voltage at the terminals of drive-fed motors, effect of cable length.', result: 'filter beyond 50 m' },
        { norm: 'IEC 60034-1', rule: 'Rotating machines: ratings and temperature rise.', result: '5.5 kW motor at 78 % load' },
      ],
    },
    {
      type: 'regional',
      text: 'The best equipment is useless if it cannot be repaired. Fanta chooses a pump brand represented in the capital, with spare parts in stock, and has a local pump mechanic from the district trained. In many programmes it is the network of local repairers, more than the technology, that separates working boreholes from abandoned ones.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'In solar pumping, water is stored high up rather than storing electricity.',
        'P_h = Q × TDH / 367; the pump is chosen on its duty point, below the borehole’s maximum yield.',
        'Affinity laws: Q ∝ n, H ∝ n², P ∝ n³; there is a power threshold below which no water arrives.',
        'The solar drive provides MPPT, dry-run protection, tank-full stop and soft starting.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'At 45 Hz (90 % speed), what flow, shut-off head and power do the affinity laws give?',
      solution: ['Flow ≈ 0.9 × 17 = 15.3 m³/h (at proportional head); H₀ = 0.81 × 86 ≈ 70 m.', 'Power ≈ 0.73 × 5.25 ≈ 3.8 kW. In practice, at 61 m the real flow falls further, because the head to overcome does not decrease.'],
    },
    {
      type: 'exercise',
      question: 'Had the water tower been at 20 m instead of 15 m, what minimum power would be needed before the first litre?',
      solution: ['H_static = 30 + 3 + 20 = 53 m; n_min/n = √(53/86) ≈ 0.785.', 'P_min ≈ 0.785³ × 5.25 ≈ 2.5 kW: pumping would start later in the morning.'],
    },
  ],
};
