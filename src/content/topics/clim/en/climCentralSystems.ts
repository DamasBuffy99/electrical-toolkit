import { TopicContent } from '../../../types';
import { fig } from '../fig';

export const climCentralSystemsContent: TopicContent = {
  title: 'The families of central systems',
  subtitle: 'All-air, air/water, fan coils and complementary processes',
  blocks: [
    {
      type: 'text',
      text: 'In a central installation, cooling is produced in one place (a plant room, a roof) then carried to the rooms. It always has three levels: production (chiller, air handling unit), distribution (air ducts, water pipes) and terminals in the rooms (grilles, fan coils).',
    },
    { type: 'illustration', name: 'clim-central', caption: 'A chilled-water plant: production, distribution, terminals' },
    fig('p110_0', 'Figure 5.1 — components of a system: central equipment, primary fluids, terminals'),
    {
      type: 'text',
      text: 'The fluid carrying the cooling defines the family: air only (“all-air”), or water for cooling and air for hygiene (“air/water”). Control and safety are always added: thermostats, pressure switches, fire detectors, smoke vents.',
    },

    { type: 'heading', text: 'Constant-volume “all-air” systems' },
    {
      type: 'text',
      text: 'An air handling unit (AHU) cools and dehumidifies the air, then blows it into the rooms through ducts. The flow stays constant; only the temperature varies with the load. Typically 1,000 to 100,000 m³/h, supplied at low velocity (2 to 6 m/s) through wall or ceiling grilles.',
    },
    {
      type: 'bullets',
      items: [
        'Single-zone chilled-water AHU: the cooling coil is fed by a chiller.',
        'Direct-expansion AHU: the refrigeration machine’s evaporator sits in the air handling casing.',
        'In hot countries, there is no need to order heating and reheat coils; the humidifier is only useful in the Sahel.',
        'Dual-duct (hot/cold) systems are reserved for very strict requirements: unsuited to ordinary needs in hot countries.',
      ],
    },
    { type: 'warning', text: "Chapter 3 says a central unit handles flows “up to 20,000 m³/h”, while chapter 5 gives 1,000 to 100,000 m³/h for a constant-volume AHU. The first figure matches common packaged units, the second large custom AHUs." },
    fig('p112_0', 'Figure 5.2 — single-duct constant-volume plant'),
    { type: 'illustration', name: 'clim-central', props: { highlight: 'ahu' }, caption: 'The AHU: it treats the air (and fresh air) before distributing it' },
    { type: 'subheading', text: 'The rooftop' },
    {
      type: 'text',
      text: 'A rooftop is a single-zone direct-expansion plant installed on the roof: everything is in one casing. Ideal for large office floors, public halls, supermarkets, restaurants and workshops. Drawback: the fans moving all that air are expensive to run.',
    },
    fig('p113_0', 'Figure 5.3 — rooftop unit'),

    { type: 'heading', text: 'Variable air volume (VAV) “all-air” systems' },
    {
      type: 'text',
      text: 'Here, air is supplied at constant temperature but its flow varies with each room’s needs. A thermostat drives a motorised damper in a “VAV box” (lined with acoustic absorbers) or directly in the diffuser. The duct network is low (2 to 6 m/s) or medium velocity (6 to 15 m/s).',
    },
    fig('p114_0', 'Figure 5.4 — variable air volume plant'),
    fig('p115_0', 'Figures 5.5 and 5.6 — flow control by VAV box or by diffuser'),
    {
      type: 'bullets',
      items: [
        'Very attractive for rooms with low but varying loads: good energy optimisation.',
        'Fans must follow the pressure changes: variable speed is the best solution.',
        'Pitfall: at low flow, the air mixes poorly and falls on occupants. Special diffusers blowing along the ceiling (Coanda effect) are used.',
      ],
    },

    { type: 'heading', text: 'Mixed “air/water” systems' },
    {
      type: 'text',
      text: 'Water removes the heat from the rooms; an air network brings hygienic fresh air (and dries it). They offer flexibility and comfort and cost less to run than all-air: moving cooling with water (a pump) uses far less energy than with air (a fan).',
    },
    { type: 'subheading', text: 'Induction units' },
    {
      type: 'text',
      text: 'Placed under windows, they receive pressurised primary air (100 to 400 Pa, 15 to 25 m/s). The jets induce room air through a cooling coil. Rigid to install and energy-hungry (primary air blown continuously), they are practically absent in hot countries.',
    },
    fig('p116_0', 'Figures 5.7 and 5.8 — operation and view of an induction unit'),
    { type: 'subheading', text: 'Fan coils: the dominant system' },
    {
      type: 'text',
      text: 'A pipe network brings chilled water to a coil inside a fan coil unit (FCU) in each room. Its fan blows room air, possibly mixed with fresh air. It is by far the most used central system: an empty hotel room can be switched off and brought back to temperature very quickly.',
    },
    { type: 'illustration', name: 'clim-central', props: { highlight: 'fancoil' }, caption: 'One fan coil per room, fed with chilled water' },
    fig('p117_0', 'Figure 5.9 — air conditioning with fan coils'),
    fig('p118_0', 'Figures 5.10 and 5.11 — operation and view of a fan coil'),
    fig('p118_1', 'Figure 5.12 — the different ways of bringing fresh air to a fan coil'),
    fig('p119_0', 'Figure 5.13 — ducted fan coil in a false ceiling'),
    fig('p119_1', 'Figure 5.14 — integration in a hotel room'),

    { type: 'heading', text: 'Complementary processes' },
    { type: 'text', text: 'Other devices reduce the load without providing full air conditioning on their own. They are combined with the systems above:' },
    {
      type: 'table',
      headers: ['Process', 'Principle', 'Key point'],
      rows: [
        ['Water-cooled luminaires', 'Water flows around the light fittings', '~70 % of their heat removed, water +5 °C'],
        ['Thermal shutters', 'Water in shutters in front of windows', 'Removes the hot radiation of glazing'],
        ['Displacement diffusers', 'Air supplied at floor level, slowly, 1 to 3 K colder', 'Clean air below, heat pushed upward'],
        ['Chilled ceilings', 'Cold water in slabs, capillary mats or false ceiling', 'Condensation risk: keep water above dew point'],
        ['Chilled beams', 'Coil under the ceiling, natural convection or induction', 'No condensate recovery'],
        ['Cooled floor', 'Water or refrigerant in the floor', 'Silent, but inertia and condensation'],
        ['Natural-convection cabinet', 'Cooling coil, thermosiphon circulation', 'No fan: silent and frugal, limited capacity'],
      ],
    },
    fig('p120_0', 'Figure 5.15 — water cooling network for luminaires'),
    fig('p122_0', 'Figure 5.17 — displacement diffusers (left) vs conventional supply (right)'),
    fig('p123_0', 'Figure 5.18 — chilled ceilings combined with fan coils'),
    fig('p124_0', 'Figures 5.19 and 5.20 — natural-convection and induction chilled beams'),
    { type: 'subheading', text: 'Adiabatic cooling and the DEC process' },
    {
      type: 'text',
      text: 'Humidifying air cools it (almost constant enthalpy). To avoid supplying air that is too humid, the return air is humidified and its coolness is transferred to the fresh air through a plate heat exchanger. Combined with a conventional machine, this cuts the installed cooling capacity by about 50 %. The DEC process goes further: it dries fresh air by adsorption then cools it by evaporation, with no refrigeration machine.',
    },
    fig('p126_0', 'Figure 5.22 — heat exchanger with adiabatic cooling'),
    { type: 'subheading', text: 'Cold storage' },
    {
      type: 'text',
      text: 'With a chilled-water plant, ice can be made at night and melted during the day: the chiller size and subscription shrink and off-peak rates are used. But many sub-Saharan countries have no off-peak tariff, or the price gap is too small to pay back the storage in 3 or 4 years.',
    },
    fig('p127_0', 'Figures 5.23 and 5.24 — ice storage on tubes and in nodules'),

    { type: 'heading', text: 'Comparing the systems' },
    fig('p129_0', 'Table 5.2 — assessment of systems: load coverage, comfort, running costs'),
    {
      type: 'bullets',
      items: [
        'Installations where air is supplied from bottom to top (displacement) are the most expensive.',
        'Air/water systems are very attractive in running costs: they are the only ones used in high-rise buildings.',
        'Variable-volume all-air systems pay off if operation means reduced flows for much of the year.',
      ],
    },
    { type: 'heading', text: "Exercises" },
    {
      type: 'exercise',
      question: "To carry 10 kW of cooling, compare the water flow (5 K difference) and the air flow (10 K difference) needed. What do you conclude?",
      solution: [
        "Water: m = 10 / (4.18 × 5) = 0.48 kg/s ≈ 1.7 m³/h.",
        "Air: qv = 10,000 / (0.33 × 10) ≈ 3,030 m³/h.",
        "About 1,800 times more air volume than water: a pump uses far less energy than a fan. That is why air/water systems are cheaper to run than all-air.",
      ],
    },
    {
      type: 'exercise',
      question: "A single-storey supermarket (one large hall) hesitates between fan coils and a rooftop. What do you advise?",
      solution: [
        "One large hall with a uniform load under an accessible roof: the textbook application of a rooftop (single-zone direct-expansion unit).",
        "Fan coils make sense when many rooms must be controlled separately (hotel, offices).",
        "Watch out: the energy cost of the rooftop fans — provide variable speed and good maintenance.",
      ],
    },
  ],
};
