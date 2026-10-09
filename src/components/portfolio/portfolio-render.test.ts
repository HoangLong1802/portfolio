import { createElement } from "react";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { portfolioContent } from "@/content/portfolio";
import { personalInfo, personalContactLinks } from "@/config/personal-info";
import { supportReport } from "@/config/support-analytics";
import { createHomeMetadata } from "@/lib/seo";
import { PortfolioPage } from "./portfolio-page";
import { ProjectDetailPage } from "./project-detail-page";

const unfinishedCopy = /\bTODO\b|\bpending\b|\bverified\b|\baudit(?:ed)?\b|owner-provided|unable to verify|validation pending|chưa có|đã xác minh|chưa hoàn tất/i;

describe("recruiter-facing portfolio", () => {
  for (const locale of ["en", "vi"] as const) {
    const content = portfolioContent[locale];

    it(`${locale}: renders finished homepage and project copy without unsupported BI deliverables`, () => {
      const pages = [
        renderToStaticMarkup(createElement(PortfolioPage, { content })),
        ...content.projects.map((project) => renderToStaticMarkup(createElement(ProjectDetailPage, { content, project }))),
      ];
      for (const html of pages) {
        const publicText = html.replace(/<[^>]*>/g, " ");
        expect(publicText).not.toMatch(unfinishedCopy);
        expect(publicText).not.toMatch(/Power BI|PBIX|DAX/);
        expect(html).not.toContain('aria-disabled="true"');
      }
    });

    it(`${locale}: keeps one flagship, correct reading order and valid navigation/contact targets`, () => {
      const html = renderToStaticMarkup(createElement(PortfolioPage, { content }));
      const order = ["home", "projects", "skills", "experience", "engineering-projects", "profile", "contact"];
      const positions = order.map((id) => html.indexOf(`id="${id}"`));
      expect(positions.every((position) => position >= 0)).toBe(true);
      expect(positions).toEqual([...positions].sort((a, b) => a - b));
      const flagship = html.slice(positions[1], positions[2]);
      expect(flagship).toContain("customer-support-operations-analytics");
      expect(flagship).not.toContain("stock-prediction-ai");
      expect(html).toContain(personalInfo.name);
      expect(html).toContain(`href="${personalContactLinks.email}"`);
      expect(html).toContain(`href="${personalContactLinks.phone}"`);
      expect(html).toContain(personalInfo.github);
      expect(html).not.toMatch(/Resume|LinkedIn|\.pdf/);
      expect(html).toContain("2020–2024");
      expect(html).toContain("CEFR B2");
      for (const item of content.navigation) expect(html).toContain(`id="${item.href.slice(1)}"`);
      const oppo = content.home.experience.items.find((item) => item.company === "OPPO Vietnam");
      expect(oppo?.period).toBe(locale === "en" ? "Apr 2024 – Apr 2025" : "04/2024 – 04/2025");
      expect(content.home.experience.items[0]?.responsibilities.join(" ")).not.toMatch(/SQL|Power BI/);
    });

    it(`${locale}: publishes distinct titles and production canonical URLs`, () => {
      const metadata = createHomeMetadata(locale);
      expect(metadata.title).toEqual({ absolute: content.site.title });
      expect(metadata.alternates?.canonical).toBe(personalInfo.portfolio.replace(/\/$/, "") + (locale === "vi" ? "/vi" : "/"));
    });
  }

  it("ships the workbook, quality report and full-size previews used by the pages", () => {
    const workbook = readFileSync(join(process.cwd(), "public", supportReport.workbookHref));
    expect(workbook.subarray(0, 4).toString("hex")).toBe("504b0304");
    const qualityReport = readFileSync(join(process.cwd(), "public", supportReport.qualityHref), "utf8");
    expect(qualityReport).toContain("14.774");
    expect(qualityReport).not.toMatch(/D:\\|TODO|validation pending/);
    const qualityReportEn = readFileSync(join(process.cwd(), "public", supportReport.qualityHrefEn), "utf8");
    expect(qualityReportEn).toContain("14,774");
    expect(qualityReportEn).toMatch(/synthetic data/i);
    for (const locale of ["en", "vi"] as const) {
      const content = portfolioContent[locale];
      const supportProject = content.projects.find((project) => project.slug === "customer-support-operations-analytics");
      expect(supportProject).toBeDefined();
      if (!supportProject) continue;
      const caseStudy = renderToStaticMarkup(createElement(ProjectDetailPage, { content, project: supportProject }));
      const qualityHref = locale === "en" ? supportReport.qualityHrefEn : supportReport.qualityHref;
      expect(caseStudy).toContain(`href="${qualityHref}"`);
    }
    for (const preview of supportReport.previews) {
      const png = readFileSync(join(process.cwd(), "public", preview.src));
      expect(png.subarray(0, 8).toString("hex")).toBe("89504e470d0a1a0a");
      expect(png.readUInt32BE(16)).toBe(preview.width);
      expect(png.readUInt32BE(20)).toBe(preview.height);
    }
  });
});
