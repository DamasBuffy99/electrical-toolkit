import { TopicContent } from '../../types';

export const buildingSubstationContent: TopicContent = {
  title: 'The substation and the generator room',
  subtitle: 'What transformer rating? What type? How do you size its room, and that of the future generator? Awa answers with safety, maintenance and Fatou’s budget in mind.',
  blocks: [
    { type: 'scene', text: 'Month 2 · Meeting with the architect and the developer' },
    { type: 'illustration', name: 'building-riser', props: { highlight: 'substation' }, caption: 'The MV/LV substation and the main LV board on the ground floor' },

    { type: 'heading', text: '1 · Choosing the transformer rating' },
    {
      type: 'text',
      text: 'The estimated demand is 95 kVA. Awa adds a reserve of about 25% for the future (air-conditioning the halls, EV chargers, a shop on the ground floor), then chooses the standard rating just above.',
    },
    { type: 'formula', text: '95 kVA × 1.25 ≈ 119 kVA  →  standard ratings: 100 · 160 · 250 · 400 · 630 kVA  →  160 kVA' },
    { type: 'formula', text: 'Loading = \\frac{95}{160} ≈ 59%' },
    {
      type: 'dialogue',
      speaker: 'Fatou Sow',
      role: 'client',
      text: 'Why not 100 kVA? It’s cheaper, and 95 is below it.',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'At 95% load the transformer would run hot during the evening peaks, in an already hot climate, and age quickly. The slightest addition would force a replacement, while a transformer lasts more than thirty years. A 160 kVA unit runs at about 60% of its rating, where its efficiency is good, and leaves you headroom.',
    },
    {
      type: 'table',
      headers: ['', 'Oil-filled transformer', 'Dry-type (cast resin) transformer'],
      rows: [
        ['Price', 'cheaper', 'more expensive'],
        ['Fire risk', 'flammable oil: retention pit, enclosed room', 'very low: suited to inside buildings'],
        ['Maintenance', 'monitor oil level and quality', 'dust removal, temperature checks'],
        ['Typical use', 'outdoor or isolated substation', 'apartment blocks, hospitals, shopping centres'],
      ],
    },
    {
      type: 'text',
      text: 'The room is on the ground floor, under dwellings: Awa recommends a dry-type transformer. The extra cost buys safety for 16 families; with oil, a retention pit and reinforced fire-rated walls would have been needed.',
    },

    { type: 'heading', text: '2 · What the substation contains' },
    {
      type: 'bullets',
      items: [
        'The MV switchgear: the utility’s incoming cable, and a “switch-fuse” panel protecting the transformer.',
        'The 20 kV / 400 V, 160 kVA transformer.',
        'The metering, according to the utility’s rules.',
        'The main LV board, right next to it: it feeds the risers and the common services.',
        'The substation earthing network: metal frames and the transformer neutral.',
      ],
    },
    { type: 'formula', text: 'MV side: I = \\frac{160,000}{√3 × 20,000} ≈ 4.6 A   ;   LV side: I = \\frac{160,000}{√3 × 400} ≈ 231 A' },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'On the medium-voltage side only 4.6 A flows: the street cable is thin. On the low-voltage side, 231 A: you need a 250 A main breaker and large cables. That’s the whole point of carrying energy at high voltage and transforming it as close as possible to the users.',
    },

    { type: 'heading', text: '3 · Sizing the transformer room' },
    {
      type: 'text',
      text: 'A room that is too small means a transformer that can neither be maintained nor replaced. Awa asks the architect for four things, based on the regulatory clearances and the manufacturer’s dimensions:',
    },
    {
      type: 'bullets',
      items: [
        'Safety clearances in front of and around the equipment, to work and move around.',
        'A door opening outwards, wide enough to remove the transformer, with permanent access for utility staff.',
        'Natural ventilation: low air inlet and high outlet on the facade. The transformer dissipates about 2 to 3 kW of losses at full load: without ventilation, the room becomes an oven.',
        'No water pipes above the substation, and a slightly raised floor against flooding.',
      ],
    },
    { type: 'fiche', id: 'transformer-generator', why: 'Clearances, transformer and generator room dimensions, manufacturer data sheets.' },

    { type: 'heading', text: '4 · Reserving the generator room' },
    {
      type: 'text',
      text: 'Fatou wants the lift and pumps to run during outages (we’ll size it at the last step). But the room is decided now, because a generator has demanding constraints:',
    },
    {
      type: 'table',
      headers: ['Constraint', 'Consequence for the room'],
      rows: [
        ['Radiator cooling air', 'large air inlet and outlet grilles, facing each other'],
        ['Exhaust gases', 'flue to the roof or away from the flats’ windows'],
        ['Noise and vibration', 'anti-vibration mounts, thick walls, an acoustic door if possible'],
        ['Diesel', 'day tank, retention pit, access for refuelling'],
        ['Link to the main board', 'room next to the substation to keep cables short'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Fatou Sow',
      role: 'client',
      text: 'Could we put the generator outside under a shelter, and keep the room for a shop?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'That’s possible with a soundproof canopied generator on a slab, away from the bedrooms. We then only keep space for the transfer switch in the plant room. I’ll note it as an option for the architect: you’ll decide with the quotes.',
    },
    {
      type: 'regional',
      text: 'Ambient heat and altitude reduce a generator’s available power (derating given by the manufacturer, often above 40 °C or 1,000 m). Canopied (soundproof) generators are very common in cities: they avoid a masonry room, but need a slab, protection against diesel theft and access for maintenance.',
    },

    { type: 'heading', text: '5 · Eight months later: approving the transformer' },
    { type: 'scene', text: 'Month 10 · Site meeting' },
    {
      type: 'dialogue',
      speaker: 'Clarisse Houndé (procurement, Électra BTP)',
      role: 'team',
      text: 'For the transformer, I have an oil-filled offer 30% cheaper than the dry type in the specification. Same rating, same voltage. I’m submitting it for approval.',
    },
    {
      type: 'dialogue',
      speaker: 'Marc Adjovi (supervision)',
      role: 'team',
      text: 'Same rating, but not the same risk: the room is under flats. The specification requires a dry-type unit precisely for that reason. I reject this option. Your second offer, however, a dry-type unit from another brand, is acceptable if its data sheet confirms 160 kVA, 20/0.4 kV, u_k = 4% and equivalent losses.',
    },
    {
      type: 'text',
      text: 'Clarisse sends back the data sheet of the second model. Awa checks the short-circuit voltage: a different u_k would change the short-circuit current calculated for the main board. The values match: Marc approves, and the contractor can order. Fatou saves 8% without giving anything up on safety.',
    },
    {
      type: 'note',
      text: 'That’s the purpose of the approval request: the contractor may propose equivalent equipment, often cheaper or more available, but supervision judges the equivalence, based on the design.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'Add a reserve (about 25%) and choose the standard rating above; aim for 50 to 75% loading.',
        'Dry-type transformer inside occupied buildings; oil-filled for outdoor or isolated substations.',
        'A few amps on the MV side, hundreds on the LV side: the main board sits next to the transformer.',
        'Transformer and generator rooms are reserved from the sketch stage: clearances, door, ventilation, exhaust.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'Calculate the rated LV current of a 250 kVA, 400 V transformer. Which main breaker do you propose?',
      solution: ['I = 250,000 / (√3 × 400) ≈ 361 A.', 'An adjustable 400 A moulded-case main breaker (set around 0.9 × 400 = 360 A).'],
    },
    {
      type: 'exercise',
      question: 'The 160 kVA transformer has 2.5 kW of losses at full load. Why not simply air-condition the room?',
      solution: [
        'An AC unit would use energy permanently to remove losses, and would fail one day: the transformer would overheat without warning.',
        'Natural ventilation (cool air low, warm air high) works without energy and without breakdowns. Only air-condition if it is impossible.',
      ],
    },
  ],
};
