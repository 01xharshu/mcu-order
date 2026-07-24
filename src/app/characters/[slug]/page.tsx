import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { archiveCharacters } from "@/content/characterArchive";
import styles from "./CharacterLife.module.css";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return archiveCharacters.map((character) => ({ slug: character.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const character = archiveCharacters.find((entry) => entry.slug === slug);
  return character ? {
    title: character.name,
    description: `A full-story MCU life record for ${character.name}.`,
    alternates: { canonical: `/characters/${character.slug}` },
  } : { title: "Character not found" };
}

export default async function CharacterLifePage({ params }: Props) {
  const { slug } = await params;
  const character = archiveCharacters.find((entry) => entry.slug === slug);
  if (!character) notFound();

  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="character-title">
        <span className={styles.ghost} aria-hidden="true">{character.name.split(" ").at(-1)}</span>
        <div><Link className={styles.back} href="/characters">RETURN TO THE LIVES FIELD</Link><p>{character.role.toUpperCase()}</p><h1 id="character-title">{character.name}</h1></div>
        <aside><p>FULL LIFE RECORD</p><p>{character.core}</p></aside>
      </section>
      <section className={styles.life} aria-labelledby="state-title"><header><p>LIFE LINE</p><h2 id="state-title">A LIFE IS A CHAIN OF CHOICES.</h2></header><dl className={styles.record}><div><dt>ROLE</dt><dd>{character.role}</dd></div><div><dt>FIRST MCU APPEARANCE</dt><dd>{character.firstAppearance}</dd></div><div><dt>CORE CONTRADICTION</dt><dd>{character.core}</dd></div><div><dt>WHAT REMAINS</dt><dd>{character.legacy}</dd></div></dl></section>
      <section className={styles.turns} aria-labelledby="turns-title"><header><p>THE TURNS</p><h2 id="turns-title">THE DECISIONS<br />THAT CHANGED<br />THE LIFE.</h2></header><ol>{character.turningPoints.map((turn, index) => <li key={turn.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{turn.title}</h3><p>{turn.detail}</p></div></li>)}</ol></section>
      <section className={styles.research} aria-labelledby="research-title"><p>RELATIONSHIP CONSTELLATION</p><h2 id="research-title">NO LIFE IN THIS<br />UNIVERSE STANDS ALONE.</h2><ol>{character.relationships.map((relationship, index) => <li key={relationship}><span>{String(index + 1).padStart(2, "0")}</span>{relationship}</li>)}</ol><Link href="/sources" className="reading-link">READ THE SOURCE METHOD</Link></section>
    </main>
  );
}
