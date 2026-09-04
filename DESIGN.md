---
name: Krevyon
description: La cinta de la marca —cian a magenta— como material estructural del sitio, no como logo pegado a una plantilla.
colors:
  void: "#030308"
  void-2: "#070A14"
  surface-solid: "#0D1220"
  surface: "rgba(13,18,32,0.58)"
  surface-2: "rgba(19,26,44,0.6)"
  surface-3: "#1A2338"
  hairline: "rgba(255,255,255,0.09)"
  hairline-strong: "rgba(255,255,255,0.2)"
  text: "#F5F7FF"
  text-dim: "#A9B3CC"
  text-faint: "#8790A6"
  on-gradient: "#06070D"
  cyan: "#01E0FC"
  blue: "#0087FD"
  blue-deep: "#015DFC"
  violet: "#730AFC"
  magenta: "#B203FC"
typography:
  hero:
    fontFamily: "Sora, system-ui, sans-serif"
    fontSize: "clamp(2.35rem, 1.5rem + 4vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 1.06
    letterSpacing: "-0.02em"
  display:
    fontFamily: "Sora, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 1.4rem + 2.3vw, 3rem)"
    fontWeight: 800
    lineHeight: 1.12
    letterSpacing: "-0.015em"
  peak:
    fontFamily: "Sora, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.5rem + 2.6vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 1.15
  title:
    fontFamily: "Sora, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 700
    lineHeight: 1.3
  title-lg:
    fontFamily: "Sora, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 700
    lineHeight: 1.3
  title-md:
    fontFamily: "Sora, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.35
  title-sm:
    fontFamily: "Sora, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.35
  peak-sm:
    fontFamily: "Sora, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.5rem + 2.4vw, 3.25rem)"
    fontWeight: 800
    lineHeight: 1.12
  nav-word:
    fontFamily: "Sora, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 700
  small:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  caption:
    fontFamily: "Sora, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.45
  micro:
    fontFamily: "Sora, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.4
  tag:
    fontFamily: "Sora, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1.4
  nano:
    fontFamily: "Sora, system-ui, sans-serif"
    fontSize: "0.625rem"
    fontWeight: 600
    lineHeight: 1.4
  nano-sm:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.5625rem"
    fontWeight: 400
    lineHeight: 1.4
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  lead:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Sora, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1.4
rounded:
  sm: "8px"
  md: "14px"
  lg: "24px"
  tablet: "22px"
  phone: "32px"
  full: "999px"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "2.5rem"
  xl: "4rem"
  section: "7rem"
components:
  button-primary:
    backgroundColor: "{colors.cyan}"
    textColor: "{colors.text}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "1rem 1.85rem"
  button-ghost:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "1rem 1.85rem"
  glass-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "1.5rem"
---

# Design System: Krevyon

## Overview

**Creative North Star: "The Ribbon of Light"**

Krevyon's real logo is a folded, dimensional ribbon forming a K, gradient cyan→blue→violet→magenta on pure black. This build's governing idea: that ribbon is not a badge pasted on a template — it is the site's structural material. The same gradient that forms the mark reappears as the line running through the process timeline, the border-stroke that lights up around a hovered card, the tab indicator that slides between choices, the dot marking every differentiator and value item, and the accent window traveling across the services row. Nothing in the palette is decorative-only; every gradient use is load-bearing (a border, a line, a fill, a progress indicator) rather than an ambient glow with no referent.

This is a full replacement of an earlier visual world ("IDE en construcción," a code-editor metaphor in green/violet) that the client explicitly rejected as insufficiently premium. The palette here is not invented: every stop is sampled directly from `assets/Logo.jpeg`'s real pixels, a binding brand commitment, not a stylistic choice available to revisit per-project.

Two failure modes were caught and corrected during this build and must not recur: (1) a single flat text color cannot hold 4.5:1 contrast across the full cyan-to-magenta range — bright cyan and mid-violet sit at opposite ends of the luminance scale — so any text sitting directly on the full ribbon gradient needs the button-safe scrim treatment (see Colors). (2) gradient-clip text ("gradient text") was tried once, on the hero's key word, and removed after review — the ribbon's job is structure, not text-fill decoration.

**Key Characteristics:**
- The brand gradient is structural (lines, borders, indicators, dots, progress) and never purely decorative filler.
- Glass panels (translucent + real backdrop-blur + hairline border) are the content-grouping language throughout — chosen because the ribbon gradient needs a quiet, receding surface to sit against, not because "glassmorphism" is a trend.
- Dark, near-black grounds matching the logo's own native background so the mark and page feel like one continuous material rather than a sticker on a different surface.
- No kickers, no eyebrows, no emoji-as-icons, no gradient-fill text, no abstract skeleton-bar placeholders standing in for content — all tried and explicitly rejected in this and prior builds; see Do's and Don'ts.
- GSAP/ScrollTrigger motion is strictly progressive enhancement: the site is fully functional, fully visible, and fully animated (via CSS + IntersectionObserver) with GSAP entirely absent; GSAP adds scroll-scrubbed depth on top, never owns baseline visibility.

## Colors

Near-black grounds carry the page; the five-stop brand ribbon is the only saturated color family, used with intent everywhere it appears.

### Primary
- **Cyan** (`#01E0FC`): the brand's brightest note. Solid-color emphasis text (the hero's "premium"), focus rings, the leading edge of the ribbon gradient.
- **Blue** (`#0087FD`) / **Blue Deep** (`#015DFC`): the gradient's midpoint — most of a button or line's visible body at typical sizes.

### Secondary
- **Violet** (`#730AFC`) / **Magenta** (`#B203FC`): the ribbon's far end. Never used as flat fills alone; always the trailing portion of the five-stop gradient.

### Neutral
- **Void** (`#030308`) / **Void 2** (`#070A14`): page background and alternating section background, matched closely to the logo's own near-black so the mark reads as native to the page rather than a sticker.
- **Surface Solid** (`#0D1220`) / **Surface** (`rgba(13,18,32,0.58)`) / **Surface 2/3**: the glass-panel stack — translucent for real content containers (cards, tabs, FAQ items) with `backdrop-filter: blur`, solid for opaque contexts (phone-mock body, mobile nav).
- **Text** (`#F5F7FF`) / **Text Dim** (`#A9B3CC`) / **Text Faint** (`#8790A6`, contrast-checked ≥4.9:1 against every ground it appears on — the void tones, `--surface-solid`, and `--surface-3` — the last of which is where a scoped update first placed small metadata text like inactive tabs/badges and forced a recheck): the three-step text hierarchy.
- **On Gradient** (`#06070D`): reserved for non-text or large-swatch use against the raw, unscrimmed ribbon (e.g. the small icon badges) where the 3:1 non-text contrast floor applies, not 4.5:1.

### Named Rules
**The Structural-Not-Ambient Rule.** The ribbon gradient always does a job — a border, a line, a fill with text on it, a progress indicator, a dot. It never appears as an unmotivated background glow standing in for content or texture.

**The Gradient-Text-On-Scrim Rule.** Any UI element that puts readable text directly on the full ribbon gradient (a button, a CTA chip) must use `--grad-ribbon-btn` — the same gradient with a flat 50%-black scrim layered under it — with `--text` (white), never `--on-gradient` (dark) and never the raw gradient. The scrim is what makes every stop, cyan through magenta, clear 4.5:1: without it, a single flat text color cannot pass contrast at both ends of this specific gradient's luminance range simultaneously. Icon-only swatches with an adjacent visible text label may use the raw gradient with `--on-gradient`, since non-text graphical contrast only needs 3:1.

## Typography

**Display Font:** Sora (with system-ui, sans-serif fallback) — every heading, every button label, every UI-chrome word.
**Body Font:** Inter (with system-ui, sans-serif fallback) — paragraph copy only.

**Character:** Sora at 800 weight carries nearly the entire voice of this build — display, hero, buttons, card titles, mock UI labels — giving the page one confident, slightly geometric voice rather than mixing display faces. Inter stays purely functional for reading copy. No monospace face anywhere: this world is optical and cinematic, not a code/terminal metaphor (that was the previous, retired world).

### Hierarchy
- **Hero** (800, `clamp(2.35rem, 1.6rem + 4vw, 4.5rem)`, 1.06): the single hero headline.
- **Peak** (800, `clamp(2rem, 1.5rem + 2.6vw, 3.5rem)`): the emotional section and closing CTA headlines — the page's later peaks, sized between Hero and Display.
- **Display** (800, `clamp(1.875rem, 1.4rem + 2.3vw, 3rem)`): every other section `<h2>`.
- **Title / Title-lg** (700, 1.0625–1.375rem): card and component headings.
- **Lead** (400, 1.0625rem): section lead paragraphs and sub-headlines.
- **Label** (600, 0.9375rem): button and UI-chrome text.
- **Body** (400, 1rem): paragraph copy.
- **Micro** (500–800, `0.5rem`–`0.875rem`): text living *inside* a device mock (phone-mock, tablet-mock, the dashboard) — card names, prices, KPI labels, nav-item labels, tiny badges like "Nuevo". This tier exists because a whole simulated interface has to read at the scale of a real app screen shrunk into a ~260–480px frame; treat any literal size in that range inside `.mini-*`, `.dash__*`, `.tablet-mock__*`, `.doc-card*`, `.svc-*`, `.editorial__*`, `.app-*` as this tier, not as an ungoverned one-off.

### Named Rules
**The One-Voice Rule.** Sora carries every heading and every piece of UI chrome at 700–800 weight; the only typographic contrast the system needs is size and Inter-vs-Sora for body-vs-everything-else. Introducing a second display face would blur a system built on committing to one confident voice.

## Layout

Single-page site, `max-width: 1200px` container, `1.5rem` inline padding (`1rem` under 420px), mobile-first. Sections alternate `--void`/`--void-2` for rhythm. Section vertical rhythm is `7rem` block padding on desktop, `~5.5rem` under 420px. Grids are `auto-fit, minmax(...)` driven (services, why, value, strengths) so column count follows available width rather than a fixed breakpoint list; the build/showcase/footer sections use explicit `minmax(0, ...)` column tracks specifically to prevent CSS Grid's implicit-column "blowout" (an auto/bare-`fr` track sizing to a nowrap descendant's min-content instead of the container width) — this bug hit the hero at exactly one narrow viewport during development and the fix (`minmax(0, 1fr)` on every multi-column grid, including single-column base states) is now a standing rule, not a one-off patch.

## Elevation & Depth

Hybrid: translucent glass panels (`backdrop-filter: blur`) carry structure, soft shadows (`--shadow-md`/`--shadow-lg`, blurred and negative-spread) mark genuine lift (buttons, the hero mark, floating glass chips, mockup panels on hover). No hard-offset shadows — this is not a neobrutalist world. The hero stages real depth deliberately: a rotating conic-gradient ring behind the mark, the mark itself with mouse-parallax and a scroll-scrubbed drift (GSAP), two floating glass chips with their own parallax depth — all confined to the hero; no other section borrows this staged-depth treatment.

### Named Rules
**The Glass-Has-a-Job Rule.** Backdrop-blur is never applied as ambient decoration; every glass surface is a real content container (a card, a tab strip, an accordion item, the nav) that needs to recede against the busy gradient background behind it.

## Shapes

Corners: `8px` (small controls), `14px` (cards, buttons, glass panels), `24px` (largest single surfaces), `32px` (phone-mock device frames — a deliberate, named exception to the general radius scale because it reads as an actual device silhouette, not a container choice). Borders are hairline (`rgba(255,255,255,0.09)`), strengthening only on hover/focus or via the mask-based gradient-stroke technique (`.glass-card::before`), never as a resting saturated accent.

**Micro scale (elements under ~24px):** the mini-interface and dashboard vocabulary (KPI icon chips, chart bars, tablet product-card thumbnails) uses a smaller, unlisted set of radii — `3px`–`7px` — because the `8px` step already reads as too rounded at that scale (a 22px icon square with an 8px corner looks like a rounded blob, not a chip). Treat `3–7px` as a legitimate micro-tier of the same scale, not drift; don't force these onto `--radius-sm` just to match a token literally.

## Components

### Buttons
- **Shape:** `14px` radius (`16px` for `--lg`).
- **Primary:** `--grad-ribbon-btn` (scrimmed ribbon) background, `--text` (white) label, shine-sweep on hover, `scale(0.96)` on press.
- **Ghost:** translucent glass surface, border strengthens to cyan on hover.
- **Outline / Text:** transparent, reserved for the second/third action in a multi-CTA row so hierarchy never competes with the primary gradient button.

### Cards / Containers
- **Glass Card** (services): translucent surface, hairline border that reveals a full gradient-stroke ring on hover (mask-composite technique, not a flat colored side-border), cursor-tracked spotlight glow, and a persistent 3px top accent bar whose `background-position` is offset per card so the row reads as one continuous ribbon passing through eight windows rather than eight identical boxes.
- **Value / Strengths items:** flatter glass rows, a gradient dot or authored-SVG check badge, spotlight-on-hover for value items.

### Phone Mock (signature component)
A vertical device silhouette (`32px` radius, notch pill) used everywhere the build needs to show "this is what the visitor's business gets" — the six build/business-type tabs and the showcase's mobile device. Height follows content (`min-height`, not a fixed aspect-ratio) rather than the earlier strict `9:15` box: real per-category content (a hero photo, badges, ratings, dual CTAs) needs more room than a rigid phone silhouette could offer, and forcing it to fit inside one was what made the six categories read as thin before this pass. Each instance holds a genuinely composed mini-interface built from the Mini-Interface Vocabulary below, never a single title sentence plus one button. Every category's interior composition and visual direction is deliberately different — see the per-category list below — while every one stays inside the shared token set.

### Mini-Interface Vocabulary (signature component set)
A shared set of building blocks composed differently inside each Phone Mock, the desktop dashboard, and the Tablet Mock to build believable small interfaces at a dedicated **Micro** type scale (`0.5rem`–`0.875rem`; see Typography). Core pieces: `.mini-topbar`, `.mini-tabs`/`.mini-tab`, `.mini-card` (+ `.mini-card--rich` for a hover-lift rating-and-add-button variant), `.mini-row`, `.mini-avatar`, `.mini-profile`, `.mini-grid`/`.mini-product`, `.mini-stat`, `.mini-list-row`, `.mini-status-card`/`.mini-steps`, `.mini-map`, `.mini-field`/`.mini-form`, `.mini-select`, `.mini-process`, `.mini-chip`, `.mini-badge`. A frame-level layer sits on top: `.mock-hero` (a full-bleed photo or graphic band under the notch, with a `.mock-badge` pill and a `.mock-hero__info` name/subtitle caption) and `.mock-body` (the padded content column below it). Category-specific tiers extend this vocabulary rather than replacing it: `.doc-card` + `.mini-calendar` + `.mini-confirm` (clinics), `.svc-select` + `.svc-card` (barbershops), `.editorial__*` + `.project-card` + `.social-row` (personal brands), `.shop-search` + `.mini-product__badge`/`__add` + `.cart-bar` (shops). Every color swatch in this vocabulary is a gradient built only from the existing brand stops (never a flat gray placeholder) and always sits directly beside real, specific text — an empty or unlabeled color block standing in for content is the one thing this vocabulary may never produce. A `.mini-steps` progress indicator always carries a real adjacent text line naming the state (e.g. "Paso 2 de 3 · Preparando"); it never ships as bare colored segments with no label. **Named rule:** any element built from two stacked text lines inside this vocabulary (`.mock-hero__name` + `__sub`, `.editorial__name` + `__role`, `.doc-card__name` + `__role`) needs `display: block` on both — a bare `<span>` defaults to inline and the two lines run together on one row instead of stacking; this broke the restaurant and barbershop hero captions once already, don't reintroduce it on a new pairing.

### The Six Business-Type Directions
Each `#construimos` tab commits to its own visual register on top of the shared vocabulary and palette, so the section demonstrates range rather than one template with swapped text:
- **Restaurantes:** the richest of the six — a full-bleed dish-photo hero (`uploads/restaurante-*.jpg`, graceful gradient fallback) with a "Chef's choice" badge, a 4-category tab row, rated dish cards with a circular add-button, and two CTAs side by side (reserve + order).
- **Clínicas:** clean and clinical — doctor cards with avatar/name/specialty/rating, a 7-day mini calendar with one highlighted date, and a confirmed-appointment state card (`.mini-confirm`) that names the specific slot, not just a generic "confirmed" badge.
- **Barberías:** dark and editorial — an optional-photo hero band (`uploads/barberia-hero.jpg`, same graceful-fallback pattern as the restaurant's dish photos: a dark graphic gradient band carries the name typographically until a real photo exists), a service selector (Corte/Barba/Combo), priced service cards, and a barber-avatar row.
- **Marcas personales:** the one genuinely editorial layout — large name type, a bio line, a row of three labeled project thumbnails, and social-icon links next to the contact CTA, structurally unlike any of the other five.
- **Tiendas:** e-commerce specifics — a search-bar mock, filter chips, product cards carrying a "Nuevo" badge and a circular add-button, and a persistent cart bar with item count and running total.
- **Servicios:** conversion-first, deliberately not visual — value copy, a numbered mini-process, a service selector, and a two-field form ending in a quote-request CTA; no photography, matching its brief (proposal/process/form, not imagery).

### UI Panel + Device Stack (signature composition)
The showcase section's three devices, in DOM and reading order mobile → desktop → tablet: `.phone-mock` (a real-app scaffold: `.app-topbar` with avatar/greeting/bell, a status card, mini map, CTA, and a 4-icon `.app-bottomnav`), `.ui-panel` → `.dash` (desktop — a full dashboard: branded sidebar with icon nav, header with search + bell + avatar, three KPI cards with icon/value/delta, a bar chart, and a filtered activity list, all built from the Mini-Interface Vocabulary), and `.tablet-mock` (a booking/POS interface: icon-labeled category sidebar, a staff-avatar row, three touch-sized service cards, and a footer CTA). `.device-stack` arranges all three left-to-right at ≥900px — **mobile, desktop, tablet**, bottom-aligned like a shelf, mobile floating slightly ahead on a raised margin for staged depth — so the three device types read unambiguously by size and shape alone; desktop takes the most width (`flex: 1 1 auto`, up to `680px`) and the only resting glow-lift shadow. A soft multi-stop ambient glow (`.device-stack::before`, brand tints, very low opacity) sits behind the whole group so it reads as one lit scene. Below 900px they stack in a plain column, same order top-to-bottom (`order: 1/2/3`). Each wrapper is also a small flex column: a `.device-stack__tag` (a `16px` authored monitor/tablet/phone stroke icon plus a short word — "Escritorio," "Tablet," "Móvil") sits above its device — a diagram caption, not a kicker/eyebrow (which stays banned above headings). All three device frames carry `aria-hidden="true"`; none of their simulated content is real page content.

**Named rule — the mock is narrower than the viewport implies.** `.device-stack__desktop`'s rendered width is capped at `420px` below the `900px` row breakpoint (and stays there for most of the *row* breakpoint's low end too — it doesn't reach real room until roughly `1280px`). Any internal multi-column split inside a device mock (the dashboard's chart-plus-activity-list, in particular) must default to a single column and only go multi-column at a comfortably wide, explicitly-tested breakpoint — sizing a nested grid off the section's own viewport breakpoints instead of the mock's actual rendered width is what caused a real horizontal-overflow regression here (KPI amounts and filter pills spilling out of the frame at 320–390px) even though the outer page had already been verified clean at those widths.

**Named rule — `flex: 1` on a row only sizes width.** The dashboard's bar chart (`.dash__bar`) rendered at `0px` height because `flex: 1` in a row-direction flex container distributes width, not height, and `align-items: flex-end` (used so bars grow from the bottom) does **not** stretch children to fill the cross axis the way the default `align-items: stretch` would. Any bar-style element meant to be scaled with `transform: scaleY()` needs an explicit `height: 100%` (or equivalent) on top of `flex: 1`, or there is no box there to scale.

Entrance is staggered by an explicit `data-motion-order` attribute (desktop `0`, mobile `1`, tablet `2`) read by `motion.js` — **desktop enters first, then mobile, then tablet** — rather than relying on DOM order or index parity, which is what the composition used before this pass and which no longer matches the desired sequence now that the DOM was reordered to mobile/desktop/tablet for readability. On entry, the desktop's KPI values count up from zero and its chart bars grow from their resting `12%` height to their real value; the tablet's three service cards stagger in with a per-card `--stagger` delay. All of this degrades to the correct static values with no animation at all if GSAP fails to load — the KPI spans' HTML content is always the real final number, JS only temporarily zeroes and re-counts it.

### Tabs (Build section)
Accessible `role="tablist"` with roving `tabindex`, full arrow/Home/End keyboard support. Wraps onto multiple rows (`flex-wrap: wrap`) rather than scrolling — six labels ("Marcas personales" alone) never fit one row under ~600px, and an `overflow-x: auto` strip with a visible scrollbar there read as a layout error, not a deliberate affordance. The active tab is a filled pill (`background: var(--grad-ribbon-btn)`), which also sidesteps a shared sliding underline's row-tracking problem now that the row can wrap. Switching tabs crossfades: the outgoing panel fades to `0` opacity over `150ms` before `hidden` is set and the incoming one revealed (`main.js`, guarded by the same `prefers-reduced-motion` check as the rest of the page, and by a `switchingPanel` lock so a fast double-click can't overlap two transitions) — a plain instant `hidden` swap read as "one div vanishing, another appearing" rather than a deliberate transition.

### Tablet Mock sidebar ("Tratamientos" fix)
The tablet mock's category sidebar is a fixed `9rem` (not a `%`, which would shrink with the frame) with `overflow-wrap: break-word` as a last-resort safety net — the actual fix for a long unbreakable label like "Tratamientos" spilling past the sidebar is giving it a genuinely wide-enough fixed column plus letting the frame's `min-height` (not a fixed `aspect-ratio`) grow with content, not a font-size shrink. Don't go back to sizing this sidebar as a percentage of the frame.

### FAQ Accordion
Native `<button>` + `aria-expanded` + `aria-controls`, panel `role="region"`. Expand/collapse animates via `grid-template-rows: 0fr → 1fr` (not `height`, which the project's own detector flags as layout-thrashing) with `hidden` toggled after the collapse transition so collapsed answers leave the accessibility tree, not just the viewport.

### Language Switch (nav, signature-adjacent component)
A compact `.lang-switch` pill sits in `.nav__inner` between the brand mark and the desktop nav links, and stays visible at every breakpoint (unlike `.nav__links`/the `.btn--sm` CTA, which hide below `900px`) since it's small enough to never need hiding. It deliberately reuses the build tabs' established "filled pill = active" convention rather than inventing a new toggle shape: a `--surface` + hairline-border track holds two `0.75rem` (Micro-tier) text links (real `<a href="/">`/`<a href="/en/">` navigation between the two static pages, not a JS toggle — see CLAUDE.md Architecture), and the current-page language gets `--grad-ribbon-btn` as its background with `--text` via `[aria-current="page"]` — the same treatment as an active build tab. No new colors, radii, or type sizes were introduced for this component.

### Navigation
Sticky, translucent, gains a hairline border + denser background once scrolled. Desktop links get a gradient underline that grows in via `scaleX()` from the left on hover. The brand mark (`.brand__mark`, nav and footer) renders from `logo-icon.png`/`logo-icon.webp` (`<picture>`, WebP source + PNG fallback) — a tight crop to the mark's actual ink bounding box (ratio ~1.10:1), pre-resized to roughly the mark's actual on-page display size rather than shipped at the source logo's full resolution (see CLAUDE.md Architecture — this was a real, measured performance issue: the un-resized PNG was 488KB for a 28px-tall icon). `logo-square.png` and `logo-mark.png` — earlier, now-unused derivatives tried for other spots and both rejected for reading "stretched" — have been deleted from `assets/` entirely; don't regenerate them without a real, current use. `.brand__mark` sets only `width` (`28px`) with `height: auto`, so the browser follows the asset's real ratio instead of a fixed box — don't reintroduce a fixed `width` + `height` pair on this element. `line-height: 1` on both the mark and the wordmark, `align-items: center` on `.brand` for vertical centering.

### Hero Scene (signature composition, hero-only)
**Superseded (this pass):** the previous hero-right composition (rotating conic-gradient ring behind the logo mark, mouse-parallaxed and GSAP scroll-scrubbed) has been removed in favor of a two-column layout with an empty staging container, `.hero__scene` / `#krevyon-scene`, reserved for a future Three.js scene (3D object inspired by the logo, platform, particles, floating elements, holographic panels). That work has not started yet — right now the container is a plain dark glass panel (hairline border, two faint radial tints, `--shadow-lg`) with nothing inside, by explicit client direction ("no coloques una imagen falsa dentro"). No canvas, no GSAP, no Three.js wired up yet. When the 3D scene is implemented, it must degrade the same way every other progressive-enhancement layer on this site does: if Three.js fails to load or WebGL is unavailable, `.hero__scene` should fall back to its current plain panel, never a broken/blank box.

**Hero-only exceptions to two standing rules, both by explicit client request for this redesign:**
- A small pill badge ("Desarrollo web a medida") now sits above the hero `<h1>` — this is the same shape as the previously-banned kicker/eyebrow and floating-chip patterns (see Do's and Don'ts), reinstated here specifically because the client asked for it in this pass. Don't propagate this pattern to other section headings; it is scoped to the hero only.
- The hero's second title line ("a tu medida") uses gradient-clip text (`.hero__title-line--accent`, `--grad-hero-accent`: a cyan→blue→violet, three-stop subset of the ribbon, not the full five-stop `--grad-ribbon`), reversing the earlier "gradient-clip text was tried once and removed" rule. This is a deliberate, client-directed reversal for the hero headline only — don't reintroduce gradient-clip text elsewhere without the same explicit direction.

The hero container itself now targets `min-height: 92vh` at `≥980px` (the same breakpoint where `.hero__grid` switches to two columns) so the first viewport reads as a full, spacious "screen," centered vertically via `flex-direction: column; justify-content: center` on `.hero`. Below 980px the hero keeps its natural content height (no forced viewport height) so the stacked mobile layout (badge → title → description → buttons → empty 3D stage) never leaves oversized empty gaps.

### WhatsApp Floating Action Button (signature component)
A fixed circular button (`bottom-right`, `56px`, `52px` under 640px) using `--grad-ribbon-btn` (the scrimmed gradient, safe white-text/icon contrast) and an authored SVG WhatsApp glyph — present on every page, not scoped to one section. Lifts and glows on hover (`translateY` + `scale` + `--shadow-glow`), scales down on press. `z-index: 90`, below the sticky nav's `100` so the nav still wins if they ever visually meet. Uses the same `data-link="whatsapp"` config-driven href as every other WhatsApp CTA on the page — never a hardcoded number.

## Do's and Don'ts

### Do:
- **Do** give the ribbon gradient a structural job (border, line, fill-with-scrim, indicator, dot) every time it appears.
- **Do** use `--grad-ribbon-btn` + `--text` for any text sitting directly on the full gradient; never a single flat color without the scrim.
- **Do** gate any JS-dependent starting-hidden state (scroll reveals, GSAP-driven opacity) behind a synchronous `.js` class added by an inline script at the very top of `<body>` — content must default to visible so a JS failure never leaves it permanently invisible.
- **Do** author mockup/demo content (phone-mock titles, UI-panel product swatches) as real, specific short copy — never an abstract bar or empty gradient rectangle standing in for content.
- **Do** harden every multi-column CSS Grid — including single-column base states — with `minmax(0, ...)` tracks, not bare `fr` or implicit auto columns, to prevent content-driven grid blowout.

### Don't:
- **Don't** add a kicker or eyebrow line above any heading in any *other* section — including inside decorative mockups (a small caps label above a bold mock-UI title was tried and cut during this build for reading too close to the banned shape). **Exception (client-directed, this pass):** the hero's `.hero__badge` above the `<h1>` is deliberately this shape — see Hero Scene. Don't extend it beyond the hero.
- **Don't** use gradient-clip ("gradient text") for emphasis in any *other* section — tried once on the hero's key word, removed after review, since emphasis normally comes from color/weight/size, not a text-fill gradient. **Exception (client-directed, this pass):** the hero's `.hero__title-line--accent` is deliberately gradient-clipped — see Hero Scene. Don't extend it beyond the hero.
- **Don't** use emoji or generic Unicode glyphs as icons — authored inline SVG only, one consistent stroke weight.
- **Don't** introduce a second display typeface — Sora carries every heading and all UI chrome; Inter is body-only.
- **Don't** add free-floating label/capability chips (pills with a dot + short word, positioned absolutely near a hero visual, orbiting an image) — tried once, removed by explicit client request as visual clutter. This is a different shape from the current single `.hero__badge` sitting above the headline text (see Hero Scene); don't reintroduce multiple orbiting chips near whatever visual ends up in `.hero__scene`.
- **Don't** write section copy that raises the "we don't have real clients yet" subject, in any phrasing ("todavía no mostramos clientes reales," "no de clientes reales," "preferimos no inventar casos"). Every section whose mockups are conceptual (`#construimos`, `#showcase`) still must not fabricate a client, but the copy accomplishes that by simply never claiming one — never by an apologetic aside. This was flagged once in `#construimos` (rewritten to "Un sistema visual distinto para cada tipo de negocio") and once in `#showcase` (rewritten to "Composiciones propias..."); don't let either drift back, and apply the same standard to any future section with illustrative-only content.
- **Don't** overlap or rotate the showcase's three device mockups against each other — tried once, replaced with a plain left-to-right (mobile/desktop/tablet) shelf layout because the overlap read as ambiguous rather than premium. Depth here comes from desktop's greater width and shadow-glow, not from layering.
- **Don't** hardcode a real photo requirement — any real-image slot (see the restaurant menu cards' `uploads/*.jpg` pattern) must degrade to the existing brand-gradient swatch via an `onerror` handler that hides the `<img>`, never a broken-image icon.
- **Don't** reach for `overflow-x: auto` on a tab/pill row that doesn't fit its container — tried on the build tabs, read as a layout error (a visible scrollbar on a section that shouldn't scroll) rather than a deliberate affordance. Wrap the row (`flex-wrap: wrap`) instead so nothing needs to scroll.
- **Don't** force both `width` and `height` on a logo/icon `<img>` — set one dimension and let the other be `auto` so the asset's real ratio decides it, or the box will visibly distort non-square ink even when the CSS itself isn't "wrong."
- **Don't** size a nested multi-column layout inside a device mock off the section's own viewport breakpoints — the mock's own rendered width lags far behind the viewport (see UI Panel + Device Stack's named rule) and a chart-plus-list split that looked fine reasoning from viewport width alone overflowed in practice. Default to single-column and test the actual mock at narrow widths before adding a split.
- **Don't** assume `flex: 1` gives a row-direction flex item any height, or that `align-items: flex-end` stretches children — neither does; a `scaleY()`-animated bar needs an explicit `height: 100%` of its own or it renders at `0px`.
- **Don't** leave a two-line text pairing (a name plus a role, a title plus a subtitle) as bare `<span>`s inside the mini-interface vocabulary — `display: block` on both is required or they run together inline instead of stacking. Caught on the restaurant and barbershop hero captions.
