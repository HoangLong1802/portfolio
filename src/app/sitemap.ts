import type { MetadataRoute } from "next";
import { getAllProjects, getLocalizedPath, getPortfolioContent } from "@/lib/portfolio";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const english = getPortfolioContent("en");
  const vietnamese = getPortfolioContent("vi");
  const englishLastModified = new Date(english.site.lastUpdated);
  const vietnameseLastModified = new Date(vietnamese.site.lastUpdated);
  const projectRoutes = getAllProjects("en").flatMap((project) => [
    {
      url: absoluteUrl(`/projects/${project.slug}`),
      lastModified: englishLastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: absoluteUrl(getLocalizedPath("vi", `/projects/${project.slug}`)),
      lastModified: vietnameseLastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ]);

  return [
    {
      url: absoluteUrl("/"),
      lastModified: englishLastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: absoluteUrl("/vi"),
      lastModified: vietnameseLastModified,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    ...projectRoutes,
  ];
}
