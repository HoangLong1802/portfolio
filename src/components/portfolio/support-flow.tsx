import type { SupportFlowContent } from "@/types/portfolio";

type SupportFlowProps = {
  readonly content: SupportFlowContent;
};

export function SupportFlow({ content }: SupportFlowProps) {
  return (
    <aside className="support-flow" aria-labelledby="support-flow-title">
      <div className="support-flow__header">
        <div className="support-flow__topline">
          <p className="support-flow__eyebrow">{content.eyebrow}</p>
          <span className="support-flow__signal" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </div>
        <h2 id="support-flow-title">{content.title}</h2>
        <p>{content.description}</p>
      </div>
      <ol className="support-flow__steps">
        {content.steps.map((step, index) => (
          <li className="support-flow__step" key={step.title}>
            <span className="support-flow__index" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="support-flow__note">{content.note}</p>
    </aside>
  );
}
