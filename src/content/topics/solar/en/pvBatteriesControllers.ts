import { TopicContent } from '../../../types';

export const pvBatteriesControllersContent: TopicContent = {
  title: 'Batteries & Charge Controllers',
  subtitle: 'Victron notes — battery types, charge/discharge current, PWM vs MPPT',
  blocks: [
    { type: 'heading', text: '🔷 Battery types' },
    {
      type: 'table',
      headers: ['Family', 'Types'],
      rows: [
        ['VRLA (sealed, maintenance-free)', 'AGM · GEL · OPzV'],
        ['Flooded (liquid electrolyte)', 'OPzS · Lead-carbon · etc.'],
      ],
    },
    {
      type: 'note',
      text: "⚠️ A battery's voltage is not a reliable indicator of its state of charge.",
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Charging current' },
    {
      type: 'text',
      text: "The charging current (A) should be between 10% (0.1C) and 20% (0.2C) of the battery bank's capacity (Ah).",
    },
    { type: 'formula', text: 'I_charge = 0.1 to 0.2 × Bank capacity (Ah)' },
    { type: 'subheading', text: 'Example — 24V bank, 4 batteries 200Ah/12V (2 series × 2 parallel)' },
    {
      type: 'table',
      headers: ['Current', 'Calculation', 'Corresponding PV power'],
      rows: [
        ['Min (10%)', '0.1 × 2 × 200 = 40 A', '40 × 24 = 960 W'],
        ['Max (20%)', '0.2 × 2 × 200 = 80 A', '80 × 24 = 1,920 W'],
      ],
    },
    {
      type: 'note',
      text: "💡 Always also check the maximum allowable charging current specified by the battery manufacturer, as well as the maximum charging current of the charger/inverter used.",
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Optimal discharge current' },
    {
      type: 'table',
      headers: ['Battery type', 'Optimal discharge current'],
      rows: [
        ['AGM', 'C/8'],
        ['GEL', 'C/3'],
        ['OPzS / OPzV', 'C/5'],
      ],
    },
    {
      type: 'note',
      text: "💡 Apply a coincidence factor to the power balance — not all loads draw power at the same time.",
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 PWM vs MPPT controllers' },
    { type: 'subheading', text: 'PWM' },
    {
      type: 'bullets',
      items: [
        "The PV array voltage must equal the battery voltage: U_PV = U_bat.",
        "The controller's current rating must be ≥ 1.25 × the PV array's Isc.",
      ],
    },
    { type: 'subheading', text: 'MPPT' },
    {
      type: 'text',
      text: 'MPPT controller naming convention: Umax PV / Imax battery.',
    },
    { type: 'formula', text: 'U_PV = U_oc + correction (cold start)' },
    { type: 'formula', text: 'U_PV ≥ 2 × U_bat (optimal operation)' },
    {
      type: 'note',
      text: "💡 Unlike PWM, MPPT accepts a PV array voltage higher than the battery voltage — it converts the excess voltage into additional current to optimize energy harvest.",
    },
    {
      type: 'note',
      text: "📸 Section still being completed — course screenshots will be added to clarify a few points once available.",
    },
  ],
};
