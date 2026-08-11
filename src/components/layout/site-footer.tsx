import type { PortfolioContent } from "@/types/portfolio";

type SiteFooterProps = {
  readonly content: PortfolioContent;
};

export function SiteFooter({ content }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p>{content.footer.note}</p>
        <p>{content.footer.updatedLabel}</p>
      </div>
    </footer>
  );
}
