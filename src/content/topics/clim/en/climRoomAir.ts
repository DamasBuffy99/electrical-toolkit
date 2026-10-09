import { TopicContent } from '../../../types';
import { fig } from '../fig';

export const climRoomAirContent: TopicContent = {
  title: 'Distributing the air well in the room',
  subtitle: 'Occupied zone, air speeds, supply and return positions, condensate',
  blocks: [
    {
      type: 'text',
      text: 'A well-sized but badly placed air conditioner makes occupants unhappy: cold draught on the neck, hot corners, noise. Where the indoor unit goes and how the air circulates matter as much as capacity.',
    },
    { type: 'illustration', name: 'clim-airflow', props: { variant: 'good' }, caption: 'The right layout: horizontal throw along the ceiling' },

    { type: 'heading', text: 'The occupied zone' },
    {
      type: 'text',
      text: 'Comfort is not needed everywhere: only where people stay. EUROVENT recommendations define the occupied zone of an office: up to 1.80 m high and 0.50 m from the walls. The air jet must develop OUTSIDE this zone and never reach the occupants before it has mixed with the room air.',
    },
    fig('p089_0', 'Figure 4.8 — occupied zone in an office (EUROVENT)'),

    { type: 'heading', text: 'Maximum air speed' },
    {
      type: 'text',
      text: 'Moving cold air quickly feels like a draught, especially on the neck and feet. In the occupied zone, the mean air speed is limited to:',
    },
    {
      type: 'table',
      headers: ['Rooms (table 4.1)', 'Max speed'],
      rows: [
        ['Accommodation, hospitals, schools, meeting rooms, theatres, offices', '0.12 m/s'],
        ['Shops, workshops', '0.17 m/s'],
        ['Sports halls, department stores, industrial premises', '0.25 m/s'],
      ],
    },
    fig('p088_0', 'Table 4.1 — maximum air movement speed'),

    { type: 'heading', text: 'Where to blow?' },
    {
      type: 'text',
      text: 'In cooling, the best position is a horizontal throw just below the ceiling: the cold, heavier air runs along the ceiling, mixes, then falls gently over the whole room. This avoids stratification (hot air at the top, cold at the bottom) and draughts.',
    },
    fig('p089_1', 'Figures 4.9 and 4.10 — horizontal ceiling throw and grille supply'),
    {
      type: 'bullets',
      items: [
        'Partitions and tall furniture must not block the air circulation in the room.',
        'If the ceiling is too low, it becomes hard to avoid blowing into the occupied zone.',
        'Avoid curtains and shelves in front of the unit: they deflect the jet.',
      ],
    },
    fig('p090_0', 'Figure 4.11 — even air distribution'),
    { type: 'illustration', name: 'clim-airflow', props: { variant: 'bad' }, caption: 'To avoid: the cold jet falling on the occupants' },

    { type: 'heading', text: 'Watch the fan speed' },
    {
      type: 'text',
      text: 'Air conditioners usually have 3 fan speeds. If the unit is chosen at its maximum speed, it will often run at reduced speed… and the weaker jet will drop onto the occupants too early. So the capacity is chosen at MEDIUM speed (or even the lowest): check in the catalogue at which speed the stated capacity is rated.',
    },
    fig('p090_1', 'Figure 4.12 — at low speed, the jet drops into the occupied zone'),

    { type: 'heading', text: 'Vertical supply and under-window units' },
    {
      type: 'text',
      text: 'A console under the window blowing upwards is ideal for heating, but in cooling nobody should sit right next to it. Units blowing horizontally at mid-height (window units, portable units) cause the most discomfort.',
    },
    fig('p091_0', 'Figure 4.13 — air distribution with vertical supply'),
    fig('p091_1', 'Figure 4.14 — discomfort caused by a window unit’s jet'),

    { type: 'heading', text: 'Where to take the air back? (ducted systems)' },
    {
      type: 'text',
      text: 'Supply and return behave very differently. At the same speed of 3 m/s, a supply grille throws a jet 7 m long, while a return grille only draws effectively over 0.3 m: the extracted air comes from all around.',
    },
    fig('p093_0', 'Figure 4.15 — jet reach in supply (7 m) and in suction (0.3 m)'),
    {
      type: 'table',
      headers: ['Return position (table 4.2)', 'Recommended speed'],
      rows: [
        ['Above the occupied zone', '4.5 m/s'],
        ['In the occupied zone, away from seats', '3.5 to 4.5 m/s'],
        ['In the occupied zone, near seats', '2.5 to 3.5 m/s'],
        ['Door grilles', '1.5 to 2 m/s'],
        ['Under doors', '1 to 1.5 m/s'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'Short-circuit: if the return is too close to the supply, cold air is sucked back before it has cooled the room. Place it beyond the reach of the jet.',
        'Exception: ceiling diffusers that blow through outer cones and extract in the centre mix the air very well.',
        'Floor return: always discouraged, it quickly becomes a dust collector.',
        'With a false ceiling, air can be returned through the light fittings: lamp heat leaves directly and lamps last longer.',
      ],
    },
    fig('p094_0', 'Figure 4.16 — poor efficiency: the return sucks the jet before it acts'),
    fig('p094_1', 'Figure 4.17 — good efficiency of ceiling diffusers'),
    fig('p095_1', 'Figure 4.19 — wall grilles: supply and return grouped high on the wall'),

    { type: 'heading', text: 'Layouts, from most to least comfortable' },
    fig('p096', 'Guide page 81 — supply and return layouts: advantages and drawbacks'),
    fig('p097', 'Page 82 — layouts to avoid (floor-standing, column units)'),

    { type: 'heading', text: 'Draining the condensate' },
    {
      type: 'text',
      text: 'The water removed from the air on the evaporator (almost 4 litres per hour for the Douala office!) must be drained, by gravity or with a lift pump (cassette in a false ceiling). This is often overlooked:',
    },
    {
      type: 'bullets',
      items: [
        'An under-window unit has less available slope than a ceiling unit; perpendicular beams complicate the route.',
        'Connection to a shared drain goes through a trap, against odours.',
        'Rigid PVC pipe, connected to the evaporator with a reinforced hose; insulate the pipe in a false ceiling so it does not drip.',
        'Check that the drainage is planned AND included in the installer’s quote.',
      ],
    },
    { type: 'note', text: 'Think about access too: a hard-to-reach evaporator will be expensive to maintain and service.' },
    { type: 'heading', text: "Exercises" },
    {
      type: 'exercise',
      question: "A 6 × 4 m office with a 3 m ceiling gets a wall split. Where should it go, what air speed should be targeted, and at which fan speed should the unit be selected?",
      solution: [
        "High on the short (4 m) wall, blowing horizontally under the ceiling along the 6 m length, outside the occupied zone.",
        "Speed in the occupied zone: 0.12 m/s maximum (offices, table 4.1).",
        "Select the capacity at MEDIUM fan speed, so the jet does not drop onto occupants at reduced speed.",
      ],
    },
    {
      type: 'exercise',
      question: "A return grille must extract 900 m³/h in the occupied zone, near seats. What area is needed?",
      solution: [
        "Recommended speed near seats: 2.5 to 3.5 m/s → take 3 m/s.",
        "Flow: 900 / 3,600 = 0.25 m³/s.",
        "Area: S = 0.25 / 3 = 0.083 m², e.g. a 30 × 28 cm grille (free area).",
      ],
    },
  ],
};
