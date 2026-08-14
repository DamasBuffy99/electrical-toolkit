export type RoomLux = {
  name: string;
  nameEn: string;
  lux: number;
};

export const ROOM_LUX: RoomLux[] = [
  { name: 'Salle de bain / Couloir', nameEn: 'Bathroom / Corridor', lux: 100 },
  { name: 'Cuisine', nameEn: 'Kitchen', lux: 300 },
  { name: 'Bureau / Salle de classe', nameEn: 'Office / Classroom', lux: 500 },
  { name: 'Laboratoire', nameEn: 'Laboratory', lux: 750 },
];

export type LampType = {
  name: string;
  nameEn: string;
  lumensPerWatt: number;
};

export const LAMP_TYPES: LampType[] = [
  { name: 'Incandescente', nameEn: 'Incandescent', lumensPerWatt: 15 },
  { name: 'CFL', nameEn: 'CFL', lumensPerWatt: 60 },
  { name: 'Tube fluorescent', nameEn: 'Fluorescent tube', lumensPerWatt: 80 },
  { name: 'HPSV', nameEn: 'HPSV', lumensPerWatt: 125 },
  { name: 'Halogénures métalliques', nameEn: 'Metal halide', lumensPerWatt: 120 },
  { name: 'LED', nameEn: 'LED', lumensPerWatt: 110 },
];

// Common factorizations of N used to build a rows x columns grid.
export function factorPairsClosestToSquare(n: number): { rows: number; cols: number } {
  const rounded = Math.max(1, Math.round(n));
  let best = { rows: 1, cols: rounded };
  let bestDiff = Infinity;
  for (let rows = 1; rows <= rounded; rows++) {
    if (rounded % rows === 0) {
      const cols = rounded / rows;
      const diff = Math.abs(rows - cols);
      if (diff < bestDiff) {
        bestDiff = diff;
        best = { rows, cols };
      }
    }
  }
  return best;
}

export function isPrime(n: number): boolean {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
