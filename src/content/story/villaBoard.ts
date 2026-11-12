import { TopicContent } from '../types';

export const villaBoardContent: TopicContent = {
  title: 'Le tableau électrique de la maison',
  subtitle: 'Quatorze circuits à ranger : quel disjoncteur pour chacun, sur quelle phase, derrière quel différentiel ? Awa construit le « panel schedule » de la villa et explique pourquoi l’ordre compte.',
  blocks: [
    { type: 'scene', text: 'Semaine 3 · Bureau d’études' },
    {
      type: 'objectives',
      items: [
        'Choisir le calibre d’un disjoncteur à partir du courant du circuit et du câble.',
        'Répartir les circuits sur les trois phases et mesurer le déséquilibre.',
        'Lire et construire un tableau de répartition des charges (« panel load schedule »).',
        'Grouper les circuits derrière les différentiels sans priver la maison de lumière.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '14 + 4', label: 'circuits + réserves (18 départs)' },
        { value: '4,1 %', label: 'déséquilibre entre phases' },
        { value: '13,0 kVA', label: 'demande avec 15 % de réserve' },
        { value: '18,8 A', label: 'courant par phase au branchement' },
      ],
    },
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
    {
      type: 'calc',
      title: 'Calibre du disjoncteur de la clim du séjour',
      steps: [
        { label: 'Courant absorbé (1 800 W, cos φ 0,9, 230 V)', formula: 'I_{charge} = \\frac{P}{U × cos φ} = \\frac{1 800}{230 × 0,9} ≈ 8,7 A' },
        { label: 'Marge de 25 % (fonctionnement continu)', formula: 'I_{CB} ≥ 1,25 × I_{charge} = 1,25 × 8,7 ≈ 10,9 A' },
        { label: 'Calibre normalisé juste au-dessus', formula: '10 A < 10,9 A ≤ 16 A' },
        { label: 'Vérification côté câble (2,5 mm² encastré)', formula: 'I_{CB} = 16 A ≤ I_Z ≈ 24 A' },
      ],
      result: 'Disjoncteur 16 A, câble 2,5 mm²   (I_{charge} ≤ I_{CB} ≤ I_Z)',
    },
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
    {
      type: 'subheading',
      text: 'Le tableau de répartition des charges',
    },
    {
      type: 'text',
      text: 'Au bureau d’études, ce travail tient dans un document standard : le « panel load schedule ». Les circuits impairs sont à gauche, les pairs à droite, et chaque rangée du tableau est raccordée à une phase, dans l’ordre L1, L2, L3, L1… C’est la disposition réelle des disjoncteurs sur les barres. Les colonnes vertes donnent la charge de chaque circuit en kVA, sur la phase qui le porte ; le bas du tableau additionne chaque phase.',
    },
    {
      type: 'panelSchedule',
      panel: {
        name: 'TD Villa Mensah',
        location: 'Garage, à 1,30 m du sol',
        voltage: '230/400 V · 3P+N+PE · 50 Hz',
        panelType: 'Coffret modulaire 4 × 13 modules',
        mounting: 'Encastré',
        scRating: 'Icn 6 kA (disjoncteurs)',
        main: 'Disj. de branchement 4P 500 mA (S)',
        feeder: '5G10 mm² Cu depuis le compteur',
        left: [
          { desc: 'Écl. séjour · ID1', kva: 0.13, cb: 'C10', wire: '1,5 mm²' },
          { desc: 'Prises cuisine · ID2', kva: 1.4, cb: 'C20', wire: '2,5 mm²' },
          { desc: 'Écl. pièces · ID3', kva: 0.16, cb: 'C10', wire: '1,5 mm²' },
          { desc: 'Écl. extérieur · ID1', kva: 0.1, cb: 'C10', wire: '1,5 mm²' },
          { desc: 'Lave-linge · ID2', kva: 2.1, cb: 'C20', wire: '2,5 mm²' },
          { desc: 'Chauffe-eau · ID3', kva: 1.5, cb: 'C16', wire: '2,5 mm²' },
          { desc: 'Prises chambres · ID1', kva: 0.7, cb: 'C20', wire: '2,5 mm²' },
          { desc: 'Clim chambre 1 · ID4', kva: 1.0, cb: 'C16', wire: '2,5 mm²' },
          { desc: 'Pompe forage · ID3', kva: 1.75, cb: 'C16', wire: '4 mm²' },
        ],
        right: [
          { desc: 'Four (plaque future) · ID2', kva: 2.5, cb: 'C32', wire: '6 mm²' },
          { desc: 'Clim chambre 2 · ID4', kva: 1.0, cb: 'C16', wire: '2,5 mm²' },
          { desc: 'Prises séjour + SdB · ID1', kva: 1.4, cb: 'C20', wire: '2,5 mm²' },
          { desc: 'Clim séjour · ID4', kva: 2.0, cb: 'C16', wire: '2,5 mm²' },
          { desc: '', spare: true },
          { desc: 'Clim chambre 3 · ID4', kva: 1.0, cb: 'C16', wire: '2,5 mm²' },
          { desc: '', spare: true },
          { desc: '', spare: true },
          { desc: '', spare: true },
        ],
        demandKva: 11.3,
        spareMargin: 15,
      },
    },
    {
      type: 'calc',
      title: 'Lire le bas du tableau',
      steps: [
        { label: 'Charge de chaque phase (somme des colonnes vertes)', formula: 'S_{L1} = 5,43 kVA   ·   S_{L2} = 5,50 kVA   ·   S_{L3} = 5,81 kVA' },
        { label: 'Moyenne et déséquilibre', formula: 'S_{moy} = \\frac{16,74}{3} = 5,58 kVA   ;   Δ = \\frac{5,81 − 5,58}{5,58} ≈ 4,1 %' },
        { label: 'Demande après foisonnement (étape 4), plus 15 % de réserve', formula: 'S = 11,3 × 1,15 ≈ 13,0 kVA' },
        { label: 'Courant par phase au branchement', formula: 'I = \\frac{S}{\\sqrt{3} × U} = \\frac{13 000}{\\sqrt{3} × 400} ≈ 18,8 A' },
      ],
      result: 'Phases équilibrées à 4 % près ; 18,8 A par phase avec la réserve',
    },
    {
      type: 'note',
      text: 'Pourquoi 4,1 % ici et 1,8 % plus haut ? Le tableau compte en kVA (puissance apparente), qui tient compte du cos φ des moteurs et des clims ; le calcul en watts les avantageait. C’est la valeur en kVA qui fait chauffer les câbles. On vise moins de 10 %, et moins de 5 % est un très bon résultat. Remarquez aussi les quatre « Réserve » : des emplacements équipés plus tard sans changer de coffret.',
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
      headers: ['Différentiel', 'Type', 'Circuits', 'Phases'],
      rows: [
        ['ID 1', 'AC', 'éclairage séjour, éclairage extérieur, prises chambres, prises séjour + SdB', 'L1, L3'],
        ['ID 2', 'A', 'four (plaque future), lave-linge, prises cuisine', 'L1, L2'],
        ['ID 3', 'AC', 'éclairage pièces, chauffe-eau, pompe du forage', 'L3'],
        ['ID 4', 'AC', 'clims séjour, chambre 1, chambre 2, chambre 3', 'L1, L2, L3'],
      ],
    },
    {
      type: 'decision',
      title: 'Groupement des circuits',
      choice: 'Quatre interrupteurs différentiels 30 mA, l’éclairage réparti sur ID 1 et ID 3',
      reasons: [
        'Un défaut sur un appareil ne coupe qu’un quart de la maison.',
        'Il reste toujours de la lumière : séjour sur ID 1, pièces sur ID 3.',
        'Le type A protège les appareils à électronique (four, lave-linge).',
      ],
      rejected: 'Un seul différentiel pour toute la maison : moins cher, mais le moindre défaut plonge tout dans le noir.',
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
