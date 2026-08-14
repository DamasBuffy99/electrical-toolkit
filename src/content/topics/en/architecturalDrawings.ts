import { TopicContent } from '../../types';

export const architecturalDrawingsContent: TopicContent = {
  title: 'Reading Architectural Drawings',
  subtitle: "What you need to know before starting an electrical design",
  blocks: [
    { type: 'heading', text: '🔷 Reading a plan: rooms and dimensions' },
    {
      type: 'text',
      text: "Every room on an architectural plan is labeled with its name and dimensions (width × length), and every floor shows its total area. Read the function and size of each room before starting the electrical layout — it guides lighting, outlets, and circuit grouping.",
    },
    {
      type: 'image',
      source: require('../../../../assets/reference/villa_floor_plan.png'),
      caption: 'Example villa floor plan with annotated rooms and dimensions',
      height: 340,
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Stairs and elevators' },
    {
      type: 'bullets',
      items: [
        "Stairs are drawn as parallel lines (the steps), numbered in the direction of travel, with an arrow indicating up/down.",
        "Elevators are always placed next to stairs — together they form the building's vertical circulation core.",
      ],
    },
    {
      type: 'image',
      source: require('../../../../assets/reference/stair_symbols.png'),
      caption: 'Examples of stair representations on plan',
      height: 320,
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Shaft symbol: X in a square' },
    {
      type: 'text',
      text: "An X inscribed in a square marks an opening in the slab. How to interpret it depends on whether it repeats from floor to floor:",
    },
    {
      type: 'table',
      headers: ['Where does the X appear?', 'Interpretation'],
      rows: [
        ['On a single floor', 'Double-height space (opening to the floor above only)'],
        ['On every floor, at the same spot', 'Technical shaft or skylight running through the whole building'],
      ],
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Doors, windows, and furniture' },
    {
      type: 'bullets',
      items: [
        'Doors: an arc from the pivot point, showing the opening direction; double doors = two symmetric arcs.',
        'Windows: a break in the wall line with parallel lines at the opening.',
        'Furniture: to-scale plan symbols — use them to keep outlets and switches clear of the planned furniture.',
      ],
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Preparing the plan before electrical design' },
    {
      type: 'image',
      source: require('../../../../assets/diagrams/en/dwg_prep_steps.png'),
      caption: 'Steps to prepare the DWG file',
      height: 540,
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Project folder structure' },
    {
      type: 'table',
      headers: ['Folder', 'Content'],
      rows: [
        ['Input', "Architectural drawings, mechanical drawings, low-current drawings, client requirements, interior design"],
        ['Output', "Lighting system (DIALux report), power system, panel schedule, single-line diagram, BOQ and specifications"],
        ['Draft', 'Working DIALux/CAD files, dated old revisions'],
      ],
    },
    {
      type: 'note',
      text: '💡 Always date old revisions before moving them to Draft, so the current Output folder is never overwritten.',
    },
  ],
};
