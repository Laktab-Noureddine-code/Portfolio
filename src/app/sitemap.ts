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
    // Add project case-study pages and blog posts here as they are created,
    // e.g. { url: `${siteUrl}/blog/my-post`, lastModified: ... }
  ];
}
