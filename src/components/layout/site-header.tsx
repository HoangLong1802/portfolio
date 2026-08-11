import Link from "next/link";
import { getAlternateLocale, getLocalizedPath } from "@/lib/portfolio";
import type { PortfolioContent } from "@/types/portfolio";

type SiteHeaderProps = {
  readonly content: PortfolioContent;
};

export function SiteHeader({ content }: SiteHeaderProps) {
  const alternateLocale = getAlternateLocale(content.locale);
  const alternateHref = getLocalizedPath(alternateLocale, "/");
  const homeHref = getLocalizedPath(content.locale, "/");

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand" href={getLocalizedPath(content.locale, "/")}>
          <span className="brand__name">{content.profile.name}</span>
          <span className="brand__role">{content.profile.role}</span>
        </Link>
        <nav className="nav" aria-label={content.a11y.primaryNavigation}>
          {content.navigation.map((item) => (
            <Link className="nav__link" href={`${homeHref}${item.href}`} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="language-switch" href={alternateHref} hrefLang={alternateLocale}>
          {content.languageSwitchLabel}
        </Link>
      </div>
    </header>
  );
}
