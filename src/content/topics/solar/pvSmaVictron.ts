import { TopicContent } from '../../types';

export const pvSmaVictronContent: TopicContent = {
  title: 'Les gammes SMA et Victron',
  subtitle: 'Deux fabricants de référence, deux logiques : SMA couvre les trois familles avec des appareils spécialisés, Victron construit des systèmes modulaires autour d’un onduleur-chargeur 48 V. Gammes, architectures types, et la question qui revient sans cesse : Sunny Island + Sunny Tripower, ou Sunny Tripower Smart Energy ?',
  blocks: [
    {
      type: 'objectives',
      items: [
        'Situer chaque gamme SMA et Victron dans sa famille d’onduleurs.',
        'Connaître les architectures types de chaque fabricant.',
        'Choisir entre STP Smart Energy et Sunny Island + Sunny Tripower.',
        'Connaître les règles de mise en parallèle et le rôle du contrôleur Cerbo GX.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '18 kW', label: 'continus pour un cluster de 3 SI 8.0H' },
        { value: '300 kW', label: 'en multicluster Sunny Island' },
        { value: '180 kVA', label: 'plus gros système triphasé Victron (12 Quattro 15 kVA)' },
        { value: '10 kW', label: 'limite de secours du STP Smart Energy' },
      ],
    },

    { type: 'heading', text: '1 · SMA : une gamme par famille' },
    {
      type: 'text',
      text: 'SMA (Niestetal, Allemagne) couvre les trois familles : onduleurs réseau, hybrides, onduleurs batterie couplés en AC, et onduleurs-chargeurs Sunny Island pour site isolé.',
    },
    {
      type: 'table',
      headers: ['Gamme', 'Famille', 'Puissances', 'Points clés'],
      rows: [
        ['Sunny Boy', 'réseau, monophasé 230 V', '1,5 à 6 kW', '1 ou 2 MPPT, petites installations résidentielles'],
        ['Sunny Tripower', 'réseau, triphasé 400 V', '3 à 10 kW', '2 MPPT, résidentiel triphasé'],
        ['Sunny Tripower X', 'réseau, triphasé', '12 / 15 / 20 / 25 kW', '3 MPPT ; rendement 98,2 % ; PV jusqu’à 150 % de la puissance AC ; ShadeFix ; ennexOS intégré'],
        ['Sunny Highpower PEAK3', 'réseau, centrales au sol', '100 / 150 kW', '1 000 ou 1 500 V DC ; rendement 98,8 / 99,1 %'],
        ['Sunny Tripower Smart Energy', 'hybride triphasé', '5 / 6 / 8 / 10 kW', 'batterie HT 150–600 V ; 2 MPPT ; PV jusqu’à 15 kWc ; secours triphasé (12 kW < 5 min sur 8.0 et 10.0)'],
        ['Sunny Boy Smart Energy', 'hybride monophasé', 'jusqu’à ≈ 10 kW', 'batterie haute tension'],
        ['Sunny Tripower Hybrid X', 'hybride triphasé', '20 / 25 / 30 kW', 'batterie 120–800 V, 50 A ; 4 MPPT ; petit tertiaire'],
        ['Sunny Boy Storage', 'onduleur batterie couplé en AC', '—', 'sans entrée PV ; ajoute une batterie HT à un PV existant de n’importe quelle marque'],
        ['Sunny Island', 'onduleur-chargeur', '3,3 à 6,0 kW continus par unité', 'batterie 48 V (plomb 100 à 10 000 Ah ou lithium homologué) ; pilote le groupe ; clusters et multiclusters'],
      ],
    },
    {
      type: 'text',
      text: 'Mise en grappe des Sunny Island : trois unités forment un cluster monophasé ou triphasé (3 × SI 8.0H = 18 kW continus, 24 kW sur 30 min). Au-delà, une Multicluster-Box SMA associe plusieurs clusters pour des systèmes de 24 à 300 kW. Modes : site isolé permanent, secours en cas de coupure, autoconsommation avec réseau, gestion du groupe quand la batterie est basse.',
    },
    {
      type: 'table',
      headers: ['Architecture SMA', 'Montage', 'Usage'],
      rows: [
        ['A — PV simple', 'panneaux → Sunny Boy ou Sunny Tripower → réseau', 'le moins cher, sans secours'],
        ['B — Hybride tout-en-un', 'panneaux et batterie HT → STP ou SB Smart Energy → réseau', 'construction neuve, simple et compacte'],
        ['C — Ajout de stockage', 'PV existant + Sunny Boy Storage + batterie HT', 'ajouter une batterie sans changer l’onduleur'],
        ['D — Couplage AC sur Sunny Island', 'panneaux → Sunny Tripower → bus AC ← Sunny Island + batterie 48 V', 'secours puissant ou site isolé, grande évolutivité'],
        ['E — Site isolé avec groupe', 'architecture D + groupe piloté par les Sunny Island', 'autonomie totale'],
      ],
    },
    {
      type: 'table',
      headers: ['Logiciel SMA', 'Fonction'],
      rows: [
        ['Sunny Portal (ennexOS)', 'supervision en ligne de la production et du stockage'],
        ['Sunny Design', 'dimensionnement et simulation d’installations'],
        ['SMA Energy App', 'suivi en temps réel pour l’utilisateur'],
        ['SMA 360° App', 'mise en service et maintenance pour l’installateur'],
        ['Sunny Home Manager 2.0', 'gestion de l’énergie (charges pilotées, limitation d’injection)'],
      ],
    },

    { type: 'heading', text: '2 · Sunny Island + Sunny Tripower, ou STP Smart Energy ?' },
    {
      type: 'text',
      text: 'Le STP Smart Energy est la solution simple pour une maison raccordée avec un secours modéré : couplage DC, panneaux et batterie haute tension sur le bus continu d’un seul appareil. L’association Sunny Island + Sunny Tripower (couplage AC, deux appareils indépendants) s’impose dès qu’il faut plus de 10 kW de secours, un site isolé permanent, un groupe électrogène ou de fortes pointes de démarrage.',
    },
    {
      type: 'table',
      headers: ['Critère', 'STP Smart Energy', 'Sunny Island + Sunny Tripower'],
      rows: [
        ['Puissance continue en secours ou isolé', 'jusqu’à 10 kW', '18 kW avec 3 × SI 8.0H ; jusqu’à 300 kW en multicluster'],
        ['Pointe de démarrage', '12 kW pendant moins de 5 min (8.0 et 10.0)', '11 kW pendant 3 s par SI 8.0H, soit 33 kW par cluster'],
        ['Batterie', 'haute tension homologuée (SMA Home Storage, BYD HVS jusqu’à 12,8 kWh, HVM jusqu’à 22,1 kWh)', '48 V : plomb jusqu’à 10 000 Ah ou lithium homologué, plus facile à agrandir'],
        ['Puissance PV', '15 kWc maximum (STP 10.0 SE)', 'fixée par les onduleurs réseau, dans la limite de 12 kW couplés en AC par SI 8.0H'],
        ['Site isolé permanent', 'non prévu : fonction de secours', 'oui, c’est sa fonction première'],
        ['Groupe électrogène', 'non piloté', 'démarrage et arrêt automatiques'],
      ],
    },
    {
      type: 'decision',
      title: 'Quand choisir quoi',
      choice: 'STP Smart Energy pour une construction neuve raccordée, secours < 10 kW, 5 à 20 kWh de stockage ; Sunny Island + Sunny Tripower pour un secours puissant, un site isolé ou un groupe à piloter',
      reasons: [
        'STP Smart Energy : un seul appareil, pose rapide, une seule conversion vers la batterie, peu de place.',
        'Sunny Island : puissance et pointes bien supérieures, batterie 48 V extensible, pilotage du groupe, évolutivité jusqu’à 300 kW.',
      ],
      rejected: 'Un STP Smart Energy pour un site isolé ou un centre de santé : ni conçu pour fonctionner durablement sans réseau, ni capable de piloter le groupe.',
    },
    {
      type: 'note',
      text: 'Deux nuances. Tolérance aux pannes : avec le réseau présent, si le Sunny Island tombe, le Sunny Tripower continue d’injecter ; en site isolé, il s’arrête aussi, faute de réseau de référence. Ajouter une batterie à un PV existant raccordé : la solution la plus simple reste la Sunny Boy Storage ; le Sunny Island se justifie quand on veut aussi un secours puissant ou un fonctionnement isolé.',
    },

    { type: 'heading', text: '3 · Victron : un système modulaire autour du 48 V' },
    {
      type: 'text',
      text: 'Victron (Almere, Pays-Bas, fondé en 1975) construit des systèmes modulaires autour d’un onduleur-chargeur 48 V, de régulateurs MPPT et d’un contrôleur GX. C’est une référence en site isolé, en marine et dans les véhicules.',
    },
    {
      type: 'table',
      headers: ['MultiPlus-II (230 V)', 'Nominal', 'Continu à 25 °C', 'Pointe', 'Courant de charge'],
      rows: [
        ['48/3000/35-32', '3 000 VA', '2 400 W', '5 500 W', '35 A'],
        ['48/5000/70-50', '5 000 VA', '4 000 W', '9 000 W', '70 A'],
        ['48/8000/110-100', '8 000 VA', '6 400 W', '15 000 W', '110 A'],
        ['48/10000/140-100', '10 000 VA', '8 000 W', '18 000 W', '140 A'],
        ['48/15000/200-100', '15 000 VA', '12 000 W', '27 000 W', '200 A'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'MultiPlus-II : une entrée AC, commutateur de transfert intégré (bascule en moins de 20 ms), fonction PowerAssist qui complète le réseau ou le groupe quand la demande dépasse sa limite. Versions 12 et 24 V en 3 000 et 5 000 VA ; version GX avec contrôleur intégré.',
        'Quattro et Quattro-II : deux entrées AC (par exemple réseau et groupe), sélection automatique de la source présente ; une seule entrée connectée à la fois, AC-in-1 prioritaire.',
        'Mise en parallèle : le même nombre d’unités identiques sur chaque phase. MultiPlus-II 48/5000 : jusqu’à 6 par phase, soit 18 unités et 90 kVA. Les 8, 10 et 15 kVA ne se mettent en parallèle qu’avec un commutateur de transfert externe. Maximum VE.Bus : 180 kVA (12 Quattro 15 kVA, 4 par phase).',
        'Tout-en-un : l’EasySolar-II GX réunit MultiPlus-II, MPPT et contrôleur GX (un hybride « batterie d’abord ») ; le Multi RS Solar associe onduleur-chargeur et MPPT haute tension.',
      ],
    },
    {
      type: 'table',
      headers: ['Régulateur SmartSolar', 'Tension PV max', 'Courant de charge', 'Batterie', 'PV conseillé'],
      rows: [
        ['75/15', '75 V', '15 A', '12 / 24 V', '≈ 220 W en 12 V'],
        ['100/30', '100 V', '30 A', '12 / 24 V', '≈ 440 W en 12 V'],
        ['100/50', '100 V', '50 A', '12 / 24 V', '≈ 700 W en 12 V'],
        ['150/35', '150 V', '35 A', '12 à 48 V', '≈ 2 000 W en 48 V'],
        ['150/70', '150 V', '70 A', '12 à 48 V', '≈ 4 000 W en 48 V'],
        ['150/100', '150 V', '100 A', '12 à 48 V', '≈ 5 800 W en 48 V'],
        ['250/70', '250 V', '70 A', '12 à 48 V', '≈ 4 000 W en 48 V'],
        ['250/100', '250 V', '100 A', '12 à 48 V', '≈ 5 800 W en 48 V'],
      ],
    },
    {
      type: 'calc',
      title: 'Lire le nom d’un régulateur SmartSolar 150/70',
      steps: [
        { label: 'Premier nombre : tension PV maximale (à froid, chaîne en circuit ouvert)', formula: 'U_{oc,max} ≤ 150 V' },
        { label: 'Second nombre : courant de charge maximal côté batterie', formula: 'I_{charge} ≤ 70 A' },
        { label: 'Puissance PV utile en 48 V (tension de charge ≈ 57 V)', formula: 'P ≈ 70 × 57 ≈ 4 000 W' },
      ],
      result: 'Au-delà de ≈ 4 000 Wc en 48 V, le régulateur écrête : on passe au 150/100 ou à deux régulateurs',
    },
    {
      type: 'table',
      headers: ['Cerbo GX', 'Détail'],
      rows: [
        ['Rôle', 'relie et pilote tous les appareils Victron, centralise les réglages'],
        ['Connexions', '2 × VE.Bus, 3 × VE.Direct, VE.Can et BMS-Can, USB, Ethernet, Wi-Fi, Bluetooth'],
        ['Supervision à distance', 'portail VRM (Victron Remote Management)'],
        ['Écran', 'GX Touch 50 ou 70'],
        ['Intégration', 'Modbus TCP, MQTT, NMEA 2000 (marine), Node-RED avec l’image « Large » de Venus OS'],
      ],
    },
    {
      type: 'table',
      headers: ['Architecture Victron', 'Montage'],
      rows: [
        ['A — Site isolé', 'panneaux → MPPT → batterie lithium 48 V → 3 × MultiPlus-II (triphasé) → charges ; Cerbo GX ; groupe sur l’entrée AC'],
        ['B — Stockage raccordé (ESS)', 'panneaux → MPPT → batterie → MultiPlus-II en mode ESS + compteur au point de raccordement ; option : onduleur réseau en couplage AC'],
        ['C — Véhicule', 'panneaux → MPPT 100/30 + chargeur DC-DC Orion-Tr → batterie lithium 12 V → onduleur Phoenix'],
        ['D — Bateau', 'panneaux → MPPT ; Quattro avec quai et groupe sur ses deux entrées ; Cerbo GX sur le réseau NMEA 2000'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'Forces : modularité ; ouverture (Modbus, MQTT, Node-RED, nombreuses batteries compatibles) ; robustesse ; large communauté ; de quelques centaines de watts à 180 kVA dans le même écosystème.',
        'Limites : pas d’onduleur réseau dans la gamme (on l’associe à un Fronius ou équivalent pour le couplage AC) ; davantage de composants à assembler et à paramétrer ; plus cher qu’un hybride tout-en-un pour une maison simple.',
      ],
    },
    {
      type: 'regional',
      text: 'Victron et SMA sont bien représentés en Afrique de l’Ouest, notamment dans les télécoms, la santé et les ONG, à côté de marques plus économiques (Deye, Growatt, Must). Au-delà du prix, comparez la disponibilité locale des pièces et du support, la compatibilité avec des batteries trouvables sur place, et la supervision à distance (VRM, Sunny Portal), précieuse pour des sites éloignés.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'SMA : Sunny Boy / Tripower (réseau), Smart Energy (hybride HT), Sunny Boy Storage (batterie en AC), Sunny Island (onduleur-chargeur 48 V).',
        'Sunny Island : clusters de 3 unités, multicluster jusqu’à 300 kW, pilotage du groupe.',
        'STP Smart Energy : simple et compact, mais secours limité à 10 kW et pas de site isolé.',
        'Victron : MultiPlus-II / Quattro + MPPT SmartSolar + Cerbo GX, mise en parallèle jusqu’à 180 kVA.',
        'Un régulateur « 150/70 » : 150 V PV maximum, 70 A de charge.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Combien de MultiPlus-II 48/5000 faut-il, au minimum, pour 25 kW continus en triphasé (local à 25 °C) ? Quelle règle de répartition respecter ?',
      solution: ['Par phase : 25 / 3 ≈ 8,3 kW ; un 48/5000 donne 4 kW : il en faut 3 par phase (12 kW).', 'Soit 9 unités, le même nombre et le même modèle sur chaque phase (limite : 6 par phase).'],
    },
    {
      type: 'exercise',
      question: 'Un champ de 5,5 kWc en 48 V : quel régulateur SmartSolar choisir ?',
      solution: ['150/70 : ≈ 4 000 W, trop juste. 150/100 : ≈ 5 800 W ✓.', 'Vérifier aussi que la tension de circuit ouvert de la chaîne, à la température la plus froide, reste sous 150 V.'],
    },
  ],
};
