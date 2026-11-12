import { TopicContent } from '../../types';
import { fig } from '../../topics/clim/fig';

export const cvBriefContent: TopicContent = {
  title: 'Comfort can be measured',
  subtitle: 'Koffi wants “cooling like in a hotel, 18 °C”. Ousmane Cissé, the HVAC engineer at Lumen Ingénierie, explains what comfort means in the tropics, sets the design conditions and starts by cutting the heat before buying cooling.',
  blocks: [
    { type: 'scene', text: 'Week 2 · Design office, with Koffi, Esther and Jules Agbo' },
    {
      type: 'objectives',
      items: [
        'Understand what makes comfort: air temperature, humidity, air movement, surfaces.',
        'Set the outdoor design conditions and the indoor set point.',
        'Measure the cost of one degree lower on the set point.',
        'Reduce solar gains before sizing the machines.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '32 °C', label: 'outdoor design, 25.5 g water/kg' },
        { value: '26 °C · 50 %', label: 'indoor set point' },
        { value: '≈ 7 %', label: 'more consumption per degree lower' },
        { value: '− 1.2 kW', label: 'saved by the living-room shading' },
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'team',
      text: 'Koffi, Esther, meet Ousmane Cissé, our HVAC engineer. I’ve reserved four circuits in the board for your air conditioners; he’s the one who will say how much cooling you need and which units to install.',
    },
    {
      type: 'dialogue',
      speaker: 'Koffi Mensah',
      role: 'client',
      text: 'I want cooling like in a hotel: 18 °C in the whole house.',
    },
    {
      type: 'dialogue',
      speaker: 'Ousmane Cissé',
      role: 'engineer',
      text: 'At 18 °C you’ll feel cold within an hour, and stepping out onto the 33 °C terrace will be a shock. Comfort isn’t a low temperature: it’s a balance of temperature, humidity, air movement and heat radiated by the walls. In our climate we aim for 25 to 26 °C with dry air, and it’s the moisture we remove that makes it feel fresh.',
    },

    { type: 'heading', text: '1 · The four comfort parameters' },
    { type: 'illustration', name: 'clim-comfort', caption: 'The comfort zone on the psychrometric chart: temperature and humidity together' },
    {
      type: 'table',
      headers: ['Parameter', 'Effect', 'Target value'],
      rows: [
        ['Air temperature', 'convective exchange with the skin', '25 to 27 °C in a hot climate'],
        ['Relative humidity', 'sweat evaporates poorly in humid air', '40 to 60 %'],
        ['Air speed', 'cools, but becomes a draught', '≤ 0.2 m/s in the occupied zone'],
        ['Surface temperature', 'a hot wall or window radiates to the body', 'close to the air temperature'],
      ],
    },
    fig('p021_0', 'Table 1.4 of the IEPF guide — recommended indoor comfort conditions'),
    {
      type: 'calc',
      title: 'What 8 degrees lower costs',
      steps: [
        { label: 'Set-point difference asked for by Koffi', formula: 'Δθ = 26 − 18 = 8 °C' },
        { label: 'Rule of thumb: each degree lower adds about 7 % to consumption', formula: '1.07^{8} ≈ 1.72' },
        { label: 'At 18 °C, moisture also condenses on cold walls and grilles', formula: 'outdoor air dew point ≈ 28 °C > 18 °C' },
      ],
      result: 'About + 70 % consumption, and condensation risks: set point chosen 26 °C, adjustable from 24 to 27 °C',
    },
    {
      type: 'decision',
      title: 'Indoor conditions',
      choice: '26 °C and 50 % relative humidity in the air-conditioned rooms',
      reasons: [
        'It is the comfort zone recommended by the IEPF guide for hot, humid climates.',
        'The gap with outdoors stays at 6 to 7 °C: no thermal shock when going out.',
        'With air at 50 %, 26 °C feels cool: less sensible cooling needs to be bought.',
      ],
      rejected: '18 to 20 °C: discomfort from overcooling, condensation, and an almost doubled bill.',
    },

    { type: 'heading', text: '2 · Outdoor design conditions' },
    {
      type: 'text',
      text: 'We don’t design for the hottest day in history, but for conditions exceeded only a few hours a year: the design conditions. They are read from the IEPF guide tables or from standards, city by city. For a West African coastal city, Ousmane uses 32 °C and an absolute humidity of 25.5 g of water per kg of dry air.',
    },
    fig('p020_0', 'Table 1.3 of the IEPF guide — outdoor design conditions by city (temperature, humidity, wind)'),
    {
      type: 'calc',
      title: 'Design differences',
      steps: [
        { label: 'Outdoor – indoor temperature difference', formula: 'Δθ = θ_e − θ_i = 32 − 26 = 6 °C' },
        { label: 'Absolute humidity difference (26 °C, 50 % ≈ 10.8 g/kg)', formula: 'Δω = ω_e − ω_i = 25.5 − 10.8 = 14.7 g/kg' },
      ],
      result: 'Δθ = 6 °C; Δω = 14.7 g/kg: humidity will weigh as much as temperature in the fresh-air load',
    },
    { type: 'fiche', id: 'clim-intro', why: 'Tropical climates, comfort and design conditions.' },
    { type: 'fiche', id: 'abc-psychro', why: 'Humid air: absolute and relative humidity, dew point.' },

    { type: 'heading', text: '3 · First cut the heat, then buy cooling' },
    {
      type: 'dialogue',
      speaker: 'Jules Agbo (architect)',
      role: 'team',
      text: 'The living room has a large west-facing picture window onto the garden. It’s the highlight of the house.',
    },
    {
      type: 'dialogue',
      speaker: 'Ousmane Cissé',
      role: 'engineer',
      text: 'And it’s a radiator at 4 pm. The western sun comes in low, right when the living room is in use. I suggest a roof overhang and adjustable vertical louvres: the view stays, direct sun no longer gets in.',
    },
    fig('p164_0', 'Figure 6.4 of the guide — horizontal, vertical and combined shading devices'),
    {
      type: 'calc',
      title: 'What the shading of the west window (6 m²) saves',
      steps: [
        { label: 'Radiation on west glazing at 4 pm (order of magnitude, guide tables)', formula: 'R_v ≈ 450 W/m²' },
        { label: 'Unprotected (clear glazing, g ≈ 0.85)', formula: 'Q = g × S × R_v = 0.85 × 6 × 450 ≈ 2 300 W' },
        { label: 'With overhang and louvres (reduction factor ≈ 0.4)', formula: 'Q ≈ 0.4 × 2 300 ≈ 920 W' },
      ],
      result: 'About 1.2 kW less for the living room alone (the rest of the glazing is counted in the load): the split drops from 24,000 to 18,000 BTU/h',
    },
    {
      type: 'decision',
      title: 'Solar protection',
      choice: '80 cm roof overhang and adjustable vertical louvres on the west window; east and north bedroom windows protected by shutters',
      reasons: [
        'A watt of sun stopped outside costs nothing to run; a watt of cooling is paid for every day.',
        'The extra cost of the louvres is offset by a smaller split and a lower bill.',
      ],
      rejected: 'A reflective film alone: less effective than external shading, and it darkens the living room all day.',
    },
    { type: 'fiche', id: 'clim-building', why: 'Orientation, solar protection, thermal mass and insulation.' },

    { type: 'heading', text: '4 · What the standards say' },
    {
      type: 'norms',
      title: 'Defining comfort',
      rows: [
        { norm: 'ISO 7730', rule: 'PMV and PPD indices: comfort computed from temperature, humidity, air speed, clothing and activity.', result: '26 °C, light clothing: PMV ≈ 0' },
        { norm: 'ASHRAE 55', rule: 'Comfort zone on the psychrometric chart; adaptive method for naturally ventilated buildings.', result: 'same zone' },
        { norm: 'EN 16798-1', rule: 'Indoor environment categories I to IV; 25.5 °C in summer for category II (offices, homes).', result: 'category II' },
        { norm: 'IEPF guide', rule: 'Outdoor and indoor design conditions by city for Africa and the Indian Ocean.', result: '32 °C / 26 °C' },
      ],
    },
    {
      type: 'regional',
      text: 'Many clients set their remote to 16 or 18 °C “so it cools faster”. That’s wrong: the split cools at the same rate, it just stops later. Ousmane will have a minimum set point of 24 °C configured on the remotes, and Esther has already planned to explain it to their housekeeper. Mind ceilings and roofs too: an uninsulated slab in full sun can exceed 50 °C on its surface.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'Comfort combines temperature, humidity, air speed and surface temperature.',
        'In the tropics, aim for 25 to 26 °C and 50 % humidity; removing moisture does as much as lowering the temperature.',
        'Design for design conditions, not for a record.',
        'Each degree lower on the set point costs about 7 % more energy.',
        'External shading is the cheapest cooling.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'A client sets the AC to 22 °C instead of 26 °C. Roughly how much extra consumption?',
      solution: ['Four degrees: 1.07⁴ ≈ 1.31.', 'About 30 % more consumption.'],
    },
    {
      type: 'exercise',
      question: 'A 4 m² south window receives 150 W/m² at peak hour, clear glazing g = 0.85, unprotected. What solar gain?',
      solution: ['Q = 0.85 × 4 × 150 ≈ 510 W.', 'Facing south at our latitudes close to the equator, the sun is high: a simple overhang greatly reduces it.'],
    },
  ],
};
