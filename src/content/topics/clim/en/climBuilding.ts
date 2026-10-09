import { TopicContent } from '../../../types';
import { fig } from '../fig';

export const climBuildingContent: TopicContent = {
  title: 'Designing a building that heats up less',
  subtitle: 'Comfort, envelope, orientation, solar protection, inertia, insulation, glazing and lighting',
  blocks: [
    {
      type: 'text',
      text: 'The HVAC engineer often arrives too late: the architect has already drawn large west-facing glass walls and a dark metal roof… and all that is left is to install a huge air-conditioning system. Real savings are decided when the building is designed, for its whole life.',
    },
    { type: 'illustration', name: 'clim-building', caption: 'Orientation, overhangs, light colours, insulation: air conditioning starts with architecture' },

    { type: 'heading', text: 'Comfort, the first source of savings' },
    {
      type: 'bullets',
      items: [
        'Comfort zone used: 20 to 27 °C and 20 to 80 % humidity.',
        'A fixed setpoint of 24 °C / 50 % imposes large loads. A floating setpoint of 24 to 27 °C, following the outdoor temperature, saves a lot and reduces thermal shock.',
        'An installation loses about 3 % of COP per degree of lower setpoint; a 1 to 2 °C tolerance on the setpoint is acceptable.',
        'Air movement: it is only felt from 0.2 m/s; in ventilation, 1.5 m/s is a recommended average and 5 m/s becomes uncomfortable.',
      ],
    },
    { type: 'warning', text: "Apparent contradiction: chapter 6 quotes 1.5 m/s as the “recommended average speed in rooms”, while table 4.1 limits air to 0.12–0.25 m/s in the occupied zone. The 1.5 m/s applies to a naturally ventilated room (ceiling fan, cooling sensation); in an air-conditioned room, follow table 4.1." },
    fig('p158_0', 'Figure 6.1 — comfort zone and climate types'),

    { type: 'heading', text: 'Fresh air: just what is needed' },
    {
      type: 'text',
      text: 'Air must be renewed for hygiene (O₂ ≈ 20.7 %, CO₂ ≈ 0.03 %; remove odours, micro-organisms, water vapour). Standards suggest 30 m³/h per person (20 % dissatisfied); in Africa, 20 m³/h is a good compromise. Beyond that, you cool hot humid air for nothing.',
    },
    {
      type: 'bullets',
      items: [
        'Leaks through window and door gaps are “uncontrolled” renewal: 5 m³/h per metre of gap for a wooden door, up to 110 m³/h for a poorly fitted metal door in strong wind.',
        'Seals cut this infiltration by 35 to 40 %. Shop doors left open are a sinkhole (up to 300 m³/h per m²).',
        'The CO₂ level in a crowded meeting room quickly exceeds limits: match the flow to actual occupancy.',
      ],
    },
    fig('p160_0', 'Table 6.1 — air infiltration through windows by wind speed'),
    fig('p165_0', 'Figure 6.6 — CO₂ evolution in an occupied room'),

    { type: 'heading', text: 'Wall radiation and the greenhouse effect' },
    {
      type: 'text',
      text: 'Even with air at the right temperature, hot walls or ceilings feel uncomfortable: a +3 °C difference between walls and air is enough. The occupant feels a resultant temperature, the average of air and walls:',
    },
    { type: 'formula', text: 'Felt temperature = (T air + T walls) / 2' },
    fig('p162_0', 'Figure 6.2 — wall radiation and thermal comfort'),
    {
      type: 'text',
      text: 'Sunlight passing through a window is absorbed by walls and furniture, then released to the air partly at once and partly later (delayed gains): this is the greenhouse effect, to be avoided at all costs in the tropics. East and west openings are especially prone to it.',
    },
    fig('p163_0', 'Figure 6.3 — instantaneous and delayed solar gains through windows'),

    { type: 'heading', text: 'Stop the sun before the glass' },
    {
      type: 'bullets',
      items: [
        'Horizontal devices (overhangs, canopies): against the high noon sun, on North and South facades.',
        'Vertical devices (fins): against the low morning and afternoon sun.',
        'On an existing building: blinds and curtains. An external blind is the most effective; an internal curtain should be light and reflective.',
        'Vegetation, verandas and roof overhangs also shade walls and roof.',
      ],
    },
    fig('p164_0', 'Figure 6.4 — horizontal, vertical and mixed shading devices'),
    fig('p164_1', 'Figure 6.5 — facade protected by sunshades (Martinique)'),

    { type: 'heading', text: 'The envelope: shape, orientation, colours' },
    {
      type: 'text',
      text: 'The building receives heat from the sun (Qr = ε·S·Φs) and from hot air (Qc = h·S·(Te − Tpe)). Both are proportional to its surface: the first reflex is to reduce the exposed surface.',
    },
    {
      type: 'bullets',
      items: [
        'Compact shape: low surface-to-volume ratio.',
        'Long axis East-West: the main facades face North and South, the East and West gables are small with few openings.',
        'Shading: overhangs, blinds, verandas, vegetation.',
        'Limited number and size of openings.',
        'Light external finishes (roof and walls).',
      ],
    },
    fig('p167_0', 'Figure 6.6 — compactness and shape: good and bad buildings'),
    fig('p173_0', 'Figure 6.9 — in Ouagadougou, East and West facades receive 2 to 3 times more than North'),
    { type: 'note', text: 'Golden rule: put openings on the North or South (North receives the least energy in the northern hemisphere) and shade them from direct sun.' },

    { type: 'heading', text: 'Inertia and insulation' },
    {
      type: 'text',
      text: 'Diffusivity D = λ / (ρ·c) tells how fast heat goes through a material. A heavy building (inertia) stores heat: it flattens indoor temperature peaks and delays them by several hours. Buildings are classed by mass per m²: light < 75 kg/m², medium 75 to 300, heavy > 300.',
    },
    fig('p168_1', 'Figure 6.7 — damping and time lag of indoor temperature thanks to inertia'),
    {
      type: 'text',
      text: 'Insulation (glass wool, polystyrene, polyurethane, kapok, cotton fibres) slows heat transfer. Insulate the roof and very sunny facades first. There is no point insulating partitions between rooms cooled at the same time. Beware of thermal bridges: heat bypasses the insulation through an uninsulated partition or slab.',
    },
    fig('p171_0', 'Table 6.9 — k coefficients of different wall build-ups'),
    fig('p172_0', 'Figure 6.8 — thermal bridge: heat flows through the uninsulated partition'),
    {
      type: 'table',
      headers: ['Element (table 6.17)', 'Usual flux (W/m²)', 'Target (W/m²)'],
      rows: [
        ['Single-glazed windows', '180', '50'],
        ['Walls', '100', '35'],
        ['Roofs', '130', '40'],
      ],
    },

    { type: 'heading', text: 'Choosing glazing' },
    {
      type: 'text',
      text: 'Good glazing lets light (visible) through but not heat (infrared): it is selective glazing. Its extra cost is quickly recovered in an air-conditioned building. Coefficients to compare:',
    },
    {
      type: 'bullets',
      items: [
        'τvis: visible light transmission (to maximise).',
        'SHGC (CGS): solar heat gain coefficient, total heat transmission; SC = 0.87 × SHGC: shading coefficient versus 5 mm clear glass (to minimise).',
        'Ke = τvis / SC: light efficiency. The higher it is, the more the glass lights without heating.',
      ],
    },
    {
      type: 'table',
      headers: ['Glazing (table 6.16)', 'τvis', 'SHGC', 'SC', 'Ke'],
      rows: [
        ['Single clear 5 mm', '0.89', '0.83', '0.96', '0.93'],
        ['Clear + selective coating', '0.70', '0.45', '0.50', '1.40'],
        ['Clear + grey selective coating', '0.40', '0.38', '0.44', '0.91'],
      ],
    },
    fig('p179_1', 'Table 6.16 — properties of commercial glazing'),
    { type: 'formula', text: 'Recommended window-to-wall ratio: 1/3 on North and South facades, 1/4 on East and West facades' },

    { type: 'heading', text: 'Lighting: a double win' },
    {
      type: 'text',
      text: 'Every watt of lighting becomes a watt of heat the air conditioner must remove: saving on lighting therefore also saves on cooling. Light to the level required by the activity, with the most efficient lamps.',
    },
    fig('p175_0', 'Figure 6.11 — illuminance required by activity (lux)'),
    {
      type: 'table',
      headers: ['Lamp (table 6.12)', 'Efficacy (lm/W)', 'Lifetime (h)'],
      rows: [
        ['Standard incandescent', '5 – 17', '1,000 – 3,000'],
        ['Halogen', '18 – 25', '1,000 – 3,000'],
        ['Fluorescent straight or U tube', '65 – 110', '7,500 – 20,000'],
        ['Compact fluorescent', '25 – 55', '7,500 – 20,000'],
        ['High-pressure sodium', '45 – 110', '7,500 – 40,000'],
      ],
    },
    fig('p177_0', 'Table 6.13 — heat generated per 1,000 lumens: 57 W incandescent, 12 to 15 W fluorescent'),
    fig('p175_1', 'Table 6.11 — lighting power densities (W/m²): 10.5 for offices'),

    { type: 'heading', text: 'Ratios to judge a building' },
    fig('p177_1', 'Table 6.14 — usual, average and target heat gains by item'),
    { type: 'formula', text: 'Ro = Annual electricity consumption (kWh) / Conditioned area (m²)' },
    {
      type: 'table',
      headers: ['Building (Ivorian code, table 6.18)', 'Reference Ro (kWh/m².yr)'],
      rows: [
        ['Large office building', '160'],
        ['Small office building', '150'],
        ['Large hotel', '180'],
        ['Hospital', '250'],
        ['Shopping centre', '200'],
        ['Apartment (large building)', '130'],
      ],
    },
    fig('p181_0', 'Table 6.18 — ratios proposed by the Ivorian energy quality code'),
    {
      type: 'note',
      text: 'To convince a client, add financial ratios to Ro: operating cost per m² per year, construction cost per m². Investing in insulation, solar protection or selective glazing is justified by operating savings.',
    },
    { type: 'heading', text: "Exercises" },
    {
      type: 'exercise',
      question: "A West facade and a North facade each measure 30 m² (walls). What maximum glazed area do you recommend on each?",
      solution: [
        "North facade (WWR 1/3): 30 / 3 = 10 m² of windows maximum.",
        "West facade (WWR 1/4): 30 / 4 = 7.5 m² maximum — and well protected (vertical fins, external blinds).",
      ],
    },
    {
      type: 'exercise',
      question: "10 m² of glazing receive 400 W/m² of sun. Compare clear glazing (SHGC 0.83) and selective glazing (SHGC 0.45). What electrical saving with a COP of 2.5?",
      solution: [
        "Clear: 0.83 × 10 × 400 = 3,320 W; selective: 0.45 × 10 × 400 = 1,800 W.",
        "Cooling load avoided: 1,520 W.",
        "Electricity saved: 1,520 / 2.5 ≈ 610 W during sunny hours — while keeping 70 % of the light.",
      ],
    },
    {
      type: 'exercise',
      question: "A 2,000 m² air-conditioned office building uses 400,000 kWh/yr. Is it efficient?",
      solution: [
        "Ro = 400,000 / 2,000 = 200 kWh/m².yr.",
        "Ivorian code reference for a large office building: 160 kWh/m².yr → +25 %. Look for savings: setpoint, solar protection, lighting, maintenance.",
      ],
    },
  ],
};
