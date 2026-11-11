import { TopicContent } from '../../types';

export const villaLoadContent: TopicContent = {
  title: 'The villa’s power balance',
  subtitle: 'Adding up every appliance gives 15.5 kW. Yet Awa will recommend 12 kVA. The reason fits in a few words: not everything runs at the same time.',
  blocks: [
    { type: 'scene', text: 'Week 2 · Design office' },
    {
      type: 'text',
      text: 'Back at the office, Awa goes through the Mensahs’ questionnaire and lists each use with its power. This is the “installed power”: what the house would draw if everything ran flat out at the same instant.',
    },
    { type: 'illustration', name: 'villa-plan', props: { focus: 'ac' }, caption: 'The four air conditioners: the largest load in the house' },

    { type: 'heading', text: '1 · Installed power' },
    {
      type: 'table',
      headers: ['Use', 'Detail', 'Installed power'],
      rows: [
        ['Air conditioning', 'living room 18,000 BTU (1.8 kW) + 3 bedrooms 9,000 BTU (0.9 kW)', '4.50 kW'],
        ['Electric oven', '', '2.50 kW'],
        ['Washing machine', 'water heating included', '2.00 kW'],
        ['Water heater', '100 L', '1.50 kW'],
        ['Borehole pump', '1.1 kW output, 80% efficiency', '1.40 kW'],
        ['Living-room and bathroom sockets', 'TV, iron, misc.', '1.30 kW'],
        ['Kitchen sockets', 'microwave, fridge, freezer', '1.30 kW'],
        ['Bedroom sockets', 'computers, chargers, fans', '0.60 kW'],
        ['LED lighting', '20 lighting points', '0.36 kW'],
        ['Total', '', '15.46 kW'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Koffi Mensah',
      role: 'client',
      text: 'So we need 16 kVA, is that it?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'No, and that’s where my job earns its keep. Do you iron while the oven, the washing machine and all four air conditioners run flat out? Never. If I design for 15.5 kW, you pay all your life for an oversized subscription, for a situation that never happens.',
    },

    { type: 'heading', text: '2 · Diversity: not everything runs together' },
    {
      type: 'text',
      text: 'For each family of uses, Awa applies a simultaneity factor: the share of the power you can reasonably find running at the same time, at the worst moment of the day. For a house that is the evening, when everyone comes home: air conditioners on, cooking, water heater.',
    },
    {
      type: 'table',
      headers: ['Use', 'Installed', 'Factor', 'Retained', 'Why'],
      rows: [
        ['Lighting', '0.36 kW', '1', '0.36 kW', 'in the evening, almost everything is on'],
        ['Sockets (3 circuits)', '3.20 kW', '0.4', '1.28 kW', 'iron and microwave only run a few minutes'],
        ['Oven', '2.50 kW', '0.5', '1.25 kW', 'the thermostat cuts out once at temperature'],
        ['Washing machine', '2.00 kW', '0.5', '1.00 kW', 'it only heats at the start of the cycle'],
        ['Water heater', '1.50 kW', '1', '1.50 kW', 'it may heat at the worst moment'],
        ['Air conditioning', '4.50 kW', '0.75', '3.38 kW', 'inverter compressors don’t all run flat out'],
        ['Pump', '1.40 kW', '1', '1.40 kW', 'it starts when the tank is low, at any time'],
        ['Total', '15.46 kW', '', '10.17 kW', ''],
      ],
    },
    { type: 'formula', text: 'P_{retained} = Σ (P_{installed} × factor) = 10.17 kW' },
    { type: 'formula', text: 'S = \\frac{P}{cos φ} = \\frac{10.17}{0.9} ≈ 11.3 kVA  →  12 kVA subscription' },
    {
      type: 'dialogue',
      speaker: 'Esther Mensah',
      role: 'client',
      text: 'And if one day everything comes on at once?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'The service breaker will trip, like a safety fuse. You reset it after switching one appliance off. With these factors, it’s very rare. And if your habits change, you can ask for a higher subscription without any works, because the cables I’m going to specify will allow it.',
    },
    { type: 'fiche', id: 'demand-diversity', why: 'Demand factor, diversity factor and cascaded simultaneity.' },

    { type: 'heading', text: '3 · Checking with another method' },
    {
      type: 'text',
      text: 'A good engineer never trusts a single calculation. Awa checks the order of magnitude with the per-square-metre ratio method, used at preliminary design when the appliances are not yet known.',
    },
    { type: 'formula', text: '160 m² × 70 VA/m² ≈ 11.2 kVA' },
    {
      type: 'text',
      text: 'Both methods give about 11 kVA: the result is consistent. Had the gap been large, Awa would have looked for the mistake before going further.',
    },
    { type: 'fiche', id: 'load-estimation', why: 'The VA/m² method and the tables by building type.' },

    { type: 'heading', text: '4 · Single-phase or three-phase?' },
    {
      type: 'table',
      headers: ['', 'Single-phase 12 kVA', 'Three-phase 12 kVA'],
      rows: [
        ['Service current', '12,000 / 230 ≈ 52 A', '12,000 / (√3 × 400) ≈ 17 A per phase'],
        ['Service cable', 'large (about 16 mm²)', 'smaller, on 4 conductors'],
        ['Pump and AC starting', 'voltage dip on the whole house', 'spread out, less noticeable'],
        ['Loss of one network phase', 'the whole house is dark', 'two thirds of the circuits stay on'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'I recommend three-phase 12 kVA. All your appliances stay at 230 V; I’ll spread them over the three phases when I lay out the board. And I’ll keep 20% spare space in the board for solar or a generator later.',
    },
    {
      type: 'regional',
      text: 'Utilities offer standard power ratings (for example in steps of a few kVA) and often cap single-phase above a certain level. The connection request should be made early, as connection lead times can reach several weeks or even months: Awa advises the Mensahs to file it as soon as the structural works start.',
    },
    { type: 'fiche', id: 'hvac-mechanical', why: 'How to estimate the power of air conditioners, pumps and motors.' },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'Installed power = sum of all appliances; it never occurs in full.',
        'Apply a simultaneity factor per use, thinking of the worst moment of the day.',
        'Check with a second method (VA/m²): the orders of magnitude must agree.',
        'Convert kW to kVA with cos φ, then choose the standard rating just above.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'The Mensahs finally decide to install a 6 kW electric hob (factor 0.5). What happens to the subscription?',
      solution: [
        'Retained P = 10.17 + 6 × 0.5 = 13.17 kW.',
        'S = 13.17 / 0.9 ≈ 14.6 kVA: you must move to the next standard rating, for example 15 kVA three-phase.',
        'That is exactly why the cooking question is asked at the first meeting.',
      ],
    },
    {
      type: 'exercise',
      question: 'Why is the pump’s factor 1, when it only runs one hour a day?',
      solution: [
        'The simultaneity factor does not measure running time, but the probability of running at peak time.',
        'The pump starts when the tank is low, regardless of the hour: it may run right during the evening peak. So it counts in full.',
        'The duration (1 h/day) is used for the energy and the bill, not for the power.',
      ],
    },
  ],
};
