import { TopicContent } from '../../../types';
import { fig } from '../fig';

export const climLoadExampleContent: TopicContent = {
  title: 'Full example: an office in Douala',
  subtitle: 'The balance of a 60 m² office, choosing the split and the power to subscribe',
  blocks: [
    {
      type: 'text',
      text: 'We want to air-condition identical offices on the ground floor of a building in Douala (Cameroon). We calculate one office, 10 m × 6 m with a 3 m ceiling, used from 8:00 to 12:00 and 13:00 to 18:00.',
    },
    fig('p042_0', 'Figure 1.2 — room plan (10 m × 6 m), 20 cm external walls, 10 cm partitions'),

    { type: 'heading', text: 'The brief' },
    {
      type: 'bullets',
      items: [
        'External walls: 20 cm hollow blocks, sand render both sides, white paint.',
        'Partitions: 10 cm hollow blocks, rendered, white.',
        'Floor: 15 cm concrete + screed + brown carpet; ceiling: 20 cm white concrete, non-conditioned room above.',
        'Wooden door 1 m × 2 m; window 1 m × 1.5 m with metal frame and external ecru fabric blind.',
        'Fluorescent lighting; usual office equipment.',
      ],
    },
    {
      type: 'table',
      headers: ['Conditions', 'Temperature', 'Humidity', 'Moisture content ω'],
      rows: [
        ['Outdoor (Douala, design)', '32 °C', '83 %', '0.0255 kg/kg'],
        ['Indoor (comfort)', '26 °C', '51 %', '0.0108 kg/kg'],
        ['Difference', 'Δθ = 6 °C', '', 'Δω = 0.0147 kg/kg'],
      ],
    },

    { type: 'heading', text: 'Step 1 · The calculation hour' },
    {
      type: 'text',
      text: 'The North, South and West walls are sunlit. Their gains peak at 12:00 (North), 13:00 (South) and 14:00 (West). The South wall is the largest and the office is used in the afternoon: the balance is done at 13:00.',
    },
    fig('p031_1', 'Table 1.14a — radiation at 4° North in February: read the 13:00 row'),

    { type: 'heading', text: 'Step 2 · Transmission through the walls' },
    { type: 'formula', text: 'QStr = k × S × Δθ' },
    {
      type: 'table',
      headers: ['Wall', 'k', 'S (m²)', 'Δθ', 'QStr (W)'],
      rows: [
        ['North wall', '2.09', '30', '6', '376'],
        ['South wall', '2.09', '28', '6', '351'],
        ['West wall', '2.09', '16.5', '6', '207'],
        ['East wall (partition to non-conditioned room)', '2.37', '18', '6 − 3 = 3', '128'],
        ['West glazing', '5', '1.5', '6', '45'],
        ['Ceiling (non-conditioned room above)', '1.14', '60', '6 − 3 = 3', '205'],
        ['Wooden door', '3.94', '2', '6', '47'],
        ['Total', '', '', '', '1,359'],
      ],
    },
    { type: 'note', text: 'The slab on grade adds nothing: Δθ = 20 − 26 < 0, the ground is cooler than the room.' },
    fig('p043', 'The detailed calculation in the guide (page 28): transmission then radiation'),

    { type: 'heading', text: 'Step 3 · Solar radiation' },
    { type: 'formula', text: 'Walls: QSRm = α × F × S × Rm   ;   Glazing: QSRv = α × g × S × Rv' },
    {
      type: 'table',
      headers: ['Wall', 'α', 'F or g', 'S', 'R (W/m²)', 'Q (W)'],
      rows: [
        ['North wall (white)', '0.4', 'F = 0.105', '30', '256', '322'],
        ['South wall (white)', '0.4', 'F = 0.105', '28', '352', '413'],
        ['West wall (white)', '0.4', 'F = 0.105', '16.5', '335', '232'],
        ['West glazing + ecru blind', '0.86', 'g = 0.28', '1.5', '288', '104'],
        ['Wooden door (dark)', '0.7', 'F = 0.197', '2', '352', '97'],
        ['Total', '', '', '', '', '1,168'],
      ],
    },
    { type: 'warning', text: "Guide inconsistencies in this table: (1) the summary table on page 28 shows 355 W/m² for the West wall, but table 1.14a does give 335 W/m² at 13:00: the summary has a typo, the calculation (232 W) is right; (2) for the single glazing, the guide takes α = 0.86 whereas table 1.11 gives α = 1 — you would get 121 W instead of 104 W, i.e. total radiation of 1,185 W instead of 1,168 W. The totals below remain the guide’s." },
    {
      type: 'text',
      text: 'F = 0.105 is obtained by interpolating table 1.12 for k = 2.09 (k = 2 → 0.10; k = 3 → 0.15). For the door, k = 3.94 gives F ≈ 0.197.',
    },

    { type: 'heading', text: 'Step 4 · Fresh air, occupants, lighting, appliances' },
    { type: 'subheading', text: 'Air renewal (natural ventilation: 1 volume/h = 180 m³/h)' },
    { type: 'formula', text: 'QSr = 180 × (32 − 26) × 0.33 = 356 W' },
    { type: 'formula', text: 'QLr = 180 × (0.0255 − 0.0108) × 0.84 × 1000 = 2,222 W' },
    { type: 'subheading', text: 'Occupants (0.1 pers/m² × 60 m² = 6 people, mixed public −10 %)' },
    { type: 'formula', text: 'QSoc = 6 × 63 × 0.9 = 340 W   ;   QLoc = 6 × 59 × 0.9 = 318 W' },
    { type: 'warning', text: "The guide takes 59 W latent per person at 26 °C, inconsistent with the 116 W total of its table 1.16 (63 + 53 = 116). With 53 W, QLoc = 286 W instead of 318 W." },
    { type: 'subheading', text: 'Fluorescent lighting (16 W/m²)' },
    { type: 'formula', text: 'Qlight = 16 × 60 = 960 W' },
    { type: 'warning', text: "Here the guide applies 16 W/m² without the 1.25 fluorescent factor of its own formula (8). With that factor, lighting would be 1,200 W (+240 W)." },
    { type: 'subheading', text: 'Equipment (with usage factor)' },
    {
      type: 'table',
      headers: ['Appliance', 'Power', 'uf', 'Sensible (W)', 'Latent (W)'],
      rows: [
        ['Computer', '250 W', '100 %', '250', ''],
        ['Photocopier', '750 W', '20 %', '150', ''],
        ['Fax', '62 W', '15 %', '9.3', ''],
        ['Stereo', '40 W', '10 %', '4', ''],
        ['Coffee maker', '750 / 300 W', '25 %', '188', '75'],
        ['Printer', '52 W', '15 %', '8', ''],
        ['Total', '', '', '609.3', '75'],
      ],
    },
    fig('p044', 'Guide page 29 — fresh air, occupants, lighting and equipment'),

    { type: 'heading', text: 'Step 5 · The balance' },
    {
      type: 'table',
      headers: ['Item', 'Sensible (W)', 'Latent (W)'],
      rows: [
        ['Transmission', '1,359', ''],
        ['Solar radiation', '1,168', ''],
        ['Air renewal', '356', '2,222'],
        ['Occupants', '340', '318'],
        ['Lighting', '960', ''],
        ['Equipment', '609', '75'],
        ['Total', 'QS = 4,792', 'QL = 2,615'],
      ],
    },
    { type: 'formula', text: 'QT = QS + QL = 4,792 + 2,615 = 7,407 W ≈ 7.4 kW of cooling' },
    {
      type: 'bullets',
      items: [
        'Dehumidification capacity = QL = 2.61 kW, i.e. about 3.76 litres of water to remove per hour.',
        'Sensible heat ratio: 4,792 / 7,407 ≈ 0.65. Very low: in Douala, more than a third of the load is used to dry the air!',
        'Fresh air alone accounts for 2,578 W, i.e. 35 % of the balance: controlling infiltration (closed doors, airtight windows) is essential.',
      ],
    },
    { type: 'warning', text: "The guide’s software (figure 1.3) finds 4,780 W sensible, 2,612 W latent and 7.39 kW, versus 4,792 / 2,615 / 7.41 kW by hand: small rounding and data differences, normal. Correcting the flagged inconsistencies (glazing α +17 W, fluorescent ballast +240 W, occupants’ latent −32 W), the balance would be about 7.63 kW — still covered by the 8.5 kW split." },
    fig('p046_0', 'Figure 1.3 — breakdown of gains computed by the guide’s software: sunlit walls 43 %, lighting 20 %'),

    { type: 'heading', text: 'Step 6 · Choosing the air conditioner' },
    { type: 'text', text: 'From the manufacturer’s catalogue, we pick a “cooling only” split with a capacity just above the balance:' },
    {
      type: 'table',
      headers: ['Characteristic', 'Value'],
      rows: [
        ['Cooling capacity', '8,500 W (29,000 BTU/h)'],
        ['Air flow', '1,200 to 900 m³/h'],
        ['Sound level', '41 / 49 dB(A)'],
        ['Power input', '3,280 W'],
        ['Fuse rating', '32 A'],
        ['Max. refrigerant line length', '25 m'],
      ],
    },
    { type: 'warning', text: "The chosen split (8.5 kW) exceeds the balance by 15 %, whereas the guide limits the safety factor to 5 % and elsewhere advises the unit “just below”. A 7 to 7.5 kW model would have been more consistent with its own rules, provided it covers the 2.6 kW latent load." },
    { type: 'formula', text: 'COP = 8,500 / 3,280 ≈ 2.6  →  meets the recommended minimum for a split (> 2.6)' },
    fig('p045', 'Guide page 30 — split selection and power to subscribe'),

    { type: 'heading', text: 'Step 7 · Power to subscribe' },
    { type: 'formula', text: 'Pat = 3,280 × Ks (1) × Ku (1) = 3,280 W' },
    { type: 'formula', text: 'cos φ = 0.8 → tan φ = 0.75 → Qat = 3,280 × 0.75 = 2,460 var' },
    { type: 'formula', text: 'Sa = √(3,280² + 2,460²) = 4,100 VA' },
    {
      type: 'note',
      text: 'We will subscribe 4.1 kVA for this office. Summary: 7.4 kW of cooling calculated → 8.5 kW split → 3.3 kW of electricity → 4.1 kVA subscription. Keep these three different powers clearly in mind.',
    },
    { type: 'heading', text: "Exercises" },
    {
      type: 'exercise',
      question: "Redo the Douala office without the external blind (g = 1). By how much does the balance increase?",
      solution: [
        "Glazing with blind: 0.86 × 0.28 × 1.5 × 288 = 104 W.",
        "Without blind: 0.86 × 1 × 1.5 × 288 = 372 W, i.e. +268 W.",
        "New balance: 7,407 + 268 ≈ 7,675 W. A simple ecru fabric saves 3.5 % of the balance.",
      ],
    },
    {
      type: 'exercise',
      question: "The same office now hosts 10 people instead of 6. What does the balance become? Is the 8.5 kW split still enough?",
      solution: [
        "Occupants sensible: 10 × 63 × 0.9 = 567 W (+227 W).",
        "Occupants latent: 10 × 59 × 0.9 = 531 W (+213 W).",
        "Balance: 7,407 + 440 = 7,847 W ≈ 7.85 kW → the 8.5 kW split is still enough (8 % margin).",
        "Note: with mechanical ventilation (18 m³/h × 10 = 180 m³/h), fresh air does not change here, since it was already 180 m³/h.",
      ],
    },
  ],
};
