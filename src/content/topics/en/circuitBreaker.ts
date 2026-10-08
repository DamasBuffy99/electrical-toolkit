import { TopicContent } from '../../types';
import { SLIDES } from '../../slides';

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
    {
      type: 'table',
      headers: ['Shortcut (HP ≈ kVA)', 'Current'],
      rows: [
        ['Single-phase 220 V (S ≤ 5 kVA)', 'I ≈ 4.5 × kVA ≈ 4.5 × HP'],
        ['Three-phase 380 V (S > 5 kVA)', 'I ≈ 1.5 × kVA ≈ 1.5 × HP'],
      ],
    },
    { type: 'formula', text: '4 HP single-phase motor: I = 4.5 × 4 = 18 A → I_CB = 1.25 × 18 = 22.5 A → 25 A' },
    { type: 'formula', text: '50 HP three-phase load: I = 1.5 × 50 = 75 A → I_CB = 1.25 × 75 = 94 A → 100 A' },
    {
      type: 'note',
      text: "💡 The 1.25 factor used here is common engineering practice (margin for future expansion). IEC doesn't require it; the NEC uses it for continuous loads.",
    },
    { type: 'image', source: SLIDES['panel-19'], caption: 'Example 1: 4 HP single-phase load' },
    { type: 'image', source: SLIDES['panel-20'], caption: 'Example 1: I_CB = 22.5 A → 25 A' },
    { type: 'image', source: SLIDES['panel-21'], caption: 'Example 2: 50 HP three-phase load' },
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
    {
      type: 'bullets',
      items: [
        'Large gap, value close to the lower rating: 262.5 A between 250 and 400 A → 250 A breaker.',
        'Value in the middle: 300 A between 250 and 400 A → 400 A adjustable breaker, set with a dial (e.g. Ir = 400 × 0.7 = 280 A).',
      ],
    },
    { type: 'image', source: require('../../../../assets/reference/circuit_breaker_ratings_ranges.png'), caption: 'Standard ratings: MCB, MCCB and ACB ranges' },
    { type: 'image', source: SLIDES['panel-22'], caption: 'Choosing between two distant ratings' },
    { type: 'image', source: SLIDES['panel-23'], caption: 'Adjustable breaker: Ir and Im dials' },
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
        ['Z', '2 – 3 × In', 'Highly sensitive applications: semiconductors, electronics'],
        ['B', '3 – 5 × In', 'Static loads: lighting, heaters, sockets'],
        ['C', '5 – 10 × In', 'Loads with high starting current: motors, fluorescent lighting'],
        ['K', '10 – 14 × In', 'High inrush: motors and transformers'],
        ['D', '10 – 20 × In', 'Very high starting currents: transformers, large motors, X-ray machines'],
      ],
    },
    {
      type: 'text',
      text: 'Trip curves are defined by IEC 60898-1 and 60947-2. The upper part (thermal, bimetal) responds slowly to overloads and is the same for all curves; the lower part (magnetic, coil) responds within milliseconds to a short circuit.',
    },
    { type: 'formula', text: 'Reading: "C32" = curve C, 32 A' },
    { type: 'image', source: SLIDES['panel-24'], caption: 'B, C and D trip zones' },
    { type: 'image', source: SLIDES['cond-28'], caption: 'Comparison of curves Z, B, C, K, D' },
    { type: 'image', source: SLIDES['cond-29'], caption: 'Example: single-pole C32 MCB, 6 kA' },
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
      type: 'bullets',
      items: [
        "Ir: the breaker's set current (depends on the load kVA).",
        'Im: instantaneous short-circuit trip threshold.',
        'Icu: ultimate breaking capacity (kA); depends on the upstream impedance (cables, busbars, transformers).',
      ],
    },
    {
      type: 'table',
      headers: ['Voltage', 'Values', 'Breaker technology'],
      rows: [
        ['Low voltage (1 V – 1 kV)', '220 V single-phase, 380 V three-phase', 'MCB, MCCB, ACB'],
        ['Medium voltage (1 – 66 kV)', '3.3 · 6.6 · 11 · 22 kV', 'SF6, vacuum'],
        ['High voltage (66 – 500 kV)', '132 · 220 · 500 kV', 'Oil, SF6'],
      ],
    },
    { type: 'image', source: SLIDES['panel-17'], caption: 'Operation: thermal and magnetic zones' },
    { type: 'image', source: SLIDES['panel-18'], caption: 'Voltages and technologies' },

    { type: 'heading', text: 'Ampere Frame (AF) and Ampere Trip (AT)' },
    {
      type: 'bullets',
      items: [
        "AF (Ampere Frame): the physical size and thermal capability of the breaker. It is the maximum current the breaker's body (busbars, contacts, enclosure) handles, whatever the setting. Common values: 100, 150, 250, 400, 630, 800 AF.",
        'AT (Ampere Trip): the fixed or adjustable setting at which the breaker opens the circuit.',
      ],
    },
    { type: 'formula', text: 'Example: 150 AF MCCB set at 100 AT → 150 A frame, trips at 100 A' },
    { type: 'image', source: SLIDES['af-3'], caption: 'Ampere Frame (AF)' },
    { type: 'image', source: SLIDES['af-5'], caption: 'Ampere Trip (AT)' },
    { type: 'divider' },

    { type: 'heading', text: 'Residual current protection: ELCB and RCCB' },
    { type: 'text', text: 'ELCB (earth leakage): the leakage must flow to earth for the ELCB to detect the potential difference.' },
    {
      type: 'text',
      text: 'RCCB: disconnects the power supply when it detects a leakage current to ground, typically due to an insulation failure or accidental contact with a conductor.',
    },
    { type: 'note', text: '⚠️ An RCCB only protects against leakage current, not short-circuits. For short-circuits, you need an MCB.' },
    {
      type: 'text',
      text: 'Principle: normally the current entering through the phase returns through the neutral. A difference means part of the current leaks to earth — often through a person. The toroid compares the currents; the test button creates a small leak through a resistor.',
    },
    { type: 'formula', text: 'Single-phase: I_leak = |I_L − I_N|    Three-phase: I_leak = |(I_L1 + I_L2 + I_L3) + I_N|' },
    { type: 'formula', text: 'Trips if I_leak ≥ threshold: 30 mA to protect people, 300 mA to protect machines' },
    {
      type: 'table',
      headers: ['Marking', 'Meaning'],
      rows: [
        ['In = 40 A', 'Rated continuous current'],
        ['IΔn = 30 mA', 'Sensitivity: trips from 30 mA of leakage'],
        ['Inc = IΔc = 10 kA', 'Conditional short-circuit rating, with an MCB (it does not break the short circuit itself)'],
        ['Un = 230 V~', 'Rated voltage, alternating current'],
        ['Im = 500 A', 'Rated making and breaking capacity'],
        ['~ beside 30 mA', 'Type AC'],
      ],
    },
    { type: 'image', source: SLIDES['rccb-5'], caption: 'RCCB working principle' },
    { type: 'image', source: SLIDES['rccb-6'], caption: 'Toroid, sensing coil and test button' },
    { type: 'image', source: SLIDES['rccb-7'], caption: 'Reading the specifications' },
    { type: 'image', source: SLIDES['rccb-8'], caption: 'Types AC, A and B' },
    { type: 'image', source: SLIDES['rccb-9'], caption: 'Three-phase RCCB' },
    { type: 'image', source: SLIDES['panel-31'], caption: '30 mA for people, 300 mA for machines' },
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
      headers: ['Trip unit', 'Thermal (Ir)', 'Magnetic (Im)', 'Use'],
      rows: [
        ['FTU (fixed)', 'Fixed (Ir = In)', 'Fixed (≈ 10 × In)', 'General purpose, economical'],
        ['FMU', 'Adjustable (0.8 – 1 × In)', 'Fixed (≈ 10 × In)', 'Varying loads'],
        ['ATU (adjustable)', 'Adjustable (0.8 – 1 × In)', 'Adjustable (5 – 10 × In), + short time', 'Fine tuning, coordination'],
        ['MTU', 'None', 'Adjustable (6 – 12 × In)', 'Overload handled externally (overload relay) — e.g. generator application'],
        ['MCP', 'None', 'Instantaneous', 'Motor short-circuit protection (starters, MCCs)'],
        ['Electronic (LSI / LSIG)', 'Adjustable (L)', 'Adjustable (S, I, G)', 'Critical loads, data centres, built-in metering'],
      ],
    },
    { type: 'formula', text: 'MCP + overload relay = full motor protection' },
    { type: 'image', source: SLIDES['af-13'], caption: 'Summary of MCCB trip units' },
    { type: 'divider' },

    { type: 'heading', text: 'Medium-voltage circuit breakers' },
    {
      type: 'bullets',
      items: [
        'Voltages: 3.3 · 6.6 · 11 · 22 kV; rated currents 630 to 4,000 A.',
        'Network breaking capacity: 6.6 kV → 250 MVA · 11 kV → 500 MVA · 22 kV → 750 MVA.',
      ],
    },
    {
      type: 'table',
      headers: ['Type', 'Voltage', 'Breaking capacity'],
      rows: [
        ['Oil', '1 – 330 kV', '150 – 2,000 MVA'],
        ['Air', '1 – 15 kV', '5 – 500 MVA'],
        ['SF6', '3.6 – 760 kV', '10,000 – 50,000 MVA'],
        ['Vacuum', '11 – 33 kV', '250 – 2,000 MVA'],
      ],
    },
    { type: 'subheading', text: 'Example: 2 MVA motor, 11 kV' },
    { type: 'formula', text: 'I = 2 × 10⁶ / (√3 × 11 × 10³) = 104 A → 630 A SF6 breaker' },
    { type: 'formula', text: 'Isc = 500 × 10⁶ / (√3 × 11 × 10³) = 26 kA' },
    { type: 'formula', text: 'Contribution of neighbouring motors (50 to 80%): Icu = 26 + 0.8 × 26 = 46.8 kA → 50 kA' },
    { type: 'image', source: SLIDES['panel-33'], caption: 'MV breakers: voltages and types' },
    { type: 'image', source: SLIDES['panel-34'], caption: 'Example: 2 MVA motor, 11 kV' },
    { type: 'image', source: SLIDES['panel-35'], caption: 'Breaking capacity with motor contribution' },
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
      focus: { x: 0.02, y: 0.16, w: 0.96, h: 0.45 },
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
