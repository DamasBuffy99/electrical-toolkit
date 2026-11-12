import { TopicContent } from '../../types';
import { fig } from '../../topics/clim/fig';

export const coSystemContent: TopicContent = {
  title: 'Split, VRF or chilled water?',
  subtitle: 'With 65 kW per floor and 323 kW for the building, several systems are possible. Ousmane compares them in front of Jean-Marc, chooses one VRF per floor, sizes it with its connection ratio and checks that R32 stays safe in the small offices.',
  blocks: [
    { type: 'scene', text: 'Month 3 · Kora technical committee, with Awa Diallo' },
    {
      type: 'objectives',
      items: [
        'Compare splits, VRF and chilled water on technical and economic criteria.',
        'Understand how a VRF works: one outdoor unit, several indoor units, a refrigerant network.',
        'Size a VRF system: diversity, connection ratio, pipe lengths.',
        'Check the refrigerant charge allowed in the smallest room served.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '2 × 22.4 kW', label: 'VRF outdoor units per floor' },
        { value: '125 % / 104 %', label: 'connection ratio of the two circuits' },
        { value: '9 kg', label: 'of R32 per circuit' },
        { value: '2.0 kg', label: 'allowed without measures in a 12 m² office' },
        { value: 'EER ≈ 3.6', label: 'at full load, much more at part load' },
      ],
    },

    { type: 'heading', text: '1 · Three families of systems' },
    { type: 'illustration', name: 'clim-systems', props: { highlight: 'medium' }, caption: 'From 2.5 to 75 kW per system: the domain of splits, multi-splits and VRF' },
    {
      type: 'table',
      headers: ['Criterion', 'Individual splits', 'VRF (variable refrigerant flow)', 'Chilled water + fan coils'],
      rows: [
        ['Number of outdoor units', '≈ 50 on the façades', '10 on the roof', '2 chillers + pumps'],
        ['Zone control', 'yes, but uncoordinated', 'yes, centralised', 'yes, centralised'],
        ['Part-load efficiency', 'average', 'very good (inverter compressors)', 'good, depends on the pumps'],
        ['Refrigerant in ceilings', 'little', 'yes: charge to check', 'no: water'],
        ['Usual range', 'up to ≈ 50 kW', '50 to 400 kW', 'above 300 to 500 kW'],
        ['Installed cost (index)', '1', '≈ 1.5', '≈ 1.8'],
      ],
    },
    fig('p129_0', 'Table 5.2 of the IEPF guide — assessment of systems: load coverage, comfort, running costs'),
    {
      type: 'dialogue',
      speaker: 'Jean-Marc Kouadio (Kora Assurances)',
      role: 'client',
      text: 'The hotel next door has a chilled-water plant. They say it’s the best there is. Why not us?',
    },
    {
      type: 'dialogue',
      speaker: 'Ousmane Cissé',
      role: 'engineer',
      text: 'For a 120-room hotel, yes, and I’ll tell you about one in another project. For 323 kW of offices that only run in the daytime, chilled water would cost 20 % more and need a plant room, pumps and a team able to maintain them. VRF does just as well here, with units on the roof and very fine zone control.',
    },
    {
      type: 'decision',
      title: 'Air-conditioning system',
      choice: 'Cooling-only VRF (heat recovery is useless in this climate), two circuits per floor, and a separate fresh-air unit',
      reasons: [
        'Building capacity (≈ 320 kW) within VRF’s natural range, with excellent part-load efficiency.',
        'One indoor unit per sub-zone, individually controlled: no more quarrels between façades.',
        'Outdoor units grouped on the roof: free façades, maintenance in one place.',
      ],
      rejected: 'Individual splits (cluttered façades, no central management, untreated fresh air); chilled water (dearer at this scale, extra rooms and skills).',
    },
    { type: 'fiche', id: 'clim-system-choice', why: 'Which system for which building?' },
    { type: 'fiche', id: 'abc-split-vrv', why: 'Split, multi-split and VRF in practice.' },

    { type: 'heading', text: '2 · Sizing a VRF' },
    {
      type: 'text',
      text: 'A VRF connects an inverter outdoor unit to several indoor units through a copper network with branch joints (“Y joints”). Each indoor unit has its own electronic expansion valve; the outdoor unit adjusts its speed to the total demand. Since not all zones peak together, the sum of the indoor units can exceed the outdoor unit’s capacity: that is the connection ratio.',
    },
    {
      type: 'calc',
      title: 'Circuit A of the floor: north + east + meeting room',
      steps: [
        { label: 'Zone needs without fresh air (treated separately)', formula: '10.5 + 9.6 + 4.6 = 24.7 kW' },
        { label: 'The three zones don’t peak together (east in the morning, meeting room intermittent)', formula: '24.7 × 0.8 ≈ 19.8 kW  →  22.4 kW outdoor unit' },
        { label: 'Indoor units chosen', formula: '4 × 2.8 + 2 × 5.6 + 1 × 5.6 = 28.0 kW' },
        { label: 'Connection ratio (manufacturer limit: 50 to 130 %)', formula: '\\frac{28.0}{22.4} = 125 % ✓' },
      ],
      result: 'Circuit A: 22.4 kW outdoor unit, 7 indoor units, 125 % connection. Circuit B (south + west): 23.2 kW for 22.4 kW, i.e. 104 %',
    },
    {
      type: 'table',
      headers: ['VRF network constraint (manufacturer order of magnitude)', 'Limit', 'Kora'],
      rows: [
        ['Longest actual pipe length', '165 m', '≈ 55 m'],
        ['Height difference outdoor – indoor unit', '50 m (outdoor above)', '≈ 18 m for the 1st floor'],
        ['From the first branch to the farthest unit', '40 m', '≈ 32 m'],
        ['Connection ratio', '50 to 130 %', '104 to 125 %'],
      ],
    },

    { type: 'heading', text: '3 · Refrigerant in the ceilings: how much per office?' },
    {
      type: 'calc',
      title: 'Charge of circuit A against the smallest office served',
      steps: [
        { label: 'Circuit charge: factory + top-up for 55 m of pipework', formula: 'm = 5.5 + 3.5 = 9.0 kg of R32' },
        { label: 'Smallest room served: 12 m² individual office, 2.7 m ceiling', formula: 'V = 12 × 2.7 ≈ 32 m³' },
        { label: 'R32 concentration limit (EN 378, without special measures)', formula: '0.061 kg/m³ × 32 m³ ≈ 2.0 kg < 9.0 kg  ✗' },
        { label: 'Same calculation with R410A (A1, limit 0.44 kg/m³)', formula: '0.44 × 32 ≈ 14 kg ≥ 9.0 kg ✓' },
      ],
      result: 'With R32, safety measures are needed in the small offices; R410A would pass, but with a GWP three times higher',
    },
    {
      type: 'decision',
      title: 'VRF refrigerant',
      choice: 'R32 VRF, with leak detectors in rooms under 30 m² and automatic shut-off valves on the branches (manufacturer’s safety kit)',
      reasons: [
        'GWP of 675 instead of 2,088: three times less impact if it leaks, in line with the Kigali trajectory.',
        'The measures of the appliance standard (IEC 60335-2-40, annex GG) and EN 378 allow the 9 kg charge: on a leak, the valve isolates the unit and ventilation starts.',
        'Two circuits per floor instead of one: the charge per circuit stays moderate.',
      ],
      rejected: 'R410A: simpler today, but being phased down and increasingly expensive to recharge over the system’s 15-year life.',
    },

    { type: 'heading', text: '4 · Equipment schedule for one floor' },
    {
      type: 'equipmentSchedule',
      schedule: {
        title: 'Kora typical-floor VRF',
        project: 'Kora Assurances head office',
        conditions: '35 °C out; 27 °C / 19 °C in (catalogue)',
        rows: [
          { tag: 'OU-A', location: 'Roof', type: 'Inverter VRF outdoor unit 22.4 kW', cooling: 22.4, refrigerant: 'R32', supply: '400 V 3~ 50 Hz', power: 5.6, current: 9.5, protection: 'C20 3P · 300 mA RCD', note: 'north + east + meeting, 125 % connection' },
          { tag: 'OU-B', location: 'Roof', type: 'Inverter VRF outdoor unit 22.4 kW', cooling: 22.4, refrigerant: 'R32', supply: '400 V 3~ 50 Hz', power: 5.6, current: 9.5, protection: 'C20 3P · 300 mA RCD', note: 'south + west, 104 % connection' },
          { tag: 'IU-N ×4', location: 'North offices', type: '4-way cassettes 2.8 kW', cooling: 0, airflow: 2600, refrigerant: 'R32', supply: '230 V 1~ 50 Hz', power: 0.16, current: 0.8, protection: 'C10 shared', note: 'leak detector in offices < 30 m²' },
          { tag: 'IU-E ×2', location: 'East offices', type: 'Ducted units 5.6 kW', cooling: 0, airflow: 2000, refrigerant: 'R32', supply: '230 V 1~ 50 Hz', power: 0.3, current: 1.4, protection: 'C10 shared', note: 'plenum return' },
          { tag: 'IU-M ×1', location: 'Meeting room', type: 'Ducted unit 5.6 kW', cooling: 0, airflow: 1000, refrigerant: 'R32', supply: '230 V 1~ 50 Hz', power: 0.15, current: 0.7, protection: 'C10 shared', note: 'dry fresh air from the AHU' },
          { tag: 'IU-S ×3', location: 'South offices', type: '4-way cassettes 4.0 kW', cooling: 0, airflow: 2400, refrigerant: 'R32', supply: '230 V 1~ 50 Hz', power: 0.15, current: 0.7, protection: 'C10 shared', note: '' },
          { tag: 'IU-W ×2', location: 'West offices', type: 'Ducted units 5.6 kW', cooling: 0, airflow: 2000, refrigerant: 'R32', supply: '230 V 1~ 50 Hz', power: 0.3, current: 1.4, protection: 'C10 shared', note: 'plenum return' },
        ],
      },
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'team',
      text: 'Ten 5.6 kW outdoor units on the roof, 56 kW, plus the indoor units on the floor boards. I’m planning an “HVAC” board on the roof fed from the main board, and a 300 mA RCD per outdoor unit: the compressor drives have leakage currents that 30 mA devices would struggle with.',
    },
    { type: 'fiche', id: 'abc-electric', why: 'Motors, starting, protection and drives in air-conditioning plants.' },

    { type: 'heading', text: '5 · What the standards say' },
    {
      type: 'norms',
      title: 'Flammable refrigerants in occupied rooms',
      rows: [
        { norm: 'EN 378-1', rule: 'Charge limits by refrigerant class, occupancy type and volume of the smallest room; extra measures allowing more.', result: 'R32: 0.061 kg/m³ without measures' },
        { norm: 'IEC 60335-2-40 (annex GG)', rule: 'Higher A2L charges allowed with detection, ventilation or shut-off valves.', result: '9 kg with safety kit' },
        { norm: 'ISO 5149-1', rule: 'International equivalent of EN 378.', result: 'same approach' },
        { norm: 'ASHRAE 15 / UL 60335-2-40', rule: 'Equivalent North American rules for A2Ls (detection, ventilation, limits).', result: 'same approach' },
      ],
    },
    {
      type: 'regional',
      text: 'VRF needs an installer trained by the manufacturer: brazing under nitrogen, Y joints oriented correctly, long evacuation, charge calculated to the gram. Insist on commissioning by the manufacturer or its approved representative, otherwise the warranty is void. Also stock critical spares (outdoor-unit PCBs): import lead times can exceed a month.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'Splits for small capacities, VRF from about 50 to 400 kW, chilled water above: the boundary also depends on use and local skills.',
        'A VRF is sized zone by zone, then outdoor unit by outdoor unit with diversity and a connection ratio.',
        'Refrigerant network lengths and heights are limited by the manufacturer.',
        'With an A2L refrigerant, check the charge against the smallest room served and add measures if needed.',
        'The equipment schedule gives the electrician powers, currents and protections, including the RCD type.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'A 28 kW VRF circuit serves indoor units totalling 38 kW. Is the connection ratio allowed?',
      solution: ['38 / 28 ≈ 136 %.', 'Above 130 %: no. A bigger outdoor unit is needed, or some units must move to another circuit.'],
    },
    {
      type: 'exercise',
      question: 'What minimum room area would accept 9 kg of R32 without measures, with a 2.7 m ceiling?',
      solution: ['V ≥ 9 / 0.061 ≈ 148 m³.', 'Area ≥ 148 / 2.7 ≈ 55 m²: only the meeting room and the open-plan areas qualify, not the individual offices.'],
    },
  ],
};
