// Active-section highlight in the sidebar nav. Progressive enhancement only.
(() => {
  const links = [...document.querySelectorAll('.side__nav a[href^="#"]')];
  const byId = new Map(links.map((a) => [a.getAttribute('href').slice(1), a]));
  const sections = [...byId.keys()].map((id) => document.getElementById(id)).filter(Boolean);
  if (!('IntersectionObserver' in window) || !sections.length) return;

  const setCurrent = (id) => {
    for (const [key, a] of byId) {
      if (key === id) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    }
  };

  const visible = new Map();
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) visible.set(e.target.id, e.isIntersecting ? e.intersectionRatio : 0);
    let best = null, bestRatio = 0;
    for (const s of sections) {
      const r = visible.get(s.id) || 0;
      if (r > bestRatio) { best = s.id; bestRatio = r; }
    }
    if (best) setCurrent(best);
  }, { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] });
  sections.forEach((s) => io.observe(s));

  const y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());
})();
