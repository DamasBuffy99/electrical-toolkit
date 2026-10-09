import { TopicContent } from '../../../types';
import { fig } from '../fig';

export const climHeatGainsContent: TopicContent = {
  title: 'Heat gains, one by one',
  subtitle: 'Walls, sun, fresh air, occupants, lighting, appliances: the formula for each',
  blocks: [
    {
      type: 'text',
      text: 'The heat balance is the sum of all the heat entering the room at the most unfavourable hour. The air conditioner must remove exactly that heat. There are two families of gains:',
    },
    {
      type: 'bullets',
      items: [
        'External gains: they come from outside — through the walls (conduction), from the sun (radiation) and with the fresh air entering.',
        'Internal gains: they are produced in the room — occupants, lighting, computers and other appliances.',
      ],
    },
    { type: 'illustration', name: 'clim-heat-gains', caption: 'The 7 heat sources of an air-conditioned room' },
    {
      type: 'text',
      text: 'Each gain has a sensible part (QS, it heats the air) and sometimes a latent part (QL, it humidifies the air). The two add up:',
    },
    { type: 'formula', text: 'QT = QS + QL   (total balance, W)' },

    { type: 'heading', text: '1 · Transmission through the walls' },
    {
      type: 'text',
      text: 'Heat goes through walls, roof, floor, doors and windows because it is hotter on one side than the other. The larger the wall, the poorer its insulation and the bigger the temperature difference, the larger the flow:',
    },
    { type: 'formula', text: 'QStr = k × S × Δθ   (W)' },
    {
      type: 'bullets',
      items: [
        'k: heat transfer coefficient of the wall (W/m².°C) — table 1.9. The smaller it is, the better the wall insulates.',
        'S: wall area (m²). For a wall, the window and door areas are subtracted and calculated separately.',
        'Δθ: temperature difference between the two faces (°C) — table 1.10.',
      ],
    },
    { type: 'illustration', name: 'clim-heat-gains', props: { focus: 'external' }, caption: 'External gains (1 to 4)' },
    { type: 'subheading', text: 'Calculating k for a wall' },
    { type: 'formula', text: 'k = 1 / ( 1/he + Σ e/λ + 1/hi )' },
    {
      type: 'text',
      text: 'he and hi are the outer and inner surface coefficients (table 1.7), e the thickness of each layer (m) and λ its conductivity (W/m.°C, table 1.6). In practice, k is read directly in table 1.9 for common walls.',
    },
    fig('p023_0', 'Table 1.7 — surface heat transfer coefficients he and hi'),
    fig('p022_0', 'Table 1.6 — properties of local building materials (λ, density, specific heat)'),
    {
      type: 'table',
      headers: ['Wall (table 1.9)', 'k (W/m².°C)'],
      rows: [
        ['20 cm hollow block, rendered both sides', '2.09'],
        ['10 cm hollow block, rendered both sides', '2.37'],
        ['Solid wooden door (2.5 cm)', '3.94'],
        ['Single glazing, wooden frame', '5.0'],
        ['Single glazing, metal frame', '5.8'],
        ['Double glazing', '3.3 to 4.0'],
        ['Corrugated galvanised sheet, no ceiling', '9.28'],
      ],
    },
    fig('p029_0', 'Table 1.9 — overall k coefficients of walls, roofs and glazing'),
    { type: 'subheading', text: 'The temperature difference Δθ' },
    {
      type: 'table',
      headers: ['Type of wall (table 1.10)', 'Δθ'],
      rows: [
        ['External wall', 'θe − θi'],
        ['Wall next to a non-conditioned room', 'θe − θi − 3 °C'],
        ['Ceiling under a ventilated attic', 'θe − θi + 3 °C'],
        ['Ceiling under a non-ventilated attic', 'θe − θi + 12 °C'],
        ['Slab on grade', '20 °C − θi'],
        ['Wall next to a kitchen', 'θe − θi + 18 °C'],
      ],
    },
    fig('p030_0', 'Table 1.10 — temperature difference according to the wall position'),

    { type: 'heading', text: '2 · Sun on walls and roof' },
    {
      type: 'text',
      text: 'A sunlit wall absorbs part of the radiation and passes a fraction of it inside. It depends on the wall colour and insulation:',
    },
    { type: 'formula', text: 'QSRm = α × F × S × Rm   (W)' },
    {
      type: 'bullets',
      items: [
        'α: absorption coefficient, linked to colour — 0.4 very light (white), 0.7 dark (brick, wood), 0.9 very dark (slate, bitumen).',
        'F: solar radiation factor, linked to k — 0 for k = 0; 0.05 for k = 1; 0.10 for k = 2; 0.15 for k = 3; 0.20 for k = 4.',
        'Rm: intensity of the radiation on the wall (W/m²) by orientation and hour — table 1.14.',
      ],
    },
    fig('p030_1', 'Table 1.11 — absorption coefficient α by colour'),
    fig('p030_2', 'Table 1.12 — radiation factor F as a function of k'),
    { type: 'note', text: 'Painting a wall white instead of a dark colour almost halves this gain (0.4 instead of 0.7): the cheapest saving there is.' },

    { type: 'heading', text: '3 · Sun through the glazing' },
    {
      type: 'text',
      text: 'Glass lets the radiation straight through: it is often the largest gain in a glazed office. Blinds and shading strongly reduce this flow:',
    },
    { type: 'formula', text: 'QSRv = α × g × S × Rv   (W)' },
    {
      type: 'bullets',
      items: [
        'α: 1 for single glazing, 0.9 for double, 0.8 for triple.',
        'g: reduction factor of the solar protection (table 1.13).',
        'S: glazed area (m²); Rv: radiation on the glazing (W/m², table 1.14).',
      ],
    },
    {
      type: 'table',
      headers: ['Protection (table 1.13)', 'g'],
      rows: [
        ['External ecru fabric blind', '0.28'],
        ['External aluminium fabric blind', '0.22'],
        ['External louvres lowered', '0.22'],
        ['Internal blind lowered (aluminium)', '0.45'],
        ['Internal louvres lowered', '0.58'],
        ['Internal blind half lowered', '0.63'],
      ],
    },
    fig('p031_0', 'Table 1.13 — reduction factor g of protected windows'),
    { type: 'note', text: 'External protection is twice as effective as internal protection: it stops the sun before it hits the glass.' },
    fig('p031_1', 'Table 1.14a — radiation on walls (m) and glazing (v) at 4° North in February, hour by hour'),

    { type: 'heading', text: '4 · Fresh air and infiltration' },
    {
      type: 'text',
      text: 'The outdoor air coming in (ventilation or leaks) must be cooled AND dried. In a humid climate it is often the main latent load:',
    },
    { type: 'formula', text: 'Sensible: QSr = qv × (θe − θi) × 0.33   (W)' },
    { type: 'formula', text: 'Latent: QLr = qv × (ωe − ωi) × 0.84   (W, ω in g of water / kg of dry air)' },
    {
      type: 'bullets',
      items: [
        'qv: fresh-air flow (m³/h). With natural ventilation, count 1 room volume per hour.',
        'With mechanical ventilation, use the required flow per person (table 1.15): 18 m³/h per person in a non-smoking office, 25 for smokers.',
        'θe, θi: outdoor and indoor design temperatures; ωe, ωi: the corresponding moisture contents.',
      ],
    },
    fig('p033_0', 'Table 1.15 — fresh air per person and occupancy density by type of room'),

    { type: 'heading', text: '5 · Occupants' },
    { type: 'illustration', name: 'clim-heat-gains', props: { focus: 'internal' }, caption: 'Internal gains (5 to 7)' },
    { type: 'formula', text: 'QSoc = n × CSoc   ;   QLoc = n × CLoc   (W)' },
    {
      type: 'text',
      text: 'A person gives off sensible heat (skin) and latent heat (sweat, breathing), depending on activity and room temperature. For an office worker at 26 °C: about 63 W sensible and 59 W latent. Table values are for an adult man; reduce by 20 % for women, 20 to 40 % for children and 10 % for a mixed public.',
    },
    fig('p034_0', 'Table 1.16 — heat given off by people by activity'),
    { type: 'note', text: 'The number of occupants n comes from the area and the density of table 1.15: 0.10 person/m² for offices, 0.67 for a classroom.' },

    { type: 'heading', text: '6 · Lighting' },
    { type: 'formula', text: 'Fluorescent: Qlight = 1.25 × P   ;   Incandescent: Qlight = P   (W)' },
    {
      type: 'text',
      text: 'All the electricity of a lamp ends up as heat in the room. For fluorescent tubes, add 25 % for the ballast. If the installed power is unknown, use a density in W/m² (table 1.17): 16 W/m² with fluorescent in an office, 65 W/m² with incandescent.',
    },
    fig('p035_0', 'Table 1.17 — heat given off by lighting (W/m²)'),

    { type: 'heading', text: '7 · Machines and appliances' },
    {
      type: 'text',
      text: 'Each appliance releases its power as sensible heat, sometimes latent (coffee maker, cooking). Since they do not all run continuously, a usage factor is applied: a computer counts 100 %, a photocopier 20 %, a coffee maker 25 %.',
    },
    { type: 'formula', text: 'Qequip = Σ (Power × usage factor)' },
    fig('p035_1', 'Table 1.18 — electrical and gas appliances: sensible and latent heat'),

    { type: 'heading', text: 'The total: capacity and dehumidification' },
    { type: 'formula', text: 'QS = transmission + sun on walls + sun through glazing + fresh air (S) + occupants (S) + lighting + appliances (S)' },
    { type: 'formula', text: 'QL = fresh air (L) + occupants (L) + appliances (L)' },
    { type: 'formula', text: 'Air conditioner cooling capacity = QT = QS + QL' },
    {
      type: 'bullets',
      items: [
        'The latent load QL is the dehumidification capacity the unit needs in a humid tropical country.',
        'Power drawn by the compressor: Pa = Pf / COP (COP ≈ 2 to 2.5 for a packaged unit or a split).',
        'Safety factor: 0 to 5 % maximum. Beyond that, you oversize.',
      ],
    },
    { type: 'note', text: 'Choose a unit with a capacity equal to or slightly above the balance (e.g. 2.5 kW for 2.3 kW calculated). If the gap is small, the model just below can also be taken (2.5 kW for 2.7 kW calculated): the balance corresponds to the hottest hour, which does not last.' },
  ],
};
