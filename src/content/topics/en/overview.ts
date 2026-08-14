import { TopicContent } from '../../types';

export const overviewContent: TopicContent = {
  title: 'Project Overview',
  subtitle: 'Who does what, which drawings, and how to coordinate with other trades',
  blocks: [
    { type: 'heading', text: '🔷 The 4 stakeholders' },
    {
      type: 'text',
      text: "Four main parties are involved in any electrical project. The supervisor almost always belongs to the consulting firm, but can also work independently.",
    },
    {
      type: 'image',
      source: require('../../../../assets/diagrams/en/project_parties.png'),
      caption: 'Relationship between the owner and the 3 companies involved',
      height: 360,
    },
    {
      type: 'table',
      headers: ['Party', 'Role'],
      rows: [
        ['Owner', 'Wants to build the project on a given plot (residential, commercial, hospital…)'],
        ['Consultant', 'Prepares the drawings: architecture, electrical, mechanical (fire, pumps, HVAC), structural'],
        ['Contractor', 'Turns the drawings into reality: construction, team management, budget, equipment purchasing'],
        ['Supervisor', 'Checks that the project is built as planned: safety, quality, schedule compliance'],
      ],
    },
    { type: 'subheading', text: 'Engineering positions by company type' },
    {
      type: 'table',
      headers: ['Company', 'Positions'],
      rows: [
        ['Consulting firm', 'Electrical design engineers, electrical supervision engineers'],
        ['Construction company', 'Electrical execution engineers, technical office engineers (procurement, shop drawings)'],
      ],
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 The 3 types of electrical drawings' },
    {
      type: 'image',
      source: require('../../../../assets/diagrams/en/drawing_types_flow.png'),
      caption: 'From design to reality: the evolution of an electrical drawing',
      height: 300,
    },
    {
      type: 'bullets',
      items: [
        "Conceptual drawings: prepared by the consultant's technical office. Show the power and lighting circuits. Each drawing uses lines, symbols, dimensions, and annotations.",
        "Shop drawings: prepared by the contractor's technical office, for two reasons — technical (the consultant doesn't detail everything: distances, cable sizes…) and contractual (no work can start without approved shop drawings).",
        "As-built drawings: reflect what was actually built — may differ from the shop drawings due to site constraints, requested changes, or for handover of the final documentation to the owner.",
      ],
    },
    {
      type: 'note',
      text: 'In short: as-built drawings = shop drawings, unless something changed on site.',
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Coordination with other trades' },
    {
      type: 'table',
      headers: ['Discipline', 'Coordination points'],
      rows: [
        ['Architect', 'Reserve space for the transformer/generator room if needed; coordinate lighting and outlet placement with furniture layout'],
        ['Civil engineer', 'Equipment weight on the structure — transformer/generator usually at ground level; can be spread across floors in towers'],
        ['Mechanical engineer', 'Avoid routing cable trays along the same line as water pipes, ducts, and light fixtures; coordinate with fire systems'],
      ],
    },
  ],
};
