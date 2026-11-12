import { TopicContent } from '../../types';

export const ctServiceContent: TopicContent = {
  title: 'Safety devices, leak-tightness and troubleshooting',
  subtitle: 'A year after commissioning, the juice room climbs to 7 °C and the compressors never stop. Ismaël Touré measures, Ousmane interprets: superheat, subcooling, sight glass. Then they review the safety devices, leak detection and the maintenance plan together.',
  blocks: [
    { type: 'scene', text: 'Month 20 · Tropica machinery room, with Paul and Ismaël Touré' },
    {
      type: 'objectives',
      items: [
        'Measure superheat and subcooling and interpret them.',
        'Diagnose common faults from pressures and temperatures.',
        'Know the safety devices of a refrigeration plant and their settings.',
        'Size leak detection for a machinery room.',
        'Organise maintenance and the plant logbook.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '18 K', label: 'superheat measured (6 K expected)' },
        { value: '9 kg', label: 'of R513A lost through a leak' },
        { value: '≈ 5.7 t CO₂ eq.', label: 'released to the atmosphere' },
        { value: '0.75 kg/m³', label: 'charge per machinery-room volume: detector required' },
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Paul Ndiaye (maintenance)',
      role: 'client',
      text: 'The room is at 7 °C, all three compressors run non-stop. The on-call technician wants to add gas. Shall I let him?',
    },
    {
      type: 'dialogue',
      speaker: 'Ousmane Cissé',
      role: 'engineer',
      text: 'Not before measuring. Adding refrigerant without finding out why it’s missing means paying for the same top-up every two months. Ismaël is coming with his gauges and probes: we’ll look at superheat and subcooling, the refrigeration technician’s two thermometers.',
    },

    { type: 'heading', text: '1 · Measure before acting' },
    {
      type: 'calc',
      title: 'Ismaël’s readings on the 2 °C room',
      steps: [
        { label: 'Low pressure read on the gauge and corresponding saturation temperature', formula: 'LP = 1.1 bar g   →   θ_{sat} ≈ −12 °C  (expected: −6 °C)' },
        { label: 'Superheat: temperature measured on the suction line minus saturation', formula: 'SH = θ_{suct} − θ_{sat} = 6 − (−12) = 18 K  (expected: 6 K)' },
        { label: 'High pressure and subcooling at the condenser outlet', formula: 'HP = 12.3 bar g (≈ 47 °C)   ;   SC = 47 − 47 = 0 K  (expected: 4 K)' },
        { label: 'Sight glass', formula: 'constant bubbles' },
      ],
      result: 'Evaporation too low, very high superheat, no subcooling, bubbles: refrigerant is missing',
    },
    {
      type: 'table',
      headers: ['Symptom', 'LP', 'HP', 'Superheat', 'Subcooling', 'Likely cause'],
      rows: [
        ['Refrigerant shortage', 'low', 'low or normal', 'high', 'low, bubbles', 'leak'],
        ['Fouled condenser, fan stopped', 'high', 'very high', 'normal', 'normal or high', 'air-side exchange'],
        ['Iced evaporator, fan stopped', 'low', 'low', 'low (liquid risk)', 'normal', 'defrost, motor'],
        ['Blocked filter-drier, closed expansion valve', 'low', 'normal', 'high', 'high', 'restriction'],
        ['Overcharge', 'high', 'high', 'low', 'high', 'charge not weighed'],
        ['Worn compressor', 'high', 'low', '—', '—', 'valves or scrolls'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Ismaël Touré (refrigeration technician)',
      role: 'team',
      text: 'Found it: the capillary tube of the pressure switch rubs against the compressor casing and has worn through. Vibration, day and night for a year. We recover what’s left, I redo the connection with an anti-vibration loop, nitrogen pressure test, evacuation, and I recharge on the scales.',
    },
    {
      type: 'calc',
      title: 'What the leak cost',
      steps: [
        { label: 'Refrigerant recharged, weighed', formula: 'm = 9 kg of R513A' },
        { label: 'Greenhouse effect', formula: '9 × 631 ≈ 5 700 kg CO₂ eq.  ≈ 5.7 t' },
        { label: 'For weeks, evaporation at −12 °C instead of −6 °C: lower efficiency', formula: '≈ 2 to 3 % per kelvin   →   ≈ − 15 %' },
      ],
      result: 'A small leak costs refrigerant, electricity, product quality and climate: find it, don’t compensate for it',
    },
    { type: 'fiche', id: 'abc-troubleshooting', why: 'Troubleshooting method and symptom tables.' },

    { type: 'heading', text: '2 · The rack’s safety devices' },
    {
      type: 'table',
      headers: ['Safety device', 'Role', 'Setting or criterion'],
      rows: [
        ['High-pressure switch', 'stop before the pressure becomes dangerous', 'trip ≈ 19 bar g, manual reset'],
        ['Low-pressure switch', 'protect against refrigerant shortage and freezing', 'cut-out ≈ 0.3 bar g'],
        ['Phase monitor', 'missing phase or reversed sequence', 'a scroll running backwards is destroyed within minutes'],
        ['Motor thermal protection', 'winding overheating', 'built into the compressor'],
        ['Receiver safety valve', 'last line of defence in a fire', 'set at the maximum allowable pressure PS'],
        ['Room safety thermostat', 'alarm if the temperature drifts', 'alarm at +6 °C, SMS report'],
      ],
    },
    {
      type: 'note',
      text: 'The phase monitor is a nod to the electrical course: on a three-phase scroll compressor, swapping two phases does not just make it “run backwards harmlessly” like a fan. A scroll compresses in one direction only; reversed, it heats up, gets noisy and destroys itself. Awa provided a phase-monitoring relay in the rack’s control panel.',
    },

    { type: 'heading', text: '3 · Leak detection in the machinery room' },
    {
      type: 'calc',
      title: 'Does the charge exceed the room’s practical limit?',
      steps: [
        { label: 'Total system charge (rack, receiver, lines, evaporators)', formula: 'm ≈ 45 kg of R513A' },
        { label: 'Machinery room volume (5 × 4 × 3 m)', formula: 'V = 60 m³' },
        { label: 'Concentration if the whole charge leaked into the room', formula: '\\frac{m}{V} = \\frac{45}{60} = 0.75 kg/m³' },
        { label: 'Practical limit for an A1 refrigerant of this type (EN 378), of the order of', formula: '0.3 kg/m³ < 0.75 kg/m³  ✗' },
      ],
      result: 'Refrigerant detector required in the room, linked to an alarm and mechanical ventilation; door opening outwards',
    },
    {
      type: 'note',
      text: 'An A1 refrigerant is neither toxic nor flammable, but it is heavier than air: in large quantities it displaces oxygen at floor level. In a closed room, a massive leak can asphyxiate a technician crouching by the compressor. Hence detection, low-level ventilation and no lone working.',
    },

    { type: 'heading', text: '4 · The maintenance plan' },
    {
      type: 'table',
      headers: ['Frequency', 'Task', 'By whom'],
      rows: [
        ['Daily', 'room temperature readings, alarm check', 'Paul (Tropica maintenance)'],
        ['Monthly', 'condenser cleaning, frost and condensate check', 'Paul'],
        ['Quarterly', 'pressures, superheat, subcooling, currents, sight glass', 'refrigeration technician'],
        ['Yearly', 'leak check of the whole circuit, detector and pressure-switch tests, oil analysis', 'certified technician'],
        ['At every intervention', 'logbook entry: refrigerant added or recovered, leaks, repairs', 'technician'],
      ],
    },
    {
      type: 'decision',
      title: 'Maintenance organisation',
      choice: 'Preventive maintenance contract with Polar Froid, daily readings by Paul, a plant logbook and remote temperature monitoring',
      reasons: [
        'The leak would have been spotted weeks earlier with a quarterly superheat reading.',
        'The logbook proves compliance and tracks refrigerant consumption year on year.',
        'Monitoring raises the alarm before products are at risk.',
      ],
      rejected: 'Call-out repairs only: cheaper on paper, but every breakdown becomes an emergency and refrigerant is topped up without looking for the leak.',
    },
    { type: 'fiche', id: 'abc-commissioning', why: 'Reference readings, to compare at each visit.' },

    { type: 'heading', text: '5 · What the standards say' },
    {
      type: 'norms',
      title: 'Operation and leak-tightness',
      rows: [
        { norm: 'EN 378-3 / -4', rule: 'Machinery room, detection, ventilation (part 3); maintenance, repair, recovery (part 4).', result: 'detector + ventilation' },
        { norm: 'EU Regulation 2024/573', rule: 'Leak checks: 5 to 50 t CO₂ eq. every 12 months (24 with detection), 50 to 500 t every 6 months.', result: '28 t: yearly' },
        { norm: 'ISO 5149-4', rule: 'Operation, maintenance, repair and recovery (international framework).', result: 'logbook required' },
        { norm: 'ASHRAE 15 / EPA Section 608', rule: 'Machinery-room detectors and ventilation; leak-rate repair thresholds and technician certification (United States).', result: 'same logic' },
      ],
    },
    {
      type: 'regional',
      text: 'For lack of recovery units, many systems are still “vented” before repair. That is forbidden by the national regulations derived from the Montreal Protocol, and costly: the lost refrigerant must be bought again. Polar Froid has a recovery unit and recovery cylinders; recovered, filtered refrigerant can be reused in the same system.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'Superheat = suction temperature − LP saturation; subcooling = HP saturation − liquid temperature.',
        'Refrigerant shortage: low LP, high superheat, zero subcooling, bubbles in the sight glass.',
        'Never recharge without finding and repairing the leak.',
        'HP and LP switches, phase monitor, safety valve: each device has its role and setting.',
        'Machinery room: detection and ventilation once the charge exceeds the practical limit.',
        'Preventive maintenance and a logbook: the leak shows up before the breakdown.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'LP = 1.7 bar g (saturation −6 °C), suction at −4 °C, HP = 16 bar g (saturation 55 °C), liquid at 48 °C. Diagnosis?',
      solution: [
        'Superheat = −4 − (−6) = 2 K: low. Subcooling = 55 − 48 = 7 K: high. Very high HP.',
        'High head pressure with an apparently correct charge: fouled condenser or stopped fan. The low superheat also signals a risk of liquid return: clean and check the fans before anything else.',
      ],
    },
    {
      type: 'exercise',
      question: 'A 100 m³ machinery room holds a 25 kg system of an A1 refrigerant whose practical limit is 0.3 kg/m³. Is a detector required?',
      solution: ['25 / 100 = 0.25 kg/m³ ≤ 0.3 kg/m³.', 'The limit is not exceeded: a detector is not required by this criterion, but it is still recommended to spot leaks early.'],
    },
  ],
};
