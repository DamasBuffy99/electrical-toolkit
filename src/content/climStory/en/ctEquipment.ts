import { TopicContent } from '../../types';
import { fig } from '../../topics/clim/fig';

export const ctEquipmentContent: TopicContent = {
  title: 'Compressors, evaporators and refrigerants',
  subtitle: 'The cycle is drawn; now machines are needed. Ousmane chooses a rack of three scroll compressors, evaporators suited to frost, a generous condenser and a refrigerant in line with the Kigali amendment, then hands the equipment schedule to Awa and Clarisse.',
  blocks: [
    { type: 'scene', text: 'Month 8 · Bid review, with Ibrahim, Paul and Clarisse Houndé' },
    {
      type: 'objectives',
      items: [
        'Compare compressor technologies by capacity range.',
        'Choose between a single unit and a multi-compressor rack.',
        'Choose an evaporator (temperature difference, fin spacing, defrost) and an expansion valve.',
        'Choose a refrigerant by safety, environment and availability.',
        'Read the equipment schedule of a refrigeration plant.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '3 × 20 kW', label: 'scroll compressors in a rack' },
        { value: '33 / 66 / 100 %', label: 'capacity steps' },
        { value: 'R513A', label: 'A1, GWP 631' },
        { value: '≈ 29 kW', label: 'total electrical power' },
        { value: '≈ 28 t CO₂ eq.', label: 'refrigerant charge: annual leak check' },
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Clarisse Houndé (procurement)',
      role: 'team',
      text: 'The cheapest is one big 60 kW condensing unit. The three-compressor offer is 15 % dearer. What do those 15 % buy?',
    },
    {
      type: 'dialogue',
      speaker: 'Ousmane Cissé',
      role: 'engineer',
      text: 'Continuity first: if the single compressor breaks, twenty tonnes of juice warm up. With three, we lose a third of the capacity and the rooms hold. And efficiency: at night, with no products to cool, one compressor is enough, instead of a big one starting and stopping constantly.',
    },

    { type: 'heading', text: '1 · Which compressor?' },
    {
      type: 'table',
      headers: ['Technology', 'Usual range', 'Strengths', 'Limits'],
      rows: [
        ['Reciprocating (hermetic, semi-hermetic)', '0.5 to 100 kW', 'robust, repairable (semi-hermetic)', 'noise, vibration, average efficiency'],
        ['Scroll', '5 to 60 kW per unit', 'quiet, few parts, good efficiency', 'not repairable, sensitive to liquid slugging'],
        ['Screw', '100 to 1,500 kW', 'large capacities, continuous capacity control', 'cost, efficiency at low load'],
        ['Centrifugal', 'above 1 MW', 'very good full-load efficiency', 'chilled water for large buildings'],
      ],
    },
    fig('p134_1', 'Table 5.4 of the IEPF guide — compressor, evaporator and condenser technologies by capacity'),
    fig('p136_1', 'Figures 5.28 and 5.29 — reciprocating and centrifugal compressors'),
    {
      type: 'decision',
      title: 'Production architecture',
      choice: 'Rack of 3 × 20 kW scroll compressors on a common suction, the first one variable-speed',
      reasons: [
        'Redundancy: with one compressor down, 40 kW remain, enough to hold the rooms during the repair.',
        '33, 66 and 100 % steps, refined by variable speed: capacity follows the load, from the quiet night to the arrival of pallets.',
        'Scroll: quiet, efficient in this range, parts available from distributors.',
      ],
      rejected: 'A single 60 kW unit: 15 % cheaper, but a single failure endangers the whole stock, with short cycles at night.',
    },
    { type: 'fiche', id: 'abc-compressors', why: 'Compressor technologies, inverters and lubrication.' },

    { type: 'heading', text: '2 · Evaporators, expansion valves and control' },
    {
      type: 'table',
      headers: ['Choice', '+2 °C room', '+10 °C room'],
      rows: [
        ['Evaporators', '2 × 21 kW unit coolers', '1 × 18 kW unit cooler'],
        ['Air / refrigerant difference', '8 K (evaporation −6 °C)', '8 K (evaporation +2 °C)'],
        ['Fin spacing', '6 mm: frost does not block the coil', '4 to 5 mm (no frost)'],
        ['Defrost', 'off-cycle, compressors stopped (room air > 0 °C)', 'not needed'],
        ['Expansion valve', 'electronic: stable superheat despite varying load', 'electronic'],
        ['Special feature', '—', 'evaporator pressure regulator: keeps +2 °C despite the common suction at −6 °C'],
      ],
    },
    {
      type: 'note',
      text: 'Off-cycle defrost works because the room air is above 0 °C: by stopping the cooling for a few minutes, the fans melt the frost. A freezer room (−18 °C) would need electric heaters or hot gas, several more kilowatts on the load.',
    },
    { type: 'fiche', id: 'abc-components', why: 'Circuit accessories and safety devices.' },

    { type: 'heading', text: '3 · Which refrigerant?' },
    {
      type: 'table',
      headers: ['Refrigerant', 'GWP', 'Safety', 'For Tropica’s cold room'],
      rows: [
        ['R404A', '3,922', 'A1', 'historic, banned in new systems in Europe; to be avoided'],
        ['R449A', '1,397', 'A1', 'direct R404A replacement, GWP still high'],
        ['R513A', '631', 'A1', 'medium temperatures, non-flammable, available'],
        ['R290 (propane)', '3', 'A3', 'limited charge in an occupied building: outdoor unit and glycol loop'],
        ['R744 (CO₂)', '1', 'A1', 'excellent in temperate climates, poor efficiency above 30 °C outdoors'],
        ['R717 (ammonia)', '0', 'B2L (toxic)', 'large industrial plants, qualified staff'],
      ],
    },
    {
      type: 'decision',
      title: 'Rack refrigerant',
      choice: 'R513A',
      reasons: [
        'Non-flammable (A1): no charge restriction in the hall where forklifts circulate.',
        'GWP of 631, three to six times lower than historic refrigerants; consistent with the Kigali trajectory.',
        'Good performance at medium temperatures and parts available locally.',
      ],
      rejected: 'CO₂: efficiency too low with 35 to 40 °C outside, 100 bar pressures and scarce skills. Propane: would require a glycol loop and 10 % less efficiency.',
    },
    { type: 'fiche', id: 'abc-refrigerants', why: 'Refrigerants, oils, GWP and regulations.' },

    { type: 'heading', text: '4 · The equipment schedule' },
    {
      type: 'equipmentSchedule',
      schedule: {
        title: 'Tropica refrigeration',
        project: 'Tropica plant',
        conditions: 'evaporation −6 °C, condensation 47 °C, air 35 °C',
        rows: [
          { tag: 'CF-1', location: 'Machinery room', type: 'Rack of 3 scroll compressors (1 variable-speed)', cooling: 60, refrigerant: 'R513A', supply: '400 V 3~ 50 Hz', power: 25.4, current: 43, protection: 'MCCB 63 A + 3 MPCB', note: 'starts staggered by 30 s' },
          { tag: 'EV-1', location: '+2 °C room', type: 'Unit cooler 21 kW', cooling: 0, airflow: 12000, refrigerant: 'R513A', supply: '400 V 3~ 50 Hz', power: 0.5, current: 1.0, protection: 'MPCB 1–1.6 A', note: '6 mm fins, off-cycle defrost' },
          { tag: 'EV-2', location: '+2 °C room', type: 'Unit cooler 21 kW', cooling: 0, airflow: 12000, refrigerant: 'R513A', supply: '400 V 3~ 50 Hz', power: 0.5, current: 1.0, protection: 'MPCB 1–1.6 A', note: '6 mm fins, off-cycle defrost' },
          { tag: 'EV-3', location: '+10 °C room', type: 'Unit cooler 18 kW', cooling: 0, airflow: 10000, refrigerant: 'R513A', supply: '400 V 3~ 50 Hz', power: 0.5, current: 1.0, protection: 'MPCB 1–1.6 A', note: 'evaporator pressure regulator' },
          { tag: 'CD-1', location: 'Roof, north side', type: 'Air-cooled condenser 85 kW, EC fans', cooling: 0, airflow: 30000, refrigerant: 'R513A', supply: '400 V 3~ 50 Hz', power: 2.4, current: 4.2, protection: 'C10 3P', note: '12 K difference, shaded, monthly cleaning' },
        ],
      },
    },
    {
      type: 'calc',
      title: 'Reading the bottom of the schedule',
      steps: [
        { label: 'Total electrical power', formula: 'P = 25.4 + 3 × 0.5 + 2.4 ≈ 29.3 kW' },
        { label: 'Overall plant efficiency (fans included)', formula: 'EER = \\frac{60}{29.3} ≈ 2.05' },
        { label: 'Total current for the main-board way', formula: 'I = \\frac{29 300}{\\sqrt{3} × 400 × 0.85} ≈ 50 A' },
      ],
      result: 'Awa confirms: 63 A way at Tropica’s main board, 5G16 mm² cable, staggered compressor starts',
    },
    {
      type: 'note',
      text: 'Evaporators and the condenser do not “produce” cooling: they exchange what the rack produces. They appear in the schedule for their airflow, supply and protection, but their capacity is not added to the rack’s.',
    },

    { type: 'heading', text: '5 · What the standards say' },
    {
      type: 'norms',
      title: 'Refrigerants and regulations',
      rows: [
        { norm: 'Montreal Protocol + Kigali amendment', rule: 'Phase-out of HCFCs (R22) and gradual phase-down of HFCs; differentiated timetable for developing countries.', result: 'prefer low GWP' },
        { norm: 'EU Regulation 2024/573', rule: 'Bans high-GWP refrigerants in most new refrigeration equipment; leak checks according to t CO₂ eq.', result: '45 kg × 631 ≈ 28 t: annual check' },
        { norm: 'EN 378 / ISO 5149', rule: 'Charge limits by refrigerant class and room occupancy; machinery room.', result: 'A1: no limit in the hall' },
        { norm: 'ASHRAE 15 / 34', rule: 'System safety and refrigerant classes (North America).', result: 'R513A = A1' },
      ],
    },
    {
      type: 'regional',
      text: 'R22 is still found in many West African plants, and smuggled or mislabelled refrigerants exist: insist on original cylinders with a certificate. National ozone units (often in the environment ministry) track imports and organise technician training. For a plant, a maintenance contract with a technician who owns a recovery unit is essential.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'Reciprocating, scroll, screw, centrifugal: each technology has its capacity range.',
        'Several compressors in a rack: redundancy and capacity that follows the load.',
        'Evaporator: temperature difference by product, fin spacing by frost, defrost by room temperature.',
        'Refrigerant: safety (A1, A2L, A3, B2L), GWP, performance in the local climate and availability.',
        'The equipment schedule gives the electrical designer the power and protection of every motor.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'A compressor fails on a day when 20 t of juice are delivered. What capacity remains, and can the juice still be cooled?',
      solution: [
        '40 kW remain out of 60 kW.',
        'Running 24 h a day, the two compressors deliver 40 kW, close to the average need without margin (40.8 kW): the juice is cooled in a little over 20 h, but with no reserve or pause for defrosting. The rooms hold during the repair, provided door openings are limited.',
      ],
    },
    {
      type: 'exercise',
      question: 'The rack holds 45 kg of R449A instead of R513A. How many tonnes of CO₂ equivalent?',
      solution: ['45 × 1,397 ≈ 63 t CO₂ eq.', 'Above 50 t: leak checks every 6 months in Europe, and growing taxes or restrictions: R513A more than halves this figure.'],
    },
  ],
};
