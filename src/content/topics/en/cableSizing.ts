import { TopicContent } from '../../types';
import { SLIDES } from '../../slides';

export const cableSizingContent: TopicContent = {
  title: 'Cable Sizing (CSA)',
  subtitle: 'Finding the right cable cross-section for a load, with derating factors',
  blocks: [
    {
      type: 'text',
      text: "The CSA (Cross-Sectional Area) is chosen from the actual current to be carried, corrected for installation conditions (temperature, laying method, number of grouped cables). An undersized cable overheats; an oversized cable costs more than necessary.",
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Classifying cables: voltage, conductor, insulation' },
    {
      type: 'table',
      headers: ['Voltage', 'Range', 'Examples'],
      rows: [
        ['Low voltage', '1 V – 1,000 V', '0.6/1 kV'],
        ['Medium voltage', '1 kV – 66 kV', '6/10 kV (3.3 – 6.6 kV) · 12/20 kV (11 kV) · 18/30 kV (22 kV)'],
        ['Overhead lines', '66 kV – 500 kV', 'Bare conductors'],
      ],
    },
    {
      type: 'text',
      text: 'The higher the voltage, the more insulation is needed, but the smaller the section because the current is lower. Operating frequency: 50 or 60 Hz.',
    },
    {
      type: 'table',
      headers: ['Conductor', 'Key points'],
      rows: [
        ['Copper (Cu)', 'Preferred at low voltage · lower voltage drop · more pliable to install'],
        ['Aluminium (Al)', '61% of the conductivity of copper for 30% of the weight, cheaper · needs 56% more section · used at MV (low current, underground) and overhead'],
      ],
    },
    {
      type: 'table',
      headers: ['Insulation', 'Normal temp.', 'Short-circuit temp.', 'Cost'],
      rows: [
        ['PVC', '70 °C', '150 °C', 'Low'],
        ['XLPE', '90 °C', '250 °C', 'High'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'All MV cables are XLPE (high short-circuit level).',
        'At LV: PVC for low currents, XLPE for high currents. The outer sheath is always PVC.',
        'LSHF (Low Smoke Halogen Free): no PVC; in a fire, less than 0.5% hydrogen chloride gas and no dense black smoke.',
      ],
    },
    { type: 'image', source: SLIDES['panel-44'], caption: 'Classification by voltage' },
    { type: 'image', source: SLIDES['panel-48'], caption: 'Copper or aluminium' },
    { type: 'image', source: SLIDES['panel-53'], caption: 'PVC and XLPE insulation' },

    { type: 'heading', text: '🔷 Armour, number of cores and formation' },
    {
      type: 'table',
      headers: ['Type', 'Characteristics'],
      rows: [
        ['STA', 'Steel Tape Armour — withstands mechanical stress, used for underground laying'],
        ['SWA', 'Steel Wire Armour — more flexible, suited to high pulling loads during installation'],
      ],
    },
    {
      type: 'table',
      headers: ['Cores', 'Use'],
      rows: [
        ['Single core', 'Section per phase > 300 mm², building risers, earthing conductor'],
        ['Two core', 'Single-phase L + N, no earth'],
        ['Three core', 'Single-phase L + N + E; or MV three-phase R, S, T'],
        ['Four core', 'LV three-phase R, S, T + N'],
      ],
    },
    {
      type: 'bullets',
      items: [
        'Trefoil formation: equal spacing between phases, balanced fields and currents; most common up to 132 kV, compact, but touching cables dissipate heat less well.',
        'Flat formation: the middle phase runs hotter and the voltage becomes unbalanced; mostly used by large utilities.',
      ],
    },
    { type: 'image', source: SLIDES['panel-56'], caption: 'STA and SWA armour' },
    { type: 'image', source: SLIDES['panel-61'], caption: 'Number of cores' },
    { type: 'image', source: SLIDES['panel-62'], caption: 'Trefoil formation' },
    { type: 'image', source: SLIDES['panel-63'], caption: 'Flat formation' },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Derating (correction) factors' },
    {
      type: 'text',
      text: "Derating factors reduce a cable's theoretical current-carrying capacity relative to its table (nominal) value. They depend notably on ambient temperature, soil temperature, and the cable's laying method. The NEC provides its own correction tables; they can also be recalculated directly with equation 310.15(B)(1).",
    },
    {
      type: 'text',
      text: 'Example: a factor of 0.8 means the cable only provides 80% of its rated current. For a 100 A load, a 100 A cable would only give 80 A: so we choose a 100 / 0.8 = 125 A cable, which provides 125 × 0.8 = 100 A.',
    },
    { type: 'image', source: SLIDES['panel-64'], caption: 'The derating factor explained' },
    { type: 'formula', text: "I' = I × √((Tc − Ta') / (Tc − Ta))" },
    {
      type: 'text',
      text: "I' = corrected ampacity · I = table ampacity · Tc = conductor temperature rating (°C) · Ta' = new ambient temperature (°C) · Ta = table's reference ambient temperature (°C).",
    },
    {
      type: 'image',
      source: require('../../../../assets/reference/nec_ambient_correction_formula.png'),
      caption: 'NEC 310.15(B)(1) — Ambient temperature correction equation',
      height: 260,
    },
    {
      type: 'image',
      source: require('../../../../assets/reference/nec_ambient_correction_factors.png'),
      caption: 'NEC — Correction factors (ambient temperature and number of grouped conductors)',
      height: 340,
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Sizing method (NEC)' },
    {
      type: 'image',
      source: require('../../../../assets/diagrams/en/cable_csa_sizing_steps.png'),
      caption: 'The 4 steps of CSA sizing',
      height: 440,
    },
    {
      type: 'text',
      text: "Worked example — 40 HP motor, 380V, cos φ = 0.8:",
    },
    { type: 'formula', text: 'I_rated = (40 × 746) / (√3 × 380 × 0.8) = 56.6 A' },
    { type: 'formula', text: 'I_CB = I_rated × 1.25 = 56.6 × 1.25 = 70.75 A' },
    { type: 'formula', text: 'I_cable = I_CB / derating factor' },
    { type: 'formula', text: 'With a factor of 0.82: I_cable = 70.75 / 0.82 = 86.28 A' },
    { type: 'formula', text: 'PVC cable at 50 °C (factor 0.82) → catalogue: (4 × 25) + 16 mm²' },
    { type: 'image', source: SLIDES['panel-70'], caption: 'Rated current and breaker rating' },
    { type: 'image', source: SLIDES['panel-71'], caption: '0.82 factor and choosing (4×25)+16 mm²' },
    {
      type: 'image',
      source: require('../../../../assets/reference/cable_40hp_worked_example.png'),
      caption: 'Full example — rated current, CB rating, and cable current for a 40 HP motor',
      height: 380,
    },
    {
      type: 'text',
      text: "Once I_cable is known, check the conductor's ampacity table (NEC 310.16) to find the section that supports it.",
    },
    {
      type: 'image',
      source: require('../../../../assets/reference/nec_table_310_16_ampacity.png'),
      focus: { x: 0.22, y: 0.14, w: 0.4, h: 0.5 },
      caption: 'NEC Table 310.16 — Ampacities of insulated conductors (copper / aluminum)',
      height: 480,
    },
    {
      type: 'image',
      source: require('../../../../assets/reference/cable_table_25mm_example.png'),
      caption: 'Manufacturer catalog table — checking that a 25 mm² section satisfies the required current',
      height: 380,
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Section rules — neutral and earth' },
    {
      type: 'table',
      headers: ['Conductor', 'Rule'],
      rows: [
        ['Neutral — phase < 35 mm²', 'Same section as phase'],
        ['Neutral — phase > 35 mm²', 'Half the phase section'],
        ['Earth — phase ≤ 16 mm²', 'Same section as phase'],
        ['Earth — phase 25 or 35 mm²', '16 mm²'],
        ['Earth — phase > 35 mm²', 'Half the phase section'],
      ],
    },
    { type: 'image', source: SLIDES['panel-66'], caption: 'Neutral conductor section' },
    { type: 'image', source: SLIDES['panel-67'], caption: 'Earthing conductor section' },
    {
      type: 'note',
      text: "💡 To find a circuit's CSA: start from the load's rated current and the associated breaker rating, then check both against ampacity tables.",
    },
    {
      type: 'image',
      source: require('../../../../assets/reference/single_multi_core_cable.png'),
      caption: 'Single-core (RCTN) vs multi-core (RSTN) cable — conductor identification',
      height: 380,
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Conduits: fill and diameter' },
    {
      type: 'table',
      headers: ['Conduit type', 'Use'],
      rows: [
        ['PVC', 'Recessed connections (ceiling or wall) — not recommended in direct sunlight exposure'],
        ['EMT (Electrical Metallic Tubing)', 'Exposed connections, above ceiling or on wall surface'],
      ],
    },
    {
      type: 'table',
      headers: ['Number of cables', 'Maximum fill (NEC)'],
      rows: [
        ['1 cable', '53%'],
        ['2 cables', '31%'],
        ['3 cables or more', '40%'],
      ],
    },
    {
      type: 'image',
      source: require('../../../../assets/reference/conduit_nec_fill_specs.png'),
      caption: 'NEC conduit fill rules',
      height: 340,
    },
    { type: 'formula', text: 'Conduit Ø = √(Cable Ø² / fill ratio)' },
    {
      type: 'text',
      text: 'Example: 2.5 mm² three-core cable → cable Ø ≈ 11.5 mm → conduit Ø = √(11.5² / 0.4) ≈ 18.2 mm → next standard size up: 20 mm.',
    },
    {
      type: 'image',
      source: require('../../../../assets/reference/conduit_diameter_example.png'),
      caption: 'Full worked example of conduit diameter calculation',
      height: 380,
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Protection coordination — IEC approach' },
    {
      type: 'bullets',
      items: [
        'I_b: circuit design current',
        'I_n: circuit breaker rated current',
        'I_z: cable current-carrying capacity',
      ],
    },
    { type: 'formula', text: 'Coordination rule: I_b ≤ I_n ≤ I_z' },
    {
      type: 'text',
      text: 'Standards used: IEC 60364-4-43 (overcurrent), 60364-5-52 (wiring systems), 60947-2 (circuit breakers), 60228 (conductors), 60034-1 (motors), 60269 (fuses).',
    },
    { type: 'formula', text: 'Single-phase design current: I_B = P / (V_phase × cos φ × η)' },
    { type: 'formula', text: 'Three-phase design current: I_B = P / (√3 × V_line × cos φ × η)' },
    { type: 'text', text: 'P = total power (W) · cos φ = power factor · η = machine efficiency.' },
    { type: 'image', source: SLIDES['iec-3'], caption: 'IEC standards' },
    { type: 'image', source: SLIDES['iec-4'], caption: 'I_B ≤ I_n ≤ I_z' },
    { type: 'image', source: SLIDES['iec-5'], caption: 'Design current I_B' },
    { type: 'image', source: SLIDES['iec-6'], caption: 'Choosing the breaker I_n' },
    {
      type: 'text',
      text: "Short-circuit concepts: I_cu = breaker's ultimate breaking capacity (datasheet); I_k = maximum prospective short-circuit current at the installation point (calculated or measured).",
    },
    { type: 'formula', text: 'Short-circuit withstand condition: I_cu ≥ I_k' },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Cable selection with correction factor (IEC)' },
    { type: 'formula', text: 'I_z ≥ I_CB / correction factor' },
    {
      type: 'text',
      text: "This rule must be checked after applying the correction factors from IEC 60364-5-52:",
    },
    { type: 'formula', text: 'I_z_corrected = I_z × K1 × K2 × K3… ≥ I_n' },
    {
      type: 'bullets',
      items: [
        'K1: ambient temperature factor',
        'K2: cable grouping factor',
        'K3: soil thermal resistivity factor',
      ],
    },
    {
      type: 'image',
      source: require('../../../../assets/reference/iec_cable_size_selection.png'),
      caption: 'IEC 60364 — k constant by insulation type and LV/MV fault clearance times (FCT)',
      height: 480,
    },
    {
      type: 'heading',
      text: '🔷 Thermal check — adiabatic criterion',
    },
    { type: 'formula', text: 'S ≥ (I × √t) / k' },
    {
      type: 'text',
      text: 'I = short-circuit current (A); t = maximum fault duration (s); k = material constant, depending on the conductor, its insulation, etc.',
    },
    {
      type: 'table',
      headers: ['Insulation (IEC 60364-4-43)', 'k copper', 'k aluminium'],
      rows: [
        ['PVC 70 °C (≤ 300 mm²)', '115', '76'],
        ['PVC 70 °C (> 300 mm²)', '103', '68'],
        ['PVC 90 °C (≤ 300 mm²)', '100', '66'],
        ['XLPE / EPR 90 °C', '143', '94'],
        ['Rubber 60 °C', '141', '93'],
      ],
    },
    {
      type: 'table',
      headers: ['Fault clearance time (LV)', 't'],
      rows: [
        ['MCCB and MPCB with fixed trip unit', '0.1 s'],
        ['ACB and MCCB with adjustable trip unit', '0.2 s'],
        ['Incoming line from the transformer', '1 s'],
      ],
    },
    { type: 'formula', text: 'Example: Ik = 10 kA, t = 0.1 s, copper PVC (k = 115) → S ≥ 10,000 × √0.1 / 115 = 27.5 mm² → 35 mm²' },
    { type: 'image', source: SLIDES['iec-8'], caption: 'k values and clearance times', focus: { x: 0.48, y: 0.0, w: 0.5, h: 0.42 } },
    {
      type: 'note',
      text: '⚠️ This adiabatic criterion checks that the cable can thermally withstand the short-circuit current for the fault clearance time — it complements, without replacing, normal-condition sizing (I_z corrected ≥ I_n).',
    },
  ],
};
