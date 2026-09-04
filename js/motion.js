(function () {
  "use strict";

  // Progressive enhancement only: the site is fully usable and animated via
  // CSS + IntersectionObserver (main.js) without GSAP. If the CDN script
  // fails to load or the visitor prefers reduced motion, this file simply
  // does nothing and nothing is left in a stuck/invisible state.
  if (!window.gsap || !window.ScrollTrigger) return;
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  gsap.registerPlugin(ScrollTrigger);

  /* ---------------- showcase panels: layered scale-in, staggered ---------------- */

  // Desktop enters first, then mobile, then tablet — data-motion-order pins
  // that sequence explicitly rather than relying on DOM position.
  var motionPanels = gsap.utils.toArray("[data-motion-panel]");
  if (motionPanels.length) {
    gsap.set(motionPanels, { opacity: 0, y: 44, scale: 0.94, filter: "blur(6px)" });
    motionPanels.forEach(function (panel) {
      var order = parseInt(panel.getAttribute("data-motion-order"), 10);
      if (isNaN(order)) order = 0;
      ScrollTrigger.create({
        trigger: panel,
        start: "top 88%",
        once: true,
        onEnter: function () {
          gsap.to(panel, {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.85,
            ease: "power3.out",
            delay: order * 0.16,
            onComplete: function () { animateMockContent(panel); },
          });
        },
      });
    });
  }

  /* ---------------- device-stack internals: KPI count-up, chart bars, staggered cards --- */

  function countUp(el) {
    var target = parseFloat(el.getAttribute("data-count-to"));
    if (isNaN(target)) return;
    var prefix = el.getAttribute("data-prefix") || "";
    var suffix = el.getAttribute("data-suffix") || "";
    var decimals = parseInt(el.getAttribute("data-decimals"), 10) || 0;
    var obj = { v: 0 };
    gsap.to(obj, {
      v: target,
      duration: 1.3,
      ease: "power2.out",
      onUpdate: function () { el.textContent = prefix + obj.v.toFixed(decimals) + suffix; },
    });
  }

  function animateMockContent(panel) {
    var dash = panel.querySelector(".dash");
    if (dash) {
      dash.classList.add("is-in");
      dash.querySelectorAll("[data-count-to]").forEach(countUp);
    }
    if (panel.classList.contains("tablet-mock")) {
      panel.classList.add("is-in");
    }
  }

  /* ---------------- process line: fills as you scroll through the section ---------------- */

  var processLine = document.querySelector("[data-process-line]");
  var processEl = document.querySelector(".process");
  if (processLine && processEl) {
    gsap.set(processLine, { scaleY: 0 });
    gsap.to(processLine, {
      scaleY: 1,
      ease: "none",
      scrollTrigger: { trigger: processEl, start: "top 75%", end: "bottom 60%", scrub: 0.4 },
    });
  }

  ScrollTrigger.refresh();
})();
