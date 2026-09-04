export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    id: "backtesting-engine",
    title: "Backtesting Engine",
    tagline: "Algorithmic trading, built from scratch",
    description:
      "A high-performance algorithmic trading backtesting engine built from scratch in C++, with a DearPyGUI frontend. Simulates realistic brokerage rules with optimized memory usage and a fully customizable UI.",
    tech: ["C++", "Python", "CMake", "DearPyGUI"],
    links: [
      { label: "GitHub", href: "https://github.com/VivekVenigalla/BacktestingEngine" },
    ],
  },
  {
    id: "posturefix",
    title: "PostureFix",
    tagline: "A watchful eye on your posture",
    description:
      "A macOS menu bar app that watches your posture through your webcam and alerts you when you slouch — a lightweight, always-on nudge toward better habits while you work.",
    tech: ["Swift"],
    links: [
      { label: "GitHub", href: "https://github.com/VivekVenigalla/PostureFix" },
    ],
  },
  {
    id: "n-objects-engine",
    title: "N-Objects Engine",
    tagline: "Gravity, simulated rigorously",
    description:
      "A gravitational physics engine written in Haskell that simulates N-body dynamics — from two-body Kepler orbits to chaotic three-body systems — using Euler-Cromer and Runge-Kutta integration with strict energy conservation, visualized with Python/Plotly.",
    tech: ["Haskell", "Python", "Plotly"],
    links: [
      { label: "GitHub", href: "https://github.com/VivekVenigalla/nObjectsEngine" },
    ],
  },
  {
    id: "biobuilders-envisioners",
    title: "BioBuilders — Envisioners",
    tagline: "Early diagnosis, engineered",
    description:
      "Designed two early-diagnosis tests for diabetic retinopathy using lateral flow assays and an AI image recognition model, tested in a controlled environment with professionally curated retinal images and tear buffers. Currently publishing in the BioTreks Journal.",
    tech: ["Research", "AI/ML", "Biotech"],
    links: [
      {
        label: "Read the paper",
        href: "https://docs.google.com/document/d/1tnURw04ZVYlCipsFG_iu_gq7TvrIFRdES5ShlarvEjA/edit?usp=sharing",
      },
    ],
  },
];
