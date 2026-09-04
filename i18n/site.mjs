/**
 * Krevyon — constantes de sitio para build time (scripts/build-pages.mjs).
 *
 * Solo los valores que la generación de HTML necesita para canonical/
 * hreflang/JSON-LD: el dominio real de producción y los datos de contacto
 * ya honestos que también viven en js/config.js (WhatsApp/Instagram/correo
 * son los mismos placeholders documentados en PRODUCT.md). Este archivo
 * existe separado de js/config.js porque ese otro corre en el navegador
 * (usa `window`) y este corre en Node durante la generación — no porque el
 * dato sea distinto.
 */
export const site = {
  url: "https://krevyon.com",
  name: "Krevyon",
  email: "hola@krevyon.com",
  instagram: "https://instagram.com/krevyon",
  location: "Costa Rica",
};
