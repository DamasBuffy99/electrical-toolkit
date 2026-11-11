import { TopicContent } from '../../types';

export const buildingTeamContent: TopicContent = {
  title: 'A whole team around the project',
  subtitle: 'On the villa, Awa designed and supervised, Moussa built. On a block of flats, each role becomes a profession of its own. Fatou discovers whom she will hire, in what order, and why each one is indispensable.',
  blocks: [
    { type: 'scene', text: 'Month 2 · Fatou Sow’s office' },
    {
      type: 'dialogue',
      speaker: 'Fatou Sow',
      role: 'client',
      text: 'For the Mensah villa there was you and an electrician. Here my architect talks about tenders, an inspection body, a supervisor… I feel I’m paying a lot of people for the same thing.',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'On a house, one person can hold several roles. On a sixteen-flat building with a substation, that’s no longer possible: there are too many drawings, too much equipment and too many risks. Each person has a precise job, and above all, those who check are not those who build.',
    },
    { type: 'illustration', name: 'org-chart', caption: 'The developer and the firms she hires' },

    { type: 'heading', text: '1 · In what order Fatou hires each one' },
    {
      type: 'table',
      headers: ['Order', 'Who', 'What for', 'In this project'],
      rows: [
        ['1', 'The design office (consultant)', 'design the project and prepare the tender documents', 'Lumen Engineering: Awa Diallo (design), Marc Adjovi (supervision)'],
        ['2', 'The contractor', 'buy the equipment and build', 'Électra BTP, chosen after the tender'],
        ['3', 'The supervisor', 'oversee the site on Fatou’s behalf: quality, safety, schedule', 'often the same design office: here Marc Adjovi'],
        ['In parallel', 'The inspection body', 'check independently compliance with standards and safety', 'Ndeye Faye, inspector'],
      ],
    },
    {
      type: 'text',
      text: 'The design office comes first: without drawings, no contractor can price the job. So Awa produces tender documents (drawings, specification, bill of quantities). Three contractors bid; Fatou chooses Électra BTP, the best on both technical merit and price. Only then do the works start, under Marc’s supervision.',
    },
    { type: 'fiche', id: 'project-parties', why: 'The parties and the order in which the owner hires them.' },

    { type: 'heading', text: '2 · On the design-office side: two engineers' },
    { type: 'illustration', name: 'eng-design', caption: 'The design engineer, at the office' },
    {
      type: 'table',
      headers: ['Position', 'Person', 'Their work on the residence'],
      rows: [
        ['Design engineer', 'Awa Diallo', 'power balance, substation, risers, protection, cables, drawings and specification'],
        ['Supervision engineer', 'Marc Adjovi', 'on site every week: checks the contractor builds what is drawn, approves equipment and construction drawings, carries out acceptance'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Marc Adjovi (supervision)',
      role: 'team',
      text: 'Ms Sow, I’m your eyes on site. When the contractor wants to change a piece of equipment or a route, I’ll check it respects Awa’s design, and tell you whether it changes the cost or the safety.',
    },
    { type: 'illustration', name: 'eng-supervision', caption: 'The supervision engineer, on site' },

    { type: 'heading', text: '3 · On the contractor side: three engineers' },
    {
      type: 'table',
      headers: ['Position', 'Person', 'Their work on the residence'],
      rows: [
        ['Site (execution) engineer', 'Rachid Bamba', 'organises the electricians, the schedule, site safety; installs what has been approved'],
        ['Technical office (procurement) engineer', 'Clarisse Houndé', 'consults suppliers, compares offers, prepares equipment approval requests'],
        ['Shop drawings engineer', 'Didier Kouassi', 'turns the design drawings into detailed construction drawings, adapted to the real building and the equipment bought'],
      ],
    },
    { type: 'illustration', name: 'eng-technical-office', caption: 'The technical office: suppliers, offers, approvals' },
    {
      type: 'dialogue',
      speaker: 'Fatou Sow',
      role: 'client',
      text: 'Why redo drawings, since Ms Diallo already made them?',
    },
    {
      type: 'dialogue',
      speaker: 'Didier Kouassi (shop drawings)',
      role: 'team',
      text: 'The design drawings say what to do: “a 35 mm² riser in the shaft”. My drawings say how to do it with the equipment actually bought: the exact enclosure model, its dimensions, the position of the fixings, the route between the beams. They go to Marc for approval before anything is installed.',
    },
    { type: 'illustration', name: 'eng-shop-drawing', caption: 'Shop drawings: how to build it, with the equipment bought' },

    { type: 'heading', text: '4 · The inspection body' },
    {
      type: 'text',
      text: 'The inspection body is independent, on neither the designer’s nor the contractor’s side. It reviews the drawings, attends the tests and writes a compliance report. For a residential building with a substation, the insurer, Fatou’s bank or the authorities may require it.',
    },
    {
      type: 'dialogue',
      speaker: 'Ndeye Faye (inspection body)',
      role: 'team',
      text: 'I don’t design anything and I don’t build anything: I check. If I find a deviation from the standard, I issue a “reservation”. The building is only accepted once all reservations are cleared.',
    },

    { type: 'heading', text: '5 · The document flow' },
    {
      type: 'bullets',
      items: [
        'Awa (design) → design drawings and specification.',
        'Clarisse (procurement) → approval request for each piece of equipment (manufacturer data sheet) → Marc approves or rejects.',
        'Didier (shop drawings) → construction drawings → Marc approves.',
        'Rachid (site) → installs according to the approved drawings.',
        'Marc and Ndeye → tests, reservations, acceptance.',
        'Didier → as-built drawings handed over to Fatou.',
      ],
    },
    { type: 'illustration', name: 'drawings-evolution', caption: 'From design drawings to as-built drawings' },
    { type: 'fiche', id: 'drawings-coordination', why: 'Design drawings, shop drawings and as-built drawings.' },
    {
      type: 'note',
      text: 'On the Mensah villa these roles also existed, but held by fewer people: Awa designed and supervised; Moussa’s firm bought, detailed and built. The bigger the project, the more the roles separate.',
    },
    {
      type: 'regional',
      text: 'Public contracts and bank-financed projects almost always require a tender, a supervision mission and a technical inspection. Approved inspection bodies differ by country: find out at the start, as their opinion may condition the building’s insurance and the utility connection.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'Hiring order: design office, then contractor (after a tender), supervision during the works; the inspection body works in parallel.',
        'Design-office side: design engineer and supervision engineer.',
        'Contractor side: site engineer, technical office (procurement) engineer and shop drawings engineer.',
        'Equipment and construction drawings are approved by supervision before installation.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'Rachid wants to install the landing enclosures before Didier’s drawings are approved, “to save time”. What does Marc answer?',
      solution: [
        'No: without an approved drawing, nothing guarantees that the enclosure, its dimensions and fixings match the design and the approved equipment.',
        'If the installation is rejected afterwards, it must be dismantled: more time is lost than saved. Instead, Marc commits to reviewing the drawings quickly.',
      ],
    },
    {
      type: 'exercise',
      question: 'Why is the supervisor paid by Fatou, not by the contractor?',
      solution: [
        'He must be able to reject work or equipment without a conflict of interest. Paid by the contractor, he would be judge and party.',
        'The same logic applies to the inspection body, independent of both.',
      ],
    },
  ],
};
