# Portfolio

Next.js 16 (App Router), React 19 and Tailwind CSS 4. One page: Hero, About, Skills (logo marquee above), Projects.
Each project card links to `/projects/[slug]` for details, technologies and a live link.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Edit your content

- `src/data/site.ts`      name, email, social links, nav
- `src/data/projects.ts`  project cards and detail pages
- `src/data/skills.tsx`   marquee logos and skill groups
- `src/components/Hero.tsx`, `About.tsx` copy
- `src/app/globals.css`   Tailwind theme, colours (CSS variables), card shadows, liquid glass (there is no tailwind.config file in Tailwind 4)
