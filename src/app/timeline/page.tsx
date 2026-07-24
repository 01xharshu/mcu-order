import type { Metadata } from "next";
import { TimelineRibbon } from "@/components/timeline/TimelineRibbon";
import { films } from "@/content/films";
import styles from "./Timeline.module.css";

export const metadata: Metadata = { title: "Timeline", description: "Fold release order and chronology into one readable MCU sequence." };

export default function TimelinePage() {
  const events = films.filter((film) => film.status === "released");
  return <main className={styles.page}>
    <header className={styles.hero}>
      <p>TIME RIBBON</p>
      <h1>ONE STORY.<br />MORE THAN<br />ONE ORDER.</h1>
      <p>Every released feature film sits here. Switch between the order fans lived through and the order events unfold inside the story.</p>
    </header>
    <TimelineRibbon films={events} />
  </main>;
}
