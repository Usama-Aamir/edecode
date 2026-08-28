"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { flushSync } from "react-dom";

type Theme = "dark" | "light";

type ViewTransitionDocument = Document & {
  startViewTransition?: (update: () => void) => { finished: Promise<void> };
};

const ThemeContext = createContext<{
  theme: Theme;
  toggle: () => void;
} | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const root = document.documentElement;
    const initial = (root.getAttribute("data-theme") as Theme) || "dark";
    setTheme(initial);
  }, []);

  const toggle = () => {
    const root = document.documentElement;
    const next = theme === "dark" ? "light" : "dark";
    const updateTheme = () => {
      flushSync(() => setTheme(next));
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch {}
    };
    const transitionDocument = document as ViewTransitionDocument;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!transitionDocument.startViewTransition || reduceMotion) {
      updateTheme();
      return;
    }

    if (root.classList.contains("curtain-down")) return;
    root.classList.add("curtain-down");
    const transition = transitionDocument.startViewTransition(updateTheme);
    void transition.finished.finally(() => {
      root.classList.remove("curtain-down");
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
