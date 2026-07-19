"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-6 py-24 md:py-32 border-t border-border-subtle"
    >
      <div className="grid md:grid-cols-[160px_1fr] gap-8 md:gap-16">
        <p className="font-mono text-xs tracking-[0.25em] text-text-tertiary uppercase pt-2">
          03 / Experience
        </p>

        <div className="max-w-3xl">
          {experience.map((job, i) => (
            <motion.div
              key={job.org}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border-l border-border-subtle pl-6 relative"
            >
              <span className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-accent" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-lg text-text-primary">{job.role}</h3>
                <span className="font-mono text-xs text-text-tertiary">{job.period}</span>
              </div>
              <p className="text-sm text-accent-bright mt-1">
                {job.org} · {job.location}
              </p>
              <ul className="mt-4 space-y-2">
                {job.points.map((p) => (
                  <li key={p} className="text-sm text-text-secondary leading-relaxed flex gap-2">
                    <span className="text-text-tertiary mt-1.5 w-1 h-1 rounded-full bg-text-tertiary shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
