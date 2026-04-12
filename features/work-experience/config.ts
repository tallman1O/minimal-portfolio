import { ASSETS_URL } from "@/env";

export type WorkMode = "on-site" | "remote";

type WorkExperienceInterface = {
  id: string;
  src: string;
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
    src: `${ASSETS_URL}/icons/work/kiddenz.jpg`,
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
    workMode: "remote",
    achievements: [
      "As a Full Stack SWE Intern at Kiddenz, I owned end-to-end improvements across the product",
      "Improved Core Web Vitals and overall performance of kiddenz.com, enhancing user experience across the customer-facing website.",
      "Optimized backend API response times, reducing average latency from ~6ms to under 1ms.",
      "Built an internal operations and sales dashboard using AG Grid, driving a 10x increase in lead generation and conversion efficiency.",
    ],
  },
  {
    id: "repos",
    src: `${ASSETS_URL}/icons/work/repos.jpg`,
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
      "Owned the customer-facing React application end-to-end, handling all feature requests in a 2-week agile sprint cycle using React, Redux, Redux Thunk, and Material UI.",
      "Integrated multiple payment gateways including Razorpay, Pine Labs, HDFC, ICICI, and a custom payment method, managing all API orchestration and edge cases.",
      "Implemented core product features including push notifications, real-time web updates, and fluid UI animations for a seamless client experience.",
      "Built and optimized an internal portal for sales and operations teams, designing high-performance tables and forms capable of handling large datasets without lag.",
      "Collaborated with the hardware team to build a web-based IoT control tool using the Canvas API, bridging frontend and embedded systems.",
    ],
  },
];
