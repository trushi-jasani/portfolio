import { portfolioData } from "@/config/portfolioData";

export default function About() {
  const { sectionTitle } = portfolioData.aboutSection;

  return (
    <section id="about" className="scroll-mt-nav py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
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

        {/* Bento Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Main Info Box */}
          <div className="lg:col-span-2 relative rounded-[2rem] border border-[#1a1a1a] bg-[#0a0a0a] p-8 md:p-10 shadow-sm flex flex-col justify-center group overflow-hidden hover:border-[#333] transition-colors">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
            <h3 className="text-2xl font-[var(--font-cormorant)] font-semibold text-white mb-6 flex items-center gap-3">
              <span className="text-emerald-400 text-xl">⚡</span> Quick Facts
            </h3>
            <ul className="space-y-5 text-zinc-400 font-[var(--font-dm-sans)] text-sm md:text-base">
              <li className="flex gap-4">
                <span className="text-emerald-500 mt-1">▹</span>
                <span>Currently pursuing IT Engineering in Nadiad, Gujarat.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-emerald-500 mt-1">▹</span>
                <span>Passionate about building full-stack systems, scalable backend architectures, and clean UI/UX designs.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-emerald-500 mt-1">▹</span>
                <span>Active open-source contributor and avid competitive programmer.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-emerald-500 mt-1">▹</span>
                <span>Always exploring the intersection of complex algorithms and elegant design.</span>
              </li>
            </ul>
          </div>

          {/* LeetCode Box */}
          <div className="relative rounded-[2rem] border border-[#1a1a1a] bg-[#0a0a0a] p-6 shadow-sm flex flex-col justify-center items-center group overflow-hidden hover:border-[#333] transition-colors">
            <h3 className="text-xs font-[var(--font-dm-mono)] text-zinc-400 uppercase tracking-widest mb-6 w-full text-left flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
              LeetCode Stats
            </h3>
            {/* LeetCode stats card wrapper. Replace 'trushij' or 'trushi-jasani' with your exact LeetCode username if needed */}
            <div className="w-full flex justify-center hover:scale-[1.02] transition-transform duration-300">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://leetcard.jacoblin.cool/trushi_jasani?theme=dark&font=DM%20Sans&ext=activity" alt="LeetCode Stats" className="w-full h-auto rounded-xl opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-md" />
            </div>
          </div>

          {/* GitHub Box */}
          <div className="lg:col-span-2 relative rounded-[2rem] border border-[#1a1a1a] bg-[#0a0a0a] p-8 shadow-sm flex flex-col items-start group overflow-hidden hover:border-[#333] transition-colors">
            <h3 className="text-xs font-[var(--font-dm-mono)] text-zinc-400 uppercase tracking-widest mb-6 w-full text-left flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              GitHub Activity
            </h3>
            <div className="w-full flex flex-col md:flex-row gap-4 overflow-x-auto no-scrollbar pb-2">
              <div className="hover:scale-[1.02] transition-transform duration-300">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://github-readme-stats.vercel.app/api?username=trushi-jasani&theme=dark&hide_border=true&bg_color=0a0a0a&text_color=fff&icon_color=10b981&title_color=10b981" alt="GitHub Stats" className="h-44 min-w-max rounded-xl drop-shadow-md" />
              </div>
              <div className="hover:scale-[1.02] transition-transform duration-300">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://github-readme-streak-stats.herokuapp.com/?user=trushi-jasani&theme=dark&hide_border=true&background=0a0a0a&ring=10b981&fire=10b981&currStreakNum=fff&sideNums=fff&currStreakLabel=fff&sideLabels=fff" alt="GitHub Streak" className="h-44 min-w-max rounded-xl drop-shadow-md" />
              </div>
            </div>
          </div>

          {/* Education Timeline Box */}
          <div className="relative border-l border-[#333] ml-3 space-y-8 flex-1">

            {/* College */}
            <div className="relative pl-6">
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
              <h4 className="text-white text-base font-semibold font-[var(--font-dm-sans)]">
                B.Tech in Information Technology
              </h4>
              <p className="text-emerald-500 text-xs font-semibold mb-2 mt-1">
                2024 - 2028 (Expected)
              </p>
              <p className="text-zinc-500 text-xs">
                Dharmsinh Desai University (DDU), Nadiad. Focused on Full-Stack Development,
                Data Structures & Algorithms, Backend Systems, and Cloud Technologies.
              </p>
            </div>

            {/* 12th */}
            <div className="relative pl-6">
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-500" />
              <h4 className="text-zinc-300 text-base font-semibold font-[var(--font-dm-sans)]">
                Higher Secondary (12th Science)
              </h4>
              <p className="text-zinc-500 text-xs font-semibold mb-2 mt-1">
                Completed 2024
              </p>
              <p className="text-zinc-600 text-xs">
                Creative Sankul, Rajkot. Studied Physics, Chemistry, Mathematics and Computer Science.
              </p>
            </div>

            {/* 10th */}
            <div className="relative pl-6">
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-500" />
              <h4 className="text-zinc-300 text-base font-semibold font-[var(--font-dm-sans)]">
                Secondary School (10th)
              </h4>
              <p className="text-zinc-500 text-xs font-semibold mb-2 mt-1">
                Completed 2022
              </p>
              <p className="text-zinc-600 text-xs">
                Genius International School, Keshod. Built a strong foundation in Mathematics,
                Science, and Computer Fundamentals.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
