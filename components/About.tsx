"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="grid md:grid-cols-[160px_1fr] gap-8 md:gap-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs tracking-[0.25em] text-text-tertiary uppercase pt-2"
        >
          01 / About
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-2xl md:text-3xl leading-snug text-text-primary max-w-3xl">
            {profile.summary}
          </p>
          <div className="mt-10 grid sm:grid-cols-2 gap-6 max-w-xl">
            <div>
              <p className="font-display text-3xl text-accent-bright">2026</p>
              <p className="text-sm text-text-secondary mt-1">
                B.E. Computer Science (AI &amp; ML)
              </p>
            </div>
            <div>
              <p className="font-display text-3xl text-accent-bright">2</p>
              <p className="text-sm text-text-secondary mt-1">
                Open-source PRs merged
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}