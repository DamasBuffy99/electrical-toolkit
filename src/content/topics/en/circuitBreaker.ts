import { TopicContent } from '../../types';

export const circuitBreakerContent: TopicContent = {
  title: 'Circuit Breakers & Protection',
  subtitle: 'Sizing a breaker, choosing its curve, and knowing the breaker and trip unit types',
  blocks: [
    {
      type: 'text',
      text: 'A circuit breaker protects a circuit against overloads and short-circuits. Selecting one takes four steps: load current, breaker current with a safety factor, standard rating, then trip curve.',
    },
    {
      type: 'bullets',
      items: [
        '1 → Calculate the load current I_load',
        '2 → Calculate the breaker current I_CB (safety factor)',
        '3 → Select the standard rating',
        '4 → Select the trip curve (B, C or D)',
      ],
    },
    { type: 'divider' },

    { type: 'heading', text: '1 · Calculate the load current (I_load)' },
    { type: 'text', text: 'This is the rated load current.' },
    { type: 'formula', text: 'Single-phase: I_load = (S × 1000) / V' },
    { type: 'formula', text: 'Three-phase: I_load = (S × 1000) / (√3 × V)' },
    { type: 'text', text: 'S = apparent power in kVA, V = voltage (phase-neutral for single-phase, phase-phase for three-phase).' },
    { type: 'formula', text: 'Example: 5 kVA at 220 V → I_load = 5 × 1000 / 220 = 22.7 A' },
    { type: 'divider' },

    { type: 'heading', text: '2 · Calculate the breaker current (I_CB)' },
    { type: 'text', text: 'A safety factor is applied to the load current. Its value depends on the code used:' },
    { type: 'formula', text: 'I_CB = safety factor × I_load' },
    {
      type: 'table',
      headers: ['Code', 'Margin', 'Factor'],
      rows: [
        ['EC (Egyptian Code)', '+25%', '1.25'],
        ['IEC', '+20%', '1.2'],
        ['NEC (overload)', '+10%', '1.1'],
      ],
    },
    { type: 'formula', text: 'IEC example: I_CB = 1.2 × 22.7 = 27.3 A' },
    { type: 'divider' },

    { type: 'heading', text: '3 · Select the standard rating' },
    { type: 'text', text: 'Take the next available standard rating above I_CB — never the one below.' },
    {
      type: 'note',
      text: '⚠️ Exception: when the gap between I_CB and the available ratings is very large, you may choose the previous or the next rating, or an adjustable breaker.',
    },
    {
      type: 'formula',
      text: 'Standard ratings (A): 6·10·16·20·25·32·40·50·63·80·100·125·160·200·250·320·400·500·630·800·1000·1250',
    },
    { type: 'formula', text: 'Example: I_CB = 27.3 A → 32 A breaker' },
    { type: 'divider' },

    { type: 'heading', text: '4 · Select the trip curve' },
    {
      type: 'text',
      text: 'The curve sets the magnetic trip threshold, as a multiple of the rated current In. It depends on the starting current of the protected load.',
    },
    {
      type: 'table',
      headers: ['Curve', 'Magnetic threshold', 'Protected loads'],
      rows: [
        ['B', '3 – 5 × In', 'Static loads: lighting, heaters, sockets'],
        ['C', '5 – 10 × In', 'Loads with high starting current: motors'],
        ['D', '10 – 20 × In', 'Very high starting currents: transformers'],
      ],
    },
    { type: 'note', text: '💡 MCBs come in curves B, C, D and Z (curve Z, 2 – 3 × In, is for very sensitive electronic circuits).' },
    { type: 'divider' },

    { type: 'heading', text: 'Breaker types: MCB, MCCB, ACB' },
    {
      type: 'table',
      headers: ['Type', 'Description'],
      rows: [
        ['MCB', 'Miniature Circuit Breaker — small ratings, final circuits'],
        ['MCCB', 'Moulded Case Circuit Breaker — medium to high ratings'],
        ['ACB', 'Air Circuit Breaker — main incomers, high currents (main switchboard)'],
      ],
    },
    {
      type: 'text',
      text: "Ampere Frame: up to this current value, the breaker's structure (dimensions) stays the same. It depends on the manufacturer.",
    },
    { type: 'divider' },

    { type: 'heading', text: 'Residual current protection: ELCB and RCCB' },
    { type: 'text', text: 'ELCB (earth leakage): the leakage must flow to earth for the ELCB to detect the potential difference.' },
    {
      type: 'text',
      text: 'RCCB: disconnects the power supply when it detects a leakage current to ground, typically due to an insulation failure or accidental contact with a conductor.',
    },
    { type: 'note', text: '⚠️ An RCCB only protects against leakage current, not short-circuits. For short-circuits, you need an MCB.' },
    {
      type: 'table',
      headers: ['RCD type', 'Leakage currents detected'],
      rows: [
        ['Type AC', 'Sinusoidal AC'],
        ['Type A', 'AC + pulsating DC'],
        ['Type B', 'AC, pulsating DC and smooth DC'],
      ],
    },
    { type: 'divider' },

    { type: 'heading', text: 'Trip units' },
    { type: 'text', text: 'Ir = overload (thermal) setting · Im = short-circuit (magnetic) setting.' },
    {
      type: 'table',
      headers: ['Trip unit', 'Settings', 'Use'],
      rows: [
        ['FTU', 'Fixed Ir and Im', 'General use'],
        ['FMU', 'Adjustable Ir, fixed Im', 'General use'],
        ['ATU', 'Adjustable Ir and Im', 'Fine-tuned protection'],
        ['MTU', 'No overload protection — magnetic only, adjustable', 'When overload is handled externally (overload relay) — e.g. generator application'],
        ['MCP', 'Instantaneous trip (magnetic only)', 'Motor short-circuit protection'],
      ],
    },
    { type: 'formula', text: 'MCP + overload relay = full motor protection' },
    { type: 'divider' },

    { type: 'heading', text: 'Overcurrent protection (branch circuit, NEC)' },
    { type: 'text', text: 'Continuous load: a load where the maximum current is expected to continue for three hours or more.' },
    { type: 'formula', text: 'I_r = 1.25 × I_continuous + I_non-continuous' },
    { type: 'text', text: "If the operating time isn't known yet, assume all loads are continuous:" },
    { type: 'formula', text: 'I_r = 1.25 × ΣI' },
    { type: 'note', text: "⚠️ Exception: with a 100% breaker, add continuous and non-continuous loads without oversizing." },
    {
      type: 'table',
      headers: ['Design', 'Total minimum load'],
      rows: [
        ['Standard 80%-rated', 'Non-continuous load + 125% of continuous load'],
        ['Standard 100%-rated', 'Non-continuous load + continuous load'],
      ],
    },
    { type: 'note', text: '📌 When they trip, circuit breakers are required to open all ungrounded conductors of the circuit.' },
    { type: 'divider' },

    { type: 'heading', text: 'Motor protection (NEC)' },
    {
      type: 'bullets',
      items: [
        "To find a motor's full-load current (FLC), don't use I = S / 230: read NEC table 430.248 (single-phase) or 430.250 (three-phase) from the horsepower.",
        'Apply the coefficient from NEC table 430.52 to the FLC.',
        'Choose the rating from the NEC 240.6(A) standard ratings table.',
      ],
    },
    {
      type: 'note',
      text: "⚠️ Exceptions: if the calculated value isn't a standard rating, always take the next one. And if necessary (starting), you may exceed the value given by the table.",
    },
    {
      type: 'table',
      headers: ['Current', 'Source', 'Use'],
      rows: [
        ['FLC (Full Load Current)', 'NEC tables', 'Sizing short-circuit protection'],
        ['FLA (Full Load Amps)', "Motor's nameplate", 'Overload protection, or any NEC exception'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'One device for overload + short-circuit: breaker selected at 1.25 × FLA.',
        'Separate devices: short-circuit per table 430.52 (2.5 × FLC for a breaker, 1.75 × FLC for a fuse); overload per NEC 430.32 (1.25 × FLA — up to 1.4 as an exception — or 1.15 × FLA for other motors).',
      ],
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
    { type: 'divider' },

    { type: 'heading', text: 'Example 1 — Single-phase motor, 2 HP, 230 V' },
    { type: 'text', text: 'FLC (table 430.248) = 12 A · Breaker rating = 2.5 × FLC = 2.5 × 12 = 30 A (standard value, table 240.6).' },
    {
      type: 'image',
      source: require('../../../../assets/reference/breaker_motor_example1_2hp.png'),
      caption: 'Full example — breaker selection for a single-phase 2 HP motor',
      height: 420,
    },
    { type: 'divider' },

    { type: 'heading', text: 'Example 2 — Three-phase motor, 7.5 HP, 230 V' },
    { type: 'text', text: 'FLC (table 430.250) = 22 A · Calculated rating = 2.5 × 22 = 55 A → not a standard rating → next one: 60 A.' },
    {
      type: 'image',
      source: require('../../../../assets/reference/breaker_motor_example2_7hp5.png'),
      caption: 'Full example — breaker selection for a three-phase 7.5 HP motor',
      height: 420,
    },
  ],
};
