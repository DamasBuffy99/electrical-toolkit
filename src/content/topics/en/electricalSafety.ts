import { TopicContent } from '../../types';
import { SLIDES } from '../../slides';

export const electricalSafetyContent: TopicContent = {
  title: 'Electrical hazards and earthing systems',
  subtitle: 'What current does to the human body, and how an installation protects people',
  blocks: [
    {
      type: 'text',
      text: 'Earthing protects people against indirect electric shocks and lets the protective devices trip on a fault. Before sizing it, we need to understand what current does to the human body.',
    },
    { type: 'image', source: SLIDES['earth-12'], caption: 'Without earthing the fault current flows through the person; with earthing it flows through the conductor' },

    { type: 'heading', text: '1 · Effect of current on the human body' },
    { type: 'text', text: 'Four factors set how severe a shock is: the current amplitude, its duration, its frequency and its path through the body.' },
    {
      type: 'table',
      headers: ['AC current', 'Effect'],
      rows: [
        ['1 mA', 'Threshold of sensation'],
        ['5 mA', 'Maximum still harmless'],
        ['10 – 20 mA', "Loss of muscle control, can't let go"],
        ['50 mA', 'Difficulty breathing'],
        ['100 – 300 mA', 'Breathing stops, often fatal'],
        ['1,000 – 6,000 mA', 'Internal organs and tissues burn'],
      ],
    },
    {
      type: 'text',
      text: 'Duration matters as much as amplitude: above 100 mA for more than 20 ms, a shock can be fatal. The current a person can withstand for a time t is:',
    },
    { type: 'formula', text: 'I = 116 mA / √t   (e.g. t = 10 s → I = 36.68 mA)' },
    {
      type: 'bullets',
      items: [
        'Frequency: 300 to 500 mA of DC is needed for the effect of 30 mA of AC; low-frequency AC is the most dangerous.',
        'Path: hand to hand and left hand to feet are the worst cases, because the current crosses the heart.',
      ],
    },
    { type: 'image', source: SLIDES['earth-4'], caption: 'Effects of AC current on the body' },
    { type: 'image', source: SLIDES['earth-5'], caption: 'Effect versus duration' },
    { type: 'image', source: SLIDES['earth-6'], caption: 'Withstand current versus time' },

    { type: 'heading', text: '2 · Direct and indirect contact' },
    {
      type: 'table',
      headers: ['Hazard', 'Cause', 'Protection'],
      rows: [
        ['Direct contact', 'Touching a live part', 'Insulation of live parts · barriers or enclosures · residual current device (RCD)'],
        ['Indirect contact', 'Insulation failure: a metal frame becomes live', 'Earthing'],
      ],
    },
    {
      type: 'text',
      text: 'Earthing means connecting the non-current-carrying metal parts (frames, enclosures) or the supply neutral to the ground through a low-resistance conductor, to discharge the fault current immediately.',
    },
    { type: 'image', source: SLIDES['earth-9'], caption: 'Direct contact (left) and indirect contact through an insulation failure (right)' },

    { type: 'heading', text: '3 · Earthing systems: TT, TN, IT' },
    {
      type: 'bullets',
      items: [
        '1st letter = the source: T = neutral connected to earth · I = isolated from earth.',
        '2nd letter = the installation frames: T = connected to a local earth · N = connected to the neutral.',
      ],
    },
    {
      type: 'table',
      headers: ['System', 'Principle', 'Key points'],
      rows: [
        ['TT', 'Earthed neutral, frames on a local earth', 'Simplest to design and install · RCD required'],
        ['TN (TN-C, TN-S)', 'Frames connected to the neutral (common PEN in TN-C, separate PE in TN-S)', 'The circuit breaker clears the fault · no RCD needed unless cables are very long'],
        ['IT', 'Isolated or impedance-earthed neutral', 'Best continuity of service (hospitals) · insulation monitoring device (IMD) · expensive'],
      ],
    },
    { type: 'image', source: SLIDES['earth-14'], caption: 'TT system' },
    { type: 'image', source: SLIDES['earth-15'], caption: 'TN-C and TN-S systems' },
    { type: 'image', source: SLIDES['earth-16'], caption: 'IT system with insulation monitoring' },

  ],
};
