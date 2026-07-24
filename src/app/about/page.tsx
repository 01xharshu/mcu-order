import type { Metadata } from "next";
import styles from "./About.module.css";

export const metadata: Metadata = { title: "About", description: "Scope, methodology, and accessibility of The MCU Experience full-story archive." };

export default function AboutPage() {
  return <main className={styles.page}>
    <header className={styles.hero}>
      <p>METHOD AND SCOPE</p>
      <h1>THE STORY<br />DESERVES<br />A CLEARER MAP.</h1>
      <p>The MCU Experience is an independent fan-made full-story archive for feature-film chronology, character lives, consequence, and rewatch paths.</p>
    </header>
    <section className={styles.grid}>
      <div><p>CANON BOUNDARY</p><h2>WHAT THIS GUIDE COVERS</h2></div>
      <div><p>Feature films form the main continuity. The archive embraces the full story—including consequences and endings—while separating established screen events from editorial framing.</p></div>
      <div><p>RIGHTS</p><h2>AN INDEPENDENT READING</h2></div>
      <div><p>This site is not affiliated with Marvel Studios or Disney. It uses original writing and an original symbolic image language; it does not use actor likenesses, reproduced dialogue, scores, or copied interface forms.</p></div>
      <div><p>ACCESSIBILITY</p><h2>THE MEANING DOES NOT LIVE IN CANVAS</h2></div>
      <div><p>Every route keeps its headings, sequence, navigation, and essential context in semantic HTML. Motion and optional visual layers add spatial understanding but never replace the reading experience.</p></div>
    </section>
  </main>;
}
