export type NoteBlock =
  | { type: 'heading'; text: string }
  | { type: 'subheading'; text: string }
  | { type: 'text'; text: string }
  | { type: 'bullets'; items: string[] }
  | { type: 'formula'; text: string }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'note'; text: string }
  /** Flags an inconsistency or a likely error in the source document. */
  | { type: 'warning'; text: string }
  /** Practice problem with a hidden, step-by-step solution. */
  | { type: 'exercise'; title?: string; question: string; solution: string[] }
  | { type: 'divider' }
  /** Story: where and when the scene takes place ("Week 2 · On site"). */
  | { type: 'scene'; text: string }
  /** Story: a line spoken by a character; the engineer explains, the client asks. */
  | { type: 'dialogue'; speaker: string; role: 'engineer' | 'client' | 'team'; text: string }
  /** Story: how things are done in West Africa (utility, FCFA, NF C 15-100…). */
  | { type: 'regional'; text: string; title?: string }
  /** Story: link to a reference lesson ("fiche technique") of the electrical course. */
  | { type: 'fiche'; id: string; why?: string }
  /** What the reader will learn in this step. */
  | { type: 'objectives'; items: string[] }
  /** Key numbers of the step, shown as chips. */
  | { type: 'keyfigures'; items: { value: string; label: string }[] }
  /** A design decision: what was chosen, why, and what was rejected. */
  | { type: 'decision'; title: string; choice: string; reasons: string[]; rejected?: string }
  /** A step-by-step calculation; formulas use the MathText markup. */
  | { type: 'calc'; title?: string; steps: { label: string; formula: string }[]; result: string }
  /** The same question answered by several standards. */
  | { type: 'norms'; title?: string; rows: { norm: string; rule: string; result: string }[] }
  /** Panel load schedule laid out like the design-office spreadsheet. */
  | { type: 'panelSchedule'; panel: PanelSchedule }
  /** Room-by-room heat load sheet (W), laid out like the design-office spreadsheet. */
  | { type: 'heatLoadSheet'; sheet: HeatLoadSheet }
  /** HVAC equipment schedule (indoor/outdoor units, capacities, electrical data). */
  | { type: 'equipmentSchedule'; schedule: EquipmentSchedule }
  /** `focus` = area to zoom into, as fractions of the image (0–1): the panel shows the whole image, then zooms on it. */
  | { type: 'image'; source: any; caption?: string; height?: number; focus?: Focus }
  | { type: 'illustration'; name: string; props?: Record<string, string | number | boolean>; caption?: string };

export type PanelCircuit = {
  desc: string;
  /** Total kVA of the circuit (a 3-pole circuit is spread equally over R, Y, B). */
  kva?: number;
  cb?: string;
  poles?: 1 | 2 | 3;
  wire?: string;
  spare?: boolean;
};

export type PanelSchedule = {
  name: string;
  location: string;
  voltage: string;
  panelType: string;
  mounting?: string;
  scRating: string;
  main: string;
  feeder?: string;
  /** Single-phase board: one kVA column instead of R, Y, B. */
  singlePhase?: boolean;
  /** Odd circuits (1, 3, 5…) on the left, even circuits on the right. */
  left: PanelCircuit[];
  right: PanelCircuit[];
  /** Demand after diversity; if absent, total × demandFactor. */
  demandKva?: number;
  demandFactor?: number;
  /** Margin for future circuits (default 15 %). */
  spareMargin?: number;
  /** Line voltage used for the line current (default 400 V, or 230 V for single-phase). */
  lineVoltage?: number;
};

/** One room of a heat load sheet; every gain in W. */
export type HeatLoadRoom = {
  name: string;
  area: number;
  /** Walls + roof: transmission and sun on opaque surfaces. */
  walls: number;
  /** Glazing: transmission + solar. */
  glazing: number;
  /** Products brought in and cooled (cold rooms), respiration of fruit, W. */
  product?: number;
  people: number;
  lighting: number;
  equipment: number;
  /** Fresh air / infiltration, sensible part. */
  air: number;
  peopleLat: number;
  airLat: number;
  /** Other latent gains (cooking, products…). */
  otherLat?: number;
  /** Unit chosen for the room, e.g. "Split 18 000 BTU/h". */
  selected?: string;
  /** Nominal capacity of the chosen unit (W), to check coverage. */
  selectedW?: number;
};

export type HeatLoadSheet = {
  project: string;
  location: string;
  outdoor: string;
  indoor: string;
  peakHour?: string;
  /** Safety margin added to the total (default 0.05). */
  margin?: number;
  rooms: HeatLoadRoom[];
  /** Diversity applied to the sum of rooms for the central plant (default 1). */
  diversity?: number;
  /** Compressor running hours per day (cold rooms): plant = total x 24 / runHours. */
  runHours?: number;
};

export type EquipmentRow = {
  tag: string;
  location: string;
  type: string;
  /** Cooling capacity, kW. */
  cooling: number;
  airflow?: number;
  refrigerant?: string;
  supply: string;
  /** Absorbed electrical power, kW. */
  power: number;
  current?: number;
  protection?: string;
  note?: string;
};

export type EquipmentSchedule = {
  title: string;
  project: string;
  conditions?: string;
  rows: EquipmentRow[];
};

export type Focus ={ x: number; y: number; w: number; h: number };

export type TopicContent = {
  title: string;
  subtitle?: string;
  blocks: NoteBlock[];
};
