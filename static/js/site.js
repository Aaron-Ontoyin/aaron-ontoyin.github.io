// Hash router: one page (article.pg) visible at a time. Without JS, all pages stack.
(() => {
  const pages = [...document.querySelectorAll('article.pg')];
  const nav = [...document.querySelectorAll('.top__nav a')];
  const folioN = document.getElementById('folio-n');
  const folioT = document.getElementById('folio-t');
  const baseTitle = 'Aaron Ontoyin Yin';
  if (!pages.length) return;

  const pageFor = (id) => {
    if (!id) return pages[0];
    const direct = pages.find((p) => p.id === id);
    if (direct) return direct;
    const el = document.getElementById(id);
    return el ? el.closest('article.pg') || pages[0] : pages[0];
  };

  let current = null;
  const show = (hash, scrollTop) => {
    const id = decodeURIComponent((hash || '').replace(/^#\/?/, ''));
    const page = pageFor(id);
    const isSub = id && id !== page.id;
    if (page !== current) {
      pages.forEach((p) => { p.classList.toggle('is-active', p === page); p.hidden = false; });
      nav.forEach((a) => {
        if (a.getAttribute('href') === '#' + page.id) a.setAttribute('aria-current', 'page');
        else a.removeAttribute('aria-current');
      });
      if (folioN) folioN.textContent = page.dataset.n;
      if (folioT) folioT.textContent = page.dataset.title;
      document.title = page.id === 'home' ? baseTitle + ' — AI Researcher, Vela Partners' : page.dataset.title + ' — ' + baseTitle;
      current = page;
    }
    // Browsers scroll to the hash target on their own; override so page-level
    // hashes land at the top and sub-anchors clear the sticky nav.
    requestAnimationFrame(() => {
      if (isSub) {
        const el = document.getElementById(id);
        const top = document.querySelector('.top');
        if (el) {
          const offset = (top ? top.getBoundingClientRect().height : 0) + 16;
          window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset });
        }
      } else if (scrollTop) {
        window.scrollTo({ top: 0 });
      }
    });
  };

  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  window.addEventListener('hashchange', () => show(location.hash, true));
  show(location.hash, true);
  // Browsers may apply their own scroll-to-hash around load and after fonts land; reapply ours.
  window.addEventListener('load', () => show(location.hash, true), { once: true });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => show(location.hash, true));

  // Arrow keys turn pages when not typing in a field.
  document.addEventListener('keydown', (e) => {
    if (e.altKey || e.metaKey || e.ctrlKey) return;
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)) return;
    const i = pages.indexOf(current);
    if (e.key === 'ArrowRight' && i < pages.length - 1) location.hash = '#' + pages[i + 1].id;
    if (e.key === 'ArrowLeft' && i > 0) location.hash = '#' + pages[i - 1].id;
  });

  const y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());
})();
