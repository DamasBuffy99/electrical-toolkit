import { TopicContent } from '../../types';
import { SLIDES } from '../../slides';

export const buildingProtectionContent: TopicContent = {
  title: 'The building’s breakers: MCCBs, settings, discrimination',
  subtitle: 'At the main LV board, the ratings exceed what miniature breakers can do. Awa moves to moulded-case breakers, sets their trip units and checks that a fault in one flat does not black out the whole building.',
  blocks: [
    { type: 'scene', text: 'Month 5 · Design office, protection calculation note' },
    {
      type: 'objectives',
      items: [
        'Move from MCB to MCCB: when and why.',
        'Read an adjustable trip unit (I_r, I_m) and an electronic LSI trip unit.',
        'Tell I_{cu}, I_{cs}, frame size (AF) and trip setting (AT) apart.',
        'Check discrimination between the main board, the riser and the flats.',
        'Build the three-phase load schedule of the common-services board.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '250 A', label: 'main MCCB, LSI trip unit' },
        { value: '160 → 128 A', label: 'riser: 160 A frame set at 0.8' },
        { value: '10 kA', label: 'breaking capacity required at the main board' },
        { value: '22 kVA', label: 'demand of the services board' },
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Didier Kouassi (shop drawings)',
      role: 'team',
      text: 'For the main board, can I draw miniature breakers everywhere? The panel builder has them in stock, and they’re cheaper.',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Not for the incomer or the riser. Above 125 A, miniature breakers don’t exist. And even below, I want to adjust the thresholds so the breakers “talk” to each other: that’s discrimination. We need moulded-case breakers, MCCBs.',
    },

    { type: 'heading', text: '1 · Which family for which rating?' },
    { type: 'image', source: require('../../../../assets/reference/circuit_breaker_ratings_ranges.png'), caption: 'First sort by rating: the 250 A main board is in the MCCB zone' },
    {
      type: 'table',
      headers: ['Outgoing way', 'Design current I_B', 'Family chosen', 'Why'],
      rows: [
        ['Transformer incomer', '231 A', 'MCCB 250 A, LSI', 'above 125 A; fine settings for discrimination'],
        ['Rising main', '110 A', 'MCCB 160 A, adjustable thermal-magnetic', 'adjustable I_r to match the cable; discrimination with upstream'],
        ['Services board', '37 A', 'MCCB 63 A set at 50 A', 'backed up by the genset: discrimination with the changeover'],
        ['Services board circuits', '1 to 20 A', 'MCBs and motor circuit breakers', 'small ratings, fixed curves are enough'],
      ],
    },

    { type: 'heading', text: '2 · Setting an MCCB: I_r and I_m' },
    {
      type: 'text',
      text: 'An adjustable thermal-magnetic MCCB has two dials. The first sets the thermal threshold I_r as a fraction of the frame rating I_n (from 0.7 or 0.8 to 1). The second sets the magnetic threshold I_m as a multiple of I_r (from 1.5 or 5 to 10). You buy a frame, then dial in the current you need.',
    },
    { type: 'image', source: SLIDES['panel-23'], caption: 'I_r (× I_n) and I_m (× I_r) dials of an MCCB: for 300 A, take a 400 A frame and set 0.7 (280 A) or 0.75', focus: { x: 0.04, y: 0.15, w: 0.92, h: 0.82 } },
    {
      type: 'calc',
      title: 'Setting the rising-main breaker',
      steps: [
        { label: 'Design current (16 flats after diversity, step 4)', formula: 'I_B = 110 A' },
        { label: '4 × 35 mm² XLPE cable in a hot shaft (step 4)', formula: 'I_Z = 150 × 0.87 ≈ 130 A' },
        { label: '160 A frame, I_r dial on 0.8', formula: 'I_r = 0.8 × 160 = 128 A' },
        { label: 'Checking the chain', formula: 'I_B = 110 A ≤ I_r = 128 A ≤ I_Z = 130 A ✓' },
        { label: 'I_m dial on 5: magnetic threshold', formula: 'I_m = 5 × 128 = 640 A' },
      ],
      result: 'MCCB 160 A, I_r = 128 A, I_m = 640 A',
    },
    {
      type: 'note',
      text: 'On American drawings you read “160 AF / 128 AT”: AF (ampere frame) is the frame size, AT (ampere trip) the setting. The AF sets the size, price and breaking capacity; the AT protects the cable.',
    },
    { type: 'image', source: SLIDES['af-13'], caption: 'MCCB trip-unit families: fixed, adjustable thermal, adjustable thermal-magnetic, magnetic only (motors), electronic LSI/LSIG' },

    { type: 'heading', text: '3 · The electronic LSI trip unit of the incomer' },
    {
      type: 'text',
      text: 'For the transformer incomer, Awa chooses an electronic trip unit. Instead of a bimetal and a coil, sensors measure the current and a microprocessor applies four adjustable functions, named by their initials.',
    },
    {
      type: 'table',
      headers: ['Function', 'Role', 'Settings', 'Setting chosen'],
      rows: [
        ['L (long time)', 'overload', 'I_r, t_r', 'I_r = 0.95 × 250 = 237.5 A'],
        ['S (short time)', 'remote short circuit, with time delay', 'I_{sd}, t_{sd}', 'I_{sd} = 8 × I_r ≈ 1.9 kA; t_{sd} = 0.1 s'],
        ['I (instantaneous)', 'close short circuit', 'I_i', 'I_i = 15 × I_n = 3.75 kA'],
        ['G (ground)', 'earth fault (LSIG option)', 'I_g, t_g', 'not used here'],
      ],
    },
    {
      type: 'text',
      text: 'The S function is the key to discrimination: faced with a short circuit on the riser, the incomer waits 0.1 s, which gives the riser breaker, clearing in under 10 ms, time to do its job.',
    },

    { type: 'heading', text: '4 · I_cu, I_cs: two breaking capacities' },
    {
      type: 'text',
      text: 'The industrial breaker standard (IEC 60947-2) gives two values. I_{cu} is the ultimate capacity: the device breaks once, but may be unusable afterwards. I_{cs} is the service capacity: it breaks and remains usable. I_{cs} is expressed as a percentage of I_{cu}: 25, 50, 75 or 100 %.',
    },
    {
      type: 'decision',
      title: 'Breaking capacity at the main board',
      choice: 'MCCBs with I_{cu} ≥ 10 kA and I_{cs} = 100 % I_{cu}',
      reasons: [
        'The maximum short circuit at the main board is 5.6 kA (step 6): 10 kA leaves margin if the utility reinforces its network.',
        'I_{cs} = 100 %: after a short circuit the incomer stays reliable. Nobody wants to replace a main breaker in the middle of the night.',
      ],
      rejected: 'A device with I_{cs} = 25 % I_{cu}: cheaper, but after a single bolted fault it would have to be replaced.',
    },
    {
      type: 'text',
      text: 'One last nuance, cascading (back-up protection): a current-limiting upstream breaker can help a downstream breaker clear a current above its own breaking capacity. Manufacturers publish combination tables. Awa doesn’t need it here but notes it: that’s how 6 kA MCBs can sit behind a 15 kA main board.',
    },

    { type: 'heading', text: '5 · Discrimination, from the main board to the flat' },
    {
      type: 'dialogue',
      speaker: 'Fatou Sow',
      role: 'client',
      text: 'If a tenant short-circuits his kettle, will the whole building go dark?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Only his breaker should trip. That’s discrimination: on a fault, the device just above it trips, and only that one. To guarantee it, I compare the curves level by level, from the smallest to the largest.',
    },
    {
      type: 'table',
      headers: ['Level', 'Device', 'Thermal', 'Magnetic / instantaneous', 'I_{sc} at the point'],
      rows: [
        ['Main board', 'MCCB 250 A LSI', '237.5 A', 'S: 1.9 kA in 0.1 s; I: 3.75 kA', '5.6 kA'],
        ['Riser', 'MCCB 160 A', '128 A', '640 A', '≈ 5 kA at the foot'],
        ['Landing', 'incoming breaker 45 A, 500 mA', '45 A', '≈ 450 A', '4.5 kA'],
        ['Flat', 'MCB C20', '20 A', '100 to 200 A', '≈ 2 kA'],
      ],
    },
    {
      type: 'calc',
      title: 'Discrimination rules checked between two levels',
      steps: [
        { label: 'Thermal: upstream at least 1.6 times downstream', formula: '\\frac{237.5}{128} ≈ 1.9 ✓   ;   \\frac{128}{45} ≈ 2.8 ✓   ;   \\frac{45}{20} ≈ 2.3 ✓' },
        { label: 'Magnetic: upstream threshold above the downstream fault current', formula: 'Discrimination limit = upstream instantaneous threshold' },
        { label: 'Between riser and landing: fault in a flat', formula: 'I_{sc} ≈ 2 kA > I_m = 640 A' },
        { label: 'So, from the curves alone', formula: 'partial discrimination up to 640 A only' },
      ],
      result: 'The curves are not enough: the manufacturer’s discrimination table is needed',
    },
    {
      type: 'text',
      text: 'This result often surprises. On paper, a 2 kA bolted fault in a flat exceeds the riser’s magnetic threshold: both devices could trip together. In reality, the small downstream breaker is current-limiting: it clears in a few milliseconds and lets through so little energy that the big one has no time to trip. This “energy discrimination” cannot be read from the curves: only the manufacturer guarantees it, by testing, in its discrimination tables.',
    },
    {
      type: 'decision',
      title: 'Discrimination',
      choice: 'Devices from a single manufacturer, total discrimination (“T”) checked in its tables at each level',
      reasons: [
        'Main board → riser: the 0.1 s S function gives time discrimination up to 3.75 kA, and the table confirms it up to 5.6 kA.',
        'Riser → landing → flat: energy discrimination guaranteed by the table up to the short-circuit current at each point.',
        'Marc writes it into the specification: any brand substitution must provide its own tables.',
      ],
      rejected: 'Mixing brands according to price: nobody guarantees discrimination between devices from different manufacturers.',
    },

    { type: 'heading', text: '6 · The services board load schedule' },
    {
      type: 'text',
      text: 'The common-services board is three-phase. The lift and the two pumps are three-pole circuits: each takes three rows, one per phase, and its load is shared equally between L1, L2 and L3. The small single-phase circuits then even out the differences.',
    },
    {
      type: 'panelSchedule',
      panel: {
        name: 'Services DB Les Palmiers',
        location: 'Plant room, ground floor',
        voltage: '230/400 V · 3P+N+PE · 50 Hz',
        panelType: 'IP43 enclosure, form 1',
        mounting: 'Wall',
        scRating: 'Icu 10 kA',
        main: '4P 63 A switch-disconnector (via changeover)',
        feeder: '5G16 mm² Cu, MCCB 63 A set 50 A at main board',
        left: [
          { desc: 'Lift (VFD) 11 kW', kva: 13.6, cb: 'C25 3P', poles: 3, wire: '4G6 mm²' },
          { desc: 'Booster pump 1 · 4 kW', kva: 5.5, cb: 'MCB-M 6–10 A', poles: 3, wire: '4G2.5 mm²' },
          { desc: 'Stair and hall lighting', kva: 0.55, cb: 'C10', wire: '1.5 mm²' },
          { desc: 'Intercoms, access control', kva: 0.3, cb: 'C10', wire: '1.5 mm²' },
          { desc: 'Service sockets, shafts', kva: 1.0, cb: 'C20', wire: '2.5 mm²' },
        ],
        right: [
          { desc: 'Booster pump 2 · 4 kW', kva: 5.5, cb: 'MCB-M 6–10 A', poles: 3, wire: '4G2.5 mm²' },
          { desc: 'Outdoor and car-park lighting', kva: 0.6, cb: 'C10', wire: '2.5 mm²' },
          { desc: 'Motorised gate', kva: 0.5, cb: 'C16', wire: '2.5 mm²' },
          { desc: 'Emergency lighting units', kva: 0.1, cb: 'C10', wire: '1.5 mm²' },
          { desc: '', spare: true },
          { desc: '', spare: true },
          { desc: '', spare: true },
        ],
        demandKva: 22,
        spareMargin: 15,
      },
    },
    {
      type: 'calc',
      title: 'From the schedule to the main-board way',
      steps: [
        { label: 'Connected load: both pumps are listed, but only one runs', formula: 'S_{conn} ≈ 27.7 kVA   →   S_{demand} ≈ 22 kVA' },
        { label: 'With 15 % spare', formula: 'S = 22 × 1.15 ≈ 25.3 kVA   ;   I_B = \\frac{25 300}{\\sqrt{3} × 400} ≈ 36.5 A' },
        { label: 'Main-board way setting and cable', formula: 'I_B = 36.5 A ≤ I_r = 50 A ≤ I_Z(16 mm²) ≈ 76 A' },
      ],
      result: 'Services way: MCCB 63 A set at 50 A, 5G16 mm² cable',
    },
    {
      type: 'note',
      text: 'Why 16 mm² for 50 A? This cable is also fed by the 40 kVA genset (58 A) through the changeover: it is sized for the strongest source that can supply it. And the voltage dip when the lift starts stays small.',
    },
    { type: 'fiche', id: 'panel-schedule', why: 'Full panel schedule method: circuits, phases, demand, spare.' },

    { type: 'heading', text: '7 · What the standards say' },
    {
      type: 'norms',
      title: 'Overload protection of a cable',
      rows: [
        { norm: 'IEC 60364-4-43', rule: 'I_B ≤ I_n ≤ I_Z and I_2 ≤ 1.45 I_Z (I_2: conventional operating current).', result: 'I_r = 128 A for I_Z = 130 A' },
        { norm: 'NF C 15-100', rule: 'Same rules; for an adjustable breaker, the setting I_r is what counts.', result: 'same' },
        { norm: 'BS 7671', rule: 'I_b ≤ I_n ≤ I_z and I_2 ≤ 1.45 I_z; current-carrying capacities in Appendix 4.', result: 'same' },
        { norm: 'NEC 240.4(B)', rule: 'If the standard rating does not match the ampacity, the next standard rating up may be used, up to 800 A.', result: '130 A ampacity → 150 A allowed' },
      ],
    },
    {
      type: 'norms',
      title: 'Breaking capacity and discrimination',
      rows: [
        { norm: 'IEC 60947-2', rule: 'Defines I_{cu}, I_{cs}, I_{cw}, categories A (no delay) and B (delayed, ACBs) and discrimination tables.', result: 'MCCB I_{cs} = 100 %' },
        { norm: 'IEC 60364-5-53', rule: 'Requires discrimination where continuity of service demands it (safety, standby).', result: 'total discrimination on the services board' },
        { norm: 'NEC 700.32 / 701.32', rule: 'Selective coordination is mandatory for emergency and legally required standby circuits.', result: 'mandatory on standby' },
        { norm: 'NEC 240.86', rule: 'Series ratings are only allowed when tested and marked.', result: '= IEC cascading' },
      ],
    },
    {
      type: 'regional',
      text: 'Local panel builders often offer MCCBs of different brands for the incomer and the outgoing ways, depending on stock. Awa requires the discrimination study to be redone for any substitution. Another common issue: I_r dials are delivered set to 1. On handover day, Ndeye Faye will check every setting against the calculation note, and Didier will record them on the as-built diagram.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'Above 125 A, or as soon as thresholds must be adjusted, use an MCCB.',
        'Choose a frame (AF), then set I_r (AT) so it sits between I_B and I_Z.',
        'Electronic LSI(G) trip units offer a delayed S function, key to time discrimination.',
        'I_{cu}: ultimate capacity; I_{cs}: service capacity, preferably 100 % at the origin of the installation.',
        'Discrimination is checked with setting ratios, then with manufacturer tables for high currents.',
        'In a three-phase board, a three-pole circuit takes three rows and loads the three phases equally.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'A way has a design current of 300 A and a cable rated 340 A. Frames of 250 A and 400 A are available, with an I_r dial from 0.7 to 1 in 0.05 steps. Which frame and which setting?',
      solution: [
        '250 A is too small (maximum I_r = 250 A < 300 A). Take 400 A.',
        '0.75 × 400 = 300 A (just equal to I_B); 0.8 × 400 = 320 A: 300 ≤ 320 ≤ 340 ✓. Setting 0.8.',
      ],
    },
    {
      type: 'exercise',
      question: 'An incoming MCCB has I_{cu} = 36 kA and I_{cs} = 50 %. Can it be installed where the prospective short circuit is 25 kA?',
      solution: [
        'I_{cu} = 36 kA ≥ 25 kA: it will clear the fault, so safety is ensured.',
        'But I_{cs} = 18 kA < 25 kA: after such a fault it is no longer guaranteed fit for service. At the origin of an installation, prefer I_{cs} ≥ 25 kA.',
      ],
    },
    {
      type: 'exercise',
      question: 'A third 4 kW three-pole pump is added to the services board. What happens to the schedule columns?',
      solution: [
        'It takes three rows (for example the three spares on the right): 5.5 / 3 ≈ 1.83 kVA on each phase.',
        'The balance does not change, since the load is added equally to L1, L2 and L3; only the demand rises, if the pump can run together with the others.',
      ],
    },
  ],
};
