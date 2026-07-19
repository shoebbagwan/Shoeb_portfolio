# Shoeb Bagwan — Portfolio

A dark, cinematic developer portfolio built with Next.js, Tailwind CSS, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Deploy

**Vercel (recommended, easiest):**
1. Push this folder to a GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Deploy — no config needed.

**GitHub Pages:**
Requires switching Next.js to static export (`output: "export"` in `next.config.ts`)
since GitHub Pages can't run a Node server. Ask Claude if you'd like this set up.

## Editing content

All resume content (projects, skills, experience, education) lives in one place:
`lib/data.ts`. Edit that file to update anything on the site — no need to touch
the components.

To swap the resume PDF, replace `public/Shoeb_Bagwan_Resume.pdf` and update
`resumeFile` in `lib/data.ts` if you rename it.
