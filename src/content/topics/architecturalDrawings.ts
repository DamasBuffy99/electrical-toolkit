import { TopicContent } from '../types';

export const architecturalDrawingsContent: TopicContent = {
  title: 'Lire les plans architecturaux',
  subtitle: "Première étape du parcours : ce qu'il faut savoir lire avant de dessiner l'électricité",
  blocks: [
    {
      type: 'text',
      text: "Toute la conception repose sur les plans de l'architecte. Avant de placer le moindre luminaire, il faut savoir les lire — puis les préparer pour y dessiner l'électricité.",
    },
    { type: 'illustration', name: 'design-roadmap', props: { step: 1 }, caption: 'Étape 1 du parcours' },

    { type: 'heading', text: 'Pièces et dimensions' },
    {
      type: 'text',
      text: "Chaque pièce est étiquetée avec son nom et ses dimensions (largeur × longueur), et chaque étage indique sa surface totale. La fonction et la taille de chaque pièce guident l'éclairage, les prises et le regroupement des circuits.",
    },
    {
      type: 'image',
      source: require('../../../assets/reference/villa_floor_plan.png'),
      caption: 'Plan de villa avec pièces et dimensions annotées',
      height: 340,
    },

    { type: 'heading', text: 'Escaliers et ascenseurs' },
    {
      type: 'bullets',
      items: [
        'Les escaliers sont dessinés en lignes parallèles (les marches), numérotées dans le sens de circulation, avec une flèche indiquant la montée.',
        "Les ascenseurs sont toujours placés à côté des escaliers : ensemble, ils forment le noyau de circulation verticale du bâtiment.",
      ],
    },
    { type: 'illustration', name: 'plan-symbols', props: { variant: 'stairs' }, caption: 'Escalier et ascenseur en plan' },
    {
      type: 'image',
      source: require('../../../assets/reference/stair_symbols.png'),
      caption: "Représentations d'escaliers sur de vrais plans",
      height: 320,
    },

    { type: 'heading', text: 'Le X dans un carré' },
    {
      type: 'text',
      text: "Un X inscrit dans un carré signale une ouverture dans la dalle. Son interprétation dépend de sa répétition d'un étage à l'autre :",
    },
    {
      type: 'table',
      headers: ['Où apparaît le X ?', 'Interprétation'],
      rows: [
        ['Sur un seul étage', "Espace en double hauteur (ouvert sur l'étage du dessus uniquement)"],
        ['Sur tous les étages, au même endroit', 'Gaine technique ou puits de lumière traversant tout le bâtiment'],
      ],
    },
    { type: 'illustration', name: 'plan-symbols', props: { variant: 'shaft' }, caption: 'Même symbole, deux significations' },

    { type: 'heading', text: 'Portes, fenêtres et mobilier' },
    {
      type: 'bullets',
      items: [
        "Portes : un arc depuis le point de pivot montre le sens d'ouverture ; porte double = deux arcs symétriques.",
        "Fenêtres : une rupture dans le trait du mur, avec des lignes parallèles au niveau de l'ouverture.",
        'Mobilier : dessiné à l’échelle — il sert à garder les prises et interrupteurs dégagés des meubles prévus.',
      ],
    },
    { type: 'illustration', name: 'plan-symbols', props: { variant: 'doors' }, caption: 'Portes, fenêtre, et prises bien ou mal placées' },

    { type: 'heading', text: 'Préparer le plan dans AutoCAD' },
    {
      type: 'text',
      text: "Avant de dessiner l'électricité, on nettoie et on fige le plan d'architecture pour éviter de le modifier par erreur.",
    },
    {
      type: 'image',
      source: require('../../../assets/diagrams/dwg_prep_steps.png'),
      caption: 'Étapes de préparation du fichier DWG',
      height: 540,
    },

    { type: 'heading', text: 'Organiser le dossier projet' },
    {
      type: 'table',
      headers: ['Dossier', 'Contenu'],
      rows: [
        ['Input', 'Plans architecturaux, plans mécaniques, plans courant faible, exigences du client, design intérieur'],
        ['Output', "Système d'éclairage (rapport DIALux), système de puissance, panel schedule, schéma unifilaire, BOQ et spécifications"],
        ['Draft', 'Fichiers DIALux/CAD de travail, anciennes versions datées'],
      ],
    },
    {
      type: 'note',
      text: '💡 Toujours dater les anciennes révisions avant de les déplacer vers Draft, pour ne jamais écraser le dossier Output actuel.',
    },
    { type: 'illustration', name: 'design-roadmap', props: { step: 2 }, caption: 'Prochaine étape : estimer la charge' },
  ],
};
