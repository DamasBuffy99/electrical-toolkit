import { TopicContent } from '../../types';

export const buildingBackupContent: TopicContent = {
  title: 'Backup: generator and transfer switch',
  subtitle: 'Fatou wants the lift and the water to work during outages. Should the whole building be backed up? Awa compares, sizes the generator and explains why the transfer switch must never get it wrong.',
  blocks: [
    { type: 'scene', text: 'Month 5 · Fatou Sow’s office' },
    { type: 'illustration', name: 'building-riser', props: { highlight: 'backup' }, caption: 'The generator and the transfer switch back up the common-services board' },
    {
      type: 'dialogue',
      speaker: 'Fatou Sow',
      role: 'client',
      text: 'My future tenants all ask me: “Is there a generator?”. Can we back up the whole building?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'We can, but look at the figures. The whole building is 95 kVA: it would need a generator of about 125 kVA, burning a lot of diesel to run air conditioners. The common services alone are about 22 kVA: a 40 kVA generator is enough. I suggest backing up what is vital for everyone (lift, water, common lighting, security) and preparing each flat for a small individual inverter.',
    },

    { type: 'heading', text: '1 · What the generator must supply' },
    {
      type: 'table',
      headers: ['Backed-up load', 'Power'],
      rows: [
        ['Lift (with drive)', '11 kW'],
        ['One booster pump', '4 kW'],
        ['Common-area lighting', '2 kW'],
        ['Gate, intercom, CCTV', '1 kW'],
        ['Service sockets (limited)', '1 kW'],
        ['Total', '19 kW, i.e. 19 / 0.85 ≈ 22.4 kVA'],
      ],
    },
    {
      type: 'text',
      text: 'A generator copes badly with motor inrush: its voltage collapses. Awa takes a 25% margin for starting (the lift drive helps a lot), then accounts for the heat: at 40 °C, the diesel engine delivers a little less than its catalogue rating.',
    },
    { type: 'formula', text: 'S_{generator} ≥ \\frac{22.4 × 1.25}{0.9} ≈ 31 kVA  →  standard 40 kVA generator' },
    {
      type: 'note',
      text: 'Oversizing a generator is not a good idea either: a diesel running for long periods below 30% load fouls up (“wet stacking”). At 22 kVA out of 40, it runs at about 55%: comfortable.',
    },
    { type: 'formula', text: 'Autonomy: 200 L tank, consumption ≈ 5 L/h at half load  →  ≈ 40 hours' },

    { type: 'heading', text: '2 · The automatic transfer switch' },
    {
      type: 'text',
      text: 'The automatic transfer switch (ATS) is a changeover that supplies the common-services board either from the network or from the generator, never from both. Its sequence is always the same:',
    },
    {
      type: 'bullets',
      items: [
        'The network disappears: the switch waits 2 to 5 seconds, so as not to react to a mere micro-outage.',
        'It sends the start command to the generator, which reaches its voltage and frequency in about ten seconds.',
        'It transfers the board to the generator: the lift and pumps restart.',
        'The network returns: the switch waits for it to be stable for a few minutes, transfers back, then lets the generator cool down off load before stopping it.',
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Fatou Sow',
      role: 'client',
      text: 'Why is this “never both” interlock so important?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'If the generator were connected to the network at the same time, it would send its voltage into the utility lines, which technicians believe are dead during a repair. It’s a deadly risk for them. So the transfer switch has a double interlock, mechanical and electrical: physically, both contacts cannot be closed together.',
    },
    { type: 'fiche', id: 'generator-ups-ats', why: 'Generators, transfer switches (ATS), UPS: principles and sizing.' },

    { type: 'heading', text: '3 · And the flats?' },
    {
      type: 'text',
      text: 'In each flat, Awa has a separate “priority” circuit wired in the board: lighting, fridge, internet box and one socket per room. Today it is supplied normally. The day a tenant installs a small inverter with batteries (or solar), only this circuit needs to be connected behind it, without touching the rest.',
    },
    {
      type: 'regional',
      text: 'In apartment blocks, the generator’s diesel is often the first source of disputes over service charges: an hour meter and a refuelling log avoid many arguments. Also plan a monthly 30-minute test under real load: a generator that never runs won’t start on the day of the outage.',
    },

    { type: 'heading', text: '4 · Acceptance, with the inspection body' },
    { type: 'scene', text: 'Month 14 · Acceptance tests' },
    {
      type: 'text',
      text: 'On test day everyone is there: Rachid Bamba and his electricians to operate, Marc Adjovi for supervision, Ndeye Faye for the inspection body, and Fatou. Rachid cuts the utility supply: within 12 seconds the generator has started and the transfer switch has transferred; the lift, stopped at the 3rd floor, moves again.',
    },
    {
      type: 'dialogue',
      speaker: 'Ndeye Faye (inspection body)',
      role: 'team',
      text: 'The transfer is compliant. I’m nevertheless issuing two reservations: the transfer switch has no label showing the two sources, and the generator-room door doesn’t open outwards as shown on the drawing. I’ll come back to check they are cleared.',
    },
    {
      type: 'dialogue',
      speaker: 'Rachid Bamba (site, Électra BTP)',
      role: 'team',
      text: 'The label will be done tomorrow. For the door, the carpenter got the direction wrong: we’ll refit it within the week.',
    },
    {
      type: 'text',
      text: 'Two weeks later, Ndeye Faye confirms the reservations are cleared. Marc signs the acceptance report, Didier hands over the as-built drawings, and Fatou can let her flats.',
    },

    { type: 'heading', text: 'Project 2 review' },
    {
      type: 'text',
      text: 'Les Palmiers took Awa to the scale of a multi-dwelling building: feasibility with the utility, diversity between dwellings, MV/LV substation, risers and metering, motors of the common services, short circuit and breaking capacity, backup by generator and transfer switch. Next: a plant, where motors are no longer the exception but the rule.',
    },
    {
      type: 'bullets',
      items: [
        'Back up first what is vital for everyone, not necessarily the whole building.',
        'Size a generator with a margin for motor starting and a derating for heat, without dropping below 30% load.',
        'The transfer switch never parallels the generator and the network: a double interlock is mandatory.',
        'A pre-wired priority circuit in each flat prepares for individual inverters.',
        'Acceptance brings together contractor, supervision and inspection body; the building is handed over once reservations are cleared.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'Fatou finally wants to back up the lighting and fridges of the 16 flats too, about 0.5 kW per flat. Is the 40 kVA generator enough?',
      solution: [
        'Addition: 16 × 0.5 = 8 kW, i.e. about 9.4 kVA (cos φ 0.85).',
        'Total: 22.4 + 9.4 ≈ 31.8 kVA; with 25% margin and derating: 31.8 × 1.25 / 0.9 ≈ 44 kVA.',
        'The 40 kVA unit becomes too tight: move up a size (for example 50 kVA), or shed the booster while the lift starts.',
      ],
    },
    {
      type: 'exercise',
      question: 'Why does the transfer switch wait several minutes before switching back to the network when it returns?',
      solution: [
        'After an outage, the network often returns unstably (several returns and cuts in quick succession).',
        'Switching back too fast would put the lift and pumps through a series of stops and restarts. We wait for the network to be stable before leaving the generator.',
      ],
    },
  ],
};
