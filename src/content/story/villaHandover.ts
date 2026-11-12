import { TopicContent } from '../types';

export const villaHandoverContent: TopicContent = {
  title: 'Chantier, essais et remise des clés',
  subtitle: 'Le plan ne suffit pas : Awa suit le chantier, corrige ce qui dérive, mesure tout ce qui doit l’être, puis remet aux Mensah un dossier qui leur servira pendant trente ans.',
  blocks: [
    { type: 'scene', text: 'Mois 2 à 5 · Sur le chantier' },
    {
      type: 'objectives',
      items: [
        'Suivre les étapes du chantier, des saignées à la finition.',
        'Réaliser les essais avant mise sous tension.',
        'Remettre au client un dossier complet.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '≥ 0,5 MΩ', label: 'isolement minimal exigé' },
        { value: '200 MΩ', label: 'isolement mesuré' },
        { value: '38 Ω', label: 'résistance de terre' },
        { value: '14', label: 'circuits essayés et étiquetés' },
      ],
    },
    {
      type: 'text',
      text: 'Moussa Keïta, le chef de chantier de l’entreprise d’électricité, a reçu les plans d’exécution. Awa passe une fois par semaine. Chaque visite suit le même fil : comparer ce qui est posé à ce qui est dessiné, avant que ce soit caché.',
    },
    { type: 'illustration', name: 'contractor-site', caption: 'L’entreprise réalise ; le bureau d’études vérifie' },

    { type: 'heading', text: '1 · Les étapes du chantier' },
    {
      type: 'table',
      headers: ['Phase', 'Ce que fait l’entreprise', 'Ce que vérifie Awa'],
      rows: [
        ['Fondations', 'boucle de terre en fond de fouille, fourreaux enterrés', 'continuité de la boucle, remontée vers le tableau, profondeur des fourreaux'],
        ['Maçonnerie', 'saignées, gaines et boîtes encastrées', 'emplacements conformes au plan, hauteurs, gaines non écrasées'],
        ['Avant enduits', 'dernière vérification des réservations', 'c’est le dernier moment pour déplacer une boîte sans casser'],
        ['Tirage des câbles', 'fils tirés dans les gaines', 'sections, couleurs, nombre de circuits par gaine'],
        ['Finitions', 'appareillage, luminaires, tableau', 'étiquetage, serrage, raccordement des terres'],
        ['Fin de chantier', 'mise sous tension', 'essais et mesures (ci-dessous)'],
      ],
    },
    { type: 'scene', text: 'Mois 3 · Visite de chantier' },
    {
      type: 'dialogue',
      speaker: 'Moussa Keïta (chef de chantier)',
      role: 'team',
      text: 'Madame Diallo, il me reste du 2,5 mm² en stock. Pour la pompe, ça ira bien, non ? Ça nous évite une commande.',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Non, Moussa, on garde le 4 mm². Sur 80 m, le 2,5 donne près de 4 % de chute en marche et plus de 11 % au démarrage. La pompe fonctionnerait, mais elle chaufferait et lâcherait au bout de quelques saisons, et c’est vous qu’on rappellerait. Je note la modification refusée dans le compte rendu de visite.',
    },
    {
      type: 'text',
      text: 'Chaque visite donne lieu à un compte rendu daté, envoyé au client, à l’architecte et à l’entreprise. Ce n’est pas de la paperasse : en cas de litige, c’est la preuve de ce qui a été décidé, et par qui.',
    },
    { type: 'illustration', name: 'eng-supervision', caption: 'Le suivi de chantier : comparer le posé au dessiné, et l’écrire' },

    { type: 'heading', text: '2 · Les essais avant la mise en service' },
    {
      type: 'text',
      text: 'Avant de laisser la famille emménager, Awa et Moussa mesurent l’installation. On ne se contente pas de « ça s’allume » : chaque mesure vérifie une protection qu’on a calculée.',
    },
    {
      type: 'table',
      headers: ['Essai', 'Ce qu’il vérifie', 'Valeur attendue', 'Mesuré'],
      rows: [
        ['Continuité des conducteurs de protection', 'chaque prise et chaque carcasse est bien reliée à la terre', 'quelques dixièmes d’ohm', '0,3 à 0,8 Ω ✓'],
        ['Résistance de la prise de terre', 'condition R_A × I_Δn ≤ 50 V', '≤ 100 Ω', '38 Ω ✓'],
        ['Résistance d’isolement (500 V continu)', 'aucun câble n’est abîmé ni en contact avec la terre', '≥ 0,5 MΩ', '> 200 MΩ ✓'],
        ['Déclenchement des différentiels', 'ils coupent bien à 30 mA, assez vite', '≤ 300 ms à I_Δn', '22 à 35 ms ✓'],
        ['Polarité et tension aux prises', 'phase et neutre au bon endroit, bonne tension', '230 V ± 10 %', '228 à 232 V ✓'],
        ['Équilibre des phases en charge', 'la répartition du tableau', 'écart faible', 'L1 7,1 A · L2 6,8 A · L3 7,4 A ✓'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Koffi Mensah',
      role: 'client',
      text: 'Pourquoi mesurer l’isolement avec 500 V alors que la maison est en 230 V ?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Pour être sévère. Un isolant légèrement entaillé par un clou peut tenir à 230 V aujourd’hui et lâcher demain avec l’humidité. Sous 500 V, le défaut se révèle tout de suite, pendant qu’on peut encore le réparer facilement.',
    },

    { type: 'heading', text: '3 · La remise des clés' },
    {
      type: 'text',
      text: 'Le jour de la réception, Awa remet aux Mensah un dossier complet, et prend vingt minutes pour leur expliquer leur tableau.',
    },
    {
      type: 'bullets',
      items: [
        'Les plans de récolement (« tels que construits ») : le vrai trajet des câbles, mis à jour avec les modifications du chantier.',
        'Le schéma du tableau et la liste des circuits, collés à l’intérieur de la porte du coffret.',
        'Le rapport d’essais avec toutes les mesures.',
        'Les notices et garanties des appareils (clims, chauffe-eau, pompe).',
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Trois réflexes, et vous serez tranquilles. Un : une fois par mois, appuyez sur le bouton « Test » de chaque différentiel. Deux : si un différentiel saute et ne se réarme pas, débranchez les appareils de ce groupe un par un pour trouver le coupable. Trois : avant de percer un mur, regardez le plan de récolement.',
    },
    { type: 'illustration', name: 'drawing-sheet', props: { variant: 'asbuilt' }, caption: 'Le plan de récolement : la mémoire de l’installation' },
    { type: 'fiche', id: 'drawings-coordination', why: 'Plans d’exécution, plans d’atelier et plans de récolement.' },
    {
      type: 'regional',
      text: 'Selon le pays, le distributeur peut exiger avant la pose du compteur une attestation de conformité délivrée par un organisme agréé ou par l’installateur. Prévoyez ce délai dans le planning : sans compteur, pas d’emménagement. Awa conseille aussi de conserver une copie numérique du dossier : les documents papier résistent mal à l’humidité.',
    },

    { type: 'heading', text: 'Bilan du projet 1' },
    {
      type: 'text',
      text: 'La villa des Mensah a permis de parcourir tout le métier à petite échelle : comprendre le besoin, lire les plans, faire le bilan de puissance, placer les points, composer le tableau, protéger les personnes, dimensionner les câbles et réceptionner. Les projets suivants reprennent les mêmes étapes, mais chacune devient plus exigeante.',
    },
    {
      type: 'bullets',
      items: [
        'On vérifie au chantier ce qui va être caché, avant qu’il le soit.',
        'Chaque décision et chaque modification refusée sont écrites dans un compte rendu.',
        'Les essais vérifient les calculs : terre, isolement, différentiels, tension, équilibre.',
        'Le dossier final (plans de récolement, schéma du tableau, essais) appartient au client et lui sert pendant toute la vie du bâtiment.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Lors de l’essai, la résistance d’isolement d’un circuit de prises mesure 0,2 MΩ. Que faites-vous ?',
      solution: [
        'La valeur est sous le minimum de 0,5 MΩ : on ne met pas ce circuit en service.',
        'On isole le défaut : on débranche les appareils, puis on mesure tronçon par tronçon (boîte par boîte) jusqu’à trouver le câble abîmé ou la boîte humide.',
        'Après réparation, on refait la mesure et on la consigne dans le rapport.',
      ],
    },
    {
      type: 'exercise',
      question: 'Un différentiel déclenche en 450 ms lors de l’essai à 30 mA. Est-il acceptable ?',
      solution: [
        'Non : un différentiel « instantané » doit couper en 300 ms au plus à son courant nominal (et bien plus vite au-delà).',
        'On le remplace. Un appareil lent laisse passer un courant dangereux trop longtemps.',
      ],
    },
  ],
};
