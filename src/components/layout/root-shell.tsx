import type { ReactNode } from "react";
import { getPortfolioContent } from "@/lib/portfolio";
import type { Locale } from "@/types/portfolio";
import { LocalizedSkipLink, PortfolioLocaleProvider } from "../localization/portfolio-locale-provider";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

type RootShellProps = {
  readonly children: ReactNode;
  readonly locale: Locale;
};

export function RootShell({ children, locale }: RootShellProps) {
  const content = getPortfolioContent(locale);

  return (
    <html lang={content.lang} data-theme="dark">
      <body>
        <PortfolioLocaleProvider initialLocale={locale}>
          <LocalizedSkipLink />
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
        </PortfolioLocaleProvider>
      </body>
    </html>
  );
}
