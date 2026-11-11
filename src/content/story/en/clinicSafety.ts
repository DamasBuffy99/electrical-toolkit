import { TopicContent } from '../../types';

export const clinicSafetyContent: TopicContent = {
  title: 'Safety lighting and periodic tests',
  subtitle: 'If everything goes dark, people must still be able to evacuate. And a backup that is never tested ends up failing on the day it is needed. Last step: safety, then the life of the installation.',
  blocks: [
    { type: 'scene', text: 'Month 5 · Before the clinic opens' },
    { type: 'illustration', name: 'clinic-tiers', props: { highlight: 'safety' }, caption: 'Self-contained units have their own battery: they depend on no other source' },

    { type: 'heading', text: '1 · Safety lighting' },
    {
      type: 'text',
      text: 'Safety lighting is independent of everything else: each self-contained emergency unit contains its own battery and lights up instantly when its supply circuit disappears. Even if the generators and UPS units failed, it would stay on for at least an hour.',
    },
    {
      type: 'table',
      headers: ['Type', 'Role', 'Where'],
      rows: [
        ['Escape route signs', 'show the way and the exits (green pictogram)', 'above exit doors, at every change of direction'],
        ['Anti-panic (open area) lighting', 'avoid total darkness in large rooms', 'halls, waiting rooms'],
        ['High-risk task lighting', 'allow a dangerous task to be finished', 'theatre, ICU, generator room, main board'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Dr Aïcha Bello',
      role: 'client',
      text: 'Why batteries in every unit, when we already have generators and UPS?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Because safety lighting must work in the worst case: a fire in the plant room destroying the main board, the generators and the UPS units at the same time. A small battery in each unit depends on nothing else. It’s the last safety net.',
    },
    { type: 'fiche', id: 'lighting', why: 'Lighting design, including safety lighting.' },

    { type: 'heading', text: '2 · The test schedule' },
    {
      type: 'text',
      text: 'Awa gives the clinic a safety logbook and a test schedule. She insists: these tests are part of the installation, just like the cables.',
    },
    {
      type: 'table',
      headers: ['Frequency', 'Test', 'Why'],
      rows: [
        ['Every week', 'off-load start of the generators, visual check (levels, leaks, starter batteries)', 'spot a weak battery or a leak early'],
        ['Every month', 'simulated network failure: real transfer, generators on load for at least 30 minutes', 'check the whole chain: detection, start, transfer switch, load shedding, reloading'],
        ['Every month', 'functional test of the emergency units (test button or remote)', 'every unit must light up'],
        ['Every year', 'full autonomy test of the emergency units, discharge test of the UPS batteries', 'batteries age without warning'],
        ['Every year', 'infrared thermography of the boards, check of RCDs and insulation monitors', 'a loose connection heats up before it fails'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Serge (biomedical technician)',
      role: 'team',
      text: 'A simulated outage every month, with patients? Isn’t that risky?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'The real risk is discovering a failure during a real outage at 3 a.m. We schedule the test at a quiet time, warn the teams, keep the vital level on UPS, and stop the test at the slightest problem. It’s the only way to be sure everything will work on the day.',
    },
    { type: 'fiche', id: 'generator-ups-ats', why: 'Maintenance and testing of generators, transfer switches and UPS.' },

    { type: 'heading', text: '3 · The inspection body’s visit before opening' },
    { type: 'scene', text: 'Month 6 · Safety visit' },
    {
      type: 'text',
      text: 'Before receiving its first patients, the clinic needs a favourable opinion from the inspection body. Ndeye Faye, the same inspector as for Les Palmiers, spends a whole day on site, with Marc Adjovi for supervision and Rachid Bamba for the contractor Électra BTP.',
    },
    {
      type: 'bullets',
      items: [
        'Real network failure: load shedding, one generator starts, transfer in 11 seconds; the second generator does start when the first one’s failure is simulated.',
        'Operating theatre: the insulation monitor alarm is triggered by a simulated fault, without any interruption of supply.',
        'Safety lighting: every unit lights up; autonomy is measured on a sample.',
        'Document check: up-to-date diagrams, safety logbook opened, generator maintenance contract signed.',
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Ndeye Faye (inspection body)',
      role: 'team',
      text: 'Just one reservation: two safety lighting units in the ICU corridor are hidden by a notice board. Move the board, and I can give a favourable opinion.',
    },
    {
      type: 'text',
      text: 'The next day the board is moved. Ndeye Faye’s report arrives the following week: Espoir Clinic can open.',
    },
    {
      type: 'regional',
      text: 'A maintenance contract with the generator supplier (oil changes, filters, starter batteries, diesel analysis) and a stock of critical spare parts on site make all the difference, especially when the supplier is several hours’ drive away. Record every test and every intervention in the logbook: it is also what health inspectors will ask for.',
    },

    { type: 'heading', text: 'Journey review' },
    {
      type: 'text',
      text: 'With Espoir Clinic, Awa has completed four projects of increasing difficulty. The thread is always the same: understand the need, estimate the power, organise the distribution, protect people and equipment, size the cables, plan the backup, then check and maintain. What changes from one project to the next is the level of demand.',
    },
    {
      type: 'table',
      headers: ['Project', 'What it added'],
      rows: [
        ['1 · Mensah villa', 'the basics: power balance, circuits, board, RCDs, TT earthing, cables, voltage drop, acceptance'],
        ['2 · Les Palmiers', 'multi-dwelling: full team (supervision, procurement, shop drawings, inspection body), diversity, MV/LV substation, risers, short circuit, generator and transfer switch'],
        ['3 · Tropica plant', 'motors: starting, protection, cable derating, selectivity, power factor'],
        ['4 · Espoir Clinic', 'continuity: load levels, N+1 redundancy, UPS, medical IT, safety, testing'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'One last piece of advice, valid for all four projects: always explain the why of your choices to the client. A client who understands why the pump cable is 4 mm² won’t let anyone replace it with 2.5 mm².',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'Safety lighting is self-contained (a battery in each unit) and independent of the other backups.',
        'A backup that isn’t tested isn’t a backup: weekly tests, monthly on-load tests, thorough annual tests.',
        'Everything is recorded in a safety logbook.',
        'The job comes down to a constant method, applied with a demand that grows with the stakes.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'During the monthly test, generator no. 1 starts but the transfer switch doesn’t transfer. What do we learn, and why is it good news?',
      solution: [
        'The backup chain has a faulty link: the transfer switch (control, coil, generator voltage sensing…).',
        'It’s good news to find out during a scheduled test, with the network available and the teams warned, rather than during a real outage at night. Repair, then repeat the test.',
      ],
    },
    {
      type: 'exercise',
      question: 'For each of the four projects, name the main protection of people and explain why it differs.',
      solution: [
        'Villa and residence: TT system with 30 mA RCDs, cutting at the slightest leak.',
        'Plant: the same principles, plus local isolators to lock out machines during maintenance.',
        'Clinic: in the theatre, medical IT with an insulation monitor, because cutting off life-support equipment would be more dangerous than the first fault itself.',
      ],
    },
  ],
};
