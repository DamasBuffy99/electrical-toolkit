// Common IEC low-voltage breaker frame ratings (A).
export const STANDARD_BREAKER_SIZES_A = [
  6, 10, 16, 20, 25, 32, 40, 50, 63, 80, 100, 125, 160, 200, 250, 320, 400, 500, 630, 800, 1000, 1250,
];

export function nextStandardBreaker(amps: number): number | null {
  for (const size of STANDARD_BREAKER_SIZES_A) {
    if (size >= amps) return size;
  }
  return null;
}

export function previousStandardBreaker(amps: number): number | null {
  let prev: number | null = null;
  for (const size of STANDARD_BREAKER_SIZES_A) {
    if (size >= amps) return prev;
    prev = size;
  }
  return prev;
}
