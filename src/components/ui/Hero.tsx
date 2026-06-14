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
              <span className="h-px w-8 bg-emerald-400" />
              <span className="text-xs font-[var(--font-dm-mono)] text-emerald-500 uppercase tracking-widest">
                {subtitle}
              </span>
            </div>

            {/* Name */}
            <h1 className="font-[var(--font-cormorant)] text-6xl md:text-7xl font-semibold leading-[1.05] text-zinc-900 dark:text-zinc-50">
              {name.split(" ").map((word, i) => (
                <span key={i} className={i === 1 ? "gradient-text" : ""}>
                  {word}{i < name.split(" ").length - 1 ? " " : ""}
                </span>
              ))}
            </h1>

            {/* Summary */}
            <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed max-w-md font-[var(--font-dm-sans)]">
              {headerSummary}
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4">
              {[
                {
                  href: links.github,
                  label: "GitHub",
                  hoverBg: "hover:bg-white hover:border-white",
                  iconColor: "group-hover:text-black",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 grayscale opacity-80 transition-all duration-300" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 19.57 3.633 19.2 3.633 19.2c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.107-.776.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  ),
                },
                {
                  href: links.linkedin,
                  label: "LinkedIn",
                  hoverBg: "hover:bg-[#0a66c2] hover:border-[#0a66c2]",
                  iconColor: "group-hover:text-white",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 grayscale opacity-80 transition-all duration-300" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
                {
                  href: `mailto:${links.email}`,
                  label: "Email",
                  hoverBg: "hover:bg-[#ea4335] hover:border-[#ea4335]",
                  iconColor: "group-hover:text-white",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 grayscale opacity-80 transition-all duration-300" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  ),
                },
                {
                  href: links.discord,
                  label: "Discord",
                  hoverBg: "hover:bg-[#5865F2] hover:border-[#5865F2]",
                  iconColor: "group-hover:text-white",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 grayscale opacity-80 transition-all duration-300" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                    </svg>
                  ),
                },
              ].map(({ href, label, icon, hoverBg, iconColor }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-[18px] border border-[#1a1a1a] bg-[#0a0a0a] shadow-sm group transition-all duration-300 ${hoverBg} ${iconColor} flex items-center justify-center`}
                  aria-label={label}
                >
                  <div className={`transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 ${iconColor}`}>
                    {icon}
                  </div>
                </a>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={links.resumePdf}
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 text-white text-sm font-medium hover:bg-emerald-600 transition-all shadow-md hover:shadow-emerald-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download Resume
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-200 dark:border-zinc-800/80 text-zinc-700 dark:text-zinc-300 text-sm font-medium hover:border-emerald-300 hover:text-emerald-600 transition-all"
              >
                View Work
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── Right pane — profile photo ── */}
          <div
            className="flex items-center justify-center opacity-0 animate-fade-up delay-200"
            style={{ animationFillMode: "forwards" }}
          >
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute -inset-3 rounded-3xl border border-emerald-200/60 rotate-3" />
              <div className="absolute -inset-6 rounded-3xl border border-emerald-100/40 -rotate-2" />

              {/* Photo frame */}
              <div className="relative w-80 h-[420px] rounded-2xl overflow-hidden bg-zinc-50 border border-[#1a1a1a] shadow-xl">
                <Image
                  src="/images/photo.png"
                  alt="Trushi J"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute bottom-8 -left-12 glass rounded-2xl px-6 py-3 shadow-xl border border-white/80 whitespace-nowrap z-20 flex flex-col items-start animate-float-slow">
                <p className="text-xs text-zinc-500 font-[var(--font-dm-mono)] mb-0.5">Open to</p>
                <p className="text-sm font-semibold text-zinc-800">Internships & Collab</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40">
        <span className="text-xs font-[var(--font-dm-mono)] text-zinc-500 dark:text-zinc-400 tracking-widest uppercase">scroll</span>
        <div className="h-8 w-px bg-gradient-to-b from-zinc-400 to-transparent" />
      </div>
    </section>
  );
}
