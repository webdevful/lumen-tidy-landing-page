(function () {
  "use strict";

  const ready = () => {
    const header = document.querySelector("[data-navbar]");
    requestAnimationFrame(() => header?.classList.add("is-ready"));

    const toggle = document.querySelector("[data-menu-toggle]");
    const menu = document.querySelector("[data-menu]");
    const closeMenu = () => {
      toggle?.setAttribute("aria-expanded", "false");
      menu?.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    };
    toggle?.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(open));
      menu?.classList.toggle("is-open", open);
      document.body.classList.toggle("menu-open", open);
    });
    menu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
    window.addEventListener("resize", () => { if (window.innerWidth > 990) closeMenu(); });

    const reveals = document.querySelectorAll(".reveal");
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const direction = entry.target.classList.contains("reveal-left")
              ? "translateX(-8px)"
              : entry.target.classList.contains("reveal-right")
                ? "translateX(8px)"
                : "translateY(8px)";
            entry.target.animate(
              [{ transform: direction, filter: "saturate(.85)" }, { transform: "translate(0)", filter: "saturate(1)" }],
              { duration: 180, easing: "cubic-bezier(.23,1,.32,1)" }
            );
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.13, rootMargin: "0px 0px -5%" });
      reveals.forEach((item) => observer.observe(item));
    }

    const lazyBackgrounds = document.querySelectorAll("[data-lazy-bg]");
    const loadBackgrounds = () => {
      if (window.scrollY < 600) return;
      lazyBackgrounds.forEach((target) => {
        target.style.backgroundImage = `url("${target.dataset.lazyBg}")`;
      });
      window.removeEventListener("scroll", loadBackgrounds);
    };
    window.addEventListener("scroll", loadBackgrounds, { passive: true });
    loadBackgrounds();

    document.querySelector("[data-quote-form]")?.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      const status = form.querySelector("[data-form-status]");
      if (status) status.textContent = "Thanks — your cleaning request is ready. We’ll be in touch shortly.";
      form.reset();
    });
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", ready);
  else ready();
})();
