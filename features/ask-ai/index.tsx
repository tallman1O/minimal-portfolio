import {
  Panel,
  PanelContent,
  PanelHeader,
  PanelTitle,
} from "@/components/ui/panel";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/common/tooltip";
import { ASK_AI_PROVIDERS, buildAskAiPrompt } from "@/lib/ask-ai";
import { cn } from "@/lib/utils";
import { SiClaude, SiGooglegemini, SiOpenai } from "react-icons/si";

function GrokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2.5A7.5 7.5 0 0 0 4.5 12c0 1.82.65 3.49 1.73 4.79L12 10.02l5.77 6.77A7.47 7.47 0 0 0 19.5 12 7.5 7.5 0 0 0 12 4.5zm0 7.98 4.52 5.3A7.47 7.47 0 0 1 12 19.5a7.47 7.47 0 0 1-4.52-1.72L12 12.48z" />
    </svg>
  );
}

const ICONS = {
  chatgpt: SiOpenai,
  claude: SiClaude,
  grok: GrokIcon,
  gemini: SiGooglegemini,
} as const;

function AskAi() {
  const prompt = buildAskAiPrompt();

  return (
    <Panel id="ask-ai">
      <PanelHeader>
        <PanelTitle>Ask AI.</PanelTitle>
      </PanelHeader>
      <PanelContent>
        <p className="mb-4 max-w-2xl text-sm leading-6 text-muted-foreground">
          Ask an AI about me — opens with a prompt to summarize this site and my
          links.
        </p>
        <ul className="flex flex-wrap gap-4">
          {ASK_AI_PROVIDERS.map((provider) => {
            const Icon = ICONS[provider.id];
            return (
              <li key={provider.id}>
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <a
                        href={provider.href(prompt)}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Ask ${provider.name} about me`}
                        className={cn(
                          "inline-flex size-11 items-center justify-center rounded-xl border border-edge bg-muted/30 text-foreground transition-colors hover:bg-muted",
                        )}
                      >
                        <Icon className="size-6" />
                      </a>
                    }
                  />
                  <TooltipContent>
                    <p>{provider.name}</p>
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

export default AskAi;
