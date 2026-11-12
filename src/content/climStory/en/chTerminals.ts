import { TopicContent } from '../../types';
import { fig } from '../../topics/clim/fig';

export const chTerminalsContent: TopicContent = {
  title: 'Fan coils, air handling units and operation',
  subtitle: 'Chilled water reaches every room. Ousmane chooses the fan coils for silence, links them to the key card, treats the fresh air of the rooms, halls and kitchen, protects the hot water against legionella, then hands Félix the indicators that will tell him whether his plant is ageing well.',
  blocks: [
    { type: 'scene', text: 'Month 14 · Hotel handover, with Nadia Haddad and Félix Amoussou' },
    {
      type: 'objectives',
      items: [
        'Choose a fan coil: total and sensible capacity, water flow, noise.',
        'Cut room consumption with key cards and window contacts.',
        'Treat the air of the large rooms and the kitchen.',
        'Prevent legionella risk.',
        'Track a plant’s performance with a few indicators.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '2.1 kW', label: 'room fan coil, medium speed' },
        { value: 'NR 28', label: 'sound level in the room' },
        { value: '≈ − 28 %', label: 'room energy saved by the key card' },
        { value: '≈ 0.9 kW/TR', label: 'plant performance target' },
        { value: '≈ 890 FCFA', label: 'of cooling per room-night' },
      ],
    },

    { type: 'heading', text: '1 · The room fan coil' },
    fig('p119_1', 'Figure 5.14 of the IEPF guide — integrating a fan coil in a hotel room: entrance false ceiling, blowing towards the window'),
    {
      type: 'calc',
      title: 'Catalogue selection (lagoon-side room)',
      steps: [
        { label: 'Room need (heat load sheet, with margin)', formula: 'Q = 1.85 kW, sensible ≈ 1.36 kW' },
        { label: '“Size 2” model, medium speed, water 7/12 °C', formula: 'Q_{tot} = 2.1 kW   ;   Q_{sens} = 1.6 kW   ;   340 m³/h   ;   NR 28' },
        { label: 'Same model at high speed', formula: 'Q_{tot} = 2.6 kW but NR 35: too noisy to sleep' },
        { label: 'Water flow set on the pressure-independent valve', formula: 'q_v = \\frac{0.86 × 2.1}{5} ≈ 0.36 m³/h' },
      ],
      result: 'Size 2 ducted fan coil, selected at medium speed: high speed stays as a reserve for pull-down',
    },
    fig('p074_0', 'Table 3.1 of the guide — recommended noise levels: hotel rooms among the most demanding'),
    {
      type: 'decision',
      title: 'Room terminals',
      choice: 'Ducted fan coil in the entrance false ceiling, selected at medium speed, blowing towards the window, return below the false ceiling',
      reasons: [
        'The machine noise stays in the entrance, away from the bed; the jet runs along the ceiling to the window, where the heat comes in.',
        'Selecting at medium speed guarantees silence at night, with spare capacity in the daytime.',
        'Maintenance access through a hatch in the room’s entrance, without disturbing the guest.',
      ],
      rejected: 'Exposed wall-mounted fan coil: cheaper, but noisy near the bed and unattractive for a hotel of this class.',
    },

    { type: 'heading', text: '2 · The key card and the balcony' },
    {
      type: 'table',
      headers: ['Room state', 'Fan coil', 'Set point'],
      rows: [
        ['Unsold (reception)', 'off, valve closed', '—'],
        ['Sold, guest out (card removed)', 'low speed', '28 °C, humidity limited'],
        ['Guest present', 'automatic', '24 to 26 °C, guest’s choice'],
        ['Balcony door open (contact)', 'off after 1 min', 'avoids cooling… the lagoon'],
      ],
    },
    {
      type: 'calc',
      title: 'Saving from key-card management',
      steps: [
        { label: 'Unsold rooms: 20 % of the time, air conditioning off', formula: 'saving ≈ 20 %' },
        { label: 'Sold rooms, guests out ≈ 40 % of the day, set point raised to 28 °C (≈ − 25 % during those hours)', formula: 'saving ≈ 0.8 × 0.4 × 0.25 ≈ 8 %' },
      ],
      result: 'About 28 % less energy on the rooms, which account for nearly 60 % of the hotel’s cooling',
    },
    {
      type: 'note',
      text: 'The balcony-door contact is no gimmick: an open balcony on a 24 °C room lets in 32 °C air saturated with water, which condenses on the coil, overflows the tray and stains the ceiling. It is the first cause of technical complaints in seaside hotels.',
    },

    { type: 'heading', text: '3 · Fresh air, large rooms and kitchen' },
    {
      type: 'table',
      headers: ['Zone', 'Treatment', 'Key points'],
      rows: [
        ['Rooms', 'fresh-air unit 3,600 m³/h, air dried to 9.5 g/kg, 30 m³/h per room', 'constant-flow regulators; extract through the bathroom'],
        ['Lobby', 'constant-volume AHU, recirculation + fresh air', 'slight overpressure: no hot air through the doors'],
        ['Restaurant', 'AHU 6,000 m³/h, fresh air by CO₂', 'overpressure relative to the kitchen: smells stay in the kitchen'],
        ['Conference', 'AHU 5,000 m³/h, fresh air by CO₂ (150 to 3,750 m³/h)', 'coil sized for a low SHR (≈ 0.3)'],
        ['Kitchen', 'not air-conditioned: hoods 8,000 m³/h, filtered make-up air, spot cooling at workstations', '20 % of the make-up air comes from the restaurant'],
      ],
    },
    fig('p118_0', 'Figures 5.10 and 5.11 of the guide — operation and view of a fan coil'),
    { type: 'fiche', id: 'abc-airside', why: 'AHUs, rooftops, free cooling, filtration and fans.' },

    { type: 'heading', text: '4 · Legionella and hot water' },
    {
      type: 'bullets',
      items: [
        'Hot water stored at 60 °C at least, distribution loop at 55 °C, return never below 50 °C.',
        'Unoccupied rooms: taps and showers run weekly to avoid stagnant water.',
        'Fan-coil condensate trays sloped, cleaned and disinfected once a year.',
        'No cooling tower: the main legionella reservoir of an air-conditioning plant was ruled out at design stage.',
        'Written thermal-shock procedure (70 °C) in case of a positive test.',
      ],
    },
    { type: 'fiche', id: 'abc-special', why: 'Chilled beams, clean rooms, data centres and legionnaires’ disease.' },

    { type: 'heading', text: '5 · Running and monitoring the plant' },
    {
      type: 'calc',
      title: 'What the hotel’s cooling costs',
      steps: [
        { label: 'Chiller electricity (annual cooling ÷ seasonal efficiency)', formula: '\\frac{1 025 000}{4.6} ≈ 223 000 kWh' },
        { label: 'Pumps, AHUs and fan coils', formula: '≈ 60 000 kWh' },
        { label: 'Annual cost at 110 FCFA/kWh', formula: '283 000 × 110 ≈ 31 million FCFA' },
        { label: 'Room-nights per year (120 rooms, 80 % occupancy)', formula: '120 × 0.8 × 365 ≈ 35 000   →   ≈ 890 FCFA of cooling per room-night' },
      ],
      result: 'Cooling costs under 900 FCFA per room-night: a figure Nadia can track every month',
    },
    {
      type: 'table',
      headers: ['Indicator', 'Target value', 'What a drift signals'],
      rows: [
        ['Electrical kW per TR of cooling (plant)', '≈ 0.9 to 1.1', 'fouled condensers, poor sequencing'],
        ['Chilled-water supply / return difference', '≈ 5 K', '< 3 K: faulty valves or terminals (low ΔT)'],
        ['Running hours per chiller', 'balanced', 'rotation not done, one chiller wears faster'],
        ['Cooling consumption per room-night', 'stable for the same season', 'balcony doors, bypassed key cards'],
        ['Electric back-up for hot water', 'low', 'recovery on the lead chiller out of service'],
      ],
    },
    {
      type: 'decision',
      title: 'Operation',
      choice: 'Preventive maintenance contract, plant monitoring with these five indicators, and a monthly report to management',
      reasons: [
        'A well-designed plant loses 15 to 25 % of its performance within a few years without monitoring.',
        'The indicators turn technical facts into management figures Nadia understands.',
        'Félix and his team were trained during commissioning: they can read trends and react.',
      ],
      rejected: 'Fix-when-broken maintenance: cheaper the first year, dearer every year after.',
    },
    { type: 'fiche', id: 'clim-operating-costs', why: 'Operating costs, efficiency and maintenance.' },
    { type: 'fiche', id: 'abc-commissioning', why: 'Commissioning and reference readings.' },

    { type: 'heading', text: '6 · What the standards say' },
    {
      type: 'norms',
      title: 'Terminals, hygiene and operation',
      rows: [
        { norm: 'EN 1397', rule: 'Testing of water fan coils: total and sensible capacity, airflow, noise.', result: 'reliable catalogue data' },
        { norm: 'Eurovent / AHRI 440', rule: 'Certification of fan-coil performance.', result: 'certified capacities' },
        { norm: 'ASHRAE 188 / EN 806', rule: 'Legionella risk management and drinking-water installations.', result: '60 °C storage, 50 °C return' },
        { norm: 'ISO 50001 / ASHRAE 100', rule: 'Energy management, indicators and continuous improvement.', result: 'kW/TR and kWh per room-night tracked' },
      ],
    },
    {
      type: 'regional',
      text: 'In the region’s hotels, the key card is often bypassed with a business card slipped into the reader. Ousmane has readers installed that only recognise the hotel’s cards, and the BMS compares consumption per room: a room “always occupied” while reception shows it free stands out immediately.',
    },

    { type: 'heading', text: '7 · The air-conditioning journey in review' },
    {
      type: 'table',
      headers: ['Project', 'What it added'],
      rows: [
        ['1 · Mensah villa', 'comfort, design conditions, room-by-room load, split selection, inverter, R32, installation and commissioning'],
        ['2 · Tropica cold room', 'products and doors, running time, pressure–enthalpy chart, compressor rack, refrigerants, troubleshooting and safety devices'],
        ['3 · Kora offices', 'zones and façades, diversity, VRF, A2L safety, dehumidified fresh air and recovery, ducts, diffusers, BMS'],
        ['4 · Lagune Bleue hotel', 'N+1 chilled-water plant, chillers, hydronic network, fan coils, key card, recovered hot water, operation'],
      ],
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'A fan coil is selected at medium speed, on total and sensible capacity, with a sound level suited to the room.',
        'Key cards and window contacts: the air conditioning only works when someone benefits.',
        'Large rooms: AHUs with fresh air by CO₂; kitchen: ventilated, compensated, not air-conditioned.',
        'Legionella: hot water at 60 °C, no stagnant water, no tower if it can be avoided.',
        'A plant is run with indicators: kW/TR, temperature difference, cost per room-night.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'A fan coil delivers 2.1 kW at 340 m³/h. Air enters at 26 °C; at what temperature does it leave if its sensible capacity is 1.6 kW?',
      solution: ['Δθ = Q_S / (0.34 × q) = 1,600 / (0.34 × 340) ≈ 13.8 °C.', 'The air leaves at about 12 °C: cold enough to dry the air, hence the condensate in the tray.'],
    },
    {
      type: 'exercise',
      question: 'The plant draws 52 kW of electricity to produce 150 kW of cooling. What kW/TR figure? Is it good?',
      solution: ['150 kW = 150 / 3.517 ≈ 42.7 TR.', '52 / 42.7 ≈ 1.22 kW/TR: above the target (0.9 to 1.1). Check condenser fouling and chiller sequencing.'],
    },
  ],
};
