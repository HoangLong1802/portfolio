"use client";

import { usePortfolioLocale } from "../localization/portfolio-locale-provider";
import { PortfolioPage } from "./portfolio-page";

export function LocalizedPortfolioPage() {
  const { content } = usePortfolioLocale();
  return <PortfolioPage content={content} />;
}
