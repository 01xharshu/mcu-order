"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Film } from "@/lib/content/schemas";
import { CausalShear } from "@/components/continuum/CausalShear";
import styles from "./TimelineRibbon.module.css";

type Mode = "release" | "chronology";

export function TimelineRibbon({ films }: { films: Film[] }) {
  const [mode, setMode] = useState<Mode>("release");
  const [focusedId, setFocusedId] = useState(films[0]?.id ?? "");
  const ordered = useMemo(
    () => [...films].sort((a, b) => (mode === "release" ? (a.releaseOrder ?? 999) - (b.releaseOrder ?? 999) : (a.chronologicalOrder ?? 999) - (b.chronologicalOrder ?? 999))),
    [films, mode]
  );
  const focused = ordered.find((film) => film.id === focusedId) ?? ordered[0];

  return (
    <section className={styles.experience} aria-label="Timeline ribbon">
      <div className={styles.modes} role="group" aria-label="Timeline ordering">
        <button type="button" onClick={() => setMode("release")} aria-pressed={mode === "release"}>RELEASE</button>
        <button type="button" onClick={() => setMode("chronology")} aria-pressed={mode === "chronology"}>CHRONOLOGY</button>
      </div>
      <ol className={styles.ribbon}>
        {ordered.map((film, index) => (
          <li key={film.id}>
            <button type="button" onClick={() => setFocusedId(film.id)} className={film.id === focused?.id ? styles.focused : styles.event} aria-pressed={film.id === focused?.id}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{film.title}</strong>
              <small>{mode === "release" ? film.releaseYear : film.chronologicalOrder ? "CONFIRMED ORDER" : "ORDER UNKNOWN"}</small>
            </button>
          </li>
        ))}
      </ol>
      {focused && <><div className={styles.detail}>
        <span className={styles.seam} aria-hidden="true" />
        <p>{mode === "release" ? `RELEASE ${focused.releaseYear}` : focused.chronologicalOrder ? `CHRONOLOGY ${focused.chronologicalOrder}` : "CHRONOLOGY NOT FIXED"}</p>
        <h2>{focused.title}</h2>
        <p>{focused.fullConsequence ?? focused.whyItMattersSafe}</p>
        <Link href={`/films/${focused.id}`} className="reading-link">OPEN FULL DOSSIER</Link>
      </div><div className={styles.comparison}><CausalShear before={`The release sequence places ${focused.title} in relation to the audience’s first encounter with the continuity.`} choice={focused.fullStory ?? focused.spoilerSafePremise} after={focused.fullConsequence ?? focused.whyItMattersSafe} /></div></>}
    </section>
  );
}
