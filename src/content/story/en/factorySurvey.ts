import { TopicContent } from '../../types';

export const factorySurveyContent: TopicContent = {
  title: 'Plant visit: the machine list',
  subtitle: 'Ibrahim Traoré is expanding his fruit-juice plant. Before drawing anything, Awa walks round the workshops, reads the motor nameplates and turns kilowatts into amps.',
  blocks: [
    { type: 'scene', text: 'Month 1 · Tropica plant, industrial zone' },
    {
      type: 'text',
      text: 'Ibrahim Traoré runs Tropica, a fruit-juice plant working two shifts. He wants to double production: a new bottling line, a new pasteuriser, a bigger cold room. His maintenance manager, Paul Ndiaye, welcomes Awa with a list scribbled in a notebook.',
    },
    { type: 'illustration', name: 'factory-sld', props: { highlight: 'all' }, caption: 'The single-line diagram of the future installation: from the 20 kV network to the machines' },
    {
      type: 'dialogue',
      speaker: 'Ibrahim Traoré',
      role: 'client',
      text: 'Our 160 kVA transformer already runs hot in the afternoon, and the main breaker trips two or three times a month. With the new line I suppose we need a bigger one. How big?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Before answering, I need to see every machine. In a plant almost everything is a motor, and a motor isn’t just its kilowatts: you need to know how it starts, how long it runs and what it does to the network. Paul, shall we walk round together?',
    },

    { type: 'heading', text: '1 · Reading a motor nameplate' },
    {
      type: 'text',
      text: 'In front of the air compressor, Awa photographs the nameplate and explains to Ibrahim what it says.',
    },
    {
      type: 'table',
      headers: ['Nameplate item', 'Value (compressor)', 'What it means'],
      rows: [
        ['Power', '55 kW', 'mechanical power delivered to the shaft, not the power drawn from the network'],
        ['Voltage', '400 V Δ / 690 V Y', 'connected in delta on our 400 V network'],
        ['Rated current', '98 A', 'current drawn at full load at 400 V'],
        ['cos φ', '0.86', 'active share of the current'],
        ['Efficiency η', '94%', 'the remaining 6% becomes heat inside the motor'],
        ['IP rating / insulation class', 'IP55 / F', 'protection against dust and water jets; allowed temperature'],
      ],
    },
    { type: 'formula', text: 'I = \\frac{P}{√3 × U × η × cos φ} = \\frac{55,000}{√3 × 400 × 0.94 × 0.86} ≈ 98 A' },
    {
      type: 'dialogue',
      speaker: 'Paul Ndiaye (maintenance)',
      role: 'team',
      text: 'We count “2 amps per kilowatt” to go fast. Is that wrong?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'It’s a very good field rule at 400 V: 55 kW gives about 110 A, close to the real 98 A. It’s for checking an order of magnitude. For sizing, I take the nameplate value or the exact calculation.',
    },
    { type: 'fiche', id: 'electrical-basics', why: 'Active and apparent power, efficiency and cos φ.' },

    { type: 'heading', text: '2 · The machine list' },
    {
      type: 'table',
      headers: ['Machine', 'P (kW)', 'η', 'cos φ', 'I (A)', 'Planned starting'],
      rows: [
        ['Air compressor', '55', '0.94', '0.86', '98', 'to be decided (step 2)'],
        ['4 process pumps (each)', '15', '0.91', '0.84', '28', 'direct-on-line'],
        ['Cold-room refrigeration unit', '30', '0.92', '0.85', '55', 'built into the unit'],
        ['Pasteuriser (heating elements)', '60', '1', '1', '87', 'no inrush'],
        ['2 conveyors and filler (each)', '7.5', '0.89', '0.82', '15', 'variable-speed drive'],
        ['Clean-in-place (CIP) pump', '11', '0.90', '0.84', '21', 'direct-on-line'],
        ['Lighting, offices, air conditioning', '25', '', '0.9', '40', ''],
      ],
    },
    { type: 'formula', text: 'P_{installed} = 55 + 4 × 15 + 30 + 60 + 2 × 7.5 + 11 + 25 = 256 kW' },

    { type: 'heading', text: '3 · Demand and a new transformer' },
    {
      type: 'text',
      text: 'The motors don’t all run at full load at the same time: Awa applies an overall factor of 0.8, checked with Paul against the production schedule. Today the plant has a power factor of about 0.8: many motors and no correction.',
    },
    { type: 'formula', text: 'P ≈ 0.8 × 256 ≈ 205 kW   ;   S = \\frac{P}{cos φ} = \\frac{205}{0.8} ≈ 256 kVA' },
    { type: 'formula', text: 'With a 25% reserve: 256 × 1.25 = 320 kVA  →  400 kVA transformer' },
    {
      type: 'dialogue',
      speaker: 'Ibrahim Traoré',
      role: 'client',
      text: 'So my 160 kVA unit was well overloaded. That explains the trips.',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Yes. And remember that 0.8 power factor: we’ll come back to it at the end. If we raise it to 0.95, the same machines will only need 216 kVA. That’s free capacity for your future extensions, and one line less on the bill.',
    },
    { type: 'fiche', id: 'hvac-mechanical', why: 'Estimating mechanical loads: motors, pumps, compressors.' },
    { type: 'fiche', id: 'notions-diverses', why: 'Useful conversions: HP, kW, kVA, amps per HP.' },
    {
      type: 'regional',
      text: 'Plants almost always have a generator to keep running during outages: at Tropica, a 250 kVA generator. It changes everything for motor starting: a generator copes with inrush currents far less well than a transformer. That’s the subject of the next step.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'The nameplate gives the mechanical power; the current is calculated with efficiency and cos φ.',
        'Field rule at 400 V: about 2 A per kW, to check an order of magnitude.',
        'List each machine with its starting method, then apply a utilisation factor.',
        'A low power factor inflates the kVA: it will have to be corrected.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'Calculate the current of a 15 kW pump (η = 0.91, cos φ = 0.84) at 400 V, then check with the 2 A/kW rule.',
      solution: ['I = 15,000 / (√3 × 400 × 0.91 × 0.84) ≈ 28.3 A.', 'Quick rule: 15 × 2 = 30 A. Both agree.'],
    },
    {
      type: 'exercise',
      question: 'The 60 kW pasteuriser is purely resistive. What current does it draw? Why does it have no starting problem?',
      solution: [
        'I = 60,000 / (√3 × 400 × 1) ≈ 86.6 A.',
        'A heating element draws its rated current immediately: no inrush and no torque to overcome, unlike a motor.',
      ],
    },
  ],
};
