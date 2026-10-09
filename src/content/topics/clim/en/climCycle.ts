import { TopicContent } from '../../../types';
import { fig } from '../fig';

export const climCycleContent: TopicContent = {
  title: 'How an air conditioner makes cold',
  subtitle: 'The refrigeration cycle, COP, EER and units (kW, BTU/h, HP)',
  blocks: [
    {
      type: 'text',
      text: 'An air conditioner does not “create” cold: it moves heat. It takes heat from the room (cold side) and rejects it outdoors (hot side), like a pump lifting water uphill. To do this work, it uses electricity.',
    },
    { type: 'illustration', name: 'clim-cycle', caption: 'The refrigeration cycle of a split: heat is pumped from the room to the outside' },

    { type: 'heading', text: 'The 4 parts of the refrigerant circuit' },
    {
      type: 'text',
      text: 'A refrigerant (R22 in the past, R410A, R32… today) flows in a closed loop and changes state: it evaporates where heat must be absorbed and condenses where heat must be rejected.',
    },
    { type: 'subheading', text: '1 · The evaporator (in the room)' },
    {
      type: 'text',
      text: 'The cold, low-pressure refrigerant boils there, absorbing heat from the room air (Q1). On the way, the air is cooled below its dew point: water vapour condenses on the fins → this is dehumidification, hence the water running out of the condensate pipe.',
    },
    { type: 'illustration', name: 'clim-cycle', props: { highlight: 'evaporator' }, caption: 'Evaporator: the refrigerant boils and absorbs the room’s heat' },
    { type: 'subheading', text: '2 · The compressor (outdoor unit)' },
    {
      type: 'text',
      text: 'It draws in the vapour and compresses it: its pressure and temperature rise sharply (very hot gas). It is the part that uses electricity (W) and the most expensive component.',
    },
    { type: 'illustration', name: 'clim-cycle', props: { highlight: 'compressor' }, caption: 'Compressor: it uses electricity and heats the gas' },
    { type: 'subheading', text: '3 · The condenser (outdoor unit)' },
    {
      type: 'text',
      text: 'The hot gas gives its heat to the outdoor air (or to water) and turns back into liquid. It rejects Q2 = Q1 + W: the room’s heat plus the compressor’s energy. That is why the air blown by an outdoor unit is so hot.',
    },
    { type: 'illustration', name: 'clim-cycle', props: { highlight: 'condenser' }, caption: 'Condenser: all the heat is rejected outside' },
    { type: 'subheading', text: '4 · The expansion valve' },
    {
      type: 'text',
      text: 'The high-pressure liquid passes through a restriction (expansion valve or capillary tube): its pressure drops, part of it flashes to vapour and it becomes very cold. It returns to the evaporator and the cycle starts again.',
    },
    { type: 'illustration', name: 'clim-cycle', props: { highlight: 'valve' }, caption: 'Expansion valve: the pressure drop cools the refrigerant' },
    fig('p081_0', 'Guide figure 4.1 — energy balance of an air conditioner: Q2 = Q1 + W'),

    { type: 'heading', text: 'COP and EER: how efficient the machine is' },
    {
      type: 'text',
      text: 'A good air conditioner removes a lot of heat for little electricity. This is measured by the cooling coefficient of performance (COP), also called cooling efficiency (EF):',
    },
    { type: 'formula', text: 'Cooling COP = Cooling capacity Pf (W) / Power input Pa (W) = Q1 / W' },
    { type: 'text', text: 'American manufacturers use the EER (Energy Efficiency Ratio), which mixes two units:' },
    { type: 'formula', text: 'EER = Cooling capacity (BTU/h) / Power input (W)   ;   1 W = 3.412 BTU/h  →  EER = 3.412 × COP' },
    {
      type: 'table',
      headers: ['Unit', 'Typical COP', 'Equivalent EER'],
      rows: [
        ['Window / split (air-cooled)', '2 to 3', '7 to 10'],
        ['Window (recommended minimum)', '> 2.3', '> 7.8'],
        ['Split (recommended minimum)', '> 2.6', '> 8.9'],
        ['Air-cooled packaged unit', '> 2.5', '> 8.5'],
        ['Water-cooled packaged unit', '> 3.5', '> 11.9'],
      ],
    },
    { type: 'formula', text: 'Example: a split producing 1 kW of cooling with COP = 2.5 draws 1 / 2.5 = 0.4 kW of electricity' },
    {
      type: 'note',
      text: 'The COP is not fixed: it drops when it is hotter outside (the condenser struggles) and when the indoor setpoint is lower (the evaporator is colder). About −3 % of COP per degree of lower setpoint.',
    },

    { type: 'heading', text: 'Why two machines of the same capacity have different COPs' },
    {
      type: 'text',
      text: 'In a real cycle, losses are split roughly as follows: 45 to 50 % in the compressor, 35 to 40 % in the heat exchangers (evaporator and condenser), 10 to 15 % in the expansion valve and accessories. An efficient unit therefore has a good compressor (rotary, scroll, inverter) and large heat exchangers.',
    },
    fig('p082_0', 'Figure 4.2 — the cycle on the pressure–enthalpy chart: efficiency = II / I'),
    {
      type: 'text',
      text: 'On the chart, width “I” is the compressor’s work and “II” the cooling produced. A large evaporator lets the refrigerant evaporate at a higher temperature: the compressor works less for the same cooling.',
    },
    fig('p055_0', 'Table 2.1 — usual Carnot efficiency of the different compressor types'),

    { type: 'heading', text: 'Units of cooling capacity' },
    {
      type: 'text',
      text: 'Beware of confusion: an air conditioner has two powers. The cooling capacity (cold produced, in kW of cooling or kWr) and the electrical power input (in kW). A “9,000 BTU” unit produces about 2.6 kW of cooling but only draws about 1 kW.',
    },
    {
      type: 'table',
      headers: ['Unit', 'Equivalent'],
      rows: [
        ['1 kW of cooling (kWr)', '3,412 BTU/h'],
        ['1 “commercial” HP (CV)', '≈ 8,000 BTU/h ≈ 2.3 kWr'],
        ['9,000 BTU/h', '≈ 2.6 kWr'],
        ['12,000 BTU/h (1 ton)', '≈ 3.5 kWr'],
        ['24,000 BTU/h', '≈ 7 kWr'],
      ],
    },
    fig('p069', 'Guide page 54 — power levels: 1 kWr = 3,412.14 BTU/h and 1 HP = 8,000 BTU/h'),
    {
      type: 'note',
      text: 'Room units (window and split) draw 0.75 to 2.2 kW of electricity and produce about 1.8 to 7 kW of cooling. They are often sold “in HP”: that is a commercial label — always check the cooling capacity in kW on the datasheet.',
    },

    { type: 'heading', text: 'Sensible heat and latent heat' },
    {
      type: 'bullets',
      items: [
        'Sensible heat: the heat that raises the temperature (read on a thermometer).',
        'Latent heat: the heat contained in water vapour. To remove it, the water must be condensed on the evaporator.',
        'A unit’s sensible heat ratio (SHR) = sensible part / total capacity. It is generally 0.75 to 0.85: the lower it is, the more the unit dehumidifies.',
      ],
    },
    { type: 'note', text: 'In a humid climate (Douala, Abidjan), choose a unit able to handle the latent load: otherwise the room will be cool but clammy.' },

    { type: 'heading', text: 'Reversible air conditioner and evaporative cooler' },
    {
      type: 'text',
      text: 'With a 4-way valve, the cycle is reversed: the indoor coil becomes the condenser and heats the room (heat pump). Useful in the Sahel during cool nights, but rarely needed in the tropics.',
    },
    fig('p084_0', 'Figures 4.3 and 4.4 — 4-way valve: cooling mode and heating mode'),
    {
      type: 'text',
      text: 'In dry climates there is a very economical solution: the evaporative cooler (cooling by evaporating water). Outdoor air goes through a wet pad: the water evaporates by absorbing heat, and the air comes out cooler and more humid, without a compressor. It only works well with dry air (target humidity 40–50 %): useless in Douala, very effective in Niamey or Ouagadougou.',
    },
    fig('p085', 'Page 70 — limits of evaporative cooling (enthalpy h ≤ hi − 1.2 kcal/kg)'),
  ],
};
