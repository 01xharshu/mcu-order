export type CharacterState = {
  currentRole: string;
  firstVerifiedAppearance: string;
  definingDecision: string;
  strongestRelationshipTension: string;
  safeModeStatus: string;
};

export type Character = {
  id: string;
  name: string;
  slug: string;
  tier: "flagship" | "standard";
  openingState: CharacterState;
  currentStateSafe: CharacterState;
  currentStateFull?: CharacterState;
};

export const MOCK_CHARACTERS: Character[] = [
  {
    id: "tony-stark",
    name: "Tony Stark",
    slug: "tony-stark",
    tier: "flagship",
    openingState: {
      currentRole: "CEO, Stark Industries",
      firstVerifiedAppearance: "Iron Man (2008)",
      definingDecision: "I am Iron Man.",
      strongestRelationshipTension: "Obadiah Stane",
      safeModeStatus: "Active",
    },
    currentStateSafe: {
      currentRole: "Avenger",
      firstVerifiedAppearance: "Iron Man (2008)",
      definingDecision: "Creating the Ultron Protocol",
      strongestRelationshipTension: "Steve Rogers",
      safeModeStatus: "Active",
    },
  },
  {
    id: "steve-rogers",
    name: "Steve Rogers",
    slug: "steve-rogers",
    tier: "flagship",
    openingState: {
      currentRole: "Captain, USO",
      firstVerifiedAppearance: "Captain America: The First Avenger",
      definingDecision: "Taking the Super Soldier Serum",
      strongestRelationshipTension: "Red Skull",
      safeModeStatus: "Active",
    },
    currentStateSafe: {
      currentRole: "Fugitive / Nomad",
      firstVerifiedAppearance: "Captain America: The First Avenger",
      definingDecision: "Refusing the Sokovia Accords",
      strongestRelationshipTension: "Tony Stark",
      safeModeStatus: "Active",
    },
  },
  {
    id: "loki-laufeyson",
    name: "Loki",
    slug: "loki-laufeyson",
    tier: "flagship",
    openingState: {
      currentRole: "Prince of Asgard",
      firstVerifiedAppearance: "Thor (2011)",
      definingDecision: "Letting go of Gungnir",
      strongestRelationshipTension: "Thor Odinson",
      safeModeStatus: "Active",
    },
    currentStateSafe: {
      currentRole: "Time Variance Authority Consultant",
      firstVerifiedAppearance: "Thor (2011)",
      definingDecision: "Stealing the Tesseract (2012 timeline)",
      strongestRelationshipTension: "Sylvie",
      safeModeStatus: "Active",
    },
  }
];
