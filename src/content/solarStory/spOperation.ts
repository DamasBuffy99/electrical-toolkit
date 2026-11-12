import { TopicContent } from '../types';

export const spOperationContent: TopicContent = {
  title: 'Château d’eau, réception et gestion',
  subtitle: 'La pompe s’arrête vers 16 h 30, mais le village puise jusqu’à 21 h et dès 5 h du matin. Fanta dimensionne le château d’eau, réceptionne l’installation avec Yao, puis prépare avec le comité de l’eau le prix du mètre cube qui fera durer le système vingt ans.',
  blocks: [
    { type: 'scene', text: 'Mois 3 · Sonkélé, au pied du château d’eau, avec le comité de l’eau' },
    {
      type: 'objectives',
      items: [
        'Dimensionner le réservoir d’un pompage au fil du soleil à partir du profil de puisage.',
        'Réaliser les essais de réception d’un système de pompage solaire.',
        'Calculer un prix de l’eau qui couvre l’exploitation et le renouvellement.',
        'Comparer le coût du solaire et du diesel sur vingt ans.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '60 m³', label: 'château d’eau sur une tour de 12 m' },
        { value: '250 FCFA/m³', label: 'soit 10 FCFA la bassine de 40 L' },
        { value: '≈ 3,3 M FCFA/an', label: 'excédent du comité de l’eau' },
        { value: '÷ 3', label: 'coût sur 20 ans, solaire contre diesel' },
      ],
    },

    { type: 'heading', text: '1 · Le château d’eau' },
    {
      type: 'table',
      headers: ['Plage horaire', 'Part du puisage', 'Volume (m³)', 'Pompe'],
      rows: [
        ['5 h – 9 h', '35 %', '26', 'arrêtée'],
        ['9 h – 16 h 30', '25 %', '19', 'en marche'],
        ['16 h 30 – 21 h', '40 %', '30', 'arrêtée'],
        ['Total', '100 %', '75', ''],
      ],
    },
    {
      type: 'calc',
      title: 'Volume du réservoir',
      steps: [
        { label: 'Eau puisée pendant que la pompe est arrêtée : le soir puis le lendemain matin', formula: 'V = 30 + 26 = 56 m³' },
        { label: 'Taille standard de cuve immédiatement supérieure', formula: 'V = 60 m³' },
        { label: 'Jour très couvert : ≈ 35 m³ pompés, déficit à combler', formula: '75 − 35 = 40 m³' },
        { label: 'Ancien groupe de 15 kVA sur l’entrée AC du variateur', formula: '\\frac{40}{17} ≈ 2,4 h de groupe  →  ≈ 7 L de gasoil' },
      ],
      result: 'Château de 60 m³ : il couvre la soirée et la matinée ; les rares jours sans soleil, le groupe pompe 2 à 3 heures',
    },
    {
      type: 'decision',
      title: 'Stockage',
      choice: 'Cuve en acier de 60 m³ sur une tour de 12 m, groupe existant en secours sur le variateur',
      reasons: [
        'La cuve couvre tout le puisage hors des heures de pompage, en avril, au besoin à 10 ans.',
        'Les jours très couverts sont rares (une dizaine par an) : quelques litres de gasoil suffisent.',
        'À 12 m, la pression aux quatre bornes-fontaines reste supérieure à 5 m de colonne d’eau.',
      ],
      rejected: 'Une cuve de 150 m³ pour deux jours d’autonomie : plus du double du prix du château pour une dizaine de jours par an. Et une cuve de 30 m³ : vide chaque matin avant 7 h.',
    },
    {
      type: 'dialogue',
      speaker: 'Rokia Sanogo',
      role: 'client',
      text: 'Le soir, quand le château est plein, la pompe s’arrête toute seule ? Avec le diesel, il débordait si le pompiste s’endormait.',
    },
    {
      type: 'dialogue',
      speaker: 'Fanta Coulibaly',
      role: 'engineer',
      text: 'Le flotteur en haut de la cuve arrête le variateur, et il repart dès que le niveau baisse d’un mètre. Personne n’a besoin d’être là : le soleil démarre la pompe, le château l’arrête.',
    },

    { type: 'heading', text: '2 · La réception' },
    {
      type: 'table',
      headers: ['Essai', 'Attendu', 'Mesuré'],
      rows: [
        ['Isolement moteur + câble sous 500 V, avant descente', '≥ 10 MΩ', '450 MΩ ✓'],
        ['Voc de la chaîne, cellules à 40 °C', '14 × 49,6 × 0,96 ≈ 666 V', '663 V ✓'],
        ['Sens de rotation', 'débit franc dès le démarrage', '✓'],
        ['Débit à midi, 950 W/m² (compteur et chronomètre)', '≈ 17 m³/h', '16,6 m³/h ✓'],
        ['Volume sur une journée claire (6,6 kWh/m²)', '≈ 100 m³', '98 m³ ✓'],
        ['Château plein (flotteur relevé à la main)', 'arrêt en moins de 10 s', '✓'],
        ['Marche à sec (sonde sortie de l’eau)', 'arrêt immédiat, redémarrage après 30 min', '✓'],
        ['Qualité de l’eau à une borne', '0 E. coli / 100 mL, chlore 0,2 – 0,5 mg/L', '✓'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Yao Kouamé',
      role: 'team',
      text: 'On ne signe pas la réception sur une seule mesure à midi. Je laisse le compteur tourner une journée entière et je compare le volume au soleil mesuré : c’est ce volume-là que le village paiera, pas les kilowatts du catalogue.',
    },

    { type: 'heading', text: '3 · Le prix de l’eau et la gestion' },
    {
      type: 'calc',
      title: 'Budget annuel du comité de l’eau',
      steps: [
        { label: 'Volume vendu (école et poste de santé gratuits, pertes déduites)', formula: '60 m³/j × 365 ≈ 21 900 m³/an' },
        { label: 'Prix : 10 FCFA la bassine de 40 L', formula: '\\frac{10}{0,04} = 250 FCFA/m³  →  21 900 × 250 ≈ 5,5 M FCFA/an' },
        { label: 'Quatre fontainières, un gardien, entretien et pièces, chloration', formula: '0,72 + 0,36 + 0,3 + 0,2 ≈ 1,6 M FCFA/an' },
        { label: 'Provision de renouvellement : pompe (3,5 M / 8 ans) et variateur (1,5 M / 10 ans)', formula: '0,44 + 0,15 ≈ 0,6 M FCFA/an' },
      ],
      result: 'Excédent ≈ 5,5 − 2,2 = 3,3 M FCFA par an, sur un compte bancaire du comité, pour les réparations et l’extension du réseau',
    },
    {
      type: 'table',
      headers: ['Tâche', 'Qui', 'Fréquence'],
      rows: [
        ['Nettoyage des modules à l’eau, tôt le matin', 'gardien', 'chaque semaine'],
        ['Relevé du compteur, recettes des bornes', 'fontainières, trésorière', 'chaque jour'],
        ['Contrôle de la clôture, des câbles et des fuites', 'gardien', 'chaque semaine'],
        ['Nettoyage et désinfection du château', 'comité + artisan', 'chaque année'],
        ['Remontée et contrôle de la pompe', 'artisan réparateur', 'tous les 3 à 4 ans, ou si le débit baisse de 15 %'],
        ['Alarme SMS du variateur (marche à sec, défaut)', 'trésorière, artisan', 'à chaque alarme'],
      ],
    },
    { type: 'fiche', id: 'pv-inverter-finance', why: 'Raisonner en coût sur la durée de vie plutôt qu’en prix d’achat.' },

    { type: 'heading', text: '4 · Solaire contre diesel, sur vingt ans' },
    {
      type: 'table',
      headers: ['Investissement solaire', 'M FCFA'],
      rows: [
        ['Champ de 7,7 kWc, structure, clôture', '5'],
        ['Variateur et filtre de sortie', '1,5'],
        ['Pompe, moteur, câble, sondes', '3,5'],
        ['Conduite DN90 de 400 m et accessoires', '3'],
        ['Château d’eau de 60 m³ sur tour de 12 m', '10'],
        ['Études, pose, réception, formation', '2'],
        ['Total', '25'],
      ],
    },
    {
      type: 'calc',
      title: 'Coût complet sur 20 ans',
      steps: [
        { label: 'Diesel : 18 L/j de gasoil + réparations et vidanges', formula: '18 × 700 × 365 + 1,5 M ≈ 6,1 M FCFA/an  →  × 20 = 122 M' },
        { label: 'Diesel : deux groupes et deux pompes à remplacer', formula: '8 + 7 = 15 M  →  total ≈ 137 M FCFA' },
        { label: 'Solaire : investissement, exploitation technique, renouvellements', formula: '25 + 0,5 × 20 + 8,5 ≈ 44 M FCFA' },
        { label: 'Coût du m³ vendu sur 20 ans (438 000 m³)', formula: 'diesel ≈ 313 FCFA/m³   ;   solaire ≈ 100 FCFA/m³' },
      ],
      result: 'Le solaire coûte trois fois moins cher sur vingt ans, et ne dépend ni du prix ni de la livraison du gasoil',
    },

    { type: 'heading', text: '5 · Ce que disent les normes' },
    {
      type: 'norms',
      title: 'Eau potable et exploitation',
      rows: [
        { norm: 'OMS — Directives de qualité de l’eau de boisson', rule: 'Aucun E. coli dans 100 mL ; chlore libre résiduel de 0,2 à 0,5 mg/L au point de puisage.', result: 'chloration au château' },
        { norm: 'IEC 62253', rule: 'Essais de performance du système de pompage PV sur site : débit en fonction de l’éclairement.', result: 'réception sur une journée' },
        { norm: 'ISO 24510 / 24512', rule: 'Service d’eau potable : qualité du service aux usagers, gestion de l’exploitant.', result: 'règles du comité' },
        { norm: 'AWWA D100 / Eurocode 3-4-2', rule: 'Réservoirs d’eau en acier : conception, charges de vent, fondations.', result: 'château de 60 m³' },
      ],
    },
    {
      type: 'regional',
      text: 'Dans plusieurs pays du Sahel, la gestion des petits réseaux d’eau est confiée par la commune à une association d’usagers ou, pour plusieurs villages, à un opérateur privé sous contrat d’affermage. Les fontaines à cartes prépayées et le paiement par téléphone se répandent : moins d’argent liquide à manipuler, des recettes plus faciles à contrôler pour la trésorière.',
    },

    { type: 'heading', text: '6 · Le bilan des quatre projets' },
    {
      type: 'table',
      headers: ['Projet', 'Système', 'Où est le stockage ?', 'Leçon clé'],
      rows: [
        ['Villa Mensah', 'hybride 6,6 kWc, onduleur 8 kW', 'batterie LFP de 10 kWh', 'secourir l’essentiel, pas toute la maison'],
        ['Centre de santé de Kalé', 'isolé 36 kWc, 6 onduleurs-chargeurs, groupe', 'batterie de 72 kWh + groupe', 'hiérarchiser les charges ; coupler en AC'],
        ['Toiture Tropica', 'autoconsommation 99 kWc, injection zéro', 'aucun', 'dimensionner sur la charge minimale de jour'],
        ['Pompage de Sonkélé', 'variateur de pompe 5,5 kW, 7,7 kWc', 'château d’eau de 60 m³', 'stocker de l’eau, pas de l’électricité'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Fanta Coulibaly',
      role: 'engineer',
      text: 'Quatre projets, quatre réponses différentes, mais toujours le même chemin : partir du besoin réel, heure par heure, choisir où stocker, vérifier chaque tension et chaque courant, puis organiser ceux qui feront vivre l’installation. Le panneau est la partie la plus simple.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Le château d’eau couvre le puisage hors des heures de pompage ; un groupe en secours évite de le surdimensionner.',
        'La réception se fait sur le volume d’une journée entière, comparé au soleil mesuré.',
        'Le prix de l’eau doit couvrir l’exploitation et le renouvellement de la pompe et du variateur.',
        'Sur vingt ans, le pompage solaire coûte environ trois fois moins cher que le diesel.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Le comité veut économiser sur la cuve et propose 50 m³. Que se passe-t-il un matin d’avril ?',
      solution: ['Il faut 56 m³ entre 16 h 30 et 9 h : il manque 6 m³.', 'Les dernières familles du matin trouvent les bornes vides vers 8 h, en attendant que le soleil relance la pompe.'],
    },
    {
      type: 'exercise',
      question: 'Quel prix minimal du m³ couvrirait, sur 20 ans, l’investissement solaire, l’exploitation technique, les renouvellements et le personnel (1,1 M FCFA/an) ?',
      solution: ['Coût total : 44 + 1,1 × 20 = 66 M FCFA.', 'Prix : 66 M / 438 000 m³ ≈ 150 FCFA/m³. À 250 FCFA, le village pourrait financer lui-même le prochain forage.'],
    },
  ],
};
