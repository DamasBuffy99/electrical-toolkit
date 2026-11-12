import { TopicContent } from '../../types';

export const scBatteryContent: TopicContent = {
  title: 'The battery bank',
  subtitle: 'The battery must last the night, the cloudy morning that follows, and ten years in the heat. Fanta compares lithium and stationary lead-acid, calculates capacity, currents and room ventilation, and explains to Dr Sy why the cheapest battery to buy is often the dearest.',
  blocks: [
    { type: 'scene', text: 'Month 2 · Design office, with Dr Mamadou Sy' },
    {
      type: 'objectives',
      items: [
        'Size a battery from the night-time energy and a reserve.',
        'Compare lithium (LFP) and stationary lead-acid (OPzV) over their life.',
        'Check charge and discharge currents.',
        'Design the battery room: temperature, ventilation, safety.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '52 kWh', label: 'usable energy to guarantee' },
        { value: '71.7 kWh', label: '14 LFP modules of 5.12 kWh' },
        { value: '≈ 0.25 C', label: 'discharge at the 17 kW peak' },
        { value: '≤ 30 °C', label: 'target temperature in the battery room' },
      ],
    },

    { type: 'heading', text: '1 · How many kWh?' },
    { type: 'illustration', name: 'pv-system', props: { highlight: 'batteries' }, caption: 'The battery bridges daytime sunshine and night-time needs' },
    {
      type: 'calc',
      title: 'Lithium battery capacity',
      steps: [
        { label: 'Night-time energy (balance)', formula: 'E_{night} = 43.4 kWh' },
        { label: '20 % reserve for an early sunless morning, before the generator starts', formula: 'E_{usable} = 43.4 × 1.2 ≈ 52 kWh' },
        { label: 'LFP: 85 % usable discharge (generator starts at 30 %, ageing margin), 95 % efficiency', formula: 'C = \\frac{52}{0.85 × 0.95} ≈ 64.4 kWh' },
        { label: '5.12 kWh modules (51.2 V, 100 Ah) approved for the Sunny Islands', formula: '14 modules = 71.7 kWh (1 400 Ah)' },
      ],
      result: 'LFP battery 51.2 V – 1,400 Ah (71.7 kWh), split between the two clusters',
    },
    {
      type: 'calc',
      title: 'Battery currents',
      steps: [
        { label: 'Discharge at the 17.2 kW peak (94 % inverter efficiency)', formula: 'I = \\frac{17 200}{48 × 0.94} ≈ 381 A  →  \\frac{381}{1 400} ≈ 0.27 C' },
        { label: 'Average night discharge (43.4 kWh over 12 h)', formula: 'I ≈ \\frac{3 600}{48} ≈ 75 A  (≈ 0.05 C)' },
        { label: 'Maximum charge at midday (≈ 20 kW of solar surplus)', formula: 'I ≈ \\frac{20 000}{54} ≈ 370 A  (≈ 0.26 C)' },
      ],
      result: 'All currents stay below 0.5 C, the usual limit of LFP modules: the battery works without stress',
    },
    { type: 'fiche', id: 'pv-batteries-controllers', why: 'Charge current, discharge current, battery types.' },

    { type: 'heading', text: '2 · Lithium or stationary lead-acid?' },
    {
      type: 'table',
      headers: ['Criterion', 'LFP 71.7 kWh', 'OPzV lead-acid for the same usable energy'],
      rows: [
        ['Usable discharge', '85 %', '50 % to reach 1,500 cycles'],
        ['Nominal capacity', '71.7 kWh (1,400 Ah at 48 V)', '≈ 122 kWh (24 cells of 2 V – 2,500 Ah)'],
        ['Mass', '≈ 650 kg', '≈ 4 tonnes'],
        ['Life at 30 °C', '≈ 6,000 cycles, 15 years', '≈ 1,500 cycles, 5 to 6 years'],
        ['Cycle efficiency', '≈ 95 %', '≈ 80 %'],
        ['Maintenance', 'none, monitored by the BMS', 'voltage checks, equalisation, ventilation'],
        ['Purchase price', '≈ 1.5 times dearer', 'reference'],
      ],
    },
    {
      type: 'calc',
      title: 'Cost over 15 years (orders of magnitude)',
      steps: [
        { label: 'LFP: a single bank over 15 years', formula: '≈ 22 M FCFA' },
        { label: 'OPzV: two replacements over 15 years', formula: '≈ 15 M × 3 = 45 M FCFA' },
        { label: 'Extra energy lost by lead-acid (80 % efficiency instead of 95 %)', formula: '≈ 43 kWh × 15 % × 365 ≈ 2.4 MWh/yr of extra solar or diesel' },
      ],
      result: 'Lithium costs half as much over the life of the centre',
    },
    {
      type: 'decision',
      title: 'Battery technology',
      choice: 'Lithium iron phosphate (LFP) in SMA-approved modules, with a BMS communicating with the Sunny Islands',
      reasons: [
        'Half the cost over 15 years, despite a higher purchase price.',
        '650 kg instead of 4 tonnes: no reinforced slab, transport by pick-up to Kalé possible.',
        'No electrolyte maintenance: a major advantage for a remote site without a technician on site.',
      ],
      rejected: 'OPzV stationary lead-acid: robust and cheaper to buy, but three banks over 15 years, mandatory ventilation and 4 tonnes to house.',
    },

    { type: 'heading', text: '3 · The battery room' },
    {
      type: 'text',
      text: 'Temperature is the enemy of batteries: each 10 °C above 25 °C roughly halves the life of a lead-acid battery, and noticeably shortens lithium’s. Fanta places the batteries in a separate room inside the plant room, facing north, with an insulated roof, ventilated and cooled by a small inverter AC unit powered by the system itself.',
    },
    {
      type: 'calc',
      title: 'Had lead-acid been chosen: mandatory ventilation',
      steps: [
        { label: 'Hydrogen released during charging (EN IEC 62485-2 method)', formula: 'Q = 0.05 × n × I_{gas} × C × 10^{−3}  (m³/h)' },
        { label: '24 cells, 2,500 Ah, I_{gas} = 8 mA/Ah during boost charge for sealed lead-acid', formula: 'Q = 0.05 × 24 × 8 × 2 500 × 10^{−3} = 24 m³/h' },
      ],
      result: 'At least 24 m³/h of ventilation would be required; an LFP battery releases no hydrogen in normal operation',
    },
    {
      type: 'bullets',
      items: [
        'Each battery branch protected by a DC fuse or breaker as close as possible to the terminals (several kA of short circuit).',
        'Equal-length cables between each module and the busbar, so currents share evenly.',
        'Suitable extinguisher (CO₂ or powder) outside the room, warning sign, restricted access.',
        'Monitoring of state of charge, temperatures and BMS alarms on the online portal.',
      ],
    },

    { type: 'heading', text: '4 · What the standards say' },
    {
      type: 'norms',
      title: 'Stationary batteries',
      rows: [
        { norm: 'IEC 62619 / IEC 62620', rule: 'Safety and performance of stationary lithium batteries.', result: 'certified LFP modules' },
        { norm: 'EN IEC 62485-2', rule: 'Safety of battery installations: ventilation, distances, protection.', result: '24 m³/h if lead-acid' },
        { norm: 'IEC 60896-21/22', rule: 'Valve-regulated stationary lead-acid batteries: tests and requirements.', result: 'OPzV reference' },
        { norm: 'NFPA 855', rule: 'Installation of energy storage systems (North America): distances, ventilation, suppression.', result: 'North American practice' },
      ],
    },
    {
      type: 'regional',
      text: 'Transport matters in rural areas: a dirt road in the rainy season, a bridge limited to 3.5 tonnes. The 4 tonnes of lead-acid batteries would have needed a lorry and several trips. Think of recycling too: used lead-acid batteries are often dismantled in poor conditions; require take-back at end of life from the supplier, whatever the technology.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'Capacity = night energy × reserve ÷ (usable discharge × efficiency).',
        'Check currents in C: discharge at peak and maximum charge in the sun.',
        'Lithium costs more to buy, half as much over its life, and needs neither maintenance nor hydrogen ventilation.',
        'A cool, ventilated, protected room extends the life of batteries and inverters.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'Dr Sy would like 2 days of autonomy with neither generator nor sun. What LFP capacity would be needed?',
      solution: ['Energy: 2 × 134.5 ≈ 269 kWh (two full days).', 'C = 269 / (0.85 × 0.95) ≈ 333 kWh: nearly five times the chosen battery. The backup generator is far cheaper for these rare cases.'],
    },
    {
      type: 'exercise',
      question: 'What ventilation would a lead-acid battery of 24 cells of 1,500 Ah need?',
      solution: ['Q = 0.05 × 24 × 8 × 1,500 × 10⁻³ = 14.4 m³/h.', 'Simple high and low natural ventilation sized for this flow is enough, provided it is never obstructed.'],
    },
  ],
};
