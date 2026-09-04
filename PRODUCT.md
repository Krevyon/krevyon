# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

static HTML/CSS/JS (no framework). A build tool like Vite may be introduced only if it adds real value without complicating the "open and try it" simplicity the user asked for.

## Users

Two audiences:

1. **Prospective clients evaluating Krevyon** — small and medium businesses and personal brands in Costa Rica (restaurants, clinics, barbershops, personal brands, shops/catalogs, service businesses) who need a professional web presence and are deciding whether to hire Krevyon. Their job on this site: quickly judge Krevyon's design/development quality and get convinced enough to reach out.
2. Indirectly, the site's own visitors act as a proof point for future client-facing work — anyone Krevyon shows this site to as a portfolio piece.

## Product Purpose

This is Krevyon's own marketing/showcase website. Its purpose is to demonstrate, through its own execution, that Krevyon can design and build premium, high-impact, conversion-focused web experiences. It functions as a commercial calling card: the site itself is the primary proof of capability (no real client case studies exist yet), and it must convert visitors into contacts via WhatsApp, Instagram, or email.

## Positioning

Krevyon is a premium web design & development agency (Costa Rica-based) whose differentiator is design craft plus strategic, conversion-focused execution — not just "we build websites," but "we build websites engineered to make your brand look professional and convert visitors." The core argument the site must land: "If this agency built its own site this well, it can build something excellent for my business."

## Operating Context

Single-page site, expanded (per explicit request for a longer, richer experience) to: navbar, hero, "what Krevyon does" (services), "why Krevyon" (differentiators), "what we can build" (conceptual showcase by business type — NOT fake client case studies), a visual showcase/demo section (interface compositions proving design/dev range), process, technical+visual strengths (responsive, performance, a11y, interaction), an emotional/experience section (elevating a brand, not just shipping a page), value/benefits, FAQ, strong closing CTA, footer. Primary conversion channels: WhatsApp, Instagram, email. All contact links AND brand copy (name, tagline, primary CTA label) must be centralized in one editable config location (placeholders acceptable: Instagram `https://instagram.com/krevyon`, WhatsApp `https://wa.me/50600000000`, email `hola@krevyon.com`, location `Costa Rica`).

## Capabilities and Constraints

- No real client testimonials, case studies, logos, or metrics exist yet — must not be fabricated. The "what we can build" section is explicitly conceptual/illustrative, not client work.
- A real logo file now exists (see Evidence on Hand) and is a binding brand asset — the design must build around it, not merely accommodate it.
- Must be fully responsive and mobile-first, verified at 320/375/768/1024/1440px+, with no horizontal scroll.
- Must be accessible: semantic HTML, sufficient contrast, visible focus states, well-designed hover states.
- Copy defaults to Spanish (professional/cercano/persuasivo tone, no empty superlatives) with a full English translation available via a nav language switch — every visible string ships in both languages, never partially translated. Neither language mixes in loanwords from the other when a natural equivalent exists, and copy avoids unexplained technical jargon (no bare "Mobile-first", "UI/UX", "responsive", etc.) since the audience includes non-technical business owners.

## Brand Commitments

- Name: **Krevyon**. Focus: desarrollo web, diseño web, experiencias digitales.
- Base/context: Costa Rica.
- Founders (optional to feature in an "sobre Krevyon" section, only if it fits visually): Kristel Mena Jiménez and Franty Campos Vargas.
- **Logo (binding, confirmed):** `assets/Logo.jpeg` — a dimensional, ribbon/folded-metal "K" mark on pure black, gradient from bright cyan through electric blue and violet into magenta. Processed derivatives: `assets/logo-icon.png` (tight crop to the mark's real ink bounding box, used for the small nav/footer mark) and `assets/logo-square.png` / `assets/favicon-*.png` (padded square canvas, used for the large hero mark and icons). Sampled gradient anchors: cyan `#01E0FC`, electric blue `#0087FD`, blue `#015DFC`, violet `#730AFC`, magenta `#B203FC`.
- **Palette (binding, pinned by user + derived from the logo):** near-black/deep-navy grounds, with the logo's cyan→blue→violet→magenta gradient as the accent system. This supersedes the earlier fallback green/violet palette from the first build — that direction is retired. Type pairing (Sora/Manrope/Poppins headings, Inter/Manrope body) remains an acceptable fallback family but is no longer binding to specific weights already in use; the new-work visual pass may choose within that spirit.
- The user explicitly rejected the first build's visual world (an "IDE en construcción" dark editor metaphor, green/violet accents) as "no me convence" — too simple, insufficient visual impact — and asked for a full ground-up redesign built around the real logo, described as wanting a futuristic/premium/tech feel with cinematic scroll-driven depth (GSAP + ScrollTrigger).

## Evidence on Hand

Real logo asset confirmed (see Brand Commitments). No real client work, no testimonials, no metrics. Future work must not fabricate any of these; the site instead sells through its own design quality and an honest, non-fabricated benefits narrative (better digital presence, more trust, clearer service communication, easier contact, modern adaptable experience).

## Product Principles

1. The site itself is the proof — execution quality carries the sales argument, not claimed credentials.
2. Never fabricate social proof (clients, testimonials, stats, logos); sell on demonstrated craft and honest benefits instead.
3. Mobile-first and conversion-first: every section should make it easier, not harder, to reach WhatsApp/Instagram/email.
4. Versatility over specialization: the showcase must read as "we can do this for many kinds of businesses," conceptually, without pretending those are real clients.
5. Contact channels are configuration, not hardcoded content — centralize them so they're trivial to update with real data later.

## Accessibility & Inclusion

Semantic HTML, sufficient color contrast, visible keyboard focus on all interactive elements, no motion that impairs usability (no heavy parallax, no performance-harming effects).
