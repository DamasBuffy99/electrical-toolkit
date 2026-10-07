import { TopicContent } from '../types';

export const designStepsContent: TopicContent = {
  title: 'Les étapes de la conception',
  subtitle: "Le fil conducteur du cours : chaque étape produit ce dont la suivante a besoin",
  blocks: [
    {
      type: 'text',
      text: "Ce cours suit l'ordre réel du travail de l'ingénieur de conception. Chaque étape produit un résultat qui sert d'entrée à la suivante — c'est pour ça qu'on ne peut pas les faire dans le désordre.",
    },
    { type: 'illustration', name: 'design-roadmap', props: { step: 0 }, caption: 'Les 8 étapes de la conception électrique' },

    { type: 'heading', text: '1 · Lire et préparer les plans architecturaux' },
    {
      type: 'text',
      text: "On part des plans de l'architecte : fonction et dimensions de chaque pièce, circulations verticales, gaines techniques. On les prépare ensuite dans AutoCAD pour y dessiner l'électricité.",
    },
    { type: 'formula', text: '→ Résultat : des plans de base prêts à recevoir le dessin électrique' },
    { type: 'illustration', name: 'design-roadmap', props: { step: 1 } },

    { type: 'heading', text: '2 · Estimer la charge' },
    {
      type: 'text',
      text: "Avant tout détail, on évalue la puissance totale du bâtiment. Cela permet de vérifier la faisabilité avec le distributeur, de savoir s'il faut un transformateur, et de réserver les locaux techniques auprès de l'architecte.",
    },
    { type: 'formula', text: '→ Résultat : puissance estimée, taille du transformateur et du groupe, locaux réservés' },
    { type: 'illustration', name: 'design-roadmap', props: { step: 2 } },

    { type: 'heading', text: "3 · Concevoir l'éclairage" },
    {
      type: 'text',
      text: "Pièce par pièce, on choisit les luminaires et on calcule leur nombre selon le niveau d'éclairement requis (méthode des lumens).",
    },
    { type: 'formula', text: "→ Résultat : implantation des luminaires et circuits d'éclairage" },
    { type: 'illustration', name: 'design-roadmap', props: { step: 3 } },

    { type: 'heading', text: '4 · Implanter prises et circuits de puissance' },
    {
      type: 'text',
      text: 'On place les prises et les alimentations des équipements (climatisation, chauffe-eau…) en tenant compte du mobilier, puis on les regroupe en circuits.',
    },
    { type: 'formula', text: '→ Résultat : circuits de prises et de puissance' },
    { type: 'illustration', name: 'design-roadmap', props: { step: 4 } },

    { type: 'heading', text: '5 · Établir le panel schedule' },
    {
      type: 'text',
      text: 'Tous les circuits sont affectés à un tableau : répartition sur les phases R/Y/B, facteurs de demande, charge totale du tableau.',
    },
    { type: 'formula', text: '→ Résultat : la charge et le courant de chaque tableau' },
    { type: 'illustration', name: 'design-roadmap', props: { step: 5 } },

    { type: 'heading', text: '6 · Choisir les protections' },
    {
      type: 'text',
      text: 'Chaque circuit et chaque départ reçoit son disjoncteur ou son fusible : calibre, type, courbe de déclenchement, et règles NEC pour les moteurs et la climatisation.',
    },
    { type: 'formula', text: '→ Résultat : le calibre de chaque protection' },
    { type: 'illustration', name: 'design-roadmap', props: { step: 6 } },

    { type: 'heading', text: '7 · Dimensionner câbles et conduits' },
    {
      type: 'text',
      text: "La section de chaque câble découle du courant et de sa protection, corrigée par les facteurs d'installation. On choisit ensuite les conduits.",
    },
    { type: 'formula', text: '→ Résultat : sections de câbles et diamètres de conduits' },
    { type: 'illustration', name: 'design-roadmap', props: { step: 7 } },

    { type: 'heading', text: '8 · Tableaux & schéma unifilaire' },
    {
      type: 'text',
      text: "On assemble le tout : construction des tableaux, schéma unifilaire du bâtiment, et inverseur de source pour le groupe électrogène.",
    },
    { type: 'formula', text: '→ Résultat : le dossier électrique complet' },
    { type: 'illustration', name: 'design-roadmap', props: { step: 8 } },

    { type: 'heading', text: 'Le fil conducteur' },
    {
      type: 'text',
      text: 'Chaque section de ce cours correspond à une de ces étapes, dans le même ordre.',
    },
    {
      type: 'note',
      text: '💡 Si un résultat change en cours de route (une charge ajoutée, une pièce modifiée…), toutes les étapes suivantes doivent être reprises.',
    },
    { type: 'illustration', name: 'design-roadmap', props: { step: 9 } },
  ],
};
