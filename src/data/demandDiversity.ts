export type Circuit = {
  id: string;
  name: string;
  connectedKva: string;
  demandFactor: string;
};

export function makeCircuit(id: string, name = '', connectedKva = '', demandFactor = '1'): Circuit {
  return { id, name, connectedKva, demandFactor };
}

// Simultaneity / coincidence factor (ks, always <= 1) applied as a multiplier
// on the summed demanded loads to get the combined (diversified) load.
export const KS_BY_CIRCUIT_COUNT: { max: number; ks: number }[] = [
  { max: 3, ks: 0.9 },
  { max: 5, ks: 0.8 },
  { max: 9, ks: 0.7 },
  { max: Infinity, ks: 0.6 },
];

export function ksForCircuitCount(count: number): number {
  const match = KS_BY_CIRCUIT_COUNT.find((row) => count <= row.max);
  return match ? match.ks : 0.6;
}

export const KS_BY_BUILDING_TYPE: { name: string; nameEn: string; ks: number }[] = [
  { name: 'Résidentiel', nameEn: 'Residential', ks: 0.65 },
  { name: 'Commercial', nameEn: 'Commercial', ks: 0.7 },
  { name: 'Industriel / Agricole', nameEn: 'Industrial / Agricultural', ks: 0.95 },
];
