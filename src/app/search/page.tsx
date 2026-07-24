import type { Metadata } from "next";
import { films } from "@/content/films";
import { archiveCharacters } from "@/content/characterArchive";
import { SearchIndex, type SearchRecord } from "@/components/search/SearchIndex";

export const metadata: Metadata = {
  title: "Search",
  description: "Search the MCU Experience by film, life, or source record.",
  alternates: { canonical: "/search" },
};

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q } = await searchParams;
  const records: SearchRecord[] = [
    ...films.map((film) => ({
      id: `film:${film.id}`,
      href: `/films/${film.slug}`,
      kind: "film" as const,
      title: film.title,
      description: film.fullConsequence ?? film.whyItMattersSafe,
      meta: `${film.releaseYear} · phase ${film.phase}`,
    })),
    ...archiveCharacters.map((character) => ({
      id: `character:${character.id}`,
      href: `/characters/${character.slug}`,
      kind: "character" as const,
      title: character.name,
      description: character.core,
      meta: character.role,
    })),
    ...films.flatMap((film) => film.sources.map((source) => ({
      id: `source:${source.id}`,
      href: "/sources",
      kind: "source" as const,
      title: source.label,
      description: `Evidence for ${film.title}.`,
      meta: source.publisher,
    }))),
  ];

  return <SearchIndex records={records} initialQuery={q ?? ""} />;
}
