import { TopicContent } from '../../types';

export const villaBoardContent: TopicContent = {
  title: 'The house distribution board',
  subtitle: 'Fourteen circuits to arrange: which breaker for each, on which phase, behind which RCD? Awa builds the villa’s panel schedule and explains why the order matters.',
  blocks: [
    { type: 'scene', text: 'Week 3 · Design office' },
    {
      type: 'objectives',
      items: [
        'Choose a breaker rating from the circuit current and the cable.',
        'Spread the circuits over the three phases and measure the unbalance.',
        'Read and build a panel load schedule.',
        'Group the circuits behind the RCDs without leaving the house in the dark.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '14 + 4', label: 'circuits + spares (18 ways)' },
        { value: '4.1 %', label: 'unbalance between phases' },
        { value: '13.0 kVA', label: 'demand with 15 % spare' },
        { value: '18.8 A', label: 'current per phase at the service' },
      ],
    },
    {
      type: 'text',
      text: 'The board is the heart of the house. Every circuit starts there, each with its own breaker. Awa prepares it in a spreadsheet called a “panel schedule”: one row per circuit, with its load, rating, cable and phase.',
    },
    { type: 'illustration', name: 'villa-board', caption: 'The villa board: a main breaker, four RCDs, fourteen circuits' },

    { type: 'heading', text: '1 · Choosing each breaker’s rating' },
    {
      type: 'dialogue',
      speaker: 'Koffi Mensah',
      role: 'client',
      text: 'Why not fit big breakers everywhere? That way they’ll never trip.',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'That’s precisely the point: the breaker must trip before the cable overheats. It protects the wire, not the appliance. If I put 32 A on a wire meant for 16 A, the day of an overload the wire heats up inside the wall and nothing cuts. That’s how fires start.',
    },
    {
      type: 'text',
      text: 'The rule: the rating must be above the circuit’s normal current (with a 25% margin), and below what the cable can carry. Example with the living-room air conditioner, which draws 8.7 A:',
    },
    {
      type: 'calc',
      title: 'Rating of the living-room air conditioner breaker',
      steps: [
        { label: 'Current drawn (1,800 W, power factor 0.9, 230 V)', formula: 'I_{load} = \\frac{P}{U × cos φ} = \\frac{1 800}{230 × 0.9} ≈ 8.7 A' },
        { label: '25 % margin (continuous operation)', formula: 'I_{CB} ≥ 1.25 × I_{load} = 1.25 × 8.7 ≈ 10.9 A' },
        { label: 'Next standard rating up', formula: '10 A < 10.9 A ≤ 16 A' },
        { label: 'Cable check (2.5 mm² in a wall)', formula: 'I_{CB} = 16 A ≤ I_Z ≈ 24 A' },
      ],
      result: '16 A breaker, 2.5 mm² cable   (I_{load} ≤ I_{CB} ≤ I_Z)',
    },
    { type: 'formula', text: 'Standard ratings (A): 6 · 10 · 16 · 20 · 25 · 32 · 40 · 50 · 63' },
    {
      type: 'text',
      text: 'For everyday circuits, standard pairings are used, always on the same principle: a 1.5 mm² cable is protected at 10 or 16 A, a 2.5 mm² cable at 16 or 20 A, a 6 mm² cable at 32 A.',
    },
    {
      type: 'dialogue',
      speaker: 'Esther Mensah',
      role: 'client',
      text: 'The oven is only 2.5 kW. Why a 32 A circuit in 6 mm²?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'For 2.5 kW, 16 A would be enough. But you told me you were considering an electric hob. If I lay a 6 mm² cable to the kitchen today, you can install it one day without opening the walls. The extra cost is a few metres of thicker cable.',
    },
    { type: 'fiche', id: 'circuit-breaker', why: 'Load current, safety factor, standard ratings, B, C and D curves.' },

    { type: 'heading', text: '2 · Balancing the three phases' },
    {
      type: 'text',
      text: 'In three-phase, each circuit is connected to one of the three phases. Awa spreads them so each phase carries roughly the same load. Otherwise one phase would be overloaded while the other two idle, and the service breaker would trip for nothing.',
    },
    {
      type: 'table',
      headers: ['Phase', 'Circuits', 'Installed power'],
      rows: [
        ['L1', 'oven 2,500 + living-room AC 1,800 + bedroom sockets 600 + living-room lighting 120 + outdoor 90', '5,110 W'],
        ['L2', 'washing machine 2,000 + bedroom ACs 1 and 2 (2 × 900) + kitchen sockets 1,300', '5,100 W'],
        ['L3', 'water heater 1,500 + pump 1,400 + bedroom AC 3 900 + living-room sockets 1,300 + rooms lighting 148', '5,248 W'],
      ],
    },
    { type: 'formula', text: 'Average = \\frac{5,110 + 5,100 + 5,248}{3} ≈ 5,153 W   ;   max deviation = \\frac{5,248 − 5,153}{5,153} ≈ 1.8%' },
    {
      type: 'text',
      text: 'Less than 2% deviation: the balance is excellent. Awa put the big appliances (oven, washing machine, water heater) each on a different phase, then filled in with the air conditioners and the small circuits.',
    },
    {
      type: 'subheading',
      text: 'The panel load schedule',
    },
    {
      type: 'text',
      text: 'In the design office, this work fits in a standard document: the panel load schedule. Odd circuits are on the left, even ones on the right, and each row of the board is connected to a phase in the order L1, L2, L3, L1… This is the real layout of the breakers on the busbars. The green columns give each circuit’s load in kVA, on the phase that carries it; the bottom of the table adds up each phase.',
    },
    {
      type: 'panelSchedule',
      panel: {
        name: 'DB Villa Mensah',
        location: 'Garage, 1.30 m above floor',
        voltage: '230/400 V · 3P+N+PE · 50 Hz',
        panelType: 'Modular enclosure 4 × 13 modules',
        mounting: 'Flush',
        scRating: 'Icn 6 kA (MCBs)',
        main: 'Incoming breaker 4P 500 mA (S)',
        feeder: '5G10 mm² Cu from the meter',
        left: [
          { desc: 'Living-room lighting · RCD1', kva: 0.13, cb: 'C10', wire: '1.5 mm²' },
          { desc: 'Kitchen sockets · RCD2', kva: 1.4, cb: 'C20', wire: '2.5 mm²' },
          { desc: 'Rooms lighting · RCD3', kva: 0.16, cb: 'C10', wire: '1.5 mm²' },
          { desc: 'Outdoor lighting · RCD1', kva: 0.1, cb: 'C10', wire: '1.5 mm²' },
          { desc: 'Washing machine · RCD2', kva: 2.1, cb: 'C20', wire: '2.5 mm²' },
          { desc: 'Water heater · RCD3', kva: 1.5, cb: 'C16', wire: '2.5 mm²' },
          { desc: 'Bedroom sockets · RCD1', kva: 0.7, cb: 'C20', wire: '2.5 mm²' },
          { desc: 'Bedroom 1 AC · RCD4', kva: 1.0, cb: 'C16', wire: '2.5 mm²' },
          { desc: 'Borehole pump · RCD3', kva: 1.75, cb: 'C16', wire: '4 mm²' },
        ],
        right: [
          { desc: 'Oven (hob-ready) · RCD2', kva: 2.5, cb: 'C32', wire: '6 mm²' },
          { desc: 'Bedroom 2 AC · RCD4', kva: 1.0, cb: 'C16', wire: '2.5 mm²' },
          { desc: 'Living + bath sockets · RCD1', kva: 1.4, cb: 'C20', wire: '2.5 mm²' },
          { desc: 'Living-room AC · RCD4', kva: 2.0, cb: 'C16', wire: '2.5 mm²' },
          { desc: '', spare: true },
          { desc: 'Bedroom 3 AC · RCD4', kva: 1.0, cb: 'C16', wire: '2.5 mm²' },
          { desc: '', spare: true },
          { desc: '', spare: true },
          { desc: '', spare: true },
        ],
        demandKva: 11.3,
        spareMargin: 15,
      },
    },
    {
      type: 'calc',
      title: 'Reading the bottom of the schedule',
      steps: [
        { label: 'Load on each phase (sum of the green columns)', formula: 'S_{L1} = 5.43 kVA   ·   S_{L2} = 5.50 kVA   ·   S_{L3} = 5.81 kVA' },
        { label: 'Average and unbalance', formula: 'S_{avg} = \\frac{16.74}{3} = 5.58 kVA   ;   Δ = \\frac{5.81 − 5.58}{5.58} ≈ 4.1 %' },
        { label: 'Demand after diversity (step 4), plus 15 % spare', formula: 'S = 11.3 × 1.15 ≈ 13.0 kVA' },
        { label: 'Current per phase at the service', formula: 'I = \\frac{S}{\\sqrt{3} × U} = \\frac{13 000}{\\sqrt{3} × 400} ≈ 18.8 A' },
      ],
      result: 'Phases balanced within 4 %; 18.8 A per phase including the spare',
    },
    {
      type: 'note',
      text: 'Why 4.1 % here and 1.8 % above? The schedule counts in kVA (apparent power), which includes the power factor of motors and air conditioners; the calculation in watts flattered them. It is the kVA value that heats the cables. Aim for less than 10 %; under 5 % is a very good result. Note also the four “Spare” ways: positions to equip later without changing the enclosure.',
    },

    { type: 'heading', text: '3 · Arranging behind the RCDs' },
    {
      type: 'text',
      text: 'The circuits are not connected directly to the incoming supply: they go through 30 mA residual current devices (RCDs), which cut off if current leaks to earth (we’ll see why at the next step). Awa plans four of them and distributes the circuits with three ideas in mind:',
    },
    {
      type: 'bullets',
      items: [
        'Never put all the lighting behind the same RCD: if it trips, there is still light elsewhere (living-room lighting on the 1st, rooms lighting on the 3rd).',
        'Put the oven and washing machine behind a type A RCD: their electronics can produce leakage currents that the classic type AC detects poorly.',
        'Group the four air conditioners on one RCD, in the last row: easy to find and to switch off for maintenance.',
      ],
    },
    {
      type: 'table',
      headers: ['RCD', 'Type', 'Circuits', 'Phases'],
      rows: [
        ['RCD 1', 'AC', 'living-room lighting, outdoor lighting, bedroom sockets, living-room + bathroom sockets', 'L1, L3'],
        ['RCD 2', 'A', 'oven (hob-ready), washing machine, kitchen sockets', 'L1, L2'],
        ['RCD 3', 'AC', 'rooms lighting, water heater, borehole pump', 'L3'],
        ['RCD 4', 'AC', 'living-room, bedroom 1, bedroom 2, bedroom 3 air conditioners', 'L1, L2, L3'],
      ],
    },
    {
      type: 'decision',
      title: 'Grouping the circuits',
      choice: 'Four 30 mA RCDs, with the lighting split between RCD 1 and RCD 3',
      reasons: [
        'A fault on one appliance only cuts a quarter of the house.',
        'There is always light somewhere: living room on RCD 1, rooms on RCD 3.',
        'Type A protects the appliances with electronics (oven, washing machine).',
      ],
      rejected: 'A single RCD for the whole house: cheaper, but the smallest fault plunges everything into darkness.',
    },
    { type: 'fiche', id: 'panel-schedule', why: 'Building a panel schedule: circuits, phases, balance, demand.' },
    { type: 'fiche', id: 'panel-basics', why: 'How a board is built and the single-line diagram.' },

    { type: 'heading', text: '4 · Thinking ahead' },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'I’m ordering a bigger enclosure than needed: 4 rows of 13 modules. There will be room for the transfer switch of a future generator or solar system. And every breaker gets a clear label: “Bedroom 2 AC”, not “D13”. The day something fails, you’ll know what to switch off.',
    },
    {
      type: 'regional',
      text: 'Voltage fluctuations and storms are frequent: Awa adds a surge protective device at the head of the board, protected by its own breaker. For sensitive appliances (TV, computers, inverter ACs), some clients add a voltage protector (automatic cut-off on under- or overvoltage): useful when the network voltage often drops below 200 V or exceeds 250 V.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'The breaker protects the cable: rating ≥ 1.25 × load current, and ≤ what the cable can carry.',
        'In three-phase, spread the large appliances over the three phases; aim for a deviation of a few percent.',
        'Several RCDs, with the lighting split between them; type A for oven, hob and washing machine.',
        'Keep spare capacity (about 20%) and label every circuit.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'The water heater draws 1,500 W. Check that a 16 A breaker is suitable.',
      solution: ['I = 1,500 / 230 ≈ 6.5 A; 1.25 × 6.5 ≈ 8.2 A.', 'The standard rating just above would be 10 A; 16 A is also fine, since the 2.5 mm² cable carries more than 16 A. We use the standard value for a dedicated circuit.'],
    },
    {
      type: 'exercise',
      question: 'The oven (2,500 W) is moved from L1 to L2. Calculate the new maximum deviation between phases. Is it acceptable?',
      solution: [
        'L1 = 5,110 − 2,500 = 2,610 W; L2 = 5,100 + 2,500 = 7,600 W; L3 = 5,248 W. Average unchanged: 5,153 W.',
        'Max deviation = (7,600 − 5,153) / 5,153 ≈ 47%: a very poor balance. L2 may trip the service breaker while L1 is half empty.',
      ],
    },
  ],
};
