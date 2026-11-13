import { USER } from "@/data/user";
import { GITHUB_URL, LINKEDIN_URL, X_URL } from "@/lib/url";

export type AskAiProvider = {
  id: "chatgpt" | "claude" | "grok" | "gemini";
  name: string;
  href: (prompt: string) => string;
};

const siteUrl = USER.website.replace(/\/$/, "");

export function buildAskAiPrompt() {
  const work = USER.workExperience
    .map((job) => {
      const levels = job.positions
        .map((p) => `${p.title} (${p.start_date} – ${p.end_date})`)
        .join("; ");
      return `- ${job.company_name}: ${levels}. Location: ${job.location} (${job.workMode}).`;
    })
    .join("\n");

  const projects = USER.projects
    .map((p) => `- ${p.project_name} (${p.date_range}): ${p.description}`)
    .join("\n");

  return `Please visit ${siteUrl} and ${siteUrl}/llms.txt, then summarize everything about ${USER.displayName} (${USER.jobTitle} based in ${USER.address}).

Cover background, work experience, projects, skills, and how to contact or follow them. Prefer facts from the site over guesses.

Key links:
- Website: ${siteUrl}
- Email: ${USER.email}
- GitHub: ${GITHUB_URL}
- LinkedIn: ${LINKEDIN_URL}
- X: ${X_URL}
- llms.txt: ${siteUrl}/llms.txt

Work experience:
${work}

Projects:
${projects}

Bio: ${USER.bio.trim()}`;
}

export const ASK_AI_PROVIDERS: AskAiProvider[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    href: (prompt) => `https://chatgpt.com/?hints=search&q=${encodeURIComponent(prompt)}`,
  },
  {
    id: "claude",
    name: "Claude",
    href: (prompt) => `https://claude.ai/new?q=${encodeURIComponent(prompt)}`,
  },
  {
    id: "grok",
    name: "Grok",
    href: (prompt) => `https://grok.com/?q=${encodeURIComponent(prompt)}`,
  },
  {
    id: "gemini",
    name: "Gemini",
    href: (prompt) => `https://gemini.google.com/app?q=${encodeURIComponent(prompt)}`,
  },
];
