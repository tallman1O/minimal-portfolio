import Image from "next/image";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/tooltip";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "../components/panel";
import { TECH_STACK_MAP } from "@/lib/config";


export function TechStack() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Tech Stack.</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <ul className="flex flex-wrap gap-4 select-none">
          {Object.entries(TECH_STACK_MAP).map(([key, value], index) => {
            return (
              <li key={index} className="flex">
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <div>
                        <Image
                          src={value}
                          alt={`${key} icon`}
                          width={40}
                          height={40}
                          unoptimized
                        />
                      </div>
                    }
                  />
                  <TooltipContent>
                    <p>{key}</p>
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
