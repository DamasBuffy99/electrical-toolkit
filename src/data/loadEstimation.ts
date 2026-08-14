export type BuildingType = {
  code: string;
  name: string;
  nameEn: string;
  vaPerM2: number;
  demandFactor: number;
};

export const BUILDING_TYPES: BuildingType[] = [
  { code: 'C1', name: 'Résidentiel', nameEn: 'Residential', vaPerM2: 145, demandFactor: 0.60 },
  { code: 'C7', name: 'Bureaux', nameEn: 'Offices', vaPerM2: 220, demandFactor: 0.70 },
  { code: 'C8', name: 'Écoles', nameEn: 'Schools', vaPerM2: 180, demandFactor: 0.80 },
  { code: 'C4', name: 'Hôtels', nameEn: 'Hotels', vaPerM2: 240, demandFactor: 0.75 },
  { code: 'C5', name: 'Centres commerciaux', nameEn: 'Shopping malls', vaPerM2: 255, demandFactor: 0.70 },
  { code: 'C18', name: 'Hôpitaux', nameEn: 'Hospitals', vaPerM2: 250, demandFactor: 0.80 },
  { code: 'C21', name: 'Industrie légère', nameEn: 'Light industry', vaPerM2: 280, demandFactor: 0.90 },
  { code: 'C24', name: 'Entrepôts', nameEn: 'Warehouses', vaPerM2: 70, demandFactor: 0.70 },
  { code: 'C13', name: 'Parking intérieur', nameEn: 'Indoor parking', vaPerM2: 30, demandFactor: 0.80 },
  { code: 'C14', name: 'Parking extérieur', nameEn: 'Outdoor parking', vaPerM2: 5, demandFactor: 0.90 },
];

export const STANDARD_TRANSFORMER_SIZES_KVA = [500, 800, 1000, 1250, 1500, 2000, 2500];

export function nextStandardTransformer(estimatedKva: number): number | null {
  for (const size of STANDARD_TRANSFORMER_SIZES_KVA) {
    if (size >= estimatedKva) return size;
  }
  return null;
}
