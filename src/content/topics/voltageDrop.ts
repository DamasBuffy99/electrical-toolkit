import { TopicContent } from '../types';

export const voltageDropContent: TopicContent = {
  title: 'Chute de tension',
  subtitle: 'Vérifier que la section choisie garde une tension suffisante au bout du câble',
  blocks: [
    {
      type: 'text',
      text: "Un câble qui supporte le courant peut quand même être trop long : sa résistance fait chuter la tension entre la source et la charge. On vérifie donc la chute de tension avec la section (CSA) déjà choisie.",
    },
    {
      type: 'bullets',
      items: [
        '1 → Partir de la section (CSA) du câble entre la source et la charge',
        '2 → Lire dans le catalogue la chute de tension de cette section, en mV/A/m',
        '3 → Calculer le courant nominal I_rated',
        '4 → Calculer la chute de tension VD, puis le pourcentage %VD',
      ],
    },
    { type: 'divider' },

    { type: 'heading', text: '1 · Valeur catalogue en mV/A/m' },
    {
      type: 'text',
      text: "Les catalogues de câbles donnent, pour chaque section, la chute de tension en millivolts par ampère et par mètre (mV/A/m).",
    },
    { type: 'divider' },

    { type: 'heading', text: '2 · Calculer la chute de tension' },
    { type: 'formula', text: 'VD = (valeur catalogue en mV/A/m) × 10⁻³ × I_rated × Longueur' },
    { type: 'text', text: 'I_rated en A, longueur en m : on obtient VD en volts.' },
    { type: 'formula', text: '%VD = VD / V × 100' },
    { type: 'text', text: 'V = 380 V en triphasé, 220 V en monophasé.' },
    {
      type: 'formula',
      text: 'Exemple (valeur catalogue illustrative 2.4 mV/A/m) : I = 50 A, L = 60 m → VD = 2.4 × 10⁻³ × 50 × 60 = 7.2 V → %VD = 7.2 / 380 × 100 = 1.9 %',
    },
    {
      type: 'note',
      text: "📌 Le pourcentage obtenu se compare à la chute de tension maximale admise (code ou cahier des charges du projet).",
    },
    { type: 'divider' },

    { type: 'heading', text: '3 · Solutions si la chute de tension est trop grande' },
    {
      type: 'text',
      text: "La chute de tension vient de la résistance du câble :",
    },
    { type: 'formula', text: 'R = ρ × L / A' },
    {
      type: 'text',
      text: "Pour diminuer R, il faut diminuer la longueur L ou augmenter la section A. D'où les solutions :",
    },
    {
      type: 'bullets',
      items: [
        'Augmenter la section du câble (CSA)',
        "Réduire la distance entre la source d'alimentation et la charge",
        'Corriger le facteur de puissance',
      ],
    },
  ],
};
