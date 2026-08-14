import { TopicContent } from '../types';

export const demandDiversityContent: TopicContent = {
  title: 'Facteur de demande & diversité',
  subtitle: 'Passer de la charge connectée à la charge réellement combinée',
  blocks: [
    { type: 'heading', text: '🔷 Facteur de demande (Demand Factor)' },
    {
      type: 'text',
      text: "La charge connectée additionne toutes les puissances nominales des appareils — mais ils ne fonctionnent jamais tous en même temps à pleine puissance. Le facteur de demande corrige ça, circuit par circuit.",
    },
    { type: 'formula', text: 'DF = Demande maximale du circuit / Charge connectée totale du circuit' },
    {
      type: 'note',
      text: 'DF est toujours ≤ 1. En terminologie IEC : « facteur d\'utilisation maximale », noté ku.',
    },
    { type: 'subheading', text: 'Valeurs typiques' },
    {
      type: 'table',
      headers: ['Type de charge', 'Facteur de demande'],
      rows: [
        ['Éclairage', '0.9 – 1'],
        ['Prises', '0.5 – 1'],
        ['Climatisation', '0.75 – 1'],
      ],
    },
    {
      type: 'text',
      text: 'Tables de référence détaillées par type d\'occupation : IEEE 241 Table 6.1.12 (usage général) et NEC Table 220.42 (éclairage).',
    },
    {
      type: 'image',
      source: require('../../../assets/reference/nec_220_42.png'),
      caption: 'NEC Table 220.42 — Facteurs de demande pour l\'éclairage',
      height: 260,
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Facteur de diversité / simultanéité (ks)' },
    {
      type: 'text',
      text: "Une fois les charges demandées connues à chaque tableau, on les combine pour remonter vers l'amont : tous les tableaux ne tirent pas leur maximum en même temps non plus.",
    },
    { type: 'formula', text: 'Facteur de diversité = Σ Demandes maximales individuelles / Demande maximale du système entier' },
    {
      type: 'note',
      text: "Le facteur de diversité est toujours ≥ 1. En IEC : « facteur de simultanéité » (ks). Le facteur de coïncidence = 1 / Facteur de diversité (toujours ≤ 1) — c'est lui qu'on utilise directement comme multiplicateur.",
    },
    { type: 'formula', text: 'Charge combinée = (Σ charges demandées) × ks     ou     Σ charges demandées ÷ Facteur de diversité' },
    { type: 'subheading', text: 'ks selon le nombre de circuits (IEC 61439)' },
    {
      type: 'table',
      headers: ['Circuits combinés', 'ks'],
      rows: [
        ['2 – 3', '0.9'],
        ['4 – 5', '0.8'],
        ['6 – 9', '0.7'],
        ['10 ou plus', '0.6'],
      ],
    },
    { type: 'subheading', text: 'ks selon le type de bâtiment' },
    {
      type: 'table',
      headers: ['Type de bâtiment', 'ks'],
      rows: [
        ['Résidentiel', '0.6 – 0.7'],
        ['Commercial', '0.6 – 0.8'],
        ['Industriel / Agricole', '0.9 – 1'],
      ],
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 La règle de cascade' },
    {
      type: 'text',
      text: "Le facteur de simultanéité s'applique niveau par niveau, en remontant du circuit terminal vers le tableau principal. À chaque étage, on combine la charge déjà demandée du niveau précédent — jamais la charge connectée brute.",
    },
    {
      type: 'image',
      source: require('../../../assets/diagrams/diversity_cascade.png'),
      caption: 'Cascade du facteur de simultanéité dans un tableau de distribution',
      height: 480,
    },
    {
      type: 'image',
      source: require('../../../assets/reference/iec_diversity_example.png'),
      caption: 'IEC 61439-2 — Exemple réel de cascade (résultat : 42 kW au tableau principal)',
      height: 320,
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Exemple — Dimensionnement d\'un transformateur avec diversité' },
    {
      type: 'text',
      text: 'Quatre départs : 250, 200, 150 et 400 kVA, avec facteurs de demande 90%, 80%, 75% et 85%.',
    },
    {
      type: 'table',
      headers: ['Départ', 'Connecté (kVA)', 'DF', 'Demandé (kVA)'],
      rows: [
        ['1', '250', '90%', '225'],
        ['2', '200', '80%', '160'],
        ['3', '150', '75%', '112.5'],
        ['4', '400', '85%', '340'],
      ],
    },
    { type: 'formula', text: 'Somme des demandes individuelles = 837.5 kVA' },
    {
      type: 'text',
      text: 'Sans diversité (facteur = 1), il faudrait un transformateur de 850 kVA. Avec un facteur de diversité de 1.5 :',
    },
    { type: 'formula', text: '837.5 ÷ 1.5 = 558 kVA → transformateur standard de 600 kVA suffit' },
    {
      type: 'note',
      text: '💡 Appliquer correctement la diversité peut réduire significativement la taille (et le coût) du transformateur.',
    },
  ],
};
