import { TopicContent } from '../../types';
import { fig } from '../../topics/clim/fig';

export const coDuctsContent: TopicContent = {
  title: 'Ducts, diffusers, noise and controls',
  subtitle: 'The air is treated; it now has to reach every office without draughts, noise or condensation, and ten VRF outdoor units, 70 indoor units and a fresh-air unit must be run as one system. Ousmane sizes the ducts with the friction chart, chooses the diffusers and writes the control description.',
  blocks: [
    { type: 'scene', text: 'Month 6 · Shop drawings, with Didier Kouassi and Awa' },
    {
      type: 'objectives',
      items: [
        'Size a duct by velocity and check its pressure drop on the chart.',
        'Calculate a fan’s power and its SFP.',
        'Choose diffusers: airflow, throw, residual velocity, noise.',
        'Avoid condensation on cold ducts.',
        'Organise the controls and building management system (BMS) of an air-conditioned building.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '800 × 500 mm', label: 'fresh-air riser, 7 m/s' },
        { value: '≈ 3 kW', label: 'supply fan, SFP ≈ 1.1' },
        { value: 'NR 30', label: 'acoustic target in the meeting room' },
        { value: '50 mm', label: 'insulation on rooftop ducts' },
        { value: '60 %', label: 'VRF capacity limit on the generator' },
      ],
    },

    { type: 'heading', text: '1 · Sizing the ducts' },
    {
      type: 'text',
      text: 'First choose a sensible air velocity: too slow, the duct is huge and expensive; too fast, it whistles and the fan consumes more. The IEPF guide gives recommended velocities by location. The cross-section follows, then the chart gives the pressure drop per metre.',
    },
    fig('p143_0', 'Table 5.7 of the IEPF guide — recommended air velocities at the start of networks (sheet metal and glass fibre)'),
    {
      type: 'calc',
      title: 'Fresh-air riser and branches',
      steps: [
        { label: 'Riser: 10,000 m³/h at 7 m/s', formula: 'S = \\frac{10 000}{3 600 × 7} ≈ 0.40 m²   →   800 × 500 mm' },
        { label: 'Equivalent diameter of the rectangular duct (to read the chart)', formula: 'D_e = 1.3 × \\frac{(a × b)^{0.625}}{(a + b)^{0.25}} ≈ 690 mm' },
        { label: 'Floor branch: 2,000 m³/h at 5 m/s', formula: 'S = \\frac{2 000}{3 600 × 5} ≈ 0.11 m²   →   circular Ø 375 mm' },
        { label: 'Meeting-room branch: 750 m³/h at 4 m/s', formula: 'S ≈ 0.052 m²   →   Ø 250 mm' },
      ],
      result: 'Pressure drops read on the chart: ≈ 0.8 Pa/m in the riser, ≈ 1 Pa/m in the branches',
    },
    fig('p141_0', 'Figure 5.32 of the guide — friction chart for air in circular ducts: enter with the airflow and the diameter'),
    {
      type: 'calc',
      title: 'Supply fan of the fresh-air unit',
      steps: [
        { label: 'Pressure drops of the index path', formula: 'wheel 150 + filters 200 + coil 150 + heat pipe 80 + network 160 + terminal 30 = 770 Pa' },
        { label: 'Power drawn (overall efficiency ≈ 0.7)', formula: 'P = \\frac{q × Δp}{η} = \\frac{2.78 × 770}{0.7} ≈ 3.1 kW' },
        { label: 'Specific fan power', formula: 'SFP = \\frac{P}{q} = \\frac{3.1}{2.78} ≈ 1.1 kW/(m³/s)' },
      ],
      result: 'SFP ≈ 1.1: in the best common class (SFP 2 or better); variable-speed EC fans',
    },

    { type: 'heading', text: '2 · Diffusers, comfort and noise' },
    { type: 'illustration', name: 'clim-airflow', props: { variant: 'good' }, caption: 'The jet follows the ceiling and falls gently: under 0.2 m/s in the occupied zone' },
    fig('p145_0', 'Figure 5.33 — diffuser types: multi-cone, swirl, perforated, linear, nozzle, grille, floor outlet'),
    {
      type: 'calc',
      title: 'Meeting-room diffusers (60 m²)',
      steps: [
        { label: 'Air to diffuse: indoor unit (1,000 m³/h) + fresh air (up to 750 m³/h)', formula: 'q ≈ 1 750 m³/h' },
        { label: '4 four-way ceiling diffusers, 600 × 600', formula: 'q ≈ 440 m³/h per diffuser' },
        { label: 'Throw to 0.25 m/s read in the catalogue, on a 3.5 m grid', formula: 'L ≈ 2.2 m ≤ \\frac{3.5}{2} + 0.5' },
        { label: 'Catalogue sound level at this airflow', formula: 'NR ≈ 27 ≤ NR 30 ✓' },
      ],
      result: '4 four-way diffusers: jets that meet without dropping on heads, and a sound level fit for a meeting room',
    },
    fig('p074_0', 'Table 3.1 of the guide — recommended noise levels by room type'),
    fig('p088_0', 'Table 4.1 — maximum air velocities in the occupied zone'),

    { type: 'heading', text: '3 · Cold ducts and condensation' },
    {
      type: 'calc',
      title: 'Insulation of the rooftop fresh-air duct',
      steps: [
        { label: 'Air in the duct 18 °C; outdoors 32 °C, dew point ≈ 28 °C', formula: 'we need θ_{surface} > 28 °C' },
        { label: 'Resistances: 50 mm insulation (λ = 0.035) and outside exchange (h ≈ 8 W/m²·K)', formula: 'R_{ins} = \\frac{0.05}{0.035} ≈ 1.43   ;   R_{se} = \\frac{1}{8} = 0.125' },
        { label: 'Insulation surface temperature', formula: 'θ_s = 32 − (32 − 18) × \\frac{0.125}{1.43 + 0.125} ≈ 30.9 °C > 28 °C ✓' },
        { label: 'With only 13 mm of insulation', formula: 'θ_s ≈ 28.5 °C: barely above the dew point, ✗ at the slightest defect' },
      ],
      result: '50 mm insulation with vapour barrier and metal cladding on the roof; 25 mm in the ceilings (return air at 26 °C, dew point ≈ 15 °C)',
    },

    { type: 'heading', text: '4 · Controls and supervision' },
    {
      type: 'table',
      headers: ['Function', 'How', 'Gain'],
      rows: [
        ['Time scheduling', 'on 7 am – 7 pm, restart 30 min before arrival', 'no cooling at night and weekends'],
        ['Set point 26 °C ± 1 °C', 'adjustable by occupants within that range only', 'comfort without drift'],
        ['Override', '“late meeting” button: 2 h of operation', 'no forgotten AC'],
        ['Demand-controlled ventilation', 'CO₂ sensor + damper in the meeting room', 'average fresh-air flow halved'],
        ['Load shedding on generator', 'changeover contact to the BMS: VRF limited to 60 %', 'the generator is not overloaded'],
        ['Metering', 'energy per floor and per system', 'tracking, drift detection'],
        ['Alarms', 'VRF faults, clogged filters, R32 detectors', 'maintenance before breakdown'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'team',
      text: 'Load shedding is essential for me: on the generator, if the ten VRFs restart together at full capacity, the generator stalls. I’m sending you the “on generator” contact from the changeover switch, and the BMS limits the compressors to 60 % until we’re back on the grid.',
    },
    {
      type: 'decision',
      title: 'Control architecture',
      choice: 'Central VRF controller linked to the BMS through a BACnet gateway; written control description, tested at handover',
      reasons: [
        'A single station to control, schedule, monitor and meter: Kora’s operator doesn’t have to juggle software.',
        'BACnet is an open protocol: another integrator can take over the system.',
        'The control description sets out every sequence (start-up, load shedding, alarms): it serves as a contract and a test list.',
      ],
      rejected: 'Individual remotes only: everyone sets 18 °C, nobody switches off in the evening.',
    },
    { type: 'fiche', id: 'abc-control', why: 'Controls: from on/off to PID and BMS.' },
    { type: 'fiche', id: 'clim-room-air', why: 'Distributing air well in the room.' },
    { type: 'fiche', id: 'clim-central-networks', why: 'Ducts and pipework: velocities and pressure drops.' },

    { type: 'heading', text: '5 · What the standards say' },
    {
      type: 'norms',
      title: 'Air networks and controls',
      rows: [
        { norm: 'EN 1505 / EN 12237 / EN 1507', rule: 'Dimensions and leakage classes of circular and rectangular ducts.', result: 'class C required' },
        { norm: 'SMACNA / ASHRAE Fundamentals', rule: 'Duct construction, sizing methods (equal friction, static regain).', result: 'same approach' },
        { norm: 'EN 12599 / ASHRAE 111', rule: 'Testing and balancing at handover: airflows within ± 10 %.', result: 'balancing report' },
        { norm: 'EN ISO 52120-1 (ex-EN 15232) / ISO 16484, ASHRAE 135', rule: 'Building automation classes A to D; BACnet protocol.', result: 'class B targeted' },
      ],
    },
    {
      type: 'regional',
      text: 'Many buildings in the region have a BMS installed but never used: nobody was trained, passwords are lost, alarms are ignored. Ousmane writes into the contract a training course for Kora’s team, a year of support and an up-to-date control description. A working BMS commonly saves 10 to 20 % of air-conditioning energy.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'Duct: recommended velocity → cross-section → equivalent diameter → pressure drop on the chart.',
        'Fan power = airflow × pressure ÷ efficiency; SFP measures its efficiency.',
        'Diffuser: airflow, throw and residual velocity in the occupied zone, sound level.',
        'A cold duct in hot, humid air must be insulated beyond the dew point, with a vapour barrier.',
        'Controls: schedules, bounded set points, demand-controlled ventilation, load shedding, metering, alarms.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'A branch must carry 3,000 m³/h at 5 m/s. What circular duct diameter?',
      solution: ['S = 3,000 / (3,600 × 5) ≈ 0.167 m².', 'D = √(4 × 0.167 / π) ≈ 0.46 m: take 450 or 500 mm depending on the chart and noise.'],
    },
    {
      type: 'exercise',
      question: 'The unit’s filter clogs and its pressure drop rises from 200 to 400 Pa. What becomes of the fan power at constant airflow?',
      solution: ['Δp = 770 + 200 = 970 Pa.', 'P = 2.78 × 970 / 0.7 ≈ 3.9 kW instead of 3.1 kW: + 25 %. Hence the clogged-filter alarm.'],
    },
  ],
};
