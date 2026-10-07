import { TopicContent } from '../../types';
import { SLIDES } from '../../slides';

export const panelBasicsContent: TopicContent = {
  title: 'Panel boards: construction and single-line diagram',
  subtitle: 'What a panel contains, how to draw it, and the construction rules',
  blocks: [
    {
      type: 'text',
      text: 'Circuits, protection and cables are sized: what remains is housing them in panels suited to their location, then drawing them on the single-line diagram (SLD).',
    },

    { type: 'heading', text: '1 · What a panel contains' },
    {
      type: 'table',
      headers: ['Component', 'Role'],
      rows: [
        ['Main circuit breaker', 'Protects the panel against short circuit and overload (MCB, MCCB or ACB)'],
        ['Busbars R, S, T, N, E', 'Distribute power from the incomer to the outgoing circuits'],
        ['Outgoing breakers or fuses', 'Protect each outgoing cable and its load'],
        ['Meters and indicator lamps', 'Voltage, current, kW, kVA, pf, kvar · circuit state (on, off, test)'],
        ['Current (CT) and voltage (VT) transformers', 'Step current and voltage down for metering'],
        ['Insulators', 'Support and insulate live parts'],
      ],
    },
    { type: 'image', source: SLIDES['panel-3'], caption: 'Panel board construction' },

    { type: 'heading', text: '2 · Busbars and outgoing circuits' },
    {
      type: 'bullets',
      items: [
        'Copper busbars, mounted on insulators suited to the voltage.',
        'Coated with insulation (PVC) against moisture and harmful gases.',
        'Selected by rated current, short-circuit current and panel size.',
        'Single-pole outgoing devices for single-phase circuits (lighting, sockets); double- or triple-pole for two- and three-phase.',
      ],
    },
    { type: 'image', source: SLIDES['panel-5'], caption: 'Busbars' },
    { type: 'image', source: SLIDES['panel-6'], caption: 'Outgoing breakers' },

    { type: 'heading', text: '3 · Metering: CTs and meters' },
    {
      type: 'text',
      text: "The CT (current transformer) measures current: the conductor passing through the core acts as the primary, the CT coil supplies a reduced current to the meters. Indicator lamps, fed from the incomer, show the circuits' state.",
    },
    { type: 'image', source: SLIDES['panel-7'], caption: 'Meters and indicator lamps' },
    { type: 'image', source: SLIDES['panel-8'], caption: 'Current transformer' },

    { type: 'heading', text: '4 · Construction rules' },
    {
      type: 'table',
      headers: ['Panel', 'IP rating'],
      rows: [
        ['Outdoor panel', 'IP65'],
        ['Main Distribution Board (MDB)', 'IP54'],
        ['Sub Distribution Board (SDB)', 'IP44'],
      ],
    },
    {
      type: 'bullets',
      items: ['Sheet thickness: at least 2 mm.', 'Earthing of the panel is mandatory.', 'Surface mounted (on the wall) or recessed (in the wall).'],
    },
    {
      type: 'note',
      text: '💡 The 1st IP digit is protection against solids (dust), the 2nd against water. The higher the digits, the better protected the panel — hence IP65 outdoors.',
    },
    { type: 'image', source: SLIDES['panel-9'], caption: 'IP, thickness and earthing' },
    { type: 'image', source: SLIDES['cond-187'], caption: 'Surface or recessed mounting' },

    { type: 'heading', text: '5 · The single-line diagram (SLD)' },
    {
      type: 'text',
      text: 'The SLD shows each circuit as a single line: incomer (cable, main breaker), busbar (voltage, frequency, breaking capacity), then each outgoing circuit with its breaker, cable and load.',
    },
    {
      type: 'bullets',
      items: [
        'Example 1: panel for 3 × 30 HP and 2 × 20 HP motors — incomer 3×150 + 70 + 70 mm², 250 A MCCB, 25 kA; outgoing 40 A and 63 A MCCBs.',
        'Example 2: 2 lighting, 2 normal socket, 2 power socket circuits — incomer 4×10 + 10 mm², 25 A MCCB; outgoing 16 A and 20 A MCBs.',
      ],
    },
    { type: 'image', source: SLIDES['panel-10'], caption: 'Example 1: motor panel wiring' },
    { type: 'image', source: SLIDES['panel-11'], caption: 'Example 1: single-line diagram' },
    { type: 'image', source: SLIDES['panel-12'], caption: 'Example 2: lighting and socket wiring' },
    { type: 'image', source: SLIDES['panel-13'], caption: 'Example 2: single-line diagram' },

    { type: 'heading', text: '6 · Types of panels' },
    {
      type: 'text',
      text: 'In a building, the main low-voltage distribution board (MLVDB) receives the transformer and the generator through a transfer switch (ATS); it feeds the sub-distribution boards, the UPS panel and the motor panels.',
    },
    {
      type: 'bullets',
      items: [
        'Single-phase panel: meter, 2P breaker, 2P RCCB, then 1P MCBs on the phase busbar.',
        'Three-phase panel (TPN): main MCCB, L1-L2-L3 busbars, neutral and earth; e.g. 250 A — 12 ways.',
      ],
    },
    { type: 'image', source: SLIDES['panel-14'], caption: 'Panel architecture in a building' },
    { type: 'image', source: SLIDES['cond-182'], caption: 'Single-phase panel' },
    { type: 'image', source: SLIDES['cond-183'], caption: 'Three-phase panel' },
    { type: 'image', source: SLIDES['cond-186'], caption: '250 A TPN board' },
    { type: 'image', source: SLIDES['panel-15'], caption: 'Panel examples' },
  ],
};
