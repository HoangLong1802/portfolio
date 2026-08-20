import type { FeaturedLabContent } from "@/types/portfolio";
import { ExternalLink } from "../ui/external-link";
import { PageSection } from "../ui/page-section";

type FeaturedHelpdeskProps = {
  readonly content: FeaturedLabContent;
  readonly externalLabel: string;
};

export function FeaturedHelpdesk({ content, externalLabel }: FeaturedHelpdeskProps) {
  return (
    <PageSection body={content.body} eyebrow={content.eyebrow} id="project" title={content.title}>
      <aside className="featured-lab__why" aria-labelledby="featured-lab-why-title">
        <h3 id="featured-lab-why-title">{content.whyTitle}</h3>
        <div>
          {content.whyBody.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <p className="featured-lab__why-statement">{content.whyStatement}</p>
        </div>
      </aside>
      <div className="featured-lab__topline">
        <ul className="featured-lab__stack" aria-label={content.techStackLabel}>
          {content.techStack.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        <ExternalLink className="action-link action-link--primary" externalLabel={externalLabel} href={content.sourceUrl} label={content.actionLabel} />
      </div>
      <div className="featured-lab__features">
        {content.features.map((feature, index) => (
          <article className="lab-feature" key={feature.title}>
            <span className="lab-feature__index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <h3>{feature.title}</h3>
            <p>{feature.body}</p>
            {feature.points.length > 0 ? <ul>{feature.points.map((point) => <li key={point}>{point}</li>)}</ul> : null}
          </article>
        ))}
      </div>
      <aside className="lab-validation" aria-label={content.validationLabel}>
        <div className="lab-validation__heading">
          <p className="lab-validation__eyebrow">{content.validationLabel}</p>
          <p>{content.note}</p>
        </div>
        <div className="lab-validation__metrics">
          {content.validation.map((item) => (
            <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>
          ))}
        </div>
      </aside>
    </PageSection>
  );
}
