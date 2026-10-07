import { TopicContent } from '../../types';
import { SLIDES } from '../../slides';

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

    { type: 'heading', text: '🔷 Preparing the panel' },
    {
      type: 'bullets',
      items: [
        'The panel schedule lists every circuit and the load each one serves (Excel or AutoCAD file). Each circuit has its own breaker and its own cable.',
        'Typical configurations: boards with 6, 12, 18, 24, 30, 36, 42 or 48 circuits.',
        'Incoming breaker: disconnects and protects the whole panel. Outgoing breakers: each protects one circuit.',
      ],
    },
    {
      type: 'table',
      headers: ['Reserve', 'Share of circuits', 'Meaning'],
      rows: [
        ['Spare', '20%', 'Breakers installed but not connected to any load'],
        ['Space', '10%', 'Empty slots, no breaker, for the future'],
      ],
    },
    { type: 'image', source: SLIDES['cond-188'], caption: 'The panel schedule' },
    { type: 'image', source: SLIDES['cond-189'], caption: 'Spare and space' },
    { type: 'image', source: SLIDES['cond-190'], caption: 'Panel configurations' },
    { type: 'image', source: SLIDES['cond-192'], caption: 'Incoming and outgoing breakers' },

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
      text: '🎯 Per ANSI C84.1, current unbalance must not exceed 5% of the average phase current. The same rule applies to voltage unbalance.',
    },
    { type: 'image', source: SLIDES['cond-191'], caption: 'Phase balance (ANSI C84.1)' },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Step 2 — Demand factors & re-rating' },
    {
      type: 'text',
      text: 'Group the connected loads by category (lighting, receptacles, air conditioning…) and apply each category\'s demand factor.',
    },
    { type: 'formula', text: 'Total demand [kVA] = Σ (connected load × DF per category)' },
    {
      type: 'table',
      headers: ['Category (DB-F example)', 'Connected', 'Rule', 'Demand'],
      rows: [
        ['Lighting', '0.87 kVA', 'DF = 1', '0.87 kVA'],
        ['Receptacles', '18.75 kVA', 'First 10 kVA at 100%, remainder at 50% (NEC 220.44)', '10 + 0.5 × 8.75 = 14.38 kVA'],
        ['Air conditioning', '35.85 kVA', 'DF = 1', '35.85 kVA'],
        ['Water heater', '2 kVA', 'DF = 1', '2 kVA'],
        ['Fridge', '2 kVA', 'DF = 1', '2 kVA'],
        ['Total', '59.47 kVA', '', '55.1 kVA'],
      ],
    },
    { type: 'formula', text: 'Demand + 15% = Demand × 1.15' },
    { type: 'formula', text: 'Line amps = (Demand [kVA] × 1000) / (√3 × Voltage)' },
    { type: 'formula', text: 'Example: 55.1 × 1000 / (√3 × 380) = 83.7 A · Demand + 15% = 63.4 kVA' },
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
