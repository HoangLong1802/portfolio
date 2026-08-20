"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useSyncExternalStore, type ReactNode } from "react";
import { portfolioContent } from "@/content/portfolio";
import { isSupportedLocale } from "@/lib/portfolio";
import type { Locale, PortfolioContent } from "@/types/portfolio";

const storageKey = "portfolio-locale";
const localeListeners = new Set<() => void>();

function subscribeToLocale(listener: () => void) {
  localeListeners.add(listener);

  function handleStorage(event: StorageEvent) {
    if (event.key === storageKey) listener();
  }

  window.addEventListener("storage", handleStorage);
  return () => {
    localeListeners.delete(listener);
    window.removeEventListener("storage", handleStorage);
  };
}

function getBrowserLocale(fallback: Locale): Locale {
  const storedLocale = window.localStorage.getItem(storageKey);
  return storedLocale && isSupportedLocale(storedLocale) ? storedLocale : fallback;
}

type PortfolioLocaleContextValue = {
  readonly content: PortfolioContent;
  readonly locale: Locale;
  readonly setLocale: (locale: Locale) => void;
};

const PortfolioLocaleContext = createContext<PortfolioLocaleContextValue | undefined>(undefined);

type PortfolioLocaleProviderProps = {
  readonly children: ReactNode;
  readonly initialLocale: Locale;
};

export function PortfolioLocaleProvider({ children, initialLocale }: PortfolioLocaleProviderProps) {
  const locale = useSyncExternalStore(
    subscribeToLocale,
    () => getBrowserLocale(initialLocale),
    () => initialLocale,
  );

  const setLocale = useCallback((nextLocale: Locale) => {
    window.localStorage.setItem(storageKey, nextLocale);
    localeListeners.forEach((listener) => listener());
  }, []);

  useEffect(() => {
    document.documentElement.lang = portfolioContent[locale].lang;
  }, [locale]);

  const value = useMemo<PortfolioLocaleContextValue>(() => ({
    content: portfolioContent[locale],
    locale,
    setLocale,
  }), [locale, setLocale]);

  return <PortfolioLocaleContext.Provider value={value}>{children}</PortfolioLocaleContext.Provider>;
}

export function usePortfolioLocale(): PortfolioLocaleContextValue {
  const context = useContext(PortfolioLocaleContext);
  if (!context) throw new Error("usePortfolioLocale must be used within PortfolioLocaleProvider");
  return context;
}

export function LocalizedSkipLink() {
  const { content } = usePortfolioLocale();
  return <a className="skip-link" href="#main-content">{content.a11y.skipToContent}</a>;
}
