import Image from "next/image";
import { ArrowUpRight, Github, Globe, ExternalLink, GithubIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/common/button";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "@/components/ui/panel";
import { cn } from "@/lib/utils";
import { DATA, ProjectsInterface } from "./config";

function DescriptionWithUnderline({
  text,
  underline,
}: {
  text: string;
  underline?: string;
}) {
  if (!underline || !text.includes(underline)) {
    return (
      <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
    );
  }
  const [before, ...rest] = text.split(underline);
  const after = rest.join(underline);
  return (
    <p className="text-sm leading-relaxed text-muted-foreground">
      {before}
      <span className="underline decoration-foreground/40 underline-offset-2">
        {underline}
      </span>
      {after}
    </p>
  );
}

function ProjectCard({ project }: { project: ProjectsInterface }) {
  return (
    <article
      className={cn(
        "flex flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950",
        "shadow-sm dark:border-zinc-800 dark:bg-zinc-950",
      )}
    >
      {/* Preview — light area */}
      <div className="relative aspect-16/10 bg-white">
        <Image
          src={project.src}
          alt={`${project.project_name} preview`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 50vw"
          unoptimized
        />
        <div className="absolute right-3 top-3 z-10 flex flex-wrap justify-end gap-2">
          {project.live_link ? (
            <a
              href={project.live_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-black px-3 py-1.5 text-xs font-medium text-white transition-opacity hover:opacity-90"
            >
              <Globe className="size-3.5 shrink-0" aria-hidden />
              Website
            </a>
          ) : null}
          {project.github_link ? (
            <a
              href={project.github_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-black px-3 py-1.5 text-xs font-medium text-white transition-opacity hover:opacity-90"
            >
              <Github className="size-3.5 shrink-0" aria-hidden />
              Source
            </a>
          ) : null}
        </div>
        {project.imageAccentLine ? (
          <div
            className="absolute bottom-0 left-0 right-0 h-px bg-red-500"
            aria-hidden
          />
        ) : null}
      </div>

      {/* Content — dark block */}
      <div className="flex flex-1 flex-col gap-3 border-t border-zinc-800 bg-zinc-950 p-5 dark:bg-zinc-950">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight text-white">
            {project.project_name}
          </h3>
          {(project.live_link ?? project.github_link) ? (
            <a
              href={project.live_link ?? project.github_link}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-zinc-400 transition-colors hover:text-white"
              aria-label={`Open ${project.project_name}`}
            >
              <ArrowUpRight className="size-5" />
            </a>
          ) : null}
        </div>
        <p className="text-xs text-zinc-500">{project.date_range}</p>
        <DescriptionWithUnderline
          text={project.description}
          underline={project.descriptionUnderline}
        />
        <ul className="flex flex-wrap gap-2 pt-1">
          {project.tech_stack.map((tag) => (
            <li key={tag}>
              <span
                className={cn(
                  "inline-block rounded-full border border-zinc-700 bg-black px-2.5 py-1",
                  "text-xs font-medium text-zinc-100",
                )}
              >
                {tag}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <Panel id="projects">
      <PanelHeader>
        <PanelTitle>Projects.</PanelTitle>
      </PanelHeader>
      <PanelContent className="px-0 py-6">
        <>
          <div className="grid gap-6 px-4 md:grid-cols-2">
            {DATA.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="mt-2 flex justify-center px-4 pt-4">
            <Link
              href="https://github.com/tallman1O"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="sm"
                className="group overflow-hidden border-edge bg-background/70 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-muted/60 hover:shadow-[0_0_30px_-16px_rgba(255,255,255,0.45)] active:translate-y-0 active:scale-[0.99]"
              >
                <span className="inline-flex items-center gap-2">
                  <span>Checkout more on</span>
                  <GithubIcon className="size-4 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
                  <ExternalLink className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Button>
            </Link>
          </div>
        </>
      </PanelContent>
    </Panel>
  );
}

export default Projects;
