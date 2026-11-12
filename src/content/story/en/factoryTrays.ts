import { TopicContent } from '../../types';

export const factoryTraysContent: TopicContent = {
  title: 'Cable trays and busbar trunking',
  subtitle: 'The cross-sections are calculated; now the cables must be laid. Didier draws the cable trays, Paul worries about the forklifts, and the future bottling line raises a new question: cables, or busbar trunking?',
  blocks: [
    { type: 'scene', text: 'Month 4 · Shop drawings, with Didier and Paul' },
    {
      type: 'objectives',
      items: [
        'Choose the support type: perforated tray, ladder, wire mesh, trunking, conduit.',
        'Size a cable tray: width, spare capacity, load and span.',
        'Separate power, control and data cables.',
        'Compare cables and busbar trunking for machines in a row.',
        'Handle tray earthing and fire-wall penetrations.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '300 mm', label: 'width of the power tray' },
        { value: '≈ 5 kg/m', label: 'load with spare, 1.5 m span' },
        { value: '30 cm', label: 'between power and control' },
        { value: '250 A', label: 'busbar trunking for the future line' },
      ],
    },
    { type: 'illustration', name: 'tray-section', caption: 'Three levels: the feeder alone on its ladder, spaced power cables on a perforated tray, control on wire mesh 30 cm below' },

    { type: 'heading', text: '1 · Which support for which cables?' },
    {
      type: 'table',
      headers: ['Support', 'Strengths', 'Use at Tropica'],
      rows: [
        ['Perforated tray', 'good ventilation, close supports (1.5 to 2 m), medium cables', 'motor power cables'],
        ['Ladder', 'highly ventilated, long spans (3 m and more), large cables', '4 × 150 mm² MCC feeder'],
        ['Wire mesh (basket)', 'light, easy to cut, small cables', 'control, sensors, network'],
        ['Trunking', 'closed, neat, dust-proof', 'offices, quality lab'],
        ['Conduit', 'strong mechanical protection', 'drops to the machines, wash-down areas'],
      ],
    },
    {
      type: 'text',
      text: 'The installation method is part of the cable sizing: on a perforated tray or ladder, a multicore cable corresponds to reference method E of IEC 60364-5-52, the most favourable, because air flows all around it. In a buried conduit, the same cable carries 20 to 30 % less.',
    },

    { type: 'heading', text: '2 · Sizing the power tray' },
    {
      type: 'calc',
      title: 'Width, load and grouping factor',
      steps: [
        { label: 'Diameters: compressor 4G35 ≈ 30 mm, pumps 4G6 ≈ 17 mm, cleaning 4G4 ≈ 15 mm', formula: 'Σd = 30 + 4 × 17 + 15 = 113 mm  (cables touching)' },
        { label: 'Cables spaced one diameter apart for better cooling', formula: 'width ≈ 2 × Σd ≈ 226 mm' },
        { label: '30 % spare for extensions', formula: '226 × 1.3 ≈ 294 mm  →  300 mm tray' },
        { label: 'Linear mass: 1.75 + 4 × 0.45 + 0.33 ≈ 3.9 kg/m, with spare', formula: 'q ≈ 3.9 × 1.3 ≈ 5 kg/m ≤ SWL ≈ 40 kg/m (1.5 m span)' },
      ],
      result: '300 mm perforated tray, supports every 1.5 m; spaced cables suffer almost no derating',
    },
    {
      type: 'decision',
      title: 'Cable arrangement',
      choice: '300 mm tray, cables spaced one diameter apart, single layer',
      reasons: [
        'In step 4 Awa counted a grouping factor of 0.75 (cables touching): spaced, they approach 1. The 35 mm² cable keeps real margin.',
        'A single layer: every cable is visible, identifiable and replaceable.',
        'The 30 % spare will take the two pumps in the investment plan.',
      ],
      rejected: 'A 150 mm tray with cables touching in two layers: cheaper, but a grouping factor near 0.6 and the compressor cable back to 50 mm².',
    },
    {
      type: 'text',
      text: 'The safe working load (SWL) is read in the manufacturer’s catalogue, for a given span: it is verified by testing to IEC 61537, with limited deflection (usually 1/200 of the span). Add the weight of future cables and, outdoors, wind. Never walk on a cable tray: it is not a walkway.',
    },

    { type: 'heading', text: '3 · Separating systems and earthing' },
    {
      type: 'dialogue',
      speaker: 'Paul Ndiaye (maintenance)',
      role: 'client',
      text: 'Our level sensors sometimes give crazy readings when the conveyor speeds up. Could it be the cables?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Very likely. The drive’s motor cable radiates high-frequency noise. Laid against the sensor cable, it passes the noise on. I separate the two systems by 30 cm, use shielded cable between drive and motor, with the shield bonded 360° at both ends, and two trays cross at right angles.',
    },
    {
      type: 'bullets',
      items: [
        'Power, control and data on separate supports; if a single support, a continuous metal divider.',
        'Each metal tray section is bonded to the next by a splice plate or braid: electrical continuity is checked, and the tray is bonded to the equipotential system at both ends.',
        'The tray is not a protective conductor: each cable has its own PE (except systems certified for it).',
        'Where a fire wall is crossed, the opening is sealed with a firestop of the same rating (EI 60, EI 120…).',
      ],
    },

    { type: 'heading', text: '4 · The future bottling line: cables or busbar trunking?' },
    {
      type: 'text',
      text: 'In two years Ibrahim plans a 40 m line with eight machines (about 150 kW in total). With cables, it would take eight ways at the main board and eight cables along the line. Busbar trunking (busway, IEC 61439-6) is a metal duct containing copper or aluminium bars, onto which tap-off boxes with their own protection are plugged wherever the machines are.',
    },
    {
      type: 'calc',
      title: 'Choosing the busbar trunking',
      steps: [
        { label: 'Line power, diversity 0.8, power factor 0.85', formula: 'I = \\frac{150 000 × 0.8}{\\sqrt{3} × 400 × 0.85} ≈ 204 A' },
        { label: 'Next standard busway rating', formula: 'I_{n,busway} = 250 A ≥ 204 A' },
        { label: 'Voltage drop at the end (distributed load: count half the length)', formula: 'ΔU ≈ \\sqrt{3} × I × L_{eq} × z = \\sqrt{3} × 204 × 20 × 0.00030 ≈ 2.1 V  →  0.5 %' },
      ],
      result: '250 A busbar trunking with eight tap-off boxes, fed from a single main-board way',
    },
    {
      type: 'decision',
      title: 'Distribution of the future line',
      choice: '250 A busbar trunking above the line, with a 250 A way reserved at the main board today',
      reasons: [
        'One way and one feeder cable instead of eight.',
        'Moving a machine means moving a tap-off box, with no new cable to pull.',
        'Fast installation, factory-tested: the line can be connected during a short production stop.',
      ],
      rejected: 'Eight individual cables: cheaper to buy, but a larger main board and every change to the line becomes a small project.',
    },

    { type: 'heading', text: '5 · What the standards say' },
    {
      type: 'norms',
      title: 'Fill and installation',
      rows: [
        { norm: 'IEC 60364-5-52', rule: 'Reference installation methods (E and F on perforated trays), grouping factors by number of cables and trays.', result: 'spaced: factor ≈ 1' },
        { norm: 'NF C 15-100 / UTE C 15-105', rule: 'Same methods; correction-factor tables; spare capacity recommended on trays.', result: 'same as IEC' },
        { norm: 'NEC 392.22', rule: 'For multiconductor cables of 4/0 AWG and larger on a ladder: sum of diameters ≤ tray width, single layer.', result: '113 mm ≤ 300 mm ✓' },
        { norm: 'NEC chapter 9', rule: 'Conduit fill: 53 % for one cable, 31 % for two, 40 % above.', result: 'conduit drops' },
      ],
    },
    { type: 'image', source: require('../../../../assets/reference/conduit_nec_fill_specs.png'), caption: 'NEC: maximum conduit fill according to the number of conductors (53 %, 31 %, 40 %)' },
    {
      type: 'norms',
      title: 'Supports and busways',
      rows: [
        { norm: 'IEC 61537', rule: 'Load tests (SWL), corrosion classes, electrical continuity of cable tray systems.', result: 'SWL 40 kg/m at 1.5 m' },
        { norm: 'IEC 61439-6', rule: 'Busbar trunking: temperature-rise, short-circuit and IP verification like a switchboard.', result: '250 A busway' },
        { norm: 'IEC 60364-4-44 / EN 50174-2', rule: 'Separation between power and data cables according to cable type and divider.', result: '30 cm, 90° crossings' },
        { norm: 'NEC 392.60', rule: 'A metal cable tray may serve as an equipment grounding conductor if marked and identified for that use.', result: 'separate PE at Tropica' },
      ],
    },
    {
      type: 'regional',
      text: 'In coastal areas, salty air attacks ordinary galvanised steel within a few years: choose hot-dip galvanising after fabrication (a high IEC 61537 corrosion class), or stainless steel in food-industry wash-down areas. Rodents love cable routes: covers on low trays and sealed ducts where cables enter rooms. Finally, busbar trunking is imported with long lead times: book it early in the schedule.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'The support sets the installation method, hence the cable size: perforated tray or ladder = method E, the most favourable.',
        'Width = sum of diameters (×2 if spaced), plus 20 to 30 % spare; load checked against the catalogue SWL.',
        'Spacing cables one diameter apart removes almost all grouping derating.',
        'Power and control 30 cm apart; drive motor cables shielded, bonded 360°.',
        'Electrical continuity of trays, but a PE in every cable; firestops at wall crossings.',
        'Machines in a row that move often: busbar trunking with tap-off boxes.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'Two more pumps in 4G6 (17 mm) are added to the 300 mm tray, still spaced one diameter apart. Is there enough room?',
      solution: ['Σd = 113 + 2 × 17 = 147 mm; spaced: ≈ 294 mm.', 'It just fits in 300 mm, with no spare left: plan a second tray for the next extension.'],
    },
    {
      type: 'exercise',
      question: 'Eight 40 mm cables (≥ 4/0 AWG) must be laid in a single layer on a ladder under the NEC. What minimum width?',
      solution: ['NEC 392.22: sum of diameters ≤ width: 8 × 40 = 320 mm.', 'Take the next standard ladder: 400 mm (16 in), or 450 mm to keep spare capacity.'],
    },
    {
      type: 'exercise',
      question: 'Why bond a drive cable shield at both ends, when a sensor cable shield is often earthed at one end only?',
      solution: [
        'Drive noise is high-frequency: the shield must return it to its source by the shortest path, at both ends, with a 360° termination.',
        'For an analogue sensor sensitive to low frequencies (50 Hz), earthing at one end only prevents an earth-loop current from flowing in the shield.',
      ],
    },
  ],
};
