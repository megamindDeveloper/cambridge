import { MetadataRoute } from "next";

const BASE_URL = "https://apply.tcismangalore.org";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Allow all well-behaved crawlers full access
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/private/"],
      },
      {
        // Explicitly allow Google's image bot
        userAgent: "Googlebot-Image",
        allow: ["/images/", "/svgs/", "/icons/"],
      },
      {
        // Block AI training scrapers that don't respect llm.txt
        userAgent: ["GPTBot", "ChatGPT-User", "Google-Extended", "CCBot", "anthropic-ai"],
        disallow: "/",
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
