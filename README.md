# Lighthouse Explorer

An independent editorial magazine about lighthouses and coastal travel.

Vite 5 · React 18 · Tailwind CSS 3 · React Router 6. Fully pre-rendered (SSR-to-static via `renderToString`), served in production by Express with `compression` and secure headers.

## Scripts

```bash
npm install
npm run dev        # local dev
npm run build      # client bundle + SSR bundle + prerender static HTML
npm start          # production Express server on :3000
```

## Env

- `SITE_ORIGIN` — public origin (e.g. `https://lighthouseexplorer.com`). When set, `prerender.js` bakes canonical tags, `sitemap.xml` and `robots.txt`. Leave blank in dev.

## Deploy

- **AWS Amplify Hosting**: connect the repo. `amplify.yml` handles build + secure headers + long cache for hashed assets. Add an Amplify Rewrite rule for pretty URLs: source `</^[^.]+$/>` → target `/<*>/index.html` (200 Rewrite).
- **Heroku**: `Procfile` + `app.json` are ready. Add `SITE_ORIGIN` in Config Vars if you want canonicals baked.

## Analytics &amp; consent

Google Analytics 4 (`G-4J046JXWVC`) with Consent Mode v2. All ad/analytics storage is denied by default. The banner sets `localStorage.lhe_consent_v1` and grants only after explicit acceptance.

## Editorial notes

- Every article is drafted by a contributor and reviewed by a second pair of eyes before publication.
- Photography is licensed for editorial use, taken by contributors, or public domain.
- Affiliate disclosure and cookie policy live under `/terms#affiliate` and `/privacy#cookies`.
