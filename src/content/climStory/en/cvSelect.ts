import { TopicContent } from '../../types';
import { fig } from '../../topics/clim/fig';

export const cvSelectContent: TopicContent = {
  title: 'Choosing the splits',
  subtitle: 'An “18,000 BTU” unit does not always deliver 18,000 BTU/h. Ousmane reads the catalogues, corrects the capacity for real temperatures, compares inverter and on/off units, chooses the refrigerant, then draws up the equipment schedule Awa needs for her circuits.',
  blocks: [
    { type: 'scene', text: 'Week 4 · Comparing quotes, with Koffi and Awa' },
    {
      type: 'objectives',
      items: [
        'Read a catalogue sheet: nominal capacity, test conditions, EER and SEER.',
        'Correct the capacity for indoor and outdoor temperatures.',
        'Choose between inverter and on/off, and choose the refrigerant.',
        'Draw up the equipment schedule and pass it to the electrical designer.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '5.28 kW', label: 'living room: 18,000 BTU/h nominal' },
        { value: '≈ 5.0 kW', label: 'guaranteed at 38 °C outdoors' },
        { value: 'SEER 6.1', label: 'inverter, against ≈ 2.8 for on/off' },
        { value: '≈ 150,000 FCFA', label: 'saved per year in the living room' },
        { value: 'R32', label: 'refrigerant chosen (GWP 675)' },
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Koffi Mensah',
      role: 'client',
      text: 'I have two quotes. One offers cut-price “2 HP” units, the other brand-name inverter splits, 30 % dearer. They’re the same machines, aren’t they?',
    },
    {
      type: 'dialogue',
      speaker: 'Ousmane Cissé',
      role: 'engineer',
      text: 'The “HP” is not a unit of cooling: every seller puts what he likes behind it. I only compare kilowatts or BTU/h measured to a standard, with the electrical input next to them. And I look at what the unit delivers in your home, not in the laboratory.',
    },

    { type: 'heading', text: '1 · Reading a catalogue' },
    fig('p069', 'Page 54 of the IEPF guide — units: 1 kW of cooling = 3,412 BTU/h; the commercial “HP” is worth about 8,000 to 9,000 BTU/h depending on the seller'),
    {
      type: 'table',
      headers: ['Catalogue data', 'Meaning', 'What Ousmane checks'],
      rows: [
        ['Nominal cooling capacity', 'measured at 27 °C / 19 °C wet bulb inside, 35 °C outside (ISO 5151, T1)', 'kW or BTU/h, not “HP”'],
        ['Power input', 'electricity used in those conditions', 'for the EER and for Awa'],
        ['EER', 'cooling ÷ electricity, at the nominal point', '≥ 3.2 for a good split'],
        ['SEER', 'average efficiency over a season (EN 14825)', 'this is what makes the bill'],
        ['Operating range', 'allowed outdoor temperatures', 'at least up to 43 °C (T3 if possible)'],
        ['Min / max capacity (inverter)', 'modulation range', 'minimum below the bedroom load'],
      ],
    },
    fig('p063_0', 'Chart from the guide — cooling capacity and power input versus evaporating and condensing temperatures: the hotter it is outside, the less cooling the machine produces'),
    {
      type: 'calc',
      title: 'Real capacity of the 18,000 BTU/h unit in the living room',
      steps: [
        { label: 'Nominal capacity (35 °C outside, 27 °C / 19 °C wet bulb inside)', formula: 'Q_{nom} = 5.28 kW' },
        { label: 'Set point 26 °C at 50 % (wet bulb ≈ 18.7 °C): catalogue factor', formula: 'f_{in} ≈ 0.98' },
        { label: 'Heat wave at 38 °C outside: catalogue factor', formula: 'f_{out} ≈ 0.96' },
        { label: '8 m refrigerant line instead of the 5 m reference', formula: 'f_{line} ≈ 0.99' },
        { label: 'Available capacity', formula: 'Q = 5.28 × 0.98 × 0.96 × 0.99 ≈ 4.92 kW ≥ 4.92 kW ✓' },
      ],
      result: 'The 18,000 BTU/h covers the living room even on a 38 °C day, with no extra margin: a 15,000 BTU/h would have been too tight',
    },

    { type: 'heading', text: '2 · Inverter or on/off?' },
    {
      type: 'text',
      text: 'An on/off split starts at full capacity, cools, stops, then restarts when the temperature rises again. An inverter split varies its compressor speed: it slows down as the room approaches the set point and runs for long periods at low capacity, where it is most efficient.',
    },
    fig('p100_0', 'Figure 4.21 of the guide — on/off control: the temperature oscillates around the set point'),
    fig('p101_0', 'Figure 4.22 — inverter control: variable speed, stable temperature'),
    {
      type: 'calc',
      title: 'What the inverter earns in the living room',
      steps: [
        { label: 'Cooling produced over the year: 4.9 kW peak, 50 % average load, 8 h/day', formula: 'E_c = 4.9 × 0.5 × 8 × 365 ≈ 7 150 kWh of cooling' },
        { label: 'Electricity used by an on/off unit (SEER ≈ 2.8)', formula: 'E = \\frac{7 150}{2.8} ≈ 2 550 kWh' },
        { label: 'With an inverter (SEER ≈ 6.1)', formula: 'E = \\frac{7 150}{6.1} ≈ 1 170 kWh' },
        { label: 'Saving at about 110 FCFA/kWh', formula: '(2 550 − 1 170) × 110 ≈ 152 000 FCFA per year' },
      ],
      result: 'The extra cost of the inverter (≈ 100,000 FCFA for the living room) pays back in less than a year',
    },
    {
      type: 'decision',
      title: 'Split technology',
      choice: 'Inverter wall splits, EER ≥ 3.2 and SEER ≥ 6, operating range up to 46 °C',
      reasons: [
        'The bedrooms need 1.4 to 1.9 kW, but the smallest model is 2.64 kW: only an inverter can go down to about 0.9 kW without cycling constantly.',
        'Running long at low speed, it condenses better: the air is dry and 26 °C feels cool.',
        'Low starting current: nothing flickers in the house, and Awa keeps her 16 A ratings.',
      ],
      rejected: 'The on/off “2 HP” units of the first quote: cheaper to buy, but a bill twice as heavy and clammy bedrooms.',
    },

    { type: 'heading', text: '3 · Which refrigerant?' },
    {
      type: 'table',
      headers: ['Refrigerant', 'GWP (greenhouse effect, CO₂ = 1)', 'Safety (ISO 817)', 'Status'],
      rows: [
        ['R22', '1,810', 'A1', 'banned in new equipment (ozone layer)'],
        ['R410A', '2,088', 'A1', 'being phased down (Kigali amendment)'],
        ['R32', '675', 'A2L (mildly flammable)', 'today’s standard for splits'],
        ['R290 (propane)', '3', 'A3 (flammable)', 'small charges, emerging'],
      ],
    },
    {
      type: 'decision',
      title: 'Refrigerant',
      choice: 'R32',
      reasons: [
        'GWP three times lower than R410A, better efficiency, smaller charge (≈ 0.8 kg for the living room).',
        'Available from every major manufacturer and known to local technicians.',
        'Its mild flammability means maximum charge rules per room, checked in the next step.',
      ],
      rejected: 'R410A: being phased down, refills increasingly expensive. R290: excellent for the environment, but still rare and demanding for the installer.',
    },
    { type: 'fiche', id: 'abc-refrigerants', why: 'Refrigerants, safety classes, GWP and regulations.' },

    { type: 'heading', text: '4 · The equipment schedule' },
    {
      type: 'text',
      text: 'The equipment schedule sums up what the other trades need to know: the joiner for wall openings, the mason for brackets, and Awa for the electrical circuits. The current shown is the maximum nameplate current, the one used to choose the protection.',
    },
    {
      type: 'equipmentSchedule',
      schedule: {
        title: 'Mensah villa air conditioning',
        project: 'Mensah villa',
        conditions: 'ISO 5151 T1: 35 °C out, 27 °C / 19 °C in',
        rows: [
          { tag: 'IU-01', location: 'Living room', type: 'Inverter wall split 18,000 BTU/h', cooling: 5.28, airflow: 850, refrigerant: 'R32', supply: '230 V 1~ 50 Hz', power: 1.64, current: 8.7, protection: 'C16 · RCD4 type A', note: 'OU-01 south façade, 8 m line' },
          { tag: 'IU-02', location: 'Bedroom 1', type: 'Inverter wall split 9,000 BTU/h', cooling: 2.64, airflow: 500, refrigerant: 'R32', supply: '230 V 1~ 50 Hz', power: 0.82, current: 4.3, protection: 'C16 · RCD4 type A', note: 'OU-02 under overhang, 5 m line' },
          { tag: 'IU-03', location: 'Bedroom 2', type: 'Inverter wall split 9,000 BTU/h', cooling: 2.64, airflow: 500, refrigerant: 'R32', supply: '230 V 1~ 50 Hz', power: 0.82, current: 4.3, protection: 'C16 · RCD4 type A', note: 'OU-03 under overhang, 6 m line' },
          { tag: 'IU-04', location: 'Bedroom 3', type: 'Inverter wall split 9,000 BTU/h', cooling: 2.64, airflow: 500, refrigerant: 'R32', supply: '230 V 1~ 50 Hz', power: 0.82, current: 4.3, protection: 'C16 · RCD4 type A', note: 'OU-04 north façade, 4 m line' },
        ],
      },
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'team',
      text: 'Perfect: 8.7 A for the living room and 4.3 A per bedroom, as I planned with 16 A circuits in 2.5 mm². And since they’re inverters, I was right to switch RCD 4 to type A.',
    },
    {
      type: 'note',
      text: 'Installed: 13.2 kW of cooling for a 9.7 kW load. That isn’t oversizing: each room has its own unit, and the bedrooms are limited by the smallest model on the market. Since they don’t peak at the same time as the living room, the electrical demand stays close to Awa’s figure (10.2 kW retained for the whole house).',
    },

    { type: 'heading', text: '5 · What the standards say' },
    {
      type: 'norms',
      title: 'Measuring air-conditioner performance',
      rows: [
        { norm: 'ISO 5151', rule: 'Tests of non-ducted air conditioners; T1 (35 °C outdoor) and T3 (46 °C outdoor) conditions for hot climates.', result: 'nominal capacity at 35 °C' },
        { norm: 'EN 14511 / EN 14825', rule: 'EER at the nominal point; SEER over a typical season, part load included.', result: 'SEER ≥ 6 required' },
        { norm: 'ISO 16358', rule: 'Cooling seasonal performance factor (CSPF), used in Asia and adaptable to tropical climates.', result: 'SEER equivalent' },
        { norm: 'AHRI 210/240', rule: 'US rating: SEER2 in BTU/Wh (≈ 3.41 × the value in W/W).', result: 'SEER2 20 ≈ 5.9 W/W' },
      ],
    },
    {
      type: 'regional',
      text: 'The West African market is full of splits sold in “HP” without datasheets, sometimes with an inflated capacity label. Several ECOWAS countries have adopted or are preparing minimum efficiency requirements and energy labels for air conditioners (Ghana has required them for a long time): ask for the label, the capacity in kW and the outdoor temperature range. A unit limited to 43 °C may go into safety mode during Sahel heat peaks.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'Compare kW (or BTU/h) measured to a standard, never “HP”.',
        'Catalogue capacity is given at 35 °C outdoors: correct it for real conditions.',
        'EER gives efficiency at the nominal point, SEER over the season: SEER makes the bill.',
        'An inverter modulates its capacity: essential when the smallest unit exceeds the need.',
        'R32 today, with its charge rules; R410A in decline.',
        'The equipment schedule gives the electrical designer the currents and protections.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'A split shows 12,000 BTU/h and 1.10 kW input. What EER? Is it good?',
      solution: ['12,000 / 3,412 ≈ 3.52 kW of cooling.', 'EER = 3.52 / 1.10 ≈ 3.2: fine for a split; a good inverter reaches 3.5 to 4.'],
    },
    {
      type: 'exercise',
      question: 'The catalogue gives a factor of 0.90 at 43 °C outdoors. Does the 18,000 BTU/h still cover the living room at 43 °C?',
      solution: ['Q = 5.28 × 0.98 × 0.90 × 0.99 ≈ 4.61 kW < 4.92 kW.', 'No: the room will rise 1 to 2 °C above the set point during those exceptional hours. That is acceptable with a 32 °C design basis, provided the client is told.'],
    },
  ],
};
