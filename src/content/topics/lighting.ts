import { TopicContent } from '../types';

export const lightingContent: TopicContent = {
  title: "Conception d'éclairage",
  subtitle: 'Choisir les luminaires et calculer combien il en faut',
  blocks: [
    { type: 'heading', text: '🔷 Types de lampes' },
    {
      type: 'table',
      headers: ['Lampe', 'CRI', 'Usage typique'],
      rows: [
        ['Incandescente / Halogène', '100', 'Décoration, lustres'],
        ['Fluorescent', '50 – 73', 'Bureaux, commerces, classes'],
        ['CFL', '70', 'Résidentiel (culot à vis) ou spot (culot à broche)'],
        ['Sodium haute pression', '24', 'Rues, tunnels, sécurité'],
        ['Halogénures métalliques', '70 – 90', 'Usines, stades (hauteur ≥ 5 m)'],
        ['LED', '83 – 98+', 'Partout — la plus efficace, la plus durable (25 000 h)'],
      ],
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Montage, IP et couleur' },
    {
      type: 'bullets',
      items: [
        'Montage en surface : plafond < 3 m. Encastré : faux-plafond. Suspendu : > 3 m (usines, centres commerciaux).',
        'Température de couleur : 2700K chaud (habitations) · 4000K neutre (bureaux) · 5000K froid (hôpitaux, galeries).',
        'Échelle CRI : < 60 faible · 60–80 acceptable · > 80 excellent.',
      ],
    },
    { type: 'subheading', text: 'Indice de protection IP = chiffre solides (0–6) + chiffre liquides (0–8)' },
    {
      type: 'table',
      headers: ['IP', 'Application'],
      rows: [
        ['IP20', 'Bureaux, résidentiel'],
        ['IP43 / IP44', 'Cuisines (vapeur)'],
        ['IP54 / IP55', 'Salles de bain, toilettes'],
        ['IP67', 'Extérieur (garages, rues, paysager)'],
        ['IP68', 'Sous l\'eau (piscines)'],
      ],
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Diffuseurs (contrôle de la distribution lumineuse)' },
    {
      type: 'table',
      headers: ['Type', 'Caractéristiques'],
      rows: [
        ['Prismatique', 'Protège de la poussière/humidité — usage domestique standard'],
        ['Opale', 'Verre opale blanc laiteux, distribution lambertienne — pertes par diffusion importantes'],
        ['Parabolique (miroir)', 'Réflecteur intégré pour diriger la lumière — banques, espaces commerciaux'],
      ],
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Plan de travail et uniformité' },
    {
      type: 'text',
      text: "Le plan de travail (work plane) est le plan horizontal où s'effectuent les tâches visuelles. Une fois l'éclairement moyen calculé, il faut vérifier son uniformité.",
    },
    { type: 'formula', text: 'Uniformité = E_min / E_avg' },
    {
      type: 'text',
      text: "L'uniformité doit être comprise entre 0.5 et 1. L'éclairement moyen E_avg doit rester dans une marge de 15% par rapport à la valeur E_requis imposée par le code.",
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Méthode des lumens' },
    {
      type: 'text',
      text: "C'est la méthode manuelle de référence pour calculer combien de luminaires installer dans une pièce.",
    },
    {
      type: 'formula',
      text: 'N = (E × A) / (F × UF × MF)',
    },
    {
      type: 'text',
      text: 'N = nombre de luminaires · E = éclairement requis (lux) · A = surface (m²) · F = flux total du luminaire (lumens) · UF = facteur d\'utilisation (0.4–0.6) · MF = facteur de maintenance (0.4–0.8).',
    },
    {
      type: 'image',
      source: require('../../../assets/diagrams/lighting_lumen_method_steps.png'),
      caption: 'Démarche complète de la méthode des lumens',
      height: 620,
    },
    {
      type: 'note',
      text: "⚠️ Règle : ne jamais choisir un nombre premier pour N — ça empêche de former une grille rectangulaire régulière.",
    },
    { type: 'subheading', text: 'Lux requis par type de pièce (extrait)' },
    {
      type: 'table',
      headers: ['Pièce', 'Lux'],
      rows: [
        ['Salle de bain / Couloir', '100'],
        ['Cuisine', '300'],
        ['Bureau / Salle de classe', '500'],
        ['Laboratoire', '750'],
      ],
    },
    {
      type: 'image',
      source: require('../../../assets/reference/iecc_2021_table.png'),
      caption: 'IECC 2021 — Niveaux d\'éclairement détaillés par type de pièce',
      height: 320,
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Exemple chiffré — Bureau 10 × 10 m' },
    {
      type: 'text',
      text: 'Éclairement requis : 500 lux. Luminaire choisi : 4 lampes de 1200 lm chacune → F = 4800 lm. UF = 0.5, MF = 0.8.',
    },
    { type: 'formula', text: 'N = (500 × 100) / (4800 × 0.5 × 0.8) = 23.1 → arrondi à 24 (non premier)' },
    {
      type: 'text',
      text: 'Disposition : grille 5 × 5 (25 luminaires, arrondi à la racine carrée de chaque dimension), espacement de 2 m, premier alignement décalé de 1 m du mur.',
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Courbes polaires' },
    {
      type: 'text',
      text: "La courbe polaire montre comment un luminaire distribue sa lumière selon l'angle : un faisceau étroit donne une courbe resserrée (spot), un faisceau large donne une courbe étalée (inondation). Toujours vérifier le fichier photométrique (IES) du fabricant avant de choisir un luminaire.",
    },
    {
      type: 'image',
      source: require('../../../assets/reference/polar_curve.png'),
      caption: 'Exemples de courbes polaires et distributions lumineuses',
      height: 320,
    },
    {
      type: 'note',
      text: "💡 Ratio espacement/hauteur (SHR) recommandé ≈ 0.5, jamais supérieur à 1. L'espace entre luminaires doit être le double de la distance au mur.",
    },
  ],
};
