import { TopicContent } from '../../types';

export const voltageDropContent: TopicContent = {
  title: 'Voltage drop',
  subtitle: 'Checking that the chosen section keeps enough voltage at the end of the cable',
  blocks: [
    {
      type: 'text',
      text: "A cable that carries the current can still be too long: its resistance makes the voltage drop between the source and the load. So we check the voltage drop with the cross-section (CSA) already chosen.",
    },
    {
      type: 'bullets',
      items: [
        '1 → Start from the CSA of the cable from source to load',
        '2 → Read the voltage drop for this CSA in the catalogue, in mV/A/m',
        '3 → Calculate the rated current I_rated',
        '4 → Calculate the voltage drop VD, then the percentage %VD',
      ],
    },
    { type: 'divider' },

    { type: 'heading', text: '1 · Catalogue value in mV/A/m' },
    {
      type: 'text',
      text: 'Cable catalogues give, for each section, the voltage drop in millivolts per amp per metre (mV/A/m).',
    },
    { type: 'divider' },

    { type: 'heading', text: '2 · Calculate the voltage drop' },
    { type: 'formula', text: 'VD = (catalogue value in mV/A/m) × 10⁻³ × I_rated × Length' },
    { type: 'text', text: 'I_rated in A, length in m: VD comes out in volts.' },
    { type: 'formula', text: '%VD = VD / V × 100' },
    { type: 'text', text: 'V = 380 V three-phase, 220 V single-phase.' },
    {
      type: 'formula',
      text: 'Example (illustrative catalogue value 2.4 mV/A/m): I = 50 A, L = 60 m → VD = 2.4 × 10⁻³ × 50 × 60 = 7.2 V → %VD = 7.2 / 380 × 100 = 1.9%',
    },
    { type: 'note', text: "📌 Compare the percentage with the maximum allowed voltage drop (code or project specification)." },
    { type: 'divider' },

    { type: 'heading', text: '3 · Solutions when the voltage drop is too high' },
    { type: 'text', text: "The voltage drop comes from the cable's resistance:" },
    { type: 'formula', text: 'R = ρ × L / A' },
    { type: 'text', text: 'To lower R, reduce the length L or increase the section A. Hence the solutions:' },
    {
      type: 'bullets',
      items: ['Increase the cable cross-section (CSA)', 'Reduce the distance from the supply source to the load', 'Power factor correction'],
    },
  ],
};
