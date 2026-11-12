import { TopicContent } from '../../types';

export const buildingFeasibilityContent: TopicContent = {
  title: 'A building is another scale',
  subtitle: 'Sixteen flats, a lift, pumps, a car park. Even before the detailed drawings, Fatou Sow needs to know whether the network can supply her, and what it will cost.',
  blocks: [
    { type: 'scene', text: 'Month 1 · Office of Fatou Sow, developer' },
    {
      type: 'objectives',
      items: [
        'Estimate a building’s power before the detailed drawings.',
        'Apply diversity between flats.',
        'Ask the utility about the connection.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '16 × 9 kVA', label: 'flats' },
        { value: '76 kVA', label: 'flats after diversity' },
        { value: '19 kVA', label: 'common services' },
        { value: '95 kVA', label: 'total demand' },
      ],
    },
    {
      type: 'text',
      text: 'Fatou Sow has bought a plot to build Les Palmiers residence: a ground floor with a car park and plant rooms, then four floors of four flats (two-bedroom flats of about 90 m²), a lift and a water tank with a booster set. She has seen the Mensah villa and wants the same rigour, but above all she has a question about money.',
    },
    { type: 'illustration', name: 'building-riser', props: { highlight: 'all' }, caption: 'Les Palmiers residence: 5 storeys, 16 flats, plant rooms on the ground floor' },
    {
      type: 'dialogue',
      speaker: 'Fatou Sow',
      role: 'client',
      text: 'My budget is tight. For the electrics I thought I’d do as for a house: one meter per flat and that’s it. Why did you ask for this meeting so early?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Because at this size the first question isn’t technical, it’s administrative: can the utility supply enough power from its existing network? If the answer is no, a substation must be built, and a room reserved on the ground floor right now. If we find out after the building permit, we lose months.',
    },

    { type: 'heading', text: '1 · Estimating quickly, before the detailed drawings' },
    {
      type: 'text',
      text: 'Awa doesn’t yet have each flat’s appliance list. She starts from a “typical flat” and applies the same method as for the villa, then multiplies, with one crucial nuance.',
    },
    {
      type: 'table',
      headers: ['Use in a two-bedroom flat', 'Installed', 'Factor', 'Retained'],
      rows: [
        ['Lighting', '0.3 kW', '1', '0.30 kW'],
        ['Sockets', '2.4 kW', '0.4', '0.96 kW'],
        ['Oven', '2.5 kW', '0.5', '1.25 kW'],
        ['Washing machine', '2.0 kW', '0.5', '1.00 kW'],
        ['Water heater', '1.5 kW', '1', '1.50 kW'],
        ['3 air conditioners', '3.0 kW', '0.75', '2.25 kW'],
        ['Total', '11.7 kW', '', '7.26 kW ≈ 8.1 kVA → 9 kVA subscription'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Fatou Sow',
      role: 'client',
      text: 'So 16 flats × 9 kVA, that’s 144 kVA?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'No, and that’s the good news. Sixteen families don’t all switch on their oven and AC at the same minute. The more dwellings there are, the more their peaks “dilute”. We apply a diversity factor between dwellings: for 15 to 19 dwellings we use about 0.53. Your 16 flats weigh like 8.5 flats at full power.',
    },
    { type: 'formula', text: 'Flats: 16 × 9 kVA × 0.53 ≈ 76 kVA' },
    {
      type: 'table',
      headers: ['Number of dwellings', 'Diversity factor'],
      rows: [
        ['2 to 4', '1'],
        ['5 to 9', '0.78'],
        ['10 to 14', '0.63'],
        ['15 to 19', '0.53'],
        ['20 to 24', '0.49'],
        ['25 to 29', '0.46'],
        ['50 and more', '0.40'],
      ],
    },

    { type: 'heading', text: '2 · The common services' },
    {
      type: 'table',
      headers: ['Common service', 'Power', 'Remark'],
      rows: [
        ['8-person lift', '≈ 13 kVA', '11 kW motor with a variable-speed drive'],
        ['Booster set', '≈ 5.4 kVA', '2 pumps of 4 kW, only one runs, the other is standby'],
        ['Lighting of halls, stairs, car park', '2 kVA', 'LED, timers and detectors'],
        ['Gate, intercom, CCTV', '1 kVA', ''],
        ['Service sockets (cleaning, maintenance)', '2 kVA', ''],
        ['Total, factor 0.8', '23.4 × 0.8 ≈ 19 kVA', ''],
      ],
    },
    { type: 'formula', text: 'S_{total} ≈ 76 + 19 = 95 kVA' },
    { type: 'fiche', id: 'demand-diversity', why: 'Demand and diversity factors, and how they cascade through a building.' },
    { type: 'fiche', id: 'load-estimation', why: 'Overall estimation methods (VA/m², per dwelling, per use).' },

    { type: 'heading', text: '3 · The utility’s answer' },
    { type: 'scene', text: 'Month 2 · Utility office' },
    {
      type: 'text',
      text: 'Awa files a power request for 95 kVA, with a reserve for the future. Three weeks later the answer arrives: the neighbourhood transformer is already nearly saturated. For such a load, the residence must have its own substation, supplied by the medium-voltage (MV) network running along the street.',
    },
    {
      type: 'dialogue',
      speaker: 'Fatou Sow',
      role: 'client',
      text: 'A transformer! Is that a disaster for my budget?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'It’s a significant but predictable investment, and it has advantages: you buy energy at the medium-voltage tariff, often cheaper per kWh for the common services; and the residence no longer depends on an overloaded neighbourhood substation, so fewer voltage dips for your tenants. The key thing is that we know now: I’m asking the architect to reserve a 4 m × 3 m room on the ground floor, on the facade, accessible from the street.',
    },
    {
      type: 'note',
      text: 'This is a common case: above a certain power level (the threshold depends on the utility and the state of its network, often around 100 kVA), a building is supplied at medium voltage with its own substation. That is exactly why the power estimate is done at the very start of the project.',
    },
    {
      type: 'regional',
      text: 'MV distribution networks are often 15 or 20 kV (sometimes 33 kV in rural areas). The utility sets the rules for private substations: switchgear model, metering location, permanent access for its staff. MV study and connection lead times are often counted in months: the request goes out together with the building permit.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'At building scale, the first question is feasibility with the utility.',
        'Estimate a typical dwelling, then apply a diversity factor between dwellings (0.53 for 15 to 19).',
        'Common services (lift, pumps, lighting) are added with their own factor.',
        'Above a threshold set by the utility, an MV/LV substation is needed: reserve the room from the sketch stage.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'Fatou is considering a 5th floor (20 flats in total). Recalculate the power of the flats.',
      solution: [
        'For 20 dwellings, the factor drops to 0.49.',
        '20 × 9 × 0.49 ≈ 88 kVA, against 76 kVA for 16 flats.',
        'Four more flats (+25%) add only 12 kVA (+16%): diversity increases with numbers.',
      ],
    },
    {
      type: 'exercise',
      question: 'Why not apply the 0.53 factor to the common services?',
      solution: [
        'The 0.53 factor describes the behaviour of 16 independent families. Common services are not dwellings.',
        'The lift and the booster may run during the evening peak, when everyone comes home: they get their own, higher factor (0.8 here).',
      ],
    },
  ],
};
