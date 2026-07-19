"use client";

import { motion } from "framer-motion";
import { GitPullRequest, Award, GraduationCap } from "lucide-react";
import { openSource, education, certifications, languages } from "@/lib/data";

export default function OpenSourceEducation() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32 border-t border-border-subtle">
      <div className="grid md:grid-cols-[160px_1fr] gap-8 md:gap-16">
        <p className="font-mono text-xs tracking-[0.25em] text-text-tertiary uppercase pt-2">
          05 / Background
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-display text-lg text-text-primary flex items-center gap-2 mb-4">
              <GitPullRequest size={17} className="text-accent-bright" />
              Open Source
            </h3>
            <ul className="space-y-4">
              {openSource.map((item) => (
                <li key={item.repo} className="text-sm">
                  <p className="text-text-primary font-mono">{item.repo}</p>
                  <p className="text-text-secondary mt-1">{item.contribution}</p>
                  <p className="text-text-tertiary text-xs mt-1">{item.ref}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <h3 className="font-display text-lg text-text-primary flex items-center gap-2 mb-4">
              <GraduationCap size={17} className="text-accent-bright" />
              Education
            </h3>
            <p className="text-sm text-text-primary">{education.degree}</p>
            <p className="text-sm text-text-secondary mt-1">{education.school}</p>
            <p className="text-xs text-text-tertiary mt-1 font-mono">
              {education.period} · {education.score}
            </p>

            <h3 className="font-display text-lg text-text-primary flex items-center gap-2 mt-8 mb-4">
              <Award size={17} className="text-accent-bright" />
              Certifications
            </h3>
            <ul className="space-y-2">
              {certifications.map((c) => (
                <li key={c.name} className="text-sm text-text-secondary flex justify-between gap-4">
                  <span>{c.name}</span>
                  <span className="text-text-tertiary text-xs font-mono shrink-0">{c.date}</span>
                </li>
              ))}
            </ul>

            <p className="text-xs text-text-tertiary mt-6">
              Languages: {languages.join(", ")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
