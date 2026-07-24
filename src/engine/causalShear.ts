/**
 * Causal Shear State Machine — THE MCU CONTINUUM
 * Master Prompt §15, lines 1764–1870
 */

import { engine } from "./ExperienceEngine";

export type ShearState = 
  | "idle" 
  | "discoverable" 
  | "grabbed" 
  | "separating" 
  | "examining" 
  | "reweaving" 
  | "cancelled";

export class CausalShearMachine {
  private state: ShearState = "idle";
  
  // Normalized 0 to 1
  private currentProgress: number = 0;
  
  private discoverTimer: number | null = null;
  private readonly DISCOVER_DELAY_MS = 2400; // time hovering on a seam before discoverable animation plays

  constructor() {
    // In a real implementation this might bind to pointer events on a specific DOM element,
    // or receive updates from a React component.
  }

  getState(): ShearState {
    return this.state;
  }

  getProgress(): number {
    return this.currentProgress;
  }

  /** Called when pointer enters the 16px wide causal seam */
  onPointerEnterSeam() {
    if (this.state === "idle") {
      // Start discovery timer
      this.discoverTimer = window.setTimeout(() => {
        if (this.state === "idle") {
          this.transitionTo("discoverable");
        }
      }, this.DISCOVER_DELAY_MS);
    }
  }

  /** Called when pointer leaves the 16px wide causal seam without clicking */
  onPointerLeaveSeam() {
    if (this.discoverTimer) {
      clearTimeout(this.discoverTimer);
      this.discoverTimer = null;
    }
    
    if (this.state === "discoverable") {
      this.transitionTo("idle");
    }
  }

  /** Called on mousedown/touchstart on the seam */
  onPointerDown() {
    if (this.state === "idle" || this.state === "discoverable") {
      this.transitionTo("grabbed");
    } else if (this.state === "examining") {
      this.transitionTo("reweaving");
    }
  }

  /** Called on mousemove/touchmove while grabbed */
  onPointerMove(deltaX: number, viewportWidth: number) {
    if (this.state === "grabbed" || this.state === "separating") {
      this.state = "separating";
      
      // Calculate normalized progress based on drag distance
      const normalizedDelta = Math.abs(deltaX) / (viewportWidth * 0.3); // Full split at 30% viewport width drag
      this.currentProgress = Math.min(1, Math.max(0, normalizedDelta));
      
      // Update experience engine target
      engine.shearTarget = this.currentProgress;

      // If fully separated, transition to examining
      if (this.currentProgress >= 1.0) {
        this.transitionTo("examining");
      }
    }
  }

  /** Called on mouseup/touchend */
  onPointerUp() {
    if (this.state === "separating") {
      if (this.currentProgress < 0.5) {
        // Did not pull far enough, cancel
        this.transitionTo("cancelled");
      } else {
        // Pulled far enough, complete the separation
        this.currentProgress = 1.0;
        engine.shearTarget = 1.0;
        this.transitionTo("examining");
      }
    } else if (this.state === "grabbed") {
      // Just a click without drag, trigger full split immediately
      this.currentProgress = 1.0;
      engine.shearTarget = 1.0;
      this.transitionTo("examining");
    }
  }

  private transitionTo(newState: ShearState) {
    this.state = newState;
    
    switch (newState) {
      case "idle":
        this.currentProgress = 0;
        engine.shearTarget = 0;
        break;
      case "discoverable":
        // Play subtle pulsing animation on seam (handled in React/CSS)
        break;
      case "grabbed":
        // Lock Lenis scroll
        // Reduce cursor to grab state
        break;
      case "separating":
        // Active dragging state
        break;
      case "examining":
        // Fully separated. Reveal the internal text/options
        break;
      case "reweaving":
        // Collapse back to idle
        this.currentProgress = 0;
        engine.shearTarget = 0;
        // The engine handles the interpolation back to 0
        // Wait for animation to finish before returning to idle
        setTimeout(() => {
          this.transitionTo("idle");
        }, 560); // Matches motion.ts duration panel
        break;
      case "cancelled":
        // Snap back to idle
        this.currentProgress = 0;
        engine.shearTarget = 0;
        setTimeout(() => {
          this.transitionTo("idle");
        }, 240); // Matches motion.ts duration quick
        break;
    }
  }
}

export const causalShearMachine = new CausalShearMachine();
