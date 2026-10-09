import { TopicContent } from '../../../types';

export const abcExchangersContent: TopicContent = {
  title: 'Condenser, expansion valve, evaporator: superheat and subcooling',
  subtitle: 'How the heat exchangers and the expansion valve work, and the two measurements that tell whether the circuit is healthy',
  blocks: [
    {
      type: 'text',
      text: 'The compressor circulates the refrigerant, but the condenser, the expansion valve and the evaporator are what exchange heat. Two simple measurements, superheat and subcooling, tell the technician whether these parts are correctly fed and whether the refrigerant charge is right.',
    },
    { type: 'illustration', name: 'tech-sh-sc', caption: 'Superheat at the evaporator, subcooling at the condenser' },

    { type: 'heading', text: 'The condenser' },
    {
      type: 'text',
      text: 'Superheated vapour from the compressor enters it, is desuperheated, condenses (first droplets appear, then only liquid remains), and the liquid is subcooled before leaving towards the expansion valve. Its capacity is that of the evaporator PLUS that of the compressor motor.',
    },
    {
      type: 'bullets',
      items: [
        'Air-cooled condenser: the difference between entering air and condensing temperature is roughly constant for a given unit, about 15 K. With 35 °C outside, it condenses at around 50 °C.',
        'Recommended air velocity across the coil: 2 to 4 m/s. Fans are controlled (stages or drive) because outdoor temperature varies a lot.',
        'A dirty condenser that raises condensing by 5 °C loses about 7 % of capacity and raises consumption by about 16 %.',
        'Water-cooled condensers: coaxial (two tubes in a spiral, counter-flow), shell-and-coil (coil in a vessel), shell-and-tube (removable, cleanable), plate (compact, efficient, sensitive to fouling). Water warms up by 8 to 12 K.',
      ],
    },
    { type: 'illustration', name: 'clim-outdoor', caption: 'A cool, clean condenser: fewer kWh' },

    { type: 'heading', text: 'Cooling towers and water treatment' },
    {
      type: 'table',
      headers: ['Type', 'Principle', 'Key point'],
      rows: [
        ['Open tower', 'condenser water trickles against the air, part of it evaporates', 'heavy maintenance: scale, algae, corrosion, legionella'],
        ['Closed tower', 'condenser water stays in a sprayed coil', 'less water to treat, fewer bacteria'],
        ['Evaporative condenser', 'the condenser itself is sprayed', 'more refrigerant in the circuit'],
        ['Dry cooler', 'dry fan-cooled coil (glycol water)', 'no water consumed'],
        ['Hybrid tower', 'evaporative in summer, dry the rest of the year', 'saves water, limits bacteria'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'A poorly maintained tower spreads aerosols contaminated with Legionella and fills up with scale, algae and biofilm.',
        'Maintenance: chlorine disinfection, draining, mechanical cleaning, then continuous treatment (hardness and conductivity control, biocide, biodispersant, algaecide if needed).',
        'Legionella thresholds: < 1,000 CFU/l → normal maintenance; 1,000 to 10,000 CFU/l → corrective actions; > 10,000 CFU/l → immediate shutdown, draining, cleaning and disinfection.',
      ],
    },

    { type: 'heading', text: 'Subcooling: a charge indicator' },
    { type: 'formula', text: 'Subcooling = condensing T (read on the HP gauge) − liquid T at the condenser outlet' },
    {
      type: 'bullets',
      items: [
        'Normal value: 4 to 7 K.',
        'Too low (< 4 K): the last bubble condenses right at the end of the condenser → probable undercharge.',
        'Too high (> 7 K): the condenser is “flooded” with liquid → probable overcharge.',
      ],
    },

    { type: 'heading', text: 'Expansion devices' },
    {
      type: 'text',
      text: 'The expansion device drops the liquid’s pressure (by throttling) so that it evaporates at low temperature, and it meters the refrigerant flow sent to the evaporator.',
    },
    {
      type: 'bullets',
      items: [
        'Capillary: a simple thin tube (0.5 to 2 mm) calibrated by length. Reliable, no moving parts, but fixed flow: superheat varies with load. It equalises HP and LP at standstill (easy restart) and requires an accurate charge and a very clean, dry circuit.',
        'Thermostatic expansion valve (TXV): a bulb at the evaporator outlet pushes to open; evaporating pressure and the spring (adjusting screw) push to close. It keeps superheat constant.',
        'External equaliser: for evaporators with a high pressure drop (several rows, liquid distributor); a small tube brings the evaporator OUTLET pressure under the diaphragm.',
        'Electronic expansion valve (stepper or pulse): driven by a controller from sensors and pressure transducers; very accurate (1.5 to 1.8° per step). Essential in VRF, multi-splits, heat pumps; available as “bi-flow” (both directions).',
      ],
    },
    {
      type: 'table',
      headers: ['Bulb charge', 'Behaviour'],
      rows: [
        ['Standard (liquid)', 'fast response, but can overload the compressor at start after a long stop'],
        ['MOP', 'limited charge: above a maximum pressure the valve closes (protects the motor, especially in low-temperature refrigeration)'],
        ['Adsorption', 'inert gas + adsorbent: reacts gently to sudden changes'],
        ['Anti-hunting', 'MOP + porous material: limits hunting, slower response'],
      ],
    },
    {
      type: 'note',
      text: 'The bulb: in tight contact with the suction tube, on a horizontal section, with its original clamp, insulated. On a tube smaller than 3/4" it sits at “12 o’clock”, above that towards “4 o’clock”. With an external equaliser, the bulb is placed BEFORE the equaliser connection.',
    },

    { type: 'heading', text: 'The evaporator and superheat' },
    {
      type: 'text',
      text: 'The expanded liquid enters mostly liquid, evaporates as it absorbs heat from the air or water, and becomes 100 % vapour before the outlet. The end of the evaporator is the superheat zone.',
    },
    { type: 'formula', text: 'Superheat = T measured at the bulb (evaporator outlet) − evaporating T (read on the LP gauge)' },
    {
      type: 'bullets',
      items: [
        'Normal value: 5 to 8 K depending on the application.',
        'Too high: evaporator underfed (valve too closed or undercharge) → low LP, little cooling, setpoint not reached.',
        'Too low: evaporator overfed (valve too open or overcharge) → risk of liquid slugging the compressor.',
        'Total superheat (up to the compressor inlet): 15 K maximum, because suction vapour cools the motor.',
        'Example: evaporator outlet 6.5 °C, LP reading 4 bar with R22 (0 °C) → superheat 6.5 K.',
      ],
    },
    {
      type: 'table',
      headers: ['Water evaporators', 'Air evaporators'],
      rows: [
        ['coaxial (tricky maintenance, scale-free water)', 'static / natural convection (display cases)'],
        ['brazed plate (compact, efficient, sensitive to fouling and freezing)', 'fan-coil type (forced convection), fins 3 to 8 mm apart'],
        ['dry-expansion shell-and-tube', 'wall-mounted, ceiling-mounted (drain tray and defrost)'],
      ],
    },
    { type: 'note', text: 'Eutectic plates: the evaporator sits in a solution that freezes and stores cold as latent heat (refrigerated transport).' },

    { type: 'heading', text: 'Refrigerants with glide (zeotropes)' },
    {
      type: 'text',
      text: 'A zeotropic blend (400 series, such as R407C) does not change state at constant temperature: at constant pressure, temperature rises during evaporation and falls during condensation. We must then distinguish the bubble point (start of boiling, saturated liquid) and the dew point (saturated vapour).',
    },
    {
      type: 'bullets',
      items: [
        'Superheat = bulb T − DEW point at LP.',
        'Subcooling = BUBBLE point at HP − liquid T.',
        'R407C example: LP 4.8 bar (bubble 0.7 °C, dew 6.8 °C), bulb at 12 °C → superheat = 12 − 6.8 = 5.2 K, not 11.3 K.',
      ],
    },
    {
      type: 'warning',
      text: 'The book contradicts itself on R407C: in one place it describes it as “23 % R23”, which would boil at −82 °C; elsewhere, correctly, as an R32 / R125 / R134a blend. The real composition is 23 % R32, 25 % R125 and 52 % R134a. The book also calls R410A zeotropic: it is a near-azeotropic blend with negligible glide (< 0.2 K), behaving almost like a pure fluid.',
    },
    {
      type: 'warning',
      text: 'Ranges vary between pages of the book: superheat “5 to 7”, “5 to 8” or “4 to 8” K; condensing-to-air difference “15”, “12 to 15” or “11 to 15” K. These are orders of magnitude: the manufacturer’s manual remains the reference.',
    },

    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'On a split, LP corresponds to 3 °C evaporating, the evaporator outlet tube is at 14 °C; HP corresponds to 48 °C and the liquid leaves at 46 °C. Diagnosis?',
      solution: ['Superheat = 14 − 3 = 11 K: too high (evaporator underfed).', 'Subcooling = 48 − 46 = 2 K: too low.', 'Together they point to an undercharge (leak): find the leak before topping up.'],
    },
    {
      type: 'exercise',
      question: 'On an R407C installation, HP is 18 bar (dew 48.2 °C, bubble 43.4 °C) and the liquid leaves at 42 °C. Calculate the subcooling correctly.',
      solution: ['Refrigerant with glide: use the BUBBLE point.', 'Subcooling = 43.4 − 42 = 1.4 K (low), not 48.2 − 42 = 6.2 K, which would wrongly suggest a correct charge.'],
    },
  ],
};
