import { TopicContent } from '../../types';

export const clinicUpsContent: TopicContent = {
  title: 'UPS and the operating theatre',
  subtitle: 'In the theatre and ICU, even ten seconds of darkness is unacceptable, and a simple insulation fault must not cut off a ventilator. Awa explains the UPS, then a special earthing system: the medical IT system.',
  blocks: [
    { type: 'scene', text: 'Month 3 · Visit to the future operating theatre' },
    { type: 'illustration', name: 'clinic-tiers', props: { highlight: 'ups' }, caption: 'The UPS supplies the vital level with no interruption at all' },
    {
      type: 'dialogue',
      speaker: 'Dr Aïcha Bello',
      role: 'client',
      text: 'Ten seconds for the generator to take over is too long for an intubated patient. What do we do?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'We use an “online” UPS. It permanently converts the network’s AC into DC, which charges its batteries, then rebuilds a clean AC for the equipment. When the network disappears nothing changes for the equipment: the batteries were already in the circuit. There is no changeover, so no interruption.',
    },

    { type: 'heading', text: '1 · Sizing the UPS' },
    { type: 'formula', text: 'Vital level: 18 kW  →  S = \\frac{18}{0.9} = 20 kVA' },
    {
      type: 'text',
      text: 'Awa applies the same logic as for the generators: two 20 kVA UPS units in parallel, each able to carry the whole vital level alone (N+1). One can be faulty or under maintenance without the theatre noticing. Each UPS also has a bypass: in case of an internal fault, it lets current through from the backed-up main board rather than cutting off.',
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
      text: 'The batteries only need to cover the generator start, normally ten seconds. I still plan 15 minutes: if the first generator fails to start and the second hesitates too, the team has time to finish a procedure and switch to degraded mode. An hour would cost a lot in batteries for a case that doesn’t happen.',
    },
    { type: 'formula', text: 'Energy for 15 min: E = \\frac{18 kW × 0.25 h}{0.94} ≈ 4.8 kWh  (UPS efficiency ≈ 94%)' },
    { type: 'fiche', id: 'generator-ups-ats', why: 'UPS types (off-line, line-interactive, online) and sizing.' },

    { type: 'heading', text: '2 · Why no 30 mA RCD in the theatre?' },
    {
      type: 'dialogue',
      speaker: 'Dr Aïcha Bello',
      role: 'client',
      text: 'In houses, 30 mA RCDs are fitted everywhere for safety. And here?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Precisely not for life-support equipment in the theatre. Imagine a table lighting cable gets damaged during the operation: the RCD would cut the circuit… and the ventilator plugged into it. For these circuits we use another earthing system, the medical IT system, which keeps the installation running at the first fault and only raises an alarm.',
    },
    {
      type: 'bullets',
      items: [
        'Each operating theatre is supplied through a 230 V / 230 V isolating transformer: its secondary is not connected to earth.',
        'At the first insulation fault, no dangerous current flows, because the circuit has no return path through earth: the operation can continue.',
        'An insulation monitoring device (IMD) watches the insulation resistance and triggers an audible and visual alarm in the theatre as soon as it falls.',
        'The electrician finds and repairs the fault after the procedure: a second fault, however, would cause a trip.',
        'All metal parts in the room are bonded together (equipotential bonding) so that no voltage appears between two objects being touched.',
      ],
    },
    {
      type: 'note',
      text: 'The villa’s TT system and the medical IT system pursue the same goal, protecting people, with two opposite logics. In TT, you cut as soon as there is a leak. In IT, you guarantee that a first fault isn’t dangerous, and you don’t cut, because in the theatre the interruption itself is the danger.',
    },
    { type: 'fiche', id: 'electrical-safety', why: 'TT, TN and IT earthing systems compared.' },
    { type: 'fiche', id: 'earthing', why: 'Earthing and equipotential bonding.' },
    {
      type: 'regional',
      text: 'UPS battery life drops with heat: as a rough rule it halves for every 10 °C above 25 °C. In a plant room at 35 °C, batteries designed for 5 years may fail after 2 to 3. The UPS-battery room must be air-conditioned, and that AC placed on the essential level.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'An online UPS supplies permanently through its batteries: no interruption when switching to battery.',
        'UPS units in N+1 with bypass; autonomy sized to cover generator start, with a margin.',
        'In the theatre, the medical IT system (isolating transformer + insulation monitor) avoids cutting life-support equipment at the first fault.',
        'Batteries dislike heat: air-conditioned room.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'How much battery energy would 30 minutes of autonomy need instead of 15?',
      solution: ['E = 18 × 0.5 / 0.94 ≈ 9.6 kWh, double.', 'Battery cost and space double too: autonomy is chosen according to the time really needed before the generators take over.'],
    },
    {
      type: 'exercise',
      question: 'The insulation monitor alarm sounds in the middle of an operation. What should the team do?',
      solution: [
        'Nothing urgent: at the first fault the installation remains safe and powered. The team finishes the procedure.',
        'Afterwards, the technical department finds the fault (often a damaged device or cable) and repairs it before the next operation, because a second fault would cause a trip.',
      ],
    },
  ],
};
