import { TopicContent } from '../../types';
import { fig } from '../../topics/clim/fig';

export const cvLoadContent: TopicContent = {
  title: 'The room-by-room heat load',
  subtitle: 'How much heat must be removed from each room at the hottest hour? Ousmane goes through walls, windows, occupants, lighting, appliances and fresh air one by one, then fills in the villa’s heat load sheet.',
  blocks: [
    { type: 'scene', text: 'Week 3 · Design office' },
    {
      type: 'objectives',
      items: [
        'Identify the sensible and latent gains of a room.',
        'Calculate the gains through walls, glazing, occupants and fresh air.',
        'Fill in a heat load sheet and read its totals (W, BTU/h, W/m², SHR).',
        'Understand why each room has its own peak hour.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '4.9 kW', label: 'living room, at 4 pm' },
        { value: '1.4 to 1.9 kW', label: 'each of the three bedrooms' },
        { value: '≈ 9.7 kW', label: 'total for the villa' },
        { value: '0.81', label: 'sensible heat ratio' },
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Esther Mensah',
      role: 'client',
      text: 'The seller at the market says you need 1,000 BTU per square metre. Why go through a whole calculation?',
    },
    {
      type: 'dialogue',
      speaker: 'Ousmane Cissé',
      role: 'engineer',
      text: 'With his rule, the north bedroom and the west-facing living room would get the same AC per square metre. Yet one gets the evening sun through a picture window and the other almost nothing. The load calculation takes each heat source one by one: that’s what avoids an undersized AC that runs non-stop, and an oversized one that leaves the bedroom clammy.',
    },

    { type: 'heading', text: '1 · Where does the heat come from?' },
    { type: 'illustration', name: 'clim-heat-gains', caption: 'The gains of a room: external (walls, glazing, air) and internal (occupants, lighting, appliances)' },
    {
      type: 'table',
      headers: ['Gain', 'Sensible (heats the air)', 'Latent (humidifies the air)'],
      rows: [
        ['Walls and roof', 'transmission + absorbed sun', '—'],
        ['Glazing', 'transmission + direct sun', '—'],
        ['Occupants', '≈ 65 to 75 W per person at rest', '≈ 45 to 55 W per person'],
        ['Lighting, appliances', 'all the electrical power', 'cooking, kettle…'],
        ['Fresh air, infiltration', 'q × Δθ × 0.33', 'q × Δω × 840'],
      ],
    },
    {
      type: 'text',
      text: 'Sensible heat raises the thermometer; latent heat is water vapour that will have to be condensed on the evaporator. In the tropics, fresh air often brings more latent than sensible heat: that’s what makes a room feel “clammy” if the AC is poorly chosen.',
    },

    { type: 'heading', text: '2 · The living room, line by line' },
    {
      type: 'calc',
      title: 'Living-room gains (36 m², shaded west window, peak at 4 pm)',
      steps: [
        { label: 'External walls: transmission (k ≈ 2.5 W/m²·K, 30 m² opaque)', formula: 'Q = k × S × Δθ = 2.5 × 30 × 6 = 450 W' },
        { label: 'Sun absorbed by the west wall and the insulated roof (α, F, R_m tables of the guide)', formula: 'Q ≈ 270 + 580 = 850 W  ;  doors, partitions ≈ 200 W' },
        { label: 'Glazing: shaded picture window (920 W) + south window and transmission', formula: 'Q_{glazing} ≈ 1 500 W' },
        { label: 'Occupants: 5 people at rest', formula: 'Q_S = 5 × 75 = 375 W   ;   Q_L = 5 × 55 = 275 W' },
        { label: 'LED lighting (electrical step) and appliances (TV, router)', formula: 'Q = 120 + 200 = 320 W' },
        { label: 'Infiltration: 0.5 air change per hour of 101 m³', formula: 'q = 50 m³/h   ;   Q_S = 50 × 6 × 0.33 = 99 W   ;   Q_L = 50 × 0.0147 × 840 = 617 W' },
      ],
      result: 'Sensible 3,794 W + latent 892 W = 4,686 W; with a 5 % margin: ≈ 4.9 kW',
    },
    fig('p029_0', 'Table 1.9 of the IEPF guide — k values of walls, roofs and glazing'),
    fig('p031_1', 'Table 1.14a — radiation on walls and glazing, hour by hour: read the peak-hour row'),
    fig('p034_0', 'Table 1.16 — sensible and latent heat given off by people according to activity'),
    {
      type: 'note',
      text: 'Why 4 pm for the living room and not noon? The western sun hits the window in the afternoon, and the roof releases its stored heat several hours later. An east bedroom peaks in the morning. With one split per room, each room is sized at its own peak; for a machine shared by several rooms, we would look for the hour when the sum is highest.',
    },

    { type: 'heading', text: '3 · The villa heat load sheet' },
    {
      type: 'heatLoadSheet',
      sheet: {
        project: 'Mensah villa',
        location: 'Coastal city, West Africa',
        outdoor: '32 °C · 25.5 g/kg',
        indoor: '26 °C · 50 % (10.8 g/kg)',
        peakHour: 'living 4 pm · bedrooms 5 pm',
        margin: 0.05,
        rooms: [
          { name: 'Living room (west)', area: 36, walls: 1500, glazing: 1500, people: 375, lighting: 120, equipment: 200, air: 99, peopleLat: 275, airLat: 617, selected: 'Split 18,000 BTU/h', selectedW: 5280 },
          { name: 'Bedroom 1 (parents)', area: 16, walls: 700, glazing: 450, people: 140, lighting: 40, equipment: 60, air: 44, peopleLat: 90, airLat: 272, selected: 'Split 9,000 BTU/h', selectedW: 2640 },
          { name: 'Bedroom 2', area: 12, walls: 600, glazing: 400, people: 70, lighting: 30, equipment: 50, air: 34, peopleLat: 45, airLat: 210, selected: 'Split 9,000 BTU/h', selectedW: 2640 },
          { name: 'Bedroom 3 (east)', area: 12, walls: 550, glazing: 350, people: 70, lighting: 30, equipment: 50, air: 34, peopleLat: 45, airLat: 210, selected: 'Split 9,000 BTU/h', selectedW: 2640 },
        ],
      },
    },
    {
      type: 'calc',
      title: 'Reading the totals',
      steps: [
        { label: 'Sensible heat ratio: share of sensible in the total', formula: 'SHR = \\frac{Q_S}{Q_S + Q_L} = \\frac{7 496}{9 260} ≈ 0.81' },
        { label: 'Average ratio for the villa', formula: '\\frac{9 723 W}{76 m²} ≈ 128 W/m²' },
        { label: 'Conversion for the catalogues', formula: '1 W = 3.412 BTU/h   →   4 920 W ≈ 16 800 BTU/h for the living room' },
      ],
      result: 'Living room: 16,800 BTU/h → 18,000 BTU/h unit; bedrooms: 4,800 to 6,400 BTU/h → smallest model, 9,000 BTU/h',
    },
    {
      type: 'note',
      text: 'The SHR tells the unit what is expected of it. At 0.81, it must remove nearly 20 % of its capacity as water. A unit that cools the air too fast (oversized, on/off) has no time to condense: the room is cold and clammy. One more argument for inverter technology, covered in the next step.',
    },
    {
      type: 'decision',
      title: 'Calculation method',
      choice: 'Detailed room-by-room load at each room’s peak hour, 5 % margin',
      reasons: [
        'Per-square-metre ratios ignore orientation: the west living room needs 137 W/m², the east bedroom 3 needs 117 W/m².',
        'A 5 % margin is enough when every gain is calculated; margins stacked on each line lead to oversized machines.',
      ],
      rejected: 'The seller’s rule (≈ 1,000 BTU/h per m²): 36,000 BTU/h for the living room, twice too much, with clammy air guaranteed.',
    },
    { type: 'fiche', id: 'clim-heat-gains', why: 'Each gain explained: walls, glazing, occupants, lighting, fresh air.' },
    { type: 'fiche', id: 'clim-load-method', why: 'The step-by-step method and the IEPF calculation sheet.' },
    { type: 'fiche', id: 'clim-load-example', why: 'A complete example: an office in Douala.' },

    { type: 'heading', text: '4 · What the standards say' },
    {
      type: 'norms',
      title: 'Cooling load methods',
      rows: [
        { norm: 'IEPF guide', rule: 'Manual method by gains (k × S × Δθ, α × F × S × R, solar tables by latitude), calculation sheet in the appendix.', result: 'method used here' },
        { norm: 'ASHRAE (RTS, CLTD)', rule: 'Radiant time series method: accounts for thermal mass, hour by hour over 24 h.', result: 'software such as HAP, TRACE' },
        { norm: 'EN ISO 52016-1', rule: 'Hourly calculation of building energy needs and loads (European framework).', result: 'simulation software' },
        { norm: 'Market rules', rule: 'Ratios in BTU/h per m² or W/m², with no orientation or occupancy.', result: 'outline design only' },
      ],
    },
    {
      type: 'regional',
      text: 'In many villas, metal-sheet roofs or uninsulated slabs blow up the load of the rooms under the roof: a bare concrete slab in the sun can add 40 to 60 W/m² compared with the Mensahs’ insulated roof. Insulating the roof (5 cm of polystyrene or a ventilated double roof) often costs less than the next split size up, and it protects the non-air-conditioned rooms too.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'The load adds up sensible gains (walls, glazing, occupants, lighting, appliances, air) and latent gains (occupants, air, cooking).',
        'Each room has its own peak hour; orientation changes everything.',
        'The heat load sheet gives the total in W and BTU/h, the W/m² ratio and the sensible heat ratio.',
        'An overall 5 % margin is enough if every gain is calculated.',
        'Latent heat from fresh air weighs heavily in the tropics.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'A 400 W gaming computer is installed in bedroom 2. What becomes of its load? Is the 9,000 BTU/h enough?',
      solution: ['Total: (1,184 + 400 + 255) × 1.05 ≈ 1,930 W, about 6,600 BTU/h.', 'The 9,000 BTU/h (2.64 kW) is still more than enough.'],
    },
    {
      type: 'exercise',
      question: 'Bedroom 1 is occupied by 3 people instead of 2. What extra gain, sensible and latent?',
      solution: ['One person at rest: about 70 W sensible and 45 W latent.', 'Room total: (1,434 + 70 + 362 + 45) × 1.05 ≈ 2,010 W: still covered by the 9,000 BTU/h.'],
    },
    {
      type: 'exercise',
      question: 'Why is the latent gain of the fresh air (617 W) six times its sensible gain (99 W) in the living room?',
      solution: [
        'Q_S = q × Δθ × 0.33 with Δθ = only 6 °C; Q_L = q × Δω × 840 with Δω = 14.7 g/kg, a very large humidity difference.',
        'Tropical air is hot but above all very humid: every cubic metre that comes in brings a lot of water to condense.',
      ],
    },
  ],
};
