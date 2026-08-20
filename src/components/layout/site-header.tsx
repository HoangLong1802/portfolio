"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLocalizedPath } from "@/lib/portfolio";
import type { Locale } from "@/types/portfolio";
import { usePortfolioLocale } from "../localization/portfolio-locale-provider";

type LanguageSwitchProps = {
  readonly className?: string;
};

function LanguageSwitch({ className = "" }: LanguageSwitchProps) {
  const { content, locale, setLocale } = usePortfolioLocale();

  function languageButton(targetLocale: Locale, label: string) {
    const active = locale === targetLocale;
    return (
      <button
        aria-pressed={active}
        data-active={active}
        onClick={() => setLocale(targetLocale)}
        type="button"
      >
        {label}
      </button>
    );
  }

  return (
    <div className={`language-switch ${className}`.trim()} role="group" aria-label={content.a11y.languageSwitcher}>
      {languageButton("en", "EN")}
      <span aria-hidden="true">|</span>
      {languageButton("vi", "VI")}
    </div>
  );
}

export function SiteHeader() {
  const { content } = usePortfolioLocale();
  const pathname = usePathname();
  const localizedHome = getLocalizedPath(content.locale, "/");
  const isHome = pathname === "/" || pathname === "/vi";
  const navigationItems = content.navigation.map((item) => ({
    ...item,
    href: isHome ? item.href : `${localizedHome}${item.href}`,
  }));

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand" href={isHome ? "#home" : localizedHome}>
          <span className="brand__mark" aria-hidden="true">HL</span>
          <span className="brand__copy">
            <span className="brand__name">{content.profile.name}</span>
            <span className="brand__role">{content.profile.role}</span>
          </span>
        </Link>
        <nav className="nav" aria-label={content.a11y.primaryNavigation}>
          {navigationItems.map((item) => (
            <Link className="nav__link" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <LanguageSwitch className="language-switch--desktop" />
          <details className="mobile-nav">
            <summary aria-label={content.a11y.mobileNavigationToggle} title={content.a11y.mobileNavigationToggle}>
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
              <LanguageSwitch className="language-switch--mobile" />
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
