import { TopicContent } from '../../types';

export const villaLightingContent: TopicContent = {
  title: 'Lighting and sockets, room by room',
  subtitle: 'How many lamps to see well in the living room? Where do the switches go? How many sockets per bedroom? Awa answers room by room, then groups everything into circuits.',
  blocks: [
    { type: 'scene', text: 'Week 3 · Design office, then a visit to the structural works' },
    {
      type: 'text',
      text: 'The power is set. Awa now moves to the detail: every lighting point, every switch, every socket. She starts with the living room, where the family will spend its evenings.',
    },

    { type: 'heading', text: '1 · How much light in the living room?' },
    {
      type: 'text',
      text: 'The number of lamps is not chosen at random. First you set an illuminance, measured in lux: the amount of light falling on a surface. A living room needs about 150 lux, a kitchen 200 to 300 lux on the worktop, a bedroom 100 lux.',
    },
    {
      type: 'dialogue',
      speaker: 'Esther Mensah',
      role: 'client',
      text: 'I don’t want a dark living room, but not an operating theatre either!',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'That’s exactly what the calculation avoids. I start from 150 lux, a comfortable light for reading and having guests. Not all the light reaches the floor: some goes to the walls and ceiling, and with dust the lamps fade a little over the years. I account for that with two factors.',
    },
    { type: 'formula', text: 'N = \\frac{E × A}{F × UF × MF}' },
    {
      type: 'bullets',
      items: [
        'E: required illuminance, 150 lux.',
        'A: living-room area, 6 m × 6 m = 36 m².',
        'F: flux of a 20 W LED ceiling light, 2,000 lumens.',
        'UF: utilisation factor (share of light reaching the working plane), 0.6 for a light-coloured room.',
        'MF: maintenance factor (ageing, dust), 0.8.',
      ],
    },
    { type: 'formula', text: 'N = \\frac{150 × 36}{2,000 × 0.6 × 0.8} = \\frac{5,400}{960} ≈ 5.6  →  6 ceiling lights' },
    {
      type: 'text',
      text: 'Six 20 W ceiling lights, i.e. 120 W for the whole living room: LEDs use ten times less than old filament bulbs. Awa arranges them in two rows of three to avoid dark areas.',
    },
    { type: 'illustration', name: 'villa-plan', props: { focus: 'lighting' }, caption: 'Lighting points and switches in the villa' },
    { type: 'fiche', id: 'lighting', why: 'Illuminance levels, the lumen method, choosing luminaires.' },

    { type: 'heading', text: '2 · The switches' },
    {
      type: 'table',
      headers: ['Room', 'Control', 'Why'],
      rows: [
        ['Living room', 'two-way (2 switches)', 'you enter from the front door or the corridor: switch on at one end, off at the other'],
        ['Corridor', 'two-way at both ends', 'never cross a room in the dark'],
        ['Bedrooms', 'one-way at the door', 'a single entrance'],
        ['Bathroom', 'switch outside the room, or far from the shower', 'no control within reach of a wet hand'],
        ['Outdoors', 'switch + photocell', 'the lamps come on by themselves at dusk'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Koffi Mensah',
      role: 'client',
      text: 'A photocell for the outside lights is a gadget, isn’t it?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'It’s mainly about security: the yard is lit even when you’re away. And it’s six 15 W lamps: on 11 hours a night, they use about 1 kWh per night. That’s reasonable.',
    },

    { type: 'heading', text: '3 · The sockets' },
    {
      type: 'text',
      text: 'Awa places the sockets following the furniture on the plan: on each side of the beds, behind the TV unit, above the kitchen worktop (never above the sink or the hob), one in the bathroom, away from the shower.',
    },
    { type: 'illustration', name: 'villa-plan', props: { focus: 'sockets' }, caption: '14 socket locations, most of them double sockets' },
    {
      type: 'table',
      headers: ['Room', 'Locations', 'Remark'],
      rows: [
        ['Living room', '4', 'including a double behind the TV unit and one near the sofa'],
        ['Kitchen', '3 doubles', 'above the worktop, at worktop height'],
        ['Bathroom', '1', 'outside the shower zone, for the hair dryer'],
        ['Bedrooms', '2 doubles each', 'either side of the bed'],
      ],
    },
    {
      type: 'note',
      text: 'The oven, washing machine, water heater, each air conditioner and the pump don’t use an “ordinary socket”: each has its own circuit from the board. These are called dedicated circuits. These appliances draw a high current for a long time; sharing them with other sockets would overheat the cables and trip the breakers.',
    },

    { type: 'heading', text: '4 · Grouping the points into circuits' },
    {
      type: 'text',
      text: 'A circuit is a cable leaving the board, protected by its own breaker, serving several points. The number of points per circuit is limited so the current stays reasonable and a fault doesn’t plunge the whole house into darkness.',
    },
    {
      type: 'table',
      headers: ['Circuit', 'Points served', 'Limit respected'],
      rows: [
        ['Living-room lighting', '6 ceiling lights', '≤ 8 points'],
        ['Rooms lighting', 'kitchen 2, corridor 2, bathroom 1, bedrooms 3', '8 points'],
        ['Outdoor lighting', '6 lamps', '≤ 8 points'],
        ['Living room + bathroom sockets', '5 locations', '≤ 8 locations'],
        ['Bedroom sockets', '6 locations', '≤ 8 locations'],
        ['Kitchen sockets', '3 double locations', 'circuit reserved for the worktop'],
        ['Dedicated', 'oven, washing machine, water heater, 4 ACs, pump', 'one circuit per appliance'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'You’ll notice the bedrooms and the living room are on different circuits. If a faulty appliance trips the living room during an evening, the sleeping children keep their light and their AC.',
    },
    { type: 'fiche', id: 'lighting-circuits-sockets', why: 'Types of switches, socket layout, rules for grouping circuits.' },
    {
      type: 'regional',
      text: 'NF C 15-100, used in most French-speaking countries, sets precise rules for dwellings: at most 8 lighting points per lighting circuit (1.5 mm² cable), socket circuits in 2.5 mm² protected at 20 A, and minimum numbers of sockets per room (for example 3 per bedroom and 6 in the kitchen, 4 of them above the worktop). Check the edition in force and what the local inspection body requires.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'Start from an illuminance (lux) and calculate the number of luminaires: N = E × A / (F × UF × MF).',
        'Switches on the handle side; two-way control as soon as a room has two entrances.',
        'Sockets follow the furniture; large appliances each get a dedicated circuit.',
        'Limit the points per circuit and separate the rooms so a fault stays local.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'The kitchen is 4 m × 3 m. With 150 lux of general lighting and the same ceiling lights (2,000 lm, UF 0.6, MF 0.8), how many are needed?',
      solution: [
        'N = (150 × 12) / (2,000 × 0.6 × 0.8) = 1,800 / 960 ≈ 1.9 → 2 ceiling lights.',
        'To reach 200 to 300 lux on the worktop, add an LED strip under the wall cupboards, plugged into the kitchen socket circuit.',
      ],
    },
    {
      type: 'exercise',
      question: 'Esther would like to plug the freezer into the same circuit as the washing machine. What do you think?',
      solution: [
        'The washing machine has a dedicated circuit: it must supply nothing else.',
        'Moreover, if the washing machine causes a trip (water leak, faulty element), the freezer would stop without anyone noticing, and the food would be lost.',
        'The freezer stays on the kitchen socket circuit.',
      ],
    },
  ],
};
