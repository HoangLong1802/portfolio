export const portfolioSections = {
  home: "home",
  profile: "profile",
  experience: "experience",
  skills: "skills",
  projects: "projects",
  workflow: "workflow",
  helpdeskLab: "helpdesk-lab",
  engineeringProjects: "engineering-projects",
  projectCaseStudy: "project-case-study",
  certifications: "certifications",
  careerGoal: "career-goal",
  contact: "contact",
} as const;

export const portfolioSectionIds = Object.values(portfolioSections);

export const portfolioProjectSelection = [
  "customer-support-operations-analytics",
] as const;

export const secondaryProjectSelection = ["automated-it-asset-inventory", "stock-prediction-ai"] as const;
