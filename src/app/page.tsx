/**
 * THE MCU CONTINUUM — Homepage
 * Master Prompt §11, §14
 */

import { ExperienceFallback } from "@/components/continuum/ExperienceFallback";
import { ExperienceCanvas } from "@/components/webgl/ExperienceCanvas";

export default function Home() {
  return (
    <>
      <div className="experience-layer">
        <ExperienceCanvas />
      </div>
      
      <div className="content-layer">
        {/* Semantic Content (Fallback & Accessible Journey) */}
        <ExperienceFallback />
      </div>
    </>
  );
}
