export type Phase = 'R' | 'Y' | 'B';
export const PHASES: Phase[] = ['R', 'Y', 'B'];

export type Category = 'Éclairage' | 'Prises' | 'Climatisation' | 'Autre';
export const CATEGORIES: Category[] = ['Éclairage', 'Prises', 'Climatisation', 'Autre'];

// Category identifiers stay in French internally (used as data/storage keys) —
// this map only supplies the English display label.
export const CATEGORY_LABELS_EN: Record<Category, string> = {
  Éclairage: 'Lighting',
  Prises: 'Receptacles',
  Climatisation: 'Air conditioning',
  Autre: 'Other',
};

export const DEFAULT_DEMAND_FACTORS: Record<Category, number> = {
  Éclairage: 1,
  Prises: 0.85,
  Climatisation: 1,
  Autre: 1,
};

export type PanelCircuit = {
  id: string;
  name: string;
  phase: Phase;
  category: Category;
  connectedKva: string;
};

export function makePanelCircuit(id: string, name = '', phase: Phase = 'R', category: Category = 'Éclairage', connectedKva = ''): PanelCircuit {
  return { id, name, phase, category, connectedKva };
}

export { STANDARD_BREAKER_SIZES_A, nextStandardBreaker } from './breakers';
