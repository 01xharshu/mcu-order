/**
 * Full-story editorial notes for every released feature film in the archive.
 * These are original archive summaries, not reproduced dialogue or screenplay
 * text.
 */

export type FilmNarrative = {
  fullStory: string;
  fullConsequence: string;
  keyTurns: string[];
  memory: string;
};

export const filmNarratives: Record<string, FilmNarrative> = {
  "iron-man": {
    fullStory: "After being captured while demonstrating weapons in Afghanistan, Tony Stark builds the first armored suit to escape. Back home, he shuts down Stark Industries' weapons division, exposes Obadiah Stane's betrayal, and publicly claims the Iron Man identity.",
    fullConsequence: "Tony turns private invention into public responsibility. His decision creates the model—and the problem—of a hero whose choices reshape global politics.",
    keyTurns: ["Tony survives captivity by building the Mark I.", "Stark Industries stops making weapons.", "Tony reveals that he is Iron Man."],
    memory: "The origin point: a cave, an arc reactor, and the line that made the universe feel connected.",
  },
  "the-avengers": {
    fullStory: "Loki uses the Tesseract to open a portal above New York and bring an invading Chitauri army to Earth. Nick Fury's divided recruits become a team only when each accepts a role in the fight; Tony carries a nuclear missile through the portal and survives the fall.",
    fullConsequence: "The Battle of New York proves that the Avengers exist, but it also makes Earth a visible target. Almost every major conflict that follows inherits this new scale of consequence.",
    keyTurns: ["The Avengers stop fighting one another long enough to become a team.", "New York becomes the MCU's defining shared trauma.", "The Tesseract and the alien invasion widen the story beyond Earth."],
    memory: "The first circle shot. The first time all six heroes finally occupy the same frame.",
  },
  "captain-america-winter-soldier": {
    fullStory: "Steve Rogers discovers that Hydra has infiltrated S.H.I.E.L.D. from within and plans to use Project Insight to eliminate potential threats before they can act. He refuses to abandon Bucky Barnes, the assassin revealed to be his oldest friend, while Natasha releases Hydra's secrets to the world.",
    fullConsequence: "S.H.I.E.L.D. falls, trust becomes fragile, and Bucky's survival becomes the fault line that will later split the Avengers.",
    keyTurns: ["Project Insight turns security into pre-emptive control.", "Natasha exposes Hydra and S.H.I.E.L.D. to the public.", "Steve chooses Bucky over a clean escape."],
    memory: "A political thriller inside a superhero universe—and the elevator that never needs an introduction.",
  },
  "captain-america-civil-war": {
    fullStory: "After collateral damage pushes the United Nations to propose the Sokovia Accords, Tony Stark accepts oversight while Steve Rogers refuses to sign away individual judgment. The discovery that a brainwashed Bucky killed Tony's parents turns a political fracture into a personal war.",
    fullConsequence: "The Avengers do not simply lose a fight; they lose their ability to act as one family. When Thanos arrives, that absence becomes catastrophic.",
    keyTurns: ["The Sokovia Accords divide Tony and Steve.", "Zemo makes the Avengers weaponize their own grief.", "Steve and Bucky leave Tony injured and the team scattered."],
    memory: "The airport showdown, the broken shield, and a friendship that never returns to its old shape.",
  },
  "thor-ragnarok": {
    fullStory: "Thor discovers that Hela's return is tied to Asgard's violent imperial past. With Loki, Valkyrie, Banner, and a prison-break army, he accepts that Asgard is its people rather than its physical kingdom, then unleashes Surtur to destroy it and stop Hela.",
    fullConsequence: "Thor loses his home, his father, his hammer, and much of his family—then leads refugees directly into the opening movement of Infinity War.",
    keyTurns: ["Thor learns the truth of Asgard's history.", "Valkyrie returns to the fight.", "Asgard is destroyed so its people can survive."],
    memory: "A lightning-powered reinvention that turns loss into a new kind of leadership.",
  },
  "black-panther": {
    fullStory: "T'Challa inherits Wakanda after his father's death, only to be challenged by Erik Killmonger, whose abandonment exposes the cost of Wakanda's isolation. T'Challa defeats him but accepts the moral challenge: Wakanda must share its resources and responsibility with the wider world.",
    fullConsequence: "Wakanda changes from hidden nation to global participant, becoming an essential refuge and ally in the war to come.",
    keyTurns: ["Killmonger forces T'Challa to confront Wakanda's isolation.", "Nakia's vision of outreach becomes Wakanda's new direction.", "T'Challa opens Wakanda to the world."],
    memory: "A kingdom, a challenge, and the moment Wakanda decides that isolation is no longer enough.",
  },
  "avengers-infinity-war": {
    fullStory: "Thanos gathers the six Infinity Stones while the separated Avengers, Guardians, sorcerers, and Wakandans each try to stop him. Their efforts fail in sequence; Thanos sacrifices Gamora, defeats the heroes, and uses the completed Gauntlet to erase half of all life.",
    fullConsequence: "The Snap makes consequence literal. The remaining heroes inherit a universe defined by absence, guilt, and five years of unfinished grief.",
    keyTurns: ["Thanos completes the Infinity Gauntlet.", "The heroes lose on Titan and in Wakanda.", "Half of all life disappears."],
    memory: "The impossible ending that left the whole theater silent after the dust settled.",
  },
  "avengers-endgame": {
    fullStory: "Five years after the Snap, the surviving Avengers use time travel to retrieve the Infinity Stones from different points in their history. Natasha sacrifices herself for the Soul Stone, Tony uses the restored Stones to defeat Thanos, and Steve returns them before choosing a life with Peggy Carter.",
    fullConsequence: "The Infinity Saga closes through sacrifice and inheritance: Tony's legacy defines the next generation, Steve passes the shield to Sam, and the world has to learn how to live after restoration.",
    keyTurns: ["The time heist returns the Avengers to defining earlier moments.", "Natasha's sacrifice secures the Soul Stone.", "Tony ends the battle at the cost of his life.", "Steve gives Sam the shield."],
    memory: "Portals. Assemble. The last dance. Every returning face made the decade feel present at once.",
  },
  "spider-man-far-from-home": {
    fullStory: "Peter tries to step away from heroism after Tony's death, but Quentin Beck exploits that grief to claim Tony's legacy and stage false disasters. Peter rejects the inherited technology as a substitute for judgment, defeats Beck, and then has his identity exposed to the world.",
    fullConsequence: "The Infinity Saga's grief becomes Peter's personal burden, and the exposed identity directly triggers the crisis of No Way Home.",
    keyTurns: ["Peter mistakes Beck's performance for mentorship.", "Peter chooses his own responsibility over Tony's shadow.", "Peter's identity is made public."],
    memory: "A summer trip haunted by the question of who gets to inherit Iron Man's world.",
  },
  "spider-man-no-way-home": {
    fullStory: "Trying to erase public knowledge of his identity, Peter asks Doctor Strange for a spell that fractures the boundaries between universes. Peter works with two alternate Spider-Men to cure the displaced villains, then asks Strange to make everyone forget him in order to close the rift.",
    fullConsequence: "Peter saves the multiverse by losing the life he knew. The film makes the cost of heroism intimate again while turning the multiverse from idea into lived consequence.",
    keyTurns: ["The spell pulls visitors from other universes into Peter's world.", "Three Spider-Men choose healing over revenge.", "Peter gives up every personal connection to repair the fracture."],
    memory: "Three generations of Spider-Man meeting in one story—and a final swing into a lonelier New York.",
  },
  "guardians-of-the-galaxy-vol-3": {
    fullStory: "The Guardians race to save Rocket after the High Evolutionary's attack reopens the trauma of his creation. They rescue the children and animals held in the villain's experiments, while each Guardian accepts a different future beyond the version of the team that first formed around Peter Quill.",
    fullConsequence: "The Guardians survive by changing. Rocket leads a new team, Peter returns to Earth, and the original family is allowed to end without being erased.",
    keyTurns: ["Rocket's origin reveals the cost of the High Evolutionary's perfectionism.", "The Guardians choose rescue over simple revenge.", "The original team separates into new lives."],
    memory: "A farewell built around Rocket, found family, and the courage to let a beloved team become something new.",
  },
  "thunderbolts": {
    fullStory: "Valentina Allegra de Fontaine sends Yelena, John Walker, Ghost, and Taskmaster into a trap meant to erase her own loose ends; Taskmaster is killed before the survivors escape with Bob Reynolds, a failed subject of Val's Sentry program. Bucky and Red Guardian join them as Bob's power manifests as the Sentry and then the destructive Void. Instead of defeating Bob by force, Yelena enters his inner void and the whole team follows, helping him choose connection over annihilation.",
    fullConsequence: "Val repackages the survivors as the public-facing New Avengers, proving that the need for heroes can be exploited as easily as it can be answered. The team begins as a group of damaged people who refuse to leave one another behind.",
    keyTurns: ["Val's kill box turns a deniable operation into a betrayal.", "Bob's Sentry power gives way to the Void.", "The team saves Bob from inside his own darkness and is presented as the New Avengers."],
    memory: "The strange comfort of seeing the MCU's rough edges become a team on their own terms.",
  },
  "fantastic-four-first-steps": {
    fullStory: "In the retro-futurist world of Earth-828, Reed Richards, Sue Storm, Johnny Storm, and Ben Grimm confront Galactus and the Silver Surfer while protecting their home and their growing family. The team must balance public heroism with the intimate responsibility of becoming parents.",
    fullConsequence: "Marvel's First Family enters the cinematic continuity through a world defined by invention, family, and cosmic scale, opening a new branch of the saga's shared mythology.",
    keyTurns: ["The Four face a threat to their entire world.", "Family responsibility becomes part of the mission.", "Earth-828 gives the MCU a distinct retro-futurist branch."],
    memory: "A space-age family adventure that makes its own world feel fully lived-in before asking it to connect outward.",
  },
  "incredible-hulk": {
    fullStory: "Bruce Banner hides in Brazil while searching for a cure to the gamma radiation that turns him into the Hulk. General Ross sends Emil Blonsky after him; Blonsky takes an unstable enhancement and becomes the Abomination, forcing Bruce to embrace the Hulk long enough to stop him in Harlem.",
    fullConsequence: "Bruce stops treating the Hulk solely as a disease to be removed. The film leaves him as a volatile but necessary figure in the larger world of super-soldier experiments.",
    keyTurns: ["Bruce returns to the United States for a possible cure.", "Blonsky becomes the Abomination.", "Bruce chooses to become the Hulk to save Harlem."],
    memory: "The lonely, haunted corner of Phase One—and the first glimpse that the Avengers will need a monster on their side.",
  },
  "iron-man-2": {
    fullStory: "Tony Stark's arc reactor is poisoning him while Ivan Vanko uses his father's resentment toward the Starks to build rival armor. Tony learns that his father left him the key to a new element, makes peace with Pepper and Rhodey, and defeats Vanko's drone army with Rhodey at the Stark Expo.",
    fullConsequence: "Tony survives the mortality panic that drives him toward recklessness, while Rhodey becomes War Machine and Natasha Romanoff enters the orbit of the Avengers.",
    keyTurns: ["Tony's reactor poisoning makes his confidence self-destructive.", "Rhodey takes the armor that becomes War Machine.", "Tony creates a new element from Howard Stark's work."],
    memory: "A world already learning how quickly Iron Man can turn a garage, a suit, and a bad decision into history.",
  },
  "thor": {
    fullStory: "Thor's arrogance reopens conflict with the Frost Giants, so Odin strips him of his power and exiles him to Earth. While Thor learns humility with Jane Foster and her friends, Loki discovers his Frost Giant origin and tries to seize Asgard by destroying Jotunheim. Thor returns worthy of Mjolnir and stops Loki, but the Bifrost's destruction separates him from Jane.",
    fullConsequence: "Thor becomes a protector rather than an heir demanding a throne, while Loki's need for belonging becomes the emotional engine of the family's future disasters.",
    keyTurns: ["Thor is exiled and loses Mjolnir.", "Loki discovers Odin concealed his true origin.", "Thor destroys the Bifrost to prevent genocide."],
    memory: "Rain on the hammer, a prince humbled on Earth, and the sibling wound that never stays closed.",
  },
  "captain-america-first-avenger": {
    fullStory: "Steve Rogers is chosen for the Super Soldier program because he refuses to abandon his empathy and courage. He leads the Howling Commandos against Hydra and Red Skull, who intends to use the Tesseract to destroy world capitals. Steve crashes the Valkyrie into the Arctic to stop the attack and wakes decades later in a world that moved on without him.",
    fullConsequence: "Steve's sacrifice creates the moral center of the Avengers, while the Tesseract and Hydra's survival become threads that shape the entire shared history.",
    keyTurns: ["Steve becomes Captain America after Erskine's death.", "Red Skull uses the Tesseract to build a global threat.", "Steve sacrifices his chance at a life with Peggy to save millions."],
    memory: "A 1940s war story whose final dance becomes one of the MCU's deepest promises of lost time.",
  },
  "iron-man-3": {
    fullStory: "Traumatized after the Battle of New York, Tony builds suits compulsively and is targeted by Aldrich Killian's Extremis program. The Mandarin persona is revealed as a manufactured distraction while Killian plans to control the presidency through engineered terror. Tony destroys his suits after rescuing Pepper and choosing the person behind the armor over the performance of Iron Man.",
    fullConsequence: "Tony's fear of invasion and helplessness becomes an obsession with control—a trait that will later help create Ultron and sharpen the conflict with Steve.",
    keyTurns: ["Tony's panic attacks reveal New York's lasting impact.", "The Mandarin is exposed as Killian's constructed myth.", "Tony chooses Pepper and his own recovery over endless armor."],
    memory: "Christmas lights, a kid in Tennessee, and the reminder that the suit was never the whole answer.",
  },
  "thor-dark-world": {
    fullStory: "The Convergence brings the Nine Realms into alignment and awakens the Aether, a weapon sought by Malekith and the Dark Elves. Jane becomes its host, Frigga is killed protecting her, and Thor joins Loki in a risky plan to stop Malekith in Greenwich. Loki appears to die, then secretly takes Odin's place on Asgard's throne.",
    fullConsequence: "The Aether becomes the Reality Stone, and Loki's hidden rule of Asgard leaves Thor's family vulnerable just before Ragnarok forces every buried secret into view.",
    keyTurns: ["Jane becomes host to the Aether.", "Frigga's death unites Thor and Loki in grief.", "Loki secretly replaces Odin as ruler of Asgard."],
    memory: "A fractured family crossing worlds—plus the moment the Infinity Stones begin to feel like a pattern.",
  },
  "guardians-of-the-galaxy": {
    fullStory: "Peter Quill steals an Orb containing the Power Stone and is pursued by Gamora, Rocket, Groot, Drax, Ronan, and the Nova Corps. The misfits form a reluctant family in prison, then unite to keep Ronan from using the Stone to destroy Xandar. They survive its power by holding hands and sharing the burden together.",
    fullConsequence: "The Guardians open the MCU to a cosmic family built from outsiders. Their knowledge of Thanos, the Stones, and sacrifice becomes crucial when the Earthbound heroes cannot face the coming war alone.",
    keyTurns: ["The Orb is revealed to hold the Power Stone.", "The prison escape turns strangers into a team.", "The Guardians share the Stone's power to defeat Ronan."],
    memory: "A mixtape, a dancing distraction, and the first proof that the universe could be enormous and still feel personal.",
  },
  "avengers-age-of-ultron": {
    fullStory: "Tony and Bruce use Loki's scepter to create Ultron, hoping an artificial protector can keep Earth safe. Ultron decides humanity is the threat, recruits Wanda and Pietro Maximoff through their grief, and attempts to extinguish life by dropping Sokovia from the sky. The Avengers stop him with new allies Vision and Wanda, but Pietro dies and Sokovia is devastated.",
    fullConsequence: "Ultron makes the Avengers' collateral damage impossible to ignore. Sokovia, Wanda's grief, Vision's birth, and Tony's fear all feed directly into Civil War and Infinity War.",
    keyTurns: ["Tony's defensive idea becomes Ultron.", "Wanda changes sides after seeing Ultron's real plan.", "Vision is born and helps end the battle for Sokovia."],
    memory: "The party scene, a hammer nobody can lift, and the terrible cost of trying to build a suit around the world.",
  },
  "ant-man": {
    fullStory: "Recently released thief Scott Lang is recruited by Hank Pym to steal the Yellowjacket technology from Darren Cross. Scott learns to use the Ant-Man suit, wins the trust of Hope and his daughter Cassie, and shrinks into the Quantum Realm to stop Cross before returning against all odds.",
    fullConsequence: "Scott proves that heroism can begin with a second chance. His trip into the Quantum Realm creates the practical and emotional doorway that later makes the Endgame time heist possible.",
    keyTurns: ["Scott accepts Hank's impossible heist.", "Hope helps turn Scott into a real partner rather than a pawn.", "Scott enters and returns from the Quantum Realm."],
    memory: "A tiny heist with a giant heart—and Thomas the Tank Engine becoming an action-movie threat.",
  },
  "doctor-strange": {
    fullStory: "After a car accident destroys his surgical career, Stephen Strange travels to Kamar-Taj and learns to use magic under the Ancient One. He confronts Kaecilius and Dormammu's invasion by trapping himself in a time loop, then bargains for Earth by offering endless repetition instead of victory through force.",
    fullConsequence: "Strange becomes a guardian of reality and custodian of the Time Stone. His willingness to make impossible bargains defines his role in the wars against Thanos and across the multiverse.",
    keyTurns: ["Strange gives up certainty to learn at Kamar-Taj.", "The Ancient One's death forces him to lead.", "Strange defeats Dormammu through a time loop rather than brute power."],
    memory: "A surgeon humbled into a sorcerer, where one impossible hand gesture opens the whole map of reality.",
  },
  "guardians-of-the-galaxy-vol-2": {
    fullStory: "Peter meets Ego, the father he never knew, while the Guardians face the Sovereign and the fallout of their own impulsiveness. Ego reveals that he killed Peter's mother and intends to remake the universe through his own expansion. Peter chooses the family he built over the father who made him, and Yondu dies saving him.",
    fullConsequence: "The Guardians become a true family through loss rather than blood. Gamora and Nebula begin to repair their bond, and Peter's grief over Yondu becomes part of the emotional weight he carries into Infinity War.",
    keyTurns: ["Ego offers Peter the belonging he has wanted all his life.", "Peter learns Ego caused his mother's death.", "Yondu saves Peter and dies as the father he needed."],
    memory: "The funeral arrows, the found-family tearjerker, and the understanding that being chosen matters more than being claimed.",
  },
  "spider-man-homecoming": {
    fullStory: "Peter Parker wants to prove he belongs with the Avengers after fighting beside them in Civil War, but Tony Stark asks him to remain a neighborhood hero. Peter discovers that Adrian Toomes is selling alien-tech weapons and is secretly the father of Liz, his homecoming date. Peter rejects the temptation to rely on Tony's suit and saves Toomes' victims alone.",
    fullConsequence: "Peter learns that responsibility is not a shortcut to a larger team or shinier equipment. His place in Tony's world becomes real because he refuses to be defined by it.",
    keyTurns: ["Peter's desire to be an Avenger makes him overreach.", "The Vulture's identity turns a school night into a moral test.", "Peter saves people without the Stark suit and earns Tony's respect."],
    memory: "The car ride, the broken suit, and a friendly neighborhood hero discovering that small stakes can still be everything.",
  },
  "ant-man-and-the-wasp": {
    fullStory: "While under house arrest after Civil War, Scott is drawn back to Hank and Hope's mission to rescue Janet van Dyne from the Quantum Realm. They race against Sonny Burch and Ghost, whose unstable condition makes her desperate for quantum energy. Janet is rescued and helps stabilize Ghost, but Scott is stranded in the Quantum Realm when the Snap erases his partners.",
    fullConsequence: "The reunion of the Pym family is immediately shadowed by the Snap. Scott's later escape gives the Avengers the idea that time can be navigated through the Quantum Realm.",
    keyTurns: ["Janet signals that she is alive inside the Quantum Realm.", "Hope becomes the Wasp beside Scott.", "The Snap leaves Scott alone in the Quantum Realm."],
    memory: "A family rescue played at quantum scale, ending on the quiet horror of a radio call that gets no answer.",
  },
  "captain-marvel": {
    fullStory: "Vers is a Kree warrior with missing memories who crash-lands on Earth and discovers she is Carol Danvers, a former Air Force pilot altered by the Tesseract. She learns the Kree have lied about the Skrulls, rejects the control device limiting her power, and helps the Skrulls find a new home. In the 1990s, she also forms the friendship that will shape Nick Fury's future.",
    fullConsequence: "Carol becomes a cosmic defender whose return is reserved for the scale of Endgame. The film reframes the Tesseract's history and shows Fury's earliest encounter with the extraordinary.",
    keyTurns: ["Carol recovers the truth of her life on Earth.", "The Skrulls are revealed as refugees rather than invaders.", "Carol removes the limits on her power and leaves to help them find a home."],
    memory: "A pager, a cat, and a 1990s origin story that lets Carol take back every name others tried to give her.",
  },
  "black-widow": {
    fullStory: "Between Civil War and Infinity War, Natasha reunites with the family she once used as a cover and confronts the Red Room that trained and controlled her. She and Yelena free the Widows from Dreykov's chemical control, while Melina, Alexei, and the sisters turn a fake family into a chosen one. Natasha gives her allies a future and then returns to the Avengers' larger war.",
    fullConsequence: "Natasha's past becomes a story of liberation rather than only guilt, and Yelena inherits a complicated love, anger, and legacy that continues after Natasha's death.",
    keyTurns: ["Yelena's antidote reveals the Widows are chemically controlled.", "Natasha confronts Dreykov and the Red Room falls.", "The sisters part as Natasha returns to the Avengers."],
    memory: "The estranged family dinner where every old lie turns into a reason to fight for one another.",
  },
  "shang-chi": {
    fullStory: "Shang-Chi has hidden from his father Wenwu and the Ten Rings, but a message apparently from his late mother draws him and Katy back into his family history. Wenwu is manipulated into opening the gate to Ta Lo, where the Dweller-in-Darkness escapes. Shang-Chi accepts his mother and father's legacies without becoming either of them, using the Ten Rings to defeat the creature.",
    fullConsequence: "A new hero enters the Avengers' wider orbit carrying technology whose origin remains unexplained, while the Ten Rings change hands from an empire of fear to a possibility for something better.",
    keyTurns: ["Shang-Chi faces the father he fled.", "Wenwu's grief opens the prison of the Dweller-in-Darkness.", "Shang-Chi takes the Ten Rings and remakes their meaning."],
    memory: "A bus fight, a bamboo forest, and a son discovering that inheritance can be chosen rather than obeyed.",
  },
  "eternals": {
    fullStory: "The Eternals have secretly protected humanity for millennia while waiting for the Emergence, when a Celestial will be born from Earth and destroy it. After learning their mission was never to save humanity from the Deviants but to prepare the planet for sacrifice, the team divides. Sersi turns the emerging Tiamut to stone, saving Earth at the cost of defying their creator Arishem.",
    fullConsequence: "Earth is revealed to be part of a cosmic reproduction system, and the surviving Eternals face Arishem's judgment. The story expands the stakes beyond nations, planets, and even the Avengers' familiar moral map.",
    keyTurns: ["The Eternals learn the true purpose of the Emergence.", "Ikaris chooses the Celestials over the family he loves.", "Sersi stops Tiamut and saves Earth from destruction."],
    memory: "Immortals looking back at every era of humanity before deciding that one imperfect world is worth defying a god for.",
  },
  "doctor-strange-in-the-multiverse-of-madness": {
    fullStory: "Doctor Strange protects America Chavez, a teenager who can travel between universes, from Wanda Maximoff's attempt to use her power to reach her alternate children. Wanda's grief and the Darkhold lead her through multiple realities and to Mount Wundagore, where she finally sees that the children she wants fear the person she has become. She destroys the Darkhold across every universe and apparently sacrifices herself.",
    fullConsequence: "The multiverse is no longer a theoretical fracture but a place where decisions leave scars across realities. Strange also accepts that protecting someone can require surrendering control.",
    keyTurns: ["Wanda becomes the Scarlet Witch's destructive version of grief.", "America learns to direct her power.", "Wanda destroys the Darkhold in every universe."],
    memory: "A horror-tinged road through alternate worlds, where the most dangerous magic is the wish to undo loss.",
  },
  "thor-love-and-thunder": {
    fullStory: "Thor is pulled out of aimless cosmic wandering when Gorr begins killing gods with the Necrosword. Jane Foster wields the reassembled Mjolnir while living with cancer, and she and Thor rediscover their love as they protect the children of New Asgard. Jane joins Thor against Gorr and dies after helping him choose love for his daughter over vengeance.",
    fullConsequence: "Thor learns that loss does not forbid a future. He becomes guardian to Gorr's daughter, Love, while Jane's death gives the story its clearest expression of heroic sacrifice since the Infinity Saga.",
    keyTurns: ["Jane becomes the Mighty Thor despite her illness.", "Gorr uses the children of Asgard to draw Thor into his plan.", "Jane helps Gorr choose Love's future and dies a hero."],
    memory: "A screaming-goat odyssey with a surprisingly tender center: two people finding grace in the time they have.",
  },
  "black-panther-wakanda-forever": {
    fullStory: "After T'Challa's death, Shuri, Ramonda, Okoye, Nakia, and M'Baku defend Wakanda while the world seeks vibranium. Namor reveals Talokan, another hidden civilization, and demands Wakanda join his war against the surface. Shuri becomes the Black Panther, nearly chooses revenge after Ramonda's death, then spares Namor and creates a fragile alliance.",
    fullConsequence: "The Black Panther mantle passes through grief to Shuri, and Wakanda's future shifts from isolation to difficult solidarity with other nations shaped by survival.",
    keyTurns: ["Wakanda mourns T'Challa and loses Ramonda to Namor's attack.", "Shuri creates a new heart-shaped herb and becomes Black Panther.", "Shuri spares Namor and chooses alliance over annihilation."],
    memory: "A mourning song for a king and a nation refusing to let grief become its only inheritance.",
  },
  "ant-man-and-the-wasp-quantumania": {
    fullStory: "Scott, Hope, Cassie, Hank, and Janet are pulled into the Quantum Realm, where Janet's former ally Kang rules through fear. Kang needs access to the multiverse and uses Cassie to force Scott toward a power core. Scott and Hope trap Kang's army in a collapsing probability storm, while Cassie and the others reopen a portal so they can return home.",
    fullConsequence: "The Quantum Realm becomes the first explicit battleground against a multiversal conqueror, and the film leaves a warning that defeating one Kang may not end the larger threat.",
    keyTurns: ["Janet reveals her history with Kang.", "Cassie becomes an active hero alongside her father.", "Scott and Hope stop Kang's immediate plan inside the probability storm."],
    memory: "The smallest Avenger in the biggest strange world yet—still anchored by Scott's determination to get back to Cassie.",
  },
  "the-marvels": {
    fullStory: "Carol Danvers, Monica Rambeau, and Kamala Khan begin swapping places whenever they use their light-based powers at the same time. They uncover Dar-Benn's attempt to repair the Kree homeworld by taking resources from worlds Carol loves, including Tarnax and Aladna. The three learn to act as a team, and Monica seals a rift to another universe by trapping herself on the other side.",
    fullConsequence: "Carol accepts responsibility without attempting to carry every burden alone, Kamala begins imagining a new team, and Monica's separation leaves a direct multiversal emotional thread.",
    keyTurns: ["The three heroes learn their powers are entangled.", "Carol faces the consequences of destroying the Supreme Intelligence.", "Monica seals the rift and is stranded in another universe."],
    memory: "A cosmic body-swap trio where teamwork starts as chaos and ends as the only way home.",
  },
  "deadpool-and-wolverine": {
    fullStory: "The TVA tells Wade Wilson that his world is threatened after the death of its Wolverine, so he crosses realities in search of a replacement. He brings home a broken Wolverine from another universe, and together they confront Cassandra Nova in the Void while the TVA's time-ripper threatens Wade's entire timeline. Wade and Logan absorb the machine's energy together, saving Wade's world and giving Logan a place to belong again.",
    fullConsequence: "Deadpool's story becomes a deliberate bridge between realities, while Wolverine's return turns multiversal crossover into a character rescue rather than a mere cameo exercise.",
    keyTurns: ["Wade learns his timeline is scheduled to collapse.", "He finds a Wolverine defined by failure and grief.", "Wade and Logan save the timeline together and choose a shared future."],
    memory: "A gloriously profane road trip through Marvel history with the unexpected warmth of two damaged heroes choosing to stay.",
  },
  "captain-america-brave-new-world": {
    fullStory: "Sam Wilson investigates an assassination attempt on President Thaddeus Ross and the framing of Isaiah Bradley, discovering that Samuel Sterns has used mind control and a buried conspiracy around adamantium to manipulate events. Ross's dependence on Sterns' treatment turns him into the Red Hulk during an international crisis. Sam refuses to meet rage with escalation, helping Ross return to himself and clearing Isaiah's name.",
    fullConsequence: "Sam proves that Captain America is not a copy of Steve but a leader whose strength is empathy under pressure. The fight over adamantium also opens a new geopolitical fault line for the MCU.",
    keyTurns: ["Isaiah is framed through Sterns' manipulation.", "Ross transforms into the Red Hulk in public.", "Sam de-escalates the crisis and redefines the Captain America mantle."],
    memory: "A Captain America story where the shield's most important move is making room for a conversation after the fight.",
  },
};
