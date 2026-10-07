import { TopicContent } from '../types';

export const projectPartiesContent: TopicContent = {
  title: 'Les acteurs du projet',
  subtitle: "Qui fait quoi dans un projet de distribution électrique — et où travaille l'ingénieur électricien",
  blocks: [
    {
      type: 'text',
      text: "Avant de tracer le moindre circuit, il faut savoir pour qui on travaille et avec qui. Tout projet de construction réunit quatre acteurs : le propriétaire, le consultant, l'entrepreneur et le superviseur.",
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
      text: "Il transforme l'idée du propriétaire en plans. Chaque discipline produit les siens :",
    },
    {
      type: 'bullets',
      items: [
        'Architecture',
        'Électricité',
        'Mécanique : incendie, pompes, CVC (climatisation, ventilation)',
        'Structure (génie civil)',
      ],
    },
    { type: 'illustration', name: 'consultant-office', caption: 'Le bureau d’études produit les plans de toutes les disciplines' },
    { type: 'image', source: require('../../../assets/reference/project_lifecycle_2_vision.jpg'), caption: 'La vision du propriétaire prend forme' },

    { type: 'heading', text: "3 · L'entrepreneur" },
    {
      type: 'text',
      text: 'Il transforme les plans en réalité : il construit, gère les équipes, tient le budget et achète les équipements.',
    },
    { type: 'illustration', name: 'contractor-site', caption: 'Le chantier, piloté par l’entrepreneur' },
    { type: 'image', source: require('../../../assets/reference/project_lifecycle_3_construction.jpg'), caption: 'Sur le chantier' },

    { type: 'heading', text: '4 · Le superviseur' },
    {
      type: 'text',
      text: "Il vérifie que le projet est construit comme prévu : sécurité, qualité, respect du planning. Il fait presque toujours partie du bureau d'études, mais peut aussi être une société indépendante.",
    },
    { type: 'illustration', name: 'supervisor-site', caption: 'Sécurité, qualité, planning' },
    { type: 'image', source: require('../../../assets/reference/project_lifecycle_4_supervision.jpg'), caption: 'Contrôle sur site' },

    { type: 'heading', text: "Où travaille l'ingénieur électricien ?" },
    {
      type: 'text',
      text: "Selon la société qui l'emploie, l'ingénieur électricien occupe l'un de ces quatre postes :",
    },
    {
      type: 'table',
      headers: ['Société', 'Postes'],
      rows: [
        ["Bureau d'études (consultant)", 'Ingénieur de conception · Ingénieur de supervision'],
        ['Entreprise (entrepreneur)', "Ingénieur d'exécution · Ingénieur bureau technique"],
      ],
    },
    { type: 'illustration', name: 'engineer-roles', caption: 'Quatre postes, deux types de société' },

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

    { type: 'heading', text: 'Ingénieur bureau technique' },
    {
      type: 'text',
      text: "Toujours côté entreprise, il prépare les dessins d'exécution (shop drawings) à faire approuver et gère les achats de matériel.",
    },
    { type: 'illustration', name: 'eng-technical-office', caption: "Shop drawings et achats" },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Le propriétaire finance et mandate.',
        'Le consultant conçoit les plans.',
        "L'entrepreneur construit.",
        'Le superviseur contrôle.',
      ],
    },
    {
      type: 'note',
      text: "💡 L'ingénieur électricien peut se trouver des deux côtés : conception ou supervision chez le consultant, exécution ou bureau technique chez l'entrepreneur.",
    },
    { type: 'illustration', name: 'org-chart', caption: 'Les quatre acteurs, en un coup d’œil' },
  ],
};
