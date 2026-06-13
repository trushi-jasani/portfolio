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
              <span className="text-2xl">✏️</span>
              <h3 className="font-[var(--font-cormorant)] text-3xl font-semibold text-zinc-800 dark:text-zinc-200">
                Traditional & Digital Drawing
              </h3>
            </div>

            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed font-[var(--font-dm-sans)]">
              Art is the other language I think in. Long before I wrote my first line of code, I was filling sketchbooks — faces, urban scenes, still lifes, whatever demanded to be drawn. Drawing forces a kind of close attention that complements engineering: you can&apos;t approximate a nose the way you can approximate a business requirement. The discipline bleeds back into how I approach UI design and system diagrams.
            </p>

            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed font-[var(--font-dm-sans)]">
              I also read widely — history, philosophy of science, and the occasional novel. Music is constant background noise: jazz when I&apos;m designing, lo-fi when I&apos;m debugging, silence when I&apos;m genuinely stuck.
            </p>

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

          {/* Art preview grid */}
          <div className="grid grid-cols-3 gap-3">
            {preview.map((src, i) => (
              <div
                key={src}
                className={`relative overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-100 shadow-sm hover:shadow-md transition-shadow duration-200 ${i === 1 ? "mt-4" : i === 2 ? "mt-8" : ""
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
