import { TopicContent } from '../../../types';

export const abcRefrigerantsContent: TopicContent = {
  title: 'Refrigerants and oils',
  subtitle: 'Refrigerant families, ODP, GWP, TEWI, regulations, safety and compatible oils',
  blocks: [
    {
      type: 'text',
      text: 'A refrigerant is chosen for its thermodynamic qualities, but also for its impact on the ozone layer and the climate, its toxicity and its flammability. The choice of refrigerant then dictates the compressor oil and the handling precautions.',
    },
    { type: 'illustration', name: 'tech-ph', caption: 'Each refrigerant has its own pressure–enthalpy chart and its own pressures' },

    { type: 'heading', text: 'Refrigerant families' },
    {
      type: 'table',
      headers: ['Family', 'Examples', 'Strengths', 'Weaknesses'],
      rows: [
        ['Inorganic (700 series)', 'R717 ammonia, R744 CO₂, water', 'no effect on ozone and almost none on climate', 'NH₃ toxic and corrosive; CO₂ at very high pressures'],
        ['Hydrocarbons (600 series)', 'R290 propane, R600a isobutane', 'good refrigerants, low impact', 'flammable'],
        ['CFC (e.g. R12)', '—', '—', 'destroy ozone: banned'],
        ['HCFC (e.g. R22)', '—', 'long the standard for splits', 'destroy ozone: banned in Europe since 2015, being phased out elsewhere'],
        ['HFC', 'R410A, R407C, R134a, R404A, R32', 'no effect on ozone', 'strong greenhouse effect (high GWP): shrinking quotas'],
        ['HFO', 'R1234yf, R1234ze', 'very low GWP (~11 days lifetime in air)', 'mildly flammable, decomposition products to watch'],
      ],
    },
    {
      type: 'bullets',
      items: [
        '400 series: zeotropic blends with temperature glide → always charge in LIQUID phase.',
        '500 series: azeotropic blends, no glide, behave like a pure fluid.',
        'R410A (50 % R32 + 50 % R125): recent splits and heat pumps. R407C (R32/R125/R134a): R22 replacement, high glide. R134a: refrigeration, chilled water, car air conditioning. R404A / R507: low-temperature commercial refrigeration. R600a: domestic fridges.',
        'R717 (ammonia): industrial refrigeration for over a century, increasingly in chillers. R744 (CO₂): in cascades, non-toxic and non-flammable, but very high pressures.',
      ],
    },

    { type: 'heading', text: 'Ozone, greenhouse effect: ODP, GWP, TEWI' },
    {
      type: 'bullets',
      items: [
        'The ozone layer (20 to 50 km up) filters ultraviolet rays. Chlorinated refrigerants (CFC, HCFC) destroy it.',
        'The greenhouse effect keeps the Earth at +15 °C on average; fluorinated gases with high GWP amplify it.',
        'ODP (ozone depletion potential): reference R11 = 1.',
        'GWP (global warming potential): reference CO₂ = 1, over 100 years.',
        'TEWI: total impact of an installation over its lifetime, direct effect (leaks) + indirect effect (electricity used).',
      ],
    },
    { type: 'formula', text: 'TEWI = GWP × m × f × n  +  E × n × A   (kg CO₂ eq.)' },
    {
      type: 'text',
      text: 'm: charge (kg); f: annual leak rate; n: lifetime (years); E: consumption (kWh/yr); A: CO₂ emitted per kWh of the grid. A very efficient machine that leaks, or a tight but power-hungry one, has a poor TEWI.',
    },
    {
      type: 'warning',
      text: 'The book writes that ODP “only concerns fluids containing fluorine (CFC, HCFC)”. It is CHLORINE (and bromine) that destroys ozone. HFCs contain fluorine but no chlorine: their ODP is zero. Fluorine, on the other hand, is behind the high GWP.',
    },

    { type: 'heading', text: 'Regulations (European F-Gas example)' },
    {
      type: 'bullets',
      items: [
        '“Phase down”: gradual reduction (2015 → 2030) of the quantities of high-GWP HFCs placed on the market.',
        'Leak checks based on the charge in tonnes of CO₂ equivalent (charge × GWP) instead of kg: 5 to 50 t → every year (2 years with a detector); 50 to 500 t → every 6 months; above → every 3 months.',
        'Example: 5 t CO₂ eq. = 3.49 kg of R134a or 2.39 kg of R410A.',
        'Labelling of installations, logbook kept for 5 years (refrigerant, quantities added and recovered, checks), certified staff, compulsory recovery of refrigerants.',
      ],
    },
    { type: 'note', text: 'These rules are European. In African countries, the Montreal Protocol (phase-out of HCFCs such as R22) and the Kigali Amendment (HFC reduction) apply with their own timetables: check national regulations.' },

    { type: 'heading', text: 'Choosing a refrigerant' },
    {
      type: 'bullets',
      items: [
        'Thermodynamics: high volumetric cooling capacity, high critical temperature, low freezing point, compression ratio < 10, pressures suited to the equipment, miscibility with oil, stability.',
        'Environment: zero ODP, GWP as low as possible.',
        'Safety: non-flammable, non-toxic at low concentration. Ammonia requires gloves, mask and overalls, and threatens groundwater.',
      ],
    },

    { type: 'heading', text: 'Handling refrigerants safely' },
    {
      type: 'bullets',
      items: [
        'Goggles and gloves compulsory: a jet of liquid refrigerant freezes eyes and skin (rinse thoroughly with water).',
        'Risk of asphyxiation in confined spaces: refrigerants, heavier than air, displace oxygen.',
        'Never a flame on refrigerant: its decomposition produces very toxic gases; take care before any brazing. The circuit oil, for its part, is flammable.',
        'Cylinders: secured during transport, never thrown, never heated with a flame, never above 50 °C, filled to 80 % at most.',
      ],
    },

    { type: 'heading', text: 'Refrigeration oils' },
    {
      type: 'table',
      headers: ['Oil', 'Refrigerants', 'Note'],
      rows: [
        ['Mineral', 'CFC, HCFC (R22), ammonia', 'not miscible with HFCs: poor oil return'],
        ['Alkylbenzene (AB)', 'R22 and HCFC blends', 'stable, compatible with mineral oil'],
        ['Polyalphaolefin (PAO)', 'R22, ammonia in extreme conditions', '“synthetic mineral oil”'],
        ['Polyalkylene glycol (PAG)', 'R134a in car air conditioning', 'very hygroscopic'],
        ['Polyolester (POE)', 'HFCs in refrigeration and air conditioning', 'excellent, but moisture-hungry'],
      ],
    },
    {
      type: 'note',
      text: 'POE oil absorbs moisture from the air and can then break down (hydrolysis) into acids: never leave a can open, always fit an anti-acid drier. A good solvent, it loosens deposits and is also used to flush a circuit when converting to an HFC.',
    },

    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'A split contains 1.8 kg of R410A (GWP ≈ 2,088). What is its charge in tonnes of CO₂ equivalent? Is it subject to periodic leak checks under the European rule?',
      solution: ['1.8 × 2,088 ≈ 3,758 kg, i.e. 3.76 t CO₂ eq.', 'That is below the 5 t threshold: no compulsory periodic check under that rule (the 2.39 kg R410A threshold corresponds exactly to 5 t).'],
    },
    {
      type: 'exercise',
      question: 'Calculate the 15-year TEWI of an air conditioner: 3 kg of R410A (GWP 2,088), 5 % leakage per year, 4,000 kWh/yr, grid at 0.5 kg CO₂/kWh. Which effect dominates?',
      solution: ['Direct: 2,088 × 3 × 0.05 × 15 ≈ 4,700 kg CO₂.', 'Indirect: 4,000 × 15 × 0.5 = 30,000 kg CO₂.', 'TEWI ≈ 34.7 t CO₂: electricity dominates. Improving the COP matters more here than changing refrigerant (but limiting leaks remains compulsory).'],
    },
  ],
};
