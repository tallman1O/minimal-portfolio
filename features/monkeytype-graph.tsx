"use client";

import { Component, type ReactNode } from "react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { MonkeytypeProfileLink } from "@/components/ui/graph-profile-link";
import { Panel, PanelContent } from "@/components/ui/panel";
import { Separator } from "@/components/ui/separator";
import type {
  MonkeytypeActivityDay,
  MonkeytypeActivityResponse,
  MonkeytypePersonalBest,
} from "@/lib/monkeytype";
import { cn } from "@/lib/utils";
import { MONKEYTYPE_URL } from "@/lib/url";

const ActivityCalendar = dynamic(
  () =>
    import("react-activity-calendar").then((mod) => mod.ActivityCalendar),
  { ssr: false },
);

const MONKEYTYPE_THEME = {
  light: ["#ebedf0", "#fff4c2", "#f0d56c", "#e2b714", "#9a7a0c"],
  dark: ["#161b22", "#3d3414", "#7a6814", "#c9a227", "#e2b714"],
};

class MonkeytypeErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

function PersonalBestCard({
  best,
  isHighest,
}: {
  best: MonkeytypePersonalBest;
  isHighest: boolean;
}) {
  return (
    <li
      className={cn(
        "flex min-w-0 flex-col gap-1 rounded-xl border bg-muted/20 px-4 py-3",
        isHighest ? "border-[#e2b714]" : "border-edge",
      )}
    >
      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {best.label}
      </p>
      <p className="text-2xl font-semibold tracking-tight text-foreground">
        {best.wpm}
        <span className="ml-1 text-sm font-medium text-muted-foreground">WPM</span>
      </p>
      <p className="text-xs text-muted-foreground">
        {best.accuracy}% acc · {best.consistency}% cons
      </p>
    </li>
  );
}

function MonkeytypeGraphInner() {
  const { resolvedTheme } = useTheme();
  const [activity, setActivity] = useState<MonkeytypeActivityDay[]>([]);
  const [personalBests, setPersonalBests] = useState<MonkeytypePersonalBest[]>(
    [],
  );
  const [status, setStatus] = useState<"loading" | "ready" | "unavailable">(
    "loading",
  );

  useEffect(() => {
    let cancelled = false;

    fetch("/api/monkeytype")
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Monkeytype activity request failed");
        }
        return response.json() as Promise<MonkeytypeActivityResponse>;
      })
      .then((payload) => {
        if (cancelled) return;
        const nextActivity = payload.activity ?? [];
        const nextBests = payload.personalBests ?? [];
        if (nextActivity.length === 0 && nextBests.length === 0) {
          setStatus("unavailable");
          return;
        }
        setActivity(nextActivity);
        setPersonalBests(nextBests);
        setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) {
          setStatus("unavailable");
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (status !== "ready") {
    return null;
  }

  const highestWpm =
    personalBests.length > 0
      ? Math.max(...personalBests.map((best) => best.wpm))
      : 0;

  return (
    <>
      <Panel id="monkeytype-graph">
        <PanelContent className="space-y-6">
          <div className="flex items-center justify-start gap-3">
            <MonkeytypeProfileLink href={MONKEYTYPE_URL} />
            {personalBests.length > 0 ? (
              <h3 className="text-sm font-semibold text-foreground">Monke.</h3>
            ) : null}
          </div>
          {personalBests.length > 0 ? (
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {personalBests.map((best) => (
                <PersonalBestCard
                  key={best.id}
                  best={best}
                  isHighest={best.wpm === highestWpm}
                />
              ))}
            </ul>
          ) : null}
          {activity.length > 0 ? (
            <ActivityCalendar
              data={activity}
              colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
              theme={MONKEYTYPE_THEME}
              labels={{
                totalCount: "{{count}} Monkeytype tests in {{year}}",
                legend: { less: "Less", more: "More" },
              }}
            />
          ) : null}
        </PanelContent>
      </Panel>
      <Separator />
    </>
  );
}

export default function MonkeytypeGraph() {
  return (
    <MonkeytypeErrorBoundary>
      <MonkeytypeGraphInner />
    </MonkeytypeErrorBoundary>
  );
}
