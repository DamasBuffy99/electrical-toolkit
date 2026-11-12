import { TopicContent } from '../types';

export const ctServiceContent: TopicContent = {
  title: 'Sécurités, étanchéité et dépannage',
  subtitle: 'Un an après la mise en service, la chambre des jus monte à 7 °C et les compresseurs ne s’arrêtent plus. Ismaël Touré mesure, Ousmane interprète : surchauffe, sous-refroidissement, voyant liquide. Puis ils revoient ensemble les sécurités, la détection de fuites et le plan de maintenance.',
  blocks: [
    { type: 'scene', text: 'Mois 20 · Salle des machines de Tropica, avec Paul et Ismaël Touré' },
    {
      type: 'objectives',
      items: [
        'Mesurer la surchauffe et le sous-refroidissement et les interpréter.',
        'Diagnostiquer les pannes courantes à partir des pressions et des températures.',
        'Connaître les sécurités d’une installation frigorifique et leurs réglages.',
        'Dimensionner la détection de fuites d’une salle des machines.',
        'Organiser la maintenance et le registre de l’installation.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '18 K', label: 'surchauffe mesurée (6 K attendus)' },
        { value: '9 kg', label: 'de R513A perdus par une fuite' },
        { value: '≈ 5,7 t éq. CO₂', label: 'rejetées dans l’atmosphère' },
        { value: '0,75 kg/m³', label: 'charge rapportée à la salle des machines : détecteur obligatoire' },
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Paul Ndiaye (maintenance)',
      role: 'client',
      text: 'La chambre est à 7 °C, les trois compresseurs tournent sans arrêt. Le technicien de garde veut rajouter du gaz. Je le laisse faire ?',
    },
    {
      type: 'dialogue',
      speaker: 'Ousmane Cissé',
      role: 'engineer',
      text: 'Pas avant d’avoir mesuré. Rajouter du fluide sans chercher pourquoi il manque, c’est payer la même recharge tous les deux mois. Ismaël arrive avec ses manomètres et ses sondes : on va regarder la surchauffe et le sous-refroidissement, ce sont les deux thermomètres du frigoriste.',
    },

    { type: 'heading', text: '1 · Mesurer avant d’agir' },
    {
      type: 'calc',
      title: 'Relevés d’Ismaël sur la chambre à 2 °C',
      steps: [
        { label: 'Basse pression lue au manomètre et température de saturation correspondante', formula: 'BP = 1,1 bar rel.   →   θ_{sat} ≈ −12 °C  (prévu : −6 °C)' },
        { label: 'Surchauffe : température mesurée sur l’aspiration moins la saturation', formula: 'SH = θ_{asp} − θ_{sat} = 6 − (−12) = 18 K  (prévu : 6 K)' },
        { label: 'Haute pression et sous-refroidissement en sortie de condenseur', formula: 'HP = 12,3 bar rel. (≈ 47 °C)   ;   SC = 47 − 47 = 0 K  (prévu : 4 K)' },
        { label: 'Voyant liquide', formula: 'bulles en permanence' },
      ],
      result: 'Évaporation trop basse, surchauffe très élevée, plus de sous-refroidissement, bulles : il manque du fluide',
    },
    {
      type: 'table',
      headers: ['Symptôme', 'BP', 'HP', 'Surchauffe', 'Sous-refroid.', 'Cause probable'],
      rows: [
        ['Manque de fluide', 'basse', 'basse ou normale', 'élevée', 'faible, bulles', 'fuite'],
        ['Condenseur encrassé, ventilateur arrêté', 'haute', 'très haute', 'normale', 'normal ou élevé', 'échange côté air'],
        ['Évaporateur givré, ventilateur arrêté', 'basse', 'basse', 'faible (risque de liquide)', 'normal', 'dégivrage, moteur'],
        ['Filtre déshydrateur bouché, détendeur fermé', 'basse', 'normale', 'élevée', 'élevé', 'restriction'],
        ['Excès de fluide', 'haute', 'haute', 'faible', 'élevé', 'charge mal pesée'],
        ['Compresseur usé', 'haute', 'basse', '—', '—', 'clapets ou spirales'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Ismaël Touré (frigoriste)',
      role: 'team',
      text: 'J’ai trouvé : le raccord du tube capillaire du pressostat frotte sur la carrosserie du compresseur et s’est percé. Les vibrations, jour et nuit pendant un an. On récupère ce qui reste, je refais le raccord avec une boucle anti-vibration, épreuve à l’azote, tirage au vide, et je recharge à la balance.',
    },
    {
      type: 'calc',
      title: 'Ce qu’a coûté la fuite',
      steps: [
        { label: 'Fluide rechargé, pesé', formula: 'm = 9 kg de R513A' },
        { label: 'Effet de serre', formula: '9 × 631 ≈ 5 700 kg éq. CO₂  ≈ 5,7 t' },
        { label: 'Pendant des semaines, évaporation à −12 °C au lieu de −6 °C : rendement en baisse', formula: '≈ 2 à 3 % par kelvin   →   ≈ − 15 %' },
      ],
      result: 'Une petite fuite coûte en fluide, en électricité, en qualité des produits, et en climat : on la cherche, on ne la compense pas',
    },
    { type: 'fiche', id: 'abc-troubleshooting', why: 'Diagnostic des pannes, méthode et tableaux de symptômes.' },

    { type: 'heading', text: '2 · Les sécurités de la centrale' },
    {
      type: 'table',
      headers: ['Sécurité', 'Rôle', 'Réglage ou critère'],
      rows: [
        ['Pressostat haute pression', 'arrêter avant que la pression ne devienne dangereuse', 'déclenchement ≈ 19 bar rel., réarmement manuel'],
        ['Pressostat basse pression', 'protéger contre le manque de fluide et le gel', 'coupure ≈ 0,3 bar rel.'],
        ['Contrôleur de phases', 'phase manquante ou ordre inversé', 'un scroll tournant à l’envers se détruit en quelques minutes'],
        ['Protection thermique du moteur', 'surchauffe des bobinages', 'intégrée au compresseur'],
        ['Soupape de sûreté de la bouteille liquide', 'dernier rempart en cas d’incendie', 'tarée à la pression maximale admissible PS'],
        ['Thermostat de sécurité de chambre', 'alarme si la température dérive', 'alarme à +6 °C, report SMS'],
      ],
    },
    {
      type: 'note',
      text: 'Le contrôleur de phases est un clin d’œil au cours d’électricité : sur un compresseur scroll triphasé, inverser deux phases ne fait pas « tourner à l’envers sans dommage » comme un ventilateur. Le scroll comprime dans un seul sens ; en sens inverse, il chauffe, fait du bruit et se détruit. Awa a prévu un relais de contrôle de phases dans l’armoire de la centrale.',
    },

    { type: 'heading', text: '3 · Détection de fuites en salle des machines' },
    {
      type: 'calc',
      title: 'La charge dépasse-t-elle la limite pratique de la salle ?',
      steps: [
        { label: 'Charge totale de l’installation (centrale, bouteille, liaisons, évaporateurs)', formula: 'm ≈ 45 kg de R513A' },
        { label: 'Volume de la salle des machines (5 × 4 × 3 m)', formula: 'V = 60 m³' },
        { label: 'Concentration si toute la charge fuyait dans la salle', formula: '\\frac{m}{V} = \\frac{45}{60} = 0,75 kg/m³' },
        { label: 'Limite pratique pour un fluide A1 de ce type (EN 378), de l’ordre de', formula: '0,3 kg/m³ < 0,75 kg/m³  ✗' },
      ],
      result: 'Détecteur de fluide obligatoire dans la salle, couplé à une alarme et à une ventilation mécanique ; porte ouvrant vers l’extérieur',
    },
    {
      type: 'note',
      text: 'Un fluide A1 n’est ni toxique ni inflammable, mais il est plus lourd que l’air : en grande quantité, il chasse l’oxygène au niveau du sol. Dans une salle fermée, une fuite massive peut asphyxier un technicien accroupi près du compresseur. D’où la détection, la ventilation basse et l’interdiction de travailler seul.',
    },

    { type: 'heading', text: '4 · Le plan de maintenance' },
    {
      type: 'table',
      headers: ['Fréquence', 'Opération', 'Par qui'],
      rows: [
        ['Chaque jour', 'relevé des températures des chambres, contrôle des alarmes', 'Paul (maintenance Tropica)'],
        ['Chaque mois', 'nettoyage du condenseur, contrôle du givre et des condensats', 'Paul'],
        ['Chaque trimestre', 'pressions, surchauffe, sous-refroidissement, intensités, voyant liquide', 'frigoriste'],
        ['Chaque année', 'contrôle d’étanchéité de tout le circuit, test du détecteur et des pressostats, analyse d’huile', 'frigoriste certifié'],
        ['À chaque intervention', 'inscription au registre : fluide ajouté ou récupéré, fuites, réparations', 'frigoriste'],
      ],
    },
    {
      type: 'decision',
      title: 'Organisation de la maintenance',
      choice: 'Contrat de maintenance préventive avec Polar Froid, relevés quotidiens par Paul, registre de l’installation et supervision des températures à distance',
      reasons: [
        'La fuite aurait été vue des semaines plus tôt avec un relevé trimestriel de surchauffe.',
        'Le registre prouve la conformité et permet de suivre la consommation de fluide d’une année sur l’autre.',
        'La supervision alerte avant que les produits ne soient en danger.',
      ],
      rejected: 'Le dépannage « à l’appel » seulement : moins cher sur le papier, mais chaque panne devient une urgence et le fluide se rajoute sans recherche de fuite.',
    },
    { type: 'fiche', id: 'abc-commissioning', why: 'Relevés de référence, à comparer à chaque visite.' },

    { type: 'heading', text: '5 · Ce que disent les normes' },
    {
      type: 'norms',
      title: 'Exploitation et étanchéité',
      rows: [
        { norm: 'EN 378-3 / -4', rule: 'Salle des machines, détection, ventilation (partie 3) ; maintenance, réparation, récupération (partie 4).', result: 'détecteur + ventilation' },
        { norm: 'Règlement UE 2024/573', rule: 'Contrôle d’étanchéité : 5 à 50 t éq. CO₂ tous les 12 mois (24 avec détection), 50 à 500 t tous les 6 mois.', result: '28 t : annuel' },
        { norm: 'ISO 5149-4', rule: 'Exploitation, maintenance, réparation et récupération (cadre international).', result: 'registre obligatoire' },
        { norm: 'ASHRAE 15 / EPA Section 608', rule: 'Détecteurs et ventilation des salles de machines ; taux de fuite à corriger et certification des techniciens (États-Unis).', result: 'même logique' },
      ],
    },
    {
      type: 'regional',
      text: 'Faute de station de récupération, beaucoup d’installations sont encore « vidées dans l’air » avant réparation. C’est interdit par les réglementations nationales issues du protocole de Montréal, et coûteux : le fluide perdu doit être racheté. Polar Froid dispose d’une station et de bouteilles de récupération ; le fluide récupéré, filtré, peut être réutilisé dans la même installation.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Surchauffe = température d’aspiration − saturation BP ; sous-refroidissement = saturation HP − température du liquide.',
        'Manque de fluide : BP basse, surchauffe élevée, sous-refroidissement nul, bulles au voyant.',
        'On ne recharge jamais sans avoir trouvé et réparé la fuite.',
        'Pressostats HP et BP, contrôleur de phases, soupape : chaque sécurité a son rôle et son réglage.',
        'Salle des machines : détection et ventilation dès que la charge dépasse la limite pratique.',
        'Maintenance préventive et registre : la fuite se voit avant la panne.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'BP = 1,7 bar rel. (saturation −6 °C), aspiration à −4 °C, HP = 16 bar rel. (saturation 55 °C), liquide à 48 °C. Diagnostic ?',
      solution: [
        'Surchauffe = −4 − (−6) = 2 K : faible. Sous-refroidissement = 55 − 48 = 7 K : élevé. HP très haute.',
        'Haute pression élevée avec charge apparemment correcte : condenseur encrassé ou ventilateur arrêté. La faible surchauffe signale aussi un risque de retour de liquide : on nettoie et on vérifie les ventilateurs avant toute chose.',
      ],
    },
    {
      type: 'exercise',
      question: 'Une salle des machines de 100 m³ contient une installation de 25 kg d’un fluide A1 dont la limite pratique est 0,3 kg/m³. Faut-il un détecteur ?',
      solution: ['25 / 100 = 0,25 kg/m³ ≤ 0,3 kg/m³.', 'La limite n’est pas dépassée : le détecteur n’est pas exigé par ce critère, mais il reste recommandé pour repérer les fuites tôt.'],
    },
  ],
};
