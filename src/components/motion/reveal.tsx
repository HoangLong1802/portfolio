"use client";

import type { ReactNode } from "react";
import { useReducedMotion } from "motion/react";
import * as m from "motion/react-m";

type RevealProps = {
  readonly children: ReactNode;
  readonly className?: string;
  readonly pattern?: "content" | "heading";
};

export function Reveal({ children, className = "", pattern = "content" }: RevealProps) {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const distance = pattern === "heading" ? 18 : 26;
  const revealMotion = prefersReducedMotion
    ? { initial: false as const }
    : {
        initial: { opacity: 0, y: distance },
        whileInView: { opacity: 1, y: 0 },
      };

  return (
    <m.div
      {...revealMotion}
      className={`reveal-block reveal-block--${pattern} ${className}`.trim()}
      data-reveal={pattern}
      transition={{ duration: pattern === "heading" ? 0.3 : 0.36, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ amount: pattern === "heading" ? 0.35 : 0.16, once: true }}
    >
      {children}
    </m.div>
  );
}
