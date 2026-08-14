import { TopicContent } from '../types';

export const overviewContent: TopicContent = {
  title: "Vue d'ensemble du projet",
  subtitle: 'Qui fait quoi, quels dessins, et comment coordonner avec les autres corps de métier',
  blocks: [
    { type: 'heading', text: '🔷 Les 4 parties prenantes' },
    {
      type: 'text',
      text: "Dans tout projet électrique, quatre acteurs principaux interviennent. Le superviseur fait presque toujours partie de la société de consulting, mais peut aussi être indépendant.",
    },
    {
      type: 'image',
      source: require('../../../assets/diagrams/project_parties.png'),
      caption: 'Relation entre le propriétaire et les 3 sociétés impliquées',
      height: 360,
    },
    {
      type: 'table',
      headers: ['Partie', 'Rôle'],
      rows: [
        ['Propriétaire', 'Souhaite construire le projet sur un terrain donné (résidentiel, commercial, hôpital…)'],
        ['Consultant', 'Prépare les plans : architecture, électricité, mécanique (incendie, pompes, CVC), structure'],
        ['Entrepreneur', "Transforme les plans en réalité : construction, gestion d'équipe, budget, achat d'équipements"],
        ['Superviseur', 'Vérifie que le projet est construit comme prévu : sécurité, qualité, respect du planning'],
      ],
    },
    { type: 'subheading', text: 'Postes d\'ingénieur par type de société' },
    {
      type: 'table',
      headers: ['Société', 'Postes'],
      rows: [
        ['Bureau de consulting', "Ingénieurs de conception électrique, ingénieurs de supervision électrique"],
        ["Entreprise de construction", "Ingénieurs d'exécution électrique, ingénieurs bureau technique (achats, shop drawings)"],
      ],
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Les 3 types de dessins électriques' },
    {
      type: 'image',
      source: require('../../../assets/diagrams/drawing_types_flow.png'),
      caption: "De la conception à la réalité : l'évolution d'un dessin électrique",
      height: 300,
    },
    {
      type: 'bullets',
      items: [
        "Dessins conceptuels : préparés par le bureau technique du consultant. Montrent les circuits de puissance et d'éclairage. Chaque dessin utilise des lignes, symboles, dimensions et annotations.",
        "Dessins d'exécution (shop drawings) : préparés par le bureau technique de l'entrepreneur, pour deux raisons — technique (le consultant ne détaille pas tout : distances, sections de câbles…) et contractuelle (aucun travail ne peut démarrer sans dessins d'exécution approuvés).",
        "Dessins tels que construits (as-built) : reflètent ce qui a été réellement construit — peut différer des shop drawings à cause de contraintes de chantier, de modifications demandées, ou pour la remise du dossier final au propriétaire.",
      ],
    },
    {
      type: 'note',
      text: 'En résumé : dessins as-built = dessins d\'exécution, sauf si quelque chose a changé sur le chantier.',
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Coordination avec les autres corps de métier' },
    {
      type: 'table',
      headers: ['Discipline', 'Points de coordination'],
      rows: [
        ['Architecte', 'Réserver les locaux transformateur/groupe électrogène si besoin ; coordination éclairage et implantation des prises selon le mobilier'],
        ['Ingénieur civil', 'Poids des équipements sur la structure — transformateur/groupe électrogène généralement au rez-de-chaussée ; peut être réparti sur plusieurs niveaux dans les tours'],
        ['Ingénieur mécanique', 'Éviter de faire passer les chemins de câbles sur la même ligne que les tuyaux d\'eau, gaines et luminaires ; coordonner avec les systèmes incendie'],
      ],
    },
  ],
};
