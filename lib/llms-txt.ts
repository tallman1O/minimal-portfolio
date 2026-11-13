import { USER } from "@/data/user";
import { GITHUB_URL, LINKEDIN_URL, X_URL } from "@/lib/url";

const siteUrl = USER.website.replace(/\/$/, "");

/** Concise llmstxt.org-style manifest for AI agents. */
export function buildLlmsTxt() {
  const positions = USER.workExperience
    .flatMap((job) =>
      job.positions.map(
        (p) =>
          `- ${p.title} at ${job.company_name} (${p.start_date} – ${p.end_date})${p.isCurrent ? " [current]" : ""}`,
      ),
    )
    .join("\n");

  const projects = USER.projects
    .map((p) => {
      const links = [p.live_link, p.github_link].filter(Boolean).join(", ");
      return `- [${p.project_name}](${p.live_link ?? p.github_link ?? siteUrl}): ${p.description}${links ? ` Links: ${links}` : ""}`;
    })
    .join("\n");

  const skills = [
    ...new Set(USER.workExperience.flatMap((j) => j.tech_stack ?? [])),
  ].join(", ");

  return `# ${USER.displayName}

> ${USER.jobTitle} in ${USER.address}. ${USER.bio.trim()}

- Website: ${siteUrl}
- Email: ${USER.email}
- GitHub: ${GITHUB_URL}
- LinkedIn: ${LINKEDIN_URL}
- X / Twitter: ${X_URL}
- Pronouns: ${USER.pronouns}

## Experience

${positions}

## Projects

${projects}

## Skills

${skills || "See portfolio tech stack section."}

## Optional

- [Full site](${siteUrl}): Canonical portfolio
- [llms-full.txt](${siteUrl}/llms-full.txt): Expanded machine-readable summary
- [Sitemap](${siteUrl}/sitemap.xml)
`;
}

/** Expanded summary for agents that want more detail in one fetch. */
export function buildLlmsFullTxt() {
  const experience = USER.workExperience
    .map((job) => {
      const levels = job.positions
        .map(
          (p) =>
            `  - ${p.title}${p.role_type ? ` (${p.role_type})` : ""}: ${p.start_date} – ${p.end_date}`,
        )
        .join("\n");
      const achievements = job.achievements.map((a) => `  - ${a}`).join("\n");
      const stack = (job.tech_stack ?? []).join(", ");
      return `### ${job.company_name}
${levels}
- Location: ${job.location} (${job.workMode})
- Stack: ${stack}
- Achievements:
${achievements}`;
    })
    .join("\n\n");

  const projects = USER.projects
    .map((p) => {
      return `### ${p.project_name}
- Dates: ${p.date_range}
- ${p.description}
- Stack: ${p.tech_stack.join(", ")}
- Live: ${p.live_link ?? "n/a"}
- GitHub: ${p.github_link ?? "n/a"}`;
    })
    .join("\n\n");

  return `${buildLlmsTxt()}

## Detailed experience

${experience}

## Detailed projects

${projects}
`;
}
