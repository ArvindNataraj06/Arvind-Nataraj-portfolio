"use client";

import { useSyncExternalStore } from "react";

const storageKey = "portfolio-theme";
const themeEvent = "portfolio-theme-change";

function getTheme() {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function getServerTheme() {
  return "dark" as const;
}

function subscribe(onChange: () => void) {
  function syncStorage(event: StorageEvent) {
    if (event.key !== storageKey && event.key !== null) return;
    document.documentElement.dataset.theme =
      event.newValue === "light" ? "light" : "dark";
    onChange();
  }

  window.addEventListener(themeEvent, onChange);
  window.addEventListener("storage", syncStorage);
  return () => {
    window.removeEventListener(themeEvent, onChange);
    window.removeEventListener("storage", syncStorage);
  };
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme);

  function toggleTheme() {
    const nextTheme = getTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    try {
      localStorage.setItem(storageKey, nextTheme);
    } catch {
      // The toggle still works when the browser blocks storage.
    }
    window.dispatchEvent(new Event(themeEvent));
  }

  return (
    <button
      type="button"
      aria-label="Dark mode"
      aria-pressed={theme === "dark"}
      onClick={toggleTheme}
      className="min-h-11 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground hover:border-accent"
    >
      Dark mode: {theme === "dark" ? "on" : "off"}
    </button>
  );
}
