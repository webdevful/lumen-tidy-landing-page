(function () {
  "use strict";

  const ready = () => {
    const header = document.querySelector("[data-navbar]");
    requestAnimationFrame(() => header?.classList.add("is-ready"));

    const hero = document.querySelector("[data-hero-scroll]");
    const heroImages = hero?.querySelector(".header-images-wrapper");
    const heroContent = hero?.querySelector(".header-content");
    const heroCards = hero ? [...hero.querySelectorAll(".header-image-wrapper")] : [];
    const desktopVectors = [
      [45, 110],
      [30, 80],
      [0, 70],
      [-30, 90],
      [-45, 120],
    ];
    const mobileVectors = [
      [50, 40],
      [35, 20],
      [0, 5],
      [-35, 25],
      [-45, 45],
    ];
    const syncHeroScroll = () => {
      if (!hero || !heroImages) return;
      const distance = Math.max(hero.offsetHeight, 1);
      const progress = Math.min(Math.max(-hero.getBoundingClientRect().top / distance, 0), 1);
      const mobile = window.innerWidth <= 700;
      const end = mobile ? .7 : .58;
      const phase = Math.min(progress / end, 1);
      const vectors = mobile ? mobileVectors : desktopVectors;
      heroImages.style.transform = `translateY(${phase * 5}%) scale(${1 - phase})`;
      heroImages.style.opacity = String(1 - phase);
      heroCards.forEach((card, index) => {
        const [x, y] = vectors[index] || [0, 0];
        card.style.transform = `translate(${x * phase}vw, ${y * phase}%)`;
      });
      if (heroContent) {
        const contentPhase = mobile ? Math.min(Math.max((progress - .15) / .55, 0), 1) : 0;
        heroContent.style.transform = `translateY(${contentPhase * 8}rem)`;
      }
    };
    window.addEventListener("scroll", syncHeroScroll, { passive: true });
    window.addEventListener("resize", syncHeroScroll);
    syncHeroScroll();

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
