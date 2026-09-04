/**
 * Krevyon — carga diferida de GSAP/ScrollTrigger/motion.js.
 *
 * Nada de lo que motion.js anima vive en el primer viewport (entrada del
 * showcase, contador de KPIs, línea de proceso están todos más abajo), así
 * que estos tres scripts —dos de ellos de un CDN externo— no tienen razón
 * para competir por ancho de banda o CPU con el contenido crítico. Se piden
 * recién cuando la página ya terminó de cargar y el hilo principal está
 * libre, y ni siquiera eso si la persona pidió prefers-reduced-motion.
 *
 * Si esta carga falla o nunca llega a completarse (red lenta, CDN caído),
 * el sitio queda igual de completo y visible: motion.js es una mejora
 * puramente progresiva, nunca un requisito para ver el contenido.
 */
(function () {
  "use strict";

  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  function loadScript(src, onload) {
    var s = document.createElement("script");
    s.src = src;
    if (onload) s.onload = onload;
    document.body.appendChild(s);
  }

  function loadMotionStack() {
    loadScript("https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js", function () {
      loadScript("https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js", function () {
        loadScript("js/motion.js");
      });
    });
  }

  function whenIdle(fn) {
    if ("requestIdleCallback" in window) {
      requestIdleCallback(fn, { timeout: 2000 });
    } else {
      setTimeout(fn, 300);
    }
  }

  if (document.readyState === "complete") {
    whenIdle(loadMotionStack);
  } else {
    window.addEventListener("load", function () { whenIdle(loadMotionStack); });
  }
})();
