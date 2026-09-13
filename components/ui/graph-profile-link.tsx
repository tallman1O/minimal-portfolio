import Image from "next/image";
import type { ReactNode } from "react";

const GITHUB_ICON_URL =
  "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/github-light.svg";
const MONKEYTYPE_ICON_URL =
  "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/monkeytype.svg";

export function GraphProfileLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground"
    >
      {children}
    </a>
  );
}

export function GithubProfileLink({ href }: { href: string }) {
  return (
    <GraphProfileLink href={href} label="Open GitHub profile">
      <Image
        src={GITHUB_ICON_URL}
        alt=""
        width={28}
        height={28}
        className="size-7"
      />
    </GraphProfileLink>
  );
}

export function MonkeytypeProfileLink({ href }: { href: string }) {
  return (
    <GraphProfileLink href={href} label="Open Monkeytype profile">
      <Image
        src={MONKEYTYPE_ICON_URL}
        alt=""
        width={48}
        height={28}
        className="h-7 w-auto"
      />
    </GraphProfileLink>
  );
}
