"use client";

import { usePortfolioLocale } from "../localization/portfolio-locale-provider";

export function SiteFooter() {
  const { content } = usePortfolioLocale();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p>{content.footer.note}</p>
        <p>{content.footer.updatedLabel}</p>
      </div>
    </footer>
  );
}
