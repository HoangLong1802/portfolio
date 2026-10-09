import Link from "next/link";
import { getLocalizedPath } from "@/lib/portfolio";
import { supportReport } from "@/config/support-analytics";
import type { PortfolioContent, Project } from "@/types/portfolio";
import { ExternalLink } from "../ui/external-link";
import { SupportAnalyticsMetrics } from "./support-analytics-metrics";
import { SupportAnalyticsSignal } from "./support-analytics-signal";
import { WorkbookPreview } from "./workbook-preview";

type SupportAnalyticsCaseStudyProps = {
  readonly content: PortfolioContent;
  readonly project: Project;
};

export function SupportAnalyticsCaseStudy({ content, project }: SupportAnalyticsCaseStudyProps) {
  const study = project.caseStudy;
  if (!study) return null;
  const labels = content.projectLabels;

  return (
    <article className="section-shell project-detail analytics-case-study">
      <Link className="text-link" href={getLocalizedPath(content.locale, "/#projects")}>{labels.backToProjects}</Link>
      <header className="case-study-header">
        <p className="eyebrow">{project.categoryLabel} · {project.maturityLabel}</p>
        <h1>{project.title}</h1>
      </header>

      <section className="case-study-section" aria-labelledby="overview-title" id="overview">
        <h2 id="overview-title">{labels.overview}</h2>
        <p className="project-detail__summary">{project.summary}</p>
        {project.story ? <p>{project.story.role}</p> : null}
        <p className="project-data-note">{project.limitations[0]}</p>
        <SupportAnalyticsMetrics locale={content.locale} variant="scope" />
        <div className="action-row">
          <a className="action-link action-link--primary" href={supportReport.workbookHref} download>{supportReport.downloadLabel[content.locale]}</a>
          <ExternalLink className="action-link action-link--secondary" externalLabel={content.a11y.externalLink} href={supportReport.sqlHref} label={supportReport.sqlLabel[content.locale]} />
        </div>
      </section>

      <section className="case-study-section" aria-labelledby="problem-title" id="business-problem">
        <h2 id="problem-title">{labels.problem}</h2><p>{project.problem}</p>
      </section>

      <section className="case-study-section" aria-labelledby="dataset-title" id="dataset">
        <h2 id="dataset-title">{labels.dataset}</h2><p>{study.dataset}</p>
      </section>

      <section className="case-study-section" aria-labelledby="workflow-title" id="workflow">
        <h2 id="workflow-title">{labels.workflow}</h2>
        <ol className="case-study-workflow">
          {study.workflow?.map((step) => <li key={step}>{step}</li>)}
        </ol>
        <h3>{labels.cleaning}</h3>
        <ul className="case-study-list">{study.cleaning.map((step) => <li key={step}>{step}</li>)}</ul>
      </section>

      <section className="case-study-section" aria-labelledby="analysis-title" id="analysis">
        <h2 id="analysis-title">{labels.analysis}</h2>
        <ul className="case-study-list analysis-question-list">{study.analysis.map((item) => <li key={item}>{item}</li>)}</ul>
        <p>{study.visualization}</p>
        <div className="workbook-gallery powerbi-gallery" id="powerbi-report">
          <h3>{supportReport.powerbiTitle[content.locale]}</h3>
          <p className="project-data-note">{supportReport.powerbiNote[content.locale]}</p>
          {supportReport.powerbiPreviews.map((preview) => <WorkbookPreview key={preview.id} locale={content.locale} preview={preview} />)}
        </div>
        <div className="workbook-gallery" id="report-preview">
          <h3>{supportReport.previewTitle[content.locale]}</h3>
          <p className="project-data-note">{supportReport.renderNote[content.locale]}</p>
          {supportReport.previews.map((preview) => <WorkbookPreview key={preview.id} locale={content.locale} preview={preview} />)}
        </div>
      </section>

      <section className="case-study-section" aria-labelledby="findings-title" id="key-findings">
        <h2 id="findings-title">{labels.findings}</h2>
        <SupportAnalyticsMetrics locale={content.locale} variant="findings" />
        <SupportAnalyticsSignal locale={content.locale} />
        <ul className="case-study-list">{study.findings.slice(2).map((item) => <li key={item}>{item}</li>)}</ul>
      </section>

      <section className="case-study-section" aria-labelledby="recommendations-title" id="recommendations">
        <h2 id="recommendations-title">{labels.recommendation}</h2>
        <ol className="case-study-list">{study.recommendations.map((item) => <li key={item}>{item}</li>)}</ol>
        <p className="project-data-note">{project.limitations.slice(1).join(" ")}</p>
      </section>

      <section className="case-study-section" aria-labelledby="tools-title" id="tools">
        <h2 id="tools-title">{labels.techStack}</h2>
        <ul className="tech-list">{project.techStack.map((tool) => <li className="tech-list__item" key={tool}>{tool}</li>)}</ul>
      </section>

      <section className="case-study-section" aria-labelledby="repository-title" id="repository">
        <h2 id="repository-title">{labels.evidence}</h2>
        <ul className="repository-links">
          {project.evidence.map((item) => (
            <li key={item.href}>
              {item.href.startsWith("/") ? <a className="text-link" href={content.locale === "en" && item.href === supportReport.qualityHref ? supportReport.qualityHrefEn : item.href} download={item.href.endsWith(".xlsx") || undefined}>{item.label}</a> : <ExternalLink className="text-link" externalLabel={content.a11y.externalLink} href={item.href} label={item.label} />}
              <p>{item.note}</p>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
