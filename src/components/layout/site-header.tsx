import Link from "next/link";
import { getAlternateLocale, getLocalizedPath } from "@/lib/portfolio";
import type { PortfolioContent } from "@/types/portfolio";
import { ThemeToggle } from "./theme-toggle";

type SiteHeaderProps = {
  readonly content: PortfolioContent;
};

export function SiteHeader({ content }: SiteHeaderProps) {
  const alternateLocale = getAlternateLocale(content.locale);
  const alternateHref = getLocalizedPath(alternateLocale, "/");
  const homeHref = getLocalizedPath(content.locale, "/");
  const navigationItems = content.navigation.map((item) => ({
    ...item,
    href: `${homeHref}${item.href}`,
  }));

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand" href={getLocalizedPath(content.locale, "/")}>
          <span className="brand__name">{content.profile.name}</span>
          <span className="brand__role">{content.profile.role}</span>
        </Link>
        <nav className="nav" aria-label={content.a11y.primaryNavigation}>
          {navigationItems.map((item) => (
            <Link className="nav__link" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <ThemeToggle label={content.a11y.themeToggle} />
          <Link
            className="language-switch language-switch--desktop"
            href={alternateHref}
            hrefLang={alternateLocale}
          >
            {content.languageSwitchLabel}
          </Link>
          <details className="mobile-nav">
            <summary
              aria-label={content.a11y.mobileNavigationToggle}
              title={content.a11y.mobileNavigationToggle}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </summary>
            <nav aria-label={content.a11y.mobileNavigation}>
              {navigationItems.map((item) => (
                <Link className="mobile-nav__link" href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
              <Link className="mobile-nav__link" href={alternateHref} hrefLang={alternateLocale}>
                {content.languageSwitchLabel}
              </Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
