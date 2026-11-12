import { TopicContent } from '../../types';

export const buildingSwitchboardContent: TopicContent = {
  title: 'Building the boards: main LV board and flat boards',
  subtitle: 'Choosing the breakers is not enough: they need an enclosure that holds them, cools them and withstands the short circuit. Didier submits the main-board drawings, Awa checks the busbars, the form of separation and the tests, then draws the standard flat board.',
  blocks: [
    { type: 'scene', text: 'Month 6 · Panel builder’s workshop, with Didier and Marc' },
    {
      type: 'objectives',
      items: [
        'Know what the switchgear assembly standard (IEC 61439) requires.',
        'Choose a form of separation, an IP code and an IK code.',
        'Check a busbar: continuous current, thermal withstand and short-circuit peak.',
        'Choose the current transformers for metering.',
        'Build the single-phase load schedule of a flat.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: 'Form 2b', label: 'main board separation' },
        { value: '25 × 5 mm', label: 'copper bars, ≈ 300 A in a cubicle' },
        { value: '9.5 kA', label: 'short-circuit peak I_{pk}' },
        { value: '250/5 A', label: 'metering CTs, class 0.5' },
        { value: '45 A', label: 'demand of a flat including spare' },
      ],
    },

    { type: 'heading', text: '1 · A board is a certified product' },
    {
      type: 'text',
      text: 'A board is not just a box where breakers are screwed in. IEC 61439 treats it as a product: the original manufacturer (the maker of the enclosure system) proves by testing that its system withstands temperature rise, short circuit and impulse voltages. The panel builder who then assembles the main board must follow those rules and carry out routine verifications on every board.',
    },
    {
      type: 'table',
      headers: ['Part', 'Covers', 'In this project'],
      rows: [
        ['IEC 61439-1', 'general rules', 'every cubicle'],
        ['IEC 61439-2', 'power switchgear assemblies (PSC)', 'main board, services board'],
        ['IEC 61439-3', 'distribution boards operated by ordinary persons (DBO)', 'flat boards'],
        ['IEC 61439-6', 'busbar trunking systems', 'busways (project 3)'],
      ],
    },
    {
      type: 'table',
      headers: ['Design verification (once, by the original manufacturer)', 'Routine verification (every board, by the panel builder)'],
      rows: [
        ['temperature rise at rated current', 'visual check, wiring as per diagram'],
        ['short-circuit withstand (I_{cw}, I_{pk})', 'connections tightened to torque'],
        ['dielectric properties', 'dielectric test or insulation measurement'],
        ['continuity of the protective circuit', 'continuity of PE and metalwork'],
        ['IP degree, mechanical strength', 'mechanical operation, interlocks'],
      ],
    },

    { type: 'heading', text: '2 · Forms of separation, IP and IK' },
    {
      type: 'text',
      text: 'The form of separation tells what is partitioned inside the cubicle: the busbars, the devices and the terminals. The higher the form, the more you can work on one way while the others stay live, but the larger and more expensive the cubicle.',
    },
    {
      type: 'table',
      headers: ['Form', 'Separation', 'Typical use'],
      rows: [
        ['1', 'none', 'small boards, enclosures'],
        ['2a / 2b', 'busbars separated from functional units; in 2b, terminals separated from busbars', 'building main boards'],
        ['3a / 3b', '+ each functional unit separated from the others', 'industry, large commercial'],
        ['4a / 4b', '+ terminals of each way separated from one another', 'continuous processes, hospitals, data centres'],
      ],
    },
    {
      type: 'decision',
      title: 'Main board form',
      choice: 'Form 2b, IP31, IK08',
      reasons: [
        'Only five outgoing ways: form 3 or 4 would double the volume for little gain.',
        'In 2b, the electrician connects a cable without approaching the live busbars.',
        'IP31 is enough in a closed, dry plant room; IK08 withstands everyday knocks.',
      ],
      rejected: 'Form 4b: kept for the factory and the clinic, where one way must be worked on without stopping the others.',
    },
    {
      type: 'table',
      headers: ['Code', 'Meaning', 'Example'],
      rows: [
        ['IP2X', 'no finger on live parts', 'inside boards, open front'],
        ['IP31', '+ 2.5 mm objects, vertically dripping water', 'plant room'],
        ['IP54 / IP55', 'dust, splashing / water jets', 'pump room, sheltered outdoors'],
        ['IP65 / IP66', 'dust-tight, powerful jets', 'outdoors, wash-down areas'],
        ['IK08 / IK10', '5 J / 20 J impacts', 'corridors, car parks'],
      ],
    },

    { type: 'heading', text: '3 · The main-board busbar' },
    {
      type: 'calc',
      title: 'Checking the bars proposed by Didier (25 × 5 mm copper)',
      steps: [
        { label: 'Continuous current: painted bars, in a cubicle at 35 °C', formula: 'I_{allowed} ≈ 300 A ≥ I_n = 250 A ✓' },
        { label: 'Thermal short-circuit withstand for 1 s (k = 143 for copper)', formula: 'S_{min} = \\frac{I_{cw} × \\sqrt{t}}{k} = \\frac{5 600 × \\sqrt{1}}{143} ≈ 39 mm² ≤ 125 mm² ✓' },
        { label: 'First peak: n = 1.7 between 5 and 10 kA (IEC 61439-1, table 7)', formula: 'I_{pk} = n × I_{sc} = 1.7 × 5.6 ≈ 9.5 kA' },
        { label: 'Original manufacturer’s data for this system', formula: 'I_{cw} = 25 kA 1 s   ;   I_{pk} = 52.5 kA' },
      ],
      result: '25 × 5 mm bars approved: 300 A, I_{cw} 25 kA ≫ 5.6 kA, I_{pk} 52.5 kA ≫ 9.5 kA',
    },
    {
      type: 'text',
      text: 'The neutral has the same cross-section as the phases (single-phase loads and harmonics from the flats). The PE bar, at the bottom of the cubicle, is at least half. The board is rated for the plant-room ambient: the standard assumes a 24 h average of 35 °C and a 40 °C peak. In a poorly ventilated room reading 45 °C in the afternoon, the bars and breakers would have to be derated.',
    },

    { type: 'heading', text: '4 · Main-board metering' },
    {
      type: 'calc',
      title: 'Current transformers (CTs) for the power meter',
      steps: [
        { label: 'Transformer rated current', formula: 'I_n = 231 A' },
        { label: 'Next standard primary rating up', formula: 'CT 250/5 A' },
        { label: 'Secondary burden: 1 VA meter + 10 m of 2.5 mm² wire out and back', formula: 'P = 1 + 5^{2} × \\frac{0.0225 × 20}{2.5} ≈ 5.5 VA  →  10 VA CT' },
      ],
      result: 'CT 250/5 A, 10 VA, class 0.5 (class 0.5S if the reading is used for billing)',
    },
    {
      type: 'note',
      text: 'Never open the secondary of a CT in service: without a load its voltage rises to several hundred volts and the CT can be destroyed. Short its terminals first, using the disconnectable terminal block provided for that purpose.',
    },

    { type: 'heading', text: '5 · The standard flat board' },
    {
      type: 'dialogue',
      speaker: 'Marc Adjovi (supervision)',
      role: 'team',
      text: 'All sixteen flats have the same board. If we get the first one wrong, we get it wrong sixteen times. Show me the load schedule before Électra orders.',
    },
    {
      type: 'text',
      text: 'A flat board is single-phase: a single kVA column. The schedule principle is unchanged, with the sum of the circuits, the demand after diversity and the spare. Above all, we check that the final current stays below the setting of the landing incoming breaker (45 A).',
    },
    {
      type: 'panelSchedule',
      panel: {
        name: 'Standard flat DB (2-bed)',
        location: 'Flat entrance, h = 1.30 m',
        voltage: '230 V · 1P+N+PE · 50 Hz',
        panelType: 'IEC 61439-3 enclosure, 3 × 13 modules',
        mounting: 'Flush',
        scRating: 'Icn 6 kA',
        main: '2P 63 A switch (45 A incoming at landing)',
        feeder: '3G10 mm² Cu from the landing',
        singlePhase: true,
        left: [
          { desc: 'Living, kitchen lighting · RCD1', kva: 0.15, cb: 'C10', wire: '1.5 mm²' },
          { desc: 'Bedroom lighting · RCD2', kva: 0.12, cb: 'C10', wire: '1.5 mm²' },
          { desc: 'Living-room sockets · RCD1', kva: 1.0, cb: 'C20', wire: '2.5 mm²' },
          { desc: 'Bedroom sockets · RCD2', kva: 0.8, cb: 'C20', wire: '2.5 mm²' },
          { desc: 'Kitchen sockets · RCD1', kva: 1.2, cb: 'C20', wire: '2.5 mm²' },
          { desc: 'Hob · RCD1 (A)', kva: 3.5, cb: 'C32', wire: '6 mm²' },
          { desc: 'Washing machine · RCD1 (A)', kva: 2.1, cb: 'C20', wire: '2.5 mm²' },
        ],
        right: [
          { desc: 'Priority circuit · RCD2', kva: 0.6, cb: 'C16', wire: '2.5 mm²' },
          { desc: 'Water heater · RCD2', kva: 1.5, cb: 'C20', wire: '2.5 mm²' },
          { desc: 'Living-room AC · RCD2 (A)', kva: 1.7, cb: 'C16', wire: '2.5 mm²' },
          { desc: 'Bedroom 1 AC · RCD2 (A)', kva: 1.0, cb: 'C16', wire: '2.5 mm²' },
          { desc: 'Bedroom 2 AC · RCD2 (A)', kva: 1.0, cb: 'C16', wire: '2.5 mm²' },
          { desc: '', spare: true },
          { desc: '', spare: true },
        ],
        demandKva: 9,
        spareMargin: 15,
      },
    },
    {
      type: 'calc',
      title: 'Reading the bottom of the flat schedule',
      steps: [
        { label: 'Connected load', formula: 'S_{conn} = 8.87 + 5.80 ≈ 14.7 kVA' },
        { label: 'Demand used for one flat (step 1)', formula: 'S_{demand} = 9 kVA   (factor ≈ 0.61)' },
        { label: 'With 15 % spare, single-phase', formula: 'I = \\frac{9 000 × 1.15}{230} = 45 A' },
      ],
      result: 'The board fits exactly within the 45 A supply: the 15 % spare is already “paid for”',
    },
    {
      type: 'decision',
      title: 'Flat board layout',
      choice: 'Two 40 A 30 mA type A RCDs, lighting split between them, one spare row',
      reasons: [
        'Hob, washing machine and inverter ACs require type A.',
        'Living-room lighting on RCD1, bedrooms on RCD2: never the whole flat in the dark.',
        'The free row can one day take the inverter of the priority circuit (see the standby step).',
      ],
      rejected: 'A single 63 A RCD for the whole flat: cheaper, but rejected by Ndeye Faye (NF C 15-100 requires several devices and limits the number of circuits per RCD).',
    },

    { type: 'heading', text: '6 · What the standards say' },
    {
      type: 'norms',
      title: 'The board itself',
      rows: [
        { norm: 'IEC 61439-1/-2/-3', rule: 'Design verification by the original manufacturer, routine verification by the panel builder; I_{cw}, I_{pk}, forms 1 to 4.', result: 'main board form 2b, I_{cw} 25 kA' },
        { norm: 'NF C 15-100', rule: 'Dwelling board: 20 % spare, at least one free position, RCDs according to floor area, circuit labelling.', result: '2 × 40 A type A RCDs, spare' },
        { norm: 'BS 7671 (421.1.201)', rule: 'Dwelling consumer units must have a non-combustible (metal) enclosure.', result: 'metal consumer unit in the UK' },
        { norm: 'NEC / UL 67, UL 891', rule: 'Listed panelboards (UL 67) and switchboards (UL 891); panelboard main overcurrent protection (408.36).', result: '“listed” equipment' },
      ],
    },
    {
      type: 'norms',
      title: 'Space in front of the boards',
      rows: [
        { norm: 'NF C 15-100', rule: 'Follows the rules for electrical service rooms: clear passage of at least 0.70 m in front of boards.', result: '≥ 0.70 m' },
        { norm: 'IEC 60364-7-729', rule: 'Service gangways: 700 mm minimum, 500 mm between an open door and the opposite obstacle.', result: '≥ 0.70 m' },
        { norm: 'NEC 110.26', rule: 'Clear depth depending on voltage to ground and on condition 1, 2 or 3.', result: '0.9 to 1.2 m below 600 V' },
      ],
    },
    { type: 'image', source: require('../../../../assets/reference/clearance_low_voltage.png'), caption: 'NEC 110.26: depth of the working space according to voltage and what lies opposite', focus: { x: 0.5, y: 0.25, w: 0.48, h: 0.45 } },
    {
      type: 'regional',
      text: 'Many main boards are assembled locally in generic cabinets, with no design verification: the I_{cw} figure then simply does not exist. For a financed or inspected project, Awa requires an enclosure system whose original manufacturer provides IEC 61439 test reports, and a signed routine verification report. In hot plant rooms, provide high and low ventilation, or even a thermostat-controlled extractor fan: every 10 °C too many sharply shortens the life of the devices.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'A board is a product: design verification (original manufacturer) and routine verification (panel builder).',
        'The form of separation (1 to 4) sets what can be touched while the rest stays live.',
        'IP for objects and water, IK for impacts.',
        'Busbar: continuous current, thermal withstand I_{cw} and peak I_{pk} = n × I_{sc}.',
        'CT: primary just above I_n, VA rating above the secondary burden, accuracy class according to use.',
        'A single-phase schedule reads like a three-phase one, with a single kVA column.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'At the project 3 factory, the short circuit at the main board will reach 14.4 kA. Which factor n and which peak I_{pk}?',
      solution: ['Between 10 and 20 kA, n = 2.0.', 'I_{pk} = 2.0 × 14.4 ≈ 28.8 kA: the enclosure system must have a higher rated I_{pk}.'],
    },
    {
      type: 'exercise',
      question: 'A larger flat has an 11 kVA demand. Is the 45 A supply enough with the 15 % spare?',
      solution: ['I = 11,000 × 1.15 / 230 ≈ 55 A > 45 A: no.', 'A 60 A supply is needed (or a three-phase one), and the landing cable must be checked.'],
    },
    {
      type: 'exercise',
      question: 'Why is a CT secondary shorted before the ammeter is disconnected?',
      solution: ['The CT forces its secondary current. If the circuit is open, it builds up a very high voltage trying to drive it: danger for the operator and breakdown of the CT insulation.'],
    },
  ],
};
