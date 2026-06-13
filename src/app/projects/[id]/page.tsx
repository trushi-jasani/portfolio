// src/app/projects/[id]/page.tsx
import { projects } from "@/config/portfolioData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Code2, Github, ExternalLink, Database, Server, Settings } from 'lucide-react';

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = projects.find(p => p.id === id);

    if (!project) return notFound();

    return (
        <main className="min-h-screen bg-[#FFF5F7] text-[#2C1A22] py-20 px-6 md:px-12 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-[-100px] right-[-100px] w-96 h-96 bg-[#FFC2D4] opacity-20 blur-[100px] rounded-full" />
            <div className="absolute bottom-[-100px] left-[-100px] w-96 h-96 bg-[#E05585] opacity-10 blur-[100px] rounded-full" />

            <Link href="/#projects" className="fixed top-8 left-8 bg-white/80 backdrop-blur-md border border-[#FFC2D4] text-[#E05585] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#FFE4EC] hover:scale-105 transition-all shadow-sm z-50">
                &larr; Back to Projects
            </Link>

            <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-xl border border-[#FFC2D4] rounded-[2rem] p-8 md:p-14 shadow-xl relative overflow-hidden">
                <div className="absolute -top-10 -right-10 p-8 opacity-[0.03] text-[200px] leading-none pointer-events-none select-none">{project.emoji}</div>

                <p className="text-[11px] font-medium tracking-[2.5px] text-[#E05585] uppercase mb-4">{project.tag}</p>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#2C1A22] tracking-tight mb-8 leading-tight">{project.name}</h1>

                <div className="flex flex-wrap gap-2 mb-12">
                    {project.stack.map(tech => (
                        <span key={tech} className="bg-white border border-[#FFC2D4] text-[#C43870] px-4 py-1.5 rounded-full text-xs font-semibold shadow-sm">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="space-y-12 relative z-10">
                    <section>
                        <h2 className="text-xl font-semibold text-[#2C1A22] flex items-center gap-3 mb-4">
                            <Settings className="w-6 h-6 text-[#E05585]" /> The Problem
                        </h2>
                        <p className="text-[#6B3F52] leading-relaxed text-lg">{project.situation} {project.task}</p>
                    </section>

                    <section className="bg-[#FFF5F7] p-8 rounded-2xl border border-[#FFC2D4]">
                        <h2 className="text-xl font-semibold text-[#2C1A22] flex items-center gap-3 mb-4">
                            <Server className="w-6 h-6 text-[#E05585]" /> System Architecture
                        </h2>
                        <p className="text-[#6B3F52] leading-relaxed text-lg">{project.architecture}</p>
                    </section>

                    <section className="bg-[#FFF5F7] p-8 rounded-2xl border border-[#FFC2D4]">
                        <h2 className="text-xl font-semibold text-[#2C1A22] flex items-center gap-3 mb-4">
                            <Database className="w-6 h-6 text-[#E05585]" /> Database Modeling
                        </h2>
                        <p className="text-[#6B3F52] leading-relaxed text-lg">{project.database}</p>
                    </section>

                    <section className="bg-[#FFF5F7] p-8 rounded-2xl border border-[#FFC2D4]">
                        <h2 className="text-xl font-semibold text-[#2C1A22] flex items-center gap-3 mb-4">
                            <Code2 className="w-6 h-6 text-[#E05585]" /> Core Technical Challenges
                        </h2>
                        <p className="text-[#6B3F52] leading-relaxed text-lg">{project.challenges}</p>
                    </section>
                </div>

                <div className="mt-16 pt-8 border-t border-[#FFC2D4] flex flex-wrap gap-4">
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-[#2C1A22] text-white px-8 py-4 rounded-2xl font-medium hover:bg-[#6B3F52] transition-colors shadow-lg">
                        <Github className="w-5 h-5" /> View Source Code
                    </a>
                    {project.demo && (
                        <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-[#E05585] text-white px-8 py-4 rounded-2xl font-medium hover:bg-[#C43870] transition-colors shadow-lg shadow-[#E05585]/20">
                            <ExternalLink className="w-5 h-5" /> Live Demo
                        </a>
                    )}
                </div>
            </div>
        </main>
    );
}
