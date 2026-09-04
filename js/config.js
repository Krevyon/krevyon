/**
 * Krevyon — configuración central de marca y contacto.
 * Edita únicamente los valores de este objeto; el resto del sitio los consume
 * mediante data-config / data-link en el HTML, así que no hay que tocar
 * markup para actualizar un enlace o un texto de marca.
 *
 * Nota: solo los enlaces de contacto y `location` son independientes del
 * idioma y siguen viviendo aquí vía data-config. Cualquier copy visible que
 * necesite traducción (tagline, CTA, descripciones) vive en el diccionario
 * ES/EN de js/i18n.js vía data-i18n, no aquí — este objeto ya no alimenta
 * esos textos aunque los campos queden como referencia.
 */
window.KREVYON_CONFIG = {
  name: "Krevyon",
  tagline: "Diseño y desarrollo web que se sienten premium.",
  shortDescription: "Diseño y desarrollo web premium para negocios reales.",
  primaryCta: "Escribir por WhatsApp",
  instagram: "https://instagram.com/krevyon",
  whatsapp: "https://wa.me/50660356842",
  whatsappDisplay: "+506 0000 0000",
  email: "hola@krevyon.com",
  location: "Costa Rica",
  whatsappMessage:
    "Hola Krevyon, quiero conversar sobre un proyecto web para mi negocio.",
};
