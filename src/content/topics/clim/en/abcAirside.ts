import { TopicContent } from '../../../types';

export const abcAirsideContent: TopicContent = {
  title: 'AHUs, rooftops, free cooling, filtration and fans',
  subtitle: 'Air-side equipment of central installations, its control and its maintenance',
  blocks: [
    {
      type: 'text',
      text: 'On the air side, a central installation relies on the air handling unit (AHU) or the rooftop unit, a duct network, filters and fans. Setting them up and maintaining them well means comfort, air quality and a lot of energy saved.',
    },
    { type: 'illustration', name: 'clim-central', props: { highlight: 'ahu' }, caption: 'The AHU prepares the air before distributing it' },

    { type: 'heading', text: 'The air handling unit (AHU)' },
    {
      type: 'text',
      text: 'An AHU heats, cools, humidifies or dehumidifies air, at constant or variable flow. It is packaged or modular. Single flow: all fresh air, all return air, or a mix. Double flow: every combination of fresh, return, exhaust and supply air (with possible energy recovery).',
    },
    {
      type: 'table',
      headers: ['Element', 'Role'],
      rows: [
        ['Fresh-air damper', 'regulates fresh air, closes for frost protection'],
        ['Return damper and mixing box', 'proportions fresh and return air (linked dampers)'],
        ['Filters', 'one or more stages, from medium to high efficiency'],
        ['Heating and cooling coils', 'hot water, chilled water or direct expansion'],
        ['Humidifier and droplet eliminator', 'adds moisture without carrying water'],
        ['Fire damper + stand-alone release detector', 'compartmentalises in case of fire'],
        ['Fan', 'forward- or backward-curved, often variable speed'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'Variable air volume AHU: a motorised damper per room follows its sensor; a pressure sensor in the duct (on a straight section, away from disturbances) drives the fan speed; supply temperature stays constant through the coils’ 3-way valves.',
        'Dual-duct AHU: a hot duct and a cold duct mixed in a box per room: heating AND cooling at once, but expensive.',
      ],
    },

    { type: 'heading', text: 'Free cooling' },
    {
      type: 'text',
      text: 'Cooling for free with outdoor air when it is cooler than indoor air. Normally the unit runs on return air with minimum fresh air (for example 80 % return / 20 % fresh); in free cooling, the fresh-air damper opens wide and the compressors stay off as long as that is enough.',
    },
    {
      type: 'bullets',
      items: [
        'Typical conditions: outdoor air 5 to 10 K cooler than indoors, AND a cooling demand.',
        'Advanced units compare indoor and outdoor ENTHALPIES (two humidity sensors): cool but very humid air can bring in more latent heat than the sensible heat it removes.',
        'Night free cooling: “flushes out” the heat stored by the building during the day.',
        'Example sequence: fresh-air damper opens from 24 °C indoors, 1st compressor at 24.5 °C, 2nd at 25 °C.',
      ],
    },
    { type: 'note', text: 'In a humid tropical climate, free-cooling opportunities are rare: outdoor air is almost always too hot or too humid. It is still useful at night in dry climates and for rooms with high internal loads (server rooms).' },

    { type: 'heading', text: 'The rooftop unit' },
    {
      type: 'bullets',
      items: [
        'A packaged unit set on the roof on a curb, connected only to electricity and ducts: for large open spaces (supermarkets, warehouses).',
        'It contains the refrigerant circuit, the supply fan, the electrical panel with controller, filters, mixing box and often back-up heating (electric heaters, hot-water coil, gas burner).',
        'Control: time scheduling, heating setpoint (e.g. 20 °C) and cooling setpoint (e.g. 24 °C) with a dead band between, “dynamic” setpoint following outdoor temperature (e.g. +5 K), anti-short-cycle protection for compressors (minimum off time and time between starts), PI control of condenser fans, defrost by cycle reversal.',
        'Options: humidity control, CO₂ sensor to meter fresh air, RS485 communication (Modbus), BACnet, LON or KNX to a building management system.',
      ],
    },

    { type: 'heading', text: 'Filtration' },
    {
      type: 'bullets',
      items: [
        'Four capture mechanisms: sieving (large particles), inertia, interception, diffusion (particles < 1 µm).',
        'Stages: flat media (glass fibre, polyester), then bag filters (up to 20 times their face area), activated carbon for odours and gases, HEPA filters (operating theatres, laboratories).',
        'Old classification: G1–G4 (coarse), F5–F9 (fine), H10–H14 (HEPA).',
        'ISO 16890 standard (since 2016–2018): classification by efficiency on ePM10, ePM2.5 and ePM1 particles (a filter must capture at least 50 % of a size to bear its name), plus a “coarse” class.',
        'A dirty filter cuts airflow and raises fan consumption: check its pressure drop, replace regularly.',
      ],
    },

    { type: 'heading', text: 'Fabric ducts' },
    {
      type: 'bullets',
      items: [
        'Light, hung from cables or rails, they discharge along their whole length: even temperatures, no draughts.',
        'Diffusion through porosity (low velocity, rooms < 5 m high, quiet), slots (induction, large volumes), micro-perforations (high induction) or mixed.',
        'Soft fan start compulsory (drive or slow damper opening) to inflate the duct without a jolt.',
        'Washable in industrial machines, lifetime 15 years or more; good filtration limits fouling.',
      ],
    },

    { type: 'heading', text: 'Fans' },
    {
      type: 'table',
      headers: ['Type', 'Efficiency', 'Use'],
      rows: [
        ['Propeller (axial)', '≈ 65 %, under 100 Pa available', 'condensers, cold-room evaporators, wall extractors'],
        ['Centrifugal forward-curved', '60 to 75 %', 'low and medium pressure: rooftops, AHUs, extractors'],
        ['Centrifugal backward-curved', '75 to 85 %', 'networks with high pressure losses, often with a drive'],
        ['Tangential (cross-flow)', '—', 'indoor units of splits and multi-splits'],
      ],
    },
    {
      type: 'warning',
      text: 'The book classifies fans as “low pressure (1,500 Pa < p)”: read p < 1,500 Pa. Medium pressure: from 1,500 Pa to 10 kPa; high pressure: above 10 kPa.',
    },

    { type: 'heading', text: 'Installation noise' },
    {
      type: 'bullets',
      items: [
        'Causes: airflow in ducts, vibration, turbulence, wear.',
        'Splitter silencers (effective but with pressure loss), cylindrical silencers (less loss), active silencers (low frequencies).',
        'Acoustic screens (tilted if reflective), tight heavy enclosure, treated plant room: the most effective solution but the most expensive.',
      ],
    },

    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'It is 25 °C in an open-plan office that needs cooling. Outside it is 19 °C but with 95 % humidity. Should the unit switch to free cooling?',
      solution: [
        'The temperature difference (6 K) would allow it, but the outdoor air is very humid: its enthalpy may be higher than that of the indoor air.',
        'Enthalpy control would compare the two enthalpies and refuse free cooling if outdoor air brings in more (latent) energy than it removes. This is common in the tropics.',
      ],
    },
    {
      type: 'exercise',
      question: 'Why is the fan of a fabric-duct network started gradually?',
      solution: ['A direct start inflates the duct all at once: a mechanical jolt that damages it and tears it from its supports.', 'Use a drive (acceleration ramp) or start with dampers closed and open them gradually.'],
    },
  ],
};
