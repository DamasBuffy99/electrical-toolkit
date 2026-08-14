import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useRef, useState, Dispatch, SetStateAction } from 'react';

export async function loadJSON<T>(key: string, fallback: T): Promise<T> {
  try {
    const raw = await AsyncStorage.getItem(key);
    if (raw == null) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export async function saveJSON(key: string, value: unknown): Promise<void> {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch {
    // best-effort only
  }
}

export async function removeKey(key: string): Promise<void> {
  try {
    await AsyncStorage.removeItem(key);
  } catch {
    // best-effort only
  }
}

/**
 * Behaves like useState, but automatically restores the last saved value
 * from local storage on mount and persists every change back to it.
 */
export function usePersistedField<T>(key: string, initialValue: T): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState<T>(initialValue);
  const hydrated = useRef(false);

  useEffect(() => {
    let cancelled = false;
    loadJSON<T>(key, initialValue).then((value) => {
      if (!cancelled) {
        setState(value);
        hydrated.current = true;
      }
    });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  useEffect(() => {
    if (!hydrated.current) return;
    saveJSON(key, state);
  }, [key, state]);

  return [state, setState];
}
