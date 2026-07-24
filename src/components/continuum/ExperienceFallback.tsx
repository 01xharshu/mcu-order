/**
 * Experience Fallback — THE MCU CONTINUUM
 * Master Prompt §13, lines 1358–1390
 *
 * A complete semantic document showing the exact journey
 * without WebGL dependence. Rendered immediately.
 */

import { SCENES } from "@/config/scenes";
import styles from "./ExperienceFallback.module.css";
import Link from "next/link";

export function ExperienceFallback() {
  return (
    <div className={styles.fallbackContainer} aria-label="MCU Continuum Journey">
      {SCENES.map((scene, index) => {
        if (scene.id === "prelude") {
          return (
            <section
              key={scene.id}
              id={`scene-${scene.id}`}
              className={styles.preludeSection}
              data-scene={scene.id}
              aria-labelledby={`heading-${scene.id}`}
            >
              <div className={styles.preludeHeadlineBlock}>
                <h2 id={`heading-${scene.id}`} className={styles.preludeHeadline}>
                  EVERY LIFE<br />CHANGES TIME.
                </h2>
              </div>
              
              <div className={styles.preludeSeam} aria-hidden="true"></div>
              <div className={styles.preludeSlice} aria-hidden="true"></div>
              
              <p className={styles.preludeStatement}>
                {scene.body}
              </p>
              
              <p className={styles.preludeScrollCue} aria-hidden="true">
                SCROLL TO CONTINUE
              </p>
            </section>
          );
        }

        return (
          <section 
            key={scene.id} 
            id={`scene-${scene.id}`}
            className={`continuum-section ${styles.sceneSection}`}
            data-scene={scene.id}
            aria-labelledby={`heading-${scene.id}`}
          >
            <div className="page-gutter">
              <header className={styles.sceneHeader}>
                <p className="meta text-graphite-500" style={{ marginBottom: "var(--space-2)" }}>
                  {scene.name} — {scene.question}
                </p>
                <h2 id={`heading-${scene.id}`} className="display-scene">
                  {scene.headline}
                </h2>
              </header>
              
              <div className={styles.sceneBody}>
                <p className="scene-statement">{scene.body}</p>
              </div>
              
              {/* The semantic image fallback for the scene */}
              <div className={styles.imageFallback} aria-hidden="true">
                <div className={styles.placeholderImage}>
                  <span className="meta">{scene.worldVerb}</span>
                </div>
              </div>

              <div className="sr-only">
                {scene.description}
              </div>
            </div>
          </section>
        );
      })}

      {/* Choose State (post-journey) */}
      <section 
        id="scene-choose"
        className={`continuum-section ${styles.chooseSection}`}
        aria-labelledby="heading-choose"
      >
        <div className="page-gutter">
          <header className={styles.sceneHeader}>
            <h2 id="heading-choose" className="display-scene text-ink-on-light">
              The Multiverse
            </h2>
            <p className="scene-statement text-ink-muted-on-light">
              Infinite possibilities branch out from the sacred timeline.
            </p>
          </header>

          <nav className={styles.routeGrid} aria-label="Journey Routes">
            <Link href="/films" className={styles.routeCard}>
              <h3 className="title-lg">Release Order</h3>
              <p className="meta">By theatrical debut</p>
            </Link>
            <Link href="/timeline" className={styles.routeCard}>
              <h3 className="title-lg">Chronological</h3>
              <p className="meta">In-universe timeline</p>
            </Link>
            <Link href="/characters" className={styles.routeCard}>
              <h3 className="title-lg">By Character</h3>
              <p className="meta">Follow specific lives</p>
            </Link>
            <Link href="/watch" className={styles.routeCard}>
              <h3 className="title-lg">Build Your Own</h3>
              <p className="meta">Custom intent path</p>
            </Link>
          </nav>
        </div>
      </section>
    </div>
  );
}
