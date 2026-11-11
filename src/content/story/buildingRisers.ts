import { TopicContent } from '../types';

export const buildingRisersContent: TopicContent = {
  title: 'Colonnes montantes et compteurs',
  subtitle: 'Comment faire monter 76 kVA jusqu’au 4e étage, donner à chaque famille son compteur, et garantir que la tension reste bonne jusqu’au dernier appartement ?',
  blocks: [
    { type: 'scene', text: 'Mois 3 · Bureau d’études' },
    { type: 'illustration', name: 'building-riser', props: { highlight: 'risers' }, caption: 'La colonne montante dessert les compteurs de chaque palier' },
    {
      type: 'text',
      text: 'Depuis le TGBT, l’énergie doit rejoindre 16 appartements répartis sur quatre étages. Plutôt que de tirer 16 câbles depuis le rez-de-chaussée, Awa prévoit une colonne montante : un gros câble triphasé qui monte dans une gaine technique verticale, et qui alimente à chaque palier les compteurs des quatre appartements.',
    },
    {
      type: 'dialogue',
      speaker: 'Fatou Sow',
      role: 'client',
      text: 'Et qui paie l’électricité de quoi ? Je ne veux pas que mes locataires se disputent sur la facture de l’ascenseur.',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Chaque appartement a son compteur : chaque famille paie ce qu’elle consomme. L’ascenseur, les pompes et l’éclairage des parties communes sont sur un compteur à part, celui des « services généraux », payé par les charges de copropriété ou par vous. C’est pour cela que je les mets sur un tableau séparé.',
    },

    { type: 'heading', text: '1 · Dimensionner la colonne montante' },
    { type: 'formula', text: 'I = \\frac{S}{√3 × U} = \\frac{76 000}{√3 × 400} ≈ 110 A' },
    {
      type: 'text',
      text: 'Awa choisit un disjoncteur de 125 A au départ du TGBT, puis un câble capable de porter au moins 125 A dans les conditions réelles : dans une gaine verticale fermée, où il fait chaud. Un câble cuivre 4 × 35 mm² en XLPE supporte environ 150 A à 30 °C ; corrigé pour 40 °C (× 0,87), il reste environ 130 A : c’est suffisant.',
    },
    { type: 'formula', text: 'I_z = 150 × 0,87 ≈ 130 A  ≥  I_{CB} = 125 A  ≥  I = 110 A' },
    {
      type: 'note',
      text: 'C’est toujours la même chaîne de vérification, du plus petit au plus grand : courant d’emploi ≤ calibre du disjoncteur ≤ courant admissible du câble corrigé. Elle était déjà là pour les circuits de la villa.',
    },
    { type: 'fiche', id: 'cable-sizing', why: 'Courants admissibles, isolants PVC et XLPE, facteurs de correction.' },

    { type: 'heading', text: '2 · Répartir les logements sur les phases' },
    {
      type: 'text',
      text: 'Chaque appartement est en monophasé. La colonne est triphasée : Awa raccorde les 16 compteurs en alternant les phases (L1, L2, L3, L1…), soit 6 logements sur une phase et 5 sur chacune des deux autres. C’est le même principe d’équilibre que dans le tableau de la villa, à l’échelle de l’immeuble.',
    },
    {
      type: 'table',
      headers: ['Étage', 'Appt A', 'Appt B', 'Appt C', 'Appt D'],
      rows: [
        ['R+1', 'L1', 'L2', 'L3', 'L1'],
        ['R+2', 'L2', 'L3', 'L1', 'L2'],
        ['R+3', 'L3', 'L1', 'L2', 'L3'],
        ['R+4', 'L1', 'L2', 'L3', 'L1'],
      ],
    },

    { type: 'heading', text: '3 · Les compteurs : au palier ou regroupés ?' },
    {
      type: 'table',
      headers: ['', 'Compteurs sur chaque palier', 'Compteurs regroupés au rez-de-chaussée'],
      rows: [
        ['Câbles vers les logements', 'courts (une quinzaine de mètres)', 'longs (jusqu’à 30 m et plus), un par logement'],
        ['Relevé, prépaiement, coupure', 'il faut monter dans les étages', 'tout au même endroit'],
        ['Colonne montante', 'oui, un gros câble commun', 'non, mais 16 câbles dans la gaine'],
      ],
    },
    {
      type: 'text',
      text: 'Le distributeur accepte les deux solutions. Awa choisit les paliers : moins de cuivre, des câbles plus courts, une gaine moins encombrée. Chaque palier reçoit un coffret avec quatre compteurs et, pour chaque logement, un disjoncteur de branchement différentiel 500 mA réglé à 45 A (9 kVA / 230 V ≈ 39 A).',
    },

    { type: 'heading', text: '4 · La tension au dernier étage' },
    {
      type: 'text',
      text: 'L’appartement le plus défavorisé est au 4e étage, au bout du palier : 25 m de colonne, puis 15 m de câble jusqu’à son tableau. Awa additionne les chutes de tension de chaque tronçon.',
    },
    { type: 'formula', text: 'Colonne (triphasé) : ΔU = \\frac{√3 × ρ × L × I × cos φ}{S} = \\frac{1,732 × 0,0225 × 25 × 110 × 0,9}{35} ≈ 2,8 V  →  0,7 %' },
    { type: 'formula', text: 'Palier → logement (monophasé, 10 mm²) : ΔU = \\frac{2 × 0,0225 × 15 × 39 × 0,9}{10} ≈ 2,4 V  →  1,0 %' },
    {
      type: 'text',
      text: 'En ajoutant le court trajet transformateur → TGBT, on arrive à moins de 2 % au tableau de l’appartement le plus éloigné. Comme l’immeuble a son propre poste, les limites admises sont de 6 % pour l’éclairage et 8 % pour les autres usages : il reste toute la marge pour les circuits à l’intérieur des logements.',
    },
    { type: 'fiche', id: 'voltage-drop', why: 'Limites selon l’alimentation (réseau public ou poste privé) et formules triphasées.' },
    { type: 'fiche', id: 'panel-basics', why: 'Composition d’un tableau et schéma unifilaire de distribution.' },
    {
      type: 'regional',
      text: 'Les compteurs à prépaiement (cartes ou codes) sont très répandus : ils règlent la question des impayés entre propriétaire et locataires. Prévoyez dans chaque logement un emplacement visible pour le boîtier d’affichage, et vérifiez avec le distributeur le modèle de coffret de comptage exigé.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Une colonne montante triphasée dessert les paliers ; chaque logement a son compteur et son disjoncteur de branchement.',
        'Les services communs ont leur propre compteur et leur propre tableau.',
        'On alterne les phases d’un logement à l’autre pour équilibrer la colonne.',
        'On additionne les chutes de tension tronçon par tronçon, jusqu’au logement le plus éloigné.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Si les compteurs étaient regroupés au rez-de-chaussée, le logement du 4e serait alimenté par 40 m de câble monophasé. Quelle section faut-il pour rester sous 2 % sur ce câble (39 A, cos φ 0,9) ?',
      solution: [
        'ΔU max = 2 % × 230 = 4,6 V.',
        'S ≥ 2 × 0,0225 × 40 × 39 × 0,9 / 4,6 ≈ 13,7 mm² → 16 mm².',
        'Seize câbles de 16 mm² dans la gaine, contre une colonne de 35 mm² et des câbles de 10 mm² : on voit pourquoi Awa préfère les compteurs aux paliers.',
      ],
    },
    {
      type: 'exercise',
      question: 'Sur la colonne, 6 logements sont sur L1 et 5 sur L2 et L3. Quel est le déséquilibre en nombre de logements ? Est-ce gênant ?',
      solution: [
        'Moyenne : 16 / 3 ≈ 5,33 logements par phase ; L1 en a 6, soit un écart de (6 − 5,33) / 5,33 ≈ 12,5 %.',
        'En pratique, le foisonnement entre familles lisse les écarts et la colonne est dimensionnée avec de la marge : c’est acceptable. Avec un nombre de logements multiple de 3, l’équilibre serait parfait.',
      ],
    },
  ],
};
