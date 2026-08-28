import { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = process.env.SITE_URL;

if (!baseUrl) {
  throw new Error(
    "SITE_URL environment variable must be set before building (e.g. https://edecode.pages.dev)"
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/services", priority: 0.8 },
    { path: "/services/ai-automation", priority: 0.7 },
    { path: "/services/custom-software", priority: 0.7 },
    { path: "/services/web-mobile", priority: 0.7 },
    { path: "/services/integrations", priority: 0.7 },
    { path: "/about", priority: 0.7 },
    { path: "/work", priority: 0.7 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: route.priority,
  }));
}
