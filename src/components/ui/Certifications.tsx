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
              className="group overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm card-lift"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-zinc-100 dark:bg-zinc-950">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/5" />

                <span
                  className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-medium backdrop-blur-sm ${cert.status === "Completed"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-zinc-100 text-zinc-700"
                    }`}
                >
                  {cert.status}
                </span>

                <span className="absolute top-3 right-3 text-[10px] font-[var(--font-dm-mono)] bg-white/90 dark:bg-zinc-900/90 text-zinc-600 dark:text-zinc-300 px-2.5 py-1 rounded-full">
                  {cert.date}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-[var(--font-cormorant)] text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2 leading-snug">
                  {cert.title}
                </h3>

                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-5">
                  {cert.issuer}
                </p>

                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${cert.status === "Completed"
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                        : "bg-zinc-100 text-zinc-700 border border-zinc-200"
                      }`}
                  >
                    {cert.status}
                  </span>

                  {cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-emerald-500 hover:text-emerald-600 transition-colors"
                    >
                      View →
                    </a>
                  ) : (
                    <span className="text-sm text-zinc-400">
                      Certificate
                    </span>
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