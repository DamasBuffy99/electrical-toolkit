import type { CourseSection, FlatLesson } from './course';

/**
 * Air-conditioning course built from two books:
 * - "Efficacité énergétique de la climatisation en région tropicale – Tome 1" (IEPF): design side (lessons `clim-*`);
 * - "ABC de la climatisation" (ABC CLIM, V3 2017): technician side (lessons `abc-*`), taught in our own words.
 * Ordered for a beginner: physics and comfort, the refrigerant circuit, the heat balance, choosing and installing
 * equipment from the room unit to the central plant, electricity and control, efficient design, and finally
 * the hands-on job: installation, commissioning and troubleshooting.
 */
export const CLIM_SECTIONS: CourseSection[] = [
  {
    id: 'clim-basics',
    icon: '🌡️',
    title: 'Comprendre le froid et le confort',
    titleEn: 'Understanding cooling and comfort',
    intro: 'Ce qu’on cherche à obtenir dans un local, la physique de la chaleur et de l’air humide, et comment une machine « fabrique » du froid.',
    introEn: 'What we want to achieve in a room, the physics of heat and moist air, and how a machine “makes” cold.',
    lessons: [
      {
        id: 'clim-intro',
        title: 'Climatiser en zone tropicale : confort et climats',
        titleEn: 'Air conditioning in the tropics: comfort and climates',
        transition: 'On sait quel air on veut obtenir. Avant de parler de machines, posons les bases physiques : chaleur, pression, changements d’état.',
        transitionEn: 'We know what air we want. Before talking about machines, let’s lay the physics foundations: heat, pressure, changes of state.',
      },
      {
        id: 'abc-physics',
        title: 'Chaleur, pression et changements d’état',
        titleEn: 'Heat, pressure and changes of state',
        transition: 'L’air que l’on climatise contient de la vapeur d’eau : apprenons à lire l’air humide avant de le refroidir.',
        transitionEn: 'The air we cool contains water vapour: let’s learn to read moist air before cooling it.',
      },
      {
        id: 'abc-psychro',
        title: 'L’air humide : psychrométrie, séchage et humidification',
        titleEn: 'Moist air: psychrometrics, drying and humidifying',
        transition: 'On sait ce qu’on veut faire à l’air. Voyons la machine qui le fait : le cycle frigorifique.',
        transitionEn: 'We know what we want to do to the air. Let’s see the machine that does it: the refrigeration cycle.',
      },
      {
        id: 'clim-cycle',
        title: 'Comment un climatiseur fabrique du froid',
        titleEn: 'How an air conditioner makes cold',
        transition: 'Vue d’ensemble acquise. Ouvrons maintenant le circuit frigorifique organe par organe, en commençant par l’outil qui le décrit : le diagramme enthalpique.',
        transitionEn: 'Big picture done. Let’s now open the refrigerant circuit part by part, starting with the tool that describes it: the pressure–enthalpy chart.',
      },
    ],
  },
  {
    id: 'abc-circuit',
    icon: '🔁',
    title: 'Le circuit frigorifique en détail',
    titleEn: 'The refrigerant circuit in detail',
    intro: 'Diagramme enthalpique, compresseurs, échangeurs, détendeurs, organes annexes, fluides et pompes à chaleur : ce que le technicien doit maîtriser.',
    introEn: 'Pressure–enthalpy chart, compressors, heat exchangers, expansion devices, accessories, refrigerants and heat pumps: what the technician must master.',
    lessons: [
      {
        id: 'abc-mollier',
        title: 'Le diagramme enthalpique et le bilan du cycle',
        titleEn: 'The pressure–enthalpy chart and the cycle balance',
        transition: 'Sur le diagramme, le travail du compresseur est un simple segment. Voyons les machines qui le fournissent.',
        transitionEn: 'On the chart, the compressor’s work is a simple segment. Let’s see the machines that provide it.',
      },
      {
        id: 'abc-compressors',
        title: 'Les compresseurs : technologies, inverter et lubrification',
        titleEn: 'Compressors: technologies, inverter and lubrication',
        transition: 'Le compresseur pousse le fluide ; les échangeurs et le détendeur font le vrai travail thermique. Apprenons à les régler avec la surchauffe et le sous-refroidissement.',
        transitionEn: 'The compressor pushes the refrigerant; the heat exchangers and the expansion valve do the real thermal work. Let’s learn to set them with superheat and subcooling.',
      },
      {
        id: 'abc-exchangers',
        title: 'Condenseur, détendeur, évaporateur : surchauffe et sous-refroidissement',
        titleEn: 'Condenser, expansion valve, evaporator: superheat and subcooling',
        transition: 'Autour de ces quatre organes, d’autres composants protègent et régulent le circuit. Passons-les en revue.',
        transitionEn: 'Around these four parts, other components protect and control the circuit. Let’s review them.',
      },
      {
        id: 'abc-components',
        title: 'Organes annexes et sécurités du circuit',
        titleEn: 'Circuit accessories and safety devices',
        transition: 'Le circuit est complet. Reste le fluide qui y circule : son choix, son impact sur le climat et sa manipulation.',
        transitionEn: 'The circuit is complete. What remains is the fluid flowing in it: its choice, its climate impact and its handling.',
      },
      {
        id: 'abc-refrigerants',
        title: 'Fluides frigorigènes et huiles',
        titleEn: 'Refrigerants and oils',
        transition: 'En inversant le cycle avec une vanne 4 voies, le climatiseur devient pompe à chaleur. Voyons comment, et comment juger ses performances.',
        transitionEn: 'By reversing the cycle with a 4-way valve, the air conditioner becomes a heat pump. Let’s see how, and how to judge its performance.',
      },
      {
        id: 'abc-heatpumps',
        title: 'Pompes à chaleur, réversibilité et performances saisonnières',
        titleEn: 'Heat pumps, reversibility and seasonal performance',
        transition: 'On connaît la machine. Pour la choisir, il faut chiffrer la chaleur à retirer du local : c’est le bilan thermique.',
        transitionEn: 'We know the machine. To choose it, we must quantify the heat to remove from the room: the heat balance.',
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
    intro: 'Split, window, multisplit, VRV : bien souffler l’air, limiter le bruit, placer l’unité extérieure, régler et installer.',
    introEn: 'Split, window, multi-split, VRF: blowing the air well, limiting noise, placing the outdoor unit, controlling and installing.',
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
        transition: 'Quand plusieurs pièces sont à traiter, une seule unité extérieure peut en alimenter plusieurs : multisplit et VRV.',
        transitionEn: 'When several rooms must be treated, one outdoor unit can feed several of them: multi-split and VRF.',
      },
      {
        id: 'abc-split-vrv',
        title: 'Split, multisplit et VRV/DRV en pratique',
        titleEn: 'Split, multi-split and VRF in practice',
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
    intro: 'Tout air, air/eau, eau glacée, réseaux hydrauliques, CTA, rooftops et locaux spéciaux.',
    introEn: 'All-air, air/water, chilled water, hydronic networks, AHUs, rooftops and special rooms.',
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
        transition: 'Côté eau, les problèmes viennent souvent du réseau hydraulique : débits, pompes, vannes, équilibrage. Entrons dans le détail.',
        transitionEn: 'On the water side, problems often come from the hydronic network: flows, pumps, valves, balancing. Let’s go into detail.',
      },
      {
        id: 'abc-hydraulics',
        title: 'Réseaux hydrauliques : débits, pompes, vannes et équilibrage',
        titleEn: 'Hydronic networks: flows, pumps, valves and balancing',
        transition: 'Côté air maintenant : CTA, rooftops, free-cooling, filtration et ventilateurs.',
        transitionEn: 'Now the air side: AHUs, rooftops, free cooling, filtration and fans.',
      },
      {
        id: 'abc-airside',
        title: 'CTA, rooftop, free-cooling, filtration et ventilateurs',
        titleEn: 'AHUs, rooftops, free cooling, filtration and fans',
        transition: 'Certains locaux ont des exigences à part : poutres climatiques, salles blanches, data centers, et le risque légionelle.',
        transitionEn: 'Some rooms have special requirements: chilled beams, clean rooms, data centers, and the legionella risk.',
      },
      {
        id: 'abc-special',
        title: 'Poutres climatiques, salles blanches, data centers et légionellose',
        titleEn: 'Chilled beams, clean rooms, data centers and legionella',
        transition: 'Toutes ces machines tournent grâce à des moteurs et sont pilotées par des régulateurs : place à l’électricité et à la régulation.',
        transitionEn: 'All these machines run on motors and are driven by controllers: on to electricity and control.',
      },
    ],
  },
  {
    id: 'abc-elec',
    icon: '⚡',
    title: 'Électricité et régulation des installations',
    titleEn: 'Electricity and control of installations',
    intro: 'Moteurs, démarrages, protections et variateurs ; régulation TOR et PID, automates, GTB et sondes.',
    introEn: 'Motors, starting methods, protections and drives; on/off and PID control, controllers, BMS and sensors.',
    lessons: [
      {
        id: 'abc-electric',
        title: 'Moteurs, démarrages, protections et variateurs',
        titleEn: 'Motors, starting, protections and drives',
        transition: 'Le moteur tourne et il est protégé. Reste à le commander intelligemment : la régulation.',
        transitionEn: 'The motor runs and is protected. What remains is to drive it intelligently: control.',
      },
      {
        id: 'abc-control',
        title: 'Régulation : du tout-ou-rien au PID et à la GTB',
        titleEn: 'Control: from on/off to PID and BMS',
        transition: 'Les machines sont maîtrisées. Prenons de la hauteur : comment concevoir un bâtiment qui chauffe moins ?',
        transitionEn: 'The machines are under control. Let’s step back: how to design a building that heats up less?',
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
        transition: 'Le bâtiment est sobre. Chiffrons maintenant ce que l’installation consommera et coûtera chaque année, et comment l’entretenir.',
        transitionEn: 'The building is efficient. Now let’s estimate what the installation will consume and cost every year, and how to maintain it.',
      },
      {
        id: 'clim-operating-costs',
        title: 'Coûts d’exploitation, efficacité et maintenance',
        titleEn: 'Operating costs, efficiency and maintenance',
        transition: 'Une installation bien conçue doit encore être bien posée, bien mise en service et bien dépannée : place au terrain.',
        transitionEn: 'A well-designed installation must still be well installed, well commissioned and well repaired: on to the field.',
      },
    ],
  },
  {
    id: 'abc-field',
    icon: '🔧',
    title: 'Sur le terrain : installation, mise en service, dépannage',
    titleEn: 'In the field: installation, commissioning, troubleshooting',
    intro: 'Les gestes du frigoriste : tuyauterie cuivre, brasure, vide, charge, relevés de référence et diagnostic des pannes.',
    introEn: 'The technician’s skills: copper piping, brazing, vacuum, charging, reference readings and fault diagnosis.',
    lessons: [
      {
        id: 'abc-install',
        title: 'Tuyauterie, brasure, condensats, étanchéité et tirage au vide',
        titleEn: 'Piping, brazing, condensate, leak testing and evacuation',
        transition: 'Le circuit est propre, étanche et sous vide. Il est temps de le charger et de le mettre en route.',
        transitionEn: 'The circuit is clean, tight and under vacuum. Time to charge it and start it up.',
      },
      {
        id: 'abc-commissioning',
        title: 'Mise en service, charge en fluide et relevés de référence',
        titleEn: 'Commissioning, refrigerant charging and reference readings',
        transition: 'On sait à quoi ressemble une installation saine. Apprenons à reconnaître et soigner une installation malade.',
        transitionEn: 'We know what a healthy installation looks like. Let’s learn to recognise and fix a sick one.',
      },
      {
        id: 'abc-troubleshooting',
        title: 'Diagnostic des pannes',
        titleEn: 'Fault diagnosis',
      },
    ],
  },
];

export const CLIM_FLAT_LESSONS: FlatLesson[] = CLIM_SECTIONS.flatMap((section, sectionIndex) =>
  section.lessons.map((lesson, indexInSection) => ({ lesson, section, sectionIndex, indexInSection, number: 0 }))
).map((l, i) => ({ ...l, number: i + 1 }));
