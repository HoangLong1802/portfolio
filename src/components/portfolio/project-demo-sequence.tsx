import type { PortfolioContent, Project } from "@/types/portfolio";
import { ExternalLink } from "../ui/external-link";

type ProjectDemoSequenceProps = {
  readonly content: PortfolioContent;
  readonly demoHref: string;
  readonly project: Project;
};

export function ProjectDemoSequence({ content, demoHref, project }: ProjectDemoSequenceProps) {
  if (!project.backendHealthUrl) return null;

  return (
    <ol className="project-demo-sequence">
      <li>
        <span aria-hidden="true">01</span>
        <ExternalLink
          className="action-link action-link--secondary"
          externalLabel={content.a11y.externalLink}
          href={project.backendHealthUrl}
          label={content.projectLabels.wakeBackend}
        />
      </li>
      <li>
        <span aria-hidden="true">02</span>
        <ExternalLink
          className="action-link action-link--primary"
          externalLabel={content.a11y.externalLink}
          href={demoHref}
          label={content.projectLabels.liveDemo}
        />
      </li>
    </ol>
  );
}
