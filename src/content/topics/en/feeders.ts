import { TopicContent } from '../../types';

export const feedersContent: TopicContent = {
  title: 'Feeders — Motor & Panel Protection',
  subtitle: 'Sizing the breaker for a combined motor feeder or a full panel',
  blocks: [
    {
      type: 'text',
      text: "A feeder supplies several loads at once (several motors, or an entire panel). Its protection isn't calculated like a simple branch breaker — the currents of all the supplied loads must be combined following a precise, NEC-specific method.",
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Reminder: continuous load (80% / 100% rule)' },
    {
      type: 'text',
      text: 'A continuous load is one whose maximum current is expected to last 3 hours or more. It requires an extra margin on the breaker (except with a 100% breaker).',
    },
    { type: 'formula', text: 'I_r = 1.25 × I_continuous + I_non-continuous' },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Motor protection — breaker selection (NEC)' },
    {
      type: 'bullets',
      items: [
        "Find the motor's FLC in NEC table 430.248 (single-phase) or 430.250 (three-phase), from its horsepower.",
        'Apply the coefficient from NEC table 430.52 to the FLC.',
        "Choose the rating in NEC table 240.6(A); if the value isn't standard, take the next one.",
        'One device for overload + short-circuit → 1.25 × FLA (nameplate).',
        'Separate devices → short-circuit: 2.5 × FLC (breaker) or 1.75 × FLC (fuse) per 430.52; overload: NEC 430.32.',
      ],
    },
    {
      type: 'image',
      source: require('../../../../assets/reference/nec_table_430_248.png'),
      caption: 'NEC Table 430.248 — Full-Load Currents, single-phase motors',
      height: 300,
    },
    {
      type: 'image',
      source: require('../../../../assets/reference/nec_table_430_250.png'),
      caption: 'NEC Table 430.250 — Full-Load Currents, three-phase motors',
      height: 320,
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Examples — fuse protection (NEC 440, air conditioning)' },
    {
      type: 'text',
      text: 'For air conditioning, refer to the nameplate in most cases. Sometimes only fuses are requested; otherwise use table 430.52: table coefficient × FLA of the largest motor (the compressor) + FLA of the small motor (the fan).',
    },
    {
      type: 'text',
      text: "Fuse: 1.75 × compressor FLA + fan FLA. If this value isn't enough for the motor to start, you can go up to 2.25 × compressor FLA + fan FLA.",
    },
    { type: 'formula', text: 'Example 1: 1.75 × 27 + 2.2 = 49.45 A → 50A fuse (up to 2.25 × 27 + 2.2 = 62.95 A → 60A max)' },
    {
      type: 'image',
      source: require('../../../../assets/reference/ac_fuse_example1.png'),
      caption: 'NEC 440 — Example 1: 27A compressor + 2.2A fan',
      height: 320,
    },
    { type: 'formula', text: 'Example 2: 1.75 × 22.1 + 1.8 = 40.48 A → 45A fuse (up to 2.25 × 22.1 + 1.8 = 51.53 A → 50A max)' },
    {
      type: 'image',
      source: require('../../../../assets/reference/ac_fuse_example2.png'),
      caption: 'NEC 440 — Example 2: compressor RLA 22.1A + fan FLA 1.8A',
      height: 320,
    },
    { type: 'formula', text: 'Example 3: 1.75 × 16 + 1.3 = 29.3 A → 30A fuse (up to 2.25 × 16 + 1.3 = 37.3 A → 35A max)' },
    {
      type: 'image',
      source: require('../../../../assets/reference/ac_fuse_example3.png'),
      caption: 'NEC 440 — Example 3: 16A compressor + 1.3A fan',
      height: 320,
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Feeder for a motor panel (multiple motors combined)' },
    {
      type: 'text',
      text: 'When a single feeder protects several motors, their individual protections must be combined to find the common breaker rating:',
    },
    {
      type: 'bullets',
      items: [
        '1 → Look up the FLC of each motor (NEC tables).',
        "2 → Apply the appropriate coefficient (430.52) and choose each motor's breaker from table 240.6(A).",
        '3 → Add the largest breaker rating + the FLC of the other motors.',
        '4 → The feeder breaker must be less than or equal to this new value (standard rating just below).',
      ],
    },
    {
      type: 'image',
      source: require('../../../../assets/diagrams/en/feeder_motor_panel_steps.png'),
      caption: 'Method for combining protections for a motor panel',
      height: 440,
    },
    {
      type: 'text',
      text: 'Example (NEC 430.62): Motor 1 — 20 HP, 460V, three-phase = FLC 27A; Motor 2 — 10 HP, 460V, three-phase = FLC 14A.',
    },
    { type: 'formula', text: '20 HP: 27 × 2.5 = 68A → 70A breaker' },
    { type: 'formula', text: '10 HP: 14 × 2.5 = 35A' },
    { type: 'formula', text: 'Feeder protection: largest CB + Σ FLC of other motors = 70 + 14 = 84A → breaker selected: 80A' },
    {
      type: 'image',
      source: require('../../../../assets/reference/feeder_motor_panel_worked_example.png'),
      caption: 'NEC 430.62 — Full feeder example for 2 combined motors',
      height: 480,
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 General feeder for a panel (overall calculation)' },
    {
      type: 'text',
      text: 'To size the main breaker for a complete panel (mix of continuous, non-continuous and motor loads):',
    },
    {
      type: 'bullets',
      items: [
        '1 → Non-continuous loads: add them up (taking demand factors into account). Add the motors too, plus 25% of the largest motor. Make the sum.',
        '2 → Continuous loads: add them all up.',
        '3 → Total = 1.25 × continuous loads + non-continuous loads.',
        '4 → Derive the current I.',
        '5 → Choose the breaker from table 240.6(A).',
      ],
    },
    {
      type: 'image',
      source: require('../../../../assets/diagrams/en/feeder_panel_general_steps.png'),
      caption: 'General panel feeder calculation',
      height: 380,
    },
    {
      type: 'note',
      text: "💡 For motors included in the non-continuous load sum, also add 25% of the current of the largest motor in the group.",
    },
    {
      type: 'text',
      text: 'Example (NEC 215.3): general lighting 11,600 VA + 3 industrial process dryers (15kW each) = 45,000 VA → continuous loads = 56,600 VA. Receptacles + welders + motors = non-continuous loads = 38,900 VA.',
    },
    { type: 'formula', text: 'Total = 1.25 × 56,600 + 38,900 = 109,700 VA → 132A (480V, three-phase) → standard breaker: 150A' },
    {
      type: 'image',
      source: require('../../../../assets/reference/feeder_panel_general_worked_example.png'),
      caption: 'NEC 215.3 — Full general panel feeder example',
      height: 480,
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Inside a panel: branches and main breaker' },
    {
      type: 'bullets',
      items: [
        "For each branch circuit breaker: find the current and multiply by 1.25, assuming all loads are continuous.",
        "Receptacles (sockets) are considered non-continuous per the NEC.",
        "For a refrigerator or an HVAC compressor: always refer to the manufacturer's nameplate rather than a general rule.",
        "There are two things to select: each branch's breaker, and the panel's main breaker (see NEC 215.3 — Overcurrent protection, Feeders).",
      ],
    },
    {
      type: 'image',
      source: require('../../../../assets/reference/panel_main_breaker_nec2153.png'),
      caption: 'Real panel schedule — MCCB 125A main breaker sized to demand',
      height: 380,
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Motor protection — IEC approach' },
    {
      type: 'bullets',
      items: [
        'The motor protection circuit breaker provides both overload and short-circuit protection.',
        "A short-circuit breaker alone does not protect against overload.",
        "MCP (Motor Circuit Protector) + overload relay = complete motor protection.",
      ],
    },
    { type: 'formula', text: 'Overload trip threshold: 1.05 – 1.2 × FLC' },
    {
      type: 'note',
      text: "💡 Key NEC/IEC difference: in NEC, the motor breaker rating is deliberately large (via table 430.52) to tolerate the high starting current. In IEC, the breaker is chosen close to the load's rated current — motor inrush current is instead handled by the choice of trip curve (C or D). A simple 1.25 derating factor is used, with no motor/static-load distinction.",
    },
    {
      type: 'image',
      source: require('../../../../assets/reference/iec_vs_nec_breaker_note.png'),
      caption: 'Course note — IEC vs NEC approach for sizing motor breakers',
      height: 260,
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Fuse protection — IEC rule' },
    {
      type: 'text',
      text: "I₂ is the fuse's conventional fusing current. The general rule requires that the operating current of the protective device not exceed 1.45 × the cable's current-carrying capacity.",
    },
    { type: 'formula', text: 'I₂ ≤ 1.45 × I_z' },
    {
      type: 'table',
      headers: ['Fuse type', 'Rule'],
      rows: [
        ['gG (residential/commercial, no motors)', 'I₂ = 1.6 × I_n'],
        ['aM (short-circuit protection of motor circuits)', 'Short-circuit protection only — overload handled separately'],
      ],
    },
  ],
};
