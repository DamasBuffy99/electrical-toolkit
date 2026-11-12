import { TopicContent } from '../../types';

export const scNeedsContent: TopicContent = {
  title: 'The load balance of a health centre',
  subtitle: 'In Kalé, the health centre has never seen the grid. A 40 kVA generator runs 14 hours a day, nights are spent by torchlight and vaccines depend on gas fridges. Fanta Coulibaly comes with Dr Mamadou Sy to draw up the balance of every department.',
  blocks: [
    { type: 'scene', text: 'Month 1 · Kalé health centre, with Dr Mamadou Sy and Aminata Koné (midwife)' },
    {
      type: 'objectives',
      items: [
        'Draw up the energy balance of an off-grid health facility, department by department.',
        'Identify critical loads, the simultaneous peak and the largest starting surge.',
        'Measure what the generator costs today.',
        'Set the goals of the future system: continuity, solar share, generator as backup.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '≈ 134 kWh/day', label: 'total consumption' },
        { value: '43 kWh', label: 'used at night' },
        { value: '17.2 kW', label: 'simultaneous peak, ≈ 5.7 kW per phase' },
        { value: '≈ 14 M FCFA/yr', label: 'of diesel and maintenance today' },
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Dr Mamadou Sy',
      role: 'client',
      text: 'Last night Aminata delivered a baby by headlamp, because we switch the generator off at 10 pm to save diesel. And every week we wonder whether the vaccines stayed cold.',
    },
    {
      type: 'dialogue',
      speaker: 'Fanta Coulibaly',
      role: 'engineer',
      text: 'Solar can change that, provided nothing is forgotten in the balance. In a health centre, a forgotten load means an outage on the day it is needed most. We’ll go round every department together, with the real hours of use.',
    },

    { type: 'heading', text: '1 · The balance, department by department' },
    { type: 'illustration', name: 'pv-system', props: { highlight: 'loads' }, caption: 'An off-grid system: everything consumed must be produced on site, night and day' },
    {
      type: 'consumptionSheet',
      sheet: {
        project: 'Kalé health centre',
        simultaneity: 0.85,
        items: [
          { name: 'Indoor and outdoor LED lighting', power: 1200, qty: 1, hDay: 3, hNight: 8 },
          { name: 'Vaccine and medicine fridges', power: 150, qty: 3, hDay: 8, hNight: 8, surge: 800 },
          { name: 'Maternity and delivery room AC (average)', power: 1200, qty: 2, hDay: 8, hNight: 6 },
          { name: 'Laboratory and pharmacy AC (average)', power: 900, qty: 2, hDay: 9, hNight: 0 },
          { name: 'Ward fans', power: 60, qty: 12, hDay: 6, hNight: 8 },
          { name: 'Laboratory (analysers, centrifuge)', power: 2500, qty: 1, hDay: 6, hNight: 0, surge: 3000 },
          { name: 'Sterilisation autoclave (three-phase)', power: 6000, qty: 1, hDay: 1.5, hNight: 0 },
          { name: 'Oxygen concentrators', power: 400, qty: 2, hDay: 6, hNight: 6 },
          { name: 'IT, ultrasound, radio', power: 600, qty: 1, hDay: 8, hNight: 2 },
          { name: 'Borehole pump (3 kW)', power: 3000, qty: 1, hDay: 3, hNight: 0, surge: 9000 },
          { name: 'Staff housing', power: 800, qty: 1, hDay: 2, hNight: 5 },
        ],
      },
    },
    {
      type: 'calc',
      title: 'What the balance says',
      steps: [
        { label: 'Energy per day', formula: 'E ≈ 91.1 (day) + 43.4 (night) ≈ 134.5 kWh/day' },
        { label: 'Simultaneous peak', formula: 'P = 0.85 × 20 270 ≈ 17.2 kW   →   ≈ 5.7 kW per phase' },
        { label: 'Largest surge: the pump, on phase 1', formula: 'I_{st} ≈ 3 × I_n   →   ≈ 9 kW for 1 to 2 s' },
        { label: 'Critical loads (cold chain, oxygen, delivery, lighting)', formula: '≈ 5.5 kW to guarantee at any hour' },
      ],
      result: '134 kWh a day, a third of it at night; 17 kW peak; a pump drawing 9 kW at start-up',
    },
    {
      type: 'note',
      text: 'The balance also shows what can be shifted: the autoclave (6 kW), the pump and the laboratory will run in the middle of the day, when the sun produces most. That is demand management: each kWh used directly in the daytime avoids going through the battery.',
    },

    { type: 'heading', text: '2 · What the current situation costs' },
    {
      type: 'calc',
      title: 'The 40 kVA generator',
      steps: [
        { label: 'Running 14 h a day, often at 25–30 % load', formula: 'consumption ≈ 3.6 L/h  →  ≈ 50 L/day' },
        { label: 'Diesel delivered to Kalé (transport included)', formula: '50 × 700 × 365 ≈ 12.8 million FCFA/yr' },
        { label: 'Oil changes, filters, parts, overhaul every 1,000 h', formula: '≈ 1.5 million FCFA/yr' },
      ],
      result: '≈ 14 million FCFA a year, for 10 hours of night without electricity',
    },
    {
      type: 'decision',
      title: 'System goals',
      choice: 'Electricity 24 hours a day, at least 85 % solar energy over the year, generator kept as backup and controlled automatically',
      reasons: [
        'Night-time continuity is the first medical requirement (deliveries, oxygen, vaccines).',
        'Aiming for 100 % solar would require a huge battery for the few sunless days of the rainy season.',
        'The existing generator, started only when the battery is low, becomes cheap insurance.',
      ],
      rejected: 'A 100 % solar system with no generator: 2 to 3 times more battery to cover three rainy days, and no reserve in case of failure.',
    },
    { type: 'fiche', id: 'pv-design-steps', why: 'The sizing method for an off-grid system.' },

    { type: 'heading', text: '3 · What the standards say' },
    {
      type: 'norms',
      title: 'Electrifying health facilities',
      rows: [
        { norm: 'WHO / UNICEF (PQS)', rule: 'Approved vaccine fridges, including solar direct-drive models; 2–8 °C cold chain.', result: 'vaccine cold chain guaranteed' },
        { norm: 'IEC 62257', rule: 'Rural electrification systems: needs assessment, design, safety.', result: 'design framework' },
        { norm: 'IEC 60364-7-710', rule: 'Medical locations: continuity of supply by group of locations.', result: 'delivery room has priority' },
        { norm: 'IEEE 1562 / 1013', rule: 'Sizing arrays and batteries of stand-alone PV systems.', result: 'day / night balance' },
      ],
    },
    {
      type: 'regional',
      text: 'Programmes such as the health facility electrification initiatives support solar equipment for rural health centres in West Africa. They usually require a detailed balance, a maintenance contract and remote monitoring. Fanta prepares the file for the health district with these three elements.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'Off-grid, the balance must be exhaustive: a forgotten load becomes an outage.',
        'Separate day and night; identify the peak per phase and the largest surge.',
        'Shift large consumers (autoclave, pump, laboratory) to sunny hours.',
        'The cost of today’s diesel sets the project’s economic stakes.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'If the autoclave ran in the evening (1.5 h at night), what would the night-time energy become?',
      solution: ['43.4 + 6 × 1.5 = 52.4 kWh, i.e. 21 % more.', 'The battery would have to grow accordingly: scheduling sterilisation in the daytime is a direct saving.'],
    },
    {
      type: 'exercise',
      question: 'Today the generator supplies about 110 kWh a day with 50 L of diesel. What does a generator kWh cost?',
      solution: ['50 / 110 ≈ 0.45 L/kWh; 0.45 × 700 ≈ 318 FCFA of diesel per kWh.', 'With maintenance, nearly 360 FCFA/kWh: three times the city grid price. That is the cost solar will replace.'],
    },
  ],
};
