"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { portfolioData } from "@/config/portfolioData";
import { FileBadge, Mail, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Hobbies", href: "/#hobbies" }

];
//

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Choose trigger button hover animation style: "combined", "layout-lift", or "ring-expansion"
  const HOVER_EFFECT_STYLE = "combined" as string;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  //const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const close = () => setContactOpen(false);

    if (contactOpen) {
      document.addEventListener("click", close);
    }

    return () => {
      document.removeEventListener("click", close);
    };
  }, [contactOpen]);
  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "backdrop-blur-md bg-white/70 dark:bg-zinc-950/70 border-b border-zinc-200/50 dark:border-zinc-800/50 shadow-sm"
          : "bg-transparent"
          }`}
      >

        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center">
        <a
  href={portfolioData.personalDetails.links.resumePdf}
  download
  className="
    h-9 px-5
    rounded-full
    border border-emerald-400
    bg-gradient-to-r from-emerald-500/20 to-emerald-400/20
    flex items-center gap-1
    text-emerald-200
    font-[var(--font-cormorant)]
    text-base font-semibold
    tracking-wider
    shadow-lg shadow-emerald-500/30
    ring-1 ring-emerald-400/30
    hover:scale-105
    hover:shadow-emerald-500/50
    transition-all duration-300
  "
>
  <FileBadge size={14} />
  Resume
</a>
          {/* Logo / initials */}
          <Link
            href="/"
            className="font-[var(--font-cormorant)] text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
          >
            {portfolioData.personalDetails.initials}
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-10 ml-auto">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-[var(--font-dm-sans)] text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-emerald-400 dark:bg-emerald-500 transition-all duration-200 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>


          {/* Reach Out Dropdown */}
          {/* Reach Out */}
          <div
            className="relative hidden md:block ml-8 md:ml-auto"
            onClick={(e) => e.stopPropagation()}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Sleek ring expansion animation using Framer Motion */}
            <AnimatePresence>
              {isHovered && (HOVER_EFFECT_STYLE === "ring-expansion" || HOVER_EFFECT_STYLE === "combined") && (
                <motion.span
                  initial={{ scale: 0.95, opacity: 0.8 }}
                  animate={{ scale: 1.25, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "easeOut" }}
                  className="absolute inset-0 rounded-xl border border-emerald-500/80 dark:border-emerald-400/80 pointer-events-none"
                />
              )}
            </AnimatePresence>

            <button
              onClick={() => setContactOpen(!contactOpen)}
              className={`
                relative px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 outline-none transition-all duration-300 group
                ${contactOpen
                  ? "border-emerald-500 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-400/10 shadow-[0_0_15px_-3px_rgba(16,185,129,0.3)]"
                  : "border-emerald-500/30 dark:border-emerald-400/20 bg-emerald-500/5 dark:bg-emerald-400/5 text-emerald-600 dark:text-emerald-400 shadow-[0_0_12px_-3px_rgba(16,185,129,0.15)] hover:border-emerald-500 hover:text-emerald-700 dark:hover:text-emerald-300"
                }
                ${(HOVER_EFFECT_STYLE === "layout-lift" || HOVER_EFFECT_STYLE === "combined")
                  ? "hover:scale-[1.03] hover:backdrop-blur-md"
                  : ""
                }
              `}
            >
              <span>Reach Out</span>
              <ChevronDown 
                size={14} 
                className={`transition-transform duration-300 ${contactOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {contactOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute right-0 top-14 w-60 rounded-2xl border border-zinc-800 bg-zinc-950/95 backdrop-blur-md shadow-2xl overflow-hidden flex flex-col z-50"
                >
                  {/* Email */}
                  <a
                    href={`mailto:${portfolioData.personalDetails.links.email}`}
                    onClick={() => setContactOpen(false)}
                    className="flex items-center gap-3 px-4 py-3.5 hover:bg-zinc-800/50 text-zinc-300 hover:text-white transition-colors duration-200 group/item"
                  >
                    <Mail size={16} className="text-zinc-400 group-hover/item:text-[#ea4335] group-hover/item:scale-105 transition-all duration-200" />
                    <span className="text-sm font-medium font-[var(--font-dm-sans)]">Email</span>
                  </a>

                  <div className="h-px bg-zinc-800 w-full" />

                  {/* LinkedIn */}
                  <a
                    href={portfolioData.personalDetails.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setContactOpen(false)}
                    className="flex items-center gap-3 px-4 py-3.5 hover:bg-zinc-800/50 text-zinc-300 hover:text-white transition-colors duration-200 group/item"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-zinc-400 group-hover/item:text-[#0a66c2] group-hover/item:scale-105 transition-all duration-200"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    <span className="text-sm font-medium font-[var(--font-dm-sans)]">LinkedIn</span>
                  </a>

                  <div className="h-px bg-zinc-800 w-full" />

                  {/* GitHub */}
                  <a
                    href={portfolioData.personalDetails.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setContactOpen(false)}
                    className="flex items-center gap-3 px-4 py-3.5 hover:bg-zinc-800/50 text-zinc-300 hover:text-white transition-colors duration-200 group/item"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-zinc-400 group-hover/item:text-white group-hover/item:scale-105 transition-all duration-200"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    <span className="text-sm font-medium font-[var(--font-dm-sans)]">GitHub</span>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5 p-2 group"
            aria-label="Toggle menu"
          >
            <span className={`block h-px w-6 bg-zinc-700 dark:bg-zinc-300 transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-px w-6 bg-zinc-700 dark:bg-zinc-300 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-zinc-700 dark:bg-zinc-300 transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </nav>
      </header>

      {/* Mobile drawer overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 bg-white dark:bg-zinc-950 shadow-2xl md:hidden flex flex-col transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-zinc-100 dark:border-zinc-800">
          <span className="font-[var(--font-cormorant)] text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            {portfolioData.personalDetails.initials}
          </span>
          <button onClick={() => setOpen(false)} className="p-1 text-zinc-500 hover:text-zinc-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Drawer links */}
        <ul className="flex-1 flex flex-col px-6 py-8 gap-6">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg font-[var(--font-dm-sans)] text-zinc-700 dark:text-zinc-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Drawer footer */}
        <div className="px-6 pb-8">
          {/* <a
            href={portfolioData.personalDetails.links.resumePdf}
            download
            className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-full text-sm font-medium bg-emerald-500 text-white hover:bg-emerald-600 transition-colors"
          >
            Download Resume
          </a> */}
        </div>
      </div>
    </>
  );
}
