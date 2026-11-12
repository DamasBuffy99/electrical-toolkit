import { TopicContent } from '../../types';

export const stProfileContent: TopicContent = {
  title: 'Self-consuming without exporting',
  subtitle: 'Tropica pays nearly 100 million FCFA a year for electricity and its roof sits empty. Ibrahim Traoré wants panels, but the utility refuses any export to its grid. Fanta Coulibaly starts from the plant’s load profile to set the right power.',
  blocks: [
    { type: 'scene', text: 'Month 1 · Tropica plant, with Ibrahim Traoré and Paul Ndiaye (maintenance)' },
    {
      type: 'objectives',
      items: [
        'Draw up the load profile of an industrial site, on working and non-working days.',
        'Size a self-consumption plant from the minimum daytime load.',
        'Understand zero export: meter, control, safety devices.',
        'Estimate the energy lost to curtailment on low-load days.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '≈ 3 MWh/day', label: 'consumption on a production day' },
        { value: '120 kW', label: 'minimum daytime load, on weekdays' },
        { value: '99 kWp / 80 kW', label: 'PV array / inverters' },
        { value: '≈ 9 %', label: 'production curtailed over the year (Sundays, shutdowns)' },
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Ibrahim Traoré',
      role: 'client',
      text: 'Since the extension, the bill has climbed again. I have 1,200 m² of roof doing nothing. But the utility warned me: not a single kilowatt-hour may flow back into its grid, or they cut me off.',
    },
    {
      type: 'dialogue',
      speaker: 'Fanta Coulibaly',
      role: 'engineer',
      text: 'That’s called self-consumption without export. It works very well, on one condition: every kilowatt-hour produced must be used on site at that very instant. So the question isn’t “how many panels fit on the roof” but “how much does the plant consume while the sun shines”.',
    },

    { type: 'heading', text: '1 · The plant’s load profile' },
    {
      type: 'text',
      text: 'Paul installed a power analyser on the main board incomer for two weeks. Fanta derives the average power drawn by each workshop, by day (6 am – 6 pm) and by night (6 pm – 6 am), for a two-shift production day (6 am – 10 pm).',
    },
    {
      type: 'consumptionSheet',
      sheet: {
        project: 'Tropica plant — production day',
        note: 'Measured average absorbed powers, not nameplate ratings.',
        items: [
          { name: 'Air compressor (55 kW, soft starter)', power: 40000, qty: 1, hDay: 12, hNight: 4, surge: 120000 },
          { name: 'Process pumps (15 kW)', power: 11000, qty: 4, hDay: 12, hNight: 4 },
          { name: 'Cold room refrigeration unit', power: 20000, qty: 1, hDay: 12, hNight: 12 },
          { name: 'Pasteuriser (heating elements)', power: 60000, qty: 1, hDay: 10, hNight: 3 },
          { name: 'Conveyors and filler', power: 5500, qty: 2, hDay: 12, hNight: 4 },
          { name: 'Clean-in-place (CIP) pump', power: 11000, qty: 1, hDay: 2, hNight: 1 },
          { name: 'Lighting, offices, air conditioning', power: 18000, qty: 1, hDay: 10, hNight: 2 },
        ],
      },
    },
    {
      type: 'table',
      headers: ['Hour', 'Working-day load (kW)', 'Clear-sky PV (kW)', 'Sunday load (kW)', 'PV allowed on Sunday (kW)'],
      rows: [
        ['7 am', '150', '8', '30', '8'],
        ['8 am', '175', '25', '30', '25'],
        ['9 am', '190', '45', '30', '27'],
        ['10 am', '200', '62', '30', '27'],
        ['11 am', '195', '74', '30', '27'],
        ['12 pm', '190', '78', '30', '27'],
        ['1 pm', '185', '76', '30', '27'],
        ['2 pm (shift change)', '120', '66', '30', '27'],
        ['3 pm', '195', '50', '30', '27'],
        ['4 pm', '180', '32', '30', '27'],
        ['5 pm', '170', '14', '30', '14'],
        ['Total', '≈ 2,000 kWh', '530 kWh', '≈ 330 kWh', '263 kWh'],
      ],
    },
    {
      type: 'note',
      text: 'Two lessons. On weekdays the plant never drops below 120 kW in the daytime, even at the 2 pm shift change: everything 80 kW of inverters produce will be consumed. On Sundays only the cold room runs (≈ 30 kW): half the production of a sunny day will have to be curtailed.',
    },

    { type: 'heading', text: '2 · How many kilowatts-peak?' },
    { type: 'illustration', name: 'pv-system', props: { highlight: 'panels' }, caption: 'With neither battery nor export, production must follow consumption at every instant' },
    {
      type: 'calc',
      title: 'Plant power',
      steps: [
        { label: 'Minimum weekday daytime load, minus 10 kW of control margin', formula: 'P_{AC} ≤ 120 − 10 = 110 kW' },
        { label: 'South roof pitch: 600 m², minus setbacks and firefighter paths', formula: '≈ 470 m² usable  →  180 modules of 2.58 m²' },
        { label: 'Peak power', formula: '180 × 550 = 99,000 Wp ≈ 99 kWp' },
        { label: 'Two 40 kW grid-tie inverters', formula: 'P_{AC} = 80 kW ≤ 110 kW ✓   ;   ratio \\frac{99}{80} ≈ 1.24' },
      ],
      result: '99 kWp and 80 kW of inverters: no curtailment on production days',
    },
    {
      type: 'decision',
      title: 'Plant size',
      choice: '≈ 100 kWp on the south pitch, 2 grid-tie inverters of 40 kW, no battery',
      reasons: [
        'AC power stays below the minimum daytime load: on weekdays, everything is self-consumed.',
        'The south pitch is enough; the north pitch (6 to 8 % loss at a 10° slope) stays in reserve for a phase 2.',
        'No battery: the plant consumes mostly by day, storage would not pay at today’s kWh price.',
      ],
      rejected: '200 kWp on both pitches: curtailment on weekdays too as soon as the load drops, and over 25 % of production lost on Sundays and during the annual shutdown.',
    },
    { type: 'fiche', id: 'pv-inverter-types', why: 'Grid-tie, hybrid or off-grid inverter: which one for self-consumption?' },

    { type: 'heading', text: '3 · Never exporting: zero export' },
    {
      type: 'text',
      text: 'A power meter is installed on the transformer incomer, with three 600/5 A current transformers. A controller reads the imported power continuously and adjusts the inverters’ setpoint so that the plant always imports a little from the grid. If the load drops, the inverters cut their output in under a second.',
    },
    {
      type: 'calc',
      title: 'Control on a sunny Sunday',
      steps: [
        { label: 'Setpoint: keep at least 3 kW of import', formula: 'P_{PV} ≤ P_{load} − 3 = 30 − 3 = 27 kW' },
        { label: 'Energy curtailed over the day (table)', formula: '530 − 263 = 267 kWh  →  50 %' },
        { label: 'Non-working days: 52 Sundays + 13 holidays and shutdown days, average day 376 kWh', formula: '65 × 376 × 0.5 ≈ 12 MWh/yr' },
        { label: 'Expected annual production (step 4)', formula: '\\frac{12}{139} ≈ 9 %' },
      ],
      result: 'About 9 % of production lost to zero export: the price of doing without a battery',
    },
    {
      type: 'table',
      headers: ['Safety device', 'Setting', 'Role'],
      rows: [
        ['Minimum import setpoint', '3 kW', 'margin against fast load changes'],
        ['Loss of meter ↔ inverter communication', 'inverters to 0 W within 5 s', 'no export if the measurement disappears'],
        ['Reverse power relay (ANSI 32)', 'export > 2 kW for 2 s', 'opens the plant breaker as a last resort'],
        ['Sudden trip of a 60 kW machine', 'inverters reduced in < 1 s', 'brief export, tolerated by the time-delayed relay'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Paul Ndiaye (maintenance)',
      role: 'team',
      text: 'And if the pasteuriser trips at noon? We go from 190 to 130 kW in an instant, with 78 kW of sun.',
    },
    {
      type: 'dialogue',
      speaker: 'Fanta Coulibaly',
      role: 'engineer',
      text: 'We still import 52 kW, nothing happens. The only tricky case is Sundays or when a shift stops: that’s when the control works hard. And if it fails, the reverse power relay opens the plant before the utility sees anything.',
    },
    { type: 'fiche', id: 'pv-design-steps', why: 'The design steps of a photovoltaic installation.' },

    { type: 'heading', text: '4 · What the standards say' },
    {
      type: 'norms',
      title: 'Self-consumption and export limitation',
      rows: [
        { norm: 'France — Enedis (CACSI)', rule: 'Even without export, the installation is declared to the grid operator through a self-consumption-without-export agreement.', result: 'declaration required' },
        { norm: 'IEC 62116', rule: 'Islanding prevention test for grid-connected inverters.', result: 'certified inverters' },
        { norm: 'UL 1741 (PCS) / IEEE 1547-2018', rule: 'Power control systems: certified export limitation, response time.', result: 'North American practice' },
        { norm: 'National regulations', rule: 'Self-generation declared to the ministry or regulator; written agreement from the utility on zero export.', result: 'Tropica’s file' },
      ],
    },
    {
      type: 'regional',
      text: 'In several West African countries, the framework for self-generators’ export (feed-in tariffs, net metering) is still being built, and utilities often refuse export for fear of grid stability. Zero export, with a meter at the incomer and a reverse power relay, has become the de facto standard for industrial roofs. The day a feed-in tariff exists, only the setpoint will need changing.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'In self-consumption without a battery, AC power is set by the minimum load during sunshine hours.',
        'Zero export relies on a meter at the incomer, fast inverter control and a backup reverse power relay.',
        'On low-load days production is curtailed: that loss must be quantified.',
        'Roof area is only a limit; the load profile does the sizing.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'During the two-week annual shutdown, only the offices and the cold room run (45 kW). What PV power does the controller allow? And at what time does curtailment start under a clear sky?',
      solution: ['P_PV ≤ 45 − 3 = 42 kW.', 'The table gives 45 kW at 9 am: curtailment starts shortly before 9 am and lasts until around 3 pm.'],
    },
    {
      type: 'exercise',
      question: 'Ibrahim suggests removing the 3 kW margin to gain energy. What is the risk?',
      solution: ['At the slightest drop in load, the plant exports before the control reacts.', 'The ANSI 32 relay would end up opening the plant several times a day: far more than 3 kW would be lost.'],
    },
  ],
};
