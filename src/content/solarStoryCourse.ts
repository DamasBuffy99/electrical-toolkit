import type { CourseSection, FlatLesson } from './course';

/**
 * The solar PV course told as four projects. Fanta Coulibaly, PV engineer at Lumen Ingénierie, works with
 * Awa Diallo (electrical) and Ousmane Cissé (HVAC); the lessons of solarNotesTopics.ts are the "fiches".
 */
export const SOLAR_STORY_SECTIONS: CourseSection[] = [
  {
    id: 'sv',
    icon: '🏡',
    title: 'La villa Mensah contre les délestages',
    titleEn: 'The Mensah villa against load shedding',
    intro: 'Quatre heures de coupure chaque soir et un groupe bruyant : les Mensah veulent un système solaire hybride. Bilan des charges, choix de l’onduleur et de la batterie, calepinage du toit, protections et réception.',
    introEn: 'Four hours of outage every evening and a noisy generator: the Mensahs want a hybrid solar system. Load balance, inverter and battery choice, roof layout, protection and acceptance.',
    lessons: [
      {
        id: 'sv-needs',
        title: 'Ce qu’il faut secourir',
        titleEn: 'What needs backing up',
        transition: 'Le besoin est chiffré. Fanta peut maintenant choisir l’onduleur, la batterie et la puissance des panneaux.',
        transitionEn: 'The need is quantified. Fanta can now choose the inverter, the battery and the panel power.',
      },
      {
        id: 'sv-design',
        title: 'Onduleur hybride, batterie et panneaux',
        titleEn: 'Hybrid inverter, battery and panels',
        transition: 'Les puissances sont fixées. Reste à loger les panneaux sur le toit et à les câbler en chaînes compatibles avec l’onduleur.',
        transitionEn: 'The ratings are set. The panels must now fit on the roof and be wired in strings the inverter can accept.',
      },
      {
        id: 'sv-strings',
        title: 'Le toit et les chaînes',
        titleEn: 'The roof and the strings',
        transition: 'Le schéma est prêt. Place à la pose, aux protections du courant continu et aux essais de réception.',
        transitionEn: 'The design is ready. On to installation, DC protection and acceptance tests.',
      },
      {
        id: 'sv-install',
        title: 'Protections, pose et réception',
        titleEn: 'Protection, installation and acceptance',
        transition: 'La villa traverse ses délestages en silence. Deuxième projet : un centre de santé à 80 km du premier poteau électrique.',
        transitionEn: 'The villa rides through its outages in silence. Second project: a health centre 80 km from the nearest power pole.',
      },
    ],
  },
  {
    id: 'sc',
    icon: '🏥',
    title: 'Le centre de santé de Kalé',
    titleEn: 'The Kalé health centre',
    intro: 'Aucun réseau, un groupe qui tourne 14 heures par jour et des vaccins à garder au froid. Un système isolé triphasé : onduleurs-chargeurs, parc de batteries, champ PV couplé en AC et groupe piloté.',
    introEn: 'No grid, a generator running 14 hours a day and vaccines to keep cold. A three-phase off-grid system: inverter-chargers, battery bank, AC-coupled PV array and a controlled generator.',
    lessons: [
      {
        id: 'sc-needs',
        title: 'Le bilan d’un centre de santé',
        titleEn: 'The load balance of a health centre',
        transition: 'Le profil de charge est connu. Il faut des onduleurs capables de le tenir à 45 °C, et un groupe qui ne tourne plus qu’en secours.',
        transitionEn: 'The load profile is known. Inverters able to carry it at 45 °C are needed, and a generator that only runs as backup.',
      },
      {
        id: 'sc-inverters',
        title: 'Onduleurs-chargeurs et groupe électrogène',
        titleEn: 'Inverter-chargers and generator',
        transition: 'Les onduleurs fabriquent le réseau. Encore faut-il une batterie qui tienne la nuit, et des années.',
        transitionEn: 'The inverters make the grid. A battery that lasts the night, and for years, is still needed.',
      },
      {
        id: 'sc-battery',
        title: 'Le parc de batteries',
        titleEn: 'The battery bank',
        transition: 'La batterie est choisie. Combien de panneaux pour la remplir, et combien de gasoil économisé ?',
        transitionEn: 'The battery is chosen. How many panels to fill it, and how much diesel saved?',
      },
      {
        id: 'sc-field',
        title: 'Le champ PV et le gasoil économisé',
        titleEn: 'The PV array and the diesel saved',
        transition: 'Troisième projet : Tropica veut couvrir son toit de panneaux, sans jamais injecter sur le réseau.',
        transitionEn: 'Third project: Tropica wants to cover its roof with panels, without ever exporting to the grid.',
      },
    ],
  },
  {
    id: 'st',
    icon: '🏭',
    title: 'La toiture solaire de Tropica',
    titleEn: 'Tropica’s solar roof',
    intro: 'Une usine qui consomme surtout le jour, un toit de 1 200 m² et un distributeur qui refuse l’injection : 100 kWc en autoconsommation, chaînes en 1 000 V, sécurité incendie et rentabilité.',
    introEn: 'A plant that consumes mostly in the daytime, a 1,200 m² roof and a utility that refuses export: 100 kWp of self-consumption, 1,000 V strings, fire safety and profitability.',
    lessons: [
      {
        id: 'st-profile',
        title: 'Autoconsommer sans injecter',
        titleEn: 'Self-consuming without exporting',
        transition: 'La puissance est fixée à 100 kWc. Reste à organiser 180 modules en chaînes de 1 000 V.',
        transitionEn: 'The power is set at 100 kWp. 180 modules must now be organised into 1,000 V strings.',
      },
      {
        id: 'st-strings',
        title: '100 kWc en toiture : les chaînes',
        titleEn: '100 kWp on the roof: the strings',
        transition: 'Mille volts en courant continu sur un toit d’usine : il faut maintenant penser incendie, foudre et sécurité des pompiers.',
        transitionEn: 'A thousand volts DC on a factory roof: fire, lightning and firefighter safety must now be addressed.',
      },
      {
        id: 'st-safety',
        title: 'Protections, incendie et cos φ',
        titleEn: 'Protection, fire and power factor',
        transition: 'L’installation est sûre. Ibrahim pose la seule question qui compte pour lui : combien ça rapporte ?',
        transitionEn: 'The installation is safe. Ibrahim asks the only question that counts for him: how much does it pay?',
      },
      {
        id: 'st-economics',
        title: 'Production, rentabilité et suivi',
        titleEn: 'Production, profitability and monitoring',
        transition: 'Dernier projet, le plus simple en apparence : faire monter l’eau d’un forage avec le seul soleil.',
        transitionEn: 'Last project, the simplest on the surface: lifting water from a borehole with sunshine alone.',
      },
    ],
  },
  {
    id: 'sp',
    icon: '💧',
    title: 'Le pompage solaire de Sonkélé',
    titleEn: 'The Sonkélé solar pumping system',
    intro: 'Un village de 1 500 habitants, un forage de 60 m et une pompe diesel souvent en panne. Besoins en eau, hauteur manométrique, pompe et variateur solaire, champ PV sans batterie, château d’eau et gestion communautaire.',
    introEn: 'A village of 1,500 people, a 60 m borehole and an often broken diesel pump. Water needs, total head, pump and solar drive, battery-less PV array, water tower and community management.',
    lessons: [
      {
        id: 'sp-needs',
        title: 'Combien d’eau, à quelle hauteur ?',
        titleEn: 'How much water, how high?',
        transition: 'Débit et hauteur sont connus. Fanta peut choisir la pompe et la façon de l’alimenter.',
        transitionEn: 'Flow and head are known. Fanta can choose the pump and how to power it.',
      },
      {
        id: 'sp-pump',
        title: 'La pompe et son variateur solaire',
        titleEn: 'The pump and its solar drive',
        transition: 'La pompe est choisie. Il faut un champ de panneaux qui l’alimente du matin au soir, sans batterie.',
        transitionEn: 'The pump is chosen. A panel array is needed to drive it from morning to evening, with no battery.',
      },
      {
        id: 'sp-field',
        title: 'Le champ PV de la pompe',
        titleEn: 'The pump’s PV array',
        transition: 'L’eau monte. Reste à la stocker, à réceptionner l’installation et à organiser sa gestion par le village.',
        transitionEn: 'The water is flowing. It must now be stored, the system accepted and its management organised by the village.',
      },
      {
        id: 'sp-operation',
        title: 'Château d’eau, réception et gestion',
        titleEn: 'Water tower, acceptance and management',
      },
    ],
  },
];

export const SOLAR_STORY_FLAT_LESSONS: FlatLesson[] = SOLAR_STORY_SECTIONS.flatMap((section, sectionIndex) =>
  section.lessons.map((lesson, indexInSection) => ({ lesson, section, sectionIndex, indexInSection, number: indexInSection + 1 })),
);
