import { TopicContent } from '../../types';

export const villaBasicsContent: TopicContent = {
  title: 'Volts, amps, watts: explaining it to the client',
  subtitle: 'Koffi wants to understand his future contract and his future bill. Awa explains voltage, current, power and energy with simple images, then with the real figures of his house.',
  blocks: [
    { type: 'scene', text: 'Week 2 · At the Mensahs’, over coffee' },
    {
      type: 'dialogue',
      speaker: 'Koffi Mensah',
      role: 'client',
      text: 'The utility asks how many kVA I want. One colleague says take the maximum, another the minimum. And I don’t understand the difference between kW, kVA and kWh…',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Let’s use water. Voltage is the pressure in the pipe. Current is the flow. Power is what the water can turn. And energy is all the water used over the month: that’s what you pay for.',
    },
    { type: 'illustration', name: 'water-analogy', caption: 'Voltage = pressure, current = flow: the water analogy' },

    { type: 'heading', text: 'Voltage, current, power' },
    {
      type: 'table',
      headers: ['Quantity', 'Unit', 'Image', 'At the Mensahs’'],
      rows: [
        ['Voltage U', 'volt (V)', 'pressure', '230 V between a phase and neutral'],
        ['Current I', 'ampere (A)', 'flow', '6.5 A for the water heater'],
        ['Power P', 'watt (W)', 'what gets turned', '1,500 W for the water heater'],
        ['Energy E', 'watt-hour (Wh, kWh)', 'water used over time', '3 kWh per day for the water heater'],
      ],
    },
    { type: 'formula', text: 'P = U × I     and     E = P × t' },
    {
      type: 'text',
      text: 'Awa does the sum in front of them with the water heater: 1,500 W at 230 V is about 6.5 A. If it heats 2 hours a day, it uses 1.5 kW × 2 h = 3 kWh per day.',
    },
    { type: 'formula', text: 'Water heater: I = \\frac{1,500}{230} ≈ 6.5 A   ;   E = 1.5 kW × 2 h = 3 kWh' },

    { type: 'heading', text: 'kW or kVA: why two units?' },
    {
      type: 'dialogue',
      speaker: 'Koffi Mensah',
      role: 'client',
      text: 'And the “VA” then? If the water heater is 1,500 W, is it also 1,500 VA?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'For that one, yes: a heating element turns all the current into heat. But a motor, like your AC compressor or your pump, also draws a “magnetising” current that does no work. The cable and the meter still have to carry it. kVA measure everything the cable carries; kW only what does work.',
    },
    { type: 'illustration', name: 'power-triangle', caption: 'Active (kW), reactive (kvar) and apparent (kVA) power' },
    { type: 'formula', text: 'P (W) = S (VA) × cos φ   ;   I = \\frac{P}{U × cos φ}' },
    {
      type: 'text',
      text: 'Example: the living-room air conditioner draws 1,800 W with a power factor of 0.9. The current is 1,800 / (230 × 0.9) ≈ 8.7 A, a bit more than the 7.8 A you would get by forgetting cos φ. That is why subscriptions, transformers and generators are rated in kVA.',
    },
    { type: 'formula', text: 'Living-room AC: I = \\frac{1,800}{230 × 0.9} ≈ 8.7 A' },

    { type: 'heading', text: 'Single-phase or three-phase' },
    {
      type: 'text',
      text: 'The public network distributes three phases shifted in time. Between a phase and neutral you measure 230 V; between two phases, 400 V. A house can be connected to one phase (single-phase) or to all three (three-phase).',
    },
    { type: 'illustration', name: 'phases', caption: 'Three shifted phases: 230 V phase-neutral, 400 V between phases' },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Three-phase is like having three supply pipes instead of one. Your appliances all stay at 230 V, but we spread them over the three phases. Each cable carries a third as much, and losing one phase doesn’t plunge the whole house into darkness. We’ll decide together after the power balance.',
    },
    { type: 'formula', text: 'U_{phase-to-phase} = √3 × U_{phase-to-neutral} = 1.732 × 230 ≈ 400 V' },

    { type: 'heading', text: 'Power is not energy' },
    {
      type: 'text',
      text: 'Finally, Awa separates the two figures that matter to the Mensahs: the subscribed power (in kVA), which sets what the house can draw at the same time, and the energy consumed (in kWh), which makes the bill. It is like a car’s top speed and the kilometres driven in a month.',
    },
    {
      type: 'table',
      headers: ['Use', 'Calculation', 'kWh / day'],
      rows: [
        ['3 bedroom ACs', '3 × 0.9 kW × 8 h × 60% running', '13.0'],
        ['Living-room AC', '1.8 kW × 5 h × 60%', '5.4'],
        ['Water heater', '1.5 kW × 2 h', '3.0'],
        ['Fridge + freezer', '0.3 kW × 24 h × 40%', '2.9'],
        ['TV, computers, misc.', '0.35 kW × 6 h', '2.1'],
        ['LED lighting', '0.36 kW × 5 h', '1.8'],
        ['Oven, microwave', 'average', '1.5'],
        ['Borehole pump', '1.4 kW × 1 h', '1.4'],
        ['Washing machine', 'average', '1.0'],
        ['Total', '', '≈ 32 kWh/day, i.e. ≈ 960 kWh/month'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Esther Mensah',
      role: 'client',
      text: 'More than half for air conditioning!',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Yes, about 57%. That’s why I’ll recommend well-rated inverter air conditioners, a sensible setpoint and windows shaded from the sun. One degree higher on the setpoint means a few percent less on every monthly bill.',
    },
    {
      type: 'regional',
      text: 'Bills are usually calculated in consumption bands, with a standing charge that depends on the subscribed kVA. As an order of magnitude, a residential kWh often costs around 100 to 130 FCFA depending on the country and band: 960 kWh a month is therefore about 100,000 FCFA before tax. Check the utility’s tariff (SBEE, CEET, CIE, Senelec…) and keep in mind that prepaid meters are very common.',
    },
    { type: 'fiche', id: 'electrical-basics', why: 'Voltage, current, power, cos φ, single- and three-phase in detail.' },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'Voltage = pressure, current = flow, power = what does work, energy = what you pay for.',
        'P = U × I × cos φ: motors (AC, pump) draw more current than their watts suggest.',
        'You subscribe to kVA (simultaneous power) and pay for kWh (energy over time).',
        'In three-phase, appliances stay at 230 V but are spread over three phases.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'A 1,000 W iron is used 30 minutes a day. What current does it draw, and how much does it use per month?',
      solution: ['I = 1,000 / 230 ≈ 4.3 A (heating element: cos φ = 1).', 'E = 1 kW × 0.5 h × 30 days = 15 kWh per month.'],
    },
    {
      type: 'exercise',
      question: 'The pump draws 1.4 kW with a power factor of 0.8. What current? What apparent power?',
      solution: ['I = 1,400 / (230 × 0.8) ≈ 7.6 A.', 'S = P / cos φ = 1,400 / 0.8 = 1,750 VA, i.e. 1.75 kVA.'],
    },
  ],
};
