import Link from "next/link";
import Image from "next/image";
import { portfolioData } from "@/config/portfolioData";

export default function Hobbies() {
  const preview = portfolioData.drawings.slice(0, 3);

  return (
    <section id="hobbies" className="scroll-mt-nav py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div>
            <p className="text-xs font-[var(--font-dm-mono)] text-emerald-500 uppercase tracking-widest mb-1">
              05 / Beyond code
            </p>
            <h2 className="font-[var(--font-cormorant)] text-5xl font-semibold text-zinc-900 dark:text-zinc-50">
              Hobbies
            </h2>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-emerald-200 to-transparent ml-4 hidden md:block" />
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Text column */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="text-2xl">🎨</span>
              <h3 className="font-[var(--font-cormorant)] text-3xl font-semibold text-zinc-800 dark:text-zinc-200">
                Canvas Art & Mindful Focus
              </h3>
            </div>

            <p className="text-zinc-600 dark:text-zinc-300 font-[var(--font-dm-sans)] text-base leading-relaxed">
              Painting is where I practice quiet focus and patient craftsmanship. Working on detailed canvas pieces requires a calm mindset and deep attention to detail — qualities that naturally flow into how I approach engineering.
            </p>

            {/* Quick-scan highlights */}
            <ul className="space-y-3 font-[var(--font-dm-sans)] text-sm text-zinc-600 dark:text-zinc-400">
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                <span><strong className="text-zinc-800 dark:text-zinc-200">Focused Craft:</strong> Traditional canvas work, acrylics, and fine line detail</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                <span><strong className="text-zinc-800 dark:text-zinc-200">Key Themes:</strong> Spiritual art, portraits, nature studies, and serene landscapes</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                <span><strong className="text-zinc-800 dark:text-zinc-200">Engineering Parallel:</strong> Methodical precision on canvas mirrors clean, disciplined code design</span>
              </li>
            </ul>

            {/* Quote takeaway reflecting calm/humble nature */}
            <blockquote className="border-l-2 border-emerald-500 pl-4 py-1 italic text-zinc-500 dark:text-zinc-400 text-sm font-[var(--font-dm-sans)]">
              "Quiet dedication and thoroughness in small details make all the difference — whether blending paint on canvas or architecting systems."
            </blockquote>

            <div className="pt-2">
              <Link
                href="/creative"
                className="inline-flex items-center gap-2 text-sm font-[var(--font-dm-mono)] text-emerald-500 hover:text-emerald-600 transition-colors group"
              >
                View Art Gallery
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Art preview grid */}
          <div className="grid grid-cols-3 gap-3">
            {preview.map((src, i) => (
              <div
                key={src}
                className={`relative overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-100 shadow-sm hover:shadow-md transition-shadow duration-200 ${
                  i === 1 ? "mt-4" : i === 2 ? "mt-8" : ""
                }`}
                style={{ aspectRatio: "3/4" }}
              >
                <Image
                  src={src}
                  alt={`Drawing preview ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 33vw, 20vw"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}