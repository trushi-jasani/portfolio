import { portfolioData } from "@/config/portfolioData";

export default function Contact() {
  const { links, name } = portfolioData.personalDetails;

  return (
    <section id="contact" className="scroll-mt-nav py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div>
            <p className="text-xs font-[var(--font-dm-mono)] text-emerald-500 uppercase tracking-widest mb-1">
              05 / Let&apos;s build
            </p>
            <h2 className="font-[var(--font-cormorant)] text-5xl font-semibold text-zinc-900 dark:text-zinc-50">
              Reach Out
            </h2>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-emerald-200 to-transparent ml-4 hidden md:block" />
        </div>

        {/* CTA card */}
        <div className="relative rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/70 backdrop-blur-sm p-10 md:p-14">
          {/* Background glow */}
          <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-emerald-300/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-56 h-56 rounded-full bg-pink-200/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <h3 className="font-[var(--font-cormorant)] text-4xl md:text-5xl font-semibold text-zinc-900 dark:text-zinc-50 leading-snug mb-5">
              Have a project in mind, or just want to connect?
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-10 font-[var(--font-dm-sans)]">
              I&apos;m always open to interesting engineering conversations, open-source collaboration, internship opportunities, and anything that involves building something meaningful. Drop me a line.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4">
              {[
                {
                  href: `mailto:${links.email}`,
                  label: "Send an Email",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:text-[#ea4335] transition-all duration-300" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  ),
                },
                {
                  href: links.github,
                  label: "GitHub",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:text-[#181717] transition-all duration-300" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 19.57 3.633 19.2 3.633 19.2c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.107-.776.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  ),
                },
                {
                  href: links.linkedin,
                  label: "LinkedIn",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:text-[#0a66c2] transition-all duration-300" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
                {
                  href: links.discord,
                  label: "Discord",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:text-[#5865F2] transition-all duration-300" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                    </svg>
                  ),
                },
              ].map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-zinc-200 dark:border-zinc-800/80 text-zinc-700 dark:text-zinc-300 text-sm font-medium hover:border-zinc-400 hover:text-zinc-900 dark:text-zinc-50 group transition-all"
                >
                  {icon}
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
