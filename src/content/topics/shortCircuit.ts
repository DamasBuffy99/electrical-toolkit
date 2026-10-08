import { TopicContent } from '../types';
import { SLIDES } from '../slides';

export const shortCircuitContent: TopicContent = {
  title: 'Courant de court-circuit',
  subtitle: 'Calculer Isc au tableau général et aux tableaux divisionnaires pour choisir le pouvoir de coupure',
  blocks: [
    {
      type: 'text',
      text: "Chaque disjoncteur doit pouvoir couper le courant de court-circuit maximal à l'endroit où il est installé (Icu ≥ Isc). Plus on s'éloigne du transformateur, plus l'impédance augmente et plus Isc diminue.",
    },
    { type: 'image', source: SLIDES['gen-19'], caption: '30 kA au tableau général, 19 kA après 11 m de câble 50 mm²' },

    { type: 'heading', text: '1 · La formule de base' },
    { type: 'formula', text: 'Isc = U₂₀ / (√3 × Z_T)    avec    Z_T = √(R_T² + X_T²)' },
    {
      type: 'bullets',
      items: [
        'U₂₀ = tension composée à vide au secondaire du transformateur (ex. 400 V).',
        'R_T = somme de toutes les résistances en amont du point de défaut.',
        'X_T = somme de toutes les réactances en amont du point de défaut.',
      ],
    },
    { type: 'text', text: 'On additionne donc, du réseau jusqu’au défaut : réseau amont, transformateur, disjoncteurs, jeux de barres et câbles.' },
    { type: 'image', source: SLIDES['gen-20'], caption: 'Isc = U₂₀ / (√3 Z_T)' },

    { type: 'heading', text: '2 · Impédance du réseau amont' },
    {
      type: 'text',
      text: "Le distributeur donne la puissance de court-circuit du réseau MT, dont on déduit une impédance ramenée en BT :",
    },
    { type: 'formula', text: 'Zs = U₀² / Psc' },
    {
      type: 'bullets',
      items: ['Réseau 11 kV → 500 MVA de court-circuit', 'Réseau 22 kV → 750 MVA de court-circuit'],
    },
    { type: 'image', source: SLIDES['gen-21'], caption: 'Impédance du réseau amont' },

    { type: 'heading', text: '3 · Impédance du transformateur' },
    { type: 'formula', text: 'Z_tr = (U₂₀² / Pn) × (Usc / 100)' },
    { type: 'text', text: 'Pn = puissance du transformateur (kVA) · Usc = tension de court-circuit (%) de la plaque.' },
    { type: 'formula', text: 'R_tr = Pcu × 10³ / (3 × In²)   (en mΩ, Pcu = pertes cuivre en W)' },
    { type: 'formula', text: 'X_tr = √(Z_tr² − R_tr²)' },
    { type: 'image', source: SLIDES['gen-22'], caption: 'Impédance du transformateur' },
    { type: 'image', source: SLIDES['gen-23'], caption: 'Résistance tirée des pertes cuivre' },
    { type: 'image', source: SLIDES['gen-24'], caption: 'Valeurs typiques par puissance de transformateur', focus: { x: 0.52, y: 0.3, w: 0.46, h: 0.17 } },

    { type: 'heading', text: '4 · Disjoncteurs, jeux de barres et câbles' },
    {
      type: 'bullets',
      items: [
        'Disjoncteur en amont du défaut : réactance conventionnelle de 0,15 mΩ par appareil, résistance négligée.',
        'Jeu de barres BT : résistance négligeable, réactance ≈ 0,15 mΩ par mètre.',
      ],
    },
    { type: 'formula', text: 'Câble : R = ρ × L / S    avec ρ = 22,5 mΩ·mm²/m (cuivre) ou 36 mΩ·mm²/m (aluminium)' },
    { type: 'formula', text: 'Câble : X = 0,08 mΩ/m × L en triphasé (0,12 mΩ/m en monophasé)' },
    {
      type: 'note',
      text: "💡 En pratique on néglige souvent le réseau amont, les disjoncteurs et les jeux de barres : Isc calculé est alors un peu plus grand, ce qui va dans le sens de la sécurité.",
    },
    { type: 'image', source: SLIDES['gen-25'], caption: 'Impédance des disjoncteurs et jeux de barres' },
    { type: 'image', source: SLIDES['gen-26'], caption: 'Impédance des câbles' },

    { type: 'heading', text: '5 · Exemple : transformateur 500 kVA, Usc = 4 %, Pcu = 5 500 W' },
    { type: 'subheading', text: 'Méthode 1 : par les impédances' },
    { type: 'formula', text: 'Z_tr = (400² / 500 000) × 0,04 = 12,8 mΩ' },
    { type: 'formula', text: 'In = 500 000 / (√3 × 400) = 722 A → R_tr = 5 500 × 10³ / (3 × 722²) = 3,52 mΩ' },
    { type: 'formula', text: 'X_tr = √(12,8² − 3,52²) = 12,3 mΩ' },
    { type: 'formula', text: 'Isc = 400 / (√3 × √(3,52² + 12,3²)) ≈ 18 kA' },
    { type: 'subheading', text: 'Méthode 2 : par la puissance de court-circuit' },
    { type: 'formula', text: 'Ssc = 500 / 0,04 = 12,5 MVA → Isc = 12,5 / (0,4 × √3) ≈ 18 kA' },
    { type: 'text', text: 'On retient un pouvoir de coupure normalisé de 20 kA au tableau général (MDP).' },
    { type: 'image', source: SLIDES['gen-27'], caption: 'Méthode 1 au tableau général' },
    { type: 'image', source: SLIDES['gen-28'], caption: 'Méthode 2 : Ssc = Sn / Z%' },

    { type: 'heading', text: '6 · Au tableau divisionnaire DP-1 (20 m de câble 3×50 + 25 mm²)' },
    { type: 'formula', text: 'R_câble = 22,5 × 20 / 50 = 9 mΩ    X_câble = 0,08 × 20 = 1,6 mΩ' },
    { type: 'formula', text: 'R_total = 3,52 + 9 = 12,52 mΩ    X_total = 12,3 + 1,6 = 13,9 mΩ' },
    { type: 'formula', text: 'Isc = 400 / (√3 × √(12,52² + 13,9²)) ≈ 12 kA → pouvoir de coupure retenu : 15 kA' },
    {
      type: 'note',
      text: '📌 Isc diminue le long du réseau : 18 kA au tableau général, 12 kA à DP-1. Les disjoncteurs en aval peuvent avoir un pouvoir de coupure plus faible, donc moins cher.',
    },
    { type: 'image', source: SLIDES['gen-29'], caption: 'Isc au tableau DP-1' },
  ],
};
