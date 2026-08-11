import type { ReactNode } from "react";
import { getPortfolioContent } from "@/lib/portfolio";
import type { Locale } from "@/types/portfolio";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

type RootShellProps = {
  readonly children: ReactNode;
  readonly locale: Locale;
};

function ThemeScript() {
  const script = `
    (function () {
      try {
        var storedTheme = window.localStorage.getItem("portfolio-theme");
        var prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
        var theme = storedTheme === "light" || storedTheme === "dark"
          ? storedTheme
          : prefersLight ? "light" : "dark";
        document.documentElement.dataset.theme = theme;
      } catch (error) {
        document.documentElement.dataset.theme = "dark";
      }
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}

export function RootShell({ children, locale }: RootShellProps) {
  const content = getPortfolioContent(locale);

  return (
    <html lang={content.lang} data-theme="dark" suppressHydrationWarning>
      <body>
        <ThemeScript />
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
