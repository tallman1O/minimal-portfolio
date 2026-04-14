import { TestimonialInterface } from "@/components/ui/animated-blur-testimonials";

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
  workMode: "on-site" | "remote";
  /** Shows “Working” badge (e.g. current role) */
  isCurrent?: boolean;
  achievements: string[];
};

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
export type User = {
  firstName: string;
  lastName: string;
  displayName: string;
  username: string;
  gender: "male" | "female" | "non-binary";
  pronouns: string;
  bio: string;
  morphingText: string[];
  address: string;
  email: string;
  website: string;
  jobTitle: string;
  /** Public URL to avatar image */
  avatar: string;
  /** SEO keywords list for metadata */
  keywords: string[];
  timeZone: string;
  dateCreated: string;
  workExperience: WorkExperienceInterface[];
  projects: ProjectsInterface[];
  testimonials: TestimonialInterface[];
};
