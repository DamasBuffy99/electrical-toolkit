import { TopicContent } from '../../../types';

export const abcPhysicsContent: TopicContent = {
  title: 'Heat, pressure and changes of state',
  subtitle: 'The physical laws the HVAC technician uses every day, sometimes without knowing it',
  blocks: [
    {
      type: 'text',
      text: 'An air conditioner is just a clever application of a few physical laws: heat flows from hot to cold, an evaporating liquid absorbs a lot of energy, and the boiling temperature depends on pressure. This lesson, based on “ABC de la climatisation”, lays these foundations before opening the refrigerant circuit.',
    },
    { type: 'illustration', name: 'tech-heating-curve', caption: '1 kg of water: sensible heat raises the temperature, latent heat changes the state' },

    { type: 'heading', text: 'Heat and temperature: two different things' },
    {
      type: 'bullets',
      items: [
        'Heat is energy: the agitation of molecules. It is measured in joules (J, kJ); a heat flow in watts (1 W = 1 J/s).',
        'Temperature measures the level of agitation (°C, or kelvins: T(K) = T(°C) + 273).',
        'Spontaneously, heat always flows from the hot body to the cold one (Clausius). Two bodies at the same temperature exchange nothing.',
        'To move it from cold to hot — the purpose of an air conditioner — a machine and work are needed: the compressor.',
      ],
    },
    {
      type: 'warning',
      text: 'The book attributes the impossibility of spontaneous heat flow from cold to hot to the “first law” of thermodynamics. It is actually the SECOND law (Clausius statement). The first law says energy is conserved: it is what gives Q2 = Q1 + W at the condenser.',
    },

    { type: 'heading', text: 'The three modes of heat transfer' },
    {
      type: 'bullets',
      items: [
        'Conduction: through a solid (a wall, a tube wall). The bigger the temperature difference, the stronger the flow (Fourier’s law). Good electrical conductors (copper, aluminium) are also good thermal conductors: that is why heat exchangers are made of copper and aluminium.',
        'Convection: in a moving fluid (air, water). Hot air, lighter, rises: this is stratification in large spaces.',
        'Radiation: without contact, even in a vacuum — the sun on a facade.',
      ],
    },
    { type: 'illustration', name: 'clim-heat-gains', caption: 'A room’s gains combine all three modes: conduction, convection, radiation' },

    { type: 'heading', text: 'Sensible heat and latent heat' },
    {
      type: 'text',
      text: 'Heating 1 litre of water from 0 to 100 °C takes 419 kJ: this is sensible heat, you can “sense” it on a thermometer (4.18 kJ per kg and per degree). But turning that water into vapour then takes another 2,257 kJ… without the temperature moving from 100 °C: this is the latent heat of vaporisation, more than 5 times larger.',
    },
    {
      type: 'table',
      headers: ['Change of state', 'Direction', 'Latent heat of water'],
      rows: [
        ['Melting / solidification', 'solid ⇄ liquid', '335 kJ/kg'],
        ['Vaporisation / condensation', 'liquid ⇄ gas', '2,257 kJ/kg (at 100 °C)'],
        ['Sublimation', 'solid → gas directly', '—'],
      ],
    },
    {
      type: 'note',
      text: 'This is the whole secret of cooling: a fluid evaporating in the evaporator absorbs a huge amount of heat at constant temperature. And in air conditioning, total capacity = sensible capacity (lowering the air temperature) + latent capacity (condensing its water vapour).',
    },
    {
      type: 'warning',
      text: 'The book writes the latent heat of melting ice as “335 kJ/kg.K”. The correct unit is kJ/kg: a latent heat does not depend on a temperature difference, since the temperature stays constant during the change of state.',
    },

    { type: 'heading', text: 'Pressure: absolute, gauge, vacuum' },
    { type: 'formula', text: 'P = F / S   (1 Pa = 1 N/m²; 1 bar = 100,000 Pa; 1 psi ≈ 0.069 bar)' },
    {
      type: 'bullets',
      items: [
        'Atmospheric pressure at sea level: 1.013 bar. It drops with altitude.',
        'Gauge pressure: what the technician’s gauge shows, whose zero is atmospheric pressure. It can be negative (vacuum).',
        'Absolute pressure: measured from a perfect vacuum, always positive.',
      ],
    },
    { type: 'formula', text: 'absolute pressure = gauge pressure + 1.013 bar' },
    { type: 'illustration', name: 'tech-pressure', caption: 'The two pressure scales: refrigerant charts use absolute pressure' },
    {
      type: 'warning',
      text: 'In one place the book gives an atmospheric pressure of “1.033 bar” and elsewhere 1.013 bar. The correct value is 1.013 bar (= 1 atmosphere). The figure 1.033 is the old kg/cm² unit (1 atm = 1.033 kgf/cm²).',
    },
    {
      type: 'text',
      text: 'Instruments: barometer (atmospheric pressure), Bourdon-tube or electronic gauge (circuit pressures), vacuum gauge (vacuum, 0 to −1 bar gauge or absolute mbar).',
    },

    { type: 'heading', text: 'Pressure and boiling temperature are linked' },
    {
      type: 'text',
      text: 'Water boils at 100 °C at sea level but at 85 °C at 4,800 m. In a closed vessel containing a liquid and its vapour, the pressure depends only on the temperature: this is the saturation pressure. That is why refrigeration gauges carry a temperature scale for each refrigerant: reading the pressure means reading the evaporating or condensing temperature.',
    },
    {
      type: 'note',
      text: 'This relation only holds while liquid remains. If all the liquid has evaporated, pressure is no longer tied to temperature (superheated vapour). Conversely, evacuating a circuit makes the water inside boil at low temperature: this is how vacuum dehydration works.',
    },

    { type: 'heading', text: 'The four gas laws' },
    {
      type: 'table',
      headers: ['Law', 'Statement', 'Technician’s use'],
      rows: [
        ['Charles', 'at constant pressure, volume rises with temperature', 'the hot-air balloon'],
        ['Gay-Lussac', 'at constant volume, p1/T1 = p2/T2 (T in kelvins)', 'nitrogen leak test: correct the pressure read for temperature'],
        ['Boyle-Mariotte', 'at constant temperature, p1·V1 = p2·V2', 'compressing a gas'],
        ['Dalton', 'the pressure of a mixture is the sum of partial pressures', 'air in the circuit adds its pressure: HP too high (non-condensables)'],
      ],
    },
    { type: 'formula', text: 'Leak test: expected p2 = p1 × T2 / T1   (absolute values, T in K)' },

    { type: 'heading', text: 'Carnot, heat engine and heat pump' },
    {
      type: 'text',
      text: 'Sadi Carnot (1824) showed that a heat engine needs two sources: a hot one and a cold one. The engine turns part of the heat “flowing down” from hot to cold into work. The heat pump — and so the air conditioner — does the opposite: it uses work to make heat “flow up” from cold to hot.',
    },
    { type: 'illustration', name: 'clim-cycle', caption: 'The refrigeration machine: work (W) to pump heat from cold to hot' },

    { type: 'heading', text: 'Cooling without a compressor?' },
    {
      type: 'bullets',
      items: [
        'Absorption: a pair of fluids (water + lithium bromide, or ammonia + water). A heated generator (gas, solar, waste heat) separates the refrigerant, which condenses, expands and evaporates as usual; an absorber takes it back. No compressor, but a heat source.',
        'Peltier effect: a direct current through semiconductors creates a hot face and a cold face. Silent and compact, but limited to very small capacities (12 V cool boxes, electronics).',
      ],
    },

    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'Your LP gauge reads 4.5 bar. What is the absolute pressure? And in psi?',
      solution: ['Absolute p = 4.5 + 1.013 ≈ 5.5 bar.', 'In psi: 4.5 bar gauge ≈ 4.5 / 0.069 ≈ 65 psi (gauge, “psig”).', 'To read a pressure–enthalpy chart, use the absolute pressure (5.5 bar).'],
    },
    {
      type: 'exercise',
      question: 'A circuit is pressurised with nitrogen to 30 bar at 20 °C. The next day it is 28 °C and you read 30.5 bar. Is there a leak?',
      solution: [
        'Gay-Lussac’s law in kelvins: T1 = 293 K, T2 = 301 K.',
        'Expected pressure (absolute): 31.0 × 301 / 293 ≈ 31.8 bar abs, i.e. ≈ 30.8 bar gauge.',
        'You read 30.5 bar: 0.3 bar less than expected → suspected small leak. Recheck the joints and take another reading at a comparable temperature.',
      ],
    },
    {
      type: 'exercise',
      question: 'How much energy does it take to heat 1 kg of water from 20 to 100 °C, then to evaporate it completely? What do you conclude?',
      solution: ['Heating: 4.18 × 80 ≈ 334 kJ.', 'Evaporation: 2,257 kJ.', 'Evaporation needs almost 7 times more energy: that is why evaporating a fluid is such a powerful way to absorb heat.'],
    },
  ],
};
