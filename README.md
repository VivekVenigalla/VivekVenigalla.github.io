# vivekvenigalla.github.io

Personal portfolio site — Next.js (static export) + Tailwind CSS + Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before this goes live

- **Resume**: `public/resume.pdf` is a placeholder. Drop your real resume PDF at that exact path (keep the filename `resume.pdf`) and it'll be picked up automatically by the "Download Resume" buttons.
- **Content**: project, experience, and skills data live in `data/*.ts` — edit those directly to update copy without touching component code.

## Deploying to GitHub Pages

This repo is set up for a static export deployed via GitHub Actions (`.github/workflows/deploy.yml`).

1. Create a GitHub repo named exactly `VivekVenigalla.github.io` (case matters for the root user-page URL) and push this project to it on the `main` branch.
2. In the repo's **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Push to `main` — the workflow builds (`npm run build`, static export to `out/`) and deploys automatically. The site will be live at `https://vivekvenigalla.github.io`.

## Build

```bash
npm run build
```

Outputs a static site to `out/` (Next.js `output: 'export'` mode — no server required).
