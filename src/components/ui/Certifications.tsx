"use client";

import Image from "next/image";
import { portfolioData } from "@/config/portfolioData";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="scroll-mt-nav py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <div>
            <p className="text-xs font-[var(--font-dm-mono)] text-emerald-500 uppercase tracking-widest mb-1">
              03 / Learning Journey
            </p>

            <h2 className="font-[var(--font-cormorant)] text-5xl font-semibold text-zinc-900 dark:text-zinc-50">
              Certifications
            </h2>
          </div>

          <div className="flex-1 h-px bg-gradient-to-r from-emerald-200 to-transparent ml-4 hidden md:block" />
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.certifications.map((cert) => (
            <div
              key={cert.id}
              className="group overflow-hidden flex flex-col border border-[#1a1a1a] bg-[#0a0a0a] transition-all hover:border-[#333]"
            >
              {/* Image Container (White Background) */}
              <div className="relative w-full aspect-[16/9] bg-white p-4 flex items-center justify-center border-b border-[#1a1a1a]">
                <div className="relative w-full h-full">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Content Container (Dark Background) */}
              <div className="p-6 flex flex-col flex-1">
                {/* Title and Badge row */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <h3 className="font-[var(--font-dm-sans)] text-lg font-bold text-white leading-tight flex-1">
                    {cert.title}
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-[2px] flex-shrink-0 bg-[#00ffa3] text-black">
                    {cert.status}
                  </span>
                </div>

                {/* Issuer */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <p className="text-sm font-medium text-emerald-500 font-[var(--font-dm-mono)]">
                    {cert.issuer}
                  </p>
                </div>

                {/* Date */}
                <p className="text-xs text-zinc-500 font-[var(--font-dm-mono)] mb-6">
                  {cert.date}
                </p>

                <div className="flex-1" />

                {/* Links Row */}
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-[#1a1a1a]">
                  <div className="flex items-center gap-2 text-emerald-500 text-xs font-[var(--font-dm-mono)]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Verify Certificate
                  </div>

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded border border-emerald-900 text-emerald-500 hover:bg-emerald-900/20 transition-colors text-xs font-[var(--font-dm-mono)] flex items-center gap-1.5"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                      Credential
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}