import { TopicContent } from '../types';

export const transformerGeneratorContent: TopicContent = {
  title: 'Transformateur & Groupe électrogène',
  subtitle: 'Dimensionner les locaux techniques à partir de la charge du bâtiment',
  blocks: [
    { type: 'heading', text: '🔷 Local groupe électrogène' },
    {
      type: 'text',
      text: "Contrairement à un transformateur, il n'existe pas de formule universelle pour dimensionner un local groupe électrogène : les dimensions dépendent entièrement du modèle choisi dans le catalogue du fabricant.",
    },
    { type: 'formula', text: 'Charge groupe électrogène = 50% × Charge totale du bâtiment' },
    {
      type: 'note',
      text: "⚠️ La règle « théorique » est souvent 25%, mais en pratique on retient 50% pour garder une marge de sécurité et anticiper des charges futures.",
    },
    {
      type: 'image',
      source: require('../../../assets/diagrams/generator_sizing_steps.png'),
      caption: 'Démarche de dimensionnement du local groupe électrogène',
      height: 620,
    },
    { type: 'subheading', text: 'Types de local (indicatif)' },
    {
      type: 'table',
      headers: ['Type', 'Longueur', 'Largeur', 'Plage indicative'],
      rows: [
        ['A', '3.5 m', '2.8 m', '~ jusqu\'à 200 kVA'],
        ['B', '4.7 m', '3.25 m', '~ 200 à 650 kVA'],
        ['C', '5.7 m', '3.75 m', '~ 650 kVA et plus'],
      ],
    },
    {
      type: 'text',
      text: 'Exemple : bâtiment de 1 MVA → groupe de 500 kVA → modèle XC400-500 (catalogue) → Room Type B → local de 4.7 × 3.25 m.',
    },
    {
      type: 'image',
      source: require('../../../assets/reference/gen_room_diagram.png'),
      caption: "Schéma des dégagements d'un local groupe électrogène (lettres A à P selon le fabricant)",
      height: 300,
    },
    {
      type: 'image',
      source: require('../../../assets/reference/genset_datasheet.png'),
      caption: 'Exemple de fiche technique fabricant (XC400-500)',
      height: 320,
    },
    {
      type: 'note',
      text: '⚠️ Les dimensions exactes viennent toujours de la fiche technique du fabricant — cette classification A/B/C est indicative. La largeur de la porte doit toujours être ≥ largeur de l\'équipement.',
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Local transformateur' },
    {
      type: 'text',
      text: "Le dimensionnement du local transformateur est plus normatif : il repose sur les dégagements minimaux définis par le NEC, selon la tension et selon ce qui se trouve de chaque côté de l'équipement.",
    },
    { type: 'subheading', text: 'Les 3 conditions NEC' },
    {
      type: 'table',
      headers: ['Condition', 'Situation'],
      rows: [
        ['1', "Parties sous tension d'un côté, parties isolées/non mises à la terre de l'autre"],
        ['2', "Parties sous tension d'un côté, parties mises à la terre de l'autre"],
        ['3', 'Parties sous tension des deux côtés'],
      ],
    },
    {
      type: 'image',
      source: require('../../../assets/diagrams/transformer_room_steps.png'),
      caption: 'Démarche de dimensionnement du local transformateur',
      height: 540,
    },
    { type: 'subheading', text: 'Dégagements — basse tension (NEC 110.26(A)(1))' },
    {
      type: 'image',
      source: require('../../../assets/reference/clearance_low_voltage.png'),
      caption: 'NEC Table 110.26(A)(1) — dégagements basse tension',
      height: 300,
    },
    { type: 'subheading', text: 'Dégagements — moyenne tension (NEC 110-34 / OSHA S-2) + dimensions transformateurs' },
    {
      type: 'image',
      source: require('../../../assets/reference/clearance_medium_voltage.png'),
      caption: 'NEC Table 110-34 / OSHA S-2 + exemple de catalogue de transformateurs',
      height: 300,
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Exemple chiffré — local transformateur MT' },
    {
      type: 'text',
      text: 'Transformateur 1 MVA, 21 kV, dimensions 1.97 × 0.98 m. Pour la plage 9–25 kV : Condition 1 = 5 ft (1.524 m), Condition 2 = 6 ft (1.829 m).',
    },
    { type: 'formula', text: 'Longueur du local = 1.97 + 1.829 + 1.524 = 5.323 m' },
    { type: 'formula', text: 'Largeur du local = 0.98 + 1.829 + 1.829 = 4.638 m' },
    {
      type: 'note',
      text: '💡 Résultat : local de 5.32 × 4.64 m. La porte doit rester ≥ 0.98 m (largeur du transformateur).',
    },
  ],
};
