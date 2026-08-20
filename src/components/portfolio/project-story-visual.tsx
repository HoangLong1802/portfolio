import type { FeaturedProject } from "@/types/portfolio";

type ProjectStoryVisualProps = {
  readonly project: FeaturedProject;
};

function VisualNode({ label }: { readonly label: string }) {
  return <span className="project-visual__node">{label}</span>;
}

export function ProjectStoryVisual({ project }: ProjectStoryVisualProps) {
  const [first, second, third, fourth] = project.story.visualLabels;

  return (
    <div
      aria-label={project.story.visualAlt}
      className="project-visual"
      data-project={project.slug}
      role="img"
    >
      <div className="project-visual__toolbar" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      {project.slug === "devmentor-ai" ? (
        <div className="project-visual__canvas project-visual__canvas--mentor" aria-hidden="true">
          <div className="project-visual__document">
            <span />
            <span />
            <span />
            <strong>PDF</strong>
          </div>
          <div className="project-visual__conversation">
            <VisualNode label={first} />
            <span className="project-visual__message project-visual__message--wide" />
            <span className="project-visual__message" />
            <VisualNode label={second} />
          </div>
          <div className="project-visual__side-stack">
            <VisualNode label={third} />
            <VisualNode label={fourth} />
          </div>
        </div>
      ) : null}

      {project.slug === "helpdesk-lab" ? (
        <div className="project-visual__canvas project-visual__canvas--helpdesk" aria-hidden="true">
          <div className="project-visual__signal">
            <span className="project-visual__pulse" />
            <VisualNode label={first} />
          </div>
          <span className="project-visual__connector" />
          <VisualNode label={second} />
          <span className="project-visual__connector" />
          <VisualNode label={third} />
          <span className="project-visual__connector" />
          <div className="project-visual__recovery">
            <VisualNode label={fourth} />
            <span />
            <span />
            <span />
          </div>
        </div>
      ) : null}

      {project.slug === "automated-it-asset-inventory" ? (
        <div className="project-visual__canvas project-visual__canvas--assets" aria-hidden="true">
          <div className="project-visual__device">
            <span className="project-visual__device-screen" />
            <VisualNode label={first} />
          </div>
          <div className="project-visual__platforms">
            <VisualNode label={second} />
            <VisualNode label={third} />
          </div>
          <div className="project-visual__table">
            <VisualNode label={fourth} />
            <span />
            <span />
            <span />
          </div>
        </div>
      ) : null}

      {project.slug === "jewelry-commerce" ? (
        <div className="project-visual__canvas project-visual__canvas--commerce" aria-hidden="true">
          <div className="project-visual__products">
            <span />
            <span />
            <VisualNode label={first} />
          </div>
          <div className="project-visual__commerce-flow">
            <VisualNode label={second} />
            <span className="project-visual__connector" />
            <VisualNode label={third} />
            <span className="project-visual__connector" />
            <VisualNode label={fourth} />
          </div>
        </div>
      ) : null}
    </div>
  );
}
