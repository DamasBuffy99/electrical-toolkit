import { TopicContent } from '../types';

export const drawingsCoordinationContent: TopicContent = {
  title: 'Dessins électriques & coordination',
  subtitle: 'Les trois versions d’un plan électrique, et comment travailler avec les autres métiers',
  blocks: [
    {
      type: 'text',
      text: "Les acteurs du projet communiquent par des dessins. Un même plan électrique évolue en trois versions au fil du projet : conceptuel, d'exécution, puis tel que construit.",
    },
    { type: 'illustration', name: 'drawings-evolution', caption: 'Un plan, trois versions' },

    { type: 'heading', text: '1 · Dessins conceptuels' },
    {
      type: 'text',
      text: "Préparés par l'ingénieur du bureau technique du consultant (bureau d'études), ils montrent les circuits de puissance et d'éclairage du projet architectural. Ils se composent de lignes, de symboles, de dimensions et d'annotations.",
    },
    { type: 'illustration', name: 'drawing-sheet', props: { variant: 'conceptual' }, caption: 'Luminaires, prises et circuits sur le plan conceptuel' },

    { type: 'heading', text: "2 · Dessins d'exécution (shop drawings)" },
    {
      type: 'text',
      text: "Préparés par l'ingénieur du bureau technique de l'entreprise (entrepreneur), ils reprennent les dessins conceptuels et y ajoutent des informations supplémentaires :",
    },
    {
      type: 'bullets',
      items: ['Les distances', 'Le nombre de conducteurs des câbles (cores)', 'Les sections', 'Les caractéristiques des équipements…'],
    },
    {
      type: 'note',
      text: "📌 Aucun travail ne démarre sans dessins d'exécution approuvés : c'est aussi un document contractuel.",
    },
    { type: 'illustration', name: 'drawing-sheet', props: { variant: 'shop' }, caption: 'Cotes, sections de câbles et visa d’approbation' },

    { type: 'heading', text: '3 · Dessins as-built (tels que construits)' },
    {
      type: 'text',
      text: "Préparés par l'entrepreneur, ils reflètent ce qui a réellement été construit. Il arrive que les conditions du chantier obligent l'ingénieur d'exécution à réaliser les travaux légèrement différemment des dessins d'exécution, pour plusieurs raisons :",
    },
    {
      type: 'bullets',
      items: [
        'Pour faciliter la mise en œuvre des travaux',
        'Une modification demandée par le propriétaire ou le consultant lors de la réception des travaux',
        "Une modification de l'ingénieur civil (structure)",
      ],
    },
    { type: 'note', text: "💡 En résumé : dessins as-built = dessins d'exécution, sauf si quelque chose a changé sur le chantier." },
    { type: 'illustration', name: 'drawing-sheet', props: { variant: 'asbuilt' }, caption: 'Les modifications de chantier sont entourées en rouge' },

    { type: 'heading', text: "Coordination avec l'architecte" },
    {
      type: 'text',
      text: "Réserver les locaux du transformateur et du groupe électrogène si nécessaire, et coordonner l'implantation de l'éclairage et des prises avec le mobilier.",
    },
    { type: 'illustration', name: 'coordination', props: { variant: 'architect' }, caption: 'Les meubles et les locaux techniques guident le plan électrique' },

    { type: 'heading', text: "Coordination avec l'ingénieur civil" },
    {
      type: 'text',
      text: 'Le poids des équipements pèse sur la structure. Transformateurs et groupes électrogènes sont généralement placés au rez-de-chaussée ; dans les tours, ils peuvent être répartis sur plusieurs niveaux.',
    },
    { type: 'illustration', name: 'coordination', props: { variant: 'civil' }, caption: 'Les charges lourdes au plus près des fondations' },

    { type: 'heading', text: "Coordination avec l'ingénieur mécanique" },
    {
      type: 'text',
      text: "Ne pas faire passer les chemins de câbles sur la même ligne que les tuyaux d'eau, les gaines et les luminaires. Coordonner aussi avec les systèmes de lutte contre l'incendie.",
    },
    { type: 'illustration', name: 'coordination', props: { variant: 'mechanical' }, caption: 'Dans le faux-plafond, chaque réseau a sa place' },
  ],
};
