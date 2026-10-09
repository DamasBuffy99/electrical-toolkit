import { TopicContent } from '../../../types';

export const abcHydraulicsContent: TopicContent = {
  title: 'Hydronic networks: flow rates, pumps, valves and balancing',
  subtitle: 'The chiller on the water side, fan coils, water-loop heat pumps, pumps, 2- and 3-way valves',
  blocks: [
    {
      type: 'text',
      text: 'In a chilled-water installation, many breakdowns and much wasted energy come from the water network: flow too low or too high, clogged strainer, air in the circuit, wrong valve, unbalanced network. This lesson gives the basics of hydraulics and the field settings.',
    },
    { type: 'illustration', name: 'clim-central', props: { highlight: 'water' }, caption: 'The chilled-water network links the chiller to the fan coils and air handling units' },

    { type: 'heading', text: 'The chiller, on the water side' },
    {
      type: 'text',
      text: 'Usual comfort regime: 7 °C flow, 12 °C return. The water may contain glycol. Pipes are insulated black steel (or high-density PVC).',
    },
    {
      type: 'table',
      headers: ['Component', 'Role and checks'],
      rows: [
        ['Expansion vessel', 'absorbs changes in water volume; pre-charged (nitrogen) to the static head: 10 m = 1 bar'],
        ['Backflow preventer', 'protects the drinking-water supply used for filling against backflow'],
        ['Safety valve', 'set at 3 or 4 bar; must not leak'],
        ['Strainer', 'protects the evaporator; clean at least once a year or if Δp > 0.4 bar'],
        ['Circulators', 'check direction of rotation and absence of noise (cavitation, air)'],
        ['Flow switch', 'stops the chiller if flow is lacking; test every year'],
        ['Freeze-protection sensor', 'protects the evaporator against freezing'],
        ['Air vents', 'must release nothing but air'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'Check the flow using the temperature difference: ≈ 5 K between inlet and outlet at nominal flow.',
        'Difference < 3 K: too much flow (reduce pump speed, adjust a balancing valve).',
        'Difference > 7 K: not enough flow (strainer, pump, valves) — too little flow can destroy the heat exchanger by freezing.',
        'During refrigerant recovery, keep the water pump running: the expanding refrigerant cools the heat exchanger and could freeze it.',
      ],
    },

    { type: 'heading', text: 'Fan coils and water loops' },
    {
      type: 'table',
      headers: ['Configuration', 'Principle', 'Use'],
      rows: [
        ['2-pipe', 'one coil, cold water in summer, hot in winter', 'rooms with similar loads; discomfort in mid-season'],
        ['2-pipe 2-wire', 'chilled water + electric heater', 'heating and cooling at once, but electricity consumption'],
        ['4-pipe', 'two coils, two networks', 'maximum comfort, heavy installation'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'Fan-coil control: stopping the fan (simple but not very comfortable), or a modulating 2- or 3-way valve driven by a room or return-air sensor.',
        'Water-loop heat pumps: water/air heat pumps in each room on a loop kept between 18 and 40 °C; in mid-season, the cooled rooms warm the loop, which heats the others. Flow set for a 5 to 7 K difference across each heat pump.',
      ],
    },

    { type: 'heading', text: 'Hydraulic basics' },
    {
      type: 'bullets',
      items: [
        'Laminar flow (slow, streamlines parallel to the axis) or turbulent flow (fast, disordered), depending on the Reynolds number: below about 2,000 laminar, above turbulent.',
        'Friction (linear) pressure losses: friction in the pipes, proportional to length and roughly to the square of velocity.',
        'Local (singular) pressure losses: bends, tees, valves, heat exchangers, coils.',
        'Static pressure (water head, no flow) + dynamic pressure (velocity) = total pressure.',
        'Total head: the pressure the pump must supply to overcome the network’s pressure losses.',
      ],
    },
    { type: 'formula', text: '1 bar ≈ 10 m of water column (mWC); 1 mmWC ≈ 10 Pa' },
    {
      type: 'warning',
      text: 'The book describes laminar flow as a path “perpendicular to the axis” of the pipe: it is PARALLEL to the axis. And the laminar/turbulent transition is not abrupt at 2,000: between about 2,000 and 4,000 there is an unstable critical zone.',
    },

    { type: 'heading', text: 'Pumps and circulators' },
    {
      type: 'bullets',
      items: [
        'Wet rotor: simple, maintenance-free, but low efficiency (homes, small commercial buildings).',
        'Dry rotor: separate motor, sealed by a gland packing (a slight leak is intended) or a mechanical seal; better efficiency.',
        'Two pumps in series: heads add up. In parallel: flows add up.',
        'Cavitation: at the suction, if pressure falls to the vapour pressure, bubbles form and collapse → noise, vibration, erosion, loss of flow.',
        'Selection: flow + head, then the manufacturer’s curve closest to the operating point.',
      ],
    },
    { type: 'formula', text: 'Flow Q (m³/h) = P (kW) / (1.16 × ΔT)' },
    { type: 'note', text: 'For a small installation, pressure loss is estimated at about 20 mmWC per metre of pipe; beyond that, use charts.' },

    { type: 'heading', text: 'Valves' },
    {
      type: 'bullets',
      items: [
        'Ball valve (quarter turn) and butterfly valve: ISOLATING valves, low pressure loss, not made to regulate flow.',
        'Gate valve: isolation; half open it vibrates and wears.',
        'Globe valve (plug, needle): the REGULATING valve par excellence.',
        '3-way mixing valve: constant flow in the emitter, variable temperature (heating).',
        '3-way diverting valve: constant temperature, variable flow in the coil; total flow constant on the production side (air conditioning).',
        '2-way valve: variable flow in the whole network; to be combined with variable-speed pumps.',
        'Actuators: 2-point (on/off), 3-point (open, close, hold), or proportional 0–10 V on 24 V (3 V = 30 % open).',
      ],
    },
    { type: 'illustration', name: 'tech-3way', caption: '3-way valve in mixing and diverting configuration' },
    {
      type: 'table',
      headers: ['Characteristic', 'Meaning'],
      rows: [
        ['DN / PN', 'nominal diameter / nominal pressure of the flange'],
        ['Kv', 'flow (m³/h) that creates 1 bar of pressure loss across the valve'],
        ['Kvs', 'Kv with the valve fully open (catalogue value)'],
        ['Kvo', 'leakage flow with the valve closed, as a % of Kvs'],
        ['Δp max', 'maximum pressure difference with the valve closed (tightness)'],
      ],
    },
    { type: 'formula', text: 'Authority aV = Δp valve open / (Δp valve + Δp coil)   — aim for 0.5 to 0.7' },
    {
      type: 'warning',
      text: 'The book writes that for a new valve “Kvs must be less than 0.05 % of Kv”. It means Kvo: the leakage flow with the valve closed must be less than about 0.05 % of Kvs.',
    },

    { type: 'heading', text: 'Low-loss header, expansion vessel, balancing' },
    {
      type: 'bullets',
      items: [
        'Low-loss header (hydraulic separator): makes the production circuit (constant flow) independent of the emitter circuits (variable flows). Primary flow > secondary (≈ +15 %) → “pressure breaker”, same flow temperatures. Primary flow < secondary → “mixing”, colder secondary flow (in heating).',
        'Rule of 3 D: header diameter ≥ 3 × that of the main pipe, connections 3 diameters apart; velocity ≈ 0.1 m/s in the header. Vertical, air vent at the top, drain (settling) at the bottom, insulated.',
        'In chilled water, the small density difference encourages unwanted mixing: a simple bypass is sometimes preferable.',
        'Expansion vessel: 1 m³ of water expands by nearly 4 % between 10 and 80 °C; fitted on the return, with no operable isolating valve. In air conditioning, fill at a pressure close to the safety-valve setting (water contracts as it cools).',
        'Balancing: without it, emitters close to the pump get too much water and the farthest not enough (discomfort, noise, +10 to 15 % energy). Methods: by calculation, by measuring flows (valves with pressure test points and a meter) or by return temperatures.',
      ],
    },
    { type: 'note', text: 'Field tip: a sharp knock at the top then at the bottom of an expansion vessel should sound different (gas on one side, water on the other); otherwise the membrane is punctured.' },

    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'A 50 kW cooling coil runs on a 7/12 °C regime. What water flow is needed?',
      solution: ['ΔT = 5 K; Q = 50 / (1.16 × 5) ≈ 8.6 m³/h.'],
    },
    {
      type: 'exercise',
      question: 'A 3-way valve has a pressure loss of 15 mWC fully open; the coil has 10 mWC at the same flow. Is the authority correct?',
      solution: ['aV = 15 / (15 + 10) = 0.6: within the recommended 0.5 to 0.7 range, control will be accurate.'],
    },
    {
      type: 'exercise',
      question: 'On a chiller, water enters at 12 °C and leaves at 9.5 °C. What do you conclude?',
      solution: ['Difference 2.5 K (< 3 K): too much flow for the capacity exchanged.', 'Reduce pump speed or adjust the balancing valve to get back towards 5 K.'],
    },
  ],
};
