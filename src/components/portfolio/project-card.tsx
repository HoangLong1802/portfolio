"use client";

import Link from "next/link";
import type { KeyboardEvent, MouseEvent } from "react";
import { getLocalizedPath, getProjectEvidenceLinks } from "@/lib/portfolio";
import type { PortfolioContent, Project } from "@/types/portfolio";
import { ExternalLink } from "../ui/external-link";
import { ProjectDemoSequence } from "./project-demo-sequence";

type ProjectCardProps = {
  readonly content: PortfolioContent;
  readonly onSelect?: (slug: string) => void;
  readonly onSelectionKeyDown?: (event: KeyboardEvent<HTMLButtonElement>, slug: string) => void;
  readonly panelId?: string;
  readonly project: Project;
  readonly selected?: boolean;
  readonly selectionTabIndex?: 0 | -1;
};

export function ProjectCard({
  content,
  onSelect,
  onSelectionKeyDown,
  panelId,
  project,
  selected = false,
  selectionTabIndex = -1,
}: ProjectCardProps) {
  const detailHref = getLocalizedPath(content.locale, `/projects/${project.slug}`);
  const { demo, source } = getProjectEvidenceLinks(project);
  const visualLabels = project.story?.visualLabels ?? project.techStack.slice(0, 4);

  function handleCardClick(event: MouseEvent<HTMLElement>) {
    if (!onSelect) return;
    const target = event.target as HTMLElement;
    if (target.closest("a, button")) return;
    onSelect(project.slug);
  }

  return (
    <article
      className="project-card project-card--engineering"
      data-category={project.category}
      data-project={project.slug}
      data-selected={selected}
      {...(onSelect ? { onClick: handleCardClick } : {})}
    >
      <div
        aria-label={project.story?.visualAlt ?? `${project.title} technology overview`}
        className="engineering-card__visual"
        role="img"
      >
        <span className="engineering-card__visual-mark" aria-hidden="true">
          {project.slug === "devmentor-ai" ? "AI" : project.slug === "helpdesk-lab" ? "LAB" : "STORE"}
        </span>
        <div aria-hidden="true">
          {visualLabels.map((label) => <span key={label}>{label}</span>)}
        </div>
      </div>

      <div className="engineering-card__content">
        <div className="engineering-card__topline">
          <p className="project-card__kicker">{project.categoryLabel}</p>
          <div className="engineering-card__status">
            <span>{project.maturityLabel}</span>
            {onSelect ? (
              <button
                aria-controls={panelId}
                aria-label={`${content.projectLabels.selectProject}: ${project.title}`}
                aria-selected={selected}
                className="project-card__select-button"
                id={`project-tab-${project.slug}`}
                onClick={() => onSelect(project.slug)}
                onKeyDown={(event) => onSelectionKeyDown?.(event, project.slug)}
                role="tab"
                tabIndex={selectionTabIndex}
                type="button"
              >
                {selected ? content.projectLabels.selectedProject : content.projectLabels.selectProject}
              </button>
            ) : null}
          </div>
        </div>
        <h3>{project.title}</h3>
        <p className="card__body">{project.summary}</p>
        <ul className="tech-list" aria-label={content.projectLabels.techStack}>
          {project.techStack.slice(0, 6).map((item) => <li className="tech-list__item" key={item}>{item}</li>)}
        </ul>
        {project.demoNotice ? <p className="project-demo-notice">{project.demoNotice}</p> : null}
        <div className="engineering-card__actions">
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
        {demo && project.backendHealthUrl ? (
          <ProjectDemoSequence content={content} demoHref={demo.href} project={project} />
        ) : null}
      </div>
    </article>
  );
}
