"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { searchContent, SearchResult } from "../../lib/search/searchIndex";

export function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      setResults(searchContent(query));
    }
  }, [isOpen, query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 bg-black/80 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
      <div 
        className="w-full max-w-2xl bg-gray-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center border-b border-white/10 px-4 py-3">
          <input
            ref={inputRef}
            type="text"
            className="w-full bg-transparent text-xl outline-none text-white placeholder-white/40"
            placeholder="Search characters, films, events..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white px-2">
            ESC
          </button>
        </div>
        
        {results.length > 0 ? (
          <ul className="max-h-[60vh] overflow-y-auto p-2">
            {results.map((result) => (
              <li key={`${result.type}-${result.id}`}>
                <Link
                  href={result.url}
                  onClick={() => setIsOpen(false)}
                  className="flex flex-col p-3 hover:bg-white/5 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs uppercase tracking-widest text-mcu-primary/50">{result.type}</span>
                    <span className="font-semibold">{result.title}</span>
                  </div>
                  <span className="text-sm text-white/60 truncate">{result.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="p-8 text-center text-white/40">
            {query ? "No results found." : "Type to search..."}
          </div>
        )}
      </div>
    </div>
  );
}
