import { TopicContent } from '../types';
import { SLIDES } from '../slides';

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

    { type: 'heading', text: '🔷 Méthode par étage : kVA pour 100 m²' },
    {
      type: 'text',
      text: "On prend dans le code la puissance par 100 m² d'un étage, puis : charge totale = nombre d'étages × surface d'un étage × kVA/m² (étage de 3 m de haut).",
    },
    {
      type: 'table',
      headers: ['kVA / 100 m²', 'Résidentiel', 'Administratif'],
      rows: [
        ['Moins de 15 étages', 'Faible 1,5 – 2 · Moyen 2,5 – 4 · Élevé 6 – 10', '6 – 12'],
        ['Plus de 15 étages', '8 – 10', '12'],
      ],
    },
    { type: 'subheading', text: 'Exemple : immeuble de 600 m² par étage' },
    {
      type: 'bullets',
      items: [
        '1 sous-sol, 2 étages administratifs, 16 étages résidentiels (5 appartements par étage) → plus de 15 étages.',
        '3 ascenseurs de 15 kW · 3 pompes d’eau de 17,5 HP (η = 88 %, dont 1 en secours) · 2 pompes de 6,5 HP (η = 87 %, dont 1 en secours).',
      ],
    },
    {
      type: 'table',
      headers: ['Charge', 'Calcul', 'kVA'],
      rows: [
        ['Sous-sol', '2 × 600 / 100', '12'],
        ['Administratif', '12 × 600 / 100 × 2', '144'],
        ['Résidentiel', '10 × 600 / 100 × 16', '960'],
        ['Parties communes (escaliers, toit, entrée)', 'Comme le sous-sol', '12'],
        ['Ascenseurs', '(15 × 3) / 0,85', '53'],
        ['2 pompes d’eau (hors secours)', '(2 × 17,5 × 0,746) / (0,88 × 0,85)', '35'],
        ['1 pompe de 6,5 HP', '(6,5 × 0,746) / (0,87 × 0,85)', '6,6'],
        ['Total', '', '1 223'],
      ],
    },
    { type: 'formula', text: 'Transformateur à huile chargé à 80 % : 1 223 / 0,8 = 1 528,75 kVA → transformateur 2 MVA' },
    {
      type: 'note',
      text: '💡 Toutes les charges ne fonctionnent pas en même temps : on peut appliquer un facteur de diversité de 0,6 à 0,7 à l’éclairage (ou celui du code). Les pompes de secours ne sont pas comptées.',
    },
    { type: 'image', source: SLIDES['gen-36'], caption: 'kVA pour 100 m² selon le nombre d’étages' },
    { type: 'image', source: SLIDES['gen-39'], caption: 'Exemple : charges des étages' },
    { type: 'image', source: SLIDES['gen-40'], caption: 'Exemple : moteurs et transformateur 2 MVA' },

    { type: 'heading', text: '🔷 Repères VA/m² par type de local (NEC)' },
    {
      type: 'table',
      headers: ['Local', 'Éclairage (VA/m²)', 'Petite puissance (VA/m²)', 'Climatisation (VA/m²)'],
      rows: [
        ['Banques', '20 – 40', '30', '50 – 70'],
        ['Cafétéria', '25 – 45', '5', '60 – 100'],
        ['Centre informatique', '15 – 25', '15', '120 – 200'],
        ['Magasins en sous-sol', '30 – 50', '15', '—'],
        ['Bureaux', '15 – 35', '15', '40 – 70 (jusqu’à 110 – 120)'],
        ['Hôtels', '10 – 30', '5', '50 – 80'],
        ['Hôpitaux', '20 – 30', '10', '50 – 70'],
        ['Restaurants', '15 – 25', '2,5', '60 – 100'],
        ['Commerces', '30 – 50', '10', '50 – 90'],
        ['Écoles', '15 – 35', '15', '35 – 50'],
        ['Bâtiment industriel', '10 – 20', '10', '—'],
      ],
    },
    { type: 'image', source: SLIDES['gen-37'], caption: 'Table VA/m² selon le NEC', focus: { x: 0.03, y: 0.38, w: 0.52, h: 0.42 } },
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
