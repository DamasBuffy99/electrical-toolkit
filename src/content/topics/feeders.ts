import { TopicContent } from '../types';

export const feedersContent: TopicContent = {
  title: 'Feeders — Protection moteurs & panneaux',
  subtitle: "Dimensionner le disjoncteur d'un départ moteur combiné ou d'un panneau complet",
  blocks: [
    {
      type: 'text',
      text: "Un feeder alimente plusieurs charges à la fois (plusieurs moteurs, ou tout un panneau). Sa protection ne se calcule pas comme un disjoncteur de branche simple : il faut combiner les courants de toutes les charges alimentées selon une méthode précise, propre au NEC.",
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Charge continue et règle 80% / 100%' },
    {
      type: 'text',
      text: "Une charge continue est une charge dont le courant maximal est censé durer 3 heures ou plus (éclairage, climatisation…). Elle impose une marge supplémentaire sur le disjoncteur.",
    },
    { type: 'formula', text: 'I_r = 1.25 × I_continue + I_non-continue' },
    {
      type: 'table',
      headers: ['Standard', 'Règle'],
      rows: [
        ['80% rated design', 'Charge non-continue + 1.25 × charge continue = charge minimale totale'],
        ['100% rated design', 'Charge non-continue + charge continue (sans coefficient) = charge minimale totale'],
      ],
    },
    {
      type: 'note',
      text: "⚠️ Exception : pour un disjoncteur certifié « 100% rated », additionner charge continue + non-continue sans coefficient 1.25.",
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Protection moteur — sélection du disjoncteur (NEC)' },
    {
      type: 'bullets',
      items: [
        "Pour un moteur seul : trouver son FLC (Full Load Current) dans la table NEC 430.248 (monophasé) ou 430.250 (triphasé).",
        "Appliquer le coefficient de la table NEC 430.52 au FLC pour trouver le calibre max de protection.",
        "Vérifier ensuite le calibre standard le plus proche dans la table NEC 240.6.",
        "Si le disjoncteur assure à la fois protection surcharge et court-circuit → un seul dispositif suffit. S'il s'agit d'un dispositif séparé (fusible), utiliser un coefficient 1.75 (ou 2.25 si insuffisant au démarrage).",
      ],
    },
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
      text: "Pour un compresseur/moteur de climatisation, le calibre de fusible se calcule à partir du FLA (Full Load Amps) de la plaque signalétique : 1.75 × FLA + FLA des auxiliaires. Si cette valeur est insuffisante pour le démarrage, on peut monter jusqu'à 2.25 × FLA + auxiliaires, dans la limite du calibre maximal indiqué sur la plaque du fabricant.",
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
      text: "Quand un même départ protège plusieurs moteurs, il faut combiner leurs protections individuelles pour trouver le calibre du disjoncteur commun.",
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
      text: "Pour dimensionner le disjoncteur principal d'un panneau complet (mélange de charges continues, non-continues et moteurs), la méthode NEC se déroule en 4 étapes.",
    },
    {
      type: 'image',
      source: require('../../../assets/diagrams/feeder_panel_general_steps.png'),
      caption: "Calcul du feeder général d'un panneau",
      height: 380,
    },
    {
      type: 'note',
      text: "💡 Pour les moteurs inclus dans la somme des charges non-continues, ajouter en plus 25% du courant du plus gros moteur du groupe.",
    },
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
        "Motor protection circuit breaker : assure la protection contre la surcharge.",
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
