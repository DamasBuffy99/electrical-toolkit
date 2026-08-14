import { TopicContent } from '../types';

export const architecturalDrawingsContent: TopicContent = {
  title: 'Lecture des plans architecturaux',
  subtitle: "Ce qu'il faut savoir lire avant de commencer une conception électrique",
  blocks: [
    { type: 'heading', text: '🔷 Lire un plan : pièces et dimensions' },
    {
      type: 'text',
      text: "Chaque pièce d'un plan architectural est étiquetée avec son nom et ses dimensions (largeur × longueur), et chaque étage indique sa surface totale. Lire la fonction et la taille de chaque pièce avant de commencer l'implantation électrique — ça guide l'éclairage, les prises et le regroupement des circuits.",
    },
    {
      type: 'image',
      source: require('../../../assets/reference/villa_floor_plan.png'),
      caption: 'Exemple de plan de villa avec pièces et dimensions annotées',
      height: 340,
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Escaliers et ascenseurs' },
    {
      type: 'bullets',
      items: [
        "Les escaliers sont dessinés en lignes parallèles (les marches), numérotées dans le sens de circulation, avec une flèche indiquant la montée/descente.",
        "Les ascenseurs sont toujours placés à côté des escaliers — ils forment ensemble le noyau de circulation verticale du bâtiment.",
      ],
    },
    {
      type: 'image',
      source: require('../../../assets/reference/stair_symbols.png'),
      caption: 'Exemples de représentations d\'escaliers en plan',
      height: 320,
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Symbole de gaine : X dans un carré' },
    {
      type: 'text',
      text: "Un X inscrit dans un carré signale une ouverture dans la dalle. La façon de l'interpréter dépend de sa répétition d'étage en étage :",
    },
    {
      type: 'table',
      headers: ['Où apparaît le X ?', 'Interprétation'],
      rows: [
        ['Sur un seul étage', 'Espace en double hauteur (ouverture vers l\'étage du dessus uniquement)'],
        ['Sur tous les étages, au même endroit', 'Gaine technique ou puits de lumière traversant tout le bâtiment'],
      ],
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Portes, fenêtres et mobilier' },
    {
      type: 'bullets',
      items: [
        'Portes : arc de cercle depuis le point de pivot, montrant le sens d\'ouverture ; portes doubles = deux arcs symétriques.',
        'Fenêtres : rupture dans le trait du mur avec des lignes parallèles au niveau de l\'ouverture.',
        'Mobilier : symboles en plan à l\'échelle — à utiliser pour garder les prises et interrupteurs dégagés du mobilier prévu.',
      ],
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Préparer le plan avant la conception électrique' },
    {
      type: 'image',
      source: require('../../../assets/diagrams/dwg_prep_steps.png'),
      caption: 'Étapes de préparation du fichier DWG',
      height: 540,
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Arborescence du dossier projet' },
    {
      type: 'table',
      headers: ['Dossier', 'Contenu'],
      rows: [
        ['Input', 'Plans architecturaux, plans mécaniques, plans courant faible, exigences du client, design intérieur'],
        ['Output', 'Système d\'éclairage (rapport DIALux), système de puissance, panel schedule, schéma unifilaire, BOQ et spécifications'],
        ['Draft', 'Fichiers DIALux/CAD de travail, anciennes versions datées'],
      ],
    },
    {
      type: 'note',
      text: '💡 Toujours dater les anciennes révisions avant de les déplacer vers Draft, pour ne jamais écraser le dossier Output actuel.',
    },
  ],
};
