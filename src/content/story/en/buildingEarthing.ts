import { TopicContent } from '../../types';

export const buildingEarthingContent: TopicContent = {
  title: 'Earthing system, earth and lightning',
  subtitle: 'At the villa, the utility imposed the TT system. Here the building has its own transformer: Awa must choose how the neutral and the exposed metalwork are connected to earth. Ndeye Faye, from the inspection body, wants a written justification, and Fatou worries about thunderstorms.',
  blocks: [
    { type: 'scene', text: 'Month 5 · Coordination meeting with the inspection body' },
    {
      type: 'objectives',
      items: [
        'Compare the TT, TN-C, TN-S, TN-C-S and IT earthing systems.',
        'Check that an insulation fault is cleared in time (fault loop, disconnection time).',
        'Size the protective conductor (PE) and the equipotential bonding.',
        'Decide on a lightning protection system and choose coordinated type 1 and type 2 SPDs.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: 'TN-S', label: 'system chosen for the building' },
        { value: '0.4 s', label: 'maximum disconnection time, final circuits' },
        { value: '≈ 500 A', label: 'fault current at the lift motor' },
        { value: '12.5 kA', label: 'I_{imp} per pole of the type 1 SPD' },
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Ndeye Faye (inspection body)',
      role: 'team',
      text: 'Your calculation note doesn’t state the earthing system. Without it, I can’t approve your protection against indirect contact.',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'You’re right, it’s the first choice to write down. Since the substation is private, the choice is ours. I propose TN-S, and I’ll show you why the other systems don’t suit this building.',
    },

    { type: 'heading', text: '1 · Five ways to connect the neutral and the metalwork' },
    {
      type: 'text',
      text: 'Two letters describe a system. The first says how the transformer neutral is connected to earth: T (directly) or I (isolated, or through a high impedance). The second says how the exposed conductive parts of equipment are connected: T (to a local earth electrode) or N (to the neutral). For TN, a third letter tells whether the neutral and protective conductor are separate (S) or combined in a PEN (C).',
    },
    {
      type: 'table',
      headers: ['System', 'Principle', 'On a first fault', 'Where you find it'],
      rows: [
        ['TT', 'neutral earthed, metalwork to a local electrode', 'small current: cleared by an RCD', 'public distribution (villa)'],
        ['TN-C', 'neutral and PE combined (PEN)', 'large current, cleared by the breaker', 'large cables ≥ 10 mm² Cu, older industry'],
        ['TN-S', 'neutral and PE separate throughout', 'large current, cleared by the breaker', 'buildings with a private substation'],
        ['TN-C-S', 'PEN upstream, split downstream', 'same as TN', 'United Kingdom (PME), mixed networks'],
        ['IT', 'neutral isolated or impedance-earthed', 'almost no current: keep running, locate the fault', 'operating theatres, continuous processes'],
      ],
    },
    {
      type: 'decision',
      title: 'Earthing system',
      choice: 'TN-S from the transformer, PE run with every circuit',
      reasons: [
        'A bolted fault becomes a short circuit: breakers clear it quickly, without depending on an earth electrode’s resistance.',
        'Neutral and PE separate: no load or harmonic current in the PE, which is kinder to electronics (lift drive, IT equipment).',
        '30 mA RCDs remain possible, and mandatory, in the flats.',
      ],
      rejected: 'TN-C: forbidden below 10 mm² and incompatible with RCDs. IT: excellent for continuity, but it needs an insulation monitor and a team that hunts faults; it will be kept for the clinic’s operating theatres. TT: possible, but every way would need an RCD.',
    },
    { type: 'fiche', id: 'electrical-safety', why: 'Direct and indirect contact, TT, TN and IT systems illustrated.' },

    { type: 'heading', text: '2 · Disconnecting in time: the fault loop' },
    {
      type: 'text',
      text: 'In TN, a fault between a phase and exposed metalwork drives a current back along the PE to the transformer. It must be large enough to trip the breaker’s magnetic element within the maximum time set by the standard. The path is called the fault loop; the longer and thinner the cable, the smaller the current.',
    },
    {
      type: 'table',
      headers: ['Maximum disconnection time (U_0 = 230 V)', 'TN', 'TT'],
      rows: [
        ['Final circuits ≤ 32 A', '0.4 s', '0.2 s'],
        ['Distribution circuits and circuits > 32 A', '5 s', '1 s'],
      ],
    },
    {
      type: 'calc',
      title: 'Insulation fault at the lift motor (C25, 4G6 mm², 40 m)',
      steps: [
        { label: 'Phase + PE resistance, hot cable (ρ = 0.0225 Ω·mm²/m)', formula: 'R = \\frac{ρ × (L_{ph} + L_{PE})}{S} = \\frac{0.0225 × 80}{6} = 0.30 Ω' },
        { label: 'Upstream: services way (5G16 mm², 15 m), main board and transformer', formula: 'R_{up} ≈ 0.04 + 0.03 = 0.07 Ω' },
        { label: 'Fault current (0.8 allows for the voltage drop upstream)', formula: 'I_f = \\frac{0.8 × U_0}{Z_s} = \\frac{0.8 × 230}{0.37} ≈ 497 A' },
        { label: 'Maximum magnetic threshold of the C25', formula: 'I_a = 10 × 25 = 250 A ≤ 497 A ✓' },
      ],
      result: 'The fault is cleared by the magnetic trip in under 0.1 s (requirement: 0.4 s)',
    },
    {
      type: 'note',
      text: 'The general condition is Z_s × I_a ≤ U_0. If the cable were too long, the fault current would fall below the magnetic threshold: a bigger cable, a lower curve or an RCD would then be needed. It is the same logic as the maximum protected length of the villa pump.',
    },

    { type: 'heading', text: '3 · The protective conductor and equipotential bonding' },
    {
      type: 'table',
      headers: ['Phase cross-section S', 'Minimum PE cross-section (same metal)'],
      rows: [
        ['S ≤ 16 mm²', 'S'],
        ['16 < S ≤ 35 mm²', '16 mm²'],
        ['S > 35 mm²', 'S / 2'],
      ],
    },
    {
      type: 'calc',
      title: 'PE of the rising main',
      steps: [
        { label: '35 mm² phases: read the second row of the table', formula: 'S_{PE} = 16 mm²' },
        { label: 'Thermal (adiabatic) check, 5 kA fault cleared in 0.1 s, k = 143', formula: 'S_{PE} ≥ \\frac{I × \\sqrt{t}}{k} = \\frac{5 000 × \\sqrt{0.1}}{143} ≈ 11 mm²' },
      ],
      result: 'Riser: 4 × 35 mm² + 16 mm² PE',
    },
    {
      type: 'text',
      text: 'Every metal part that can introduce a potential (water pipes, steel structure, lift rails and machinery, cable trays) is connected to the main earthing terminal of the main board: that is the main protective bonding. In each bathroom, supplementary bonding connects the exposed and extraneous conductive parts close to one another.',
    },
    {
      type: 'dialogue',
      speaker: 'Rachid Bamba (Électra BTP)',
      role: 'team',
      text: 'We laid the foundation earth ring in month 2, as you required: 25 mm² bare copper under the blinding concrete, with risers at the corners. It measures 1.8 Ω.',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'That’s the kind of detail decided at design and played out during the structural works. Once the foundations are poured, you’d have to drive rods around the building, for a worse result. Thank you.',
    },

    { type: 'heading', text: '4 · Lightning: air terminals and SPDs' },
    {
      type: 'dialogue',
      speaker: 'Fatou Sow',
      role: 'client',
      text: 'In the rainy season, the storms are violent. Do we need a lightning rod on the roof?',
    },
    {
      type: 'text',
      text: 'The answer comes from a risk assessment (IEC 62305-2). It considers the local flash density (N_g, strikes per km² per year), the size of the building, its occupancy and its contents. In West Africa N_g often exceeds 10, against 1 to 3 in Western Europe. For an occupied five-storey building, the assessment calls for a class III external lightning protection system.',
    },
    {
      type: 'calc',
      title: 'Type 1 SPD at the main board (protection level III)',
      steps: [
        { label: 'Reference lightning current for level III', formula: 'I_{lightning} = 100 kA  (10/350 µs wave)' },
        { label: 'About half flows into the earth electrode, the rest along the incoming services', formula: 'I_{services} = 50 % × 100 = 50 kA' },
        { label: 'Shared across the four live conductors (3 phases + neutral)', formula: 'I_{imp} = \\frac{50}{4} = 12.5 kA per pole' },
      ],
      result: 'Type 1 SPD at the main board: I_{imp} ≥ 12.5 kA per pole, U_p ≤ 2.5 kV',
    },
    {
      type: 'table',
      headers: ['Location', 'SPD', 'Characteristics', 'Role'],
      rows: [
        ['Main board', 'type 1 (or 1+2)', 'I_{imp} 12.5 kA/pole, U_p ≤ 2.5 kV', 'carry the direct lightning current'],
        ['Services board', 'type 2', 'I_n 20 kA, U_p ≤ 1.5 kV', 'lower the level for the lift drive and intercom'],
        ['Flat boards', 'type 2 (recommended)', 'I_n 5 kA, U_p ≤ 1.5 kV', 'protect TVs, routers, inverter ACs'],
      ],
    },
    {
      type: 'note',
      text: 'Coordination: about 10 m of cable (or a decoupling inductor) is needed between a type 1 and a type 2, otherwise the faster type 2 takes all the energy and fails. Here the services board is 15 m from the main board: coordination comes naturally. Each SPD has its own disconnector and short connections (≤ 50 cm).',
    },

    { type: 'heading', text: '5 · What the standards say' },
    {
      type: 'norms',
      title: 'Protection against indirect contact',
      rows: [
        { norm: 'IEC 60364-4-41', rule: 'TN: Z_s × I_a ≤ U_0, disconnection in 0.4 s (≤ 32 A) or 5 s; TT: R_A × I_{Δn} ≤ 50 V, 0.2 s or 1 s.', result: 'C25: 497 A ≥ 250 A ✓' },
        { norm: 'NF C 15-100', rule: 'Same rules; dwellings fed by the public network are TT; 30 mA on every dwelling circuit.', result: 'TN-S possible here (private substation)' },
        { norm: 'BS 7671', rule: 'TN-C-S (PME) is widespread; maximum Z_s tabulated for each breaker (e.g. C25: ≈ 0.87 Ω with 0.95 U_0).', result: '0.37 Ω ≤ 0.87 Ω ✓' },
        { norm: 'NEC 250', rule: 'Neutral bonded to earth only once, at the service; equipment grounding conductor sized from the breaker rating (Table 250.122).', result: '25 A → 10 AWG (5.3 mm²)' },
      ],
    },
    {
      type: 'norms',
      title: 'Lightning protection',
      rows: [
        { norm: 'IEC 62305', rule: 'Risk assessment, four protection levels (I to IV), rolling sphere, protective angle and mesh methods.', result: 'level III, 15 × 15 m mesh' },
        { norm: 'NF C 17-102', rule: 'Early streamer emission (ESE) air terminal: protection radius computed from the emission advance ΔT.', result: 'widely used in francophone Africa' },
        { norm: 'NFPA 780', rule: 'Air terminals and down conductors; 46 m rolling sphere.', result: 'North American practice' },
        { norm: 'IEC 61643-11', rule: 'Tests and classes of LV SPDs: type 1 (10/350 µs), type 2 (8/20 µs), type 3.', result: 'T1 at the main board, T2 downstream' },
      ],
    },
    {
      type: 'regional',
      text: 'Early streamer emission (ESE) air terminals dominate the West African market, often sold with optimistic protection radii. Ask for the NF C 17-102 reference and the test report of the emission advance, and keep at least two down conductors. The lightning earth (≤ 10 Ω, crow’s-foot layout) must be bonded to the building earth: two separate earths would create a dangerous potential difference during a strike. Finally, most electronics failures after a storm come in through the incoming lines: SPDs on power, but also on telephone and aerial lines.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'Two letters: neutral (T or I) and metalwork (T or N); S or C for the PE in TN.',
        'Private substation: you choose; TN-S is the building reference, IT the choice for absolute continuity.',
        'In TN, check the fault loop: Z_s × I_a ≤ U_0, 0.4 s for final circuits.',
        'PE: same cross-section up to 16 mm², 16 mm² up to 35, then half.',
        'The foundation earth ring is laid during the structural works, not afterwards.',
        'Lightning protection from the risk assessment; type 1 SPD at the main board, type 2 downstream, 10 m apart.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'The lift motor finally ends up 70 m from the services board. Does the C25 on 6 mm² still protect against indirect contact?',
      solution: [
        'R = 0.0225 × 140 / 6 ≈ 0.53 Ω; Z_s ≈ 0.53 + 0.07 = 0.60 Ω.',
        'I_f = 0.8 × 230 / 0.60 ≈ 307 A ≥ 250 A: still fine, but the margin is shrinking. At 90 m it would fall below 250 A.',
      ],
    },
    {
      type: 'exercise',
      question: 'A three-phase way is wired in 4 × 95 mm². What is the minimum cross-section of its PE?',
      solution: ['S > 35 mm²: S_{PE} = S / 2 = 47.5 mm², i.e. the standard size of 50 mm².'],
    },
    {
      type: 'exercise',
      question: 'Why is a 6 mm² copper PEN forbidden?',
      solution: [
        'The PEN carries both the neutral current and the protective function. If it breaks, all downstream metalwork rises to phase potential through the loads.',
        'The standard therefore sets a minimum cross-section (10 mm² Cu, 16 mm² Al) and a fixed installation, to make such a break unlikely.',
      ],
    },
  ],
};
