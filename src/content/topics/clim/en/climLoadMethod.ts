import { TopicContent } from '../../../types';
import { fig } from '../fig';

export const climLoadMethodContent: TopicContent = {
  title: 'The step-by-step method and the calculation sheet',
  subtitle: 'Brief, peak hour, calculation sheet and electrical power to subscribe',
  blocks: [
    {
      type: 'text',
      text: 'An exact hour-by-hour calculation, including wall inertia, is long and reserved for large projects (design offices, software). For an ordinary room, the guide offers a simplified and reliable method in 5 steps:',
    },
    {
      type: 'bullets',
      items: [
        '1 → Gather the data (the brief)',
        '2 → Set the outdoor and indoor design conditions',
        '3 → Find the hour of maximum load',
        '4 → Calculate the gains on the calculation sheet',
        '5 → Choose the unit and the electrical power to subscribe',
      ],
    },
    { type: 'illustration', name: 'clim-heat-gains', caption: 'What you need to know about the room before calculating' },

    { type: 'heading', text: '1 · The brief: what to survey' },
    {
      type: 'text',
      text: 'Before any calculation, the technician must know every factor that affects the room’s heat. Accurate surveys avoid big “just in case” margins — the main cause of oversizing.',
    },
    {
      type: 'bullets',
      items: [
        'Orientation of the room (cardinal points, latitude), neighbouring buildings casting shade, reflecting surfaces (water, sand, parking).',
        'Architect’s drawings and dimensions: length, width, ceiling height.',
        'Materials of walls, roof, ceiling, floor and partitions, with thickness and colour.',
        'What is around: conditioned rooms or not, attic, kitchen, crawl space.',
        'Windows and doors: sizes, type of glazing and frame, solar protection.',
        'Occupants: number, activity, schedules; lighting: type and power; appliances: power and running time.',
        'Use of the room (office, hospital, shop…), indoor conditions to maintain, possible equipment locations.',
      ],
    },

    { type: 'heading', text: '2 · Design conditions' },
    {
      type: 'text',
      text: 'From the guide’s tables, pick the outdoor conditions of the city’s design month (table 1.3) and the indoor comfort conditions (tables 1.4 and 1.5). They give the two differences used in every formula:',
    },
    { type: 'formula', text: 'Δθ = θe − θi  (°C)     and     Δω = ωe − ωi  (g or kg of water / kg of dry air)' },
    fig('p020_0', 'Table 1.3 — outdoor design conditions by city'),

    { type: 'heading', text: '3 · At what hour should we calculate?' },
    {
      type: 'text',
      text: 'The sun moves: an East wall peaks in the morning, a West wall in the afternoon, a South wall around noon. The balance must be done at the hour when the sum of the gains is highest — the hour of maximum cooling load.',
    },
    {
      type: 'bullets',
      items: [
        'Step 1: identify the room’s orientation type among the 31 cases of figure 1.1 (which walls face outside).',
        'Step 2: table 1.8, combined with table 1.14 (hourly radiation), gives the hour when the solar gains of the exposed walls are highest.',
        'If the hours differ between walls, favour the largest wall and check that the hour falls within the occupancy period.',
      ],
    },
    fig('p025_0', 'Figure 1.1 — the 31 possible orientation types of a room'),
    fig('p026_0', 'Table 1.8 — room orientation and hour of maximum load'),
    {
      type: 'note',
      text: 'Example: an office with sunlit North, South and West walls peaks at 12:00 on the North, 13:00 on the South and 14:00 on the West. The South wall is the largest and the office is used from 8:00 to 18:00, so we calculate at 13:00.',
    },

    { type: 'heading', text: '4 · The calculation sheet' },
    {
      type: 'text',
      text: 'The guide provides a calculation sheet that structures the whole balance and prevents omissions. A table with columns (I to IX) describes each wall; at the bottom, the sensible and latent gains are numbered (1) to (14).',
    },
    fig('p048', 'Appendix — heat balance calculation sheet (wall survey, columns I to IX)'),
    { type: 'subheading', text: 'Step 1: data survey' },
    {
      type: 'bullets',
      items: [
        'Column I: name and orientation of each wall and glazing.',
        'Column II: dimensions and number of windows; column III: net area (walls without openings).',
        'Column IV: k coefficient (tables 1.7 and 1.9); column V: temperature difference Δθ (table 1.10).',
        'Type and flow of air renewal (natural or mechanical, table 1.15).',
      ],
    },
    { type: 'subheading', text: 'Step 2: calculating the loads' },
    fig('p049', 'Appendix — bottom of the sheet: sensible gains (1 to 7), latent (8 to 12), capacity (13) and dehumidification (14)'),
    {
      type: 'table',
      headers: ['Line', 'Gain', 'Formula'],
      rows: [
        ['(1)', 'Transmission through walls and glazing', 'k × S × Δθ (col. VI)'],
        ['(2)', 'Solar radiation on walls and glazing', 'α·F·S·Rm and α·g·S·Rv (col. VII-IX)'],
        ['(3)', 'Occupants, sensible', 'n × CSoc'],
        ['(4)', 'Electrical appliances and lighting', 'Σ P × uf ; 1.25 P (fluo)'],
        ['(5)', 'Other sources (motors…)', 'dissipated power'],
        ['(6)', 'Air renewal, sensible', 'qv × Δθ × 0.33'],
        ['(7)', 'SENSIBLE LOAD', '1+2+3+4+5+6'],
        ['(8)–(11)', 'Latent: occupants, appliances, other, fresh air', 'n × CLoc ; … ; qv × Δω × 0.84'],
        ['(12)', 'LATENT LOAD', '8+9+10+11'],
        ['(13)', 'AIR CONDITIONER CAPACITY', '7 + 12'],
        ['(14)', 'Dehumidification capacity (humid tropics)', '= 12'],
      ],
    },

    { type: 'heading', text: 'The safety factor' },
    {
      type: 'text',
      text: 'A small margin is usually added for uncertainties. The guide recommends 0 to 5 % maximum: beyond that, you increase the equipment price, operating cost and subscribed power, and the machine dehumidifies less well.',
    },
    { type: 'formula', text: 'Selected capacity = QT × (1 + 0 to 0.05)' },

    { type: 'heading', text: '5 · Electrical power to subscribe' },
    {
      type: 'text',
      text: 'Once the units are chosen, the utility must be asked for a subscription large enough for all the equipment (compressors, fans, pumps, other appliances). Two factors are used:',
    },
    {
      type: 'bullets',
      items: [
        'Ku, utilisation factor: actual power used / rated power (often 1 for an air conditioner).',
        'Ks, simultaneity factor: not all appliances run at the same time (between 0 and 1).',
      ],
    },
    { type: 'formula', text: 'Pat = Pn × Ks × Ku   (total active power, W)' },
    { type: 'formula', text: 'Qat = Pat × tan φ   (reactive power, var)' },
    { type: 'formula', text: 'Sa = √(Pat² + Qat²)   (apparent power to subscribe, VA)' },
    {
      type: 'text',
      text: 'The installation’s power factor cos φ is set by the utility (about 0.8 in Cameroon, 0.86 in Côte d’Ivoire). The rated power Pn of an air conditioner is on its nameplate; otherwise Pn = U·I·cos φ single-phase and √3·U·I·cos φ three-phase.',
    },
    fig('p039_0', 'Table 1.19 — power factor by country'),
    { type: 'note', text: 'The subscription is set by the apparent power (VA), not the cooling capacity: an 8.5 kW split only needs ~4 kVA.' },
  ],
};
