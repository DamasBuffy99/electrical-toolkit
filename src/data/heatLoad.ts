/**
 * Data for the simplified heat-load method of the IEPF guide
 * "Efficacité énergétique de la climatisation en région tropicale – Tome 1", chapter 1.
 */

export type Orientation = 'N' | 'S' | 'E' | 'O' | 'NE' | 'NO' | 'SE' | 'SO';
export const ORIENTATIONS: Orientation[] = ['N', 'S', 'E', 'O', 'NE', 'NO', 'SE', 'SO'];
export const ORIENTATION_EN: Record<Orientation, string> = { N: 'N', S: 'S', E: 'E', O: 'W', NE: 'NE', NO: 'NW', SE: 'SE', SO: 'SW' };

/** One hour of table 1.14: horizontal radiation and [wall, glazing] radiation per orientation (W/m²). */
type SolarRow = { hor: number } & Record<Orientation, [number, number]>;
export type SolarTableKey = 'lat4feb' | 'lat8mar' | 'lat16apr';

const row = (hor: number, ...v: number[]): SolarRow => ({
  hor,
  N: [v[0], v[1]],
  S: [v[2], v[3]],
  E: [v[4], v[5]],
  O: [v[6], v[7]],
  NE: [v[8], v[9]],
  NO: [v[10], v[11]],
  SE: [v[12], v[13]],
  SO: [v[14], v[15]],
});

/** Tables 1.14a/b/c of the guide, from 7:00 to 17:00. */
export const SOLAR_TABLES: Record<SolarTableKey, { label: string; labelEn: string; hours: Record<number, SolarRow> }> = {
  lat4feb: {
    label: 'Tableau 1.14a — 4° N, février',
    labelEn: 'Table 1.14a — 4° N, February',
    hours: {
      7: row(111, 62, 53, 64, 55, 71, 61, 62, 53, 70, 60, 62, 53, 66, 57, 62, 53),
      8: row(263, 131, 113, 146, 126, 176, 152, 131, 113, 173, 149, 131, 113, 153, 131, 131, 113),
      9: row(385, 186, 160, 212, 182, 249, 214, 186, 160, 249, 214, 186, 160, 211, 182, 186, 160),
      10: row(500, 223, 191, 269, 232, 298, 257, 223, 191, 309, 266, 223, 191, 243, 209, 223, 191),
      11: row(625, 258, 222, 330, 284, 317, 273, 258, 222, 351, 302, 268, 230, 258, 222, 258, 222),
      12: row(686, 272, 234, 359, 309, 272, 234, 272, 234, 333, 287, 333, 287, 272, 234, 272, 234),
      13: row(686, 256, 220, 352, 303, 256, 220, 335, 288, 268, 231, 380, 326, 256, 220, 256, 220),
      14: row(563, 216, 186, 290, 249, 216, 186, 335, 288, 216, 186, 352, 303, 216, 186, 249, 214),
      15: row(395, 166, 143, 207, 178, 166, 143, 264, 227, 166, 143, 265, 228, 166, 143, 206, 177),
      16: row(201, 150, 129, 134, 115, 150, 129, 100, 86, 150, 129, 103, 89, 150, 129, 126, 109),
      17: row(54, 31, 27, 32, 27, 31, 27, 33, 29, 31, 27, 33, 28, 31, 27, 32, 28),
    },
  },
  lat8mar: {
    label: 'Tableau 1.14b — 8° N, mars',
    labelEn: 'Table 1.14b — 8° N, March',
    hours: {
      7: row(604, 129, 103, 164, 131, 585, 468, 127, 102, 476, 380, 127, 102, 426, 341, 127, 102),
      8: row(410, 158, 126, 177, 141, 312, 249, 158, 126, 280, 224, 158, 126, 253, 203, 158, 126),
      9: row(639, 225, 180, 267, 213, 450, 360, 225, 180, 414, 331, 225, 180, 355, 284, 225, 180),
      10: row(800, 254, 203, 322, 258, 482, 385, 254, 203, 463, 371, 254, 203, 367, 293, 254, 203),
      11: row(870, 284, 227, 362, 290, 408, 326, 284, 227, 427, 341, 284, 227, 317, 253, 284, 227),
      12: row(836, 283, 226, 357, 285, 283, 226, 283, 226, 335, 268, 335, 268, 283, 226, 283, 226),
      13: row(749, 250, 200, 315, 252, 250, 200, 354, 283, 250, 200, 370, 296, 250, 200, 277, 222),
      14: row(610, 205, 164, 253, 203, 205, 164, 367, 294, 205, 164, 354, 283, 205, 164, 285, 228),
      15: row(437, 154, 123, 182, 146, 154, 123, 308, 247, 154, 123, 283, 226, 154, 123, 243, 194),
      16: row(237, 95, 76, 105, 84, 95, 76, 178, 142, 95, 76, 160, 128, 95, 76, 146, 117),
      17: row(66, 34, 27, 35, 28, 34, 27, 45, 36, 34, 27, 42, 34, 34, 27, 41, 33),
    },
  },
  lat16apr: {
    label: 'Tableau 1.14c — 16° N, avril',
    labelEn: 'Table 1.14c — 16° N, April',
    hours: {
      7: row(252, 121, 97, 113, 90, 187, 149, 113, 90, 159, 127, 113, 90, 171, 137, 113, 90),
      8: row(469, 201, 161, 187, 150, 350, 280, 187, 150, 293, 234, 187, 150, 312, 249, 187, 150),
      9: row(668, 255, 204, 244, 195, 466, 373, 241, 193, 392, 314, 241, 193, 408, 326, 241, 193),
      10: row(806, 283, 226, 280, 224, 483, 386, 271, 217, 419, 335, 271, 217, 422, 338, 271, 217),
      11: row(862, 297, 237, 302, 242, 406, 325, 288, 231, 376, 300, 288, 231, 368, 294, 288, 231),
      12: row(841, 298, 238, 306, 245, 291, 233, 291, 233, 301, 241, 301, 241, 296, 237, 296, 237),
      13: row(730, 280, 224, 284, 227, 274, 219, 359, 287, 274, 219, 337, 269, 274, 219, 331, 265),
      14: row(653, 243, 195, 242, 193, 235, 188, 391, 313, 235, 188, 344, 275, 235, 188, 347, 277),
      15: row(444, 179, 144, 173, 138, 171, 137, 305, 244, 171, 137, 261, 209, 171, 137, 271, 216),
      16: row(248, 111, 89, 104, 84, 104, 83, 181, 145, 104, 83, 154, 123, 104, 83, 163, 130),
      17: row(69, 36, 28, 34, 27, 34, 27, 48, 39, 34, 27, 43, 34, 34, 27, 45, 36),
    },
  },
};
export const HOURS = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

/** Saturation pressure of water vapour (kPa), Magnus formula. */
export function psat(t: number) {
  return 0.61094 * Math.exp((17.625 * t) / (t + 243.04));
}
const P_ATM = 101.325;
/** Moisture content (kg/kg dry air) from dry-bulb and wet-bulb temperatures. */
export function omegaFromWetBulb(t: number, twb: number) {
  const ws = (0.622 * psat(twb)) / (P_ATM - psat(twb));
  return ((2501 - 2.326 * twb) * ws - 1.006 * (t - twb)) / (2501 + 1.86 * t - 4.186 * twb);
}
/** Moisture content (kg/kg dry air) from temperature and relative humidity (%). */
export function omegaFromRh(t: number, rh: number) {
  const pv = (psat(t) * rh) / 100;
  return (0.622 * pv) / (P_ATM - pv);
}

export type CityPreset = {
  id: string;
  name: string;
  country: string;
  countryEn: string;
  table: SolarTableKey;
  te: number;
  we: number;
  ti: number;
  wi: number;
  cosPhi: number;
  note?: string;
  noteEn?: string;
};

const r4 = (x: number) => Math.round(x * 10000) / 10000;

/** Design conditions from tables 1.3 (outdoor), 1.4 (indoor) and 1.19 (power factor). */
export const CITY_PRESETS: CityPreset[] = [
  { id: 'douala', name: 'Douala', country: 'Cameroun', countryEn: 'Cameroon', table: 'lat4feb', te: 32, we: 0.0255, ti: 26, wi: 0.0108, cosPhi: 0.8 },
  {
    id: 'abidjan',
    name: 'Abidjan',
    country: 'Côte d’Ivoire',
    countryEn: 'Côte d’Ivoire',
    table: 'lat4feb',
    te: 32.5,
    we: r4(omegaFromWetBulb(32.5, 27.5)),
    ti: 24.5,
    wi: r4(omegaFromRh(24.5, 65)),
    cosPhi: 0.86,
  },
  {
    id: 'garoua',
    name: 'Garoua',
    country: 'Cameroun',
    countryEn: 'Cameroon',
    table: 'lat8mar',
    te: 39.8,
    we: r4(omegaFromWetBulb(39.8, 23.7)),
    ti: 28.5,
    wi: r4(omegaFromRh(28.5, 51.9)),
    cosPhi: 0.8,
  },
  {
    id: 'korhogo',
    name: 'Korhogo',
    country: 'Côte d’Ivoire',
    countryEn: 'Côte d’Ivoire',
    table: 'lat8mar',
    te: 36,
    we: r4(omegaFromWetBulb(36, 22.5)),
    ti: 26.5,
    wi: r4(omegaFromRh(26.5, 50)),
    cosPhi: 0.86,
  },
  {
    id: 'ouaga',
    name: 'Ouagadougou',
    country: 'Burkina Faso',
    countryEn: 'Burkina Faso',
    table: 'lat16apr',
    te: 39,
    we: r4(omegaFromWetBulb(39, 29.5)),
    ti: 27,
    wi: r4(omegaFromRh(27, 50)),
    cosPhi: 0.8,
    note: 'Conditions intérieures et cos φ absents du guide pour Ouagadougou : 27 °C / 50 % et 0,8 pris par défaut. Table solaire la plus proche : 16° N (avril).',
    noteEn: 'Indoor conditions and cos φ are not given for Ouagadougou: 27 °C / 50 % and 0.8 used by default. Closest solar table: 16° N (April).',
  },
];

/** Table 1.16 — heat given off per person (W) at 25 / 26 / 27 °C: [sensible, latent]. */
export const ACTIVITIES: { id: string; label: string; labelEn: string; values: Record<25 | 26 | 27, [number, number]> }[] = [
  { id: 'rest', label: 'Assis au repos (école, théâtre)', labelEn: 'Seated at rest (school, theatre)', values: { 25: [65, 37], 26: [62, 40], 27: [60, 42] } },
  { id: 'office', label: 'Travail léger (bureau, hôtel)', labelEn: 'Light work (office, hotel)', values: { 25: [67, 49], 26: [63, 59], 27: [56, 60] } },
  { id: 'shop', label: 'Debout, marche lente (magasin)', labelEn: 'Standing, slow walk (shop)', values: { 25: [68, 63], 26: [63, 68], 27: [57, 74] } },
  { id: 'meal', label: 'Repas (restaurant)', labelEn: 'Eating (restaurant)', values: { 25: [77, 84], 26: [71, 90], 27: [64, 97] } },
  { id: 'workshop', label: 'Travail facile (atelier)', labelEn: 'Easy work (workshop)', values: { 25: [80, 140], 26: [72, 148], 27: [67, 153] } },
  { id: 'dance', label: 'Danse (boîte de nuit)', labelEn: 'Dancing (night club)', values: { 25: [88, 161], 26: [80, 169], 27: [75, 174] } },
];

export const PUBLIC_FACTORS = [
  { id: 'men', factor: 1, label: 'Hommes adultes', labelEn: 'Adult men' },
  { id: 'mixed', factor: 0.9, label: 'Public mixte (−10 %)', labelEn: 'Mixed public (−10 %)' },
  { id: 'women', factor: 0.8, label: 'Femmes (−20 %)', labelEn: 'Women (−20 %)' },
  { id: 'children', factor: 0.7, label: 'Enfants (−30 %)', labelEn: 'Children (−30 %)' },
];

/** Table 1.10 — temperature difference across a wall, relative to θe − θi. */
export const DT_TYPES = [
  { id: 'ext', delta: 0, label: 'Extérieur', labelEn: 'Outdoor' },
  { id: 'noncond', delta: -3, label: 'Local non climatisé (−3)', labelEn: 'Non-conditioned room (−3)' },
  { id: 'atticVent', delta: 3, label: 'Comble ventilé (+3)', labelEn: 'Ventilated attic (+3)' },
  { id: 'atticClosed', delta: 12, label: 'Comble non ventilé (+12)', labelEn: 'Unventilated attic (+12)' },
  { id: 'kitchen', delta: 18, label: 'Cuisine (+18)', labelEn: 'Kitchen (+18)' },
];

/** Table 1.11 — absorption coefficient α of opaque surfaces. */
export const ALPHAS = [
  { value: 0.4, label: 'Clair', labelEn: 'Light' },
  { value: 0.7, label: 'Foncé', labelEn: 'Dark' },
  { value: 0.9, label: 'Très foncé', labelEn: 'Very dark' },
];

/** Table 1.13 — reduction factor g of solar protections. */
export const PROTECTIONS = [
  { value: 1, label: 'Aucune', labelEn: 'None' },
  { value: 0.28, label: 'Store ext. toile écrue', labelEn: 'Ext. ecru blind' },
  { value: 0.22, label: 'Store ext. alu / persiennes ext.', labelEn: 'Ext. alu blind / louvres' },
  { value: 0.45, label: 'Store int. baissé', labelEn: 'Int. blind lowered' },
  { value: 0.58, label: 'Persiennes int.', labelEn: 'Int. louvres' },
  { value: 0.63, label: 'Store int. mi-baissé', labelEn: 'Int. blind half lowered' },
];

/** Table 1.12 — solar radiation factor F as a function of k (linear, 0.05 per W/m².K). */
export function radiationFactor(k: number) {
  return Math.max(0, 0.05 * k);
}

/** Table 1.17 — lighting heat (W/m²): [incandescent, fluorescent]. */
export const LIGHTING_DENSITIES = [
  { id: 'store', label: 'Entrepôt, habitat, restaurant', labelEn: 'Warehouse, housing, restaurant', inc: 25, fluo: 8 },
  { id: 'office', label: 'Bureau, salle de cours, hall', labelEn: 'Office, classroom, lobby', inc: 65, fluo: 16 },
  { id: 'lab', label: 'Lecture, informatique, labo, magasin', labelEn: 'Reading, IT, lab, shop', inc: 110, fluo: 24 },
  { id: 'market', label: 'Supermarché, grand bureau aveugle', labelEn: 'Supermarket, large windowless office', inc: 0, fluo: 45 },
];
