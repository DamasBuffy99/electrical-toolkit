export type ClearanceRow = {
  label: string;
  cond1: number; // meters
  cond2: number;
  cond3: number;
};

// NEC 110.26(A)(1) [low voltage] + NEC 110-34 / OSHA Table S-2 [medium voltage]
export const CLEARANCE_TABLE: ClearanceRow[] = [
  { label: '0 – 150 V', cond1: 0.9, cond2: 0.9, cond3: 0.9 },
  { label: '151 – 600 V', cond1: 0.9, cond2: 1.0, cond3: 1.2 },
  { label: '601 – 1000 V', cond1: 0.9, cond2: 1.2, cond3: 1.5 },
  { label: '601 V – 2.5 kV', cond1: 0.914, cond2: 1.219, cond3: 1.524 },
  { label: '2.5 – 9 kV', cond1: 1.219, cond2: 1.524, cond3: 1.829 },
  { label: '9 – 25 kV', cond1: 1.524, cond2: 1.829, cond3: 2.438 },
  { label: '25 – 75 kV', cond1: 1.829, cond2: 2.438, cond3: 3.048 },
  { label: '> 75 kV', cond1: 2.438, cond2: 3.048, cond3: 3.658 },
];

export type GeneratorRoomType = {
  type: string;
  length: number;
  width: number;
  approxRange: string;
  approxRangeEn: string;
};

export const GENERATOR_ROOM_TYPES: GeneratorRoomType[] = [
  { type: 'A', length: 3.5, width: 2.8, approxRange: '~ jusqu’à 200 kVA', approxRangeEn: '~ up to 200 kVA' },
  { type: 'B', length: 4.7, width: 3.25, approxRange: '~ 200 à 650 kVA', approxRangeEn: '~ 200 to 650 kVA' },
  { type: 'C', length: 5.7, width: 3.75, approxRange: '~ 650 kVA et plus', approxRangeEn: '~ 650 kVA and above' },
];

export const STANDARD_TRANSFORMER_SIZES_KVA = [500, 800, 1000, 1250, 1500, 2000, 2500];
