"use client";

import { getProjectBySlug } from "@/lib/portfolio";
import { usePortfolioLocale } from "../localization/portfolio-locale-provider";
import { ProjectDetailPage } from "./project-detail-page";

type LocalizedProjectDetailPageProps = {
  readonly slug: string;
};

export function LocalizedProjectDetailPage({ slug }: LocalizedProjectDetailPageProps) {
  const { content, locale } = usePortfolioLocale();
  const project = getProjectBySlug(locale, slug);
  if (!project) return null;
  return <ProjectDetailPage content={content} project={project} />;
}
