"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted">
        Experience
      </h2>
      <p className="mb-12 max-w-xl text-lg text-muted">
        How things have progressed, from tutoring K-8 math to building
        instructional content at Georgia Tech.
      </p>

      <div className="relative pl-8">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

        <div className="flex flex-col gap-10">
          {experience.map((entry, i) => (
            <motion.div
              key={entry.id}
              className="relative"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, ease: "easeOut", delay: (i % 3) * 0.05 }}
            >
              <span className="absolute -left-8 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent-teal bg-background" />

              <p className="text-sm text-accent-teal">
                {entry.dateRange} · {entry.location}
              </p>
              <h3 className="mt-1 text-xl font-semibold text-foreground">
                {entry.role}
              </h3>
              <p className="text-muted">{entry.org}</p>
              <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-muted">
                {entry.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-0.5 shrink-0 text-accent-violet">
                      ›
                    </span>
                    <span>{bullet}</span>
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
