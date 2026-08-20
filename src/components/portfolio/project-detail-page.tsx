import Link from "next/link";
import type { PortfolioContent, Project } from "@/types/portfolio";
import { ExternalLink } from "../ui/external-link";
import { PageSection } from "../ui/page-section";
import { StatusBadge } from "../ui/status-badge";

type ProjectDetailPageProps = {
  readonly content: PortfolioContent;
  readonly project: Project;
};

export function ProjectDetailPage({ content, project }: ProjectDetailPageProps) {
  const backHref = content.locale === "vi" ? "/vi#projects" : "/#projects";

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
          {project.contributions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </PageSection>

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

      <PageSection eyebrow={content.projectLabels.limitations} id="limitations" title={content.projectLabels.limitations}>
        <ul className="limitation-list">
          {project.limitations.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </PageSection>
    </article>
  );
}
