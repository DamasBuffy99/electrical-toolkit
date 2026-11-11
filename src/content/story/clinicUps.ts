import { TopicContent } from '../types';

export const clinicUpsContent: TopicContent = {
  title: 'Onduleurs et bloc opératoire',
  subtitle: 'Au bloc et en réanimation, même dix secondes de noir sont inacceptables, et un simple défaut d’isolement ne doit pas couper un respirateur. Awa explique l’onduleur, puis un régime de neutre particulier : l’IT médical.',
  blocks: [
    { type: 'scene', text: 'Mois 3 · Visite du futur bloc opératoire' },
    { type: 'illustration', name: 'clinic-tiers', props: { highlight: 'ups' }, caption: 'L’onduleur alimente le niveau vital sans aucune coupure' },
    {
      type: 'dialogue',
      speaker: 'Dr Aïcha Bello',
      role: 'client',
      text: 'Dix secondes pour que le groupe reprenne, c’est trop pour un patient intubé. Comment fait-on ?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Avec un onduleur « en ligne ». Il transforme en permanence l’alternatif du réseau en continu, qui charge ses batteries, puis refabrique un alternatif propre pour les appareils. Quand le réseau disparaît, rien ne change pour les appareils : les batteries étaient déjà dans le circuit. Il n’y a pas de bascule, donc pas de coupure.',
    },

    { type: 'heading', text: '1 · Dimensionner l’onduleur' },
    { type: 'formula', text: 'Niveau vital : 18 kW  →  S = \\frac{18}{0,9} = 20 kVA' },
    {
      type: 'text',
      text: 'Awa applique la même logique que pour les groupes : deux onduleurs de 20 kVA en parallèle, chacun capable de porter seul tout le niveau vital (N+1). L’un peut être en panne ou en maintenance sans que le bloc le sente. Chaque onduleur a aussi un « by-pass » : en cas de défaut interne, il laisse passer le courant du TGBT secouru plutôt que de couper.',
    },
    {
      type: 'dialogue',
      speaker: 'Serge (technicien biomédical)',
      role: 'team',
      text: 'Et quelle autonomie sur batteries ? Une heure ?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Les batteries n’ont qu’à couvrir le démarrage des groupes, normalement dix secondes. Je prévois quand même 15 minutes : si le premier groupe ne démarre pas et que le second hésite aussi, l’équipe a le temps de terminer un geste en cours et de passer en mode dégradé. Une heure coûterait très cher en batteries pour un cas qui n’arrive pas.',
    },
    { type: 'formula', text: 'Énergie pour 15 min : E = \\frac{18 kW × 0,25 h}{0,94} ≈ 4,8 kWh  (rendement de l’onduleur ≈ 94 %)' },
    { type: 'fiche', id: 'generator-ups-ats', why: 'Types d’onduleurs (off-line, line-interactive, on-line) et dimensionnement.' },

    { type: 'heading', text: '2 · Pourquoi pas de différentiel 30 mA au bloc ?' },
    {
      type: 'dialogue',
      speaker: 'Dr Aïcha Bello',
      role: 'client',
      text: 'Dans les maisons, on met des différentiels 30 mA partout pour la sécurité. Et ici ?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Justement, pas pour les appareils de survie au bloc. Imaginez qu’un câble d’éclairage de la table s’abîme pendant l’opération : le différentiel couperait le circuit… et le respirateur branché dessus. Pour ces circuits, on utilise un autre régime de neutre, l’IT médical, qui laisse fonctionner l’installation au premier défaut et donne seulement l’alarme.',
    },
    {
      type: 'bullets',
      items: [
        'Chaque salle d’opération est alimentée par un transformateur d’isolement 230 V / 230 V : son secondaire n’est pas relié à la terre.',
        'Au premier défaut d’isolement, aucun courant dangereux ne circule, car le circuit n’a pas de retour par la terre : on peut continuer d’opérer.',
        'Un contrôleur permanent d’isolement (CPI) surveille la résistance d’isolement et déclenche une alarme sonore et lumineuse dans la salle dès qu’elle baisse.',
        'L’électricien recherche et répare le défaut après l’intervention : un second défaut, lui, provoquerait une coupure.',
        'Toutes les masses métalliques de la salle sont reliées entre elles (liaison équipotentielle) pour qu’aucune tension n’apparaisse entre deux objets que l’on touche.',
      ],
    },
    {
      type: 'note',
      text: 'Le schéma TT de la villa et l’IT médical poursuivent le même but, protéger les personnes, avec deux logiques opposées. En TT, on coupe dès qu’il y a une fuite. En IT, on garantit qu’un premier défaut n’est pas dangereux, et on ne coupe pas, parce qu’au bloc la coupure elle-même est le danger.',
    },
    { type: 'fiche', id: 'electrical-safety', why: 'Les schémas de liaison à la terre TT, TN et IT comparés.' },
    { type: 'fiche', id: 'earthing', why: 'Mise à la terre et liaisons équipotentielles.' },
    {
      type: 'regional',
      text: 'La durée de vie des batteries d’onduleur chute avec la chaleur : en règle approximative, elle est divisée par deux pour chaque tranche de 10 °C au-dessus de 25 °C. Dans un local technique à 35 °C, des batteries prévues pour 5 ans peuvent lâcher au bout de 2 à 3 ans. Le local onduleurs-batteries doit être climatisé, et cette clim placée sur le niveau essentiel.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'L’onduleur en ligne alimente en permanence par ses batteries : aucune coupure au passage sur batterie.',
        'Onduleurs en N+1 avec by-pass ; autonomie dimensionnée pour couvrir le démarrage des groupes, avec une marge.',
        'Au bloc, l’IT médical (transformateur d’isolement + contrôleur d’isolement) évite de couper un appareil de survie au premier défaut.',
        'Les batteries craignent la chaleur : local climatisé.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Quelle énergie de batterie faudrait-il pour 30 minutes d’autonomie au lieu de 15 ?',
      solution: ['E = 18 × 0,5 / 0,94 ≈ 9,6 kWh, le double.', 'Le coût et l’encombrement des batteries doublent aussi : on choisit l’autonomie en fonction du temps réellement nécessaire avant la reprise par les groupes.'],
    },
    {
      type: 'exercise',
      question: 'L’alarme du contrôleur d’isolement retentit en pleine opération. Que doit faire l’équipe ?',
      solution: [
        'Rien d’urgent : au premier défaut, l’installation reste sûre et alimentée. L’équipe termine l’intervention.',
        'Ensuite, le service technique cherche le défaut (souvent un appareil ou un câble abîmé) et le répare avant la prochaine opération, car un second défaut provoquerait une coupure.',
      ],
    },
  ],
};
