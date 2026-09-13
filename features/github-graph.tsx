import dynamic from "next/dynamic";

import { GithubProfileLink } from "@/components/ui/graph-profile-link";
import { Panel, PanelContent } from "@/components/ui/panel";
import { USER } from "@/data/user";
import { GITHUB_URL } from "@/lib/url";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  { ssr: false },
);

const currentYear = new Date().getFullYear();

const GithubGraph = () => {
  return (
    <Panel id="github-graph">
      <PanelContent className="space-y-3">
        <div className="flex items-center justify-start gap-3">
          <GithubProfileLink href={GITHUB_URL} />
          <h3 className="text-sm font-semibold text-foreground">GitHub.</h3>
        </div>
        <GitHubCalendar username={USER.username} year={currentYear} />
      </PanelContent>
    </Panel>
  );
};

export default GithubGraph;
