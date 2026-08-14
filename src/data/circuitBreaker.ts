export type SafetyMargin = {
  code: string;
  label: string;
  labelEn: string;
  pct: number; // e.g. 25 for +25%
};

export const SAFETY_MARGINS: SafetyMargin[] = [
  { code: 'FC', label: 'FC (+25%)', labelEn: 'FC (+25%)', pct: 25 },
  { code: 'IEC', label: 'IEC (+20%)', labelEn: 'IEC (+20%)', pct: 20 },
  { code: 'NEC', label: 'NEC (+10%, surcharge)', labelEn: 'NEC (+10%, overload)', pct: 10 },
];

export type TripCurve = {
  code: 'B' | 'C' | 'D';
  range: string;
  use: string;
  useEn: string;
};

export const TRIP_CURVES: TripCurve[] = [
  { code: 'B', range: '3 – 5 In', use: 'Charges statiques : éclairage, chauffage, prises', useEn: 'Static loads: lighting, heating, receptacles' },
  { code: 'C', range: '5 – 10 In', use: 'Charges à fort courant de démarrage (moteurs)', useEn: 'Loads with high inrush current (motors)' },
  { code: 'D', range: '10 – 20 In', use: 'Très forts courants de démarrage (transformateurs)', useEn: 'Very high inrush currents (transformers)' },
];

export type BreakerType = {
  code: string;
  name: string;
  nameEn: string;
  desc: string;
  descEn: string;
};

export const BREAKER_TYPES: BreakerType[] = [
  { code: 'MCB', name: 'Miniature Circuit Breaker', nameEn: 'Miniature Circuit Breaker', desc: 'Disjoncteur miniature — usage courant basse puissance', descEn: 'Miniature breaker — common low-power use' },
  { code: 'MCCB', name: 'Molded Case Circuit Breaker', nameEn: 'Molded Case Circuit Breaker', desc: 'Disjoncteur boîtier moulé — puissances plus élevées', descEn: 'Molded case breaker — higher power ratings' },
  { code: 'ACB', name: 'Air Circuit Breaker', nameEn: 'Air Circuit Breaker', desc: 'Disjoncteur à air — tableaux principaux, fortes puissances', descEn: 'Air circuit breaker — main switchboards, high power' },
  {
    code: 'RCD / RCCB',
    name: 'Differential (Résiduel)',
    nameEn: 'Differential (Residual)',
    desc: 'Détecte les fuites de courant vers la terre — pas pour les courts-circuits (utiliser un MCB en complément)',
    descEn: 'Detects current leakage to earth — not for short-circuits (use alongside an MCB)',
  },
];

export type LoadType = {
  name: string;
  nameEn: string;
  curve: 'B' | 'C' | 'D';
};

export const LOAD_TYPES: LoadType[] = [
  { name: 'Éclairage / Chauffage / Prises', nameEn: 'Lighting / Heating / Receptacles', curve: 'B' },
  { name: 'Moteurs', nameEn: 'Motors', curve: 'C' },
  { name: 'Transformateurs', nameEn: 'Transformers', curve: 'D' },
];
