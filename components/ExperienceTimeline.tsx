"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { experience } from "@/data/experience";

export default function ExperienceTimeline() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const canBack = index > 0;
  const canForward = index < experience.length - 1;

  const goForward = useCallback(() => {
    setDirection(1);
    setIndex((i) => Math.min(i + 1, experience.length - 1));
  }, []);

  const goBack = useCallback(() => {
    setDirection(-1);
    setIndex((i) => Math.max(i - 1, 0));
  }, []);

  const jumpTo = (i: number) => {
    setDirection(i >= index ? 1 : -1);
    setIndex(i);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goForward();
      if (e.key === "ArrowLeft") goBack();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goForward, goBack]);

  const current = experience[index];
  const progressPct = (index / (experience.length - 1)) * 100;

  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted">
        Experience
      </h2>
      <p className="mb-12 max-w-xl text-lg text-muted">
        Step forward through the roles and projects that got me here.
      </p>

      <div className="mb-12 overflow-x-auto pb-2 sm:overflow-visible">
        <div className="relative min-w-[600px] px-4 sm:min-w-0">
          <div className="absolute left-0 right-0 top-[7px] h-px bg-border" />
          <motion.div
            className="absolute left-0 top-[7px] h-px bg-gradient-to-r from-accent-teal to-accent-violet"
            animate={{ width: `${progressPct}%` }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
          />
          <div className="relative flex justify-between">
            {experience.map((entry, i) => (
              <button
                key={entry.id}
                type="button"
                onClick={() => jumpTo(i)}
                className="flex flex-col items-center"
                aria-label={`Jump to ${entry.role} at ${entry.org}`}
                aria-current={i === index}
              >
                <span
                  className={`h-3.5 w-3.5 rounded-full border-2 transition-colors ${
                    i === index
                      ? "border-accent-teal bg-accent-teal"
                      : i < index
                        ? "border-accent-violet bg-accent-violet"
                        : "border-border bg-background"
                  }`}
                />
                <span className="mt-3 w-16 text-center text-[10px] leading-tight text-muted">
                  {entry.dateRange.split("–")[0].trim()}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-border bg-elevated p-8">
        <motion.div
          key={current.id}
          initial={{ x: direction * 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <p className="text-sm text-accent-teal">
            {current.dateRange} · {current.location}
          </p>
          <h3 className="mt-1 text-2xl font-semibold text-foreground">
            {current.role}
          </h3>
          <p className="text-muted">{current.org}</p>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
            {current.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2">
                <span className="mt-0.5 shrink-0 text-accent-violet">›</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <button
          type="button"
          onClick={goBack}
          disabled={!canBack}
          className="rounded-full border border-border px-5 py-2 text-sm text-foreground transition-colors hover:border-accent-teal disabled:opacity-30 disabled:hover:border-border"
        >
          ← Back
        </button>
        <span className="text-xs text-muted">
          {index + 1} / {experience.length}
        </span>
        <button
          type="button"
          onClick={goForward}
          disabled={!canForward}
          className="rounded-full border border-border px-5 py-2 text-sm text-foreground transition-colors hover:border-accent-violet disabled:opacity-30 disabled:hover:border-border"
        >
          Forward →
        </button>
      </div>
    </section>
  );
}
