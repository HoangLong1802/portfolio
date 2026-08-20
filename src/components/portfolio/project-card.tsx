import Link from "next/link";
import { getLocalizedPath } from "@/lib/portfolio";
import type { PortfolioContent, Project } from "@/types/portfolio";

type ProjectCardProps = {
  readonly content: PortfolioContent;
  readonly project: Project;
};

export function ProjectCard({ content, project }: ProjectCardProps) {
  const detailHref = getLocalizedPath(content.locale, `/projects/${project.slug}`);

  return (
    <article className="project-card project-card--secondary" data-category={project.category}>
      <div>
        <p className="project-card__kicker">{project.categoryLabel}</p>
        <h3>{project.title}</h3>
      </div>
      <Link className="text-link" href={detailHref}>
        {content.projectLabels.readCaseStudy}
      </Link>
    </article>
  );
}
