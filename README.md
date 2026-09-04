# Krevyon — sitio web

Sitio de una sola página, en dos idiomas reales (`/` español, `/en/` inglés), que muestra las capacidades de diseño y desarrollo de Krevyon. HTML/CSS/JS puro — no hay framework ni `package.json` ni build para *ver* el sitio. El motion de scroll usa GSAP + ScrollTrigger cargados por CDN, de forma diferida (después de que la página termina de cargar); el sitio funciona igual de completo sin conexión a internet, sin JavaScript, o si el CDN falla — solo sin las animaciones extra, nada queda oculto o roto.

## Cómo correrlo

No requiere instalación para verlo. Cualquiera de estas opciones funciona:

- Abrir `index.html` directamente en el navegador.
- O servirlo con un servidor estático simple, por ejemplo:

```bash
python -m http.server 8000
# luego abrir http://localhost:8000 (o /en/ para la versión en inglés)
```

## Cómo editar el contenido (¡leer antes de tocar `index.html`!)

`index.html` y `en/index.html` son **archivos generados** — nunca se editan a mano. La fuente real es `templates/page.template.html` (estructura + copy en español + atributos `data-i18n`) junto con el diccionario ES/EN en `i18n/dictionary.mjs`. Después de editar el template o el diccionario, regenerá ambas páginas:

```bash
node scripts/build-pages.mjs
```

No instala nada (cero dependencias de npm) — solo lee el template y el diccionario y vuelve a escribir `index.html` y `en/index.html`. Ver la sección Architecture de `CLAUDE.md` para el detalle completo (por qué son dos páginas estáticas reales y no un toggle de JavaScript, cómo funciona el generador, convención `data-i18n`/`data-i18n-attr`).

## Cómo editar los enlaces y textos de marca

Todo el contacto (WhatsApp, Instagram, correo, ubicación) y el copy de marca
reutilizado (tagline, CTA principal) viven en un solo archivo:

`js/config.js`

Cambiá esos valores y se actualizan automáticamente en navbar, hero, CTA final
y footer — no hay que tocar el HTML.

## El logo

El logo real ya está integrado: `assets/Logo.jpeg` es el archivo original.
A partir de ahí se generaron, ya redimensionados a su tamaño real de uso
(no al tamaño completo del original — ver Architecture en `CLAUDE.md`):

- `assets/logo-icon.png` + `assets/logo-icon.webp` — recorte ajustado al contenido real del isotipo, usado en navbar y footer.
- `assets/favicon-32.png`, `favicon-64.png`, `favicon-180.png` — íconos generados a partir del logo.

Si el logo cambia, hay que regenerar estos derivados (recorte + resize al
tamaño real de despliegue + fondo transparente + tamaños de favicon) y
actualizar los atributos `width`/`height` de las etiquetas `<img>` en
`templates/page.template.html` para que coincidan con las nuevas
dimensiones, luego correr `node scripts/build-pages.mjs`.

## Estructura

```
templates/page.template.html   Fuente única de marcado + copy en español (editar acá)
index.html                     Generado (es) — no editar a mano
en/index.html                  Generado (en) — no editar a mano
scripts/build-pages.mjs        Generador: template + diccionario -> las dos páginas
i18n/dictionary.mjs             Diccionario ES/EN de todo el copy visible
i18n/site.mjs                   Dominio real + datos de contacto para canonical/hreflang/JSON-LD
css/styles.css                  Tokens de diseño + todos los estilos
js/config.js                    Enlaces y textos de marca editables (independientes de idioma)
js/main.js                      Nav, menú móvil, scroll reveal, tabs, acordeón FAQ
js/motion-loader.js             Carga diferida (idle, tras el load) de GSAP + motion.js
js/motion.js                    Mejoras de scroll con GSAP/ScrollTrigger (progressive enhancement)
js/hero-scene.js                Escena 3D del hero (Three.js, ES module, carga diferida)
assets/Logo.jpeg                Logo original
assets/logo-icon.png/.webp      Derivado del logo, ya al tamaño real de uso
uploads/                        Fotos reales de las mini-interfaces, ya optimizadas (.jpg + .webp)
robots.txt, sitemap.xml         SEO técnico (ambos idiomas, hreflang)
```

## Dirección visual

La cinta doblada del logo (cian → azul → violeta → magenta) es el material
estructural del sitio, no un logo pegado a una plantilla: la misma
degradación reaparece como línea del proceso, borde de tarjeta, indicador de
pestaña activa y punto de cada ítem. Ver `DESIGN.md` para el sistema completo
(paleta exacta muestreada del logo, tipografía, componentes, reglas
nombradas) y el comentario al inicio de `<body>` en `index.html` para el
contrato de dirección de esta build.
