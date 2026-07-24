import type { MetadataRoute } from "next";
import { films } from "@/content/films";
import { archiveCharacters } from "@/content/characterArchive";
import { canonicalUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-24");
  const routes = ["/", "/continuum", "/characters", "/films", "/timeline", "/watch", "/search", "/sources", "/about"];
  return [
    ...routes.map((path) => ({ url: canonicalUrl(path), lastModified, changeFrequency: "weekly" as const, priority: path === "/" ? 1 : 0.8 })),
    ...films.map((film) => ({ url: canonicalUrl(`/films/${film.slug}`), lastModified, changeFrequency: "monthly" as const, priority: 0.6 })),
    ...archiveCharacters.map((character) => ({ url: canonicalUrl(`/characters/${character.slug}`), lastModified, changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
}
