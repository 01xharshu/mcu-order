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
    id: "snapshot",
    name: "Snapshot",
    topology: "flat",
    scrollRange: [0.350, 0.485],
    stablePoint: 0.410,
    topologyAssetIds: [],
    keyframes: [],
    headline: "The Flat Record",
    body: "The timeline stabilizes into a singular record of truth.",
    worldVerb: "Stabilize",
    description: "A moment of peace."
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
    id: "snap",
    name: "Snap",
    topology: "absent",
    scrollRange: [0.610, 0.730],
    stablePoint: 0.670,
    topologyAssetIds: [],
    keyframes: [],
    headline: "The Snap",
    body: "Half of all life vanishes in an instant.",
    worldVerb: "Vanish",
    description: "The universe suffers a massive loss."
  },
  {
    id: "blip",
    name: "Blip",
    topology: "absent",
    scrollRange: [0.730, 0.810],
    stablePoint: 0.770,
    topologyAssetIds: [],
    keyframes: [],
    headline: "The Blip",
    body: "Five years of emptiness.",
    worldVerb: "Wait",
    description: "The survivors endure the aftermath."
  },
  {
    id: "restore",
    name: "Restore",
    topology: "woven",
    scrollRange: [0.810, 0.920],
    stablePoint: 0.865,
    topologyAssetIds: [],
    keyframes: [],
    headline: "The Return",
    body: "The lost return, and the timeline is rewoven.",
    worldVerb: "Reweave",
    description: "A second chance at victory."
  },
  {
    id: "choose",
    name: "Choose",
    topology: "branched",
    scrollRange: [0.920, 1.000],
    stablePoint: 0.980,
    topologyAssetIds: [],
    keyframes: [],
    headline: "The Multiverse",
    body: "Infinite possibilities branch out from the sacred timeline.",
    worldVerb: "Branch",
    description: "A decision must be made."
  }
];
