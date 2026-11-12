import { TopicContent } from '../../types';

export const factorySelectivityContent: TopicContent = {
  title: 'Short circuit and selectivity',
  subtitle: 'Last year, a short circuit on one pump tripped the main breaker: the whole plant stopped for three hours. Awa explains how to set the protection so that only the faulty device stops.',
  blocks: [
    { type: 'scene', text: 'Month 3 · Ibrahim Traoré’s office' },
    {
      type: 'objectives',
      items: [
        'Calculate the short-circuit current at each level.',
        'Know the three ways to achieve discrimination.',
        'Set the protections of the main board and feeders.',
        'Coordinate with the MV fuse.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '14.4 kA', label: 'short circuit at the main board' },
        { value: '0.2 s', label: 'incomer delay' },
        { value: '0.1 s', label: 'delay of the 400 A way' },
        { value: '25 A', label: 'MV fuse' },
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Ibrahim Traoré',
      role: 'client',
      text: 'That day we lost 2,000 litres of juice in the middle of pasteurisation, for one faulty pump. I never want to go through that again.',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'What you describe has a name: a lack of selectivity. When a fault occurs, the nearest protection must trip, and only that one. If the main breaker trips at the same time as the pump’s, their settings overlap. We’re going to untangle them.',
    },
    { type: 'illustration', name: 'factory-sld', props: { highlight: 'selectivity' }, caption: 'A fault on a pump: only its feeder must open' },

    { type: 'heading', text: '1 · First, how many amps in a short circuit?' },
    {
      type: 'text',
      text: 'As at Les Palmiers, Awa calculates the short-circuit current at each level. With the new 400 kVA transformer, it is much higher.',
    },
    { type: 'formula', text: 'At the main board: I_{sc} ≈ \\frac{I_n}{u_k} = \\frac{577}{0.04} ≈ 14.4 kA' },
    {
      type: 'table',
      headers: ['Point', 'Estimated I_sc', 'Breaking capacity chosen'],
      rows: [
        ['Main board (main ACB and feeders)', '≈ 14 kA', '25 kA'],
        ['Machine-room panel (after 40 m of 150 mm²)', '≈ 11 kA', '25 kA (motor circuit breakers)'],
        ['Pump terminals (after 60 m of 6 mm²)', '≈ 0.9 kA', ''],
      ],
    },
    {
      type: 'text',
      text: 'The short-circuit current drops sharply at the end of the pump’s 6 mm² cable: its resistance (about 225 mΩ) dominates everything else. That is what will let us separate the protections.',
    },
    { type: 'fiche', id: 'short-circuit', why: 'Calculating short-circuit current, level by level.' },

    { type: 'heading', text: '2 · Three ways to achieve selectivity' },
    { type: 'illustration', name: 'selectivity', caption: 'Two tripping curves that never cross: selectivity' },
    {
      type: 'table',
      headers: ['Method', 'Principle', 'In the plant'],
      rows: [
        ['By current (current discrimination)', 'the upstream magnetic threshold is above the largest possible downstream fault', 'pump: fault ≈ 0.9 kA; feeder threshold 4 kA: the feeder doesn’t move'],
        ['By time (time discrimination)', 'the upstream device waits a little (100 to 200 ms) before tripping', 'the main waits 200 ms, the feeder 100 ms'],
        ['By manufacturer tables', 'tests guarantee selectivity between two specific models', 'Awa checks every pair of breakers in the tables'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Ibrahim Traoré',
      role: 'client',
      text: 'Making the main breaker wait during a short circuit, isn’t that dangerous?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Two tenths of a second is the time the feeder breaker needs to trip before it. The main breaker and the busbars are chosen to withstand that short moment (short-time withstand). And if the feeder doesn’t trip, the main trips anyway just after: there is always a backup protection.',
    },

    { type: 'heading', text: '3 · The settings chosen' },
    {
      type: 'table',
      headers: ['Breaker', 'Long-time setting (overload)', 'Short-circuit setting'],
      rows: [
        ['15 kW pump (32 A motor circuit breaker)', '28.3 A', 'instantaneous ≈ 13 × 32 ≈ 420 A'],
        ['Panel feeder (400 A)', '320 A', '4 kA, 100 ms delay'],
        ['Main board ACB (800 A)', '630 A', '6.3 kA, 200 ms delay'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'Fault at a pump’s terminals (≈ 0.9 kA): only the motor circuit breaker sees its threshold exceeded. The pump stops, the rest of the plant carries on.',
        'Fault in the panel (≈ 11 kA): the feeder trips after 100 ms; the main, set to 200 ms, has no time to react. Pasteurisation, on another feeder, continues.',
        'Fault at the main board: only the main can trip. It is the only case where the whole plant stops.',
      ],
    },
    {
      type: 'note',
      text: 'Last year, the main breaker was set to its minimum threshold, with no delay: a bolted fault near the panel exceeded both the feeder’s threshold and its own. Both tripped together.',
    },

    { type: 'heading', text: '4 · And upstream, the MV fuse' },
    {
      type: 'text',
      text: 'On the 20 kV side, the transformer is protected by MV fuses. They must withstand the transformer’s energising inrush, and must not blow for a low-voltage fault that the main breaker can clear. Awa picks them from the transformer manufacturer’s table: 25 A for 400 kVA at 20 kV, about twice the MV rated current (11.5 A).',
    },
    { type: 'fiche', id: 'fuses', why: 'LV and HV fuses, ratings, coordination with breakers.' },
    { type: 'fiche', id: 'circuit-breaker', why: 'Ir, Im settings, delays and breaker types.' },
    {
      type: 'regional',
      text: 'The utility often fixes the settings of the protection at the MV supply point: ask for them before setting your main breaker, so the two are selective. Otherwise the utility’s breaker trips, and you have to wait for its agent to reset it.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'Selectivity: only the protection closest to the fault must trip.',
        'It is achieved through current thresholds, delays increasing upstream, and checked in manufacturers’ tables.',
        'Short-circuit current falls along cables, which helps separate the thresholds.',
        'Every device must withstand the short-circuit current at its location, including during delays.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'A bolted fault occurs on a pump cable, right next to the panel, with a current of 9 kA. Which breakers see it, and which one trips?',
      solution: [
        '9 kA exceeds all three thresholds: the motor circuit breaker’s (420 A), the feeder’s (4 kA) and the main’s (6.3 kA).',
        'So all three see the fault. The motor circuit breaker trips instantly; the feeder would wait 100 ms and the main 200 ms: they don’t need to act.',
        'Time discrimination saves the day, provided the motor circuit breaker has a breaking capacity ≥ 11 kA.',
      ],
    },
    {
      type: 'exercise',
      question: 'Why not set the main breaker’s threshold at 15 kA, above any possible fault, to be sure it never trips wrongly?',
      solution: [
        'With 14 kA at most at the main board, a 15 kA threshold would never be reached: the main would no longer clear any short circuit except through its thermal protection, far too slow.',
        'On the contrary, a backup protection must remain: keep a reachable threshold and use the delay for selectivity.',
      ],
    },
  ],
};
