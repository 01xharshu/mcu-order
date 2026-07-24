"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { Film } from "@/lib/content/schemas";
import { useProductStore } from "@/stores/productStore";
import styles from "./FilmIndex.module.css";

type Filter = "all" | "released" | "upcoming" | "watched";

export function FilmIndex({ films }: { films: Film[] }) {
  const [query, setQuery] = useState("");
  const [focusedId, setFocusedId] = useState(films[0]?.id ?? "");
  const [filter, setFilter] = useState<Filter>("all");
  const [phase, setPhase] = useState<"all" | Film["phase"]>("all");
  const watchedIds = useProductStore((state) => state.watchedIds);
  const filtered = useMemo(
    () => films.filter((film) => {
      const matchesQuery = film.title.toLowerCase().includes(query.trim().toLowerCase());
      const matchesFilter = filter === "all" || (filter === "released" && film.status === "released") || (filter === "upcoming" && film.status !== "released") || (filter === "watched" && watchedIds.includes(film.id));
      return matchesQuery && matchesFilter && (phase === "all" || film.phase === phase);
    }),
    [films, filter, phase, query, watchedIds]
  );
  const focused = filtered.find((film) => film.id === focusedId) ?? filtered[0];

  return (
    <section className={styles.index} aria-labelledby="film-index-title">
      <div className={styles.listField}>
        <div className={styles.listHeading}>
          <p id="film-index-title">EVENT INDEX</p>
          <label className={styles.searchLabel}>
            <span className="sr-only">Search films</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              type="search"
              placeholder="Find a film"
            />
          </label>
        </div>
        <div className={styles.filters} aria-label="Film index filters">
          {(["all", "released", "upcoming", "watched"] as const).map((option) => <button key={option} type="button" onClick={() => setFilter(option)} aria-pressed={filter === option}>{option === "all" ? "ALL" : option.toUpperCase()}</button>)}
          <label className={styles.phaseSelect}><span className="sr-only">Filter films by phase</span><select value={phase} onChange={(event) => setPhase(event.target.value === "all" ? "all" : Number(event.target.value) as Film["phase"])}><option value="all">ALL PHASES</option>{[1, 2, 3, 4, 5, 6].map((entry) => <option value={entry} key={entry}>PHASE {entry}</option>)}</select></label>
        </div>
        {filtered.length ? (
          <ol className={styles.list}>
            {filtered.map((film) => (
              <li key={film.id}>
                <Link
                  href={`/films/${film.id}`}
                  onMouseEnter={() => setFocusedId(film.id)}
                  onFocus={() => setFocusedId(film.id)}
                  className={film.id === focused?.id ? styles.focused : styles.item}
                  aria-current={film.id === focused?.id ? "true" : undefined}
                >
                  <span className={styles.order}>{String(film.releaseOrder).padStart(2, "0")}</span>
                  <span className={styles.title}>{film.title}</span>
                  <span className={styles.meta}>{film.releaseYear} · PHASE {film.phase} · {film.status.toUpperCase()}</span>
                </Link>
              </li>
            ))}
          </ol>
        ) : (
          <p className={styles.empty}>No film matches “{query}”. Clear the search to return to the release sequence.</p>
        )}
      </div>

      {focused && (
        <aside className={styles.focusField} aria-live="polite">
          <Image src="/images/temporal-aperture-v1.png" fill sizes="(max-width: 767px) 100vw, 55vw" alt="" className={styles.image} />
          <span className={styles.seam} aria-hidden="true" />
          <div className={styles.focusCopy}>
            <p>{focused.releaseYear} · PHASE {focused.phase} · RELEASE {String(focused.releaseOrder).padStart(2, "0")}</p>
            <h2>{focused.title}</h2>
            <p>{focused.fullConsequence ?? focused.whyItMattersSafe}</p>
            {focused.memory && <p className={styles.memory}>{focused.memory}</p>}
            <Link className="reading-link" href={`/films/${focused.id}`}>OPEN FULL DOSSIER</Link>
          </div>
        </aside>
      )}
    </section>
  );
}
