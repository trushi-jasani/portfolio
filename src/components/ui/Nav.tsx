"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { portfolioData } from "@/config/portfolioData";


const navLinks = [
  { label: "About",    href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills",   href: "/#skills" },
  { label: "Hobbies",  href: "/#hobbies" }
  
];
//

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);


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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-white/70 dark:bg-zinc-950/70 border-b border-zinc-200/50 dark:border-zinc-800/50 shadow-sm"
            : "bg-transparent"
        }`}
      >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center">
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
>
  <button
    onClick={() => setContactOpen(!contactOpen)}
    className="
      px-4 py-2
      rounded-xl
      border border-zinc-200
      bg-white/80 dark:bg-zinc-900/80
      backdrop-blur-sm
      text-sm font-medium
      text-zinc-700 dark:text-zinc-300
      hover:border-zinc-400 dark:hover:border-zinc-600
      hover:text-zinc-900 dark:hover:text-zinc-100
      transition-all
    "
  >
    Reach Out
  </button>

  {contactOpen && (
    <div
      className="
        absolute right-0 top-12
        w-56
        rounded-2xl
        border border-zinc-200 dark:border-zinc-800
        bg-white dark:bg-zinc-900
        shadow-xl
        overflow-hidden
        animate-fade-in
      "
    >
      {/* Email */}
      <a
        href={`mailto:${portfolioData.personalDetails.links.email}`}
        className="flex items-center gap-3 px-4 py-3 group hover:bg-zinc-50 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5 text-zinc-500 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:text-[#ea4335] transition-all duration-300"
        >
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>

        <span className="text-sm text-zinc-700 group-hover:text-zinc-900 transition-colors duration-300">Email</span>
      </a>

      {/* LinkedIn */}
      <a
        href={portfolioData.personalDetails.links.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-4 py-3 border-t border-zinc-100 group hover:bg-zinc-50 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5 text-zinc-500 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:text-[#0a66c2] transition-all duration-300"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.128 0 2.062 2.062 0 01-2.065 2.065zM7.119 20.452H3.555V9h3.564v11.452z" />
        </svg>

        <span className="text-sm text-zinc-700 group-hover:text-zinc-900 transition-colors duration-300">LinkedIn</span>
      </a>

      {/* GitHub */}
      <a
        href={portfolioData.personalDetails.links.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-4 py-3 border-t border-zinc-100 group hover:bg-zinc-50 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5 text-zinc-500 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:text-[#181717] transition-all duration-300"
        >
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.932 0-1.31.465-2.382 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.645 1.653.24 2.873.118 3.176.77.838 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.922.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
        </svg>

        <span className="text-sm text-zinc-700 group-hover:text-zinc-900 transition-colors duration-300">GitHub</span>
      </a>
    </div>
  )}

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
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 bg-white dark:bg-zinc-950 shadow-2xl md:hidden flex flex-col transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
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
