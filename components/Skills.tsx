"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24 md:py-32 border-t border-border-subtle">
      <div className="grid md:grid-cols-[160px_1fr] gap-8 md:gap-16">
        <p className="font-mono text-xs tracking-[0.25em] text-text-tertiary uppercase pt-2">
          02 / Skills
        </p>

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-10 max-w-3xl">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <h3 className="font-display text-sm font-medium text-text-primary mb-3">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border-subtle bg-card px-3 py-1 text-xs text-text-secondary font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
