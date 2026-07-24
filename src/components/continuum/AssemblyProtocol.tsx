"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./AssemblyProtocol.module.css";

const entrySignals = [
  {
    id: "origin",
    number: "01",
    label: "THE FIRST SPARK",
    prompt: "I remember becoming a hero.",
    title: "BUILD THE BEGINNING.",
    body: "Return to the imperfect first steps: invention, courage, exile, and the choice to stand up when the world has not asked you to.",
    films: [
      { title: "IRON MAN", href: "/films/iron-man" },
      { title: "THOR", href: "/films/thor" },
      { title: "CAPTAIN AMERICA", href: "/films/captain-america-first-avenger" },
    ],
  },
  {
    id: "assemble",
    number: "02",
    label: "THE TEAM-UP",
    prompt: "I remember the team arriving.",
    title: "ASSEMBLE THE MOMENT.",
    body: "Start where separate stories collide, then feel the cost of trying to keep a family of heroes in the same room.",
    films: [
      { title: "THE AVENGERS", href: "/films/the-avengers" },
      { title: "AGE OF ULTRON", href: "/films/avengers-age-of-ultron" },
      { title: "CIVIL WAR", href: "/films/captain-america-civil-war" },
    ],
  },
  {
    id: "infinity",
    number: "03",
    label: "THE IMPOSSIBLE",
    prompt: "I remember the room going quiet.",
    title: "FACE THE IMPOSSIBLE.",
    body: "Follow the run where every alliance is tested, the universe breaks, and the people left behind decide whether hope is still an action.",
    films: [
      { title: "INFINITY WAR", href: "/films/avengers-infinity-war" },
      { title: "ENDGAME", href: "/films/avengers-endgame" },
      { title: "FAR FROM HOME", href: "/films/spider-man-far-from-home" },
    ],
  },
  {
    id: "legacy",
    number: "04",
    label: "WHAT REMAINS",
    prompt: "I remember what came after.",
    title: "CARRY IT FORWARD.",
    body: "Enter the stories of inheritance: new people beneath old symbols, fresh worlds, and the long work of deciding what a legacy should become.",
    films: [
      { title: "NO WAY HOME", href: "/films/spider-man-no-way-home" },
      { title: "BRAVE NEW WORLD", href: "/films/captain-america-brave-new-world" },
      { title: "THE FANTASTIC FOUR", href: "/films/fantastic-four-first-steps" },
    ],
  },
] as const;

type SignalId = (typeof entrySignals)[number]["id"];

export function AssemblyProtocol() {
  const [activeId, setActiveId] = useState<SignalId>("assemble");
  const [assembled, setAssembled] = useState(false);
  const active = entrySignals.find((signal) => signal.id === activeId) ?? entrySignals[1];

  const chooseSignal = (id: SignalId) => {
    setActiveId(id);
    setAssembled(false);
  };

  return (
    <section className={styles.protocol} aria-labelledby="assembly-title">
      <div className={styles.heading}>
        <p>THE MCU EXPERIENCE</p>
        <h2 id="assembly-title">WHAT MADE<br />YOU LOOK UP?</h2>
        <p>Choose the memory you carry. The archive will assemble a rewatch that starts with that feeling—not an algorithm.</p>
      </div>

      <div className={styles.console} data-assembled={assembled}>
        <div className={styles.signalList} role="tablist" aria-label="Choose your MCU memory">
          {entrySignals.map((signal) => (
            <button
              key={signal.id}
              type="button"
              role="tab"
              id={`signal-tab-${signal.id}`}
              aria-controls={`signal-panel-${signal.id}`}
              aria-selected={signal.id === active.id}
              onClick={() => chooseSignal(signal.id)}
            >
              <span>{signal.number}</span>
              <strong>{signal.label}</strong>
              <small>{signal.prompt}</small>
            </button>
          ))}
        </div>

        <div
          className={styles.reactor}
          id={`signal-panel-${active.id}`}
          role="tabpanel"
          aria-labelledby={`signal-tab-${active.id}`}
        >
          <span className={styles.orbit} aria-hidden="true" />
          <span className={styles.orbit} aria-hidden="true" />
          <span className={styles.orbit} aria-hidden="true" />
          <span className={styles.core} aria-hidden="true"><i /></span>
          <div className={styles.reactorCopy}>
            <p>MEMORY SIGNAL {active.number} · LOCKED</p>
            <h3>{active.title}</h3>
            <p>{active.body}</p>
            <button className={styles.assembleButton} type="button" onClick={() => setAssembled(true)}>
              {assembled ? "ROUTE ASSEMBLED" : "ASSEMBLE THIS REWATCH"} <span aria-hidden="true">↗</span>
            </button>
          </div>
        </div>

        <div className={styles.route} aria-live="polite" data-visible={assembled} hidden={!assembled}>
          <div>
            <p>YOUR {active.label} ROUTE</p>
            <span>03 FILMS · ONE FEELING</span>
          </div>
          <ol>
            {active.films.map((film, index) => (
              <li key={film.href}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <Link href={film.href}>{film.title} <i aria-hidden="true">↗</i></Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
