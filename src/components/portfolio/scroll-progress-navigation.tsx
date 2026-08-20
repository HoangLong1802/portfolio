"use client";

import { useEffect, useState, type CSSProperties } from "react";
import type { ScrollNavigationContent } from "@/types/portfolio";

type ScrollProgressNavigationProps = {
  readonly content: ScrollNavigationContent;
};

export function ScrollProgressNavigation({ content }: ScrollProgressNavigationProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const sections = content.chapters
      .map((chapter, index) => ({ element: document.querySelector(chapter.href), index }))
      .filter((item): item is { element: Element; index: number } => item.element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (!activeEntry) return;
        const match = sections.find((item) => item.element === activeEntry.target);
        if (match) setActiveIndex(match.index);
      },
      { rootMargin: "-12% 0px -68% 0px", threshold: [0, 0.1, 0.25, 0.5] },
    );

    sections.forEach((item) => observer.observe(item.element));
    return () => observer.disconnect();
  }, [content.chapters]);

  const activeChapter = content.chapters[activeIndex] ?? content.chapters[0];
  const progress = content.chapters.length > 1 ? activeIndex / (content.chapters.length - 1) : 1;
  const progressStyle = { "--scroll-progress": progress } as CSSProperties;

  return (
    <nav className="scroll-progress" aria-label={content.label} style={progressStyle}>
      <span className="scroll-progress__track" aria-hidden="true">
        <span />
      </span>
      <ol>
        {content.chapters.map((chapter, index) => (
          <li data-complete={index < activeIndex} key={chapter.href}>
            <a aria-current={index === activeIndex ? "step" : undefined} href={chapter.href}>
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
