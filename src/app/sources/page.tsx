import type { Metadata } from "next";
import { films } from "@/content/films";
import styles from "./Sources.module.css";

export const metadata: Metadata = {
  title: "Sources & methodology",
  description: "How The MCU Experience distinguishes released evidence, official information, and uncertainty.",
  alternates: { canonical: "/sources" },
};

export default function SourcesPage() {
  const sources = films.flatMap((film) => film.sources.map((source) => ({ ...source, film: film.title }))); 
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="sources-title"><div><p>EVIDENCE PLANE</p><h1 id="sources-title">SOURCES<br />HOLD THE<br />SEAM.</h1></div><p>This is an independent, fan-made reading guide. Released work and official Marvel information anchor each entry; uncertainty is named instead of filled with guesswork.</p></section>
      <section className={styles.method} aria-labelledby="method-title"><div><p>METHOD</p><h2 id="method-title">NO SOURCE.<br />NO CLAIM.</h2></div><div><p>Released films are read in full. Upcoming records are held at unknown chronology until the work itself verifies a placement; an elegant interface should never pretend that future canon is settled.</p><p>Each record links to its evidence docket. The current launch catalog uses the official Marvel catalog and released work as its primary source layer; character dossiers distinguish documented story events from editorial interpretation.</p></div></section>
      <section className={styles.sources} aria-labelledby="source-list-title"><p>CATALOG EVIDENCE</p><h2 id="source-list-title">SOURCE DOCKET</h2><ol>{sources.map((source, index) => <li key={source.id}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{source.film}</h3><p>{source.label} · {source.sourceType.replace("-", " ")} · accessed {source.accessedAt}</p></div><a href={source.url} target="_blank" rel="noreferrer">OPEN SOURCE</a></li>)}</ol></section>
    </main>
  );
}
