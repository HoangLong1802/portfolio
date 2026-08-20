"use client";

import type { ReactNode } from "react";
import { LazyMotion, MotionConfig } from "motion/react";

type PortfolioMotionProviderProps = {
  readonly children: ReactNode;
};

const loadMotionFeatures = () =>
  import("../portfolio/featured-project-motion-features").then((module) => module.default);

export function PortfolioMotionProvider({ children }: PortfolioMotionProviderProps) {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}>
      <LazyMotion features={loadMotionFeatures} strict>
        {children}
      </LazyMotion>
    </MotionConfig>
  );
}
