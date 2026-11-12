import { TopicContent } from '../../../types';

export const pvCouplingContent: TopicContent = {
  title: 'DC or AC coupling, and the two “DNAs” of hybrids',
  subtitle: 'Where does solar energy reach the battery: on the DC side or the AC side? This architecture choice changes efficiency, scalability and failure behaviour. Then some vocabulary: two devices both called “hybrid” may have been designed for opposite uses.',
  blocks: [
    {
      type: 'objectives',
      items: [
        'Distinguish DC and AC coupling and their efficiencies.',
        'Quantify the extra losses of AC coupling.',
        'Name a device correctly from the functions it integrates.',
        'Recognise a “grid-first” and a “battery-first” hybrid.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '97–98 %', label: 'panels → battery with DC coupling' },
        { value: '≈ 92 %', label: 'panels → battery with AC coupling' },
        { value: '≈ 250 kWh/yr', label: 'extra loss with AC for 5,000 kWh stored' },
        { value: '12 kW', label: 'maximum AC-coupled PV per Sunny Island 8.0H' },
      ],
    },

    { type: 'heading', text: '1 · Two ways to store solar energy' },
    {
      type: 'bullets',
      items: [
        'DC coupling: the panels charge the battery through an MPPT, without going through AC. Examples: STP Smart Energy, Deye, Victron EasySolar-II GX, Studer Xtender + VarioTrack, or a MultiPlus-II with SmartSolar controllers.',
        'AC coupling: a grid-tie inverter (Sunny Tripower, Fronius) feeds the output of an inverter-charger (Sunny Island, MultiPlus, Quattro). To be stored, energy goes DC → AC → DC.',
      ],
    },
    { type: 'image', source: require('../../../../../assets/solar/inverters/dc-ac-coupling.webp'), caption: 'Storing solar costs one conversion with DC, two with AC. Both layouts exist in grid-connected homes and off-grid sites (figure from the guide, in French)', height: 320 },
    {
      type: 'table',
      headers: ['Criterion', 'DC coupling', 'AC coupling'],
      rows: [
        ['Panels → battery', '1 conversion, ≈ 97–98 %', '2 conversions, ≈ 92 %'],
        ['Panels → daytime loads', '1 conversion', '1 conversion'],
        ['Adding storage to existing PV', 'the inverter must be replaced', 'add a battery inverter without touching the PV'],
        ['If the inverter-charger stops off-grid', 'the MPPT keeps charging the battery', 'the grid-tie inverter stops too'],
        ['Own limit', 'PV power limited by the MPPT(s)', 'AC-coupled PV limited by the inverter-charger (12 kW per SI 8.0H)'],
        ['Panels far from the batteries', 'long, costly low-voltage DC cables', '230/400 V link, simpler'],
      ],
    },
    {
      type: 'calc',
      title: 'What AC coupling costs',
      steps: [
        { label: 'Solar energy going through the battery in a year', formula: 'E = 5 000 kWh' },
        { label: 'Efficiency gap between the two paths', formula: '≈ 97 % − 92 % = 5 points' },
        { label: 'Extra losses', formula: '5 000 × 0.05 ≈ 250 kWh/yr' },
        { label: 'Grid-connected home in France (€0.20/kWh)', formula: '250 × 0.20 ≈ €50/yr' },
      ],
      result: 'The gap only affects stored energy: energy used directly in the daytime undergoes a single conversion in both cases',
    },
    {
      type: 'note',
      text: 'Off-grid, these losses are offset by a few more panels or a little diesel: that is the cost to compare them with, and it often weighs less than the advantages of AC coupling (scalability, AC links, distant panels).',
    },
    {
      type: 'decision',
      title: 'Choosing the coupling',
      choice: 'DC coupling for a compact new build; AC coupling to add storage to existing PV, for distant panels or for a scalable off-grid site',
      reasons: [
        'DC: a single device, better storage efficiency, the MPPT keeps charging even if the inverter-charger stops.',
        'AC: the existing PV inverter is kept, links are in 230/400 V, and inverters are added as needs grow.',
      ],
      rejected: 'Choosing on efficiency alone: €50 a year doesn’t justify replacing a PV inverter in good condition.',
    },

    { type: 'heading', text: '2 · From simplest to most complete: naming devices correctly' },
    {
      type: 'text',
      text: 'A device is named after what it integrates: start with the inverter, add the charger, then the MPPT. “Off-grid inverter” isn’t a technology but a use: it usually refers to an inverter-charger or a hybrid able to run without a grid.',
    },
    {
      type: 'table',
      headers: ['Integrated functions', 'Name', 'Examples'],
      rows: [
        ['Battery → AC, one way', 'inverter', 'Victron Phoenix'],
        ['AC → battery, one way', 'charger', 'Victron Blue Smart'],
        ['Inverter + charger + transfer switch', 'inverter-charger', 'MultiPlus-II, Quattro, Sunny Island'],
        ['Inverter-charger + MPPT', 'hybrid inverter', 'EasySolar-II GX, Deye, Growatt SPF'],
        ['PV inverter + battery management + backup', 'grid-connected hybrid inverter', 'STP Smart Energy, Huawei SUN2000 + LUNA2000'],
      ],
    },

    { type: 'heading', text: '3 · Two origins, two philosophies' },
    {
      type: 'table',
      headers: ['Criterion', '“Grid-first” hybrid', '“Battery-first” hybrid'],
      rows: [
        ['Origin', 'PV inverter with a battery added', 'inverter-charger with an MPPT added'],
        ['Examples', 'SMA STP Smart Energy, Huawei SUN2000, GoodWe', 'Victron EasySolar-II GX, Studer Xtender + VarioTrack, Outback'],
        ['Assumption', 'the grid is there almost all the time', 'the grid may never be there'],
        ['Optimised for', 'cutting the bill', 'guaranteeing supply'],
        ['Battery', 'often high voltage (150–600 V)', 'usually 48 V'],
        ['Running without the grid', 'backup on a dedicated output', 'permanent'],
        ['Generator', 'rarely controlled', 'full control'],
        ['Starting surges', 'model-dependent, check the datasheet', 'usually high (≈ 2× for a few seconds)'],
        ['Tariff functions (off-peak, peak shaving)', 'advanced', 'possible, simpler'],
        ['Commissioning', 'simple', 'more expert'],
      ],
    },
    {
      type: 'note',
      text: 'Some devices sit in between. The Deye SG05LP3, for example, is a grid-connected 48 V hybrid that also controls a generator and runs durably without the grid.',
    },

    { type: 'heading', text: '4 · How to choose' },
    {
      type: 'bullets',
      items: [
        'The grid is reliable and the goal is the bill: a “grid-first” hybrid or, for existing PV, an AC-coupled battery inverter.',
        'The grid is absent or very unstable: an inverter-charger or a “battery-first” hybrid, with a controlled generator.',
        'In every case: size on the continuous power at the room temperature, phase by phase, then check the surge of the largest motor.',
      ],
    },
    {
      type: 'regional',
      text: 'On sites with daily load shedding, a “grid-first” hybrid designed for Europe can disappoint: limited backup output, generator not controlled, costly high-voltage batteries that are hard to find locally. 48 V “battery-first” devices, more robust to outages and compatible with batteries available locally, are often better suited.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'DC coupling: one conversion to the battery; AC coupling: two.',
        'The ≈ 5-point gap only affects stored energy.',
        'AC coupling allows storage to be added without touching the PV, and distant panels to be connected.',
        'A “grid-first” hybrid cuts the bill; a “battery-first” hybrid guarantees supply.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'An off-grid site stores 8,000 kWh of solar per year. How many more kWh does AC coupling lose than DC coupling? How much diesel offsets them (0.35 L/kWh)?',
      solution: ['8,000 × 0.05 = 400 kWh/yr.', '400 × 0.35 ≈ 140 L of diesel a year, or about one extra 400 Wp panel under the West African sun (≈ 600 kWh/yr).'],
    },
    {
      type: 'exercise',
      question: 'The PV array is 120 m from the battery room. DC or AC coupling?',
      solution: ['At low-voltage DC (48 V), 120 m calls for huge cables to limit voltage drop.', 'AC coupling carries the energy at 230/400 V: a grid-tie inverter near the panels, an ordinary AC link to the inverter-charger.'],
    },
  ],
};
