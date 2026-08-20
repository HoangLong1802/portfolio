import { describe, expect, it } from "vitest";
import { portfolioProjectSelection, portfolioSectionIds } from "@/config/portfolio-sections";
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
  "jewelry-commerce",
  "helpdesk-lab",
  "automated-it-asset-inventory",
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

  it("publishes the supplied DevMentor and Jewelry Commerce demos", () => {
    for (const locale of locales) {
      const publicDemos = getAllProjects(locale).flatMap((project) =>
        project.evidence.filter(
          (item) => !item.href.startsWith("https://github.com/") && /demo/i.test(`${item.label} ${item.note}`),
        ),
      );

      expect(publicDemos.map((item) => item.href)).toEqual([
        "https://test-chat-bot-iota.vercel.app/",
        "https://website-ban-jewry.onrender.com/",
      ]);
    }
  });

  it("publishes the verified repository, demo, and backend URLs", () => {
    for (const locale of locales) {
      const devMentor = getProjectBySlug(locale, "devmentor-ai");
      const jewelry = getProjectBySlug(locale, "jewelry-commerce");

      expect(devMentor?.backendUrl).toBe("https://devmentor-backend-oauk.onrender.com/");
      expect(devMentor?.backendHealthUrl).toBe("https://devmentor-backend-oauk.onrender.com/health");
      expect(devMentor?.evidence.map((item) => item.href)).toEqual([
        "https://github.com/HoangLong1802/test_chat_bot",
        "https://test-chat-bot-iota.vercel.app/",
      ]);
      expect(jewelry?.evidence.map((item) => item.href)).toEqual([
        "https://github.com/HoangLong1802/webbanjewry",
        "https://website-ban-jewry.onrender.com/",
      ]);
    }
  });

  it("keeps project slugs unique and preserves the previous Jewelry route as an alias", () => {
    for (const locale of locales) {
      const slugs = getAllProjects(locale).map((project) => project.slug);
      expect(new Set(slugs).size).toBe(slugs.length);
      expect(getProjectBySlug(locale, "webbanjewry")?.slug).toBe("jewelry-commerce");
      expect(getProjectBySlug(locale, "jewelry-store")?.slug).toBe("jewelry-commerce");
    }
  });

  it("publishes the demo notices without blocking source access", () => {
    for (const locale of locales) {
      const devMentor = getProjectBySlug(locale, "devmentor-ai");
      const jewelryStore = getProjectBySlug(locale, "jewelry-commerce");

      expect(devMentor?.demoNotice).toMatch(/Render|cold-start/i);
      expect(devMentor?.demoNotice).toMatch(locale === "en" ? /backend.*first/i : /backend trước/i);
      expect(portfolioContent[locale].projectLabels.wakeBackend.length).toBeGreaterThan(0);
      expect(portfolioContent[locale].projectLabels.liveDemo).toMatch(/demo/i);
      expect(jewelryStore?.demoNotice?.length).toBeGreaterThan(0);
      expect(devMentor?.evidence.some((item) => item.href.includes("github.com"))).toBe(true);
      expect(jewelryStore?.evidence.some((item) => item.href.includes("github.com"))).toBe(true);
    }
  });

  it("keeps portfolio section IDs unique and project navigation aligned", () => {
    expect(new Set(portfolioSectionIds).size).toBe(portfolioSectionIds.length);

    for (const locale of locales) {
      const content = portfolioContent[locale];
      const projectNavigation = content.navigation.find((item) => item.href === "#projects");

      expect(projectNavigation).toBeDefined();
      expect(content.home.hero.actions[0]?.href).toBe("#projects");
      expect(content.home.scrollNavigation.chapters.map((chapter) => chapter.href)).toEqual([
        "#home",
        "#profile",
        "#experience",
        "#skills",
        "#projects",
        "#certifications",
        "#career-goal",
        "#contact",
      ]);
    }
  });

  it("keeps the interactive project selector complete in both languages", () => {
    expect(portfolioProjectSelection).toEqual([
      "helpdesk-lab",
      "devmentor-ai",
      "jewelry-commerce",
    ]);

    for (const locale of locales) {
      const content = portfolioContent[locale];
      expect(portfolioProjectSelection.every((slug) => getProjectBySlug(locale, slug))).toBe(true);
      expect(content.projectLabels.selectProject.length).toBeGreaterThan(0);
      expect(content.projectLabels.selectedProject.length).toBeGreaterThan(0);
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

      expect(publicMetrics).toHaveLength(6);
      expect(publicMetrics.every((metric) => metric.visibility === "public")).toBe(true);
      expect(publicMetrics.map((metric) => metric.value)).toEqual(
        locale === "en"
          ? ["1 year", "110+", "97% QA", "L1", "12", "6"]
          : ["1 năm", "110+", "97% QA", "L1", "12", "6"],
      );
      expect(publicMetrics.every((metric) => metric.source.includes("2026-08"))).toBe(true);
    }
  });

  it("keeps the recruiter-facing support sections complete in both languages", () => {
    for (const locale of locales) {
      const content = portfolioContent[locale];

      expect(content.home.hero.highlights).toHaveLength(4);
      expect(content.home.hero.actions[0]?.href).toBe("#projects");
      expect(content.home.hero.statusItems).toHaveLength(4);
      expect(content.home.hero.statusNote.length).toBeGreaterThan(0);
      expect(content.home.scrollNavigation.chapters).toHaveLength(8);
      expect(content.home.supportProfileStory.description).toHaveLength(2);
      expect(content.home.supportProfileStory.capabilities).toHaveLength(5);
      expect(content.home.experience.items).toHaveLength(2);
      expect(content.home.careerGoal.opening).toHaveLength(2);
      expect(content.home.careerGoal.connectionFlow.length).toBeGreaterThanOrEqual(6);
      expect(content.home.careerGoal.path.map((stage) => stage.title)).toEqual([
        "Technical Support",
        "Service Desk / IT Support",
        "Application / System Support",
        "DevOps",
      ]);
      expect(content.home.careerGoal.closing).toHaveLength(2);
      expect(content.home.skills.groups).toHaveLength(5);
      expect(content.home.featuredLab.features).toHaveLength(6);
      expect(content.home.featuredLab.whyBody.length).toBeGreaterThanOrEqual(2);
      expect(content.home.featuredLab.whyStatement.length).toBeGreaterThan(0);
      expect(content.home.featuredLab.validation.map((item) => item.value)).toEqual(["12", "6"]);
      expect(content.home.incidentWorkflow.steps.length).toBeGreaterThanOrEqual(8);
      expect(content.home.certifications.items.length).toBeGreaterThanOrEqual(3);
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
