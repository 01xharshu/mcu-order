import React from "react";
import { Character } from "../../lib/content/schemas";

export function CharacterConstellation({ character }: { character: Character }) {
  return (
    <div className="border border-white/10 p-6 rounded-lg bg-black/30">
      <h3 className="text-xl font-bold mb-4">Connections</h3>
      <ul className="space-y-2">
        {character.relationships.map(rel => (
          <li key={rel.characterId} className="flex gap-4 text-sm">
            <span className="text-mcu-primary/60">{rel.description}</span>
            <span className="font-semibold">{rel.characterId}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
