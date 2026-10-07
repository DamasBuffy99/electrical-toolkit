import { TopicContent } from '../../types';
import { SLIDES } from '../../slides';

export const fusesContent: TopicContent = {
  title: 'LV and HV fuses',
  subtitle: 'Fuse types, gG and aM categories, and the coordination rule with the cable',
  blocks: [
    {
      type: 'text',
      text: 'A fuse protects by melting a conducting element: simple, fast and strongly current-limiting. It complements or replaces the circuit breaker, especially for motors and at high voltage.',
    },

    { type: 'heading', text: '1 · Choosing the rating (IEC 60269)' },
    { type: 'formula', text: 'In ≥ I_B    and    Icu ≥ Ik' },
    {
      type: 'text',
      text: 'I₂ is the conventional melting current: the fuse must melt at I₂. To protect the cable, I₂ must not exceed 1.45 times its current-carrying capacity:',
    },
    { type: 'formula', text: 'I₂ ≤ 1.45 × I_z' },
    {
      type: 'text',
      text: "This allows a temporary overload up to 45% above the cable's capacity, for a limited time: the fuse melts before the conductor reaches its maximum overload temperature.",
    },
    { type: 'image', source: SLIDES['iec-7'], caption: 'Fuse selection per IEC 60269' },

    { type: 'heading', text: '2 · gG and aM categories' },
    {
      type: 'table',
      headers: ['Category', 'Protection', 'Use'],
      rows: [
        ['gG (general purpose)', 'Full range: overload + short circuit · I₂ = 1.6 × In', 'Conductor protection in residential and commercial installations'],
        ['aM (motor)', 'Partial range: short circuit only, delayed to let starting current through', 'Motors, transformers, high-inrush loads · use with a thermal overload relay'],
      ],
    },
    { type: 'note', text: '📌 Common aM ratings: 10, 16, 20, 25, 32, 40, 50, 63, 80, 100, 125, 160, 200, 250, 320, 400, 630, 800, 1000, 1250 A.' },
    { type: 'image', source: SLIDES['panel-39'], caption: 'aM fuse' },

    { type: 'heading', text: '3 · Low-voltage fuses' },
    {
      type: 'table',
      headers: ['Type', 'Construction', 'Use'],
      rows: [
        ['Semi-enclosed rewireable ("kit-kat")', 'Porcelain base and carrier, replaceable tinned copper wire', 'Low fault currents, low voltage'],
        ['HRC cartridge', 'Ceramic body, silver element packed in powder (marble dust) that quenches the arc', 'Interrupts before the first peak of the fault current'],
      ],
    },
    {
      type: 'text',
      text: 'In an HRC cartridge, on a fault the silver element melts and vaporizes; its reaction with the filling powder forms a high-resistance substance that quenches the arc.',
    },
    { type: 'image', source: SLIDES['panel-37'], caption: 'Rewireable fuse' },
    { type: 'image', source: SLIDES['panel-38'], caption: 'HRC cartridge fuse' },

    { type: 'heading', text: '4 · High-voltage fuses' },
    {
      type: 'table',
      headers: ['Type', 'Principle', 'Characteristics'],
      rows: [
        ['HV cartridge (up to 33 kV)', 'Helical element or two parallel elements (low resistance for normal current, high resistance to limit the fault) against corona', '33 kV, 8,700 A breaking capacity'],
        ['Liquid HRC', 'Glass tube filled with carbon tetrachloride; a spring draws the melted element into the arc-quenching liquid', 'Up to 132 kV · 100 A rated · 6,100 A breaking capacity · protects transformers and breakers'],
      ],
    },
    { type: 'image', source: SLIDES['panel-40'], caption: 'HV cartridge fuse' },
    { type: 'image', source: SLIDES['panel-41'], caption: 'Liquid-type HV fuse' },
  ],
};
