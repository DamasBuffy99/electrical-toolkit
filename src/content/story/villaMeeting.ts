import { TopicContent } from '../types';

export const villaMeetingContent: TopicContent = {
  title: 'Le premier rendez-vous',
  subtitle: 'Koffi et Esther Mensah font construire leur maison. Avant de calculer quoi que ce soit, Awa écoute, pose les bonnes questions et explique comment le projet va se dérouler.',
  blocks: [
    { type: 'scene', text: 'Semaine 1 · Bureau d’études Lumen Ingénierie' },
    {
      type: 'objectives',
      items: [
        'Savoir qui fait quoi dans un projet : client, architecte, ingénieur, entreprise.',
        'Poser les questions qui changent la conception.',
        'Comprendre le déroulé d’un projet, de l’avant-projet à la réception.',
        'Repérer ce qui doit être décidé tout de suite (la terre en fond de fouille).',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '160 m²', label: 'surface de la villa' },
        { value: '4', label: 'grandes phases du projet' },
        { value: '1', label: 'urgence : la terre avant le béton' },
      ],
    },
    {
      type: 'text',
      text: 'Awa Diallo est ingénieure électricienne dans un petit bureau d’études. Ce matin, l’architecte Jules Agbo lui envoie un nouveau client : la famille Mensah, qui fait construire une villa de plain-pied de 160 m² avec trois chambres. Les plans sont presque terminés ; les fondations doivent être coulées dans un mois.',
    },
    { type: 'illustration', name: 'consultant-office', caption: 'Le bureau d’études : là où l’on conçoit avant que l’on construise' },
    {
      type: 'dialogue',
      speaker: 'Koffi Mensah',
      role: 'client',
      text: 'Bonjour Madame Diallo. Honnêtement, je pensais que l’électricien du chantier s’occupait de tout. Pourquoi faut-il un ingénieur pour une simple maison ?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'L’électricien réalise, moi je conçois. Mon travail, c’est de décider avant le chantier combien de puissance demander au distributeur, où passent les câbles, comment protéger votre famille et de quelle taille sont les fils. Si on improvise sur place, on découvre les problèmes quand les murs sont enduits, et chaque correction coûte cher.',
    },

    { type: 'heading', text: 'Qui fait quoi dans un projet' },
    {
      type: 'text',
      text: 'Awa dessine sur une feuille les acteurs du projet, pour que les Mensah sachent à qui s’adresser :',
    },
    {
      type: 'table',
      headers: ['Acteur', 'Dans ce projet', 'Son rôle'],
      rows: [
        ['Maître d’ouvrage (le client)', 'Koffi et Esther Mensah', 'exprime le besoin, finance, décide'],
        ['Architecte', 'Jules Agbo', 'conçoit le bâtiment, coordonne les métiers'],
        ['Bureau d’études électricité', 'Awa Diallo', 'conçoit l’installation, rédige les plans et le cahier des charges, suit le chantier'],
        ['Entreprise d’électricité', 'Moussa Keïta, chef de chantier', 'achète le matériel et réalise les travaux'],
        ['Bureau de contrôle (selon le projet)', '—', 'vérifie la conformité à la norme'],
      ],
    },
    { type: 'illustration', name: 'org-chart', caption: 'Les acteurs d’un projet de construction' },
    {
      type: 'note',
      text: 'Sur un projet de cette taille, certains rôles sont tenus par la même personne : Awa conçoit et surveille le chantier (ingénieure de conception et de supervision) ; l’entreprise de Moussa achète le matériel, dessine les détails d’exécution et réalise. Sur l’immeuble du projet 2, chacun de ces rôles sera tenu par un ingénieur différent.',
    },
    {
      type: 'dialogue',
      speaker: 'Esther Mensah',
      role: 'client',
      text: 'Donc si je veux une prise de plus dans la cuisine, je vous le dis à vous, pas à l’électricien ?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Exactement, et de préférence maintenant. Je mets la prise sur le plan, je vérifie que le circuit le supporte, et Moussa la posera au bon endroit. Une demande faite directement sur le chantier, sans passer par le plan, c’est comme ça qu’on finit avec des circuits surchargés.',
    },
    { type: 'fiche', id: 'project-parties', why: 'Les rôles détaillés de chaque acteur et de chaque ingénieur.' },

    { type: 'heading', text: 'Les questions qui changent tout' },
    {
      type: 'text',
      text: 'Avant de parler technique, Awa remplit avec eux un questionnaire. Chaque réponse aura une conséquence directe sur le dimensionnement :',
    },
    {
      type: 'table',
      headers: ['Question', 'Réponse des Mensah', 'Pourquoi Awa la pose'],
      rows: [
        ['Combien de climatiseurs, où ?', 'séjour + 3 chambres', 'la clim est souvent la plus grosse charge de la maison'],
        ['Cuisson au gaz ou électrique ?', 'gaz + un four électrique', 'une plaque électrique ajouterait 5 à 7 kW'],
        ['Eau chaude ?', 'chauffe-eau électrique 100 L', '1,5 kW de plus, souvent en même temps que la clim'],
        ['Eau : réseau ou forage ?', 'forage au fond du jardin', 'il faudra alimenter une pompe éloignée'],
        ['Projets futurs ?', 'panneaux solaires « un jour »', 'on réserve de la place dans le tableau et un passage de câbles'],
        ['Coupures de courant fréquentes ?', 'oui, plusieurs par mois', 'on prévoit dès maintenant le raccordement d’une source de secours'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Koffi Mensah',
      role: 'client',
      text: 'Le solaire, ce n’est pas pour tout de suite. Pourquoi en parler aujourd’hui ?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Parce que poser aujourd’hui un fourreau vide entre le toit et le tableau coûte presque rien. Le jour où vous voudrez des panneaux, il suffira de tirer le câble dedans. Sans ce fourreau, il faudrait casser un mur.',
    },
    {
      type: 'regional',
      text: 'Avec les délestages fréquents, beaucoup de clients installent plus tard un groupe électrogène ou un système solaire avec batteries. Prévoir dès la conception un emplacement dans le tableau, un inverseur de sources et un circuit « prioritaire » (éclairage, frigo, une prise par pièce) évite de tout recâbler ensuite.',
    },

    { type: 'heading', text: 'Comment le projet va se dérouler' },
    {
      type: 'text',
      text: 'Awa présente ensuite les étapes. Elle insiste sur un point : on conçoit dans un ordre précis, parce que chaque étape a besoin du résultat de la précédente.',
    },
    { type: 'illustration', name: 'design-roadmap', props: { step: 0 }, caption: 'Les étapes de la conception, de la puissance au dossier final' },
    {
      type: 'bullets',
      items: [
        'Lire les plans de l’architecte et noter les besoins de chaque pièce.',
        'Faire le bilan de puissance : combien de kVA demander au distributeur.',
        'Placer l’éclairage et les prises, pièce par pièce.',
        'Regrouper les points en circuits et composer le tableau.',
        'Choisir les protections : disjoncteurs, différentiels, terre.',
        'Dimensionner les câbles et vérifier la chute de tension.',
        'Remettre les plans d’exécution, puis suivre le chantier et réceptionner.',
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Esther Mensah',
      role: 'client',
      text: 'Et nous, qu’est-ce qu’on reçoit à la fin ?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'D’abord des plans pour construire, avec chaque prise et chaque circuit. Puis, après le chantier, les plans « tels que construits » : là où les câbles passent vraiment. Gardez-les précieusement : le jour où vous percez un mur ou agrandissez la maison, c’est ce document qui évite les accidents.',
    },
    { type: 'fiche', id: 'design-steps', why: 'Les étapes de la conception et ce que produit chacune.' },
    { type: 'fiche', id: 'drawings-coordination', why: 'Plans de conception, d’exécution et de récolement (as-built).' },

    { type: 'heading', text: 'Une urgence : la terre dans les fondations' },
    {
      type: 'text',
      text: 'En partant, Awa appelle Jules Agbo, l’architecte. Les fondations sont coulées dans un mois, et c’est le seul moment pour poser la meilleure prise de terre possible : un câble de cuivre nu au fond des fouilles, tout autour de la maison.',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Jules, peux-tu prévenir le maçon ? Avant le béton des fondations, je veux une boucle en cuivre nu de 25 mm² au fond de la fouille, avec une remontée vers l’emplacement du tableau. Une fois le béton coulé, on ne pourra plus jamais la poser.',
    },
    {
      type: 'note',
      text: 'Première leçon du métier : certaines décisions électriques se prennent avant même que le premier mur soit monté. La prise de terre en fond de fouille, les fourreaux enterrés vers le jardin et les réservations dans les dalles en font partie.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'L’ingénieur conçoit, l’entreprise réalise : toute modification passe par le plan.',
        'Le questionnaire de départ (clim, cuisson, eau chaude, pompe, projets futurs, coupures) conditionne tout le dimensionnement.',
        'On conçoit dans un ordre fixe : puissance → points → circuits → protections → câbles → dossier.',
        'Certaines décisions se prennent avant les fondations : prise de terre, fourreaux, réservations.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Un client vous dit : « On verra l’emplacement des climatiseurs plus tard, quand on aura emménagé. » Que lui répondez-vous ?',
      solution: [
        'Chaque climatiseur demande un circuit dédié depuis le tableau, un passage pour les liaisons frigorifiques et l’évacuation des condensats, et un emplacement pour l’unité extérieure.',
        'Les décider après les enduits impose des goulottes apparentes ou des saignées dans des murs finis, et peut obliger à changer le tableau ou l’abonnement.',
        'On les place donc dès la conception, quitte à n’acheter les appareils que plus tard.',
      ],
    },
    {
      type: 'exercise',
      question: 'Classez dans l’ordre : dimensionner les câbles, faire le bilan de puissance, placer les prises, choisir les disjoncteurs, regrouper en circuits.',
      solution: [
        'Bilan de puissance → placer les prises → regrouper en circuits → choisir les disjoncteurs → dimensionner les câbles.',
        'Chaque étape a besoin de la précédente : on ne peut pas choisir un câble sans connaître le disjoncteur qui le protège, ni un disjoncteur sans connaître le circuit.',
      ],
    },
  ],
};
