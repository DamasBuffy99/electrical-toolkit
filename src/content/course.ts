export type CourseLesson = {
  id: string;
  title: string;
  titleEn: string;
  /** Shown at the end of the lesson to explain why the next lesson follows. */
  transition?: string;
  transitionEn?: string;
};

export type CourseSection = {
  id: string;
  icon: string;
  title: string;
  titleEn: string;
  intro: string;
  introEn: string;
  lessons: CourseLesson[];
};

/** The electrical design course, ordered like the engineer's real workflow (follows the Udemy course plan). */
export const COURSE_SECTIONS: CourseSection[] = [
  {
    id: 'overview',
    icon: '🧭',
    title: "Vue d'ensemble d'un projet électrique",
    titleEn: 'Overview of an electrical project',
    intro: 'Qui intervient, quels documents circulent, et dans quel ordre on conçoit.',
    introEn: 'Who is involved, which documents are exchanged, and in what order we design.',
    lessons: [
      {
        id: 'project-parties',
        title: 'Les acteurs du projet',
        titleEn: 'The project parties',
        transition: 'Ces acteurs communiquent à travers des dessins. Voyons lesquels, et comment se coordonner avec les autres métiers.',
        transitionEn: 'These parties communicate through drawings. Let’s see which ones, and how to coordinate with the other trades.',
      },
      {
        id: 'drawings-coordination',
        title: 'Dessins électriques & coordination',
        titleEn: 'Electrical drawings & coordination',
        transition: 'On connaît les acteurs et leurs documents. Place maintenant au déroulé de la conception, étape par étape.',
        transitionEn: 'We know the parties and their documents. Now let’s walk through the design process, step by step.',
      },
      {
        id: 'design-steps',
        title: 'Les étapes de la conception',
        titleEn: 'The design steps',
        transition: 'Tout commence par les plans de l’architecte : apprenons à les lire et à les préparer.',
        transitionEn: 'Everything starts with the architect’s drawings: let’s learn to read and prepare them.',
      },
      {
        id: 'architectural-drawings',
        title: 'Lire les plans architecturaux',
        titleEn: 'Reading architectural drawings',
        transition: 'Plans en main, on peut estimer la puissance dont le bâtiment aura besoin.',
        transitionEn: 'With the drawings in hand, we can estimate how much power the building will need.',
      },
    ],
  },
  {
    id: 'load',
    icon: '📐',
    title: 'Estimation de charge, local groupe & transfo',
    titleEn: 'Load estimation, generator & transformer rooms',
    intro: 'Estimer la puissance du bâtiment pour réserver tôt les locaux techniques.',
    introEn: 'Estimate the building’s power early to reserve the technical rooms.',
    lessons: [
      {
        id: 'demand-diversity',
        title: 'Facteur de demande & diversité',
        titleEn: 'Demand factor & diversity',
        transition: 'Avec ces facteurs, on peut passer à l’estimation de charge du bâtiment entier.',
        transitionEn: 'With these factors, we can move on to estimating the whole building’s load.',
      },
      {
        id: 'load-estimation',
        title: 'Estimation de charge',
        titleEn: 'Load estimation',
        transition: 'La charge estimée fixe la taille du transformateur et du groupe — et donc de leurs locaux.',
        transitionEn: 'The estimated load sets the size of the transformer and generator — and therefore of their rooms.',
      },
      {
        id: 'transformer-generator',
        title: 'Locaux transformateur & groupe électrogène',
        titleEn: 'Transformer & generator rooms',
        transition: 'Les locaux réservés, on conçoit l’éclairage pièce par pièce.',
        transitionEn: 'With the rooms reserved, we design the lighting room by room.',
      },
    ],
  },
  {
    id: 'lighting',
    icon: '💡',
    title: "Conception d'éclairage",
    titleEn: 'Lighting design',
    intro: 'Choisir les luminaires et calculer combien en installer.',
    introEn: 'Choose luminaires and calculate how many to install.',
    lessons: [
      {
        id: 'lighting',
        title: "Bases de la conception d'éclairage",
        titleEn: 'Basics of lighting design',
        transition: 'Éclairage et prises forment des circuits : il faut les regrouper dans des tableaux.',
        transitionEn: 'Lighting and sockets form circuits: they must be grouped into panels.',
      },
    ],
  },
  {
    id: 'panel-schedule',
    icon: '🗂️',
    title: 'Panel Schedule',
    titleEn: 'Panel schedule',
    intro: 'Regrouper les circuits, équilibrer les phases, calculer la charge de demande.',
    introEn: 'Group the circuits, balance the phases, compute the demand load.',
    lessons: [
      {
        id: 'panel-schedule',
        title: 'Construire un panel schedule',
        titleEn: 'Building a panel schedule',
        transition: 'Chaque circuit du tableau doit maintenant être protégé : place aux disjoncteurs.',
        transitionEn: 'Every circuit in the panel now needs protection: on to circuit breakers.',
      },
    ],
  },
  {
    id: 'breakers',
    icon: '🛡️',
    title: 'Disjoncteurs & fusibles',
    titleEn: 'Circuit breakers & fuses',
    intro: 'Principe, choix du calibre et des courbes de déclenchement.',
    introEn: 'Operating principle, rating selection and trip curves.',
    lessons: [
      {
        id: 'circuit-breaker',
        title: 'Disjoncteurs & protection',
        titleEn: 'Circuit breakers & protection',
        transition: 'Le NEC impose des règles précises pour les moteurs et les départs : voyons-les.',
        transitionEn: 'The NEC sets precise rules for motors and feeders: let’s look at them.',
      },
    ],
  },
  {
    id: 'nec-ocp',
    icon: '⚙️',
    title: 'Dimensionnement NEC des protections',
    titleEn: 'NEC sizing for overcurrent protection',
    intro: 'Moteurs, climatisation et départs de tableaux selon le NEC.',
    introEn: 'Motors, air conditioning and panel feeders per the NEC.',
    lessons: [
      {
        id: 'feeders',
        title: 'Feeders — moteurs & panneaux',
        titleEn: 'Feeders — motors & panels',
        transition: 'Les protections choisies, on dimensionne les câbles qu’elles protègent.',
        transitionEn: 'With the protection chosen, we size the cables they protect.',
      },
    ],
  },
  {
    id: 'cables',
    icon: '🔗',
    title: 'Câbles & conducteurs',
    titleEn: 'Cables & conductors',
    intro: 'Section des câbles, facteurs de correction et conduits (IEC & NEC).',
    introEn: 'Cable cross-section, correction factors and conduits (IEC & NEC).',
    lessons: [
      {
        id: 'cable-sizing',
        title: 'Dimensionnement des câbles (CSA)',
        titleEn: 'Cable sizing (CSA)',
        transition: 'Câbles et protections définis, il reste à assembler les tableaux et le schéma unifilaire.',
        transitionEn: 'With cables and protection defined, what remains is assembling the panels and the single-line diagram.',
      },
    ],
  },
  {
    id: 'panelboards',
    icon: '🏗️',
    title: 'Tableaux électriques & schéma unifilaire',
    titleEn: 'Panel boards & single-line diagram',
    intro: 'Construction des tableaux, schéma unifilaire et inverseur de source.',
    introEn: 'Panel board construction, single-line diagram and transfer switch.',
    lessons: [],
  },
  {
    id: 'appendix',
    icon: '🧩',
    title: 'Annexe',
    titleEn: 'Appendix',
    intro: 'Repères rapides utiles tout au long du cours.',
    introEn: 'Quick references useful throughout the course.',
    lessons: [
      {
        id: 'notions-diverses',
        title: 'Notions diverses',
        titleEn: 'Miscellaneous notions',
      },
    ],
  },
];

export type FlatLesson = {
  lesson: CourseLesson;
  section: CourseSection;
  sectionIndex: number;
  indexInSection: number;
  /** 1-based number across the whole course, like Udemy. */
  number: number;
};

export const FLAT_LESSONS: FlatLesson[] = COURSE_SECTIONS.flatMap((section, sectionIndex) =>
  section.lessons.map((lesson, indexInSection) => ({ lesson, section, sectionIndex, indexInSection, number: 0 }))
).map((l, i) => ({ ...l, number: i + 1 }));
