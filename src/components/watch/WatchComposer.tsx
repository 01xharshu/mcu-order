"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Film } from "@/lib/content/schemas";
import { useProductStore } from "@/stores/productStore";
import styles from "./WatchComposer.module.css";

type PathMode = "release" | "chronological" | "essential" | "saved";

const labels: Record<PathMode, string> = {
  release: "RELEASE ORDER",
  chronological: "CHRONOLOGICAL",
  essential: "ESSENTIAL CATCH-UP",
  saved: "SAVED PATH",
};

export function WatchComposer({ films }: { films: Film[] }) {
  const [mode, setMode] = useState<PathMode>("release");
  const watchedIds = useProductStore((state) => state.watchedIds);
  const markWatched = useProductStore((state) => state.markWatched);
  const unmarkWatched = useProductStore((state) => state.unmarkWatched);
  const savedPath = useProductStore((state) => state.watchPath);
  const setWatchPath = useProductStore((state) => state.setWatchPath);
  const sequence = useMemo(() => {
    if (mode === "chronological") return [...films].sort((a, b) => (a.chronologicalOrder ?? 999) - (b.chronologicalOrder ?? 999));
    if (mode === "essential") return films.filter((film) => ["iron-man", "the-avengers", "captain-america-civil-war", "avengers-infinity-war", "avengers-endgame"].includes(film.id));
    if (mode === "saved") return (savedPath?.map((id) => films.find((film) => film.id === id)).filter((film): film is Film => Boolean(film)) ?? []);
    return [...films].sort((a, b) => (a.releaseOrder ?? 999) - (b.releaseOrder ?? 999));
  }, [films, mode, savedPath]);
  const [activeId, setActiveId] = useState(sequence[0]?.id ?? "");
  const active = sequence.find((film) => film.id === activeId) ?? sequence[0];

  return <section className={styles.composer} aria-label="Watch path composer">
    <div className={styles.modeRow} role="group" aria-label="Watch path mode">
      {(Object.keys(labels) as PathMode[]).map((key) => <button key={key} type="button" onClick={() => { setMode(key); setActiveId(""); }} aria-pressed={mode === key}>{labels[key]}</button>)}
    </div>
    <div className={styles.body}>
      <div className={styles.active}>
        <span className={styles.seam} aria-hidden="true" />
        <p>RECOMMENDED NEXT</p>
        {active && <>
          <span className={styles.sequenceNo} aria-hidden="true">{String(sequence.findIndex((film) => film.id === active.id) + 1).padStart(2, "0")}</span>
          <h2>{active.title}</h2>
          <p>{active.fullConsequence ?? active.whyItMattersSafe}</p>
          <p className={styles.pathNote}>{mode === "release" ? "Revisit the saga in the order audiences first experienced its reveals, reunions, and turning points." : mode === "chronological" ? "Follow the internal chronology, with placements kept visible whenever the archive cannot verify one." : mode === "essential" ? "A concentrated route through the largest continuity shifts and emotional payoffs." : "This path is saved locally on this device and can be edited below."}</p>
          <button type="button" className={styles.watched} aria-pressed={watchedIds.includes(active.id)} onClick={() => watchedIds.includes(active.id) ? unmarkWatched(active.id) : markWatched(active.id)}>{watchedIds.includes(active.id) ? "MARK AS UNWATCHED" : "MARK AS WATCHED"}</button>
          <Link href={`/films/${active.id}`} className="reading-link">OPEN FULL DOSSIER</Link>
        </>}
      </div>
      <ol className={styles.sequence}>
        {sequence.map((film, index) => <li key={film.id}>
          <button type="button" onClick={() => setActiveId(film.id)} className={film.id === active?.id ? styles.selected : styles.entry} aria-pressed={film.id === active?.id}>
            <span>{String(index + 1).padStart(2, "0")}</span><strong>{film.title}</strong><small>{film.releaseYear}</small>
          </button>
        </li>)}
      </ol>
    </div>
    <section className={styles.saveArea} aria-labelledby="saved-path-title"><div><p>PERSONAL CANON</p><h2 id="saved-path-title">SAVE WHAT<br />STAYS WITH YOU.</h2></div><div><p>Build a local rewatch route from the released catalog—your comfort films, your turning points, or the run that still hits hardest.</p><ol>{films.map((film) => { const included = savedPath?.includes(film.id) ?? false; return <li key={film.id}><span>{film.title}</span><button type="button" aria-pressed={included} onClick={() => setWatchPath(included ? savedPath?.filter((id) => id !== film.id) : [...(savedPath ?? []), film.id])}>{included ? "REMOVE" : "ADD"}</button></li>; })}</ol></div></section>
  </section>;
}
