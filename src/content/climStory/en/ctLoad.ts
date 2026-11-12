import { TopicContent } from '../../types';

export const ctLoadContent: TopicContent = {
  title: 'The cold-room load',
  subtitle: 'Ibrahim wants to store 20 tonnes of juice a day at 2 °C and his fruit at 10 °C. In a cold room, occupants and sun no longer matter much: products, opening doors and fans do. Ousmane redoes the load with this new logic.',
  blocks: [
    { type: 'scene', text: 'Month 7 · Tropica plant, with Ibrahim Traoré and Paul Ndiaye' },
    {
      type: 'objectives',
      items: [
        'Identify the gains of a cold room: walls, products, outside air, internal equipment.',
        'Calculate the heat to remove from incoming products.',
        'Reduce air entering through the doors.',
        'Go from a 24 h load to the compressor capacity (running time).',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '2 °C / 10 °C', label: 'finished-goods room / fruit room' },
        { value: '≈ 23 kW', label: 'to cool 20 t of juice a day' },
        { value: '44.9 kW', label: 'average 24 h load, 10 % margin' },
        { value: '≈ 60 kW', label: 'cooling capacity installed (18 h/24 running)' },
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Ibrahim Traoré',
      role: 'client',
      text: 'A cold room is just a big, well-sealed air-conditioned room, isn’t it? Give me three big splits.',
    },
    {
      type: 'dialogue',
      speaker: 'Ousmane Cissé',
      role: 'engineer',
      text: 'A split is made to keep an occupied room at 26 °C. Here we must go down to 2 °C, and above all cool 20 tonnes of juice arriving at 25 °C every day: that’s the heat that dominates. You need a refrigeration unit designed for it, with evaporators that can handle frost.',
    },

    { type: 'heading', text: '1 · The gains of a cold room' },
    {
      type: 'table',
      headers: ['Gain', 'How it is calculated', 'Typical share'],
      rows: [
        ['Envelope (walls, ceiling, floor)', 'k × S × Δθ, with insulated panels', '5 to 15 %'],
        ['Incoming products', 'm × c_p × Δθ / cooling time', '40 to 70 %'],
        ['Fruit respiration', 'heat given off per kg of stored fruit', 'a few %'],
        ['Outside air (doors)', 'air mass × enthalpy difference', '5 to 20 %'],
        ['Fans, lighting, forklifts, people', 'power × time of use', '5 to 10 %'],
      ],
    },

    { type: 'heading', text: '2 · Products, the main item' },
    {
      type: 'calc',
      title: 'Cooling the day’s juice (2 °C room)',
      steps: [
        { label: 'Daily intake: 20 t of bottled juice, from 25 °C to 4 °C', formula: 'm = 20 000 kg   ;   Δθ = 25 − 4 = 21 °C' },
        { label: 'Specific heat of juice (close to water)', formula: 'c_p ≈ 3.8 kJ/(kg·K)' },
        { label: 'Cooling in 20 h', formula: 'Q = \\frac{20 000 × 3.8 × 21}{20 × 3 600} ≈ 22.2 kW' },
        { label: 'Bottles and pallets (2 t, c_p ≈ 1.5)', formula: 'Q ≈ \\frac{2 000 × 1.5 × 21}{72 000} ≈ 0.9 kW' },
      ],
      result: 'About 23 kW for the products alone, more than 80 % of this room',
    },
    {
      type: 'note',
      text: 'If the juice could leave the line at 15 °C instead of 25 °C (a plate cooler fed with cooling-tower water, for example), the product load would halve. In industrial refrigeration, the best load calculation often starts in the process.',
    },

    { type: 'heading', text: '3 · Doors: warm air coming in' },
    {
      type: 'calc',
      title: 'Air entering the finished-goods room (384 m³)',
      steps: [
        { label: 'Heavy forklift traffic: about 8 air changes per day', formula: 'm_{air} = 8 × 384 × 1.2 ≈ 3 690 kg/day' },
        { label: 'Hall air (35 °C, 60 %) and room air (2 °C, 90 %): enthalpy difference', formula: 'Δh ≈ 90 − 12 = 78 kJ/kg' },
        { label: 'Average power', formula: 'Q = \\frac{3 690 × 78}{86 400} ≈ 3.3 kW' },
        { label: 'With a strip curtain and a high-speed door (≈ − 60 %)', formula: 'Q ≈ 1.3 kW  (≈ 0.9 kW of it latent: water that will freeze)' },
      ],
      result: 'The strip curtain saves about 2 kW permanently, and as much frost on the evaporators',
    },
    {
      type: 'decision',
      title: 'Cold-room access',
      choice: 'High-speed roll-up door + strip curtain, airlock on the loading dock',
      reasons: [
        'The 35 °C hall air is very humid: each entry brings water that turns into frost.',
        'Less frost means fewer defrosts and a more stable product temperature.',
      ],
      rejected: 'A classic swing door left open during loading: 2 to 3 kW more and iced-up evaporators.',
    },

    { type: 'heading', text: '4 · The load sheet of the two rooms' },
    {
      type: 'heatLoadSheet',
      sheet: {
        project: 'Tropica cold rooms',
        location: 'Plant hall (35 °C, 40 °C under the roof)',
        outdoor: 'hall 35 °C · 60 %',
        indoor: '+2 °C (juice) · +10 °C (fruit)',
        peakHour: '24 h average load',
        margin: 0.1,
        runHours: 18,
        rooms: [
          { name: 'Finished goods +2 °C (12 × 8 m)', area: 96, walls: 2714, glazing: 0, product: 23100, people: 90, lighting: 190, equipment: 1250, air: 400, peopleLat: 0, airLat: 900 },
          { name: 'Fruit +10 °C (8 × 6 m)', area: 48, walls: 1192, glazing: 0, product: 9700, people: 50, lighting: 100, equipment: 650, air: 150, peopleLat: 0, airLat: 360 },
        ],
      },
    },
    {
      type: 'calc',
      title: 'From the load to the compressor capacity',
      steps: [
        { label: 'Envelope of the 2 °C room: 100 mm panels (k ≈ 0.22), insulated floor (k ≈ 0.3)', formula: 'Q = 0.22 × 160 × 33 + 0.22 × 96 × 38 + 0.3 × 96 × 26 ≈ 2.7 kW' },
        { label: 'Internal equipment: 4 evaporator fans (1 kW) and forklift', formula: 'Q ≈ 1.0 + 0.25 = 1.25 kW  (all the electricity becomes heat)' },
        { label: 'Average total of both rooms with 10 % margin', formula: 'Q_{24h} ≈ 40.8 × 1.10 ≈ 44.9 kW' },
        { label: 'Compressors only run 18 h out of 24 (defrost, control, safety)', formula: 'Q_0 = 44.9 × \\frac{24}{18} ≈ 59.9 kW' },
      ],
      result: 'Cooling capacity to install: about 60 kW',
    },
    {
      type: 'note',
      text: 'Why not count 24 h of running? Time is needed to defrost, and a machine running non-stop has no reserve on a hotter day or when a truck arrives late. Refrigeration engineers size on 16 to 20 h of running.',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'team',
      text: 'With an efficiency of around 2 in industrial refrigeration, 60 kW of cooling needs about 30 kW of electricity: exactly the “cold room” way I reserved at Tropica’s main board.',
    },
    { type: 'fiche', id: 'clim-heat-gains', why: 'Heat gains, one by one.' },
    { type: 'fiche', id: 'abc-special', why: 'Special applications: clean rooms, refrigeration, data centres.' },

    { type: 'heading', text: '5 · What the standards say' },
    {
      type: 'norms',
      title: 'Cold-room load and design',
      rows: [
        { norm: 'ASHRAE Refrigeration Handbook', rule: 'Load calculation method (ch. 24), air-change tables by volume and use, respiration heats.', result: 'method used here' },
        { norm: 'EN 13164 / EN 14509', rule: 'Insulation and self-supporting sandwich panels: thermal and mechanical performance.', result: '100 mm panels, k ≈ 0.22' },
        { norm: 'Codex / HACCP', rule: 'Cold-chain control for foodstuffs: temperatures, recording, alarms.', result: 'recorder + alarm' },
        { norm: 'EN 378', rule: 'Refrigerating system safety: charge, machinery room, detection.', result: 'see step 4' },
      ],
    },
    {
      type: 'regional',
      text: 'Grid outages are the enemy of cold rooms: a well-insulated, closed room loses about 1 °C per hour. Awa had planned Tropica’s standby generator; Ousmane adds a temperature recorder with SMS alarm, and a simple rule: during an outage, nobody opens the doors.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'In a cold room, incoming products dominate the load.',
        'Q = m × c_p × Δθ / time: quantity, temperature difference and pull-down time make the capacity.',
        'Doors let in hot, humid air: strip curtain, high-speed door, airlock.',
        'Fans, lighting and forklifts inside are gains in their own right.',
        'Load over 24 h, then compressor capacity for 16 to 20 h of running.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'The juice leaves the line at 15 °C instead of 25 °C. What becomes of the product load of the 2 °C room?',
      solution: ['Δθ = 15 − 4 = 11 °C instead of 21 °C.', 'Q = 20,000 × 3.8 × 11 / 72,000 ≈ 11.6 kW: almost half.'],
    },
    {
      type: 'exercise',
      question: 'We size for 20 h of running instead of 18 h. What cooling capacity?',
      solution: ['Q_0 = 44.9 × 24 / 20 ≈ 53.9 kW.', 'Less installed capacity, but also less reserve and less time to defrost.'],
    },
  ],
};
