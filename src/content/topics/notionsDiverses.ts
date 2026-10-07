import { TopicContent } from '../types';

export const notionsDiversesContent: TopicContent = {
  title: 'Notions diverses',
  subtitle: "Câblage, interrupteurs, et repères rapides (conversion HP/kVA, classes de tension)",
  blocks: [
    { type: 'heading', text: '🔷 Interrupteurs — types et usages' },
    {
      type: 'table',
      headers: ['Type d\'interrupteur', 'Fonction'],
      rows: [
        ['Va-et-vient simple (1 gang)', 'Commande un groupe de luminaires depuis un seul point'],
        ['Va-et-vient double (2 gangs)', 'Commande deux groupes de luminaires depuis un seul point'],
        ['Simple, zone humide', 'Certifié pour les emplacements humides/mouillés'],
        ['Bidirectionnel (two-way)', 'Commande le même circuit depuis 2 emplacements différents'],
        ['Variateur (dimmer)', "Intensité lumineuse réglable"],
      ],
    },
    {
      type: 'note',
      text: '📐 Repères de pose : hauteur de montage de l\'interrupteur = 120 cm · distance à la porte = 10 cm.',
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Conversion HP / kVA' },
    { type: 'formula', text: '1 HP = 0.746 kW = 1 kVA (à cos φ = 0.8)' },
    {
      type: 'text',
      text: "Conversion rapide utilisée pour passer de la puissance mécanique d'un moteur (HP, sur sa plaque signalétique) à sa puissance électrique apparente (kVA), utile pour tous les calculs de courant (I = kVA×1000/V).",
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Classes de tension' },
    {
      type: 'table',
      headers: ['Classe', 'Plage', 'Technologie de disjoncteur typique'],
      rows: [
        ['Basse tension (BT)', '1V – 1kV', 'MCB, MCCB, ACB'],
        ['Moyenne tension (MT)', '1kV – 66kV', 'SF6, à vide (vacuum)'],
        ['Haute tension (HT)', '66kV – 500kV', 'À huile, SF6'],
      ],
    },
    {
      type: 'note',
      text: "💡 ELCB et RCCB protègent contre les fuites à la terre, mais pas contre les courts-circuits (il faut un MCB pour cela). Détails dans la leçon « Disjoncteurs & protection ».",
    },
  ],
};
