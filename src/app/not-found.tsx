import Link from "next/link";
import styles from "./SystemState.module.css";

export default function NotFound() {
  return <main className={styles.state}><div><p>404 · STORY RECORD NOT FOUND</p><h1>THAT THREAD<br />ISN’T HERE.</h1><p>The route may have changed, or the requested record is not yet part of the verified archive.</p><Link href="/" className="reading-link">RETURN TO THE MCU EXPERIENCE</Link></div></main>;
}
