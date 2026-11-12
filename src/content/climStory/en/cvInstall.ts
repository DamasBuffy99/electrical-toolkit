import { TopicContent } from '../../types';
import { fig } from '../../topics/clim/fig';

export const cvInstallContent: TopicContent = {
  title: 'Installing and commissioning',
  subtitle: 'A good split badly installed becomes a bad split. Ousmane follows the work of Ismaël Touré, the refrigeration technician: unit positions, refrigerant lines, condensate, evacuation, charging, R32 safety, then the commissioning readings.',
  blocks: [
    { type: 'scene', text: 'Month 5 · On site, with Ismaël Touré (Polar Froid) and Moussa Keïta' },
    {
      type: 'objectives',
      items: [
        'Place indoor and outdoor units for performance and comfort.',
        'Install the refrigerant lines and the condensate drains.',
        'Pressure-test, evacuate and charge a circuit properly.',
        'Check the maximum R32 charge per room.',
        'Commission the units and give the client the right maintenance advice.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '≈ 2.6 L/h', label: 'condensate of the villa at peak' },
        { value: '≤ 500 µm Hg', label: 'vacuum to reach (≈ 67 Pa)' },
        { value: '6.2 kg', label: 'maximum R32 charge allowed in the living room' },
        { value: '≈ 12 °C', label: 'return-to-supply air difference' },
      ],
    },

    { type: 'heading', text: '1 · Where should the units go?' },
    { type: 'illustration', name: 'clim-outdoor', caption: 'The outdoor unit must breathe: in the shade, clear, without recycling its own hot air' },
    {
      type: 'dialogue',
      speaker: 'Moussa Keïta (site manager)',
      role: 'team',
      text: 'For the living-room unit, the simplest is on the roof, in full sun: nobody will see it.',
    },
    {
      type: 'dialogue',
      speaker: 'Ousmane Cissé',
      role: 'engineer',
      text: 'In full sun, on a sheet at 60 °C, it would draw in 40 °C air and lose 10 to 15 % of its capacity, right at the hours we need it. I want it on the south façade, under the roof overhang, 30 cm from the wall and a metre clear in front. We’ll see it a little, but it will work well.',
    },
    fig('p097', 'Page 82 of the IEPF guide — outdoor unit location: mind the energy efficiency'),
    {
      type: 'table',
      headers: ['Unit', 'Good practice', 'Why'],
      rows: [
        ['Indoor', 'high on the wall, blowing along the ceiling, not above the bed', 'avoid the cold jet on occupants'],
        ['Indoor', 'free return air, at least 15 cm below the ceiling', 'nominal airflow makes the capacity'],
        ['Outdoor', 'in the shade, ventilated, nothing in front of the fan', 'condense with the coolest possible air'],
        ['Outdoor', 'on anti-vibration mounts, away from neighbours’ windows', 'noise and vibration'],
      ],
    },
    { type: 'illustration', name: 'clim-airflow', props: { variant: 'good' }, caption: 'Blowing along the ceiling: cold air falls gently into the occupied zone' },

    { type: 'heading', text: '2 · Refrigerant lines and condensate' },
    {
      type: 'text',
      text: 'Ismaël uses dehydrated refrigeration copper, bent rather than brazed, with flare joints tightened with a torque wrench. The two pipes (liquid and gas) are insulated separately: on the cold gas pipe, moisture from the air would condense and drip into the false ceiling. During any brazing, nitrogen flows through the pipe to prevent oxide scale.',
    },
    {
      type: 'calc',
      title: 'Condensate flow to drain',
      steps: [
        { label: 'Total latent heat of the villa at peak (heat load sheet)', formula: 'Q_L ≈ 1 760 W' },
        { label: 'Latent heat of condensation of water', formula: 'L_v ≈ 2 450 kJ/kg' },
        { label: 'Water condensed', formula: 'q_m = \\frac{1 760}{2 450 000} × 3 600 ≈ 2.6 kg/h' },
      ],
      result: 'About 2.6 litres per hour for the villa, 1.3 L/h of it in the living room: some twenty litres a day',
    },
    {
      type: 'decision',
      title: 'Condensate drainage',
      choice: '20 mm PVC pipe, at least 1 % slope, trap before connecting to waste water; living room to the drain, bedrooms to the garden',
      reasons: [
        'Twenty litres a day at the foot of a wall end up damaging it: drain them away from the foundations.',
        'The trap stops sewer smells coming back into the indoor unit.',
        'No condensate pump: a natural slope never breaks down.',
      ],
      rejected: 'Letting it run down the façade, as often seen: stains, moss and a slippery floor at the door.',
    },

    { type: 'heading', text: '3 · Pressure test, evacuation and charging' },
    {
      type: 'table',
      headers: ['Step', 'How', 'Criterion'],
      rows: [
        ['Pressure test', 'dry nitrogen at the pressure given by the manufacturer (often 40 bar for R32)', 'no drop in 24 h (corrected for temperature)'],
        ['Evacuation', 'vacuum pump + electronic vacuum gauge', '≤ 500 µm Hg, then held 15 min without rising above about 1,000 µm'],
        ['Opening the valves', 'the outdoor unit’s factory charge fills the lines', 'no leak at the detector'],
        ['Additional charge', 'beyond the pre-charged length (often 5 m)', 'about 20 g/m of 1/4" liquid line'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Ismaël Touré (refrigeration technician)',
      role: 'team',
      text: 'Many colleagues “purge” with refrigerant instead of pulling a vacuum. It’s quicker, but the moisture left in the circuit attacks the oil and the compressor dies within two or three years.',
    },
    {
      type: 'calc',
      title: 'Additional charge for the living room',
      steps: [
        { label: 'Line length', formula: 'L = 8 m' },
        { label: 'Factory pre-charged length', formula: 'L_0 = 5 m' },
        { label: 'Additional charge (manual: 20 g/m)', formula: 'm = (8 − 5) × 20 = 60 g of R32' },
      ],
      result: 'Total charge ≈ 0.80 + 0.06 = 0.86 kg, weighed on scales and written on the unit label',
    },

    { type: 'heading', text: '4 · R32 is mildly flammable: how much per room?' },
    {
      type: 'text',
      text: 'R32 is classed A2L: it burns with difficulty and slowly, but it burns. If all the refrigerant leaked into a small room, its concentration could reach the flammability limit. The appliance standard for air conditioners (IEC 60335-2-40) therefore limits the charge according to room area and unit height.',
    },
    {
      type: 'calc',
      title: 'Maximum R32 charge (wall unit at 1.8 m)',
      steps: [
        { label: 'Formula of the standard, LFL = 0.307 kg/m³ for R32', formula: 'm_{max} = 2.5 × LFL^{5/4} × h_0 × \\sqrt{A}' },
        { label: 'Living room: A = 36 m²', formula: 'm_{max} = 2.5 × 0.229 × 1.8 × 6 ≈ 6.2 kg ≥ 0.86 kg ✓' },
        { label: 'Bedroom: A = 12 m²', formula: 'm_{max} = 2.5 × 0.229 × 1.8 × \\sqrt{12} ≈ 3.6 kg ≥ 0.55 kg ✓' },
      ],
      result: 'A wide margin: with individual splits R32 is no problem. It will be one with a VRF system (project 3)',
    },

    { type: 'heading', text: '5 · Commissioning and handover' },
    {
      type: 'table',
      headers: ['Reading', 'Value in the living room', 'What it proves'],
      rows: [
        ['Return / supply temperature', '26.1 °C / 13.8 °C', '≈ 12 °C difference: the coil exchanges well'],
        ['Low pressure (R32)', '≈ 9 bar gauge', 'evaporation around 7 °C: correct charge'],
        ['Current drawn', '6.9 A at full speed', 'below the 8.7 A on the plate'],
        ['Condensate', 'visible flow at the inspection point', 'slope and trap correct'],
        ['Indoor noise', '≈ 35 dB(A) at low speed', 'quiet bedroom and living room'],
      ],
    },
    {
      type: 'calc',
      title: 'Checking the capacity with a thermometer',
      steps: [
        { label: 'Airflow at high speed (manual)', formula: 'q = 850 m³/h' },
        { label: 'Sensible capacity exchanged', formula: 'Q_S = 0.34 × q × Δθ = 0.34 × 850 × 12.3 ≈ 3 550 W' },
        { label: 'With the latent part (SHR ≈ 0.8)', formula: 'Q ≈ \\frac{3 550}{0.8} ≈ 4.4 kW' },
      ],
      result: 'Consistent with the capacity expected at part load: the unit is sound',
    },
    {
      type: 'bullets',
      items: [
        'Esther receives the file: equipment schedule, line diagrams, refrigerant charges, commissioning sheets, warranties.',
        'Filters to be cleaned every two to four weeks; servicing by a technician once or twice a year (coils, condensate, pressures).',
        'Recommended set point 26 °C, minimum 24 °C; doors and windows closed while the AC is running.',
      ],
    },
    { type: 'fiche', id: 'abc-install', why: 'Piping, brazing, condensate, leak-tightness and evacuation.' },
    { type: 'fiche', id: 'abc-commissioning', why: 'Commissioning, refrigerant charge and reference readings.' },
    { type: 'fiche', id: 'clim-room-install', why: 'Noise, outdoor unit, controls and condenser.' },

    { type: 'heading', text: '6 · What the standards say' },
    {
      type: 'norms',
      title: 'Safety of refrigerating systems',
      rows: [
        { norm: 'IEC 60335-2-40', rule: 'Air conditioners and heat pumps: maximum charge of flammable refrigerants according to area and installation height.', result: 'R32: 6.2 kg max in the living room' },
        { norm: 'EN 378 / ISO 5149', rule: 'Design, construction and testing of refrigerating systems; concentration limits per room.', result: 'test, labelling, logbook' },
        { norm: 'ASHRAE 15 / 34', rule: 'Safety of installations (15) and refrigerant classification (34) in North America.', result: 'R32 = A2L' },
        { norm: 'EU Regulation 2024/573 (F-gas)', rule: 'Leak checks from 5 t CO₂ eq.; certified personnel; mandatory recovery.', result: '0.86 kg × 675 ≈ 0.58 t: no mandatory check' },
      ],
    },
    {
      type: 'regional',
      text: 'West African countries apply the Montreal Protocol and the Kigali amendment: HFCs are frozen then gradually reduced, and national programmes train and certify technicians in good practice (recovery, flammable refrigerants). Insist on an installer trained in R32, a vacuum pump and a vacuum gauge: those two tools make the difference between a split that lasts two years and one that lasts fifteen.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'Outdoor unit in the shade and clear: a few extra metres of line beat 15 % less capacity.',
        'Lines insulated separately, sloped condensate drains with a trap: in the tropics, water is everywhere.',
        'Nitrogen, pressure test, 500 µm vacuum, weighed charge: never purge with refrigerant.',
        'An A2L refrigerant is checked against the maximum charge allowed in the room.',
        'Commissioning is proven by readings: temperature difference, pressures, currents.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'A 12 m line connects the living room to its outdoor unit (pre-charged for 5 m, 20 g/m). What additional charge?',
      solution: ['m = (12 − 5) × 20 = 140 g of R32.', 'Also check the maximum length and height difference allowed by the manual.'],
    },
    {
      type: 'exercise',
      question: 'A 9 m² office gets an R32 wall split charged with 1.2 kg. Is the charge allowed?',
      solution: ['m_max = 2.5 × 0.229 × 1.8 × √9 ≈ 3.1 kg.', '1.2 kg ≤ 3.1 kg: yes.'],
    },
    {
      type: 'exercise',
      question: 'At commissioning, the air comes out at 20 °C for a 26 °C return. What do you suspect?',
      solution: [
        'Only a 6 °C difference: the unit is exchanging poorly.',
        'Possible causes: lack of refrigerant (leak, incomplete charge), dirty filter or coil, fan at low speed, outdoor unit recycling its hot air. Check the pressures before adding refrigerant.',
      ],
    },
  ],
};
