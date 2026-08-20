"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { usePortfolioLocale } from "../localization/portfolio-locale-provider";

type ActiveSectionContextValue = {
  readonly activeHref: string;
  readonly navigateToHref: (href: string) => void;
};

type ObservedSection = {
  readonly element: Element;
  readonly href: string;
};

const ActiveSectionContext = createContext<ActiveSectionContextValue | undefined>(undefined);

type ActiveSectionProviderProps = {
  readonly children: ReactNode;
};

function getNavigationHref(hash: string, chapterHrefs: readonly string[]): string | undefined {
  if (chapterHrefs.includes(hash)) return hash;

  let targetId = "";
  try {
    targetId = hash.startsWith("#") ? decodeURIComponent(hash.slice(1)) : "";
  } catch {
    return undefined;
  }

  const target = targetId ? document.getElementById(targetId) : null;
  const parentId = target?.getAttribute("data-navigation-parent");
  const parentHref = parentId ? `#${parentId}` : undefined;

  return parentHref && chapterHrefs.includes(parentHref) ? parentHref : undefined;
}

function getClosestSection(sections: readonly ObservedSection[], visibleHrefs?: ReadonlySet<string>) {
  const readingLine = window.innerHeight * 0.3;
  const candidates = visibleHrefs?.size
    ? sections.filter((section) => visibleHrefs.has(section.href))
    : sections;

  return candidates
    .map((section) => {
      const rect = section.element.getBoundingClientRect();
      const distance = rect.top <= readingLine && rect.bottom >= readingLine
        ? 0
        : Math.min(Math.abs(rect.top - readingLine), Math.abs(rect.bottom - readingLine));

      return { ...section, distance };
    })
    .sort((first, second) => first.distance - second.distance)[0];
}

export function ActiveSectionProvider({ children }: ActiveSectionProviderProps) {
  const { content } = usePortfolioLocale();
  const chapterHrefs = useMemo(
    () => content.home.scrollNavigation.chapters.map((chapter) => chapter.href),
    [content.home.scrollNavigation.chapters],
  );
  const [activeHref, setActiveHref] = useState<string>(chapterHrefs[0] ?? "#home");
  const navigationStarterRef = useRef<(href: string) => void>(() => undefined);

  const navigateToHref = useCallback((href: string) => {
    navigationStarterRef.current(href);
  }, []);

  useEffect(() => {
    const sections = chapterHrefs.reduce<ObservedSection[]>((items, href) => {
      const element = document.querySelector(href);
      if (element) items.push({ element, href });
      return items;
    }, []);
    const visibleHrefs = new Set<string>();
    let lockedHref: string | undefined;
    let settleFrame = 0;
    let fallbackFrame = 0;
    let scrollEndListening = false;

    function syncFromGeometry() {
      if (lockedHref) return;
      const closestSection = getClosestSection(sections, visibleHrefs);
      if (closestSection) setActiveHref(closestSection.href);
    }

    function stopSettleMonitor() {
      window.cancelAnimationFrame(settleFrame);
      settleFrame = 0;
      if (scrollEndListening) {
        window.removeEventListener("scrollend", releaseNavigationLock);
        scrollEndListening = false;
      }
    }

    function releaseNavigationLock() {
      stopSettleMonitor();
      lockedHref = undefined;
      syncFromGeometry();
    }

    function monitorNavigationEnd() {
      stopSettleMonitor();

      if ("onscrollend" in window) {
        window.addEventListener("scrollend", releaseNavigationLock, { once: true });
        scrollEndListening = true;
      }

      const startedAt = performance.now();
      let lastPosition = window.scrollY;
      let stableFrames = 0;

      function checkPosition(now: number) {
        const currentPosition = window.scrollY;
        stableFrames = Math.abs(currentPosition - lastPosition) < 0.5 ? stableFrames + 1 : 0;
        lastPosition = currentPosition;

        if ((stableFrames >= 5 && now - startedAt > 120) || now - startedAt > 1800) {
          releaseNavigationLock();
          return;
        }

        settleFrame = window.requestAnimationFrame(checkPosition);
      }

      settleFrame = window.requestAnimationFrame(checkPosition);
    }

    function startNavigation(href: string) {
      const navigationHref = getNavigationHref(href, chapterHrefs);
      if (!navigationHref) return;

      lockedHref = navigationHref;
      setActiveHref(navigationHref);
      monitorNavigationEnd();
    }

    function syncHash() {
      const navigationHref = getNavigationHref(window.location.hash, chapterHrefs);
      if (navigationHref) startNavigation(navigationHref);
    }

    function scheduleFallbackSync() {
      if (fallbackFrame) return;
      fallbackFrame = window.requestAnimationFrame(() => {
        fallbackFrame = 0;
        syncFromGeometry();
      });
    }

    navigationStarterRef.current = startNavigation;
    syncHash();

    let observer: IntersectionObserver | undefined;
    const IntersectionObserverConstructor = Reflect.get(window, "IntersectionObserver") as
      | typeof IntersectionObserver
      | undefined;
    if (IntersectionObserverConstructor) {
      observer = new IntersectionObserverConstructor(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) visibleHrefs.add(`#${entry.target.id}`);
            else visibleHrefs.delete(`#${entry.target.id}`);
          });
          syncFromGeometry();
        },
        { rootMargin: "-18% 0px -58% 0px", threshold: [0, 0.05, 0.15, 0.3, 0.5] },
      );
      sections.forEach((section) => observer?.observe(section.element));
    } else {
      window.addEventListener("resize", scheduleFallbackSync);
      window.addEventListener("scroll", scheduleFallbackSync, { passive: true });
      scheduleFallbackSync();
    }

    window.addEventListener("hashchange", syncHash);

    return () => {
      navigationStarterRef.current = () => undefined;
      observer?.disconnect();
      stopSettleMonitor();
      window.cancelAnimationFrame(fallbackFrame);
      window.removeEventListener("hashchange", syncHash);
      window.removeEventListener("resize", scheduleFallbackSync);
      window.removeEventListener("scroll", scheduleFallbackSync);
    };
  }, [chapterHrefs]);

  const value = useMemo(() => ({ activeHref, navigateToHref }), [activeHref, navigateToHref]);
  return <ActiveSectionContext.Provider value={value}>{children}</ActiveSectionContext.Provider>;
}

export function useActiveSection(): ActiveSectionContextValue {
  const context = useContext(ActiveSectionContext);
  if (!context) throw new Error("useActiveSection must be used within ActiveSectionProvider");
  return context;
}
