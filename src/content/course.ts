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

/**
 * The electrical design course, ordered for a beginner: first the project context and the basic vocabulary,
 * then the design in the order an engineer actually works (power → lighting & sockets → panels → protection
 * → cables → panel board → backup), and the US code (NEC) last as a deep dive once the general method is known.
 */
export const COURSE_SECTIONS: CourseSection[] = [
  {
    id: 'overview',
    icon: '🧭',
    title: "Comprendre un projet électrique",
    titleEn: 'Understanding an electrical project',
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
        transition: 'Avant de calculer quoi que ce soit, il faut maîtriser le vocabulaire : tension, courant, puissance.',
        transitionEn: 'Before calculating anything, we need the vocabulary: voltage, current, power.',
      },
    ],
  },
  {
    id: 'basics',
    icon: '⚡',
    title: "Les bases de l'électricité",
    titleEn: 'Electricity basics',
    intro: 'Les grandeurs et formules utilisées dans tout le cours.',
    introEn: 'The quantities and formulas used throughout the course.',
    lessons: [
      {
        id: 'electrical-basics',
        title: "Tension, courant, puissance et phases",
        titleEn: 'Voltage, current, power and phases',
        transition: 'Avec ces outils, on peut estimer la puissance dont le bâtiment aura besoin.',
        transitionEn: 'With these tools, we can estimate how much power the building will need.',
      },
    ],
  },
  {
    id: 'load',
    icon: '📐',
    title: 'Estimer la puissance du bâtiment',
    titleEn: "Estimating the building's power",
    intro: 'Combien de kVA ? Pour réserver tôt le transformateur, le groupe et leurs locaux.',
    introEn: 'How many kVA? To reserve the transformer, generator and their rooms early.',
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
        transition: 'Une grande part de cette charge vient des équipements mécaniques : apprenons à les connaître.',
        transitionEn: 'A large share of this load comes from mechanical equipment: let’s get to know it.',
      },
      {
        id: 'hvac-mechanical',
        title: 'Charges CVC, pompes et sécurité incendie',
        titleEn: 'HVAC, pumps and fire fighting loads',
        transition: 'La charge totale connue, elle fixe la taille du transformateur et du groupe — et donc de leurs locaux.',
        transitionEn: 'Once the total load is known, it sets the size of the transformer and generator — and therefore of their rooms.',
      },
      {
        id: 'transformer-generator',
        title: 'Locaux transformateur & groupe électrogène',
        titleEn: 'Transformer & generator rooms',
        transition: 'Les grandes masses sont réservées : on descend maintenant pièce par pièce, en commençant par l’éclairage.',
        transitionEn: 'The big items are reserved: now we go room by room, starting with lighting.',
      },
    ],
  },
  {
    id: 'lighting',
    icon: '💡',
    title: 'Éclairage, interrupteurs et prises',
    titleEn: 'Lighting, switches and sockets',
    intro: 'Choisir et calculer les luminaires, puis les commander, implanter les prises et former les circuits.',
    introEn: 'Choose and calculate luminaires, then control them, place the sockets and form the circuits.',
    lessons: [
      {
        id: 'lighting',
        title: "Bases de la conception d'éclairage",
        titleEn: 'Basics of lighting design',
        transition: 'Les luminaires placés, il faut les commander, ajouter les prises et regrouper le tout en circuits.',
        transitionEn: 'With the luminaires placed, we must control them, add the sockets and group everything into circuits.',
      },
      {
        id: 'lighting-circuits-sockets',
        title: 'Circuits d’éclairage, interrupteurs et prises',
        titleEn: 'Lighting circuits, switches and sockets',
        transition: 'Éclairage et prises forment des circuits : il faut les regrouper dans des tableaux.',
        transitionEn: 'Lighting and sockets form circuits: they must be grouped into panels.',
      },
    ],
  },
  {
    id: 'panel-schedule',
    icon: '🗂️',
    title: 'Regrouper les circuits : le panel schedule',
    titleEn: 'Grouping circuits: the panel schedule',
    intro: 'Répartir les circuits, équilibrer les phases, calculer la charge de demande.',
    introEn: 'Distribute the circuits, balance the phases, compute the demand load.',
    lessons: [
      {
        id: 'panel-schedule',
        title: 'Construire un panel schedule',
        titleEn: 'Building a panel schedule',
        transition: 'Chaque circuit doit maintenant être protégé. Mais d’abord : de quoi protège-t-on, et pourquoi ?',
        transitionEn: 'Every circuit now needs protection. But first: what are we protecting against, and why?',
      },
    ],
  },
  {
    id: 'protection',
    icon: '🛡️',
    title: 'Protéger les personnes et les circuits',
    titleEn: 'Protecting people and circuits',
    intro: 'Le danger du courant, puis les disjoncteurs, différentiels et fusibles.',
    introEn: 'The danger of current, then circuit breakers, RCDs and fuses.',
    lessons: [
      {
        id: 'electrical-safety',
        title: 'Le danger électrique et les schémas de liaison à la terre',
        titleEn: 'Electrical hazards and earthing systems',
        transition: 'On sait de quoi il faut protéger les personnes et les câbles : voyons l’appareil qui le fait, le disjoncteur.',
        transitionEn: 'We know what people and cables must be protected from: let’s see the device that does it, the circuit breaker.',
      },
      {
        id: 'circuit-breaker',
        title: 'Disjoncteurs & protection',
        titleEn: 'Circuit breakers & protection',
        transition: 'Le disjoncteur n’est pas la seule protection : voyons les fusibles, BT et HT.',
        transitionEn: 'The circuit breaker is not the only protection: let’s look at LV and HV fuses.',
      },
      {
        id: 'fuses',
        title: 'Fusibles BT et HT',
        titleEn: 'LV and HV fuses',
        transition: 'Les protections sont choisies : il faut maintenant les câbles qu’elles protègent.',
        transitionEn: 'The protection is chosen: now we need the cables it protects.',
      },
    ],
  },
  {
    id: 'cables',
    icon: '🔗',
    title: 'Câbler et mettre à la terre',
    titleEn: 'Cabling and earthing',
    intro: 'Section des câbles, chute de tension, courant de court-circuit et mise à la terre.',
    introEn: 'Cable cross-section, voltage drop, short-circuit current and earthing.',
    lessons: [
      {
        id: 'cable-sizing',
        title: 'Dimensionnement des câbles (CSA)',
        titleEn: 'Cable sizing (CSA)',
        transition: "Une section qui supporte le courant ne suffit pas : il faut aussi vérifier la chute de tension jusqu'à la charge.",
        transitionEn: 'A section that carries the current is not enough: the voltage drop to the load must be checked too.',
      },
      {
        id: 'voltage-drop',
        title: 'Chute de tension',
        titleEn: 'Voltage drop',
        transition: 'Dernière vérification : le courant de court-circuit, qui fixe le pouvoir de coupure des disjoncteurs.',
        transitionEn: 'Last check: the short-circuit current, which sets the breaking capacity of the breakers.',
      },
      {
        id: 'short-circuit',
        title: 'Courant de court-circuit',
        titleEn: 'Short-circuit current',
        transition: 'Avec le courant de court-circuit, on peut dimensionner la mise à la terre de l’installation.',
        transitionEn: 'With the short-circuit current known, we can size the installation’s earthing.',
      },
      {
        id: 'earthing',
        title: 'Concevoir la mise à la terre',
        titleEn: 'Designing the earthing system',
        transition: 'Câbles, protections et terre sont prêts : il reste à tout assembler dans les tableaux.',
        transitionEn: 'Cables, protection and earthing are ready: what remains is assembling everything in the panels.',
      },
    ],
  },
  {
    id: 'panelboards',
    icon: '🏗️',
    title: 'Assembler les tableaux',
    titleEn: 'Assembling the panel boards',
    intro: 'Construction des tableaux, schéma unifilaire et conception complète d’un tableau.',
    introEn: 'Panel board construction, single-line diagram and full panel design.',
    lessons: [
      {
        id: 'panel-basics',
        title: 'Tableaux : construction et schéma unifilaire',
        titleEn: 'Panel boards: construction and single-line diagram',
        transition: 'On réunit maintenant tout le parcours pour concevoir un tableau complet.',
        transitionEn: 'Now we bring the whole journey together to design a complete panel.',
      },
      {
        id: 'panel-design-examples',
        title: 'Conception d’un tableau : 2 exemples',
        titleEn: 'Designing a panel: 2 examples',
        transition: 'Le tableau doit rester alimenté quand le réseau tombe : groupe, ATS et ASI.',
        transitionEn: 'The panel must stay powered when the grid fails: generator, ATS and UPS.',
      },
    ],
  },
  {
    id: 'backup',
    icon: '🔋',
    title: 'Alimentation de secours',
    titleEn: 'Backup power',
    intro: 'Groupe électrogène, inverseur automatique (ATS) et ASI (UPS).',
    introEn: 'Generator, automatic transfer switch (ATS) and UPS.',
    lessons: [
      {
        id: 'generator-ups-ats',
        title: 'Groupe électrogène, ATS et ASI (UPS)',
        titleEn: 'Generator, ATS and UPS',
        transition: 'La méthode générale est complète. Pour aller plus loin : les règles précises du code américain (NEC).',
        transitionEn: 'The general method is complete. To go further: the precise rules of the US code (NEC).',
      },
    ],
  },
  {
    id: 'nec-ocp',
    icon: '📘',
    title: 'Approfondir : le code américain (NEC)',
    titleEn: 'Going further: the US code (NEC)',
    intro: 'Règles NEC pour les moteurs, la climatisation, les feeders, les conducteurs et les sectionneurs.',
    introEn: 'NEC rules for motors, air conditioning, feeders, conductors and disconnects.',
    lessons: [
      {
        id: 'feeders',
        title: 'Feeders — moteurs & panneaux',
        titleEn: 'Feeders — motors & panels',
        transition: 'Les protections choisies, le NEC fixe aussi la section des conducteurs et des conduits.',
        transitionEn: 'With the protection chosen, the NEC also sets the conductor and conduit sizes.',
      },
      {
        id: 'nec-conductors',
        title: 'NEC : conducteurs, moteurs et conduits',
        titleEn: 'NEC: conductors, motors and conduits',
        transition: 'Dernier élément d’un circuit moteur ou de climatisation : le sectionneur.',
        transitionEn: 'The last element of a motor or air conditioning circuit: the disconnect switch.',
      },
      {
        id: 'disconnect-switches',
        title: 'Sectionneurs (disconnect switches)',
        titleEn: 'Disconnect switches',
      },
    ],
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
