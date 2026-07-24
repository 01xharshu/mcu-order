import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { films } from "@/content/films";
import { CausalShear } from "@/components/continuum/CausalShear";
import styles from "./FilmDossier.module.css";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return films.map((film) => ({ slug: film.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const film = films.find((entry) => entry.id === slug);
  return film ? { title: film.title, description: film.fullConsequence ?? film.whyItMattersSafe, alternates: { canonical: `/films/${film.slug}` } } : { title: "Film not found" };
}

export default async function FilmDossierPage({ params }: Props) {
  const { slug } = await params;
  const film = films.find((entry) => entry.id === slug);
  if (!film) notFound();
  const before = film.prerequisiteIds.map((id) => films.find((entry) => entry.id === id)?.title).filter(Boolean);
  const after = film.watchNextIds.map((id) => films.find((entry) => entry.id === id)?.title).filter(Boolean);

  return <main className={styles.page}>
    <section className={styles.hero} aria-labelledby="film-title">
      <Image src="/images/temporal-aperture-v1.png" alt="" fill priority sizes="100vw" className={styles.heroImage} />
      <span className={styles.seam} aria-hidden="true" />
      <div className={styles.heroCopy}>
        <Link href="/films" className={styles.back}>RETURN TO FILMS</Link>
        <p>{film.releaseYear} · PHASE {film.phase} · RELEASE {String(film.releaseOrder).padStart(2, "0")}</p>
        <h1 id="film-title">{film.title}</h1>
        <p>{film.fullConsequence ?? film.whyItMattersSafe}</p>
      </div>
    </section>

    <section className={styles.reading} aria-labelledby="before-title">
      <header><p>CONTEXT</p><h2 id="before-title">BEFORE THIS</h2></header>
      <div>
        <p>{before.length ? "These earlier moments make the film’s starting pressure legible." : "This film can be approached without a required prior feature-film entry in the current guide."}</p>
        {before.length > 0 && <ol className={styles.sequence}>{before.map((title, index) => <li key={title}><span>{String(index + 1).padStart(2, "0")}</span>{title}</li>)}</ol>}
      </div>
    </section>

    <section className={styles.decision} aria-labelledby="decision-title">
      <span aria-hidden="true" />
      <div><p>FULL STORY</p><h2 id="decision-title">THE MOMENT<br />THAT CHANGES<br />EVERYTHING.</h2></div>
      <p>{film.fullStory ?? film.spoilerSafePremise}</p>
    </section>

    <section className={styles.reading} aria-labelledby="causal-title">
      <header><p>CAUSAL READING</p><h2 id="causal-title">PULL THE<br />SEAM.</h2></header>
      <CausalShear
        before={before.length ? `${before.join(", ")} establishes the pressure entering this event.` : "This entry begins without a required earlier feature-film event in the current guide."}
        choice={film.fullStory ?? film.spoilerSafePremise}
        after={film.fullConsequence ?? film.whyItMattersSafe}
      />
    </section>

    <section className={styles.reading} aria-labelledby="changed-title">
      <header><p>CONSEQUENCE</p><h2 id="changed-title">WHAT CHANGED</h2></header>
      <div><p>{film.fullConsequence ?? film.whyItMattersSafe}</p></div>
    </section>

    {film.keyTurns.length > 0 && <section className={styles.reading} aria-labelledby="turns-title">
      <header><p>FAN MEMORY</p><h2 id="turns-title">THE TURNS<br />WE REMEMBER.</h2></header>
      <div>
        {film.memory && <p className={styles.memory}>{film.memory}</p>}
        <ol className={styles.sequence}>{film.keyTurns.map((turn, index) => <li key={turn}><span>{String(index + 1).padStart(2, "0")}</span>{turn}</li>)}</ol>
      </div>
    </section>}

    <section className={styles.reading} aria-labelledby="after-title">
      <header><p>NEXT</p><h2 id="after-title">AFTER THIS</h2></header>
      <div>
        <p>{after.length ? "Continue through the next listed event when you want to keep following this part of the story." : "This entry currently closes its listed path in the guide."}</p>
        {after.length > 0 && <ol className={styles.sequence}>{after.map((title, index) => <li key={title}><span>{String(index + 1).padStart(2, "0")}</span>{title}</li>)}</ol>}
      </div>
    </section>

    <section className={styles.evidence} aria-labelledby="evidence-title">
      <p>GUIDE NOTE</p><h2 id="evidence-title">READ THE SOURCE<br />WITH THE STORY.</h2>
      <p>This fan-made archive treats the released film as the primary source. Sequence, consequence, and editorial memory are clearly distinguished from speculation.</p>
      <Link href="/sources" className="reading-link">READ THE EVIDENCE</Link>
    </section>
  </main>;
}
