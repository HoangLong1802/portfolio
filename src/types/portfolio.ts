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

export type SupportFlowStep = {
  readonly body: string;
  readonly title: string;
};

export type SupportFlowContent = {
  readonly description: string;
  readonly eyebrow: string;
  readonly note: string;
  readonly steps: readonly SupportFlowStep[];
  readonly title: string;
};

export type SectionCopy = {
  readonly body: string;
  readonly eyebrow: string;
  readonly title: string;
};

export type HeroCopy = {
  readonly actions: readonly ContactLink[];
  readonly eyebrow: string;
  readonly highlightLabel: string;
  readonly highlights: readonly string[];
  readonly statusItems: readonly {
    readonly label: string;
    readonly value: string;
  }[];
  readonly statusLabel: string;
  readonly statusNote: string;
  readonly summary: string;
  readonly title: string;
};

export type SupportProfileStoryContent = {
  readonly capabilities: readonly string[];
  readonly description: readonly string[];
  readonly eyebrow: string;
  readonly title: string;
};

export type PersonalStoryContent = SectionCopy & {
  readonly paragraphs: readonly string[];
};

export type ScrollNavigationContent = {
  readonly chapters: readonly {
    readonly href: `#${string}`;
    readonly label: string;
  }[];
  readonly label: string;
};

export type ExperienceItem = {
  readonly company: string;
  readonly headline?: string;
  readonly highlights: readonly string[];
  readonly label?: string;
  readonly period: string;
  readonly responsibilities: readonly string[];
  readonly role: string;
  readonly tags: readonly string[];
};

export type ExperienceContent = SectionCopy & {
  readonly items: readonly ExperienceItem[];
};

export type SkillGroup = {
  readonly items: readonly string[];
  readonly title: string;
};

export type SkillsContent = SectionCopy & {
  readonly groups: readonly SkillGroup[];
};

export type FeatureItem = {
  readonly body: string;
  readonly points: readonly string[];
  readonly title: string;
};

export type FeaturedLabContent = SectionCopy & {
  readonly actionLabel: string;
  readonly features: readonly FeatureItem[];
  readonly note: string;
  readonly sourceUrl: string;
  readonly techStack: readonly string[];
  readonly techStackLabel: string;
  readonly validation: readonly {
    readonly label: string;
    readonly value: string;
  }[];
  readonly validationLabel: string;
  readonly whyBody: readonly string[];
  readonly whyStatement: string;
  readonly whyTitle: string;
};

export type IncidentWorkflowStep = {
  readonly label: string;
  readonly thinking: string;
};

export type IncidentWorkflowContent = SectionCopy & {
  readonly note: string;
  readonly steps: readonly (string | IncidentWorkflowStep)[];
};

export type Certification = {
  readonly issuer: string;
  readonly note?: string;
  readonly title: string;
};

export type CertificationsContent = SectionCopy & {
  readonly items: readonly Certification[];
};

export type HandsOnLabsContent = SectionCopy & {
  readonly items: readonly {
    readonly body: string;
    readonly href: string;
    readonly items: readonly string[];
    readonly label: string;
    readonly title: string;
  }[];
};

export type EducationContent = SectionCopy & {
  readonly items: readonly {
    readonly note: string;
    readonly title: string;
  }[];
};

export type EnglishContent = SectionCopy & {
  readonly proof: string;
};

export type DevOpsDirectionContent = SectionCopy & {
  readonly currentItems: readonly string[];
  readonly currentLabel: string;
  readonly flow: readonly string[];
  readonly futureItems: readonly string[];
  readonly futureLabel: string;
  readonly label: string;
  readonly statement: string;
};

export type SupportValuesContent = SectionCopy & {
  readonly items: readonly FocusItem[];
};

export type CareerGoalContent = {
  readonly closing: readonly string[];
  readonly connectionFlow: readonly string[];
  readonly connectionLabel: string;
  readonly eyebrow: string;
  readonly immediateGoal: string;
  readonly insight: string;
  readonly labStory: string;
  readonly focusItems?: readonly string[];
  readonly longTermText: string;
  readonly longTermTitle: string;
  readonly opening: readonly string[];
  readonly path: readonly {
    readonly description: string;
    readonly title: string;
  }[];
  readonly pathLabel: string;
  readonly rationale: string;
  readonly title: string;
};

export type HomeContent = {
  readonly careerGoal: CareerGoalContent;
  readonly certifications: CertificationsContent;
  readonly contact: SectionCopy;
  readonly devOpsDirection?: DevOpsDirectionContent;
  readonly education?: EducationContent;
  readonly english?: EnglishContent;
  readonly experience: ExperienceContent;
  readonly featuredLab: FeaturedLabContent;
  readonly focus: SectionCopy & {
    readonly items: readonly FocusItem[];
  };
  readonly hero: HeroCopy;
  readonly handsOnLabs?: HandsOnLabsContent;
  readonly incidentWorkflow: IncidentWorkflowContent;
  readonly metrics: readonly Metric[];
  readonly metricsLabel: string;
  readonly projectOverview: SectionCopy;
  readonly projects: SectionCopy;
  readonly scrollNavigation: ScrollNavigationContent;
  readonly skills: SkillsContent;
  readonly story: PersonalStoryContent;
  readonly supportProfileStory: SupportProfileStoryContent;
  readonly supportFlow: SupportFlowContent;
  readonly supportValues?: SupportValuesContent;
};

export type Profile = {
  readonly email: string;
  readonly github: string;
  readonly location: string;
  readonly name: string;
  readonly role: string;
  readonly summary: string;
};

export type EvidenceLink = {
  readonly href: string;
  readonly label: string;
  readonly note: string;
};

export type ProjectStory = {
  readonly role: string;
  readonly value: string;
  readonly visualAlt: string;
  readonly visualLabels: readonly [string, string, string, string];
};

export type ProjectCategory =
  | "ai-full-stack"
  | "automation-learning"
  | "data-science-learning"
  | "full-stack-ecommerce"
  | "full-stack-learning"
  | "portfolio-lab"
  | "simulation-learning";

export type Project = {
  readonly backendUrl?: string;
  readonly backendHealthUrl?: string;
  readonly category: ProjectCategory;
  readonly categoryLabel: string;
  readonly contributions: readonly string[];
  readonly demoNotice?: string;
  readonly evidence: readonly EvidenceLink[];
  readonly limitations: readonly string[];
  readonly maturityLabel: string;
  readonly problem: string;
  readonly slug: string;
  readonly story?: ProjectStory;
  readonly summary: string;
  readonly techStack: readonly string[];
  readonly title: string;
};

export type FeaturedProject = Project & {
  readonly story: ProjectStory;
};

export type ProjectLabels = {
  readonly backToProjects: string;
  readonly context: string;
  readonly contributions: string;
  readonly evidence: string;
  readonly featuredProjects: string;
  readonly limitations: string;
  readonly liveDemo: string;
  readonly moreProjects: string;
  readonly projectNavigation: string;
  readonly projectOf: string;
  readonly problem: string;
  readonly readCaseStudy: string;
  readonly role: string;
  readonly selectProject: string;
  readonly selectedProject: string;
  readonly sourceRepository: string;
  readonly techStack: string;
  readonly value: string;
  readonly wakeBackend: string;
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
  readonly externalLink: string;
  readonly languageSwitcher: string;
  readonly mobileNavigation: string;
  readonly mobileNavigationToggle: string;
  readonly primaryNavigation: string;
  readonly themeToggle: string;
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
