
// src/app/projects/[id]/page.tsx

import { portfolioData } from "@/config/portfolioData";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Code2,
  ExternalLink,
  Database,
  Server,
  Settings,
} from "lucide-react";
interface ProjectDetailProps {
  params: {
    id: string;
  };
}

export default function ProjectDetail({
  params,
}: ProjectDetailProps) {
  const project = portfolioData.projects.find(
    (p) => p.id === params.id
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FFF5F7] text-[#2C1A22] py-20 px-6 md:px-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-[-100px] right-[-100px] w-96 h-96 bg-[#FFC2D4] opacity-20 blur-[100px] rounded-full" />
      <div className="absolute bottom-[-100px] left-[-100px] w-96 h-96 bg-[#E05585] opacity-10 blur-[100px] rounded-full" />

      {/* Back Button */}
      <Link
        href="/#projects"
        className="fixed top-8 left-8 z-50 bg-white/80 backdrop-blur-md border border-[#FFC2D4] text-[#E05585] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#FFE4EC] hover:scale-105 transition-all shadow-sm"
      >
        ← Back to Projects
      </Link>

      <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-xl border border-[#FFC2D4] rounded-[2rem] p-8 md:p-14 shadow-xl relative overflow-hidden">
        {/* Header */}
        <p className="text-[11px] font-medium tracking-[2.5px] text-[#E05585] uppercase mb-4">
          {project.year}
        </p>

        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#2C1A22] tracking-tight mb-6 leading-tight">
          {project.title}
        </h1>

        <p className="text-[#6B3F52] text-lg leading-relaxed mb-10">
          {project.shortDesc}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3 mb-12">
          {project.toolsUsed.map((tech) => (
            <span
              key={tech}
              className="bg-white border border-[#FFC2D4] text-[#C43870] px-4 py-2 rounded-full text-xs font-semibold shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="space-y-10">
          {/* Problem */}
          <section>
            <h2 className="text-xl font-semibold text-[#2C1A22] flex items-center gap-3 mb-4">
              <Settings className="w-6 h-6 text-[#E05585]" />
              Problem Statement
            </h2>

            <p className="text-[#6B3F52] leading-relaxed text-lg">
              {project.problemStatement}
            </p>
          </section>

          {/* Solution */}
          <section className="bg-[#FFF5F7] p-8 rounded-2xl border border-[#FFC2D4]">
            <h2 className="text-xl font-semibold text-[#2C1A22] flex items-center gap-3 mb-4">
              <Server className="w-6 h-6 text-[#E05585]" />
              Solution
            </h2>

            <p className="text-[#6B3F52] leading-relaxed text-lg">
              {project.solution}
            </p>
          </section>

          {/* Project Overview */}
          <section className="bg-[#FFF5F7] p-8 rounded-2xl border border-[#FFC2D4]">
            <h2 className="text-xl font-semibold text-[#2C1A22] flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-[#E05585]" />
              Project Overview
            </h2>

            <p className="text-[#6B3F52] leading-relaxed text-lg">
              {project.longDesc}
            </p>
          </section>

          {/* Technologies */}
          <section className="bg-[#FFF5F7] p-8 rounded-2xl border border-[#FFC2D4]">
            <h2 className="text-xl font-semibold text-[#2C1A22] flex items-center gap-3 mb-4">
              <Code2 className="w-6 h-6 text-[#E05585]" />
              Technologies Used
            </h2>

            <div className="flex flex-wrap gap-3">
              {project.toolsUsed.map((tool) => (
                <span
                  key={tool}
                  className="bg-white border border-[#FFC2D4] text-[#C43870] px-4 py-2 rounded-full text-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* Links */}
        <div className="mt-16 pt-8 border-t border-[#FFC2D4] flex flex-wrap gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-[#2C1A22] text-white px-8 py-4 rounded-2xl font-medium hover:bg-[#6B3F52] transition-colors shadow-lg"
          >
            <Code2 className="w-5 h-5" />
            View Source Code
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-[#E05585] text-white px-8 py-4 rounded-2xl font-medium hover:bg-[#C43870] transition-colors shadow-lg shadow-[#E05585]/20"
            >
              <ExternalLink className="w-5 h-5" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </main>
  );
}

