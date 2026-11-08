import type { MetadataRoute } from "next";

const BASE_URL = "https://srinivas-portfolio-automation-7157.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
