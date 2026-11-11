import { TopicContent } from '../types';

export const buildingSubstationContent: TopicContent = {
  title: 'Le poste de transformation et le local groupe',
  subtitle: 'Quelle taille de transformateur ? Quel type ? Comment dimensionner son local, et celui du futur groupe électrogène ? Awa répond en pensant à la sécurité, à l’entretien et au budget de Fatou.',
  blocks: [
    { type: 'scene', text: 'Mois 2 · Réunion avec l’architecte et la promotrice' },
    { type: 'illustration', name: 'building-riser', props: { highlight: 'substation' }, caption: 'Le poste MT/BT et le tableau général basse tension (TGBT) au rez-de-chaussée' },

    { type: 'heading', text: '1 · Choisir la puissance du transformateur' },
    {
      type: 'text',
      text: 'La demande estimée est de 95 kVA. Awa ajoute une réserve d’environ 25 % pour l’avenir (climatisation des halls, bornes de recharge, un commerce au rez-de-chaussée), puis choisit la puissance normalisée juste au-dessus.',
    },
    { type: 'formula', text: '95 kVA × 1,25 ≈ 119 kVA  →  puissances normalisées : 100 · 160 · 250 · 400 · 630 kVA  →  160 kVA' },
    { type: 'formula', text: 'Taux de charge = \\frac{95}{160} ≈ 59 %' },
    {
      type: 'dialogue',
      speaker: 'Fatou Sow',
      role: 'client',
      text: 'Pourquoi pas 100 kVA ? C’est moins cher, et 95 c’est en dessous.',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'À 95 % de charge, le transformateur chaufferait beaucoup pendant les pointes du soir, sous un climat déjà chaud, et vieillirait vite. Le moindre ajout imposerait de le remplacer, alors qu’un transformateur dure plus de trente ans. Un 160 kVA travaille vers 60 % de sa charge, là où son rendement est bon, et vous laisse de la marge.',
    },
    {
      type: 'table',
      headers: ['', 'Transformateur à huile', 'Transformateur sec (résine)'],
      rows: [
        ['Prix', 'moins cher', 'plus cher'],
        ['Risque incendie', 'huile inflammable : bac de rétention, local fermé', 'très faible : adapté à l’intérieur des bâtiments'],
        ['Entretien', 'surveiller le niveau et la qualité de l’huile', 'dépoussiérage, contrôle des températures'],
        ['Usage typique', 'poste extérieur ou local isolé', 'immeubles, hôpitaux, centres commerciaux'],
      ],
    },
    {
      type: 'text',
      text: 'Le local est en rez-de-chaussée, sous des logements : Awa recommande un transformateur sec. Le surcoût achète de la sécurité pour 16 familles ; avec de l’huile, il aurait fallu un bac de rétention et des parois coupe-feu renforcées.',
    },

    { type: 'heading', text: '2 · Ce que contient le poste' },
    {
      type: 'bullets',
      items: [
        'Les cellules MT : arrivée du câble du distributeur, et une cellule « interrupteur-fusibles » qui protège le transformateur.',
        'Le transformateur 20 kV / 400 V de 160 kVA.',
        'Le comptage, selon les règles du distributeur.',
        'Le TGBT (tableau général basse tension), juste à côté : il distribue les colonnes montantes et les services communs.',
        'Le réseau de terre du poste : masses métalliques et neutre du transformateur.',
      ],
    },
    { type: 'formula', text: 'Côté MT : I = \\frac{160 000}{√3 × 20 000} ≈ 4,6 A   ;   côté BT : I = \\frac{160 000}{√3 × 400} ≈ 231 A' },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Côté moyenne tension, il ne passe que 4,6 A : le câble de la rue est fin. Côté basse tension, 231 A : il faut un disjoncteur général de 250 A et de gros câbles. C’est tout l’intérêt de transporter l’énergie en haute tension, et de la transformer au plus près des consommateurs.',
    },

    { type: 'heading', text: '3 · Dimensionner le local du transformateur' },
    {
      type: 'text',
      text: 'Un local trop petit, c’est un transformateur qu’on ne peut ni entretenir ni remplacer. Awa demande à l’architecte quatre choses, en s’appuyant sur les dégagements réglementaires et les dimensions du fabricant :',
    },
    {
      type: 'bullets',
      items: [
        'Les distances de sécurité devant et autour des appareils, pour travailler et circuler.',
        'Une porte ouvrant vers l’extérieur, assez large pour sortir le transformateur, avec accès permanent pour les agents du distributeur.',
        'Une ventilation naturelle : entrée d’air basse et sortie haute en façade. Le transformateur dissipe environ 2 à 3 kW de pertes à pleine charge : sans ventilation, le local devient un four.',
        'Aucune canalisation d’eau au-dessus du poste, et un sol légèrement surélevé contre les inondations.',
      ],
    },
    { type: 'fiche', id: 'transformer-generator', why: 'Dégagements, dimensions des locaux transformateur et groupe, fiches fabricants.' },

    { type: 'heading', text: '4 · Réserver le local du groupe électrogène' },
    {
      type: 'text',
      text: 'Fatou veut que l’ascenseur et les pompes fonctionnent pendant les coupures (on le dimensionnera à la dernière étape). Mais le local se décide maintenant, car un groupe a des contraintes fortes :',
    },
    {
      type: 'table',
      headers: ['Contrainte', 'Conséquence sur le local'],
      rows: [
        ['Air de refroidissement du radiateur', 'grandes grilles d’entrée et de sortie d’air, face à face'],
        ['Gaz d’échappement', 'conduit de fumée vers le toit ou loin des fenêtres des logements'],
        ['Bruit et vibrations', 'plots antivibratiles, murs épais, porte acoustique si possible'],
        ['Gazole', 'cuve journalière, bac de rétention, accès pour le ravitaillement'],
        ['Liaison avec le TGBT', 'local voisin du poste pour raccourcir les câbles'],
      ],
    },
    {
      type: 'dialogue',
      speaker: 'Fatou Sow',
      role: 'client',
      text: 'On pourrait mettre le groupe dehors, sous un abri, et garder le local pour un commerce ?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'C’est possible avec un groupe insonorisé en capot, sur une dalle, loin des chambres. On garde alors seulement la place de l’inverseur dans le local technique. Je le note comme variante pour l’architecte : vous déciderez avec les devis.',
    },
    {
      type: 'regional',
      text: 'La chaleur ambiante et l’altitude réduisent la puissance disponible d’un groupe (déclassement indiqué par le fabricant, souvent au-delà de 40 °C ou de 1 000 m). Les groupes « capotés » (insonorisés) sont très répandus en ville : ils évitent un local maçonné, mais demandent une dalle, une protection contre le vol de gazole et un accès pour l’entretien.',
    },

    { type: 'heading', text: '5 · Huit mois plus tard : l’approbation du transformateur' },
    { type: 'scene', text: 'Mois 10 · Réunion de chantier' },
    {
      type: 'dialogue',
      speaker: 'Clarisse Houndé (achats, Électra BTP)',
      role: 'team',
      text: 'Pour le transformateur, j’ai une offre à huile 30 % moins chère que le sec demandé au cahier des charges. Même puissance, même tension. Je vous la soumets pour approbation.',
    },
    {
      type: 'dialogue',
      speaker: 'Marc Adjovi (supervision)',
      role: 'team',
      text: 'Même puissance, mais pas même risque : le local est sous des logements. Le cahier des charges impose un transformateur sec justement pour ça. Je refuse cette variante. En revanche, votre deuxième offre, un sec d’une autre marque, est recevable si sa fiche technique confirme 160 kVA, 20/0,4 kV, u_k = 4 % et des pertes équivalentes.',
    },
    {
      type: 'text',
      text: 'Clarisse renvoie la fiche technique du second modèle. Awa vérifie la tension de court-circuit : un u_k différent changerait le courant de court-circuit calculé pour le TGBT. Les valeurs concordent : Marc approuve, et l’entreprise peut commander. Fatou économise 8 % sans rien céder sur la sécurité.',
    },
    {
      type: 'note',
      text: 'C’est le rôle de la demande d’approbation : l’entreprise peut proposer un matériel équivalent, souvent moins cher ou plus disponible, mais c’est la supervision qui juge l’équivalence, en s’appuyant sur la conception.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'On ajoute une réserve (environ 25 %) et on choisit la puissance normalisée au-dessus ; on vise une charge de 50 à 75 %.',
        'Transformateur sec à l’intérieur des bâtiments habités ; à huile pour les postes extérieurs ou isolés.',
        'Côté MT quelques ampères, côté BT des centaines : le TGBT est voisin du transformateur.',
        'Les locaux transformateur et groupe se réservent dès l’esquisse : dégagements, porte, ventilation, échappement.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Calculez le courant nominal côté BT d’un transformateur de 250 kVA, 400 V. Quel disjoncteur général proposez-vous ?',
      solution: ['I = 250 000 / (√3 × 400) ≈ 361 A.', 'Disjoncteur général réglable de 400 A (réglé vers 0,9 × 400 = 360 A), de type boîtier moulé.'],
    },
    {
      type: 'exercise',
      question: 'Le transformateur de 160 kVA a 2,5 kW de pertes à pleine charge. Pourquoi ne pas simplement climatiser le local ?',
      solution: [
        'Une clim consommerait de l’énergie en permanence pour évacuer des pertes, et tomberait en panne un jour : le transformateur surchaufferait sans alarme.',
        'La ventilation naturelle (air frais en bas, air chaud en haut) fonctionne sans énergie et sans panne. On ne climatise que si elle est impossible.',
      ],
    },
  ],
};
