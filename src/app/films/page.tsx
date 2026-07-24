import { films } from "@/content/films";
import { FilmIndex } from "@/components/films/FilmIndex";
import type { Metadata } from "next";
import styles from "./Films.module.css";

export const metadata: Metadata = {
  title: "Films",
  description: "A full-story archive of MCU feature films, their consequences, and the memories they left behind.",
};

export default function FilmsPage() {
  const catalog = [...films].sort((a, b) => a.releaseOrder - b.releaseOrder);

  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <p>EVENT INDEX</p>
        <h1>THE STORY<br />IS ALL<br />HERE.</h1>
        <span aria-hidden="true" />
        <p>Every released film is open for a full-story reading: the turning point, the consequence, and the moment fans still carry with them.</p>
      </header>
      <FilmIndex films={catalog} />
    </main>
  );
}
