"use client";

import type { CSSProperties } from "react";
import type { ScrollNavigationContent } from "@/types/portfolio";
import { useActiveSection } from "../navigation/active-section-provider";

type ScrollProgressNavigationProps = {
  readonly content: ScrollNavigationContent;
};

export function ScrollProgressNavigation({ content }: ScrollProgressNavigationProps) {
  const { activeHref, navigateToHref } = useActiveSection();
  const activeIndex = Math.max(0, content.chapters.findIndex((chapter) => chapter.href === activeHref));

  const activeChapter = content.chapters[activeIndex] ?? content.chapters[0];
  const progress = content.chapters.length > 1 ? activeIndex / (content.chapters.length - 1) : 1;
  const progressStyle = {
    "--active-index": activeIndex,
    "--scroll-progress": progress,
  } as CSSProperties;

  return (
    <nav className="scroll-progress" aria-label={content.label} style={progressStyle}>
      <span className="scroll-progress__track" aria-hidden="true">
        <span />
      </span>
      <span className="scroll-progress__active-indicator" aria-hidden="true" />
      <ol>
        {content.chapters.map((chapter, index) => (
          <li data-complete={index < activeIndex} key={chapter.href}>
            <a
              aria-current={index === activeIndex ? "step" : undefined}
              href={chapter.href}
              onClick={() => navigateToHref(chapter.href)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{chapter.label}</strong>
            </a>
          </li>
        ))}
      </ol>
      {activeChapter ? (
        <p className="scroll-progress__mobile-label" aria-live="polite">
          <span>{String(activeIndex + 1).padStart(2, "0")}</span>
          {activeChapter.label}
        </p>
      ) : null}
    </nav>
  );
}
