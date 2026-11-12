import { TopicContent } from '../../types';
import { SLIDES } from '../../slides';

export const factoryDevicesContent: TopicContent = {
  title: 'ACBs, motor circuit breakers and fuses',
  subtitle: 'With a 400 kVA transformer, Tropica’s main board changes scale. Awa chooses an air circuit breaker for the incomer, motor circuit breakers coordinated with the contactors for the pumps, and compares her IEC solution with what the American code would give for the imported machine.',
  blocks: [
    { type: 'scene', text: 'Month 3 · Panel builder’s offer review, with Paul and Clarisse' },
    {
      type: 'objectives',
      items: [
        'Choose between MCCB and ACB for the incomer of a 400 kVA transformer.',
        'Understand category B and the short-time withstand current I_{cw}.',
        'Protect a motor: motor circuit breaker, trip class, type 1 or type 2 coordination.',
        'Check a small cable’s short-circuit withstand with the let-through energy I^{2}t.',
        'Place gG, aM and aR fuses, and compare the IEC rule with NEC 430.52.',
        'Read the load schedule of the motor control centre (MCC).',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: 'ACB 800 A', label: 'incomer, I_r = 630 A, category B' },
        { value: '14.4 kA', label: 'short circuit at the main board' },
        { value: 'Type 2', label: 'coordination of the motor starters' },
        { value: 'Class 10', label: 'pumps; class 20 for the compressor' },
        { value: '296 A', label: 'MCC demand, spare included' },
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Clarisse Houndé (procurement)',
      role: 'team',
      text: 'The panel builder offers a 630 A MCCB for the incomer, and an alternative with an 800 A air circuit breaker, much more expensive. The MCCB is 630 A, exactly the setting you want. Why pay more?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Because at Tropica’s main board the question isn’t only the rating. It’s discrimination at 14 kA, and being able to work without stopping production. Let me show you the calculation.',
    },

    { type: 'heading', text: '1 · MCCB or ACB for the incomer?' },
    {
      type: 'text',
      text: 'The air circuit breaker (ACB, IEC 60947-2) is the device for high currents, from 630 to 6,300 A. It is often withdrawable: it slides out of its chassis like a drawer, to be serviced or replaced in minutes. It has a spring-charged mechanism, remotely controlled opening and closing coils, and above all a high I_{cw}: it can carry a short circuit for a given time without tripping. That is category B.',
    },
    {
      type: 'table',
      headers: ['', 'MCCB 630 A', 'ACB 800 A'],
      rows: [
        ['Category (IEC 60947-2)', 'A: no guaranteed short-time withstand', 'B: rated I_{cw}, e.g. 50 kA 1 s'],
        ['Instantaneous', 'always active, ≤ 15 I_n ≈ 9.5 kA', 'can be switched off (I_i = OFF)'],
        ['Maintenance', 'fixed or plug-in', 'withdrawable, replaceable contacts'],
        ['Accessories', 'limited', 'motor operator, coils, position contacts, communication'],
        ['Growth', 'stuck at 630 A', 'up to 800 A by a simple setting'],
      ],
    },
    {
      type: 'calc',
      title: 'Discrimination between the incomer and the MCC way (400 A)',
      steps: [
        { label: 'Short circuit on the way, just downstream of the main board', formula: 'I_{sc} ≈ 14.4 kA' },
        { label: 'MCCB 630 A: its instantaneous trips at most at', formula: 'I_i ≤ 15 × 630 ≈ 9.5 kA < 14.4 kA' },
        { label: 'So, with the MCCB', formula: 'discrimination limited to 9.5 kA: above that, the incomer trips too' },
        { label: 'ACB: instantaneous off, short time only', formula: 'I_{sd} = 10 × I_r = 6.3 kA   ;   t_{sd} = 0.2 s' },
        { label: 'It must withstand the fault during that delay', formula: 'I_{cw} = 50 kA (1 s) ≥ 14.4 kA ✓' },
      ],
      result: 'With the ACB, total discrimination up to 14.4 kA: only the faulty way trips',
    },
    {
      type: 'decision',
      title: 'Main board incomer',
      choice: 'Withdrawable ACB 800 A, LSIG trip unit, I_r = 630 A',
      reasons: [
        'Category B: I_i off, discrimination becomes total up to the maximum short circuit.',
        'Withdrawable: a spare unit goes in without dismantling the busbars; at the next failure Paul saves hours.',
        'G function: an earth fault of a few hundred amps, invisible to the short-time function, is cleared in 0.4 s.',
        'Headroom: if Tropica one day moves to 500 kVA (722 A), I_r is reset without changing the device.',
      ],
      rejected: 'MCCB 630 A: 40 % cheaper, but discrimination limited to 9.5 kA, no power headroom, and a replacement that means stopping the whole plant.',
    },
    {
      type: 'table',
      headers: ['ACB setting', 'Value', 'Reason'],
      rows: [
        ['L: I_r, t_r', '630 A; 12 s at 6 I_r', 'above 577 A (transformer), below the busbar capacity'],
        ['S: I_{sd}, t_{sd}', '6.3 kA; 0.2 s', 'one step above the 400 A way (0.1 s)'],
        ['I: I_i', 'OFF', 'discrimination up to 14.4 kA, allowed by I_{cw}'],
        ['G: I_g, t_g', '240 A; 0.4 s', 'resistive earth faults, TN-S system'],
      ],
    },
    { type: 'image', source: SLIDES['af-5'], caption: 'Trip rating (AT) and frame size (AF): the same logic applies to the ACB, set to 630 A in an 800 A frame' },

    { type: 'heading', text: '2 · Protecting motors: the motor circuit breaker' },
    {
      type: 'text',
      text: 'For the pumps, Awa chose motor circuit breakers set to nameplate current in step 3. A motor circuit breaker (MPCB, IEC 60947-4-1 and 60947-2) combines three functions: an adjustable thermal element matched to a motor’s heating; a fixed magnetic element, around 13 times the top of its range; and phase-loss detection, which trips if a phase is missing, because a motor running on two phases overheats within minutes.',
    },
    {
      type: 'table',
      headers: ['Trip class', 'Maximum time at 7.2 I_r (cold start)', 'Motors'],
      rows: [
        ['10A / 10', '2 to 10 s', 'pumps, fans: fast start'],
        ['20', '6 to 20 s', 'compressors, crushers, high inertia'],
        ['30', '9 to 30 s', 'centrifuges, very long run-up'],
      ],
    },
    {
      type: 'decision',
      title: 'Trip classes',
      choice: 'Class 10 for the pumps, class 20 for the compressor',
      reasons: [
        'A pump reaches speed in 1 to 3 s: class 10 protects it most closely.',
        'The compressor, on a soft starter, takes about 12 s to run up: in class 10 it would trip at every start.',
      ],
      rejected: 'Class 30 “to be safe”: a stalled motor would heat for 30 s before tripping, and its windings would age quickly.',
    },
    {
      type: 'calc',
      title: 'Short-circuit withstand of the pump cable (6 mm², XLPE)',
      steps: [
        { label: 'Short circuit at the MCC', formula: 'I_{sc} ≈ 11 kA' },
        { label: 'Simple method, with clearing in 0.1 s', formula: 'S ≥ \\frac{I_{sc} × \\sqrt{t}}{k} = \\frac{11 000 × \\sqrt{0.1}}{143} ≈ 24 mm²   ✗ ?' },
        { label: 'But the MPCB is current-limiting: compare energies', formula: 'k^{2} × S^{2} = 143^{2} × 6^{2} ≈ 736 000 A^{2}s' },
        { label: 'Energy let through at 11 kA (manufacturer’s I^{2}t curve)', formula: 'I^{2}t ≈ 60 000 A^{2}s ≤ 736 000 A^{2}s ✓' },
      ],
      result: 'The 6 mm² cable withstands it: a current-limiting device clears in 3 to 5 ms, long before the cable heats',
    },
    { type: 'image', source: require('../../../../assets/reference/iec_cable_size_selection.png'), caption: 'k values by insulation (IEC 60364-4-43) and usual clearing times: 0.1 s for MCCBs and MPCBs, 0.2 s for delayed ACBs' },

    { type: 'heading', text: '3 · Coordination: type 1 or type 2?' },
    {
      type: 'text',
      text: 'A motor starter combines a breaker (or fuses), a contactor and an overload relay. During a short circuit the breaker clears it; but what about the contactor, carrying several kiloamps for a few milliseconds? IEC 60947-4-1 defines two levels, verified by testing at a conditional short-circuit current I_q.',
    },
    {
      type: 'table',
      headers: ['Coordination', 'After a short circuit', 'Consequence'],
      rows: [
        ['Type 1', 'no danger to people, but the contactor and relay may be destroyed', 'repair before restarting'],
        ['Type 2', 'no damage; slight contact welding, easily separated, is allowed', 'restart after a quick inspection'],
      ],
    },
    {
      type: 'decision',
      title: 'Coordination of the motor starters',
      choice: 'Type 2 coordination, combinations taken from the manufacturer’s tables at I_q = 50 kA',
      reasons: [
        'Ibrahim lost 2,000 litres of juice over one pump: a quick restart is worth more than the price difference.',
        'I_q = 50 kA comfortably covers the 11 kA at the MCC, even if the transformer grows.',
        'Never compose combinations yourself: only manufacturer-tested combinations are guaranteed.',
      ],
      rejected: 'Type 1: acceptable for comfort ventilation, not for a pasteurisation pump.',
    },

    { type: 'heading', text: '4 · What about fuses?' },
    {
      type: 'text',
      text: 'Fuses are still common in industry: they break huge currents (100 kA and more), strongly limit the energy and hardly age. Their drawback: they must be replaced, and a single blown cartridge leaves a motor on two phases. They are chosen by their utilisation category (IEC 60269).',
    },
    {
      type: 'table',
      headers: ['Category', 'Protects against', 'Use'],
      rows: [
        ['gG', 'overloads and short circuits', 'cables, general feeders'],
        ['aM', 'short circuits only', 'motors, with an overload relay'],
        ['gR / aR', 'short circuits, very fast', 'semiconductors: drives, soft starters'],
      ],
    },
    { type: 'image', source: SLIDES['iec-7'], caption: 'Selecting a fuse to IEC 60269: rating, category and breaking capacity' },
    {
      type: 'text',
      text: 'At Tropica, Awa keeps breakers for every way, but places aR fuses upstream of the compressor soft starter, as its manufacturer requires: only these ultra-fast fuses protect its thyristors against a downstream short circuit.',
    },

    { type: 'heading', text: '5 · IEC or NEC: the imported machine' },
    {
      type: 'text',
      text: 'The new labelling machine comes from North America, with a diagram drawn to the American code (NEC). Paul asks why the ratings are so different. Let’s compare for a 15 kW pump.',
    },
    { type: 'image', source: require('../../../../assets/reference/nec_table_430_52.png'), caption: 'NEC 430.52: maximum short-circuit device rating as a % of the table full-load current (250 % for an inverse-time breaker)' },
    {
      type: 'calc',
      title: 'Same pump, two philosophies',
      steps: [
        { label: 'IEC: one motor circuit breaker set to nameplate current', formula: 'I_r = 28.3 A   ;   I_m ≈ 13 × 32 ≈ 420 A' },
        { label: 'NEC: current from Table 430.250 (20 HP, 460 V), not from the nameplate', formula: 'FLC = 27 A' },
        { label: 'NEC 430.52: inverse-time breaker at most 250 %', formula: 'I_{CB} ≤ 2.5 × 27 = 67.5 A  →  70 A (next standard size, 430.52(C)(1))' },
        { label: 'NEC 430.32: separate overload relay at most 125 % of nameplate', formula: 'I_{OL} ≤ 1.25 × 28.3 ≈ 35 A' },
      ],
      result: 'IEC: a single device set to 28.3 A. NEC: 70 A breaker for short circuit + overload relay ≤ 35 A',
    },
    {
      type: 'text',
      text: 'Neither is wrong: the NEC clearly separates short-circuit protection (rated generously to let the motor start) from overload protection (the relay). IEC often combines both in a motor circuit breaker. What you must not do is mix them: a 70 A breaker without an overload relay would let the pump burn out, exactly like the one Ibrahim lost last year.',
    },

    { type: 'heading', text: '6 · The motor control centre load schedule' },
    {
      type: 'panelSchedule',
      panel: {
        name: 'MCC Tropica machine room',
        location: 'Machine room, 70 m from main board',
        voltage: '230/400 V · 3P+N+PE · TN-S',
        panelType: 'MCC cubicle, form 3b',
        mounting: 'Floor-standing, front access',
        scRating: 'Icw 25 kA 1 s · Iq 50 kA',
        main: '4P 400 A switch-disconnector',
        feeder: '4 × 150 mm² Cu + 95 mm² PE, MCCB 400 A set 320 A',
        left: [
          { desc: 'Compressor 55 kW (soft starter)', kva: 68, cb: 'MCCB 125/98 A + aR', poles: 3, wire: '4G35 mm²' },
          { desc: 'Pump 1 · 15 kW', kva: 19.6, cb: 'MPCB 25–32 A cl.10', poles: 3, wire: '4G6 mm²' },
          { desc: 'Pump 3 · 15 kW', kva: 19.6, cb: 'MPCB 25–32 A cl.10', poles: 3, wire: '4G6 mm²' },
          { desc: 'Cleaning pump · 11 kW', kva: 14.5, cb: 'MPCB 20–25 A cl.10', poles: 3, wire: '4G4 mm²' },
        ],
        right: [
          { desc: 'Pump 2 · 15 kW', kva: 19.6, cb: 'MPCB 25–32 A cl.10', poles: 3, wire: '4G6 mm²' },
          { desc: 'Pump 4 · 15 kW', kva: 19.6, cb: 'MPCB 25–32 A cl.10', poles: 3, wire: '4G6 mm²' },
          { desc: 'Control transformer 230/24 V', kva: 1.0, cb: 'C6', wire: '2.5 mm²' },
          { desc: 'Cubicle ventilation', kva: 0.3, cb: 'C6', wire: '1.5 mm²' },
          { desc: 'Machine-room lighting', kva: 0.4, cb: 'C10', wire: '1.5 mm²' },
          { desc: '', spare: true },
          { desc: '', spare: true },
          { desc: '', spare: true },
        ],
        demandKva: 178,
        spareMargin: 15,
      },
    },
    {
      type: 'calc',
      title: 'What the schedule confirms',
      steps: [
        { label: 'MCC demand: the 257 A rule from step 3', formula: 'S = \\sqrt{3} × 400 × 257 ≈ 178 kVA' },
        { label: 'With 15 % spare', formula: 'I = \\frac{178 000 × 1.15}{\\sqrt{3} × 400} ≈ 296 A' },
        { label: 'Way setting and cable (step 4)', formula: 'I = 296 A ≤ I_r = 320 A ≤ I_Z(150 mm²) ≈ 363 A' },
      ],
      result: 'The 400 A way set at 320 A absorbs the 15 % spare; three positions remain free',
    },
    {
      type: 'note',
      text: 'Here, the balanced three-phase motors load the three phases equally: only the small single-phase circuits create a slight unbalance. In a motor control centre, it is the total current and coordination that set the design, not the balance.',
    },

    { type: 'heading', text: '7 · What the standards say' },
    {
      type: 'norms',
      title: 'Motor branch protection',
      rows: [
        { norm: 'IEC 60947-4-1', rule: 'Trip classes 10A, 10, 20, 30; type 1 or type 2 coordination at I_q.', result: 'type 2, class 10 / 20' },
        { norm: 'IEC 60364-4-43', rule: 'Cable protection against overload and short circuit; k^{2}S^{2} ≥ I^{2}t.', result: '6 mm² validated by I^{2}t' },
        { norm: 'NEC 430', rule: 'Short circuit per 430.52 (250 % for an inverse-time breaker), overload per 430.32 (115 to 125 %).', result: '70 A + relay ≤ 35 A' },
        { norm: 'BS 7671 / BS EN 60947', rule: 'Same product standards as IEC; starting current taken into account when choosing the device.', result: '= IEC' },
      ],
    },
    {
      type: 'norms',
      title: 'Power circuit breakers',
      rows: [
        { norm: 'IEC 60947-2', rule: 'Category A (no short-time withstand) or B (rated I_{cw}); I_{cu}, I_{cs}.', result: 'ACB category B' },
        { norm: 'UL 489 / UL 1066', rule: 'MCCBs (UL 489) and low-voltage power circuit breakers (UL 1066, ANSI C37.13); the latter carry a short-time rating.', result: 'equivalent to category B' },
        { norm: 'NEC 240.87', rule: 'Above 1,200 A: arc energy reduction required (maintenance mode, ZSI…).', result: 'not applicable at 800 A' },
      ],
    },
    {
      type: 'regional',
      text: 'Withdrawable ACBs are expensive and lead times are long: Clarisse orders a spare-parts kit with the device (coils, charging motor) and racking training for Paul’s electricians. For imported second-hand machines, Awa has the protection redone to IEC when the original diagram relies on NEC relays sized for 60 Hz.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'ACB: high currents, withdrawable, category B; its I_{cw} allows the instantaneous to be switched off for total discrimination.',
        'Motor circuit breaker: thermal at nameplate current, magnetic ≈ 13 × rating, phase-loss detection.',
        'Class 10 for a fast start, 20 or 30 for high inertia.',
        'Type 2 coordination for starters whose downtime is costly; use the manufacturer’s combinations.',
        'A current-limiting device protects a small cable: compare k^{2}S^{2} with the let-through energy I^{2}t.',
        'Fuses: gG for cables, aM for motors, aR for power electronics.',
        'NEC: short circuit (430.52) and overload (430.32) separate; IEC: often combined in the motor circuit breaker.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'The main board one day moves to a 630 kVA transformer (u_k = 6 %). Would the rejected 630 A MCCB still have been possible for the incomer?',
      solution: [
        'I_n = 630,000 / (√3 × 400) ≈ 909 A: above 630 A, the MCCB no longer fits.',
        'The 800 A ACB is not enough either: a 1,000 or 1,250 A frame is needed. I_{sc} ≈ 909 / 0.06 ≈ 15 kA, still below its I_{cw}.',
      ],
    },
    {
      type: 'exercise',
      question: 'A 7.5 kW pump (14.5 A) starts in 2 s. Which trip class and which motor circuit breaker range?',
      solution: ['Fast start: class 10.', 'A 10–16 A range set to 14.5 A; the magnetic element (≈ 13 × 16 = 208 A) lets through the inrush of about 7 × 14.5 ≈ 100 A.'],
    },
    {
      type: 'exercise',
      question: 'Under the NEC, what is the maximum dual-element (time-delay) fuse rating for a motor whose table current is 40 A?',
      solution: ['NEC 430.52: 175 % for a time-delay fuse: 1.75 × 40 = 70 A.', 'That is a standard size: 70 A.'],
    },
  ],
};
