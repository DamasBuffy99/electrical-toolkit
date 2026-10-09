import { CLIM_FIGS } from '../../climFigs';
import type { NoteBlock } from '../../types';

/** A page of the IEPF book, shown whole then zoomed on the figure or table `key`. */
export function fig(key: keyof typeof CLIM_FIGS | string, caption: string, height = 440): NoteBlock {
  const f = CLIM_FIGS[key];
  if (!f) throw new Error(`Unknown clim figure ${key}`);
  return { type: 'image', source: f.source, focus: f.focus, caption, height };
}
