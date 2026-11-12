import { TopicContent } from '../../types';
import { fig } from '../../topics/clim/fig';

export const chHydraulicsContent: TopicContent = {
  title: 'The chilled-water network',
  subtitle: 'Fifty cubic metres of 7 °C water per hour must reach 120 rooms and three air handling units, each with the right flow. Ousmane lays out the network, sizes pipes and pumps, chooses the valves, the expansion vessel and the insulation that will stop the pipes “sweating” in the false ceilings.',
  blocks: [
    { type: 'scene', text: 'Month 5 · Design office, with Didier Kouassi (shop drawings)' },
    {
      type: 'objectives',
      items: [
        'Choose a hydronic architecture: primary/secondary or variable primary.',
        'Size pipes by velocity and calculate the pump head.',
        'Understand valve authority and balancing.',
        'Size the expansion vessel and the anti-condensation insulation.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: 'DN 125', label: 'main header, ≈ 1.1 m/s' },
        { value: '≈ 190 kPa', label: 'secondary pump head' },
        { value: '5.5 kW', label: 'variable-speed secondary pump' },
        { value: '80 L', label: 'expansion vessel' },
        { value: '19 / 40 mm', label: 'insulation indoors / outdoors' },
      ],
    },

    { type: 'heading', text: '1 · The network architecture' },
    { type: 'illustration', name: 'clim-central', props: { highlight: 'water' }, caption: 'Primary loop around the chillers, secondary loop to the terminals, separated by a decoupler' },
    {
      type: 'text',
      text: 'Each chiller needs a constant water flow through its evaporator, while the terminals demand a variable flow depending on occupancy. The classic solution separates two loops: a constant-flow primary loop around the chillers and a variable-flow secondary loop to the terminals, joined by a decoupler where the two flows can differ without interfering.',
    },
    fig('p148_0', 'Table 5.11 of the IEPF guide — review of the different hydronic networks'),
    {
      type: 'decision',
      title: 'Hydronic architecture',
      choice: 'Constant-flow primary (one pump per chiller) and variable-flow secondary (two variable-speed pumps, one standby), with a decoupler',
      reasons: [
        'Robust and easy to operate: each chiller has its guaranteed flow, whatever the terminals do.',
        'The secondary pump slows down when rooms are empty: pumping energy follows occupancy.',
        'Félix’s team understands this scheme and can troubleshoot it.',
      ],
      rejected: 'Variable primary (no secondary loop): fewer pumps and a little less energy, but delicate control of the chillers’ minimum flow, risky without a specialised operator.',
    },
    { type: 'fiche', id: 'abc-hydraulics', why: 'Hydronic networks: flows, pumps, valves and balancing.' },

    { type: 'heading', text: '2 · Sizing the pipes' },
    fig('p149_0', 'Table 5.12 of the guide — maximum velocities in chilled-water pipes (steel and copper)'),
    {
      type: 'calc',
      title: 'Diameters, from the header to the room',
      steps: [
        { label: 'Secondary header: 50 m³/h, DN 125 (0.0123 m² section)', formula: 'v = \\frac{50}{3 600 × 0.0123} ≈ 1.1 m/s ✓' },
        { label: 'Wing riser: 60 rooms × 0.32 m³/h × 0.8, DN 65 (0.0033 m²)', formula: 'q ≈ 15.4 m³/h   ;   v = \\frac{15.4}{3 600 × 0.0033} ≈ 1.3 m/s ✓' },
        { label: 'Room branch: 0.32 m³/h, 15 mm internal tube', formula: 'v = \\frac{0.32}{3 600 × 0.000177} ≈ 0.5 m/s ✓' },
      ],
      result: 'Velocities below the guide maximums: no flow noise, pressure drops of 150 to 300 Pa/m',
    },
    {
      type: 'calc',
      title: 'Secondary pump head and power',
      steps: [
        { label: 'Index circuit: 300 m of flow and return pipe at ≈ 250 Pa/m, fittings + 30 %', formula: 'Δp_{network} ≈ 300 × 250 × 1.3 ≈ 98 kPa' },
        { label: 'Terminal: coil 25 kPa, control valve 30 kPa, strainer and balancing 20 kPa', formula: 'Δp_{terminal} ≈ 75 kPa' },
        { label: 'Total with 10 % margin', formula: 'H ≈ (98 + 75) × 1.1 ≈ 190 kPa  (≈ 19 m water column)' },
        { label: 'Power drawn (overall efficiency 0.6)', formula: 'P = \\frac{q_v × H}{η} = \\frac{0.0139 × 190 000}{0.6} ≈ 4.4 kW  →  5.5 kW motor' },
      ],
      result: 'Secondary pump 50 m³/h at 19 m, 5.5 kW motor with variable-speed drive',
    },

    { type: 'heading', text: '3 · Valves and balancing' },
    {
      type: 'text',
      text: 'Without balancing, water takes the easiest path: rooms close to the pumps get too much, those at the end of the wing not enough. Each control valve must also have enough “authority”: the pressure drop it creates when open must be at least half that of the circuit it controls, otherwise it hardly controls anything over the first half of its stroke.',
    },
    {
      type: 'calc',
      title: 'Authority of a fan-coil valve',
      steps: [
        { label: 'Control valve open: 30 kPa; coil and branch: 25 kPa', formula: 'β = \\frac{Δp_{valve}}{Δp_{valve} + Δp_{circuit}} = \\frac{30}{30 + 25} ≈ 0.55 ≥ 0.5 ✓' },
      ],
      result: 'Sufficient authority: the valve controls over its whole stroke',
    },
    {
      type: 'decision',
      title: 'Terminal valves',
      choice: 'Pressure-independent control valves (PICV) on every fan coil and every AHU coil',
      reasons: [
        'Each valve limits the flow to its set value whatever the network pressure: the network balances itself.',
        'Faster commissioning, and no imbalance when a wing is closed for works.',
        'Authority of 1 by design: stable control even at low load.',
      ],
      rejected: 'Conventional valves + manual balancing valves: cheaper to buy, but lengthy balancing, to be redone after every change.',
    },

    { type: 'heading', text: '4 · Expansion vessel and insulation' },
    {
      type: 'calc',
      title: 'Expansion vessel',
      steps: [
        { label: 'Water volume: pipes ≈ 4.5 m³, terminals and AHUs ≈ 0.7 m³, chillers ≈ 0.8 m³', formula: 'V ≈ 6 m³' },
        { label: 'Expansion between 7 °C and 35 °C (plant stopped in full sun)', formula: 'V_e ≈ 0.6 % × 6 000 ≈ 36 L' },
        { label: 'Absolute pre-charge pressure (20 m static head + 0.3 bar) and final pressure before the relief valve', formula: 'P_0 = 3.3 bar   ;   P_f = 6.5 bar' },
        { label: 'Nominal vessel volume', formula: 'V_n = V_e × \\frac{P_f}{P_f − P_0} = 36 × \\frac{6.5}{3.2} ≈ 73 L  →  80 L' },
      ],
      result: '80 L vessel, relief valve set at 6 bar, pressurisation and filling through a backflow preventer',
    },
    {
      type: 'calc',
      title: 'Insulation of 7 °C pipes',
      steps: [
        { label: 'In false ceilings (air 26 °C, dew point ≈ 15 °C), 19 mm insulation (λ = 0.036)', formula: 'θ_s = 26 − 19 × \\frac{0.125}{0.53 + 0.125} ≈ 22.4 °C > 15 °C ✓' },
        { label: 'On the terrace (air 32 °C, dew point ≈ 28 °C), 40 mm insulation', formula: 'θ_s = 32 − 25 × \\frac{0.125}{1.11 + 0.125} ≈ 29.5 °C > 28 °C ✓' },
      ],
      result: '19 mm indoors, 40 mm with aluminium cladding outdoors; continuous vapour barrier, including at supports',
    },
    {
      type: 'note',
      text: 'The weak point is almost never thickness, but continuity: a metal clip fitted directly on the pipe, a valve left bare, and condensation drips onto the bedroom ceilings. Didier draws insulating blocks at every support and removable jackets on the valves.',
    },
    {
      type: 'bullets',
      items: [
        'Filled with softened water, corrosion inhibitor, strainer and dirt/air separator on the return.',
        'No glycol: water never freezes in this climate, and glycol would reduce heat transfer.',
        'Air vents at high points, drains at low points, isolation valves per wing to work without draining everything.',
      ],
    },
    { type: 'fiche', id: 'clim-central-networks', why: 'Chillers, ducts and pipework.' },

    { type: 'heading', text: '5 · What the standards say' },
    {
      type: 'norms',
      title: 'Hydronic networks',
      rows: [
        { norm: 'IEPF guide', rule: 'Maximum velocities in chilled-water pipes by diameter and material.', result: '≈ 1 to 2 m/s' },
        { norm: 'ASHRAE Fundamentals / Systems Handbook', rule: 'Network sizing (100 to 400 Pa/m pressure drop), pumps, primary/secondary systems.', result: '150 to 300 Pa/m used' },
        { norm: 'EN 12828 / EN 13831', rule: 'Design of water-based systems; membrane expansion vessels.', result: '80 L vessel, 6 bar relief' },
        { norm: 'EN ISO 12241', rule: 'Thermal insulation calculation for pipework, including condensation prevention.', result: '19 / 40 mm' },
      ],
    },
    {
      type: 'regional',
      text: 'Imported pumps and valves take weeks to arrive: Félix keeps a complete secondary pump, valve actuators and seals in stock. Another local reality: outages. Each time the grid returns, the controller restarts the pumps first, then one chiller, then the others, a few minutes apart, so the generator doesn’t stall.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'Constant-flow primary around the chillers, variable-flow secondary to the terminals, a decoupler between them.',
        'Pipes chosen by velocity (1 to 2 m/s); pump head = index circuit + terminal + margin.',
        'Pump power = flow × pressure ÷ efficiency; the drive makes it follow the load.',
        'Valve authority ≥ 0.5, or pressure-independent valves.',
        'Expansion vessel sized on the expansion; continuous insulation with a vapour barrier.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'At night the secondary pump only moves 25 m³/h. If the required head drops to 60 kPa, how much power does it draw?',
      solution: ['P = (25 / 3,600) × 60,000 / 0.55 ≈ 0.76 kW.', 'Against 4.4 kW at peak: that is the whole point of the drive.'],
    },
    {
      type: 'exercise',
      question: 'A control valve creates only 10 kPa against a 40 kPa circuit. What authority? Consequence?',
      solution: ['β = 10 / (10 + 40) = 0.2.', 'Too low: the valve lets almost the full flow through as soon as it cracks open, and the temperature hunts. A smaller valve (more pressure drop) or a pressure-independent valve is needed.'],
    },
  ],
};
