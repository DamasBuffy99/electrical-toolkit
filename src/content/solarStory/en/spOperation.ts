import { TopicContent } from '../../types';

export const spOperationContent: TopicContent = {
  title: 'Water tower, acceptance and management',
  subtitle: 'The pump stops around 4:30 pm, but the village draws water until 9 pm and from 5 am. Fanta sizes the water tower, carries out acceptance with Yao, then works out with the water committee the price per cubic metre that will keep the system running for twenty years.',
  blocks: [
    { type: 'scene', text: 'Month 3 · Sonkélé, at the foot of the water tower, with the water committee' },
    {
      type: 'objectives',
      items: [
        'Size the tank of a sun-following pumping system from the draw-off profile.',
        'Carry out the acceptance tests of a solar pumping system.',
        'Calculate a water price that covers operation and renewal.',
        'Compare the cost of solar and diesel over twenty years.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '60 m³', label: 'water tank on a 12 m tower' },
        { value: '250 FCFA/m³', label: 'i.e. 10 FCFA per 40 L basin' },
        { value: '≈ 3.3 M FCFA/yr', label: 'water committee surplus' },
        { value: '÷ 3', label: '20-year cost, solar against diesel' },
      ],
    },

    { type: 'heading', text: '1 · The water tower' },
    {
      type: 'table',
      headers: ['Time slot', 'Share of draw-off', 'Volume (m³)', 'Pump'],
      rows: [
        ['5 am – 9 am', '35 %', '26', 'stopped'],
        ['9 am – 4:30 pm', '25 %', '19', 'running'],
        ['4:30 pm – 9 pm', '40 %', '30', 'stopped'],
        ['Total', '100 %', '75', ''],
      ],
    },
    {
      type: 'calc',
      title: 'Tank volume',
      steps: [
        { label: 'Water drawn while the pump is stopped: the evening, then the next morning', formula: 'V = 30 + 26 = 56 m³' },
        { label: 'Next standard tank size up', formula: 'V = 60 m³' },
        { label: 'Heavily overcast day: ≈ 35 m³ pumped, shortfall to cover', formula: '75 − 35 = 40 m³' },
        { label: 'Old 15 kVA generator on the drive’s AC input', formula: '\\frac{40}{17} ≈ 2.4 h of generator  →  ≈ 7 L of diesel' },
      ],
      result: '60 m³ tower: it covers the evening and the morning; on the rare sunless days, the generator pumps for 2 to 3 hours',
    },
    {
      type: 'decision',
      title: 'Storage',
      choice: '60 m³ steel tank on a 12 m tower, existing generator as backup on the drive',
      reasons: [
        'The tank covers all draw-off outside pumping hours, in April, at the 10-year demand.',
        'Heavily overcast days are rare (about ten a year): a few litres of diesel are enough.',
        'At 12 m, the pressure at the four standpipes stays above 5 m of water column.',
      ],
      rejected: 'A 150 m³ tank for two days of autonomy: more than double the tower’s price for about ten days a year. And a 30 m³ tank: empty every morning before 7 am.',
    },
    {
      type: 'dialogue',
      speaker: 'Rokia Sanogo',
      role: 'client',
      text: 'In the evening, when the tower is full, the pump stops by itself? With the diesel, it overflowed if the pump operator fell asleep.',
    },
    {
      type: 'dialogue',
      speaker: 'Fanta Coulibaly',
      role: 'engineer',
      text: 'The float at the top of the tank stops the drive, and it restarts as soon as the level drops one metre. Nobody needs to be there: the sun starts the pump, the tower stops it.',
    },

    { type: 'heading', text: '2 · Acceptance' },
    {
      type: 'table',
      headers: ['Test', 'Expected', 'Measured'],
      rows: [
        ['Motor + cable insulation at 500 V, before lowering', '≥ 10 MΩ', '450 MΩ ✓'],
        ['String Voc, cells at 40 °C', '14 × 49.6 × 0.96 ≈ 666 V', '663 V ✓'],
        ['Direction of rotation', 'strong flow from start-up', '✓'],
        ['Flow at noon, 950 W/m² (meter and stopwatch)', '≈ 17 m³/h', '16.6 m³/h ✓'],
        ['Volume over a clear day (6.6 kWh/m²)', '≈ 100 m³', '98 m³ ✓'],
        ['Tank full (float lifted by hand)', 'stop within 10 s', '✓'],
        ['Dry run (probe out of the water)', 'immediate stop, restart after 30 min', '✓'],
        ['Water quality at a standpipe', '0 E. coli / 100 mL, chlorine 0.2 – 0.5 mg/L', '✓'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Yao Kouamé',
      role: 'team',
      text: 'We don’t sign acceptance on a single noon reading. I leave the meter running for a whole day and compare the volume with the measured sunshine: that volume is what the village will pay for, not the catalogue kilowatts.',
    },

    { type: 'heading', text: '3 · Water price and management' },
    {
      type: 'calc',
      title: 'Water committee’s annual budget',
      steps: [
        { label: 'Volume sold (school and health post free, losses deducted)', formula: '60 m³/day × 365 ≈ 21,900 m³/yr' },
        { label: 'Price: 10 FCFA per 40 L basin', formula: '\\frac{10}{0.04} = 250 FCFA/m³  →  21,900 × 250 ≈ 5.5 M FCFA/yr' },
        { label: 'Four standpipe attendants, a guard, maintenance and parts, chlorination', formula: '0.72 + 0.36 + 0.3 + 0.2 ≈ 1.6 M FCFA/yr' },
        { label: 'Renewal provision: pump (3.5 M / 8 years) and drive (1.5 M / 10 years)', formula: '0.44 + 0.15 ≈ 0.6 M FCFA/yr' },
      ],
      result: 'Surplus ≈ 5.5 − 2.2 = 3.3 M FCFA a year, in the committee’s bank account, for repairs and network extension',
    },
    {
      type: 'table',
      headers: ['Task', 'Who', 'Frequency'],
      rows: [
        ['Washing the modules, early morning', 'guard', 'every week'],
        ['Meter reading, standpipe takings', 'attendants, treasurer', 'every day'],
        ['Checking the fence, cables and leaks', 'guard', 'every week'],
        ['Cleaning and disinfecting the tank', 'committee + mechanic', 'every year'],
        ['Pulling and inspecting the pump', 'local pump mechanic', 'every 3 to 4 years, or if flow drops 15 %'],
        ['Drive SMS alarm (dry run, fault)', 'treasurer, mechanic', 'at every alarm'],
      ],
    },
    { type: 'fiche', id: 'pv-inverter-finance', why: 'Thinking in lifetime cost rather than purchase price.' },

    { type: 'heading', text: '4 · Solar against diesel over twenty years' },
    {
      type: 'table',
      headers: ['Solar investment', 'M FCFA'],
      rows: [
        ['7.7 kWp array, structure, fence', '5'],
        ['Drive and output filter', '1.5'],
        ['Pump, motor, cable, probes', '3.5'],
        ['400 m DN90 pipeline and fittings', '3'],
        ['60 m³ water tank on a 12 m tower', '10'],
        ['Design, installation, acceptance, training', '2'],
        ['Total', '25'],
      ],
    },
    {
      type: 'calc',
      title: 'Full cost over 20 years',
      steps: [
        { label: 'Diesel: 18 L/day of fuel + repairs and oil changes', formula: '18 × 700 × 365 + 1.5 M ≈ 6.1 M FCFA/yr  →  × 20 = 122 M' },
        { label: 'Diesel: two generators and two pumps to replace', formula: '8 + 7 = 15 M  →  total ≈ 137 M FCFA' },
        { label: 'Solar: investment, technical operation, renewals', formula: '25 + 0.5 × 20 + 8.5 ≈ 44 M FCFA' },
        { label: 'Cost per m³ sold over 20 years (438,000 m³)', formula: 'diesel ≈ 313 FCFA/m³   ;   solar ≈ 100 FCFA/m³' },
      ],
      result: 'Solar costs three times less over twenty years, and depends neither on the price nor on the delivery of diesel',
    },

    { type: 'heading', text: '5 · What the standards say' },
    {
      type: 'norms',
      title: 'Drinking water and operation',
      rows: [
        { norm: 'WHO — Guidelines for drinking-water quality', rule: 'No E. coli in 100 mL; free residual chlorine of 0.2 to 0.5 mg/L at the point of delivery.', result: 'chlorination at the tower' },
        { norm: 'IEC 62253', rule: 'On-site performance tests of the PV pumping system: flow versus irradiance.', result: 'one-day acceptance' },
        { norm: 'ISO 24510 / 24512', rule: 'Drinking water services: quality of service to users, management of the operator.', result: 'committee rules' },
        { norm: 'AWWA D100 / Eurocode 3-4-2', rule: 'Steel water tanks: design, wind loads, foundations.', result: '60 m³ tower' },
      ],
    },
    {
      type: 'regional',
      text: 'In several Sahelian countries, small water networks are entrusted by the municipality to a users’ association or, for several villages, to a private operator under a lease contract. Prepaid card standpipes and mobile money payments are spreading: less cash to handle, and takings that are easier for the treasurer to check.',
    },

    { type: 'heading', text: '6 · The four projects in review' },
    {
      type: 'table',
      headers: ['Project', 'System', 'Where is the storage?', 'Key lesson'],
      rows: [
        ['Mensah villa', 'hybrid 6.6 kWp, 8 kW inverter', '10 kWh LFP battery', 'back up the essentials, not the whole house'],
        ['Kalé health centre', 'off-grid 36 kWp, 6 inverter-chargers, generator', '72 kWh battery + generator', 'prioritise loads; couple on the AC side'],
        ['Tropica roof', 'self-consumption 99 kWp, zero export', 'none', 'size on the minimum daytime load'],
        ['Sonkélé pumping', '5.5 kW pump drive, 7.7 kWp', '60 m³ water tower', 'store water, not electricity'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Fanta Coulibaly',
      role: 'engineer',
      text: 'Four projects, four different answers, but always the same path: start from the real demand, hour by hour, choose where to store, check every voltage and every current, then organise the people who will keep the installation alive. The panel is the simplest part.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'The water tower covers draw-off outside pumping hours; a backup generator avoids oversizing it.',
        'Acceptance is based on a full day’s volume, compared with the measured sunshine.',
        'The water price must cover operation and the renewal of the pump and drive.',
        'Over twenty years, solar pumping costs about three times less than diesel.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'The committee wants to save on the tank and suggests 50 m³. What happens on an April morning?',
      solution: ['56 m³ are needed between 4:30 pm and 9 am: 6 m³ short.', 'The last families of the morning find the standpipes dry around 8 am, waiting for the sun to restart the pump.'],
    },
    {
      type: 'exercise',
      question: 'What minimum price per m³ would cover, over 20 years, the solar investment, technical operation, renewals and staff (1.1 M FCFA/yr)?',
      solution: ['Total cost: 44 + 1.1 × 20 = 66 M FCFA.', 'Price: 66 M / 438,000 m³ ≈ 150 FCFA/m³. At 250 FCFA, the village could fund its next borehole itself.'],
    },
  ],
};
