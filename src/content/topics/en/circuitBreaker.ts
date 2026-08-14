import { TopicContent } from '../../types';

export const circuitBreakerContent: TopicContent = {
  title: 'Circuit Breakers & Protection',
  subtitle: 'Sizing a breaker and choosing its trip curve',
  blocks: [
    {
      type: 'text',
      text: "A circuit breaker protects a circuit against overloads and short-circuits. Choosing one correctly requires calculating the circuit's real current, applying a safety margin, then selecting a standard rating and a trip curve suited to the load.",
    },
    {
      type: 'image',
      source: require('../../../../assets/diagrams/en/breaker_selection_steps.png'),
      caption: 'The 6 steps of selecting a circuit breaker',
      height: 520,
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Step 1 — Calculate the load current' },
    { type: 'formula', text: 'Single-phase: I_load = (S × 1000) / V' },
    { type: 'formula', text: 'Three-phase: I_load = (S × 1000) / (√3 × V)' },
    {
      type: 'text',
      text: 'S = apparent power in kVA, V = voltage (phase-neutral for single-phase, phase-phase for three-phase). This current represents the actual load flowing through the circuit.',
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Step 2 — Apply a safety margin' },
    {
      type: 'text',
      text: "The breaker rating should never sit exactly at the load current — a margin absorbs normal spikes and avoids nuisance tripping.",
    },
    {
      type: 'table',
      headers: ['Reference', 'Margin applied'],
      rows: [
        ['Load Factor rule (FC)', '+25%'],
        ['IEC', '+20%'],
        ['NEC', '+10%'],
      ],
    },
    { type: 'formula', text: 'I_r = I_load × (1 + margin)' },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Step 3 — Continuous loads: the 80% / 100% rule' },
    {
      type: 'text',
      text: "For a continuous load (running ≥ 3h uninterrupted, e.g. lighting, air conditioning), the breaker must be sized with an additional margin to avoid prolonged overheating.",
    },
    { type: 'formula', text: 'I_r = 1.25 × I_continuous + I_non-continuous' },
    {
      type: 'note',
      text: '📐 In practice: a standard breaker (100%) should only be loaded to 80% of its rating continuously, unless it is specifically certified "100% rated" for full continuous-load use.',
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Step 4 — Choose the standard rating' },
    {
      type: 'text',
      text: "From the standard series, select the rating directly above I_r. If the gap between I_r and the available rating is too large, consider an adjustable breaker (variable rating) set to a lower value to avoid excessive oversizing.",
    },
    {
      type: 'formula',
      text: 'Standard ratings (A): 6·10·16·20·25·32·40·50·63·80·100·125·160·200·250·320·400·500·630·800·1000·1250',
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Step 5 — Choose the trip curve' },
    {
      type: 'text',
      text: "The curve sets the magnetic (short-circuit) tripping threshold, expressed as a multiple of the rated current In. It must match the type of load supplied, to avoid nuisance tripping at switch-on.",
    },
    {
      type: 'table',
      headers: ['Curve', 'Magnetic threshold', 'Typical use'],
      rows: [
        ['B', '3 – 5 × In', 'Resistive circuits, static loads, long lines'],
        ['C', '5 – 10 × In', 'General use, loads with moderate inrush current (motors, luminaires)'],
        ['D', '10 – 20 × In', 'High inrush at start-up: transformers, large motors'],
      ],
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Breaker types' },
    {
      type: 'table',
      headers: ['Type', 'Description'],
      rows: [
        ['MCB', 'Miniature Circuit Breaker — low-power circuits, up to ~100A'],
        ['MCCB', 'Moulded Case Circuit Breaker — medium to high power, adjustable rating'],
        ['ACB', 'Air Circuit Breaker — main incoming feeds, high currents (main switchboards)'],
        ['RCD / RCCB', 'Residual current device — protects people against earth leakage'],
      ],
    },
    {
      type: 'text',
      text: "MCB sub-types found on drawings: FIU, FMU, MTU, MCP — each designates a housing variant or function (isolation, motor protection, etc.) depending on the manufacturer; always check the drawing legend for the exact meaning.",
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Motor protection (NEC)' },
    {
      type: 'text',
      text: "Motor circuit protection follows different logic than static loads: the breaker must let the high starting current through while still protecting the cable in steady state. The NEC covers this via several dedicated tables: 430.52 (max short-circuit protection rating, as % of FLC), 240.6 (standard ratings), 430.248/430.250 (full-load currents — FLC — of single/three-phase motors).",
    },
    {
      type: 'image',
      source: require('../../../../assets/reference/nec_table_430_52.png'),
      caption: 'NEC Table 430.52 — Maximum Rating or Setting of Motor Branch-Circuit Protective Devices',
      height: 320,
    },
    {
      type: 'image',
      source: require('../../../../assets/reference/nec_table_240_6a.png'),
      caption: 'NEC Table 240.6(A) — Standard Ampere Ratings for Fuses and Inverse Time Circuit Breakers',
      height: 260,
    },
    {
      type: 'note',
      text: "⚠️ These NEC tables contain precise numeric values per motor power — always refer to the current NEC edition rather than a memorized value, as tables are revised between editions.",
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Example 1 — Single-phase motor, 2 HP, 230V' },
    {
      type: 'text',
      text: 'FLC (table 430.248) = 12A · Breaker rating = 2.5 × FLC = 2.5 × 12 = 30A (standard value, table 240.6).',
    },
    {
      type: 'image',
      source: require('../../../../assets/reference/breaker_motor_example1_2hp.png'),
      caption: 'Full example — breaker selection for a single-phase 2 HP motor',
      height: 420,
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Example 2 — Three-phase motor, 7.5 HP, 230V' },
    {
      type: 'text',
      text: 'FLC (table 430.250) = 22A · Calculated rating = 2.5 × 22 = 55A → nearest standard rating: 60A.',
    },
    {
      type: 'image',
      source: require('../../../../assets/reference/breaker_motor_example2_7hp5.png'),
      caption: 'Full example — breaker selection for a three-phase 7.5 HP motor',
      height: 420,
    },
  ],
};
