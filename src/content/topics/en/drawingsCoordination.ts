import { TopicContent } from '../../types';

export const drawingsCoordinationContent: TopicContent = {
  title: 'Electrical drawings & coordination',
  subtitle: 'The three versions of an electrical drawing, and how to work with the other trades',
  blocks: [
    {
      type: 'text',
      text: 'The project parties communicate through drawings. The same electrical drawing evolves through three versions during the project: conceptual, shop drawing, then as-built.',
    },
    { type: 'illustration', name: 'drawings-evolution', caption: 'One drawing, three versions' },

    { type: 'heading', text: '1 · Conceptual drawings' },
    {
      type: 'text',
      text: "Prepared by the engineer of the consulting company's technical office, they show the power and lighting circuits of the architectural project. They consist of lines, symbols, dimensions and notations.",
    },
    { type: 'illustration', name: 'drawing-sheet', props: { variant: 'conceptual' }, caption: 'Luminaires, sockets and circuits on the conceptual drawing' },

    { type: 'heading', text: '2 · Shop drawings' },
    {
      type: 'text',
      text: "Also called executive drawings, they are prepared by the engineer of the contracting company's technical office. They take the conceptual drawings and add further information:",
    },
    {
      type: 'bullets',
      items: ['Distances', 'Cable cores', 'Sections', 'Equipment characteristics…'],
    },
    { type: 'note', text: '📌 No work starts without approved shop drawings: they are also a contractual document.' },
    { type: 'illustration', name: 'drawing-sheet', props: { variant: 'shop' }, caption: 'Dimensions, cable sizes and approval stamp' },

    { type: 'heading', text: '3 · As-built drawings' },
    {
      type: 'text',
      text: 'Prepared by the contractor, they reflect what was actually built. Site conditions sometimes require the execution engineer to carry out the work slightly differently from the shop drawings, for several reasons:',
    },
    {
      type: 'bullets',
      items: [
        'To make the work easier to implement',
        'A modification requested by the owner or the consultant while receiving the works',
        "A civil (structural) engineer's modification",
      ],
    },
    { type: 'note', text: '💡 In short: as-built drawings = shop drawings, unless something changed on site.' },
    { type: 'illustration', name: 'drawing-sheet', props: { variant: 'asbuilt' }, caption: 'Site changes are clouded in red' },

    { type: 'heading', text: 'Coordination with the architect' },
    {
      type: 'text',
      text: 'Reserve space for the transformer and generator rooms if needed, and coordinate lighting and socket placement with the furniture layout.',
    },
    { type: 'illustration', name: 'coordination', props: { variant: 'architect' }, caption: 'Furniture and technical rooms guide the electrical layout' },

    { type: 'heading', text: 'Coordination with the civil engineer' },
    {
      type: 'text',
      text: 'Equipment weight loads the structure. Transformers and generators are usually placed on the ground floor; in towers, they can be spread across several levels.',
    },
    { type: 'illustration', name: 'coordination', props: { variant: 'civil' }, caption: 'Heavy loads as close to the foundations as possible' },

    { type: 'heading', text: 'Coordination with the mechanical engineer' },
    {
      type: 'text',
      text: 'Do not route cable trays along the same line as water pipes, ducts and light fixtures. Coordinate with the fire-fighting systems too.',
    },
    { type: 'illustration', name: 'coordination', props: { variant: 'mechanical' }, caption: 'In the ceiling void, every network has its place' },
  ],
};
