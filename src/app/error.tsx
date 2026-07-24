"use client";

import { useEffect } from "react";
import styles from "./SystemState.module.css";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error("Route render failure", error); }, [error]);
  return <main className={styles.state}><div><p>CONTINUITY INTERRUPTED</p><h1>THE READING<br />CAN REWEAVE.</h1><p>The content remains available. Try the route again; if the interruption persists, return to a direct destination through the index.</p><button type="button" onClick={reset}>TRY THIS ROUTE AGAIN</button></div></main>;
}
