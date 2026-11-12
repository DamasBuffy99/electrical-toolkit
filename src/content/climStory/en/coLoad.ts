import { TopicContent } from '../../types';
import { fig } from '../../topics/clim/fig';

export const coLoadContent: TopicContent = {
  title: 'Load by façade and peak hour',
  subtitle: 'Kora Assurances is building its head office: five levels of 600 m² glazed offices. Ousmane splits each floor into zones by façade, quantifies the fresh air for 78 people per floor and shows the technical director why the west façade and the meeting room are the problem.',
  blocks: [
    { type: 'scene', text: 'Month 2 · Design office, with Jean-Marc Kouadio (Kora) and Mariam Diop (architect)' },
    {
      type: 'objectives',
      items: [
        'Split a building into thermal zones by orientation and use.',
        'Quantify the internal gains of an office: occupants, lighting, IT.',
        'Measure the weight of fresh air in a hot, humid climate.',
        'Tell each zone’s peak from the building’s peak (diversity).',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '≈ 76 kW', label: 'per floor, fresh air included' },
        { value: '39 %', label: 'of the load due to fresh air' },
        { value: '154 W/m²', label: 'west zone, at 4 pm' },
        { value: '0.33', label: 'sensible heat ratio of the meeting room' },
        { value: '≈ 323 kW', label: 'for the building, diversity 0.85' },
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Jean-Marc Kouadio (Kora Assurances)',
      role: 'client',
      text: 'Our old head office was cooled by splits added over the years. It was too cold on the north side, too hot on the west, and the boardroom was stifling. I don’t want to go through that again.',
    },
    {
      type: 'dialogue',
      speaker: 'Ousmane Cissé',
      role: 'engineer',
      text: 'What you describe is a building treated as a single room. Each façade has its sun and its peak hour, each room its occupancy. I’ll split every floor into five zones and calculate them separately; the system will follow that zoning.',
    },

    { type: 'heading', text: '1 · Splitting into zones' },
    {
      type: 'table',
      headers: ['Zone (typical floor)', 'Area', 'Peak', 'What dominates'],
      rows: [
        ['North offices', '180 m²', 'noon to 2 pm', 'internal gains, little sun'],
        ['South offices', '180 m²', '1 pm', 'high sun, stopped by overhangs'],
        ['East offices', '90 m²', '9 am', 'low morning sun'],
        ['West offices', '90 m²', '4 pm', 'low afternoon sun + thermal mass'],
        ['Meeting room (core)', '60 m²', 'during meetings', '24 people, fresh air'],
      ],
    },
    fig('p173_0', 'Figure 6.9 of the IEPF guide — in Ouagadougou, east and west façades receive 2 to 3 times more than north'),
    fig('p026_0', 'Table 1.8 — room orientation and peak-load hour'),

    { type: 'heading', text: '2 · The internal gains of an office' },
    {
      type: 'calc',
      title: 'North offices (180 m²)',
      steps: [
        { label: 'Occupancy: 1 person per 10 m², seated work', formula: 'n = 18   ;   Q_S = 18 × 75 = 1 350 W   ;   Q_L = 18 × 55 = 990 W' },
        { label: 'LED lighting: 8 W/m²', formula: 'Q = 180 × 8 = 1 440 W' },
        { label: 'IT: workstations, screens, printers ≈ 15 W/m²', formula: 'Q = 180 × 15 = 2 700 W' },
        { label: 'Fresh air: 25 m³/h per person (IEPF guide)', formula: 'q = 450 m³/h   ;   Q_S = 450 × 6 × 0.33 = 891 W   ;   Q_L = 450 × 0.0147 × 840 = 5 557 W' },
      ],
      result: 'With walls (900 W) and glazing (2,600 W): ≈ 17.2 kW, 6.4 kW of it for fresh air (5.6 kW for its moisture alone)',
    },
    fig('p033_0', 'Table 1.15 — fresh-air rate per person and occupancy density by room type'),
    fig('p175_1', 'Table 6.11 — lighting power densities: 10.5 W/m² for conventional offices'),

    { type: 'heading', text: '3 · The typical-floor load sheet' },
    {
      type: 'heatLoadSheet',
      sheet: {
        project: 'Kora head office · typical floor',
        location: 'Coastal city, West Africa',
        outdoor: '32 °C · 25.5 g/kg',
        indoor: '26 °C · 50 %',
        peakHour: 'zone by zone; building 3–4 pm',
        margin: 0.05,
        diversity: 0.85,
        rooms: [
          { name: 'North offices', area: 180, walls: 900, glazing: 2600, people: 1350, lighting: 1440, equipment: 2700, air: 891, peopleLat: 990, airLat: 5557, selected: '4 cassettes 2.8 kW', selectedW: 11200 },
          { name: 'South offices', area: 180, walls: 1000, glazing: 3600, people: 1350, lighting: 1440, equipment: 2700, air: 891, peopleLat: 990, airLat: 5557, selected: '3 cassettes 4.0 kW', selectedW: 12000 },
          { name: 'East offices', area: 90, walls: 700, glazing: 5200, people: 675, lighting: 720, equipment: 1350, air: 446, peopleLat: 495, airLat: 2778, selected: '2 ducted 5.6 kW', selectedW: 11200 },
          { name: 'West offices', area: 90, walls: 900, glazing: 5600, people: 675, lighting: 720, equipment: 1350, air: 446, peopleLat: 495, airLat: 2778, selected: '2 ducted 5.6 kW', selectedW: 11200 },
          { name: 'Meeting room (24 people)', area: 60, walls: 200, glazing: 0, people: 1800, lighting: 480, equipment: 600, air: 1188, peopleLat: 1320, airLat: 7409, selected: '1 ducted 5.6 kW', selectedW: 5600 },
        ],
      },
    },
    {
      type: 'note',
      text: 'Mind the “Unit selected” column: the indoor units are sized only for the zone gains, without the fresh air, which will be treated separately (step 3). That’s why they look too small against the sheet totals: a ✗ that the fresh-air unit will clear.',
    },
    {
      type: 'calc',
      title: 'What the sheet shows',
      steps: [
        { label: 'Share of fresh air in the floor (sensible + latent)', formula: '\\frac{3 862 + 24 079}{72 380} ≈ 39 %' },
        { label: 'Meeting room: sensible heat ratio', formula: 'SHR = \\frac{4 268}{12 997} ≈ 0.33' },
        { label: 'East and west zones don’t peak at the same time: diversity', formula: '76 kW × 0.85 ≈ 64.6 kW per floor' },
        { label: 'Five-level building', formula: '5 × 64.6 ≈ 323 kW ≈ 92 TR' },
      ],
      result: 'About 76 kW per floor zone by zone, 65 kW at the same instant; 323 kW for the building',
    },
    {
      type: 'note',
      text: 'An SHR of 0.33 means two thirds of the meeting room’s capacity go into removing water. An ordinary unit (SHR ≈ 0.75) would cool the air until people feel cold without managing to dry it: the room would be cool and clammy, “stifling” as Jean-Marc puts it. The answer is to dry the fresh air before it comes in.',
    },
    {
      type: 'decision',
      title: 'Zoning and façades',
      choice: 'Five zones per floor, each with its own units and control; solar-control glazing (g ≈ 0.4) and fixed louvres on the east and west façades',
      reasons: [
        'Each zone has its own peak hour: a common control would chill the north to cool the west.',
        'Solar-control glazing and louvres halve the gains of the east and west façades.',
        'Mariam Diop accepts the louvres, which become a feature of the façade.',
      ],
      rejected: 'A fully glazed façade in clear glass without protection: + 6 kW per east or west façade and per floor, i.e. 60 kW more cooling for the building.',
    },
    { type: 'fiche', id: 'clim-load-method', why: 'The step-by-step calculation method.' },
    { type: 'fiche', id: 'clim-building', why: 'Designing a building that heats up less: orientation, glazing, shading.' },

    { type: 'heading', text: '4 · What the standards say' },
    {
      type: 'norms',
      title: 'Office fresh air',
      rows: [
        { norm: 'IEPF guide', rule: 'Fresh-air rates per person and occupancy densities by room type.', result: '25 m³/h per person' },
        { norm: 'ASHRAE 62.1', rule: 'Rate per person + rate per m²: offices 2.5 L/s·person + 0.3 L/s·m².', result: '≈ 28 m³/h per person at 10 m²/person' },
        { norm: 'EN 16798-1', rule: 'Category II: 7 L/s per person + 0.7 L/s·m² for a low-polluting building.', result: '≈ 50 m³/h per person' },
        { norm: 'French labour code', rule: 'Offices: at least 25 m³/h per occupant.', result: '25 m³/h' },
      ],
    },
    {
      type: 'regional',
      text: 'Several countries in the region have adopted or are preparing building energy codes (the IEPF guide quotes the ratios of the Ivorian code): glazing solar factor, lighting density, equipment efficiency. For a head office financed by a development bank, these criteria, or an international certification, are often required. Better to build them in from the sketch stage with the architect.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'A building is split into zones: orientation, use, schedules.',
        'In an office, occupants, lighting and IT weigh as much as the sun.',
        'Fresh air is over a third of the load in a humid climate, mostly latent.',
        'Densely occupied rooms have a low SHR: the air must be dried, not just cooled.',
        'The sum of zone peaks exceeds the building peak: apply diversity for the plant.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'With 50 m³/h per person (EN 16798-1, category II), what becomes of the latent fresh-air gain of the meeting room?',
      solution: ['q = 24 × 50 = 1,200 m³/h.', 'Q_L = 1,200 × 0.0147 × 840 ≈ 14,800 W, double: the case for energy recovery becomes obvious.'],
    },
    {
      type: 'exercise',
      question: 'The 8 W/m² lighting is replaced by fluorescent tubes at 14 W/m². What does staying with LEDs save per floor?',
      solution: ['Difference: 6 W/m² × 600 m² = 3.6 kW of heat per floor.', 'That is 18 kW of cooling for the building, on top of the 18 kW of lighting electricity saved.'],
    },
  ],
};
