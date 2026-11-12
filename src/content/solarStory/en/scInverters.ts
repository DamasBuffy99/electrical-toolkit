import { TopicContent } from '../../types';

export const scInvertersContent: TopicContent = {
  title: 'Inverter-chargers and generator',
  subtitle: 'With no grid, the inverters make the 230/400 V, day and night. Fanta must choose them for a 17 kW peak in a 45 °C room, a pump drawing 9 kW, a PV array 80 m away and a generator that should now only start as backup.',
  blocks: [
    { type: 'scene', text: 'Month 2 · Design office, with Awa Diallo' },
    {
      type: 'objectives',
      items: [
        'Choose the architecture of a three-phase off-grid system: AC or DC coupling.',
        'Size the inverter-chargers at the room temperature, phase by phase.',
        'Check the starting surge of the largest motor.',
        'Set up generator management and shedding of non-critical loads.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '6 × SI 8.0H', label: 'two clusters, Multicluster-Box' },
        { value: '32.6 kW', label: 'continuous at 45 °C' },
        { value: '22 kW', label: 'peak on the pump’s phase' },
        { value: '30 %', label: 'state of charge that starts the generator' },
      ],
    },

    { type: 'heading', text: '1 · The architecture' },
    {
      type: 'dialogue',
      speaker: 'Dr Mamadou Sy',
      role: 'client',
      text: 'The only clear ground for the panels is near the borehole, 80 metres from the plant room. Is that a problem?',
    },
    {
      type: 'dialogue',
      speaker: 'Fanta Coulibaly',
      role: 'engineer',
      text: 'Not if we carry the energy as AC. The grid-tie inverters will sit near the panels, and a simple 400 V link will connect them to the inverter-chargers in the plant room. At low-voltage DC, 80 metres would need enormous cables.',
    },
    {
      type: 'decision',
      title: 'Off-grid architecture',
      choice: 'AC coupling: Sunny Island inverter-chargers + 48 V battery in the plant room, Sunny Tripower grid-tie inverters near the array, generator connected to the Sunny Islands',
      reasons: [
        'Distant panels: the link is 400 V AC, with ordinary cables.',
        'A scalable system: more grid-tie inverters and panels can be added if the centre grows.',
        'The Sunny Islands control the generator: automatic start and stop by state of charge.',
      ],
      rejected: 'DC coupling with MPPT controllers in the plant room: better storage efficiency, but 80 m of very heavy low-voltage DC cables.',
    },
    { type: 'fiche', id: 'pv-coupling', why: 'DC or AC coupling: efficiencies, scalability, distant panels.' },

    { type: 'heading', text: '2 · How many inverter-chargers?' },
    { type: 'image', source: require('../../../../assets/solar/inverters/power-durations.webp'), caption: 'A Sunny Island “8.0H” only holds 6 kW continuously at 25 °C, and 5.43 kW at 45 °C (figure from the guide, in French)', height: 240 },
    {
      type: 'calc',
      title: 'Phase-by-phase check (plant room at 45 °C)',
      steps: [
        { label: 'Continuous power required per phase, 1.2 margin', formula: 'P = 1.2 × 5.7 ≈ 6.8 kW' },
        { label: 'One SI 8.0H per phase at 45 °C', formula: '5.43 kW < 6.8 kW  ✗' },
        { label: 'Peak on L1: running load + pump start', formula: '5.7 + 9 = 14.7 kW > 11 kW for 3 s  ✗' },
        { label: 'Two SI 8.0H per phase', formula: '10.9 kW ≥ 6.8 kW ✓   ;   2 × 11 = 22 kW ≥ 14.7 kW ✓' },
      ],
      result: '6 Sunny Island 8.0H: two clusters of three, linked by a Multicluster-Box',
    },
    { type: 'image', source: require('../../../../assets/solar/inverters/cluster-example.webp'), caption: '3 units: undersized at 45 °C and tripping at pump start; 6 units: correct (figure from the guide, in French)', height: 260 },
    {
      type: 'decision',
      title: 'Inverter-chargers',
      choice: '6 Sunny Island 8.0H in multicluster, shaded and ventilated plant room',
      reasons: [
        'The “8.0H” name is the 30-minute power: continuously at 45 °C, only 5.43 kW per unit remain.',
        'Two units per phase carry the load and the pump start with margin.',
        'One unit can fail without stopping the centre: the phase runs on the other unit, at reduced power.',
      ],
      rejected: 'Three Sunny Islands chosen by their commercial name: outages in the hot hours and at every pump start. Alternative studied: three MultiPlus-II 48/15000, one per phase, to be confirmed on the 45 °C derating curve.',
    },
    { type: 'fiche', id: 'pv-inverter-sizing', why: 'Continuous power, peak, temperature: the full method.' },
    { type: 'fiche', id: 'pv-sma-victron', why: 'The SMA and Victron ranges, clusters and multiclusters.' },

    { type: 'heading', text: '3 · The generator, controlled by the inverters' },
    {
      type: 'calc',
      title: 'Limiting the power drawn from the generator',
      steps: [
        { label: 'Existing generator: 40 kVA, i.e. 32 kW at PF 0.8; loaded to 80 % at most', formula: 'P_{gen} ≤ 0.8 × 32 ≈ 25.6 kW' },
        { label: 'The Sunny Islands charge the battery while supplying the centre: without a limit they would draw', formula: '17 kW + charging ≈ 17 + 30 > 40 kW  ✗' },
        { label: 'Input current limit set in the Sunny Islands', formula: 'I = \\frac{25 600}{3 × 230} ≈ 37 A per phase' },
      ],
      result: 'Generator input current limited to 37 A per phase: the generator runs near its best efficiency, without overload',
    },
    {
      type: 'table',
      headers: ['Management setting', 'Value', 'Effect'],
      rows: [
        ['Generator start', 'state of charge ≤ 30 %', 'never an empty battery'],
        ['Generator stop', 'state of charge ≥ 80 %, or enough sun', 'solar finishes the charge, for free'],
        ['Forced start', 'load > 28 kW for 2 min', 'exceptional peak covered'],
        ['Shedding of non-critical loads', 'state of charge ≤ 20 %', 'lab ACs and housing cut, vital loads kept'],
        ['Equalisation charge (if lead-acid)', 'not applicable to lithium', '—'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'team',
      text: 'I’m splitting the board in two: a “vital” busbar (maternity, cold chain, oxygen, lighting) and a “non-critical” one switched by a contactor the Sunny Islands open at 20 % state of charge. As at Clinique Espoir, it is the hierarchy of loads that guarantees continuity.',
    },

    { type: 'heading', text: '4 · What the standards say' },
    {
      type: 'norms',
      title: 'Off-grid systems and hybrid generators',
      rows: [
        { norm: 'IEC 62257-9-2', rule: 'Rural electrification micro-grids: design, safety, protection.', result: 'architecture and protection' },
        { norm: 'IEC 62109-2', rule: 'Particular requirements for inverters, including grid-forming functions.', result: 'certified Sunny Islands' },
        { norm: 'ISO 8528', rule: 'Generating sets: power ratings (standby, prime, continuous) and performance.', result: 'generator at prime power' },
        { norm: 'IEEE 1547.4', rule: 'Design and operation of island systems with distributed generation.', result: 'island management' },
      ],
    },
    {
      type: 'regional',
      text: 'In rural health centres, the plant room is often a simple metal shelter in the sun: 50 °C in the afternoon. Fanta has a block-built room constructed under the shade of the porch, with high and low ventilation and a thermostat-controlled extractor fan. Gaining 5 to 10 °C in the room means gaining inverter power and years of battery life.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'Distant panels or a system meant to grow: AC coupling.',
        'Inverter-chargers sized continuously at the room temperature, phase by phase, then checked against the largest motor’s surge.',
        'The generator is controlled by the inverters: start on low state of charge, stop when solar can finish.',
        'Limit the current drawn from the generator; shed non-critical loads when the battery runs low.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'If the room were air-conditioned at 30 °C (≈ 5.9 kW continuous per SI 8.0H), would one Sunny Island per phase be enough?',
      solution: ['Continuous: 5.9 kW < 6.8 kW ✗.', 'Peak: 14.7 kW > 11 kW ✗. Even cool, two per phase are needed: here the pump sets the number.'],
    },
    {
      type: 'exercise',
      question: 'With a 60 kVA generator, what input current limit should be set per phase?',
      solution: ['60 kVA × 0.8 = 48 kW; 80 %: 38.4 kW.', 'I = 38,400 / (3 × 230) ≈ 56 A per phase.'],
    },
  ],
};
