import { TopicContent } from '../../types';

export const villaPlansContent: TopicContent = {
  title: 'Reading the architect’s plans',
  subtitle: 'An architect’s plan already holds half of the electrician’s answers: areas, room uses, furniture, door swings, wet areas.',
  blocks: [
    { type: 'scene', text: 'Week 1 · Design office' },
    {
      type: 'text',
      text: 'Jules Agbo has sent the villa plans as PDF and DWG files. Awa prints them large and spreads them on her table. Before drawing a single socket, she “reads” the building the way its future occupants will live in it.',
    },
    { type: 'illustration', name: 'villa-plan', props: { focus: 'rooms' }, caption: 'The Mensah villa plan: 160 m², three bedrooms, a borehole at the bottom of the garden' },

    { type: 'heading', text: 'What Awa looks for on the plan' },
    {
      type: 'table',
      headers: ['Information on the plan', 'What she deduces'],
      rows: [
        ['Scale (1:50, 1:100) and dimensions', 'cable lengths, areas for lighting'],
        ['Name and use of each room', 'the lighting level and number of sockets'],
        ['Furniture drawn (beds, sofa, worktop)', 'where to put sockets and switches so they stay accessible'],
        ['Door swings', 'the switch goes on the handle side, not behind the door'],
        ['Bathroom, kitchen', 'wet areas: waterproof fittings, distances to respect'],
        ['Ceiling height, false ceilings', 'type of luminaires, conduit routes'],
        ['Facades and roof', 'AC outdoor units, future solar panels'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Esther Mensah',
      role: 'client',
      text: 'You even look at where the bed will be? Is that really useful?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Very useful. A socket behind the headboard would be hidden and out of reach. Instead I put a socket on each side of the bed, for bedside lamps and phones, and the switch next to the door, on the side where your hand naturally goes as you walk in.',
    },
    { type: 'fiche', id: 'architectural-drawings', why: 'Types of plans, symbols and what to read on them.' },

    { type: 'heading', text: 'The symbols that matter to the electrician' },
    {
      type: 'text',
      text: 'An architect’s plan uses a legend: stairs, service shafts, doors and windows. Awa mainly looks for the service shaft (the vertical route for networks) and the planned location of the board, at the entrance near the door: that is where power must be cut quickly if something goes wrong.',
    },
    { type: 'illustration', name: 'plan-symbols', props: { variant: 'doors' }, caption: 'Doors and swings: the switch goes on the handle side' },
    {
      type: 'note',
      text: 'The distribution board must be easy to reach, outside wet areas and not in a locked cupboard. At the entrance, anyone can find it in an emergency.',
    },

    { type: 'heading', text: 'Coordinating with the other trades' },
    {
      type: 'text',
      text: 'Awa is not alone on the plan. The plumber places the water heater, the AC installer places the outdoor units, the mason plans the conduits. She holds a coordination meeting with Jules Agbo to overlay everything.',
    },
    { type: 'illustration', name: 'coordination', props: { variant: 'mechanical' }, caption: 'Coordination: each trade overlays its networks on the architect’s plan' },
    {
      type: 'table',
      headers: ['Coordination point', 'Decision taken in the meeting'],
      rows: [
        ['Water heater', 'in the laundry, next to the bathroom: dedicated outlet at 1.8 m, close to the tank'],
        ['AC outdoor units', 'on the rear facade, in the shade; cables and refrigerant lines in a shared trunking'],
        ['Borehole and pump', '80 m buried conduit between the house and the borehole, laid before paving'],
        ['Future solar', 'empty conduit between the roof and the board'],
        ['Gate and outdoor lighting', 'conduits along the fence'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Jules Agbo (architect)',
      role: 'team',
      text: 'Awa, the client would like a false ceiling in the living room. Does that change anything for you?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Yes, for the better: I can run cables in it and fit recessed ceiling lights. But I need an access hatch near the junction boxes, otherwise we’ll never reach them again.',
    },
    { type: 'fiche', id: 'drawings-coordination', why: 'Coordination between architect, structure and building services.' },

    {
      type: 'regional',
      text: 'Houses are often built of rendered cement blocks: cables run in conduits embedded in chases cut before plastering. Architects’ plans often show no furniture; Awa then asks the client for a sketch of the layout, even a rough one.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'The architect’s plan gives areas, uses, furniture, doors and wet areas: everything needed to place sockets and lights.',
        'The board goes at the entrance, accessible, outside wet areas.',
        'A coordination meeting prevents clashes: water heater, AC, pump, solar, false ceilings.',
        'Buried conduits and openings are decided on the drawing, before the structural works.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'On a plan, a bedroom door opens inwards, handle on the right as you enter. Where do you put the switch?',
      solution: [
        'On the right of the door, handle side, about 1.10 m above the floor and some fifteen centimetres from the frame.',
        'On the hinge side, it would be hidden behind the open door.',
      ],
    },
    {
      type: 'exercise',
      question: 'Why decide on the conduit to the borehole before the yard is paved?',
      solution: [
        'The pump cable must be buried in a conduit (about 60 to 80 cm deep, with a warning mesh above it).',
        'Once the yard is paved, it would have to be broken up: the conduit is laid during earthworks, even if the cable is pulled later.',
      ],
    },
  ],
};
