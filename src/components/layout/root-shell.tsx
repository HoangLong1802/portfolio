import type { ReactNode } from "react";
import { getPortfolioContent } from "@/lib/portfolio";
import type { Locale } from "@/types/portfolio";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

type RootShellProps = {
  readonly children: ReactNode;
  readonly locale: Locale;
};

export function RootShell({ children, locale }: RootShellProps) {
  const content = getPortfolioContent(locale);

  return (
    <html lang={content.lang} suppressHydrationWarning>
      <body>
        <a className="skip-link" href="#main-content">
          {content.a11y.skipToContent}
        </a>
        <SiteHeader content={content} />
        <main id="main-content">{children}</main>
        <SiteFooter content={content} />
      </body>
    </html>
  );
}
