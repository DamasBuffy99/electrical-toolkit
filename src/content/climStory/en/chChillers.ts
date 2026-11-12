import { TopicContent } from '../../types';
import { fig } from '../../topics/clim/fig';

export const chChillersContent: TopicContent = {
  title: 'The chillers',
  subtitle: 'Three 150 kW chillers, but which ones? Air-cooled or water-cooled, at what water temperature, with what seasonal efficiency? Ousmane compares the bids with Félix, calculates the water flows and turns the heat rejected by the chillers into hot water for the rooms.',
  blocks: [
    { type: 'scene', text: 'Month 3 · Bid analysis, with Félix Amoussou and Clarisse Houndé' },
    {
      type: 'objectives',
      items: [
        'Choose between an air-cooled chiller and a water-cooled chiller with a cooling tower.',
        'Choose the chilled-water regime (7/12 °C) and derive the flows.',
        'Compare chillers by their EER and seasonal efficiency.',
        'Recover chiller heat for domestic hot water.',
        'Read the equipment schedule of a cooling plant.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '7 / 12 °C', label: 'chilled-water regime' },
        { value: '25.8 m³/h', label: 'water flow per 150 kW chiller' },
        { value: 'EER 3.1', label: 'at 35 °C; seasonal efficiency ≈ 4.6' },
        { value: '≈ 536 kWh/day', label: 'of hot water recovered from the chillers' },
        { value: '≈ 170 kW', label: 'electrical for the whole plant' },
      ],
    },

    { type: 'heading', text: '1 · Air-cooled or water-cooled?' },
    fig('p136_0', 'Figures 5.26 and 5.27 of the IEPF guide — air-cooled and water-cooled condensing units'),
    fig('p138_0', 'Figures 5.30 and 5.31 — air-cooled condenser and cooling tower'),
    {
      type: 'calc',
      title: 'What a cooling tower would consume',
      steps: [
        { label: 'Heat to reject: cooling produced + compressor work', formula: 'Q_k ≈ 293 × 1.25 ≈ 366 kW at peak' },
        { label: 'Water evaporated in the tower (latent heat ≈ 2,450 kJ/kg)', formula: '\\frac{366}{2 450} ≈ 0.15 kg/s ≈ 0.54 m³/h' },
        { label: 'With blowdown (×1.3) over 14 peak hours', formula: '≈ 0.7 × 14 ≈ 10 m³ of water per day' },
      ],
      result: 'About 10 m³ of treated water a day, plus a legionella risk to manage permanently',
    },
    {
      type: 'decision',
      title: 'Chiller type',
      choice: 'Air-cooled chillers, scroll compressors, R32 refrigerant, installed on a plant terrace on the city side',
      reasons: [
        'No tower: no water consumption, no chemical treatment, no legionella next to a hotel.',
        'Simple installation and maintenance, skills available locally.',
        'The R32 stays outdoors, in the chillers: no charge constraint inside the building.',
      ],
      rejected: 'Water-cooled chillers with an open tower: EER of 5 to 6 instead of 3, but 10 m³ of water a day, a health risk and heavy maintenance.',
    },

    { type: 'heading', text: '2 · Water regime and flows' },
    {
      type: 'text',
      text: 'Water leaves the chillers at 7 °C and comes back at 12 °C. Why so cold? To dehumidify, a fan coil’s coil must be colder than the room dew point (about 15 °C at 26 °C and 50 %). With 7 °C water, the fin surface drops to around 10 to 12 °C: moisture condenses. With 12 °C water, the air would be cooled without being dried.',
    },
    { type: 'formula', text: 'q_v (m³/h) = \\frac{P (kW) × 3 600}{ρ × c_p × Δθ} ≈ \\frac{0.86 × P}{Δθ}' },
    {
      type: 'calc',
      title: 'Chilled-water flows',
      steps: [
        { label: 'One 150 kW chiller, 5 K difference', formula: 'q_v = \\frac{0.86 × 150}{5} ≈ 25.8 m³/h' },
        { label: 'Plant at its diversified peak (293 kW)', formula: 'q_v = \\frac{0.86 × 293}{5} ≈ 50 m³/h' },
        { label: 'One bedroom fan coil (1.85 kW)', formula: 'q_v = \\frac{0.86 × 1.85}{5} ≈ 0.32 m³/h' },
      ],
      result: '25.8 m³/h per chiller, 50 m³/h in the network at peak, 0.32 m³/h per room',
    },
    {
      type: 'note',
      text: 'The “low ΔT syndrome” threatens badly tuned plants: if water returns at 9 °C instead of 12 °C (valves wide open, fouled terminals), the difference falls to 2 K and 2.5 times more flow is needed for the same capacity. The pumps consume more and the chillers are never fully loaded.',
    },

    { type: 'heading', text: '3 · Comparing the bids' },
    {
      type: 'table',
      headers: ['Data', 'Bid A', 'Bid B', 'Comment'],
      rows: [
        ['Capacity at 35 °C, water 12/7 °C', '150 kW', '152 kW', 'equivalent'],
        ['Full-load EER', '3.1', '2.8', 'advantage A'],
        ['Seasonal efficiency (SEER, EN 14825)', '4.6', '3.9', 'this is what counts: the plant mostly runs at part load'],
        ['Capacity at 40 °C outdoors', '139 kW', '135 kW', 'the 3 chillers still cover 293 kW'],
        ['Sound level at 10 m', '62 dB(A)', '58 dB(A)', 'advantage B, no nuisance on the city side'],
        ['Price', '1.00', '0.90', 'advantage B'],
      ],
    },
    {
      type: 'calc',
      title: 'Operating cost over 15 years',
      steps: [
        { label: 'Cooling produced per year: 293 kW × 3,500 equivalent full-load hours', formula: 'E_c ≈ 1 025 000 kWh of cooling' },
        { label: 'Electricity with bid A (SEER 4.6) and bid B (SEER 3.9)', formula: 'E_A ≈ 223 000 kWh   ;   E_B ≈ 263 000 kWh' },
        { label: 'Annual difference at 110 FCFA/kWh', formula: '40 000 × 110 ≈ 4.4 million FCFA per year' },
      ],
      result: 'Over 15 years, bid A saves about 66 million FCFA: far more than the purchase price difference',
    },
    {
      type: 'decision',
      title: 'Chiller choice',
      choice: 'Bid A (SEER 4.6), with the “low noise” fan option',
      reasons: [
        'Seasonal efficiency, measured at part load, decides the bill for 15 years.',
        'The acoustic option (fans slowed at night) brings bid A close to bid B on noise.',
      ],
      rejected: 'Bid B: 10 % cheaper, but 18 % more electricity every year.',
    },
    { type: 'fiche', id: 'abc-compressors', why: 'Compressor technologies and capacity control.' },
    { type: 'fiche', id: 'clim-operating-costs', why: 'Operating costs, efficiency and maintenance.' },

    { type: 'heading', text: '4 · Turning rejected heat into hot water' },
    {
      type: 'calc',
      title: 'Hotel domestic hot water',
      steps: [
        { label: 'Need: 120 rooms, 2 guests, 60 L at 60 °C per person per day', formula: 'V = 120 × 2 × 60 ≈ 14.4 m³/day' },
        { label: 'Energy to heat the water from 28 to 60 °C', formula: 'E = \\frac{14 400 × 4.186 × 32}{3 600} ≈ 536 kWh/day' },
        { label: 'Desuperheater on the lead chiller (≈ 15 % of the rejected heat)', formula: 'P_{rec} ≈ 0.15 × 200 ≈ 30 kW   →   18 h of operation are enough' },
        { label: 'Annual saving, compared with electric water heaters', formula: '536 × 365 × 110 ≈ 21.5 million FCFA per year' },
      ],
      result: 'The heat the chillers used to throw away now heats almost all the rooms’ water',
    },
    {
      type: 'decision',
      title: 'Hot-water production',
      choice: 'Desuperheater on the lead chiller, storage tanks at 60 °C, electric back-up for low-load days',
      reasons: [
        'The energy is free: it was being lost to the air.',
        'The lead chiller runs almost constantly in a hotel: recovery is available when it is needed.',
        'Storage at 60 °C protects against legionella, with back-up to guarantee the temperature.',
      ],
      rejected: '120 individual electric water heaters: 536 kWh a day on the grid or the generator, and 120 appliances to maintain.',
    },
    { type: 'fiche', id: 'abc-heatpumps', why: 'Heat pumps, recovery and seasonal performance.' },

    { type: 'heading', text: '5 · The plant equipment schedule' },
    {
      type: 'equipmentSchedule',
      schedule: {
        title: 'Lagune Bleue cooling plant',
        project: 'Lagune Bleue hotel',
        conditions: 'water 12/7 °C, air 35 °C (EN 14511)',
        rows: [
          { tag: 'CH-1', location: 'Plant terrace', type: 'Air-cooled chiller, scroll R32, desuperheater', cooling: 150, refrigerant: 'R32', supply: '400 V 3~ 50 Hz', power: 48.4, current: 82, protection: 'MCCB 125 A', note: 'lead chiller, hot-water recovery' },
          { tag: 'CH-2', location: 'Plant terrace', type: 'Air-cooled chiller, scroll R32', cooling: 150, refrigerant: 'R32', supply: '400 V 3~ 50 Hz', power: 48.4, current: 82, protection: 'MCCB 125 A', note: 'weekly rotation' },
          { tag: 'CH-3', location: 'Plant terrace', type: 'Air-cooled chiller, scroll R32', cooling: 150, refrigerant: 'R32', supply: '400 V 3~ 50 Hz', power: 48.4, current: 82, protection: 'MCCB 125 A', note: 'standby (N+1)' },
          { tag: 'PP-1/2/3', location: 'Pump room', type: '3 primary pumps 25.8 m³/h', cooling: 0, supply: '400 V 3~ 50 Hz', power: 3.3, current: 6.3, protection: '3 × MPCB 2.5–4 A', note: 'one per chiller' },
          { tag: 'PS-1/2', location: 'Pump room', type: 'Secondary pumps 50 m³/h, VSD', cooling: 0, supply: '400 V 3~ 50 Hz', power: 5.5, current: 10.5, protection: 'MPCB + drive', note: '1 duty, 1 standby' },
          { tag: 'AHU-1/2/3', location: 'Technical attic', type: 'AHUs lobby, restaurant, conference (chilled water)', cooling: 0, airflow: 11000, supply: '400 V 3~ 50 Hz', power: 9.0, current: 16.5, protection: '3 × MPCB', note: 'conference: airflow by CO₂' },
          { tag: 'FAU-RM', location: 'Roof', type: 'Room fresh-air unit 3,600 m³/h, heat pipe', cooling: 0, airflow: 3600, supply: '400 V 3~ 50 Hz', power: 2.0, current: 3.8, protection: 'MPCB', note: 'dried air to the 120 rooms' },
        ],
      },
    },
    {
      type: 'calc',
      title: 'Reading the bottom of the schedule',
      steps: [
        { label: 'Electrical power of the equipment running at full load (without the standby pump)', formula: '3 × 48.4 + 3.3 + 5.5 + 9.0 + 2.0 ≈ 165 kW' },
        { label: 'Overall plant efficiency at full load', formula: '\\frac{450}{165} ≈ 2.7' },
      ],
      result: 'Awa keeps her 180 kW reserved at the standby main board, with an 8 % margin',
    },

    { type: 'heading', text: '6 · What the standards say' },
    {
      type: 'norms',
      title: 'Performance and health safety',
      rows: [
        { norm: 'EN 14511 / EN 14825', rule: 'Full-load EER and seasonal efficiency (SEER) of chillers.', result: 'EER 3.1; SEER 4.6' },
        { norm: 'AHRI 550/590', rule: 'Chiller performance; IPLV (weighted part-load efficiency).', result: 'SEER equivalent' },
        { norm: 'ASHRAE 90.1', rule: 'Minimum efficiencies of air- and water-cooled chillers, at full and part load.', result: 'bid A compliant' },
        { norm: 'ASHRAE 188 / WHO guidance', rule: 'Legionella risk management: towers, hot water ≥ 60 °C in storage, ≥ 50 °C at outlets.', result: 'no tower; hot water at 60 °C' },
      ],
    },
    {
      type: 'regional',
      text: 'On a terrace exposed to sun and sea air, chillers lose capacity and age quickly: Ousmane places them on the city side, under a canopy that lets the air through, with corrosion-protected coils. He also asks for an operating range up to 46 °C and a maintenance contract with the manufacturer’s local distributor.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'Air-cooled chiller: simple, no water; water-cooled with a tower: better efficiency, but water, treatment and legionella.',
        '7/12 °C regime to be able to dehumidify; flow q_v ≈ 0.86 × P / Δθ.',
        'Compare chillers on seasonal efficiency, not just nominal EER.',
        'Heat rejected by the chillers can produce domestic hot water.',
        'The equipment schedule gives the electrical designer the plant’s electrical power.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'The regime becomes 6/12 °C (6 K difference). What flow for a 150 kW chiller? What is the benefit?',
      solution: ['q_v = 0.86 × 150 / 6 ≈ 21.5 m³/h instead of 25.8.', '17 % less flow: smaller pumps and pipes, but the chillers produce colder water, so with a slightly lower EER.'],
    },
    {
      type: 'exercise',
      question: 'In operation, water returns at 9.5 °C instead of 12 °C. What flow is needed to carry 293 kW?',
      solution: ['Δθ = 9.5 − 7 = 2.5 K.', 'q_v = 0.86 × 293 / 2.5 ≈ 101 m³/h: double the design flow. The pumps can’t keep up, some rooms lack cooling: valves and balancing must be corrected.'],
    },
  ],
};
