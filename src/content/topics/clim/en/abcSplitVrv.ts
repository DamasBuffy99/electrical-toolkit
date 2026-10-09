import { TopicContent } from '../../../types';

export const abcSplitVrvContent: TopicContent = {
  title: 'Split, multi-split and VRF in practice',
  subtitle: 'What you need to know to install a split, choose a multi-split and understand a variable refrigerant flow system',
  blocks: [
    {
      type: 'text',
      text: '“Direct-expansion” systems with separate units dominate the air conditioning of offices, hotels and homes: from the simple wall split to the VRF system feeding dozens of indoor units from a single outdoor unit. This lesson gives the installation rules and technical features of each.',
    },
    { type: 'illustration', name: 'clim-systems', props: { highlight: 'medium' }, caption: 'Splits, multi-splits and VRF cover roughly 2.5 to 90 kW' },

    { type: 'heading', text: 'The split system' },
    {
      type: 'bullets',
      items: [
        'An indoor unit (wall, console, ceiling, cassette, ducted) and an outdoor unit, linked by two insulated copper tubes and an interconnecting cable with 3 or 4 conductors (fan and board supply, communication).',
        'Indoor unit perfectly level, blowing preferably along the length of the room.',
        'Outdoor unit on rubber mounts (balcony, wall bracket, roof with suitable support), with access and enough clearance for maintenance, nothing blocking the air discharge.',
        'Refrigerant line usually limited to 20 to 30 m; tightness thoroughly tested.',
        'Power supply: preferably a dedicated circuit with its own breaker, cable of suitable size.',
        'Condensate: rigid or flexible PVC tube with a slight fall to the outside or a drain (condensate pump if the fall is lacking).',
        'Installing a complete split: one working day on average.',
      ],
    },
    { type: 'illustration', name: 'clim-airflow', caption: 'Indoor unit high on the wall, horizontal throw along the room' },

    { type: 'heading', text: 'The multi-split' },
    {
      type: 'bullets',
      items: [
        'One inverter outdoor unit feeds 2 to 5 independent indoor units, which must all run in the SAME mode (cooling or heating).',
        'Advantages: a single unit on the facade, quick installation, lower consumption and even temperature thanks to the inverter, mixable unit types and capacities.',
        'Example of combinations for 7,000 W: 2,128 + 4,472 W, or 1,917 + 1,917 + 3,166 W, or 4 × 1,825 W.',
        '“Mini-VRF” systems (4 to 17 kW, 4 to 9 rooms) bridge the gap between multi-split and VRF.',
      ],
    },

    { type: 'heading', text: 'Variable refrigerant flow systems (VRV, VRF)' },
    {
      type: 'text',
      text: 'An outdoor unit with variable-speed compressor(s) feeds, through small-diameter refrigerant pipes, a large number of indoor units of different types and capacities. The refrigerant flow follows the real demand. Names vary by brand: VRV, VRF, DRV, DVM.',
    },
    {
      type: 'table',
      headers: ['Feature (depending on manufacturer)', 'Order of magnitude'],
      rows: [
        ['Cooling capacity', '5 to 90 kW per unit (modular)'],
        ['Indoor units', 'up to 64 on one circuit'],
        ['Total pipe length', 'up to 1,000 m'],
        ['Indoor/outdoor height difference', 'up to 90 m'],
        ['Operation', 'down to −15 °C outdoors'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'Compressors: a single inverter at small capacities; at large capacities, an inverter + one or two fixed compressors, or two inverters, or a digital scroll (steps from 7 to 100 %).',
        'Each indoor unit has its electronic expansion valve and its board; control (PID) relies on pressure transducers and sensors.',
        'Oil return: at low speed oil returns poorly; the electronics run an oil-recovery cycle roughly every 8 hours.',
        '2-pipe VRF: the whole system in cooling OR heating. 3-pipe “heat recovery” VRF: each unit chooses its mode through branch selector boxes (solenoid valves); heat removed from one room warms another.',
        'Also available as water-cooled (water loop, aquifer), and as replacements for old R22 systems reusing the pipework.',
      ],
    },
    {
      type: 'note',
      text: 'Installing a VRF: brazing under nitrogen purge is compulsory (scale would clog the electronic expansion valves), nitrogen pressure test around 30 to 35 bar for several days, deep evacuation, additional charge calculated from the actual pipe lengths.',
    },
    { type: 'illustration', name: 'tech-install', caption: 'The order of the steps, from cut tube to start-up' },
    {
      type: 'note',
      text: 'The IEPF guide notes that in Africa VRV/VRF systems cost about 50 % more to install than a chilled-water plant, but are taking over office buildings and large banks for their flexibility.',
    },

    { type: 'heading', text: 'The condensate pump' },
    {
      type: 'bullets',
      items: [
        'When there is not enough fall or no drain nearby, a pump lifts the condensate.',
        'Two-part pump (float detection block + pump) for splits: 8 to 15 l/h, lift up to 6 m.',
        'Tank-type pump: up to 500 l/h and 20 m lift.',
        'Peristaltic pump: ideal for dirty water, acts as a non-return valve.',
        'Always wire the safety contact (stops the unit on overflow) and clean the suction filters regularly, or expect water leaks.',
      ],
    },

    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'A flat has a 4 kW living room and two 1.8 kW bedrooms. Suggest a solution.',
      solution: ['Total ≈ 7.6 kW: a 3-room multi-split on a single inverter outdoor unit of ≈ 7–8 kW (allowing for diversity: living room and bedrooms are not at full load at the same time).', 'Alternative: three independent splits (more units on the facade, but a breakdown only stops one room).'],
    },
    {
      type: 'exercise',
      question: 'A hotel wants to heat some rooms in the morning while others, in the sun, are being cooled. What type of VRF is needed?',
      solution: ['A 3-pipe “heat recovery” VRF: each unit chooses its mode through branch selector boxes, and heat extracted from cooled rooms serves the heated rooms.', 'A 2-pipe VRF would force the same mode on the whole system.'],
    },
  ],
};
