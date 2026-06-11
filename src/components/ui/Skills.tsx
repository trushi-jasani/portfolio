import { portfolioData } from "@/config/portfolioData";

const skillIcons: Record<string, string> = {
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
  "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  "Redis": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
  "Prisma ORM": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
  "Git & GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  "Vercel": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
  "AWS (S3, EC2)": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  "Linux": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
  "Postman": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
};

// Hand-picked coordinates for the floating language orbs to prevent collision
const floatPositions = [
  { top: '10%', left: '15%' },
  { top: '40%', left: '60%' },
  { top: '25%', left: '80%' },
  { top: '65%', left: '20%' },
  { top: '75%', left: '70%' },
  { top: '15%', left: '45%' },
  { top: '50%', left: '30%' },
];

export default function Skills() {
  const { skills } = portfolioData;

  const languages = skills.find(s => s.category === "Languages")?.skills || [];
  const frameworks = skills.find(s => s.category === "Frameworks & Web")?.skills || [];
  const databases = skills.find(s => s.category === "Databases")?.skills || [];
  const tools = skills.find(s => s.category === "Tools & Cloud")?.skills || [];

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

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Frameworks - Top Wide (col-span-2) */}
          <div className="md:col-span-2 relative overflow-hidden rounded-3xl bg-white border border-zinc-200 p-8 shadow-sm group flex flex-col justify-center">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none transition-transform duration-500 group-hover:scale-110" />
            
            <h3 className="text-xs font-[var(--font-dm-mono)] text-zinc-400 uppercase tracking-widest mb-8 relative z-10 flex items-center gap-2">
              <span className="h-1 w-4 rounded-full bg-rose-400" />
              Frameworks & Web
            </h3>
            
            {/* Endless Marquee */}
            <div className="relative flex overflow-hidden w-full fade-edges py-2">
              <div className="flex w-max animate-marquee gap-6 pr-6 hover:[animation-play-state:paused]">
                {/* Duplicate list twice for perfect infinite loop */}
                {[...frameworks, ...frameworks].map((skill, i) => (
                  <div key={i} className="flex items-center gap-3 px-5 py-3 bg-zinc-50 rounded-2xl border border-zinc-100 hover:border-rose-200 hover:shadow-md hover:-translate-y-1 transition-all cursor-default group/skill">
                    {skillIcons[skill] && (
                      <img src={skillIcons[skill]} alt={skill} className="w-7 h-7 object-contain grayscale opacity-60 group-hover/skill:grayscale-0 group-hover/skill:opacity-100 transition-all duration-300" />
                    )}
                    <span className="font-semibold text-zinc-700 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Languages - Top Right (col-span-1) */}
          <div className="md:col-span-1 min-h-[300px] relative overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 p-8 shadow-lg group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-rose-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <h3 className="text-xs font-[var(--font-dm-mono)] text-zinc-400 uppercase tracking-widest mb-8 relative z-10 flex items-center gap-2">
              <span className="h-1 w-4 rounded-full bg-pink-500" />
              Languages
            </h3>

            <div className="absolute inset-0 top-16">
              {languages.map((skill, i) => {
                const pos = floatPositions[i % floatPositions.length];
                return (
                  <div 
                    key={skill}
                    className="absolute p-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:scale-110 hover:z-20 transition-all cursor-default shadow-xl group/orb"
                    style={{
                      top: pos.top,
                      left: pos.left,
                      animation: `float-slow ${6 + (i % 4)}s ease-in-out infinite`,
                      animationDelay: `${i * 0.5}s`
                    }}
                  >
                    {skillIcons[skill] ? (
                      <img src={skillIcons[skill]} alt={skill} className="w-8 h-8 object-contain drop-shadow-md grayscale opacity-50 group-hover/orb:grayscale-0 group-hover/orb:opacity-100 transition-all duration-300" title={skill} />
                    ) : (
                      <span className="text-white text-xs">{skill}</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Databases - Bottom Left (col-span-1) */}
          <div className="md:col-span-1 relative overflow-hidden rounded-3xl bg-white border border-zinc-200 p-8 shadow-sm group">
            <div className="absolute inset-0 dot-grid opacity-50" />
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-rose-100 rounded-full blur-3xl opacity-50 pointer-events-none transition-transform duration-500 group-hover:scale-125" />
            
            <h3 className="text-xs font-[var(--font-dm-mono)] text-zinc-400 uppercase tracking-widest mb-8 relative z-10 flex items-center gap-2">
              <span className="h-1 w-4 rounded-full bg-rose-400" />
              Databases
            </h3>

            <div className="grid grid-cols-2 gap-4 relative z-10">
              {databases.map((skill) => (
                <div key={skill} className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white border border-zinc-100 hover:border-rose-300 hover:shadow-lg hover:-translate-y-1 transition-all group/db cursor-default">
                  {skillIcons[skill] && (
                    <img src={skillIcons[skill]} alt={skill} className="w-8 h-8 object-contain mb-3 grayscale opacity-60 group-hover/db:grayscale-0 group-hover/db:opacity-100 transition-all duration-300" />
                  )}
                  <span className="text-xs font-semibold text-zinc-600">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Cloud - Bottom Wide (col-span-2) */}
          <div className="md:col-span-2 relative overflow-hidden rounded-3xl bg-[#0d1117] border border-zinc-800 p-8 shadow-xl flex flex-col justify-center font-[var(--font-dm-mono)]">
            
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-8">
              <div className="w-3 h-3 rounded-full bg-rose-500" />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="ml-4 text-xs text-zinc-500 uppercase tracking-widest">Tools & Cloud</span>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-6">
              {tools.map((skill, i) => (
                <div key={skill} className="flex items-center gap-3 group/term cursor-default">
                  <span className="text-rose-400">~</span>
                  {skillIcons[skill] && (
                    <img src={skillIcons[skill]} alt={skill} className="w-6 h-6 object-contain grayscale opacity-50 group-hover/term:grayscale-0 group-hover/term:opacity-100 transition-all duration-300" />
                  )}
                  <span className="text-zinc-400 text-sm group-hover/term:text-white transition-colors">{skill}</span>
                </div>
              ))}
              <div className="flex items-center gap-2 animate-pulse">
                <span className="text-rose-400">~</span>
                <div className="w-2.5 h-5 bg-zinc-400" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}