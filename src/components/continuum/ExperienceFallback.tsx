import Image from "next/image";
import Link from "next/link";
import { films } from "@/content/films";
import { AssemblyProtocol } from "./AssemblyProtocol";
import { CausalShear } from "./CausalShear";
import { MemoryAtlas } from "./MemoryAtlas";
import styles from "./ExperienceFallback.module.css";

const moments = [
  {
    id: "spark",
    verb: "ORIGIN",
    question: "How can one decision redirect an entire world?",
    headline: ["ONE CHOICE", "REDIRECTED EVERYTHING."],
    body: "A continuity is not a list of titles. It is the pressure a decision carries into the lives that follow it.",
  },
  {
    id: "assemble",
    verb: "CONVERGE",
    question: "What changes when separate lives become interdependent?",
    headline: ["SEPARATE LIVES.", "SHARED CONSEQUENCES."],
    body: "The same story becomes legible when lives register against one another, rather than appearing as a heroic lineup.",
  },
  {
    id: "worlds",
    verb: "RELATE",
    question: "How did the story exceed one place and scale?",
    headline: ["THE STORY", "OUTGREW ONE WORLD."],
    body: "Grounded, mythic, and cosmic scales remain part of one continuity when their consequences share an edge.",
  },
  {
    id: "fracture",
    verb: "FRACTURE",
    question: "What happens when values split before the universe does?",
    headline: ["THE FIRST BREAK", "WAS BETWEEN THEM."],
    body: "A division matters because both sides still share the history that makes the distance visible.",
  },
  {
    id: "infinity",
    verb: "REMOVE",
    question: "What does irreversible consequence look like?",
    headline: ["CONSEQUENCE", "HAS WEIGHT."],
    body: "Absence changes the shape of everything that remains. The space is evidence, not an effect.",
  },
  {
    id: "legacy",
    verb: "INHERIT",
    question: "How does unfinished responsibility transfer?",
    headline: ["RESPONSIBILITY", "MOVES."],
    body: "A legacy is not a replacement. It is a new life receiving a pressure that has not resolved.",
  },
  {
    id: "multiverse",
    verb: "BRANCH",
    question: "How can continuity branch without losing orientation?",
    headline: ["MORE PATHS.", "NOT LESS CONSEQUENCE."],
    body: "A branch is useful only when its shared origin and its changed condition remain clear at the same time.",
  },
] as const;

const entryRoutes = [
  {
    number: "01",
    audience: "RETURN TO THE FIRST SPARK",
    title: "Go back to the moment it all began.",
    body: "Start with Iron Man and move through every released film as a complete, open archive of choices, losses, victories, and the consequences that followed.",
    action: "OPEN THE FILM ARCHIVE",
    href: "/films/iron-man",
  },
  {
    number: "02",
    audience: "RELIVE THE SAGA",
    title: "Find the run that still lives in you.",
    body: "Move between release order and chronology to retrace New York, Wakanda, the Snap, the return, and every smaller turn that made those moments matter.",
    action: "ENTER THE TIMELINE",
    href: "/timeline",
  },
  {
    number: "03",
    audience: "FOLLOW THE PEOPLE",
    title: "See what every hero had to carry.",
    body: "Trace the friendships, fractures, inheritances, and impossible decisions that make the MCU feel less like a catalog and more like a shared memory.",
    action: "EXPLORE THE LIVES",
    href: "/characters",
  },
] as const;

const readingRoutes = [
  {
    label: "WHAT SHOULD I REWATCH?",
    detail: "Build a release-order, chronological, essential, or entirely personal path through the saga.",
    href: "/watch",
  },
  {
    label: "WHAT DID IT CHANGE?",
    detail: "Read each film as a turning point, with its place in the larger story kept visible.",
    href: "/films",
  },
  {
    label: "WHO CARRIES IT FORWARD?",
    detail: "Meet the people whose choices, losses, and responsibilities reshape what follows.",
    href: "/characters",
  },
] as const;

const releasedCount = films.filter((film) => film.status === "released").length;

function LandingPage() {
  return (
    <div className={styles.journey} aria-label="Welcome to the MCU Experience archive">
      <section className={`${styles.aperture} ${styles.landingAperture}`} aria-labelledby="continuum-title">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>THE MCU EXPERIENCE · FULL STORY ARCHIVE</p>
          <h1 id="continuum-title">EVERY LIFE<br />CHANGES TIME.</h1>
          <p className={styles.heroStatement}>
            Every turning point, every loss, every return. This is a living archive for the stories that made you look up when the credits rolled.
          </p>
          <div className={styles.heroActions}>
            <Link className={styles.primaryAction} href="/films">ENTER THE FULL ARCHIVE <span aria-hidden="true">↗</span></Link>
            <a className={styles.secondaryAction} href="#your-way-in">FIND THE FEELING <span aria-hidden="true">↓</span></a>
          </div>
          <dl className={styles.heroFacts} aria-label="MCU archive at a glance">
            <div><dt>{releasedCount}</dt><dd>RELEASED FILMS</dd></div>
            <div><dt>2008 — NOW</dt><dd>ONE ONGOING STORY</dd></div>
          </dl>
        </div>
        <div className={styles.heroMatter} aria-hidden="true">
          <Image
            src="/images/temporal-aperture-v1.png"
            alt=""
            fill
            priority
            sizes="(max-width: 767px) 55vw, 45vw"
            className={styles.heroImage}
          />
        </div>
        <span className={styles.heroSeam} aria-hidden="true" />
        <nav className={styles.heroRoutes} aria-label="Quick ways into the MCU archive">
          <Link href="/films">BROWSE FILMS</Link>
          <Link href="/search">FIND A STORY</Link>
        </nav>
      </section>

      <section className={styles.entry} id="your-way-in" aria-labelledby="entry-title">
        <div className={styles.entryIntro}>
          <p className={styles.eyebrow}>THE STORY IS NOT OVER WHEN THE SCREEN GOES DARK</p>
          <h2 id="entry-title">RETURN TO<br />WHAT MOVED YOU.</h2>
          <p>Some fans remember the first spark. Some remember the silence after the Snap. Some come back for the friendships, the arguments, the score, or the impossible second chances.</p>
        </div>
        <nav className={styles.entryList} aria-label="Choose your MCU starting point">
          {entryRoutes.map((route) => (
            <Link key={route.number} href={route.href} className={styles.entryRoute}>
              <span className={styles.entryNumber}>{route.number}</span>
              <div>
                <p>{route.audience}</p>
                <h3>{route.title}</h3>
                <span>{route.body}</span>
              </div>
              <strong>{route.action} <i aria-hidden="true">↗</i></strong>
            </Link>
          ))}
        </nav>
      </section>

      <AssemblyProtocol />

      <section className={styles.reading} aria-labelledby="reading-title">
        <div>
          <p className={styles.readingKicker}>THE MCU IS BIG. THE MEMORIES ARE SPECIFIC.</p>
          <h2 id="reading-title">FIND THE THREAD<br />THAT PULLS YOU BACK.</h2>
        </div>
        <nav className={styles.readingRoutes} aria-label="Ways to explore the MCU">
          {readingRoutes.map((route) => (
            <Link key={route.label} href={route.href}>
              <span>{route.label}</span>
              <small>{route.detail}</small>
              <i aria-hidden="true">↗</i>
            </Link>
          ))}
        </nav>
      </section>

      <MemoryAtlas />

      <section className={styles.causalFeature} aria-labelledby="causal-title">
        <div className={styles.causalCopy}>
          <p className={styles.eyebrow}>THE PART BETWEEN THE SCENES</p>
          <h2 id="causal-title">ONE MOMENT<br />CAN STAY WITH<br />YOU FOREVER.</h2>
          <p>The archive is built to reveal the connection a title list hides: a condition, a choice, and the consequence someone else has to carry long after the battle ends.</p>
        </div>
        <CausalShear
          before="A world is holding its breath around an unresolved condition."
          choice="One decision turns that pressure into a new direction."
          after="Every story that follows has to live with what changed—and so do the people watching."
        />
      </section>

      <section className={styles.choose} aria-labelledby="choose-title">
        <div>
          <p className={styles.chooseKicker}>KEEP EXPLORING THE MEMORY</p>
          <h2 id="choose-title">FOLLOW WHAT<br />STILL MATTERS.</h2>
        </div>
        <nav className={styles.routeList} aria-label="MCU archive destinations">
          <Link href="/characters"><span>CHARACTERS</span><small>Follow a life through its pressures and choices.</small></Link>
          <Link href="/films"><span>FILMS</span><small>See what each event changes—and where it leads.</small></Link>
          <Link href="/timeline"><span>TIMELINE</span><small>Move between release order and chronology without losing your bearings.</small></Link>
          <Link href="/watch"><span>REWATCH</span><small>Build a personal route through the films that stay with you.</small></Link>
        </nav>
      </section>
    </div>
  );
}

function ContinuumReading() {
  return (
    <div className={styles.journey} aria-label="The MCU story atlas">
      <section className={styles.aperture} aria-labelledby="continuum-title">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>THE MCU STORY ATLAS</p>
          <h1 id="continuum-title">EVERY LIFE<br />CHANGES TIME.</h1>
          <p className={styles.heroStatement}>
            Follow the decisions, relationships, and consequences that turn separate stories into one continuity.
          </p>
          <p className={styles.scrollCue}>SCROLL TO CONTINUE</p>
        </div>
        <div className={styles.heroMatter} aria-hidden="true">
          <Image
            src="/images/temporal-aperture-v1.png"
            alt=""
            fill
            priority
            sizes="(max-width: 767px) 55vw, 45vw"
            className={styles.heroImage}
          />
        </div>
        <span className={styles.heroSeam} aria-hidden="true" />
        <nav className={styles.heroRoutes} aria-label="Explore the Continuum">
          <Link href="/characters">CHARACTERS</Link>
          <Link href="/films">FILMS</Link>
          <Link href="/timeline">TIMELINE</Link>
          <Link href="/watch">WATCH</Link>
        </nav>
      </section>

      {moments.map((moment, index) => (
        <section
          key={moment.id}
          className={styles.moment}
          data-moment={moment.id}
          aria-labelledby={`${moment.id}-title`}
        >
          <div className={styles.momentCopy}>
            <p className={styles.eyebrow}>{moment.verb} · {moment.question}</p>
            <h2 id={`${moment.id}-title`}>{moment.headline[0]}<br />{moment.headline[1]}</h2>
            <p>{moment.body}</p>
          </div>
          <div className={styles.momentMatter} aria-hidden="true">
            <span className={styles.matterSlice} />
            <span className={styles.matterSlice} />
            <span className={styles.matterSlice} />
            <span className={styles.matterSeam} />
            <span className={styles.matterTrace}>{String(index + 1).padStart(2, "0")}</span>
          </div>
          {moment.id === "spark" && (
            <CausalShear
              before="A condition carries forward quietly."
              choice="A decision turns pressure into change."
              after="The change becomes context for every life that follows."
            />
          )}
        </section>
      ))}

      <section className={styles.choose} aria-labelledby="choose-title">
        <div>
          <p className={styles.chooseKicker}>THE MCU STORY IS NOW YOURS TO READ</p>
          <h2 id="choose-title">CHOOSE WHAT<br />YOU WANT TO UNDERSTAND.</h2>
        </div>
        <nav className={styles.routeList} aria-label="MCU archive destinations">
          <Link href="/characters"><span>CHARACTERS</span><small>Follow a life through its pressures and choices.</small></Link>
          <Link href="/films"><span>FILMS</span><small>See what each event changes.</small></Link>
          <Link href="/timeline"><span>TIMELINE</span><small>Fold release and chronology into one sequence.</small></Link>
          <Link href="/watch"><span>WATCH ORDER</span><small>Build the path that fits your intent.</small></Link>
        </nav>
      </section>
    </div>
  );
}

export function ExperienceFallback({ mode = "landing" }: { mode?: "landing" | "continuum" }) {
  return mode === "continuum" ? <ContinuumReading /> : <LandingPage />;
}
