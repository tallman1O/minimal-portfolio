import Image from "next/image"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/tooltip"

import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel"

type TechStack = {
  name: string;
  icon: string;
}

const TECH_STACK: TechStack[] = [
  {
    name: "React",
    icon: "/icons/react.svg"
  },
  {
    name: "Next.js",
    icon: "/icons/nextjs.svg"
  },
  {
    name: "TypeScript",
    icon: "/icons/typescript.svg"
  },
]



export function TechStack() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <ul className="flex flex-wrap gap-4 select-none">
          {TECH_STACK.map((tech, index) => {
            return (
              <li key={index} className="flex">
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <div
                      >
                        
                          <Image
                            src={tech.icon}
                            alt={`${tech.name} icon`}
                            width={32}
                            height={32}
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
            )
          })}
        </ul>
      </PanelContent>
    </Panel>
  )
}
