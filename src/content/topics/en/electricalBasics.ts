import { TopicContent } from '../../types';

export const electricalBasicsContent: TopicContent = {
  title: 'Electricity basics',
  subtitle: 'Voltage, current, power, phases: the vocabulary of the whole course',
  blocks: [
    {
      type: 'text',
      text: 'Before sizing anything, we need to speak the same language. This lesson sets out the few quantities and formulas used throughout the course: we will reuse them at every step.',
    },
    { type: 'illustration', name: 'water-analogy', caption: 'Electricity compared to water in a pipe' },

    { type: 'heading', text: '1 · Voltage, current and resistance' },
    {
      type: 'table',
      headers: ['Quantity', 'Unit', 'Water picture'],
      rows: [
        ['Voltage U', 'volt (V)', 'The pressure pushing the water'],
        ['Current I', 'ampere (A)', 'The water flow'],
        ['Resistance R', 'ohm (Ω)', 'A narrowing that slows the flow'],
      ],
    },
    { type: 'formula', text: "Ohm's law: U = R × I" },
    {
      type: 'text',
      text: 'The higher the pressure (voltage), the larger the flow (current). The narrower the pipe (resistance), the smaller the flow.',
    },
    { type: 'formula', text: 'Example: 2,300 W heater on 230 V → I = 10 A, R = 230 / 10 = 23 Ω' },
    {
      type: 'note',
      text: "💡 Current is what heats cables and trips breakers: that's why we calculate currents all through the course.",
    },
    { type: 'illustration', name: 'water-analogy', caption: 'U = R × I and P = U × I' },

    { type: 'heading', text: '2 · Power and energy' },
    { type: 'formula', text: 'Power: P = U × I   (in watts, W)' },
    {
      type: 'text',
      text: 'Power is what an appliance draws at a given moment. Energy is that power multiplied by the time of use: it is what we pay for and what batteries store.',
    },
    { type: 'formula', text: 'Energy: E = P × t   (in watt-hours, Wh — 1 kWh = 1,000 Wh)' },
    { type: 'formula', text: 'Example: 300 W refrigerator on for 10 h → 300 × 10 = 3,000 Wh = 3 kWh' },
    {
      type: 'table',
      headers: ['Unit', 'Equivalent'],
      rows: [
        ['1 kW', '1,000 W'],
        ['1 HP (horsepower)', '746 W — the mechanical power of motors'],
        ['1 kWh', 'What a 1,000 W appliance uses in 1 hour'],
      ],
    },

    { type: 'heading', text: '3 · With AC: W, VA and power factor' },
    {
      type: 'text',
      text: 'In buildings the current is alternating. Part of the current does no work: it magnetizes motors and transformers. So we distinguish three powers.',
    },
    {
      type: 'table',
      headers: ['Power', 'Unit', 'Role'],
      rows: [
        ['Active P', 'W', 'Does the useful work: heat, light, motion'],
        ['Reactive Q', 'var', 'Magnetizes motors and transformers'],
        ['Apparent S', 'VA', 'What the grid must supply: S = U × I'],
      ],
    },
    { type: 'formula', text: 'P = S × cos φ    ·    cos φ = power factor (between 0 and 1)' },
    {
      type: 'table',
      headers: ['Load', 'Typical pf'],
      rows: [
        ['Heater, resistor', '1'],
        ['LED lighting', '0.95'],
        ['Fluorescent lighting', '0.8'],
        ['Motors, air conditioning', '0.8 – 0.85'],
      ],
    },
    {
      type: 'note',
      text: '📌 Cables, breakers and transformers are sized in VA (or kVA), because the total current flows through them — not only the "useful" part.',
    },
    { type: 'illustration', name: 'power-triangle', caption: 'P, Q, S and cos φ' },

    { type: 'heading', text: '4 · Single-phase and three-phase' },
    {
      type: 'bullets',
      items: [
        'Single-phase: one phase (L) and a neutral (N), 230 V (or 220 V) between them. For small loads, up to about 5 kVA.',
        'Three-phase: three phases (L1, L2, L3) 120° apart, plus the neutral. 400 V (or 380 V) between two phases, 230 V between a phase and neutral. For motors and buildings.',
      ],
    },
    { type: 'formula', text: 'Phase-to-phase voltage = √3 × phase-to-neutral voltage   (230 × 1.732 ≈ 400 V)' },
    {
      type: 'text',
      text: 'Three-phase carries more power with thinner cables, and three-phase motors start better. That is why loads are balanced across the three phases in the panel schedule.',
    },
    { type: 'illustration', name: 'phases', caption: 'Single-phase and three-phase' },

    { type: 'heading', text: '5 · Calculating a current' },
    {
      type: 'table',
      headers: ['', 'From P (W)', 'From S (VA)'],
      rows: [
        ['Single-phase', 'I = P / (V × cos φ × η)', 'I = S / V'],
        ['Three-phase', 'I = P / (√3 × V × cos φ × η)', 'I = S / (√3 × V)'],
      ],
    },
    { type: 'text', text: 'η = machine efficiency (1 for a resistor). V = 230/220 V single-phase, 400/380 V three-phase.' },
    {
      type: 'table',
      headers: ['Handy shortcut (HP ≈ kVA)', 'Current'],
      rows: [
        ['Single-phase 220 V', '≈ 4.5 A per kVA (or per HP)'],
        ['Three-phase 380 V', '≈ 1.5 A per kVA (or per HP)'],
      ],
    },
    { type: 'formula', text: '2 HP single-phase air conditioner → ≈ 2 × 4.5 = 9 A' },
    { type: 'formula', text: '30 HP three-phase motor → ≈ 30 × 1.5 = 45 A' },
    {
      type: 'note',
      text: '💡 Where does 1.5 come from? 746 W / (√3 × 380 V × 0.8) = 1.41 ≈ 1.5 A per HP. And 1 HP ≈ 1 kVA because 746 W / 0.8 ≈ 930 VA.',
    },

    { type: 'heading', text: '6 · Voltage levels' },
    {
      type: 'table',
      headers: ['Level', 'Range', 'Where'],
      rows: [
        ['Low voltage (LV)', '1 V – 1 kV', 'Inside buildings: 230 / 400 V'],
        ['Medium voltage (MV)', '1 kV – 66 kV', 'Distribution network reaching the transformer (11, 22 kV…)'],
        ['High voltage (HV)', '66 kV – 500 kV', 'Transmission lines between cities'],
      ],
    },
    {
      type: 'text',
      text: "The building's transformer steps the network's medium voltage down to low voltage. Everything designed in this course then happens at low voltage.",
    },

    { type: 'heading', text: 'Key takeaways' },
    {
      type: 'bullets',
      items: [
        'U = R × I and P = U × I.',
        'Energy (Wh) = power (W) × time (h).',
        'S (VA) = what the grid supplies; P (W) = S × cos φ.',
        'Single-phase 230 V for small loads, three-phase 400 V above 5 kVA.',
        'Current ≈ 4.5 A/kVA single-phase 220 V, ≈ 1.5 A/kVA three-phase 380 V.',
      ],
    },
    { type: 'illustration', name: 'phases', caption: "A building's low-voltage supply" },
  ],
};
