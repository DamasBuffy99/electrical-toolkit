import { TopicContent } from '../../types';

export const demandDiversityContent: TopicContent = {
  title: 'Demand Factor & Diversity',
  subtitle: 'Going from connected load to the actual combined load',
  blocks: [
    { type: 'heading', text: '🔷 Demand Factor (DF)' },
    {
      type: 'text',
      text: "Connected load adds up the rated power of every device — but they never all run at full power at the same time. The demand factor corrects for this, circuit by circuit.",
    },
    { type: 'formula', text: 'DF = Maximum demand of the circuit / Total connected load of the circuit' },
    {
      type: 'note',
      text: 'DF is always ≤ 1. In IEC terminology: "maximum utilization factor", noted ku.',
    },
    { type: 'subheading', text: 'Typical values' },
    {
      type: 'table',
      headers: ['Load type', 'Demand factor'],
      rows: [
        ['Lighting', '0.9 – 1'],
        ['Receptacles', '0.5 – 1'],
        ['Air conditioning', '0.75 – 1'],
      ],
    },
    {
      type: 'text',
      text: 'Detailed reference tables by occupancy type: IEEE 241 Table 6.1.12 (general use) and NEC Table 220.42 (lighting).',
    },
    {
      type: 'image',
      source: require('../../../../assets/reference/nec_220_42.png'),
      caption: 'NEC Table 220.42 — Lighting demand factors',
      height: 260,
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Diversity / Coincidence Factor (ks)' },
    {
      type: 'text',
      text: "Once the demanded load at each panel is known, they are combined moving upstream: not every panel draws its maximum at the same time either.",
    },
    { type: 'formula', text: 'Diversity factor = Σ Individual maximum demands / Maximum demand of the whole system' },
    {
      type: 'note',
      text: "The diversity factor is always ≥ 1. In IEC: \"coincidence factor\" (ks). Coincidence factor = 1 / Diversity factor (always ≤ 1) — this is the one used directly as a multiplier.",
    },
    { type: 'formula', text: 'Combined load = (Σ demanded loads) × ks     or     Σ demanded loads ÷ Diversity factor' },
    { type: 'subheading', text: 'ks by number of circuits (IEC 61439)' },
    {
      type: 'table',
      headers: ['Combined circuits', 'ks'],
      rows: [
        ['2 – 3', '0.9'],
        ['4 – 5', '0.8'],
        ['6 – 9', '0.7'],
        ['10 or more', '0.6'],
      ],
    },
    { type: 'subheading', text: 'ks by building type' },
    {
      type: 'table',
      headers: ['Building type', 'ks'],
      rows: [
        ['Residential', '0.6 – 0.7'],
        ['Commercial', '0.6 – 0.8'],
        ['Industrial / Agricultural', '0.9 – 1'],
      ],
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 The cascade rule' },
    {
      type: 'text',
      text: "The coincidence factor is applied level by level, moving from the terminal circuit up to the main panel. At each stage, combine the already-demanded load of the previous level — never the raw connected load.",
    },
    {
      type: 'image',
      source: require('../../../../assets/diagrams/en/diversity_cascade.png'),
      caption: 'Coincidence factor cascade in a distribution board',
      height: 480,
    },
    {
      type: 'image',
      source: require('../../../../assets/reference/iec_diversity_example.png'),
      caption: 'IEC 61439-2 — Real cascade example (result: 42 kW at the main board)',
      height: 320,
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Example — Sizing a transformer with diversity' },
    {
      type: 'text',
      text: 'Four feeders: 250, 200, 150, and 400 kVA, with demand factors of 90%, 80%, 75%, and 85%.',
    },
    {
      type: 'table',
      headers: ['Feeder', 'Connected (kVA)', 'DF', 'Demanded (kVA)'],
      rows: [
        ['1', '250', '90%', '225'],
        ['2', '200', '80%', '160'],
        ['3', '150', '75%', '112.5'],
        ['4', '400', '85%', '340'],
      ],
    },
    { type: 'formula', text: 'Sum of individual demands = 837.5 kVA' },
    {
      type: 'text',
      text: 'Without diversity (factor = 1), an 850 kVA transformer would be needed. With a diversity factor of 1.5:',
    },
    { type: 'formula', text: '837.5 ÷ 1.5 = 558 kVA → a standard 600 kVA transformer is enough' },
    {
      type: 'note',
      text: '💡 Applying diversity correctly can significantly reduce the size (and cost) of the transformer.',
    },
  ],
};
