import Link from "next/link";
import { getLocalizedPath } from "@/lib/portfolio";
import { portfolioProjectSelection, portfolioSections, secondaryProjectSelection } from "@/config/portfolio-sections";
import { supportAnalysisAreas, supportReport } from "@/config/support-analytics";
import type { PortfolioContent } from "@/types/portfolio";
import { ExternalLink } from "../ui/external-link";
import { SupportAnalyticsMetrics } from "./support-analytics-metrics";
import { WorkbookPreview } from "./workbook-preview";

type ProjectShowcaseProps = { readonly content: PortfolioContent };

export function ProjectShowcase({ content }: ProjectShowcaseProps) {
  const project = content.projects.find((item) => item.slug === portfolioProjectSelection[0]);
  if (!project) return null;
  const repository = project.evidence[0];

  return (
    <section className="section-shell projects-section" id={portfolioSections.projects} aria-labelledby="projects-title">
      <header className="section-heading">
        <p className="eyebrow">{content.home.projectOverview.eyebrow}</p>
        <h2 id="projects-title">{content.home.projects.title}</h2>
      </header>
      <article className="featured-project" data-project={project.slug}>
        <header className="featured-project__header">
          <div>
            <h3>{project.title}</h3>
            <p className="featured-project__summary">{project.summary}</p>
            <ul className="analysis-area-list">
              {supportAnalysisAreas[content.locale].map((area) => <li key={area}>{area}</li>)}
            </ul>
          </div>
          <span className="project-status">{project.maturityLabel}</span>
        </header>
        <div className="featured-project__body">
          <div className="featured-project__report">
            <WorkbookPreview locale={content.locale} preview={supportReport.previews[0]} preload />
            <p className="project-data-note">{supportReport.renderNote[content.locale]}</p>
          </div>
          <SupportAnalyticsMetrics locale={content.locale} variant="findings" />
        </div>
        <div className="featured-project__scope">
          <SupportAnalyticsMetrics locale={content.locale} variant="scope" />
          <p className="project-data-note">
            {project.limitations[0]}
          </p>
        </div>
        <footer className="featured-project__footer">
          <ul className="tech-list" aria-label={content.projectLabels.techStack}>
            {project.techStack.map((item) => <li className="tech-list__item" key={item}>{item}</li>)}
          </ul>
          <div className="project-actions">
            <Link className="action-link action-link--primary" href={getLocalizedPath(content.locale, "/projects/" + project.slug)}>
              {content.projectLabels.readCaseStudy}
            </Link>
            {repository ? <ExternalLink className="action-link action-link--secondary" externalLabel={content.a11y.externalLink} href={repository.href} label="GitHub" /> : null}
            <a className="text-link" href={supportReport.workbookHref} download>{supportReport.downloadLabel[content.locale]}</a>
          </div>
        </footer>
      </article>
    </section>
  );
}

export function OtherProjects({ content }: ProjectShowcaseProps) {
  const selected = secondaryProjectSelection.map((slug) => content.projects.find((project) => project.slug === slug)).filter((project) => project !== undefined);
  const earlier = content.projects.filter((project) => !portfolioProjectSelection.some((slug) => slug === project.slug) && !secondaryProjectSelection.some((slug) => slug === project.slug));

  return (
    <section className="section-shell" data-navigation-parent={portfolioSections.projects} id={portfolioSections.engineeringProjects} aria-labelledby="other-projects-title">
      <header className="section-heading">
        <p className="eyebrow">{content.home.projects.eyebrow}</p>
        <h2 id="other-projects-title">{content.projectLabels.moreProjects}</h2>
        <p className="section-intro">{content.home.projects.body}</p>
      </header>
      <div className="secondary-project-grid">
        {selected.map((project) => (
          <article className="secondary-project" key={project.slug}>
            <p className="project-section-label">{project.categoryLabel}</p>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <ul className="tech-list" aria-label={content.projectLabels.techStack}>
              {project.techStack.slice(0, 4).map((tool) => <li className="tech-list__item" key={tool}>{tool}</li>)}
            </ul>
            <Link className="text-link" href={getLocalizedPath(content.locale, "/projects/" + project.slug)}>{content.projectLabels.exploreProject} <span aria-hidden="true">→</span></Link>
          </article>
        ))}
      </div>
      <details className="earlier-projects">
        <summary>{content.projectLabels.earlierProjects}</summary>
        <ul>
          {earlier.map((project) => (
            <li key={project.slug}>
              <div><h3>{project.title}</h3><p>{project.categoryLabel} · {project.maturityLabel}</p></div>
              <Link className="text-link" href={getLocalizedPath(content.locale, "/projects/" + project.slug)}>{content.projectLabels.exploreProject} <span aria-hidden="true">→</span></Link>
            </li>
          ))}
        </ul>
      </details>
    </section>
  );
}
