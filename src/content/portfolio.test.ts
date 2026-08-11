import { describe, expect, it } from "vitest";
import { portfolioContent } from "@/content/portfolio";
import { getAllProjects, getProjectBySlug, getPublicMetrics } from "@/lib/portfolio";
import type { Locale, PortfolioContent } from "@/types/portfolio";

const locales = ["en", "vi"] as const satisfies readonly Locale[];
const forbiddenPublicClaims = [
  "Senior Full-Stack",
  "AI Engineer",
  "DevOps Engineer",
  "enterprise onboarding",
  "production users",
] as const;

function publicContentText(content: PortfolioContent): string {
  return JSON.stringify({
    contact: content.contact,
    home: content.home,
    profile: content.profile,
    projects: content.projects,
    site: content.site,
  });
}

describe("portfolio content", () => {
  it("keeps localized project slugs in parity", () => {
    const englishSlugs = getAllProjects("en").map((project) => project.slug);
    const vietnameseSlugs = getAllProjects("vi").map((project) => project.slug);

    expect(vietnameseSlugs).toEqual(englishSlugs);
  });

  it("does not publish unsupported positioning claims", () => {
    const allPublicText = locales.map((locale) => publicContentText(portfolioContent[locale])).join(" ");

    for (const claim of forbiddenPublicClaims) {
      expect(allPublicText).not.toContain(claim);
    }
  });

  it("keeps pending personal metrics out of public metric rendering", () => {
    for (const locale of locales) {
      const metrics = portfolioContent[locale].home.metrics;
      const publicMetrics = getPublicMetrics(metrics);

      expect(metrics.some((metric) => metric.visibility === "internal" && metric.value === "TODO")).toBe(true);
      expect(publicMetrics.every((metric) => metric.visibility === "public")).toBe(true);
      expect(publicMetrics.some((metric) => metric.value === "TODO")).toBe(false);
    }
  });

  it("labels Helpdesk Lab as a portfolio lab and publishes its API limitation", () => {
    const helpdesk = getProjectBySlug("en", "helpdesk-lab");

    expect(helpdesk).toBeDefined();
    if (!helpdesk) {
      throw new Error("Helpdesk Lab project is missing");
    }

    expect(helpdesk.category).toBe("portfolio-lab");
    expect(helpdesk.limitations.join(" ")).toContain("GLPI REST ticket creation is not complete");
    expect(helpdesk.limitations.join(" ")).toContain("local fallback");
  });

  it("requires project evidence and limitations in every locale", () => {
    for (const locale of locales) {
      for (const project of getAllProjects(locale)) {
        expect(project.evidence.length).toBeGreaterThan(0);
        expect(project.limitations.length).toBeGreaterThan(0);
      }
    }
  });

  it("returns undefined for unknown project slugs", () => {
    expect(getProjectBySlug("en", "missing-project")).toBeUndefined();
  });
});
