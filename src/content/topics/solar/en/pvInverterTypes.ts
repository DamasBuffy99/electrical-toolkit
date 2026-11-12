import { TopicContent } from '../../../types';

export const pvInverterTypesContent: TopicContent = {
  title: 'The families of solar inverters',
  subtitle: 'Grid-tie inverter, hybrid, inverter-charger and MPPT charge controller: who makes the voltage, where the battery connects, and what happens when the grid goes down.',
  blocks: [
    {
      type: 'objectives',
      items: [
        'Tell the three inverter families and the MPPT controller apart.',
        'Recognise a device by its terminals.',
        'Know what each family does during a grid outage.',
        'Match each family to its use: reliable grid, unstable grid, off-grid site.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '< 1 s', label: 'grid-tie inverter shutdown on outage (anti-islanding)' },
        { value: '97–98.5 %', label: 'maximum efficiency of a grid-tie inverter' },
        { value: '48 V', label: 'usual battery of inverter-chargers' },
        { value: '< 20 ms', label: 'transfer time of a Victron inverter-charger' },
      ],
    },
    {
      type: 'text',
      text: 'Two questions are enough to classify a solar inverter: who makes the voltage and frequency (the public grid, or the inverter itself)? And where does the battery connect? A fourth device, the MPPT controller, charges the battery from the panels but produces no AC.',
    },

    { type: 'heading', text: '1 · Every device is recognised by its terminals' },
    { type: 'image', source: require('../../../../../assets/solar/inverters/terminals.webp'), caption: 'Terminals of the four devices: PV (blue), battery (orange), 230/400 V AC (green) — figure from the guide, in French', height: 260 },
    {
      type: 'note',
      text: 'Simple rule: a device with no PV input is an inverter-charger, not a hybrid. A device with no battery terminal is a grid-tie inverter. A device with no AC output is a charge controller.',
    },

    { type: 'heading', text: '2 · The grid-tie inverter' },
    {
      type: 'text',
      text: 'It converts the panels’ DC into AC synchronised with the grid. It doesn’t make a grid: it follows the utility’s. When the grid disappears, it stops in under a second. That is anti-islanding protection, which avoids feeding voltage into a line technicians believe is dead.',
    },
    {
      type: 'table',
      headers: ['Item', 'Detail'],
      rows: [
        ['Input', 'DC from the panels, 1 to several MPPTs, up to 1,000 V in residential and small commercial'],
        ['Output', 'single-phase 230 V or three-phase 400 V'],
        ['Storage', 'none: no battery terminal'],
        ['On a grid outage', 'automatic shutdown'],
        ['Maximum efficiency', 'about 97 to 98.5 % (98.2 % for a Sunny Tripower X)'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'Advantages: lowest cost, best efficiency, simple installation, few components.',
        'Limits: no autonomy during an outage, no storage, surplus exported or curtailed.',
        'Examples: SMA Sunny Boy (single-phase) and Sunny Tripower (three-phase), Fronius Symo and Primo, Huawei SUN2000, SolarEdge.',
        'For whom: grid-connected installation with no backup need, consuming mostly in the daytime.',
      ],
    },

    { type: 'heading', text: '3 · The hybrid inverter' },
    {
      type: 'text',
      text: 'It combines the PV inverter, the battery charger and grid management in one box. Panels and battery share its internal DC bus: that is DC coupling. During an outage, it switches to a backup output that feeds the priority loads.',
    },
    {
      type: 'table',
      headers: ['Item', 'Detail'],
      rows: [
        ['DC inputs', 'panels (MPPT) and battery, low voltage 48 V or high voltage 150–600 V depending on the model'],
        ['AC outputs', 'grid, and a backup output'],
        ['Modes', 'self-consumption, time shifting, peak shaving, backup, off-grid on some models'],
        ['Backup power', 'that of the inverter, often 3 to 12 kW'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'Advantages: a single device, automatic backup, surplus storage, time scheduling.',
        'Limits: dearer than a grid-tie inverter; if it fails, everything stops; adding a battery to existing PV means replacing the inverter.',
        'Examples: SMA Sunny Tripower Smart Energy (three-phase, 5 to 10 kW) and Sunny Boy Smart Energy; Deye SG05LP3 (three-phase 48 V, 3 to 12 kW, generator port, 2× peak for 10 s); Huawei SUN2000 + LUNA2000; Victron EasySolar-II GX.',
      ],
    },

    { type: 'heading', text: '4 · The off-grid inverter-charger' },
    {
      type: 'text',
      text: 'It makes its own 230 V, 50 Hz grid from a battery, permanently. It recharges the battery from a generator or the grid, and switches between sources without interruption thanks to a built-in transfer switch. Panels connect through an MPPT controller (DC coupling) or through a grid-tie inverter on its output (AC coupling).',
    },
    {
      type: 'table',
      headers: ['Item', 'Detail'],
      rows: [
        ['Battery', 'mandatory, usually 48 V (12 or 24 V on small models)'],
        ['Grid', 'optional: it works with or without'],
        ['Generator', 'automatic start and stop by relay'],
        ['Paralleling', 'several units per phase, and three-phase setups'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'Advantages: full autonomy, designed to run day and night, strong surge capability, scalable.',
        'Limits: demanding sizing (a mistake means outages), large battery bank, more expert commissioning.',
        'Examples: SMA Sunny Island (3.3 to 6.0 kW continuous per unit), Victron MultiPlus-II (2.4 to 12 kW continuous) and Quattro, Studer Xtender, Schneider Conext XW Pro.',
        'For whom: sites without a grid or with a very unstable one: telecom relays, health centres, schools, isolated homes.',
      ],
    },

    { type: 'heading', text: '5 · Three typical wirings' },
    { type: 'image', source: require('../../../../../assets/solar/inverters/wiring.webp'), caption: 'The device framed in blue defines the family. Only the inverter-charger holds the grid permanently; the hybrid only backs up its dedicated output', height: 300 },
    {
      type: 'table',
      headers: ['Criterion', 'Grid-tie inverter', 'Hybrid', 'Inverter-charger (off-grid)'],
      rows: [
        ['Public grid', 'essential', 'normally present', 'optional'],
        ['Battery', 'none', 'yes, on the inverter', 'mandatory'],
        ['On a grid outage', 'shutdown', 'backup on a dedicated output', 'no effect'],
        ['Surge capability', 'not applicable', 'varies (up to 2× for 10 s for Deye)', 'high (Sunny Island 8.0H: 11 kW for 3 s)'],
        ['Cost', 'low', 'medium', 'high'],
        ['Complexity', 'low', 'medium', 'high'],
      ],
    },
    {
      type: 'decision',
      title: 'Which family for which site?',
      choice: 'Reliable grid and the bill as the goal: grid-tie or hybrid. Absent or very unstable grid: inverter-charger (or a “battery-first” hybrid) with a controlled generator',
      reasons: [
        'A grid-tie inverter is useless during an outage: it stops with the grid.',
        'A hybrid backs up part of the house, within its power.',
        'An inverter-charger is made to run alone, day and night, with a generator as back-up.',
      ],
      rejected: 'Installing a grid-tie inverter thinking it will “give power during load shedding”: the most common mistake on sites with frequent outages.',
    },

    { type: 'heading', text: '6 · What the standards say' },
    {
      type: 'norms',
      title: 'Grid-connected inverters',
      rows: [
        { norm: 'IEC 62116', rule: 'Test procedure for the anti-islanding protection of grid-connected inverters.', result: 'shutdown within 2 s required in the test' },
        { norm: 'IEC 62109-1 / -2', rule: 'Safety of power converters for photovoltaic systems.', result: 'baseline requirement for any PV inverter' },
        { norm: 'VDE-AR-N 4105 / EN 50549-1', rule: 'Rules for connecting generators to the low-voltage grid (Europe).', result: 'often adopted by utilities' },
        { norm: 'IEEE 1547 / UL 1741', rule: 'North American equivalents: interconnection, anti-islanding, certification.', result: 'same principle' },
      ],
    },
    {
      type: 'regional',
      text: 'In many West African countries, exporting surplus is not paid for, or even not allowed for individuals: a grid-tie inverter must then be curtailed (zero export). And since load shedding is frequent, it is often the inverter-charger or the hybrid that truly meets the need.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'Grid-tie inverter: follows the grid, stops on outage, no battery.',
        'Hybrid: panels and battery on the same device (DC coupling), partial backup on a dedicated output.',
        'Inverter-charger: makes the grid from a battery, permanently, controls a generator.',
        'MPPT controller: panels → battery, no AC output.',
        'A device is recognised by its terminals.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'A device has a 48 V battery terminal, an AC input and an AC output, but no PV input. Which family is it? How can panels be connected to it?',
      solution: ['It is an inverter-charger.', 'Panels connect through an MPPT controller on the battery (DC coupling), or through a grid-tie inverter on its AC output (AC coupling).'],
    },
    {
      type: 'exercise',
      question: 'A client has a 5 kW grid-tie inverter and suffers 4 hours of load shedding every evening. Why does he have no power during outages, even in the daytime?',
      solution: ['A grid-tie inverter needs the grid voltage to synchronise; without it, it stops (anti-islanding).', 'Storage must be added with a device that can make the grid: a hybrid, or an AC-coupled inverter-charger.'],
    },
  ],
};
