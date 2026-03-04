import Image from "next/image";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/tooltip";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "../panel";

type TechStack = {
  name: string;
  key: string;
};

const TECH_STACK: TechStack[] = [
  {
    name: "JavaScript",
    key: "javascript",
  },
  {
    name: "TypeScript",
    key: "typescript",
  },
  {
    name: "React",
    key: "react",
  },
  {
    name: "Next.js",
    key: "nextjs",
  },
  {
    name: "Zustand",
    key: "zustand",
  },
  {
    name: "Tailwind CSS",
    key: "tailwindcss",
  },
  {
    name: "Expo",
    key: "expo",
  },
  {
    name: "Bun",
    key: "bun",
  },
]

export function TechStack() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>My Tech Stack</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <ul className="flex flex-wrap gap-4 select-none">
          {TECH_STACK.map((tech, index) => {
            return (
              <li key={index} className="flex">
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <div>
                        <Image
                          src={`/icons/${tech.key}.svg`}
                          alt={`${tech.name} icon`}
                          width={40}
                          height={40}
                          unoptimized
                        />
                      </div>
                    }
                  />
                  <TooltipContent>
                    <p>{tech.name}</p>
                  </TooltipContent>
                </Tooltip>
              </li>
            );
          })}
        </ul>
      </PanelContent>
    </Panel>
  );
}
