import { TopicContent } from '../../types';

export const lightingContent: TopicContent = {
  title: 'Lighting Design',
  subtitle: 'Choosing luminaires and calculating how many are needed',
  blocks: [
    { type: 'heading', text: '🔷 Lamp types' },
    {
      type: 'table',
      headers: ['Lamp', 'CRI', 'Typical use'],
      rows: [
        ['Incandescent / Halogen', '100', 'Decoration, chandeliers'],
        ['Fluorescent', '50 – 73', 'Offices, retail, classrooms'],
        ['CFL', '70', 'Residential (screw base) or spotlight (pin base)'],
        ['High-pressure sodium', '24', 'Streets, tunnels, security'],
        ['Metal halide', '70 – 90', 'Factories, stadiums (height ≥ 5 m)'],
        ['LED', '83 – 98+', 'Everywhere — the most efficient, longest-lasting (25,000 h)'],
      ],
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Mounting, IP rating, and color' },
    {
      type: 'bullets',
      items: [
        'Surface mounted: ceiling < 3 m. Recessed: false ceiling. Suspended: > 3 m (factories, malls).',
        'Color temperature: 2700K warm (homes) · 4000K neutral (offices) · 5000K cool (hospitals, galleries).',
        'CRI scale: < 60 low · 60–80 acceptable · > 80 excellent.',
      ],
    },
    { type: 'subheading', text: 'Ingress Protection (IP) = solids digit (0–6) + liquids digit (0–8)' },
    {
      type: 'table',
      headers: ['IP', 'Application'],
      rows: [
        ['IP20', 'Offices, residential'],
        ['IP43 / IP44', 'Kitchens (steam)'],
        ['IP54 / IP55', 'Bathrooms, restrooms'],
        ['IP67', 'Outdoor (garages, streets, landscaping)'],
        ['IP68', 'Underwater (pools)'],
      ],
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Diffusers (light distribution control)' },
    {
      type: 'table',
      headers: ['Type', 'Characteristics'],
      rows: [
        ['Prismatic', 'Protects against dust/moisture — standard domestic use'],
        ['Opal', 'Milky-white opal glass, Lambertian distribution — significant scattering loss'],
        ['Parabolic (mirror)', 'Built-in reflector to direct light — banks, commercial spaces'],
      ],
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Work plane and uniformity' },
    {
      type: 'text',
      text: "The work plane is the horizontal plane where visual tasks are performed. Once the average illuminance is calculated, its uniformity must be checked.",
    },
    { type: 'formula', text: 'Uniformity = E_min / E_avg' },
    {
      type: 'text',
      text: "Uniformity must be between 0.5 and 1. The average illuminance E_avg must stay within 15% of the E_required value set by the code.",
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Lumen method' },
    {
      type: 'text',
      text: "This is the standard manual method for calculating how many luminaires to install in a room.",
    },
    {
      type: 'formula',
      text: 'N = (E × A) / (F × UF × MF)',
    },
    {
      type: 'text',
      text: 'N = number of luminaires · E = required illuminance (lux) · A = area (m²) · F = total luminaire flux (lumens) · UF = utilization factor (0.4–0.6) · MF = maintenance factor (0.4–0.8).',
    },
    {
      type: 'image',
      source: require('../../../../assets/diagrams/en/lighting_lumen_method_steps.png'),
      caption: 'Full lumen method walkthrough',
      height: 620,
    },
    {
      type: 'note',
      text: "⚠️ Rule: never choose a prime number for N — it prevents forming a regular rectangular grid.",
    },
    { type: 'subheading', text: 'Required lux by room type (excerpt)' },
    {
      type: 'table',
      headers: ['Room', 'Lux'],
      rows: [
        ['Bathroom / Corridor', '100'],
        ['Kitchen', '300'],
        ['Office / Classroom', '500'],
        ['Laboratory', '750'],
      ],
    },
    {
      type: 'image',
      source: require('../../../../assets/reference/iecc_2021_table.png'),
      caption: 'IECC 2021 — Detailed illuminance levels by room type',
      height: 320,
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Worked example — 10 × 10 m office' },
    {
      type: 'text',
      text: 'Required illuminance: 500 lux. Chosen luminaire: 4 lamps of 1200 lm each → F = 4800 lm. UF = 0.5, MF = 0.8.',
    },
    { type: 'formula', text: 'N = (500 × 100) / (4800 × 0.5 × 0.8) = 23.1 → rounded to 24 (not prime)' },
    {
      type: 'text',
      text: 'Layout: 5 × 5 grid (25 luminaires, each dimension rounded to its square root), 2 m spacing, first row offset 1 m from the wall.',
    },
    { type: 'divider' },

    { type: 'heading', text: '🔷 Polar curves' },
    {
      type: 'text',
      text: "The polar curve shows how a luminaire distributes its light by angle: a narrow beam gives a tight curve (spotlight), a wide beam gives a spread-out curve (floodlight). Always check the manufacturer's photometric (IES) file before choosing a luminaire.",
    },
    {
      type: 'image',
      source: require('../../../../assets/reference/polar_curve.png'),
      caption: 'Examples of polar curves and light distributions',
      height: 320,
    },
    {
      type: 'note',
      text: "💡 Recommended spacing-to-height ratio (SHR) ≈ 0.5, never above 1. Spacing between luminaires should be double the distance to the wall.",
    },
  ],
};
