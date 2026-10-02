# Portfolio — Ibtihal Addala

Static personal portfolio built with **Next.js 15 (App Router) · TypeScript · Tailwind CSS**.
No admin panel, no database, no environment variable required. Fonts are self-hosted via `@fontsource`.

## Edit the content

Everything is in **`src/data/portfolio.ts`** (profile, experience, projects, skills, education, certifications).
- To show GitHub / LinkedIn buttons, fill `profile.links.github` and `profile.links.linkedin`.
- To add a link on a project card, add `link: "https://..."` to the project.
- The downloadable CV is `public/cv-ibtihal-addala.pdf` (replace the file to update it).

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build check
```

## Deploy on Vercel

1. Push this folder to a new GitHub repository:
   ```bash
   git init && git add . && git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<user>/<repo>.git
   git push -u origin main
   ```
2. On vercel.com: **Add New → Project → Import** the repository.
3. Framework is detected automatically (Next.js). Click **Deploy**.

Optional: set `NEXT_PUBLIC_SITE_URL` (e.g. `https://ibtihal.vercel.app` or a custom domain) for exact sitemap/OpenGraph URLs.
Without it, the Vercel production URL is used automatically.
