export type NoteBlock =
  | { type: 'heading'; text: string }
  | { type: 'subheading'; text: string }
  | { type: 'text'; text: string }
  | { type: 'bullets'; items: string[] }
  | { type: 'formula'; text: string }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'note'; text: string }
  | { type: 'divider' }
  | { type: 'image'; source: any; caption?: string; height?: number };

export type TopicContent = {
  title: string;
  subtitle?: string;
  blocks: NoteBlock[];
};
