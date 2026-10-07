import { TopicContent } from '../../types';

export const architecturalDrawingsContent: TopicContent = {
  title: 'Reading architectural drawings',
  subtitle: 'First step of the journey: what you need to read before drawing the electrical design',
  blocks: [
    {
      type: 'text',
      text: "The whole design rests on the architect's drawings. Before placing a single luminaire, you need to read them — then prepare them to draw the electrical layers.",
    },
    { type: 'illustration', name: 'design-roadmap', props: { step: 1 }, caption: 'Step 1 of the journey' },

    { type: 'heading', text: 'Rooms and dimensions' },
    {
      type: 'text',
      text: "Every room is labeled with its name and dimensions (width × length), and every floor shows its total area. Each room's function and size guide the lighting, sockets and circuit grouping.",
    },
    {
      type: 'image',
      source: require('../../../../assets/reference/villa_floor_plan.png'),
      caption: 'Villa floor plan with annotated rooms and dimensions',
      height: 340,
    },

    { type: 'heading', text: 'Stairs and elevators' },
    {
      type: 'bullets',
      items: [
        'Stairs are drawn as parallel lines (the steps), numbered in the direction of travel, with an arrow showing the way up.',
        "Elevators are always placed next to the stairs: together they form the building's vertical circulation core.",
      ],
    },
    { type: 'illustration', name: 'plan-symbols', props: { variant: 'stairs' }, caption: 'Stairs and elevator on plan' },
    {
      type: 'image',
      source: require('../../../../assets/reference/stair_symbols.png'),
      caption: 'Stair representations on real drawings',
      height: 320,
    },

    { type: 'heading', text: 'The X in a square' },
    {
      type: 'text',
      text: 'An X inscribed in a square marks an opening in the slab. How to read it depends on whether it repeats from floor to floor:',
    },
    {
      type: 'table',
      headers: ['Where does the X appear?', 'Interpretation'],
      rows: [
        ['On a single floor', 'Double-height space (open to the floor above only)'],
        ['On every floor, at the same spot', 'Technical shaft or light well running through the whole building'],
      ],
    },
    { type: 'illustration', name: 'plan-symbols', props: { variant: 'shaft' }, caption: 'Same symbol, two meanings' },

    { type: 'heading', text: 'Doors, windows and furniture' },
    {
      type: 'bullets',
      items: [
        'Doors: an arc from the pivot point shows the opening direction; double door = two symmetric arcs.',
        'Windows: a break in the wall line, with parallel lines at the opening.',
        'Furniture: drawn to scale — it is used to keep sockets and switches clear of the planned furniture.',
      ],
    },
    { type: 'illustration', name: 'plan-symbols', props: { variant: 'doors' }, caption: 'Doors, window, and well or badly placed sockets' },

    { type: 'heading', text: 'Preparing the plan in AutoCAD' },
    {
      type: 'text',
      text: 'Before drawing the electrical design, we clean up and lock the architectural plan so it cannot be changed by mistake.',
    },
    {
      type: 'image',
      source: require('../../../../assets/diagrams/en/dwg_prep_steps.png'),
      caption: 'Steps to prepare the DWG file',
      height: 540,
    },

    { type: 'heading', text: 'Organizing the project folder' },
    {
      type: 'table',
      headers: ['Folder', 'Content'],
      rows: [
        ['Input', 'Architectural drawings, mechanical drawings, low-current drawings, client requirements, interior design'],
        ['Output', 'Lighting system (DIALux report), power system, panel schedule, single-line diagram, BOQ and specifications'],
        ['Draft', 'Working DIALux/CAD files, dated old revisions'],
      ],
    },
    {
      type: 'note',
      text: '💡 Always date old revisions before moving them to Draft, so the current Output folder is never overwritten.',
    },
    { type: 'illustration', name: 'design-roadmap', props: { step: 2 }, caption: 'Next step: estimating the load' },
  ],
};
