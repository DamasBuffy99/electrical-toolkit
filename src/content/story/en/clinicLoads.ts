import { TopicContent } from '../../types';

export const clinicLoadsContent: TopicContent = {
  title: 'Ranking the loads: vital, essential, normal',
  subtitle: 'In a clinic, not all sockets are equal. Before choosing any generator or UPS, Awa ranks each piece of equipment by what an outage would cause.',
  blocks: [
    { type: 'scene', text: 'Month 1 · Espoir Clinic, director’s office' },
    {
      type: 'objectives',
      items: [
        'Classify the loads of a healthcare facility: vital, essential, normal.',
        'Draw up the load per tier.',
        'Turn this classification into separate boards.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '18 kW', label: 'vital tier (0 s)' },
        { value: '107 kW', label: 'essential tier (≤ 15 s)' },
        { value: '118 kVA', label: 'to back up' },
        { value: '400 kVA', label: 'transformer' },
      ],
    },
    {
      type: 'text',
      text: 'Dr Aïcha Bello is opening Espoir Clinic: 30 inpatient beds, two operating theatres, four intensive-care beds, a laboratory, radiology and a sterilisation unit. She once worked in a hospital where an outage in the middle of an operation left the team in the dark for long seconds. She still talks about it.',
    },
    { type: 'illustration', name: 'clinic-tiers', props: { highlight: 'all' }, caption: 'The clinic’s continuity levels: normal, essential, vital, safety' },
    {
      type: 'dialogue',
      speaker: 'Dr Aïcha Bello',
      role: 'client',
      text: 'I want nothing to stop, ever. Put in a huge generator and UPS units everywhere.',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'I understand, and it’s the right demand. But “everywhere” would cost a fortune in equipment and diesel, to back up the office AC and the washing machine too. I suggest we reason the way a doctor triages patients: for each piece of equipment, what happens if power disappears for one second? Ten seconds? An hour?',
    },

    { type: 'heading', text: '1 · The three continuity levels' },
    {
      type: 'table',
      headers: ['Level', 'Tolerated interruption', 'Examples', 'Backup source'],
      rows: [
        ['Vital', 'none (0 s)', 'theatre equipment, ICU ventilators and monitors, medical IT', 'UPS, itself backed by the generators'],
        ['Essential', 'a few seconds (≤ 15 s)', 'sterilisation, laboratory, vaccine fridges, bed lift, medical gases, corridor lighting, theatre air handling', 'generators via the transfer switch'],
        ['Normal', 'can wait for the network to return', 'comfort air conditioning, kitchen, laundry, office sockets, radiology', 'none: shed during outages'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Dr Aïcha Bello',
      role: 'client',
      text: 'Radiology as “normal”? And if a patient arrives during an outage?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Good objection. The X-ray unit draws a very high current for a fraction of a second: on a generator it would pull down the voltage of the whole essential level. I suggest a compromise: radiology stays on the network, and a manual changeover switch lets the technician transfer it to the generators in an emergency, once the other loads have stabilised.',
    },

    { type: 'heading', text: '2 · The balance by level' },
    {
      type: 'table',
      headers: ['Level', 'Installed power', 'Main items'],
      rows: [
        ['Vital', '18 kW', 'theatres 10 kW, ICU 6 kW, IT 2 kW'],
        ['Essential (excluding vital)', '107 kW', 'sterilisation 24, theatre and ICU AC 20, theatre AHU 15, bed lift 15, medical gases 11, lab 8, pumps 6, corridor lighting 5, fridges 3'],
        ['Normal', '≈ 200 kW', 'comfort AC 100, kitchen and laundry 40, radiology 30, sockets and lighting 30'],
        ['Total', '≈ 325 kW', ''],
      ],
    },
    { type: 'formula', text: 'Total demand ≈ 0.7 × 325 ≈ 230 kW  →  S ≈ \\frac{230}{0.85} ≈ 270 kVA  →  400 kVA transformer' },
    { type: 'formula', text: 'Vital + essential levels: 0.8 × (18 + 107) = 100 kW  →  S ≈ \\frac{100}{0.85} ≈ 118 kVA' },
    {
      type: 'text',
      text: 'The decisive figure is the second one: 118 kVA to back up, not 270. That is what will set the generator size at the next step.',
    },
    { type: 'fiche', id: 'load-estimation', why: 'Estimating by use and by load category.' },

    { type: 'heading', text: '3 · Separate boards per level' },
    {
      type: 'text',
      text: 'The ranking translates directly into the electrical architecture: each level has its own boards, identified by a colour. A vital socket is red, an essential socket orange, a normal socket white. Staff can see at a glance where to plug in a device that must never stop.',
    },
    {
      type: 'bullets',
      items: [
        'Normal main board: everything that can be shed.',
        'Backed-up (essential) main board: fed by the network or, via the transfer switch, by the generators.',
        'Vital boards: behind the UPS units, themselves fed by the backed-up main board.',
        'In each room and in the theatres: sockets of different colours according to their level.',
      ],
    },
    { type: 'fiche', id: 'panel-schedule', why: 'Organising circuits by board and by category.' },
    {
      type: 'regional',
      text: 'With frequent outages, a clinic’s generators may run several hours a day: diesel becomes a major cost. Clearly separating normal (shed) from essential (backed-up) is the best saving. Many facilities add solar with batteries on the essential level to reduce generator hours.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'Rank each piece of equipment by the consequence of an outage: vital (0 s), essential (≤ 15 s), normal (sheddable).',
        'The level determines the source: UPS, generators, or network only.',
        'Back up the vital and essential levels, not the whole building.',
        'Each level has its own boards and colour-coded sockets.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'Rank: an ICU syringe pump, an admin office air conditioner, a vaccine fridge, corridor lighting, a washing machine.',
      solution: [
        'Syringe pump: vital (it must not stop, even for a second).',
        'Vaccine fridge: essential (a few seconds without power don’t spoil the vaccines, a few hours do).',
        'Corridor lighting: essential.',
        'Office AC and washing machine: normal, shed during outages.',
      ],
    },
    {
      type: 'exercise',
      question: 'Why not put sterilisation (24 kW) on UPS, since it is important?',
      solution: [
        'An autoclave cycle tolerates a few seconds’ interruption: it can resume or be restarted. The essential level is enough.',
        'Putting it on UPS would double the UPS size and batteries for no gain. UPS is reserved for what tolerates no interruption at all.',
      ],
    },
  ],
};
