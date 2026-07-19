"use client";

import { motion } from "framer-motion";
import { Mail, FileDown } from "lucide-react";
import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-6 py-24 md:py-36 border-t border-border-subtle relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(45% 60% at 50% 100%, rgba(76,126,255,0.14) 0%, rgba(5,7,12,0) 70%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <p className="font-mono text-xs tracking-[0.25em] text-text-tertiary uppercase mb-6">
          06 / Contact
        </p>
        <h2 className="font-display text-3xl md:text-5xl text-gradient font-semibold leading-tight">
          Let&apos;s build something that ships.
        </h2>
        <p className="mt-5 text-text-secondary text-base md:text-lg leading-relaxed max-w-xl">
          Open to AI Engineer, ML Engineer, and Python Engineer roles. If you&apos;re hiring
          or just want to talk about RAG pipelines or speech models, my inbox is open.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-bright transition-colors"
          >
            <Mail size={15} />
            {profile.email}
          </a>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong px-4 py-2 text-sm text-text-secondary hover:text-accent-bright hover:border-accent-bright transition-colors"
          >
            <GithubIcon className="w-[15px] h-[15px]" />
            {profile.githubHandle}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong px-4 py-2 text-sm text-text-secondary hover:text-accent-bright hover:border-accent-bright transition-colors"
          >
            <LinkedinIcon className="w-[15px] h-[15px]" />
            {profile.linkedinHandle}
          </a>
          <a
            href={profile.resumeFile}
            download
            className="inline-flex items-center gap-2 rounded-full border border-border-strong px-4 py-2 text-sm text-text-secondary hover:text-accent-bright hover:border-accent-bright transition-colors"
          >
            <FileDown size={15} />
            Download resume
          </a>
        </div>

        <p className="mt-4 text-xs text-text-tertiary font-mono">
          {profile.phone} · {profile.location}
        </p>
      </motion.div>
    </section>
  );
}
