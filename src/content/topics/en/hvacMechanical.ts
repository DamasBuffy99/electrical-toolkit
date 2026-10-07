import { TopicContent } from '../../types';
import { SLIDES } from '../../slides';

export const hvacMechanicalContent: TopicContent = {
  title: 'HVAC, pumps and fire fighting loads',
  subtitle: 'The mechanical equipment the electrical engineer must supply, and how to estimate air conditioning',
  blocks: [
    {
      type: 'text',
      text: "A large share of a building's power goes to mechanical equipment: air conditioning, ventilation, pumps, fire fighting. The electrical engineer must know them to supply them, protect them and include them in the load estimate.",
    },

    { type: 'heading', text: '1 · Quick air conditioning estimate' },
    {
      type: 'table',
      headers: ['Area (3 m height)', 'By area', 'By volume'],
      rows: [
        ['Closed', '1 HP per 10 m²', 'HP = volume (m³) / 30'],
        ['Open', '1 HP per 8 m²', 'HP = volume (m³) / 25'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'Circuit breaker: usually 1.25 × I_rated, but 2.5 × I_rated for air conditioning because of the high starting current.',
        'Disconnecting switch: same rating as the circuit breaker or higher.',
        'Common single-phase units: 1.5 · 2.25 · 2.5 · 3 · 4 · 5 HP. Above 5 HP they are three-phase.',
      ],
    },
    { type: 'formula', text: 'Example: 40 m² closed office → 40 / 10 = 4 HP' },
    { type: 'image', source: SLIDES['gen-32'], caption: 'Air conditioning estimation rules' },

    { type: 'heading', text: '2 · How an air conditioner works' },
    {
      type: 'bullets',
      items: [
        'Compressor (outdoor unit): compresses the refrigerant, which rises to ≈ 80 °C.',
        'Condenser: the refrigerant releases heat to the outside air and condenses (≈ 50 °C).',
        'Expansion valve: pressure and temperature drop sharply (≈ 5 °C).',
        'Evaporator (indoor unit): the refrigerant absorbs the room heat and evaporates (≈ 10 °C), then returns to the compressor.',
      ],
    },
    { type: 'image', source: SLIDES['cond-68'], caption: 'Compressor and condenser' },
    { type: 'image', source: SLIDES['cond-69'], caption: 'Expansion valve and evaporator' },

    { type: 'heading', text: '3 · Direct expansion (DX) systems' },
    { type: 'text', text: 'The refrigerant circulates directly between the outdoor and indoor units.' },
    {
      type: 'bullets',
      items: ['Ductless: window, wall split, floor-mounted, ceiling cassette.', 'Ducted: central split, packaged unit (rooftop).'],
    },
    { type: 'image', source: SLIDES['cond-72'], caption: 'DX system' },
    { type: 'image', source: SLIDES['cond-75'], caption: 'Split system' },
    { type: 'image', source: SLIDES['cond-77'], caption: 'Cassette' },
    { type: 'image', source: SLIDES['cond-78'], caption: 'Ducted central split' },

    { type: 'heading', text: '4 · Chilled water system' },
    {
      type: 'text',
      text: 'For large capacities (hypermarkets, offices, factories): the chiller cools water, which pumps distribute to the cooling coils.',
    },
    {
      type: 'table',
      headers: ['Equipment', 'Role'],
      rows: [
        ['Air-cooled chiller', 'On the roof or a well-ventilated outdoor area'],
        ['Water-cooled chiller', 'In a mechanical room or basement'],
        ['Fan coil unit (FCU)', 'Terminal unit in each room'],
        ['Air handling unit (AHU)', 'Treats and supplies air to large zones'],
        ['Fresh air handling unit (FAHU)', 'Brings in treated outdoor air'],
        ['Chilled water pump', 'Circulates water from the chiller to the FCUs/AHUs'],
      ],
    },
    {
      type: 'note',
      text: '📌 Summer: FCU + AHU fans + pumps + chiller. Winter: FCU + AHU fans + heater. The transformer is sized on summer loads, the sub-distribution board on winter loads.',
    },
    { type: 'image', source: SLIDES['cond-81'], caption: 'Chilled water system' },
    { type: 'image', source: SLIDES['cond-84'], caption: 'Fan coil unit (FCU)' },
    { type: 'image', source: SLIDES['cond-87'], caption: 'Air handling unit (AHU)' },
    { type: 'image', source: SLIDES['cond-93'], caption: 'Summer / winter loads' },

    { type: 'heading', text: '5 · Ventilation, pumps and motors' },
    {
      type: 'table',
      headers: ['Equipment', 'Where', 'Role'],
      rows: [
        ['Exhaust fan', 'Kitchens, bathrooms', 'Removes moisture, odours, smoke'],
        ['Smoke exhaust fan', 'Generator room, garage, stairs', 'Removes smoke and hot gases during a fire'],
        ['Pressurization fan', 'Stairs, elevator shafts', 'Keeps a higher pressure so smoke cannot enter'],
        ['Hand dryer', 'Public toilets', 'Heater + blower'],
        ['Water heater', 'Kitchens, bathrooms', 'Heating element'],
        ['Sewage pump', 'Basements, car parks', 'Lifts wastewater where gravity is not enough'],
        ['Domestic booster pump', 'Large buildings', 'Keeps water pressure on upper floors'],
      ],
    },
    { type: 'text', text: 'An MCC (Motor Control Center) groups the control of several motors: circuit breakers, overload relays, contactors and relays.' },
    { type: 'image', source: SLIDES['cond-98'], caption: 'Smoke exhaust fan' },
    { type: 'image', source: SLIDES['cond-99'], caption: 'Pressurization fan' },
    { type: 'image', source: SLIDES['cond-106'], caption: 'MCC panel' },

    { type: 'heading', text: '6 · Fire fighting systems' },
    {
      type: 'table',
      headers: ['System', 'Fires handled', 'Where'],
      rows: [
        ['Sprinklers (water)', 'Class A (wood, paper, cloth)', 'Offices, hotels, homes · not for liquids, electrical, metals'],
        ['CO₂', 'Classes B (liquids) and C (electrical)', 'Electrical rooms, data centres · leaves no residue'],
        ['Foam', 'Class B (flammable liquids)', 'Chemical plants, fuel storage'],
        ['Clean agents (FM-200, Novec 1230)', 'Classes A, B and C', 'Server rooms, museums, laboratories'],
      ],
    },
    { type: 'note', text: '💡 Fire pumps are life-safety loads: they must stay supplied by the generator.' },
    { type: 'image', source: SLIDES['cond-109'], caption: 'Sprinklers' },
    { type: 'image', source: SLIDES['cond-112'], caption: 'CO₂ suppression' },
    { type: 'image', source: SLIDES['cond-114'], caption: 'Clean agents' },
  ],
};
