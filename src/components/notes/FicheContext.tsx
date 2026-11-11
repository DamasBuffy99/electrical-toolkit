import React, { createContext, useContext } from 'react';

/** Lets a story lesson open a reference lesson ("fiche technique") without knowing about navigation. */
type FicheNav = { open: (id: string) => void; title: (id: string) => string | undefined };

const FicheContext = createContext<FicheNav | null>(null);

export function FicheProvider({ value, children }: { value: FicheNav; children: React.ReactNode }) {
  return <FicheContext.Provider value={value}>{children}</FicheContext.Provider>;
}

export function useFicheNav() {
  return useContext(FicheContext);
}
