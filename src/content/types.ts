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
  /** `focus` = area to zoom into, as fractions of the image (0–1): the panel shows the whole image, then zooms on it. */
  | { type: 'image'; source: any; caption?: string; height?: number; focus?: Focus }
  | { type: 'illustration'; name: string; props?: Record<string, string | number | boolean>; caption?: string };

export type Focus = { x: number; y: number; w: number; h: number };

export type TopicContent = {
  title: string;
  subtitle?: string;
  blocks: NoteBlock[];
};
