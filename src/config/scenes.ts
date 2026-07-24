export type SceneKeyframe = {
  progress: number;
  // Transforms
  x: number;
  y: number;
  z: number;
  rx: number;
  ry: number;
  rz: number;
  scale: number;
  // Qualities
  opacity: number;
  blur: number;
  saturation: number;
  exposure: number;
  // Narrative mapping
  shearFactor?: number;
};

export type ContinuumScene = {
  id: string;
  name: string;
  topology: "flat" | "aperture" | "layered" | "converged" | "expanded" | "sheared" | "absent" | "woven" | "branched";
  scrollRange: [number, number];
  stablePoint: number;
  topologyAssetIds: string[];
  keyframes: SceneKeyframe[];
  question?: string;
  headline?: string;
  body?: string;
  worldVerb?: string;
  description?: string;
};

export const SCENES: ContinuumScene[] = [
  {
    id: "prelude",
    name: "Prelude",
    topology: "aperture",
    scrollRange: [0.000, 0.075],
    stablePoint: 0.040,
    topologyAssetIds: [],
    keyframes: [],
    question: "How do separate events become one continuity?",
    headline: "The Timeline Begins",
    body: "One razor seam widens; monumental type becomes an occluding spatial plane.",
    worldVerb: "Awaken",
    description: "The universe awakens from void."
  },
  {
    id: "spark",
    name: "Spark",
    topology: "layered", 
    scrollRange: [0.075, 0.205],
    stablePoint: 0.145,
    topologyAssetIds: [],
    keyframes: [],
    question: "How can one decision redirect an entire world?",
    headline: "The Spark",
    body: "One human-scale time-slice separates into before, choice, and first consequence.",
    worldVerb: "Separate",
    description: "A single decision splits reality."
  },
  {
    id: "assemble",
    name: "Assemble",
    topology: "converged",
    scrollRange: [0.205, 0.350],
    stablePoint: 0.278,
    topologyAssetIds: [],
    keyframes: [],
    question: "What changes when separate lives become interdependent?",
    headline: "Convergence",
    body: "Six independently moving slices synchronize into one registered collective plane.",
    worldVerb: "Synchronize",
    description: "The heroes assemble."
  },
  {
    id: "worlds",
    name: "Worlds",
    topology: "expanded",
    scrollRange: [0.350, 0.485],
    stablePoint: 0.410,
    topologyAssetIds: [],
    keyframes: [],
    question: "How can grounded, mythic, and cosmic scales remain one story?",
    headline: "One Story, Many Horizons",
    body: "Three scales share a horizon and remain registered by the consequences that cross them.",
    worldVerb: "Relate",
    description: "The world expands without becoming disconnected."
  },
  {
    id: "fracture",
    name: "Fracture",
    topology: "sheared",
    scrollRange: [0.485, 0.610],
    stablePoint: 0.548,
    topologyAssetIds: [],
    keyframes: [],
    question: "What happens when values split a team before the universe does?",
    headline: "The Divide",
    body: "Causal Shear divides one registered scene while preserving correspondence.",
    worldVerb: "Fracture",
    description: "The team breaks apart."
  },
  {
    id: "infinity",
    name: "Infinity",
    topology: "absent",
    scrollRange: [0.610, 0.745],
    stablePoint: 0.678,
    topologyAssetIds: [],
    keyframes: [],
    question: "What does irreversible consequence look like?",
    headline: "Absence Has Weight",
    body: "A meaningful image and its expected rhythm become genuinely absent; what remains must carry the cost.",
    worldVerb: "Remove",
    description: "Absence is evidence, not an effect."
  },
  {
    id: "legacy",
    name: "Legacy",
    topology: "woven",
    scrollRange: [0.745, 0.870],
    stablePoint: 0.808,
    topologyAssetIds: [],
    keyframes: [],
    question: "How does unfinished responsibility transfer?",
    headline: "Responsibility Moves",
    body: "An incomplete cadence transfers to new temporal slices without pretending that loss was undone.",
    worldVerb: "Inherit",
    description: "Legacy changes the people who receive it."
  },
  {
    id: "multiverse",
    name: "Multiverse",
    topology: "branched",
    scrollRange: [0.870, 0.920],
    stablePoint: 0.900,
    topologyAssetIds: [],
    keyframes: [],
    question: "How can continuity branch without losing orientation?",
    headline: "One Origin, Several Outcomes",
    body: "A shared origin folds into bounded alternatives; the changed condition stays visible at every endpoint.",
    worldVerb: "Branch",
    description: "Possibility remains legible through consequence."
  },
  {
    id: "choose",
    name: "Choose",
    topology: "branched",
    scrollRange: [0.920, 1.000],
    stablePoint: 0.980,
    topologyAssetIds: [],
    keyframes: [],
    headline: "Choose What You Need To Understand",
    body: "The journey resolves into a direct question and a route into the continuity.",
    worldVerb: "Choose",
    description: "The visitor carries the reading forward."
  }
];
