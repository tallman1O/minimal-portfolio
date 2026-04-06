export type WorkMode = "on-site" | "remote";

type WorkExperienceInterface = {
  id: string;
  company_name: string;
  role: string;
  role_type?: string;
  start_date: string;
  end_date: string;
  description?: string;
  tech_stack?: string[];
  location: string;
  workMode: WorkMode;
  /** Shows “Working” badge (e.g. current role) */
  isCurrent?: boolean;
  achievements: string[];
};

export const DATA: WorkExperienceInterface[] = [
  {
    id: "kiddenz",
    company_name: "Kiddenz",
    role: "Software Engineer Intern (Full Stack)",
    role_type: "Internship",
    start_date: "July 2025",
    end_date: "December 2025",
    description:
      "UI Engineer at Kiddenz — design and development of the Kiddenz website.",
    tech_stack: [
      "React",
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "Python",
      "Django",
      "Docker",
      "Gitlab"
    ],
    location: "Pune, Maharashtra",
    workMode: "on-site",
    achievements: [
      "Built responsive, reusable UI components that improved development speed across the product.",
      "Integrated backend APIs and improved frontend data-fetching reliability.",
      "Collaborated with design/product to deliver polished UX improvements across key flows.",
    ],
  },
  {
    id: "repos",
    company_name: "Repos Energy",
    role: "Associate Software Engineer Intern (UI Engineer)",
    role_type: "Internship",
    start_date: "January 2026",
    end_date: "♾️",
    description:
      "Associate Software Engineer Intern at Repos Energy — design and development of the Repos Energy website.",
    tech_stack: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "React",
      "JavaScript",
      "Motion",
      "Redux",
      "Expo",
      "Tanstack",
      "Zustand",
      "Figma",
      "Jira"
    ],
    location: "Pune, Maharashtra",
    workMode: "on-site",
    isCurrent: true,
    achievements: [
      "Architected and developed core frontend infrastructure for promotional campaign workflows.",
      "Refactored large parts of the codebase, improving maintainability and delivery velocity.",
      "Improved backend API integrations with better error handling and data-fetching patterns.",
      "Raised UX quality with stronger design system consistency and accessibility improvements.",
    ],
  },
];
