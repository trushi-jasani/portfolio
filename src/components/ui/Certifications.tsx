"use client";

import Image from "next/image";
import { portfolioData } from "@/config/portfolioData";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="max-w-6xl mx-auto px-6 py-24 scroll-mt-nav"
    >
      <div className="mb-14">
        <p className="text-sm uppercase tracking-[0.25em] text-blue-600 font-medium">
          Certifications
        </p>

        <h2 className="mt-3 text-4xl md:text-5xl font-bold text-zinc-900">
          Learning Journey
        </h2>

        <p className="mt-4 text-zinc-600 max-w-2xl">
          Certifications, internships, and learning milestones that have
          strengthened my technical foundation.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.certifications.map((cert) => (
          <div
            key={cert.id}
            className="bg-white border border-zinc-200 rounded-3xl overflow-hidden card-lift"
          >
            <div className="relative h-52 bg-zinc-50">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-700">
                  {cert.status}
                </span>

                <span className="text-sm text-zinc-500">
                  {cert.date}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                {cert.title}
              </h3>

              <p className="text-zinc-600 mb-4">
                {cert.issuer}
              </p>

              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  className="text-blue-600 font-medium hover:text-blue-700"
                >
                  View Credential →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}