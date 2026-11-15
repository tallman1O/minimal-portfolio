// TODO: undo later — re-enable CV dock icon
// import { ResumeButton } from "@/components/ui/resume-button";
import { ThemeToggleButton } from "@/components/ui/ThemeToggleButton";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconHome,
} from "@tabler/icons-react";
import { LINKEDIN_URL, GITHUB_URL, X_URL } from "@/lib/url";

export const NavbarLinks = [
  {
    title: "Home",
    icon: (
      <IconHome />
    ),
    href: "/",
  },
  {
    title: "LinkedIn",
    icon: (
      <IconBrandLinkedin />
    ),
    href: LINKEDIN_URL,
  },
  {
    title: "Twitter",
    icon: (
      <IconBrandX />
    ),
    href: X_URL,
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub />
    ),
    href: GITHUB_URL,
  },
  // {
  //   title: "CV",
  //   icon: <ResumeButton />,
  // },
  {
    title: "Change Theme",
    icon: <ThemeToggleButton />,
  },
];
