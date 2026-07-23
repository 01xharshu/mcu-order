import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="w-full mt-auto py-12 px-[var(--page-gutter)] border-t border-white/5 bg-void text-muted text-xs text-center md:text-left">
      <div className="max-w-[var(--content-max)] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="max-w-2xl leading-relaxed">
          An independent fan-made interactive guide. Marvel, the Marvel Cinematic Universe, character names, film titles, and related marks belong to their respective owners. This project is not affiliated with or endorsed by Marvel Studios or The Walt Disney Company.
        </p>
        <div className="flex gap-6">
          <Link href="/about" className="hover:text-bone transition-colors">About</Link>
          <Link href="/sources" className="hover:text-bone transition-colors">Sources</Link>
        </div>
      </div>
    </footer>
  );
}
