"use client";

import { useEffect, useState, useRef } from "react";
import { useProductStore } from "@/stores/productStore";

export function AudioContext() {
  const soundEnabled = useProductStore((state) => state.soundEnabled);
  const toggleSound = useProductStore((state) => state.toggleSound);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  useEffect(() => {
    // We synthesize a subtle hum instead of relying on external assets to keep it dependency-free
    const initAudio = () => {
      if (audioCtxRef.current) return;
      const audioWindow = window as Window & typeof globalThis & { webkitAudioContext?: typeof globalThis.AudioContext };
      const AudioContextClass = audioWindow.AudioContext || audioWindow.webkitAudioContext;
      if (!AudioContextClass) return;
      
      const ctx = new AudioContextClass();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(55, ctx.currentTime); // Low hum (A1)
      
      gain.gain.setValueAtTime(0, ctx.currentTime);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      
      audioCtxRef.current = ctx;
      oscRef.current = osc;
      gainRef.current = gain;
      setAudioLoaded(true);
    };

    // Browsers require a user interaction to start audio context
    const handleInteraction = () => {
      initAudio();
      window.removeEventListener('click', handleInteraction);
    };
    
    window.addEventListener('click', handleInteraction);
    return () => window.removeEventListener('click', handleInteraction);
  }, []);

  useEffect(() => {
    if (!audioCtxRef.current || !gainRef.current) return;
    
    if (soundEnabled) {
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
      // Fade in to very quiet
      gainRef.current.gain.setTargetAtTime(0.02, audioCtxRef.current.currentTime, 1);
    } else {
      // Fade out
      gainRef.current.gain.setTargetAtTime(0, audioCtxRef.current.currentTime, 0.5);
    }
  }, [soundEnabled, audioLoaded]);

  return (
    <button 
      onClick={toggleSound}
      className="fixed bottom-8 right-8 z-[var(--z-header)] text-[10px] tracking-widest uppercase text-muted hover:text-arc transition-colors bg-void/50 backdrop-blur-md px-3 py-1.5 rounded border border-white/5"
    >
      Audio: {soundEnabled ? "ON" : "OFF"}
    </button>
  );
}
