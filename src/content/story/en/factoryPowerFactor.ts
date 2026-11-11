import { TopicContent } from '../../types';

export const factoryPowerFactorContent: TopicContent = {
  title: 'Power factor and the bill',
  subtitle: 'On Tropica’s bill, a “reactive energy” line costs a small fortune every month. Awa explains where it comes from and how a capacitor bank makes it disappear.',
  blocks: [
    { type: 'scene', text: 'Month 6 · Plant in service, Ibrahim’s office' },
    {
      type: 'dialogue',
      speaker: 'Ibrahim Traoré',
      role: 'client',
      text: 'Look at this bill: “reactive energy excess”. I’m paying for energy I don’t use?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'You use it, but it does no work. Your motors need a magnetising current to create their rotating field: it goes back and forth between the network and the motors without producing anything. Yet the utility has to carry it through its cables and transformers. Above a certain threshold, it bills you for it.',
    },
    { type: 'illustration', name: 'power-triangle', caption: 'Active power P (work), reactive Q (magnetising), apparent S (what the cable carries)' },

    { type: 'heading', text: '1 · The diagnosis' },
    {
      type: 'text',
      text: 'With a power analyser connected to the main board for a week, Awa measures the peak: 205 kW at a power factor of 0.80. She deduces the reactive power.',
    },
    { type: 'formula', text: 'cos φ = 0.80  →  tan φ = 0.75   ;   Q = P × tan φ = 205 × 0.75 ≈ 154 kvar' },
    { type: 'formula', text: 'S = \\sqrt{P^{2} + Q^{2}} = \\sqrt{205^{2} + 154^{2}} ≈ 256 kVA' },
    {
      type: 'text',
      text: 'The transformer and cables carry 256 kVA for only 205 kW of useful work: a fifth of the capacity is used to circulate magnetising current.',
    },

    { type: 'heading', text: '2 · The solution: produce the reactive power on site' },
    {
      type: 'text',
      text: 'A capacitor does the opposite of a motor: it supplies reactive current instead of consuming it. With a capacitor bank at the main board, the reactive current goes back and forth between the capacitors and the motors, inside the plant, instead of flowing back to the network.',
    },
    { type: 'illustration', name: 'factory-sld', props: { highlight: 'capacitor' }, caption: 'The capacitor bank, connected to the main board' },
    { type: 'formula', text: 'Target cos φ = 0.95  →  tan φ = 0.33   ;   Q_c = P × (tan φ_1 − tan φ_2) = 205 × (0.75 − 0.33) ≈ 86 kvar' },
    {
      type: 'text',
      text: 'Awa chooses an automatic 100 kvar bank in 5 steps of 20 kvar: a controller adds or removes steps depending on which machines are running. A fixed bank would overcompensate in the evening, when only the lighting and cold room are on.',
    },
    {
      type: 'dialogue',
      speaker: 'Paul Ndiaye (maintenance)',
      role: 'team',
      text: 'We have drives and a soft starter. Isn’t that a problem with capacitors?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Good question. Drives produce harmonics, currents at 150, 250 Hz… Capacitors attract them and can resonate, then overheat and fail. So I specify a bank with detuning reactors. It costs a little more, but it lasts.',
    },

    { type: 'heading', text: '3 · What Ibrahim gains' },
    {
      type: 'table',
      headers: ['', 'Before (cos φ 0.80)', 'After (cos φ 0.95)'],
      rows: [
        ['Reactive power at peak', '154 kvar', '205 × 0.33 ≈ 68 kvar'],
        ['Apparent power', '256 kVA', '205 / 0.95 ≈ 216 kVA'],
        ['Current at the main board', '≈ 370 A', '≈ 312 A'],
        ['Cable losses (∝ I²)', '100%', '≈ 71%'],
        ['Reactive energy penalty', 'yes, every month', 'eliminated'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Three gains in one: no more penalty, cables and transformer running cooler, and 40 kVA freed on the transformer for your next extension. The bank usually pays for itself in less than two years, often much less.',
    },
    {
      type: 'regional',
      text: 'Industrial (medium-voltage) tariffs bill reactive energy above a threshold, often expressed as tan φ (around 0.4, i.e. cos φ ≈ 0.93) or as a minimum cos φ. Check the exact threshold in the supply contract. In hot, dusty workshops, install the bank in a ventilated room: heat is the enemy of capacitors.',
    },

    { type: 'heading', text: 'Project 3 review' },
    {
      type: 'text',
      text: 'At Tropica, Awa learned to think “motor”: read a nameplate, choose a starting method compatible with the generator, protect each feeder, correct cables for heat, set the protections so a fault stays local, and correct the power factor. Last project: a clinic, where the absolute priority is no longer cost but continuity.',
    },
    {
      type: 'bullets',
      items: [
        'Reactive power does no work but occupies cables and transformer.',
        'Q_c = P × (tan φ_1 − tan φ_2); an automatic stepped bank follows the load.',
        'With drives, use a bank with detuning reactors.',
        'Gains: penalty eliminated, losses reduced, capacity freed.',
      ],
    },
    { type: 'heading', text: 'Exercises' },
    {
      type: 'exercise',
      question: 'What bank rating would raise the power factor from 0.80 to 0.98? Why not aim for 1?',
      solution: [
        'cos φ = 0.98 → tan φ ≈ 0.20; Q_c = 205 × (0.75 − 0.20) ≈ 113 kvar.',
        'Aiming for 1 needs many more capacitors for a tiny gain, and risks overcompensating (leading power factor) when the load drops, which raises the voltage and may also be penalised.',
      ],
    },
    {
      type: 'exercise',
      question: 'By how much do the losses in a cable fall when the current drops from 370 A to 312 A?',
      solution: ['Losses vary as I²: (312 / 370)² ≈ 0.71.', 'They fall by about 29%, without changing anything else.'],
    },
  ],
};
