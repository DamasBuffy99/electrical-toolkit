import { TopicContent } from '../../../types';
import { fig } from '../fig';

export const climIntroContent: TopicContent = {
  title: 'Air conditioning in the tropics: comfort and climates',
  subtitle: 'What we want to achieve in a room, and why the climate changes everything',
  blocks: [
    {
      type: 'text',
      text: 'Air conditioning is not about “making cold” at random: it means keeping a room at a temperature AND a humidity where people feel good, while using as little electricity as possible. This course is based on the IEPF guide “Energy efficiency of air conditioning in tropical regions” (in French), built on measurements made in West and Central Africa.',
    },
    { type: 'illustration', name: 'clim-comfort', caption: 'Comfort: neither too hot nor too humid' },

    { type: 'heading', text: 'The problem: oversized installations' },
    {
      type: 'text',
      text: 'In Africa, many installations are sized with methods and data made for Europe or the United States (Carrier, Airwell…). The result: units that are too powerful, expensive to buy, that consume too much and dehumidify poorly. Oversizing is defect number one.',
    },
    {
      type: 'bullets',
      items: [
        'Too powerful = the unit keeps starting and stopping: the air is cooled but stays humid (clammy).',
        'Too powerful = a higher electricity subscription and bill for nothing.',
        'Too small = the room never reaches the setpoint during the hottest hours.',
      ],
    },
    { type: 'note', text: 'Goal of this course: size “just right”, with local climate data, then choose and install the right equipment.' },

    { type: 'heading', text: 'The four tropical climates' },
    { type: 'text', text: 'The guide groups cities into climate zones. Each zone raises a different problem:' },
    {
      type: 'table',
      headers: ['Climate', 'Typical cities', 'Main problem'],
      rows: [
        ['Humid tropical', 'Douala, Abidjan, Cotonou, Lomé', 'Heat + high humidity (> 80 %)'],
        ['Transition / coastal', 'Dakar', 'Moderate heat, variable humidity'],
        ['Dry tropical', 'Garoua, Korhogo, Bamako', 'Strong heat, drier air'],
        ['Desert / Sahelian', 'Niamey, N’Djamena, Ouagadougou', 'Very strong heat (~40 °C), very dry air'],
      ],
    },
    fig('p017_1', 'Guide table 1.1 — cities used in the study, by climate zone'),
    { type: 'note', text: 'Remember: in a humid climate, the air conditioner must cool AND dehumidify (remove water from the air). In a dry climate, it mainly has to cool.' },

    { type: 'heading', text: 'Outdoor design conditions' },
    {
      type: 'text',
      text: 'We do not size for an average day but for the hottest month, the “design month”: February in humid climates (Douala, Abidjan), March in dry climates (Garoua), April in desert climates (Ouagadougou). We read the “dry-bulb” temperature (ordinary thermometer) and the “wet-bulb” temperature (which reflects the air humidity).',
    },
    {
      type: 'table',
      headers: ['City', 'Dry bulb (°C)', 'Wet bulb (°C)'],
      rows: [
        ['Douala', '32', '29'],
        ['Abidjan', '32.5', '27.5'],
        ['Garoua', '39.8', '23.7'],
        ['Korhogo', '36', '22.5'],
        ['Ouagadougou', '39', '29.5'],
      ],
    },
    fig('p020_0', 'Table 1.3 — outdoor design conditions (with prevailing wind)'),
    {
      type: 'text',
      text: 'Compare Douala and Garoua: 32 °C in Douala but a wet bulb of 29 °C (air almost saturated with water); 40 °C in Garoua but a wet bulb of 24 °C (dry air). Same cooling power, opposite problems.',
    },

    { type: 'heading', text: 'Indoor conditions: where is comfort?' },
    {
      type: 'text',
      text: 'Thermal comfort depends on air temperature, humidity, air speed and wall radiation, but also on activity and clothing. Studies in Cameroon and Côte d’Ivoire (following ASHRAE 55-81) give the recommended comfort conditions for lightly dressed office workers:',
    },
    {
      type: 'table',
      headers: ['City', 'Indoor T (°C)', 'Relative humidity (%)'],
      rows: [
        ['Douala', '26', '51.3'],
        ['Abidjan', '24.5', '65'],
        ['Lagos', '26', '50'],
        ['Garoua', '28.5', '51.9'],
        ['Korhogo', '26.5', '50'],
      ],
    },
    fig('p021_0', 'Table 1.4 — recommended optimal indoor comfort conditions'),
    {
      type: 'text',
      text: 'It is not a single point but a range: in Douala people stay comfortable between 23.9 and 28.3 °C; in Abidjan between 24.2 and 28 °C. More broadly, the tropical comfort zone runs from about 20 to 27 °C with 20 to 80 % humidity.',
    },
    { type: 'warning', text: "Guide inconsistency: table 1.4 recommends 28.5 °C in Garoua, whereas the comfort zone given in chapter 6 (figure 6.1) stops at 27 °C. Table 1.4 comes from field studies (occupants used to heat); for design, stay within 24–27 °C unless justified." },
    fig('p021_1', 'Table 1.5 — thermal comfort zones of Douala and Abidjan'),
    fig('p158_0', 'Figure 6.1 — comfort zone and climate types (psychrometric chart)'),

    { type: 'heading', text: 'Why not set it to 18 °C?' },
    {
      type: 'bullets',
      items: [
        'Thermal shock: going from 32 °C outside to 18 °C inside makes people ill. The difference is limited to about 6 °C.',
        'Consumption: each degree lower costs the machine about 3 % of performance (COP).',
        'Comfort: a setpoint between 24 and 26 °C (or “floating” between 24 and 27 °C) is enough in the tropics.',
      ],
    },
    { type: 'formula', text: 'Indoor setpoint ≥ Outdoor temperature − 6 °C   (e.g. 32 °C outside → 26 °C inside)' },
    { type: 'illustration', name: 'clim-comfort', caption: 'Douala (humid) and Garoua (dry) brought back to the comfort zone' },

    { type: 'heading', text: 'Fresh air and humidity: two key notions' },
    {
      type: 'bullets',
      items: [
        'Relative humidity (RH): water vapour in the air as a percentage of the maximum possible at that temperature. 100 % = saturated air (fog).',
        'Moisture content (ω): mass of water per kg of dry air, in kg/kg. This is what the calculations use (e.g. Douala outside: ω = 0.0255; inside: 0.0108).',
        'Fresh air: air must be renewed for hygiene (O₂, CO₂, odours) — about 20 to 30 m³/h per person. This hot, humid air is a large load to treat.',
      ],
    },
    { type: 'note', text: 'Key point: a good air-conditioning project starts with the right data — city, design month, outdoor and indoor conditions. Everything else follows.' },
    { type: 'heading', text: "Exercises" },
    {
      type: 'exercise',
      question: "We are designing two offices: one in Cotonou, one in Niamey. For each, give the climate zone, the likely design month and the main problem the air conditioner must handle.",
      solution: [
        "Cotonou: humid tropical, design month February. It must cool AND dehumidify (air close to saturation).",
        "Niamey: desert / Sahelian, design month April (like Ouagadougou). Mainly cool very hot but dry air; evaporative cooling can even help.",
      ],
    },
    {
      type: 'exercise',
      question: "In Douala (32 °C outside), a client sets the split to 20 °C. Give two problems and suggest a setpoint.",
      solution: [
        "1. 12 °C difference with outside: thermal shock when going in and out (the recommended limit is 6 °C).",
        "2. Consumption: about −3 % of COP per degree, i.e. ~18 % performance lost compared with 26 °C, and a compressor running non-stop.",
        "Recommended setpoint: 32 − 6 = 26 °C.",
      ],
    },
  ],
};
