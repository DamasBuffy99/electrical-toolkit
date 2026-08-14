import { TopicContent } from '../../types';

export const transformerGeneratorContent: TopicContent = {
  title: 'Transformer & Generator',
  subtitle: 'Sizing technical rooms based on the building load',
  blocks: [
    { type: 'heading', text: '🔷 Generator room' },
    {
      type: 'text',
      text: "Unlike a transformer, there is no universal formula to size a generator room: dimensions depend entirely on the model chosen from the manufacturer's catalog.",
    },
    { type: 'formula', text: 'Generator load = 50% × Total building load' },
    {
      type: 'note',
      text: "⚠️ The \"theoretical\" rule is often 25%, but in practice 50% is used to keep a safety margin and anticipate future loads.",
    },
    {
      type: 'image',
      source: require('../../../../assets/diagrams/en/generator_sizing_steps.png'),
      caption: 'Generator room sizing walkthrough',
      height: 620,
    },
    { type: 'subheading', text: 'Room types (indicative)' },
    {
      type: 'table',
      headers: ['Type', 'Length', 'Width', 'Indicative range'],
      rows: [
        ['A', '3.5 m', '2.8 m', '~ up to 200 kVA'],
        ['B', '4.7 m', '3.25 m', '~ 200 to 650 kVA'],
        ['C', '5.7 m', '3.75 m', '~ 650 kVA and above'],
      ],
    },
    {
      type: 'text',
      text: 'Example: a 1 MVA building → 500 kVA generator → XC400-500 model (catalog) → Room Type B → 4.7 × 3.25 m room.',
    },
    {
      type: 'image',
      source: require('../../../../assets/reference/gen_room_diagram.png'),
      caption: 'Generator room clearance diagram (letters A to P per manufacturer)',
      height: 300,
    },
    {
      type: 'image',
      source: require('../../../../assets/reference/genset_datasheet.png'),
      caption: 'Example manufacturer datasheet (XC400-500)',
      height: 320,
    },
    {
      type: 'note',
      text: "⚠️ Exact dimensions always come from the manufacturer's datasheet — this A/B/C classification is indicative only. Door width must always be ≥ equipment width.",
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Transformer room' },
    {
      type: 'text',
      text: "Sizing the transformer room is more standardized: it relies on the minimum clearances defined by the NEC, depending on the voltage and on what's on each side of the equipment.",
    },
    { type: 'subheading', text: 'The 3 NEC conditions' },
    {
      type: 'table',
      headers: ['Condition', 'Situation'],
      rows: [
        ['1', 'Live parts on one side, isolated/ungrounded parts on the other'],
        ['2', 'Live parts on one side, grounded parts on the other'],
        ['3', 'Live parts on both sides'],
      ],
    },
    {
      type: 'image',
      source: require('../../../../assets/diagrams/en/transformer_room_steps.png'),
      caption: 'Transformer room sizing walkthrough',
      height: 540,
    },
    { type: 'subheading', text: 'Clearances — low voltage (NEC 110.26(A)(1))' },
    {
      type: 'image',
      source: require('../../../../assets/reference/clearance_low_voltage.png'),
      caption: 'NEC Table 110.26(A)(1) — low voltage clearances',
      height: 300,
    },
    { type: 'subheading', text: 'Clearances — medium voltage (NEC 110-34 / OSHA S-2) + transformer dimensions' },
    {
      type: 'image',
      source: require('../../../../assets/reference/clearance_medium_voltage.png'),
      caption: 'NEC Table 110-34 / OSHA S-2 + example transformer catalog',
      height: 300,
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Worked example — MV transformer room' },
    {
      type: 'text',
      text: '1 MVA, 21 kV transformer, dimensions 1.97 × 0.98 m. For the 9–25 kV range: Condition 1 = 5 ft (1.524 m), Condition 2 = 6 ft (1.829 m).',
    },
    { type: 'formula', text: 'Room length = 1.97 + 1.829 + 1.524 = 5.323 m' },
    { type: 'formula', text: 'Room width = 0.98 + 1.829 + 1.829 = 4.638 m' },
    {
      type: 'note',
      text: '💡 Result: a 5.32 × 4.64 m room. The door must remain ≥ 0.98 m (transformer width).',
    },
  ],
};
