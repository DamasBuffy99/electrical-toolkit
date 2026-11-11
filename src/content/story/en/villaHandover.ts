import { TopicContent } from '../../types';

export const villaHandoverContent: TopicContent = {
  title: 'Works, tests and handover',
  subtitle: 'The drawing is not enough: Awa follows the works, corrects what drifts, measures everything that must be measured, then hands the Mensahs a file they will use for thirty years.',
  blocks: [
    { type: 'scene', text: 'Months 2 to 5 · On site' },
    {
      type: 'text',
      text: 'Moussa Keïta, the electrical contractor’s site manager, has received the construction drawings. Awa visits once a week. Every visit follows the same thread: compare what is installed with what is drawn, before it gets hidden.',
    },
    { type: 'illustration', name: 'contractor-site', caption: 'The contractor builds; the design office checks' },

    { type: 'heading', text: '1 · The stages of the works' },
    {
      type: 'table',
      headers: ['Stage', 'What the contractor does', 'What Awa checks'],
      rows: [
        ['Foundations', 'earth loop in the trench, buried conduits', 'loop continuity, riser to the board, conduit depth'],
        ['Masonry', 'chases, embedded conduits and boxes', 'locations as drawn, heights, no crushed conduits'],
        ['Before plastering', 'last check of the openings', 'the last chance to move a box without breaking anything'],
        ['Cable pulling', 'wires pulled through the conduits', 'sections, colours, number of circuits per conduit'],
        ['Finishing', 'accessories, luminaires, board', 'labelling, tightening, earth connections'],
        ['End of works', 'energising', 'tests and measurements (below)'],
      ],
    },
    { type: 'scene', text: 'Month 3 · Site visit' },
    {
      type: 'dialogue',
      speaker: 'Moussa Keïta (site manager)',
      role: 'team',
      text: 'Ms Diallo, I have some 2.5 mm² left in stock. It’ll do for the pump, won’t it? Saves us an order.',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'No, Moussa, we stick with 4 mm². Over 80 m, 2.5 gives almost 4% drop running and more than 11% at start-up. The pump would work, but it would overheat and fail after a few seasons, and you’re the one who would be called back. I’m recording the rejected change in the visit report.',
    },
    {
      type: 'text',
      text: 'Every visit produces a dated report, sent to the client, the architect and the contractor. It isn’t paperwork: in a dispute, it is the proof of what was decided, and by whom.',
    },
    { type: 'illustration', name: 'eng-supervision', caption: 'Site supervision: compare what is built with what is drawn, and write it down' },

    { type: 'heading', text: '2 · Tests before energising' },
    {
      type: 'text',
      text: 'Before letting the family move in, Awa and Moussa measure the installation. “It lights up” is not enough: each measurement checks a protection that was calculated.',
    },
    {
      type: 'table',
      headers: ['Test', 'What it checks', 'Expected value', 'Measured'],
      rows: [
        ['Continuity of protective conductors', 'every socket and casing is really connected to earth', 'a few tenths of an ohm', '0.3 to 0.8 Ω ✓'],
        ['Earth electrode resistance', 'condition R_A × I_Δn ≤ 50 V', '≤ 100 Ω', '38 Ω ✓'],
        ['Insulation resistance (500 V DC)', 'no damaged cable, no contact with earth', '≥ 0.5 MΩ', '> 200 MΩ ✓'],
        ['RCD tripping', 'they trip at 30 mA, fast enough', '≤ 300 ms at I_Δn', '22 to 35 ms ✓'],
        ['Polarity and voltage at sockets', 'phase and neutral in the right place, correct voltage', '230 V ± 10%', '228 to 232 V ✓'],
        ['Phase balance under load', 'the board layout', 'small deviation', 'L1 7.1 A · L2 6.8 A · L3 7.4 A ✓'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Koffi Mensah',
      role: 'client',
      text: 'Why test the insulation at 500 V when the house runs at 230 V?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'To be strict. Insulation slightly nicked by a nail can hold at 230 V today and fail tomorrow with the humidity. At 500 V the fault shows up immediately, while it’s still easy to repair.',
    },

    { type: 'heading', text: '3 · Handing over the keys' },
    {
      type: 'text',
      text: 'On acceptance day, Awa gives the Mensahs a complete file, and takes twenty minutes to explain their board to them.',
    },
    {
      type: 'bullets',
      items: [
        'The as-built drawings: the real cable routes, updated with the changes made on site.',
        'The board diagram and circuit list, stuck inside the enclosure door.',
        'The test report with every measurement.',
        'The manuals and warranties of the appliances (ACs, water heater, pump).',
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Three habits and you’ll have peace of mind. One: once a month, press the “Test” button on each RCD. Two: if an RCD trips and won’t reset, unplug the appliances in that group one by one to find the culprit. Three: before drilling a wall, look at the as-built drawing.',
    },
    { type: 'illustration', name: 'drawing-sheet', props: { variant: 'asbuilt' }, caption: 'The as-built drawing: the memory of the installation' },
    { type: 'fiche', id: 'drawings-coordination', why: 'Construction, shop and as-built drawings.' },
    {
      type: 'regional',
      text: 'Depending on the country, the utility may require a certificate of compliance from an approved body or from the installer before fitting the meter. Allow for this in the schedule: no meter, no moving in. Awa also advises keeping a digital copy of the file: paper documents cope badly with humidity.',
    },

    { type: 'heading', text: 'Project 1 review' },
    {
      type: 'text',
      text: 'The Mensah villa covered the whole job on a small scale: understanding the need, reading the plans, doing the power balance, placing the points, laying out the board, protecting people, sizing cables and accepting the works. The next projects repeat the same steps, but each becomes more demanding.',
    },
    {
      type: 'bullets',
      items: [
        'On site, check what is about to be hidden, before it is.',
        'Every decision and every rejected change goes into a report.',
        'Tests verify the calculations: earth, insulation, RCDs, voltage, balance.',
        'The final file (as-built drawings, board diagram, tests) belongs to the client and serves for the whole life of the building.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'During testing, the insulation resistance of a socket circuit measures 0.2 MΩ. What do you do?',
      solution: [
        'The value is below the 0.5 MΩ minimum: the circuit is not energised.',
        'Locate the fault: unplug the appliances, then measure section by section (box by box) until you find the damaged cable or the damp box.',
        'After the repair, measure again and record it in the report.',
      ],
    },
    {
      type: 'exercise',
      question: 'An RCD trips in 450 ms during the 30 mA test. Is it acceptable?',
      solution: [
        'No: a general-purpose RCD must trip in 300 ms at most at its rated current (and much faster above it).',
        'Replace it. A slow device lets a dangerous current flow for too long.',
      ],
    },
  ],
};
