"use client";

import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const label =
    theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      onClick={toggle}
      className="w-9 h-9 rounded-lg border border-border bg-surface flex items-center justify-center text-text transition-colors hover:border-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
      aria-label={label}
      title={label}
    >
      <span className="font-mono text-[15px] leading-none" aria-hidden="true">
        {theme === "dark" ? "◐" : "◑"}
      </span>
    </button>
  );
}
