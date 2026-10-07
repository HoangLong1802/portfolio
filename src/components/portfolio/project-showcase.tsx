import Link from "next/link";
import { getLocalizedPath } from "@/lib/portfolio";
import { portfolioSections } from "@/config/portfolio-sections";
import type { PortfolioContent } from "@/types/portfolio";
import { SupportAnalyticsSignal } from "./support-analytics-signal";

type ProjectShowcaseProps = {
  readonly content: PortfolioContent;
};

export function ProjectShowcase({ content }: ProjectShowcaseProps) {
  const featuredProject = content.projects[0];
  const secondaryProjects = content.projects.slice(1, 3);
  const earlierProjects = content.projects.slice(3);

  if (!featuredProject) return null;

  const repository = featuredProject.evidence.find((item) => item.href.includes("github.com/"));
  const workbook = featuredProject.evidence.find((item) => item.href.endsWith(".xlsx"));
  const findings = featuredProject.caseStudy?.findings ?? [];

  return (
    <section className="section-shell projects-section" id={portfolioSections.projects} aria-labelledby="projects-title">
      <header className="section-heading">
        <p className="eyebrow">{content.home.projects.eyebrow}</p>
        <h2 id="projects-title">{content.home.projects.title}</h2>
        <p className="section-intro">{content.home.projects.body}</p>
      </header>

      <article className="featured-project" data-project={featuredProject.slug}>
        <header className="featured-project__header">
          <div>
            <p className="eyebrow">{content.home.projectOverview.eyebrow}</p>
            <h3>{featuredProject.title}</h3>
            <p className="featured-project__summary">{featuredProject.summary}</p>
          </div>
          <span className="project-status">{featuredProject.maturityLabel}</span>
        </header>

        <div className="featured-project__body">
          <div className="featured-project__problem">
            <p className="project-section-label">01 · {content.projectLabels.problem}</p>
            <p>{featuredProject.problem}</p>
            <p className="synthetic-note">{content.locale === "vi" ? "Dataset tổng hợp được thiết kế để mô phỏng hoạt động customer support." : "Synthetic dataset designed to simulate customer-support operations."}</p>
          </div>

          <SupportAnalyticsSignal locale={content.locale} />
        </div>

        <div className="featured-project__findings">
          <p className="project-section-label">02 · {content.projectLabels.findings}</p>
          <ul>
            {findings.slice(1).map((finding) => <li key={finding}>{finding}</li>)}
          </ul>
        </div>

        <footer className="featured-project__footer">
          <ul className="tech-list" aria-label={content.projectLabels.techStack}>
            {featuredProject.techStack.map((item) => <li className="tech-list__item" key={item}>{item}</li>)}
          </ul>
          <div className="project-actions">
            <Link className="action-link action-link--primary" href={getLocalizedPath(content.locale, `/projects/${featuredProject.slug}`)}>
              {content.projectLabels.readCaseStudy}
            </Link>
            {repository ? <a className="action-link action-link--secondary" href={repository.href} rel="noreferrer" target="_blank">{content.projectLabels.sourceRepository} ↗</a> : null}
            {workbook ? <a className="action-link action-link--secondary" href={workbook.href} rel="noreferrer" target="_blank">{content.locale === "vi" ? "Workbook Excel" : "Excel workbook"} ↗</a> : null}
          </div>
        </footer>
      </article>

      <div className="secondary-project-grid">
        {secondaryProjects.map((project, index) => (
          <article className="secondary-project" key={project.slug}>
            <p className="project-section-label">0{index + 3} · {project.categoryLabel}</p>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <p className="secondary-project__problem"><strong>{content.projectLabels.problem}:</strong> {project.problem}</p>
            {project.caseStudy ? (
              <dl className="project-analysis-summary">
                <div>
                  <dt>{content.projectLabels.analysis}</dt>
                  <dd>{project.caseStudy.analysis.find((item) => !item.startsWith("TODO:")) ?? project.story?.role ?? project.summary}</dd>
                </div>
                <div>
                  <dt>{content.projectLabels.findings}</dt>
                  <dd>{project.caseStudy.findings.find((item) => !item.startsWith("TODO:")) ?? project.limitations[0]}</dd>
                </div>
              </dl>
            ) : null}
            <ul className="tech-list" aria-label={content.projectLabels.techStack}>
              {project.techStack.slice(0, 5).map((item) => <li className="tech-list__item" key={item}>{item}</li>)}
            </ul>
            <Link className="text-link" href={getLocalizedPath(content.locale, `/projects/${project.slug}`)}>
              {content.projectLabels.readCaseStudy} <span aria-hidden="true">→</span>
            </Link>
          </article>
        ))}
      </div>

      {earlierProjects.length > 0 ? (
        <details className="earlier-projects">
          <summary>{content.projectLabels.earlierProjects}</summary>
          <ul>
            {earlierProjects.map((project) => (
              <li key={project.slug}>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.categoryLabel} · {project.maturityLabel}</p>
                </div>
                <Link className="text-link" href={getLocalizedPath(content.locale, `/projects/${project.slug}`)}>
                  {content.projectLabels.readCaseStudy} <span aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </details>
      ) : null}
    </section>
  );
}
