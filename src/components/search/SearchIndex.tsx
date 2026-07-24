"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import styles from "./SearchIndex.module.css";

export type SearchRecord = {
  id: string;
  href: string;
  kind: "film" | "character" | "source";
  title: string;
  description: string;
  meta: string;
};

export function SearchIndex({ records, initialQuery }: { records: SearchRecord[]; initialQuery: string }) {
  const [query, setQuery] = useState(initialQuery);
  const normalized = query.trim().toLowerCase();
  const matches = useMemo(() => records.filter((record) => {
    if (!normalized) return true;
    return `${record.title} ${record.description} ${record.meta}`.toLowerCase().includes(normalized);
  }), [normalized, records]);

  function changeQuery(value: string) {
    setQuery(value);
    const next = value.trim() ? `/search?q=${encodeURIComponent(value.trim())}` : "/search";
    window.history.replaceState(null, "", next);
  }

  return (
    <section className={styles.search} aria-labelledby="search-title">
      <header>
        <p>MCU STORY LOOKUP</p>
        <h1 id="search-title">FIND THE<br />THREAD.</h1>
        <p>Search names, films, turning points, and the evidence that keeps this archive accountable.</p>
      </header>
      <label className={styles.field}>
        <span className="sr-only">Search the MCU Experience archive</span>
        <input
          value={query}
          onChange={(event) => changeQuery(event.target.value)}
          type="search"
          autoComplete="off"
          placeholder="Search the MCU story"
        />
        <span aria-hidden="true">{matches.length} RESULTS</span>
      </label>
      <ol className={styles.results} aria-live="polite">
        {matches.map((record, index) => (
          <li key={record.id}>
            <Link href={record.href}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><p>{record.kind.toUpperCase()} · {record.meta}</p><h2>{record.title}</h2><p>{record.description}</p></div>
            </Link>
          </li>
        ))}
      </ol>
      {matches.length === 0 && <p className={styles.empty}>No archive result matches “{query}”. Try a film title, character, or source term.</p>}
    </section>
  );
}
