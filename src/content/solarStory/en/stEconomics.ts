import { TopicContent } from '../../types';

export const stEconomicsContent: TopicContent = {
  title: 'Production, profitability and monitoring',
  subtitle: 'Ibrahim Traoré won’t invest 50 million FCFA to please his engineer. Fanta quantifies production, the energy actually self-consumed, the payback time and the cost of the solar kWh, then commissions the plant and organises its monitoring.',
  blocks: [
    { type: 'scene', text: 'Month 4 · Ibrahim Traoré’s office, then commissioning on the roof with Yao Kouamé' },
    {
      type: 'objectives',
      items: [
        'Estimate annual production and the share actually self-consumed.',
        'Calculate the payback time and the levelised cost of the solar kWh.',
        'Carry out the commissioning tests of a PV array.',
        'Monitor the plant with the performance ratio, corrected for curtailment.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '≈ 126 MWh/yr', label: 'self-consumed, 13 % of the plant' },
        { value: '≈ 12.7 M FCFA/yr', label: 'net savings' },
        { value: '≈ 4 years', label: 'simple payback' },
        { value: '≈ 45 FCFA/kWh', label: 'solar kWh cost, against 100 from the grid' },
      ],
    },

    { type: 'heading', text: '1 · How many kWh, and which ones count?' },
    {
      type: 'calc',
      title: 'Production and self-consumption',
      steps: [
        { label: 'Coastal resource: 5.1 equivalent sun hours in the module plane, PR 0.75', formula: '5.1 × 0.75 × 365 ≈ 1,400 kWh/kWp/yr' },
        { label: 'Possible production', formula: '99 × 1,400 ≈ 139 MWh/yr' },
        { label: 'Zero-export curtailment (step 1)', formula: '− 12 MWh/yr' },
        { label: 'Self-consumed energy, against the plant’s ≈ 956 MWh/yr (300 production days + idle days)', formula: '139 − 12 ≈ 126 MWh/yr  →  \\frac{126}{956} ≈ 13 % of consumption' },
      ],
      result: '126 MWh a year replace kWh bought from the grid',
    },
    {
      type: 'note',
      text: 'The plant does not lower the contracted demand: on a rainy day at 10 am, the factory still draws its 200 kW from the grid. Only the “energy” part of the bill falls. This is the most frequent mistake of over-optimistic sales studies.',
    },

    { type: 'heading', text: '2 · Profitability' },
    {
      type: 'table',
      headers: ['Item', 'Amount (M FCFA)', 'Share'],
      rows: [
        ['Modules (99 kWp)', '18', '36 %'],
        ['Inverters', '6', '12 %'],
        ['Structure, cables, cable trays', '9', '18 %'],
        ['Controller, protection, AC board', '4', '8 %'],
        ['Design, structural check, installation, commissioning', '13', '26 %'],
        ['Total (≈ 505 FCFA/Wp)', '50', '100 %'],
      ],
    },
    {
      type: 'calc',
      title: 'Savings and payback',
      steps: [
        { label: 'Energy no longer bought, average energy tariff 100 FCFA/kWh', formula: '126,400 × 100 ≈ 12.6 M FCFA/yr' },
        { label: 'During outages (≈ 150 h/yr), the PV kWh replaces diesel at ≈ 175 FCFA', formula: '7.5 MWh × (175 − 100) ≈ + 0.6 M FCFA/yr' },
        { label: 'Maintenance, cleaning, supervision', formula: '− 0.5 M FCFA/yr' },
        { label: 'Simple payback', formula: '\\frac{50}{12.6 + 0.6 − 0.5} ≈ \\frac{50}{12.7} ≈ 3.9 years' },
      ],
      result: 'About 4 years for a plant guaranteed for 25 years',
    },
    {
      type: 'calc',
      title: 'Levelised cost of the solar kWh (8 %, 25 years)',
      steps: [
        { label: 'Annuity of the investment (factor 0.0937)', formula: '50 × 0.0937 ≈ 4.7 M FCFA/yr' },
        { label: 'Maintenance + provision to replace the inverters around year 12', formula: '0.5 + \\frac{5}{25} = 0.7 M FCFA/yr' },
        { label: 'Average production with 0.5 %/yr degradation', formula: '126 × 0.94 ≈ 119 MWh/yr' },
        { label: 'Cost per kWh', formula: '\\frac{5.4 M}{119,000} ≈ 45 FCFA/kWh' },
      ],
      result: 'The solar kWh costs less than half the grid kWh, and its price is fixed for 25 years',
    },
    {
      type: 'dialogue',
      speaker: 'Ibrahim Traoré',
      role: 'client',
      text: 'Four years is less than my new filler. And over 25 years?',
    },
    {
      type: 'dialogue',
      speaker: 'Fanta Coulibaly',
      role: 'engineer',
      text: 'About 240 million FCFA net, without even assuming a tariff increase. If the kWh price rises 3 % a year, as it has over the last ten years, it goes beyond 350 million. The real risk isn’t financial: it’s a poorly monitored plant losing 20 % without anyone noticing.',
    },
    { type: 'fiche', id: 'pv-inverter-finance', why: 'Levelised cost, 25-year cash flows, comparing solutions.' },

    { type: 'heading', text: '3 · Commissioning' },
    {
      type: 'table',
      headers: ['Test (IEC 62446-1)', 'Expected', 'Measured'],
      rows: [
        ['Continuity of equipotential bonding', '< 1 Ω', '0.3 Ω ✓'],
        ['Polarity of each string', 'correct', '10 / 10 ✓'],
        ['Voc per string, cells at 45 °C', '18 × 49.6 × 0.946 ≈ 845 V', '9 strings between 838 and 849 V; T2-M3: 798 V ✗'],
        ['Isc per string, 800 W/m²', '≈ 11.2 A', '11.0 to 11.4 A ✓'],
        ['Array insulation at 1,000 V', '≥ 1 MΩ', '≥ 40 MΩ ✓'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Yao Kouamé',
      role: 'team',
      text: '798 V on T2-M3 is 47 V less than the others: one module short. We found a jumper cable skipping a module at the end of a row. Fixed, re-measured: 846 V. That’s why we measure every string before closing the isolators.',
    },

    { type: 'heading', text: '4 · Monitoring: the performance ratio' },
    {
      type: 'calc',
      title: 'March report',
      steps: [
        { label: 'Irradiation measured in the module plane (pyranometer)', formula: 'H = 170 kWh/m²  →  Y_{r} = 170 h' },
        { label: 'Energy produced', formula: 'Y_{f} = \\frac{11,400}{99} ≈ 115 kWh/kWp' },
        { label: 'Raw PR', formula: 'PR = \\frac{115}{170} ≈ 0.68  ?' },
        { label: 'PR corrected for the curtailment of 4 Sundays (≈ 0.9 MWh estimated)', formula: 'PR = \\frac{(11,400 + 900) / 99}{170} ≈ 0.73 ✓' },
      ],
      result: 'Without correcting for curtailment, the plant would be wrongly blamed. 0.73 in the hot season is normal.',
    },
    {
      type: 'table',
      headers: ['Task', 'Frequency', 'Why'],
      rows: [
        ['Compare the 10 strings on the portal', 'every week', 'a string 10 % below the others = a fault to find'],
        ['Washing with water, early morning', 'every 2 months, monthly during harmattan', '5 to 15 % loss from dust'],
        ['Infrared thermography of the array', 'every year', 'hot spots, diodes, connectors'],
        ['Re-tightening, SPD check', 'after the rainy season', 'lightning, expansion, corrosion'],
        ['I-V curves of each string', 'every 2 years', 'ageing, performance warranty'],
      ],
    },
    {
      type: 'note',
      text: 'In July, the portal flags T1-M2 at 82 % of the other strings. Thermography shows a module with a 95 °C hot spot: a cell cracked by a dropped tool during installation. The module is replaced under warranty. One string per MPPT also means string-by-string diagnosis.',
    },

    { type: 'heading', text: '5 · What the standards say' },
    {
      type: 'norms',
      title: 'Commissioning and performance',
      rows: [
        { norm: 'IEC 62446-1', rule: 'Commissioning tests: continuity, polarity, Voc, Isc, insulation; documentation handed to the client.', result: 'tests on the 10 strings' },
        { norm: 'IEC 61724-1', rule: 'Performance monitoring: irradiation measurement, PR, accounting for external losses.', result: 'corrected PR' },
        { norm: 'IEC TS 62446-3', rule: 'Infrared thermography of modules and installations.', result: 'annual inspection' },
        { norm: 'IEC 62446-2', rule: 'Maintenance of PV systems: inspections, cleaning, periodic tests.', result: 'maintenance plan' },
      ],
    },
    {
      type: 'regional',
      text: 'In West Africa many industrial roofs are financed without client investment: a developer installs the plant and sells the kWh to the factory, at 70 to 85 FCFA, for 15 to 20 years. Tropica prefers to invest, but Fanta presents both options. Before pricing, she also checks the duty and VAT exemptions on solar equipment, which vary from one country to another.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'Only self-consumed kWh count; contracted demand does not fall.',
        'Simple payback and levelised cost per kWh give two complementary views.',
        'Measuring every string at commissioning avoids years of invisible losses.',
        'PR is calculated taking deliberate curtailment into account; comparing strings reveals faults.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'The energy tariff rises to 115 FCFA/kWh. What does the payback become?',
      solution: ['Savings: 126,400 × 115 ≈ 14.5 M; + 0.6 − 0.5 = 14.6 M FCFA/yr.', '50 / 14.6 ≈ 3.4 years.'],
    },
    {
      type: 'exercise',
      question: 'A string measures 829 V at commissioning, cells at 45 °C. What should be suspected?',
      solution: ['845 − 829 = 16 V, about a third of a module.', 'A short-circuited bypass diode in one module: to be confirmed by thermography or module-by-module measurement.'],
    },
  ],
};
