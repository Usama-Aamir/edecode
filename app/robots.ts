import { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = process.env.SITE_URL;

if (!baseUrl) {
  throw new Error(
    "SITE_URL environment variable must be set before building (e.g. https://edecode.pages.dev)"
  );
}

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
