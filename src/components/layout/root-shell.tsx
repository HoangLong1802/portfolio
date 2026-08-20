import type { ReactNode } from "react";
import { getPortfolioContent } from "@/lib/portfolio";
import type { Locale } from "@/types/portfolio";
import { LocalizedSkipLink, PortfolioLocaleProvider } from "../localization/portfolio-locale-provider";
import { PortfolioMotionProvider } from "../motion/portfolio-motion-provider";
import { ActiveSectionProvider } from "../navigation/active-section-provider";
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
          <PortfolioMotionProvider>
            <ActiveSectionProvider>
              <LocalizedSkipLink />
              <SiteHeader />
              <main id="main-content">{children}</main>
              <SiteFooter />
            </ActiveSectionProvider>
          </PortfolioMotionProvider>
        </PortfolioLocaleProvider>
      </body>
    </html>
  );
}
