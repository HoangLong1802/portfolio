export const portfolioSections = {
  home: "home",
  profile: "profile",
  experience: "experience",
  skills: "skills",
  projects: "projects",
  helpdeskLab: "helpdesk-lab",
  workflow: "workflow",
  engineeringProjects: "engineering-projects",
  projectCaseStudy: "project-case-study",
  certifications: "certifications",
  careerGoal: "career-goal",
  contact: "contact",
} as const;

export const portfolioSectionIds = Object.values(portfolioSections);

export const portfolioProjectSelection = [
  "helpdesk-lab",
  "devmentor-ai",
  "jewelry-commerce",
] as const;
