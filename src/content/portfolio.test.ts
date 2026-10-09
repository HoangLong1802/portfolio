import { describe, expect, it } from "vitest";
import { portfolioProjectSelection, portfolioSectionIds, secondaryProjectSelection } from "@/config/portfolio-sections";
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
  "customer-support-operations-analytics",
  "stock-prediction-ai",
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

  it("puts the analytics case study and related data projects first", () => {
    for (const locale of locales) {
      const featuredProjectSlugs = getAllProjects(locale)
        .slice(0, 3)
        .map((project) => project.slug);

      expect(featuredProjectSlugs).toEqual(expectedFeaturedProjectSlugs);
    }
  });

  it("provides verified role and evidence for the primary project", () => {
    for (const locale of locales) {
      const primaryProject = getAllProjects(locale)[0];

      expect(primaryProject?.story?.role.length).toBeGreaterThan(0);
      expect(primaryProject?.story?.value.length).toBeGreaterThan(0);
      expect(primaryProject?.story?.visualAlt.length).toBeGreaterThan(0);
      expect(primaryProject?.story?.visualLabels).toHaveLength(4);
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
        "#projects",
        "#skills",
        "#experience",
        "#profile",
        "#contact",
      ]);
    }
  });

  it("keeps the visible data project hierarchy complete in both languages", () => {
    expect(portfolioProjectSelection).toEqual([
      "customer-support-operations-analytics",
    ]);
    expect(secondaryProjectSelection).toEqual(["automated-it-asset-inventory", "stock-prediction-ai"]);

    for (const locale of locales) {
      const content = portfolioContent[locale];
      expect(portfolioProjectSelection.every((slug) => getProjectBySlug(locale, slug))).toBe(true);
      expect(content.projectLabels.readCaseStudy.length).toBeGreaterThan(0);
    }
  });

  it("provides a complete localized support workflow", () => {
    for (const locale of locales) {
      const supportFlow = portfolioContent[locale].home.supportFlow;

      expect(supportFlow.steps.map((step) => step.title)).toEqual([
        "Ask",
        "Prepare",
        "Clean",
        "Analyze",
        "Visualize",
        "Recommend",
      ]);
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
    expect(vietnameseContent).toContain("Nền tảng của em bắt đầu từ IT và software support");
    expect(vietnameseContent).toContain("Data Analyst | Operations Analytics");
  });

  it("does not show arbitrary profile counters", () => {
    for (const locale of locales) {
      const metrics = portfolioContent[locale].home.metrics;
      const publicMetrics = getPublicMetrics(metrics);

      expect(publicMetrics).toEqual([]);
    }
  });

  it("keeps recruiter-facing analyst content complete in both languages", () => {
    for (const locale of locales) {
      const content = portfolioContent[locale];

      expect(content.home.hero.eyebrow).toContain("DATA ANALYST");
      expect(content.home.hero.highlights).toEqual(["SQL", "Python", "pandas", "Excel"]);
      expect(content.home.hero.actions[0]?.href).toBe("#projects");
      expect(content.home.scrollNavigation.chapters.map((chapter) => chapter.href)).toEqual([
        "#home", "#projects", "#skills", "#experience", "#profile", "#contact",
      ]);
      expect(content.home.focus.items).toHaveLength(4);
      expect(content.home.experience.items).toHaveLength(2);
      expect(content.home.skills.groups.map((group) => group.title)).toEqual([
        "Data Analysis",
        "SQL & Data",
        "Reporting",
        "Technical",
      ]);
      expect(content.profile.role).toBe("Data Analyst | Operations Analytics");
      expect(content.contact.links.some((link) => link.href.startsWith("mailto:"))).toBe(true);
      expect(content.profile.resumeUrl).toBeNull();
      expect(content.profile.linkedinUrl).toBeNull();
    }
  });

  it("publishes the synthetic support operations evidence and limitations", () => {
    for (const locale of locales) {
      const project = getProjectBySlug(locale, "customer-support-operations-analytics");
      const caseStudy = project?.caseStudy;

      expect(caseStudy).toBeDefined();
      expect(caseStudy?.dataset).toMatch(/14[,.]774/);
      expect(caseStudy?.findings).toHaveLength(3);
      expect(caseStudy?.findings[0]).toMatch(locale === "en" ? /29\.49%.*50\.09%/ : /29,49%.*50,09%/);
      expect(caseStudy?.recommendations.length).toBeGreaterThan(0);
      expect(caseStudy?.visualization).toMatch(/Excel/);
      expect(project?.limitations.join(" ")).toMatch(/synthetic|mô phỏng/i);
      expect(project?.techStack.join(" ")).not.toMatch(/Power BI|DAX/);
      expect(caseStudy?.workflow).toHaveLength(5);
      expect(project?.evidence.some((item) => item.href.endsWith("customer_support_analysis.xlsx"))).toBe(true);
    }
  });

  it("gives every data-oriented project the full case-study structure", () => {
    for (const locale of locales) {
      for (const slug of portfolioProjectSelection) {
        expect(getProjectBySlug(locale, slug)?.caseStudy).toBeDefined();
      }
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
    expect(helpdesk.limitations.join(" ")).toContain("local database fallback");
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
