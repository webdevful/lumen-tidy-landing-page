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

    const initWebflowSliders = () => {
      document.querySelectorAll("[data-slider]").forEach((slider) => {
        const slides = [...slider.querySelectorAll("[data-slide]")];
        const count = slider.querySelector("[data-slide-count]");
        let current = 0;
        const show = (next) => {
          current = (next + slides.length) % slides.length;
          slides.forEach((slide, index) => {
            const active = index === current;
            slide.classList.toggle("active", active);
            slide.setAttribute("aria-hidden", String(!active));
          });
          if (count) count.textContent = `${current + 1} / ${slides.length}`;
        };
        slider.querySelector("[data-prev]")?.addEventListener("click", () => show(current - 1));
        slider.querySelector("[data-next]")?.addEventListener("click", () => show(current + 1));
        let timer = window.setInterval(() => show(current + 1), 6500);
        slider.addEventListener("mouseenter", () => window.clearInterval(timer));
        slider.addEventListener("mouseleave", () => { timer = window.setInterval(() => show(current + 1), 6500); });
        show(0);
      });
    };
    initWebflowSliders();

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
