"use client";

import { createContext, useContext } from "react";

const ContentReadyContext = createContext(false);

export function ContentReadyProvider({
  ready,
  children,
}: {
  ready: boolean;
  children: React.ReactNode;
}) {
  return (
    <ContentReadyContext.Provider value={ready}>
      {children}
    </ContentReadyContext.Provider>
  );
}

export function useContentReady() {
  return useContext(ContentReadyContext);
}
