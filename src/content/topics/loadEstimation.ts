import { TopicContent } from '../types';

export const loadEstimationContent: TopicContent = {
  title: 'Estimation de charge',
  subtitle: 'Identifier la puissance électrique nécessaire avant de concevoir le projet',
  blocks: [
    { type: 'heading', text: '🔷 Pourquoi estimer la charge ?' },
    {
      type: 'text',
      text: "L'estimation de charge est une évaluation précoce de la puissance électrique requise pour un bâtiment. Elle doit être faite avant la conception détaillée, pour trois raisons :",
    },
    {
      type: 'bullets',
      items: [
        "Informer l'architecte : combien de place réserver pour le local électrique, le local groupe électrogène et le local transformateur.",
        "Confirmer la faisabilité auprès du fournisseur d'électricité avant de tout concevoir — sinon on risque de découvrir trop tard qu'il ne peut pas fournir la puissance nécessaire.",
        "Déterminer le type d'alimentation (basse ou moyenne tension) et si un transformateur est nécessaire.",
      ],
    },
    {
      type: 'table',
      headers: ['Charge estimée', 'Conséquence'],
      rows: [
        ['Moins de 400 kVA', 'Basse tension directe, pas de transformateur'],
        ['Plus de 400 kVA', 'Alimentation moyenne tension, transformateur nécessaire'],
      ],
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Méthode 1 — VA/m² (surface du bâtiment)' },
    {
      type: 'text',
      text: "La méthode la plus simple et la plus utilisée pour un premier chiffrage : on multiplie la surface bâtie par un ratio VA/m² défini par le code applicable pour ce type de bâtiment, puis on applique un facteur de demande.",
    },
    {
      type: 'formula',
      text: 'Charge (VA) = Surface bâtie (m²) × Facteur de demande × VA/m²',
    },
    {
      type: 'image',
      source: require('../../../assets/diagrams/load_estimation_steps.png'),
      caption: 'Démarche complète de la méthode VA/m²',
      height: 620,
    },
    { type: 'subheading', text: 'Table de référence (Saudi Arabia Code)' },
    {
      type: 'text',
      text: "Chaque type de bâtiment a son propre ratio VA/m² (incluant éclairage + climatisation + prises) et son propre facteur de demande.",
    },
    {
      type: 'image',
      source: require('../../../assets/reference/saudi_va_table.png'),
      caption: 'Extrait du code — VA/m² et facteurs de demande par catégorie',
      height: 320,
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Exemple chiffré complet' },
    {
      type: 'text',
      text: 'Bâtiment résidentiel de 4000 m², facteur de demande 0.6, 145 VA/m² :',
    },
    { type: 'formula', text: '4 000 m² × 0.6 × 145 VA/m² = 348 000 VA = 348 kVA' },
    {
      type: 'text',
      text: "On ajoute ensuite les charges spéciales (ascenseurs, pompes, pompes incendie…), chacune avec son propre facteur de demande :",
    },
    {
      type: 'table',
      headers: ['Charge', 'FD', 'VA', 'Charge estimée (VA)'],
      rows: [
        ['Ascenseurs', '1', '44 444', '44 444'],
        ['Pompes à eau', '0.666', '15 000', '9 990'],
        ['Pompes incendie', '1', '30 000', '30 000'],
      ],
    },
    {
      type: 'formula',
      text: 'Total ≈ (348 000 + 320 + 84 434) / 1000 ≈ 432.75 kVA',
    },
    {
      type: 'note',
      text: '⚠️ Tailles standard de transformateurs (kVA) : 500, 800, 1000, 1250, 1500, 2000, 2500… On choisit la taille standard directement supérieure : ici 500 kVA.',
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Autres méthodes (aperçu)' },
    {
      type: 'table',
      headers: ['Méthode', 'Principe'],
      rows: [
        ['2. Load Breakdown', "On sépare éclairage / prises / climatisation et on additionne — plus précis que la méthode globale."],
        ['3. IEC', "W/m² par zone fonctionnelle du bâtiment, chacune avec son propre facteur de simultanéité."],
        ['4. NEC', 'Table 220.12 — charge d\'éclairage générale VA/m² selon le type d\'occupation.'],
        ['5. Exacte', "Base de données de projets déjà réalisés par l'entreprise, ou chiffres fournis par le distributeur d'électricité."],
      ],
    },
    {
      type: 'note',
      text: "💡 À retenir : plus la méthode est détaillée (breakdown, IEC, NEC), plus elle est précise — mais la méthode VA/m² reste le réflexe rapide en phase préliminaire.",
    },
  ],
};
