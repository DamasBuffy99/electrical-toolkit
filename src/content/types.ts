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
  /** `focus` = area to zoom into, as fractions of the image (0–1): the panel shows the whole image, then zooms on it. */
  | { type: 'image'; source: any; caption?: string; height?: number; focus?: Focus }
  | { type: 'illustration'; name: string; props?: Record<string, string | number | boolean>; caption?: string };

export type Focus = { x: number; y: number; w: number; h: number };

export type TopicContent = {
  title: string;
  subtitle?: string;
  blocks: NoteBlock[];
};
