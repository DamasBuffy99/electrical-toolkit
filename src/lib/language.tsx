import React, { createContext, useContext } from 'react';
import { usePersistedField } from './storage';

export type Lang = 'fr' | 'en';

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  /** Pick a value depending on the current language: t(frValue, enValue) */
  t: <T,>(fr: T, en: T) => T;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = usePersistedField<Lang>('app:language', 'fr');

  const value: LanguageContextValue = {
    lang,
    setLang,
    toggle: () => setLang((prev) => (prev === 'fr' ? 'en' : 'fr')),
    t: (fr, en) => (lang === 'fr' ? fr : en),
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}
