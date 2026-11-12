import { TopicContent } from '../types';

export const clinicGeneratorContent: TopicContent = {
  title: 'Groupe électrogène et inverseur de sources',
  subtitle: 'Les groupes doivent reprendre le niveau essentiel en moins de 15 secondes, à chaque coupure, pendant des années. Awa les dimensionne, prévoit la panne du groupe lui-même et explique la séquence de reprise.',
  blocks: [
    { type: 'scene', text: 'Mois 2 · Réunion avec la directrice et le technicien biomédical' },
    {
      type: 'objectives',
      items: [
        'Dimensionner un groupe électrogène pour une charge secourue.',
        'Justifier la redondance N+1 dans un établissement de santé.',
        'Décrire la séquence de reprise et le rôle de l’inverseur.',
        'Construire le tableau de répartition d’un tableau secouru.',
        'Vérifier qu’un court-circuit est encore coupé quand le groupe est seul.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '2 × 200 kVA', label: 'groupes en N+1' },
        { value: '≈ 10 s', label: 'du noir à la bascule' },
        { value: '≈ 870 A', label: 'court-circuit entretenu d’un groupe' },
        { value: '400 A', label: 'seuil court retard du départ bloc' },
      ],
    },
    { type: 'illustration', name: 'clinic-tiers', props: { highlight: 'generator' }, caption: 'Les groupes reprennent le niveau essentiel en moins de 15 secondes' },
    {
      type: 'dialogue',
      speaker: 'Dr Aïcha Bello',
      role: 'client',
      text: 'Un groupe de 120 kVA suffit donc, puisqu’on a 118 kVA à secourir ?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Non, pour deux raisons. D’abord, un groupe doit encaisser les démarrages de moteurs (ascenseur, compresseurs d’air médical) et l’alimentation des onduleurs, qui le sollicitent plus qu’une charge ordinaire ; et il perd de la puissance avec la chaleur. Ensuite, et surtout : que se passe-t-il si votre unique groupe ne démarre pas ?',
    },

    { type: 'heading', text: '1 · La taille d’un groupe' },
    { type: 'formula', text: 'S_{groupe} ≥ \\frac{118 × 1,25}{0,9} ≈ 164 kVA  →  groupe normalisé de 200 kVA' },
    {
      type: 'text',
      text: 'Le facteur 1,25 couvre les démarrages de moteurs et la charge non linéaire des onduleurs ; le 0,9 tient compte du déclassement à 40 °C. À 118 kVA sur 200, le groupe tourne vers 60 % de sa charge : une zone saine pour un moteur diesel.',
    },
    { type: 'fiche', id: 'generator-ups-ats', why: 'Dimensionnement des groupes, des inverseurs et des onduleurs.' },

    { type: 'heading', text: '2 · La redondance : deux groupes au lieu d’un' },
    {
      type: 'dialogue',
      speaker: 'Serge (technicien biomédical)',
      role: 'team',
      text: 'Dans mon ancien hôpital, le groupe n’a pas démarré un jour : batterie de démarrage à plat. On a opéré à la lampe frontale.',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'C’est la panne la plus courante. C’est pour ça que je propose deux groupes de 200 kVA, chacun capable de porter seul tout le niveau essentiel. On parle de redondance « N+1 » : il en faut un, on en installe deux. Ils alternent chaque mois ; si celui qui doit démarrer échoue, l’automate lance l’autre automatiquement.',
    },
    {
      type: 'table',
      headers: ['Solution', 'Avantage', 'Limite'],
      rows: [
        ['1 groupe de 200 kVA', 'moins cher', 'une panne du groupe = plus rien d’essentiel'],
        ['2 groupes de 200 kVA (N+1)', 'un groupe peut tomber en panne ou être en entretien sans risque', 'investissement et local plus grands'],
      ],
    },
    { type: 'fiche', id: 'transformer-generator', why: 'Locaux des groupes : dégagements, ventilation, échappement.' },

    { type: 'heading', text: '3 · La séquence de reprise, seconde par seconde' },
    {
      type: 'bullets',
      items: [
        '0 s : le réseau disparaît. Le niveau vital ne voit rien : les onduleurs prennent le relais sur leurs batteries.',
        '0 à 3 s : l’automate confirme qu’il ne s’agit pas d’une micro-coupure, et délestera tout le niveau normal.',
        '3 s : ordre de démarrage au groupe de service.',
        '≈ 10 s : le groupe atteint 400 V et 50 Hz ; l’inverseur bascule le TGBT secouru sur le groupe.',
        '10 à 30 s : les gros moteurs (ascenseur, compresseurs d’air médical, CTA du bloc) redémarrent l’un après l’autre, pour ne pas faire chuter la tension du groupe.',
        'Retour du réseau : l’inverseur attend quelques minutes de stabilité, rebascule, puis le groupe refroidit à vide avant de s’arrêter.',
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Dr Aïcha Bello',
      role: 'client',
      text: 'Et pendant ces dix secondes, la lumière du couloir s’éteint ?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'L’éclairage des couloirs, oui, une dizaine de secondes. Mais les blocs d’éclairage de sécurité s’allument immédiatement sur leur propre batterie, et au bloc opératoire le scialytique est sur onduleur : il ne cligne même pas. On verra ces deux points aux étapes suivantes.',
    },
    {
      type: 'note',
      text: 'Comme pour la Résidence Les Palmiers, l’inverseur a un double verrouillage mécanique et électrique : jamais de groupe en parallèle avec le réseau public, pour la sécurité des agents du distributeur.',
    },
    {
      type: 'regional',
      text: 'Un groupe de 200 kVA consomme de l’ordre de 25 à 30 litres de gazole par heure à 60 % de charge. Avec quatre heures de coupure par jour, c’est environ 110 litres par jour : prévoir une cuve de plusieurs milliers de litres, un contrat de livraison, et un stock tampon pour les périodes de pénurie de carburant.',
    },

    { type: 'heading', text: '4 · Le tableau secouru du bloc et le court-circuit sur groupe' },
    {
      type: 'text',
      text: 'Le TGBT secouru alimente plusieurs tableaux d’étage. Celui du bloc opératoire porte les équipements essentiels : traitement d’air des salles, stérilisation, air et vide médicaux, prises « rouges » des chambres. Les prises vitales, elles, sont derrière les onduleurs. Voici son tableau de répartition.',
    },
    {
      type: 'panelSchedule',
      panel: {
        name: 'TD-ES Bloc opératoire',
        location: 'Gaine technique, niveau bloc',
        voltage: '230/400 V · 3P+N+PE · TN-S',
        panelType: 'Armoire forme 3b, repérage rouge (secouru)',
        mounting: 'Au sol',
        scRating: 'Icu 15 kA',
        main: 'Inter-sectionneur 4P 125 A',
        feeder: '5G35 mm² Cu, MCCB 125 A électronique, Ir 100 A',
        left: [
          { desc: 'Traitement d’air salles (CTA) 15 kW', kva: 17.6, cb: 'MCCB 40 A', poles: 3, wire: '5G10 mm²' },
          { desc: 'Stérilisation (autoclave) 24 kW', kva: 24, cb: 'C40 3P', poles: 3, wire: '5G10 mm²' },
          { desc: 'Éclairage couloirs bloc', kva: 1.2, cb: 'C10', wire: '1,5 mm²' },
          { desc: 'Prises rouges ch. 1–6 (RCBO 30 mA)', kva: 2.0, cb: 'C16 DD', wire: '2,5 mm²' },
          { desc: 'Prises rouges ch. 7–12 (RCBO 30 mA)', kva: 2.0, cb: 'C16 DD', wire: '2,5 mm²' },
          { desc: '', spare: true },
          { desc: '', spare: true },
          { desc: '', spare: true },
        ],
        right: [
          { desc: 'Compresseur air médical 7,5 kW', kva: 10, cb: 'DM 13–18 A', poles: 3, wire: '4G4 mm²' },
          { desc: 'Pompe à vide médical 5,5 kW', kva: 7.4, cb: 'DM 9–14 A', poles: 3, wire: '4G2,5 mm²' },
          { desc: 'Réfrigérateurs pharmacie, vaccins', kva: 0.8, cb: 'C16 DD', wire: '2,5 mm²' },
          { desc: 'Prises rouges couloir bloc', kva: 1.5, cb: 'C16 DD', wire: '2,5 mm²' },
          { desc: 'Appel malade, contrôle d’accès', kva: 0.6, cb: 'C10', wire: '1,5 mm²' },
          { desc: '', spare: true },
          { desc: '', spare: true },
          { desc: '', spare: true },
        ],
        demandFactor: 0.75,
        spareMargin: 15,
      },
    },
    {
      type: 'calc',
      title: 'Ce que dit le bas du tableau',
      steps: [
        { label: 'Puissance installée, puis coefficient de simultanéité 0,75', formula: 'S_{inst} ≈ 67,1 kVA   →   S = 0,75 × 67,1 ≈ 50,3 kVA' },
        { label: 'Avec 15 % de réserve', formula: 'I = \\frac{50 300 × 1,15}{\\sqrt{3} × 400} ≈ 83,5 A' },
        { label: 'Réglage du départ au TGBT secouru et câble', formula: 'I = 83,5 A ≤ I_r = 100 A ≤ I_Z(35 mm²) ≈ 130 A' },
      ],
      result: 'Départ MCCB 125 A réglé à 100 A, câble 5G35 mm² ; déséquilibre ≈ 3,6 %',
    },
    {
      type: 'dialogue',
      speaker: 'Marc Adjovi (supervision)',
      role: 'team',
      text: 'Ta note de sélectivité est faite avec les 14 kA du transformateur. Et quand c’est le groupe qui alimente, le court-circuit vaut combien ?',
    },
    {
      type: 'calc',
      title: 'Court-circuit sur le départ bloc, groupe seul',
      steps: [
        { label: 'Courant nominal d’un groupe de 200 kVA', formula: 'I_n = \\frac{200 000}{\\sqrt{3} × 400} ≈ 289 A' },
        { label: 'Premières millisecondes (réactance subtransitoire X_d″ ≈ 12 %)', formula: 'I_{cc}″ ≈ \\frac{289}{0,12} ≈ 2,4 kA  (décroît en quelques dizaines de ms)' },
        { label: 'Courant entretenu, alternateur à excitation renforcée (AREP ou PMG)', formula: 'I_{cc,entretenu} ≈ 3 × I_n ≈ 870 A pendant 10 s' },
        { label: 'MCCB thermomagnétique 125 A : magnétique fixe', formula: 'I_m = 10 × 125 = 1 250 A > 870 A  ✗' },
        { label: 'MCCB électronique : court retard réglé bas', formula: 'I_{sd} = 4 × I_r = 400 A < 870 A ✓   ;   t_{sd} = 0,1 s' },
      ],
      result: 'Déclencheur électronique avec I_{sd} = 400 A : le défaut est coupé en 0,1 s même sur groupe',
    },
    {
      type: 'decision',
      title: 'Protection des départs secourus',
      choice: 'Déclencheurs électroniques à court retard réglable sur tous les départs du TGBT secouru, alternateurs à excitation renforcée',
      reasons: [
        'Sur groupe, le courant de court-circuit est 15 fois plus faible que sur le transformateur : un magnétique réglé pour le réseau ne le voit plus.',
        'Le court retard à 400 A reste au-dessus des magnétiques des petits départs (C16 : 160 A au plus) : la sélectivité est conservée.',
        'L’excitation renforcée maintient environ 3 I_n pendant 10 s ; sans elle, la tension du groupe s’effondre et plus rien ne déclenche.',
      ],
      rejected: 'Des MCCB thermomagnétiques classiques : corrects sur le réseau, mais un court-circuit sur groupe ne serait coupé que par le thermique, en plusieurs secondes, avec un risque d’incendie.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Groupe ≥ charge secourue × 1,25 (démarrages, onduleurs) ÷ déclassement thermique ; viser 50 à 75 % de charge.',
        'Dans un établissement de santé, redondance N+1 : la panne d’un groupe ne doit rien couper.',
        'Séquence : délestage du normal, démarrage, bascule en ≈ 10 s, remise en route échelonnée des moteurs.',
        'L’onduleur couvre les 10 secondes de démarrage pour le niveau vital.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Pourquoi redémarre-t-on les moteurs l’un après l’autre après la bascule, au lieu de tout reprendre d’un coup ?',
      solution: [
        'Chaque moteur appelle plusieurs fois son courant nominal au démarrage. Sur un groupe, beaucoup moins puissant en court-circuit qu’un transformateur, les appels simultanés feraient chuter la tension.',
        'Une chute de tension sur le niveau essentiel pourrait faire décrocher d’autres équipements, voire caler le groupe. On échelonne les démarrages de quelques secondes.',
      ],
    },
    {
      type: 'exercise',
      question: 'La clinique ajoute une seconde stérilisation de 24 kW au niveau essentiel. Les groupes de 200 kVA suffisent-ils encore ?',
      solution: [
        'Essentiel + vital : 0,8 × (125 + 24) ≈ 119 kW, soit ≈ 140 kVA.',
        'Groupe nécessaire : 140 × 1,25 / 0,9 ≈ 195 kVA : les 200 kVA suffisent tout juste, sans marge pour la suite.',
        'Il faudrait anticiper : programmer les deux stérilisations pour qu’elles ne chauffent pas en même temps, ou prévoir des groupes plus gros lors du prochain agrandissement.',
      ],
    },
  ],
};
