# Hidden Gem Wilderness Collective — website

React + Vite + TypeScript site exported from Figma Make, cleaned up for local run and **Vercel** deploy.

**Repository scope:** this Git repo is **only** the web app under this root (not business plans, images, or other materials from the parent folder on your machine).

## Quick start (test before deploy)

```bash
npm install
npm run dev
```

Open the URL shown (usually [http://localhost:5173](http://localhost:5173)). Use **Browse** / **Shop** / **Calendar** and deep links such as `/itineraries/lost-coast-mist-mile`.

**Production-like preview** (serves the built `dist/`):

```bash
npm run build
npm run preview
```

Then open the URL Vite prints (often [http://localhost:4173](http://localhost:4173)).

## Environment variables

Copy `.env.example` to `.env` and fill in checkout URLs when you have them. Until then, CTAs fall back to sensible on-site paths (mostly `/contact` with `?topic=` / `slug=`).

## Deploy

See [DEPLOY_GITHUB_VERCEL.md](./DEPLOY_GITHUB_VERCEL.md).

## Original Figma

Design source: [Complete Instructions (Figma)](https://www.figma.com/design/wIgcgXouuMSqxOK0XxrGvK/Complete-Instructions).
