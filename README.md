# Patrick Brito — Portfolio

Personal portfolio built with **React 19 + TypeScript + Vite**. Multi-language, dark/light theme, global search, animated highlights and a curated experience/tech timeline.

Live: <https://patrickbrito.dev> · GitHub: <https://github.com/PatrickBritoK> · LinkedIn: [Patrick Brito](https://www.linkedin.com/in/patrick-brito-6a9787237/)

---

## Features

- **Localization** in 🇧🇷 Portuguese, 🇺🇸 English, 🇪🇸 Spanish and 🇩🇪 German with a custom flag-based dropdown
- **Theme toggle** (dark/light) with `localStorage` persistence and system-preference fallback
- **Global search** (⌘/Ctrl+K) indexing technologies, experiences, projects, certifications, education and languages, with deep-link scroll + flash highlight
- **Highlights bar** with animated counters (years of experience computed from real experience data)
- **Timeline** of experience with company logos, contract notes and IT / Other tabs
- **Tech stack** split in *Professional use* and *Studying / familiar with*, with tooltip showing months of hands-on experience per tech
- **SEO meta tags**: OpenGraph, Twitter Card, `hreflang`, `theme-color`
- **Reveal on scroll** animations and floating **back-to-top** button
- Fully responsive (mobile-first breakpoints from 480px)

## Stack

| Layer | Choices |
| --- | --- |
| Runtime | React 19, TypeScript 5.9 |
| Build | Vite 7 |
| Icons | `react-icons` |
| Styling | Vanilla CSS with theme variables (`:root[data-theme=...]`) |
| Lint | ESLint 9 with `typescript-eslint` and React hooks rules |
| State | React Context (`LanguageProvider`, `ThemeProvider`) |

No CSS framework, no state library — everything is native React and CSS variables.

## Project structure

```
src/
├── App.tsx                # Root layout (Header + Home + BackToTop)
├── main.tsx               # Entry point + providers
├── pages/
│   └── Home.tsx           # Section composition
├── components/            # Header, Hero, About, TechStack, Projects, Experience,
│                          # Education, Languages, Certifications, Footer,
│                          # Highlights, SearchButton, SearchModal, LanguageSelect,
│                          # BackToTop, Reveal
├── context/               # LanguageContext, ThemeContext + hooks
├── data/                  # techstack, experience, projects, certifications
├── i18n/                  # pt / en / es / de translations
├── styles/                # global.css + one file per component
└── utils/                 # slug helper
```

## Getting started

```bash
npm install
npm run dev            # start dev server (Vite)
npm run build          # type-check + production build
npm run preview        # preview built site
npm run lint           # ESLint
```

Node ≥ 18 is expected.

## Editing content

- **Experiences**: `src/data/experience.ts` (dates, techs, logos) + translations in `src/i18n/*.ts`
- **Projects**: `src/data/projects.ts` + translations
- **Tech stack**: `src/data/techstack.ts` (icon, color, `category: "professional" | "learning"`)
- **Certifications / Education / Languages**: only in `src/i18n/*.ts`
- **Company logos**: place files under `public/images/` and reference in `experience.ts`

## Deployment

Production build outputs to `dist/`. Any static host works (Vercel, Netlify, GitHub Pages, Cloudflare Pages). Remember to point the domain at `dist/` and update `og:url` / `canonical` in `index.html` before publishing.

## License

Personal project — code available for reference. Reuse the structure/layout freely; please don't copy the personal content.

