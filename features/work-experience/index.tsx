"use client"

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "@/components/ui/panel";
import { cn } from "@/lib/utils";
import DownChevron from "@/components/icons/down-chevron";
import { WebHaptics } from "web-haptics";
import { TECH_STACK_MAP } from "@/lib/config";
import { DATA, WorkMode } from "./config";
import { ASSETS_URL } from "@/lib/url";

export function formatDateRange(start: string, end: string) {
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
        className="size-1.5 shrink-0 rounded-full animate-pulse bg-emerald-400"
        aria-hidden
      />
      Working
    </span>
  );
}

function WorkExperience() {
  const orderedJobs = [...DATA].reverse();
  const [openId, setOpenId] = useState<string>("");
  const [haptics] = useState(() => new WebHaptics({ debug: true }));

  return (
    <Panel id="work-experience">
      <PanelHeader>
        <PanelTitle>Experience.</PanelTitle>
      </PanelHeader>
      <PanelContent className="px-0 pb-6 pt-0">
        <ul className="divide-y divide-edge">
          {orderedJobs.map((job) => {
            const isOpen = openId === job.id;
            return (
              <li key={job.id} className="px-4 py-6">
                <button
                  type="button"
                  onClick={() => {
                    haptics.trigger([
                      { duration: 25 },
                    ], { intensity: 0.7 })  
                    setOpenId((current) => (current === job.id ? "" : job.id))
                  }}
                  className="w-full text-left"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                    <div className="min-w-0 flex-1 space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <div
                          className={cn(
                            "relative flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-md bg-muted ring-1 ring-border",
                          )}
                        >
                          <Image
                            src={`${ASSETS_URL}/icons/work/${job.id}.jpg`}
                            alt={`${job.company_name} icon`}
                            width={32}
                            height={32}
                            className="size-full object-contain"
                          />
                        </div>
                        <span className="text-lg font-semibold tracking-tight text-foreground">
                          {job.company_name}
                        </span>
                        {job.isCurrent ? <WorkingBadge /> : null}
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.22, ease: "easeOut" }}
                          className="inline-flex items-center"
                          aria-hidden
                        >
                          <DownChevron className="size-5 text-muted-foreground" />
                        </motion.span>
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
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      key={`${job.id}-content`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="mt-5 border-t border-edge pt-6">
                        <h4 className="text-sm font-semibold text-foreground">
                          Tools of the Trade
                        </h4>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {(job.tech_stack ?? []).map((tech) => (
                            <span
                              key={`${job.id}-${tech}`}
                              className="inline-flex size-11 items-center justify-center rounded-xl border-2 border-dashed border-edge bg-muted/30 p-2"
                              title={tech}
                            >
                              {TECH_STACK_MAP[tech] ? (
                                <Image
                                  src={TECH_STACK_MAP[tech]}
                                  alt={`${tech} logo`}
                                  width={24}
                                  height={24}
                                  className="size-6 object-contain"
                                />
                              ) : (
                                <span className="text-[10px] font-medium text-muted-foreground">
                                  {tech.slice(0, 3).toUpperCase()}
                                </span>
                              )}
                            </span>
                          ))}
                        </div>

                        <h4 className="mt-8 text-sm font-semibold text-foreground">
                          Battles Won 
                        </h4>
                        <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
                          {job.achievements.map((item) => (
                            <li key={item} className="text-sm leading-7">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
        {/* <div className="mt-2 flex justify-center px-4 pt-4">
          <Link href="/work">
            <Button
              variant="outline"
              size="sm"
            >
              Show all work experiences
            </Button>
          </Link>
        </div> */}
      </PanelContent>
    </Panel>
  );
}

export default WorkExperience;
