# Data Science Portfolio

A React + Vite portfolio site. Content lives in one place
(`src/data/content.js`) so you can edit your info without touching any
component code.

## 1. Install & run locally

You'll need [Node.js](https://nodejs.org/) (v18+) installed.

```bash
npm install
npm run dev
```

This opens the site at `http://localhost:5173`. It hot-reloads as you edit.

## 2. Edit your content

Everything you need to fill in lives in `src/data/content.js`:
- `profile` — name, role, summary, links, resume path
- `projects` — the four projects, each with a `summary` / `approach` / `result`
- `skills` — grouped by category
- `experience` — internship / volunteer roles

Search that file for `TODO` to find every placeholder.

Add your resume PDF to the `public/` folder as `resume.pdf` (or update
`resumeUrl` in `content.js` if you name it differently).

## 3. Project structure

```
src/
  components/   one file per section (Hero, Projects, Skills, etc.)
  data/         content.js — all your text content
  index.css     design tokens + all styling
  App.jsx       composes the sections
```

## 4. Deploy

### Option A — Vercel (recommended, simplest)
1. Push this repo to GitHub.
2. Go to vercel.com → New Project → import the repo.
3. Framework preset: Vite. Leave build settings as default.
4. Deploy. You'll get a URL like `your-portfolio.vercel.app`.
5. Change `base: '/'` in `vite.config.js` if you switch away from GitHub Pages.

### Option B — GitHub Pages (free, no separate account needed)
1. In `vite.config.js`, set `base: '/your-repo-name/'` to match your repo name.
2. Push this repo to GitHub.
3. Run:
   ```bash
   npm run build
   npm run deploy
   ```
   (`gh-pages` is already included as a dev dependency and will push `dist/`
   to a `gh-pages` branch.)
4. In your repo settings → Pages, set the source to the `gh-pages` branch.
5. Site will be live at `https://yourusername.github.io/your-repo-name/`.

## 5. Before you send this to recruiters

- [ ] Replace every `TODO` in `content.js`
- [ ] Add `resume.pdf` to `public/`
- [ ] Update GitHub/LinkedIn links in `profile`
- [ ] Check the site on mobile width
- [ ] Confirm all project links (code/demo) actually work
