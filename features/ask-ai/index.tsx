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
import {
  ChatGptIcon,
  ClaudeIcon,
  GeminiIcon,
  GrokIcon,
} from "@/features/ask-ai/icons";

const ICONS = {
  chatgpt: ChatGptIcon,
  claude: ClaudeIcon,
  grok: GrokIcon,
  gemini: GeminiIcon,
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
                          "inline-flex size-11 items-center justify-center overflow-hidden rounded-xl transition-opacity hover:opacity-80",
                        )}
                      >
                        <Icon className="size-11" />
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
