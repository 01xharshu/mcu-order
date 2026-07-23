import { WatchPath } from "../lib/content/schemas";

export const watchPaths: WatchPath[] = [
  {
    id: "first_journey",
    title: "The First Journey",
    description: "The default editorial recommendation. Watch the MCU exactly as audiences originally experienced it.",
    orderedFilmIds: [
      "iron-man", "incredible-hulk", "iron-man-2", "thor", "captain-america-first-avenger", "the-avengers",
      "iron-man-3", "thor-dark-world", "captain-america-winter-soldier", "guardians-of-the-galaxy", "avengers-age-of-ultron", "ant-man",
      "captain-america-civil-war", "doctor-strange", "guardians-vol-2", "spider-man-homecoming", "thor-ragnarok", "black-panther", "avengers-infinity-war", "ant-man-and-the-wasp", "captain-marvel", "avengers-endgame", "spider-man-far-from-home",
      "black-widow", "shang-chi", "eternals", "spider-man-no-way-home", "doctor-strange-multiverse", "thor-love-and-thunder", "black-panther-wakanda-forever",
      "ant-man-quantumania", "guardians-vol-3", "the-marvels", "deadpool-wolverine", "captain-america-brave-new-world", "thunderbolts",
      "fantastic-four-first-steps"
    ],
  },
  {
    id: "chronological",
    title: "Chronological Order",
    description: "Follow the events of the MCU timeline as they occurred in-universe.",
    orderedFilmIds: [
      "captain-america-first-avenger",
      "captain-marvel",
      "iron-man",
      "iron-man-2",
      "incredible-hulk",
      "thor",
      "the-avengers",
      "iron-man-3",
      "thor-dark-world",
      "captain-america-winter-soldier",
      "guardians-of-the-galaxy",
      "guardians-vol-2",
      "avengers-age-of-ultron",
      "ant-man",
      "captain-america-civil-war",
      "black-widow",
      "spider-man-homecoming",
      "black-panther",
      "doctor-strange",
      "thor-ragnarok",
      "ant-man-and-the-wasp",
      "avengers-infinity-war",
      "avengers-endgame",
      "spider-man-far-from-home",
      "shang-chi",
      "eternals",
      "spider-man-no-way-home",
      "doctor-strange-multiverse",
      "black-panther-wakanda-forever",
      "thor-love-and-thunder",
      "ant-man-quantumania",
      "guardians-vol-3",
      "the-marvels",
      "deadpool-wolverine",
      "captain-america-brave-new-world",
      "thunderbolts",
      "fantastic-four-first-steps"
    ],
  },
  {
    id: "infinity_saga_essential",
    title: "Infinity Saga Essential Path",
    description: "A curated catch-up path for the Infinity Stones storyline.",
    orderedFilmIds: [
      "iron-man",
      "captain-america-first-avenger",
      "the-avengers",
      "captain-america-winter-soldier",
      "guardians-of-the-galaxy",
      "avengers-age-of-ultron",
      "captain-america-civil-war",
      "doctor-strange",
      "thor-ragnarok",
      "black-panther",
      "avengers-infinity-war",
      "ant-man-and-the-wasp",
      "captain-marvel",
      "avengers-endgame"
    ]
  },
  {
    id: "multiverse",
    title: "Multiverse Path",
    description: "The path detailing the collapse and rebirth of the multiverse.",
    orderedFilmIds: [
      "spider-man-no-way-home",
      "doctor-strange-multiverse",
      "ant-man-quantumania",
      "the-marvels",
      "deadpool-wolverine",
      "fantastic-four-first-steps",
      "avengers-doomsday",
      "avengers-secret-wars"
    ]
  }
];
