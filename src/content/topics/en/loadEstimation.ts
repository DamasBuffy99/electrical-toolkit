import { TopicContent } from '../../types';
import { SLIDES } from '../../slides';

export const loadEstimationContent: TopicContent = {
  title: 'Load Estimation',
  subtitle: 'Identify the electrical power needed before designing the project',
  blocks: [
    { type: 'heading', text: '🔷 Why estimate the load?' },
    {
      type: 'text',
      text: "Load estimation is an early assessment of the electrical power required for a building. It must be done before detailed design, for three reasons:",
    },
    {
      type: 'bullets',
      items: [
        "Inform the architect: how much space to reserve for the electrical room, the generator room, and the transformer room.",
        "Confirm feasibility with the utility company before designing everything — otherwise you risk discovering too late that it can't supply the required power.",
        "Determine the supply type (low or medium voltage) and whether a transformer is needed.",
      ],
    },
    {
      type: 'table',
      headers: ['Estimated load', 'Consequence'],
      rows: [
        ['Under 400 kVA', 'Direct low voltage supply, no transformer'],
        ['Over 400 kVA', 'Medium voltage supply, transformer required'],
      ],
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Method 1 — VA/m² (building area)' },
    {
      type: 'text',
      text: "The simplest and most widely used method for a first estimate: multiply the built area by a VA/m² ratio defined by the applicable code for that building type, then apply a demand factor.",
    },
    {
      type: 'formula',
      text: 'Load (VA) = Built area (m²) × Demand factor × VA/m²',
    },
    {
      type: 'image',
      source: require('../../../../assets/diagrams/en/load_estimation_steps.png'),
      caption: 'Full walkthrough of the VA/m² method',
      height: 620,
    },
    { type: 'subheading', text: 'Reference table (Saudi Arabia Code)' },
    {
      type: 'text',
      text: "Each building type has its own VA/m² ratio (including lighting + air conditioning + receptacles) and its own demand factor.",
    },
    {
      type: 'image',
      source: require('../../../../assets/reference/saudi_va_table.png'),
      caption: 'Code excerpt — VA/m² and demand factors by category',
      height: 320,
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Full worked example' },
    {
      type: 'text',
      text: 'A 4000 m² residential building, demand factor 0.6, 145 VA/m²:',
    },
    { type: 'formula', text: '4,000 m² × 0.6 × 145 VA/m² = 348,000 VA = 348 kVA' },
    {
      type: 'text',
      text: "Special loads are then added (elevators, pumps, fire pumps…), each with its own demand factor:",
    },
    {
      type: 'table',
      headers: ['Load', 'DF', 'VA', 'Estimated load (VA)'],
      rows: [
        ['Elevators', '1', '44,444', '44,444'],
        ['Water pumps', '0.666', '15,000', '9,990'],
        ['Fire pumps', '1', '30,000', '30,000'],
      ],
    },
    {
      type: 'formula',
      text: 'Total ≈ (348,000 + 320 + 84,434) / 1000 ≈ 432.75 kVA',
    },
    {
      type: 'note',
      text: '⚠️ Standard transformer sizes (kVA): 500, 800, 1000, 1250, 1500, 2000, 2500… Choose the standard size directly above: here, 500 kVA.',
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Per-floor method: kVA per 100 m²' },
    {
      type: 'text',
      text: "Take the power per 100 m² of a floor from the code, then: total load = number of floors × area of one floor × kVA/m² (3 m high floors).",
    },
    {
      type: 'table',
      headers: ['kVA / 100 m²', 'Residential', 'Administration'],
      rows: [
        ['Fewer than 15 floors', 'Low 1.5 – 2 · Medium 2.5 – 4 · High 6 – 10', '6 – 12'],
        ['More than 15 floors', '8 – 10', '12'],
      ],
    },
    { type: 'subheading', text: 'Example: building with 600 m² per floor' },
    {
      type: 'bullets',
      items: [
        '1 basement, 2 administration floors, 16 residential floors (5 apartments each) → more than 15 floors.',
        '3 elevators of 15 kW · 3 water pumps of 17.5 HP (η = 88%, 1 for emergency) · 2 pumps of 6.5 HP (η = 87%, 1 for emergency).',
      ],
    },
    {
      type: 'table',
      headers: ['Load', 'Calculation', 'kVA'],
      rows: [
        ['Basement', '2 × 600 / 100', '12'],
        ['Administration', '12 × 600 / 100 × 2', '144'],
        ['Residential', '10 × 600 / 100 × 16', '960'],
        ['Common areas (stairs, roof, entrance)', 'Same as basement', '12'],
        ['Elevators', '(15 × 3) / 0.85', '53'],
        ['2 water pumps (excl. emergency)', '(2 × 17.5 × 0.746) / (0.88 × 0.85)', '35'],
        ['1 pump of 6.5 HP', '(6.5 × 0.746) / (0.87 × 0.85)', '6.6'],
        ['Total', '', '1,223'],
      ],
    },
    { type: 'formula', text: 'Oil transformer loaded at 80%: 1,223 / 0.8 = 1,528.75 kVA → 2 MVA transformer' },
    {
      type: 'note',
      text: "💡 Not all loads run at the same time: a diversity factor of 0.6 to 0.7 (or the code's) can be applied to lighting. Emergency pumps are not counted.",
    },
    { type: 'image', source: SLIDES['gen-36'], caption: 'kVA per 100 m² by number of floors' },
    { type: 'image', source: SLIDES['gen-39'], caption: 'Example: floor loads' },
    { type: 'image', source: SLIDES['gen-40'], caption: 'Example: motors and 2 MVA transformer' },

    { type: 'heading', text: '🔷 VA/m² by room type (NEC)' },
    {
      type: 'table',
      headers: ['Place', 'Lighting (VA/m²)', 'Small power (VA/m²)', 'A/C (VA/m²)'],
      rows: [
        ['Banks', '20 – 40', '30', '50 – 70'],
        ['Cafeteria', '25 – 45', '5', '60 – 100'],
        ['Computer center', '15 – 25', '15', '120 – 200'],
        ['Basement stores', '30 – 50', '15', '—'],
        ['Offices', '15 – 35', '15', '40 – 70 (up to 110 – 120)'],
        ['Hotels', '10 – 30', '5', '50 – 80'],
        ['Hospitals', '20 – 30', '10', '50 – 70'],
        ['Restaurants', '15 – 25', '2.5', '60 – 100'],
        ['Shops', '30 – 50', '10', '50 – 90'],
        ['Schools', '15 – 35', '15', '35 – 50'],
        ['Industrial building', '10 – 20', '10', '—'],
      ],
    },
    { type: 'image', source: SLIDES['gen-37'], caption: 'NEC VA/m² table' },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Other methods (overview)' },
    {
      type: 'table',
      headers: ['Method', 'Principle'],
      rows: [
        ['2. Load Breakdown', "Split lighting / receptacles / air conditioning and add them up — more precise than the global method."],
        ['3. IEC', "W/m² per functional zone of the building, each with its own coincidence factor."],
        ['4. NEC', 'Table 220.12 — general lighting load VA/m² by occupancy type.'],
        ['5. Exact', "Database of past projects already built by the company, or figures provided by the utility."],
      ],
    },
    {
      type: 'note',
      text: "💡 Remember: the more detailed the method (breakdown, IEC, NEC), the more precise it is — but the VA/m² method remains the quick go-to in the preliminary phase.",
    },
  ],
};
