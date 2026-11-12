import { TopicContent } from '../../types';

export const stSafetyContent: TopicContent = {
  title: 'Protection, fire and power factor',
  subtitle: 'Nine hundred volts DC on a factory roof, a generator that takes over during outages, a capacitor bank set up without the panels: Fanta puts the plant through a safety review, then checks what it does to Tropica’s power factor.',
  blocks: [
    { type: 'scene', text: 'Month 3 · Lumen design office, with Awa Diallo, then at Tropica’s main board' },
    {
      type: 'objectives',
      items: [
        'Understand the DC arc risk and protect firefighters.',
        'Choose surge protective devices and the equipotential bonding of a rooftop array.',
        'Couple a PV plant with a generator without motoring it.',
        'Anticipate the effect of PV production on the power factor and set the capacitor bank.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '910 V DC', label: 'array open-circuit voltage, as long as the sun shines' },
        { value: '60 kW', label: 'minimum load to keep on the 250 kVA generator' },
        { value: '0.82 → 0.95', label: 'power factor at the incomer, before and after the fix' },
        { value: '2 × 63 A', label: 'inverter AC feeders' },
      ],
    },

    { type: 'heading', text: '1 · Fire and direct current' },
    { type: 'illustration', name: 'pv-system', props: { highlight: 'wiring' }, caption: 'On the DC side, neither the inverter nor the breaker removes the module voltage: only the sun sets it' },
    {
      type: 'text',
      text: 'An AC arc extinguishes itself a hundred times a second, when the current passes through zero. In DC nothing puts it out: a badly crimped connector, or two connectors of different makes, can sustain an arc above 3,000 °C for hours. And even with the inverters stopped, strings stay at 600 to 900 V as soon as day breaks.',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'team',
      text: 'If firefighters walk into the workshop with a hose, they must be sure no 900 V cable runs over their heads. What do we guarantee them?',
    },
    {
      type: 'dialogue',
      speaker: 'Fanta Coulibaly',
      role: 'engineer',
      text: 'That DC never enters the building. The inverters sit on the roof, next to the arrays, and only AC cables come down to the main board. A “firefighter shutdown” button at the foot of the building opens the plant breaker: from then on, nothing inside is live.',
    },
    {
      type: 'decision',
      title: 'Fire safety',
      choice: 'Inverters on the roof next to the arrays, DC entirely outside, ground-level firefighter shutdown, signs at the entrance and at the main board',
      reasons: [
        'No DC cable inside the building volume: nothing to isolate indoors.',
        'Steel deck roof on a steel frame: a non-combustible support.',
        'String cables stay short, with no intermediate junction box.',
      ],
      rejected: 'Optimisers under each module (module-level rapid shutdown): required in the United States, but 180 more units and 360 more connectors on a scorching roof, for a risk already addressed. Kept only if the insurer demands it.',
    },
    {
      type: 'note',
      text: 'Had the roof been sandwich panels with a polyurethane foam core, it would have been another story: the insurer would probably have refused the modules, or required rock-wool core panels. Always identify the roof type before proposing a plant.',
    },

    { type: 'heading', text: '2 · Lightning, surge protection and insulation' },
    {
      type: 'bullets',
      items: [
        'No lightning rod on the plant, and the IEC 62305-2 risk analysis does not require one: type 2 SPDs are enough.',
        'Type 2 DC SPD on each MPPT input (built into the inverters), type 2 AC SPD at the plant’s board, existing type 1 + 2 at the main board.',
        'Rails and module frames bonded together and to earth with a 6 mm² conductor (16 mm² if a lightning rod is ever installed).',
        'Before each start, the inverter measures the array insulation resistance and refuses to connect if it is too low (IEC 62109-2).',
        'Inverters with built-in residual current monitoring, declared free of DC fault current: a type A RCD upstream is enough; otherwise a type B would be needed.',
      ],
    },
    { type: 'fiche', id: 'pv-inverter-types', why: 'Inverters with and without transformer, consequences for protection.' },

    { type: 'heading', text: '3 · When the generator takes over' },
    {
      type: 'text',
      text: 'During a grid outage, the changeover switch transfers the plant to the 250 kVA generator. The inverters lose the grid and stop (anti-islanding), then reconnect after one minute to the generator voltage. Danger: if the PV produces more than the plant consumes, the surplus flows back into the alternator, which becomes a motor. And a lightly loaded diesel fouls up.',
    },
    {
      type: 'calc',
      title: 'Limiting PV output on generator',
      steps: [
        { label: '250 kVA generator, i.e. 200 kW; recommended minimum load 30 %', formula: 'P_{gen,min} = 0.3 × 200 = 60 kW' },
        { label: 'Controller setpoint in “generator mode” (contact from the changeover switch)', formula: 'P_{PV} ≤ P_{load} − 60 kW' },
        { label: 'Production day, 150 kW consumed', formula: 'P_{PV} ≤ 90 kW  →  all 80 kW allowed ✓' },
        { label: 'Sunday, 30 kW consumed', formula: 'P_{PV} = 0  (the generator is already below 30 %)' },
      ],
      result: 'In generator mode the plant keeps producing on weekdays and saves diesel, without ever motoring the alternator',
    },
    {
      type: 'table',
      headers: ['Protection', 'Setting', 'Effect'],
      rows: [
        ['Generator reverse power relay (ANSI 32)', '−5 % of 200 kW, 3 s', 'disconnects the generator if it motors'],
        ['Grid reverse power relay (ANSI 32)', 'export > 2 kW, 2 s', 'opens the plant (step 1)'],
        ['Inverter anti-islanding', 'grid loss < 2 s', 'no voltage fed back into the dead grid'],
        ['“Generator running” contact', 'to the controller', 'switches the setpoint: import ≥ 60 kW'],
      ],
    },

    { type: 'heading', text: '4 · What the panels do to the power factor' },
    {
      type: 'text',
      text: 'The inverters supply active power, at a power factor of 1. The motors still demand the same reactive power. Result: the grid supplies fewer kW but as many kvar, and the power factor measured at the incomer drops. Yet the 100 kvar detuned capacitor bank installed by Awa is driven by a regulator whose current transformer was fitted… on the workshop feeder, downstream of the plant’s future connection point.',
    },
    {
      type: 'calc',
      title: 'Power factor at the incomer, production day at noon',
      steps: [
        { label: 'Plant: 150 kW at PF 0.8', formula: 'Q = 150 × tan(acos 0.8) = 150 × 0.75 ≈ 112 kvar' },
        { label: 'Without PV, regulator at 0.95: bank at 63 kvar', formula: 'Q_{grid} = 150 × 0.33 ≈ 49 kvar' },
        { label: 'With 80 kW of PV, regulator blind to the plant', formula: 'PF = \\frac{70}{\\sqrt{70^{2} + 49^{2}}} ≈ 0.82  ✗' },
        { label: 'Regulator current transformer moved to the incomer', formula: 'Q_{grid} ≤ 0.33 × 70 ≈ 23 kvar  →  bank at 89 kvar ≤ 100 kvar ✓' },
      ],
      result: 'Measure the power factor where the utility measures it: at the incomer, upstream of the plant. The existing bank is sufficient.',
    },
    {
      type: 'dialogue',
      speaker: 'Paul Ndiaye (maintenance)',
      role: 'team',
      text: 'So without that move, we’d have saved 12 million on energy and paid reactive power penalties?',
    },
    {
      type: 'dialogue',
      speaker: 'Fanta Coulibaly',
      role: 'engineer',
      text: 'Part of it, yes. Tropica’s contract penalises reactive energy above tan φ 0.4 over the month. With the panels, purchased kWh fall but kvarh don’t: more compensation is needed. The inverters could also supply kvar, but at full power they have no headroom left: the capacitor bank is the right answer.',
    },

    { type: 'heading', text: '5 · Connection and equipment list' },
    {
      type: 'calc',
      title: 'Plant feeder at the main board',
      steps: [
        { label: 'Current of one 40 kW inverter', formula: 'I = \\frac{40,000}{\\sqrt{3} × 400} ≈ 58 A  →  4P 63 A breaker' },
        { label: 'Total plant current', formula: '2 × 58 ≈ 116 A  →  4P 125 A breaker at the main board' },
        { label: '4 × 50 mm² copper cable, 40 m, PF = 1', formula: 'ΔU = \\frac{\\sqrt{3} × 0.0225 × 40 × 116}{50} ≈ 3.6 V  →  0.9 %' },
      ],
      result: '4P 125 A feeder, 4 × 50 mm² + PE cable, 0.9 % voltage drop',
    },
    {
      type: 'solarEquipment',
      list: {
        title: 'Tropica rooftop self-consumption plant',
        project: 'Tropica plant',
        rows: [
          { tag: 'PV', item: 'Monocrystalline 550 Wp modules, salt-mist certified', qty: 180, rating: '99 kWp', data: '10 strings of 18, south pitch, 10°', protection: 'no fuse (1 string / MPPT)', kwp: 99 },
          { tag: 'INV', item: 'Three-phase grid-tie inverters, 5 MPPT', qty: 2, rating: '2 × 40 kW', data: 'MPPT 200–800 V, mounted on the roof', protection: 'built-in DC isolator + type 2 DC SPD', kw: 80 },
          { tag: 'CTL', item: 'Zero-export controller + meter', qty: 1, rating: 'CT 600/5 A', data: 'import ≥ 3 kW (grid), ≥ 60 kW (generator)', protection: 'falls back to 0 W on communication loss' },
          { tag: 'R32', item: 'Reverse power relay', qty: 1, rating: 'ANSI 32', data: 'export > 2 kW for 2 s', protection: 'shunt trip of the 4P 125 A' },
          { tag: 'PV-B', item: 'Plant AC board', qty: 1, rating: '4P 125 A', data: '2 × 4P 63 A feeders', protection: 'type 2 AC SPD, firefighter shutdown' },
          { tag: 'LNK', item: 'PV board ↔ main board link', qty: 1, rating: '40 m', data: '4 × 50 mm² Cu + 25 mm² PE', protection: 'ΔU 0.9 %' },
          { tag: 'EQB', item: 'Equipotential bonding of rails and frames', qty: 1, rating: '6 mm² Cu', data: 'connected to the main board earth bar' },
          { tag: 'CB', item: 'Existing capacitor bank', qty: 1, rating: '100 kvar, 7 % reactors', data: 'regulator CT moved to the incomer', protection: 'PF setpoint 0.95' },
        ],
      },
    },

    { type: 'heading', text: '6 · What the standards say' },
    {
      type: 'norms',
      title: 'Rooftop plant safety',
      rows: [
        { norm: 'IEC 60364-7-712', rule: 'Overvoltage protection, insulation, choice of RCD (type A or B) depending on the inverter.', result: 'SPDs and RCD' },
        { norm: 'UTE C15-712-1 / firefighter guide (France)', rule: 'DC cables outside the building or in fire-resistant ducts, emergency shutdown, signage.', result: 'DC kept outside' },
        { norm: 'NEC 690.12 (United States)', rule: 'Rapid shutdown: under 30 V outside the array and 80 V inside it within 30 s.', result: 'optimisers required' },
        { norm: 'IEC 62305-2 / IEC 61643-31', rule: 'Lightning risk analysis; surge protective devices on the DC side of PV installations.', result: 'type 2 without lightning rod' },
      ],
    },
    {
      type: 'regional',
      text: 'On the Gulf of Guinea coast there are two enemies: lightning, very frequent in the rainy season and the first cause of inverter failures; and salt, which eats away fixings and connectors a few kilometres from the sea. Fanta requires salt-mist certified modules (IEC 61701), A4 stainless steel fasteners and an inspection of the SPDs after each storm season.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'DC does not extinguish itself: identical connectors, protected cables, DC kept out of the building.',
        'On a generator, PV output is limited to keep a minimum load and avoid reverse power.',
        'PV lowers the power factor measured at the incomer: the capacitor bank regulator must measure where the utility does.',
        'DC and AC SPDs, equipotential bonding and insulation monitoring protect the installation from surges and faults.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'One Saturday the plant runs a single shift: 100 kW consumed, grid outage, plant on generator. What PV power does the controller allow?',
      solution: ['P_PV ≤ 100 − 60 = 40 kW.', 'Half the plant stays available; the generator does not drop below 60 kW.'],
    },
    {
      type: 'exercise',
      question: 'What power factor would the utility see if the plant consumed 120 kW at the 2 pm shift change, with 66 kW of PV and the bank stuck at 63 kvar?',
      solution: ['Plant Q = 120 × 0.75 = 90 kvar; grid Q = 90 − 63 = 27 kvar; grid P = 120 − 66 = 54 kW.', 'PF = 54 / √(54² + 27²) ≈ 0.89: below 0.93 (tan φ 0.4), penalised.'],
    },
  ],
};
