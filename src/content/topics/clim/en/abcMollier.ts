import { TopicContent } from '../../../types';

export const abcMollierContent: TopicContent = {
  title: 'The pressure–enthalpy chart and the cycle balance',
  subtitle: 'Reading the Mollier chart, plotting a real cycle and deriving capacity and COP',
  blocks: [
    {
      type: 'text',
      text: 'The pressure–enthalpy chart (or Mollier chart, after the German physicist) is the identity card of a refrigerant. It lets us follow the state of the fluid at each step of the cycle and read the energy exchanged directly. Each refrigerant has its own chart.',
    },
    { type: 'illustration', name: 'tech-ph', caption: 'The real cycle on the pressure–enthalpy chart' },

    { type: 'heading', text: 'Reading the chart' },
    {
      type: 'bullets',
      items: [
        'Horizontal axis: enthalpy h (kJ/kg), the energy contained in 1 kg of refrigerant.',
        'Vertical axis: ABSOLUTE pressure (bar), often on a logarithmic scale.',
        'The bell-shaped saturation curve separates liquid (left), liquid + vapour mixture (inside) and vapour (right).',
        'Isobars (constant pressure): horizontal. Isotherms (constant temperature): horizontal INSIDE the bell, then dropping steeply in the vapour.',
        'Quality lines: share of vapour in the mixture (0 to 1). Isochores: constant specific volume. Isentropes: curves followed by an ideal compression.',
      ],
    },
    { type: 'note', text: 'Inside the bell, pressure and temperature are linked: one pressure corresponds to one saturation temperature. This is what the gauge scale shows.' },

    { type: 'heading', text: 'The 7 steps of the real cycle' },
    {
      type: 'table',
      headers: ['Points', 'Step', 'What happens'],
      rows: [
        ['1 → 2', 'Compression', 'superheated LP vapour → very hot HP vapour; enthalpy rises by the work supplied'],
        ['2 → 3', 'Desuperheating', 'the vapour cools down to saturation (discharge line, condenser inlet)'],
        ['3 → 4', 'Condensation', 'vapour turns into liquid at constant pressure AND temperature'],
        ['4 → 5', 'Subcooling', 'the liquid keeps cooling below the condensing temperature'],
        ['5 → 6', 'Expansion', 'pressure drops sharply in the expansion valve; part of the liquid flashes; h does not change'],
        ['6 → 7', 'Evaporation', 'the mixture evaporates at constant pressure and temperature, absorbing heat'],
        ['7 → 1', 'Superheat', 'the vapour warms further: guarantee that no liquid droplet remains'],
      ],
    },
    { type: 'illustration', name: 'tech-ph', props: { highlight: 'evaporator' }, caption: 'Evaporation (6 → 7) then superheat (7 → 1): this is where cooling is produced' },
    { type: 'illustration', name: 'tech-ph', props: { highlight: 'condenser' }, caption: 'Desuperheating, condensation and subcooling: heat is rejected' },
    {
      type: 'warning',
      text: 'The book writes that during expansion “enthalpy is zero”. Read: the CHANGE in enthalpy is zero (isenthalpic expansion, points 5 and 6 share the same horizontal position). Enthalpy itself is not zero.',
    },

    { type: 'heading', text: 'Plotting a cycle from readings' },
    {
      type: 'bullets',
      items: [
        'Evaporating isobar: LP gauge pressure + 1 bar (absolute pressure).',
        'Condensing isobar: HP gauge pressure + 1 bar.',
        'Point 1 (compressor inlet): on the LP isobar, at the evaporating temperature + superheat (≈ 5 K).',
        'Point 2 (compressor outlet): follow the isentrope from point 1 up to the HP isobar.',
        'Point 5 (expansion valve inlet): on the HP isobar, at the measured liquid temperature (subcooling included).',
        'Point 6 (evaporator inlet): straight down from point 5 to the LP isobar.',
      ],
    },
    { type: 'illustration', name: 'tech-ph', props: { highlight: 'compressor' }, caption: 'Compression (roughly) follows an isentrope' },

    { type: 'heading', text: 'The energy balance' },
    { type: 'formula', text: 'Cooling per kg of refrigerant = h1 − h5   (kJ/kg)' },
    { type: 'formula', text: 'Compression work per kg = h2 − h1' },
    { type: 'formula', text: 'Heat rejected at the condenser per kg = h2 − h5 = cooling + work' },
    { type: 'formula', text: 'Theoretical COP = (h1 − h5) / (h2 − h1)   ;   Cooling capacity = mass flow × (h1 − h5)' },
    {
      type: 'bullets',
      items: [
        'For comparison, vaporising 1 kg of water takes 2,257 kJ: a refrigerant is chosen to evaporate at low temperature with a high latent heat.',
        'The greater the subcooling, the lower h5, and the more cooling each kg of refrigerant produces. The book’s example: with R407C, cooling the liquid from 25 to 15 °C before the expansion valve raises cooling capacity by about 7 % (the role of the liquid/suction heat exchanger).',
        'The greater the gap between evaporation and condensation (compression ratio), the more work and the lower the COP.',
      ],
    },

    { type: 'heading', text: 'Vocabulary to master' },
    {
      type: 'table',
      headers: ['Term', 'Meaning'],
      rows: [
        ['Enthalpy', 'energy contained in the refrigerant (kJ/kg)'],
        ['Entropy', 'quantity linked to heat exchanged and “disorder”; constant in an ideal compression'],
        ['Saturation temperature / pressure', '(T, p) pair at which boiling and condensation occur'],
        ['Subcooled liquid', 'liquid colder than its saturation temperature'],
        ['Saturated liquid', 'liquid at saturation temperature, ready to boil'],
        ['Saturated vapour', 'vapour with no liquid, at saturation temperature'],
        ['Superheated vapour', 'vapour hotter than its saturation temperature'],
      ],
    },

    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'On a chart you read h5 = 250 kJ/kg, h1 = 425 kJ/kg and h2 = 465 kJ/kg. Calculate the cooling per kg, the work, the heat rejected and the theoretical COP.',
      solution: ['Cooling: 425 − 250 = 175 kJ/kg.', 'Work: 465 − 425 = 40 kJ/kg.', 'Rejected at the condenser: 465 − 250 = 215 kJ/kg (= 175 + 40).', 'Theoretical COP = 175 / 40 ≈ 4.4 (the real COP will be lower because of losses).'],
    },
    {
      type: 'exercise',
      question: 'With the same cycle, what refrigerant flow is needed to produce 7 kW of cooling? What does the condenser reject?',
      solution: ['Flow = 7 / 175 = 0.04 kg/s (144 kg/h).', 'Condenser: 0.04 × 215 = 8.6 kW, i.e. the room’s 7 kW + 1.6 kW of compression.'],
    },
  ],
};
