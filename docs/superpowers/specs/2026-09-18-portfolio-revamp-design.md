# Portfolio revamp — design spec (v2, after admissions-professor review)

Date: 2026-09-18. Site: https://aaron-yin.com (GitHub Pages, branch `main`, path `/`, CNAME `aaron-yin.com`, auto-deploys on push).

## Goal

Rebuild aaron-yin.com as an academic profile for PhD applications (Fall 2027, AI / CS with AI focus). When a professor clicks from a cold email, one screen must say who Aaron is, what his published thread is, what he wants to do next, and where the three strongest papers are. Honest throughout; no hype, no scoreboard.

## Constraints

- Static: one `index.html`, one `static/styles/site.css`, one small `static/js/site.js`. No build step, no framework, no third-party JS besides the existing gtag snippet. Google Fonts (Fraunces, Inter) with system fallbacks.
- Author lists in published order, in full, name bolded. No truncating "et al." that hides position.
- Site and CV PDF must agree on every claim (TRL wording, patent status, D-WIS title, RL paper status).
- Accessibility: landmarks, skip link, visible focus, `prefers-reduced-motion` honored, AA contrast in both themes.

## Visual direction: editorial scholar

- Light: ground `#faf7f2`, ink `#141414`, muted `#5a5650`, accent `#0b5d5b`, rule `rgba(20,20,20,.12)`. Dark via `prefers-color-scheme` only: ground `#141312`, ink `#ede8e0`, muted `#a39d94`, accent `#7fc7c2`.
- Type: Fraunces for name and headings, IBM Plex Sans for body, IBM Plex Mono for labels, years and identifiers (Inter dropped as too generic). 17px/1.6 desktop, 16px mobile, measure ≤ 68ch.
- ≥ 960px: sticky 300px left column, scrolling right column, 72px gap, 1180px max. < 960px: single column, compact header (72px portrait, name, title), sticky horizontal section nav.
- Motion: none beyond hover/focus states. Active-section nav highlight via IntersectionObserver (progressive enhancement).

## Content

### Sidebar
Portrait (square 640px WebP), "Aaron Ontoyin Yin", "AI Researcher, Vela Partners", "Applying to PhD programs, Fall 2027", "Ghana (remote)". Nav: Intro · Selected papers · About · Research · Publications · Experience · Software · News · Honors & Education. Links: Email, Google Scholar, GitHub, LinkedIn, Semantic Scholar (author 2330397046), ORCID 0009-0002-9142-5890. No citation counts anywhere.

### 1. Intro (`#intro`) and About (`#about`)
Order on the page: H1 + one-liner (`#intro`), then the three selected papers (`#selected`, compact: title, surname-only author line with Yin bolded, venue, one sentence), then the two bio paragraphs and CTA row under an "About" heading (`#about`). This keeps name, thesis and strongest papers on the first screen at 1440×900 and 1024×768. Text, verbatim:

> I work on decision-making systems that can explain themselves. My published work uses large language models to induce interpretable decision models — trees, rule ensembles, executable code — from unstructured data, and to benchmark them. I want to extend this to sequential decisions: agents that learn what to ask, when to act, and when to stop.

> I am an AI researcher at Vela Partners, a venture firm whose research group works on interpretable, LLM-based decision-making. Since January 2024 I have co-authored eight papers from that group, all joint with collaborators at the University of Oxford (and, for one, Georgia Tech), including GPTree (LLM-powered decision trees; I am a named inventor on the US patent application), Random Rule Forest, and VCBench (Springer, Computing Conference 2026). I built the 20,000-profile founder dataset that most of this work runs on, and I started and remain a core contributor to think-reason-learn, the group's open-source framework.

> I did my B.Sc. in Electrical & Electronic Engineering at the University of Mines and Technology, Ghana (First Class, 3.91/4.0). There I worked on UMaT's Drillbotics entries in 2023 and 2024, building a digital-twin planner for directional drilling and an LSTM model for kick prediction, and was vice president of the robotics club. I am applying to PhD programs for Fall 2027. I want to work on reinforcement learning and sequential decision-making, particularly where decisions must be interpretable or verifiable, and I am interested in applying this to physical systems.

CTA row (end of About): Publications · Email.

### 2. Selected papers (`#selected`)
Three compact entries, visible above the fold at 1440px and 1024px. Each: title (linked), authors (bolded self), venue, one sentence in Aaron's words.
1. Random Rule Forest (2nd of 7, arXiv:2505.24622, 2025).
2. From Limited Data to Rare-event Prediction (2nd of 7, arXiv:2509.08140, 2025).
3. VCBench (Springer LNNS, Computing Conference 2026, DOI 10.1007/978-3-032-24804-6_10).

### 3. Research (`#research`)
A "Direction" paragraph, no card:
> How should an agent decide which costly signal to gather next, and when to stop, when its policy must remain inspectable? Can LLM-induced rule sets serve as interpretable policies rather than static classifiers? What does verifiable reasoning look like when the decision unfolds over time?

Then three cards:
- **Interpretable decision-making with LLMs** — GPTree, GPT-HTree, RRF, LLM-AR, Stochastic→Verifiable, CoFEE. Two sentences on the idea, one on role (co-inventor of GPTree; implementation in think-reason-learn).
- **Benchmarks and data** — VCBench, the founder dataset, rare-event prediction.
- **Applied ML for physical and industrial systems** — Drillbotics (digital-twin planner; LSTM kick prediction, ~89% recall), D-WIS well monitoring, AI-powered smart metering capstone. One sentence: this is where the interest in physical systems comes from.

### 4. Publications (`#publications`)
Grouped by year, newest first, by month within year. Entry: title (linked), full authors, venue line, links (`DOI` / `arXiv` / `PDF`), one-sentence summary in Aaron's words. "Contribution" line only where concrete (founder dataset; think-reason-learn implementation; LSTM experiments). Citation format: `arXiv:2505.24622`.

2026
- CoFEE: Reasoning Control for LLM-Based Feature Discovery. Westermann, Griffin, **Yin**, Salifu, Yagiz Ihlamur, Amoaba, Ternasky, Alican, Yigit Ihlamur. arXiv:2604.21584, Apr 2026.
- From Stochastic Answers to Verifiable Reasoning: Interpretable Decision-Making with LLM-Generated Code. Mahesh, Griffin, Alican, Ternasky, Salifu, Amoaba, Yagiz Ihlamur, **Yin**, Laryea, Samuel, Yigit Ihlamur. arXiv:2603.13287, Mar 2026.
- Integrating Machine Learning with Domain Expertise for Smarter Real-Time Well Monitoring Using D-WIS Interface. Mensah, **Yin**, Kowfie, Intuah, Martha, Segoe, Amorin. SPE Ghana Biennial International Conference & Exhibition, May 2026. No link until SPE provides one.
- VCBench: Benchmarking LLMs in Venture Capital. Chen, Ternasky, Kwesi, Griffin, **Yin**, Salifu, Amoaba, Mu, Alican, Ihlamur. In *Intelligent Computing* (Computing Conference 2026, London), Lecture Notes in Networks and Systems, Springer, pp. 167–187. DOI 10.1007/978-3-032-24804-6_10; arXiv:2509.14448.

2025
- LLM-AR: LLM-powered Automated Reasoning Framework. Chen, Ternasky, **Yin**, Mu, Alican, Ihlamur. arXiv:2510.22034, Oct 2025.
- From Limited Data to Rare-event Prediction: LLM-powered Feature Engineering and Multi-model Learning in Venture Capital. Kumar, **Yin**, Salifu, Amoaba, Samuel, Alican, Ihlamur. arXiv:2509.08140, Sep 2025.
- Random Rule Forest (RRF): Interpretable and Manageable Ensembles of LLM-Generated Questions for Predicting Success from Unstructured Data. Griffin, **Yin**, Vidaurre, Koyluoglu, Ternasky, Alican, Ihlamur. arXiv:2505.24622, May 2025.
- Dual Approach in Autonomous Directional Drilling: Innovations with Drillbotics 1.5 Inch Automated RSS and Virtual Rig Platforms. Full author list from OnePetro. SPE/IADC International Drilling Conference and Exhibition, Mar 2025. OnePetro link.
- GPT-HTree: A Decision Tree Framework Integrating Hierarchical Clustering and Large Language Models for Explainable Classification. Pei, Alican, **Yin**, Ihlamur. arXiv:2501.13743, Jan 2025.

2024
- GPTree: Towards Explainable Decision-Making via LLM-powered Decision Trees. Xiong, Ihlamur, Alican, **Yin**. arXiv:2411.08257, Nov 2024.

Manuscripts
- Learning What to Ask and When to Stop: Cost-Aware Sequential Founder Evaluation. Yuhang Ye, Fuat Alican, Ben Griffin, **Aaron Ontoyin Yin**, Yigit Ihlamur. Manuscript under revision (not yet published), 2026. Link: https://vela.partners/research/cost-aware-sequential-evaluation.

Patents
- Large language model (LLM) powered decision trees. Ihlamur, Xiong, Alican, **Yin**. US patent application 19/357,996, filed 2026 (provisional 2024). No link.

No abstracts, no BibTeX, no per-paper citation counts.

### 5. Experience (`#experience`)
- **Vela Partners**, San Francisco (remote from Ghana) — AI Researcher — Jan 2024–present. Bullets: built the 20,000+ founder-profile research dataset; co-invented GPTree; contributed to VCBench; started think-reason-learn and remain a core contributor.
- **Drillbotics (SPE DSATS)**, UMaT team — 2023 & 2024. Digital-twin directional drilling planner (2023; UMaT topped the virtual category); LSTM kick-prediction model, ~89% recall (2024).
- **GRIDCo** — power-grid data dashboard — 2025. One line.

### 6. Software (`#software`)
think-reason-learn: LLM-native interpretable ML framework ("scikit-learn with reasoning built in"), MIT, `pip install think-reason-learn`, unifies GPTree, Random Rule Forest, Reasoned Rule Mining, Policy Induction. Aaron's role: started the library and remains a core contributor. Links: docs (thinkreasonlearn.com), GitHub (Vela-Research/think-reason-learn).

### 7. News (`#news`)
Research events only, newest first:
- Jun 2026 — VCBench published in *Intelligent Computing* (Springer), Computing Conference 2026, London.
- May 2026 — D-WIS well-monitoring paper at SPE Ghana Biennial International Conference & Exhibition.
- Apr 2026 — CoFEE on arXiv.
- Mar 2026 — From Stochastic Answers to Verifiable Reasoning on arXiv.
- Oct 2025 — LLM-AR on arXiv.
- Sep 2025 — VCBench and rare-event prediction preprints on arXiv.
- May 2025 — Random Rule Forest on arXiv.
- Mar 2025 — Drillbotics paper at SPE/IADC Drilling Conference.
- Jan 2025 — GPT-HTree on arXiv.
- Nov 2024 — GPTree on arXiv.
- Aug 2024 — UMaT Drillbotics team wins global SPE competition (MyJoyOnline link).
- 2023 — UMaT tops Drillbotics virtual directional-drilling category (UMaT news link).

### 8. Honors & Education (`#honors`)
- Honors: Best Student in Software Engineering, UMaT Excellence Awards (2024). IEEEXtreme programming competition, 1st among Ghanaian teams (2023).
- Leadership: Vice President, Aaenics UMaT Robotics Club (2024/25). Academic Board Member, Electrical & Electronic Engineering Students' Association (2024/25).
- Education: B.Sc. Electrical & Electronic Engineering, University of Mines and Technology, Tarkwa, 2022–2025. First Class, 3.91/4.0. Capstone: AI-powered smart metering and analytics system.

Cut: high-school items, certifications, Microsoft ambassador, GDSC, IEEE/SPE memberships, Vela OS microservices, portfolio-investment and precision claims.

### Footer
Email · "© 2026 Aaron Ontoyin Yin" · "Updated Sep 2026".

## SEO / GEO
- `<title>`: "Aaron Ontoyin Yin — AI Researcher, Vela Partners".
- Meta description ≤ 155 chars from the one-liner. Canonical `https://aaron-yin.com/`. `robots.txt` and `sitemap.xml` on aaron-yin.com with current lastmod.
- OG/Twitter image 1200×630 (`static/images/og.png`) from portrait + name + title.
- JSON-LD `@graph`: `Person` (name, alternateName ["Aaron Yin", "A. O. Yin"], jobTitle, worksFor Vela Partners, alumniOf UMaT, sameAs Scholar/GitHub/LinkedIn/Semantic Scholar/arXiv/ORCID) + one `ScholarlyArticle` per paper.
- Favicon and apple-touch-icon from the signature mark.

## Files
Keep: `CNAME`, `robots.txt`, `sitemap.xml`, `404.html` (restyled), `static/images/sign.png|webp`, `docker-compose.yml`, `README.md`.
Add: `static/styles/site.css`, `static/js/site.js`, `static/images/portrait.webp`, `static/images/og.png`, `.gitignore` (`.DS_Store`).
Delete: `static/docs/aaron-ontoyin-yin-cv.pdf` (CV link removed until the CV is updated; re-add later), `static/styles/styles.css`, `static/js/*.js`, `static/images/aaron.jpg`, `static/images/og-ai-scholar.png`, `static/images/signature.jpg`, `static/images/gallery/`, `static/images/recommenders/`, tracked `.DS_Store` files.

## CV sync (later, by Aaron; the site links no CV until then)
Change: "lead developer" → "started … core contributor"; ECML-PKDD "submitted" → "manuscript under revision"; patent → "US patent application 19/357,996 (provisional 2024)"; D-WIS title matches the certificate; add RRF and CoFEE; remove high-school items and certifications.

## Verification
- Serve locally; check 1440/1024/390 widths, light and dark; selected papers visible above the fold at 1440 and 1024.
- HTML validation; Lighthouse ≥ 95 performance/accessibility/SEO; JSON-LD in Rich Results test.
- Every external link returns 200.

No Talks, Teaching, or Mentoring sections: none exist.
