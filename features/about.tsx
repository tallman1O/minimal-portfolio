import { Panel, PanelContent, PanelHeader, PanelTitle } from "@/components/panel";
import { Highlighter } from "../components/ui/highlighter";


export function About() {
  return (
    <Panel id="about">
      <PanelHeader>
        <PanelTitle>About.</PanelTitle>
      </PanelHeader>
      <PanelContent>
        <p className="max-w-2xl text-left text-base leading-7 text-muted-foreground">
          At the end of 2022, I quit my job as a software engineer to go fulltime
          into building and scaling my own SaaS businesses. In the past,{" "}
          <Highlighter action="underline" color="#FF9800" isView={true}>
            I pursued a double degree in computer science and business
          </Highlighter>
          ,{" "}
          <Highlighter action="underline" color="#87CEFA" isView={true}>interned at big tech companies in Silicon Valley</Highlighter>
          , and{" "}
          <Highlighter action="underline" color="#FFD700" isView={true}>competed in over 21 hackathons for fun</Highlighter>. I also
          had the pleasure of being a part of the first ever in-person cohort of
          buildspace called <Highlighter action="underline" color="#FFD700" isView={true}>buildspace sf1</Highlighter>.
        </p>
      </PanelContent>
    </Panel>
  );
}

export default About;
