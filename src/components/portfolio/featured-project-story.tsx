"use client";

import Link from "next/link";
import type { PointerEvent, ReactNode } from "react";
import { useRef, useState, useSyncExternalStore } from "react";
import {
  LazyMotion,
  MotionConfig,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import * as m from "motion/react-m";
import type { FeaturedProject, Locale, ProjectLabels, SectionCopy } from "@/types/portfolio";
import { ProjectStoryVisual } from "./project-story-visual";

const desktopQuery = "(min-width: 64rem)";
const finePointerQuery = "(hover: hover) and (pointer: fine)";
const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

type FeaturedProjectStoryProps = {
  readonly children?: ReactNode;
  readonly externalLabel: string;
  readonly labels: ProjectLabels;
  readonly locale: Locale;
  readonly projects: readonly FeaturedProject[];
  readonly section: SectionCopy;
};

type ProjectCardProps = {
  readonly active: boolean;
  readonly externalLabel: string;
  readonly index: number;
  readonly labels: ProjectLabels;
  readonly locale: Locale;
  readonly project: FeaturedProject;
  readonly total: number;
};

type DesktopProjectCardProps = ProjectCardProps & {
  readonly progress: MotionValue<number>;
};

type MobileProjectCardProps = ProjectCardProps & {
  readonly staticMotion: boolean;
};

function subscribeToDesktop(callback: () => void) {
  const mediaQuery = window.matchMedia(desktopQuery);
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getDesktopSnapshot() {
  return window.matchMedia(desktopQuery).matches;
}

function getServerSnapshot() {
  return false;
}

function subscribeToReducedMotion(callback: () => void) {
  const mediaQuery = window.matchMedia(reducedMotionQuery);
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia(reducedMotionQuery).matches;
}

function getProjectPath(locale: Locale, slug: string) {
  const path = `/projects/${slug}`;
  return locale === "vi" ? `/vi${path}` : path;
}

function getProjectPositionLabel(template: string, index: number, total: number) {
  return template.replace("{current}", String(index + 1)).replace("{total}", String(total));
}

function getProjectLinks(project: FeaturedProject) {
  const source = project.evidence.find((item) => item.href.startsWith("https://github.com/"));
  const demo = project.evidence.find(
    (item) =>
      !item.href.startsWith("https://github.com/") &&
      /demo/i.test(`${item.label} ${item.note}`),
  );

  return { demo, source };
}

function ProjectActions({
  active = true,
  externalLabel,
  labels,
  locale,
  project,
}: Pick<ProjectCardProps, "externalLabel" | "labels" | "locale" | "project"> & {
  readonly active?: boolean;
}) {
  const { demo, source } = getProjectLinks(project);
  const tabIndex = active ? undefined : -1;

  return (
    <div className="featured-card__actions">
      <Link
        className="story-link story-link--primary"
        href={getProjectPath(locale, project.slug)}
        tabIndex={tabIndex}
      >
        <span>{labels.readCaseStudy}</span>
        <span className="story-link__icon" aria-hidden="true">
          {"\u2192"}
        </span>
      </Link>
      {demo ? (
        <a className="story-link" href={demo.href} tabIndex={tabIndex}>
          <span>{labels.liveDemo}</span>
          <span className="story-link__icon" aria-hidden="true">
            {"\u2197"}
          </span>
          <span className="sr-only"> ({externalLabel})</span>
        </a>
      ) : null}
      {source ? (
        <a className="story-link" href={source.href} tabIndex={tabIndex}>
          <span>{labels.sourceRepository}</span>
          <span className="story-link__icon" aria-hidden="true">
            {"\u2197"}
          </span>
          <span className="sr-only"> ({externalLabel})</span>
        </a>
      ) : null}
    </div>
  );
}

function ProjectNarrative({ labels, project }: Pick<ProjectCardProps, "labels" | "project">) {
  return (
    <div className="featured-card__narrative">
      <div className="featured-card__fact">
        <p className="featured-card__label">{labels.problem}</p>
        <p>{project.problem}</p>
      </div>
      <div className="featured-card__fact">
        <p className="featured-card__label">{labels.value}</p>
        <p>{project.story.value}</p>
      </div>
      <div className="featured-card__fact">
        <p className="featured-card__label">{labels.role}</p>
        <p>{project.story.role}</p>
      </div>
    </div>
  );
}

function ProjectTech({ labels, project }: Pick<ProjectCardProps, "labels" | "project">) {
  return (
    <ul className="featured-card__tech" aria-label={labels.techStack}>
      {project.techStack.slice(0, 5).map((technology) => (
        <li key={technology}>{technology}</li>
      ))}
    </ul>
  );
}

function MobileProjectCard(props: MobileProjectCardProps) {
  const { externalLabel, index, labels, locale, project, staticMotion, total } = props;
  const revealProps = staticMotion
    ? { initial: false as const }
    : { initial: { opacity: 0.96, y: 8 }, whileInView: { opacity: 1, y: 0 } };

  return (
    <m.article
      {...revealProps}
      className="featured-card featured-card--mobile"
      data-project={project.slug}
      viewport={{ amount: 0.18, once: true }}
    >
      <ProjectStoryVisual project={project} />
      <div className="featured-card__content">
        <div className="featured-card__topline">
          <span>{getProjectPositionLabel(labels.projectOf, index, total)}</span>
          <span>{project.categoryLabel}</span>
        </div>
        <h3>{project.title}</h3>
        <ProjectNarrative labels={labels} project={project} />
        <ProjectTech labels={labels} project={project} />
        <ProjectActions
          externalLabel={externalLabel}
          labels={labels}
          locale={locale}
          project={project}
        />
      </div>
    </m.article>
  );
}

function DesktopProjectCard(props: DesktopProjectCardProps) {
  const { active, externalLabel, index, labels, locale, progress, project, total } = props;
  const segment = 1 / total;
  const entry = index * segment;
  const settled = entry + segment * 0.18;
  const released = (index + 1) * segment - segment * 0.18;
  const exit = (index + 1) * segment;
  const opacity = useTransform(
    progress,
    [entry, settled, released, exit],
    [index === 0 ? 1 : 0, 1, 1, index === total - 1 ? 1 : 0],
  );
  const y = useTransform(progress, [entry, settled, released, exit], [24, 0, 0, -24]);
  const scale = useTransform(progress, [entry, settled, released, exit], [0.97, 1, 1, 0.97]);
  const contentOpacity = useTransform(
    progress,
    [entry, settled, released, exit],
    [index === 0 ? 1 : 0.7, 1, 1, index === total - 1 ? 1 : 0.7],
  );
  const rotateXTarget = useMotionValue(0);
  const rotateYTarget = useMotionValue(0);
  const reflectionX = useMotionValue(0);
  const reflectionY = useMotionValue(0);
  const reflectionOpacity = useMotionValue(0);
  const rotateX = useSpring(rotateXTarget, { damping: 24, stiffness: 220 });
  const rotateY = useSpring(rotateYTarget, { damping: 24, stiffness: 220 });

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (!active || event.pointerType !== "mouse" || !window.matchMedia(finePointerQuery).matches) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
    const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;
    rotateXTarget.set(vertical * -4);
    rotateYTarget.set(horizontal * 4);
    reflectionX.set(horizontal * 32);
    reflectionY.set(vertical * 24);
    reflectionOpacity.set(0.28);
  }

  function resetPointerEffect() {
    rotateXTarget.set(0);
    rotateYTarget.set(0);
    reflectionOpacity.set(0);
  }

  return (
    <m.article
      aria-label={`${getProjectPositionLabel(labels.projectOf, index, total)}: ${project.title}`}
      className="featured-card featured-card--desktop"
      data-active={active}
      data-project={project.slug}
      style={{ opacity, scale, y, zIndex: active ? 2 : 1 }}
    >
      <m.div
        className="featured-card__tilt"
        onPointerLeave={resetPointerEffect}
        onPointerMove={handlePointerMove}
        style={{ rotateX, rotateY }}
      >
        <m.span
          aria-hidden="true"
          className="featured-card__reflection"
          style={{ opacity: reflectionOpacity, x: reflectionX, y: reflectionY }}
        />
        <ProjectStoryVisual project={project} />
        <m.div className="featured-card__content" style={{ opacity: contentOpacity }}>
          <div className="featured-card__topline">
            <span>{project.categoryLabel}</span>
            <span>{project.maturityLabel}</span>
          </div>
          <h3>{project.title}</h3>
          <ProjectNarrative labels={labels} project={project} />
          <ProjectTech labels={labels} project={project} />
          <ProjectActions
            active={active}
            externalLabel={externalLabel}
            labels={labels}
            locale={locale}
            project={project}
          />
        </m.div>
      </m.div>
    </m.article>
  );
}

function StoryHeading({ section }: { readonly section: SectionCopy }) {
  return (
    <header className="featured-story__heading">
      <p className="eyebrow">{section.eyebrow}</p>
      <h2 id="featured-work-title">{section.title}</h2>
      <p>{section.body}</p>
    </header>
  );
}

function MobileStory({
  externalLabel,
  labels,
  locale,
  projects,
  section,
  staticMotion,
}: Omit<FeaturedProjectStoryProps, "children"> & { readonly staticMotion: boolean }) {
  return (
    <div className="featured-story__mobile">
      <StoryHeading section={section} />
      <div className="featured-story__list">
        {projects.map((project, index) => (
          <MobileProjectCard
            active
            externalLabel={externalLabel}
            index={index}
            key={project.slug}
            labels={labels}
            locale={locale}
            project={project}
            staticMotion={staticMotion}
            total={projects.length}
          />
        ))}
      </div>
    </div>
  );
}

function DesktopStory({
  externalLabel,
  labels,
  locale,
  projects,
  section,
}: Omit<FeaturedProjectStoryProps, "children">) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
    target: scrollContainerRef,
  });
  const progress = useSpring(scrollYProgress, { damping: 32, mass: 0.2, stiffness: 140 });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const nextIndex = Math.min(projects.length - 1, Math.floor(value * projects.length));
    setActiveIndex((currentIndex) => (currentIndex === nextIndex ? currentIndex : nextIndex));
  });

  function navigateToProject(index: number) {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) {
      return;
    }

    const sectionTop = window.scrollY + scrollContainer.getBoundingClientRect().top;
    const travel = Math.max(0, scrollContainer.offsetHeight - window.innerHeight);
    const ratio = projects.length > 0 ? (index + 0.5) / projects.length : 0;
    window.scrollTo({ behavior: "smooth", top: sectionTop + travel * ratio });
  }

  const activeProject = projects[activeIndex];

  return (
    <div className="featured-story__scroll" ref={scrollContainerRef}>
      <div className="featured-story__sticky" data-active-project={activeIndex}>
        <div className="featured-story__backdrop" aria-hidden="true" />
        <StoryHeading section={section} />
        <div className="featured-story__desktop-layout">
          <nav className="project-progress" aria-label={labels.projectNavigation}>
            <m.span className="project-progress__line" aria-hidden="true" style={{ scaleY: progress }} />
            {projects.map((project, index) => {
              const active = index === activeIndex;
              return (
                <button
                  aria-current={active ? "step" : undefined}
                  aria-label={`${getProjectPositionLabel(labels.projectOf, index, projects.length)}: ${project.title}`}
                  className="project-progress__button"
                  data-active={active}
                  key={project.slug}
                  onClick={() => navigateToProject(index)}
                  type="button"
                >
                  <span className="project-progress__number" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="project-progress__title" aria-hidden="true">
                    {project.title}
                  </span>
                </button>
              );
            })}
          </nav>
          <div className="featured-story__stage">
            {projects.map((project, index) => (
              <DesktopProjectCard
                active={index === activeIndex}
                externalLabel={externalLabel}
                index={index}
                key={project.slug}
                labels={labels}
                locale={locale}
                progress={progress}
                project={project}
                total={projects.length}
              />
            ))}
          </div>
        </div>
        <p className="sr-only" aria-live="polite" aria-atomic="true">
          {activeProject
            ? `${getProjectPositionLabel(labels.projectOf, activeIndex, projects.length)}: ${activeProject.title}`
            : null}
        </p>
      </div>
    </div>
  );
}

const loadMotionFeatures = () =>
  import("./featured-project-motion-features").then((module) => module.default);

export function FeaturedProjectStory({
  children,
  externalLabel,
  labels,
  locale,
  projects,
  section,
}: FeaturedProjectStoryProps) {
  const isDesktop = useSyncExternalStore(subscribeToDesktop, getDesktopSnapshot, getServerSnapshot);
  const motionPreference = useReducedMotion() ?? false;
  const liveReducedMotionPreference = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getServerSnapshot,
  );
  const prefersReducedMotion = motionPreference || liveReducedMotionPreference;

  return (
    <section className="featured-story section-shell" id="projects" aria-labelledby="featured-work-title">
      <MotionConfig reducedMotion="user" transition={{ duration: 0.32, ease: "easeOut" }}>
        <LazyMotion features={loadMotionFeatures} strict>
          {isDesktop && !prefersReducedMotion ? (
            <DesktopStory
              externalLabel={externalLabel}
              labels={labels}
              locale={locale}
              projects={projects}
              section={section}
            />
          ) : (
            <MobileStory
              externalLabel={externalLabel}
              labels={labels}
              locale={locale}
              projects={projects}
              section={section}
              staticMotion={prefersReducedMotion}
            />
          )}
        </LazyMotion>
      </MotionConfig>
      {children}
    </section>
  );
}
