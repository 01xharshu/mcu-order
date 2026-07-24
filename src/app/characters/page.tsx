import type { Metadata } from "next";
import { CharacterDirectory } from "@/components/characters/CharacterDirectory";
import { archiveCharacters } from "@/content/characterArchive";

export const metadata: Metadata = {
  title: "Characters | The MCU Experience",
  description: "A full-story archive of the MCU lives, legacies, and relationships that hold the saga together.",
};

export default function CharactersPage() {
  return <main><CharacterDirectory characters={archiveCharacters} /></main>;
}
