import { TopicContent } from '../../types';

export const panelBasicsContent: TopicContent = {
  title: 'Panel boards: key points',
  subtitle: 'Current transformers and IP protection ratings',
  blocks: [
    {
      type: 'text',
      text: 'Circuits, protection and cables are sized: what remains is housing them in panels suited to their location.',
    },
    { type: 'divider' },

    { type: 'heading', text: 'Current transformer (CT)' },
    {
      type: 'text',
      text: 'The CT (current transformer) is used to measure current: it steps the circuit current down to a value that meters can read.',
    },
    { type: 'divider' },

    { type: 'heading', text: 'IP rating by panel' },
    {
      type: 'table',
      headers: ['Panel', 'IP rating'],
      rows: [
        ['Outdoor panel', 'IP65'],
        ['Main Distribution Board (MDB)', 'IP54'],
        ['Sub Distribution Board (SDB)', 'IP44'],
      ],
    },
    {
      type: 'note',
      text: '💡 The 1st IP digit is protection against solids (dust), the 2nd against water. The higher the digits, the better protected the panel — hence IP65 outdoors.',
    },
  ],
};
