import Link from "next/link";
import { getProjectEvidenceLinks } from "@/lib/portfolio";
import type { PortfolioContent, Project } from "@/types/portfolio";
import { ExternalLink } from "../ui/external-link";
import { PageSection } from "../ui/page-section";
import { StatusBadge } from "../ui/status-badge";
import { ProjectDemoSequence } from "./project-demo-sequence";

type ProjectDetailPageProps = {
  readonly content: PortfolioContent;
  readonly project: Project;
};

export function ProjectDetailPage({ content, project }: ProjectDetailPageProps) {
  const backHref = content.locale === "vi" ? "/vi#projects" : "/#projects";
  const { demo, source } = getProjectEvidenceLinks(project);
  const caseStudySections = project.caseStudy
    ? [
        { title: content.projectLabels.problem, details: [project.problem] },
        { title: content.projectLabels.dataset, details: [project.caseStudy.dataset] },
        { title: content.projectLabels.cleaning, details: project.caseStudy.cleaning },
        { title: content.projectLabels.analysis, details: project.caseStudy.analysis },
        { title: content.projectLabels.visualization, details: [project.caseStudy.visualization] },
        { title: content.projectLabels.findings, details: project.caseStudy.findings },
        { title: content.projectLabels.recommendation, details: project.caseStudy.recommendations },
        { title: content.projectLabels.limitations, details: project.limitations },
      ]
    : [];

  return (
    <article className="section-shell project-detail">
      <Link className="text-link" href={backHref}>
        {content.projectLabels.backToProjects}
      </Link>
      <div className="project-detail__meta">
        <StatusBadge label={project.categoryLabel} />
        <span className="muted-text">{project.maturityLabel}</span>
      </div>
      <h1>{project.title}</h1>
      <p className="project-detail__summary">{project.summary}</p>
      <div className="project-detail__actions">
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
            className="action-link action-link--primary"
            externalLabel={content.a11y.externalLink}
            href={demo.href}
            label={content.projectLabels.liveDemo}
          />
        ) : null}
      </div>
      {project.demoNotice ? <p className="project-demo-notice project-demo-notice--detail">{project.demoNotice}</p> : null}
      {demo && project.backendHealthUrl ? (
        <ProjectDemoSequence content={content} demoHref={demo.href} project={project} />
      ) : null}

      {project.caseStudy ? (
        <ol className="case-study-steps">
          {caseStudySections.map((section, index) => (
            <li className="case-study-step" id={`case-study-${index + 1}`} key={section.title}>
              <span className="case-study-step__number">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h2>{section.title}</h2>
                {section.details.length === 1 ? (
                  <p>{section.details[0]}</p>
                ) : (
                  <ul className="evidence-list">
                    {section.details.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      ) : (
        <>
          <PageSection
            body={project.problem}
            eyebrow={content.projectLabels.context}
            id="context"
            title={content.projectLabels.problem}
          />

          <PageSection
            eyebrow={content.projectLabels.contributions}
            id="contributions"
            title={content.projectLabels.contributions}
          >
            <ul className="evidence-list">
              {project.contributions.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </PageSection>
        </>
      )}

      {project.story ? (
        <PageSection eyebrow={content.projectLabels.role} id="project-role" title={content.projectLabels.value}>
          <p className="section-intro">{project.story.role}</p>
        </PageSection>
      ) : null}

      <PageSection eyebrow={content.projectLabels.techStack} id="tech-stack" title={content.projectLabels.techStack}>
        <ul className="tech-list">
          {project.techStack.map((item) => (
            <li className="tech-list__item" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </PageSection>

      <PageSection eyebrow={content.projectLabels.evidence} id="evidence" title={content.projectLabels.evidence}>
        <ul className="evidence-list">
          {project.evidence.map((item) => (
            <li key={item.label}>
              <ExternalLink
                className="text-link"
                externalLabel={content.a11y.externalLink}
                href={item.href}
                label={item.label}
              />
              <span className="muted-text"> - {item.note}</span>
            </li>
          ))}
        </ul>
      </PageSection>

      {!project.caseStudy ? (
        <PageSection eyebrow={content.projectLabels.limitations} id="limitations" title={content.projectLabels.limitations}>
          <ul className="limitation-list">
            {project.limitations.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </PageSection>
      ) : null}
    </article>
  );
}
