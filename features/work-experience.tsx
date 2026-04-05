import Image from "next/image";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "@/components/panel";
import { cn } from "@/lib/utils";
import Link from "next/link";

type WorkMode = "on-site" | "remote";

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

};

const DATA: WorkExperienceInterface[] = [
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
      "TypeScript",
      "Tailwind CSS",
      "Python",
      "Django",
      "PostgreSQL",
      "Docker",
    ],
    location: "Pune, Maharashtra",
    workMode: "on-site",
  },
  {
    id: "repos",
    company_name: "Repos Energy",
    role: "Associate Software Engineer Intern (UI Engineer)",
    role_type: "Internship",
    start_date: "January 2025",
    end_date: "Present",
    description:
      "Associate Software Engineer Intern at Repos Energy — design and development of the Repos Energy website.",
    location: "Pune, Maharashtra",
    workMode: "on-site",
    isCurrent: true,
  },
];

function formatDateRange(start: string, end: string) {
  return `${start} – ${end}`;
}

function formatLocationLine(location: string, mode: WorkMode) {
  const modeLabel = mode === "remote" ? "Remote" : "On-Site";
  return `${location} (${modeLabel})`;
}

function WorkingBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-500/30 bg-emerald-950/80 px-2 py-0.5 text-xs font-medium text-white dark:bg-emerald-950/90">
      <span
        className="size-1.5 shrink-0 rounded-full bg-emerald-400"
        aria-hidden
      />
      Working
    </span>
  );
}

function WorkExperience() {
  return (
    <Panel id="work-experience">
      <PanelHeader>
        <PanelTitle>Experience.</PanelTitle>
      </PanelHeader>
      <PanelContent className="px-0 pb-6 pt-0">
        <ul className="divide-y divide-edge">
          {[...DATA].reverse().map((job) => (
            <li
              key={job.id}
              className="flex flex-col gap-4 px-4 py-6 sm:flex-row sm:items-start sm:justify-between sm:gap-8"
            >
              <div className="min-w-0 flex-1 space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <div
                    className={cn(
                      "relative flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-md bg-muted ring-1 ring-border",
                    )}
                  >
                      <Image
                        src={`/icons/work/${job.id}.jpg`}
                        alt={`${job.company_name} icon`}
                        width={32}
                        height={32}
                        className="size-full object-contain"
                        unoptimized
                      />
                  </div>
                  <span
                    className={cn(
                      "text-lg font-semibold tracking-tight text-foreground",
                    )}
                  >
                    {job.company_name}
                  </span>
                  {job.isCurrent ? <WorkingBadge /> : null}
                </div>
                <p className="text-sm text-muted-foreground">{job.role}</p>
              </div>
              <div className="shrink-0 space-y-1 text-left sm:text-right">
                <p className="text-sm text-muted-foreground">
                  {formatDateRange(job.start_date, job.end_date)}
                </p>
                <p className="text-sm text-muted-foreground">
                  {formatLocationLine(job.location, job.workMode)}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-2 flex justify-center px-4 pt-4">
          <Link href="/work">
            <button
              type="button"
              className="rounded-lg border border-edge bg-transparent px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted/50"
            >
              Show all work experiences
            </button>
          </Link>
        </div>
      </PanelContent>
    </Panel>
  );
}

export default WorkExperience;
