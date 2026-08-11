import Link from "next/link";
import { getLocalizedPath, getPublicMetrics } from "@/lib/portfolio";
import type { PortfolioContent } from "@/types/portfolio";
import { PageSection } from "../ui/page-section";
import { StatusBadge } from "../ui/status-badge";

type PortfolioPageProps = {
  readonly content: PortfolioContent;
};

export function PortfolioPage({ content }: PortfolioPageProps) {
  const publicMetrics = getPublicMetrics(content.home.metrics);

  return (
    <>
      <section className="section-shell hero">
        <p className="eyebrow">{content.home.hero.eyebrow}</p>
        <h1>{content.home.hero.title}</h1>
        <p className="hero__summary">{content.home.hero.summary}</p>
        <div className="action-row">
          <Link className="action-link action-link--primary" href="#projects">
            {content.home.hero.primaryActionLabel}
          </Link>
          <Link className="action-link action-link--secondary" href="#contact">
            {content.home.hero.secondaryActionLabel}
          </Link>
        </div>
        <div className="metric-grid" aria-label={content.home.metricsLabel}>
          {publicMetrics.map((metric) => (
            <article className="metric-card" key={metric.label}>
              <p className="metric-card__value">{metric.value}</p>
              <p className="metric-card__label">{metric.label}</p>
            </article>
          ))}
        </div>
      </section>

      <PageSection
        body={content.home.focus.body}
        eyebrow={content.home.focus.eyebrow}
        id="focus"
        title={content.home.focus.title}
      >
        <div className="focus-grid">
          {content.home.focus.items.map((item) => (
            <article className="info-card" key={item.title}>
              <h3>{item.title}</h3>
              <p className="card__body">{item.body}</p>
            </article>
          ))}
        </div>
      </PageSection>

      <PageSection
        body={content.home.projects.body}
        eyebrow={content.home.projects.eyebrow}
        id="projects"
        title={content.home.projects.title}
      >
        <div className="project-grid">
          {content.projects.map((project) => (
            <article className="project-card" key={project.slug}>
              <div className="card__meta">
                <StatusBadge label={project.categoryLabel} />
                <span className="muted-text">{project.maturityLabel}</span>
              </div>
              <h3>{project.title}</h3>
              <p className="card__body">{project.summary}</p>
              <ul className="tech-list" aria-label={content.projectLabels.techStack}>
                {project.techStack.slice(0, 5).map((item) => (
                  <li className="tech-list__item" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
              <Link className="text-link" href={getLocalizedPath(content.locale, `/projects/${project.slug}`)}>
                {content.projectLabels.readCaseStudy}
              </Link>
            </article>
          ))}
        </div>
      </PageSection>

      <PageSection
        body={content.home.contact.body}
        eyebrow={content.home.contact.eyebrow}
        id="contact"
        title={content.home.contact.title}
      >
        <div className="action-row">
          {content.contact.links.map((link) => (
            <Link className="action-link action-link--secondary" href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <p className="muted-text">{content.contact.pendingNote}</p>
      </PageSection>
    </>
  );
}
