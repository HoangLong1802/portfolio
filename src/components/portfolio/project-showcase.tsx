"use client";

import { useState, type KeyboardEvent } from "react";
import { AnimatePresence, useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
import { portfolioProjectSelection, portfolioSections } from "@/config/portfolio-sections";
import type { PortfolioContent } from "@/types/portfolio";
import { PageSection } from "../ui/page-section";
import { FeaturedHelpdesk } from "./featured-helpdesk";
import { IncidentWorkflow } from "./incident-workflow";
import { ProjectCard } from "./project-card";
import { SelectedProjectCaseStudy } from "./selected-project-case-study";

type ProjectShowcaseProps = {
  readonly content: PortfolioContent;
};

export function ProjectShowcase({ content }: ProjectShowcaseProps) {
  const projects = portfolioProjectSelection.flatMap((slug) => {
    const project = content.projects.find((item) => item.slug === slug);
    return project ? [project] : [];
  });
  const [selectedProjectSlug, setSelectedProjectSlug] = useState(projects[0]?.slug ?? "");
  const selectedProject = projects.find((project) => project.slug === selectedProjectSlug) ?? projects[0];
  const prefersReducedMotion = useReducedMotion() ?? false;

  if (!selectedProject) return null;

  function selectProject(slug: string, moveFocus = false) {
    setSelectedProjectSlug(slug);
    if (moveFocus) {
      window.requestAnimationFrame(() => document.getElementById(`project-tab-${slug}`)?.focus());
    }
  }

  function handleSelectionKeyDown(event: KeyboardEvent<HTMLButtonElement>, slug: string) {
    const currentIndex = projects.findIndex((project) => project.slug === slug);
    let nextIndex: number | undefined;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = (currentIndex + 1) % projects.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex = (currentIndex - 1 + projects.length) % projects.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = projects.length - 1;
    }

    if (nextIndex === undefined) return;
    event.preventDefault();
    const nextProject = projects[nextIndex];
    if (nextProject) selectProject(nextProject.slug, true);
  }

  const cardContainerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07 } },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, transition: { duration: 0.32 }, y: 0 },
  };
  const cardRevealMotion = prefersReducedMotion
    ? { initial: false as const }
    : { initial: "hidden", whileInView: "visible" };
  const panelMotion = prefersReducedMotion
    ? { animate: { opacity: 1 }, exit: { opacity: 1 }, initial: false as const }
    : {
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -8 },
        initial: { opacity: 0, y: 14 },
      };

  return (
    <>
      <PageSection
        body={content.home.projectOverview.body}
        eyebrow={content.home.projectOverview.eyebrow}
        id={portfolioSections.projects}
        title={content.home.projectOverview.title}
      >
        <m.div
          {...cardRevealMotion}
          aria-label={content.home.projectOverview.title}
          className="project-selector__tabs"
          data-navigation-parent={portfolioSections.projects}
          id={portfolioSections.engineeringProjects}
          role="tablist"
          variants={cardContainerVariants}
          viewport={{ amount: 0.12, once: true }}
        >
          {projects.map((project) => {
            const selected = project.slug === selectedProject.slug;
            return (
              <m.div className="project-selector__card" key={project.slug} variants={cardVariants}>
                <ProjectCard
                  content={content}
                  onSelect={selectProject}
                  onSelectionKeyDown={handleSelectionKeyDown}
                  panelId={portfolioSections.projectCaseStudy}
                  project={project}
                  selected={selected}
                  selectionTabIndex={selected ? 0 : -1}
                />
              </m.div>
            );
          })}
        </m.div>
      </PageSection>

      <div
        aria-labelledby={`project-tab-${selectedProject.slug}`}
        className="project-selector__panel"
        data-navigation-parent={portfolioSections.projects}
        id={portfolioSections.projectCaseStudy}
        role="tabpanel"
        tabIndex={0}
      >
        <AnimatePresence initial={false} mode="wait">
          <m.div
            {...panelMotion}
            className="project-selector__panel-content"
            key={selectedProject.slug}
            transition={{ duration: prefersReducedMotion ? 0 : 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            {selectedProject.slug === "helpdesk-lab" ? (
              <>
                <FeaturedHelpdesk content={content.home.featuredLab} externalLabel={content.a11y.externalLink} />
                <IncidentWorkflow content={content.home.incidentWorkflow} />
              </>
            ) : (
              <SelectedProjectCaseStudy content={content} project={selectedProject} />
            )}
          </m.div>
        </AnimatePresence>
      </div>
    </>
  );
}
