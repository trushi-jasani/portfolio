"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "@/config/portfolioData";

interface MasonryItem {
  src: string;
  originalIndex: number;
  category?: string;
}

export default function CreativePage() {
  const { drawings } = portfolioData;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  // Optional category mapping based on index or filenames
  const categories = [
    { id: "all", label: "All Works" },
    { id: "canvas", label: "Canvas & Spiritual" },
    { id: "nature", label: "Nature & Scenery" },
    { id: "portraits", label: "Portraits & Figures" },
  ];

  // Filter drawings list based on selected tab
  const filteredDrawings = useMemo(() => {
    return drawings.map((src, index) => ({ src, originalIndex: index }));
  }, [drawings]);

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
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  // Distribute filtered items across 3 columns
  const columns = useMemo(() => {
    const cols: MasonryItem[][] = [[], [], []];
    filteredDrawings.forEach((item, i) => {
      cols[i % 3].push(item);
    });
    return cols;
  }, [filteredDrawings]);

  return (
    <>
      {/* Ambient background glows */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 right-1/4 w-[450px] h-[450px] rounded-full bg-emerald-500/5 blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/3 -left-24 w-[350px] h-[350px] rounded-full bg-teal-500/5 blur-3xl animate-float-slower" />
      </div>

      <div className="min-h-screen pt-28 pb-24 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-emerald-500 transition-colors mb-10 font-[var(--font-dm-mono)] group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:-translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to home
          </Link>

          {/* Page header section */}
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-[var(--font-dm-mono)] text-emerald-500 uppercase tracking-widest mb-2">
              Creative Sanctuary
            </p>
            <h1 className="font-[var(--font-cormorant)] text-5xl md:text-6xl font-semibold text-zinc-900 dark:text-zinc-50">
              Canvas & Fine Detail
            </h1>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-base leading-relaxed font-[var(--font-dm-sans)]">
              A collection of traditional paintings, spiritual artwork, and detailed canvas studies built through quiet practice, patience, and careful attention to composition.
            </p>
          </div>

          {/* Category filter tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-zinc-200 dark:border-zinc-800 font-[var(--font-dm-mono)] text-xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 rounded-full transition-all whitespace-nowrap ${
                  activeFilter === cat.id
                    ? "bg-emerald-500 text-white font-medium shadow-sm"
                    : "bg-zinc-100 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {columns.map((col, colIdx) => (
              <div key={colIdx} className="flex flex-col gap-5">
                {col.map((item) => (
                  <button
                    key={item.src}
                    onClick={() => setLightboxIndex(item.originalIndex)}
                    className="group relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-100 dark:bg-zinc-900/50 shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 w-full text-left"
                  >
                    <div className="relative w-full before:content-[''] before:block before:pb-[133%]">
                      <Image
                        src={item.src}
                        alt={`Canvas artwork ${item.originalIndex + 1}`}
                        fill
                        sizes="(max-width: 768px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                      />
                    </div>

                    {/* Subtle hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                      <span className="self-end bg-black/50 backdrop-blur-md text-emerald-400 border border-emerald-500/30 text-[10px] font-[var(--font-dm-mono)] px-2.5 py-1 rounded-full">
                        Artwork #{item.originalIndex + 1}
                      </span>
                      <div className="flex items-center justify-between text-white font-[var(--font-dm-sans)] text-xs">
                        <span>Click to view full piece</span>
                        <div className="bg-emerald-500 text-white rounded-full p-1.5 shadow-md">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center animate-fade-in">
          {/* Close Button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-all z-10"
            aria-label="Close lightbox"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            onClick={() => setLightboxIndex((i) => (i! - 1 + drawings.length) % drawings.length)}
            className="absolute left-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-all z-10"
            aria-label="Previous image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>

          {/* Main Image View */}
          <div className="relative w-full max-w-4xl h-[82vh] mx-16 flex items-center justify-center">
            <Image
              src={drawings[lightboxIndex]}
              alt={`Canvas piece ${lightboxIndex + 1}`}
              fill
              priority
              className="object-contain rounded-lg shadow-2xl"
              sizes="(max-width: 1200px) 100vw"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={() => setLightboxIndex((i) => (i! + 1) % drawings.length)}
            className="absolute right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-all z-10"
            aria-label="Next image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>

          {/* Bottom Counter Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 text-zinc-300 text-xs font-[var(--font-dm-mono)]">
            {lightboxIndex + 1} / {drawings.length}
          </div>
        </div>
      )}
    </>
  );
}