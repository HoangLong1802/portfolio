import type { ExperienceContent } from "@/types/portfolio";
import { PageSection } from "../ui/page-section";

type ExperienceTimelineProps = {
  readonly content: ExperienceContent;
};

export function ExperienceTimeline({ content }: ExperienceTimelineProps) {
  return (
    <PageSection body={content.body} eyebrow={content.eyebrow} id="experience" title={content.title}>
      <ol className="experience-timeline">
        {content.items.map((item) => (
          <li className="experience-item" key={`${item.company}-${item.period}`}>
            <article>
              <header className="experience-item__header">
                <div>
                  <p className="experience-item__company">{item.company}</p>
                  <h3>{item.role}</h3>
                </div>
                <p className="experience-item__period">{item.period}</p>
              </header>
              {item.highlights.length > 0 ? (
                <ul className="experience-item__highlights">
                  {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
              ) : null}
              <ul className="experience-item__responsibilities">
                {item.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}
              </ul>
              <ul className="tag-list">
                {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </PageSection>
  );
}
