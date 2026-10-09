import { TopicContent } from '../../../types';

export const abcSpecialContent: TopicContent = {
  title: 'Chilled beams, cleanrooms, data centres and Legionnaires’ disease',
  subtitle: 'Rooms and risks that call for special solutions',
  blocks: [
    {
      type: 'text',
      text: 'Some rooms are not treated like an ordinary office: very high loads (server rooms), cleanliness requirements (cleanrooms), quiet comfort without draughts (chilled beams). And in any installation with warm, stagnant water, the risk of Legionnaires’ disease must be controlled.',
    },
    { type: 'illustration', name: 'tech-datacenter', caption: 'Cold aisle, hot aisle: how data centres are organised' },

    { type: 'heading', text: 'Chilled beams' },
    {
      type: 'bullets',
      items: [
        'Used in offices, public buildings and hospitals: no filter, no fan, no condensate tray, very little maintenance.',
        'Active (induction) beam: treated fresh air is injected into a plenum (50 to 100 Pa) and, by the Venturi effect, draws room air through a heating or cooling coil; the mixed air is discharged slowly. Fresh-air flow adjustable by a CO₂ sensor.',
        'Passive beam: natural convection only (cooled air falls), cooling only; slower to reach steady state.',
        'Water: velocity 0.2 to 0.3 m/s (above that, noise), hot water ≤ 60 °C.',
        'It must never condense: window contact (stops if the window is open), condensation sensor on the chilled-water supply, water temperature above the dew point.',
      ],
    },
    {
      type: 'warning',
      text: 'For active beams, the book gives a minimum chilled-water temperature “1.5 °C below the dew point” (16.5 °C for an 18 °C dew point), while also aiming to “avoid any condensation” — and for passive beams 0.5 °C ABOVE the dew point. Water colder than the dew point makes the tubes condense: remember to stay above the room’s dew point (with a small margin), for both types.',
    },

    { type: 'heading', text: 'Cleanrooms' },
    {
      type: 'bullets',
      items: [
        'Enclosures where temperature, humidity and particle count are controlled (electronics, pharmaceuticals, health, food, space). ISO 14644 standard (cleanliness classes).',
        'Positive pressure: keeps pollutants out (electronics, pharmaceuticals). Negative pressure: keeps contaminants in (virology laboratories), air entering and leaving through HEPA filters.',
        'Dedicated AHUs: cascade filtration (coarse → fine → HEPA at the end of the chain), heating and cooling coils, centrifugal fans with high available pressure.',
        'Air change rate (supply flow / volume) much higher than in comfort air conditioning, to dilute contaminants.',
      ],
    },

    { type: 'heading', text: 'Cooling a data centre' },
    {
      type: 'bullets',
      items: [
        'IT racks commonly release around 2 kW per m²: the whole room is no longer cooled, but as close as possible to the servers.',
        'Cold aisles / hot aisles: cold air arrives through the raised floor in front of the racks (cold aisle), passes through the servers and comes out at the back (hot aisle), returned at high level.',
        'Cold-aisle containment (doors, roof, blanking between racks): even temperature, less mixing, compressors less stressed.',
        'Direct free cooling (filtered outdoor air), indirect (air/air heat exchanger) or with glycol water (“free chilling”) when the difference with outdoors is large (≈ 15 K). Humidity must be controlled (electrostatic risks).',
        'Example sequence: below 18 °C outdoors, mix of fresh and return air; between 18 and 20 °C, 100 % fresh air; above 25 °C, no more free cooling.',
        'Trends: liquid cold plates on components, or even servers immersed in dielectric oil.',
      ],
    },
    { type: 'illustration', name: 'tech-datacenter', caption: 'Cold-aisle containment prevents hot air from mixing with cold air' },

    { type: 'heading', text: 'Legionnaires’ disease and air conditioning' },
    {
      type: 'bullets',
      items: [
        'Legionnaires’ disease is a severe pneumonia caused by the Legionella bacterium, transmitted by inhaling aerosols of contaminated water (showers, cooling towers, humidifiers).',
        'Growth conditions: water between 25 and 40 °C, stagnant, with oxygen, scale and biofilm.',
        'Sources in air conditioning: mainly open cooling towers, dirty or poorly drained condensate trays, humidifiers, dirty coils and filters of large installations.',
        'Prevention: clean trays with a proper fall (no standing water), filters changed, coils cleaned with chlorinated bactericidal products, cooling-tower water treated by a specialist (chlorine, chlorine dioxide, biocides, biodispersants, thermal shocks).',
        'For domestic hot water, a thermal shock above 70 °C for a few minutes kills the bacterium.',
      ],
    },
    { type: 'note', text: 'Reminder of the thresholds for a tower (lesson “Condenser, expansion valve, evaporator”): above 10,000 CFU/l of Legionella, immediate shutdown, draining, cleaning and disinfection.' },

    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'In an office at 24 °C and 70 % RH (dew point ≈ 18 °C), what is the minimum chilled-water temperature to send to chilled beams?',
      solution: ['The water must stay above the dew point: at least ≈ 18.5 °C (0.5 K margin).', 'That is why beams need fresh air dehumidified by the AHU: in a humid climate, without dry fresh air, the room’s dew point rises and the beams lose their capacity.'],
    },
    {
      type: 'exercise',
      question: 'A server room with 40 m² of racks. What order of magnitude of cooling capacity, and what layout do you recommend?',
      solution: ['≈ 2 kW/m² × 40 m² ≈ 80 kW of cooling.', 'Hot and cold aisles with cold-aisle containment, supply through the raised floor, return at high level; redundancy (N+1) of the units for availability.'],
    },
  ],
};
