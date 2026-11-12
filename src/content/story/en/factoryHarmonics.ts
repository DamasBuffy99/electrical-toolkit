import { TopicContent } from '../../types';

export const factoryHarmonicsContent: TopicContent = {
  title: 'Harmonics: the overheating neutral',
  subtitle: 'Three months after commissioning, Paul reports a warm neutral cable in the office board, and a capacitor-bank fuse has blown twice. Awa connects the power analyser: the drives and the electronics are distorting the current.',
  blocks: [
    { type: 'scene', text: 'Month 9 · Measurement campaign, with Paul' },
    {
      type: 'objectives',
      items: [
        'Understand where harmonics come from and how they are measured (THD).',
        'See why triplen harmonics add up in the neutral, and size it.',
        'Check the resonance risk of a capacitor bank.',
        'Compare the IEC 61000 and IEEE 519 limits, and choose a remedy.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '40 %', label: 'third harmonic in the office board' },
        { value: '48 A', label: 'neutral current for 40 A per phase' },
        { value: 'order 10', label: 'resonance without detuning reactors' },
        { value: '189 Hz', label: 'bank tuning (p = 7 %)' },
        { value: '≤ 8 %', label: 'TDD allowed at Tropica (IEEE 519)' },
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Paul Ndiaye (maintenance)',
      role: 'client',
      text: 'I don’t get it: the office board’s three phases are at 40 A, nicely balanced. The neutral should be almost zero, shouldn’t it? My clamp reads 48 A.',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'That’s true for sinusoidal currents. Your computers and LED lighting draw current in peaks, heavily distorted. Part of that distortion doesn’t cancel in the neutral: it adds up there. We’ll see it in the measurements.',
    },

    { type: 'heading', text: '1 · What is a harmonic?' },
    {
      type: 'text',
      text: 'An electronic device (rectifier, switch-mode power supply, drive) does not draw a sinusoidal current: it takes current in pulses, at the top of the voltage wave. This distorted current can be broken down into a sum of sine waves: the 50 Hz fundamental, plus harmonics at 150 Hz (order 3), 250 Hz (order 5), 350 Hz (order 7)… The distortion factor THD measures their weight relative to the fundamental.',
    },
    {
      type: 'formula',
      text: 'THD_i = \\frac{\\sqrt{I_2^{2} + I_3^{2} + I_5^{2} + …}}{I_1}   ;   I_{rms} = I_1 × \\sqrt{1 + THD_i^{2}}',
    },
    {
      type: 'table',
      headers: ['Source', 'Dominant orders', 'Typical THD_i'],
      rows: [
        ['Computers, LEDs, chargers (single-phase)', '3, 5, 7, 9', '80 to 120 %'],
        ['Six-pulse three-phase drive, no choke', '5, 7, 11, 13', '80 to 100 %'],
        ['Drive with DC choke', '5, 7', '35 to 45 %'],
        ['12-pulse or “low harmonic” drive', '11, 13 / low', '5 to 12 %'],
        ['Soft starter (steady state, bypassed)', '—', '≈ 0'],
      ],
    },

    { type: 'heading', text: '2 · A neutral carrying more than the phases' },
    {
      type: 'text',
      text: 'The fundamentals of the three phases are 120° apart: in the neutral they cancel if the loads are balanced. But the third harmonic of a phase is shifted by 3 × 120° = 360°, in other words not at all: the three third harmonics are in phase and add up in the neutral. The same goes for orders 9, 15… (multiples of 3).',
    },
    {
      type: 'calc',
      title: 'Neutral of the office board (I_{phase} = 40 A, 40 % third harmonic)',
      steps: [
        { label: 'Third harmonic of each phase', formula: 'I_3 = 0.40 × 40 = 16 A' },
        { label: 'The three add up in the neutral', formula: 'I_N = 3 × I_3 = 3 × 16 = 48 A > 40 A' },
        { label: 'IEC 60364-5-52, Annex E: between 33 and 45 %, size on the neutral current, factor 0.86', formula: 'I_{Z,required} = \\frac{48}{0.86} ≈ 56 A' },
      ],
      result: 'The board cable must carry 56 A, not 40 A: 4 × 10 mm² instead of 4 × 6 mm²',
    },
    {
      type: 'table',
      headers: ['Third-harmonic content (IEC 60364-5-52, Annex E)', 'Size chosen on', 'Factor'],
      rows: [
        ['0 to 15 %', 'phase current', '1.0'],
        ['15 to 33 %', 'phase current', '0.86'],
        ['33 to 45 %', 'neutral current', '0.86'],
        ['above 45 %', 'neutral current', '1.0'],
      ],
    },
    {
      type: 'note',
      text: 'In practice: in commercial buildings (offices, IT rooms), the neutral is never reduced, and 4-pole breakers with a “half-rated” neutral are avoided. An overloaded neutral heats up without any phase protection noticing: use a breaker with neutral protection (“4P 4D”, or 100 % protected neutral).',
    },

    { type: 'heading', text: '3 · Capacitors and resonance' },
    { type: 'illustration', name: 'factory-sld', props: { highlight: 'capacitor' }, caption: 'The 100 kvar bank at the main board: capacitors attract harmonic currents' },
    {
      type: 'text',
      text: 'A capacitor’s impedance falls as frequency rises: it “sucks in” harmonics. Together with the transformer inductance, it forms a resonant circuit. If the resonant frequency falls near an order present on the network, harmonic currents and voltages are amplified: the capacitors overheat and fuses blow. That is what Paul saw.',
    },
    {
      type: 'calc',
      title: 'Where does the 100 kvar bank resonate?',
      steps: [
        { label: 'Short-circuit power at the main board', formula: 'S_{sc} = \\sqrt{3} × 400 × 14 400 ≈ 9.98 MVA' },
        { label: 'Resonant order of a standard bank', formula: 'h_r = \\sqrt{\\frac{S_{sc}}{Q_c}} = \\sqrt{\\frac{9 980}{100}} ≈ 10' },
        { label: 'Orders emitted by the drives: 5, 7, 11, 13', formula: 'h_r ≈ 10: right next to order 11  ✗' },
        { label: 'Detuned bank, tuning factor p = 7 %', formula: 'f_r = \\frac{50}{\\sqrt{p}} = \\frac{50}{\\sqrt{0.07}} ≈ 189 Hz  (order 3.8)' },
      ],
      result: 'Tuned to 189 Hz, below order 5 (250 Hz), the bank can no longer resonate with the drives’ harmonics',
    },
    {
      type: 'text',
      text: 'That is why Awa had specified a detuned bank when correcting the power factor. During the measurements she finds that the supplier delivered a standard bank “for the time being”. The blown fuses are the warning sign: the bank is replaced by the specified model.',
    },

    { type: 'heading', text: '4 · Limits and remedies' },
    {
      type: 'calc',
      title: 'Distortion allowed at the point of common coupling (IEEE 519)',
      steps: [
        { label: 'Ratio of short-circuit current to maximum load current', formula: '\\frac{I_{sc}}{I_L} = \\frac{14 400}{577} ≈ 25' },
        { label: 'Class 20 to 50 of the IEEE 519 table', formula: 'TDD ≤ 8 %' },
        { label: 'Future line: 100 kW of drives with DC chokes, THD_i 40 %', formula: 'I_h ≈ 0.40 × 160 = 64 A   ;   TDD ≈ \\frac{64}{577} ≈ 11 % > 8 %  ✗' },
      ],
      result: 'The future line’s harmonics will need treatment: target TDD < 8 %',
    },
    {
      type: 'table',
      headers: ['Remedy', 'Effect', 'Relative cost'],
      rows: [
        ['3 % line reactor or DC choke', 'THD_i from 80 % to 35–45 %', 'low'],
        ['12- or 18-pulse drives', 'THD_i 5 to 12 %', 'medium to high'],
        ['Tuned passive filter (order 5)', 'absorbs one order; risk of overcompensation', 'medium'],
        ['Active filter', 'injects the inverse of the measured harmonics; THD_i < 5 %', 'high, but centralised'],
        ['“Low harmonic” drives (active front end)', 'THD_i < 5 %, at the source', 'high'],
      ],
    },
    {
      type: 'decision',
      title: 'Harmonic treatment',
      choice: 'Drives with DC chokes required in the line specification, and a 60 A active filter at the main board',
      reasons: [
        'The DC choke halves THD_i at the source for a small extra cost.',
        'The active filter treats all drives, present and future, and adapts as production changes.',
        'With 64 A of harmonics to compensate, a 60 A filter brings TDD down to about 2 to 3 %.',
      ],
      rejected: 'A passive filter on order 5: cheaper, but it interacts with the capacitor bank and becomes useless if the line changes drives.',
    },

    { type: 'heading', text: '5 · What the standards say' },
    {
      type: 'norms',
      title: 'Sizing the neutral',
      rows: [
        { norm: 'IEC 60364-5-52 (Annex E)', rule: 'Reduction factors by third-harmonic content; above 33 %, size chosen on the neutral current.', result: '56 A required' },
        { norm: 'NF C 15-100', rule: 'Adopts Annex E; reduced neutral forbidden if third-harmonic content exceeds 15 %.', result: 'full-size neutral' },
        { norm: 'BS 7671 (523.6)', rule: 'Neutral counted as a loaded conductor when third-harmonic content exceeds 15 %; Appendix 4 for the factors.', result: 'same result' },
        { norm: 'NEC 310.15(E)', rule: 'In a 3-phase 4-wire system, the neutral counts as current-carrying if the major part of the load is non-linear.', result: '4 current-carrying conductors' },
      ],
    },
    {
      type: 'norms',
      title: 'Harmonic limits',
      rows: [
        { norm: 'IEC 61000-3-2 / 3-12', rule: 'Maximum emission of equipment connected to the public network (≤ 16 A, then 16 to 75 A).', result: 'to be required from suppliers' },
        { norm: 'IEC 61000-2-4', rule: 'Compatibility levels in industrial plants: THD_u ≤ 8 % in class 2.', result: 'measured THD_u: 4.5 %' },
        { norm: 'EN 50160', rule: 'Voltage quality supplied by the utility: THD_u ≤ 8 % for 95 % of the time.', result: 'public network side' },
        { norm: 'IEEE 519-2022', rule: 'TDD limits at the point of coupling according to I_{sc}/I_L; THD_u ≤ 8 % up to 1 kV.', result: 'TDD ≤ 8 % at Tropica' },
      ],
    },
    {
      type: 'regional',
      text: 'West African networks are often “weak” (modest short-circuit power, long MV lines): the same amount of harmonics distorts the voltage more than in Europe. Gensets are even more sensitive: on a genset, a drive without a choke can push THD_u above 10 % and upset the voltage regulator. Ask for the drives’ harmonic spectrum in the bids, and check behaviour on the genset during commissioning.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'Electronics draw a distorted current: fundamental + harmonics; THD measures it.',
        'Multiples of 3 add up in the neutral: I_N can exceed the phase current.',
        'Above 33 % third harmonic, size the cable on the neutral current (IEC 60364-5-52, Annex E).',
        'A standard capacitor bank can resonate: h_r = \\sqrt{S_{sc}/Q_c}; detune it with reactors (p = 7 % → 189 Hz).',
        'Limits: THD_u ≤ 8 % (IEC 61000-2-4, EN 50160); TDD according to I_{sc}/I_L (IEEE 519).',
        'Remedies: chokes, multi-pulse or active-front-end drives, passive or active filters.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'An IT board carries 60 A per phase with 50 % third harmonic. What design current for its cable?',
      solution: ['I_N = 3 × 0.50 × 60 = 90 A.', 'Above 45 %: size on the neutral current, factor 1.0: I_Z ≥ 90 A.'],
    },
    {
      type: 'exercise',
      question: 'The transformer moves to 630 kVA (S_{sc} ≈ 14 MVA at the main board). Where would a standard 150 kvar bank resonate?',
      solution: ['h_r = √(14,000 / 150) ≈ 9.7: still close to orders 7 and 11.', 'The bank must stay detuned (7 % reactors, or 14 % if the third harmonic is significant).'],
    },
    {
      type: 'exercise',
      question: 'A current has a 100 A fundamental and 40 % THD_i. What rms current should the clamp meter show?',
      solution: ['I_{rms} = 100 × √(1 + 0.40²) ≈ 107.7 A.', 'Only a true-rms (TRMS) clamp shows it correctly; an average-responding clamp underestimates this current.'],
    },
  ],
};
