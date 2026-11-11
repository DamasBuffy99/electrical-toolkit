import { TopicContent } from '../types';

export const villaBoardContent: TopicContent = {
  title: 'Le tableau électrique de la maison',
  subtitle: 'Quatorze circuits à ranger : quel disjoncteur pour chacun, sur quelle phase, derrière quel différentiel ? Awa construit le « panel schedule » de la villa et explique pourquoi l’ordre compte.',
  blocks: [
    { type: 'scene', text: 'Semaine 3 · Bureau d’études' },
    {
      type: 'text',
      text: 'Le tableau est le cœur de la maison. Tous les circuits y partent, chacun avec son disjoncteur. Awa le prépare sur un tableur appelé « panel schedule » : une ligne par circuit, avec sa charge, son calibre, son câble, sa phase.',
    },
    { type: 'illustration', name: 'villa-board', caption: 'Le tableau de la villa : un disjoncteur général, quatre différentiels, quatorze circuits' },

    { type: 'heading', text: '1 · Choisir le calibre de chaque disjoncteur' },
    {
      type: 'dialogue',
      speaker: 'Koffi Mensah',
      role: 'client',
      text: 'Pourquoi ne pas mettre partout de gros disjoncteurs ? Comme ça, ils ne sauteront jamais.',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Justement, le disjoncteur doit sauter avant que le câble ne chauffe. Il protège le fil, pas l’appareil. Si je mets 32 A sur un fil prévu pour 16 A, le jour d’une surcharge le fil chauffe dans le mur sans que rien ne coupe. C’est comme ça que démarrent les incendies.',
    },
    {
      type: 'text',
      text: 'La règle : le calibre doit être au-dessus du courant normal du circuit (avec une marge de 25 %), et au-dessous de ce que le câble supporte. Exemple avec le climatiseur du séjour, qui absorbe 8,7 A :',
    },
    { type: 'formula', text: 'I_{CB} ≥ 1,25 × I_{charge} = 1,25 × 8,7 ≈ 10,9 A  →  calibre normalisé 16 A' },
    { type: 'formula', text: 'Calibres normalisés (A) : 6 · 10 · 16 · 20 · 25 · 32 · 40 · 50 · 63' },
    {
      type: 'text',
      text: 'Pour les circuits courants, on utilise des associations standard, toujours avec ce même principe : un câble de 1,5 mm² se protège à 10 ou 16 A, un câble de 2,5 mm² à 16 ou 20 A, un câble de 6 mm² à 32 A.',
    },
    {
      type: 'dialogue',
      speaker: 'Esther Mensah',
      role: 'client',
      text: 'Le four ne fait que 2,5 kW. Pourquoi un circuit de 32 A en 6 mm² ?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Pour 2,5 kW, 16 A suffiraient. Mais vous m’avez dit que vous hésitiez pour une plaque électrique. Si je pose aujourd’hui un câble de 6 mm² jusqu’à la cuisine, vous pourrez l’installer un jour sans ouvrir les murs. Le surcoût, ce sont quelques mètres de câble plus gros.',
    },
    { type: 'fiche', id: 'circuit-breaker', why: 'Calcul du courant, facteur de sécurité, calibres normalisés, courbes B, C, D.' },

    { type: 'heading', text: '2 · Équilibrer les trois phases' },
    {
      type: 'text',
      text: 'En triphasé, chaque circuit est raccordé sur l’une des trois phases. Awa les répartit pour que chaque phase porte à peu près la même charge. Sinon, une phase serait surchargée pendant que les deux autres se reposent, et le disjoncteur de branchement couperait pour rien.',
    },
    {
      type: 'table',
      headers: ['Phase', 'Circuits', 'Puissance installée'],
      rows: [
        ['L1', 'four 2 500 + clim séjour 1 800 + prises chambres 600 + éclairage séjour 120 + extérieur 90', '5 110 W'],
        ['L2', 'lave-linge 2 000 + clims ch. 1 et 2 (2 × 900) + prises cuisine 1 300', '5 100 W'],
        ['L3', 'chauffe-eau 1 500 + pompe 1 400 + clim ch. 3 900 + prises séjour 1 300 + éclairage pièces 148', '5 248 W'],
      ],
    },
    { type: 'formula', text: 'Moyenne = \\frac{5 110 + 5 100 + 5 248}{3} ≈ 5 153 W   ;   écart max = \\frac{5 248 − 5 153}{5 153} ≈ 1,8 %' },
    {
      type: 'text',
      text: 'Moins de 2 % d’écart : l’équilibre est excellent. Awa a placé les gros appareils (four, lave-linge, chauffe-eau) chacun sur une phase différente, puis complété avec les clims et les petits circuits.',
    },

    { type: 'heading', text: '3 · Ranger derrière les différentiels' },
    {
      type: 'text',
      text: 'Les circuits ne sont pas branchés directement sur l’arrivée : ils passent par des interrupteurs différentiels 30 mA, qui coupent en cas de fuite de courant vers la terre (on verra pourquoi à l’étape suivante). Awa en prévoit quatre et répartit les circuits avec trois idées en tête :',
    },
    {
      type: 'bullets',
      items: [
        'Ne jamais mettre tout l’éclairage derrière le même différentiel : si celui-ci déclenche, il reste de la lumière ailleurs (éclairage séjour sur le 1er, éclairage des pièces sur le 3e).',
        'Placer le four et le lave-linge derrière un différentiel de type A : leur électronique peut produire des fuites que le type AC classique détecte mal.',
        'Regrouper les quatre clims sur un même différentiel, en dernière rangée : faciles à repérer et à couper pour l’entretien.',
      ],
    },
    {
      type: 'table',
      headers: ['N°', 'Circuit', 'Calibre', 'Câble', 'Phase', 'Différentiel'],
      rows: [
        ['1', 'Éclairage séjour', '10 A', '1,5 mm²', 'L1', 'ID 1 (AC)'],
        ['2', 'Prises séjour + SdB', '20 A', '2,5 mm²', 'L3', 'ID 1 (AC)'],
        ['3', 'Prises chambres', '20 A', '2,5 mm²', 'L1', 'ID 1 (AC)'],
        ['4', 'Éclairage extérieur', '10 A', '1,5 mm²', 'L1', 'ID 1 (AC)'],
        ['5', 'Four (prévu plaque)', '32 A', '6 mm²', 'L1', 'ID 2 (A)'],
        ['6', 'Lave-linge', '20 A', '2,5 mm²', 'L2', 'ID 2 (A)'],
        ['7', 'Prises cuisine', '20 A', '2,5 mm²', 'L2', 'ID 2 (A)'],
        ['8', 'Éclairage pièces', '10 A', '1,5 mm²', 'L3', 'ID 3 (AC)'],
        ['9', 'Chauffe-eau', '16 A', '2,5 mm²', 'L3', 'ID 3 (AC)'],
        ['10', 'Pompe du forage', '16 A', '4 mm² (voir étape 8)', 'L3', 'ID 3 (AC)'],
        ['11', 'Clim séjour', '16 A', '2,5 mm²', 'L1', 'ID 4 (AC)'],
        ['12', 'Clim chambre 1', '16 A', '2,5 mm²', 'L2', 'ID 4 (AC)'],
        ['13', 'Clim chambre 2', '16 A', '2,5 mm²', 'L2', 'ID 4 (AC)'],
        ['14', 'Clim chambre 3', '16 A', '2,5 mm²', 'L3', 'ID 4 (AC)'],
      ],
    },
    { type: 'fiche', id: 'panel-schedule', why: 'Construire un panel schedule : circuits, phases, équilibre, demande.' },
    { type: 'fiche', id: 'panel-basics', why: 'Constitution d’un tableau et schéma unifilaire.' },

    { type: 'heading', text: '4 · Penser à demain' },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Je commande un coffret plus grand que nécessaire : 4 rangées de 13 modules. Il restera de la place pour l’inverseur du futur groupe ou du solaire. Et chaque disjoncteur aura une étiquette claire : « Clim chambre 2 », pas « D13 ». Le jour d’une panne, vous saurez quoi couper.',
    },
    {
      type: 'regional',
      text: 'Les variations de tension et les orages sont fréquents : Awa ajoute un parafoudre en tête de tableau, protégé par son propre disjoncteur. Pour les appareils sensibles (TV, ordinateurs, clims inverter), certains clients ajoutent un protecteur de tension (coupure automatique en cas de sous- ou de surtension) : utile quand la tension du réseau descend souvent sous 200 V ou dépasse 250 V.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Le disjoncteur protège le câble : calibre ≥ 1,25 × courant de charge, et ≤ ce que supporte le câble.',
        'En triphasé, on répartit les gros appareils sur les trois phases ; on vise un écart de quelques pourcents.',
        'Plusieurs différentiels, et l’éclairage réparti entre eux ; type A pour four, plaque et lave-linge.',
        'On garde de la réserve (environ 20 %) et on étiquette chaque circuit.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Le chauffe-eau absorbe 1 500 W. Vérifiez qu’un disjoncteur de 16 A convient.',
      solution: ['I = 1 500 / 230 ≈ 6,5 A ; 1,25 × 6,5 ≈ 8,2 A.', 'Le calibre normalisé juste au-dessus serait 10 A ; 16 A convient aussi, puisque le câble de 2,5 mm² supporte plus de 16 A. On prend la valeur standard du circuit spécialisé.'],
    },
    {
      type: 'exercise',
      question: 'On déplace le four (2 500 W) de L1 vers L2. Calculez le nouvel écart maximal entre phases. Est-ce acceptable ?',
      solution: [
        'L1 = 5 110 − 2 500 = 2 610 W ; L2 = 5 100 + 2 500 = 7 600 W ; L3 = 5 248 W. Moyenne inchangée : 5 153 W.',
        'Écart max = (7 600 − 5 153) / 5 153 ≈ 47 % : très mauvais équilibre. L2 risque de faire déclencher le branchement alors que L1 est à moitié vide.',
      ],
    },
  ],
};
