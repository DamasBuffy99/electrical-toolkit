import { TopicContent } from '../../types';
import { SLIDES } from '../../slides';

export const villaDevicesContent: TopicContent = {
  title: 'Choosing the protective devices',
  subtitle: 'Moussa arrives with a quote: “equivalent” breakers at half the price. Awa goes through every device, reads its marking and explains, charts in hand, why a curve, a breaking capacity or an RCD type is never picked at random.',
  blocks: [
    { type: 'scene', text: 'Week 4 · Quote review, with Moussa and Koffi' },
    {
      type: 'objectives',
      items: [
        'Understand what is inside a breaker: thermal and magnetic trip.',
        'Choose the curve (B, C, D) from the trip chart and check it by calculation.',
        'Choose the breaking capacity (I_{cn}) from the short-circuit current.',
        'Choose the type and rating of the RCDs, the incoming device and the surge protector.',
        'Place the MCB, MCCB and ACB families and compare the NF C 15-100, IEC, BS 7671 and NEC rules.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: 'C', label: 'curve chosen, pump included' },
        { value: '6 kA', label: 'breaking capacity of the MCBs' },
        { value: '4 × 40 A', label: '30 mA 4-pole RCDs' },
        { value: '500 mA S', label: 'time-delayed incoming breaker' },
        { value: 'Type 2', label: 'surge protector, U_p ≤ 1.5 kV' },
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Moussa Keïta (site manager)',
      role: 'team',
      text: 'Ms Diallo, my supplier has 16 A breakers at half the price. Same rating, same job, right?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'The rating is only one of the numbers printed on it. There is also the curve, the breaking capacity, the standard, the number of poles. Two “16 A” breakers can behave very differently on the day of a short circuit. Let’s look at them together.',
    },

    { type: 'heading', text: '1 · What is inside a miniature circuit breaker (MCB)' },
    {
      type: 'text',
      text: 'A miniature circuit breaker (MCB, standard IEC 60898-1) contains two trip elements. The thermal trip is a bimetal strip heated by the current: it clears an overload faster the bigger it is (from minutes down to seconds). The magnetic trip is a coil that pulls a plunger: above a threshold it opens in under 10 ms. That is what handles short circuits.',
    },
    { type: 'image', source: SLIDES['panel-17'], caption: 'Thermal (overload, long time) then magnetic (short circuit, instantaneous); I_{cu} is the breaking limit', focus: { x: 0.25, y: 0.18, w: 0.5, h: 0.55 } },
    {
      type: 'table',
      headers: ['Quantity', 'Meaning', 'What we check'],
      rows: [
        ['I_n (rating)', 'continuous current without tripping', 'I_B ≤ I_n ≤ I_Z'],
        ['Curve B, C, D', 'magnetic threshold, as a multiple of I_n', 'no trip on start-up, but trips at the end of the line'],
        ['I_{cn} (breaking capacity)', 'highest current the device can interrupt', 'I_{cn} ≥ I_{sc} where it is installed'],
        ['Poles', '1P, 1P+N, 2P, 3P, 4P', 'switch the phase, and the neutral where required'],
        ['Standard', 'IEC 60898-1 (domestic) or IEC 60947-2 (industrial)', 'legible marking, certification body'],
      ],
    },
    { type: 'image', source: SLIDES['cond-29'], caption: 'Reading the marking: “C32” = curve C, 32 A rating; here 1 pole and I_{cn} = 6 kA (often printed “6000” in a box)' },

    { type: 'heading', text: '2 · The curve: the B, C, D chart' },
    {
      type: 'text',
      text: 'The curve sets the magnetic trip threshold. On the chart, the horizontal axis is the current in multiples of the rating, the vertical axis the clearing time. The coloured area is the band where the magnetic trip operates: somewhere between the lower limit (it must never trip below it) and the upper limit (it must always trip above it).',
    },
    { type: 'image', source: SLIDES['panel-24'], caption: 'Trip zone chart: B = 3 to 5 I_n, C = 5 to 10 I_n, D = 10 to 20 I_n', focus: { x: 0.5, y: 0.25, w: 0.47, h: 0.58 } },
    { type: 'image', source: SLIDES['cond-28'], caption: 'The five curves side by side: Z (electronics), B, C, K (motors, ~8 to 14 I_n), D' },
    {
      type: 'table',
      headers: ['Curve', 'Magnetic threshold', 'Typical use'],
      rows: [
        ['Z', '2 to 3 I_n', 'sensitive electronics, semiconductors'],
        ['B', '3 to 5 I_n', 'lighting, resistive loads, very long cables'],
        ['C', '5 to 10 I_n', 'general domestic and commercial use'],
        ['K', '8 to 14 I_n', 'motors, transformers (industrial range)'],
        ['D', '10 to 20 I_n', 'high inrush: LV/LV transformers, large motors, welding'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Koffi Mensah',
      role: 'client',
      text: 'So the pump, which starts hard, needs a D curve?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'That’s the reflex, but let’s check. The breaker must let the start-up through, and still clear a short circuit at the very end of the 80 m cable, where the current is lowest. A curve that is too high would no longer see that fault.',
    },
    {
      type: 'calc',
      title: 'Curve of the pump breaker (16 A, 4 mm² cable, 80 m)',
      steps: [
        { label: 'Starting current (about 6 times the rated current)', formula: 'I_{st} ≈ 6 × I_n = 6 × 7.6 ≈ 46 A' },
        { label: 'Lower magnetic limit: it must not trip on start-up', formula: 'I_{m,B} = 3 × 16 = 48 A   ;   I_{m,C} = 5 × 16 = 80 A   ;   I_{m,D} = 10 × 16 = 160 A' },
        { label: 'Minimum short circuit at the end of the cable (phase-neutral, hot cable)', formula: 'I_{sc,min} = \\frac{0.8 × U_0}{ρ × \\frac{2L}{S}} = \\frac{0.8 × 230}{0.0225 × \\frac{2 × 80}{4}} ≈ 204 A' },
        { label: 'Upper magnetic limit: it must always clear this fault', formula: 'I_{m,B} = 5 × 16 = 80 A ✓   ;   I_{m,C} = 10 × 16 = 160 A ✓   ;   I_{m,D} = 20 × 16 = 320 A ✗' },
      ],
      result: 'Curve C: 46 A < 80 A (no nuisance trip) and 160 A < 204 A (fault cleared)',
    },
    {
      type: 'decision',
      title: 'Breaker curve',
      choice: 'Curve C for every circuit of the villa, the pump included',
      reasons: [
        'Curve B is too tight: 46 A at start-up is close to its 48 A lower limit, the pump would trip the breaker on hot days.',
        'Curve C lets the start-up through and still clears a short circuit at the bottom of the garden.',
        'A single curve in the board: fewer mistakes when a breaker is replaced.',
      ],
      rejected: 'Curve D: 320 A > 204 A, a short circuit at the end of the cable would be cleared by the thermal trip after several seconds, or not at all. The classic “big curve” trap.',
    },
    {
      type: 'note',
      text: 'The I_{sc,min} calculation also gives a maximum protected length: for a C16 on 4 mm², L_{max} = \\frac{0.8 × 230 × 4}{0.0225 × 2 × 160} ≈ 102 m. Beyond that, a bigger cable or a B curve is needed. Manufacturers publish these maximum lengths in ready-made tables.',
    },
    { type: 'fiche', id: 'circuit-breaker', why: 'Curves, standard ratings, marking and detailed breaker selection.' },

    { type: 'heading', text: '3 · Breaking capacity: how many kA?' },
    {
      type: 'text',
      text: 'The breaking capacity I_{cn} is the highest short-circuit current the breaker can interrupt without exploding or welding shut. It must be at least the prospective short-circuit current where it is installed. That current depends mostly on the neighbourhood transformer and on the cable length between it and the board.',
    },
    {
      type: 'calc',
      title: 'Short circuit at the villa board',
      steps: [
        { label: 'Neighbourhood transformer: 160 kVA, u_k = 4 %', formula: 'I_n = \\frac{160 000}{\\sqrt{3} × 400} ≈ 231 A' },
        { label: 'Short circuit at the transformer terminals (worst case)', formula: 'I_{sc} = \\frac{I_n}{u_k} = \\frac{231}{0.04} ≈ 5.8 kA' },
        { label: 'At the board, the line and service cable reduce it', formula: 'I_{sc,board} ≈ 3 to 4 kA  (depending on the distance to the substation)' },
      ],
      result: 'I_{cn} = 6 kA covers even a board right next to the substation',
    },
    {
      type: 'table',
      headers: ['I_{cn} (IEC 60898-1)', 'Where you find it'],
      rows: [
        ['3 kA', 'minimum allowed in dwellings behind the utility breaker (NF C 15-100)'],
        ['4.5 kA', 'common domestic range'],
        ['6 kA', 'premium domestic, small commercial'],
        ['10 kA', 'commercial, boards close to a transformer'],
        ['15 to 25 kA', 'industrial range (IEC 60947-2), downstream of a main LV board'],
      ],
    },
    {
      type: 'decision',
      title: 'Breaking capacity',
      choice: '6 kA miniature breakers, certified to IEC 60898-1',
      reasons: [
        'The neighbourhood substation is 60 m away: the board may approach 4 kA, and the network will be reinforced one day.',
        'The price gap between 4.5 and 6 kA is small; an undersized device can burst on the first short circuit.',
      ],
      rejected: 'Moussa’s “half-price” breakers: no legible I_{cn}, no standard reference. Rejected.',
    },

    { type: 'heading', text: '4 · RCDs: type, sensitivity, rating' },
    {
      type: 'text',
      text: 'The residual current device (RCCB) compares the current leaving on the phase with the current returning on the neutral. If something is missing, that current is leaking to earth, possibly through someone: above the sensitivity I_{Δn}, it trips. It does not protect against overloads: that is the job of the breakers below it.',
    },
    { type: 'image', source: SLIDES['rccb-6'], caption: 'Principle: a toroid measures the difference between phase and neutral; the T button simulates a leak' },
    { type: 'image', source: SLIDES['rccb-7'], caption: 'Marking of an RCCB: I_n 40 A, I_{Δn} 30 mA, I_{nc} 10 kA, type AC' },
    { type: 'image', source: SLIDES['rccb-8'], caption: 'Types AC, A and B: which leakage waveforms they detect' },
    {
      type: 'table',
      headers: ['Type', 'Detects', 'For which circuits'],
      rows: [
        ['AC', 'sinusoidal AC leakage', 'lighting, sockets, resistive water heater'],
        ['A', 'AC + pulsating DC', 'washing machine, hob, oven, electronic appliances'],
        ['F', 'A + mixed frequencies', 'single-phase inverter air conditioners and pumps'],
        ['B', 'F + smooth DC', 'three-phase drives, EV chargers, non-isolated PV inverters'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Reading your air conditioners’ datasheet again, I see they are “inverter” units. Their electronics can produce leakage that a type AC does not see, and the manufacturer requires at least a type A. So I am changing RCD 4 to type A: that is revision B of the board drawing.',
    },
    {
      type: 'calc',
      title: 'Rating of RCD 2 (oven, washing machine, kitchen sockets)',
      steps: [
        { label: 'It does not protect against overloads: it must carry the real current flowing through it', formula: 'I_{n,RCD} ≥ maximum current on the most loaded phase' },
        { label: 'L1: oven; L2: washing machine + kitchen sockets', formula: 'I_{L1} = \\frac{2 500}{230} ≈ 10.9 A   ;   I_{L2} = \\frac{2 000 + 1 300}{230} ≈ 14.3 A' },
        { label: 'With the future hob (7 kW spread over L1 and L2)', formula: 'I ≈ \\frac{3 500}{230} + 14.3 ≈ 29.5 A' },
      ],
      result: '40 A, 30 mA, type A, 4-pole RCD (its circuits are on two phases)',
    },
    {
      type: 'decision',
      title: 'RCDs',
      choice: '4 RCCBs 40 A 30 mA 4P: RCD 1 and RCD 3 type AC, RCD 2 and RCD 4 type A',
      reasons: [
        '30 mA protects people; NF C 15-100 requires that sensitivity on every circuit.',
        'Type A wherever there is power electronics (oven, washing machine, inverter AC).',
        'One RCCB per group: a good compromise between continuity of service and cost.',
      ],
      rejected: 'One RCBO per circuit: the best continuity of service, but three times the price and wider. It will be used at the clinic.',
    },

    { type: 'heading', text: '5 · The incoming device and the surge protector' },
    {
      type: 'text',
      text: 'At the origin of the installation, the utility fits a 4-pole incoming breaker with a 500 mA, time-delayed (type S) residual function. Set according to the subscription, it limits the power and protects the earth electrode (as seen in the previous step: R_A ≤ 100 Ω). Being delayed, it lets the board’s 30 mA devices trip first: a fault on the pump does not black out the whole house. This is residual-current discrimination.',
    },
    {
      type: 'calc',
      title: 'Discrimination between the 500 mA (S) and the 30 mA devices',
      steps: [
        { label: 'Sensitivities: the upstream threshold must be at least twice the downstream one', formula: '\\frac{I_{Δn,up}}{I_{Δn,down}} = \\frac{500}{30} ≈ 17 ≥ 2 ✓' },
        { label: 'Time: a type S never trips in less than 40 ms; a 30 mA general type trips in under 40 ms at 5 I_{Δn}', formula: 't_{S} ≥ 40 ms ≥ t_{30 mA}' },
      ],
      result: 'Full discrimination: only the RCD of the faulty circuit trips',
    },
    {
      type: 'text',
      text: 'The surge protective device (SPD) diverts lightning-induced overvoltages to earth before they reach the appliances. In a house, a type 2 SPD is fitted at the head of the board, with its own disconnector.',
    },
    {
      type: 'table',
      headers: ['Characteristic', 'Value chosen', 'Why'],
      rows: [
        ['Type', 'type 2 (8/20 µs test)', 'induced surges; no lightning rod on the villa'],
        ['I_n / I_{max}', '5 kA / 40 kA', 'high thunderstorm activity'],
        ['U_p (protection level)', '≤ 1.5 kV', 'below the withstand of electronic appliances'],
        ['Disconnector', 'dedicated C20 breaker', 'isolates the SPD at end of life without cutting the house'],
        ['Wiring', 'total length ≤ 50 cm', 'each metre of wire adds about 1 kV to U_p'],
      ],
    },

    { type: 'heading', text: '6 · Elsewhere in the course: MCB, MCCB, ACB' },
    {
      type: 'text',
      text: 'The villa only needs miniature breakers. But as soon as the current grows, the family changes. This rating chart is a first sort; the final choice also depends on breaking capacity, settings and discrimination.',
    },
    { type: 'image', source: require('../../../../assets/reference/circuit_breaker_ratings_ranges.png'), caption: 'Rating ranges: MCB up to 125 A, MCCB from about 16 to 1,600 A, ACB from 630 to 6,300 A' },
    {
      type: 'table',
      headers: ['Family', 'Ratings', 'Breaking capacity', 'Settings', 'In this course'],
      rows: [
        ['MCB (miniature)', '0.5 to 125 A', '3 to 25 kA', 'none (fixed curve)', 'villa, flats, final circuits'],
        ['MCCB (moulded case)', '16 to 1,600 A', '25 to 150 kA', 'I_r, I_m, sometimes electronic LSI', 'building risers, factory feeders'],
        ['ACB (air circuit breaker)', '630 to 6,300 A', '50 to 150 kA', 'full electronic LSI(G)', 'main incomer of the factory and clinic boards'],
      ],
    },

    { type: 'heading', text: '7 · What the standards say' },
    {
      type: 'norms',
      title: 'Protecting a 2.5 mm² socket circuit',
      rows: [
        { norm: 'NF C 15-100', rule: 'At most 12 socket outlets on 2.5 mm², protected at 20 A; 30 mA on every circuit.', result: 'C20 + 30 mA RCD' },
        { norm: 'IEC 60364-4-43', rule: 'I_B ≤ I_n ≤ I_Z and I_2 ≤ 1.45 I_Z; 2.5 mm² in a wall, I_Z ≈ 24 A.', result: '20 A' },
        { norm: 'BS 7671', rule: 'Ring final circuit in 2.5 mm², serving up to 100 m².', result: '32 A ring, 30 mA RCBO' },
        { norm: 'NEC (USA, 120 V)', rule: '12 AWG (3.3 mm²) on 20 A; GFCI in kitchens, bathrooms and outdoors, AFCI in living areas.', result: '20 A + GFCI / AFCI' },
      ],
    },
    {
      type: 'norms',
      title: 'Where is high-sensitivity residual current protection required?',
      rows: [
        { norm: 'NF C 15-100', rule: 'Every circuit of a dwelling; type A required for some appliances (washing machine, hob, EV charger).', result: '100 % of circuits at 30 mA' },
        { norm: 'IEC 60364-4-41', rule: 'Socket outlets up to 32 A and mobile outdoor equipment; bathrooms (part 7-701).', result: '30 mA on sockets' },
        { norm: 'BS 7671', rule: 'Sockets up to 32 A, cables concealed less than 50 mm deep, lighting in dwellings.', result: '30 mA almost everywhere' },
        { norm: 'NEC 210.8', rule: 'GFCI (≈ 5 mA) in bathrooms, kitchens, garages, outdoors, laundry areas.', result: '5 mA at wet locations' },
      ],
    },
    {
      type: 'regional',
      text: 'Counterfeit breakers are sold in markets: unusually light, blurred marking, no I_{cn} or standard reference. Buy from an approved distributor and ask for the datasheet. Another point specific to hot countries: an MCB is calibrated at 30 °C (IEC 60898-1). In an enclosure in full sun at 45 °C it trips at about 0.9 I_n; Awa therefore puts the board indoors, in the ventilated garage, and leaves margin on continuously loaded circuits (air conditioners).',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'A breaker is chosen by five numbers: rating, curve, breaking capacity, number of poles, standard.',
        'The curve must let start-ups through and clear the minimum short circuit at the end of the cable: check both limits of the chart.',
        'I_{cn} ≥ prospective I_{sc} where it is installed; 4.5 or 6 kA in dwellings.',
        'RCD: 30 mA for people, type A or F as soon as there is electronics, rating ≥ the real current flowing through it.',
        'The 500 mA incoming breaker is delayed (S) to discriminate with the 30 mA devices.',
        'MCB up to 125 A, MCCB up to about 1,600 A, ACB above 630 A.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'An outdoor lighting circuit, C10 on 1.5 mm², is 60 m long. Is the minimum short circuit at the end of the line cleared by the magnetic trip?',
      solution: [
        'I_{sc,min} = 0.8 × 230 / (0.0225 × 2 × 60 / 1.5) = 184 / 1.8 ≈ 102 A.',
        'Curve C: upper limit 10 × 10 = 100 A < 102 A: just enough, with no margin.',
        'Better use a B curve (5 × 10 = 50 A) or a 2.5 mm² cable (I_{sc,min} ≈ 170 A).',
      ],
    },
    {
      type: 'exercise',
      question: 'The neighbour’s board is 5 m from a 250 kVA transformer (u_k = 4 %). Are his 4.5 kA breakers suitable?',
      solution: [
        'I_n = 250,000 / (√3 × 400) ≈ 361 A; I_{sc} ≈ 361 / 0.04 ≈ 9 kA at the transformer terminals.',
        'At 5 m the cable barely reduces that current: 4.5 kA is not enough. He needs 10 kA breakers, or a current-limiting incoming device with a manufacturer-guaranteed combination (cascading).',
      ],
    },
    {
      type: 'exercise',
      question: 'Why might a 30 mA type AC RCD fail to trip on a washing-machine fault?',
      solution: [
        'The motor electronics rectify the current: the leakage contains a pulsating DC component that the toroid of a type AC device detects poorly, or even saturates on.',
        'Type A is designed for these waveforms; that is why the standard requires it for washing machines and hobs.',
      ],
    },
  ],
};
