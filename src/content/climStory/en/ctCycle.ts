import { TopicContent } from '../../types';
import { fig } from '../../topics/clim/fig';

export const ctCycleContent: TopicContent = {
  title: 'The cycle on the pressure–enthalpy chart',
  subtitle: 'At what temperature should the refrigerant evaporate? At what temperature should it condense? Ousmane draws the cold-room cycle on the pressure–enthalpy chart, derives the refrigerant flow, the compressor power and the efficiency, and shows Paul what a fouled condenser costs.',
  blocks: [
    { type: 'scene', text: 'Month 7 · Design office' },
    {
      type: 'objectives',
      items: [
        'Choose evaporating and condensing temperatures from the air temperatures.',
        'Place the four points of the cycle and read the enthalpies.',
        'Calculate the refrigerating effect, compression work, mass flow and COP.',
        'Measure the effect of too high a condensing temperature.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '−6 °C / 47 °C', label: 'evaporation / condensation' },
        { value: '139 kJ/kg', label: 'refrigerating effect' },
        { value: '0.43 kg/s', label: 'refrigerant flow for 60 kW' },
        { value: 'COP 2.6', label: 'at the compressor' },
        { value: '− 20 %', label: 'efficiency with a fouled condenser' },
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Paul Ndiaye (maintenance)',
      role: 'client',
      text: 'The supplier asks for the “evaporating temperature”. The room is at 2 °C: so it’s 2 °C, isn’t it?',
    },
    {
      type: 'dialogue',
      speaker: 'Ousmane Cissé',
      role: 'engineer',
      text: 'No: for heat to pass from the air to the refrigerant, the refrigerant must be colder than the air. The whole game is choosing that difference. Too small, you need a huge evaporator; too large, you dry out the products and the compressor works harder. Let’s see it on the chart.',
    },

    { type: 'heading', text: '1 · Choosing the cycle temperatures' },
    {
      type: 'calc',
      title: 'Operating temperatures',
      steps: [
        { label: 'Evaporation: 8 K below the room air, to keep the products moist', formula: 'θ_0 = 2 − 8 = −6 °C' },
        { label: 'Condensation: 12 K above the outdoor air (air-cooled condenser)', formula: 'θ_k = 35 + 12 = 47 °C' },
        { label: 'Superheat at the evaporator outlet (protects the compressor)', formula: 'SH = 6 K' },
        { label: 'Subcooling at the condenser outlet (bubble-free liquid at the expansion valve)', formula: 'SC = 4 K' },
      ],
      result: 'Cycle: evaporation −6 °C, condensation 47 °C, superheat 6 K, subcooling 4 K',
    },
    fig('p134_0', 'Table 5.5 of the IEPF guide — usual temperature differences for sizing heat exchangers'),
    {
      type: 'note',
      text: 'An 8 K difference is a common compromise for fruit and drinks. For meat or flowers, very sensitive to drying, it drops to 5 or 6 K with a bigger evaporator. For hermetically packed products it can go up to 10 K.',
    },

    { type: 'heading', text: '2 · The cycle on the chart' },
    { type: 'illustration', name: 'ph-cycle', caption: 'The cycle of the 2 °C room: evaporation (4 → 1), compression (1 → 2), condensation (2 → 3), expansion (3 → 4)' },
    {
      type: 'table',
      headers: ['Point', 'State', 'Pressure', 'Enthalpy'],
      rows: [
        ['1', 'superheated vapour, compressor suction (−6 °C + 6 K)', '≈ 2.7 bar', 'h_1 ≈ 400 kJ/kg'],
        ['2', 'hot vapour at discharge (≈ 80 °C)', '≈ 13.5 bar', 'h_2 ≈ 453 kJ/kg'],
        ['3', 'subcooled liquid (43 °C) before the expansion valve', '≈ 13.5 bar', 'h_3 ≈ 261 kJ/kg'],
        ['4', 'liquid–vapour mixture after expansion (constant h)', '≈ 2.7 bar', 'h_4 = h_3 ≈ 261 kJ/kg'],
      ],
    },
    {
      type: 'calc',
      title: 'What the chart lets you calculate',
      steps: [
        { label: 'Refrigerating effect: heat taken up by 1 kg of refrigerant in the evaporator', formula: 'q_0 = h_1 − h_4 = 400 − 261 = 139 kJ/kg' },
        { label: 'Compression work (isentropic efficiency ≈ 0.7)', formula: 'w = h_2 − h_1 = 453 − 400 = 53 kJ/kg' },
        { label: 'Heat rejected at the condenser', formula: 'q_k = h_2 − h_3 = 453 − 261 = 192 kJ/kg = q_0 + w' },
        { label: 'Refrigerant flow for 60 kW', formula: 'q_m = \\frac{Q_0}{q_0} = \\frac{60}{139} ≈ 0.43 kg/s' },
        { label: 'Compressor power and coefficient of performance', formula: 'P = q_m × w ≈ 0.43 × 53 ≈ 22.9 kW   ;   COP = \\frac{q_0}{w} = \\frac{139}{53} ≈ 2.6' },
      ],
      result: '60 kW of cooling for ≈ 23 kW at the compressor shaft; the condenser rejects ≈ 83 kW',
    },
    fig('p082_0', 'Figure 4.2 of the IEPF guide — the cycle on the pressure–enthalpy chart: efficiency = refrigerating effect ÷ work'),
    {
      type: 'note',
      text: 'The enthalpies are rounded and read from the R513A chart (the refrigerant chosen in the next step), close to that of R134a. Manufacturer software gives the same results within a few percent; the point of the chart is to understand where those figures come from.',
    },

    { type: 'heading', text: '3 · The price of a fouled condenser' },
    { type: 'illustration', name: 'ph-cycle', props: { variant: 'hot' }, caption: 'Dashed: the same cycle with a fouled condenser condensing at 55 °C' },
    {
      type: 'calc',
      title: 'Condensation at 55 °C instead of 47 °C',
      steps: [
        { label: 'Warmer liquid before the expansion valve', formula: 'h_3 = h_4 ≈ 274 kJ/kg   →   q_0 = 400 − 274 = 126 kJ/kg  (− 9 %)' },
        { label: 'Higher compression', formula: 'h_2 ≈ 460 kJ/kg   →   w = 60 kJ/kg  (+ 13 %)' },
        { label: 'New coefficient of performance', formula: 'COP = \\frac{126}{60} = 2.1  instead of 2.6' },
      ],
      result: 'About 20 % more electricity for the same cooling, and 9 % less capacity: each kelvin of condensing costs 2 to 3 %',
    },
    {
      type: 'decision',
      title: 'Condenser design',
      choice: 'Oversized air-cooled condenser (12 K difference), shaded by the roof, variable-speed fans and monthly cleaning',
      reasons: [
        'The condenser is where the most efficiency is won or lost in a hot climate.',
        'Variable speed keeps condensing low on cool nights, without going below the expansion valve’s minimum.',
        'Dust, pollen and grease from the plant quickly foul the fins: Paul puts it in the maintenance schedule.',
      ],
      rejected: 'A tightly sized condenser (18 K difference) on the metal roof: 15 % more consumption all year round.',
    },
    { type: 'fiche', id: 'abc-mollier', why: 'The pressure–enthalpy chart and the cycle balance in detail.' },
    { type: 'fiche', id: 'clim-cycle', why: 'How an air conditioner makes cold.' },
    { type: 'fiche', id: 'abc-exchangers', why: 'Condenser, expansion valve, evaporator: superheat and subcooling.' },

    { type: 'heading', text: '4 · What the standards say' },
    {
      type: 'norms',
      title: 'Refrigerating machine performance',
      rows: [
        { norm: 'EN 12900', rule: 'Rating conditions for refrigerant compressors (evaporation, condensation, superheat, subcooling).', result: 'compare catalogues on equal terms' },
        { norm: 'EN 13215', rule: 'Performance of condensing units.', result: 'capacity at −6 / 35 °C outdoor' },
        { norm: 'AHRI 540 / 520', rule: 'North American equivalents for compressors and condensing units.', result: 'same logic' },
        { norm: 'ISO 817', rule: 'Designation and safety classification of refrigerants.', result: 'R513A: A1' },
      ],
    },
    {
      type: 'regional',
      text: 'European catalogues often give capacities for 32 °C air at the condenser; on a Sahelian roof or an exposed dock, the intake air exceeds 40 °C. Check the operating range of the unit (some trip on high pressure above 43 °C) and read the capacity at the real air temperature.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'The refrigerant evaporates a few kelvin below the room air and condenses about twelve kelvin above the outdoor air.',
        'On the chart: horizontal evaporation and condensation, vertical expansion (constant h), compression rising to the right.',
        'q_0 = h_1 − h_4; w = h_2 − h_1; COP = q_0 / w; flow = capacity / q_0.',
        'Superheat and subcooling protect the compressor and the expansion valve.',
        'Each extra kelvin of condensing costs 2 to 3 % in consumption.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'What refrigerant flow does the fruit room alone need (≈ 15 kW installed), with the same cycle?',
      solution: ['q_m = 15 / 139 ≈ 0.11 kg/s.', 'It is fed by the same rack, with its own evaporator and pressure regulator.'],
    },
    {
      type: 'exercise',
      question: 'Subcooling rises from 4 K to 8 K (h_3 ≈ 255 kJ/kg). What become q_0 and the COP?',
      solution: ['q_0 = 400 − 255 = 145 kJ/kg (+ 4 %).', 'The work is unchanged: COP = 145 / 53 ≈ 2.7. Subcooling is a free gain, if obtained in the condenser.'],
    },
  ],
};
