import { portfolioData } from "@/config/portfolioData";

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="scroll-mt-nav py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div>
            <p className="text-xs font-[var(--font-dm-mono)] text-rose-500 uppercase tracking-widest mb-1">
              03 / What I use
            </p>
            <h2 className="font-[var(--font-cormorant)] text-5xl font-semibold text-zinc-900">
              Skills
            </h2>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-rose-200 to-transparent ml-4 hidden md:block" />
        </div>

        {/* Skill categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((cat) => (
            <div
              key={cat.category}
              className="rounded-2xl border border-zinc-200/80 bg-white/60 backdrop-blur-sm p-6 hover:shadow-sm transition-shadow duration-200"
            >
              {/* Category header */}
              <div className="flex items-center gap-2 mb-5">
                <span className="h-1 w-4 rounded-full bg-rose-400" />
                <h3 className="text-xs font-[var(--font-dm-mono)] text-zinc-500 uppercase tracking-widest">
                  {cat.category}
                </h3>
              </div>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}