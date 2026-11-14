"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { dict, LANGS, type Dict, type Lang } from "@/lib/i18n";

type Theme = "dark" | "light";
type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict; theme: Theme; toggleTheme: () => void };

const AppContext = createContext<Ctx | null>(null);

export function Providers({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ru");
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    // Read persisted client-only preferences after hydration (server always renders the defaults).
    /* eslint-disable react-hooks/set-state-in-effect */
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved && LANGS.includes(saved)) setLangState(saved);
    setTheme(document.documentElement.classList.contains("light") ? "light" : "dark");
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      const root = document.documentElement;
      root.classList.add("theme-switching");
      root.classList.toggle("light", next === "light");
      localStorage.setItem("theme", next);
      window.setTimeout(() => root.classList.remove("theme-switching"), 400);
      return next;
    });
  }, []);

  return (
    <AppContext.Provider value={{ lang, setLang, t: dict[lang], theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside Providers");
  return ctx;
}
