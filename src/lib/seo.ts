import type { Metadata, Viewport } from "next";
import { getAllProjects, getLocalizedPath, getPortfolioContent } from "@/lib/portfolio";
import type { Locale, PortfolioContent, Project } from "@/types/portfolio";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#091413",
};

export function absoluteUrl(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${siteUrl}${normalizedPath}`;
}

export function createHomeMetadata(locale: Locale): Metadata {
  const content = getPortfolioContent(locale);
  const path = getLocalizedPath(locale, "/");

  return createMetadata({
    content,
    description: content.site.description,
    path,
    title: content.site.title,
  });
}

export function createRootMetadata(locale: Locale): Metadata {
  const content = getPortfolioContent(locale);
  const socialImage = getSocialImageUrl(content.locale);

  return {
    metadataBase: new URL(siteUrl),
    applicationName: content.site.title,
    title: {
      default: content.site.title,
      template: `%s | ${content.profile.name}`,
    },
    description: content.site.description,
    openGraph: {
      images: [{ url: socialImage, width: 1200, height: 630, alt: content.site.title }],
    },
    twitter: {
      card: "summary_large_image",
      images: [socialImage],
    },
  };
}

export function createProjectMetadata(content: PortfolioContent, project: Project | undefined): Metadata {
  if (!project) {
    return createMetadata({
      content,
      description: content.notFound.body,
      path: getLocalizedPath(content.locale, "/"),
      title: content.notFound.title,
    });
  }

  return createMetadata({
    content,
    description: project.summary,
    path: getLocalizedPath(content.locale, `/projects/${project.slug}`),
    title: `${project.title} | ${content.profile.name}`,
  });
}

type MetadataInput = {
  readonly content: PortfolioContent;
  readonly description: string;
  readonly path: string;
  readonly title: string;
};

function createMetadata({ content, description, path, title }: MetadataInput): Metadata {
  const socialImage = getSocialImageUrl(content.locale);

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical: absoluteUrl(path),
      languages: createLanguageAlternates(path),
    },
    openGraph: {
      type: "website",
      locale: content.locale === "vi" ? "vi_VN" : "en_US",
      url: absoluteUrl(path),
      title,
      description,
      siteName: content.site.title,
      images: [{ url: socialImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}

function getSocialImageUrl(locale: Locale): string {
  return absoluteUrl(getLocalizedPath(locale, "/opengraph-image"));
}

function createLanguageAlternates(path: string): Record<string, string> {
  const englishPath = path.startsWith("/vi") ? path.replace(/^\/vi/, "") || "/" : path;
  const vietnamesePath = englishPath === "/" ? "/vi" : `/vi${englishPath}`;

  return {
    "en-US": absoluteUrl(englishPath),
    "vi-VN": absoluteUrl(vietnamesePath),
  };
}

export function getSitemapProjectPaths(): readonly string[] {
  return getAllProjects("en").map((project) => `/projects/${project.slug}`);
}
