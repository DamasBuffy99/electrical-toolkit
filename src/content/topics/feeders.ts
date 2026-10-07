import { TopicContent } from '../types';
import { SLIDES } from '../slides';

export const feedersContent: TopicContent = {
  title: 'Feeders — Protection moteurs & panneaux',
  subtitle: "Dimensionner le disjoncteur d'un départ moteur combiné ou d'un panneau complet",
  blocks: [
    {
      type: 'text',
      text: "Un feeder alimente plusieurs charges à la fois (plusieurs moteurs, ou tout un panneau). Sa protection ne se calcule pas comme un disjoncteur de branche simple : il faut combiner les courants de toutes les charges alimentées selon une méthode précise, propre au NEC.",
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Rappel : charge continue (règle 80% / 100%)' },
    {
      type: 'text',
      text: "Une charge continue est une charge dont le courant maximal est censé durer 3 heures ou plus. Elle impose une marge supplémentaire sur le disjoncteur (sauf disjoncteur « 100 % »).",
    },
    { type: 'formula', text: 'I_r = 1.25 × I_continue + I_non-continue' },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Protection moteur — sélection du disjoncteur (NEC)' },
    {
      type: 'bullets',
      items: [
        "Trouver le FLC du moteur dans la table NEC 430.248 (monophasé) ou 430.250 (triphasé), à partir de sa puissance en HP.",
        "Appliquer le coefficient de la table NEC 430.52 au FLC.",
        "Choisir le calibre dans la table NEC 240.6(A) ; si la valeur n'est pas standard, prendre le calibre suivant.",
        "Un seul appareil pour surcharge + court-circuit → 1.25 × FLA (plaque signalétique).",
        "Appareils séparés → court-circuit : 2.5 × FLC (disjoncteur) ou 1.75 × FLC (fusible) selon 430.52 ; surcharge : NEC 430.32.",
      ],
    },
    { type: 'subheading', text: 'Exceptions de la table 430.52' },
    {
      type: 'bullets',
      items: [
        "N° 1 : si la valeur calculée n'est pas normalisée, on peut prendre le calibre normalisé immédiatement supérieur.",
        'N° 2 : si ce n’est pas suffisant pour le démarrage, on peut augmenter jusqu’à : fusible non temporisé (≤ 600 A) 400 % du FLC · fusible temporisé 225 % · disjoncteur à temps inverse 400 % (FLC ≤ 100 A) ou 300 % (FLC > 100 A) · fusible 601 – 6 000 A 300 %.',
        'Disjoncteur instantané (MCP) : jusqu’à 1 300 % du FLC, ou 1 700 % pour un moteur de design B à haut rendement.',
      ],
    },
    {
      type: 'table',
      headers: ['Design NEMA', 'Démarrage', 'Usages'],
      rows: [
        ['A', 'Courant moyen à élevé, couple normal', 'Ventilateurs, pompes'],
        ['B', 'Courant faible, couple normal', 'Le plus courant : CVC, ventilateurs, soufflantes, pompes'],
        ['C', 'Courant faible, couple de démarrage élevé', 'Charges à forte inertie : pompes volumétriques'],
        ['D', 'Couple de démarrage très élevé, glissement 5 – 13 %', 'Grues, palans'],
      ],
    },
    { type: 'subheading', text: 'Relais de surcharge séparé (NEC 430.32)' },
    {
      type: 'table',
      headers: ['Moteur', 'Réglage max', 'Si insuffisant pour démarrer'],
      rows: [
        ['Facteur de service ≥ 1,15', '125 % du courant de plaque', '140 %'],
        ['Échauffement ≤ 40 °C', '125 %', '140 %'],
        ['Autres moteurs', '115 %', '130 %'],
      ],
    },
    {
      type: 'text',
      text: "Le facteur de service est un multiplicateur de la puissance nominale qui indique la surcharge permanente admise. Un moteur en service continu tourne en permanence sans surchauffer ; en service non continu, il a besoin de pauses.",
    },
    { type: 'image', source: SLIDES['nec-8'], caption: 'Exceptions de la table 430.52' },
    { type: 'image', source: SLIDES['nec-9'], caption: 'MCP : jusqu’à 1 300 % / 1 700 %' },
    { type: 'image', source: SLIDES['nec-10'], caption: 'Designs NEMA A, B, C, D' },
    { type: 'image', source: SLIDES['nec-16'], caption: 'NEC 430.32 : 125 % / 115 %' },
    { type: 'image', source: SLIDES['nec-18'], caption: "Classes d'isolation des enroulements" },
    {
      type: 'image',
      source: require('../../../assets/reference/nec_table_430_248.png'),
      caption: 'NEC Table 430.248 — Full-Load Currents, moteurs monophasés',
      height: 300,
    },
    {
      type: 'image',
      source: require('../../../assets/reference/nec_table_430_250.png'),
      caption: 'NEC Table 430.250 — Full-Load Currents, moteurs triphasés',
      height: 320,
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Exemples — protection par fusible (NEC 440, climatisation)' },
    {
      type: 'text',
      text: "Pour la climatisation, on se réfère à la plaque signalétique dans la plupart des cas. Parfois, seuls des fusibles sont demandés ; sinon, on utilise la table 430.52 : coefficient de la table × FLA du plus gros moteur (le compresseur) + FLA du petit moteur (le ventilateur).",
    },
    {
      type: 'text',
      text: "Fusible : 1.75 × FLA compresseur + FLA ventilateur. Si cette valeur ne suffit pas au démarrage du moteur, on peut monter jusqu'à 2.25 × FLA compresseur + FLA ventilateur.",
    },
    { type: 'formula', text: 'Exemple 1 : 1.75 × 27 + 2.2 = 49.45 A → fusible 50A (jusqu\'à 2.25 × 27 + 2.2 = 62.95 A → 60A max)' },
    {
      type: 'image',
      source: require('../../../assets/reference/ac_fuse_example1.png'),
      caption: 'NEC 440 — Exemple 1 : compresseur 27A + ventilateur 2.2A',
      height: 320,
    },
    { type: 'formula', text: 'Exemple 2 : 1.75 × 22.1 + 1.8 = 40.48 A → fusible 45A (jusqu\'à 2.25 × 22.1 + 1.8 = 51.53 A → 50A max)' },
    {
      type: 'image',
      source: require('../../../assets/reference/ac_fuse_example2.png'),
      caption: 'NEC 440 — Exemple 2 : compresseur RLA 22.1A + FLA ventilateur 1.8A',
      height: 320,
    },
    { type: 'formula', text: 'Exemple 3 : 1.75 × 16 + 1.3 = 29.3 A → fusible 30A (jusqu\'à 2.25 × 16 + 1.3 = 37.3 A → 35A max)' },
    {
      type: 'image',
      source: require('../../../assets/reference/ac_fuse_example3.png'),
      caption: 'NEC 440 — Exemple 3 : compresseur 16A + ventilateur 1.3A',
      height: 320,
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Feeder pour un panneau de moteurs (plusieurs moteurs combinés)' },
    {
      type: 'text',
      text: "Quand un même départ protège plusieurs moteurs, il faut combiner leurs protections individuelles pour trouver le calibre du disjoncteur commun :",
    },
    {
      type: 'bullets',
      items: [
        '1 → Chercher le FLC de chaque moteur (tables NEC).',
        '2 → Appliquer le coefficient approprié (430.52) et choisir le disjoncteur de chaque moteur dans la table 240.6(A).',
        '3 → Additionner le calibre du plus gros disjoncteur + les FLC des autres moteurs.',
        '4 → Le disjoncteur du feeder doit être inférieur ou égal à cette nouvelle valeur (calibre standard juste en dessous).',
      ],
    },
    {
      type: 'image',
      source: require('../../../assets/diagrams/feeder_motor_panel_steps.png'),
      caption: 'Méthode de combinaison des protections pour un panneau moteurs',
      height: 440,
    },
    {
      type: 'text',
      text: 'Exemple (NEC 430.62) : Moteur 1 — 20 HP, 460V, tri = FLC 27A ; Moteur 2 — 10 HP, 460V, tri = FLC 14A.',
    },
    { type: 'formula', text: '20 HP : 27 × 2.5 = 68A → disjoncteur 70A' },
    { type: 'formula', text: '10 HP : 14 × 2.5 = 35A' },
    { type: 'formula', text: 'Protection du feeder : plus gros CB + Σ FLC des autres moteurs = 70 + 14 = 84A → disjoncteur retenu : 80A' },
    {
      type: 'image',
      source: require('../../../assets/reference/feeder_motor_panel_worked_example.png'),
      caption: 'NEC 430.62 — Exemple complet de feeder pour 2 moteurs combinés',
      height: 480,
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Feeder général d\'un panneau (calcul global)' },
    {
      type: 'text',
      text: "Pour dimensionner le disjoncteur principal d'un panneau complet (mélange de charges continues, non-continues et moteurs) :",
    },
    {
      type: 'bullets',
      items: [
        '1 → Charges non continues : les additionner (en tenant compte des facteurs de demande). Pour les moteurs, les additionner aussi, en ajoutant 25 % du plus gros moteur. Faire la somme.',
        '2 → Charges continues : les additionner toutes.',
        '3 → Total = 1.25 × charges continues + charges non continues.',
        '4 → En déduire le courant I.',
        '5 → Choisir le disjoncteur dans la table 240.6(A).',
      ],
    },
    {
      type: 'image',
      source: require('../../../assets/diagrams/feeder_panel_general_steps.png'),
      caption: "Calcul du feeder général d'un panneau",
      height: 380,
    },
    {
      type: 'note',
      text: "💡 Pour les moteurs inclus dans la somme des charges non-continues, ajouter en plus 25% du courant du plus gros moteur du groupe (NEC 220.18 : 125 % du plus gros moteur + les autres charges).",
    },
    { type: 'image', source: SLIDES['nec-28'], caption: 'NEC 215.3 : feeders de tableau' },
    { type: 'image', source: SLIDES['nec-29'], caption: 'NEC 220.18 : 125 % du plus gros moteur' },
    {
      type: 'text',
      text: 'Exemple (NEC 215.3) : éclairage général 11 600 VA + 3 sécheuses industrielles (15kW chacune) = 45 000 VA → charges continues = 56 600 VA. Réceptacles + soudeuses + moteurs = charges non-continues = 38 900 VA.',
    },
    { type: 'formula', text: 'Total = 1.25 × 56 600 + 38 900 = 109 700 VA → 132A (480V, tri) → disjoncteur standard : 150A' },
    {
      type: 'image',
      source: require('../../../assets/reference/feeder_panel_general_worked_example.png'),
      caption: 'NEC 215.3 — Exemple complet de feeder général de panneau',
      height: 480,
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Dans un panneau : branches et disjoncteur principal' },
    {
      type: 'bullets',
      items: [
        "Pour chaque disjoncteur de départ (branch circuit) : trouver le courant et multiplier par 1.25 en supposant toutes les charges continues.",
        "Les prises (sockets) sont considérées non-continues selon le NEC.",
        "Pour un réfrigérateur ou un compresseur HVAC : toujours se référer à la plaque signalétique (nameplate) du fabricant plutôt qu'à une règle générale.",
        "Il y a deux choses à sélectionner : le disjoncteur de chaque branche, et le disjoncteur principal du panneau (voir NEC 215.3 — Overcurrent protection, Feeders).",
      ],
    },
    {
      type: 'image',
      source: require('../../../assets/reference/panel_main_breaker_nec2153.png'),
      caption: 'Panel schedule réel — disjoncteur principal MCCB 125A dimensionné selon la demande',
      height: 380,
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Protection moteur — approche IEC' },
    {
      type: 'bullets',
      items: [
        "Le disjoncteur de protection moteur (motor protection circuit breaker) assure à la fois la protection contre la surcharge et contre le court-circuit.",
        "Un disjoncteur de court-circuit seul ne protège pas contre la surcharge.",
        "MCP (Motor Circuit Protector) + relais de surcharge = protection complète du moteur.",
      ],
    },
    { type: 'formula', text: 'Seuil de déclenchement surcharge : 1.05 – 1.2 × FLC' },
    {
      type: 'note',
      text: "💡 Différence clé NEC/IEC : en NEC, le calibre du disjoncteur moteur est volontairement large (via la table 430.52) pour tolérer le fort courant de démarrage. En IEC, le disjoncteur est choisi proche du courant nominal de la charge — le courant d'appel des moteurs est plutôt géré par le choix de la courbe de déclenchement (C ou D). On utilise alors un simple facteur de dérating de 1.25, sans distinction moteur/charge statique.",
    },
    {
      type: 'image',
      source: require('../../../assets/reference/iec_vs_nec_breaker_note.png'),
      caption: 'Note du cours — approche IEC vs NEC pour le calibrage des disjoncteurs moteurs',
      height: 260,
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Protection par fusibles — règle IEC' },
    {
      type: 'text',
      text: "I₂ est le courant conventionnel de fusion du fusible. La règle générale impose que le courant de fonctionnement du dispositif de protection ne dépasse pas 1.45 × la capacité de transit du câble.",
    },
    { type: 'formula', text: 'I₂ ≤ 1.45 × I_z' },
    {
      type: 'table',
      headers: ['Type de fusible', 'Règle'],
      rows: [
        ['gG (résidentiel/commercial, sans moteurs)', 'I₂ = 1.6 × I_n'],
        ['aM (protection court-circuit des circuits moteurs)', 'Protection court-circuit uniquement — surcharge assurée séparément'],
      ],
    },
  ],
};
