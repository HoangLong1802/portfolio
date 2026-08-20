import { getPublicMetrics } from "@/lib/portfolio";
import type { PortfolioContent } from "@/types/portfolio";
import { ExternalLink } from "../ui/external-link";
import { PageSection } from "../ui/page-section";
import { CareerGoal } from "./career-goal";
import { ExperienceTimeline } from "./experience-timeline";
import { FeaturedHelpdesk } from "./featured-helpdesk";
import { IncidentWorkflow } from "./incident-workflow";
import { ScrollProgressNavigation } from "./scroll-progress-navigation";

type PortfolioPageProps = {
  readonly content: PortfolioContent;
};

export function PortfolioPage({ content }: PortfolioPageProps) {
  const publicMetrics = getPublicMetrics(content.home.metrics);

  return (
    <>
      <ScrollProgressNavigation content={content.home.scrollNavigation} />

      <section className="section-shell hero" id="home">
        <div className="hero__copy">
          <p className="eyebrow">{content.home.hero.eyebrow}</p>
          <h1>{content.profile.name}</h1>
          <p className="hero__role">{content.home.hero.title}</p>
          <p className="hero__summary">{content.home.hero.summary}</p>
          <ul className="hero__highlights" aria-label={content.home.hero.highlightLabel}>
            {content.home.hero.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
          </ul>
          <div className="action-row">
            {content.home.hero.actions.map((action, index) => (
              <a
                className={`action-link ${index === 0 ? "action-link--primary" : "action-link--secondary"}`}
                href={action.href}
                key={action.href}
              >
                <span>{action.label}</span>
                {action.href.startsWith("http") ? (
                  <>
                    <span className="external-link__icon" aria-hidden="true">{"\u2197"}</span>
                    <span className="sr-only"> ({content.a11y.externalLink})</span>
                  </>
                ) : null}
              </a>
            ))}
          </div>
        </div>
        <aside className="hero-status" aria-label={content.home.hero.statusLabel}>
          <div className="hero-status__bar">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <p>{content.home.hero.statusLabel}</p>
          </div>
          <dl>
            {content.home.hero.statusItems.map((item) => (
              <div key={item.label}>
                <dt><span aria-hidden="true" />{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
          <p className="hero-status__note">{content.home.hero.statusNote}</p>
        </aside>
      </section>

      <section className="support-profile" id="profile" aria-labelledby="support-profile-title">
        <div className="evidence-strip" aria-label={content.home.metricsLabel}>
          <div className="evidence-strip__inner">
            <p className="evidence-strip__label">{content.home.metricsLabel}</p>
            <div className="metric-grid">
              {publicMetrics.map((metric) => (
                <div className="metric-card" key={metric.label}>
                  <p className="metric-card__value">{metric.value}</p>
                  <p className="metric-card__label">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="section-shell support-profile__story">
          <p className="eyebrow">{content.home.supportProfileStory.eyebrow}</p>
          <h2 id="support-profile-title">{content.home.supportProfileStory.title}</h2>
          <div className="support-profile__description">
            {content.home.supportProfileStory.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <ol aria-label={content.home.supportProfileStory.eyebrow}>
            {content.home.supportProfileStory.capabilities.map((capability, index) => (
              <li key={capability}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <strong>{capability}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ExperienceTimeline content={content.home.experience} />

      <PageSection body={content.home.skills.body} eyebrow={content.home.skills.eyebrow} id="skills" title={content.home.skills.title}>
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
      </PageSection>

      <FeaturedHelpdesk content={content.home.featuredLab} externalLabel={content.a11y.externalLink} />
      <IncidentWorkflow content={content.home.incidentWorkflow} />

      <PageSection body={content.home.certifications.body} eyebrow={content.home.certifications.eyebrow} id="certifications" title={content.home.certifications.title}>
        <div className="certification-grid">
          {content.home.certifications.items.map((certification) => (
            <article className="certification-card" key={certification.title}>
              <span className="certification-card__mark" aria-hidden="true">✓</span>
              <div>
                <h3>{certification.title}</h3>
                <p>{certification.issuer}</p>
                {certification.note ? <p className="certification-card__note">{certification.note}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </PageSection>

      <CareerGoal content={content.home.careerGoal} />

      <PageSection body={content.home.contact.body} eyebrow={content.home.contact.eyebrow} id="contact" title={content.home.contact.title}>
        <div className="action-row">
          {content.contact.links.map((link) =>
            link.href.startsWith("http") ? (
              <ExternalLink className="action-link action-link--secondary" externalLabel={content.a11y.externalLink} href={link.href} key={link.href} label={link.label} />
            ) : (
              <a className="action-link action-link--primary" href={link.href} key={link.href}>{link.label}</a>
            ),
          )}
        </div>
        <p className="muted-text">{content.contact.pendingNote}</p>
      </PageSection>
    </>
  );
}
