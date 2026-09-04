"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

type CardTransform = {
  x: number;
  y: number;
  rotate: number;
  scale: number;
  opacity: number;
  zIndex: number;
};

export default function ProjectCard({
  project,
  isActive,
  transform,
  onSelect,
}: {
  project: Project;
  isActive: boolean;
  transform: CardTransform;
  onSelect: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      className="absolute bottom-0 left-1/2 w-[200px] cursor-pointer text-left sm:w-[230px]"
      style={{ transformOrigin: "50% 130%", marginLeft: "-100px" }}
      animate={transform}
      transition={{ type: "spring", stiffness: 260, damping: 26 }}
      aria-pressed={isActive}
      aria-label={`Show details for ${project.title}`}
    >
      <div
        className={`gradient-border flex h-[300px] flex-col justify-between rounded-2xl border p-5 shadow-2xl shadow-black/40 backdrop-blur-sm transition-colors sm:h-[320px] ${
          isActive
            ? "border-accent-teal/60 bg-elevated-2"
            : "border-border bg-elevated"
        }`}
      >
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-accent-teal">{project.tagline}</p>
        </div>

        {isActive ? (
          <p className="mt-4 text-sm leading-relaxed text-muted">
            {project.description}
          </p>
        ) : null}

        <div>
          <div className="mb-3 flex flex-wrap gap-1.5">
            {project.tech.slice(0, isActive ? project.tech.length : 3).map((t) => (
              <span
                key={t}
                className="rounded-full border border-border px-2 py-0.5 text-[11px] text-muted"
              >
                {t}
              </span>
            ))}
          </div>
          {isActive ? (
            <div className="flex flex-col gap-2">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-sm font-medium text-foreground underline decoration-accent-violet decoration-2 underline-offset-4 hover:text-accent-violet"
                >
                  {link.label} →
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </motion.button>
  );
}
