"use client";

interface SceneProps { active: boolean; }

export function MultiverseScene({ active }: SceneProps) {
  return <group visible={false} userData={{ active }} />;
}
