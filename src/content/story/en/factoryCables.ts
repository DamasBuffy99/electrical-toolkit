import { TopicContent } from '../../types';

export const factoryCablesContent: TopicContent = {
  title: 'Cables on trays and heat',
  subtitle: 'In the plant, cables run by the dozen on the same trays, under a roof that heats up. A cable that is fine in a catalogue can cook in reality. Awa applies the correction factors, and explains to Ibrahim why the compressor cable is bigger than he expected.',
  blocks: [
    { type: 'scene', text: 'Month 2 · Visit along the future cable-tray route' },
    {
      type: 'text',
      text: 'Paul shows Awa the cable tray running along the roof structure, 5 m up, under the metal sheeting. Six power cables will run side by side on it: compressor, pumps, CIP. In the hot season, Paul measured 40 °C there.',
    },
    {
      type: 'dialogue',
      speaker: 'Ibrahim Traoré',
      role: 'client',
      text: 'The cable supplier says a 25 mm² cable carries 135 A. The compressor only draws 98. Why are you telling me 35 mm²?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'His 135 A is for a single cable at 30 °C. Here it will be 40 °C and the cable will be packed against five others that heat up too. It sheds its heat less well: you have to ask less of it. It’s like running in full sun in the middle of a crowd.',
    },

    { type: 'heading', text: '1 · The correction factors' },
    {
      type: 'table',
      headers: ['Real condition', 'Factor (XLPE cable)', 'Effect'],
      rows: [
        ['Ambient 40 °C instead of 30 °C', '≈ 0.91', 'the cable is already warm before carrying anything'],
        ['6 touching cables on a perforated tray', '≈ 0.75', 'each cable heats its neighbours'],
        ['Overall factor', '0.91 × 0.75 ≈ 0.68', 'the cable now carries only 68% of its catalogue value'],
      ],
    },
    {
      type: 'text',
      text: 'The compressor’s overload protection is set to 98 A: that is the current the cable must be able to carry permanently, in its real conditions.',
    },
    { type: 'formula', text: 'I_{z,catalogue} ≥ \\frac{I_r}{k_{temp} × k_{group}} = \\frac{98}{0.91 × 0.75} ≈ 144 A' },
    {
      type: 'table',
      headers: ['Section (copper, XLPE, on tray)', 'Catalogue', 'After correction × 0.68', 'Verdict'],
      rows: [
        ['25 mm²', '135 A', '92 A', '✗ < 98 A'],
        ['35 mm²', '169 A', '115 A', '✓ ≥ 98 A'],
        ['50 mm²', '207 A', '141 A', '✓ (if the setting rose to 125 A)'],
      ],
    },
    {
      type: 'note',
      text: 'The cable must carry the setting of its protection, not just the motor current. If one day someone raises the thermal setting to 125 A “because it keeps tripping”, a 50 mm² cable will be needed. Hence the label on the panel: “Ir = 98 A, do not change without the design office’s approval”.',
    },
    { type: 'fiche', id: 'cable-sizing', why: 'Current-carrying capacity tables and correction factors (temperature, grouping).' },

    { type: 'heading', text: '2 · Voltage drop' },
    {
      type: 'text',
      text: 'The compressor is 70 m from the main board, at the far end of the plant. Awa checks the three-phase voltage drop with the 35 mm² cable.',
    },
    { type: 'formula', text: 'ΔU = \\frac{√3 × ρ × L × I × cos φ}{S} = \\frac{1.732 × 0.0225 × 70 × 98 × 0.86}{35} ≈ 6.6 V  →  1.6%' },
    {
      type: 'text',
      text: 'Adding the panel feeder (0.6%), the total stays under 2.5%, far from the 8% limit allowed for an installation supplied by its own substation. Here heat, not voltage drop, set the cross-section.',
    },
    { type: 'fiche', id: 'voltage-drop', why: 'Three-phase formulas and limits by type of supply.' },

    { type: 'heading', text: '3 · The big feeder cable' },
    {
      type: 'text',
      text: 'The panel feeder is protected at 320 A. On the same tray it would need 320 / 0.68 ≈ 470 A of catalogue rating: a huge cable. Awa lays it on a separate tray instead, with no neighbours.',
    },
    { type: 'formula', text: 'Alone on its tray: I_z ≥ \\frac{320}{0.91} ≈ 352 A  →  copper 150 mm² (≈ 399 A)' },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'A second cable tray costs less than a 240 mm² cable. Laying a cable well is also a way of sizing it.',
    },

    { type: 'heading', text: '4 · Good installation practice' },
    {
      type: 'bullets',
      items: [
        'Armoured cables for industry: they resist knocks from forklifts and rodents.',
        'Power cables and control cables (sensors, PLCs) on separate trays, or kept apart, to avoid interference.',
        'Shielded cables between drive and motor, shield earthed at both ends.',
        'Fire-stopping at every wall crossing between two zones.',
        'Both ends of every cable labelled, with the same name as on the diagram.',
      ],
    },
    { type: 'scene', text: 'Month 4 · Électra BTP construction drawings' },
    {
      type: 'text',
      text: 'Ibrahim has awarded the works to Électra BTP, the contractor of Les Palmiers. Didier Kouassi, its shop drawings engineer, draws the exact cable-tray route from Awa’s design principle.',
    },
    {
      type: 'dialogue',
      speaker: 'Didier Kouassi (shop drawings)',
      role: 'team',
      text: 'The tray planned under the sheeting crosses the pasteuriser hood duct, which exhausts air at 60 °C. I propose lowering it to 3 m, along the columns, and running the control cables on a second tray 30 cm below.',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Excellent: lower down it will be cooler, which is consistent with my 40 °C calculation. Separate control cables will also avoid interference from the drives. I approve, and Paul will check the forklifts can pass underneath.',
    },
    {
      type: 'regional',
      text: 'Under metal-sheet roofs, the temperature near the structure often exceeds 45 °C in the hot season: measure it rather than assuming 30 °C. When possible, run cable trays at mid-height or in the shade of a structure rather than against the sheeting.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'Catalogue values assume a single cable at 30 °C: correct for temperature and grouping.',
        'The cable must carry its protection setting: corrected I_z ≥ I_r.',
        'In a plant, heat often sets the cross-section more than voltage drop does.',
        'Separating cables (distinct trays) reduces the section needed.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'A 15 kW pump (protection set to 28.3 A) is on the same tray (overall factor 0.68). Is a 4 mm² cable (catalogue 42 A) suitable?',
      solution: ['Corrected capacity: 42 × 0.68 ≈ 28.6 A ≥ 28.3 A.', 'It is only just suitable: Awa takes 6 mm² to keep a margin (and limit the voltage dip at start-up).'],
    },
    {
      type: 'exercise',
      question: 'If the ambient rose to 50 °C (factor ≈ 0.82), would the compressor’s 35 mm² cable still be enough?',
      solution: ['169 × 0.82 × 0.75 ≈ 104 A ≥ 98 A: yes, but with very little margin.', 'One more argument for moving the tray away from the sheeting.'],
    },
  ],
};
