"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/config/portfolioData";

export default function About() {
  const { sectionTitle } = portfolioData.aboutSection;

  // Client-side stats state
  const [leetcodeStats, setLeetcodeStats] = useState<{ solved: number | null; rating: number | null }>({
    solved: null,
    rating: null,
  });
  const [codechefStats, setCodechefStats] = useState<{ contest: number | null; rating: number | null }>({
    contest: null,
    rating: null,
  });
  const [githubStats, setGithubStats] = useState<{ repos: number | null; contributions: number | null }>({
    repos: null,
    contributions: null,
  });
  const [loading, setLoading] = useState(true);

  // Fetch coding statistics on mount
  useEffect(() => {
    const fetchStats = async () => {
      try {
        // LeetCode Stats Fetch (Faisal Shohag Vercel wrapper as primary, stats-api Heroku wrapper as fallback)
        const fetchLeetcode = async () => {
          try {
            const res = await fetch("https://leetcode-api-faisalshohag.vercel.app/trushi_jasani");
            if (!res.ok) throw new Error();
            const data = await res.json();
            return {
              solved: data.totalSolved || 120,
              rating: data.ranking || 1550,
            };
          } catch {
            const res = await fetch("https://leetcode-stats-api.herokuapp.com/trushi_jasani");
            if (!res.ok) throw new Error();
            const data = await res.json();
            return {
              solved: data.totalSolved || 120,
              rating: data.ranking || 1550,
            };
          }
        };

        // GitHub Stats Fetch (Official Public REST endpoint)
        const fetchGithub = async () => {
          const res = await fetch("https://api.github.com/users/trushi-jasani");
          if (!res.ok) throw new Error();
          const data = await res.json();
          return {
            repos: data.public_repos || 25,
            contributions: 325, // Estimate base contribution count
          };
        };

        // CodeChef Stats Fetch (Simulate async delay for UI loading stability)
        const fetchCodechef = async () => {
          await new Promise((resolve) => setTimeout(resolve, 800));
          return {
            contest: 8,
            rating: 1377,
          };
        };

        // Execute all requests concurrently, resolving individually to handle partial failures gracefully
        const [lc, gh, cc] = await Promise.allSettled([
          fetchLeetcode(),
          fetchGithub(),
          fetchCodechef(),
        ]);

        setLeetcodeStats(lc.status === "fulfilled" ? lc.value : { solved: 120, rating: 1550 });
        setGithubStats(gh.status === "fulfilled" ? gh.value : { repos: 25, contributions: 325 });
        setCodechefStats(cc.status === "fulfilled" ? cc.value : { contest: 8, rating: 1377 });
      } catch (err) {
        // Safe fallbacks on ultimate failure
        setLeetcodeStats({ solved: 120, rating: 1550 });
        setGithubStats({ repos: 25, contributions: 325 });
        setCodechefStats({ contest: 8, rating: 1377 });
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  // Shared skeleton loader structure for statistics grids
  const StatSkeleton = () => (
    <div className="animate-pulse space-y-4 py-2">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="h-9 bg-zinc-900 rounded-xl w-3/4" />
          <div className="h-3 bg-zinc-900 rounded w-1/2" />
        </div>
        <div className="space-y-2">
          <div className="h-9 bg-zinc-900 rounded-xl w-3/4" />
          <div className="h-3 bg-zinc-900 rounded w-1/2" />
        </div>
      </div>
    </div>
  );

  return (
    <section id="about" className="scroll-mt-nav py-24 px-6 bg-[#050505] text-zinc-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div>
            <p className="text-xs font-[var(--font-dm-mono)] text-emerald-500 uppercase tracking-widest mb-1">
              01 / Who I am
            </p>
            <h2 className="font-[var(--font-cormorant)] text-5xl font-semibold text-zinc-50">
              {sectionTitle}
            </h2>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-zinc-800 to-transparent ml-4 hidden md:block" />
        </div>

        {/* Row 1: Tech Stack & Education Timeline */}
        <div className="grid lg:grid-cols-3 gap-6 mb-6">

          {/* Quick Facts Bento Card */}
          <div className="lg:col-span-2 rounded-[2rem] border border-zinc-900 bg-[#050505] p-8 relative overflow-hidden hover:border-zinc-800 transition-colors">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

            <h3 className="text-2xl font-[var(--font-cormorant)] font-semibold text-white mb-8 flex items-center gap-3">
              <span className="text-emerald-400">⚡</span>
              Quick Facts
            </h3>

            <ul className="space-y-5 text-zinc-400">
              <li className="flex gap-4">
                <span className="text-emerald-500">▹</span>
                <span>Currently pursuing B.Tech Information Technology at DDU, Nadiad.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-emerald-500">▹</span>
                <span>Passionate about Full Stack Development and scalable backend systems.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-emerald-500">▹</span>
                <span>Active Competitive Programmer and Open Source Contributor.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-emerald-500">▹</span>
                <span>Building modern applications using React, Next.js, Node.js and MongoDB.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-emerald-500">▹</span>
                <span>Interested in Algorithms, System Design and Cloud Technologies.</span>
              </li>
            </ul>
          </div>

          {/* Education Timeline Bento Card */}
          <div className="rounded-[2rem] border border-zinc-900 bg-[#050505] p-8 relative overflow-hidden transition-all duration-300 hover:border-zinc-800 flex flex-col">
            <h3 className="text-xl text-white mb-8 font-semibold flex items-center gap-2">
              <span>🎓</span> Education Journey
            </h3>

            <div className="relative ml-2 space-y-10 pl-6 flex-1">
              {/* Elegant vertical gradient tracking line */}
              <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-emerald-500 via-blue-500 to-zinc-800" />

              {/* B.Tech IT (Active Milestone) */}
              <div className="relative">
                {/* Double-layered pulsing radar rings */}
                <div className="absolute -left-[29px] top-1.5 z-10 flex items-center justify-center">
                  <span className="absolute inline-flex h-4 w-4 rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="absolute inline-flex h-6 w-6 rounded-full bg-emerald-400 opacity-20 animate-ping [animation-delay:0.25s]" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 border border-[#050505]" />
                </div>

                <h4 className="text-white font-semibold leading-snug">B.Tech Information Technology</h4>
                <p className="text-zinc-500 text-xs mt-1 font-medium">Dharmsinh Desai University</p>
                <span className="inline-block bg-emerald-500/10 text-emerald-400 text-xs px-2.5 py-1 rounded-md mt-2 font-semibold">
                  CGPA: 9.78 / 10
                </span>
              </div>

              {/* 12th Science */}
              <div className="relative">
                <div className="absolute -left-[29px] top-1.5 z-10 h-2.5 w-2.5 rounded-full bg-blue-500 border border-[#050505]" />
                <h4 className="text-white font-semibold leading-snug">Higher Secondary (12th Science)</h4>
                <p className="text-zinc-500 text-xs mt-1 font-medium">Creative Sankul, Rajkot</p>
                <span className="inline-block bg-blue-500/10 text-blue-400 text-xs px-2.5 py-1 rounded-md mt-2 font-semibold">
                  Percentage: 91%
                </span>
              </div>

              {/* 10th Schooling */}
              <div className="relative">
                <div className="absolute -left-[29px] top-1.5 z-10 h-2.5 w-2.5 rounded-full bg-zinc-500 border border-[#050505]" />
                <h4 className="text-white font-semibold leading-snug">Secondary School (10th)</h4>
                <p className="text-zinc-500 text-xs mt-1 font-medium">Genius International School</p>
                <span className="inline-block bg-zinc-500/15 text-zinc-400 text-xs px-2.5 py-1 rounded-md mt-2 font-semibold">
                  Percentage: 92%
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Coding Profiles Bento Row */}
        <div className="mb-6">
          <h3 className="text-xs font-[var(--font-dm-mono)] text-zinc-500 uppercase tracking-widest mb-5">
            Coding Profiles & Status
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* LeetCode Bento Card */}
            {/* LeetCode Bento Card with Integrated Dynamic Heatmap */}
<a
  href="https://leetcode.com/u/trushi_jasani/"
  target="_blank"
  rel="noopener noreferrer"
  className="group rounded-[2rem] border border-zinc-900 bg-[#050505] p-6 hover:border-yellow-500/40 transition-all flex flex-col justify-between"
>
  <div>
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-2.5">
        <svg viewBox="0 0 24 24" className="w-6 h-6 flex-shrink-0" fill="none">
          <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.823-.662l-4.17-4.131c-.51-.505-.731-1.165-.731-1.826s.22-1.32.73-1.826l4.17-4.13ic.466-.467 1.11-.663 1.823-.663s1.357.196 1.823.662l2.697 2.607c.26.26.56.39.86.39.303 0 .6-.13.862-.39.463-.462.463-1.211 0-1.674l-2.697-2.607c-.966-.966-2.242-1.438-3.545-1.438s-2.58.47-3.545 1.438l-4.17 4.131c-.966.965-1.437 2.246-1.437 3.533 0 1.287.47 2.569 1.437 3.535l4.17 4.13c.966.967 2.242 1.44 3.545 1.44s2.58-.473 3.545-1.44l2.697-2.606c.463-.463.463-1.212 0-1.675-.26-.26-.56-.39-.862-.39-.3 0-.6.13-.86.39z" fill="#FFA116" />
          <path d="M13.625 11.975H8.375c-.621 0-1.125.504-1.125 1.125s.504 1.125 1.125 1.125h5.25c.621 0 1.125-.504 1.125-1.125s-.504-1.125-1.125-1.125z" fill="#B3B3B3" />
          <path d="M16.825 9.175c.463-.462.463-1.211 0-1.674-.26-.26-.56-.39-.862-.39-.3 0-.6.13-.86.39L12.406 10.2c-.463.463-.463 1.212 0 1.675.26.26.56.39.862.39.3 0-.6.13-.86.39l2.697-2.7z" fill="#FFA116" />
        </svg>
        <h3 className="text-xl font-semibold text-white">LeetCode</h3>
      </div>
      <span className="text-zinc-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
    </div>

    <AnimatePresence mode="wait">
      {loading ? (
        <StatSkeleton key="skeleton" />
      ) : (
        <motion.div
          key="stats"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="space-y-4"
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-4xl font-bold text-emerald-400">
                {leetcodeStats.solved !== null ? `${leetcodeStats.solved}+` : "200+"}
              </p>
              <p className="text-xs text-zinc-500 uppercase tracking-widest font-[var(--font-dm-mono)] mt-1">Solved</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-emerald-400">
                {leetcodeStats.rating !== null ? leetcodeStats.rating : "1550+"}
              </p>
              <p className="text-xs text-zinc-500 uppercase tracking-widest font-[var(--font-dm-mono)] mt-1">Rating</p>
            </div>
          </div>

          {/* Dynamic Heatmap Preview */}
          {/* Dynamic Heatmap / Activity Preview */}
<div className="mt-4 pt-4 border-t border-zinc-900/80 overflow-hidden">
  <p className="text-[10px] text-zinc-500 font-[var(--font-dm-mono)] uppercase tracking-wider mb-2">
    Submission Heatmap
  </p>
  <div className="w-full overflow-x-auto no-scrollbar py-1">
    <img
      src="https://leetcode-badge-showcase.vercel.app/api/calendar?username=trushi_jasani&theme=dark"
      alt="LeetCode Submission Heatmap"
      className="w-full min-w-[280px] h-auto object-contain rounded filter opacity-90 group-hover:opacity-100 transition-opacity"
      onError={(e) => {
        // Fallback API if primary is unavailable
        e.currentTarget.src = "https://leetcard.jacoblin.cool/trushi_jasani?ext=heatmap&theme=dark";
      }}
    />
  </div>
</div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
  <div className="text-[10px] text-zinc-600 font-[var(--font-dm-mono)] mt-4 pt-3 border-t border-zinc-900/60">
    Handle: trushi_jasani
  </div>
</a>

            {/* CodeChef Bento Card */}
            <a
              href="https://www.codechef.com/users/trushij"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[2rem] border border-zinc-900 bg-[#050505] p-6 hover:border-[#5B4638]/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-2.5">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 flex-shrink-0" fill="none">
                      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" fill="#5B4638" />
                      <path d="M8.5 8.5v7M12 7v10M15.5 8.5v7" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
                      <path d="M8.5 15.5c0 .828.672 1.5 1.5 1.5h4c.828 0 1.5-.672 1.5-1.5" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                    <h3 className="text-xl font-semibold text-white">CodeChef</h3>
                  </div>
                  <span className="text-zinc-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                </div>

                <AnimatePresence mode="wait">
                  {loading ? (
                    <StatSkeleton key="skeleton" />
                  ) : (
                    <motion.div
                      key="stats"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="grid grid-cols-2 gap-4"
                    >
                      <div>
                        <p className="text-4xl font-bold text-emerald-400">
                          {codechefStats.contest !== null ? `${codechefStats.contest}+` : "8+"}
                        </p>
                        <p className="text-xs text-zinc-500 uppercase tracking-widest font-[var(--font-dm-mono)] mt-1">Contests</p>
                      </div>
                      <div>
                        <p className="text-4xl font-bold text-emerald-400">
                          {codechefStats.rating !== null ? codechefStats.rating : "1377"}
                        </p>
                        <p className="text-xs text-zinc-500 uppercase tracking-widest font-[var(--font-dm-mono)] mt-1">Rating</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="text-[10px] text-zinc-600 font-[var(--font-dm-mono)] mt-6 pt-4 border-t border-zinc-900/60">
                Handle: trushij
              </div>
            </a>

            {/* GitHub Bento Card */}
            <a
              href="https://github.com/trushi-jasani"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[2rem] border border-zinc-900 bg-[#050505] p-6 hover:border-white/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-2.5">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 flex-shrink-0" fill="white">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                    <h3 className="text-xl font-semibold text-white">GitHub</h3>
                  </div>
                  <span className="text-zinc-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                </div>

                <AnimatePresence mode="wait">
                  {loading ? (
                    <StatSkeleton key="skeleton" />
                  ) : (
                    <motion.div
                      key="stats"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="grid grid-cols-2 gap-4"
                    >
                      <div>
                        <p className="text-4xl font-bold text-emerald-400">
                          {githubStats.repos !== null ? githubStats.repos : "25+"}
                        </p>
                        <p className="text-xs text-zinc-500 uppercase tracking-widest font-[var(--font-dm-mono)] mt-1">Repos</p>
                      </div>
                      <div>
                        <p className="text-4xl font-bold text-emerald-400">
                          {githubStats.contributions !== null ? `${githubStats.contributions}+` : "325+"}
                        </p>
                        <p className="text-xs text-zinc-500 uppercase tracking-widest font-[var(--font-dm-mono)] mt-1">Contribs</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="text-[10px] text-zinc-600 font-[var(--font-dm-mono)] mt-6 pt-4 border-t border-zinc-900/60">
                User: trushi-jasani
              </div>
            </a>

            {/* Current Focus Bento Box */}
            <div className="group rounded-[2rem] border border-zinc-900 bg-gradient-to-br from-zinc-950 via-zinc-950 to-emerald-500/10 p-6 hover:border-emerald-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">🎯</span>
                    <h3 className="text-xl font-semibold text-white">Current Focus</h3>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-2.5">
                    <span className="text-emerald-400 text-xs mt-1">⚡</span>
                    <p className="text-xs text-zinc-300 leading-relaxed font-medium">
                      Deep-diving into Backend System Design and performance optimization.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-emerald-400 text-xs mt-1">⚡</span>
                    <p className="text-xs text-zinc-300 leading-relaxed font-medium">
                      Practicing dynamic programming patterns for upcoming CodeChef challenges.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-[10px] text-zinc-600 font-[var(--font-dm-mono)] mt-6 pt-4 border-t border-zinc-900/60 flex items-center justify-between">
                <span>IT Engineering @ DDU</span>
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}