# Portfolio Revamp Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace aaron-yin.com with the single-page editorial academic profile in `docs/superpowers/specs/2026-09-18-portfolio-revamp-design.md`.

**Architecture:** One hand-written `index.html` carrying all content and JSON-LD; one `static/styles/site.css`; one ~40-line `static/js/site.js` for active-nav highlighting. Assets pre-generated with Pillow/cwebp and committed. No build step.

**Tech Stack:** HTML, CSS, vanilla JS, Google Fonts (Fraunces, Inter), Pillow + cwebp for assets, `python3 -m http.server` for local checks.

---

### Task 1: Assets
**Files:** create `static/images/portrait.webp` (640×640 square crop of `static/images/aaron.jpg`, face centred), `static/images/og.png` (1200×630: portrait left, name + "AI Researcher, Vela Partners" right, paper background), `static/images/icon-180.png` and `static/images/favicon.png` from `sign.png`; add `.gitignore` with `.DS_Store`.
- [ ] Generate with a throwaway Pillow script in the scratchpad. Verify sizes with `python3 -c "from PIL import Image; ..."`.

### Task 2: index.html
**Files:** rewrite `index.html` per spec sections 1–8, head metadata, JSON-LD `@graph` (Person + ScholarlyArticle per paper), gtag kept.
- [ ] Content pasted from spec verbatim; author lists from arXiv/Crossref; Drillbotics full 25-author list from Crossref DOI 10.2118/223656-MS.
- [ ] Check: `grep -c "Aaron Ontoyin Yin" index.html` ≥ 12 (one per paper + intro + title); no "lead developer"; no "et al."; no "48 citations".

### Task 3: site.css + site.js
**Files:** create `static/styles/site.css`, `static/js/site.js`; delete `static/styles/styles.css`, `static/js/script.js`, `static/js/smooth-scrollbar.js`.
- [ ] Layout per spec (sticky sidebar ≥ 960px, single column below), tokens for light/dark, reduced-motion guard, print stylesheet (sidebar becomes header, links show URLs).
- [ ] JS: IntersectionObserver marks `nav a[aria-current="true"]`; year in footer. Nothing else.

### Task 4: SEO files, 404, cleanup
**Files:** modify `robots.txt`, `sitemap.xml` (aaron-yin.com, lastmod 2026-09-18), restyle `404.html` to use `site.css`; delete `static/images/aaron.jpg`, `og-ai-scholar.png`, `signature.jpg`, `gallery/`, `recommenders/`, `static/docs/aaron-ontoyin-yin-cv.pdf`, tracked `.DS_Store`.
- [ ] `git rm` the deletions; `git status` shows no stray files.

### Task 5: Verify
- [ ] `python3 -m http.server 8080` and screenshot at 1440, 1024, 390 (light and dark) with Chrome; selected papers visible above the fold at 1440 and 1024.
- [ ] `tidy -q -e index.html` (or `npx html-validate`) → no errors.
- [ ] Link check: extract all `https?://` hrefs, `curl -sI -o /dev/null -w "%{http_code} %{url_effective}\n"` each; all 2xx/3xx (OnePetro and Springer may 403 bots; note, don't fail).
- [ ] JSON-LD parses: `python3 -c "import json,re;..."` on the script block.
- [ ] Lighthouse via Chrome DevTools if available; target ≥ 95 perf/a11y/SEO.
- [ ] Do not commit or push without explicit user confirmation (CLAUDE.md).
