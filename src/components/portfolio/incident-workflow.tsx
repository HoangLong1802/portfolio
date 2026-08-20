import type { IncidentWorkflowContent } from "@/types/portfolio";
import { portfolioSections } from "@/config/portfolio-sections";
import { PageSection } from "../ui/page-section";

type IncidentWorkflowProps = {
  readonly content: IncidentWorkflowContent;
};

export function IncidentWorkflow({ content }: IncidentWorkflowProps) {
  return (
    <PageSection
      body={content.body}
      eyebrow={content.eyebrow}
      id={portfolioSections.workflow}
      navigationParent={portfolioSections.projects}
      title={content.title}
    >
      <div className="incident-process">
        <ol>
          {content.steps.map((step, index) => (
            <li key={typeof step === "string" ? step : step.label}>
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <strong>{typeof step === "string" ? step : step.label}</strong>
            </li>
          ))}
        </ol>
        <p>{content.note}</p>
      </div>
    </PageSection>
  );
}
