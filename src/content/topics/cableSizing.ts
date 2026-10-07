import { TopicContent } from '../types';

export const cableSizingContent: TopicContent = {
  title: 'Dimensionnement des câbles (CSA)',
  subtitle: "Trouver la section de câble adaptée à une charge, avec les facteurs de dérating",
  blocks: [
    {
      type: 'text',
      text: "La CSA (Cross-Sectional Area — section du câble) se choisit à partir du courant réel à transporter, corrigé par les conditions d'installation (température, mode de pose, nombre de câbles groupés). Un câble sous-dimensionné s'échauffe ; un câble surdimensionné coûte inutilement cher.",
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Types de câbles : STA vs SWA' },
    {
      type: 'table',
      headers: ['Type', 'Caractéristiques'],
      rows: [
        ['STA', 'Armure à ruban (steel tape armour) — résiste aux contraintes mécaniques, utilisé en pose enterrée'],
        ['SWA', 'Armure à fils d\'acier (steel wire armour) — plus flexible, adapté aux fortes tractions lors du tirage'],
      ],
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Facteurs de dérating (correction)' },
    {
      type: 'text',
      text: "Les facteurs de dérating réduisent la capacité de transit théorique d'un câble par rapport à sa valeur nominale de table. Ils dépendent notamment de la température ambiante, de la température du sol et du mode de pose du câble. Le NEC fournit ses propres tables de correction ; on peut aussi les recalculer directement avec l'équation 310.15(B)(1).",
    },
    { type: 'formula', text: "I' = I × √((Tc − Ta') / (Tc − Ta))" },
    {
      type: 'text',
      text: "I' = ampacité corrigée · I = ampacité de table · Tc = température de tenue du conducteur (°C) · Ta' = nouvelle température ambiante (°C) · Ta = température ambiante de référence de la table (°C).",
    },
    {
      type: 'image',
      source: require('../../../assets/reference/nec_ambient_correction_formula.png'),
      caption: 'NEC 310.15(B)(1) — Équation de correction pour température ambiante',
      height: 260,
    },
    {
      type: 'image',
      source: require('../../../assets/reference/nec_ambient_correction_factors.png'),
      caption: 'NEC — Facteurs de correction (température ambiante et nombre de conducteurs groupés)',
      height: 340,
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Méthode de dimensionnement (NEC)' },
    {
      type: 'image',
      source: require('../../../assets/diagrams/cable_csa_sizing_steps.png'),
      caption: 'Les 4 étapes du dimensionnement CSA',
      height: 440,
    },
    {
      type: 'text',
      text: "Exemple chiffré — moteur 40 ch, 380V, cos φ = 0.8 :",
    },
    { type: 'formula', text: 'I_rated = (40 × 746) / (√3 × 380 × 0.8) = 56.6 A' },
    { type: 'formula', text: 'I_CB = I_rated × 1.25 = 56.6 × 1.25 = 70.75 A' },
    { type: 'formula', text: 'I_câble = I_CB / facteur de dérating' },
    { type: 'formula', text: 'Avec un facteur de 0.82 : I_câble = 70.75 / 0.82 = 86.28 A' },
    {
      type: 'image',
      source: require('../../../assets/reference/cable_40hp_worked_example.png'),
      caption: 'Exemple complet — courant nominal, calibre CB et courant de câble pour un moteur 40 HP',
      height: 380,
    },
    {
      type: 'text',
      text: "Une fois I_câble connu, on vérifie la table d'ampacité du conducteur (NEC 310.16) pour trouver la section qui le supporte.",
    },
    {
      type: 'image',
      source: require('../../../assets/reference/nec_table_310_16_ampacity.png'),
      caption: 'NEC Table 310.16 — Ampacités des conducteurs isolés (cuivre / aluminium)',
      height: 480,
    },
    {
      type: 'image',
      source: require('../../../assets/reference/cable_table_25mm_example.png'),
      caption: 'Table catalogue fabricant — vérification qu\'une section de 25 mm² satisfait le courant requis',
      height: 380,
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Règles de section — neutre et terre' },
    {
      type: 'table',
      headers: ['Conducteur', 'Règle'],
      rows: [
        ['Neutre — phase ≤ 16 mm²', 'Même section que la phase'],
        ['Neutre — phase > 16 mm²', 'Moitié de la section de phase'],
        ['Terre — phase ≤ 16 mm²', 'Même section que la phase'],
        ['Terre — phase entre 16 et 35 mm²', '16 mm²'],
        ['Terre — phase > 35 mm²', 'Moitié de la section de phase'],
      ],
    },
    {
      type: 'note',
      text: "💡 Pour trouver la CSA d'un circuit : partir du courant nominal de la charge et du calibre du disjoncteur associé, puis vérifier les deux contre les tables d'ampacité.",
    },
    {
      type: 'image',
      source: require('../../../assets/reference/single_multi_core_cable.png'),
      caption: 'Câble mono-core (RCTN) vs câble multi-core (RSTN) — repérage des conducteurs',
      height: 380,
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Conduits : remplissage et diamètre' },
    {
      type: 'table',
      headers: ['Type de conduit', 'Usage'],
      rows: [
        ['PVC', 'Connexions encastrées (plafond ou mur) — non recommandé en exposition directe au soleil'],
        ['EMT (Electrical Metallic Tubing)', 'Connexions apparentes, au-dessus du plafond ou en applique murale'],
      ],
    },
    {
      type: 'table',
      headers: ['Nombre de câbles', 'Remplissage maximal (NEC)'],
      rows: [
        ['1 câble', '53%'],
        ['2 câbles', '31%'],
        ['3 câbles ou plus', '40%'],
      ],
    },
    {
      type: 'image',
      source: require('../../../assets/reference/conduit_nec_fill_specs.png'),
      caption: 'Règles NEC de remplissage des conduits',
      height: 340,
    },
    { type: 'formula', text: 'Ø conduit = √(Ø câble² / taux de remplissage)' },
    {
      type: 'text',
      text: 'Exemple : câble tricore 2.5 mm² → Ø câble ≈ 11.5 mm → Ø conduit = √(11.5² / 0.4) ≈ 18.2 mm → valeur standard directement supérieure : 20 mm.',
    },
    {
      type: 'image',
      source: require('../../../assets/reference/conduit_diameter_example.png'),
      caption: 'Exemple complet de calcul du diamètre de conduit',
      height: 380,
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Coordination des protections — approche IEC' },
    {
      type: 'bullets',
      items: [
        'I_b : courant de conception du circuit (design current)',
        'I_n : courant nominal du disjoncteur (circuit breaker rated current)',
        'I_z : capacité de transit du câble (current-carrying capacity)',
      ],
    },
    { type: 'formula', text: 'Règle de coordination : I_b ≤ I_n ≤ I_z' },
    {
      type: 'text',
      text: 'Notions court-circuit : I_cu = pouvoir de coupure ultime du disjoncteur (fiche technique) ; I_k = courant de court-circuit maximal présumé au point d\'installation (calculé ou mesuré).',
    },
    { type: 'formula', text: 'Condition de tenue au court-circuit : I_cu ≥ I_k' },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Sélection du câble avec facteur de correction (IEC)' },
    { type: 'formula', text: 'I_z ≥ I_CB / facteur de correction' },
    {
      type: 'text',
      text: "Cette règle doit être vérifiée après application des facteurs de correction de la norme IEC 60364-5-52 :",
    },
    { type: 'formula', text: 'I_z_corrigé = I_z × K1 × K2 × K3… ≥ I_n' },
    {
      type: 'bullets',
      items: [
        'K1 : facteur de température ambiante',
        'K2 : facteur de groupement de câbles',
        'K3 : facteur de résistivité thermique du sol',
      ],
    },
    {
      type: 'image',
      source: require('../../../assets/reference/iec_cable_size_selection.png'),
      caption: 'IEC 60364 — Constante k par type d\'isolant et durées de coupure (FCT) BT/MT',
      height: 480,
    },
    {
      type: 'heading',
      text: '🔷 Vérification thermique — critère adiabatique',
    },
    { type: 'formula', text: 'S ≥ (I × √t) / k' },
    {
      type: 'text',
      text: 'I = courant de court-circuit (A) ; t = durée maximale du défaut (s) ; k = constante du matériau, qui dépend du conducteur, de son isolant, etc.',
    },
    {
      type: 'note',
      text: '⚠️ Ce critère adiabatique vérifie que le câble supporte thermiquement le courant de court-circuit pendant le temps d\'élimination du défaut — il complète, sans le remplacer, le dimensionnement en régime normal (I_z corrigé ≥ I_n).',
    },
  ],
};
