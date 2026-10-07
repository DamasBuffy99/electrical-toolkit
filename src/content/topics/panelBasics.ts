import { TopicContent } from '../types';

export const panelBasicsContent: TopicContent = {
  title: 'Tableaux électriques : repères',
  subtitle: 'Transformateurs de courant et indices de protection IP',
  blocks: [
    {
      type: 'text',
      text: "Les circuits, protections et câbles sont dimensionnés : il reste à les loger dans des tableaux adaptés à leur emplacement.",
    },
    { type: 'divider' },

    { type: 'heading', text: 'Transformateur de courant (CT)' },
    {
      type: 'text',
      text: "Le CT (current transformer) sert à mesurer le courant : il abaisse le courant du circuit à une valeur que les appareils de mesure peuvent lire.",
    },
    { type: 'divider' },

    { type: 'heading', text: 'Indice de protection (IP) selon le tableau' },
    {
      type: 'table',
      headers: ['Tableau', 'Indice IP'],
      rows: [
        ['Tableau extérieur (outdoor panel)', 'IP65'],
        ['Tableau général (Main Distribution Board)', 'IP54'],
        ['Tableau divisionnaire (Sub Distribution Board)', 'IP44'],
      ],
    },
    {
      type: 'note',
      text: "💡 Le 1er chiffre de l'IP indique la protection contre les corps solides (poussière), le 2e contre l'eau. Plus les chiffres sont élevés, plus le tableau est protégé — d'où IP65 à l'extérieur.",
    },
  ],
};
