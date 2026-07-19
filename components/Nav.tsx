"use client";

import { useEffect, useState } from "react";
import { Menu, X, FileDown } from "lucide-react";
import { profile } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-void/85 backdrop-blur-md border-b border-border-subtle"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-display font-semibold text-lg tracking-tight text-text-primary"
        >
          Shoeb<span className="text-accent-bright">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.resumeFile}
          download
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-border-strong px-4 py-2 text-sm font-medium text-text-primary hover:border-accent-bright hover:text-accent-bright transition-colors"
        >
          <FileDown size={15} />
          Resume
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-text-primary p-2 -mr-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-void border-b border-border-subtle px-6 pb-6 pt-2 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base text-text-secondary hover:text-text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href={profile.resumeFile}
            download
            className="inline-flex items-center gap-2 rounded-full border border-border-strong px-4 py-2 text-sm font-medium text-text-primary w-fit"
          >
            <FileDown size={15} />
            Resume
          </a>
        </div>
      )}
    </header>
  );
}
