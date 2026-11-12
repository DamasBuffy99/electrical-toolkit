import { TopicContent } from '../../types';
import { fig } from '../../topics/clim/fig';

export const coAirContent: TopicContent = {
  title: 'Fresh air, humidity and energy recovery',
  subtitle: 'Ten thousand cubic metres of tropical air per hour: that is 140 kW of heat, mostly water. Ousmane designs a fresh-air unit that dries the air before it enters, recovers energy from the exhaust air, and adapts the meeting-room airflow to the number of people present.',
  blocks: [
    { type: 'scene', text: 'Month 4 · Design office, with Jean-Marc Kouadio' },
    {
      type: 'objectives',
      items: [
        'Calculate the enthalpy of humid air and the capacity of a cooling coil.',
        'Follow the fresh-air treatment on the psychrometric chart.',
        'Measure the value of an enthalpy recovery wheel.',
        'Control the fresh-air rate from air quality (CO₂).',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '10,000 m³/h', label: 'of fresh air for the building' },
        { value: '196 → 89 kW', label: 'cooling coil without / with wheel' },
        { value: '≈ 59 L/h', label: 'of water condensed at peak' },
        { value: '≤ 1,000 ppm', label: 'of CO₂ in the meeting room' },
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Jean-Marc Kouadio (Kora Assurances)',
      role: 'client',
      text: 'Why one more machine? Can’t the VRF indoor units take air directly from outside?',
    },
    {
      type: 'dialogue',
      speaker: 'Ousmane Cissé',
      role: 'engineer',
      text: 'They could, but they are made to cool office air, not to dry 32 °C air saturated with water. We’d get cold, damp offices, mould in the ducts and the “stifling” meeting room you know so well. A dedicated unit dries the fresh air once and for all, and recovers the coolness of the air we throw away on the way.',
    },

    { type: 'heading', text: '1 · Enthalpy, the currency of humid air' },
    {
      type: 'text',
      text: 'The enthalpy h of humid air (in kJ per kg of dry air) adds the sensible heat of the air and the latent heat of the vapour it holds. A cooling coil’s capacity is simply: dry-air mass flow × enthalpy difference. That’s what makes the psychrometric chart so handy.',
    },
    { type: 'formula', text: 'h = 1.006 × θ + ω × (2 501 + 1.86 × θ)   (θ in °C, ω in kg/kg)   ;   P = q_m × Δh' },
    {
      type: 'calc',
      title: 'Enthalpies of outdoor air and return air',
      steps: [
        { label: 'Outdoor air O: 32 °C, 25.5 g/kg', formula: 'h_O = 1.006 × 32 + 0.0255 × (2 501 + 59.5) ≈ 97.5 kJ/kg' },
        { label: 'Return air from the offices R: 26 °C, 10.8 g/kg', formula: 'h_R = 1.006 × 26 + 0.0108 × (2 501 + 48.4) ≈ 53.7 kJ/kg' },
        { label: 'Mass flow of 10,000 m³/h', formula: 'q_m = \\frac{10 000 × 1.18}{3 600} ≈ 3.28 kg/s' },
        { label: 'Bringing fresh air to indoor conditions', formula: 'P = 3.28 × (97.5 − 53.7) ≈ 144 kW' },
      ],
      result: '≈ 140 kW for the building’s fresh air alone, more than 80 % of it latent',
    },
    { type: 'fiche', id: 'abc-psychro', why: 'Humid air: enthalpy, dew point, drying and humidifying.' },

    { type: 'heading', text: '2 · The fresh-air unit, point by point' },
    { type: 'illustration', name: 'psychro-doas', caption: 'O → A: the wheel recovers the coolness and dryness of the return air; A → B: the coil cools and condenses; B → S: free reheat by heat pipe' },
    {
      type: 'calc',
      title: 'Fresh-air treatment (enthalpy wheel, 75 % efficiency)',
      steps: [
        { label: 'After the wheel: the fresh air moves towards the return air', formula: 'h_A = h_O − 0.75 × (h_O − h_R) = 97.5 − 0.75 × 43.8 ≈ 64.7 kJ/kg   (27.5 °C; 14.5 g/kg)' },
        { label: 'Coil outlet: 13.5 °C, 9.5 g/kg (air dried below the room dew point)', formula: 'h_B = 1.006 × 13.5 + 0.0095 × (2 501 + 25) ≈ 37.6 kJ/kg' },
        { label: 'Cooling-coil capacity', formula: 'P = 3.28 × (64.7 − 37.6) ≈ 89 kW' },
        { label: 'Without wheel, from O to B', formula: 'P = 3.28 × (97.5 − 37.6) ≈ 196 kW' },
        { label: 'Water condensed on the coil', formula: '3.28 × (14.5 − 9.5) × 3.6 ≈ 59 L/h' },
      ],
      result: 'The wheel more than halves the fresh-air cooling capacity: 107 kW less, every hour of operation',
    },
    {
      type: 'text',
      text: 'After the coil, air at 13.5 °C would be too cold to blow straight near the occupants. A heat pipe reheats it to 18 °C at no energy cost, taking heat from the air before the coil (which relieves the coil by as much). The air reaches the offices at 18 °C and 9.5 g/kg: drier than the room, it absorbs part of the moisture given off by the occupants.',
    },
    {
      type: 'decision',
      title: 'Fresh-air treatment',
      choice: 'Rooftop fresh-air unit, 10,000 m³/h: enthalpy wheel (75 %), 90 kW direct-expansion coil (2 × 45 kW), heat-pipe reheat, supply at 18 °C and 9.5 g/kg',
      reasons: [
        'All the fresh-air latent load is treated in one place, by a machine designed to dry.',
        'The wheel saves about 107 kW at peak, nearly 35 kW of electricity.',
        'The VRF indoor units are left with the office gains only: the meeting room gets back a sensible heat ratio of about 0.7, which its units can handle.',
      ],
      rejected: 'Fresh air taken directly by the indoor units: uncontrolled humidity, damp ducts, discomfort. A plate recuperator alone (sensible only): it doesn’t recover moisture, which is the main issue here.',
    },
    fig('p118_1', 'Figure 5.12 of the IEPF guide — different ways of bringing fresh air to terminal units'),
    { type: 'fiche', id: 'abc-airside', why: 'AHUs, filtration, recovery, fans.' },

    { type: 'heading', text: '3 · Demand-controlled ventilation of the meeting room' },
    {
      type: 'calc',
      title: 'How much fresh air to stay below 1,000 ppm of CO₂?',
      steps: [
        { label: 'A seated person exhales about 18 litres of CO₂ per hour; outdoors: ≈ 420 ppm', formula: 'G = 24 × 0.018 = 0.432 m³/h of CO₂' },
        { label: 'With 25 m³/h per person (600 m³/h)', formula: 'C = 420 + \\frac{0.432}{600} × 10^{6} ≈ 1 140 ppm' },
        { label: 'Airflow needed for 1,000 ppm', formula: 'q = \\frac{0.432 × 10^{6}}{1 000 − 420} ≈ 745 m³/h  (≈ 31 m³/h per person)' },
      ],
      result: 'Full room: 750 m³/h; empty room: 150 m³/h of purge. A motorised damper follows a CO₂ sensor',
    },
    {
      type: 'note',
      text: 'The meeting room is empty more than half the time. With a fixed 750 m³/h, humid air would be treated all day for nobody. Demand-controlled ventilation (CO₂ sensor + damper) halves the average airflow in this room, and the unit adjusts its fan speed to the sum of demands.',
    },
    {
      type: 'text',
      text: 'One last setting: Ousmane supplies 10 % more air than he extracts. The building is slightly pressurised: hot, humid outside air doesn’t seep in through doors and façade joints, which avoids condensation in the ceilings and on the window frames.',
    },

    { type: 'heading', text: '4 · What the standards say' },
    {
      type: 'norms',
      title: 'Ventilation, humidity and recovery',
      rows: [
        { norm: 'ASHRAE 62.1', rule: 'Fresh-air rates, demand-controlled ventilation allowed; relative humidity limited to 65 % in mechanically dehumidified systems.', result: '≤ 65 % RH, DCV allowed' },
        { norm: 'ASHRAE 90.1', rule: 'Energy recovery required above certain outdoor-air flows, especially in hot, humid climates (zones 0A–1A).', result: 'wheel required at this flow' },
        { norm: 'EN 16798-3 / EN 308', rule: 'Performance of ventilation systems and heat recovery; specific fan power (SFP).', result: 'recovery ≥ 73 %' },
        { norm: 'EN 16798-1', rule: 'CO₂: category II ≈ 800 ppm above outdoors.', result: '≈ 1,200 ppm max' },
      ],
    },
    {
      type: 'regional',
      text: 'Enthalpy wheels and heat pipes are still rare in the region, yet they are the natural answer to a hot, humid climate. Require anti-corrosion coil treatment (salty air on the coast) and plan thick filters: harmattan dust in the north, pollen and sea spray on the coast. A clogged filter cuts the fresh-air flow without anyone noticing: the CO₂ sensor doubles as an alarm.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'Enthalpy adds sensible and latent heat: P = mass flow × Δh.',
        'In the tropics, fresh air is first a matter of water to condense.',
        'A dedicated fresh-air unit dries the air and relieves the terminal units.',
        'An enthalpy wheel recovers the coolness and dryness of the exhaust air: more than half the capacity.',
        'The fresh-air rate follows occupancy thanks to a CO₂ sensor.',
        'Slight building pressurisation: no humid air infiltration.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'With a wheel of 60 % efficiency instead of 75 %, what coil capacity?',
      solution: ['h_A = 97.5 − 0.60 × 43.8 ≈ 71.2 kJ/kg.', 'P = 3.28 × (71.2 − 37.6) ≈ 110 kW instead of 89 kW.'],
    },
    {
      type: 'exercise',
      question: 'What is the enthalpy of air at 24 °C and 9 g/kg? Does it carry more energy than the office return air?',
      solution: ['h = 1.006 × 24 + 0.009 × (2,501 + 44.6) ≈ 47.0 kJ/kg.', 'Less than the return air (53.7 kJ/kg): it holds less energy to remove, even though its temperature is close.'],
    },
  ],
};
