"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { portfolioData } from "@/config/portfolioData";

const navLinks = [
  { label: "About",    href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills",   href: "/#skills" },
  { label: "Hobbies",  href: "/#hobbies" },
  { label: "Reach Out",href: "/#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-white/70 border-b border-zinc-200/50 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo / initials */}
          <Link
            href="/"
            className="font-[var(--font-cormorant)] text-2xl font-semibold tracking-tight text-zinc-900 hover:text-rose-500 transition-colors"
          >
            {portfolioData.personalDetails.initials}
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-[var(--font-dm-sans)] text-zinc-600 hover:text-rose-500 transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-rose-400 transition-all duration-200 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href={portfolioData.personalDetails.links.resumePdf}
            download
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-rose-500 text-white hover:bg-rose-600 transition-colors shadow-sm"
          >
            Resume
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5 p-2 group"
            aria-label="Toggle menu"
          >
            <span className={`block h-px w-6 bg-zinc-700 transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-px w-6 bg-zinc-700 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-zinc-700 transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
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

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 bg-white shadow-2xl md:hidden flex flex-col transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-zinc-100">
          <span className="font-[var(--font-cormorant)] text-2xl font-semibold text-zinc-900">
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
                className="text-lg font-[var(--font-dm-sans)] text-zinc-700 hover:text-rose-500 transition-colors"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Drawer footer */}
        <div className="px-6 pb-8">
          <a
            href={portfolioData.personalDetails.links.resumePdf}
            download
            className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-full text-sm font-medium bg-rose-500 text-white hover:bg-rose-600 transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>
    </>
  );
}