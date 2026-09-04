"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function ProjectsCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goNext = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % projects.length);
  }, []);

  const goBack = useCallback(() => {
    setDirection(-1);
    setIndex((i) => (i - 1 + projects.length) % projects.length);
  }, []);

  const jumpTo = (i: number) => {
    setDirection(i >= index ? 1 : -1);
    setIndex(i);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goBack();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goBack]);

  const project = projects[index];

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted">
        Projects
      </h2>
      <p className="mb-12 max-w-xl text-lg text-muted">
        A few things I&apos;ve built. Use the arrows (or ← / →) to browse.
      </p>

      <div className="relative mx-auto max-w-2xl">
        <motion.div
          key={project.id}
          initial={{ x: direction * 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="gradient-border rounded-2xl border border-accent-teal/40 bg-elevated-2 p-8 shadow-2xl shadow-black/40 sm:p-10"
        >
          <h3 className="text-2xl font-semibold text-foreground sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-1 text-accent-teal">{project.tagline}</p>
          <p className="mt-5 text-base leading-relaxed text-muted">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:gap-6">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-foreground underline decoration-accent-violet decoration-2 underline-offset-4 hover:text-accent-violet"
              >
                {link.label} →
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={goBack}
          className="rounded-full border border-border px-5 py-2 text-sm text-foreground transition-colors hover:border-accent-teal"
          aria-label="Previous project"
        >
          ← Back
        </button>
        <div className="flex gap-2">
          {projects.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => jumpTo(i)}
              aria-label={`Go to ${p.title}`}
              aria-current={i === index}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-accent-teal" : "w-1.5 bg-border"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={goNext}
          className="rounded-full border border-border px-5 py-2 text-sm text-foreground transition-colors hover:border-accent-violet"
          aria-label="Next project"
        >
          Next →
        </button>
      </div>
    </section>
  );
}
