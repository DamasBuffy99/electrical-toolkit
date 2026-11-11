import { TopicContent } from '../types';

export const factoryCablesContent: TopicContent = {
  title: 'Câbles en chemin de câbles et chaleur',
  subtitle: 'Dans l’usine, les câbles courent par dizaines sur les mêmes chemins de câbles, sous une toiture qui chauffe. Un câble correct dans un catalogue peut cuire dans la réalité. Awa applique les facteurs de correction, et explique à Ibrahim pourquoi le câble du compresseur est plus gros qu’il ne l’imaginait.',
  blocks: [
    { type: 'scene', text: 'Mois 2 · Visite du futur tracé des chemins de câbles' },
    {
      type: 'text',
      text: 'Paul montre à Awa le chemin de câbles qui longe la charpente, à 5 m de haut, sous la tôle. Il y passera six câbles de puissance côte à côte : compresseur, pompes, nettoyage. En saison chaude, Paul y a mesuré 40 °C.',
    },
    {
      type: 'dialogue',
      speaker: 'Ibrahim Traoré',
      role: 'client',
      text: 'Le fournisseur de câbles dit qu’un 25 mm² supporte 135 A. Le compresseur n’en prend que 98. Pourquoi m’annoncer du 35 mm² ?',
    },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Ses 135 A sont donnés pour un câble seul, à 30 °C. Ici, il fera 40 °C et le câble sera serré contre cinq autres qui chauffent aussi. Il évacue moins bien sa chaleur : il faut lui demander moins. C’est comme courir en plein soleil au milieu d’une foule.',
    },

    { type: 'heading', text: '1 · Les facteurs de correction' },
    {
      type: 'table',
      headers: ['Condition réelle', 'Facteur (câble XLPE)', 'Effet'],
      rows: [
        ['Température ambiante 40 °C au lieu de 30 °C', '≈ 0,91', 'le câble est déjà chaud avant de transporter quoi que ce soit'],
        ['6 câbles jointifs sur un chemin de câbles perforé', '≈ 0,75', 'chaque câble chauffe ses voisins'],
        ['Facteur global', '0,91 × 0,75 ≈ 0,68', 'le câble ne porte plus que 68 % de sa valeur catalogue'],
      ],
    },
    {
      type: 'text',
      text: 'La protection contre les surcharges du compresseur est réglée à 98 A : c’est le courant que le câble doit pouvoir porter en permanence, dans ses conditions réelles.',
    },
    { type: 'formula', text: 'I_{z,catalogue} ≥ \\frac{I_r}{k_{temp} × k_{groupement}} = \\frac{98}{0,91 × 0,75} ≈ 144 A' },
    {
      type: 'table',
      headers: ['Section (cuivre, XLPE, sur chemin de câbles)', 'Catalogue', 'Après correction × 0,68', 'Verdict'],
      rows: [
        ['25 mm²', '135 A', '92 A', '✗ < 98 A'],
        ['35 mm²', '169 A', '115 A', '✓ ≥ 98 A'],
        ['50 mm²', '207 A', '141 A', '✓ (si le réglage montait à 125 A)'],
      ],
    },
    {
      type: 'note',
      text: 'Le câble doit porter le courant de réglage de sa protection, pas seulement le courant du moteur. Si un jour quelqu’un règle la protection thermique à 125 A « parce que ça déclenche », il faudra un 50 mm². D’où l’étiquette posée sur l’armoire : « Ir = 98 A, ne pas modifier sans avis du bureau d’études ».',
    },
    { type: 'fiche', id: 'cable-sizing', why: 'Tables de courants admissibles et facteurs de correction (température, groupement).' },

    { type: 'heading', text: '2 · La chute de tension' },
    {
      type: 'text',
      text: 'Le compresseur est à 70 m du TGBT, au bout de l’usine. Awa vérifie la chute de tension en triphasé, avec le 35 mm² retenu.',
    },
    { type: 'formula', text: 'ΔU = \\frac{√3 × ρ × L × I × cos φ}{S} = \\frac{1,732 × 0,0225 × 70 × 98 × 0,86}{35} ≈ 6,6 V  →  1,6 %' },
    {
      type: 'text',
      text: 'En ajoutant le feeder de l’armoire (0,6 %), on reste sous 2,5 %, loin de la limite de 8 % admise pour une installation alimentée par son propre poste. Ici, c’est la chaleur, pas la chute de tension, qui a imposé la section.',
    },
    { type: 'fiche', id: 'voltage-drop', why: 'Formules triphasées et limites selon le type d’alimentation.' },

    { type: 'heading', text: '3 · Le gros câble du feeder' },
    {
      type: 'text',
      text: 'Le feeder de l’armoire est protégé à 320 A. Sur le même chemin de câbles, il faudrait 320 / 0,68 ≈ 470 A de catalogue : un câble énorme. Awa le pose plutôt sur un chemin de câbles séparé, sans voisins.',
    },
    { type: 'formula', text: 'Seul sur son chemin : I_z ≥ \\frac{320}{0,91} ≈ 352 A  →  cuivre 150 mm² (≈ 399 A)' },
    {
      type: 'dialogue',
      speaker: 'Awa Diallo',
      role: 'engineer',
      text: 'Un deuxième chemin de câbles coûte moins cher qu’un câble de 240 mm². Bien poser un câble, c’est aussi une façon de le dimensionner.',
    },

    { type: 'heading', text: '4 · Les bonnes pratiques de pose' },
    {
      type: 'bullets',
      items: [
        'Câbles armés pour l’industrie : ils résistent aux chocs des chariots et aux rongeurs.',
        'Câbles de puissance et câbles de commande (capteurs, automates) sur des chemins séparés, ou à distance, pour éviter les perturbations.',
        'Câbles blindés entre variateur et moteur, blindage relié à la terre aux deux extrémités.',
        'Calfeutrement coupe-feu à chaque traversée de mur entre deux zones.',
        'Repérage des deux extrémités de chaque câble, avec le même nom que sur le schéma.',
      ],
    },
    {
      type: 'regional',
      text: 'Sous les toitures en tôle, la température près de la charpente dépasse souvent 45 °C en saison chaude : mesurez-la plutôt que de supposer 30 °C. Quand c’est possible, faites passer les chemins de câbles à mi-hauteur ou à l’ombre d’une structure, plutôt que contre la tôle.',
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'Les valeurs catalogue supposent un câble seul à 30 °C : on corrige pour la température et le groupement.',
        'Le câble doit porter le réglage de sa protection : I_z corrigé ≥ I_r.',
        'Dans une usine, la chaleur impose souvent la section plus que la chute de tension.',
        'Séparer les câbles (chemins distincts) réduit la section nécessaire.',
      ],
    },
    { type: 'heading', text: 'Exercices' },
    {
      type: 'exercise',
      question: 'Une pompe de 15 kW (protection réglée à 28,3 A) est sur le même chemin de câbles (facteur global 0,68). Un 4 mm² (catalogue 42 A) convient-il ?',
      solution: ['Courant admissible corrigé : 42 × 0,68 ≈ 28,6 A ≥ 28,3 A.', 'Il convient tout juste : Awa prend 6 mm² pour garder de la marge (et limiter la chute de tension au démarrage).'],
    },
    {
      type: 'exercise',
      question: 'Si l’ambiance montait à 50 °C (facteur ≈ 0,82), le 35 mm² du compresseur resterait-il suffisant ?',
      solution: ['169 × 0,82 × 0,75 ≈ 104 A ≥ 98 A : oui, mais avec très peu de marge.', 'C’est un argument de plus pour éloigner le chemin de câbles de la tôle.'],
    },
  ],
};
