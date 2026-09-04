#!/usr/bin/env node
/**
 * Krevyon — generador de páginas bilingües estáticas.
 *
 * Por qué existe: la versión anterior cambiaba de idioma reescribiendo el
 * DOM con JavaScript (js/i18n.js), lo que significa que un buscador solo
 * ve — e indexa — un único idioma (el que trae el HTML de partida). Este
 * script reemplaza ese enfoque por dos archivos HTML reales y completos,
 * cada uno servible y rastreable de forma independiente:
 *
 *   templates/page.template.html  →  index.html      (es, raíz del sitio)
 *                                 →  en/index.html    (en)
 *
 * El template es la única fuente que se edita a mano (estructura, copy en
 * español visible como texto de respaldo, atributos data-i18n). Correr
 * este script regenera ambos archivos de salida a partir del template y
 * del diccionario en i18n/dictionary.mjs — nunca edites index.html o
 * en/index.html directamente, esos son artefactos generados.
 *
 * Uso: node scripts/build-pages.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { dict } from "../i18n/dictionary.mjs";
import { site } from "../i18n/site.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const LOCALES = {
  es: { outPath: join(ROOT, "index.html"), assetPrefix: "", urlPath: "/", htmlLang: "es", ogLocale: "es_CR" },
  en: { outPath: join(ROOT, "en", "index.html"), assetPrefix: "../", urlPath: "/en/", htmlLang: "en", ogLocale: "en_US" },
};

function t(key, locale) {
  const entry = dict[key];
  if (!entry) throw new Error(`Missing dictionary entry for data-i18n key "${key}"`);
  const value = entry[locale] ?? entry.es;
  if (value === undefined) throw new Error(`Dictionary entry "${key}" has no value for locale "${locale}" or fallback "es"`);
  return value;
}

/**
 * Walks every tag in the template and resolves data-i18n / data-i18n-attr
 * markers by position (never by string content) so no two elements can
 * collide even if their current text happens to match. Also strips the
 * two authoring-only attributes from the shipped output.
 */
function applyTranslations(html, locale) {
  const tagRe = /<[a-zA-Z][^>]*>/g;
  const spans = [];
  let match;
  while ((match = tagRe.exec(html))) {
    const tag = match[0];
    const i18nMatch = tag.match(/data-i18n="([\w.]+)"/);
    if (!i18nMatch) continue;
    const key = i18nMatch[1];
    const attrMatch = tag.match(/data-i18n-attr="([a-zA-Z-]+)"/);
    const value = t(key, locale);

    let newTag = tag.replace(/\s*data-i18n="[\w.]+"/, "").replace(/\s*data-i18n-attr="[a-zA-Z-]+"/, "");
    if (attrMatch) {
      const attrName = attrMatch[1];
      const escaped = value.replace(/"/g, "&quot;");
      const attrValRe = new RegExp(`${attrName}="[^"]*"`);
      if (attrValRe.test(newTag)) {
        newTag = newTag.replace(attrValRe, `${attrName}="${escaped}"`);
      } else {
        newTag = newTag.replace(/>$/, ` ${attrName}="${escaped}">`);
      }
      spans.push({ start: match.index, end: match.index + tag.length, text: newTag });
    } else {
      // Content mode: replace the tag itself (markers stripped) plus the
      // text run up to the next "<" as one contiguous replacement span.
      const contentStart = match.index + tag.length;
      const nextLt = html.indexOf("<", contentStart);
      const contentEnd = nextLt === -1 ? html.length : nextLt;
      const escaped = value.replace(/&/g, "&amp;").replace(/</g, "&lt;");
      spans.push({ start: match.index, end: contentEnd, text: newTag + escaped });
    }
  }

  spans.sort((a, b) => a.start - b.start);
  let out = "";
  let cursor = 0;
  for (const span of spans) {
    out += html.slice(cursor, span.start) + span.text;
    cursor = span.end;
  }
  out += html.slice(cursor);
  return out;
}

function buildLangSwitch(locale) {
  const label = t("a11y.langSwitch", locale);
  const esCurrent = locale === "es" ? ' aria-current="page"' : "";
  const enCurrent = locale === "en" ? ' aria-current="page"' : "";
  return (
    `<div class="lang-switch" role="group" aria-label="${label}">\n` +
    `      <a href="/" class="lang-switch__btn" data-lang-link="es"${esCurrent}>ES</a>\n` +
    `      <a href="/en/" class="lang-switch__btn" data-lang-link="en"${enCurrent}>EN</a>\n` +
    `    </div>`
  );
}

function buildHreflang(locale) {
  const esUrl = site.url + "/";
  const enUrl = site.url + "/en/";
  const selfUrl = locale === "es" ? esUrl : enUrl;
  return [
    `<link rel="canonical" href="${selfUrl}" />`,
    `<link rel="alternate" hreflang="es" href="${esUrl}" />`,
    `<link rel="alternate" hreflang="en" href="${enUrl}" />`,
    `<link rel="alternate" hreflang="x-default" href="${esUrl}" />`,
    `<meta property="og:url" content="${selfUrl}" />`,
  ].join("\n");
}

function buildJsonLd(locale) {
  const orgDescription = t("meta.description", locale);
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": site.url + "/#organization",
    name: site.name,
    url: site.url + "/",
    logo: site.url + "/assets/logo-icon.png",
    email: site.email,
    sameAs: [site.instagram],
    areaServed: site.location,
    description: orgDescription,
  };
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": site.url + "/#website",
    url: site.url + "/",
    name: site.name,
    publisher: { "@id": site.url + "/#organization" },
    inLanguage: [locale === "es" ? "es-CR" : "en"],
  };
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: t("services.card2.title", locale),
    provider: { "@id": site.url + "/#organization" },
    areaServed: site.location,
    description: t("services.lead", locale),
  };
  const blocks = [organization, website, service]
    .map((obj) => `<script type="application/ld+json">${JSON.stringify(obj)}</script>`)
    .join("\n");
  return blocks;
}

/** Rewrites root-relative asset paths for the /en/ page, which lives one
 *  directory below the site root. Fragment links (#servicios), mailto:,
 *  and absolute https:// URLs are left untouched by construction — the
 *  regex only matches the exact known local-asset prefixes. */
function rewriteAssetPaths(html, prefix) {
  if (!prefix) return html;
  return html.replace(/(src|href|srcset)="(css|js|assets|uploads)\//g, `$1="${prefix}$2/`);
}

function buildLocale(locale, template) {
  const cfg = LOCALES[locale];
  let html = applyTranslations(template, locale);
  html = html.replace('<html lang="es">', `<html lang="${cfg.htmlLang}">`);
  html = html.replace(/<!--\s*LANG_SWITCH_INSERT[\s\S]*?-->\s*<!-- LANG_SWITCH_INSERT -->/, buildLangSwitch(locale));
  html = html.replace("<!-- HREFLANG_INSERT -->", buildHreflang(locale));
  html = html.replace("<!-- JSONLD_INSERT -->", buildJsonLd(locale));
  html = rewriteAssetPaths(html, cfg.assetPrefix);
  return html;
}

function main() {
  const templatePath = join(ROOT, "templates", "page.template.html");
  const template = readFileSync(templatePath, "utf8");

  for (const locale of Object.keys(LOCALES)) {
    const cfg = LOCALES[locale];
    const html = buildLocale(locale, template);
    mkdirSync(dirname(cfg.outPath), { recursive: true });
    writeFileSync(cfg.outPath, html, "utf8");
    console.log(`built ${locale} -> ${cfg.outPath.replace(ROOT, "").replace(/\\/g, "/")} (${(html.length / 1024).toFixed(1)} KB)`);
  }
}

main();
