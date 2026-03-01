import dynamic from "next/dynamic";
import { Panel, PanelContent } from "../panel";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  { ssr: false },
);

const GithubGraph = () => {
  return (
    <Panel id="github-graph">
      <PanelContent>
        <GitHubCalendar username="tallman1O" />
      </PanelContent>
    </Panel>
  );
};

export default GithubGraph;
