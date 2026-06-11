"use client";
import Image from "next/image";

import { portfolioData } from "@/config/portfolioData";

export default function Hero() {
  const { name, subtitle, headerSummary, links } = portfolioData.personalDetails;

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background dot-grid texture */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left pane ── */}
          <div className="flex flex-col gap-6 opacity-0 animate-fade-up" style={{ animationFillMode: "forwards" }}>

            {/* Eyebrow tag */}
            <div className="inline-flex items-center gap-2 w-fit">
              <span className="h-px w-8 bg-rose-400" />
              <span className="text-xs font-[var(--font-dm-mono)] text-rose-500 uppercase tracking-widest">
                {subtitle}
              </span>
            </div>

            {/* Name */}
            <h1 className="font-[var(--font-cormorant)] text-6xl md:text-7xl font-semibold leading-[1.05] text-zinc-900">
              {name.split(" ").map((word, i) => (
                <span key={i} className={i === 1 ? "gradient-text" : ""}>
                  {word}{i < name.split(" ").length - 1 ? " " : ""}
                </span>
              ))}
            </h1>

            {/* Summary */}
            <p className="text-zinc-500 text-lg leading-relaxed max-w-md font-[var(--font-dm-sans)]">
              {headerSummary}
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4">
              {[
                {
                  href: links.github,
                  label: "GitHub",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:text-[#181717] transition-all duration-300" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 19.57 3.633 19.2 3.633 19.2c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.107-.776.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  ),
                },
                {
                  href: links.linkedin,
                  label: "LinkedIn",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:text-[#0a66c2] transition-all duration-300" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
              ].map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 group transition-colors"
                >
                  {icon}
                  <span className="font-[var(--font-dm-mono)] text-xs">{label}</span>
                </a>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={links.resumePdf}
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-rose-500 text-white text-sm font-medium hover:bg-rose-600 transition-all shadow-md hover:shadow-rose-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download Resume
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-200 text-zinc-700 text-sm font-medium hover:border-rose-300 hover:text-rose-600 transition-all"
              >
                View Work
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── Right pane — profile photo placeholder ── */}
          <div
            className="flex items-center justify-center opacity-0 animate-fade-up delay-200"
            style={{ animationFillMode: "forwards" }}
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-3xl border border-rose-200/60 rotate-3" />
              <div className="absolute -inset-6 rounded-3xl border border-rose-100/40 -rotate-2" />

              {/* Photo frame */}
              <div className="relative w-80 h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-rose-50 to-zinc-100 border border-zinc-200/80 shadow-xl">
                {/* Placeholder pattern */}
                <div className="absolute inset-0 dot-grid opacity-50" />

                <Image
                  src="/images/photo.jpeg"
                  alt="Trushi J"
                  fill
                  priority
                  className="object-cover z-10"
                />


                {/* Replace this div's content with an <Image> tag once you have a photo */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-zinc-400">
                  <div className="w-20 h-20 rounded-full bg-zinc-200/80 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-zinc-300" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-xs font-[var(--font-dm-mono)] text-zinc-300 tracking-widest uppercase">
                    Photo coming soon
                  </p>
                </div>

                {/* Soft rose overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-rose-100/60 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-2.5 shadow-lg border border-white/80">
                <p className="text-xs text-zinc-500 font-[var(--font-dm-mono)]">Open to</p>
                <p className="text-sm font-semibold text-zinc-800">Internships & Collab</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40">
        <span className="text-xs font-[var(--font-dm-mono)] text-zinc-500 tracking-widest uppercase">scroll</span>
        <div className="h-8 w-px bg-gradient-to-b from-zinc-400 to-transparent" />
      </div>
    </section>
  );
}