# Krevyon — sitio web

Sitio de una sola página (HTML/CSS/JS puro, sin build) que muestra las capacidades de diseño y desarrollo de Krevyon. El motion de scroll usa GSAP + ScrollTrigger cargados por CDN; el sitio funciona igual de completo sin conexión a internet (o si el CDN falla), solo sin las animaciones extra de profundidad — nada queda oculto o roto.

## Cómo correrlo

No requiere instalación. Cualquiera de estas opciones funciona:

- Abrir `index.html` directamente en el navegador.
- O servirlo con un servidor estático simple, por ejemplo:

```bash
python -m http.server 8000
# luego abrir http://localhost:8000
```

## Cómo editar los enlaces y textos de marca

Todo el contacto (WhatsApp, Instagram, correo, ubicación) y el copy de marca
reutilizado (tagline, CTA principal) viven en un solo archivo:

`js/config.js`

Cambiá esos valores y se actualizan automáticamente en navbar, hero, CTA final
y footer — no hay que tocar el HTML.

## El logo

El logo real ya está integrado: `assets/Logo.jpeg` es el archivo original.
A partir de ahí se generaron:

- `assets/logo-icon.png` — recorte ajustado al contenido real del isotipo (sin relleno extra), usado en navbar y footer.
- `assets/logo-square.png` — versión con lienzo cuadrado, usada como el mark grande del hero.
- `assets/favicon-32.png`, `favicon-64.png`, `favicon-180.png` — íconos generados a partir del logo.

Si el logo cambia, hay que regenerar estos derivados (recorte + fondo
transparente + tamaños de favicon) y actualizar los atributos `width`/`height`
de las etiquetas `<img>` en `index.html` para que coincidan con las nuevas
dimensiones.

## Estructura

```
index.html         Marcado semántico de toda la página
css/styles.css      Tokens de diseño + todos los estilos
js/config.js        Enlaces y textos de marca editables
js/main.js          Nav, menú móvil, scroll reveal, tabs, acordeón FAQ
js/motion.js        Mejoras de scroll con GSAP/ScrollTrigger (progressive enhancement)
assets/Logo.jpeg    Logo original
assets/logo-*.png    Derivados del logo (recortado, cuadrado, favicons)
```

## Dirección visual

La cinta doblada del logo (cian → azul → violeta → magenta) es el material
estructural del sitio, no un logo pegado a una plantilla: la misma
degradación reaparece como línea del proceso, borde de tarjeta, indicador de
pestaña activa y punto de cada ítem. Ver `DESIGN.md` para el sistema completo
(paleta exacta muestreada del logo, tipografía, componentes, reglas
nombradas) y el comentario al inicio de `<body>` en `index.html` para el
contrato de dirección de esta build.
