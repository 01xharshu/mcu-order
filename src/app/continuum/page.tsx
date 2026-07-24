import type { Metadata } from "next";
import { ExperienceFallback } from "@/components/continuum/ExperienceFallback";

export const metadata: Metadata = {
  title: "Continuum",
  description: "A semantic reading of how decisions become continuity across the MCU.",
  alternates: { canonical: "/continuum" },
};

export default function ContinuumPage() {
  return <div className="content-layer"><ExperienceFallback mode="continuum" /></div>;
}
