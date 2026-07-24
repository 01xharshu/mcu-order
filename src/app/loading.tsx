import styles from "./SystemState.module.css";

export default function Loading() {
  return <main className={styles.state} aria-live="polite" aria-busy="true"><div><p>REGISTERING THE CONTINUITY</p><h1>ONE MOMENT<br />AT A TIME.</h1><p>The semantic reading plane is preparing. Navigation remains available through the site index.</p></div></main>;
}
