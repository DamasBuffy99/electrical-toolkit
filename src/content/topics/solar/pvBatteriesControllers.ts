import { TopicContent } from '../../types';

export const pvBatteriesControllersContent: TopicContent = {
  title: "Batteries & Régulateurs de charge",
  subtitle: "Notes Victron — types de batteries, courants de charge/décharge, PWM vs MPPT",
  blocks: [
    { type: 'heading', text: '🔷 Types de batteries' },
    {
      type: 'table',
      headers: ['Famille', 'Types'],
      rows: [
        ['VRLA (scellées, sans entretien)', 'AGM · GEL · OPzV'],
        ['À électrolyte liquide', 'OPzS · Plomb-carbone · etc.'],
      ],
    },
    {
      type: 'note',
      text: "⚠️ La tension d'une batterie n'est pas un indicateur fiable de son état de charge.",
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Courant de charge' },
    {
      type: 'text',
      text: "Le courant de charge (en A) doit se situer entre 10% (0.1C) et 20% (0.2C) de la capacité du banc de batteries (en Ah).",
    },
    { type: 'formula', text: 'I_charge = 0.1 à 0.2 × Capacité du banc (Ah)' },
    { type: 'subheading', text: "Exemple — banc 24V, 4 batteries 200Ah/12V (2 séries × 2 parallèles)" },
    {
      type: 'table',
      headers: ['Courant', 'Calcul', 'Puissance PV correspondante'],
      rows: [
        ['Mini (10%)', '0.1 × 2 × 200 = 40 A', '40 × 24 = 960 W'],
        ['Maxi (20%)', '0.2 × 2 × 200 = 80 A', '80 × 24 = 1 920 W'],
      ],
    },
    {
      type: 'note',
      text: "💡 Toujours vérifier aussi le courant de charge maximal admissible indiqué par le fabricant de batteries, ainsi que le courant de charge maximal du convertisseur-chargeur utilisé.",
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Courant de décharge optimal' },
    {
      type: 'table',
      headers: ['Type de batterie', 'Courant de décharge optimal'],
      rows: [
        ['AGM', 'C/8'],
        ['GEL', 'C/3'],
        ['OPzS / OPzV', 'C/5'],
      ],
    },
    {
      type: 'note',
      text: "💡 Appliquer un coefficient de simultanéité au bilan de puissance — toutes les charges ne consomment pas en même temps.",
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Régulateurs PWM vs MPPT' },
    { type: 'subheading', text: 'PWM' },
    {
      type: 'bullets',
      items: [
        "La tension du champ PV doit être égale à la tension de la batterie : U_PV = U_bat.",
        "Le courant du régulateur doit être ≥ 1.25 × Isc du champ PV.",
      ],
    },
    { type: 'subheading', text: 'MPPT' },
    {
      type: 'text',
      text: 'Nomenclature des régulateurs MPPT : Umax PV / Imax batterie.',
    },
    { type: 'formula', text: 'U_PV = U_oc + correction (démarrage)' },
    { type: 'formula', text: 'U_PV ≥ 2 × U_bat (fonctionnement optimal)' },
    {
      type: 'note',
      text: "💡 Contrairement au PWM, le MPPT accepte une tension de champ PV supérieure à la tension batterie — il convertit l'excédent de tension en courant supplémentaire pour optimiser la récupération d'énergie.",
    },
    {
      type: 'note',
      text: "📸 Section en cours de complétion — j'ajouterai les captures du cours pour préciser certains points dès qu'elles seront disponibles.",
    },
  ],
};
