import { TopicContent } from '../../types';

export const projectPartiesContent: TopicContent = {
  title: 'The project parties',
  subtitle: 'Who does what in an electrical distribution project — and where the electrical engineer works',
  blocks: [
    {
      type: 'text',
      text: 'Before drawing a single circuit, you need to know who you work for and with whom. An electrical distribution project brings together four main players: the owner, the consultant, the contractor and the supervisor.',
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
      text: 'They prepare all the design the owner requires:',
    },
    {
      type: 'bullets',
      items: ['AutoCAD drawings', 'Electrical design', 'Mechanical design', 'HVAC system', 'Structural design'],
    },
    { type: 'illustration', name: 'consultant-office', caption: 'The design firm produces drawings for every discipline' },
    { type: 'image', source: require('../../../../assets/reference/project_lifecycle_2_vision.jpg'), caption: "The owner's vision takes shape" },

    { type: 'heading', text: '3 · The contractor' },
    {
      type: 'text',
      text: 'They are responsible for the physical construction and execution of the project: they turn the drawings into a real project. They also buy the required equipment — transformers, cables, circuit breakers, etc.',
    },
    { type: 'illustration', name: 'contractor-site', caption: 'The site, run by the contractor' },
    { type: 'image', source: require('../../../../assets/reference/project_lifecycle_3_construction.jpg'), caption: 'On site' },

    { type: 'heading', text: '4 · The supervisor' },
    {
      type: 'text',
      text: 'They oversee the construction and monitor activities on the worksite. They manage crews, make sure health and safety codes are observed, and that the work is completed on schedule.',
    },
    { type: 'illustration', name: 'supervisor-site', caption: 'Safety, quality, schedule' },
    { type: 'image', source: require('../../../../assets/reference/project_lifecycle_4_supervision.jpg'), caption: 'On-site inspection' },

    { type: 'heading', text: 'In what order does the owner hire them?' },
    {
      type: 'bullets',
      items: [
        '1 → They go to the consultant, who prepares the drawings.',
        '2 → They go to a contractor to turn these plans into reality (convert the drawings into a real project).',
        '3 → They go to a supervision company to make sure the project is built as intended.',
      ],
    },
    { type: 'note', text: '💡 The supervision company is usually part of the consulting company.' },
    { type: 'illustration', name: 'org-chart', caption: 'Consultant → contractor → supervisor' },

    { type: 'heading', text: 'Where does the electrical engineer work?' },
    {
      type: 'text',
      text: 'Depending on the company that employs them, the electrical engineer holds one of these five positions:',
    },
    {
      type: 'table',
      headers: ['Company', 'Positions'],
      rows: [
        ['Consulting company', 'Design engineer · Supervision engineer'],
        ['Contracting company', 'Execution engineer · Technical office engineer (procurement) · Shop drawing engineer'],
      ],
    },
    { type: 'illustration', name: 'engineer-roles', caption: 'Two positions at the consultant, three at the contractor' },

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

    { type: 'heading', text: 'Technical office engineer (procurement)' },
    {
      type: 'text',
      text: 'Also on the contractor side, the technical office engineer handles for example procurement: they contact suppliers to source and order the project equipment.',
    },
    { type: 'illustration', name: 'eng-technical-office', caption: 'Contacting suppliers and purchasing' },

    { type: 'heading', text: 'Shop drawing engineer' },
    {
      type: 'text',
      text: 'They prepare the shop drawings (executive drawings): they take the conceptual drawings and add the information needed on site — distances, cable cores, sections, characteristics… These drawings are then submitted for approval.',
    },
    { type: 'illustration', name: 'eng-shop-drawing', caption: 'Shop drawings, ready for approval' },

    { type: 'heading', text: 'Key takeaways' },
    {
      type: 'bullets',
      items: [
        'The owner funds and hires.',
        'The consultant designs the drawings.',
        'The contractor builds and buys the equipment.',
        'The supervisor checks safety, quality and schedule.',
      ],
    },
    {
      type: 'note',
      text: '💡 The electrical engineer can be on either side: design or supervision at the consultant; execution, technical office (procurement) or shop drawings at the contractor.',
    },
    { type: 'illustration', name: 'engineer-roles', caption: 'The five positions at a glance' },
  ],
};
