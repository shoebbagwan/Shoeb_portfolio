"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { GithubIcon } from "./Icons";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-6 py-24 md:py-32 border-t border-border-subtle"
    >
      <div className="grid md:grid-cols-[160px_1fr] gap-8 md:gap-16">
        <p className="font-mono text-xs tracking-[0.25em] text-text-tertiary uppercase pt-2">
          04 / Projects
        </p>

        <div className="flex flex-col gap-5">
          {projects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.github}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative rounded-2xl border border-border-subtle bg-card p-6 md:p-8 hover:border-accent transition-colors overflow-hidden"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 w-64 h-64 rounded-full bg-accent/0 group-hover:bg-accent/10 blur-3xl transition-colors duration-500"
              />

              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span className="font-mono text-sm text-text-tertiary pt-1">
                    {project.index}
                  </span>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-display text-xl md:text-2xl text-text-primary">
                        {project.name}
                      </h3>
                      {project.featured && (
                        <span className="font-mono text-[10px] uppercase tracking-wider text-warm border border-warm/30 rounded-full px-2 py-0.5">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-accent-bright text-sm mt-1">{project.tagline}</p>
                  </div>
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-text-tertiary group-hover:text-accent-bright transition-colors shrink-0"
                />
              </div>

              <p className="mt-5 text-sm text-text-secondary leading-relaxed max-w-2xl">
                {project.description}
              </p>

              <ul className="mt-4 space-y-1.5">
                {project.highlights.map((h) => (
                  <li key={h} className="text-sm text-text-secondary flex gap-2">
                    <span className="text-text-tertiary mt-1.5 w-1 h-1 rounded-full bg-text-tertiary shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[11px] text-text-tertiary border border-border-subtle rounded-full px-2.5 py-1"
                  >
                    {s}
                  </span>
                ))}
                <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-text-secondary group-hover:text-accent-bright transition-colors">
                  <GithubIcon className="w-[13px] h-[13px]" />
                  View code
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
