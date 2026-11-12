import { TopicContent } from '../../types';

export const clinicGeneratorContent: TopicContent = {
  title: 'Generator and automatic transfer switch',
  subtitle: 'The generators must take over the essential level in under 15 seconds, at every outage, for years. Awa sizes them, plans for the generator itself failing and explains the takeover sequence.',
  blocks: [
    { type: 'scene', text: 'Month 2 · Meeting with the director and the biomedical technician' },
    {
      type: 'objectives',
      items: [
        'Size a generator for a backed-up load.',
        'Justify N+1 redundancy in a healthcare facility.',
        'Describe the restoration sequence and the role of the transfer switch.',
        'Build the load schedule of a standby board.',
        'Check that a short circuit is still cleared when the genset is alone.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '2 × 200 kVA', label: 'gensets in N+1' },
        { value: '≈ 10 s', label: 'from blackout to transfer' },
        { value: '≈ 870 A', label: 'sustained short circuit of a genset' },
        { value: '400 A', label: 'short-time pickup of the theatre feeder' },
      ],
    },
    { type: 'illustration', name: 'clinic-tiers', props: { highlight: 'generator' }, caption: 'The generators take over the essential level in under 15 seconds' },
    {
      type: 'dialogue',
      speaker: 'Dr Aïcha Bello',
      role: 'client',
      text: 'So a 120 kVA generator is enough, since we have 118 kVA to back up?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'No, for two reasons. First, a generator must absorb motor starts (lift, medical air compressors) and supply the UPS units, which stress it more than an ordinary load; and it loses power with heat. Second, and above all: what happens if your only generator doesn’t start?',
    },

    { type: 'heading', text: '1 · The size of a generator' },
    { type: 'formula', text: 'S_{generator} ≥ \\frac{118 × 1.25}{0.9} ≈ 164 kVA  →  standard 200 kVA generator' },
    {
      type: 'text',
      text: 'The 1.25 factor covers motor starting and the non-linear load of the UPS units; the 0.9 accounts for derating at 40 °C. At 118 kVA out of 200, the generator runs at about 60% load: a healthy range for a diesel engine.',
    },
    { type: 'fiche', id: 'generator-ups-ats', why: 'Sizing generators, transfer switches and UPS.' },

    { type: 'heading', text: '2 · Redundancy: two generators instead of one' },
    {
      type: 'dialogue',
      speaker: 'Serge (biomedical technician)',
      role: 'team',
      text: 'In my old hospital, the generator failed to start one day: flat starter battery. We operated by headlamp.',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'That’s the most common failure. That’s why I propose two 200 kVA generators, each able to carry the whole essential level alone. It’s called “N+1” redundancy: you need one, you install two. They alternate every month; if the one due to start fails, the controller automatically starts the other.',
    },
    {
      type: 'table',
      headers: ['Solution', 'Advantage', 'Limitation'],
      rows: [
        ['1 × 200 kVA generator', 'cheaper', 'a generator failure = nothing essential left'],
        ['2 × 200 kVA generators (N+1)', 'one generator can fail or be under maintenance without risk', 'larger investment and room'],
      ],
    },
    { type: 'fiche', id: 'transformer-generator', why: 'Generator rooms: clearances, ventilation, exhaust.' },

    { type: 'heading', text: '3 · The takeover sequence, second by second' },
    {
      type: 'bullets',
      items: [
        '0 s: the network disappears. The vital level sees nothing: the UPS units carry on from their batteries.',
        '0 to 3 s: the controller confirms it is not a micro-outage, and will shed the whole normal level.',
        '3 s: start command to the duty generator.',
        '≈ 10 s: the generator reaches 400 V and 50 Hz; the transfer switch moves the backed-up main board onto the generator.',
        '10 to 30 s: the large motors (lift, medical air compressors, theatre AHU) restart one after the other, so as not to pull down the generator voltage.',
        'Network returns: the transfer switch waits a few minutes of stability, transfers back, then the generator cools down off load before stopping.',
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Dr Aïcha Bello',
      role: 'client',
      text: 'And during those ten seconds, the corridor lights go out?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'The corridor lighting, yes, for about ten seconds. But the emergency lighting units come on immediately from their own batteries, and in the theatre the surgical light is on UPS: it doesn’t even flicker. We’ll cover those two points in the next steps.',
    },
    {
      type: 'note',
      text: 'As at Les Palmiers, the transfer switch has a double mechanical and electrical interlock: never a generator in parallel with the public network, for the safety of the utility’s staff.',
    },
    {
      type: 'regional',
      text: 'A 200 kVA generator burns about 25 to 30 litres of diesel per hour at 60% load. With four hours of outage a day, that’s about 110 litres a day: plan a tank of several thousand litres, a delivery contract, and a buffer stock for periods of fuel shortage.',
    },

    { type: 'heading', text: '4 · The theatre standby board and the short circuit on genset' },
    {
      type: 'text',
      text: 'The standby main board feeds several floor boards. The theatre-floor board carries the essential equipment: theatre air handling, sterilisation, medical air and vacuum, the “red” sockets in patient rooms. The vital sockets are behind the UPS. Here is its load schedule.',
    },
    {
      type: 'panelSchedule',
      panel: {
        name: 'Essential DB Theatre suite',
        location: 'Service shaft, theatre level',
        voltage: '230/400 V · 3P+N+PE · TN-S',
        panelType: 'Form 3b cubicle, red labelling (standby)',
        mounting: 'Floor-standing',
        scRating: 'Icu 15 kA',
        main: '4P 125 A switch-disconnector',
        feeder: '5G35 mm² Cu, electronic MCCB 125 A, Ir 100 A',
        left: [
          { desc: 'Theatre air handling (AHU) 15 kW', kva: 17.6, cb: 'MCCB 40 A', poles: 3, wire: '5G10 mm²' },
          { desc: 'Sterilisation (autoclave) 24 kW', kva: 24, cb: 'C40 3P', poles: 3, wire: '5G10 mm²' },
          { desc: 'Theatre corridor lighting', kva: 1.2, cb: 'C10', wire: '1.5 mm²' },
          { desc: 'Red sockets rooms 1–6 (30 mA RCBO)', kva: 2.0, cb: 'C16 RCBO', wire: '2.5 mm²' },
          { desc: 'Red sockets rooms 7–12 (30 mA RCBO)', kva: 2.0, cb: 'C16 RCBO', wire: '2.5 mm²' },
          { desc: '', spare: true },
          { desc: '', spare: true },
          { desc: '', spare: true },
        ],
        right: [
          { desc: 'Medical air compressor 7.5 kW', kva: 10, cb: 'MPCB 13–18 A', poles: 3, wire: '4G4 mm²' },
          { desc: 'Medical vacuum pump 5.5 kW', kva: 7.4, cb: 'MPCB 9–14 A', poles: 3, wire: '4G2.5 mm²' },
          { desc: 'Pharmacy and vaccine fridges', kva: 0.8, cb: 'C16 RCBO', wire: '2.5 mm²' },
          { desc: 'Red sockets theatre corridor', kva: 1.5, cb: 'C16 RCBO', wire: '2.5 mm²' },
          { desc: 'Nurse call, access control', kva: 0.6, cb: 'C10', wire: '1.5 mm²' },
          { desc: '', spare: true },
          { desc: '', spare: true },
          { desc: '', spare: true },
        ],
        demandFactor: 0.75,
        spareMargin: 15,
      },
    },
    {
      type: 'calc',
      title: 'What the bottom of the schedule says',
      steps: [
        { label: 'Connected load, then diversity factor 0.75', formula: 'S_{conn} ≈ 67.1 kVA   →   S = 0.75 × 67.1 ≈ 50.3 kVA' },
        { label: 'With 15 % spare', formula: 'I = \\frac{50 300 × 1.15}{\\sqrt{3} × 400} ≈ 83.5 A' },
        { label: 'Feeder setting at the standby board, and cable', formula: 'I = 83.5 A ≤ I_r = 100 A ≤ I_Z(35 mm²) ≈ 130 A' },
      ],
      result: 'Feeder MCCB 125 A set at 100 A, 5G35 mm² cable; unbalance ≈ 3.6 %',
    },
    {
      type: 'dialogue',
      speaker: 'Marc Adjovi (supervision)',
      role: 'team',
      text: 'Your discrimination study uses the transformer’s 14 kA. And when the genset is supplying, what is the short circuit?',
    },
    {
      type: 'calc',
      title: 'Short circuit on the theatre feeder, genset alone',
      steps: [
        { label: 'Rated current of a 200 kVA genset', formula: 'I_n = \\frac{200 000}{\\sqrt{3} × 400} ≈ 289 A' },
        { label: 'First milliseconds (subtransient reactance X_d″ ≈ 12 %)', formula: 'I_{sc}″ ≈ \\frac{289}{0.12} ≈ 2.4 kA  (decays within tens of ms)' },
        { label: 'Sustained current, alternator with boosted excitation (AREP or PMG)', formula: 'I_{sc,sustained} ≈ 3 × I_n ≈ 870 A for 10 s' },
        { label: 'Thermal-magnetic MCCB 125 A: fixed magnetic element', formula: 'I_m = 10 × 125 = 1 250 A > 870 A  ✗' },
        { label: 'Electronic MCCB: short time set low', formula: 'I_{sd} = 4 × I_r = 400 A < 870 A ✓   ;   t_{sd} = 0.1 s' },
      ],
      result: 'Electronic trip unit with I_{sd} = 400 A: the fault is cleared in 0.1 s even on the genset',
    },
    {
      type: 'decision',
      title: 'Protection of the standby feeders',
      choice: 'Electronic trip units with adjustable short time on every standby-board feeder, alternators with boosted excitation',
      reasons: [
        'On the genset, the short-circuit current is 15 times lower than on the transformer: a magnetic element set for the mains no longer sees it.',
        'The 400 A short time stays above the magnetic thresholds of small circuits (C16: 160 A at most): discrimination is kept.',
        'Boosted excitation holds about 3 I_n for 10 s; without it, the genset voltage collapses and nothing trips.',
      ],
      rejected: 'Classic thermal-magnetic MCCBs: fine on the mains, but a short circuit on the genset would only be cleared by the thermal element, after several seconds, with a fire risk.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'Generator ≥ backed-up load × 1.25 (starting, UPS) ÷ thermal derating; aim for 50 to 75% load.',
        'In a healthcare facility, N+1 redundancy: losing one generator must cut nothing.',
        'Sequence: shed the normal level, start, transfer in ≈ 10 s, staggered restart of motors.',
        'The UPS covers the 10 seconds of generator start for the vital level.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'Why are motors restarted one after another after the transfer, instead of all at once?',
      solution: [
        'Each motor draws several times its rated current when starting. On a generator, much weaker in short-circuit terms than a transformer, simultaneous inrushes would pull the voltage down.',
        'A dip on the essential level could make other equipment drop out, or even stall the generator. Starts are staggered by a few seconds.',
      ],
    },
    {
      type: 'exercise',
      question: 'The clinic adds a second 24 kW steriliser on the essential level. Are the 200 kVA generators still enough?',
      solution: [
        'Essential + vital: 0.8 × (125 + 24) ≈ 119 kW, i.e. ≈ 140 kVA.',
        'Generator needed: 140 × 1.25 / 0.9 ≈ 195 kVA: the 200 kVA units are only just enough, with no margin for the future.',
        'Plan ahead: schedule the two sterilisers so they don’t heat at the same time, or plan bigger generators at the next extension.',
      ],
    },
  ],
};
