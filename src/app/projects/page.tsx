"use client";

import { useState } from "react";
import Link from "next/link";
import { portfolioData } from "@/config/portfolioData";
import type { Project } from "@/config/portfolioData";
import { ProjectCard, ProjectDrawer } from "@/components/ui/Projects";

export default function AllProjectsPage() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      {/* Ambient blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-rose-400/8 blur-3xl animate-float-slow" />
        <div className="absolute top-2/3 -left-32 w-[400px] h-[400px] rounded-full bg-pink-300/6 blur-3xl animate-float-slower" />
      </div>

      <div className="min-h-screen pt-28 pb-24 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-700 transition-colors mb-10 font-[var(--font-dm-mono)] group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:-translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to home
          </Link>

          {/* Page header */}
          <div className="mb-14">
            <p className="text-xs font-[var(--font-dm-mono)] text-rose-500 uppercase tracking-widest mb-2">
              All work
            </p>
            <h1 className="font-[var(--font-cormorant)] text-6xl font-semibold text-zinc-900">
              Projects
            </h1>
            <p className="mt-4 text-zinc-500 max-w-xl font-[var(--font-dm-sans)]">
              A complete record of engineering projects — from full-stack web apps to IoT systems and open-source contributions. Click any card to explore the details.
            </p>
          </div>

          {/* Project count */}
          <p className="text-xs font-[var(--font-dm-mono)] text-zinc-400 mb-6">
            {portfolioData.projects.length} projects total
          </p>

          {/* Full project grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelected(project)}
              />
            ))}
          </div>

        </div>
      </div>

      {/* Shared drawer */}
      <ProjectDrawer project={selected} onClose={() => setSelected(null)} />
    </>
  );
}