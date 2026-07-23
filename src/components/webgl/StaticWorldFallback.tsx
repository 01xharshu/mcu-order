export function StaticWorldFallback() {
  return (
    <div className="absolute inset-0 z-[var(--z-world)] bg-void flex flex-col items-center justify-center pointer-events-none">
      {/* Visual noise / atmospheric background */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-arc/20 via-void to-void" />
      <div className="text-muted/50 text-xs tracking-widest uppercase">
        Memory Index Offline
      </div>
    </div>
  );
}
