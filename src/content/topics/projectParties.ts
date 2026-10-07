import { TopicContent } from '../types';

export const projectPartiesContent: TopicContent = {
  title: 'Les acteurs du projet',
  subtitle: "Qui fait quoi dans un projet de distribution électrique — et où travaille l'ingénieur électricien",
  blocks: [
    {
      type: 'text',
      text: "Avant de tracer le moindre circuit, il faut savoir pour qui on travaille et avec qui. Un projet de distribution électrique réunit quatre acteurs principaux : le propriétaire, le consultant, l'entrepreneur et le superviseur.",
    },
    { type: 'illustration', name: 'org-chart', caption: 'Le propriétaire et les trois sociétés qu’il mandate' },

    { type: 'heading', text: '1 · Le propriétaire' },
    {
      type: 'text',
      text: "Tout part de lui : il possède un terrain et veut y construire un projet — logement, bureaux, commerce, hôpital… Il finance le projet et mandate les autres acteurs.",
    },
    { type: 'illustration', name: 'owner-land', caption: 'Un terrain, et une idée de projet' },
    { type: 'image', source: require('../../../assets/reference/project_lifecycle_1_land.jpg'), caption: 'Le terrain avant le projet' },

    { type: 'heading', text: '2 · Le consultant (bureau d’études)' },
    {
      type: 'text',
      text: "Il prépare toute la conception demandée par le propriétaire :",
    },
    {
      type: 'bullets',
      items: [
        'Les dessins AutoCAD (plans)',
        'La conception électrique',
        'La conception mécanique',
        'Le système CVC (HVAC : climatisation, ventilation)',
        'La conception de la structure',
      ],
    },
    { type: 'illustration', name: 'consultant-office', caption: 'Le bureau d’études produit les plans de toutes les disciplines' },
    { type: 'image', source: require('../../../assets/reference/project_lifecycle_2_vision.jpg'), caption: 'La vision du propriétaire prend forme' },

    { type: 'heading', text: "3 · L'entrepreneur" },
    {
      type: 'text',
      text: "Il est responsable de la construction physique et de l'exécution du projet : il transforme les plans en un projet réel. C'est aussi lui qui achète les équipements nécessaires — transformateurs, câbles, disjoncteurs, etc.",
    },
    { type: 'illustration', name: 'contractor-site', caption: 'Le chantier, piloté par l’entrepreneur' },
    { type: 'image', source: require('../../../assets/reference/project_lifecycle_3_construction.jpg'), caption: 'Sur le chantier' },

    { type: 'heading', text: '4 · Le superviseur' },
    {
      type: 'text',
      text: "Il surveille la construction et contrôle les activités sur le chantier. Il encadre les équipes, veille au respect des règles d'hygiène et de sécurité, et s'assure que les travaux sont terminés dans les délais.",
    },
    { type: 'illustration', name: 'supervisor-site', caption: 'Sécurité, qualité, planning' },
    { type: 'image', source: require('../../../assets/reference/project_lifecycle_4_supervision.jpg'), caption: 'Contrôle sur site' },

    { type: 'heading', text: 'Dans quel ordre le propriétaire fait-il appel à eux ?' },
    {
      type: 'bullets',
      items: [
        '1 → Il va voir le consultant, qui prépare les plans.',
        "2 → Il va voir un entrepreneur pour transformer ces plans en réalité (convertir les dessins en projet réel).",
        "3 → Il va voir une société de supervision pour s'assurer que le projet est construit comme prévu.",
      ],
    },
    {
      type: 'note',
      text: "💡 La société de supervision fait généralement partie du bureau d'études (consultant).",
    },
    { type: 'illustration', name: 'org-chart', caption: 'Consultant → entrepreneur → superviseur' },

    { type: 'heading', text: "Où travaille l'ingénieur électricien ?" },
    {
      type: 'text',
      text: "Selon la société qui l'emploie, l'ingénieur électricien occupe l'un de ces cinq postes :",
    },
    {
      type: 'table',
      headers: ['Société', 'Postes'],
      rows: [
        ["Bureau d'études (consultant)", 'Ingénieur de conception · Ingénieur de supervision'],
        ['Entreprise (entrepreneur)', "Ingénieur d'exécution · Ingénieur bureau technique (achats) · Ingénieur shop drawings"],
      ],
    },
    { type: 'illustration', name: 'engineer-roles', caption: 'Deux postes chez le consultant, trois chez l’entrepreneur' },

    { type: 'heading', text: 'Ingénieur de conception' },
    {
      type: 'text',
      text: "Au bureau d'études, il conçoit l'installation — estimation de charge, éclairage, prises, tableaux, protections, câbles — et produit les dessins conceptuels. C'est le métier que suit ce cours, étape par étape.",
    },
    { type: 'illustration', name: 'eng-design', caption: 'Au bureau, sur AutoCAD et DIALux' },
    { type: 'image', source: require('../../../assets/reference/project_lifecycle_5_electrical_office.jpg'), caption: "L'ingénieur de conception au travail" },

    { type: 'heading', text: 'Ingénieur de supervision' },
    {
      type: 'text',
      text: "Également employé par le bureau d'études, il se rend sur le chantier pour vérifier que l'installation réalisée correspond aux plans approuvés.",
    },
    { type: 'illustration', name: 'eng-supervision', caption: 'Contrôle de conformité sur le chantier' },

    { type: 'heading', text: "Ingénieur d'exécution" },
    {
      type: 'text',
      text: "Côté entreprise, il réalise les travaux sur site : il organise les équipes d'électriciens et suit la pose des chemins de câbles, des câbles et des équipements.",
    },
    { type: 'illustration', name: 'eng-execution', caption: 'Sur le chantier, avec les équipes' },

    { type: 'heading', text: 'Ingénieur bureau technique (achats)' },
    {
      type: 'text',
      text: "Toujours côté entreprise, l'ingénieur du bureau technique s'occupe par exemple des achats (procurement) : il contacte les fournisseurs pour obtenir et commander le matériel du projet.",
    },
    { type: 'illustration', name: 'eng-technical-office', caption: 'Contact des fournisseurs et achats' },

    { type: 'heading', text: 'Ingénieur shop drawings' },
    {
      type: 'text',
      text: "Il prépare les dessins d'exécution (shop drawings) : il reprend les dessins conceptuels et y ajoute les informations nécessaires au chantier — distances, nombre de conducteurs, sections, caractéristiques… Ces dessins sont ensuite soumis pour approbation.",
    },
    { type: 'illustration', name: 'eng-shop-drawing', caption: "Les dessins d'exécution, prêts à être approuvés" },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Le propriétaire finance et mandate.',
        'Le consultant conçoit les plans.',
        "L'entrepreneur construit et achète les équipements.",
        'Le superviseur contrôle la sécurité, la qualité et les délais.',
      ],
    },
    {
      type: 'note',
      text: "💡 L'ingénieur électricien peut se trouver des deux côtés : conception ou supervision chez le consultant ; exécution, bureau technique (achats) ou shop drawings chez l'entrepreneur.",
    },
    { type: 'illustration', name: 'engineer-roles', caption: 'Les cinq postes, en un coup d’œil' },
  ],
};
