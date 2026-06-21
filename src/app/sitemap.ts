import type { MetadataRoute } from "next";

const siteUrl = "https://laktab.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    // Add individual blog posts + project case-study pages here as created,
    // e.g. { url: `${siteUrl}/blog/my-post`, lastModified: ... }
  ];
}
