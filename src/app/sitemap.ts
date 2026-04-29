import type { MetadataRoute } from "next";

const baseUrl = "https://getafeelectronic.github.io/nextsat";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/sobre-nosotros",
    "/servicios",
    "/articulos",
    "/contactar",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}