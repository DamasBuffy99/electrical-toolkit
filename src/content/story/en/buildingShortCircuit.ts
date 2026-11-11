import { TopicContent } from '../../types';

export const buildingShortCircuitContent: TopicContent = {
  title: 'The short circuit at the main board',
  subtitle: 'Right next to a transformer, a short circuit can drive thousands of amps. A breaker unable to interrupt them can explode. Awa calculates this current to choose devices robust enough, without paying for unnecessary margin.',
  blocks: [
    { type: 'scene', text: 'Month 4 · Design office, checking the main board' },
    { type: 'illustration', name: 'building-riser', props: { highlight: 'shortcircuit' }, caption: 'A short circuit at the main board: the nearby transformer feeds it' },
    {
      type: 'dialogue',
      speaker: 'Fatou Sow',
      role: 'client',
      text: 'The panel builder offers two ranges of breakers: one at 10 kA, the other at 25 kA, much more expensive. Which should I take?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'That kA figure is the breaking capacity: the largest current the breaker can interrupt without being destroyed. It must be higher than the short-circuit current where it is installed. To know that, we calculate it. If I take 25 kA everywhere “to be safe”, you pay for nothing; if I go too low, a fault can blow up the board.',
    },

    { type: 'heading', text: '1 · Where does the short-circuit current come from?' },
    {
      type: 'text',
      text: 'In a bolted short circuit, nothing limits the current any more… except the impedances between the source and the fault: the upstream network, the transformer, the cables. The closer the fault is to the transformer, the larger the current. The main board is the worst place: it sits right against the substation.',
    },
    {
      type: 'text',
      text: 'First, a quick and slightly pessimistic calculation: keep only the transformer. Its short-circuit voltage u_k (4% for this model, on its nameplate) says that 4% of the voltage is enough to drive the rated current through a short circuit.',
    },
    { type: 'formula', text: 'I_{sc} ≈ \\frac{I_n}{u_k} = \\frac{231}{0.04} ≈ 5.8 kA' },

    { type: 'heading', text: '2 · The detailed calculation' },
    {
      type: 'text',
      text: 'Awa refines with the impedance method: add up the resistances (R) and reactances (X) of each element separately, then calculate the total impedance.',
    },
    { type: 'formula', text: 'Z_{tr} = \\frac{U^{2}}{S_n} × u_k = \\frac{400^{2}}{160,000} × 0.04 = 40 mΩ' },
    { type: 'formula', text: 'R_{tr} = \\frac{P_{cu}}{3 × I_n^{2}} = \\frac{2,350}{3 × 231^{2}} ≈ 14.7 mΩ   ;   X_{tr} = \\sqrt{40^{2} − 14.7^{2}} ≈ 37.2 mΩ' },
    {
      type: 'table',
      headers: ['Element', 'R (mΩ)', 'X (mΩ)'],
      rows: [
        ['Upstream MV network (250 MVA)', '≈ 0', '0.6'],
        ['160 kVA transformer', '14.7', '37.2'],
        ['Cables transformer → main board (5 m, 95 mm²)', '1.2', '0.4'],
        ['Total at the main board', '15.9', '38.2'],
      ],
    },
    { type: 'formula', text: 'I_{sc} = \\frac{U}{√3 × \\sqrt{R^{2} + X^{2}}} = \\frac{400}{√3 × \\sqrt{15.9^{2} + 38.2^{2}}} ≈ 5.6 kA' },
    {
      type: 'text',
      text: 'The detailed calculation gives 5.6 kA, close to the quick estimate. Further away, on the 4th-floor landing, the 25 m of riser must be added (R ≈ 16 mΩ, X ≈ 2 mΩ): the short-circuit current falls to about 4.5 kA.',
    },
    { type: 'fiche', id: 'short-circuit', why: 'The full impedance method, with an example over several levels.' },

    { type: 'heading', text: '3 · Choosing the breaking capacities' },
    {
      type: 'table',
      headers: ['Location', 'Calculated I_sc', 'Breaking capacity chosen'],
      rows: [
        ['Main board (250 A main and feeders)', '5.6 kA', '10 kA'],
        ['Landing enclosures', '≈ 4.5 kA', '6 kA'],
        ['Flat boards', 'lower still', '6 kA (standard)'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'The 10 kA range is enough at the main board, with a good margin. The 25 kA range would be money thrown away. However, if one day you replace the transformer with a 400 kVA unit, this calculation must be redone: the short-circuit current will rise, and some breakers will have to change.',
    },
    { type: 'formula', text: 'Rule: I_{cu} (breaking capacity) ≥ I_{sc} (at the point of installation)' },
    {
      type: 'note',
      text: 'The maximum short-circuit current is used to choose the breaking capacity. The minimum short circuit, at the end of the line, serves another purpose: checking that the breaker detects a distant fault and trips fast enough. Both are calculated with the same method.',
    },
    { type: 'fiche', id: 'circuit-breaker', why: 'Breaking capacity I_cu, MCB, MCCB, ACB and their ranges.' },
    {
      type: 'regional',
      text: 'The utility provides the short-circuit power of its MV network at the connection point (often between 100 and 500 MVA in urban areas): ask for it in writing. On the market, beware of unbranded breakers whose printed breaking capacity has never been tested: at the main board, that is precisely the figure that counts.',
    },

    { type: 'heading', text: 'Key points' },
    {
      type: 'bullets',
      items: [
        'The short-circuit current is highest near the transformer and decreases with cable length.',
        'Quick estimate: I_sc ≈ I_n / u_k; detailed calculation: add up R and X of each element.',
        'Every breaker must have a breaking capacity above the short-circuit current at its location.',
        'Changing the transformer means redoing the calculation.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'Quickly estimate the short-circuit current at the main board if a 400 kVA transformer with u_k = 4% is installed.',
      solution: ['I_n = 400,000 / (√3 × 400) ≈ 577 A.', 'I_sc ≈ 577 / 0.04 ≈ 14.4 kA: the 10 kA breakers at the main board would no longer be enough.'],
    },
    {
      type: 'exercise',
      question: 'Why is the short-circuit current lower on the 4th floor than at the main board?',
      solution: [
        'The fault current must also flow through the 25 m of riser, whose resistance adds to the transformer’s.',
        'Larger impedance, smaller current: about 4.5 kA on the landing against 5.6 kA at the main board.',
      ],
    },
  ],
};
