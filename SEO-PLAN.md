# SEO & AEO Master Plan — laktab.dev

Goal: Maximize visibility for Noureddine Laktab across Google **and** AI answer
engines (ChatGPT, Claude, Perplexity, Google AI Overviews) for engineer /
DevOps / AI / full-stack / مطور / développeur queries — and convert that into
recruiter & client contact.

> **Honest expectation setting.** Ranking #1 globally for a head term like
> "full stack developer" is not realistic — those SERPs are owned by LinkedIn,
> Indeed, Wikipedia, and million-page job boards. What is realistic and what
> actually wins clients/recruiters:
>
> 1. **#1 for your name** ("Noureddine Laktab") + a Google knowledge panel.
> 2. **Page 1 for long-tail + local/intent terms** ("React Laravel developer
>    Morocco", "freelance full stack developer Casablanca", "مطور full stack
>    المغرب", "développeur full stack Maroc", "hire DevOps freelancer Morocco").
> 3. **Getting cited by AI answer engines** when someone asks them to recommend
>    a developer in your niche/region.
>    This plan optimizes for all three.

---

## Phase 0 — Quick wins & correctness fixes (do first, ~1 day)

These are cheap and have outsized impact.

- [ ] **Fix entity-consistency bugs** (AEO weights these heavily — your identity
      must match everywhere):
  - JSON-LD `email` is `noureddine.laktab15@gmail.com` — **confirmed correct**
    (the `00` address is just an account login, not the public contact). Keep
    `15` everywhere public and don't expose `00`.
  - JSON-LD `sameAs` GitHub URL → verify the handle actually resolves (git
    config shows `Noureddine-Laktab`, JSON-LD shows `Laktab-Noureddine-code`).
  - Make sure name, job title, location, and links are byte-identical across the
    site, GitHub, LinkedIn, dev.to, etc.
- [ ] **Dedicated OG image** — generate a real 1200×630 social card (name + title + photo + tech badges). Current `og:image` lies about its dimensions, which
      can break LinkedIn/X previews.
- [ ] **robots.txt** (in `public/`) — allow all, point to sitemap, explicitly
      allow AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) since
      we _want_ AEO citations.
- [ ] **sitemap.xml** — generated at build (see Phase 1), one URL per page +
      blog posts, with `lastmod`.
- [ ] **Google Search Console** + **Bing Webmaster Tools** — verify domain,
      submit sitemap. (Bing powers ChatGPT search → matters for AEO.)
- [ ] Submit the site to **Google** via "Request indexing" after prerendering.

---

## Phase 1 — Technical foundation: make the SPA crawlable (HIGHEST PRIORITY)

**The #1 problem today:** the site is a client-rendered Vite SPA. Crawlers get a
near-empty `<div id="root">`. Google _can_ render JS but on a delayed second
wave and unreliably; **AI crawlers (GPTBot/ClaudeBot/Perplexity) do NOT execute
JS at all** — so right now you are invisible to AEO. This must be fixed before
anything else matters.

Options (in order of recommendation for this project):

1. **Prerender at build time (recommended — keeps current stack).**
   Add static prerendering so every route ships full HTML in `dist/`.
   - `vite-react-ssg` (best fit: SSG for React + Vite, per-route `<head>`), or
   - `@prerenderer/rollup-plugin` / `puppeteer`-based post-build prerender.
   - Result: crawlers + AI bots get complete HTML; hydration still gives the SPA
     feel. Indexability typically jumps from <40% to >90%.
2. **Migrate to Next.js (App Router) or Astro.** Strongest long-term SEO (true
   SSR/SSG, RSC, image opt, built-in metadata). Bigger lift — only if you're
   willing to port. **Astro is ideal for a portfolio+blog** (ships zero JS by
   default, islands for interactivity, content collections for blog).

> Recommendation: **Phase 1 = prerender with `vite-react-ssg`** now (fast win),
> and seriously consider **Astro** when you build the blog (Phase 4), since the
> blog is where SSG SEO pays off most.

Also in this phase:

- [ ] **`vercel.json`** — long cache headers for hashed assets, security headers
      (CSP, HSTS, X-Content-Type-Options), clean redirects (www → apex, force
      HTTPS), trailing-slash policy. Clean headers help Lighthouse "Best
      Practices" + crawl efficiency.
- [ ] **Dynamic `<head>` per route** (react-helmet-async or `vite-react-ssg`'s
      head API) so each page/blog post has unique title + description + canonical + OG. _Unique titles per URL is non-negotiable for SEO._
- [ ] Keep Core Web Vitals green (already started: Lighthouse CI, image
      optimizer, PWA, code-splitting). Watch **LCP** (hero image → `fetchpriority="high"`,
      preload), **CLS** (set width/height on all images), **INP**.

---

## Phase 2 — On-page content & semantic structure

Google and AI engines index _text_. A visually rich SPA with little crawlable
copy ranks poorly. "Lead every section with a direct answer" (AI engines extract
the first 1–2 sentences).

- [ ] **One `<h1>` per page** containing the primary keyword, e.g.
      "Noureddine Laktab — Full-Stack & DevOps Developer (React · Laravel · AWS)".
- [ ] **Descriptive `<h2>`/`<h3>`** instead of vague labels. Not "My Work" →
      "Full-Stack Web App Projects (React + Laravel)". Not "About" →
      "About Noureddine — Full-Stack Developer based in Morocco".
- [ ] **Keyword map** (write copy around these):
  - Primary: "full-stack web developer", "React developer", "Laravel developer".
  - Secondary/service: DevOps, CI/CD, Docker, AWS, AI integration, API
    development, freelance, hire.
  - Local: Morocco, Casablanca; languages: English, French, Arabic.
  - Long-tail/intent: "hire React Laravel developer", "freelance full stack
    developer Morocco", "DevOps engineer for startups".
- [ ] **Per-project case-study pages** (huge — each is a new indexable URL
      targeting different keywords). For each project: problem → stack → what you
      built → results, with real text (300–800 words), screenshots with alt
      text, and links to live/demo + repo. This is the single biggest organic
      content lever besides the blog.
- [ ] **Image SEO**: descriptive filenames, meaningful `alt` on every image
      (e.g. "React dashboard built with Laravel API and Tailwind"), width/height
      set, lazy-load below the fold, eager + high priority for the hero.
- [ ] **Internal linking**: hero/about → project pages → blog posts → contact.
      Descriptive anchor text ("see my Laravel e-commerce case study"), not
      "click here".
- [ ] **Crawlable contact + CV**: keep the CV PDF linked (PDFs get indexed);
      ensure email/contact is real text or a form, not an image.

---

## Phase 3 — Multilingual (English / French / Arabic) — your مطور edge

You want Arabic ("مطور") and the Moroccan market also searches in French. Almost
no competing portfolios are properly trilingual — this is a real opportunity.

- [ ] **i18n** with separate URLs per language: `/` (en), `/fr`, `/ar`.
      (Avoid client-only language toggles with one URL — search engines can't
      index the translated versions.)
- [ ] **`hreflang` tags** linking the language variants + `x-default`.
- [ ] **Arabic page**: `dir="rtl"`, `lang="ar"`, naturally-written Arabic copy
      (not machine-translated) targeting "مطور ويب", "مطور full stack",
      "مطور React" / "Laravel", "مطور المغرب".
- [ ] **French page**: "développeur full stack Maroc", "développeur React
      Laravel", "freelance développeur web".
- [ ] Localized `<title>`/description/OG per language. Localized JSON-LD where
      relevant.

---

## Phase 4 — Content / blog engine (your stated plan — built for SEO + AEO)

Blogging is the highest-leverage long-term lever; the technical setup must make
each post a fast, fully-rendered, schema-rich URL.

- [ ] **Static-generated blog** (Astro content collections _or_ MDX + prerender).
      Each post = static HTML, unique `<title>`/meta/canonical, `Article` +
      `BreadcrumbList` JSON-LD, OG image, author = you (ties to your Person
      entity), published/modified dates.
- [ ] **Topic strategy** — write what your audience _asks_, structured as direct
      answers (AEO):
  - Tutorials in your stack: "How to deploy a Laravel + React app on AWS",
    "Dockerizing a Laravel app", "CI/CD for React with GitHub Actions".
  - Comparisons (high intent): "Laravel vs Node for X", "React vs Vue in 2026".
  - Local/career: "Hiring a full-stack developer in Morocco", in EN/FR/AR.
  - Project deep-dives that link back to your case studies.
- [ ] **Format for answer engines**: clear question-style `<h2>`s, a 1–2 sentence
      direct answer right under each, TL;DR at top, FAQ blocks with `FAQPage`
      schema, tables/lists (AI loves to extract these).
- [ ] **RSS feed** + sitemap auto-include for each post.
- [ ] **Internal links** from posts → your services/project pages → contact.
- [ ] **Refresh cadence**: update old posts' `dateModified` — freshness helps.

---

## Phase 5 — Structured data (Schema.org) expansion

Already have `Person`. Expand for richer results + entity recognition:

- [ ] **`Person`** — complete it: `jobTitle`, `knowsLanguage` (en, fr, ar),
      `knowsAbout` (expand: DevOps, Docker, AWS, CI/CD, AI/LLM integration, REST
      APIs…), `alumniOf`, `nationality`, `worksFor`/`hasOccupation` with
      `occupationLocation`, `sameAs` (GitHub, LinkedIn, X, dev.to, Stack
      Overflow — all consistent).
- [ ] **`WebSite`** with `potentialAction` SearchAction (sitelinks search box).
- [ ] **`ProfilePage`** wrapping the homepage (Google's recommended type for a
      personal site).
- [ ] **`BreadcrumbList`** on project & blog pages.
- [ ] **`Article`/`BlogPosting`** on posts; **`FAQPage`** where you have Q&A;
      **`CreativeWork`/`SoftwareSourceCode`** for projects.
- [ ] Validate everything in Google Rich Results Test + Schema.org validator.

---

## Phase 6 — AEO (get cited by ChatGPT / Claude / Perplexity / AI Overviews)

By 2026 a large share of "recommend me a developer / how do I…" queries are
answered by AI. To be the cited source:

- [ ] **Let AI crawlers in** (robots.txt: allow GPTBot, ClaudeBot, PerplexityBot,
      Google-Extended, CCBot). We _want_ training/citation here.
- [ ] **Server-rendered text** (Phase 1) — without it, AI bots see nothing.
- [ ] **Answer-first writing** — every section opens with the direct answer; use
      definitive, factual statements ("Noureddine Laktab is a full-stack
      developer specializing in React and Laravel based in Morocco").
- [ ] **Entity consistency everywhere** — identical bio/title/links across web so
      engines build a confident entity for "Noureddine Laktab".
- [ ] **Be present where AI grounds answers**: Wikipedia-adjacent profiles,
      GitHub (rich README profile), LinkedIn, dev.to, Stack Overflow, Reddit,
      Crunchbase/About.me — AI engines pull from these.
- [ ] **FAQ + how-to content** with schema — directly extractable answers.
- [ ] Track AI visibility: periodically ask ChatGPT/Claude/Perplexity
      "who is Noureddine Laktab?" / "recommend a React Laravel developer in
      Morocco" and watch whether/how you're cited.

---

## Phase 7 — Off-page: authority, backlinks & the Reddit play

Rankings need external signals. For a personal brand, consistent presence +ome
quality links beats volume.

- [ ] **Reddit (now #2 most-visible domain in Google + heavily used by AI).**
      Do NOT spam links. Strategy: pick subreddits (r/webdev, r/reactjs,
      r/laravel, r/devops, r/forhire, r/morocco, r/developpeurs), give genuinely
      helpful, detailed answers for ~2 weeks before any self-reference, and only
      link your portfolio/blog when it truly answers the question. These threads
      themselves rank and get cited by AI — your name + expertise become
      associated with the topics.
- [ ] **GitHub** — polished profile README (the AI/Google "about you" source),
      pinned repos, good project READMEs that link to laktab.dev. Keep handle
      consistent with JSON-LD `sameAs`.
- [ ] **dev.to / Hashnode / Medium** — republish blog posts with a canonical tag
      pointing back to laktab.dev (gets you reach + a backlink without duplicate
      content penalty).
- [ ] **LinkedIn** — complete profile, same title/bio, post articles linking the
      site; LinkedIn profiles rank for names.
- [ ] **Stack Overflow / GitHub Discussions** — answer in your niche; profile
      links count.
- [ ] **Directories / communities** — Moroccan dev communities, freelance
      platforms, Awesome lists, conference/meetup pages.
- [ ] **Guest posts / podcasts / interviews** where natural — strong backlinks.
- [ ] Goal: a steady trickle of _relevant_ links + mentions, name used
      consistently → builds the "Noureddine Laktab" entity.

---

## Phase 8 — Measurement & iteration

- [ ] **Google Search Console** — impressions, queries, CTR, indexing coverage,
      Core Web Vitals; find queries you're on page 2 for and improve those pages.
- [ ] **Bing Webmaster Tools** (feeds ChatGPT search).
- [ ] **Vercel Speed Insights / Analytics** — already live; watch CWV + traffic.
- [ ] **Lighthouse CI** — already wired into GitHub Actions; keep scores ≥90.
- [ ] **Rank tracking** for your target keywords (even a simple monthly manual
      check, or a free tier tool).
- [ ] **AI-citation check** (Phase 6) monthly.
- [ ] Review quarterly; double down on what's gaining impressions.

---

## Recommended execution order (TL;DR)

1. **Phase 0** fixes + robots + sitemap + Search Console (1 day).
2. **Phase 1** prerendering (`vite-react-ssg`) + `vercel.json` + per-route head
   — _the make-or-break technical step._
3. **Phase 2** content depth + per-project case-study pages.
4. **Phase 5** structured data expansion.
5. **Phase 4** blog engine (consider Astro) + **Phase 6** AEO writing patterns.
6. **Phase 3** trilingual (EN/FR/AR) — your differentiator.
7. **Phase 7** ongoing off-page / Reddit / GitHub / dev.to.
8. **Phase 8** measure and iterate continuously.

> Biggest levers, ranked: **(1) prerender the SPA**, **(2) per-project + blog
> content with unique URLs**, **(3) entity consistency + structured data**,
> **(4) trilingual pages**, **(5) Reddit/dev.to authority building**.

## Sources / research

- React/SPA SEO needs SSR/SSG/prerender; AI crawlers don't run JS:
  luminousdigitalvisions.com, fuelonline.com, nuxtseo.com (JS SEO 2026 guides).
- Reddit = #2 most-visible site in Google 2026; engage authentically, don't
  spam: replyagent.ai, blog.mean.ceo.
- Portfolio on-page (keyword map, descriptive headings, image text): wix.com
  portfolio SEO guide.
- AEO / answer-engine optimization (entity consistency, answer-first, schema):
  cxl.com, amsive.com, almcorp.com, frase.io, hubspot.com.
