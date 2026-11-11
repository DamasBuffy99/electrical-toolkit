import { TopicContent } from '../../types';

export const villaMeetingContent: TopicContent = {
  title: 'The first meeting',
  subtitle: 'Koffi and Esther Mensah are building their house. Before calculating anything, Awa listens, asks the right questions and explains how the project will unfold.',
  blocks: [
    { type: 'scene', text: 'Week 1 · Lumen Engineering design office' },
    {
      type: 'text',
      text: 'Awa Diallo is an electrical engineer in a small design office. This morning, the architect Jules Agbo sends her a new client: the Mensah family, who are building a 160 m² single-storey villa with three bedrooms. The plans are almost finished; the foundations will be poured in a month.',
    },
    { type: 'illustration', name: 'consultant-office', caption: 'The design office: where we design before anyone builds' },
    {
      type: 'dialogue',
      speaker: 'Koffi Mensah',
      role: 'client',
      text: 'Good morning, Ms Diallo. Honestly, I thought the site electrician took care of everything. Why do we need an engineer for a simple house?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'The electrician builds, I design. My job is to decide, before the works start, how much power to request from the utility, where the cables run, how to protect your family and how big the wires must be. If you improvise on site, you discover the problems once the walls are plastered, and every fix is expensive.',
    },

    { type: 'heading', text: 'Who does what in a project' },
    {
      type: 'text',
      text: 'Awa sketches the project parties on a sheet of paper, so the Mensahs know whom to talk to:',
    },
    {
      type: 'table',
      headers: ['Party', 'In this project', 'Role'],
      rows: [
        ['Owner (the client)', 'Koffi and Esther Mensah', 'states the need, pays, decides'],
        ['Architect', 'Jules Agbo', 'designs the building, coordinates the trades'],
        ['Electrical design office', 'Awa Diallo', 'designs the installation, produces drawings and specifications, supervises the works'],
        ['Electrical contractor', 'Moussa Keïta, site manager', 'buys the equipment and carries out the works'],
        ['Inspection body (depending on the project)', '—', 'checks compliance with the standard'],
      ],
    },
    { type: 'illustration', name: 'org-chart', caption: 'The parties of a construction project' },
    {
      type: 'note',
      text: 'On a project this size, some roles are held by the same person: Awa designs and supervises the works (design and supervision engineer); Moussa’s firm buys the equipment, details the construction drawings and builds. On the block of flats in project 2, each of these roles will be held by a different engineer.',
    },
    {
      type: 'dialogue',
      speaker: 'Esther Mensah',
      role: 'client',
      text: 'So if I want an extra socket in the kitchen, I tell you, not the electrician?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Exactly, and preferably now. I put the socket on the drawing, check that the circuit can take it, and Moussa will install it in the right place. Requests made directly on site, bypassing the drawing, are how you end up with overloaded circuits.',
    },
    { type: 'fiche', id: 'project-parties', why: 'The detailed roles of each party and each engineer.' },

    { type: 'heading', text: 'The questions that change everything' },
    {
      type: 'text',
      text: 'Before talking technology, Awa fills in a questionnaire with them. Each answer has a direct consequence on the design:',
    },
    {
      type: 'table',
      headers: ['Question', 'The Mensahs’ answer', 'Why Awa asks'],
      rows: [
        ['How many air conditioners, where?', 'living room + 3 bedrooms', 'air conditioning is often the biggest load in the house'],
        ['Gas or electric cooking?', 'gas + an electric oven', 'an electric hob would add 5 to 7 kW'],
        ['Hot water?', '100 L electric water heater', '1.5 kW more, often at the same time as the AC'],
        ['Water: mains or borehole?', 'a borehole at the bottom of the garden', 'a distant pump will have to be supplied'],
        ['Future plans?', 'solar panels “one day”', 'we reserve space in the board and a cable route'],
        ['Frequent power cuts?', 'yes, several a month', 'we plan now for connecting a backup source'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Koffi Mensah',
      role: 'client',
      text: 'Solar isn’t for now. Why talk about it today?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Because laying an empty conduit between the roof and the board today costs almost nothing. The day you want panels, we just pull the cable through it. Without that conduit, we would have to break a wall.',
    },
    {
      type: 'regional',
      text: 'With frequent load shedding, many clients later install a generator or a solar system with batteries. Planning a space in the board, a transfer switch and a “priority” circuit (lighting, fridge, one socket per room) at design stage avoids rewiring everything later.',
    },

    { type: 'heading', text: 'How the project will unfold' },
    {
      type: 'text',
      text: 'Awa then presents the steps. She insists on one point: we design in a set order, because each step needs the result of the previous one.',
    },
    { type: 'illustration', name: 'design-roadmap', props: { step: 0 }, caption: 'The design steps, from power to the final file' },
    {
      type: 'bullets',
      items: [
        'Read the architect’s plans and note the needs of each room.',
        'Do the power balance: how many kVA to request from the utility.',
        'Place the lighting and sockets, room by room.',
        'Group the points into circuits and lay out the board.',
        'Choose the protection: circuit breakers, RCDs, earthing.',
        'Size the cables and check the voltage drop.',
        'Hand over the construction drawings, then supervise the works and accept them.',
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Esther Mensah',
      role: 'client',
      text: 'And what do we get at the end?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'First, drawings to build from, with every socket and every circuit. Then, after the works, the “as-built” drawings: where the cables actually run. Keep them safe: the day you drill a wall or extend the house, that document prevents accidents.',
    },
    { type: 'fiche', id: 'design-steps', why: 'The design steps and what each one produces.' },
    { type: 'fiche', id: 'drawings-coordination', why: 'Design, construction and as-built drawings.' },

    { type: 'heading', text: 'An urgent point: earthing in the foundations' },
    {
      type: 'text',
      text: 'As she leaves, Awa calls Jules Agbo, the architect. The foundations will be poured in a month, and that is the only moment to lay the best possible earth electrode: a bare copper conductor at the bottom of the trenches, all around the house.',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Jules, can you tell the mason? Before the foundation concrete, I want a 25 mm² bare copper loop at the bottom of the trench, with a riser to where the board will be. Once the concrete is poured, we can never lay it again.',
    },
    {
      type: 'note',
      text: 'First lesson of the job: some electrical decisions are made before the first wall goes up. The foundation earth loop, buried conduits to the garden and openings in the slabs are among them.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'The engineer designs, the contractor builds: every change goes through the drawing.',
        'The initial questionnaire (AC, cooking, hot water, pump, future plans, outages) drives the whole design.',
        'We design in a fixed order: power → points → circuits → protection → cables → file.',
        'Some decisions are made before the foundations: earth electrode, conduits, openings.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'A client tells you: “We’ll decide where the air conditioners go later, once we’ve moved in.” What do you answer?',
      solution: [
        'Each air conditioner needs a dedicated circuit from the board, a route for the refrigerant lines and the condensate drain, and a place for the outdoor unit.',
        'Deciding after plastering means surface trunking or chasing finished walls, and may force a change of board or subscription.',
        'So we place them at design stage, even if the units are only bought later.',
      ],
    },
    {
      type: 'exercise',
      question: 'Put in order: size the cables, do the power balance, place the sockets, choose the circuit breakers, group into circuits.',
      solution: [
        'Power balance → place the sockets → group into circuits → choose the circuit breakers → size the cables.',
        'Each step needs the previous one: you cannot choose a cable without knowing the breaker that protects it, nor a breaker without knowing the circuit.',
      ],
    },
  ],
};
