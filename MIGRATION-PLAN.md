# Vite → Next.js Migration Plan (App Router)

Goal: Move the entire portfolio from a Vite React SPA to **Next.js 15 App
Router** so every page ships server-rendered HTML — the technical foundation for
the SEO/AEO plan (see [SEO-PLAN.md](./SEO-PLAN.md)). Nothing is left behind:
every component, asset, style, and the full `<head>` is ported.

> Done on branch **`next-migration`** so `main` stays deployable. Verified with
> `next build` + Lighthouse before merge.

## What makes this migration EASY (project specifics)

- **No router** — single page composed of sections → one `app/page.tsx`.
- **Dark-mode only** — `ThemeContext` always forces `dark`. So **no theme-flash /
  hydration problem**: we set `<html className="dark">` statically. `ThemeContext`
  can be kept as a trivial client provider or dropped entirely.
- **Tailwind v4 is CSS-first** — `src/index.css` (`@import "tailwindcss"` +
  `@theme`) is reused almost verbatim; only the build plugin changes
  (`@tailwindcss/vite` → `@tailwindcss/postcss`).
- **`@/*` path alias** already in tsconfig → keep as-is.

## What makes it work (the real tasks)

1. Interactive components (framer-motion, swiper, hooks, onClick) get
   `"use client"`. Nearly all section components qualify.
2. `index.html` `<head>` → Next **Metadata API** in `app/layout.tsx` + JSON-LD
   `<script>`.
3. Vite-only tooling → Next equivalents (`next/image`, `@ducanh2912/next-pwa`,
   `@next/bundle-analyzer`).

---

## File-by-file mapping

| Current (Vite)                 | Next.js                                     | Action                                                                 |
| ------------------------------ | ------------------------------------------- | ---------------------------------------------------------------------- |
| `index.html` `<head>`          | `src/app/layout.tsx` (`metadata` + JSON-LD) | Port head → Metadata API                                               |
| `src/main.tsx`                 | `src/app/layout.tsx` (root html/body)       | Replace; delete main.tsx                                               |
| `src/App.tsx`                  | `src/app/page.tsx` + providers in layout    | Split; delete App.tsx                                                  |
| `src/index.css`                | `src/app/globals.css`                       | Move, import in layout                                                 |
| `src/App.css` (unused)         | —                                           | Delete (not imported)                                                  |
| `src/components/**`            | `src/components/**` (unchanged paths)       | Add `"use client"` where interactive                                   |
| `src/context/ThemeContext.tsx` | keep as client provider (or drop)           | `"use client"`                                                         |
| `src/data/portfolio-data.ts`   | unchanged                                   | —                                                                      |
| `src/lib/*`                    | unchanged                                   | —                                                                      |
| `src/components/ui/button.tsx` | unchanged (presentational)                  | server-safe, no directive needed                                       |
| `<img>` tags                   | `next/image` (`<Image>`)                    | Swap for image optimization                                            |
| `vite.config.ts`               | `next.config.ts`                            | Replace (chunking auto; re-add PWA, image domains, headers, redirects) |
| `vite-env.d.ts`                | `next-env.d.ts` (auto) + swiper css types   | Replace; keep swiper module decls if needed                            |
| `tsconfig.app/node/json`       | single `tsconfig.json` (Next preset)        | Replace, keep `@/*` paths + strict                                     |
| `eslint.config.js`             | add `eslint-config-next`                    | Extend current flat config                                             |
| `public/**`                    | `public/**` (unchanged)                     | — (PWA icons already generated)                                        |

---

## Dependency changes

**Add:** `next`, `eslint-config-next`, `@tailwindcss/postcss`,
`@ducanh2912/next-pwa` (PWA), `@next/bundle-analyzer` (analyze),
`@vercel/analytics` + `@vercel/speed-insights` (already present — switch imports
to `/next`).

**Remove:** `vite`, `@vitejs/plugin-react`, `@tailwindcss/vite`,
`vite-plugin-image-optimizer`, `vite-plugin-pwa`, `rollup-plugin-visualizer`,
`@lhci/cli`? (keep — Lighthouse CI still works against `next build`/`next start`).

**Keep (work unchanged in Next):** react 19, react-dom 19, framer-motion, swiper,
lucide-react, radix slot, cva, clsx, tailwind-merge, tailwindcss v4, typescript,
prettier, lefthook, eslint.

**Scripts:** `dev: next dev`, `build: next build`, `start: next start`,
`lint: next lint`, keep `format`, `prepare: lefthook install`,
`analyze: ANALYZE=true next build`, `lhci: lhci autorun`.

---

## Tooling carry-over

- **lefthook** — unchanged (pre-commit eslint+prettier, pre-push lint still valid).
- **Lighthouse CI** — update `lighthouserc.json`: instead of `staticDistDir`,
  use `startServerCommand: "next start"` + `url: ["http://localhost:3000"]`
  (Next isn't a pure static export unless we choose `output: export`). GitHub
  Action: build then `lhci autorun`.
- **Image optimization** — handled by `next/image` (better than the Vite plugin).
- **PWA** — `@ducanh2912/next-pwa` wraps `next.config.ts`; reuse existing
  manifest + generated icons in `public/`.
- **Bundle analysis** — `@next/bundle-analyzer` via `ANALYZE=true`.

---

## SEO wins unlocked immediately by this migration

- Server-rendered HTML → Google **and** AI crawlers (GPTBot/ClaudeBot/Perplexity)
  get full content (the whole point).
- Per-route **Metadata API** → ready for blog/project/i18n unique titles.
- `next/image` → automatic responsive/AVIF/WebP, better LCP/CLS.
- Built-in **i18n routing** → ready for EN/FR/AR (Phase 3 of SEO plan).
- `app/sitemap.ts` + `app/robots.ts` → dynamic sitemap/robots generated by Next.
- `generateStaticParams` → static blog + per-project pages later.

---

## Execution order (this migration)

1. **Branch** `next-migration`.
2. **Install** Next + new deps; **remove** Vite deps.
3. **Config**: `next.config.ts`, `postcss.config.mjs`, `tsconfig.json`,
   `next-env.d.ts`, update `eslint.config.js`, update `package.json` scripts.
4. **App Router skeleton**: `src/app/layout.tsx` (head/metadata/JSON-LD/providers,
   `<html className="dark" lang="en">`), `src/app/page.tsx` (renders `Portfolio`),
   move `index.css` → `src/app/globals.css`.
5. **Components**: add `"use client"` to interactive ones; swap `<img>` →
   `next/image`; fix swiper CSS imports inside client components.
6. **Analytics**: `@vercel/*/next` imports in layout.
7. **SEO files**: `app/robots.ts`, `app/sitemap.ts` (replaces manual files).
8. **Delete** Vite leftovers: `index.html`, `main.tsx`, `App.tsx`, `App.css`,
   `vite.config.ts`, `vite-env.d.ts`, Vite tsconfigs.
9. **Verify**: `next build` clean, `next start` + manual check, Lighthouse,
   lint/format/hooks.
10. **PR** for review; merge when green. Vercel auto-detects Next (zero config).

## Risks & mitigations

- **`"use client"` boundaries** — if missed, build errors point to the file; easy
  fix. Mitigation: mark all interactive components up front.
- **Swiper CSS** — must be imported in a client component, not the server layout.
- **`next/image` on remote/SVG** — configure `images` in `next.config.ts`; for
  decorative SVGs keep plain `<img>` or `unoptimized`.
- **Tailwind v4 PostCSS** — ensure `postcss.config.mjs` uses
  `@tailwindcss/postcss`; content auto-detected in v4.
- **Lighthouse CI** — switch from static dir to `next start` server target.
