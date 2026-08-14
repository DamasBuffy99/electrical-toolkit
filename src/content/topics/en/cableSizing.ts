import { TopicContent } from '../../types';

export const cableSizingContent: TopicContent = {
  title: 'Cable Sizing (CSA)',
  subtitle: 'Finding the right cable cross-section for a load, with derating factors',
  blocks: [
    {
      type: 'text',
      text: "The CSA (Cross-Sectional Area) is chosen from the actual current to be carried, corrected for installation conditions (temperature, laying method, number of grouped cables). An undersized cable overheats; an oversized cable costs more than necessary.",
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Cable types: STA vs SWA' },
    {
      type: 'table',
      headers: ['Type', 'Characteristics'],
      rows: [
        ['STA', 'Steel Tape Armour — withstands mechanical stress, used for underground laying'],
        ['SWA', 'Steel Wire Armour — more flexible, suited to high pulling loads during installation'],
      ],
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Derating (correction) factors' },
    {
      type: 'text',
      text: "Derating factors reduce a cable's theoretical current-carrying capacity relative to its table (nominal) value. They depend notably on ambient temperature, soil temperature, and the cable's laying method. The NEC provides its own correction tables; they can also be recalculated directly with equation 310.15(B)(1).",
    },
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
        ['Neutral — phase ≤ 16 mm²', 'Same section as phase'],
        ['Neutral — phase > 16 mm²', 'Half the phase section'],
        ['Earth — phase ≤ 16 mm²', 'Same section as phase'],
        ['Earth — phase between 16 and 35 mm²', '16 mm²'],
        ['Earth — phase > 35 mm²', 'Half the phase section'],
      ],
    },
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
      text: "Short-circuit concepts: I_cu = breaker's ultimate breaking capacity (datasheet); I_k = maximum prospective short-circuit current at the installation point (calculated or measured).",
    },
    { type: 'formula', text: 'Short-circuit withstand condition: I_cu ≥ I_k' },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Cable selection with correction factor (IEC)' },
    { type: 'formula', text: 'I_z ≥ I_n' },
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
      text: 't = maximum fault duration (s); k = material constant, depending on the conductor and its insulation.',
    },
    {
      type: 'note',
      text: '⚠️ This adiabatic criterion checks that the cable can thermally withstand the short-circuit current for the fault clearance time — it complements, without replacing, normal-condition sizing (I_z corrected ≥ I_n).',
    },
  ],
};
