import { TopicContent } from '../../types';
import { fig } from '../../topics/clim/fig';

export const chConceptContent: TopicContent = {
  title: 'The hotel load and the choice of chilled water',
  subtitle: 'A hundred and twenty rooms, a lobby, a 150-cover restaurant, a conference room: the peaks don’t fall at the same hour. Ousmane quantifies each zone, applies realistic diversity and explains to Nadia Haddad why the hotel deserves a chilled-water plant.',
  blocks: [
    { type: 'scene', text: 'Month 1 · Nadia Haddad’s office, with Félix Amoussou (technical director)' },
    {
      type: 'objectives',
      items: [
        'Draw up the load of a building with very different uses.',
        'Apply diversity based on occupancy schedules.',
        'Choose between VRF and chilled water for a hotel.',
        'Decide on the redundancy of the cooling plant.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '≈ 419 kW', label: 'sum of the peaks of all zones' },
        { value: '0.70', label: 'diversity factor used' },
        { value: '≈ 293 kW', label: 'plant capacity (83 TR)' },
        { value: '3 × 150 kW', label: 'chillers, N+1' },
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Nadia Haddad (owner)',
      role: 'client',
      text: 'My previous hotel had splits in every room. Guests complained about the noise of the outdoor units under the balconies, and we replaced ten a year. I want silence and reliability.',
    },
    {
      type: 'dialogue',
      speaker: 'Ousmane Cissé',
      role: 'engineer',
      text: 'Then we produce the cooling in one place, far from the rooms, and distribute it as chilled water. But first, let’s measure what has to be produced: in a hotel, the restaurant, the conference room and the bedrooms are never full at the same moment.',
    },

    { type: 'heading', text: '1 · The load by zone' },
    {
      type: 'heatLoadSheet',
      sheet: {
        project: 'Lagune Bleue hotel',
        location: 'Lagoon-side, West Africa',
        outdoor: '32 °C · 25.5 g/kg',
        indoor: '26 °C · 50 % (rooms 25 °C at night)',
        peakHour: 'zone by zone',
        margin: 0.05,
        diversity: 0.7,
        rooms: [
          { name: '60 lagoon-side rooms (west)', area: 1680, walls: 15000, glazing: 39000, people: 7800, lighting: 3600, equipment: 9000, air: 3540, peopleLat: 5400, airLat: 22200 },
          { name: '60 city-side rooms (east)', area: 1680, walls: 12000, glazing: 15000, people: 7800, lighting: 3600, equipment: 9000, air: 3540, peopleLat: 5400, airLat: 22200 },
          { name: 'Lobby and reception', area: 300, walls: 2500, glazing: 6000, people: 3000, lighting: 3000, equipment: 1500, air: 2376, peopleLat: 2200, airLat: 14818 },
          { name: 'Restaurant (150 covers)', area: 250, walls: 2000, glazing: 4000, people: 12000, lighting: 2500, equipment: 3000, air: 7425, peopleLat: 10500, airLat: 46305, otherLat: 2000 },
          { name: 'Conference room (150 people)', area: 200, walls: 1500, glazing: 1000, people: 11250, lighting: 2000, equipment: 2000, air: 7425, peopleLat: 8250, airLat: 46305 },
          { name: 'Administration', area: 100, walls: 1000, glazing: 1500, people: 750, lighting: 1000, equipment: 1500, air: 495, peopleLat: 550, airLat: 3087 },
        ],
      },
    },
    {
      type: 'calc',
      title: 'A typical lagoon-side room (28 m², peak at 5 pm)',
      steps: [
        { label: 'Walls and balcony glazing (shaded by the loggia)', formula: 'Q = 250 + 650 = 900 W' },
        { label: '2 occupants at rest, lighting, TV and minibar', formula: 'Q_S = 130 + 60 + 150 = 340 W   ;   Q_L = 90 W' },
        { label: 'Fresh air: 30 m³/h', formula: 'Q_S = 30 × 6 × 0.33 ≈ 59 W   ;   Q_L = 30 × 0.0147 × 840 ≈ 370 W' },
      ],
      result: '≈ 1.76 kW per room (1.85 kW with margin); city side, shaded in the afternoon, ≈ 1.31 kW',
    },

    { type: 'heading', text: '2 · Diversity: who is full, and when?' },
    {
      type: 'table',
      headers: ['Zone', 'Own peak', 'At 5 pm (building peak)', 'Factor'],
      rows: [
        ['Rooms', '5 pm – 10 pm', 'average occupancy 80 %, some guests still out', '0.8'],
        ['Lobby', 'arrivals 2 pm – 7 pm', 'in use', '1.0'],
        ['Restaurant', 'dinner 7.30 pm – 10 pm', 'setting up, a few guests', '0.5'],
        ['Conference', '9 am – 5 pm', 'end of seminar, half empty', '0.6'],
        ['Administration', '8 am – 5 pm', 'in use', '1.0'],
      ],
    },
    {
      type: 'calc',
      title: 'Plant capacity',
      steps: [
        { label: 'Sum of zone peaks, with 5 % margin', formula: 'Σ ≈ 398.8 × 1.05 ≈ 419 kW' },
        { label: 'Sum weighted by the table factors, at 5 pm', formula: '0.8 × 193 + 37 + 0.5 × 94 + 0.6 × 84 + 10 ≈ 300 kW' },
        { label: 'Overall diversity used', formula: '\\frac{300}{419} ≈ 0.71   →   0.70 × 419 ≈ 293 kW' },
        { label: 'Conversion', formula: '293 kW ≈ 83 TR ≈ 1 000 000 BTU/h' },
      ],
      result: 'Production plant: ≈ 293 kW. Each terminal stays sized on its own zone’s peak',
    },
    {
      type: 'note',
      text: 'Diversity applies to the plant (chillers, pumps, main pipework), never to the units of each room: the restaurant must be able to seat its 150 covers even if that only happens at 9 pm. The plant, however, doesn’t have to serve the dinner, the seminar and 120 full rooms in the sun at the same time.',
    },
    fig('p020_0', 'Table 1.3 of the IEPF guide — outdoor design conditions'),

    { type: 'heading', text: '3 · VRF or chilled water for a hotel?' },
    { type: 'illustration', name: 'clim-central', props: { highlight: 'chiller' }, caption: 'Cooling is produced in the plant, then chilled water flows to the fan coils and air handling units' },
    {
      type: 'table',
      headers: ['Criterion', 'VRF', 'Chilled water'],
      rows: [
        ['Refrigerant in the bedrooms', 'yes: bedrooms = sleeping rooms, strict charge limits', 'no: only water'],
        ['Noise in the bedrooms', 'low', 'low (fan coil in the false ceiling)'],
        ['Project capacity', '≈ 300 kW: upper limit of VRF', 'natural range'],
        ['Air handling units (restaurant, conference)', 'possible, but limited', 'easy to supply with chilled water'],
        ['Recovery for domestic hot water', 'limited', 'recovery on the chillers'],
        ['Service life', '≈ 15 years', '20 to 25 years for networks and terminals'],
      ],
    },
    {
      type: 'decision',
      title: 'System',
      choice: 'Chilled-water plant at 7 / 12 °C, fan coils in the bedrooms, air handling units for the lobby, restaurant and conference room',
      reasons: [
        'No refrigerant in the bedrooms: no charge limit to justify in 120 sleeping rooms.',
        'Production grouped far from the rooms: silence, maintenance in one place.',
        'Chilled water also feeds the air handling units of the large rooms, and the chillers’ heat can preheat domestic hot water.',
      ],
      rejected: 'VRF: efficient, but 120 rooms served with R32 would need detectors and valves in each; individual splits: the noise and breakdowns Nadia wants to forget.',
    },
    { type: 'fiche', id: 'clim-central-systems', why: 'The families of central systems.' },

    { type: 'heading', text: '4 · How many chillers?' },
    {
      type: 'table',
      headers: ['Option', 'Installed capacity', 'If one chiller fails', 'Night-time part load'],
      rows: [
        ['1 × 300 kW chiller', '300 kW', 'no cooling: hotel closed', 'one big compressor at low load'],
        ['2 × 150 kW chillers', '300 kW', '150 kW: bedrooms only', 'fair'],
        ['3 × 150 kW chillers', '450 kW', '300 kW: the whole hotel runs', 'very good: one chiller at night'],
      ],
    },
    {
      type: 'decision',
      title: 'Plant redundancy',
      choice: '3 × 150 kW chillers, one on standby (N+1)',
      reasons: [
        'A chiller failure stops nothing, even on an evening with a seminar and a full dinner.',
        'At night, a single chiller runs close to its optimum load.',
        'The three chillers rotate to wear evenly; maintenance is done without cutting the cooling.',
      ],
      rejected: 'Two 150 kW chillers: 30 % cheaper, but after a failure on a busy evening the restaurant and the conference room would have no cooling.',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'team',
      text: 'Three chillers of about 50 kW electrical each, plus the pumps: I’m reserving 180 kW at the main board for the plant, on the standby busbar. And I’m planning sequential chiller starts after an outage, so the generator doesn’t stall.',
    },

    { type: 'heading', text: '5 · What the standards say' },
    {
      type: 'norms',
      title: 'Hotels and refrigerants',
      rows: [
        { norm: 'EN 378-1', rule: 'Sleeping rooms (hotels, hospitals): occupancy category “a”, the strictest charge limits.', result: 'no refrigerant in the rooms' },
        { norm: 'ISO 5149-1', rule: 'Same occupancy categories and limits (international framework).', result: 'same' },
        { norm: 'ASHRAE 15', rule: 'Institutional and residential occupancies: reduced limits for direct systems.', result: 'same' },
        { norm: 'ASHRAE 90.1 / EN 14825', rule: 'Minimum chiller efficiencies (full load and seasonal).', result: 'see next step' },
      ],
    },
    {
      type: 'regional',
      text: 'Hotels in the region live to the rhythm of outages and diesel: every kilowatt of cooling is paid twice, to the grid and to the generator. A well-controlled plant, with a single machine at night and heat recovery for hot water, cuts the bill sharply. Mind the sea air too: chillers with corrosion-protected coils and stainless fasteners on the lagoon side.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'A hotel combines zones with different schedules: rooms in the evening, restaurant at dinner, conference during the day.',
        'Terminals are sized on their zone’s peak, the plant on the coincident peak (diversity).',
        'Above 300 kW, with sleeping rooms and large halls, chilled water is often the answer.',
        'Several chillers in N+1: continuity of service and good part-load efficiency.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'On a gala evening, the restaurant and the conference room are full at the same time at 8 pm. Rooms are at 60 %. Estimate the demand.',
      solution: [
        'Restaurant ≈ 94 kW and conference ≈ 84 kW (peaks with margin), rooms ≈ 0.6 × 193 ≈ 116 kW, lobby and administration ≈ 48 kW.',
        'Total ≈ 342 kW: above the 293 kW, but the three chillers (450 kW) cover it. That is exactly the value of N+1: a margin for exceptional evenings.',
      ],
    },
    {
      type: 'exercise',
      question: 'Why not apply the 0.7 diversity to each room’s fan coil?',
      solution: ['Because a given room can be occupied at its peak: its unit must cover 1.85 kW.', 'Diversity reflects the fact that not all rooms peak at the same time: it only applies to what is shared (chillers, pumps, headers).'],
    },
  ],
};
