"use client";

type Theme = "dark" | "light";

type ThemeToggleProps = {
  readonly label: string;
};

const storageKey = "portfolio-theme";

function isTheme(value: string | undefined): value is Theme {
  return value === "dark" || value === "light";
}

function getPreferredTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function getCurrentTheme(): Theme {
  const currentTheme = document.documentElement.dataset.theme;

  if (isTheme(currentTheme)) {
    return currentTheme;
  }

  return getPreferredTheme();
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  window.localStorage.setItem(storageKey, theme);
}

export function ThemeToggle({ label }: ThemeToggleProps) {
  function handleToggle() {
    const nextTheme: Theme = getCurrentTheme() === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
  }

  return (
    <button className="theme-toggle" type="button" aria-label={label} title={label} onClick={handleToggle}>
      <svg aria-hidden="true" viewBox="0 0 24 24" className="theme-toggle__icon theme-toggle__icon--moon">
        <path data-fill="true" d="M12 4.5a7.5 7.5 0 1 0 7.5 7.5A5.6 5.6 0 0 1 12 4.5Z" />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 24 24" className="theme-toggle__icon theme-toggle__icon--sun">
        <path d="M12 5.5V3m0 18v-2.5M18.4 5.6l1.7-1.7M3.9 20.1l1.7-1.7M20.5 12H23M1 12h2.5M18.4 18.4l1.7 1.7M3.9 3.9l1.7 1.7M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" />
      </svg>
      <span className="sr-only">{label}</span>
    </button>
  );
}
