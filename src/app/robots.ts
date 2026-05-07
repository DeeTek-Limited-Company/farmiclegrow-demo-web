import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/buyer", "/dashboard", "/login", "/signup"],
    },
    sitemap: "/sitemap.xml",
  };
}

