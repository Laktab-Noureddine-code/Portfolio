import type { MetadataRoute } from "next";

const siteUrl = "https://laktab.dev";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Allow all standard crawlers
      { userAgent: "*", allow: "/" },
      // Explicitly welcome AI answer-engine crawlers (we WANT AEO citations)
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
