export type NotesTopic = {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  titleEn: string;
  subtitleEn: string;
  /** Shown at the end of the lesson to explain why the next one follows. */
  transition?: string;
  transitionEn?: string;
};
