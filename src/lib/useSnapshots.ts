import { useEffect, useState } from 'react';
import { loadJSON, saveJSON } from './storage';

export type Snapshot<T> = {
  id: string;
  name: string;
  savedAt: number;
  data: T;
};

export function useSnapshots<T>(storageKey: string) {
  const [snapshots, setSnapshots] = useState<Snapshot<T>[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    loadJSON<Snapshot<T>[]>(storageKey, []).then((list) => {
      if (!cancelled) {
        setSnapshots(list);
        setLoaded(true);
      }
    });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageKey]);

  function persist(list: Snapshot<T>[]) {
    setSnapshots(list);
    saveJSON(storageKey, list);
  }

  function save(name: string, data: T) {
    const entry: Snapshot<T> = { id: `${Date.now()}`, name, savedAt: Date.now(), data };
    persist([entry, ...snapshots]);
  }

  function remove(id: string) {
    persist(snapshots.filter((s) => s.id !== id));
  }

  return { snapshots, loaded, save, remove };
}
