import { TopicContent } from '../../../types';

export const abcCommissioningContent: TopicContent = {
  title: 'Commissioning, refrigerant charging and reference readings',
  subtitle: 'Starting an installation in the right order, charging it correctly and knowing what healthy values look like',
  blocks: [
    {
      type: 'text',
      text: 'Methodical commissioning avoids burning out a compressor at the first start. Then a well-done refrigerant charge and a complete set of readings become the reference for the whole life of the installation: when a fault occurs, you compare with the values recorded on commissioning day.',
    },
    { type: 'illustration', name: 'tech-manifold', props: { mode: 'charge' }, caption: 'Refrigerant charging: cylinder on scales, manifold centre port' },

    { type: 'heading', text: 'Commissioning, step by step' },
    {
      type: 'note',
      text: 'The day before (or a few hours before), energise the crankcase heaters: warm oil holds no refrigerant and will not foam at start-up.',
    },
    {
      type: 'bullets',
      items: [
        '1. Measure the voltages at the supply: phase to phase, phase to neutral, phase to earth.',
        '2. Check power and control connections (diagram in hand) and retighten terminals.',
        '3. Visual inspection: refrigerant and water pipework, ducts, impellers, belts.',
        '4. Switch on the main breaker with the individual protections open; close them one by one, except compressor and control.',
        '5. Operate the fan and pump contactors to check directions of rotation, then air and water flows.',
        '6. Fit the manifold on the service valves; try the remote control “dry”, compressor de-energised.',
        '7. Energise the compressor; for a three-phase scroll, check that it creates a pressure difference (otherwise swap two phases).',
        '8. Start in the required mode and check the manufacturer’s sequence (pump, pre-ventilation, 4-way valve…).',
        '9. Top up the charge if needed (additional charge per metre of line beyond the pre-charged length).',
        '10. Measure each motor’s current with a clamp meter.',
        '11. Take a complete set of readings: pressures, temperatures, ΔT across the heat exchangers, superheat, subcooling.',
        '12. Test the safeties: LP cut-out (suction valve closed), HP cut-out (condenser blocked or fan stopped), electrical faults.',
        '13. Watch 3 or 4 complete on/off cycles.',
      ],
    },

    { type: 'heading', text: 'Charging refrigerant' },
    {
      type: 'bullets',
      items: [
        'Ideally you know the charge (nameplate, manual) and WEIGH it in. Otherwise, charge by following the indicators.',
        'Equipment: cylinder, scales, manifold with fine valves, contact thermometer, vacuum pump.',
        'Evacuate the hoses, connect the cylinder (upright or inverted depending on the phase required) on the scales.',
        'Installation stopped and under vacuum: pre-charge through HP and LP, stopping before pressures equalise.',
        'Start, then top up on the LP side: as VAPOUR for a pure or azeotropic refrigerant; as LIQUID, in small amounts, for a zeotrope (R407C, R410A), otherwise its composition changes.',
        'Stop when the sight glass barely bubbles, then fine-tune with the indicators below, watching the compressor current.',
      ],
    },
    {
      type: 'table',
      headers: ['Indicator', 'Target value'],
      rows: [
        ['Subcooling', '4 to 7 K (correct charge)'],
        ['Superheat', '4 to 8 K (evaporator well fed)'],
        ['Liquid sight glass', 'almost no bubbles'],
        ['Compressor current', 'below the rated current'],
        ['Liquid line', 'lukewarm to the touch'],
      ],
    },
    { type: 'illustration', name: 'tech-sh-sc', caption: 'The two measurements that validate the charge' },
    {
      type: 'note',
      text: 'Charging in cool weather: HP is low and the circuit looks well charged. Simulate summer by partly masking the condenser with cardboard: HP rises (without reaching cut-out), the sight glass should barely bubble and the current stay below rated.',
    },

    { type: 'heading', text: 'Adjusting the superheat of a thermostatic expansion valve' },
    {
      type: 'bullets',
      items: [
        'First check the charge (correct subcooling) and the bulb position; HP as stable as possible.',
        'Open the valve 1/4 turn at a time (anticlockwise) until it “hunts”: LP and bulb temperature oscillate.',
        'Close by 1/4 then 1/8 turn (clockwise), waiting a few minutes each time, until hunting stops: you are at the lowest stable superheat.',
        'Hunting cannot be obtained → valve or orifice too small, undercharge, or flash gas. Hunting cannot be eliminated → valve too large or evaporator too small.',
      ],
    },

    { type: 'heading', text: 'Reference readings' },
    {
      type: 'table',
      headers: ['Air/air air conditioning', 'Normal difference'],
      rows: [
        ['Condenser: air in → air out', '5 to 10 K'],
        ['Condenser: condensing T − air in', '11 to 15 K'],
        ['Evaporator: air in → air out', '6 to 10 K'],
        ['Evaporator: air in − evaporating T', '15 to 20 K'],
        ['Superheat', '5 to 8 K'],
        ['Subcooling', '4 to 7 K'],
      ],
    },
    {
      type: 'table',
      headers: ['Other cases', 'Normal difference'],
      rows: [
        ['Once-through water condenser: water in → out', '10 to 15 K (cond. T ≈ water out + 5 to 7 K)'],
        ['Condenser on cooling tower: water in → out', '≈ 5 K'],
        ['Water evaporator (chiller): in → out', '4 to 6 K; evap. T ≈ water out − 5 K'],
        ['Cold room, fan-coil evaporator', 'evap. T 8 to 10 K below room temperature'],
      ],
    },
    {
      type: 'note',
      text: 'These values come from field experience and vary with manufacturers and conditions: they help spot an anomaly, not replace the manual. Keep your commissioning readings in the installation logbook.',
    },

    { type: 'heading', text: 'Measuring airflow' },
    {
      type: 'bullets',
      items: [
        'Vane anemometer: axis parallel to the flow; sweep the whole face or measure at 4 points (small grille) or 9 points or more (large), then average.',
        'Hot-wire anemometer: accurate at low velocities; with a measuring hood to capture the full flow of a diffuser.',
        'In a duct: several measuring points across the section, then average.',
      ],
    },
    { type: 'formula', text: 'Airflow (m³/h) = mean velocity (m/s) × free area (m²) × 3,600' },

    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'On a 30 × 40 cm grille, you measure 2, 0.9, 1.4 and 1.9 m/s at 4 points. What is the airflow?',
      solution: ['Mean velocity = (2 + 0.9 + 1.4 + 1.9) / 4 = 1.55 m/s.', 'Area = 0.30 × 0.40 = 0.12 m².', 'Airflow = 1.55 × 0.12 × 3,600 ≈ 670 m³/h.'],
    },
    {
      type: 'exercise',
      question: 'Split readings: air in 26 °C, supply 17 °C, evaporating 8 °C; outdoor air 35 °C, condensing 48 °C; superheat 6 K, subcooling 5 K. Is the unit healthy?',
      solution: ['Evaporator: air ΔT 9 K (6–10 ✓), air in − evaporating 18 K (15–20 ✓).', 'Condenser: 48 − 35 = 13 K (11–15 ✓).', 'Superheat and subcooling within range: the unit is running normally; these readings become its reference.'],
    },
  ],
};
