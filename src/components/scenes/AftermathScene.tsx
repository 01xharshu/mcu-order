"use client";

interface SceneProps { active: boolean; }

export function AftermathScene({ active }: SceneProps) {
  return <group visible={false} userData={{ active }} />;
}
