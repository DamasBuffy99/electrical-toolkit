import { TopicContent } from '../../../types';

export const pvDesignStepsContent: TopicContent = {
  title: 'PV Sizing Methodology',
  subtitle: 'The 6 steps to design a solar photovoltaic system',
  blocks: [
    {
      type: 'text',
      text: "A standalone (off-grid or hybrid) PV system is sized in a specific order: each step depends on the result of the previous one.",
    },
    {
      type: 'image',
      source: require('../../../../../assets/diagrams/solar/en/pv_design_steps.png'),
      caption: 'The 6 design steps',
      height: 620,
    },
    {
      type: 'note',
      text: "📸 Section still being completed — course screenshots will be added to clarify a few points once available.",
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Panel wiring: checks before connecting' },
    {
      type: 'bullets',
      items: [
        "Choose the panel's open-circuit voltage (Voc) from its datasheet, accounting for the half short-circuit current or the temperature range set by the applicable standard (e.g. NEC).",
        "Check the number of panels to put in series.",
        "Check the number of parallel panel strings.",
        "Make sure this configuration stays within the input limits of the chosen charge controller.",
      ],
    },
    { type: 'formula', text: 'Voc_total = Nb_panels_in_series × Panel_Voc × temperature_correction_coefficient' },
    {
      type: 'text',
      text: 'Example: 2 panels in series, Voc = 38.9 V, correction coefficient (cold) = 1.09:',
    },
    { type: 'formula', text: '2 × 38.9 × 1.09 = 79.3 V < 150 V (max input voltage of the controller)' },
    { type: 'formula', text: 'Controller input current = Panel_Isc × Nb_parallel_strings × safety_factor (1.25 or 1.3)' },
    {
      type: 'text',
      text: 'Example: Isc = 10.07 A, 3 parallel strings, 1.25 safety factor:',
    },
    { type: 'formula', text: '3 × 1.25 × 10.07 = 37.76 A' },
    {
      type: 'note',
      text: '⚠️ Always compare both results (voltage and current) against the maximum ratings shown on the datasheet of the charge controller or solar inverter used.',
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Charge controller sizing' },
    {
      type: 'text',
      text: "The controller is chosen from the total panel power and the system (battery) voltage.",
    },
    { type: 'formula', text: 'Max charging current = Total panel power (W) / System voltage (V)' },
    {
      type: 'text',
      text: 'Example: 1800 W of panels on a 24 V system:',
    },
    { type: 'formula', text: '1800 / 24 = 75 A' },
    {
      type: 'note',
      text: "⚠️ This current must stay within what the batteries can handle — check the maximum charging current on their datasheet. If the available standard rating is insufficient, move up to the next controller size.",
    },
    {
      type: 'text',
      text: "If the batteries are split into several parallel groups, the current is shared across them — check individually against the maximum charging current per battery.",
    },
    { type: 'formula', text: 'Example (4 parallel groups): 75 / 4 = 18.75 A per group' },
  ],
};
