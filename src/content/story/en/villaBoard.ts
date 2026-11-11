import { TopicContent } from '../../types';

export const villaBoardContent: TopicContent = {
  title: 'The house distribution board',
  subtitle: 'Fourteen circuits to arrange: which breaker for each, on which phase, behind which RCD? Awa builds the villa’s panel schedule and explains why the order matters.',
  blocks: [
    { type: 'scene', text: 'Week 3 · Design office' },
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
    { type: 'formula', text: 'I_{CB} ≥ 1.25 × I_{load} = 1.25 × 8.7 ≈ 10.9 A  →  standard rating 16 A' },
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
      headers: ['No.', 'Circuit', 'Rating', 'Cable', 'Phase', 'RCD'],
      rows: [
        ['1', 'Living-room lighting', '10 A', '1.5 mm²', 'L1', 'RCD 1 (AC)'],
        ['2', 'Living-room + bathroom sockets', '20 A', '2.5 mm²', 'L3', 'RCD 1 (AC)'],
        ['3', 'Bedroom sockets', '20 A', '2.5 mm²', 'L1', 'RCD 1 (AC)'],
        ['4', 'Outdoor lighting', '10 A', '1.5 mm²', 'L1', 'RCD 1 (AC)'],
        ['5', 'Oven (hob-ready)', '32 A', '6 mm²', 'L1', 'RCD 2 (A)'],
        ['6', 'Washing machine', '20 A', '2.5 mm²', 'L2', 'RCD 2 (A)'],
        ['7', 'Kitchen sockets', '20 A', '2.5 mm²', 'L2', 'RCD 2 (A)'],
        ['8', 'Rooms lighting', '10 A', '1.5 mm²', 'L3', 'RCD 3 (AC)'],
        ['9', 'Water heater', '16 A', '2.5 mm²', 'L3', 'RCD 3 (AC)'],
        ['10', 'Borehole pump', '16 A', '4 mm² (see step 8)', 'L3', 'RCD 3 (AC)'],
        ['11', 'Living-room AC', '16 A', '2.5 mm²', 'L1', 'RCD 4 (AC)'],
        ['12', 'Bedroom 1 AC', '16 A', '2.5 mm²', 'L2', 'RCD 4 (AC)'],
        ['13', 'Bedroom 2 AC', '16 A', '2.5 mm²', 'L2', 'RCD 4 (AC)'],
        ['14', 'Bedroom 3 AC', '16 A', '2.5 mm²', 'L3', 'RCD 4 (AC)'],
      ],
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
