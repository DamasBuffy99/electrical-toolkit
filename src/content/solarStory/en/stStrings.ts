import { TopicContent } from '../../types';

export const stStringsContent: TopicContent = {
  title: '100 kWp on the roof: the strings',
  subtitle: 'One hundred and eighty modules on a steel deck roof, two 40 kW inverters with five inputs each: Fanta lays out the array, checks that the roof structure holds, then fills in the string sizing note right up to the 1,000 V limit.',
  blocks: [
    { type: 'scene', text: 'Month 2 · On Tropica’s roof, with Yao Kouamé (SolTech Afrique) and Paul Ndiaye' },
    {
      type: 'objectives',
      items: [
        'Lay out a rooftop array: usable area, setbacks, load on the structure.',
        'Choose the longest string allowed by the 1,000 V maximum voltage.',
        'Check the MPPT window hot and cold, and the currents per input.',
        'Size the string cables and decide on fuses.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '10 × 18', label: 'strings × modules' },
        { value: '910 V', label: 'string Voc on the coolest morning' },
        { value: '≈ 13 kg/m²', label: 'added load on the roof' },
        { value: '0.5 %', label: 'voltage drop of a string' },
      ],
    },

    { type: 'heading', text: '1 · Laying out the array' },
    {
      type: 'table',
      headers: ['Item', 'Value', 'Comment'],
      rows: [
        ['Roof', 'steel deck on purlins, 2 pitches of 600 m², 10° slope', 'south pitch used'],
        ['Setbacks', '1 m at the edges and ridge', 'stronger wind at the edges, firefighter access'],
        ['Walkways', 'one 1 m path every 2 rows', 'cleaning, maintenance, intervention'],
        ['Modules', '180 × (2.28 × 1.13 m), 28 kg', '≈ 465 m² covered'],
        ['Fixing', 'rails on hooks screwed into the purlins', 'no drilling of the deck between purlins'],
        ['Added load', '(180 × 28 kg + 1,100 kg of rails) / 465 m² ≈ 13 kg/m²', 'to be approved by the structural engineer'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Yao Kouamé',
      role: 'team',
      text: 'The deck is in good condition, but the purlins date from 1998. I won’t fit anything until the structural engineer has checked 13 kg/m² more, and above all wind uplift. In the rainy season, squall gusts lift modules more than people think.',
    },
    {
      type: 'note',
      text: 'Wind often governs more than weight: a 2.58 m² module can see several hundred newtons of uplift at the roof edge during a squall. The structural engineer checks the purlins, but also the number of hooks per rail, closer together near the roof edges.',
    },

    { type: 'heading', text: '2 · String length' },
    { type: 'illustration', name: 'pv-array', props: { series: 18, parallel: 1, voc: 49.6 }, caption: 'An 18-module string: nearly 900 V open-circuit on a cool morning' },
    {
      type: 'text',
      text: 'On the coast, nights never drop below 18 °C: that temperature, at sunrise, sets the maximum voltage. On a steel deck roof, modules run hotter than on the ground: Fanta takes a 75 °C cell temperature for the hot check. Each 40 kW inverter has five independent MPPT inputs; she connects a single string per input.',
    },
    {
      type: 'stringSheet',
      sheet: {
        project: 'Tropica roof',
        module: { name: 'Monocrystalline 550 Wp, half-cell', pmax: 550, voc: 49.6, vmp: 41.6, isc: 14.0, imp: 13.2, betaVoc: -0.27, gammaPmax: -0.35 },
        tMin: 18,
        tCellMax: 75,
        inverter: { name: '40 kW three-phase grid-tie inverter, 5 MPPT', vmaxDc: 1000, mpptMin: 200, mpptMax: 800, imaxMppt: 20, iscMaxMppt: 30, pac: 40, count: 2 },
        strings: [
          { mppt: 'MPPT 1', series: 18, parallel: 1 },
          { mppt: 'MPPT 2', series: 18, parallel: 1 },
          { mppt: 'MPPT 3', series: 18, parallel: 1 },
          { mppt: 'MPPT 4', series: 18, parallel: 1 },
          { mppt: 'MPPT 5', series: 18, parallel: 1 },
        ],
      },
    },
    {
      type: 'calc',
      title: 'Why 18 modules, not 19 or 20?',
      steps: [
        { label: 'Voc at 18 °C, 18-module string', formula: '18 × 49.6 × [1 + 0.0027 × 7] ≈ 910 V ≤ 1,000 V ✓' },
        { label: '20-module string', formula: '20 × 49.6 × 1.0189 ≈ 1,011 V > 1,000 V  ✗  (inverter may be destroyed)' },
        { label: '19-module string: Voc allowed, but Vmp on a cool morning', formula: '19 × 41.6 × [1 + 0.0035 × 7] ≈ 810 V > 800 V  ✗  (outside the MPPT window)' },
        { label: '18-module string: Vmp at 75 °C and at 18 °C', formula: '18 × 41.6 × [1 − 0.0035 × 50] ≈ 618 V   ;   18 × 41.6 × 1.0245 ≈ 767 V  ✓' },
      ],
      result: '18 modules per string, 5 strings per inverter: 2 × 49.5 kWp = 99 kWp',
    },
    {
      type: 'decision',
      title: 'String layout',
      choice: '10 strings of 18 modules, one per MPPT input, on 2 inverters of 40 kW',
      reasons: [
        'Long strings reduce the number of cables, connectors and losses.',
        'One string per MPPT: no string fuse, and each string is monitored separately by the inverter.',
        '18 modules leave 90 V of margin below 1,000 V for an exceptionally cool morning.',
      ],
      rejected: '9 strings of 20 modules: Voc exceeds 1,000 V from 25 °C. And 1,500 V inverters: reserved for large plants, not allowed in most buildings.',
    },
    { type: 'fiche', id: 'pv-inverter-sizing', why: 'Voltage, current, MPPT window and DC/AC ratio.' },

    { type: 'heading', text: '3 · DC cables and fuses' },
    {
      type: 'calc',
      title: 'String cable',
      steps: [
        { label: 'Design current (IEC 62548)', formula: 'I_{B} = 1.25 × I_{sc} = 1.25 × 14.0 = 17.5 A' },
        { label: '6 mm² solar cable on the roof (Iz ≈ 70 A at 60 °C, after correction)', formula: '17.5 A ≤ 70 A ✓' },
        { label: 'Voltage drop, 40 m string run (out and back = 80 m)', formula: 'ΔU = \\frac{2 × 40 × 13.2 × 0.023}{6} ≈ 4.0 V' },
        { label: 'Relative to Vmp', formula: '\\frac{4.0}{749} ≈ 0.5 % ≤ 1 % ✓' },
      ],
      result: '6 mm² double-insulated solar cable, 0.5 % voltage drop',
    },
    {
      type: 'text',
      text: 'Why no fuse? A string fuse protects a faulty string against the current fed back by the other strings in parallel. Here each string is alone on its MPPT input: the maximum reverse current is that of a single string, below the module’s reverse current rating (25 A). IEC 62548 requires fuses when (N − 1) × Isc exceeds that rating: with this module, from three strings in parallel (2 × 14 = 28 A > 25 A).',
    },
    {
      type: 'bullets',
      items: [
        'Male and female connectors of the same make and model: mixing brands is the first cause of overheating and arcing.',
        'Cables laid in closed trays, shaded from the sun and away from the deck’s sharp edges, never lying on the sheet metal.',
        'Out and return string conductors run together to reduce the loop area (less lightning-induced overvoltage).',
        'Each string labelled at both ends: T1-M1 to T2-M5.',
      ],
    },

    { type: 'heading', text: '4 · What the standards say' },
    {
      type: 'norms',
      title: 'Rooftop PV array',
      rows: [
        { norm: 'IEC 62548-1', rule: 'Array design: maximum voltage at minimum temperature, I_B = 1.25 × Isc, fuses from 3 strings in parallel.', result: '18 modules, no fuse' },
        { norm: 'IEC 60364-7-712 / NF C 15-100', rule: 'PV installations in buildings: wiring, isolation, protection.', result: 'cables and labelling' },
        { norm: 'UTE C15-712-1 (France)', rule: 'Grid-connected PV guide: Voc at −10 °C in mainland France, DC voltage drop ≤ 1 % recommended.', result: 'French practice' },
        { norm: 'Eurocode 1 / ASCE 7', rule: 'Dead loads, wind and uplift on roofs.', result: 'structure check' },
      ],
    },
    {
      type: 'regional',
      text: 'In France, maximum voltage is calculated at −10 °C: the same 18-module string would reach 18 × 49.6 × 1.094 ≈ 977 V there, just under 1,000 V. On the West African coast, the 18 °C minimum allows longer strings. But beware of Sahelian areas: harmattan nights drop to 10 °C or below, and the margin melts away.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'String length is limited by Voc on the coolest morning, then by the top of the MPPT window.',
        'The hot cell temperature sets the bottom of the MPPT window; on a roof it is higher than on the ground.',
        'One string per MPPT removes fuses and makes monitoring easier.',
        'On a roof, the structure and the wind are checked before the first hook is fitted.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'The same roof is in Ouagadougou, where nights drop to 8 °C. What is the maximum number of modules per string?',
      solution: ['Module Voc at 8 °C: 49.6 × [1 + 0.0027 × 17] ≈ 51.9 V.', '1,000 / 51.9 ≈ 19.3; but Vmp at 8 °C: 41.6 × 1.0595 ≈ 44.1 V, and 18 × 44.1 ≈ 793 V ≤ 800 V. We stay at 18, with no margin at all.'],
    },
    {
      type: 'exercise',
      question: 'Paul would like to put two strings on each input so as to use only one inverter. Is it possible?',
      solution: ['Current per input: 2 × 13.2 = 26.4 A > 20 A allowed: the inverter would clip the current.', 'And 99 kWp on a single 40 kW inverter would give a ratio of 2.5: impossible.'],
    },
  ],
};
