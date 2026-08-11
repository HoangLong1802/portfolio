export const supportedLocales = ["en", "vi"] as const;

export type Locale = (typeof supportedLocales)[number];

export type NavigationItem = {
  readonly label: string;
  readonly href: `/${string}` | `#${string}`;
};

export type ContactLink = {
  readonly label: string;
  readonly href: string;
};

export type Metric = {
  readonly label: string;
  readonly source: string;
  readonly value: string;
  readonly visibility: "internal" | "public";
};

export type FocusItem = {
  readonly title: string;
  readonly body: string;
};

export type SectionCopy = {
  readonly body: string;
  readonly eyebrow: string;
  readonly title: string;
};

export type HeroCopy = {
  readonly eyebrow: string;
  readonly primaryActionLabel: string;
  readonly secondaryActionLabel: string;
  readonly summary: string;
  readonly title: string;
};

export type HomeContent = {
  readonly contact: SectionCopy;
  readonly focus: SectionCopy & {
    readonly items: readonly FocusItem[];
  };
  readonly hero: HeroCopy;
  readonly metrics: readonly Metric[];
  readonly metricsLabel: string;
  readonly projects: SectionCopy;
};

export type Profile = {
  readonly name: string;
  readonly role: string;
  readonly summary: string;
};

export type EvidenceLink = {
  readonly href: string;
  readonly label: string;
  readonly note: string;
};

export type ProjectCategory =
  | "automation-learning"
  | "data-science-learning"
  | "full-stack-learning"
  | "portfolio-lab"
  | "simulation-learning";

export type Project = {
  readonly category: ProjectCategory;
  readonly categoryLabel: string;
  readonly contributions: readonly string[];
  readonly evidence: readonly EvidenceLink[];
  readonly limitations: readonly string[];
  readonly maturityLabel: string;
  readonly problem: string;
  readonly slug: string;
  readonly summary: string;
  readonly techStack: readonly string[];
  readonly title: string;
};

export type ProjectLabels = {
  readonly backToProjects: string;
  readonly context: string;
  readonly contributions: string;
  readonly evidence: string;
  readonly limitations: string;
  readonly problem: string;
  readonly readCaseStudy: string;
  readonly techStack: string;
};

export type SiteContent = {
  readonly description: string;
  readonly lastUpdated: string;
  readonly title: string;
};

export type ContactContent = {
  readonly links: readonly ContactLink[];
  readonly pendingNote: string;
};

export type A11yContent = {
  readonly primaryNavigation: string;
  readonly skipToContent: string;
};

export type FooterContent = {
  readonly note: string;
  readonly updatedLabel: string;
};

export type NotFoundContent = {
  readonly actionLabel: string;
  readonly body: string;
  readonly eyebrow: string;
  readonly title: string;
};

export type PortfolioContent = {
  readonly a11y: A11yContent;
  readonly contact: ContactContent;
  readonly footer: FooterContent;
  readonly home: HomeContent;
  readonly lang: "en" | "vi";
  readonly languageSwitchLabel: string;
  readonly locale: Locale;
  readonly navigation: readonly NavigationItem[];
  readonly notFound: NotFoundContent;
  readonly profile: Profile;
  readonly projectLabels: ProjectLabels;
  readonly projects: readonly Project[];
  readonly site: SiteContent;
};
