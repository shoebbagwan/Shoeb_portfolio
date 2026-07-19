"use client";

import { motion } from "framer-motion";
import { Mail, ArrowDown } from "lucide-react";
import { profile } from "@/lib/data";
import SignalWave from "./SignalWave";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-16"
    >
      {/* radial glow backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 32%, rgba(76,126,255,0.16) 0%, rgba(76,126,255,0.05) 45%, rgba(5,7,12,0) 75%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 grain opacity-40"
      />

      <div className="mx-auto max-w-6xl px-6 w-full">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs tracking-[0.25em] text-accent-bright uppercase mb-6"
        >
          AI/ML Engineer · Mumbai, India · Open to work
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="font-display text-gradient font-semibold leading-[1.50] text-[13vw] sm:text-6xl md:text-7xl lg:text-8xl tracking-tight"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 max-w-xl text-lg md:text-xl text-text-secondary leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-bright transition-colors"
          >
            View projects
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium text-text-primary hover:border-accent-bright hover:text-accent-bright transition-colors"
          >
            <Mail size={15} />
            Email me
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="inline-flex items-center justify-center rounded-full border border-border-strong w-10 h-10 text-text-secondary hover:text-accent-bright hover:border-accent-bright transition-colors"
          >
            <GithubIcon className="w-[17px] h-[17px]" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="inline-flex items-center justify-center rounded-full border border-border-strong w-10 h-10 text-text-secondary hover:text-accent-bright hover:border-accent-bright transition-colors"
          >
            <LinkedinIcon className="w-[17px] h-[17px]" />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mx-auto max-w-6xl px-6 w-full mt-16"
      >
        <SignalWave />
      </motion.div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-text-tertiary hover:text-text-secondary transition-colors"
      >
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <ArrowDown size={14} />
      </a>
    </section>
  );
}
