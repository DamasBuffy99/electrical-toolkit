import { TopicContent } from '../../types';

export const panelScheduleContent: TopicContent = {
  title: 'Panel Schedule',
  subtitle: 'From raw wiring to a fully sized electrical panel',
  blocks: [
    {
      type: 'text',
      text: "The panel schedule documents every circuit in a panel, its phase, its breaker, and its cable — up to the main incoming feed. Here is the complete 3-step method, illustrated with a real panel (DB-F, TPN+PE 36-way, 220/380V).",
    },
    {
      type: 'image',
      source: require('../../../../assets/diagrams/en/panel_schedule_workflow.png'),
      caption: 'The 3 steps of building a panel schedule',
      height: 460,
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Step 1 — Balance the phases R/Y/B' },
    {
      type: 'text',
      text: "For each circuit: name, cable size, number of poles, branch breaker rating, and kVA on the relevant phase (R, Y, or B).",
    },
    { type: 'formula', text: 'R/Y/B Bus [kVA] = Σ (kVA of circuits on that phase)' },
    { type: 'formula', text: 'Average [kVA] = (Bus R + Bus Y + Bus B) / 3' },
    { type: 'formula', text: 'Unbalance % = max(|Bus_R−Avg|, |Bus_Y−Avg|, |Bus_B−Avg|) / Avg × 100' },
    {
      type: 'note',
      text: '🎯 Goal: keep the unbalance well under 5% by distributing circuits evenly across the 3 phases.',
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Step 2 — Demand factors & re-rating' },
    {
      type: 'text',
      text: 'Group the connected loads by category (lighting, receptacles, air conditioning…) and apply each category\'s demand factor.',
    },
    { type: 'formula', text: 'Total demand [kVA] = Σ (connected load × DF per category)' },
    { type: 'formula', text: 'Demand + 15% = Demand × 1.15' },
    { type: 'formula', text: 'Line amps = (Demand [kVA] × 1000) / (√3 × Voltage)' },
    {
      type: 'note',
      text: "⚠️ Important: recalculate each branch breaker based on its actual load once demand factors are applied — don't keep a uniform default rating everywhere (e.g. 16A for all). The main breaker must also be re-sized: MCB for a low demand, MCCB above roughly 80A.",
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Step 3 — Size the cables' },
    {
      type: 'text',
      text: "Once branch breaker ratings are finalized, choose each departure cable's cross-section from ampacity tables, then size the incoming (feeder) cable to carry Demand + 15%.",
    },
    {
      type: 'text',
      text: "Real example (panel DB-F): 55 kVA demand → 125A MCCB main breaker → 3×50+1×25+1×25 mm² incoming cable (CU/XLPE/PVC type, with separate earth conductor).",
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Quick reference fields' },
    {
      type: 'table',
      headers: ['Field', 'Meaning'],
      rows: [
        ['Short Ckt. Rating', 'Panel short-circuit withstand rating (e.g. 16kA)'],
        ['TPN+PE', 'Triple pole + neutral + protective earth'],
        ['Mounting', 'Recessed / surface'],
      ],
    },
  ],
};
