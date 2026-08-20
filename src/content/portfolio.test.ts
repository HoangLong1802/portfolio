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
const expectedFeaturedProjectSlugs = [
  "devmentor-ai",
  "helpdesk-lab",
  "automated-it-asset-inventory",
  "webbanjewry",
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

  it("keeps the four featured projects in the reviewed order", () => {
    for (const locale of locales) {
      const featuredProjectSlugs = getAllProjects(locale)
        .slice(0, 4)
        .map((project) => project.slug);

      expect(featuredProjectSlugs).toEqual(expectedFeaturedProjectSlugs);
    }
  });

  it("provides complete verified stories for every featured project", () => {
    for (const locale of locales) {
      const featuredProjects = getAllProjects(locale).slice(0, 4);

      for (const project of featuredProjects) {
        expect(project.story).toBeDefined();
        expect(project.story?.role.length).toBeGreaterThan(0);
        expect(project.story?.value.length).toBeGreaterThan(0);
        expect(project.story?.visualAlt.length).toBeGreaterThan(0);
        expect(project.story?.visualLabels).toHaveLength(4);
      }
    }
  });

  it("publishes only the audited DevMentor public demo", () => {
    for (const locale of locales) {
      const publicDemos = getAllProjects(locale).flatMap((project) =>
        project.evidence.filter(
          (item) => !item.href.startsWith("https://github.com/") && /demo/i.test(`${item.label} ${item.note}`),
        ),
      );

      expect(publicDemos.map((item) => item.href)).toEqual(["https://test-chat-bot-iota.vercel.app"]);
    }
  });

  it("provides a complete localized support workflow", () => {
    for (const locale of locales) {
      const supportFlow = portfolioContent[locale].home.supportFlow;

      expect(supportFlow.steps).toHaveLength(4);
      expect(supportFlow.note.length).toBeGreaterThan(0);
      expect(supportFlow.steps.every((step) => step.title.length > 0 && step.body.length > 0)).toBe(true);
      expect(portfolioContent[locale].a11y.externalLink.length).toBeGreaterThan(0);
    }
  });

  it("does not publish unsupported positioning claims", () => {
    const allPublicText = locales.map((locale) => publicContentText(portfolioContent[locale])).join(" ");

    for (const claim of forbiddenPublicClaims) {
      expect(allPublicText).not.toContain(claim);
    }
  });

  it("uses the requested modest Vietnamese personal voice", () => {
    const vietnameseContent = JSON.stringify(portfolioContent.vi);

    expect(vietnameseContent).not.toContain("tôi");
    expect(vietnameseContent).not.toContain("Tôi");
    expect(vietnameseContent).toContain("Em hứng thú");
    expect(vietnameseContent).toContain("Em không muốn bỏ qua những nền tảng cần thiết.");
  });

  it("publishes the owner-supplied support metrics with visible context", () => {
    for (const locale of locales) {
      const metrics = portfolioContent[locale].home.metrics;
      const publicMetrics = getPublicMetrics(metrics);

      expect(publicMetrics).toHaveLength(4);
      expect(publicMetrics.every((metric) => metric.visibility === "public")).toBe(true);
      expect(publicMetrics.map((metric) => metric.value)).toEqual(
        locale === "en" ? ["1 year", "110+", "97% QA", "CEFR B2"] : ["1 năm", "110+", "97% QA", "CEFR B2"],
      );
      expect(publicMetrics.every((metric) => metric.source.includes("2026-08-20"))).toBe(true);
    }
  });

  it("keeps the recruiter-facing support sections complete in both languages", () => {
    for (const locale of locales) {
      const content = portfolioContent[locale];

      expect(content.home.hero.highlights).toHaveLength(4);
      expect(content.home.hero.actions[0]?.href).toBe("#project");
      expect(content.home.hero.statusItems).toHaveLength(4);
      expect(content.home.hero.statusNote.length).toBeGreaterThan(0);
      expect(content.home.scrollNavigation.chapters).toHaveLength(8);
      expect(content.home.supportProfileStory.description).toHaveLength(2);
      expect(content.home.supportProfileStory.capabilities).toHaveLength(5);
      expect(content.home.experience.items).toHaveLength(2);
      expect(content.home.careerGoal.opening).toHaveLength(2);
      expect(content.home.careerGoal.connectionFlow).toHaveLength(6);
      expect(content.home.careerGoal.path.map((stage) => stage.title)).toEqual(["Technical Support", "Application / System Support", "DevOps"]);
      expect(content.home.careerGoal.closing).toHaveLength(2);
      expect(content.home.skills.groups).toHaveLength(5);
      expect(content.home.featuredLab.features).toHaveLength(4);
      expect(content.home.featuredLab.whyBody).toHaveLength(2);
      expect(content.home.featuredLab.whyStatement).toContain("Helpdesk Lab");
      expect(content.home.featuredLab.validation.map((item) => item.value)).toEqual(["12 / 12", "6 / 6"]);
      expect(content.home.incidentWorkflow.steps).toHaveLength(8);
      expect(content.home.certifications.items).toHaveLength(4);
      expect(content.contact.links.some((link) => link.href.startsWith("mailto:"))).toBe(true);
      expect(content.contact.links).toHaveLength(3);
    }
  });

  it("labels the CCNA learning path without claiming an official Cisco certification", () => {
    for (const locale of locales) {
      const ccna = portfolioContent[locale].home.certifications.items.find((item) => item.title.includes("CCNA"));

      expect(ccna?.issuer).toContain("Coursera");
      expect(ccna && "note" in ccna ? ccna.note.toLowerCase() : "").toContain(locale === "en" ? "not the official" : "không phải");
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
