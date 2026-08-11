import { portfolioContent } from "@/content/portfolio";
import { supportedLocales, type Locale, type Metric, type PortfolioContent, type Project } from "@/types/portfolio";

export const defaultLocale: Locale = "en";

export function getPortfolioContent(locale: Locale): PortfolioContent {
  return portfolioContent[locale];
}

export function getAllProjects(locale: Locale = defaultLocale): readonly Project[] {
  return getPortfolioContent(locale).projects;
}

export function getProjectBySlug(locale: Locale, slug: string): Project | undefined {
  return getAllProjects(locale).find((project) => project.slug === slug);
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
