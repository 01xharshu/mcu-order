"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./MemoryAtlas.module.css";

const eras = [
  {
    id: "spark",
    period: "2008 — 2012",
    number: "I",
    title: "THE FIRST SPARK",
    body: "A cave becomes a suit. Separate heroes become a circle. New York becomes the moment the world understands that it has changed.",
    memories: ["Tony says the name out loud.", "Mjolnir lands in the desert.", "Six heroes finally hold the same frame."],
    href: "/films/the-avengers",
    action: "REVISIT THE ASSEMBLY",
  },
  {
    id: "fracture",
    period: "2014 — 2018",
    number: "II",
    title: "THE FRACTURE",
    body: "Trust collapses inside S.H.I.E.L.D. Friends take opposite sides. A universe learns that a team can be broken long before it is defeated.",
    memories: ["The elevator doors close.", "The shield hits the floor.", "Wakanda opens its borders."],
    href: "/films/avengers-infinity-war",
    action: "REVISIT THE FALL",
  },
  {
    id: "return",
    period: "2019 — NOW",
    number: "III",
    title: "THE RETURN",
    body: "After loss comes the long work of repair. A shield changes hands, a friendly neighborhood hero becomes anonymous again, and new families inherit a larger universe.",
    memories: ["The portals open.", "The shield is passed on.", "Three Spider-Men choose mercy."],
    href: "/films/avengers-endgame",
    action: "REVISIT THE RETURN",
  },
] as const;

export function MemoryAtlas() {
  const [activeId, setActiveId] = useState<(typeof eras)[number]["id"]>("spark");
  const active = eras.find((era) => era.id === activeId) ?? eras[0];

  return (
    <section className={styles.atlas} aria-labelledby="memory-atlas-title">
      <div className={styles.heading}>
        <p>MEMORY ATLAS</p>
        <h2 id="memory-atlas-title">THREE WAYS<br />THE SAGA<br />STAYS ALIVE.</h2>
      </div>
      <div className={styles.explorer}>
        <div className={styles.tabs} role="tablist" aria-label="MCU memory eras">
          {eras.map((era) => (
            <button
              key={era.id}
              type="button"
              role="tab"
              aria-selected={era.id === active.id}
              aria-controls={`memory-panel-${era.id}`}
              id={`memory-tab-${era.id}`}
              onClick={() => setActiveId(era.id)}
            >
              <span>{era.number}</span>{era.title}
            </button>
          ))}
        </div>
        <div
          className={styles.stage}
          id={`memory-panel-${active.id}`}
          role="tabpanel"
          aria-labelledby={`memory-tab-${active.id}`}
        >
          <span className={styles.eraNumber} aria-hidden="true">{active.number}</span>
          <span className={styles.seam} aria-hidden="true" />
          <p className={styles.period}>{active.period}</p>
          <h3>{active.title}</h3>
          <p className={styles.body}>{active.body}</p>
          <ol>
            {active.memories.map((memory, index) => <li key={memory}><span>{String(index + 1).padStart(2, "0")}</span>{memory}</li>)}
          </ol>
          <Link href={active.href} className={styles.archiveLink}>{active.action} <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  );
}
