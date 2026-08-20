import Link from "next/link";
import { portfolioSections } from "@/config/portfolio-sections";
import { getLocalizedPath, getProjectEvidenceLinks } from "@/lib/portfolio";
import type { PortfolioContent, Project } from "@/types/portfolio";
import { ExternalLink } from "../ui/external-link";
import { ProjectDemoSequence } from "./project-demo-sequence";

type SelectedProjectCaseStudyProps = {
  readonly content: PortfolioContent;
  readonly project: Project;
};

export function SelectedProjectCaseStudy({ content, project }: SelectedProjectCaseStudyProps) {
  const detailHref = getLocalizedPath(content.locale, `/projects/${project.slug}`);
  const { demo, source } = getProjectEvidenceLinks(project);

  return (
    <section
      aria-labelledby="selected-project-title"
      className="selected-case-study section-shell"
      data-navigation-parent={portfolioSections.projects}
      data-project={project.slug}
    >
      <header className="selected-case-study__header">
        <div className="selected-case-study__topline">
          <p className="eyebrow">{project.categoryLabel}</p>
          <span>{project.maturityLabel}</span>
        </div>
        <h2 id="selected-project-title">{project.title}</h2>
        <p className="section-intro">{project.summary}</p>
        <div className="project-detail__actions">
          <Link className="action-link action-link--primary" href={detailHref}>
            {content.projectLabels.readCaseStudy}
          </Link>
          {source ? (
            <ExternalLink
              className="action-link action-link--secondary"
              externalLabel={content.a11y.externalLink}
              href={source.href}
              label={content.projectLabels.sourceRepository}
            />
          ) : null}
          {demo && !project.backendHealthUrl ? (
            <ExternalLink
              className="action-link action-link--secondary"
              externalLabel={content.a11y.externalLink}
              href={demo.href}
              label={content.projectLabels.liveDemo}
            />
          ) : null}
        </div>
        {project.demoNotice ? <p className="project-demo-notice">{project.demoNotice}</p> : null}
        {demo && project.backendHealthUrl ? (
          <ProjectDemoSequence content={content} demoHref={demo.href} project={project} />
        ) : null}
      </header>

      <div className="selected-case-study__facts">
        <article>
          <p>{content.projectLabels.context}</p>
          <h3>{content.projectLabels.problem}</h3>
          <p>{project.problem}</p>
        </article>
        {project.story ? (
          <>
            <article>
              <h3>{content.projectLabels.role}</h3>
              <p>{project.story.role}</p>
            </article>
            <article>
              <h3>{content.projectLabels.value}</h3>
              <p>{project.story.value}</p>
            </article>
          </>
        ) : null}
      </div>

      <div className="selected-case-study__details">
        <section aria-labelledby="selected-project-contributions">
          <h3 id="selected-project-contributions">{content.projectLabels.contributions}</h3>
          <ul className="evidence-list">
            {project.contributions.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>
        <aside aria-labelledby="selected-project-stack">
          <h3 id="selected-project-stack">{content.projectLabels.techStack}</h3>
          <ul className="tech-list">
            {project.techStack.map((item) => <li className="tech-list__item" key={item}>{item}</li>)}
          </ul>
          <h3>{content.projectLabels.limitations}</h3>
          <ul className="limitation-list">
            {project.limitations.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </aside>
      </div>
    </section>
  );
}
