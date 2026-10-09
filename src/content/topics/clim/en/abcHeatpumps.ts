import { TopicContent } from '../../../types';

export const abcHeatpumpsContent: TopicContent = {
  title: 'Heat pumps, reversibility and seasonal performance',
  subtitle: '4-way valve, COP, SEER and SCOP, heat sources, defrost, bivalence and weather compensation',
  blocks: [
    {
      type: 'text',
      text: 'A heat pump is an air conditioner able to reverse its cycle: it takes heat outside (air, ground, water) and releases it inside. In the tropics it is mostly used in cooling mode (“reversible air conditioner”), but its notions — 4-way valve, defrost, SEER — apply to all current units.',
    },
    { type: 'illustration', name: 'tech-4way', caption: 'The 4-way valve swaps the roles of the two coils' },

    { type: 'heading', text: 'The 4-way (reversing) valve' },
    {
      type: 'bullets',
      items: [
        'It consists of a main slide valve and a small pilot valve driven by a coil; through small capillaries the pilot moves the slide using the HP/LP pressure difference.',
        'Compressor discharge and suction are connected on opposite sides; the two coils on either side of the suction port.',
        'Second role: defrosting the outdoor coil in winter by reversing the cycle for a few minutes.',
        'It needs a sufficient pressure difference (≈ 1 bar) to switch.',
      ],
    },

    { type: 'heading', text: 'Performance coefficients' },
    { type: 'formula', text: 'COP = energy delivered / electrical energy consumed   (e.g. 9,000 W / 3,000 W = 3)' },
    {
      type: 'bullets',
      items: [
        'Manufacturer COP: measured in a lab (outdoor air at 7 °C for an air heat pump, ground water at 10 °C for water/water).',
        'Overall COP: includes fans, pumps and defrosts.',
        'Annual COP: real performance over a whole season.',
        'EER (energy efficiency ratio): cooling produced / electricity consumed, in cooling mode.',
        'SEER (cooling) and SCOP (heating): European seasonal coefficients for units ≤ 12 kW, calculated over a reference year. Example minimum requirements (2014): SEER 4.6 and SCOP 3.8 for a unit < 6 kW with a refrigerant of GWP > 150.',
      ],
    },
    { type: 'formula', text: 'SEER = cooling supplied over the year (kWh) / electricity consumed (kWh)' },
    {
      type: 'warning',
      text: 'The book defines EER as “energy absorbed / energy consumed”, which means nothing. Read: EER = cooling capacity PRODUCED / electrical power consumed (the COP in cooling mode; in US units, BTU/h per watt).',
    },
    {
      type: 'bullets',
      items: [
        'The bigger the gap between cold source and hot sink, the lower the COP.',
        'An air/air heat pump loses 30 to 35 % of its capacity at −10 to −15 °C outside.',
        'Typical COPs: 3 to 3.5 for air/air, up to 5 or even 6 for water/water.',
      ],
    },

    { type: 'heading', text: 'Heat sources and sinks' },
    {
      type: 'table',
      headers: ['Heat source', 'Advantages', 'Drawbacks'],
      rows: [
        ['Air', 'easy to capture', 'variable temperature, frosting, low volumetric heat (0.34 Wh/m³.K) → large fans'],
        ['Ground (horizontal loops at 1 m, or vertical probes 30 to 100 m deep)', 'stable temperature', 'drilling cost or land needed (≈ 1.5 × heated area)'],
        ['Water (aquifer, river, lake)', 'very good COP: water carries ~3,500 times more energy than air per volume', 'well, permits, minerals; intermediate heat exchanger recommended'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'Emitters (heat sinks): fan coils (little inertia, but reversible for cooling), low-temperature radiators (45–50 °C flow), underfloor heating (30–35 °C, ideal: +3 % COP per degree of lower flow temperature).',
        'A buffer tank avoids short cycling when the water volume is small.',
      ],
    },

    { type: 'heading', text: 'Defrosting' },
    {
      type: 'text',
      text: 'In cold, humid weather (from ≈ 4–5 °C outside), moisture freezes on the outdoor coil working as evaporator: frost insulates it and blocks the air. The controller (coil sensor or LP switch) triggers a defrost: outdoor fan stopped, 4-way valve reversed — the coil becomes the condenser and melts the frost — then back to heating.',
    },
    { type: 'note', text: 'In tropical regions, defrost hardly concerns anything but heat pumps in high-altitude areas; but the same principle applies to cold rooms and refrigerated display cases.' },

    { type: 'heading', text: 'Types of heat pumps' },
    {
      type: 'table',
      headers: ['Type', 'Principle', 'Indicative COP'],
      rows: [
        ['Air/air', 'reversible split or multi-split', '2.5 to 3.5'],
        ['Air/water', 'outdoor unit + hydraulic module (low temperature 40–55 °C, high temperature 65–80 °C)', '2.5 to 3.5'],
        ['Ground/ground, ground/water', 'buried direct-expansion evaporator (sheathed copper tubes)', '3 to 4'],
        ['Brine/water', 'buried collectors + plate heat exchangers', '3 to 4.5'],
        ['Water/water', 'aquifer or well water', '4 to 6'],
        ['Heat-pump water heater', 'heat pump on a domestic hot-water tank (up to 65 °C)', '2 to 3.5'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'High-temperature heat pumps: vapour-injection compressor (EVI), cascade circuits (R410A + R134a) or two compressors in series.',
        'Heat-pump water heater: up to 70 % savings compared with an electric tank; setpoint ≤ 50 °C to keep a good COP; do not oversize the tank.',
      ],
    },

    { type: 'heading', text: 'Bivalence and weather compensation' },
    {
      type: 'bullets',
      items: [
        'Bivalent point: outdoor temperature at which the heat pump’s capacity no longer covers the needs (intersection of the heat-pump curve and the heat-loss line), often between 0 and −5 °C.',
        'Monovalent: heat pump only. Mono-energy: heat pump ≈ 80 % + electric back-up. Bivalent: heat pump 50–60 % + boiler, in parallel (both together) or alternate (one then the other).',
        'Weather compensation: flow temperature adjusts to outdoor temperature (sensor on the north side), possibly corrected by a room sensor; one slope per type of emitter.',
        'A hydraulic separator (low-loss header) decouples the heat-pump flow from the emitters’ flow.',
      ],
    },
    { type: 'formula', text: 'Heating curve slope = (water T − room T) / (room T − outdoor T)   e.g. (50 − 20) / (20 − (−5)) = 1.2' },
    {
      type: 'bullets',
      items: [
        'Pitfalls: under- or oversized heat pump (+3 % consumption), poorly set heating curve (up to +10 %), badly configured defrost, insufficient water volume (short cycling).',
        'Good settings: differential ≤ 3 K, heat-pump water inlet/outlet difference ≤ 5 to 6 K.',
      ],
    },

    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'Two 3.5 kW splits: A has a SEER of 6.1, B of 4.6. Each supplies 5,000 kWh of cooling per year, electricity costs 100 FCFA/kWh. What annual saving with A?',
      solution: ['A: 5,000 / 6.1 ≈ 820 kWh; B: 5,000 / 4.6 ≈ 1,087 kWh.', 'Saving: ≈ 267 kWh/yr, i.e. ≈ 26,700 FCFA per year per unit.'],
    },
    {
      type: 'exercise',
      question: 'A heat pump is set to cooling, but a technician finds the indoor coil hot and the outdoor coil cold. Which part should be suspected?',
      solution: ['The 4-way valve has stayed (or switched) in heating position: coil not energised or faulty, slide stuck, or HP/LP difference too small to switch it.', 'Check the voltage at the coil, then the temperatures of the valve’s tubes (detailed diagnosis in the “Fault diagnosis” lesson).'],
    },
  ],
};
