import type { CareerGoalContent } from "@/types/portfolio";
import { portfolioSections } from "@/config/portfolio-sections";
import { Reveal } from "../motion/reveal";

type CareerGoalProps = {
  readonly content: CareerGoalContent;
};

export function CareerGoal({ content }: CareerGoalProps) {
  return (
    <section className="career-goal section-shell" id={portfolioSections.careerGoal} aria-labelledby="career-goal-title">
      <Reveal pattern="heading">
        <header className="career-goal__heading">
          <p className="career-goal__eyebrow">{content.eyebrow}</p>
          <h2 id="career-goal-title">{content.title}</h2>
          <div className="career-goal__opening">
            {content.opening.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </header>
      </Reveal>

      <Reveal className="career-goal__content">
        <div className="direction-story">
          <div className="direction-story__narrative">
            <blockquote><p>{content.insight}</p></blockquote>
            <p className="direction-story__lab">{content.labStory}</p>
          </div>

          <aside className="direction-story__destination">
            <p>{content.immediateGoal}</p>
            <div className="direction-story__long-term">
              <span>{content.longTermTitle}</span>
              <h3>{content.longTermText}</h3>
              <p>{content.rationale}</p>
            </div>
          </aside>
        </div>

        <div className="direction-connection">
          <p>{content.connectionLabel}</p>
          <ol>
            {content.connectionFlow.map((item) => <li key={item}>{item}</li>)}
          </ol>
        </div>

        <div className="direction-closing">
          {content.closing.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>

        <div className="direction-path" aria-labelledby="direction-path-title">
          <h3 id="direction-path-title">{content.pathLabel}</h3>
          <ol>
            {content.path.map((stage, index) => (
              <li className="direction-path__stage" key={stage.title}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <strong>{stage.title}</strong>
                  <p>{stage.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>
    </section>
  );
}
