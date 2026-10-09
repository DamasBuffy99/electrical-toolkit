import { TopicContent } from '../../../types';

export const abcPsychroContent: TopicContent = {
  title: 'Moist air: psychrometrics, drying and humidifying',
  subtitle: 'Dry and wet bulb, dew point, enthalpy: reading and transforming air',
  blocks: [
    {
      type: 'text',
      text: 'The air we condition is a mixture of dry air and water vapour. Psychrometrics studies this mixture. Understanding moist air means understanding why an air conditioner dries the air, why cold pipes “sweat”, and how to size a cooling coil.',
    },
    { type: 'illustration', name: 'tech-psychro', props: { variant: 'cooling' }, caption: 'Air passing through a cooling coil, on the psychrometric chart' },

    { type: 'heading', text: 'The properties of moist air' },
    {
      type: 'table',
      headers: ['Property', 'Definition', 'Unit'],
      rows: [
        ['Dry-bulb temperature', 'that of an ordinary thermometer', '°C'],
        ['Wet-bulb temperature', 'that of a wetted, ventilated bulb (evaporation cools it)', '°C'],
        ['Dew point', 'temperature at which vapour starts to condense', '°C'],
        ['Absolute humidity (moisture content ω)', 'mass of vapour per kg of dry air', 'g/kg or kg/kg'],
        ['Relative humidity (RH)', 'vapour present / maximum possible at that temperature', '%'],
        ['Enthalpy', 'total energy (sensible + latent) of the air', 'kJ/kg dry air'],
        ['Specific volume', 'volume occupied by 1 kg of air', 'm³/kg'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'When air is cooled without drying it, its absolute humidity does not change but its relative humidity RISES; when it is heated, RH falls.',
        'Absolute humidity stays constant as long as the air does not go below its dew point.',
        'The psychrometric chart links all these properties: two of them are enough to place a point.',
      ],
    },

    { type: 'heading', text: 'Measuring humidity' },
    {
      type: 'bullets',
      items: [
        'Psychrometer: two thermometers, one dry, the other wrapped in a wet wick and ventilated. The difference gives the relative humidity (slide rule or chart).',
        'Hair hygrometer: hair lengthens with humidity. Simple, not very accurate.',
        'Capacitive hygrometer: a polymer absorbs water and changes a capacitor. Accurate (≈ ±2 %), used in digital instruments.',
        'Resistive hygrometer (lithium chloride): less reliable (≈ ±5 %).',
      ],
    },

    { type: 'heading', text: 'Comfort conditions according to the ABC' },
    {
      type: 'bullets',
      items: [
        'Temperature: 18 to 23 °C without discomfort for most people; wall temperature matters (air at 20 °C and walls at 15 °C → felt ≈ 18 °C).',
        'Relative humidity: ideally 30 to 65 %. At 22 °C, 40 to 65 % bothers nobody; at 24 °C and 82 %, people sweat heavily.',
        'Fresh air: at least 30 m³/h per adult.',
        'Air speed: discomfort starts at 0.3 m/s.',
      ],
    },
    {
      type: 'warning',
      text: 'The two books disagree on comfort temperature: the ABC (written for Europe) gives 18 to 23 °C, the IEPF guide (measurements in tropical Africa) 23 to 28 °C, with a recommended setpoint of 24 to 26 °C and at most 6 °C below outdoors. In the tropics, use the IEPF values: setting 20 °C is expensive and causes thermal shock.',
    },
    { type: 'illustration', name: 'clim-comfort', caption: 'The tropical comfort zone (IEPF guide)' },

    { type: 'heading', text: 'Heating air' },
    {
      type: 'bullets',
      items: [
        'Hot-water coil: copper tubes with aluminium fins, water and air in counter-flow, water at ≈ 50 °C (boiler or heat pump), controlled by a 2- or 3-way valve.',
        'Electric heaters: single-phase up to 3 kW, three-phase above, in several stages or modulated by triac. Essential safeties: fire thermostat in the duct, overheat thermostats on the elements, airflow switch (no heating without ventilation), timed post-ventilation.',
        'Heat-pump condenser blowing directly into the air.',
      ],
    },
    { type: 'formula', text: 'P (W) = 0.34 × airflow (m³/h) × Δt (K)   — heating at constant absolute humidity' },

    { type: 'heading', text: 'Cooling air: sensible or with drying' },
    {
      type: 'bullets',
      items: [
        'Sensible cooling: coil surface ABOVE the dew point. No condensation, ω constant, RH rising.',
        'Cooling with dehumidification: surface BELOW the dew point. Vapour condenses on the fins and drains to the tray: ω falls.',
        'Chilled-water coil: usual regime 6/12 °C or 7/12 °C, water possibly with glycol (antifreeze), which slightly reduces heat transfer.',
        'Direct-expansion coil: it is the evaporator of the refrigerant circuit.',
      ],
    },
    { type: 'formula', text: 'Mass flow Qm = Qv / v   (kg/s = m³/s ÷ m³/kg)' },
    { type: 'formula', text: 'Cooling coil capacity P = Qm × (h in − h out)   (kW)' },
    { type: 'illustration', name: 'tech-psychro', props: { variant: 'cooling' }, caption: 'A→R sensible cooling; R→B condensation (drying); B→C reheating' },

    { type: 'heading', text: 'Humidifying' },
    {
      type: 'table',
      headers: ['Process', 'Principle', 'Note'],
      rows: [
        ['Steam', 'heater or electrodes boil water, steam injected in the duct', 'accurate, hygienic (boiled water)'],
        ['Wetted media', 'water runs over a honeycomb media crossed by air', 'cools the air; bleed-off needed; bacterial risk'],
        ['Spray', 'nozzles make fine droplets + eliminator', 'high capacity'],
        ['Ultrasonic', 'vibrating membrane, very fine mist', 'mainly residential'],
        ['High pressure (≈ 80 bar)', 'very fine misting of treated water', 'fast humidification'],
      ],
    },
    { type: 'illustration', name: 'tech-psychro', props: { variant: 'evaporative' }, caption: 'Humidifying hot dry air cools it: the Sahel evaporative cooler' },

    { type: 'heading', text: 'Dehumidifying' },
    {
      type: 'bullets',
      items: [
        'By cooling: cool below the dew point, then reheat so as not to supply air that is too cold (electric or hot-water coil, or the condenser in a dehumidifier). Example: air at 25 °C and 67 % dried on the cooling coil, then reheated to 35 °C: RH ≈ 30 %.',
        'Below 15 °C room temperature, extraction becomes difficult; if the target dew point is under 5 °C, the coil frosts.',
        'With a solid desiccant: desiccant wheel (silica gel or molecular sieve) regenerated by hot air.',
        'With a liquid absorbent: lithium chloride or bromide solution sprayed, regenerated by heat; bactericidal, valued in hospitals.',
      ],
    },

    { type: 'heading', text: 'Heat exchangers and energy recovery' },
    {
      type: 'bullets',
      items: [
        'Three flow arrangements: counter-flow (most efficient), cross-flow, parallel flow.',
        'Two-phase exchange (evaporation, condensation) or single-phase (sensible heat only).',
        'A good exchanger: large surface, low pressure drop, evenly distributed flows. Sized by the LMTD or NTU method.',
        'Thermal wheel: recovers heat (and moisture if desiccant-coated) from exhaust air to treat fresh air; turns slowly (≈ 20 rpm), air at 1.5–4 m/s, to be protected by good filters.',
      ],
    },
    { type: 'formula', text: 'P = K × S × ΔT   (K: heat transfer coefficient, S: surface, ΔT: mean difference)' },

    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'A cooling coil treats 2,000 m³/h of air. Enthalpy goes from 70 to 40 kJ/kg; specific volume at supply is 0.85 m³/kg. What is its capacity?',
      solution: ['Qm = 2,000 / 3,600 / 0.85 ≈ 0.654 kg/s.', 'P = 0.654 × (70 − 40) ≈ 19.6 kW.'],
    },
    {
      type: 'exercise',
      question: 'What electric power is needed to reheat 1,500 m³/h of air by 15 K?',
      solution: ['P = 0.34 × 1,500 × 15 = 7,650 W ≈ 7.7 kW → three-phase supply (above 3 kW), in several stages.'],
    },
    {
      type: 'exercise',
      question: 'A room is at 26 °C and 55 % RH (dew point ≈ 16 °C). A chilled-water pipe at 7 °C runs through it. What happens, and what should be done?',
      solution: ['Its surface (≈ 7 °C) is well below the dew point: the vapour in the air condenses and the pipe drips.', 'Insulate it with closed-cell insulation, without air gaps, thick enough for its outer face to stay above 16 °C.'],
    },
  ],
};
