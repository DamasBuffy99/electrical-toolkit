import { TopicContent } from '../../types';

export const pvInverterFinanceContent: TopicContent = {
  title: 'Onduleur réseau ou hybride : la rentabilité',
  subtitle: 'Faut-il payer une batterie ? En France, depuis que le surplus ne se revend presque plus, chaque kWh autoconsommé vaut 18 fois un kWh vendu. En Afrique de l’Ouest, la question se pose autrement : ce sont le gasoil et les coupures évitées qui paient la batterie.',
  blocks: [
    {
      type: 'objectives',
      items: [
        'Construire un bilan financier simple : investissement, économies annuelles, retour sur investissement.',
        'Comprendre le rôle du taux d’autoconsommation.',
        'Comparer onduleur réseau et hybride avec batterie sur 25 ans (cas France).',
        'Refaire le raisonnement pour un site à délestages en FCFA.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '× 18', label: 'valeur d’un kWh autoconsommé face à un kWh vendu (France)' },
        { value: '+ 13 100 €', label: 'pour l’hybride sur 25 ans (France, 9 kWc)' },
        { value: '14,3 ans', label: 'retour d’un PV sans batterie en France' },
        { value: '≈ 5 ans', label: 'retour d’un hybride sur un site à délestages (FCFA)' },
      ],
    },

    { type: 'heading', text: '1 · Le cas France : hypothèses' },
    {
      type: 'table',
      headers: ['Paramètre', 'Valeur retenue', 'Remarque'],
      rows: [
        ['Puissance PV', '9 kWc', 'installation résidentielle type'],
        ['Production annuelle', '9 500 kWh', 'France, orientation sud, ≈ 1 050 kWh/kWc'],
        ['Consommation annuelle', '8 000 kWh', 'foyer équipé en électrique'],
        ['Autoconsommation', '35 % sans batterie, 65 % avec 10 kWh', 'à valider par une simulation horaire du profil réel'],
        ['Prix du kWh acheté', '0,2001 € TTC', 'tarif réglementé Base, août 2026'],
        ['Hausse du kWh', '+ 4 % par an', 'estimation, appliquée au seul kWh acheté'],
        ['Rachat du surplus (≤ 9 kWc)', '0,011 €/kWh, fixe 20 ans', 'arrêté du 4 juin 2026 ; prime à l’investissement supprimée'],
        ['Batterie', 'remplacée une fois, 3 500 €', 'vers la 12e année'],
        ['Non inclus', 'remplacement de l’onduleur, vieillissement des panneaux, pertes de la batterie', 'résultats légèrement optimistes'],
      ],
    },
    {
      type: 'table',
      headers: ['Investissement', 'Onduleur réseau seul', 'Hybride + batterie 10 kWh'],
      rows: [
        ['Panneaux 9 kWc', '4 500 – 6 000 €', '4 500 – 6 000 €'],
        ['Onduleur', '1 500 – 2 200 € (Sunny Tripower)', '2 500 – 3 500 € (STP Smart Energy)'],
        ['Batterie 10 kWh', '—', '4 000 – 6 000 €'],
        ['Câblage, protections, structure', '1 000 – 1 500 €', '1 200 – 1 800 €'],
        ['Main-d’œuvre et Consuel', '2 000 – 3 000 €', '2 500 – 3 500 €'],
        ['Valeur retenue', '10 500 €', '17 000 €'],
      ],
    },

    { type: 'heading', text: '2 · Le cas France : résultats' },
    {
      type: 'calc',
      title: 'Économies de la première année',
      steps: [
        { label: 'PV seul : 35 % autoconsommés, le reste vendu', formula: '3 325 × 0,2001 + 6 175 × 0,011 ≈ 665 + 68 = 733 €' },
        { label: 'Hybride : 65 % autoconsommés', formula: '6 175 × 0,2001 + 3 325 × 0,011 ≈ 1 236 + 37 = 1 271 €' },
        { label: 'Valeur d’un kWh autoconsommé face à un kWh vendu', formula: '\\frac{0,2001}{0,011} ≈ 18' },
        { label: 'Retours simples sur investissement', formula: '\\frac{10 500}{733} ≈ 14,3 ans   ;   \\frac{17 000}{1 271} ≈ 13,4 ans   ;   batterie seule : \\frac{6 500}{538} ≈ 12,1 ans' },
      ],
      result: 'La batterie se rembourse plus vite que le reste de l’installation, à condition d’autoconsommer réellement 65 %',
    },
    { type: 'image', source: require('../../../../assets/solar/inverters/finance-25y.webp'), caption: 'Bénéfice net sur 25 ans (économies moins investissement et remplacement de la batterie) : l’hybride rapporte 11 400 à 13 100 € de plus', height: 260 },
    {
      type: 'note',
      text: 'Le second scénario concerne les installations raccordées entre le 28 mars 2025 et le 4 juin 2026, qui gardent un rachat à 0,04 €/kWh pendant 20 ans : l’écart reste de 11 400 €. Avec un vieillissement des panneaux de 0,5 % par an, l’écart en faveur de l’hybride reste d’environ 11 500 € dans le scénario à 0,011 €.',
    },
    {
      type: 'bullets',
      items: [
        'Depuis la chute du tarif de rachat, une installation sans batterie met plus de 14 ans à se rembourser.',
        'Le résultat dépend d’abord du taux d’autoconsommation : c’est lui qu’il faut simuler avant de décider.',
        'Cette étude vaut pour la France : sans rachat et avec délestages, la batterie s’évalue autrement.',
      ],
    },

    { type: 'heading', text: '3 · Le cas ouest-africain : un site à délestages' },
    {
      type: 'text',
      text: 'Prenons une maison (ou un petit commerce) raccordée au réseau, qui consomme 20 kWh par jour et subit 4 heures de délestage chaque soir. Pendant les coupures, un groupe de 5 kVA alimente 2 kW de charges. Le surplus solaire n’est ni racheté ni autorisé à l’injection : un onduleur réseau doit être bridé.',
    },
    {
      type: 'table',
      headers: ['Paramètre', 'Valeur indicative'],
      rows: [
        ['Prix du kWh réseau', '≈ 110 FCFA'],
        ['Gasoil', '≈ 700 FCFA/L ; groupe peu chargé ≈ 0,45 L/kWh'],
        ['Énergie fournie par le groupe', '2 kW × 4 h = 8 kWh/jour'],
        ['Production solaire', '5 kWc × 4,4 kWh/kWc/jour ≈ 22 kWh/jour (≈ 1 600 kWh/kWc/an)'],
        ['Consommation de jour, directe', '≈ 9 kWh/jour'],
      ],
    },
    {
      type: 'calc',
      title: 'Ce que coûte la situation actuelle',
      steps: [
        { label: 'Gasoil des délestages', formula: '8 × 0,45 × 700 ≈ 2 520 FCFA/jour  →  ≈ 920 000 FCFA/an' },
        { label: 'Entretien et usure du groupe', formula: '≈ 200 000 FCFA/an' },
      ],
      result: '≈ 1,12 million de FCFA par an pour les seules coupures, en plus de la facture réseau',
    },
    {
      type: 'calc',
      title: 'Option A : onduleur réseau 5 kW sans batterie',
      steps: [
        { label: 'Seule la consommation de jour est couverte, le surplus est bridé', formula: '9 × 110 × 365 ≈ 361 000 FCFA/an' },
        { label: 'Pendant les délestages, l’onduleur s’arrête (anti-îlotage)', formula: 'gasoil inchangé' },
        { label: 'Investissement indicatif (panneaux, onduleur, pose)', formula: '≈ 3,3 millions de FCFA   →   retour ≈ 9 ans' },
      ],
      result: 'Économie modeste, et aucun effet sur les coupures',
    },
    {
      type: 'calc',
      title: 'Option B : hybride 5 kW + batterie lithium 10 kWh',
      steps: [
        { label: 'Consommation de jour + 1 kWh le soir hors coupure', formula: '(9 + 1) × 110 × 365 ≈ 401 000 FCFA/an' },
        { label: 'La batterie couvre les délestages 85 % de l’année (le groupe reste en secours les jours sans soleil)', formula: '0,85 × 1 120 000 ≈ 952 000 FCFA/an' },
        { label: 'Économie totale', formula: '≈ 1,35 million de FCFA/an' },
        { label: 'Investissement indicatif : panneaux 1,8 M, hybride 1,3 M, batterie 3,0 M, pose 1,0 M', formula: '≈ 7,1 millions de FCFA   →   retour ≈ 5,3 ans' },
      ],
      result: 'Sur 15 ans, avec un remplacement de batterie (≈ 2 M FCFA) : ≈ + 11 M FCFA pour l’hybride, contre ≈ + 2 M FCFA pour l’onduleur réseau',
    },
    {
      type: 'decision',
      title: 'Réseau ou hybride sur un site à délestages',
      choice: 'Hybride « batterie d’abord » en 48 V avec batterie lithium, le groupe conservé en secours et piloté si possible',
      reasons: [
        'La batterie est payée par le gasoil et l’usure du groupe évités, pas par un tarif de rachat.',
        'L’onduleur réseau seul ne sert à rien pendant les coupures, précisément quand le besoin est le plus fort.',
        'Le confort compte aussi : plus de bruit ni de fumée de groupe le soir, plus d’appareils abîmés par les bascules.',
      ],
      rejected: 'Onduleur réseau seul : retour d’environ 9 ans, aucun secours, et un surplus perdu faute d’injection autorisée.',
    },
    {
      type: 'regional',
      text: 'Ces chiffres sont indicatifs : prix du gasoil, tarifs du réseau, durée réelle des délestages et prix des batteries varient beaucoup d’un pays et d’une année à l’autre. Avant de décider, mesurez une semaine de consommation et de coupures (un simple compteur et un carnet suffisent), puis faites chiffrer les deux options par des installateurs. Certains pays proposent des exonérations de droits de douane sur le matériel solaire : renseignez-vous.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Retour simple = investissement ÷ économie annuelle ; sur 20 à 25 ans, on intègre la hausse du kWh et le remplacement de la batterie.',
        'France : le surplus ne vaut presque rien, l’autoconsommation fait la rentabilité ; une batterie de 10 kWh rapporte ≈ 13 000 € de plus sur 25 ans.',
        'Afrique de l’Ouest : la batterie se paie par le gasoil et les coupures évitées ; retour d’environ 5 ans dans notre exemple.',
        'Dans tous les cas, c’est le profil réel de consommation (et de coupures) qu’il faut simuler.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Cas France : l’autoconsommation avec batterie n’atteint que 50 % au lieu de 65 %. Quelle économie la première année ?',
      solution: ['Autoconsommé : 0,50 × 9 500 = 4 750 kWh × 0,2001 ≈ 950 € ; vendu : 4 750 × 0,011 ≈ 52 €.', 'Total ≈ 1 002 € au lieu de 1 271 € : le retour passe à ≈ 17 ans. D’où l’importance de simuler le profil réel.'],
    },
    {
      type: 'exercise',
      question: 'Cas ouest-africain : le gasoil passe à 850 FCFA/L. Que devient l’économie annuelle de l’option B ?',
      solution: ['Gasoil : 8 × 0,45 × 850 × 365 ≈ 1 117 000 FCFA ; avec l’entretien : ≈ 1 317 000 FCFA ; × 0,85 ≈ 1 119 000 FCFA.', 'Total ≈ 1 119 000 + 401 000 ≈ 1,52 M FCFA/an : retour ≈ 4,7 ans. Plus le gasoil est cher, plus la batterie est rentable.'],
    },
  ],
};
