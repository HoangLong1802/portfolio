import { portfolioSections } from "@/config/portfolio-sections";
import type { PortfolioContent } from "@/types/portfolio";
import { ExternalLink } from "../ui/external-link";
import { ExperienceTimeline } from "./experience-timeline";
import { OtherProjects, ProjectShowcase } from "./project-showcase";

type PortfolioPageProps = { readonly content: PortfolioContent };

export function PortfolioPage({ content }: PortfolioPageProps) {
  const projectAction = content.home.hero.actions[0];

  return (
    <>
      <section className="section-shell hero" id={portfolioSections.home}>
        <div className="hero__copy">
          <p className="hero__name">{content.profile.name}</p>
          <p className="eyebrow">{content.profile.role}</p>
          <h1>{content.home.hero.title}</h1>
          <p className="hero__summary">{content.home.hero.summary}</p>
          <ul className="hero__highlights" aria-label={content.home.hero.highlightLabel}>
            {content.home.hero.highlights.map((tool) => <li key={tool}>{tool}</li>)}
          </ul>
          <div className="action-row">
            {projectAction ? <a className="action-link action-link--primary" href={projectAction.href}>{projectAction.label}</a> : null}
            <ExternalLink className="action-link action-link--secondary" externalLabel={content.a11y.externalLink} href={content.profile.github} label="GitHub" />
          </div>
        </div>
        <aside className="hero__context" aria-label={content.home.hero.statusLabel}>
          <p className="hero__context-label">{content.home.hero.statusLabel}</p>
          <strong>{content.home.hero.statusItems[0]?.value}</strong>
          <p>{content.home.hero.statusItems[2]?.value}</p>
          <span className="hero__context-rule" aria-hidden="true" />
          <p>{content.profile.location}</p>
          <a href="#contact">{content.home.contact.eyebrow} <span aria-hidden="true">↗</span></a>
        </aside>
      </section>

      <ProjectShowcase content={content} />

      <section className="capability-section" id={portfolioSections.skills} aria-labelledby="skills-title">
        <div className="section-shell">
          <header className="section-heading">
            <p className="eyebrow">{content.home.skills.eyebrow}</p>
            <h2 id="skills-title">{content.home.skills.title}</h2>
            <p className="section-intro">{content.home.focus.body}</p>
          </header>
          <div className="skill-grid">
            {content.home.skills.groups.map((group) => (
              <article className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ExperienceTimeline content={content.home.experience} />
      <OtherProjects content={content} />

      <section className="section-shell about-section" id={portfolioSections.profile} aria-labelledby="about-title">
        <header className="section-heading">
          <p className="eyebrow">{content.home.story.eyebrow}</p>
          <h2 id="about-title">{content.home.story.title}</h2>
        </header>
        <div className="about-section__copy">
          {content.home.story.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {content.home.education ? (
            <div className="education-summary">
              <h3>{content.home.education.title}</h3>
              {content.home.education.items.map((item) => <p key={item.title}><strong>{item.title}</strong><br />{item.note}</p>)}
              {content.home.english ? <p>{content.home.english.proof}</p> : null}
            </div>
          ) : null}
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
            {content.contact.links.map((link) => link.href.startsWith("http") ? (
              <ExternalLink className="action-link action-link--secondary" externalLabel={content.a11y.externalLink} href={link.href} label={link.label} key={link.href} />
            ) : <a className="action-link action-link--secondary" href={link.href} key={link.href}>{link.label}</a>)}
            {content.profile.linkedinUrl ? <ExternalLink className="action-link action-link--secondary" externalLabel={content.a11y.externalLink} href={content.profile.linkedinUrl} label="LinkedIn" /> : null}
          </div>
        </div>
      </section>
    </>
  );
}
