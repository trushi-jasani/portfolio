import { portfolioData } from "@/config/portfolioData";

export default function About() {
  const { sectionTitle, pillars } = portfolioData.aboutSection;

  return (
    <section id="about" className="scroll-mt-nav py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div>
            <p className="text-xs font-[var(--font-dm-mono)] text-emerald-500 uppercase tracking-widest mb-1">
              01 / Who I am
            </p>
            <h2 className="font-[var(--font-cormorant)] text-5xl font-semibold text-zinc-900 dark:text-zinc-50">
              {sectionTitle}
            </h2>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-emerald-200 to-transparent ml-4 hidden md:block" />
        </div>

        {/* Three-pillar grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="group relative rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm p-7 card-lift"
            >
              {/* Index number */}
              <span className="absolute top-5 right-6 font-[var(--font-cormorant)] text-5xl font-bold text-zinc-100 select-none group-hover:text-emerald-100 transition-colors">
                {String(idx + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-lg mb-5">
                {pillar.icon}
              </div>

              {/* Title */}
              <h3 className="font-[var(--font-cormorant)] text-2xl font-semibold text-zinc-800 dark:text-zinc-200 mb-3 leading-snug">
                {pillar.title}
              </h3>

              {/* Body */}
              <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 font-[var(--font-dm-sans)]">
                {pillar.body}
              </p>

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-emerald-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
