"use client";
import { useState } from "react";
import { portfolioData } from "@/config/portfolioData";

const skillIcons: Record<string, string> = {
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
  "HTML5": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  "CSS3": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  "Redis": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
  "Linux": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
  "Nginx": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg",
  "Git & GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  "AWS (S3, EC2)": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  "Vercel": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
};

const skillColors: Record<string, string> = {
  "C++": "#00599C",
  "Java": "#007396",
  "JavaScript": "#F7DF1E",
  "TypeScript": "#3178C6",
  "Python": "#3776AB",
  "SQL": "#336791",
  "HTML5": "#E34F26",
  "CSS3": "#1572B6",
  "React": "#61DAFB",
  "Next.js": "#10b981",
  "Tailwind CSS": "#06B6D4",
  "Node.js": "#339933",
  "Express.js": "#10b981",
  "RESTful APIs": "#0096FF",
  "n8n": "#FF4B4B",
  "WebSockets": "#FF9900",
  "MongoDB": "#47A248",
  "PostgreSQL": "#4169E1",
  "MySQL": "#4479A1",
  "Redis": "#DC382D",
  "TCP/IP": "#10b981",
  "HTTP/HTTPS": "#336791",
  "DNS": "#10b981",
  "Linux": "#FCC624",
  "Nginx": "#009639",
  "Git & GitHub": "#F05032",
  "AWS (S3, EC2)": "#FF9900",
  "Vercel": "#10b981",
  "CI/CD": "#38A169",
};

export default function Skills() {
  const { skills } = portfolioData;
  const categories = ["All", ...skills.map(s => s.category)];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = activeCategory === "All"
    ? skills.flatMap(s => s.skills)
    : skills.find(s => s.category === activeCategory)?.skills || [];

  return (
    <section id="skills" className="scroll-mt-nav py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header (Left Aligned as requested) */}
        <div className="flex flex-col items-start gap-4 mb-10">
          <div>
            <p className="text-xs font-[var(--font-dm-mono)] text-emerald-500 uppercase tracking-widest mb-1">
              03 / What I use
            </p>
            <h2 className="font-[var(--font-cormorant)] text-5xl font-semibold text-zinc-900 dark:text-zinc-50">
              Technologies I Work With
            </h2>
          </div>
          <p className="text-zinc-400 font-[var(--font-dm-sans)] max-w-2xl">
            Specialized in backend development, systems architecture, and modern web frameworks.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-start gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-[var(--font-dm-mono)] transition-all ${activeCategory === cat
                ? "bg-emerald-500 text-black shadow-[0_0_15px_rgba(16,185,129,0.4)] border border-emerald-400"
                : "bg-transparent border border-zinc-800 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
          {filteredSkills.map((skill) => {
            const skillColor = skillColors[skill] || "#10b981";

            return (
              <div
                key={skill}
                className="group relative flex flex-col items-center justify-center gap-1.5 p-2 rounded-2xl bg-[#0a0a0a] border border-[#1a1a1a] transition-all duration-300 cursor-default overflow-hidden hover:bg-white/5 hover:border-[var(--skill-color)] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] w-[120px] sm:w-[140px] h-[70px] sm:h-[75px]"
                style={{ "--skill-color": skillColor } as React.CSSProperties}
              >
                {/* Tile Glow Effect */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(90deg, transparent, var(--skill-color), transparent)" }}
                />

                <div className="text-xl flex items-center justify-center transition-all duration-300 drop-shadow-[0_0_3px_rgba(255,255,255,0.1)] group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_var(--skill-color)]">
                  {skillIcons[skill] ? (
                    <img
                      src={skillIcons[skill]}
                      alt={skill}
                      className="w-7 h-7 sm:w-8 sm:h-8 object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_8px_var(--skill-color)]"
                    />
                  ) : (
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-zinc-800 flex items-center justify-center transition-all duration-300">
                      <span className="text-[10px] text-white">{skill[0]}</span>
                    </div>
                  )}
                </div>

                <span className="text-[10px] sm:text-xs font-medium text-zinc-400 group-hover:text-white transition-colors duration-300 relative z-10 text-center leading-tight px-1">
                  {skill}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
