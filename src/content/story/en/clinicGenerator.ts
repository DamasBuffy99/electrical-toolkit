import { TopicContent } from '../../types';

export const clinicGeneratorContent: TopicContent = {
  title: 'Generator and automatic transfer switch',
  subtitle: 'The generators must take over the essential level in under 15 seconds, at every outage, for years. Awa sizes them, plans for the generator itself failing and explains the takeover sequence.',
  blocks: [
    { type: 'scene', text: 'Month 2 · Meeting with the director and the biomedical technician' },
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
