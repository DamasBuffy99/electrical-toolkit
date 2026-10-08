import { TopicContent } from '../types';

export const electricalBasicsContent: TopicContent = {
  title: "Les bases de l'électricité",
  subtitle: 'Tension, courant, puissance, phases : le vocabulaire de tout le cours',
  blocks: [
    {
      type: 'text',
      text: "Avant de dimensionner quoi que ce soit, il faut parler la même langue. Cette leçon pose les quelques grandeurs et formules qui reviennent dans tout le cours : on les réutilisera à chaque étape.",
    },
    { type: 'illustration', name: 'water-analogy', caption: "L'électricité comparée à de l'eau dans un tuyau" },

    { type: 'heading', text: '1 · Tension, courant et résistance' },
    {
      type: 'table',
      headers: ['Grandeur', 'Unité', 'Image avec l’eau'],
      rows: [
        ['Tension U', 'volt (V)', 'La pression qui pousse l’eau'],
        ['Courant I', 'ampère (A)', 'Le débit d’eau qui circule'],
        ['Résistance R', 'ohm (Ω)', 'Un rétrécissement qui freine le débit'],
      ],
    },
    { type: 'formula', text: 'Loi d’Ohm : U = R × I' },
    {
      type: 'text',
      text: "Plus la pression (tension) est forte, plus le débit (courant) est grand. Plus le tuyau est étroit (résistance), plus le débit diminue.",
    },
    { type: 'formula', text: 'Exemple : radiateur de 2 300 W sur 230 V → I = 10 A, R = 230 / 10 = 23 Ω' },
    {
      type: 'note',
      text: "💡 C'est le courant qui chauffe les câbles et fait déclencher les disjoncteurs : voilà pourquoi on calcule des courants tout au long du cours.",
    },
    { type: 'illustration', name: 'water-analogy', caption: 'U = R × I et P = U × I' },

    { type: 'heading', text: '2 · Puissance et énergie' },
    { type: 'formula', text: 'Puissance : P = U × I   (en watts, W)' },
    {
      type: 'text',
      text: "La puissance, c'est ce que l'appareil consomme à un instant donné. L'énergie, c'est cette puissance multipliée par la durée d'utilisation : c'est elle qu'on paie et qu'on stocke dans des batteries.",
    },
    { type: 'formula', text: 'Énergie : E = P × t   (en wattheures, Wh — 1 kWh = 1 000 Wh)' },
    { type: 'formula', text: 'Exemple : réfrigérateur de 300 W allumé 10 h → 300 × 10 = 3 000 Wh = 3 kWh' },
    {
      type: 'table',
      headers: ['Unité', 'Équivalence'],
      rows: [
        ['1 kW', '1 000 W'],
        ['1 HP (cheval-vapeur)', '746 W — la puissance mécanique des moteurs'],
        ['1 kWh', 'Ce que consomme un appareil de 1 000 W pendant 1 heure'],
      ],
    },

    { type: 'heading', text: '3 · En alternatif : W, VA et cos φ' },
    {
      type: 'text',
      text: "Dans les bâtiments, le courant est alternatif. Une partie du courant ne produit pas de travail : elle sert à magnétiser les moteurs et les transformateurs. On distingue donc trois puissances.",
    },
    {
      type: 'table',
      headers: ['Puissance', 'Unité', 'Rôle'],
      rows: [
        ['Active P', 'W', 'Produit le travail utile : chaleur, lumière, mouvement'],
        ['Réactive Q', 'var', 'Magnétise les moteurs et transformateurs'],
        ['Apparente S', 'VA', 'Ce que le réseau doit fournir : S = U × I'],
      ],
    },
    { type: 'formula', text: 'P = S × cos φ    ·    cos φ = facteur de puissance (entre 0 et 1)' },
    {
      type: 'table',
      headers: ['Charge', 'cos φ typique'],
      rows: [
        ['Chauffage, résistance', '1'],
        ['Éclairage LED', '0,95'],
        ['Éclairage fluorescent', '0,8'],
        ['Moteurs, climatisation', '0,8 – 0,85'],
      ],
    },
    {
      type: 'note',
      text: '📌 Les câbles, disjoncteurs et transformateurs se dimensionnent en VA (ou kVA), car c’est le courant total qui les traverse — pas seulement la partie « utile ».',
    },
    { type: 'illustration', name: 'power-triangle', caption: 'P, Q, S et cos φ' },

    { type: 'heading', text: '4 · Monophasé et triphasé' },
    {
      type: 'bullets',
      items: [
        'Monophasé : une phase (L) et un neutre (N), 230 V (ou 220 V) entre eux. Pour les petites charges, jusqu’à environ 5 kVA.',
        'Triphasé : trois phases (L1, L2, L3) décalées de 120°, plus le neutre. 400 V (ou 380 V) entre deux phases, 230 V entre une phase et le neutre. Pour les moteurs et les bâtiments.',
      ],
    },
    { type: 'formula', text: 'Tension entre phases = √3 × tension phase-neutre   (230 × 1,732 ≈ 400 V)' },
    {
      type: 'text',
      text: "Le triphasé transporte plus de puissance avec des câbles plus fins, et les moteurs triphasés démarrent mieux. C'est pour ça qu'on équilibre les charges sur les trois phases dans le panel schedule.",
    },
    { type: 'illustration', name: 'phases', caption: 'Monophasé et triphasé' },

    { type: 'heading', text: '5 · Calculer un courant' },
    {
      type: 'table',
      headers: ['', 'À partir de P (W)', 'À partir de S (VA)'],
      rows: [
        ['Monophasé', 'I = P / (V × cos φ × η)', 'I = S / V'],
        ['Triphasé', 'I = P / (√3 × V × cos φ × η)', 'I = S / (√3 × V)'],
      ],
    },
    { type: 'text', text: 'η = rendement des machines (1 pour une résistance). V = 230/220 V en monophasé, 400/380 V en triphasé.' },
    {
      type: 'table',
      headers: ['Raccourci utile (HP ≈ kVA)', 'Courant'],
      rows: [
        ['Monophasé 220 V', '≈ 4,5 A par kVA (ou par HP)'],
        ['Triphasé 380 V', '≈ 1,5 A par kVA (ou par HP)'],
      ],
    },
    { type: 'formula', text: 'Climatiseur 2 HP en monophasé → ≈ 2 × 4,5 = 9 A' },
    { type: 'formula', text: 'Moteur 30 HP en triphasé → ≈ 30 × 1,5 = 45 A' },
    {
      type: 'note',
      text: '💡 D’où vient 1,5 ? 746 W / (√3 × 380 V × 0,8) = 1,41 ≈ 1,5 A par HP. Et 1 HP ≈ 1 kVA car 746 W / 0,8 ≈ 930 VA.',
    },

    { type: 'heading', text: '6 · Les niveaux de tension' },
    {
      type: 'table',
      headers: ['Niveau', 'Plage', 'Où on le trouve'],
      rows: [
        ['Basse tension (BT)', '1 V – 1 kV', 'À l’intérieur des bâtiments : 230 / 400 V'],
        ['Moyenne tension (MT)', '1 kV – 66 kV', 'Réseau de distribution qui arrive au transformateur (11, 22 kV…)'],
        ['Haute tension (HT)', '66 kV – 500 kV', 'Lignes de transport entre villes'],
      ],
    },
    {
      type: 'text',
      text: "Le transformateur du bâtiment abaisse la moyenne tension du réseau en basse tension. Tout ce qu'on conçoit dans ce cours se passe ensuite en basse tension.",
    },

    { type: 'heading', text: 'À retenir' },
    {
      type: 'bullets',
      items: [
        'U = R × I et P = U × I.',
        'Énergie (Wh) = puissance (W) × temps (h).',
        'S (VA) = ce que le réseau fournit ; P (W) = S × cos φ.',
        'Monophasé 230 V pour les petites charges, triphasé 400 V au-delà de 5 kVA.',
        'Courant ≈ 4,5 A/kVA en mono 220 V, ≈ 1,5 A/kVA en tri 380 V.',
      ],
    },
    { type: 'illustration', name: 'phases', caption: 'Le réseau basse tension d’un bâtiment' },
  ],
};
