import { ThemeToggleButton } from "@/components/ThemeToggleButton";
import { IconBrandGithub, IconBrandLinkedin, IconBrandX, IconHome, IconTerminal2 } from "@tabler/icons-react";
import { LINKEDIN_URL, GITHUB_URL, X_URL } from "@/env";

export const NavbarLinks = [
  {
    title: "Home",
    icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "/",
  },
  {
    title: "Products",
    icon: (
      <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "LinkedIn",
    icon: (
      <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: LINKEDIN_URL,
  },
  {
    title: "Twitter",
    icon: (
      <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: X_URL,
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: GITHUB_URL,
  },
  {
    title: "Change Theme",
    icon: (
      <ThemeToggleButton />
    ),
    href: "#",
  }
];