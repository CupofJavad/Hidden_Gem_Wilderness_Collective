# Deploy HGWC_Figma to GitHub + Vercel

This project is a Vite + React static app and deploys cleanly on Vercel.

## Current Status

- `npm install`: works
- `npm run build`: works
- Output directory: `dist/`

## 1) Local sanity check

From the `HGWC_Figma` directory:

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

**Closer-to-production check** (static build + preview server):

```bash
npm run build
npm run preview
```

This mimics what Vercel serves after `vite build`.

## 1b) Environment variables on Vercel

In the Vercel project → **Settings → Environment Variables**, add the `VITE_*` keys from `.env.example` (Production / Preview as needed). Redeploy after changes.

Without them, the site still runs: purchase CTAs route to `/contact` with query hints until real Stripe/Gumroad/Shop URLs exist.

## 2) Create a GitHub repo

In GitHub:

1. Create a new repository (for example: `hgwc-site`).
2. Do not add files in the GitHub UI.

Then in terminal from `HGWC_Figma`:

```bash
git init
git add .
git commit -m "Initial salvage from Figma export"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## 3) Deploy on Vercel

1. Go to Vercel and click **Add New Project**.
2. Import the GitHub repo.
3. Use these settings:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
4. Deploy.

Vercel should auto-detect these values, but confirm them before clicking deploy.

This repo includes `vercel.json` with a **SPA fallback** so client-side routes like `/calendar/winter-river-walk-campfire-stories` work on refresh.

## 4) Optional custom domain

1. In Vercel project settings, go to **Domains**.
2. Add your domain.
3. Update DNS records as instructed by Vercel.

## 5) Suggested cleanup after first deploy

- Replace placeholder contact details where needed.
- Set `VITE_*` URLs in Vercel (see `.env.example`): checkouts, cart, member login, donate, newsletter, optional `VITE_GA_MEASUREMENT_ID`.
- Replace any temporary demo testimonials with verified member quotes.
- Submit the contact form to a real backend (Formspree, serverless, etc.) — currently UI-only.

## 6) Pre-launch checklist

- [ ] `npm run build` passes locally
- [ ] Spot-check: Home, `/itineraries`, detail URL, `/calendar`, event detail, `/merch`, `/membership`, `/contact`, legal pages
- [ ] Refresh on a deep link (e.g. `/blog/peer-meetup-norms-safety-kindness`) — should not 404 on Vercel
- [ ] All `VITE_*` production values set in Vercel
- [ ] GA4 receiving events (if enabled)

