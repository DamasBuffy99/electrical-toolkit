import { TopicContent } from '../../types';

export const spNeedsContent: TopicContent = {
  title: 'How much water, how high?',
  subtitle: 'In Sonkélé, the borehole’s diesel pump breaks down two months a year and the women go back to the pond. Before talking about panels, Fanta Coulibaly counts the litres, reads the borehole pumping test and calculates how high the water must be lifted.',
  blocks: [
    { type: 'scene', text: 'Month 1 · Sonkélé village, with Adama Ouédraogo (village chief) and Rokia Sanogo (water committee treasurer)' },
    {
      type: 'objectives',
      items: [
        'Estimate a village’s water demand ten years ahead.',
        'Read a pumping test: static level, dynamic level, drawdown.',
        'Calculate the total dynamic head (TDH) including friction losses.',
        'Convert the demand into hydraulic energy and choose the design month.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '75 m³/day', label: 'daily demand in 10 years' },
        { value: '61 m', label: 'total dynamic head' },
        { value: '12.5 kWh/day', label: 'hydraulic energy to supply' },
        { value: 'April', label: 'most demanding month' },
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Adama Ouédraogo',
      role: 'client',
      text: 'The diesel pump broke again in March. Two months with no water in the tower, and diesel costs more every year. People don’t want to pay for a pump that doesn’t work any more.',
    },
    {
      type: 'dialogue',
      speaker: 'Fanta Coulibaly',
      role: 'engineer',
      text: 'A solar pump has no diesel and no oil changes, and its most frequent fault is fixed by replacing one part. But it only pumps when the sun shines: so we must know the demand well and store water, not electricity. Let’s start by counting.',
    },

    { type: 'heading', text: '1 · Water demand' },
    {
      type: 'calc',
      title: 'Daily demand in 10 years',
      steps: [
        { label: 'Population: 1,500 people, growing 3 % a year', formula: 'N = 1,500 × 1.03^{10} ≈ 2,000 people' },
        { label: 'Consumption at the standpipes: 30 L per person per day', formula: '2,000 × 30 = 60 m³/day' },
        { label: 'School (450 pupils × 5 L) and health post; trough for small livestock', formula: '3 + 5 = 8 m³/day' },
        { label: 'Network and standpipe losses: 10 %', formula: '(60 + 8) × 1.1 ≈ 75 m³/day' },
      ],
      result: '75 m³ a day to supply ten years from now',
    },
    {
      type: 'table',
      headers: ['Period', 'Demand (m³/day)', 'Equivalent sun (h)', 'Demand / sun ratio'],
      rows: [
        ['April (end of dry season)', '75', '5.8', '12.9'],
        ['December (harmattan)', '65', '5.2', '12.5'],
        ['August (rains, wells full)', '55', '4.5', '12.2'],
      ],
    },
    {
      type: 'note',
      text: 'The design month is not necessarily the least sunny one: it is the one with the highest demand / sun ratio. In Sonkélé it is April, when it is hottest and the traditional wells are dry. In August the sun drops, but the village drinks rainwater.',
    },

    { type: 'heading', text: '2 · What the borehole says' },
    {
      type: 'dialogue',
      speaker: 'Rokia Sanogo',
      role: 'client',
      text: 'The borehole was drilled in 2009 by a project. We kept the file in the committee’s strongbox; I don’t know what’s in it.',
    },
    {
      type: 'table',
      headers: ['Pumping test data', 'Value', 'What it means'],
      rows: [
        ['Borehole depth', '60 m', 'screens (filter zone) between 48 and 58 m'],
        ['Static level', '25 m', 'water level at rest'],
        ['Dynamic level at 18 m³/h, after 24 h', '37 m', 'level while pumping: 12 m drawdown'],
        ['Recommended operating yield', '18 m³/h maximum', 'beyond it, the level drops too far'],
        ['Pump setting depth', '45 m', '8 m below the dynamic level, above the screens'],
      ],
    },
    {
      type: 'text',
      text: 'The borehole can deliver 18 m³/h. A solar pump delivers most around noon: its peak flow must not exceed that value, otherwise the level drops down to the pump, which runs dry and burns out.',
    },

    { type: 'heading', text: '3 · Total dynamic head' },
    {
      type: 'calc',
      title: 'TDH at peak flow (18 m³/h)',
      steps: [
        { label: 'Dynamic level in the borehole', formula: 'H_{1} = 37 m' },
        { label: 'Ground level difference between borehole and water tower', formula: 'H_{2} = 3 m' },
        { label: 'Inlet at the top of the water tower tank', formula: 'H_{3} = 15 m' },
        { label: 'Friction: 45 m of riser + 400 m of DN90 PE, 1.25 m/100 m, + 10 % for fittings', formula: 'ΔH = 445 × 0.0125 × 1.1 ≈ 6 m' },
        { label: 'Total dynamic head', formula: 'TDH = 37 + 3 + 15 + 6 = 61 m' },
      ],
      result: 'TDH = 61 m',
    },
    {
      type: 'note',
      text: 'With a DN63 pipe, as in the 2009 project, velocity would exceed 2 m/s at 18 m³/h and friction losses would exceed 30 m: the pump would spend more than a third of its energy rubbing water against the pipe. Fanta has the line replaced with DN90.',
    },

    { type: 'heading', text: '4 · The energy to supply' },
    {
      type: 'calc',
      title: 'Daily hydraulic energy',
      steps: [
        { label: 'Energy to lift a volume V to the head TDH', formula: 'E_{h} = ρ × g × V × TDH = \\frac{V × TDH}{367}  (kWh, V in m³)' },
        { label: 'April: 75 m³ to 61 m', formula: 'E_{h} = \\frac{75 × 61}{367} ≈ 12.5 kWh/day' },
        { label: 'Average daily efficiency: pump 65 %, motor 84 %, drive 96 %, variable-speed operation', formula: 'η ≈ 0.45' },
        { label: 'Electrical energy to produce', formula: 'E_{el} = \\frac{12.5}{0.45} ≈ 27.7 kWh/day' },
      ],
      result: 'About 28 electrical kWh a day in April: the basis for sizing the array',
    },
    { type: 'fiche', id: 'pv-design-steps', why: 'The general method: from demand to peak power.' },

    { type: 'heading', text: '5 · What the standards say' },
    {
      type: 'norms',
      title: 'Water supply and solar pumping',
      rows: [
        { norm: 'WHO / Sphere standards', rule: 'At least 15 to 20 L per person per day for drinking, cooking and basic hygiene; water point within 500 m.', result: '30 L/day chosen' },
        { norm: 'National rural water standards', rule: '20 to 35 L/day per person at standpipes, one standpipe per 300 to 500 people.', result: '4 standpipes' },
        { norm: 'IEC 62253', rule: 'Photovoltaic pumping systems: design requirements and performance measurement.', result: 'project framework' },
        { norm: 'ISO 9906', rule: 'Pump acceptance tests: flow, head, efficiency, tolerances.', result: 'duty point verified' },
      ],
    },
    {
      type: 'regional',
      text: 'Across West Africa, thousands of boreholes fitted with diesel or hand pumps stand broken for lack of spare parts or fuel. Rural water programmes increasingly replace diesel pumps with solar pumps, a water tower and a few standpipes: what is called a simplified piped water supply.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'Demand is calculated ten years ahead, including community uses and losses.',
        'The design month is the one with the highest demand / sun ratio.',
        'TDH = dynamic level + ground difference + tank height + friction losses.',
        'E_h = V × TDH / 367; the efficiency of the whole chain then gives the electrical energy.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'If the committee chooses 20 L per person instead of 30, what do the daily demand and hydraulic energy become?',
      solution: ['(2,000 × 20 + 8,000) × 1.1 = 52.8 m³/day.', 'E_h = 52.8 × 61 / 367 ≈ 8.8 kWh/day, i.e. 30 % less.'],
    },
    {
      type: 'exercise',
      question: 'In a drought year the static level falls 5 m by the end of the dry season. What is the new TDH?',
      solution: ['The dynamic level becomes 42 m (drawdown stays roughly the same).', 'TDH = 42 + 3 + 15 + 6 = 66 m: 8 % more head, so 8 % less water for the same energy.'],
    },
  ],
};
