(function () {
  "use strict";

  var cfg = window.KREVYON_CONFIG || {};

  /* ---------------- contact links + brand copy (driven by config.js) ---------------- */

  function whatsappUrl() {
    var base = cfg.whatsapp || "#";
    var msg = cfg.whatsappMessage;
    if (!msg) return base;
    var sep = base.indexOf("?") === -1 ? "?" : "&";
    return base + sep + "text=" + encodeURIComponent(msg);
  }

  var linkTargets = {
    whatsapp: function () { return whatsappUrl(); },
    instagram: function () { return cfg.instagram || "#"; },
    email: function () { return cfg.email ? "mailto:" + cfg.email : "#"; },
  };

  document.querySelectorAll("[data-link]").forEach(function (el) {
    var kind = el.getAttribute("data-link");
    var resolver = linkTargets[kind];
    if (!resolver) return;
    el.setAttribute("href", resolver());
    if (kind === "whatsapp" || kind === "instagram") {
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener noreferrer");
    }
  });

  document.querySelectorAll("[data-config]").forEach(function (el) {
    var key = el.getAttribute("data-config");
    if (cfg[key]) el.textContent = cfg[key];
  });

  var yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------- sticky nav shadow on scroll ---------------- */

  var nav = document.querySelector("[data-nav]");
  if (nav) {
    var setScrolled = function () {
      nav.setAttribute("data-scrolled", window.scrollY > 8 ? "true" : "false");
    };
    setScrolled();
    window.addEventListener("scroll", setScrolled, { passive: true });
  }

  /* ---------------- mobile menu ---------------- */

  var toggle = document.querySelector("[data-nav-toggle]");
  var mobile = document.querySelector("[data-nav-mobile]");

  if (toggle && mobile) {
    var closeMenu = function () {
      toggle.setAttribute("aria-expanded", "false");
      mobile.hidden = true;
    };
    var openMenu = function () {
      toggle.setAttribute("aria-expanded", "true");
      mobile.hidden = false;
    };

    toggle.addEventListener("click", function () {
      var isOpen = toggle.getAttribute("aria-expanded") === "true";
      if (isOpen) closeMenu(); else openMenu();
    });

    mobile.querySelectorAll("[data-nav-link]").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* ---------------- scroll reveal (with per-group stagger) ---------------- */

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var revealEls = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]"));
  var revealLineEls = Array.prototype.slice.call(document.querySelectorAll("[data-reveal-line]"));

  if (!reduceMotion) {
    revealEls.forEach(function (el) {
      if (el.style.getPropertyValue("--reveal-delay")) return;
      var parent = el.parentElement;
      if (!parent) return;
      var siblings = Array.prototype.filter.call(parent.children, function (c) {
        return c.hasAttribute("data-reveal");
      });
      if (siblings.length < 2) return;
      var index = siblings.indexOf(el);
      var delay = Math.min(index * 0.07, 0.42);
      el.style.setProperty("--reveal-delay", delay + "s");
    });
  }

  var allRevealTargets = revealEls.concat(revealLineEls);
  if (allRevealTargets.length) {
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
      );
      allRevealTargets.forEach(function (el) { io.observe(el); });
    } else {
      allRevealTargets.forEach(function (el) { el.classList.add("is-visible"); });
    }
  }

  /* ---------------- build tabs (accessible tablist, wrapping pill tabs) ---------------- */

  var build = document.querySelector("[data-build]");
  if (build) {
    var tabs = Array.prototype.slice.call(build.querySelectorAll("[data-build-tab]"));
    var panels = Array.prototype.slice.call(build.querySelectorAll("[data-build-panel]"));
    var pendingSwitch = null;

    var activateBuildTab = function (index, opts) {
      var focusTab = opts && opts.focus;
      tabs.forEach(function (tab, i) {
        var selected = i === index;
        tab.setAttribute("aria-selected", selected ? "true" : "false");
        tab.tabIndex = selected ? 0 : -1;
      });

      // A switch already in flight (fast double-click, or held-down arrow
      // key outrunning the 150ms fade) must be resolved synchronously first
      // — otherwise its stale setTimeout fires later and force-reveals the
      // wrong panel on top of whatever this call ends up showing.
      if (pendingSwitch) {
        clearTimeout(pendingSwitch.timer);
        pendingSwitch.current.hidden = true;
        pendingSwitch.current.classList.remove("build__panel--out");
        pendingSwitch.next.hidden = false;
        pendingSwitch = null;
      }

      var current = panels.filter(function (p) { return !p.hidden; })[0];
      var next = panels[index];

      // Fade the outgoing panel out before swapping, so a tab change reads as
      // a crossfade rather than one div vanishing and another appearing.
      if (current && current !== next && !reduceMotion) {
        current.classList.add("build__panel--out");
        var timer = setTimeout(function () {
          current.hidden = true;
          current.classList.remove("build__panel--out");
          next.hidden = false;
          pendingSwitch = null;
        }, 150);
        pendingSwitch = { timer: timer, current: current, next: next };
      } else {
        panels.forEach(function (panel, i) { panel.hidden = i !== index; });
      }

      if (focusTab) tabs[index].focus();
    };

    tabs.forEach(function (tab, index) {
      tab.addEventListener("click", function () { activateBuildTab(index); });
      tab.addEventListener("keydown", function (e) {
        var lastIndex = tabs.length - 1;
        var next = null;
        if (e.key === "ArrowRight" || e.key === "ArrowDown") next = index === lastIndex ? 0 : index + 1;
        else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = index === 0 ? lastIndex : index - 1;
        else if (e.key === "Home") next = 0;
        else if (e.key === "End") next = lastIndex;
        if (next === null) return;
        e.preventDefault();
        activateBuildTab(next, { focus: true });
      });
    });

    activateBuildTab(0);
  }

  /* ---------------- FAQ accordion ---------------- */

  var faqTriggers = Array.prototype.slice.call(document.querySelectorAll("[data-faq-trigger]"));

  var closeFaqPanel = function (trigger, panel, animate) {
    trigger.setAttribute("aria-expanded", "false");
    panel.setAttribute("data-open", "false");
    if (!animate) { panel.hidden = true; return; }
    var handler = function () {
      panel.hidden = true;
      panel.removeEventListener("transitionend", handler);
    };
    panel.addEventListener("transitionend", handler);
  };

  faqTriggers.forEach(function (trigger) {
    var panel = document.getElementById(trigger.getAttribute("aria-controls"));
    if (!panel) return;

    trigger.addEventListener("click", function () {
      var isOpen = trigger.getAttribute("aria-expanded") === "true";

      faqTriggers.forEach(function (other) {
        if (other === trigger) return;
        var otherPanel = document.getElementById(other.getAttribute("aria-controls"));
        if (otherPanel && otherPanel.getAttribute("data-open") === "true") {
          closeFaqPanel(other, otherPanel, true);
        }
      });

      if (isOpen) {
        closeFaqPanel(trigger, panel, true);
      } else {
        trigger.setAttribute("aria-expanded", "true");
        panel.hidden = false;
        requestAnimationFrame(function () {
          panel.setAttribute("data-open", "true");
        });
      }
    });
  });

  /* ---------------- hero + card mouse interactions ---------------- */

  var canHover = window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  var scene = document.querySelector("[data-hero-visual]");
  if (scene && canHover && !reduceMotion) {
    var parallaxEls = Array.prototype.slice.call(scene.querySelectorAll("[data-parallax]"));
    var ticking = false;
    var lastEvent = null;

    var applyParallax = function () {
      ticking = false;
      if (!lastEvent) return;
      var rect = scene.getBoundingClientRect();
      var px = (lastEvent.clientX - rect.left) / rect.width - 0.5;
      var py = (lastEvent.clientY - rect.top) / rect.height - 0.5;
      parallaxEls.forEach(function (el) {
        var depth = parseFloat(el.getAttribute("data-parallax-depth") || "10");
        el.style.setProperty("--tx", (px * depth).toFixed(2) + "px");
        el.style.setProperty("--ty", (py * depth).toFixed(2) + "px");
      });
    };

    scene.addEventListener("mousemove", function (e) {
      lastEvent = e;
      if (!ticking) { ticking = true; requestAnimationFrame(applyParallax); }
    });
    scene.addEventListener("mouseleave", function () {
      parallaxEls.forEach(function (el) {
        el.style.setProperty("--tx", "0px");
        el.style.setProperty("--ty", "0px");
      });
    });
  }

  if (canHover) {
    var spotlightEls = document.querySelectorAll(".glass-card, .value-item");
    var spotlightTicking = false;
    var spotlightLastEl = null;
    var spotlightLastEvent = null;

    var applySpotlight = function () {
      spotlightTicking = false;
      if (!spotlightLastEl || !spotlightLastEvent) return;
      var rect = spotlightLastEl.getBoundingClientRect();
      spotlightLastEl.style.setProperty("--mx", (spotlightLastEvent.clientX - rect.left) + "px");
      spotlightLastEl.style.setProperty("--my", (spotlightLastEvent.clientY - rect.top) + "px");
    };

    spotlightEls.forEach(function (el) {
      el.addEventListener("mousemove", function (e) {
        spotlightLastEl = el;
        spotlightLastEvent = e;
        if (!spotlightTicking) { spotlightTicking = true; requestAnimationFrame(applySpotlight); }
      });
    });
  }
})();
