export type ProjectsInterface = {
    id: string;
    src: string;
    project_name: string;
    date_range: string;
    description: string;
    /** Substring in description to render underlined (e.g. product name) */
    descriptionUnderline?: string;
    tech_stack: string[];
    live_link?: string;
    github_link?: string;
    /** Thin accent line under the preview (matches reference) */
    imageAccentLine?: boolean;
  };
  
  export const DATA: ProjectsInterface[] = [
    {
      id: "prepmate",
      src: "/vercel.svg",
      project_name: "PrepMate",
      date_range: "Jan 2024 – Feb 2024",
      description:
        "A platform for students to find study partners and resources. Built with a focus on clarity and performance.",
      descriptionUnderline: "study partners",
      tech_stack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "PostgreSQL",
        "Docker",
      ],
      live_link: "https://prepmate.com",
      github_link: "https://github.com/prepmate",
      imageAccentLine: true,
    },
    {
      id: "portfolio",
      src: "/vercel.svg",
      project_name: "Portfolio",
      date_range: "Oct 2025 – Present",
      description:
        "Personal site with animated sections, theme toggle, and a minimal panel layout.",
      tech_stack: ["Next.js", "TypeScript", "Tailwind CSS", "Motion"],
      live_link: "https://vercel.com",
      github_link: "https://github.com",
      imageAccentLine: false,
    },
  ];