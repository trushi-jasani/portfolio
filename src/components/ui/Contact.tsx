import { portfolioData } from "@/config/portfolioData";

export default function Contact() {
  const { links, name } = portfolioData.personalDetails;

  return (
    <section id="contact" className="scroll-mt-nav py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div>
            <p className="text-xs font-[var(--font-dm-mono)] text-rose-500 uppercase tracking-widest mb-1">
              05 / Let&apos;s build
            </p>
            <h2 className="font-[var(--font-cormorant)] text-5xl font-semibold text-zinc-900">
              Reach Out
            </h2>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-rose-200 to-transparent ml-4 hidden md:block" />
        </div>

        {/* CTA card */}
        <div className="relative rounded-3xl overflow-hidden border border-zinc-200/80 bg-white/70 backdrop-blur-sm p-10 md:p-14">
          {/* Background glow */}
          <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-rose-300/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-56 h-56 rounded-full bg-pink-200/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <h3 className="font-[var(--font-cormorant)] text-4xl md:text-5xl font-semibold text-zinc-900 leading-snug mb-5">
              Have a project in mind, or just want to connect?
            </h3>
            <p className="text-zinc-500 leading-relaxed mb-10 font-[var(--font-dm-sans)]">
              I&apos;m always open to interesting engineering conversations, open-source collaboration, internship opportunities, and anything that involves building something meaningful. Drop me a line.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href={`mailto:${links.email}`}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-zinc-200 text-zinc-700 text-sm font-medium hover:border-zinc-400 hover:text-zinc-900 group transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:text-[#ea4335] transition-all duration-300" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Send an Email
              </a>

              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-zinc-200 text-zinc-700 text-sm font-medium hover:border-zinc-400 hover:text-zinc-900 group transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:text-[#181717] transition-all duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 19.57 3.633 19.2 3.633 19.2c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.107-.776.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                View GitHub
              </a>

              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-zinc-200 text-zinc-700 text-sm font-medium hover:border-zinc-400 hover:text-zinc-900 group transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:text-[#0a66c2] transition-all duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}