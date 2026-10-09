import { TopicContent } from '../../../types';
import { fig } from '../fig';

export const climSystemChoiceContent: TopicContent = {
  title: 'Which system for which building?',
  subtitle: 'Power, noise, climate, individual or central: the selection grid',
  blocks: [
    {
      type: 'text',
      text: 'The heat balance gives a capacity. We still have to choose the family of equipment: one unit per room, a packaged unit for a large hall, or a central plant for the whole building. Four criteria guide the choice: power, noise, climate and type of building.',
    },
    { type: 'illustration', name: 'clim-systems', caption: 'Three families by cooling capacity' },

    { type: 'heading', text: '1 · Power level' },
    { type: 'subheading', text: 'Direct-expansion room units' },
    {
      type: 'text',
      text: 'The “window” unit (packaged unit set in a wall or window) and the “split” (indoor unit + outdoor unit linked by refrigerant pipes) cover small rooms: 0.75 to 2.2 kW of electricity, about 1.8 to 7 kW of cooling, 300 to 1,000 m³/h of supply air. COP above 2.3 for a window unit, above 2.6 for a split.',
    },
    { type: 'illustration', name: 'clim-systems', props: { highlight: 'small' }, caption: 'Window and wall split: small rooms' },
    { type: 'subheading', text: 'The packaged (cabinet) unit' },
    {
      type: 'text',
      text: 'A packaged unit is a large floor-standing unit of 4 to 140 kW, blowing 1,000 to 20,000 m³/h. It can be single-piece or split, direct expansion or chilled water, and can control humidity (server rooms, operating theatres). COP > 2.5 with an air-cooled condenser, > 3.5 with a water-cooled one.',
    },
    { type: 'illustration', name: 'clim-systems', props: { highlight: 'medium' }, caption: 'Splits and packaged units: 2.5 to 75 kW' },
    { type: 'subheading', text: 'Central plants' },
    {
      type: 'bullets',
      items: [
        'Rooftop (single-zone roof unit): 7 to 120 kW, 1,500 to 20,000 m³/h, installed on the roof.',
        'Multizone plant: 35 to 460 kW, up to 100,000 m³/h, serving 6 to 20 zones.',
        'Chilled-water plant: a chiller produces cold water distributed to terminals (fan coils, AHUs) — see section 5.',
      ],
    },
    { type: 'illustration', name: 'clim-systems', props: { highlight: 'large' }, caption: 'Beyond 75 kW: central plants' },
    {
      type: 'table',
      headers: ['Cooling capacity', 'Recommended equipment'],
      rows: [
        ['≤ 2.5 kW', 'Window or split'],
        ['2.5 to 75 kW', 'Split system or packaged unit'],
        ['> 75 kW', 'Packaged unit or central plant'],
      ],
    },
    {
      type: 'note',
      text: 'The guide insists: if no capacity on the market matches, prefer the unit just below rather than above, and never exceed a 5 % safety factor.',
    },
    fig('p071', 'Guide page 56 — recommendations by power and choosing a central system'),

    { type: 'heading', text: '2 · Individual or central?' },
    {
      type: 'table',
      headers: ['', 'Room units', 'Central plant'],
      rows: [
        ['Investment', 'Low', 'High'],
        ['Installation and maintenance', 'Simple, local technicians', 'Skilled labour'],
        ['Noise, draughts', 'Often annoying', 'Controlled (equipment away from rooms)'],
        ['Air quality (fresh air, filtration, humidity)', 'Poorly controlled', 'Controlled'],
        ['Facade', 'Spoiled (units everywhere)', 'Preserved'],
        ['Energy efficiency', 'Average', 'Better if well designed'],
      ],
    },
    {
      type: 'text',
      text: 'In Africa, room units are chosen most of the time for their low cost and simplicity. A central system is recommended when:',
    },
    {
      type: 'bullets',
      items: [
        'the load is large and must respect the building’s architecture;',
        'better comfort is wanted: temperature, humidity, noise, air quality;',
        'better energy efficiency and lower long-term operating costs are targeted;',
        'the application is technical (hospital, industry) or needs fine control.',
      ],
    },
    {
      type: 'text',
      text: 'Ducted treatment (one unit for several rooms) is preferred if the rooms have similar needs, if their loads are too small for the units on the market, if a false ceiling allows ducts (≥ 400 mm) or if noise must be very low. Independent units are preferred if rooms have different schedules or orientations.',
    },
    {
      type: 'note',
      text: 'For residential and small commercial buildings, the guide recommends a “comfort-zone” system: variable air volume over 8 to 12 zones, each controlled by its own sensor. Limit: 500 m² per system.',
    },

    { type: 'heading', text: '3 · Noise' },
    {
      type: 'text',
      text: 'An air conditioner has moving parts (compressor, fans) that make noise. You need the existing level, the level the equipment will add, and the limit not to exceed for the activity. Dr Wisner’s curve classifies environments into 4 zones, from zone IV (intellectual work not disturbed) to zone I (risk of deafness).',
    },
    fig('p073_0', 'Figure 3.1 — Dr Wisner’s curve: the 4 disturbance zones by frequency'),
    {
      type: 'table',
      headers: ['Room (table 3.1)', 'Max dB(A): high-end / medium / minimum'],
      rows: [
        ['Hotel room (night)', '25 / 30 / 35'],
        ['Small office, meeting room', '30 / 35 / 40'],
        ['Open-plan office', '35 / 40 / 45'],
        ['Classroom', '30 / 35 / 40'],
        ['Cafeteria', '35 / 40 / 50'],
      ],
    },
    fig('p074_0', 'Table 3.1 — recommended noise level by type of room'),
    {
      type: 'text',
      text: 'Air conditioners sit between 30 and 50 dB at 125 Hz. The window unit is the noisiest: compressor and condenser are in the room. The split, which puts the compressor outside, is much quieter.',
    },
    fig('p087_1', 'Figure 4.7 — indoor and outdoor noise levels: splits vs window units'),

    { type: 'heading', text: '4 · Climate' },
    {
      type: 'text',
      text: 'The climate acts mainly through the balance. But in a dry climate air can be cooled by humidifying it (evaporative cooler, adiabatic cooling), whereas in a humid climate there is no choice: a refrigeration machine must cool AND dehumidify.',
    },
    { type: 'illustration', name: 'clim-comfort', caption: 'Humid: dehumidify; dry: evaporative cooling is possible' },

    { type: 'heading', text: '5 · What is actually found in Africa' },
    {
      type: 'bullets',
      items: [
        'Commercial buildings and medium-size banks: splits in offices, packaged units or rooftops in large halls (counters, showrooms).',
        'Many hotels and office buildings: window units or splits everywhere — a poor solution aesthetically and energetically.',
        'Large hotels in major cities: chilled-water plants with fan coils, by far the most used.',
        'Office buildings and large banks: variable refrigerant flow (VRV/VRF) systems, about 50 % more expensive than chilled water to install, but booming.',
        'Small supermarkets: several water-cooled packaged units on a shared cooling tower.',
      ],
    },
    fig('p130_0', 'Table 5.3 — usual applications of the different systems'),
    fig('p128_0', 'Table 5.1 — uses and applications of the different types of installation'),
    {
      type: 'note',
      text: 'No system fits every case: each project deserves a study weighing construction constraints, service to users, investment AND operating budgets, comfort and energy efficiency.',
    },
  ],
};
