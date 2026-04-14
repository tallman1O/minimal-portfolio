import {
  Panel,
  PanelContent,
  PanelHeader,
  PanelTitle,
} from "@/components/ui/panel";
import { Highlighter } from "@/components/ui/common/highlighter";

export function About() {
  return (
    <Panel id="about">
      <PanelHeader>
        <PanelTitle>About.</PanelTitle>
      </PanelHeader>
      <PanelContent>
        <p className="max-w-2xl text-left text-base leading-7 text-muted-foreground">
          <Highlighter action="box">UI Engineer</Highlighter> who likes making
          things that actually work and don&apos;t look terrible. I spend most of my
          time in{" "}
          <Highlighter action="underline" color="#FF9800">
            Next.js and TypeScript
          </Highlighter>{" "}, occasionally venturing into Go, Python
          and backend territory when no one&apos;s looking. <Highlighter action="underline" color="#0080fc">I care about the stuff
          users feel but can&apos;t describe</Highlighter> —{" "}
          <Highlighter action="underline" color="#80bf40">
            snappy interactions</Highlighter>, layouts that just make sense, <Highlighter action="underline" color="#ffffff">code that doesn&apos;t
            fall apart six months later.</Highlighter>
          
          If you&apos;re building something interesting,{" "}
            I&apos;m probably down to talk about it.
        </p>
      </PanelContent>
    </Panel>
  );
}

export default About;
