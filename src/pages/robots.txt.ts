import type { APIRoute } from "astro";

const siteUrl = "https://laktab.dev";

// Allow all crawlers, and explicitly welcome AI answer-engine crawlers
// (we WANT AEO citations).
const agents = [
  "*",
  "GPTBot",
  "ClaudeBot",
  "PerplexityBot",
  "Google-Extended",
  "CCBot",
];

export const GET: APIRoute = () => {
  const body = [
    ...agents.map((a) => `User-Agent: ${a}\nAllow: /`),
    `Host: ${siteUrl}`,
    `Sitemap: ${siteUrl}/sitemap-index.xml`,
  ].join("\n\n");
  return new Response(body + "\n", {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
