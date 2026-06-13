"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { portfolioData } from "@/config/portfolioData";
import type { Project } from "@/config/portfolioData";

// ── Shared Slide-over Panel ───────────────────────────────────────────────────
export function ProjectDrawer({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  // Lock body scroll when open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [project]);

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!project) return null;

  const { links } = portfolioData.personalDetails;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Drawer panel */}
      <aside className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-xl bg-white dark:bg-zinc-900 shadow-2xl flex flex-col animate-slide-in-right">
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-zinc-100 dark:border-zinc-800">
          <div className="flex-1 pr-4">
            <span className="text-xs font-[var(--font-dm-mono)] text-emerald-500 uppercase tracking-widest">
              {project.year}
            </span>
            <h2 className="font-[var(--font-cormorant)] text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mt-1 leading-snug">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-zinc-400 hover:text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 transition-colors"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-7">
          {/* Short description */}
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-[var(--font-dm-sans)] text-sm">
            {project.longDesc}
          </p>

          {/* Problem */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <h3 className="text-xs font-[var(--font-dm-mono)] uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                Problem Statement
              </h3>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed pl-3.5 border-l border-emerald-200">
              {project.problemStatement}
            </p>
          </div>

          {/* Solution */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <h3 className="text-xs font-[var(--font-dm-mono)] uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                Solution & Architecture
              </h3>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed pl-3.5 border-l border-emerald-200">
              {project.solution}
            </p>
          </div>

          {/* Tech stack */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <h3 className="text-xs font-[var(--font-dm-mono)] uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                Stack
              </h3>
            </div>
            <div className="flex flex-wrap gap-2 pl-3.5">
              {project.toolsUsed.map((tool) => (
                <span key={tool} className="skill-badge">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Collaborate CTA */}
          <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-5">
            <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
              Want to collaborate or contribute?
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4 leading-relaxed">
              Feel free to open an issue, submit a PR on GitHub, or reach out directly via email — I&apos;m always happy to build with others.
            </p>
            <div className="flex flex-wrap gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-zinc-900 text-white hover:bg-zinc-700 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 19.57 3.633 19.2 3.633 19.2c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.107-.776.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              )}
              <a
                href={`mailto:${links.email}`}
                className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Email Me
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800/80 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                  </svg>
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

// ── Project Card ───────────────────────────────────────────────────────────────
function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group text-left w-full rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm overflow-hidden card-lift focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
    >
      {/* Thumbnail area */}
      <div className="relative h-44 bg-gradient-to-br from-emerald-50 via-zinc-50 dark:via-zinc-900 to-zinc-100 dark:to-zinc-800 overflow-hidden dot-grid">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-[var(--font-cormorant)] text-6xl font-bold text-zinc-100 group-hover:text-emerald-100 transition-colors select-none">
            {project.title.slice(0, 2).toUpperCase()}
          </span>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
          <span className="bg-white dark:bg-zinc-900/90 backdrop-blur-sm rounded-full px-4 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 shadow-sm">
            View Details →
          </span>
        </div>
        {/* Year tag */}
        <span className="absolute top-3 right-3 text-[10px] font-[var(--font-dm-mono)] text-zinc-400 bg-white dark:bg-zinc-900/80 rounded-full px-2.5 py-0.5">
          {project.year}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-[var(--font-cormorant)] text-xl font-semibold text-zinc-800 dark:text-zinc-200 mb-1.5 leading-snug">
          {project.title}
        </h3>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4 font-[var(--font-dm-sans)]">
          {project.shortDesc}
        </p>

        {/* Tools */}
        <div className="flex flex-wrap gap-1.5">
          {project.toolsUsed.slice(0, 4).map((tool) => (
            <span key={tool} className="skill-badge text-[10px]">
              {tool}
            </span>
          ))}
          {project.toolsUsed.length > 4 && (
            <span className="text-[10px] text-zinc-400 self-center">
              +{project.toolsUsed.length - 4} more
            </span>
          )}
        </div>
      </div>
    </button>
  );
}

// ── Main Projects component (home page — featured only) ────────────────────────
export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  const featured = portfolioData.projects.filter((p) => p.featured);

  return (
    <section id="projects" className="scroll-mt-nav py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div>
            <p className="text-xs font-[var(--font-dm-mono)] text-emerald-500 uppercase tracking-widest mb-1">
              02 / What I&apos;ve built
            </p>
            <h2 className="font-[var(--font-cormorant)] text-5xl font-semibold text-zinc-900 dark:text-zinc-50">
              Projects
            </h2>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-emerald-200 to-transparent ml-4 hidden md:block" />
        </div>

        {/* Featured grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featured.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>

        {/* View all link */}
        <div className="flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-emerald-500 transition-colors font-[var(--font-dm-mono)] group"
          >
            View all projects
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>

      </div>

      {/* Drawer */}
      <ProjectDrawer project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

// Re-export ProjectCard for use in /projects page
export { ProjectCard };
