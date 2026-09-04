/**
 * Krevyon — hero 3D scene: "Digital Core" (large modular tech artifact).
 *
 * Loaded as a native ES module (see the `type="module"` script tag in
 * index.html). The Three.js import below uses the exact CDN URL directly
 * — no import map, no addon dependency, nothing that can fail to resolve.
 *
 * There is deliberately no postprocessing pipeline (no EffectComposer, no
 * UnrealBloomPass) — a previous pass tried real bloom twice and both times
 * UnrealBloomPass's own composite shader ended up forcing full opacity
 * across the frame (its shader hardcodes output alpha to 1), which showed
 * up as a big rectangle behind the object. Every bit of "glow" here comes
 * instead from emissive materials, real lights, two additive glow shells
 * around the core, and additive particles — techniques that render through
 * the normal `renderer.render(scene, camera)` path and have already been
 * confirmed transparent on screen, unlike the bloom pipeline.
 *
 * Composition (see "assemble" section near the bottom for the full
 * hierarchy): a small luminous faceted core at the center, wrapped in a
 * partial see-through cage, surrounded by two shells of small mechanical
 * pieces at different radii, three segmented technical rings at different
 * inclinations/speeds, four small fragments on real circular orbits
 * further out, a sparse additive particle field, and a handful of thin
 * pulsing "energy" struts connecting the cage to the inner shell. No large
 * visible sphere anywhere, no logo, no textures, no external models.
 */
// Minified module build: identical API, roughly half the bytes over the
// wire of build/three.module.js (~670KB vs ~1.27MB raw) for zero behavior
// change — this is by far the heaviest single resource on the page, so the
// minified build is the single biggest lever available without dropping
// the 3D scene.
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.min.js";

(function () {
  "use strict";

  var DEG = Math.PI / 180;

  var container = document.getElementById("krevyon-scene");
  if (!container) return;

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var canHover = window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  // Coarse pointer (touch phones/tablets) implies weaker GPUs far more
  // reliably than viewport width alone — used below to skip antialiasing
  // and halve the effective render rate, never to skip the scene entirely.
  var isCoarse = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;

  // Building ~80 meshes' worth of geometry/material is real synchronous
  // work; running it inside requestIdleCallback keeps it off the critical
  // rendering path instead of competing with the rest of the page's
  // startup work (main.js, layout, font/image decode) for the main thread.
  // The timeout is a safety net so the scene still appears promptly even
  // if the main thread is never fully idle.
  if ("requestIdleCallback" in window) {
    requestIdleCallback(init, { timeout: 1200 });
  } else {
    setTimeout(init, 50);
  }

  function init() {

  var renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: !isCoarse, alpha: true, powerPreference: "low-power" });
  } catch (err) {
    // WebGL unavailable: leave the container empty — there is no fallback
    // panel by design (see the CSS comment on .hero__scene).
    return;
  }

  var scene = new THREE.Scene();
  scene.background = null; // explicit: never an opaque scene background

  var camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(1.1, 0.9, 9.3);
  camera.lookAt(0, 0, 0);

  renderer.setClearColor(0x000000, 0); // transparent clear color
  renderer.setClearAlpha(0); // belt-and-suspenders: alpha explicitly 0, not just implied by the color call above
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  container.appendChild(renderer.domElement);

  // Tracks every geometry/material we create so dispose() can free them all
  // without hand-maintaining a second list.
  var disposables = [];
  function track(resource) {
    disposables.push(resource);
    return resource;
  }

  function seededJitter(seed) {
    var x = Math.sin(seed * 12.9898) * 43758.5453;
    return x - Math.floor(x); // deterministic 0..1, no Math.random() — same look every load
  }

  /* ---------------- lighting: product-style key/fill/rim + internal point ---------------- */

  scene.add(new THREE.AmbientLight(0xffffff, 0.14)); // kept low on purpose — real contrast comes from the lights below, not flat ambient fill

  var keyLight = new THREE.DirectionalLight(0x01e0fc, 1.05); // cyan/blue key, soft, upper-side
  keyLight.position.set(3.2, 5.5, 4.5);
  scene.add(keyLight);

  var fillLight = new THREE.DirectionalLight(0x3a8bd6, 0.4); // softer secondary, lower contrast than the key
  fillLight.position.set(-4.5, 1, 3.5);
  scene.add(fillLight);

  var rimLight = new THREE.PointLight(0x730afc, 1.15, 24); // violet rim, from behind — separates the object from the background
  rimLight.position.set(-2.2, -1.5, -5);
  scene.add(rimLight);

  /* ---------------- shared geometries/materials ---------------- */

  var CYAN = 0x01e0fc;
  var BLUE = 0x0087fd;
  var VIOLET = 0x730afc;

  var darkMetal = track(
    new THREE.MeshPhysicalMaterial({ color: 0x05070c, metalness: 0.9, roughness: 0.22, clearcoat: 0.3, clearcoatRoughness: 0.2 })
  );
  var darkMetalAlt = track(
    new THREE.MeshPhysicalMaterial({ color: 0x0a0f1c, metalness: 0.78, roughness: 0.3, clearcoat: 0.2, clearcoatRoughness: 0.3 })
  );
  var glassMaterial = track(
    new THREE.MeshPhysicalMaterial({
      color: 0x0a1830,
      transparent: true,
      opacity: 0.6,
      transmission: 1,
      thickness: 0.25,
      roughness: 0.06,
      metalness: 0,
      ior: 1.4,
      clearcoat: 0.4,
    })
  );
  function accentMaterial(color) {
    return track(
      new THREE.MeshStandardMaterial({ color: 0x060a12, emissive: color, emissiveIntensity: 1.2, metalness: 0.4, roughness: 0.28 })
    );
  }
  var accentCyan = accentMaterial(CYAN);
  var accentBlue = accentMaterial(BLUE);
  var accentViolet = accentMaterial(VIOLET);

  function fibonacciPoint(i, n, radius) {
    var golden = Math.PI * (3 - Math.sqrt(5));
    var y = 1 - (i / (n - 1)) * 2;
    var r = Math.sqrt(Math.max(0, 1 - y * y));
    var theta = golden * i;
    return new THREE.Vector3(Math.cos(theta) * r, y, Math.sin(theta) * r).multiplyScalar(radius);
  }

  /* ---------------- core: small, luminous, faceted — never a plain ball ---------------- */

  function createCore() {
    var geometry = track(new THREE.IcosahedronGeometry(0.44, 4)); // high subdivision, still small relative to the whole object
    var material = track(
      new THREE.MeshPhysicalMaterial({
        color: 0x02121a,
        emissive: 0x01e0fc,
        emissiveIntensity: 2.0,
        metalness: 0.3,
        roughness: 0.2,
        clearcoat: 0.6,
        clearcoatRoughness: 0.2,
      })
    );
    var mesh = new THREE.Mesh(geometry, material);
    var light = new THREE.PointLight(0x01e0fc, 1.15, 4.2);
    mesh.add(light); // travels with the core

    // Two nested additive shells simulate the "energetic glow" without any
    // postprocessing: a tight bright one and a larger, fainter one for a
    // soft falloff. Both BackSide + depthWrite:false so they never occlude
    // anything and never read as a solid surface.
    var innerGlowGeo = track(new THREE.SphereGeometry(0.62, 24, 24));
    var innerGlowMat = track(
      new THREE.MeshBasicMaterial({ color: 0x37d4f2, transparent: true, opacity: 0.22, side: THREE.BackSide, blending: THREE.AdditiveBlending, depthWrite: false })
    );
    var outerGlowGeo = track(new THREE.SphereGeometry(1.05, 20, 20));
    var outerGlowMat = track(
      new THREE.MeshBasicMaterial({ color: 0x2f6fe0, transparent: true, opacity: 0.1, side: THREE.BackSide, blending: THREE.AdditiveBlending, depthWrite: false })
    );
    var innerGlow = new THREE.Mesh(innerGlowGeo, innerGlowMat);
    var outerGlow = new THREE.Mesh(outerGlowGeo, outerGlowMat);
    mesh.add(innerGlow, outerGlow);

    return { mesh: mesh, material: material, light: light, innerGlow: innerGlow, outerGlow: outerGlow };
  }

  /* ---------------- inner cage: two nested wireframes + arcs, not a solid shell ---------------- */
  // Deliberately open: the core stays visible through the gaps. Two
  // wireframe layers at different radii/rotations give real depth between
  // layers rather than a single flat cage.

  function createCage() {
    var group = new THREE.Group();

    var wireGeoA = track(new THREE.IcosahedronGeometry(0.82, 1));
    var wireEdgesA = track(new THREE.EdgesGeometry(wireGeoA));
    var wireMatA = track(new THREE.LineBasicMaterial({ color: 0x1fb0cc, transparent: true, opacity: 0.24 }));
    var wireMeshA = new THREE.LineSegments(wireEdgesA, wireMatA);
    group.add(wireMeshA);

    var wireGeoB = track(new THREE.IcosahedronGeometry(1.05, 1));
    var wireEdgesB = track(new THREE.EdgesGeometry(wireGeoB));
    var wireMatB = track(new THREE.LineBasicMaterial({ color: 0x8a5cf0, transparent: true, opacity: 0.14 }));
    var wireMeshB = new THREE.LineSegments(wireEdgesB, wireMatB);
    wireMeshB.rotation.set(0.5, 0.7, 0.2); // offset so the two layers don't align edge-on-edge
    group.add(wireMeshB);

    var ribGeometry = track(new THREE.TorusGeometry(0.95, 0.015, 8, 28, Math.PI * 0.55));
    var ribConfigs = [
      { rotation: [0.3, 0, 0], accent: false },
      { rotation: [0, 1.1, 0.4], accent: false },
      { rotation: [1.0, 0.6, 0], accent: true },
      { rotation: [0.5, -0.9, 0.8], accent: false },
      { rotation: [1.6, 0.3, -0.6], accent: true },
    ];
    ribConfigs.forEach(function (cfg) {
      var mesh = new THREE.Mesh(ribGeometry, cfg.accent ? accentViolet : darkMetal);
      mesh.rotation.set(cfg.rotation[0], cfg.rotation[1], cfg.rotation[2]);
      group.add(mesh);
    });

    return group;
  }

  /* ---------------- energy struts: thin pulsing rods bridging cage to inner shell ---------------- */

  function createEnergyLines(count, innerRadius, outerRadius) {
    var group = new THREE.Group();
    var struts = [];
    var geometry = track(new THREE.CylinderGeometry(0.007, 0.007, outerRadius - innerRadius, 6));
    var midRadius = (innerRadius + outerRadius) / 2;
    for (var i = 0; i < count; i++) {
      var material = track(
        new THREE.MeshBasicMaterial({ color: i % 2 === 0 ? CYAN : VIOLET, transparent: true, opacity: 0.3, blending: THREE.AdditiveBlending, depthWrite: false })
      );
      var mesh = new THREE.Mesh(geometry, material);
      var direction = fibonacciPoint(i, count, 1);
      mesh.position.copy(direction).multiplyScalar(midRadius);
      mesh.lookAt(0, 0, 0);
      mesh.rotateX(Math.PI / 2); // rod's length axis (local Y) points outward
      group.add(mesh);
      struts.push({ material: material, phase: seededJitter(i * 4.4) * Math.PI * 2 });
    }
    return { group: group, struts: struts };
  }

  /* ---------------- piece shells: fibonacci-distributed mechanical components ---------------- */
  // Shared by both the mid and outer shells (different radius/count/archetype
  // mix) — the technique itself doesn't change: small varied pieces spread
  // evenly over a sphere, oriented outward, with gaps between all of them.

  function createPlateGeometry() {
    var w = 0.22, h = 0.14, r = 0.035;
    var shape = new THREE.Shape();
    shape.moveTo(-w / 2 + r, -h / 2);
    shape.lineTo(w / 2 - r, -h / 2);
    shape.absarc(w / 2 - r, -h / 2 + r, r, -Math.PI / 2, 0);
    shape.lineTo(w / 2, h / 2 - r);
    shape.absarc(w / 2 - r, h / 2 - r, r, 0, Math.PI / 2);
    shape.lineTo(-w / 2 + r, h / 2);
    shape.absarc(-w / 2 + r, h / 2 - r, r, Math.PI / 2, Math.PI);
    shape.lineTo(-w / 2, -h / 2 + r);
    shape.absarc(-w / 2 + r, -h / 2 + r, r, Math.PI, Math.PI * 1.5);
    return new THREE.ExtrudeGeometry(shape, { depth: 0.04, bevelEnabled: true, bevelThickness: 0.012, bevelSize: 0.012, bevelSegments: 2 });
  }

  var plateGeo = track(createPlateGeometry());
  var moduleGeo = track(new THREE.CylinderGeometry(0.075, 0.09, 0.22, 8));
  var bracketGeo = track(new THREE.RingGeometry(0.075, 0.105, 16, 1, 0, Math.PI * 1.15));
  var glassGeo = track(new THREE.BoxGeometry(0.16, 0.1, 0.03));
  var shardGeo = track(new THREE.OctahedronGeometry(0.09, 0));
  var smallShardGeo = track(new THREE.OctahedronGeometry(0.065, 0));

  function createPieceShell(cfg) {
    var group = new THREE.Group();
    var pieces = [];
    var count = cfg.archetypes.length;

    for (var i = 0; i < count; i++) {
      var type = cfg.archetypes[i];
      var geometry, extraRotationX = 0, material;

      if (type === "plate") { geometry = plateGeo; material = cfg.accentByIndex[i] || darkMetal; }
      else if (type === "module") { geometry = moduleGeo; extraRotationX = Math.PI / 2; material = cfg.accentByIndex[i] || darkMetal; }
      else if (type === "bracket") { geometry = bracketGeo; material = cfg.accentByIndex[i] || darkMetalAlt; }
      else if (type === "glass") { geometry = glassGeo; material = glassMaterial; }
      else if (type === "shard") { geometry = shardGeo; material = cfg.accentByIndex[i] || darkMetal; }
      else { geometry = smallShardGeo; material = cfg.accentByIndex[i] || darkMetalAlt; }

      var mesh = new THREE.Mesh(geometry, material);
      var point = fibonacciPoint(i, count, cfg.radius);
      mesh.position.copy(point);
      mesh.lookAt(0, 0, 0); // local +Z outward
      if (extraRotationX) mesh.rotateX(extraRotationX);

      var scaleJitter = cfg.scaleMin + seededJitter(i * 7.3 + cfg.radius) * (cfg.scaleMax - cfg.scaleMin);
      mesh.scale.setScalar(scaleJitter);

      group.add(mesh);
      pieces.push({
        mesh: mesh,
        direction: point.clone().normalize(),
        baseRadius: cfg.radius,
        baseEuler: { x: mesh.rotation.x, y: mesh.rotation.y, z: mesh.rotation.z },
        wobbleAxis: i % 3,
        wobbleSpeed: 0.14 + seededJitter(i * 3.1 + cfg.radius) * 0.14,
        wobblePhase: seededJitter(i * 5.7 + cfg.radius) * Math.PI * 2,
        breathe: cfg.breatheIndices.indexOf(i) !== -1,
      });
    }

    return { group: group, pieces: pieces };
  }

  /* ---------------- segmented technical rings (not smooth orbit rings) ---------------- */
  // Each ring is built from short arc segments with visible gaps, so it
  // reads as a machined collar, not a planet's orbit path. Segments sit in
  // a tiltGroup (fixed inclination, arranged around the tiltGroup's own
  // local Z — a torus's natural axis), inside a spinGroup. Animating
  // spinGroup.rotation.y spins the *already-tilted* assembly around world
  // Y — not the ring's own symmetry axis once tilted, so it visibly
  // precesses. Spinning a ring around its own untilted hole-axis would be
  // invisible (a torus is fully symmetric about that axis).
  function createSegmentedRing(cfg) {
    var arcLength = ((Math.PI * 2) / cfg.count) * (1 - cfg.gap);
    var geometry = track(new THREE.TorusGeometry(cfg.radius, cfg.tube, 8, 16, arcLength));

    var tiltGroup = new THREE.Group();
    tiltGroup.rotation.x = cfg.tiltX;
    tiltGroup.rotation.z = cfg.tiltZ;

    for (var i = 0; i < cfg.count; i++) {
      var isAccent = cfg.accentEvery > 0 && i % cfg.accentEvery === 0;
      var mesh = new THREE.Mesh(geometry, isAccent ? cfg.accentMaterial : cfg.baseMaterial);
      mesh.rotation.z = (i / cfg.count) * Math.PI * 2;
      tiltGroup.add(mesh);
    }

    var spinGroup = new THREE.Group();
    spinGroup.add(tiltGroup);
    return spinGroup;
  }

  /* ---------------- satellites: small fragments on real circular orbits ---------------- */
  // Unlike the shells (rigid pieces that only wobble in place) and the
  // rings (precessing, not translating), these actually change WORLD
  // position over time, tracing a circle — the "orbiting fragments" beat.

  function createSatellites() {
    var group = new THREE.Group();
    var satGeoA = track(new THREE.OctahedronGeometry(0.1, 0));
    var satGeoB = track(new THREE.IcosahedronGeometry(0.09, 0));
    var configs = [
      { radius: 2.75, tiltX: 25 * DEG, tiltZ: 10 * DEG, period: 70, phase: 0, geometry: satGeoA, material: accentCyan },
      { radius: 2.9, tiltX: -40 * DEG, tiltZ: 0, period: -95, phase: 2.1, geometry: satGeoB, material: darkMetal },
      { radius: 2.65, tiltX: 60 * DEG, tiltZ: -20 * DEG, period: 110, phase: 4.2, geometry: satGeoA, material: accentViolet },
      { radius: 2.95, tiltX: 5 * DEG, tiltZ: 35 * DEG, period: -85, phase: 1.3, geometry: satGeoB, material: darkMetalAlt },
    ];
    var satellites = configs.map(function (cfg) {
      var orbitGroup = new THREE.Group();
      orbitGroup.rotation.x = cfg.tiltX;
      orbitGroup.rotation.z = cfg.tiltZ;
      orbitGroup.rotation.y = cfg.phase; // stagger starting position around the orbit
      var mesh = new THREE.Mesh(cfg.geometry, cfg.material);
      mesh.position.set(cfg.radius, 0, 0);
      orbitGroup.add(mesh);
      group.add(orbitGroup);
      return { orbitGroup: orbitGroup, speed: (2 * Math.PI) / cfg.period };
    });
    return { group: group, satellites: satellites };
  }

  /* ---------------- particle field: sparse additive dust, one draw call ---------------- */

  function createParticleField(count, innerRadius, outerRadius) {
    var positions = new Float32Array(count * 3);
    var colors = new Float32Array(count * 3);
    var palette = [new THREE.Color(CYAN), new THREE.Color(BLUE), new THREE.Color(VIOLET)];
    for (var i = 0; i < count; i++) {
      var theta = seededJitter(i * 12.9 + 1) * Math.PI * 2;
      var v = seededJitter(i * 78.2 + 3.1);
      var phi = Math.acos(2 * v - 1);
      var r = innerRadius + seededJitter(i * 33.7 + 1.2) * (outerRadius - innerRadius);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      var c = palette[i % 3];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    var geometry = track(new THREE.BufferGeometry());
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    var material = track(
      new THREE.PointsMaterial({ size: 0.028, vertexColors: true, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true })
    );
    return new THREE.Points(geometry, material);
  }

  /* ---------------- assemble ---------------- */

  var coreObjectGroup = new THREE.Group();

  // Core + cage + energy struts share an inner wrapper: this is the group
  // the mouse parallax nudges (position only), kept separate from the
  // shells/rings/satellites so the "inner layers drift a little" effect
  // reads as real depth rather than the whole object tilting as one slab.
  var core = createCore();
  var cage = createCage();
  var energyLines = createEnergyLines(6, 1.05, 1.55);
  var innerGroup = new THREE.Group();
  innerGroup.add(core.mesh, cage, energyLines.group);
  coreObjectGroup.add(innerGroup);

  // Mid shell: sparser, simpler pieces (mostly shards/brackets) — the
  // "varias capas segmentadas" tier between the cage and the dense outer
  // shell, giving real depth between layers.
  var midShell = createPieceShell({
    radius: 1.55,
    archetypes: ["shard", "bracket", "smallShard", "shard", "bracket", "smallShard", "shard", "bracket"],
    accentByIndex: { 0: accentBlue, 4: accentCyan },
    breatheIndices: [1, 5],
    scaleMin: 0.9,
    scaleMax: 1.15,
  });
  coreObjectGroup.add(midShell.group);

  // Outer shell: the dense, varied "component" layer — plates, modules,
  // brackets, glass panes, shards, ~25% emissive accent.
  var outerShell = createPieceShell({
    radius: 2.15,
    archetypes: ["plate", "module", "bracket", "glass", "plate", "module", "bracket", "plate", "module", "shard", "bracket", "plate", "module", "glass", "bracket", "shard", "module", "plate"],
    accentByIndex: { 1: accentCyan, 6: accentBlue, 11: accentViolet, 15: accentCyan, 16: accentViolet },
    breatheIndices: [2, 6, 10, 14, 3, 13],
    scaleMin: 0.85,
    scaleMax: 1.2,
  });
  coreObjectGroup.add(outerShell.group);

  var ringConfigs = [
    { radius: 1.3, tube: 0.02, count: 8, gap: 0.26, tiltX: -20 * DEG, tiltZ: 8 * DEG, baseMaterial: darkMetal, accentMaterial: accentCyan, accentEvery: 3, period: 46 },
    { radius: 1.95, tube: 0.017, count: 10, gap: 0.3, tiltX: 55 * DEG, tiltZ: -12 * DEG, baseMaterial: darkMetalAlt, accentMaterial: accentBlue, accentEvery: 3, period: -68 },
    { radius: 2.55, tube: 0.014, count: 14, gap: 0.34, tiltX: 78 * DEG, tiltZ: 22 * DEG, baseMaterial: darkMetal, accentMaterial: accentViolet, accentEvery: 4, period: 120 },
  ];
  var rings = ringConfigs.map(function (cfg) {
    var spinGroup = createSegmentedRing(cfg);
    coreObjectGroup.add(spinGroup);
    return { spinGroup: spinGroup, speed: (2 * Math.PI) / cfg.period };
  });

  var satellitesWrap = new THREE.Group(); // the only rotation the mouse ever touches on satellites
  var satellitesResult = createSatellites();
  satellitesWrap.add(satellitesResult.group);
  coreObjectGroup.add(satellitesWrap);

  var particleField = createParticleField(180, 2.0, 3.3);
  coreObjectGroup.add(particleField);

  // Outer wrapper: only the mouse tilt touches this node's rotation, kept
  // separate from coreObjectGroup's own autonomous spin/float so the two
  // motions never fight over the same property.
  var mouseTiltGroup = new THREE.Group();
  mouseTiltGroup.add(coreObjectGroup);
  scene.add(mouseTiltGroup);

  /* ---------------- mouse interaction: tilt + two independent parallax layers, desktop-hover only ---------------- */

  var MAX_TILT = 0.11; // ~6.3 degrees — a reaction, not a "look at cursor" follow
  var targetTiltX = 0;
  var targetTiltY = 0;

  if (canHover && !reduceMotion) {
    container.addEventListener("mousemove", function (e) {
      var rect = container.getBoundingClientRect();
      var nx = (e.clientX - rect.left) / rect.width - 0.5;
      var ny = (e.clientY - rect.top) / rect.height - 0.5;
      targetTiltY = nx * MAX_TILT;
      targetTiltX = ny * MAX_TILT;
    });
    container.addEventListener("mouseleave", function () {
      targetTiltX = 0;
      targetTiltY = 0;
    });
  }
  // Touch devices: canHover is false, listeners above are never attached,
  // targets stay at 0 forever, nothing here ever moves from rest.

  // Frame-rate-independent exponential smoothing (reaches ~63% of the way
  // to the target every 1/rate seconds, regardless of the frame interval).
  function damp(current, target, rate, delta) {
    return current + (target - current) * (1 - Math.exp(-rate * delta));
  }

  /* ---------------- resize (container-driven, not just window) ---------------- */

  function resize() {
    var width = container.clientWidth;
    var height = container.clientHeight;
    if (!width || !height) return;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false); // false: CSS (100%/100%) controls displayed size
  }
  resize();

  var resizeObserver = null;
  if ("ResizeObserver" in window) {
    resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
  } else {
    window.addEventListener("resize", resize);
  }

  /* ---------------- render loop ---------------- */

  var clock = new THREE.Clock();
  var rafId = null;
  var elapsed = 0;

  var SPIN_SPEED = (2 * Math.PI) / 140; // whole object: one extremely slow turn every 140s
  var FLOAT_HZ = (2 * Math.PI) / 7.5;
  var FLOAT_AMPLITUDE = 0.07;
  var PULSE_HZ = (2 * Math.PI) / 3.4;
  var PARTICLE_SPIN_SPEED = (2 * Math.PI) / 220; // its own slow drift, independent of the object's own spin feel

  function animatePieces(pieces) {
    pieces.forEach(function (p) {
      var wobble = Math.sin(elapsed * p.wobbleSpeed + p.wobblePhase) * 0.06; // a few degrees, individual per piece
      if (p.wobbleAxis === 0) p.mesh.rotation.x = p.baseEuler.x + wobble;
      else if (p.wobbleAxis === 1) p.mesh.rotation.y = p.baseEuler.y + wobble;
      else p.mesh.rotation.z = p.baseEuler.z + wobble;

      if (p.breathe) {
        // Resting = fully closed (extend 0); the sine only ever adds a tiny
        // outward extension, so pieces separate slightly and ease back —
        // never retract past their resting radius.
        var extend = (Math.sin(elapsed * 0.32 + p.wobblePhase) * 0.5 + 0.5) * 0.055;
        p.mesh.position.copy(p.direction).multiplyScalar(p.baseRadius + extend);
      }
    });
  }

  function renderFrame() {
    var delta = clock.getDelta();
    elapsed += delta;

    coreObjectGroup.rotation.y += SPIN_SPEED * delta;
    coreObjectGroup.position.y = Math.sin(elapsed * FLOAT_HZ) * FLOAT_AMPLITUDE;

    rings.forEach(function (ring) {
      ring.spinGroup.rotation.y += ring.speed * delta;
    });

    animatePieces(midShell.pieces);
    animatePieces(outerShell.pieces);

    satellitesResult.satellites.forEach(function (sat) {
      sat.orbitGroup.rotation.y += sat.speed * delta;
    });

    particleField.rotation.y += PARTICLE_SPIN_SPEED * delta;

    energyLines.struts.forEach(function (strut) {
      strut.material.opacity = 0.16 + (Math.sin(elapsed * 0.55 + strut.phase) * 0.5 + 0.5) * 0.32;
    });

    var pulse = Math.sin(elapsed * PULSE_HZ);
    var corePulseScale = 1 + pulse * 0.045;
    core.mesh.scale.setScalar(corePulseScale);
    core.material.emissiveIntensity = 2.0 + pulse * 0.4;
    core.light.intensity = 1.15 + pulse * 0.3;
    core.innerGlow.material.opacity = 0.2 + (pulse * 0.5 + 0.5) * 0.08;
    core.outerGlow.material.opacity = 0.09 + (pulse * 0.5 + 0.5) * 0.04;

    // Mouse: outer tilt on the whole object, a smaller independent
    // positional parallax on the inner core+cage, and a small independent
    // tilt on the satellites wrapper — three different nodes, three
    // different response strengths, so the layers read as separated in
    // depth rather than moving as one rigid piece.
    mouseTiltGroup.rotation.x = damp(mouseTiltGroup.rotation.x, targetTiltX, 4, delta);
    mouseTiltGroup.rotation.y = damp(mouseTiltGroup.rotation.y, targetTiltY, 4, delta);
    innerGroup.position.x = damp(innerGroup.position.x, targetTiltY * 0.18, 4, delta);
    innerGroup.position.y = damp(innerGroup.position.y, -targetTiltX * 0.18, 4, delta);
    satellitesWrap.rotation.x = damp(satellitesWrap.rotation.x, -targetTiltX * 0.5, 3, delta);
    satellitesWrap.rotation.y = damp(satellitesWrap.rotation.y, -targetTiltY * 0.5, 3, delta);

    renderer.render(scene, camera);
  }

  // Every motion in this scene is intentionally slow (the whole object
  // takes 140s for one turn), so rendering coarse-pointer devices — phones
  // and tablets, a much more reliable weak-GPU signal than viewport width —
  // at half the frame rate is not perceptible, and roughly halves the
  // per-frame CPU/GPU cost of a decorative background element there.
  var frameCount = 0;

  function animate() {
    frameCount++;
    if (!isCoarse || frameCount % 2 === 0) renderFrame();
    rafId = requestAnimationFrame(animate);
  }

  function stopLoop() {
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  }

  function startLoop() {
    if (rafId === null) {
      clock.getDelta(); // discard the elapsed-since-pause gap so nothing jumps
      animate();
    }
  }

  if (reduceMotion) {
    renderer.render(scene, camera); // static single frame, no rAF loop
  } else {
    startLoop();

    // Pause the loop while the hero is off-screen so this doesn't keep
    // spending GPU/CPU once the visitor has scrolled well past it.
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) startLoop();
            else stopLoop();
          });
        },
        { threshold: 0 }
      );
      io.observe(container);
    }
  }

  /* ---------------- cleanup ---------------- */

  function dispose() {
    stopLoop();
    if (resizeObserver) resizeObserver.disconnect();
    else window.removeEventListener("resize", resize);
    disposables.forEach(function (resource) { resource.dispose(); });
    renderer.dispose();
  }

  // This is a single-page site with no client-side routing, so the scene
  // never needs to unmount mid-session — dispose() only runs as a courtesy
  // before the page is torn down/cached, to free the GPU context promptly.
  window.addEventListener("pagehide", dispose);
  } // end init()
})();
