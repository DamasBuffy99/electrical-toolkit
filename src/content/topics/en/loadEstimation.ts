import { TopicContent } from '../../types';

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
