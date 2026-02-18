(() => {
    const ready = (fn) => {
        if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn);
        else fn();
    };

    ready(() => {
        // Year
        const yearEl = document.getElementById("copyright-year");
        if (yearEl) yearEl.textContent = String(new Date().getFullYear());

        // Back to top
        const backToTop = document.getElementById("back-to-top-button");
        const toggleBackToTop = () => {
            if (!backToTop) return;
            backToTop.style.display = window.scrollY > 600 ? "inline-flex" : "none";
        };
        toggleBackToTop();
        window.addEventListener("scroll", toggleBackToTop, { passive: true });

        backToTop?.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });

        // Smooth anchor scrolling with header offset
        document.addEventListener("click", (e) => {
            const a = e.target instanceof Element ? e.target.closest('a[href^="#"]') : null;
            if (!a) return;

            const href = a.getAttribute("href");
            if (!href || href === "#") return;

            const id = href.slice(1);
            const target = document.getElementById(id);
            if (!target) return;

            e.preventDefault();
            const headerOffset = 90;
            const y = target.getBoundingClientRect().top + window.scrollY - headerOffset;
            window.scrollTo({ top: y, behavior: "smooth" });

            history.pushState(null, "", href);

            // Close mobile <details> menu if open
            const menu = document.querySelector("details.nav__menu[open]");
            if (menu) menu.removeAttribute("open");
        });
    });
})();
