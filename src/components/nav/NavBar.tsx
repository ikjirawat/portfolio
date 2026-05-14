"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function NavBar() {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[60px] border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-md">
      <nav className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-base font-semibold text-[var(--text)] transition-colors hover:text-[var(--accent)]"
        >
          Ik Jirawat
        </button>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 sm:flex">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              aria-current={active === s.id ? "page" : undefined}
              className={`rounded-md px-3 py-1.5 text-sm transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] ${
                active === s.id
                  ? "bg-[var(--accent)]/10 font-medium text-[var(--accent)]"
                  : "text-[var(--text-muted)] hover:text-[var(--text)]"
              }`}
            >
              {s.label}
            </button>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 sm:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-[var(--text-muted)] transition-colors hover:text-[var(--text)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-b border-[var(--border)] bg-[var(--bg)] px-4 pb-4 sm:hidden">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              aria-current={active === s.id ? "page" : undefined}
              className={`block w-full rounded-md px-3 py-2.5 text-left text-sm transition-colors ${
                active === s.id
                  ? "font-medium text-[var(--accent)]"
                  : "text-[var(--text-muted)] hover:text-[var(--text)]"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
