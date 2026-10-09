import type { CourseSection, FlatLesson } from './course';

/**
 * Air-conditioning course built from "Efficacité énergétique de la climatisation en région tropicale – Tome 1"
 * (IEPF). Ordered for a beginner: first what comfort and cold are, then the heat balance (the core skill),
 * then choosing and installing equipment from the smallest (room unit) to the largest (central plant),
 * and finally how to design and run a building that needs less cooling.
 */
export const CLIM_SECTIONS: CourseSection[] = [
  {
    id: 'clim-basics',
    icon: '🌡️',
    title: 'Comprendre le froid et le confort',
    titleEn: 'Understanding cooling and comfort',
    intro: 'Ce qu’on cherche à obtenir dans un local, et comment une machine « fabrique » du froid.',
    introEn: 'What we want to achieve in a room, and how a machine “makes” cold.',
    lessons: [
      {
        id: 'clim-intro',
        title: 'Climatiser en zone tropicale : confort et climats',
        titleEn: 'Air conditioning in the tropics: comfort and climates',
        transition: 'On sait quel air on veut obtenir. Voyons maintenant comment une machine retire la chaleur d’un local.',
        transitionEn: 'We know what air we want. Now let’s see how a machine removes heat from a room.',
      },
      {
        id: 'clim-cycle',
        title: 'Comment un climatiseur fabrique du froid',
        titleEn: 'How an air conditioner makes cold',
        transition: 'Un climatiseur se choisit par sa puissance frigorifique. Pour la connaître, il faut chiffrer toute la chaleur qui entre dans le local : c’est le bilan thermique.',
        transitionEn: 'An air conditioner is chosen by its cooling capacity. To know it, we must quantify all the heat entering the room: the heat balance.',
      },
    ],
  },
  {
    id: 'clim-load',
    icon: '🧮',
    title: 'Le bilan thermique',
    titleEn: 'The heat balance',
    intro: 'Le cœur du métier : calculer la puissance frigorifique nécessaire, sans sous- ni surdimensionner.',
    introEn: 'The core skill: calculating the cooling capacity needed, without under- or oversizing.',
    lessons: [
      {
        id: 'clim-heat-gains',
        title: 'Les apports de chaleur, un par un',
        titleEn: 'Heat gains, one by one',
        transition: 'On connaît chaque apport et sa formule. Reste à les assembler avec méthode : données, heure de pointe, feuille de calcul.',
        transitionEn: 'We know each gain and its formula. Now we assemble them methodically: data, peak hour, calculation sheet.',
      },
      {
        id: 'clim-load-method',
        title: 'La méthode pas à pas et la feuille de calcul',
        titleEn: 'The step-by-step method and the calculation sheet',
        transition: 'Mettons la méthode à l’épreuve sur un vrai local : un bureau à Douala.',
        transitionEn: 'Let’s test the method on a real room: an office in Douala.',
      },
      {
        id: 'clim-load-example',
        title: 'Exemple complet : un bureau à Douala',
        titleEn: 'Full example: an office in Douala',
        transition: '7,4 kW pour un bureau : un split suffit. Mais pour un hôtel ou un supermarché ? Apprenons à choisir la bonne famille de système.',
        transitionEn: '7.4 kW for one office: a split is enough. But for a hotel or a supermarket? Let’s learn to pick the right family of system.',
      },
    ],
  },
  {
    id: 'clim-choice',
    icon: '🧭',
    title: 'Choisir le système',
    titleEn: 'Choosing the system',
    intro: 'Puissance, bruit, climat, type de bâtiment : les critères qui orientent vers un split, une armoire ou une centrale.',
    introEn: 'Power, noise, climate, type of building: the criteria that point to a split, a packaged unit or a central plant.',
    lessons: [
      {
        id: 'clim-system-choice',
        title: 'Quel système pour quel bâtiment ?',
        titleEn: 'Which system for which building?',
        transition: 'Dans la majorité des projets en Afrique, on installe des climatiseurs de local. Voyons comment bien les placer dans la pièce.',
        transitionEn: 'In most projects in Africa, room air conditioners are installed. Let’s see how to place them well in the room.',
      },
    ],
  },
  {
    id: 'clim-room',
    icon: '🏠',
    title: 'Le climatiseur de local',
    titleEn: 'The room air conditioner',
    intro: 'Split, window, armoire : bien souffler l’air, limiter le bruit, placer l’unité extérieure et régler la consigne.',
    introEn: 'Split, window, packaged unit: blowing the air well, limiting noise, placing the outdoor unit and setting the thermostat.',
    lessons: [
      {
        id: 'clim-room-air',
        title: 'Bien diffuser l’air dans le local',
        titleEn: 'Distributing the air well in the room',
        transition: 'L’air est bien soufflé. Il reste le bruit, l’unité extérieure, la régulation et le choix du condenseur.',
        transitionEn: 'The air is blown properly. There remain noise, the outdoor unit, control and the choice of condenser.',
      },
      {
        id: 'clim-room-install',
        title: 'Bruit, unité extérieure, régulation et condenseur',
        titleEn: 'Noise, outdoor unit, control and condenser',
        transition: 'Au-delà de 75 kW, on passe à la climatisation centralisée : un seul équipement produit le froid pour tout le bâtiment.',
        transitionEn: 'Beyond 75 kW, we move to central air conditioning: one plant produces cooling for the whole building.',
      },
    ],
  },
  {
    id: 'clim-central',
    icon: '🏢',
    title: 'La climatisation centralisée',
    titleEn: 'Central air conditioning',
    intro: 'Tout air, air/eau, eau glacée : les grandes installations des hôtels, banques et immeubles.',
    introEn: 'All-air, air/water, chilled water: the large installations of hotels, banks and office buildings.',
    lessons: [
      {
        id: 'clim-central-systems',
        title: 'Les familles d’installations centralisées',
        titleEn: 'The families of central systems',
        transition: 'On a choisi la famille. Place au matériel : groupe d’eau glacée, tours, gaines et tuyauteries.',
        transitionEn: 'We have chosen the family. Now the hardware: chiller, towers, ducts and pipes.',
      },
      {
        id: 'clim-central-networks',
        title: 'Groupe d’eau glacée, gaines et tuyauteries',
        titleEn: 'Chiller, ducts and pipes',
        transition: 'Le meilleur climatiseur est celui dont on n’a pas besoin : voyons comment concevoir un bâtiment qui chauffe moins.',
        transitionEn: 'The best air conditioner is the one you don’t need: let’s see how to design a building that heats up less.',
      },
    ],
  },
  {
    id: 'clim-efficiency',
    icon: '🌿',
    title: 'Concevoir et exploiter sobrement',
    titleEn: 'Designing and operating efficiently',
    intro: 'Réduire les besoins dès l’architecture, puis maîtriser la consommation pendant toute la vie de l’installation.',
    introEn: 'Reduce the needs from the architecture stage, then control consumption over the life of the installation.',
    lessons: [
      {
        id: 'clim-building',
        title: 'Concevoir un bâtiment qui chauffe moins',
        titleEn: 'Designing a building that heats up less',
        transition: 'Le bâtiment est sobre. Dernière étape : chiffrer ce que l’installation consommera et coûtera chaque année, et bien l’entretenir.',
        transitionEn: 'The building is efficient. Last step: estimate what the installation will consume and cost every year, and maintain it well.',
      },
      {
        id: 'clim-operating-costs',
        title: 'Coûts d’exploitation, efficacité et maintenance',
        titleEn: 'Operating costs, efficiency and maintenance',
      },
    ],
  },
];

export const CLIM_FLAT_LESSONS: FlatLesson[] = CLIM_SECTIONS.flatMap((section, sectionIndex) =>
  section.lessons.map((lesson, indexInSection) => ({ lesson, section, sectionIndex, indexInSection, number: 0 }))
).map((l, i) => ({ ...l, number: i + 1 }));
