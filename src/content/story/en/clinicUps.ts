import { TopicContent } from '../../types';

export const clinicUpsContent: TopicContent = {
  title: 'UPS and the operating theatre',
  subtitle: 'In the operating theatre and intensive care, even ten seconds of darkness are unacceptable, and a simple insulation fault must not cut off a ventilator. Awa chooses the UPS type, its batteries and bypass, checks that a short circuit is still cleared behind it, then explains medical IT.',
  blocks: [
    { type: 'scene', text: 'Month 3 · Visit to the future operating theatre' },
    {
      type: 'objectives',
      items: [
        'Tell the three UPS types apart (IEC 62040-3) and choose the right one.',
        'Size the UPS and its batteries at the real discharge rate.',
        'Organise redundancy (N+1, 2N) and the bypass.',
        'Check that a short circuit is cleared when only the UPS is supplying.',
        'Understand the theatre’s medical IT system and size its isolating transformer.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '2 × 20 kVA', label: 'online VFI UPS, N+1' },
        { value: '15 min', label: 'battery autonomy' },
        { value: '32 × 12 V', label: '40 Ah blocks per UPS' },
        { value: 'curve B', label: 'for circuits behind the UPS' },
        { value: '≤ 10 kVA', label: 'isolating transformer per theatre' },
      ],
    },
    { type: 'illustration', name: 'clinic-tiers', props: { highlight: 'ups' }, caption: 'The UPS feeds the vital tier with no interruption at all' },
    {
      type: 'dialogue',
      speaker: 'Dr Aïcha Bello',
      role: 'client',
      text: 'Ten seconds for the generator to take over is too long for an intubated patient. How do we handle that?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'With an “online” UPS. It continuously converts the mains AC into DC, which charges its batteries, then rebuilds a clean AC for the equipment. When the mains disappears, nothing changes for the equipment: the batteries were already in the circuit. There is no switchover, so no interruption.',
    },

    { type: 'heading', text: '1 · Which type of UPS?' },
    {
      type: 'table',
      headers: ['Type (IEC 62040-3)', 'Operation', 'On transfer to battery', 'Use'],
      rows: [
        ['VFD: off-line (passive standby)', 'load on the mains; inverter starts on failure', '4 to 10 ms break', 'desktop computer'],
        ['VI: line-interactive', 'mains corrected by an autotransformer; inverter on standby', '2 to 4 ms', 'small servers, tills'],
        ['VFI: online double conversion', 'rectifier + battery + inverter permanently', 'no break', 'healthcare, data centres, processes'],
      ],
    },
    {
      type: 'decision',
      title: 'UPS type',
      choice: 'Online double conversion (VFI), IGBT rectifier',
      reasons: [
        'No break, and an output voltage independent of dips and harmonics from the mains or the genset.',
        'IGBT rectifier: almost sinusoidal input current (THD_i < 5 %, power factor ≈ 0.99), no impact on the gensets.',
      ],
      rejected: 'Line-interactive: cheaper and more efficient, but a 2 to 4 ms transfer and an output that follows mains disturbances: unacceptable for a ventilator.',
    },

    { type: 'heading', text: '2 · Sizing the UPS and its batteries' },
    { type: 'formula', text: 'Vital tier: 18 kW  →  S = \\frac{18}{0.9} = 20 kVA' },
    {
      type: 'text',
      text: 'Awa applies the same logic as for the generators: two 20 kVA UPS units in parallel, each able to carry the whole vital tier alone (N+1). One can be faulty or under maintenance without the theatre noticing.',
    },
    {
      type: 'dialogue',
      speaker: 'Serge (biomedical technician)',
      role: 'team',
      text: 'And how much battery autonomy? An hour?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'The batteries only need to cover the generator start, normally ten seconds. I still plan 15 minutes: if the first generator fails to start and the second also hesitates, the team has time to finish a manoeuvre and switch to degraded mode. An hour would cost a fortune in batteries for a case that doesn’t happen.',
    },
    { type: 'formula', text: 'Energy for 15 min: E = \\frac{18 kW × 0.25 h}{0.94} ≈ 4.8 kWh  (UPS efficiency ≈ 94%)' },
    {
      type: 'calc',
      title: 'From kWh to battery blocks (sealed lead-acid VRLA, 25 °C)',
      steps: [
        { label: 'Power drawn from the batteries', formula: 'P_{bat} = \\frac{18 000}{0.94} ≈ 19 100 W' },
        { label: 'DC bus of 32 × 12 V blocks; end-of-discharge voltage 1.75 V per cell', formula: 'U_{end} = 32 × 6 × 1.75 = 336 V   ;   I_{max} = \\frac{19 100}{336} ≈ 57 A' },
        { label: 'At this fast rate (15 min), a block delivers only about half its 10 h capacity', formula: 'C_{10} ≈ \\frac{57 × 0.25}{0.5} ≈ 29 Ah' },
        { label: 'Ageing factor (end of life at 80 % capacity)', formula: 'C = 29 × 1.25 ≈ 36 Ah  →  40 Ah blocks' },
      ],
      result: 'Per UPS: 32 blocks of 12 V 40 Ah (≈ 15 kWh nominal, for 4.8 kWh actually usable)',
    },
    {
      type: 'note',
      text: 'The 15 kWh “on the label” do not contradict the 4.8 kWh of the calculation: a lead-acid battery discharged in 15 minutes delivers far less than its nominal capacity, and the 15 minutes must still be there at end of life, not just on day one. Always size with the manufacturer’s constant-power discharge tables.',
    },
    {
      type: 'decision',
      title: 'Battery technology',
      choice: 'Lithium iron phosphate (LFP) for the UPS room, despite a higher purchase price',
      reasons: [
        'A 10 to 15 year life against 3 to 5 years for VRLA in a 30 °C room: a single avoided replacement pays the difference.',
        'Two to three times lighter and more compact: the room on the drawings is enough, with no slab reinforcement.',
        'A battery management system (BMS) monitors every cell and warns Serge before a failure.',
      ],
      rejected: 'Classic VRLA: 40 % cheaper to buy, but very heat-sensitive and to be replaced two or three times over the clinic’s life.',
    },

    { type: 'heading', text: '3 · Bypass and redundancy' },
    {
      type: 'text',
      text: 'Each UPS has a static bypass: an electronic switch that, within milliseconds, connects the load directly to the standby main board if the UPS fails or is overloaded. A manual maintenance bypass, outside the UPS, also lets it be removed completely for repair without cutting the theatre.',
    },
    {
      type: 'table',
      headers: ['Architecture', 'Principle', 'What it tolerates'],
      rows: [
        ['N', 'just the power needed', 'nothing: a failure = bypass to mains'],
        ['N+1', 'one module more than needed, in parallel', 'failure or maintenance of one UPS'],
        ['2N', 'two complete chains, sources and boards separate down to the sockets', 'loss of a whole chain, board included'],
      ],
    },
    {
      type: 'text',
      text: 'Awa keeps N+1 for the clinic, but she doubles the theatre’s vital sockets: each theatre has sockets fed by UPS A and others by UPS B, colour-coded. Dual-supply equipment (some ventilators, central monitors) is plugged into both. It is a step towards 2N, where it really matters.',
    },

    { type: 'heading', text: '4 · A short circuit behind the UPS' },
    {
      type: 'text',
      text: 'A UPS protects its transistors: in a short circuit it limits its current to about 2 to 3 times its rated current, for around a hundred milliseconds. If the bypass is available, it transfers and the mains supplies the fault current. But if the mains is absent, only the UPS supplies: the fault current is small, and a poorly chosen breaker will not see it.',
    },
    {
      type: 'calc',
      title: 'Short circuit on a vital circuit, mains absent',
      steps: [
        { label: 'Rated current of a 20 kVA UPS', formula: 'I_n = \\frac{20 000}{\\sqrt{3} × 400} ≈ 29 A' },
        { label: 'Short-circuit current limited by the UPS (≈ 2.5 I_n, 100 ms)', formula: 'I_{sc} ≈ 2.5 × 29 ≈ 72 A' },
        { label: 'C16 breaker: maximum magnetic threshold', formula: '10 × 16 = 160 A > 72 A  ✗  (cleared by the thermal element, in seconds)' },
        { label: 'B10 breaker: maximum magnetic threshold', formula: '5 × 10 = 50 A < 72 A  ✓  (cleared in under 10 ms)' },
      ],
      result: 'Behind the UPS, small B-curve circuits; otherwise the UPS shuts down before the fault is cleared',
    },
    {
      type: 'decision',
      title: 'Vital board circuits',
      choice: 'Curve B breakers, rating ≤ 10 A per vital socket circuit',
      reasons: [
        'The fault is cleared by the magnetic element even with the UPS current alone.',
        'A faulty circuit is cut before the UPS goes into protection: the other theatres stay supplied.',
      ],
      rejected: 'A C16 shared by several sockets: on battery, a short circuit would trip the whole UPS, and so the whole theatre suite.',
    },

    { type: 'heading', text: '5 · UPS and generator' },
    {
      type: 'bullets',
      items: [
        'Walk-in: when the genset returns, the UPS ramps its load back up over 10 to 20 s so the frequency does not drop.',
        'The IGBT rectifier draws a clean current: the genset can be of similar size. With an old thyristor rectifier, the genset used to be 2 to 3 times the UPS rating.',
        'Battery recharge: up to 10 % more power at the UPS input, to be counted in the genset load.',
        'Synchronisation: the UPS follows the genset frequency, with a widened window (± 2 Hz) so the bypass stays available.',
      ],
    },

    { type: 'heading', text: '6 · Why no 30 mA RCD in the operating theatre?' },
    {
      type: 'dialogue',
      speaker: 'Dr Aïcha Bello',
      role: 'client',
      text: 'In homes, 30 mA RCDs are fitted everywhere for safety. What about here?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Precisely not for life-support equipment in the theatre. Imagine the table light cable gets damaged during an operation: the RCD would cut the circuit… and the ventilator plugged into it. For these circuits we use another earthing system, medical IT, which keeps the installation running on a first fault and just raises an alarm.',
    },
    {
      type: 'bullets',
      items: [
        'Each operating theatre is supplied through a 230 V / 230 V isolating transformer: its secondary is not connected to earth.',
        'On a first insulation fault no dangerous current flows, because the circuit has no return path through earth: the operation can continue.',
        'An insulation monitoring device (IMD) watches the insulation resistance and triggers an audible and visual alarm in the theatre as soon as it drops.',
        'The electrician finds and repairs the fault after the procedure: a second fault would cause a disconnection.',
        'All metal parts in the theatre are bonded together (equipotential bonding) so that no voltage can appear between two objects being touched.',
      ],
    },
    {
      type: 'calc',
      title: 'Isolating transformer for one operating theatre',
      steps: [
        { label: 'Theatre equipment: surgical light, electrosurgical unit, monitors, ventilator, syringe pumps (with diversity)', formula: 'P ≈ 5.5 kW  →  S ≈ \\frac{5.5}{0.9} ≈ 6.1 kVA' },
        { label: 'IEC 60364-7-710: transformer rating between 0.5 and 10 kVA', formula: 'S_{transformer} = 8 kVA (margin for one more device)' },
        { label: 'Insulation monitor threshold', formula: 'alarm if R_{insulation} < 50 kΩ' },
      ],
      result: 'One 8 kVA isolating transformer per theatre, behind the UPS, with its IMD and remote alarm',
    },
    {
      type: 'note',
      text: 'The villa’s TT system and medical IT pursue the same goal, protecting people, with opposite logics. In TT, you cut as soon as there is a leak. In IT, you guarantee that a first fault is not dangerous, and you do not cut, because in the theatre the disconnection itself is the danger. In patient rooms and corridors, on the other hand, Awa uses 30 mA RCBOs per circuit: a fault cuts only one room.',
    },
    { type: 'fiche', id: 'generator-ups-ats', why: 'UPS types (off-line, line-interactive, online) and sizing.' },
    { type: 'fiche', id: 'electrical-safety', why: 'TT, TN and IT earthing systems compared.' },
    { type: 'fiche', id: 'earthing', why: 'Earthing and equipotential bonding.' },

    { type: 'heading', text: '7 · What the standards say' },
    {
      type: 'norms',
      title: 'UPS and theatre supply',
      rows: [
        { norm: 'IEC 62040-3', rule: 'UPS classification by input dependency: VFD, VI, VFI; dynamic output performance.', result: 'VFI-SS-111' },
        { norm: 'IEC 60364-7-710', rule: 'Group 2 medical locations: medical IT, transformer ≤ 10 kVA, IMD, safety source ≤ 0.5 s for theatre lighting.', result: '8 kVA per theatre, UPS' },
        { norm: 'NF C 15-211', rule: 'French application rules for installations in medical locations.', result: 'same as IEC 60364-7-710' },
        { norm: 'NFPA 99 / NEC 517', rule: 'Essential electrical system in three branches (life safety, critical, equipment); restoration ≤ 10 s; isolated power systems in theatres where the risk assessment requires.', result: '10 s instead of 15 s' },
      ],
    },
    {
      type: 'regional',
      text: 'UPS battery life drops with heat: as a rough rule, it halves for every 10 °C above 25 °C. In a plant room at 35 °C, batteries designed for 5 years can fail after 2 to 3. The UPS/battery room must be air-conditioned, and that AC put on the essential tier. Also require a local maintenance contract: a UPS whose rectifier nobody in the country can repair stays on bypass for months.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'For the vital tier, an online double-conversion (VFI) UPS: no break on transfer to battery.',
        'Batteries are sized at the real discharge rate and at end of life, not from the kWh on the label.',
        'N+1 with static and maintenance bypass; dual supply of vital sockets where it is critical.',
        'On battery, the UPS limits short-circuit current to 2 or 3 I_n: B-curve, small-rated circuits.',
        'In the theatre, medical IT (transformer ≤ 10 kVA + IMD) avoids cutting life support on a first fault.',
        'Batteries hate heat: air-conditioned room, or lithium technology.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'How much battery energy would be needed for 30 minutes of autonomy instead of 15?',
      solution: ['E = 18 × 0.5 / 0.94 ≈ 9.6 kWh, double.', 'Battery cost and footprint double as well: autonomy is chosen according to the time actually needed before the generators take over.'],
    },
    {
      type: 'exercise',
      question: 'The insulation monitor alarm sounds in the middle of an operation. What should the team do?',
      solution: [
        'Nothing urgent: on a first fault, the installation stays safe and supplied. The team finishes the procedure.',
        'Then the technical department locates the fault (often a damaged device or cable) and repairs it before the next operation, since a second fault would cause a disconnection.',
      ],
    },
    {
      type: 'exercise',
      question: 'Behind a 10 kVA single-phase UPS (I_n ≈ 43 A, short-circuit current limited to 2 I_n), does a C10 properly protect a circuit on battery?',
      solution: [
        'I_{sc} ≈ 2 × 43 = 86 A; maximum magnetic threshold of a C10: 100 A > 86 A: no guaranteed instantaneous trip.',
        'A B10 (50 A maximum) is suitable. With the bypass available, the mains would supply the current and the C10 would trip, but you cannot count on the bypass during an outage.',
      ],
    },
  ],
};
