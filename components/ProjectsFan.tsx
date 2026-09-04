"use client";

import { useCallback, useEffect, useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

function getTransform(
  index: number,
  activeIndex: number,
  total: number,
  isMobile: boolean
) {
  const center = (total - 1) / 2;
  const offset = index - center;
  const isActive = index === activeIndex;

  if (isMobile) {
    const diff = index - activeIndex;
    return {
      x: diff * 26,
      y: 0,
      rotate: diff * 3,
      scale: isActive ? 1.05 : 0.88,
      opacity: diff === 0 ? 1 : Math.abs(diff) === 1 ? 0.45 : 0,
      zIndex: 20 - Math.abs(diff),
    };
  }

  if (isActive) {
    return { x: 0, y: -70, rotate: 0, scale: 1.18, opacity: 1, zIndex: 30 };
  }

  return {
    x: offset * 58,
    y: 0,
    rotate: offset * 9,
    scale: 0.84,
    opacity: 0.55,
    zIndex: 10 - Math.abs(offset),
  };
}

export default function ProjectsFan() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % projects.length);
  }, []);

  const goBack = useCallback(() => {
    setActiveIndex((i) => (i - 1 + projects.length) % projects.length);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goBack();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goBack]);

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted">
        Projects
      </h2>
      <p className="mb-12 max-w-xl text-lg text-muted">
        A hand of things I&apos;ve built. Use the arrows (or ← / →) to flip
        through them.
      </p>

      <div className="relative mx-auto h-[440px] max-w-2xl sm:h-[460px]">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            isActive={index === activeIndex}
            transform={getTransform(index, activeIndex, projects.length, isMobile)}
            onSelect={() => setActiveIndex(index)}
          />
        ))}
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
          {projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to ${project.title}`}
              className={`h-1.5 rounded-full transition-all ${
                index === activeIndex
                  ? "w-6 bg-accent-teal"
                  : "w-1.5 bg-border"
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
