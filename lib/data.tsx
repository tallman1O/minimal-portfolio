import { ThemeToggleButton } from "@/components/ThemeToggleButton";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconFileCv,
  IconHome,
  IconTerminal2,
} from "@tabler/icons-react";
import { LINKEDIN_URL, GITHUB_URL, X_URL } from "@/env";

export const NavbarLinks = [
  {
    title: "Home",
    icon: (
      <IconHome />
    ),
    href: "/",
  },
  {
    title: "Products",
    icon: (
      <IconTerminal2 />
    ),
    href: "#",
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
  {
    title: "Resume",
    icon: (
      <IconFileCv />
    ),
    href: GITHUB_URL,
  },
  {
    title: "Change Theme",
    icon: <ThemeToggleButton />,
  },
];
