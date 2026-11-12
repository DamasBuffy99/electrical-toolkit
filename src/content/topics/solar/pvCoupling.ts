import { TopicContent } from '../../types';

export const pvCouplingContent: TopicContent = {
  title: 'Couplage DC ou AC, et les deux « ADN » des hybrides',
  subtitle: 'Où l’énergie solaire rejoint-elle la batterie : côté continu ou côté alternatif ? Ce choix d’architecture change le rendement, l’évolutivité et le comportement en panne. Puis un peu de vocabulaire : deux appareils tous deux appelés « hybrides » peuvent avoir été pensés pour des usages opposés.',
  blocks: [
    {
      type: 'objectives',
      items: [
        'Distinguer couplage DC et couplage AC et leurs rendements.',
        'Chiffrer les pertes supplémentaires du couplage AC.',
        'Nommer correctement un appareil selon les fonctions qu’il intègre.',
        'Reconnaître un hybride « réseau d’abord » et un hybride « batterie d’abord ».',
      ],
    },
    {
      type: 'keyfigures',
      items: [
        { value: '97–98 %', label: 'panneaux → batterie en couplage DC' },
        { value: '≈ 92 %', label: 'panneaux → batterie en couplage AC' },
        { value: '≈ 250 kWh/an', label: 'perdus de plus en AC pour 5 000 kWh stockés' },
        { value: '12 kW', label: 'de PV couplé en AC au maximum par Sunny Island 8.0H' },
      ],
    },

    { type: 'heading', text: '1 · Deux façons de stocker le solaire' },
    {
      type: 'bullets',
      items: [
        'Couplage DC : les panneaux chargent la batterie par un MPPT, sans passer par l’alternatif. Exemples : STP Smart Energy, Deye, Victron EasySolar-II GX, Studer Xtender + VarioTrack, ou un MultiPlus-II associé à des régulateurs SmartSolar.',
        'Couplage AC : un onduleur réseau (Sunny Tripower, Fronius) injecte sur la sortie d’un onduleur-chargeur (Sunny Island, MultiPlus, Quattro). Pour être stockée, l’énergie fait DC → AC → DC.',
      ],
    },
    { type: 'image', source: require('../../../../assets/solar/inverters/dc-ac-coupling.webp'), caption: 'Stocker le solaire coûte une conversion en DC, deux en AC. Les deux montages existent en résidentiel raccordé comme en site isolé', height: 320 },
    {
      type: 'table',
      headers: ['Critère', 'Couplage DC', 'Couplage AC'],
      rows: [
        ['Panneaux → batterie', '1 conversion, ≈ 97–98 %', '2 conversions, ≈ 92 %'],
        ['Panneaux → charges de jour', '1 conversion', '1 conversion'],
        ['Ajouter du stockage à un PV existant', 'il faut changer l’onduleur', 'on ajoute un onduleur batterie sans toucher au PV'],
        ['Si l’onduleur-chargeur s’arrête en site isolé', 'le MPPT continue de charger la batterie', 'l’onduleur réseau s’arrête aussi'],
        ['Limite propre', 'puissance PV limitée par le ou les MPPT', 'PV couplé en AC limité par l’onduleur-chargeur (12 kW par SI 8.0H)'],
        ['Panneaux éloignés des batteries', 'câbles DC basse tension longs et coûteux', 'liaison en 230/400 V, plus simple'],
      ],
    },
    {
      type: 'calc',
      title: 'Ce que coûte le couplage AC',
      steps: [
        { label: 'Énergie solaire passant par la batterie dans l’année', formula: 'E = 5 000 kWh' },
        { label: 'Écart de rendement entre les deux chemins', formula: '≈ 97 % − 92 % = 5 points' },
        { label: 'Pertes supplémentaires', formula: '5 000 × 0,05 ≈ 250 kWh/an' },
        { label: 'En résidentiel raccordé en France (0,20 €/kWh)', formula: '250 × 0,20 ≈ 50 €/an' },
      ],
      result: 'L’écart ne touche que l’énergie stockée : l’énergie consommée de jour, directement, ne subit qu’une conversion dans les deux cas',
    },
    {
      type: 'note',
      text: 'En site isolé, ces pertes se compensent par quelques panneaux de plus ou un peu de gasoil : c’est à ce coût qu’il faut les comparer, et il pèse souvent moins que les avantages du couplage AC (évolutivité, liaisons en alternatif, panneaux éloignés).',
    },
    {
      type: 'decision',
      title: 'Choisir le couplage',
      choice: 'Couplage DC pour une construction neuve compacte ; couplage AC pour ajouter du stockage à un PV existant, pour des panneaux éloignés ou pour un site isolé évolutif',
      reasons: [
        'DC : un seul appareil, meilleur rendement de stockage, le MPPT continue de charger même si l’onduleur-chargeur s’arrête.',
        'AC : on garde l’onduleur PV existant, les liaisons se font en 230/400 V, et l’on ajoute des onduleurs au fil des besoins.',
      ],
      rejected: 'Choisir uniquement sur le rendement : 50 € par an ne justifient pas de remplacer un onduleur PV en bon état.',
    },

    { type: 'heading', text: '2 · Du plus simple au plus complet : bien nommer les appareils' },
    {
      type: 'text',
      text: 'Un appareil se nomme d’après ce qu’il intègre : on part de l’onduleur, on ajoute le chargeur, puis le MPPT. « Onduleur off-grid » n’est pas une technologie mais un usage : on l’emploie surtout pour un onduleur-chargeur ou un hybride capable de fonctionner sans réseau.',
    },
    {
      type: 'table',
      headers: ['Fonctions intégrées', 'Nom', 'Exemples'],
      rows: [
        ['Batterie → alternatif, sens unique', 'onduleur', 'Victron Phoenix'],
        ['Alternatif → batterie, sens unique', 'chargeur', 'Victron Blue Smart'],
        ['Onduleur + chargeur + commutateur de transfert', 'onduleur-chargeur', 'MultiPlus-II, Quattro, Sunny Island'],
        ['Onduleur-chargeur + MPPT', 'onduleur hybride', 'EasySolar-II GX, Deye, Growatt SPF'],
        ['Onduleur PV + gestion de batterie + secours', 'onduleur hybride raccordé', 'STP Smart Energy, Huawei SUN2000 + LUNA2000'],
      ],
    },

    { type: 'heading', text: '3 · Deux origines, deux philosophies' },
    {
      type: 'table',
      headers: ['Critère', 'Hybride « réseau d’abord »', 'Hybride « batterie d’abord »'],
      rows: [
        ['Origine', 'onduleur PV auquel on a ajouté une batterie', 'onduleur-chargeur auquel on a ajouté un MPPT'],
        ['Exemples', 'SMA STP Smart Energy, Huawei SUN2000, GoodWe', 'Victron EasySolar-II GX, Studer Xtender + VarioTrack, Outback'],
        ['Postulat', 'le réseau est là presque tout le temps', 'le réseau peut ne jamais être là'],
        ['Optimisé pour', 'réduire la facture', 'garantir l’alimentation'],
        ['Batterie', 'souvent haute tension (150–600 V)', '48 V le plus souvent'],
        ['Fonctionnement sans réseau', 'secours sur une sortie dédiée', 'permanent'],
        ['Groupe électrogène', 'rarement piloté', 'pilotage complet'],
        ['Pointes de démarrage', 'selon le modèle, à vérifier', 'en général élevées (≈ 2× pendant quelques secondes)'],
        ['Fonctions tarifaires (heures creuses, écrêtage)', 'avancées', 'possibles, plus simples'],
        ['Mise en service', 'simple', 'plus experte'],
      ],
    },
    {
      type: 'note',
      text: 'Certains appareils se situent entre les deux. Le Deye SG05LP3, par exemple, est un hybride raccordé en 48 V qui pilote aussi un groupe et fonctionne durablement sans réseau.',
    },

    { type: 'heading', text: '4 · Comment choisir' },
    {
      type: 'bullets',
      items: [
        'Le réseau est fiable et l’objectif est la facture : hybride « réseau d’abord » ou, pour un PV existant, onduleur batterie couplé en AC.',
        'Le réseau est absent ou très instable : onduleur-chargeur ou hybride « batterie d’abord », avec groupe piloté.',
        'Dans tous les cas : dimensionner sur la puissance continue à la température du local, phase par phase, puis vérifier la pointe du plus gros moteur.',
      ],
    },
    {
      type: 'regional',
      text: 'Sur les sites à délestages quotidiens, un hybride « réseau d’abord » conçu pour l’Europe peut décevoir : sortie secourue limitée, groupe non piloté, batterie haute tension coûteuse et rare localement. Les appareils « batterie d’abord » en 48 V, plus robustes aux coupures et compatibles avec des batteries disponibles sur place, sont souvent mieux adaptés.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Couplage DC : une conversion vers la batterie ; couplage AC : deux.',
        'L’écart d’environ 5 points ne touche que l’énergie stockée.',
        'Le couplage AC permet d’ajouter du stockage sans toucher au PV, et de raccorder des panneaux éloignés.',
        'Un hybride « réseau d’abord » réduit la facture ; un hybride « batterie d’abord » garantit l’alimentation.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Un site isolé stocke 8 000 kWh de solaire par an. Combien de kWh le couplage AC perd-il de plus que le couplage DC ? Combien de litres de gasoil faut-il pour les compenser (0,35 L/kWh) ?',
      solution: ['8 000 × 0,05 = 400 kWh/an.', '400 × 0,35 ≈ 140 L de gasoil par an, ou environ un panneau de 400 Wc supplémentaire sous le soleil ouest-africain (≈ 600 kWh/an).'],
    },
    {
      type: 'exercise',
      question: 'Le champ PV est à 120 m du local des batteries. Couplage DC ou AC ?',
      solution: ['En DC basse tension (48 V), 120 m imposent des câbles énormes pour limiter la chute de tension.', 'Le couplage AC transporte l’énergie en 230/400 V : un onduleur réseau près des panneaux, une liaison alternative ordinaire jusqu’à l’onduleur-chargeur.'],
    },
  ],
};
