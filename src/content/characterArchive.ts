export type ArchiveCharacter = {
  id: string;
  slug: string;
  name: string;
  role: string;
  firstAppearance: string;
  core: string;
  legacy: string;
  relationships: string[];
  turningPoints: { title: string; detail: string }[];
};

export const archiveCharacters: ArchiveCharacter[] = [
  {
    id: "tony-stark", slug: "tony-stark", name: "Tony Stark", role: "Inventor · Avenger · Legacy", firstAppearance: "Iron Man (2008)",
    core: "A weapons maker who turns survival into responsibility, then spends the rest of his life trying to out-invent the consequences of being Iron Man.",
    legacy: "Tony leaves technology, trauma, a chosen family, and an impossible standard of sacrifice for the people who follow.",
    relationships: ["Pepper Potts · the life that makes home possible", "Steve Rogers · trust broken by different ideas of responsibility", "Peter Parker · a mentor bond that becomes inheritance"],
    turningPoints: [{ title: "BUILDS THE FIRST SUIT", detail: "Captivity forces Tony to turn invention away from weapons and toward escape." }, { title: "BREAKS WITH STEVE", detail: "The Sokovia Accords turn Tony's need for accountability into an irreparable personal conflict." }, { title: "CHOOSES THE LAST ACT", detail: "Tony ends the battle with Thanos and makes the legacy he spent years trying to prevent." }],
  },
  {
    id: "steve-rogers", slug: "steve-rogers", name: "Steve Rogers", role: "Soldier · Avenger · Symbol", firstAppearance: "Captain America: The First Avenger (2011)",
    core: "A man defined by decency before strength, who repeatedly chooses people over institutions when the two come apart.",
    legacy: "Steve proves that a symbol only means something when it can be carried forward by someone who believes in its values.",
    relationships: ["Bucky Barnes · the friendship Steve refuses to abandon", "Tony Stark · loyalty tested by accountability and grief", "Sam Wilson · the friend entrusted with the shield"],
    turningPoints: [{ title: "TAKES THE SERUM", detail: "Steve becomes physically powerful without surrendering the empathy that made him worthy." }, { title: "DESTROYS S.H.I.E.L.D.'S CERTAINTY", detail: "He rejects pre-emptive control when Hydra turns security into surveillance." }, { title: "PASSES ON THE SHIELD", detail: "Steve chooses a life beyond the war and makes Sam the next Captain America." }],
  },
  {
    id: "natasha-romanoff", slug: "natasha-romanoff", name: "Natasha Romanoff", role: "Spy · Avenger · Chosen Family", firstAppearance: "Iron Man 2 (2010)",
    core: "A former assassin who believes the red in her ledger can be answered only through deliberate acts of protection.",
    legacy: "Natasha becomes the emotional center who holds the Avengers together when the world gives them every reason to disappear.",
    relationships: ["Clint Barton · the history that gave Natasha a second chance", "Yelena Belova · the family she was denied", "Steve Rogers · the trust of someone who sees her clearly"],
    turningPoints: [{ title: "CHOSES THE AVENGERS", detail: "Natasha moves from infiltration to belonging and begins to build a family by choice." }, { title: "EXPOSES HYDRA", detail: "She burns her cover to make institutional corruption visible." }, { title: "TAKES THE SOUL STONE COST", detail: "Natasha gives her life so the remaining Avengers have a path to restore everyone else." }],
  },
  {
    id: "thor-odinson", slug: "thor-odinson", name: "Thor Odinson", role: "God of Thunder · King Without a Kingdom", firstAppearance: "Thor (2011)",
    core: "A prince who learns that worth is not inherited by a hammer, a throne, or a family name.",
    legacy: "Thor's story makes survival after enormous loss a form of heroism, then gives him permission to choose a new purpose.",
    relationships: ["Loki · brotherhood repeatedly tested by betrayal and love", "Jane Foster · a human life that changes Thor's idea of worth", "Valkyrie · a fellow survivor who helps remake Asgard"],
    turningPoints: [{ title: "LEARNS WORTHINESS", detail: "Banishment strips Thor of entitlement and teaches him to act without the promise of power." }, { title: "LETS ASGARD FALL", detail: "Thor accepts that a people are more important than the place that once defined them." }, { title: "LIVES AFTER FAILURE", detail: "The loss to Thanos forces Thor to confront grief rather than hiding inside vengeance." }],
  },
  {
    id: "bruce-banner", slug: "bruce-banner", name: "Bruce Banner", role: "Scientist · Hulk · Avenger", firstAppearance: "The Incredible Hulk (2008)",
    core: "A scientist who fears his own anger until he learns that intelligence and force do not have to be enemies.",
    legacy: "Bruce becomes the proof that a person can integrate the parts of themselves they once believed were irreconcilable.",
    relationships: ["Natasha Romanoff · intimacy shaped by mutual fear and restraint", "Tony Stark · scientific brilliance amplified by dangerous confidence", "The Avengers · a team that needs both Banner's mind and Hulk's strength"],
    turningPoints: [{ title: "JOINS THE BATTLE OF NEW YORK", detail: "Bruce claims control over the moment everyone expects him to lose it." }, { title: "CREATES ULTRON WITH TONY", detail: "Fear of another invasion turns prevention into a disaster the team must own." }, { title: "BECOMES SMART HULK", detail: "Bruce resolves the split between his intellect and rage on his own terms." }],
  },
  {
    id: "wanda-maximoff", slug: "wanda-maximoff", name: "Wanda Maximoff", role: "Avenger · Witch · Grief Made Visible", firstAppearance: "Avengers: Age of Ultron (2015)",
    core: "A survivor whose extraordinary power makes every loss feel large enough to alter reality itself.",
    legacy: "Wanda's story asks whether grief can be carried without making other people live inside it.",
    relationships: ["Pietro Maximoff · the loss that never stops shaping her", "Vision · love made possible by an impossible shared origin", "Doctor Strange · a mirror for the cost of power without restraint"],
    turningPoints: [{ title: "SWITCHES SIDES IN SOKOVIA", detail: "Wanda recognizes Ultron's logic as another form of the violence that hurt her family." }, { title: "LOSES VISION TWICE", detail: "Infinity War binds personal loss to the universe's most public catastrophe." }, { title: "LETS WESTVIEW GO", detail: "Wanda ends the reality she built, choosing the pain of truth over an imposed fantasy." }],
  },
  {
    id: "peter-parker", slug: "peter-parker", name: "Peter Parker", role: "Spider-Man · Friendly Neighborhood Hero", firstAppearance: "Captain America: Civil War (2016)",
    core: "A teenager who wants to be worthy of the larger world, then learns that responsibility is what remains when no mentor can make the choice for him.",
    legacy: "Peter returns the MCU to street level: the universe can be vast, but saving one person still matters absolutely.",
    relationships: ["Tony Stark · mentorship that becomes a complicated inheritance", "MJ · the future Peter chooses to protect at personal cost", "Aunt May · the moral center Peter carries forward"],
    turningPoints: [{ title: "REFUSES THE EASY SUIT", detail: "Peter learns that being a hero cannot depend on access to Tony's technology." }, { title: "FACES TONY'S ABSENCE", detail: "Peter has to decide whether legacy means imitation or judgment." }, { title: "ASKS TO BE FORGOTTEN", detail: "Peter saves the multiverse by giving up the relationships that made his life feel known." }],
  },
  {
    id: "tchalla", slug: "tchalla", name: "T'Challa", role: "King of Wakanda · Black Panther", firstAppearance: "Captain America: Civil War (2016)",
    core: "A king who begins with vengeance and becomes a leader by accepting that his nation's isolation has consequences beyond its borders.",
    legacy: "T'Challa turns Wakanda outward, making responsibility to the world part of its strength rather than a threat to it.",
    relationships: ["Shuri · a sibling bond that holds Wakanda's future", "Nakia · the voice calling Wakanda toward the world", "Erik Killmonger · the abandoned history T'Challa must confront"],
    turningPoints: [{ title: "SPARES ZEMO", detail: "T'Challa refuses to let vengeance define another life." }, { title: "FACES KILLMONGER", detail: "The challenge reveals the human cost of Wakanda's isolation." }, { title: "OPENS WAKANDA", detail: "T'Challa makes global responsibility the nation's new direction." }],
  },
  {
    id: "carol-danvers", slug: "carol-danvers", name: "Carol Danvers", role: "Captain Marvel · Cosmic Defender", firstAppearance: "Captain Marvel (2019)",
    core: "A pilot who recovers her stolen history and refuses every system that tries to reduce her power or define her limits.",
    legacy: "Carol expands the MCU's horizon, reminding Earth-bound heroes that their choices echo across worlds.",
    relationships: ["Maria Rambeau · the friendship that restores Carol's humanity", "Monica Rambeau · a bond shaped by time and absence", "Nick Fury · a partnership born before the Avengers exist"],
    turningPoints: [{ title: "RECOVERS HER MEMORY", detail: "Carol realizes the Kree story of her past was built to control her." }, { title: "REFUSES THE SUPREME INTELLIGENCE", detail: "She rejects the test designed to keep her power conditional." }, { title: "ANSWERS THE PAGE", detail: "Carol's return to Earth makes the Avengers' final plan possible." }],
  },
  {
    id: "stephen-strange", slug: "stephen-strange", name: "Stephen Strange", role: "Sorcerer Supreme · Guardian of Reality", firstAppearance: "Doctor Strange (2016)",
    core: "A brilliant surgeon who loses control of his hands and finds purpose by accepting responsibility for realities beyond his own ambition.",
    legacy: "Stephen makes the multiverse personal: immense power is never an excuse to avoid the cost of a difficult choice.",
    relationships: ["Wong · the grounded friendship that checks Stephen's ego", "Christine Palmer · the life Stephen cannot simply solve", "Peter Parker · compassion that accidentally opens a multiversal wound"],
    turningPoints: [{ title: "BARGAINS WITH DORMAMMU", detail: "Stephen wins by accepting repeated pain rather than overpowering an enemy." }, { title: "GIVES UP THE TIME STONE", detail: "He chooses a future no one else can yet understand." }, { title: "CONFRONTS THE MULTIVERSE", detail: "Stephen has to face the damage done when every variant believes they alone can fix everything." }],
  },
  {
    id: "loki-laufeyson", slug: "loki-laufeyson", name: "Loki", role: "God of Mischief · Keeper of Stories", firstAppearance: "Thor (2011)",
    core: "A prince raised inside a lie, searching for a place where being wanted does not have to mean being chosen over someone else.",
    legacy: "Loki's repeated transformations make him the MCU's great study in whether a person can become more than the worst thing they have done.",
    relationships: ["Thor · love and rivalry inside the same family wound", "Mobius · friendship that gives Loki room to change", "Sylvie · a mirror who refuses Loki's old need for control"],
    turningPoints: [{ title: "LEARNS HIS ORIGIN", detail: "Loki's identity fractures when he discovers he is Laufey's son." }, { title: "DIES FOR THOR", detail: "A first selfless act changes what Loki is capable of becoming." }, { title: "CHOOSES THE TIMELINE", detail: "Loki accepts a lonely responsibility so countless stories can continue." }],
  },
  {
    id: "sam-wilson", slug: "sam-wilson", name: "Sam Wilson", role: "Captain America · Falcon · Avenger", firstAppearance: "Captain America: The Winter Soldier (2014)",
    core: "A veteran who begins as Steve Rogers' most grounded ally and grows into a leader who believes symbols must serve real people.",
    legacy: "Sam carries the shield without trying to become Steve, proving that inheritance matters most when it changes hands honestly.",
    relationships: ["Steve Rogers · a friendship built on shared service and trust", "Bucky Barnes · a difficult partnership inherited from Steve's history", "Joaquin Torres · the next person Sam chooses to lift up"],
    turningPoints: [{ title: "JOINS STEVE ON THE RUN", detail: "Sam chooses friendship and conscience over the comfort of official approval." }, { title: "ACCEPTS THE SHIELD", detail: "Sam takes time to decide what Captain America should mean in his hands." }, { title: "BECOMES CAPTAIN AMERICA", detail: "Sam publicly claims the mantle while insisting that symbols must answer to the people they represent." }],
  },
];
