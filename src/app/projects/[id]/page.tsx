

import { portfolioData } from "@/config/portfolioData";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
    Code2,

    ExternalLink,
    Settings,
    Calendar,
} from "lucide-react";

interface PageProps {
    params: {
        id: string;
    };
}

export default function ProjectDetail({ params }: PageProps) {
    const project = portfolioData.projects.find(
        (p) => p.id === params.id
    );

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white dark:bg-zinc-950 py-24 px-6">
            <div className="max-w-5xl mx-auto">

                {/* Back Button */}
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-rose-500 transition-colors mb-10"
                >
                    ← Back to Projects
                </Link>

                {/* Header */}
                <div className="mb-12">
                    <div className="flex items-center gap-2 mb-4">
                        <Calendar className="w-4 h-4 text-rose-500" />
                        <span className="text-sm text-zinc-500">
                            {project.year}
                        </span>
                    </div>

                    <h1 className="text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
                        {project.title}
                    </h1>

                    <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {project.longDesc}
                    </p>
                </div>

                {/* Technologies */}
                <section className="mb-12">
                    <h2 className="flex items-center gap-2 text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">
                        <Code2 className="w-5 h-5 text-rose-500" />
                        Technologies Used
                    </h2>

                    <div className="flex flex-wrap gap-2">
                        {project.toolsUsed.map((tool) => (
                            <span
                                key={tool}
                                className="skill-badge"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Problem */}
                <section className="mb-12">
                    <h2 className="flex items-center gap-2 text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">
                        <Settings className="w-5 h-5 text-rose-500" />
                        Problem Statement
                    </h2>

                    <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-900">
                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            {project.problemStatement}
                        </p>
                    </div>
                </section>

                {/* Solution */}
                <section className="mb-12">
                    <h2 className="flex items-center gap-2 text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">
                        <Code2 className="w-5 h-5 text-rose-500" />
                        Solution & Implementation
                    </h2>

                    <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-900">
                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            {project.solution}
                        </p>
                    </div>
                </section>

                {/* Links */}
                <section className="flex flex-wrap gap-4 mt-16">

                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 text-white hover:bg-zinc-700 transition-colors"
                    >
                        <Code2 className="w-4 h-4" />
                        View Source
                    </a>

                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-rose-500 text-white hover:bg-rose-600 transition-colors"
                        >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                        </a>
                    )}
                </section>
            </div>
        </main>
    );
}

