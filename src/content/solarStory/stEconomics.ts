import { TopicContent } from '../types';

export const stEconomicsContent: TopicContent = {
  title: 'Production, rentabilité et suivi',
  subtitle: 'Ibrahim Traoré n’investit pas 50 millions de FCFA pour faire plaisir à son ingénieur. Fanta chiffre la production, l’énergie réellement autoconsommée, le temps de retour et le coût du kWh solaire, puis met en service la centrale et organise son suivi.',
  blocks: [
    { type: 'scene', text: 'Mois 4 · Bureau d’Ibrahim Traoré, puis mise en service sur le toit avec Yao Kouamé' },
    {
      type: 'objectives',
      items: [
        'Estimer la production annuelle et la part réellement autoconsommée.',
        'Calculer le temps de retour et le coût actualisé du kWh solaire.',
        'Réaliser les essais de mise en service d’un champ PV.',
        'Suivre la centrale avec le ratio de performance, corrigé de l’écrêtement.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '≈ 126 MWh/an', label: 'autoconsommés, 13 % de l’usine' },
        { value: '≈ 12,7 M FCFA/an', label: 'économies nettes' },
        { value: '≈ 4 ans', label: 'temps de retour simple' },
        { value: '≈ 45 FCFA/kWh', label: 'coût du kWh solaire, contre 100 au réseau' },
      ],
    },

    { type: 'heading', text: '1 · Combien de kWh, et lesquels comptent ?' },
    {
      type: 'calc',
      title: 'Production et autoconsommation',
      steps: [
        { label: 'Ressource côtière : 5,1 h de soleil équivalent sur le plan des modules, PR 0,75', formula: '5,1 × 0,75 × 365 ≈ 1 400 kWh/kWc/an' },
        { label: 'Production possible', formula: '99 × 1 400 ≈ 139 MWh/an' },
        { label: 'Écrêtement de l’injection zéro (étape 1)', formula: '− 12 MWh/an' },
        { label: 'Énergie autoconsommée, rapportée aux ≈ 956 MWh/an de l’usine (300 jours de production + jours chômés)', formula: '139 − 12 ≈ 126 MWh/an  →  \\frac{126}{956} ≈ 13 % de la consommation' },
      ],
      result: '126 MWh par an remplacent des kWh achetés au réseau',
    },
    {
      type: 'note',
      text: 'La centrale ne fait pas baisser la puissance souscrite : un jour de pluie à 10 h, l’usine appelle toujours ses 200 kW au réseau. Seule la part « énergie » de la facture diminue. C’est l’erreur la plus fréquente des études commerciales trop optimistes.',
    },

    { type: 'heading', text: '2 · La rentabilité' },
    {
      type: 'table',
      headers: ['Poste', 'Montant (M FCFA)', 'Part'],
      rows: [
        ['Modules (99 kWc)', '18', '36 %'],
        ['Onduleurs', '6', '12 %'],
        ['Structure, câbles, chemins de câbles', '9', '18 %'],
        ['Contrôleur, protections, tableau AC', '4', '8 %'],
        ['Études, structure, pose, mise en service', '13', '26 %'],
        ['Total (≈ 505 FCFA/Wc)', '50', '100 %'],
      ],
    },
    {
      type: 'calc',
      title: 'Économies et temps de retour',
      steps: [
        { label: 'Énergie achetée en moins, tarif d’énergie moyen de 100 FCFA/kWh', formula: '126 400 × 100 ≈ 12,6 M FCFA/an' },
        { label: 'Pendant les coupures (≈ 150 h/an), le kWh PV remplace du gasoil à ≈ 175 FCFA', formula: '7,5 MWh × (175 − 100) ≈ + 0,6 M FCFA/an' },
        { label: 'Maintenance, nettoyage, supervision', formula: '− 0,5 M FCFA/an' },
        { label: 'Temps de retour simple', formula: '\\frac{50}{12,6 + 0,6 − 0,5} ≈ \\frac{50}{12,7} ≈ 3,9 ans' },
      ],
      result: 'Environ 4 ans pour une centrale garantie 25 ans',
    },
    {
      type: 'calc',
      title: 'Coût actualisé du kWh solaire (8 %, 25 ans)',
      steps: [
        { label: 'Annuité de l’investissement (facteur 0,0937)', formula: '50 × 0,0937 ≈ 4,7 M FCFA/an' },
        { label: 'Maintenance + provision pour remplacer les onduleurs vers 12 ans', formula: '0,5 + \\frac{5}{25} = 0,7 M FCFA/an' },
        { label: 'Production moyenne avec 0,5 %/an de dégradation', formula: '126 × 0,94 ≈ 119 MWh/an' },
        { label: 'Coût du kWh', formula: '\\frac{5,4 M}{119 000} ≈ 45 FCFA/kWh' },
      ],
      result: 'Le kWh solaire coûte moins de la moitié du kWh réseau, et son prix est figé pour 25 ans',
    },
    {
      type: 'dialogue',
      speaker: 'Ibrahim Traoré',
      role: 'client',
      text: 'Quatre ans, c’est moins que ma nouvelle remplisseuse. Et sur 25 ans ?',
    },
    {
      type: 'dialogue',
      speaker: 'Fanta Coulibaly',
      role: 'engineer',
      text: 'Environ 240 millions de FCFA nets, sans même supposer de hausse du tarif. Si le prix du kWh augmente de 3 % par an, comme ces dix dernières années, on dépasse 350 millions. Le vrai risque n’est pas financier : c’est une centrale mal suivie qui perd 20 % sans que personne ne s’en aperçoive.',
    },
    { type: 'fiche', id: 'pv-inverter-finance', why: 'Coût actualisé, flux sur 25 ans, comparaison des solutions.' },

    { type: 'heading', text: '3 · La mise en service' },
    {
      type: 'table',
      headers: ['Essai (IEC 62446-1)', 'Attendu', 'Mesuré'],
      rows: [
        ['Continuité des liaisons équipotentielles', '< 1 Ω', '0,3 Ω ✓'],
        ['Polarité de chaque chaîne', 'correcte', '10 / 10 ✓'],
        ['Voc par chaîne, cellules à 45 °C', '18 × 49,6 × 0,946 ≈ 845 V', '9 chaînes entre 838 et 849 V ; T2-M3 : 798 V ✗'],
        ['Isc par chaîne, 800 W/m²', '≈ 11,2 A', '11,0 à 11,4 A ✓'],
        ['Isolement du champ sous 1 000 V', '≥ 1 MΩ', '≥ 40 MΩ ✓'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Yao Kouamé',
      role: 'team',
      text: '798 V sur T2-M3, c’est 47 V de moins que les autres : un module de moins. On a trouvé un câble de liaison qui sautait un module en bout de rangée. Corrigé, remesuré : 846 V. C’est pour ça qu’on mesure chaque chaîne avant de fermer les sectionneurs.',
    },

    { type: 'heading', text: '4 · Le suivi : le ratio de performance' },
    {
      type: 'calc',
      title: 'Rapport du mois de mars',
      steps: [
        { label: 'Irradiation mesurée sur le plan des modules (pyranomètre)', formula: 'H = 170 kWh/m²  →  Y_{r} = 170 h' },
        { label: 'Énergie produite', formula: 'Y_{f} = \\frac{11 400}{99} ≈ 115 kWh/kWc' },
        { label: 'PR brut', formula: 'PR = \\frac{115}{170} ≈ 0,68  ?' },
        { label: 'PR corrigé de l’écrêtement des 4 dimanches (≈ 0,9 MWh estimés)', formula: 'PR = \\frac{(11 400 + 900) / 99}{170} ≈ 0,73 ✓' },
      ],
      result: 'Sans correction de l’écrêtement, on accuserait à tort la centrale. 0,73 en saison chaude est normal.',
    },
    {
      type: 'table',
      headers: ['Tâche', 'Fréquence', 'Pourquoi'],
      rows: [
        ['Comparaison des 10 chaînes sur le portail', 'chaque semaine', 'une chaîne 10 % sous les autres = défaut à chercher'],
        ['Nettoyage à l’eau, tôt le matin', 'tous les 2 mois, mensuel en harmattan', '5 à 15 % de perte par la poussière'],
        ['Thermographie infrarouge du champ', 'chaque année', 'points chauds, diodes, connecteurs'],
        ['Serrage, contrôle des parafoudres', 'après la saison des pluies', 'foudre, dilatation, corrosion'],
        ['Courbes I-V de chaque chaîne', 'tous les 2 ans', 'vieillissement, garantie de performance'],
      ],
    },
    {
      type: 'note',
      text: 'En juillet, le portail signale T1-M2 à 82 % des autres chaînes. La thermographie montre un module avec un point chaud à 95 °C : une cellule fissurée par une chute d’outil pendant la pose. Le module est remplacé sous garantie. Une chaîne par MPPT, c’est aussi un diagnostic chaîne par chaîne.',
    },

    { type: 'heading', text: '5 · Ce que disent les normes' },
    {
      type: 'norms',
      title: 'Mise en service et performance',
      rows: [
        { norm: 'IEC 62446-1', rule: 'Essais de mise en service : continuité, polarité, Voc, Isc, isolement ; dossier remis au client.', result: 'essais des 10 chaînes' },
        { norm: 'IEC 61724-1', rule: 'Surveillance des performances : mesures d’irradiation, PR, prise en compte des pertes externes.', result: 'PR corrigé' },
        { norm: 'IEC TS 62446-3', rule: 'Thermographie infrarouge des modules et des installations.', result: 'contrôle annuel' },
        { norm: 'IEC 62446-2', rule: 'Maintenance des systèmes PV : inspections, nettoyage, essais périodiques.', result: 'plan de maintenance' },
      ],
    },
    {
      type: 'regional',
      text: 'En Afrique de l’Ouest, beaucoup de toitures industrielles se financent sans investissement du client : un développeur pose la centrale et vend le kWh à l’usine, 70 à 85 FCFA, pendant 15 à 20 ans. Tropica préfère investir, mais Fanta présente les deux options. Avant de chiffrer, elle vérifie aussi les exonérations de droits et de TVA sur le matériel solaire, variables d’un pays à l’autre.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Seuls les kWh autoconsommés comptent ; la puissance souscrite ne baisse pas.',
        'Temps de retour simple et coût actualisé du kWh donnent deux regards complémentaires.',
        'Mesurer chaque chaîne à la mise en service évite des années de pertes invisibles.',
        'Le PR se calcule en tenant compte de l’écrêtement volontaire ; la comparaison des chaînes révèle les défauts.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Le tarif d’énergie passe à 115 FCFA/kWh. Quel devient le temps de retour ?',
      solution: ['Économies : 126 400 × 115 ≈ 14,5 M ; + 0,6 − 0,5 = 14,6 M FCFA/an.', '50 / 14,6 ≈ 3,4 ans.'],
    },
    {
      type: 'exercise',
      question: 'Une chaîne mesure 829 V à la mise en service, cellules à 45 °C. Que soupçonner ?',
      solution: ['845 − 829 = 16 V, soit environ un tiers de module.', 'Une diode de dérivation en court-circuit dans un module : à confirmer par thermographie ou mesure module par module.'],
    },
  ],
};
