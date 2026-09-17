# Insured Hub

Professional multi-page React website for **Insured Hub** — insurance & financial advisers.

## Pages

- Home (hero image slider + services + contact)
- About
- Services
- Why Insurance
- Contact

## Contact

- WhatsApp: **9818263535** (floating button on all pages)
- Phone: **9212043486**
- Landlines: 011-45562535 / 011-45532535

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

### Deploy on Render (Static Site)

1. Push this repo to GitHub
2. In [Render](https://render.com) → **New** → **Static Site** → connect the repo
3. Settings (also in `render.yaml`):
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
4. SPA rewrite is configured so routes like `/contact` work on refresh

### Deploy on Vercel

Import the repo with framework preset **Vite**. `vercel.json` handles SPA routing.

Images are in `public/images/` (and `images/` for reference uploads).
