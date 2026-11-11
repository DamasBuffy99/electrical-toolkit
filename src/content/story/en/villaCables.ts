import { TopicContent } from '../../types';

export const villaCablesContent: TopicContent = {
  title: 'The cables and the garden pump',
  subtitle: 'A cable must carry the current without overheating, and deliver enough voltage at the far end. For the borehole pump, 80 m away, it is the second condition that decides.',
  blocks: [
    { type: 'scene', text: 'Week 4 · Design office' },
    {
      type: 'text',
      text: 'Last design step: choosing the cross-section of each cable. For most circuits the answer follows from the breaker. One circuit, however, needs a real calculation: the borehole pump at the bottom of the garden.',
    },

    { type: 'heading', text: '1 · First condition: don’t overheat' },
    {
      type: 'text',
      text: 'A cable carrying current heats up. Each cross-section has a current-carrying capacity beyond which the insulation ages too fast. That capacity also depends on how the cable is installed and on the ambient temperature: a cable enclosed in a conduit inside a hot wall cools less well than a cable in free air.',
    },
    {
      type: 'table',
      headers: ['Copper section', 'Use in the villa', 'Associated breaker'],
      rows: [
        ['1.5 mm²', 'lighting', '10 A'],
        ['2.5 mm²', 'sockets, ACs, water heater, washing machine', '16 or 20 A'],
        ['4 mm²', 'borehole pump (for voltage drop)', '16 A'],
        ['6 mm²', 'oven / future hob', '32 A'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Koffi Mensah',
      role: 'client',
      text: 'It gets to 35 or 40 °C here in the hot season. Does that change anything for the cables?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Yes. Manufacturers’ tables are given for 30 °C. At 40 °C a cable must carry a bit less so as not to exceed its temperature limit: we apply a factor of about 0.87. That’s why I avoid cramming too many circuits into the same conduit: cables touching each other heat each other up.',
    },
    { type: 'fiche', id: 'cable-sizing', why: 'Current-carrying capacity, installation methods, temperature and grouping factors.' },

    { type: 'heading', text: '2 · Second condition: the voltage at the far end' },
    {
      type: 'text',
      text: 'A cable has resistance: the longer and thinner it is, the more voltage it “eats” on the way. After 80 m the pump might only receive 215 V instead of 230 V. An under-supplied motor starts badly, overheats and wears out fast.',
    },
    { type: 'illustration', name: 'cable-run', caption: 'Voltage drop over 80 m depending on the cable cross-section' },
    {
      type: 'text',
      text: 'The pump draws 7.6 A with a power factor of 0.8 (calculated in step 3). In single-phase, the current goes out on the phase and returns on the neutral: the length travelled is doubled.',
    },
    { type: 'formula', text: 'ΔU = \\frac{2 × ρ × L × I × cos φ}{S}   with ρ = 0.0225 Ω·mm²/m (warm copper)' },
    {
      type: 'table',
      headers: ['Section S', 'ΔU (V)', 'ΔU (%)', 'Verdict'],
      rows: [
        ['1.5 mm²', '2 × 0.0225 × 80 × 7.6 × 0.8 / 1.5 = 14.6 V', '6.3%', '✗ above 5%'],
        ['2.5 mm²', '8.8 V', '3.8%', 'passes, but only just'],
        ['4 mm²', '5.5 V', '2.4%', '✓ comfortable'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Koffi Mensah',
      role: 'client',
      text: 'The 2.5 mm² passes. Why pay for 4 mm²?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Three reasons. One: there is already some drop between the meter and the board, which adds up. Two: when starting, the motor draws about six times its current; with 2.5 mm² the voltage would fall more than 11% during start-up, with 4 mm² about 7%. Three: the price difference over 80 m is a few tens of thousands of francs, whereas a burnt-out borehole pump costs far more, not counting the job at the bottom of the well.',
    },
    { type: 'formula', text: 'At start-up (≈ 6 × I, cos φ ≈ 0.4): ΔU_{4 mm²} = \\frac{2 × 0.0225 × 80 × 45.6 × 0.4}{4} ≈ 16 V ≈ 7%' },
    {
      type: 'note',
      text: 'The usual limits (IEC 60364-5-52) for an installation supplied from the public low-voltage network: 3% for lighting, 5% for other uses, measured between the supply point and the appliance. A larger drop is briefly accepted while motors start.',
    },
    { type: 'fiche', id: 'voltage-drop', why: 'Single- and three-phase formulas, catalogue values in mV/A/m, remedies.' },

    { type: 'heading', text: '3 · The buried cable' },
    {
      type: 'bullets',
      items: [
        'A rigid cable designed for burial (type U-1000 R2V), 3 conductors of 4 mm²: phase, neutral and earth, in the conduit laid during earthworks.',
        'About 60 to 80 cm deep, with a red warning mesh 20 cm above it: whoever digs later will know a cable runs there.',
        'The earth conductor follows the cable to the borehole: the pump casing is connected to PE.',
        'Colour codes everywhere: phase brown, black or grey; neutral blue; earth green-and-yellow. Never use green-and-yellow for anything but earth.',
      ],
    },
    {
      type: 'regional',
      text: 'Local markets sometimes sell cables whose real cross-section is smaller than labelled, or with copper replaced by copper-clad aluminium. Awa asks the contractor for branded cables complying with a standard (IEC 60227/60502, NF), and on site checks the marking printed on the sheath.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'A cross-section is chosen on two criteria: heating (corrected current capacity) and voltage drop.',
        'For short circuits, heating decides; for long circuits, voltage drop does.',
        'In single-phase, ΔU = 2 × ρ × L × I × cos φ / S; aim for ≤ 3% for lighting and ≤ 5% for the rest.',
        'Motors deserve a margin, because of their starting current.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'The gate lighting is 50 m from the board: 6 lamps of 15 W (cos φ ≈ 0.95). Is a 1.5 mm² cable suitable, with a 3% limit?',
      solution: [
        'I = 90 / (230 × 0.95) ≈ 0.41 A.',
        'ΔU = 2 × 0.0225 × 50 × 0.41 × 0.95 / 1.5 ≈ 0.58 V, i.e. 0.25%: more than enough.',
        'With LEDs the current is so small that voltage drop is rarely a problem for lighting.',
      ],
    },
    {
      type: 'exercise',
      question: 'The borehole is finally moved to 120 m. What cross-section keeps the drop under 3% in normal operation?',
      solution: [
        'Max ΔU = 3% × 230 = 6.9 V.',
        'S ≥ 2 × 0.0225 × 120 × 7.6 × 0.8 / 6.9 ≈ 4.76 mm² → standard section 6 mm².',
        'Check: ΔU = 2 × 0.0225 × 120 × 7.6 × 0.8 / 6 ≈ 5.5 V, i.e. 2.4%.',
      ],
    },
  ],
};
