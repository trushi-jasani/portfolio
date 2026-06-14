"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "@/config/portfolioData";

export default function CreativePage() {
  const { drawings } = portfolioData;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") setLightboxIndex((i) => (i! + 1) % drawings.length);
      if (e.key === "ArrowLeft") setLightboxIndex((i) => (i! - 1 + drawings.length) % drawings.length);
    },
    [lightboxIndex, drawings.length]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Lock scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  // Distribute drawings across 3 columns for masonry
  const columns: string[][] = [[], [], []];
  drawings.forEach((src, i) => {
    columns[i % 3].push(src);
  });

  return (
    <>
      {/* Ambient blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 right-1/4 w-[400px] h-[400px] rounded-full bg-rose-400/8 blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/3 -left-24 w-[350px] h-[350px] rounded-full bg-pink-300/6 blur-3xl animate-float-slower" />
      </div>

      <div className="min-h-screen pt-28 pb-24 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-700 transition-colors mb-10 font-[var(--font-dm-mono)] group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:-translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to home
          </Link>

          {/* Page header */}
          <div className="mb-14">
            <p className="text-xs font-[var(--font-dm-mono)] text-emerald-500 uppercase tracking-widest mb-2">
              Creative work
            </p>
            <h1 className="font-[var(--font-cormorant)] text-6xl font-semibold text-zinc-50">
              Art Gallery
            </h1>
            <p className="mt-4 text-zinc-400 max-w-xl font-[var(--font-dm-sans)]">
              Sketches, studies, and finished drawings collected over time. Click any piece to view it in full.
            </p>
          </div>

          {/* Masonry grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {columns.map((col, colIdx) => (
              <div key={colIdx} className="flex flex-col gap-4">
                {col.map((src, rowIdx) => {
                  const globalIdx = colIdx + rowIdx * 3;
                  return (
                    <button
                      key={src}
                      onClick={() => setLightboxIndex(globalIdx)}
                      className="group relative overflow-hidden rounded-xl border border-[#1a1a1a] bg-[#0a0a0a] shadow-sm hover:border-[#333] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 w-full"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={src}
                        alt={`Drawing ${globalIdx + 1}`}
                        loading="lazy"
                        className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-200 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#0a0a0a]/90 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center shadow-sm border border-[#333]">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M5 8a1 1 0 011-1h1V6a1 1 0 012 0v1h1a1 1 0 110 2H9v1a1 1 0 11-2 0V9H6a1 1 0 01-1-1z" />
                            <path fillRule="evenodd" d="M2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8zm6-4a4 4 0 100 8 4 4 0 000-8z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Lightbox ─────────────────────────────────────────────────── */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center animate-fade-in">
          {/* Close */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Close lightbox"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>

          {/* Previous */}
          <button
            onClick={() => setLightboxIndex((i) => (i! - 1 + drawings.length) % drawings.length)}
            className="absolute left-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Previous"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>

          {/* Image */}
          <div className="relative w-full max-w-3xl max-h-[85vh] mx-16">
            <Image
              src={drawings[lightboxIndex]}
              alt={`Drawing ${lightboxIndex + 1}`}
              width={900}
              height={1200}
              className="object-contain w-full h-full max-h-[85vh] rounded-lg shadow-2xl"
            />
          </div>

          {/* Next */}
          <button
            onClick={() => setLightboxIndex((i) => (i! + 1) % drawings.length)}
            className="absolute right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Next"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/50 text-xs font-[var(--font-dm-mono)]">
            {lightboxIndex + 1} / {drawings.length}
          </div>
        </div>
      )}
    </>
  );
}