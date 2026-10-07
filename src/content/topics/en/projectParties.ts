import { TopicContent } from '../../types';

export const projectPartiesContent: TopicContent = {
  title: 'The project parties',
  subtitle: 'Who does what in an electrical distribution project — and where the electrical engineer works',
  blocks: [
    {
      type: 'text',
      text: 'Before drawing a single circuit, you need to know who you work for and with whom. Every construction project brings together four parties: the owner, the consultant, the contractor and the supervisor.',
    },
    { type: 'illustration', name: 'org-chart', caption: 'The owner and the three companies they hire' },

    { type: 'heading', text: '1 · The owner' },
    {
      type: 'text',
      text: 'Everything starts with them: they own a plot of land and want to build a project on it — housing, offices, retail, a hospital… They fund the project and hire the other parties.',
    },
    { type: 'illustration', name: 'owner-land', caption: 'A plot of land, and an idea for a project' },
    { type: 'image', source: require('../../../../assets/reference/project_lifecycle_1_land.jpg'), caption: 'The plot before the project' },

    { type: 'heading', text: '2 · The consultant (design firm)' },
    {
      type: 'text',
      text: "They turn the owner's idea into drawings. Each discipline produces its own:",
    },
    {
      type: 'bullets',
      items: ['Architecture', 'Electrical', 'Mechanical: fire fighting, pumps, HVAC', 'Structural (civil)'],
    },
    { type: 'illustration', name: 'consultant-office', caption: 'The design firm produces drawings for every discipline' },
    { type: 'image', source: require('../../../../assets/reference/project_lifecycle_2_vision.jpg'), caption: "The owner's vision takes shape" },

    { type: 'heading', text: '3 · The contractor' },
    {
      type: 'text',
      text: 'They turn the drawings into reality: they build, manage the teams, keep the budget and purchase the equipment.',
    },
    { type: 'illustration', name: 'contractor-site', caption: 'The site, run by the contractor' },
    { type: 'image', source: require('../../../../assets/reference/project_lifecycle_3_construction.jpg'), caption: 'On site' },

    { type: 'heading', text: '4 · The supervisor' },
    {
      type: 'text',
      text: 'They check that the project is built as planned: safety, quality, schedule. They are almost always part of the design firm, but can also be an independent company.',
    },
    { type: 'illustration', name: 'supervisor-site', caption: 'Safety, quality, schedule' },
    { type: 'image', source: require('../../../../assets/reference/project_lifecycle_4_supervision.jpg'), caption: 'On-site inspection' },

    { type: 'heading', text: 'Where does the electrical engineer work?' },
    {
      type: 'text',
      text: 'Depending on the company that employs them, the electrical engineer holds one of these four positions:',
    },
    {
      type: 'table',
      headers: ['Company', 'Positions'],
      rows: [
        ['Design firm (consultant)', 'Design engineer · Supervision engineer'],
        ['Construction company (contractor)', 'Execution engineer · Technical office engineer'],
      ],
    },
    { type: 'illustration', name: 'engineer-roles', caption: 'Four positions, two types of company' },

    { type: 'heading', text: 'Design engineer' },
    {
      type: 'text',
      text: 'At the design firm, they design the installation — load estimation, lighting, sockets, panels, protection, cables — and produce the conceptual drawings. This is the job this course follows, step by step.',
    },
    { type: 'illustration', name: 'eng-design', caption: 'At the office, in AutoCAD and DIALux' },
    { type: 'image', source: require('../../../../assets/reference/project_lifecycle_5_electrical_office.jpg'), caption: 'The design engineer at work' },

    { type: 'heading', text: 'Supervision engineer' },
    {
      type: 'text',
      text: 'Also employed by the design firm, they go to site to check that the installation matches the approved drawings.',
    },
    { type: 'illustration', name: 'eng-supervision', caption: 'Compliance check on site' },

    { type: 'heading', text: 'Execution engineer' },
    {
      type: 'text',
      text: 'On the contractor side, they carry out the works on site: they organize the electrician teams and follow the installation of cable trays, cables and equipment.',
    },
    { type: 'illustration', name: 'eng-execution', caption: 'On site, with the teams' },

    { type: 'heading', text: 'Technical office engineer' },
    {
      type: 'text',
      text: 'Also on the contractor side, they prepare the shop drawings for approval and handle equipment procurement.',
    },
    { type: 'illustration', name: 'eng-technical-office', caption: 'Shop drawings and procurement' },

    { type: 'heading', text: 'Key takeaways' },
    {
      type: 'bullets',
      items: ['The owner funds and hires.', 'The consultant designs the drawings.', 'The contractor builds.', 'The supervisor checks.'],
    },
    {
      type: 'note',
      text: '💡 The electrical engineer can be on either side: design or supervision at the consultant, execution or technical office at the contractor.',
    },
    { type: 'illustration', name: 'org-chart', caption: 'The four parties at a glance' },
  ],
};
