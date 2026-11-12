import { TopicContent } from '../types';

export const factoryTraysContent: TopicContent = {
  title: 'Chemins de câbles et gaines à barres',
  subtitle: 'Les sections sont calculées ; reste à poser les câbles. Didier dessine les chemins de câbles, Paul s’inquiète des chariots élévateurs, et la future ligne d’embouteillage pose une question nouvelle : des câbles, ou une gaine à barres ?',
  blocks: [
    { type: 'scene', text: 'Mois 4 · Plans d’exécution, avec Didier et Paul' },
    {
      type: 'objectives',
      items: [
        'Choisir le type de support : dalle perforée, échelle, treillis, goulotte, conduit.',
        'Dimensionner un chemin de câbles : largeur, réserve, charge et portée.',
        'Séparer puissance, commande et courants faibles.',
        'Comparer câbles et gaine à barres pour des machines en ligne.',
        'Traiter la mise à la terre des chemins et le passage des parois coupe-feu.',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '300 mm', label: 'largeur du chemin de puissance' },
        { value: '≈ 5 kg/m', label: 'charge avec réserve, portée 1,5 m' },
        { value: '30 cm', label: 'entre puissance et commande' },
        { value: '250 A', label: 'gaine à barres de la future ligne' },
      ],
    },
    { type: 'illustration', name: 'tray-section', caption: 'Trois niveaux : le feeder seul sur son échelle, la puissance espacée sur dalle perforée, la commande sur treillis 30 cm plus bas' },

    { type: 'heading', text: '1 · Quel support pour quels câbles ?' },
    {
      type: 'table',
      headers: ['Support', 'Points forts', 'Usage chez Tropica'],
      rows: [
        ['Dalle perforée', 'bonne ventilation, appuis rapprochés (1,5 à 2 m), câbles moyens', 'câbles de puissance des moteurs'],
        ['Échelle', 'très ventilée, grandes portées (3 m et plus), gros câbles', 'feeder 4 × 150 mm² de l’armoire moteurs'],
        ['Treillis (fil)', 'léger, découpe facile, petits câbles', 'commande, capteurs, réseau'],
        ['Goulotte', 'fermée, esthétique, protège des poussières', 'bureaux, laboratoire qualité'],
        ['Conduit (tube)', 'protection mécanique forte', 'descentes vers les machines, zones de lavage'],
      ],
    },
    {
      type: 'text',
      text: 'Le mode de pose fait partie du calcul de section : sur dalle perforée ou échelle, un câble multiconducteur correspond à la méthode E de l’IEC 60364-5-52, la plus favorable, parce que l’air circule tout autour. Dans un conduit encastré, le même câble porte 20 à 30 % de moins.',
    },

    { type: 'heading', text: '2 · Dimensionner le chemin de puissance' },
    {
      type: 'calc',
      title: 'Largeur, charge et facteur de groupement',
      steps: [
        { label: 'Diamètres : compresseur 4G35 ≈ 30 mm, pompes 4G6 ≈ 17 mm, nettoyage 4G4 ≈ 15 mm', formula: 'Σd = 30 + 4 × 17 + 15 = 113 mm  (câbles jointifs)' },
        { label: 'Câbles espacés d’un diamètre pour mieux refroidir', formula: 'largeur ≈ 2 × Σd ≈ 226 mm' },
        { label: 'Réserve de 30 % pour les extensions', formula: '226 × 1,3 ≈ 294 mm  →  dalle de 300 mm' },
        { label: 'Masse linéique : 1,75 + 4 × 0,45 + 0,33 ≈ 3,9 kg/m, avec réserve', formula: 'q ≈ 3,9 × 1,3 ≈ 5 kg/m ≤ CMA ≈ 40 kg/m (portée 1,5 m)' },
      ],
      result: 'Dalle perforée 300 mm, supports tous les 1,5 m ; les câbles espacés ne subissent presque plus de déclassement',
    },
    {
      type: 'decision',
      title: 'Disposition des câbles',
      choice: 'Dalle de 300 mm, câbles espacés d’un diamètre, en une seule couche',
      reasons: [
        'À l’étape 4, Awa avait compté un facteur de groupement de 0,75 (câbles jointifs) : espacés, ils s’approchent de 1. La section de 35 mm² garde une vraie marge.',
        'Une seule couche : chaque câble est visible, repérable et remplaçable.',
        'La réserve de 30 % accueillera les deux pompes prévues dans le plan d’investissement.',
      ],
      rejected: 'Une dalle de 150 mm, câbles jointifs en deux couches : moins chère, mais facteur de groupement vers 0,6 et câble de compresseur à repasser en 50 mm².',
    },
    {
      type: 'text',
      text: 'La charge admissible (CMA) se lit dans le catalogue du fabricant, pour une portée donnée : elle est vérifiée par essais selon l’IEC 61537, avec une flèche limitée (en général 1/200 de la portée). Ajoutez aux câbles le poids des futurs ajouts et, en extérieur, le vent. On ne marche jamais sur un chemin de câbles : ce n’est pas une passerelle.',
    },

    { type: 'heading', text: '3 · Séparer les réseaux et relier à la terre' },
    {
      type: 'dialogue',
      speaker: 'Paul Ndiaye (maintenance)',
      role: 'client',
      text: 'Nos capteurs de niveau donnent parfois des valeurs folles quand le convoyeur accélère. Ça peut venir des câbles ?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Très probablement. Le câble moteur du variateur rayonne des parasites à haute fréquence. Posé contre le câble du capteur, il les lui transmet. Je sépare les deux réseaux de 30 cm, j’utilise du câble blindé entre variateur et moteur, avec le blindage raccordé à 360° des deux côtés, et le croisement de deux chemins se fait à angle droit.',
    },
    {
      type: 'bullets',
      items: [
        'Puissance, commande et données sur des supports distincts ; si un seul support, une cloison métallique continue.',
        'Chaque tronçon de chemin métallique est relié au suivant par une éclisse ou une tresse : la continuité électrique est vérifiée, et le chemin est relié à la liaison équipotentielle aux deux extrémités.',
        'Le chemin de câbles n’est pas un conducteur de protection : chaque câble a son propre PE (sauf systèmes certifiés pour cela).',
        'Au passage d’un mur coupe-feu, la traversée est rebouchée par un calfeutrement de même degré (EI 60, EI 120…).',
      ],
    },

    { type: 'heading', text: '4 · La future ligne d’embouteillage : câbles ou gaine à barres ?' },
    {
      type: 'text',
      text: 'Ibrahim prévoit dans deux ans une ligne de 40 m avec huit machines (au total environ 150 kW). Avec des câbles, il faudrait huit départs au TGBT et huit câbles le long de la ligne. La gaine à barres (canalisation préfabriquée, IEC 61439-6) est un conduit métallique contenant des barres de cuivre ou d’aluminium, sur lequel on enfiche des boîtiers de dérivation équipés de leur protection, là où se trouvent les machines.',
    },
    {
      type: 'calc',
      title: 'Choisir la gaine à barres',
      steps: [
        { label: 'Puissance de la ligne, coefficient de simultanéité 0,8, cos φ 0,85', formula: 'I = \\frac{150 000 × 0,8}{\\sqrt{3} × 400 × 0,85} ≈ 204 A' },
        { label: 'Calibre normalisé de la gaine juste au-dessus', formula: 'I_{n,gaine} = 250 A ≥ 204 A' },
        { label: 'Chute de tension en bout (charge répartie, on compte la moitié de la longueur)', formula: 'ΔU ≈ \\sqrt{3} × I × L_{éq} × z = \\sqrt{3} × 204 × 20 × 0,00030 ≈ 2,1 V  →  0,5 %' },
      ],
      result: 'Gaine à barres 250 A avec huit boîtiers de dérivation, alimentée par un seul départ au TGBT',
    },
    {
      type: 'decision',
      title: 'Distribution de la future ligne',
      choice: 'Gaine à barres 250 A au-dessus de la ligne, réservée dès aujourd’hui au TGBT (un départ 250 A en attente)',
      reasons: [
        'Un seul départ et un seul câble d’alimentation au lieu de huit.',
        'Déplacer une machine revient à déplacer un boîtier de dérivation, sans tirer de câble.',
        'Montage rapide, essais faits en usine : la ligne pourra démarrer pendant un arrêt de production court.',
      ],
      rejected: 'Huit câbles individuels : moins chers à l’achat, mais un TGBT plus grand et chaque modification de la ligne devient un petit chantier.',
    },

    { type: 'heading', text: '5 · Ce que disent les normes' },
    {
      type: 'norms',
      title: 'Remplissage et pose',
      rows: [
        { norm: 'IEC 60364-5-52', rule: 'Méthodes de pose de référence (E et F sur chemin perforé), facteurs de groupement selon le nombre de câbles et de chemins.', result: 'espacés : facteur ≈ 1' },
        { norm: 'NF C 15-100 / UTE C 15-105', rule: 'Mêmes méthodes ; tableaux de facteurs de correction ; réserve conseillée sur les chemins.', result: 'idem IEC' },
        { norm: 'NEC 392.22', rule: 'Pour des câbles multiconducteurs de 4/0 AWG et plus sur échelle : somme des diamètres ≤ largeur du chemin, en une couche.', result: '113 mm ≤ 300 mm ✓' },
        { norm: 'NEC chapitre 9', rule: 'Remplissage des conduits : 53 % pour un câble, 31 % pour deux, 40 % au-delà.', result: 'descentes en conduit' },
      ],
    },
    { type: 'image', source: require('../../../assets/reference/conduit_nec_fill_specs.png'), caption: 'NEC : taux de remplissage maximal d’un conduit selon le nombre de conducteurs (53 %, 31 %, 40 %)' },
    {
      type: 'norms',
      title: 'Supports et canalisations',
      rows: [
        { norm: 'IEC 61537', rule: 'Essais de charge (CMA), classes de corrosion, continuité électrique des systèmes de chemins de câbles.', result: 'CMA 40 kg/m à 1,5 m' },
        { norm: 'IEC 61439-6', rule: 'Canalisations préfabriquées : vérification d’échauffement, de court-circuit et d’IP comme un tableau.', result: 'gaine 250 A' },
        { norm: 'IEC 60364-4-44 / EN 50174-2', rule: 'Séparation entre câbles d’énergie et câbles de données selon le type de câble et de cloison.', result: '30 cm, croisements à 90°' },
        { norm: 'NEC 392.60', rule: 'Un chemin de câbles métallique peut servir de conducteur de terre s’il est marqué et identifié pour cet usage.', result: 'PE séparé chez Tropica' },
      ],
    },
    {
      type: 'regional',
      text: 'En zone côtière, l’air salin attaque l’acier galvanisé ordinaire en quelques années : choisissez une galvanisation à chaud après fabrication (classe de corrosion élevée selon IEC 61537), ou de l’inox dans les zones de lavage de l’agro-alimentaire. Les rongeurs aiment les gaines de câbles : couvercles sur les chemins bas et bouchage des fourreaux à l’entrée des locaux. Enfin, les gaines à barres s’importent avec des délais longs : à réserver tôt dans le planning.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Le support choisit le mode de pose, donc la section : chemin perforé ou échelle = méthode E, la plus favorable.',
        'Largeur = somme des diamètres (×2 si on espace), plus 20 à 30 % de réserve ; charge vérifiée par la CMA du catalogue.',
        'Espacer les câbles d’un diamètre supprime presque tout le déclassement de groupement.',
        'Puissance et commande séparées de 30 cm ; câbles moteurs de variateurs blindés, raccordés à 360°.',
        'Continuité électrique des chemins, mais un PE dans chaque câble ; traversées coupe-feu rebouchées.',
        'Machines en ligne, souvent déplacées : gaine à barres avec boîtiers de dérivation.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'On ajoute deux pompes en 4G6 (17 mm) sur le chemin de 300 mm, toujours espacées d’un diamètre. La place suffit-elle ?',
      solution: ['Σd = 113 + 2 × 17 = 147 mm ; espacés : ≈ 294 mm.', 'Cela tient tout juste dans 300 mm, sans réserve : prévoir un second chemin pour la prochaine extension.'],
    },
    {
      type: 'exercise',
      question: 'Huit câbles de 40 mm de diamètre (≥ 4/0 AWG) doivent être posés en une couche sur une échelle selon la NEC. Quelle largeur minimale ?',
      solution: ['NEC 392.22 : somme des diamètres ≤ largeur : 8 × 40 = 320 mm.', 'On prend l’échelle normalisée au-dessus : 400 mm (16 in), ou 450 mm pour garder une réserve.'],
    },
    {
      type: 'exercise',
      question: 'Pourquoi raccorder le blindage d’un câble de variateur des deux côtés, alors qu’on raccorde souvent le blindage d’un câble de capteur d’un seul côté ?',
      solution: [
        'Les parasites du variateur sont à haute fréquence : le blindage doit les ramener vers leur source par le chemin le plus court, aux deux extrémités, avec une reprise à 360°.',
        'Pour un capteur analogique sensible aux basses fréquences (50 Hz), une mise à la terre d’un seul côté évite qu’un courant de boucle de terre circule dans le blindage.',
      ],
    },
  ],
};
