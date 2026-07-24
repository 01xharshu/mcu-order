"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { ArchiveCharacter } from "@/content/characterArchive";
import styles from "./CharacterDirectory.module.css";

export function CharacterDirectory({ characters }: { characters: ArchiveCharacter[] }) {
  const [query, setQuery] = useState("");
  const [activeId, setActiveId] = useState(characters[0]?.id ?? "");
  const shown = useMemo(() => characters.filter((character) => `${character.name} ${character.role} ${character.core}`.toLowerCase().includes(query.trim().toLowerCase())), [characters, query]);
  const active = shown.find((character) => character.id === activeId) ?? shown[0];

  return (
    <section className={styles.directory} aria-labelledby="lives-title">
      <header className={styles.hero}>
        <div><p>LIVES FIELD · FULL CHARACTER ARCHIVE</p><h1 id="lives-title">THE PEOPLE<br />WHO CARRIED<br />THE STORY.</h1></div>
        <p>Explore the choices, relationships, and legacies that make the MCU feel like one long shared life rather than a list of titles.</p>
      </header>
      <div className={styles.layout}>
        <div className={styles.index}>
          <label className={styles.search}><span className="sr-only">Search character dossiers</span><input value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder="Find a life" /><span>{shown.length} DOSSIERS</span></label>
          <ol aria-label="Character dossiers">
            {shown.map((character, index) => <li key={character.id}><button type="button" onClick={() => setActiveId(character.id)} aria-pressed={character.id === active?.id}><span>{String(index + 1).padStart(2, "0")}</span><strong>{character.name}</strong><small>{character.role}</small></button></li>)}
          </ol>
          {shown.length === 0 && <p className={styles.empty}>No life record matches “{query}”.</p>}
        </div>
        {active && <aside className={styles.focus} aria-live="polite">
          <span className={styles.ghost} aria-hidden="true">{active.name.split(" ").at(-1)}</span>
          <div className={styles.focusCopy}><p>{active.firstAppearance.toUpperCase()}</p><h2>{active.name}</h2><p>{active.core}</p><dl><div><dt>LEGACY</dt><dd>{active.legacy}</dd></div><div><dt>CORE BOND</dt><dd>{active.relationships[0]}</dd></div></dl><Link href={`/characters/${active.slug}`} className="reading-link">OPEN LIFE RECORD</Link></div>
        </aside>}
      </div>
    </section>
  );
}
