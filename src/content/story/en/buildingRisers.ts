import { TopicContent } from '../../types';

export const buildingRisersContent: TopicContent = {
  title: 'Risers and meters',
  subtitle: 'How do you carry 76 kVA up to the 4th floor, give each family its own meter, and keep the voltage good all the way to the last flat?',
  blocks: [
    { type: 'scene', text: 'Month 3 · Design office' },
    {
      type: 'objectives',
      items: [
        'Size a rising main.',
        'Spread the flats over the three phases.',
        'Choose where the meters go.',
        'Check the voltage drop on the top floor.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '110 A', label: 'rising-main current' },
        { value: '4 × 35 mm²', label: 'XLPE cable' },
        { value: '45 A', label: 'supply per flat' },
        { value: '< 2 %', label: 'drop on the 4th floor' },
      ],
    },
    { type: 'illustration', name: 'building-riser', props: { highlight: 'risers' }, caption: 'The riser feeds the meters on each landing' },
    {
      type: 'text',
      text: 'From the main board, the energy must reach 16 flats spread over four floors. Rather than pulling 16 cables from the ground floor, Awa plans a riser: one large three-phase cable rising in a vertical service shaft, feeding on each landing the meters of the four flats.',
    },
    {
      type: 'dialogue',
      speaker: 'Fatou Sow',
      role: 'client',
      text: 'And who pays for what? I don’t want my tenants arguing over the lift bill.',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Each flat has its own meter: each family pays for what it uses. The lift, the pumps and the common-area lighting are on a separate meter, the “common services” one, paid through the service charges or by you. That’s why I put them on a separate board.',
    },

    { type: 'heading', text: '1 · Sizing the riser' },
    { type: 'formula', text: 'I = \\frac{S}{√3 × U} = \\frac{76,000}{√3 × 400} ≈ 110 A' },
    {
      type: 'text',
      text: 'Awa chooses a 125 A breaker at the main board, then a cable able to carry at least 125 A in the real conditions: inside a closed vertical shaft, where it is hot. A 4 × 35 mm² copper XLPE cable carries about 150 A at 30 °C; corrected for 40 °C (× 0.87), about 130 A remain: that is enough.',
    },
    { type: 'formula', text: 'I_z = 150 × 0.87 ≈ 130 A  ≥  I_{CB} = 125 A  ≥  I = 110 A' },
    {
      type: 'note',
      text: 'It’s always the same chain of checks, from smallest to largest: design current ≤ breaker rating ≤ corrected cable capacity. It was already there for the villa’s circuits.',
    },
    { type: 'fiche', id: 'cable-sizing', why: 'Current-carrying capacities, PVC and XLPE insulation, correction factors.' },

    { type: 'heading', text: '2 · Spreading the flats over the phases' },
    {
      type: 'text',
      text: 'Each flat is single-phase. The riser is three-phase: Awa connects the 16 meters alternating the phases (L1, L2, L3, L1…), giving 6 flats on one phase and 5 on each of the other two. It’s the same balancing principle as in the villa board, at building scale.',
    },
    {
      type: 'table',
      headers: ['Floor', 'Flat A', 'Flat B', 'Flat C', 'Flat D'],
      rows: [
        ['1st', 'L1', 'L2', 'L3', 'L1'],
        ['2nd', 'L2', 'L3', 'L1', 'L2'],
        ['3rd', 'L3', 'L1', 'L2', 'L3'],
        ['4th', 'L1', 'L2', 'L3', 'L1'],
      ],
    },

    { type: 'heading', text: '3 · Meters: on each landing or grouped?' },
    {
      type: 'table',
      headers: ['', 'Meters on each landing', 'Meters grouped on the ground floor'],
      rows: [
        ['Cables to the flats', 'short (about fifteen metres)', 'long (up to 30 m and more), one per flat'],
        ['Reading, prepayment, disconnection', 'you have to go up the floors', 'everything in one place'],
        ['Riser', 'yes, one large shared cable', 'no, but 16 cables in the shaft'],
      ],
    },
    {
      type: 'text',
      text: 'The utility accepts both. Awa chooses the landings: less copper, shorter cables, a less crowded shaft. Each landing gets an enclosure with four meters and, for each flat, a 500 mA residual service breaker set at 45 A (9 kVA / 230 V ≈ 39 A).',
    },

    { type: 'heading', text: '4 · The voltage on the top floor' },
    {
      type: 'text',
      text: 'The worst-placed flat is on the 4th floor, at the end of the landing: 25 m of riser, then 15 m of cable to its board. Awa adds up the voltage drop of each section.',
    },
    { type: 'formula', text: 'Riser (three-phase): ΔU = \\frac{√3 × ρ × L × I × cos φ}{S} = \\frac{1.732 × 0.0225 × 25 × 110 × 0.9}{35} ≈ 2.8 V  →  0.7%' },
    { type: 'formula', text: 'Landing → flat (single-phase, 10 mm²): ΔU = \\frac{2 × 0.0225 × 15 × 39 × 0.9}{10} ≈ 2.4 V  →  1.0%' },
    {
      type: 'text',
      text: 'Adding the short transformer → main board run, the total is under 2% at the board of the farthest flat. Since the building has its own substation, the accepted limits are 6% for lighting and 8% for other uses: all the margin remains for the circuits inside the flats.',
    },
    { type: 'fiche', id: 'voltage-drop', why: 'Limits by type of supply (public network or private substation) and three-phase formulas.' },
    { type: 'fiche', id: 'panel-basics', why: 'How a board is built and the distribution single-line diagram.' },
    {
      type: 'regional',
      text: 'Prepaid meters (cards or codes) are very widespread: they settle the question of unpaid bills between landlord and tenants. Plan a visible spot in each flat for the display unit, and check with the utility which metering enclosure model it requires.',
    },

    { type: 'heading', text: '5 · On site: the unexpected beam' },
    { type: 'scene', text: 'Month 11 · Électra BTP site office' },
    {
      type: 'dialogue',
      speaker: 'Didier Kouassi (shop drawings)',
      role: 'team',
      text: 'While detailing the shaft on the 3rd floor, I see a structural beam crossing the planned route. I propose diverting the riser through the next landing: 5 m more cable. I’ve put it on my construction drawings.',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Well spotted, Didier, that’s exactly what shop drawings are for. With 30 m instead of 25, the riser voltage drop goes from 0.7% to about 0.8%: no consequence. Marc can approve the new route.',
    },
    {
      type: 'text',
      text: 'Rachid Bamba, the site engineer, waits for Marc’s approval before having the slabs drilled: a hole in the wrong place in a slab is hard to fill properly. A week later the riser is installed according to the approved drawings, and Didier records the real route for the future as-built drawings.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'A three-phase riser feeds the landings; each flat has its own meter and service breaker.',
        'Common services have their own meter and their own board.',
        'Alternate the phases from one flat to the next to balance the riser.',
        'Add up the voltage drops section by section, to the farthest flat.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'If the meters were grouped on the ground floor, the 4th-floor flat would be fed by 40 m of single-phase cable. What section keeps this cable under 2% (39 A, cos φ 0.9)?',
      solution: [
        'Max ΔU = 2% × 230 = 4.6 V.',
        'S ≥ 2 × 0.0225 × 40 × 39 × 0.9 / 4.6 ≈ 13.7 mm² → 16 mm².',
        'Sixteen 16 mm² cables in the shaft, against a 35 mm² riser and 10 mm² cables: you can see why Awa prefers meters on the landings.',
      ],
    },
    {
      type: 'exercise',
      question: 'On the riser, 6 flats are on L1 and 5 on L2 and L3. What is the imbalance in number of flats? Is it a problem?',
      solution: [
        'Average: 16 / 3 ≈ 5.33 flats per phase; L1 has 6, a deviation of (6 − 5.33) / 5.33 ≈ 12.5%.',
        'In practice, diversity between families smooths out the differences and the riser is sized with margin: it’s acceptable. With a number of flats that is a multiple of 3, the balance would be perfect.',
      ],
    },
  ],
};
