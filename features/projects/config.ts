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
    id: "readme-author",
    src: "/images/projects/readme.png",
    project_name: "README Author",
    date_range: "March 2026 – Present",
    description:
      "A zero-config CLI tool that auto-generates a professional README.md by parsing your project's package.json — detecting the tech stack, npm scripts, dependencies, and folder structure with a single command.",
    descriptionUnderline: "README.md",
    tech_stack: [
      "TypeScript",
      "Node.js",
      "Commander",
      "Chalk",
      "Ora",
      "Figlet",
      "gradient-string",
      "fs-extra",
    ],
    live_link: "https://www.npmjs.com/package/readme-author",
    github_link: "https://github.com/tallman1O/readme-author",
    imageAccentLine: true,
  },
  {
    "id": "the-hood",
    "src": "/images/projects/thehood.png",
    "project_name": "The Hood",
    "date_range": "Dec 2025",
    "description": "A private, self-destructing chat room application. Create secure rooms that automatically expire after 10 minutes, with real-time messaging and automatic message deletion. Each room supports a maximum of 2 participants, and rooms can also be manually destroyed by the creator.",
    "descriptionUnderline": "chat room application",
    "tech_stack": [
      "Next.js",
      "React",
      "Elysia.js",
      "Upstash Redis",
      "Upstash Realtime",
      "Tailwind CSS",
      "TanStack Query",
      "TypeScript",
      "Zod"
    ],
    "live_link": "https://thehood-base.vercel.app",
    "github_link": "https://github.com/tallman1O/The-Hood",
    "imageAccentLine": true
  },
  {
    "id": "prepmate",
    "src": "/images/projects/prepmate.png",
    "project_name": "PrepMate",
    "date_range": "Jan 2025 – Feb 2025",
    "description": "PrepMate is an AI-powered mock interview platform built for the CSI RenAIssance Hackathon. Users enter a job role, description, and years of experience to receive 5 dynamically generated interview questions powered by Gemini AI. Responses are recorded via microphone or webcam, then evaluated with detailed AI feedback, improvement suggestions, model answers, and a 5-star rating. A personal dashboard lets users track past interviews and practice again.",
    "descriptionUnderline": "PrepMate",
    "tech_stack": [
      "Next.js 15",
      "React 19",
      "TailwindCSS",
      "Gemini AI (gemini-2.0-flash-exp)",
      "Clerk (Authentication)",
      "Neon Database",
      "Drizzle ORM",
      "Framer Motion",
      "React Webcam",
      "React Hook Speech-to-Text",
      "UUID",
      "Moment.js",
      "Radix UI"
    ],
    "live_link": "https://prepmate.vercel.app",
    "github_link": "https://github.com/tallman1O/prepmate",
    "imageAccentLine": true
  },
  {
    "id": "d2c",
    "src": "/images/projects/d2c.png",
    "project_name": "D2C – Design to Code",
    "date_range": "Jun 2025 – Present",
    "description": "D2C is a full-stack AI-powered platform that converts wireframe images into production-ready React code. Users upload a design mockup, choose from multiple AI models (Gemini 2.0 Flash, Llama 4 Maverick, or Deepseek R1), and optionally provide a custom prompt to guide code generation. The resulting code is instantly previewed in an in-browser sandbox, editable in a live code editor, and persisted to a PostgreSQL database — all behind Firebase authentication.",
    "descriptionUnderline": "D2C",
    "tech_stack": [
      "Next.js 15",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "Firebase Auth",
      "OpenAI API",
      "Neon (PostgreSQL)",
      "Drizzle ORM",
      "Zustand",
      "Radix UI",
      "CodeSandbox Sandpack",
      "Lucide React",
      "Sonner",
      "Axios"
    ],
    live_link: "https://design2code-ai.vercel.app/",
    "github_link": "https://github.com/tallman1O/D2C",
    "imageAccentLine": true
  }
];
