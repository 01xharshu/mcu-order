import type { Metadata } from "next";
import { WatchComposer } from "@/components/watch/WatchComposer";
import { films } from "@/content/films";
import styles from "./Watch.module.css";

export const metadata: Metadata = { title: "Watch Order", description: "Build a personal MCU rewatch route from release order, chronology, and the saga's essential turns." };

export default function WatchPage() {
  return <main className={styles.page}>
    <header className={styles.hero}>
      <p>SEQUENCE REWEAVE</p>
      <h1>REWATCH THE<br />STORY YOU<br />CARRY.</h1>
      <p>Return in release order, chase the internal chronology, take the essential route, or build a personal canon out of the moments that never leave you.</p>
    </header>
    <WatchComposer films={films.filter((film) => film.status === "released")} />
  </main>;
}
