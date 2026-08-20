import { portfolioContent } from "@/content/portfolio";
import { supportedLocales, type EvidenceLink, type Locale, type Metric, type PortfolioContent, type Project } from "@/types/portfolio";

export const defaultLocale: Locale = "en";

export function getPortfolioContent(locale: Locale): PortfolioContent {
  return portfolioContent[locale];
}

export function getAllProjects(locale: Locale = defaultLocale): readonly Project[] {
  return getPortfolioContent(locale).projects;
}

export function getProjectBySlug(locale: Locale, slug: string): Project | undefined {
  const resolvedSlug = slug === "webbanjewry" || slug === "jewelry-store" ? "jewelry-commerce" : slug;
  return getAllProjects(locale).find((project) => project.slug === resolvedSlug);
}

export function getProjectEvidenceLinks(project: Project): {
  readonly demo: EvidenceLink | undefined;
  readonly source: EvidenceLink | undefined;
} {
  return {
    demo: project.evidence.find(
      (item) => !item.href.startsWith("https://github.com/") && /demo/i.test(`${item.label} ${item.note}`),
    ),
    source: project.evidence.find((item) => item.href.startsWith("https://github.com/")),
  };
}

export function getPublicMetrics(metrics: readonly Metric[]): readonly Metric[] {
  return metrics.filter((metric) => metric.visibility === "public");
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "en" ? "vi" : "en";
}

export function getLocalizedPath(locale: Locale, path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (locale === defaultLocale) {
    return normalizedPath;
  }

  if (normalizedPath === "/") {
    return "/vi";
  }

  return `/vi${normalizedPath}`;
}

export function isSupportedLocale(value: string): value is Locale {
  return supportedLocales.some((locale) => locale === value);
}
