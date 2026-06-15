import { portfolioData } from "@/config/portfolioData";

export default function About() {
  const { sectionTitle } = portfolioData.aboutSection;

  return (
    <section id="about" className="scroll-mt-nav py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div>
            <p className="text-xs font-[var(--font-dm-mono)] text-emerald-500 uppercase tracking-widest mb-1">
              01 / Who I am
            </p>
            <h2 className="font-[var(--font-cormorant)] text-5xl font-semibold text-zinc-900 dark:text-zinc-50">
              {sectionTitle}
            </h2>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-[#333] to-transparent ml-4 hidden md:block" />
        </div>

        {/* Row 1 */}
        <div className="grid lg:grid-cols-3 gap-6 mb-6">

          {/* Quick Facts */}
          <div className="lg:col-span-2 rounded-[2rem] border border-[#1a1a1a] bg-[#0a0a0a] p-8 relative overflow-hidden hover:border-[#333] transition-colors">
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

          {/* Education — newest first (B.Tech → 12th → 10th) */}
          <div className="rounded-[2rem] border border-[#1a1a1a] bg-[#0a0a0a] p-8">
            <h3 className="text-xl text-white mb-8 font-semibold">
              🎓 Education Journey
            </h3>

            <div className="relative border-l border-zinc-700 ml-2 space-y-10">

              {/* B.Tech — most recent, top */}
              <div className="relative pl-6">
                <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <h4 className="text-white font-semibold">B.Tech Information Technology</h4>
                <p className="text-zinc-500 text-sm mt-1">Dharmsinh Desai University</p>
                <p className="text-emerald-400 text-sm mt-2">CGPA: 9.78 / 10</p>
              </div>

              {/* 12th */}
              <div className="relative pl-6">
                <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-blue-500" />
                <h4 className="text-white font-semibold">Higher Secondary (12th Science)</h4>
                <p className="text-zinc-500 text-sm mt-1">Creative Sankul, Rajkot</p>
                <p className="text-emerald-400 text-sm mt-2">Percentage: 91%</p>
              </div>

              {/* 10th — oldest, bottom */}
              <div className="relative pl-6">
                <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-zinc-400" />
                <h4 className="text-white font-semibold">Secondary School (10th)</h4>
                <p className="text-zinc-500 text-sm mt-1">Genius International School</p>
                <p className="text-emerald-400 text-sm mt-2">Percentage: 92%</p>
              </div>

            </div>
          </div>
        </div>

        {/* Coding Profiles */}
        <div className="mb-6">

          <h3 className="text-xs font-[var(--font-dm-mono)] text-zinc-400 uppercase tracking-widest mb-5">
            Coding Profiles
          </h3>

          <div className="grid md:grid-cols-3 gap-6">

            {/* LeetCode */}
            <a
              href="https://leetcode.com/u/trushi_jasani/"
              target="_blank"
              className="group rounded-[2rem] border border-[#1a1a1a] bg-[#0a0a0a] p-6 hover:border-yellow-500/40 transition-all"
            >
              <div className="flex justify-between items-center mb-8">
                {/* LeetCode logo + name */}
                <div className="flex items-center gap-2.5">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 flex-shrink-0" fill="none">
                    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.823-.662l-4.17-4.131c-.51-.505-.731-1.165-.731-1.826s.22-1.32.73-1.826l4.17-4.13c.466-.467 1.11-.663 1.823-.663s1.357.196 1.823.662l2.697 2.607c.26.26.56.39.86.39.303 0 .6-.13.862-.39.463-.462.463-1.211 0-1.674l-2.697-2.607c-.966-.966-2.242-1.438-3.545-1.438s-2.58.47-3.545 1.438l-4.17 4.131c-.966.965-1.437 2.246-1.437 3.533 0 1.287.47 2.569 1.437 3.535l4.17 4.13c.966.967 2.242 1.44 3.545 1.44s2.58-.473 3.545-1.44l2.697-2.606c.463-.463.463-1.212 0-1.675-.26-.26-.56-.39-.862-.39-.3 0-.6.13-.86.39z" fill="#FFA116" />
                    <path d="M13.625 11.975H8.375c-.621 0-1.125.504-1.125 1.125s.504 1.125 1.125 1.125h5.25c.621 0 1.125-.504 1.125-1.125s-.504-1.125-1.125-1.125z" fill="#B3B3B3" />
                    <path d="M16.825 9.175c.463-.462.463-1.211 0-1.674-.26-.26-.56-.39-.862-.39-.3 0-.6.13-.86.39L12.406 10.2c-.463.463-.463 1.212 0 1.675.26.26.56.39.862.39.3 0 .6-.13.86-.39l2.697-2.7z" fill="#FFA116" />
                  </svg>
                  <h3 className="text-2xl font-semibold text-white">LeetCode</h3>
                </div>
                <span className="text-zinc-500">↗</span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <p className="text-4xl font-bold text-emerald-400">200+</p>
                  <p className="text-xs text-zinc-500 uppercase">Solved</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-emerald-400">1550</p>
                  <p className="text-xs text-zinc-500 uppercase">Rating</p>
                </div>
              </div>


            </a>

            {/* CodeChef */}
            <a
              href="https://www.codechef.com/users/YOUR_USERNAME"
              target="_blank"
              className="group rounded-[2rem] border border-[#1a1a1a] bg-[#0a0a0a] p-6 hover:border-[#5B4638]/50 transition-all"
            >
              <div className="flex justify-between items-center mb-8">
                {/* CodeChef logo + name */}
                <div className="flex items-center gap-2.5">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 flex-shrink-0" fill="none">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" fill="#5B4638" />
                    <path d="M8.5 8.5v7M12 7v10M15.5 8.5v7" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M8.5 15.5c0 .828.672 1.5 1.5 1.5h4c.828 0 1.5-.672 1.5-1.5" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                  <h3 className="text-2xl font-semibold text-white">CodeChef</h3>
                </div>
                <span className="text-zinc-500">↗</span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <p className="text-4xl font-bold text-emerald-400">8+</p>
                  <p className="text-xs text-zinc-500 uppercase">contest</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-emerald-400">1377</p>
                  <p className="text-xs text-zinc-500 uppercase">Rating</p>
                </div>
              </div>


            </a>

            {/* GitHub */}
            <a
              href="https://github.com/trushi-jasani"
              target="_blank"
              className="group rounded-[2rem] border border-[#1a1a1a] bg-[#0a0a0a] p-6 hover:border-white/30 transition-all"
            >
              <div className="flex justify-between items-center mb-8">
                {/* GitHub logo + name */}
                <div className="flex items-center gap-2.5">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 flex-shrink-0" fill="white">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  <h3 className="text-2xl font-semibold text-white">GitHub</h3>
                </div>
                <span className="text-zinc-500">↗</span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <p className="text-4xl font-bold text-emerald-400">25+</p>
                  <p className="text-xs text-zinc-500 uppercase">Repositories</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-emerald-400">325+</p>
                  <p className="text-xs text-zinc-500 uppercase">Contributions</p>
                </div>
              </div>


            </a>

          </div>
        </div>

        {/* GitHub Activity — streak only */}


      </div>
    </section>
  );

}
