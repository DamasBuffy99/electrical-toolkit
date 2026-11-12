import { TopicContent } from '../../../types';

export const pvInverterFinanceContent: TopicContent = {
  title: 'Grid-tie or hybrid inverter: the economics',
  subtitle: 'Is a battery worth paying for? In France, now that surplus barely sells, each self-consumed kWh is worth 18 times a kWh sold. In West Africa the question is different: the diesel and outages avoided pay for the battery.',
  blocks: [
    {
      type: 'objectives',
      items: [
        'Build a simple financial balance: investment, annual savings, payback.',
        'Understand the role of the self-consumption rate.',
        'Compare grid-tie and hybrid with battery over 25 years (France case).',
        'Redo the reasoning for a site with load shedding, in FCFA.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '× 18', label: 'value of a self-consumed kWh vs a kWh sold (France)' },
        { value: '+ €13,100', label: 'for the hybrid over 25 years (France, 9 kWp)' },
        { value: '14.3 years', label: 'payback of PV without battery in France' },
        { value: '≈ 5 years', label: 'payback of a hybrid on a load-shedding site (FCFA)' },
      ],
    },

    { type: 'heading', text: '1 · The France case: assumptions' },
    {
      type: 'table',
      headers: ['Parameter', 'Value used', 'Remark'],
      rows: [
        ['PV power', '9 kWp', 'typical residential installation'],
        ['Annual production', '9,500 kWh', 'France, south-facing, ≈ 1,050 kWh/kWp'],
        ['Annual consumption', '8,000 kWh', 'all-electric household'],
        ['Self-consumption', '35 % without battery, 65 % with 10 kWh', 'to be validated by an hourly simulation of the real profile'],
        ['Price of purchased kWh', '€0.2001 incl. VAT', 'regulated Base tariff, August 2026'],
        ['kWh price increase', '+ 4 % per year', 'estimate, applied to purchased kWh only'],
        ['Surplus buy-back (≤ 9 kWp)', '€0.011/kWh, fixed for 20 years', 'order of 4 June 2026; investment bonus abolished'],
        ['Battery', 'replaced once, €3,500', 'around year 12'],
        ['Not included', 'inverter replacement, panel ageing, battery losses', 'results slightly optimistic'],
      ],
    },
    {
      type: 'table',
      headers: ['Investment', 'Grid-tie inverter only', 'Hybrid + 10 kWh battery'],
      rows: [
        ['Panels 9 kWp', '€4,500 – 6,000', '€4,500 – 6,000'],
        ['Inverter', '€1,500 – 2,200 (Sunny Tripower)', '€2,500 – 3,500 (STP Smart Energy)'],
        ['10 kWh battery', '—', '€4,000 – 6,000'],
        ['Cabling, protection, structure', '€1,000 – 1,500', '€1,200 – 1,800'],
        ['Labour and inspection (Consuel)', '€2,000 – 3,000', '€2,500 – 3,500'],
        ['Value used', '€10,500', '€17,000'],
      ],
    },

    { type: 'heading', text: '2 · The France case: results' },
    {
      type: 'calc',
      title: 'First-year savings',
      steps: [
        { label: 'PV only: 35 % self-consumed, the rest sold', formula: '3 325 × 0.2001 + 6 175 × 0.011 ≈ 665 + 68 = €733' },
        { label: 'Hybrid: 65 % self-consumed', formula: '6 175 × 0.2001 + 3 325 × 0.011 ≈ 1 236 + 37 = €1 271' },
        { label: 'Value of a self-consumed kWh vs a kWh sold', formula: '\\frac{0.2001}{0.011} ≈ 18' },
        { label: 'Simple paybacks', formula: '\\frac{10 500}{733} ≈ 14.3 yr   ;   \\frac{17 000}{1 271} ≈ 13.4 yr   ;   battery alone: \\frac{6 500}{538} ≈ 12.1 yr' },
      ],
      result: 'The battery pays back faster than the rest of the installation, provided 65 % is really self-consumed',
    },
    { type: 'image', source: require('../../../../../assets/solar/inverters/finance-25y.webp'), caption: 'Net benefit over 25 years (savings minus investment and battery replacement): the hybrid earns €11,400 to €13,100 more (figure from the guide, in French)', height: 260 },
    {
      type: 'note',
      text: 'The second scenario covers installations connected between 28 March 2025 and 4 June 2026, which keep a €0.04/kWh buy-back for 20 years: the gap remains €11,400. With panel ageing of 0.5 % per year, the gap in favour of the hybrid stays around €11,500 in the €0.011 scenario.',
    },
    {
      type: 'bullets',
      items: [
        'Since the buy-back tariff collapsed, an installation without battery takes more than 14 years to pay back.',
        'The result depends first on the self-consumption rate: that is what must be simulated before deciding.',
        'This study applies to France: with no buy-back and with load shedding, the battery is assessed differently.',
      ],
    },

    { type: 'heading', text: '3 · The West African case: a site with load shedding' },
    {
      type: 'text',
      text: 'Take a grid-connected house (or small shop) using 20 kWh a day, with 4 hours of load shedding every evening. During outages, a 5 kVA generator supplies 2 kW of loads. Solar surplus is neither bought back nor allowed to be exported: a grid-tie inverter must be curtailed.',
    },
    {
      type: 'table',
      headers: ['Parameter', 'Indicative value'],
      rows: [
        ['Grid kWh price', '≈ 110 FCFA'],
        ['Diesel', '≈ 700 FCFA/L; lightly loaded generator ≈ 0.45 L/kWh'],
        ['Energy supplied by the generator', '2 kW × 4 h = 8 kWh/day'],
        ['Solar production', '5 kWp × 4.4 kWh/kWp/day ≈ 22 kWh/day (≈ 1,600 kWh/kWp/yr)'],
        ['Direct daytime consumption', '≈ 9 kWh/day'],
      ],
    },
    {
      type: 'calc',
      title: 'What the current situation costs',
      steps: [
        { label: 'Diesel for the outages', formula: '8 × 0.45 × 700 ≈ 2 520 FCFA/day  →  ≈ 920 000 FCFA/yr' },
        { label: 'Generator maintenance and wear', formula: '≈ 200 000 FCFA/yr' },
      ],
      result: '≈ 1.12 million FCFA a year for the outages alone, on top of the grid bill',
    },
    {
      type: 'calc',
      title: 'Option A: 5 kW grid-tie inverter without battery',
      steps: [
        { label: 'Only daytime consumption is covered, the surplus is curtailed', formula: '9 × 110 × 365 ≈ 361 000 FCFA/yr' },
        { label: 'During load shedding the inverter stops (anti-islanding)', formula: 'diesel unchanged' },
        { label: 'Indicative investment (panels, inverter, installation)', formula: '≈ 3.3 million FCFA   →   payback ≈ 9 yr' },
      ],
      result: 'A modest saving, and no effect on outages',
    },
    {
      type: 'calc',
      title: 'Option B: 5 kW hybrid + 10 kWh lithium battery',
      steps: [
        { label: 'Daytime consumption + 1 kWh in the evening outside outages', formula: '(9 + 1) × 110 × 365 ≈ 401 000 FCFA/yr' },
        { label: 'The battery covers the outages 85 % of the year (the generator stays as backup on sunless days)', formula: '0.85 × 1 120 000 ≈ 952 000 FCFA/yr' },
        { label: 'Total saving', formula: '≈ 1.35 million FCFA/yr' },
        { label: 'Indicative investment: panels 1.8 M, hybrid 1.3 M, battery 3.0 M, installation 1.0 M', formula: '≈ 7.1 million FCFA   →   payback ≈ 5.3 yr' },
      ],
      result: 'Over 15 years, with one battery replacement (≈ 2 M FCFA): ≈ + 11 M FCFA for the hybrid, against ≈ + 2 M FCFA for the grid-tie inverter',
    },
    {
      type: 'decision',
      title: 'Grid-tie or hybrid on a load-shedding site',
      choice: '48 V “battery-first” hybrid with a lithium battery, the generator kept as backup and controlled if possible',
      reasons: [
        'The battery is paid for by the diesel and generator wear avoided, not by a buy-back tariff.',
        'A grid-tie inverter alone is useless during outages, precisely when the need is greatest.',
        'Comfort counts too: no more generator noise and fumes in the evening, no more appliances damaged by switchovers.',
      ],
      rejected: 'Grid-tie inverter alone: payback of about 9 years, no backup, and surplus lost for lack of authorised export.',
    },
    {
      type: 'regional',
      text: 'These figures are indicative: diesel price, grid tariffs, actual load-shedding duration and battery prices vary widely between countries and years. Before deciding, measure a week of consumption and outages (a simple meter and a notebook are enough), then have both options quoted by installers. Some countries grant customs exemptions on solar equipment: ask.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'Simple payback = investment ÷ annual saving; over 20 to 25 years, include the kWh price increase and battery replacement.',
        'France: surplus is worth almost nothing, self-consumption drives profitability; a 10 kWh battery earns ≈ €13,000 more over 25 years.',
        'West Africa: the battery is paid for by diesel and outages avoided; payback of about 5 years in our example.',
        'In every case, it is the real consumption (and outage) profile that must be simulated.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'France case: self-consumption with the battery only reaches 50 % instead of 65 %. What saving in the first year?',
      solution: ['Self-consumed: 0.50 × 9,500 = 4,750 kWh × 0.2001 ≈ €950; sold: 4,750 × 0.011 ≈ €52.', 'Total ≈ €1,002 instead of €1,271: payback rises to ≈ 17 years. Hence the importance of simulating the real profile.'],
    },
    {
      type: 'exercise',
      question: 'West African case: diesel rises to 850 FCFA/L. What becomes of option B’s annual saving?',
      solution: ['Diesel: 8 × 0.45 × 850 × 365 ≈ 1,117,000 FCFA; with maintenance: ≈ 1,317,000 FCFA; × 0.85 ≈ 1,119,000 FCFA.', 'Total ≈ 1,119,000 + 401,000 ≈ 1.52 M FCFA/yr: payback ≈ 4.7 years. The dearer the diesel, the more profitable the battery.'],
    },
  ],
};
