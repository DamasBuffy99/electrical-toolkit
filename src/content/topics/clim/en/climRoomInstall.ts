import { TopicContent } from '../../../types';
import { fig } from '../fig';

export const climRoomInstallContent: TopicContent = {
  title: 'Noise, outdoor unit, control and condenser',
  subtitle: 'The installation details that make the difference in comfort and on the bill',
  blocks: [
    {
      type: 'text',
      text: 'Choosing the unit and its position in the room is not enough. Noise, outdoor unit location, the thermostat and how the compressor is controlled determine everyday comfort… and a large share of consumption.',
    },
    { type: 'illustration', name: 'clim-outdoor', caption: 'The outdoor unit: shaded, ventilated and accessible' },

    { type: 'heading', text: 'Noise: vibration and sound pressure' },
    {
      type: 'text',
      text: 'An air conditioner produces noise (fans, compressor) that disturbs occupants and sometimes neighbours. It travels through the air (condenser near a window) or as structure-borne vibration (unit on a balcony). The outdoor unit must sit on an isolated slab or rubber mounts, and refrigerant pipes must be held with flexible rubber clamps.',
    },
    fig('p086_0', 'Figure 4.5 — rigid fixing (vibrations transmitted) vs flexible clamp and rubber mount'),
    {
      type: 'text',
      text: 'The sound level stated by the manufacturer is indicative (standard conditions). To check the level actually heard by the occupant, start from the unit’s sound power Lw (manual):',
    },
    { type: 'formula', text: 'Lp = Lw − 5 log V − 10 log r + 3   (dB(A))' },
    {
      type: 'bullets',
      items: [
        'Lp: sound pressure level at the chosen point (the occupant’s ear).',
        'Lw: sound power level of the unit; V: room volume (m³); r: distance to the unit (m).',
        'The bigger the room and the farther the occupant, the lower the level. Compare Lp with the maximum of table 3.1.',
      ],
    },
    fig('p087_0', 'Figure 4.6 — sound power Lw of the source and sound pressure Lp at the occupant'),

    { type: 'heading', text: 'Placing the outdoor unit (the condenser)' },
    {
      type: 'text',
      text: 'Its position determines the unit’s efficiency, reliability and lifetime. Better to accept a few extra metres of refrigerant and electrical lines to put it in the right place. Mistakes to avoid:',
    },
    {
      type: 'bullets',
      items: [
        'In full sun: the hotter the air, the harder the condenser works. On a dark waterproofed roof, the surface exceeds 70 °C! A shaded, ventilated courtyard is ideal.',
        'Facing the prevailing wind: the fan must fight the wind to expel the hot air.',
        'On an inaccessible roof: if a fireman’s ladder is needed, maintenance will be abandoned.',
        'On the ground near flowerbeds: leaves, soil and dust quickly clog the fins.',
        'On a visible facade: integrate the units into the architecture (hidden position).',
      ],
    },
    fig('p097', 'Guide page 82 — outdoor unit location: mind the energy efficiency'),

    { type: 'heading', text: 'Thermostat and setpoint' },
    {
      type: 'text',
      text: 'The room thermostat controls the compressor. Place it where it reflects the room’s mean temperature: away from lamps, windows, sun and the supply jet. Letting the indoor fan run continuously (even with the compressor off) improves comfort by mixing the air.',
    },
    {
      type: 'bullets',
      items: [
        'Summer comfort zone, still air, light clothing: 23 to 26 °C.',
        'Maximum 6 °C difference with outside to avoid thermal shock: 32 °C outside → setpoint of at least 26 °C.',
        'Never set 22 °C when it is 32 °C outside: uncomfortable AND costly.',
        'Add scheduling (off when unoccupied, early restart) and an accessible control: a remote stuck on the ceiling unit is never adjusted.',
      ],
    },
    fig('p099_0', 'Figure 4.20 — the indoor setpoint follows the outdoor temperature'),

    { type: 'heading', text: 'On/off vs inverter' },
    {
      type: 'text',
      text: 'An air conditioner is sized for the hottest hour: the rest of the time it runs at part load. With classic ON/OFF control, the compressor starts at full power then stops: the temperature swings and efficiency is poor.',
    },
    fig('p100_0', 'Figure 4.21 — on/off control: the temperature swings around the setpoint'),
    {
      type: 'text',
      text: 'With a variable-speed (“INVERTER”) compressor, the controller adjusts the compressor speed to the gap between setpoint and room temperature. Capacity follows demand, temperature stays steady, efficiency is preserved and start-up happens at low speed — so no inrush current.',
    },
    fig('p101_0', 'Figure 4.22 — INVERTER control: variable speed, steady temperature'),
    { type: 'note', text: 'Multi-split (one outdoor unit, several indoor units): each room needs its own control, and the inverter matches production to the real total demand.' },

    { type: 'heading', text: 'Condenser control' },
    {
      type: 'text',
      text: 'Paradox: rooms with high internal loads (server rooms) are cooled even when it is cool outside. The condenser then becomes too effective, the pressure drops, the evaporator loses capacity, and the low-pressure safety can stop the unit. A unit that must run below 17 °C outdoors needs a variable-speed condenser fan (at least on/off), controlled by a pressure switch or thermostat.',
    },

    { type: 'heading', text: 'Air-cooled or water-cooled condenser?' },
    { type: 'subheading', text: 'Air-cooled condenser' },
    {
      type: 'text',
      text: 'The most common: copper tubes (9 to 16 mm) with aluminium fins (1 to 4 mm pitch), cooled by one or more fans. In marine or industrial environments the fins are protected against corrosion (plastic film, Blygold-type coatings…). Air-cooled packaged units come as compact units (4 to 120 kW, rather noisy), split units with a separate condenser on the roof (12 to 220 kW) and rooftops (7 to 350 kW).',
    },
    fig('p103_0', 'Figure 4.23 — packaged unit with outdoor condenser'),
    { type: 'subheading', text: 'Water-cooled condenser' },
    {
      type: 'text',
      text: 'Two concentric copper tubes coiled in a spiral: water flows in one, refrigerant condenses in the other, in counter-flow (or a plate heat exchanger). The water is then cooled in a tower, often on the roof, which keeps the noise away from the room.',
    },
    fig('p103_1', 'Figure 4.24 — coaxial counter-flow exchanger tube'),
    fig('p104_0', 'Figure 4.25 — packaged unit with condenser cooled by a pumped water loop and a tower'),
    {
      type: 'table',
      headers: ['Type of tower', 'Principle', 'Watch out'],
      rows: [
        ['Open tower', 'Water sprayed in front of a fan partly evaporates and cools', 'Water in contact with air goes to the condenser: corrosion, scale, legionella'],
        ['Closed tower', 'Condenser water stays in tubes sprayed by another water circuit', 'No more corrosion on the condenser side'],
        ['Dry cooler', 'Closed tower without spraying, cooled by fan air', 'No water use, lower performance'],
      ],
    },
    fig('p104_1', 'Figure 4.26 — open tower'),
    fig('p105_0', 'Figure 4.27 — closed tower'),
    fig('p105_1', 'Figure 4.28 — dry cooler'),
    {
      type: 'table',
      headers: ['', 'Water-cooled', 'Air-cooled'],
      rows: [
        ['Efficiency', 'Better', 'Lower'],
        ['Size, noise', 'More compact, quieter', 'Bulkier, noisier'],
        ['Water', 'Uses water, scale, corrosion', 'No water'],
        ['Maintenance', 'Water treatment, towers', 'Simple and cheap'],
        ['When to choose', 'River, reliable borehole, cool enough water', 'General case for room air conditioning'],
      ],
    },
    { type: 'note', text: 'With split systems, the air-cooled condenser has won: no water at all, no hydraulic piping, easy maintenance.' },
  ],
};
