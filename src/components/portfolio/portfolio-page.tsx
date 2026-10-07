import { portfolioSections } from "@/config/portfolio-sections";
import type { PortfolioContent } from "@/types/portfolio";
import { ExperienceTimeline } from "./experience-timeline";
import { ProjectShowcase } from "./project-showcase";

type PortfolioPageProps = {
  readonly content: PortfolioContent;
};

export function PortfolioPage({ content }: PortfolioPageProps) {
  const resumeUrl = content.profile.resumeUrl;
  const linkedinUrl = content.profile.linkedinUrl;
  const projectAction = content.home.hero.actions[0];

  return (
    <>
      <section className="section-shell hero" id={portfolioSections.home}>
        <div className="hero__copy">
          <p className="eyebrow">{content.home.hero.eyebrow}</p>
          <p className="hero__name">{content.profile.name}</p>
          <h1>{content.home.hero.title}</h1>
          <p className="hero__summary">{content.home.hero.summary}</p>
          <ul className="hero__highlights" aria-label={content.home.hero.highlightLabel}>
            {content.home.hero.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
          </ul>
          <div className="action-row">
            {projectAction ? (
              <a className="action-link action-link--primary" href={projectAction.href}>{projectAction.label}</a>
            ) : null}
            {resumeUrl ? (
              <a className="action-link action-link--secondary" download href={resumeUrl}>
                {content.locale === "vi" ? "Tải CV" : "Download Resume"}
              </a>
            ) : (
              <span aria-disabled="true" className="action-link action-link--secondary action-link--disabled" title="TODO: Add a verified current CV PDF.">
                {content.projectLabels.resumePending}
              </span>
            )}
            <a className="hero__social-link" href={content.profile.github} rel="noreferrer" target="_blank">
              GitHub <span aria-hidden="true">↗</span>
              <span className="sr-only"> ({content.a11y.externalLink})</span>
            </a>
          </div>
        </div>
        <aside className="hero__context" aria-label={content.profile.role}>
          <p className="hero__context-label">{content.locale === "vi" ? "VAI TRÒ MỤC TIÊU" : "TARGET ROLE"}</p>
          <strong>Data Analyst</strong>
          <p>Operations Analyst · Business Data Analyst</p>
          <span className="hero__context-rule" aria-hidden="true" />
          <p>{content.profile.location}</p>
          <a href="#projects">{content.locale === "vi" ? "Dự án dữ liệu" : "Data projects"} <span aria-hidden="true">↓</span></a>
        </aside>
      </section>

      <section className="capability-section" aria-labelledby="capability-title">
        <div className="section-shell">
          <div className="section-heading section-heading--compact">
            <p className="eyebrow">{content.home.focus.eyebrow}</p>
            <h2 id="capability-title">{content.home.focus.title}</h2>
            <p className="section-intro">{content.home.focus.body}</p>
          </div>
          <div className="capability-grid">
            {content.home.focus.items.map((item, index) => (
              <article className="capability-item" key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ProjectShowcase content={content} />

      <section className="section-shell workflow-section" id={portfolioSections.workflow} aria-labelledby="workflow-title">
        <header className="section-heading">
          <p className="eyebrow">{content.home.supportFlow.eyebrow}</p>
          <h2 id="workflow-title">{content.home.supportFlow.title}</h2>
          <p className="section-intro">{content.home.supportFlow.description}</p>
        </header>
        <ol className="workflow-list">
          {content.home.supportFlow.steps.map((step, index) => (
            <li className="workflow-step" key={step.title}>
              <span className="workflow-step__number">{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <ExperienceTimeline content={content.home.experience} />

      <section className="section-shell" id={portfolioSections.skills} aria-labelledby="skills-title">
        <header className="section-heading">
          <p className="eyebrow">{content.home.skills.eyebrow}</p>
          <h2 id="skills-title">{content.home.skills.title}</h2>
          <p className="section-intro">{content.home.skills.body}</p>
        </header>
        <div className="skill-grid">
          {content.home.skills.groups.map((group, index) => (
            <article className="skill-card" key={group.title}>
              <div className="skill-card__heading">
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <h3>{group.title}</h3>
              </div>
              <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell about-section" id={portfolioSections.profile} aria-labelledby="about-title">
        <header className="section-heading">
          <p className="eyebrow">{content.home.story.eyebrow}</p>
          <h2 id="about-title">{content.home.story.title}</h2>
          <p className="section-intro">{content.home.story.body}</p>
        </header>
        <div className="about-section__copy">
          {content.home.story.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>

      <section className="contact-section" id={portfolioSections.contact} aria-labelledby="contact-title">
        <div className="section-shell contact-section__inner">
          <div>
            <p className="eyebrow">{content.home.contact.eyebrow}</p>
            <h2 id="contact-title">{content.home.contact.title}</h2>
            <p className="section-intro">{content.home.contact.body}</p>
          </div>
          <div className="contact-section__actions">
            {content.contact.links.map((link) => (
              <a className="action-link action-link--secondary" href={link.href} key={link.href}>
                {link.label}{link.href.startsWith("http") ? <span aria-hidden="true"> ↗</span> : null}
              </a>
            ))}
            {linkedinUrl ? (
              <a className="action-link action-link--secondary" href={linkedinUrl} rel="noreferrer" target="_blank">LinkedIn ↗</a>
            ) : (
              <span aria-disabled="true" className="action-link action-link--secondary action-link--disabled" title="TODO: Add the verified LinkedIn profile URL.">
                {content.projectLabels.linkedinPending}
              </span>
            )}
          </div>
          <p className="contact-section__note">{content.contact.pendingNote}</p>
        </div>
      </section>
    </>
  );
}
