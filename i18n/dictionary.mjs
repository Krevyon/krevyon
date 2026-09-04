/**
 * Krevyon i18n dictionary — build-time source of truth for both static
 * pages (index.html / en/index.html). Consumed only by scripts/build-
 * pages.mjs at generation time; never shipped to the browser.
 *
 * Every key maps to { es, en }. Adding a translatable string anywhere in
 * templates/page.template.html means adding one entry here with both
 * languages, then rerunning `node scripts/build-pages.mjs`.
 */
export const dict = {
    /* ---------------- meta / document head ---------------- */
    "meta.title": {
      es: "Krevyon — Diseño y desarrollo web premium en Costa Rica",
      en: "Krevyon — Premium Web Design & Development in Costa Rica",
    },
    "meta.description": {
      es: "Krevyon diseña y construye experiencias web premium: sitios corporativos, páginas de alto impacto y presencia digital para restaurantes, clínicas, barberías, tiendas y marcas personales.",
      en: "Krevyon designs and builds premium web experiences: corporate sites, high-impact landing pages, and digital presence for restaurants, clinics, barbershops, stores, and personal brands.",
    },
    "meta.ogTitle": {
      es: "Krevyon — Diseño y desarrollo web premium",
      en: "Krevyon — Premium Web Design & Development",
    },
    "meta.ogDescription": {
      es: "Sitios web que se sienten premium desde el primer segundo. Diseño, desarrollo y animación para negocios reales.",
      en: "Websites that feel premium from the first second. Design, development, and motion design for real businesses.",
    },
    "meta.locale": { es: "es_CR", en: "en_US" },

    /* ---------------- accessibility-only strings ---------------- */
    "a11y.skipLink": { es: "Saltar al contenido principal", en: "Skip to main content" },
    "a11y.brandLabel": { es: "Krevyon — inicio", en: "Krevyon — home" },
    "a11y.langSwitch": { es: "Seleccionar idioma", en: "Select language" },
    "a11y.navMain": { es: "Navegación principal", en: "Main navigation" },
    "a11y.navFooter": { es: "Navegación de pie de página", en: "Footer navigation" },
    "a11y.navToggle": { es: "Abrir menú", en: "Open menu" },
    "a11y.buildTabs": { es: "Tipos de negocio", en: "Business types" },
    "a11y.whatsappFab": { es: "Escribir por WhatsApp", en: "Message us on WhatsApp" },

    /* ---------------- nav ---------------- */
    "nav.services": { es: "Servicios", en: "Services" },
    "nav.why": { es: "Por qué", en: "Why us" },
    "nav.build": { es: "Construimos", en: "What we build" },
    "nav.process": { es: "Proceso", en: "Process" },
    "nav.faq": { es: "FAQ", en: "FAQ" },
    "nav.contact": { es: "Contacto", en: "Contact" },
    "nav.cta": { es: "Escribinos", en: "Message us" },
    "nav.mobileCta": { es: "Escribir por WhatsApp", en: "Message us on WhatsApp" },

    /* ---------------- hero ---------------- */
    "hero.badge": { es: "Desarrollo web a medida", en: "Custom web development" },
    "hero.title.line1": { es: "Desarrollo web", en: "Web development" },
    "hero.title.line2": { es: "a tu medida", en: "made for you" },
    "hero.sub": {
      es: "Creamos experiencias digitales de alto rendimiento que impulsan tu marca, generan resultados y escalan contigo.",
      en: "We build high-performing digital experiences that grow your brand, drive results, and scale with your business.",
    },
    "hero.ctaPrimary": { es: "Ver servicios", en: "See our services" },
    "hero.ctaSecondary": { es: "Cotizar ahora", en: "Get a quote" },

    /* ---------------- servicios ---------------- */
    "services.title": {
      es: "Todo lo que necesita tu presencia web, en un solo equipo.",
      en: "Everything your website needs, from one team.",
    },
    "services.lead": {
      es: "No solo diseñamos ni solo programamos: cubrimos el camino completo, de la estrategia visual al sitio publicado.",
      en: "We don't just design or just code — we cover the whole journey, from visual strategy to a published website.",
    },
    "services.card1.title": { es: "Diseño web", en: "Web design" },
    "services.card1.desc": {
      es: "Interfaces que comunican quién sos y qué ofrecés en segundos, no en párrafos.",
      en: "Interfaces that show who you are and what you offer in seconds, not paragraphs.",
    },
    "services.card2.title": { es: "Desarrollo web", en: "Web development" },
    "services.card2.desc": {
      es: "Código limpio, rápido y bien estructurado. Nada de plantillas genéricas por dentro.",
      en: "Clean, fast, well-structured code — never a generic template underneath.",
    },
    "services.card3.title": { es: "Páginas de alto impacto", en: "High-impact pages" },
    "services.card3.desc": {
      es: "Una pantalla, un objetivo: convertir la visita en un contacto real.",
      en: "One screen, one goal: turning a visit into a real contact.",
    },
    "services.card4.title": { es: "Marcas y negocios", en: "Brands & businesses" },
    "services.card4.desc": {
      es: "Restaurantes, clínicas, barberías, tiendas y marcas personales.",
      en: "Restaurants, clinics, barbershops, stores, and personal brands.",
    },
    "services.card5.title": { es: "Pensado primero para el celular", en: "Built for phones first" },
    "services.card5.desc": {
      es: "La mayoría de tus clientes te va a ver desde el celular. Diseñamos primero para esa pantalla, y luego para tablet y computadora.",
      en: "Most of your customers will see you from their phone. We design for that screen first, then for tablet and desktop.",
    },
    "services.card6.title": { es: "Animación con propósito", en: "Purposeful animation" },
    "services.card6.desc": {
      es: "Pequeños detalles animados que hacen que tu sitio se sienta vivo, no relleno visual.",
      en: "Small animated details that make your site feel alive, never filler.",
    },
    "services.card7.title": { es: "Contacto y conversión", en: "Contact & conversion" },
    "services.card7.desc": {
      es: "WhatsApp, formularios y botones pensados para que tus visitantes realmente te escriban.",
      en: "WhatsApp, forms, and buttons designed to actually get visitors to reach out.",
    },
    "services.card8.title": { es: "Rediseño de sitios", en: "Website redesigns" },
    "services.card8.desc": {
      es: "¿Ya tenés sitio pero no te representa? Lo llevamos a otro nivel sin partir de cero.",
      en: "Already have a site that doesn't represent you? We take it to the next level without starting from scratch.",
    },

    /* ---------------- por qué ---------------- */
    "why.title": {
      es: "Lo que otros dejan para después, en Krevyon va primero.",
      en: "What others leave for later, we handle first.",
    },
    "why.item1.title": { es: "Diseño premium", en: "Premium design" },
    "why.item1.desc": {
      es: "Cada sitio se piensa como una pieza de diseño hecha a tu medida, no como un formulario que se llena.",
      en: "Every site is designed as a custom piece, not a form you fill in.",
    },
    "why.item2.title": { es: "Código de calidad", en: "Quality code" },
    "why.item2.desc": {
      es: "Buenas prácticas de verdad: un sitio rápido, ordenado y fácil de mantener a futuro.",
      en: "Real best practices: a fast, organized site that's easy to maintain down the road.",
    },
    "why.item3.title": { es: "Enfoque estratégico", en: "Strategic approach" },
    "why.item3.desc": {
      es: "Antes de diseñar una pantalla, entendemos tu negocio y a quién le hablás.",
      en: "Before designing a single screen, we understand your business and who you're talking to.",
    },
    "why.item4.title": { es: "Comunicación clara", en: "Clear communication" },
    "why.item4.desc": {
      es: "Te explicamos cada paso en palabras simples, sin tecnicismos ni sorpresas de última hora.",
      en: "We explain every step in plain words, with no jargon and no last-minute surprises.",
    },
    "why.item5.title": { es: "Atención al detalle", en: "Attention to detail" },
    "why.item5.desc": {
      es: "Espaciado, contraste, jerarquía: los detalles que hacen que un sitio se sienta profesional.",
      en: "Spacing, contrast, hierarchy: the details that make a site feel professional.",
    },
    "why.item6.title": { es: "Plazos definidos", en: "Clear timelines" },
    "why.item6.desc": {
      es: "Sabés desde el inicio cuánto va a tomar tu proyecto y cuándo vas a verlo terminado.",
      en: "You know from day one how long your project will take and when you'll see it finished.",
    },
    "why.item7.title": { es: "Páginas que venden mejor", en: "Pages that sell better" },
    "why.item7.desc": {
      es: "Cada sección empuja hacia una acción clara: que te escriban.",
      en: "Every section pushes toward one clear action: getting them to contact you.",
    },
    "why.item8.title": { es: "Identidad coherente", en: "Consistent identity" },
    "why.item8.desc": {
      es: "Un mismo lenguaje visual del logo al último botón del pie de página.",
      en: "One visual language, from the logo to the very last button in the footer.",
    },

    /* ---------------- construimos ---------------- */
    "build.title": {
      es: "Un sistema visual distinto para cada tipo de negocio.",
      en: "A different visual system for every kind of business.",
    },
    "build.lead": {
      es: "Un restaurante, una clínica y una tienda no necesitan la misma interfaz. Diseñamos cada sistema pensando en cómo funciona ese negocio —su ritmo, su público, su forma de vender— y eso se nota en cada detalle.",
      en: "A restaurant, a clinic, and a store don't need the same interface. We design each system around how that business actually works — its pace, its audience, its way of selling — and it shows in every detail.",
    },
    "build.tab.restaurantes": { es: "Restaurantes", en: "Restaurants" },
    "build.tab.clinicas": { es: "Clínicas", en: "Clinics" },
    "build.tab.barberias": { es: "Barberías", en: "Barbershops" },
    "build.tab.marcas": { es: "Marcas personales", en: "Personal Brands" },
    "build.tab.tiendas": { es: "Tiendas", en: "Stores" },
    "build.tab.servicios": { es: "Servicios", en: "Services" },

    "build.restaurantes.badge": { es: "Especialidad de la casa", en: "Chef's choice" },
    "build.restaurantes.sub": { es: "Cocina de autor · San José", en: "Signature cuisine · San José" },
    "build.restaurantes.tab1": { es: "Recomendados", en: "Recommended" },
    "build.restaurantes.tab2": { es: "Entradas", en: "Starters" },
    "build.restaurantes.tab3": { es: "Fuertes", en: "Mains" },
    "build.restaurantes.tab4": { es: "Bebidas", en: "Drinks" },
    "build.restaurantes.dish1": { es: "Pescado del día, leche de tigre, camote", en: "Catch of the day, tiger's milk, sweet potato" },
    "build.restaurantes.dish2": { es: "Arborio, hongos, parmesano curado", en: "Arborio rice, mushrooms, aged parmesan" },
    "build.restaurantes.btn1": { es: "Reservar mesa", en: "Book a table" },
    "build.restaurantes.btn2": { es: "Pedir ahora", en: "Order now" },
    "build.restaurantes.h3": { es: "Restaurantes", en: "Restaurants" },
    "build.restaurantes.p": {
      es: "Una experiencia gastronómica digital: menú por categorías, fotografía real de cada plato, rating y un camino corto hacia la reserva o el pedido.",
      en: "A digital dining experience: a categorized menu, real photography for every dish, ratings, and a short path to booking or ordering.",
    },

    "build.clinicas.greet": { es: "Hola, Marco", en: "Hi, Marco" },
    "build.clinicas.tab1": { es: "General", en: "General" },
    "build.clinicas.tab2": { es: "Fisioterapia", en: "Physiotherapy" },
    "build.clinicas.tab3": { es: "Odontología", en: "Dentistry" },
    "build.clinicas.doc1name": { es: "Dra. Ana Rojas", en: "Dr. Ana Rojas" },
    "build.clinicas.doc1role": { es: "Medicina general · 12 años", en: "General medicine · 12 years" },
    "build.clinicas.doc2name": { es: "Dr. Luis Vega", en: "Dr. Luis Vega" },
    "build.clinicas.doc2role": { es: "Fisioterapia · 8 años", en: "Physiotherapy · 8 years" },
    "build.clinicas.confirm": { es: "Miércoles 10:30 con Dra. Rojas", en: "Wednesday 10:30 with Dr. Rojas" },
    "build.clinicas.btn": { es: "Confirmar cita", en: "Confirm appointment" },
    "build.clinicas.h3": { es: "Clínicas", en: "Clinics" },
    "build.clinicas.p": {
      es: "Un sistema limpio y confiable: especialidades claras, perfiles de cada profesional y una agenda que se siente tan ordenada como la clínica misma.",
      en: "A clean, trustworthy system: clear specialties, a profile for every professional, and a schedule that feels as organized as the clinic itself.",
    },

    "build.barberias.sub": { es: "Barbería urbana · Escazú", en: "Urban barbershop · Escazú" },
    "build.barberias.opt1": { es: "Corte", en: "Haircut" },
    "build.barberias.opt2": { es: "Barba", en: "Beard" },
    "build.barberias.opt3": { es: "Combo", en: "Combo" },
    "build.barberias.svc1name": { es: "Corte + barba", en: "Haircut + beard" },
    "build.barberias.svc2name": { es: "Fade + diseño", en: "Fade + design" },
    "build.barberias.staffmeta": { es: "Especialista en fade · 4.9", en: "Fade specialist · 4.9" },
    "build.barberias.btn": { es: "Reservar", en: "Book now" },
    "build.barberias.h3": { es: "Barberías", en: "Barbershops" },
    "build.barberias.p": {
      es: "Estética urbana y editorial: servicios con precio y duración a la vista, selección de barbero y reserva de horario en un par de toques.",
      en: "Urban, editorial style: services with price and duration up front, barber selection, and booking in just a couple of taps.",
    },

    "build.marcas.role": { es: "Diseñadora & Consultora de marca", en: "Designer & Brand Consultant" },
    "build.marcas.bio": {
      es: "Ayudo a marcas y personas a verse tan bien como se sienten. Identidad, dirección visual y presencia digital con criterio editorial.",
      en: "I help brands and people look as good as they feel. Identity, visual direction, and digital presence with an editorial eye.",
    },
    "build.marcas.svc1": { es: "Consultoría de marca", en: "Brand consulting" },
    "build.marcas.svc2": { es: "Diseño de identidad visual", en: "Visual identity design" },
    "build.marcas.btn": { es: "Escribirme", en: "Message me" },
    "build.marcas.h3": { es: "Marcas personales", en: "Personal Brands" },
    "build.marcas.p": {
      es: "Un portafolio editorial que se ve a la altura del trabajo que ya estás haciendo: tipografía con carácter, proyectos destacados y una forma directa de contactarte.",
      en: "An editorial portfolio that matches the level of work you're already doing: expressive typography, featured projects, and a direct way to get in touch.",
    },

    "build.tiendas.search": { es: "Buscar productos", en: "Search products" },
    "build.tiendas.tab1": { es: "Todo", en: "All" },
    "build.tiendas.tab2": { es: "Nuevo", en: "New" },
    "build.tiendas.tab3": { es: "Rebajas", en: "Sale" },
    "build.tiendas.badge": { es: "Nuevo", en: "New" },
    "build.tiendas.p1name": { es: "Tenis urbanos", en: "Urban sneakers" },
    "build.tiendas.p2name": { es: "Mochila urbana", en: "Urban backpack" },
    "build.tiendas.cart": { es: "Carrito · 2 productos", en: "Cart · 2 items" },
    "build.tiendas.h3": { es: "Tiendas y catálogos", en: "Stores & Catalogs" },
    "build.tiendas.p": {
      es: "Una tienda en línea real: búsqueda, categorías, fotografía de producto, carrito visible y un camino de dos toques hasta el pago.",
      en: "A real online store: search, categories, product photography, a visible cart, and a two-tap path to checkout.",
    },

    "build.servicios.bio": {
      es: "Ayudamos a negocios a ordenar sus finanzas y crecer con un plan claro, no con promesas vagas.",
      en: "We help businesses organize their finances and grow with a clear plan, not vague promises.",
    },
    "build.servicios.step1": { es: "Diagnóstico gratuito", en: "Free assessment" },
    "build.servicios.step2": { es: "Propuesta en 48h", en: "Proposal within 48h" },
    "build.servicios.step3": { es: "Acompañamiento sin permanencia", en: "Support with no lock-in contract" },
    "build.servicios.select": { es: "Elegí un servicio", en: "Choose a service" },
    "build.servicios.field1": { es: "Tu nombre", en: "Your name" },
    "build.servicios.field2": { es: "Tu correo", en: "Your email" },
    "build.servicios.btn": { es: "Solicitar cotización", en: "Request a quote" },
    "build.servicios.h3": { es: "Consultorías y servicios profesionales", en: "Professional Services" },
    "build.servicios.p": {
      es: "Propuesta de valor clara, proceso visible y un mini formulario de cotización pensados para convertir tráfico en contactos calificados.",
      en: "A clear value proposition, a visible process, and a short quote form designed to turn visitors into qualified leads.",
    },

    /* ---------------- showcase ---------------- */
    "showcase.title": { es: "Interfaces que hablan por sí solas.", en: "Interfaces that speak for themselves." },
    "showcase.lead": {
      es: "Composiciones propias que muestran el rango de lo que podemos construir: de un panel de control completo a una app que se siente pulida en el bolsillo.",
      en: "Original compositions that show the range of what we can build: from a complete dashboard to an app that feels polished right in your pocket.",
    },
    "showcase.tag.mobile": { es: "Móvil", en: "Mobile" },
    "showcase.tag.desktop": { es: "Escritorio", en: "Desktop" },
    "showcase.tag.tablet": { es: "Tableta", en: "Tablet" },

    "showcase.mobile.greet": { es: "Buen día", en: "Good morning" },
    "showcase.mobile.statusTitle": { es: "Tu pedido va en camino", en: "Your order is on its way" },
    "showcase.mobile.statusMeta": { es: "Paso 2 de 3 · Preparando", en: "Step 2 of 3 · Preparing" },
    "showcase.mobile.mapLabel": { es: "Ruta al domicilio", en: "Route to your address" },
    "showcase.mobile.btn": { es: "Ver pedido", en: "View order" },
    "showcase.mobile.nav1": { es: "Inicio", en: "Home" },
    "showcase.mobile.nav2": { es: "Pedidos", en: "Orders" },
    "showcase.mobile.nav3": { es: "Mapa", en: "Map" },
    "showcase.mobile.nav4": { es: "Perfil", en: "Profile" },

    "showcase.desktop.nav1": { es: "Inicio", en: "Home" },
    "showcase.desktop.nav2": { es: "Pedidos", en: "Orders" },
    "showcase.desktop.nav3": { es: "Clientes", en: "Customers" },
    "showcase.desktop.nav4": { es: "Reportes", en: "Reports" },
    "showcase.desktop.search": { es: "Buscar pedido", en: "Search order" },
    "showcase.desktop.kpi1": { es: "Pedidos hoy", en: "Orders today" },
    "showcase.desktop.kpi2": { es: "Ventas del mes", en: "Monthly sales" },
    "showcase.desktop.kpi3": { es: "Satisfacción", en: "Satisfaction" },
    "showcase.desktop.chartTitle": { es: "Ventas semanales", en: "Weekly sales" },
    "showcase.desktop.chartPeriod": { es: "Esta semana", en: "This week" },
    "showcase.desktop.activityAll": { es: "Todos", en: "All" },
    "showcase.desktop.activityPending": { es: "Pendientes", en: "Pending" },
    "showcase.desktop.order1": { es: "Pedido #1042", en: "Order #1042" },
    "showcase.desktop.order2": { es: "Pedido #1041", en: "Order #1041" },
    "showcase.desktop.order3": { es: "Pedido #1040", en: "Order #1040" },
    "showcase.desktop.delivered": { es: "Entregado", en: "Delivered" },
    "showcase.desktop.enroute": { es: "En camino", en: "On the way" },
    "showcase.desktop.cta": { es: "Ver todos los pedidos", en: "View all orders" },

    "showcase.tablet.title": { es: "The Fade Club · Servicios", en: "The Fade Club · Services" },
    "showcase.tablet.chip": { es: "Reserva rápida", en: "Quick booking" },
    "showcase.tablet.cat1": { es: "Cortes", en: "Haircuts" },
    "showcase.tablet.cat2": { es: "Coloración", en: "Coloring" },
    "showcase.tablet.cat3": { es: "Tratamientos", en: "Treatments" },
    "showcase.tablet.card1": { es: "Corte clásico", en: "Classic cut" },
    "showcase.tablet.card2": { es: "Fade", en: "Fade" },
    "showcase.tablet.card3": { es: "Diseño", en: "Design" },
    "showcase.tablet.footMeta": { es: "Kevin M. · Hoy 13:00", en: "Kevin M. · Today 1:00 PM" },
    "showcase.tablet.btn": { es: "Reservar", en: "Book now" },

    /* ---------------- proceso ---------------- */
    "process.title": { es: "Un proceso claro, de la idea al sitio publicado.", en: "A clear process, from idea to published site." },
    "process.step1.title": { es: "Descubrimiento", en: "Discovery" },
    "process.step1.desc": {
      es: "Entendemos tu negocio, tu público y qué necesita tu sitio para funcionar de verdad.",
      en: "We learn about your business, your audience, and what your site actually needs to work.",
    },
    "process.step2.title": { es: "Dirección visual", en: "Visual direction" },
    "process.step2.desc": {
      es: "Definimos identidad, tono y estructura antes de diseñar una sola pantalla.",
      en: "We define identity, tone, and structure before designing a single screen.",
    },
    "process.step3.title": { es: "Diseño", en: "Design" },
    "process.step3.desc": {
      es: "Construimos la experiencia visual completa: jerarquía, paleta, tipografía y composición.",
      en: "We build the full visual experience: hierarchy, color palette, typography, and layout.",
    },
    "process.step4.title": { es: "Desarrollo", en: "Development" },
    "process.step4.desc": {
      es: "Programamos el sitio real: rápido, adaptable a cualquier pantalla y construido con buenas prácticas.",
      en: "We build the real site: fast, responsive on every screen, and built with good practices.",
    },
    "process.step5.title": { es: "Optimización", en: "Optimization" },
    "process.step5.desc": {
      es: "Revisamos rendimiento, accesibilidad y comportamiento en cada dispositivo.",
      en: "We check performance, accessibility, and behavior on every device.",
    },
    "process.step6.title": { es: "Lanzamiento", en: "Launch" },
    "process.step6.desc": {
      es: "Publicamos tu sitio y ajustamos con datos reales de uso.",
      en: "We publish your site and fine-tune it using real usage data.",
    },

    /* ---------------- fortalezas ---------------- */
    "strengths.title": { es: "Lo técnico también es parte del diseño.", en: "The technical side is part of the design too." },
    "strengths.lead": {
      es: "Un sitio hermoso que no carga rápido o no funciona bien en celular no está terminado. Cuidamos ambos lados.",
      en: "A beautiful site that loads slowly or doesn't work well on mobile isn't finished. We take care of both sides.",
    },
    "strengths.item1": { es: "Funciona igual de bien en el celular que en la computadora", en: "Works just as well on a phone as on a computer" },
    "strengths.item2": { es: "Carga rápido, sin esperas innecesarias", en: "Loads fast, with no unnecessary waiting" },
    "strengths.item3": { es: "Mensajes y botones claros, pensados para que actúes", en: "Clear messages and buttons, designed to get you to act" },
    "strengths.item4": { es: "Mismo estilo visual del logo al pie de página", en: "One consistent look, from the logo to the footer" },
    "strengths.item5": { es: "La versión para celular no es una versión recortada", en: "The mobile version isn't a stripped-down version" },
    "strengths.item6": { es: "Detalles interactivos que responden a cada acción, sin distraer", en: "Interactive details that respond to every action, without distracting" },
    "strengths.item7": { es: "Accesible para todos: buen contraste y navegación clara", en: "Accessible to everyone: good contrast and clear navigation" },
    "strengths.item8": { es: "Estructurado para que Google encuentre tu negocio más fácil", en: "Structured so Google can find your business more easily" },

    /* ---------------- experiencia ---------------- */
    "feel.title.line1": { es: "No hacemos páginas.", en: "We don't just build pages." },
    "feel.title.line2": { es: "Elevamos marcas.", en: "We elevate brands." },
    "feel.text": {
      es: "Un sitio bien hecho cambia cómo te ven tus clientes antes de que hablen con vos. Por eso cada proyecto empieza con una pregunta simple: ¿qué necesita ver alguien para confiar en este negocio? Todo lo demás —el diseño, el código, el movimiento— existe para responder eso.",
      en: "A well-made site changes how customers see you before they ever talk to you. That's why every project starts with a simple question: what does someone need to see to trust this business? Everything else — the design, the code, the motion — exists to answer that.",
    },

    /* ---------------- valor ---------------- */
    "value.title": { es: "Resultados que podés notar desde el primer día.", en: "Results you can notice from day one." },
    "value.item1": { es: "Mejor presencia digital", en: "A stronger digital presence" },
    "value.item2": { es: "Mayor confianza de tus clientes", en: "More trust from your customers" },
    "value.item3": { es: "Te diferenciás de la competencia", en: "You stand out from the competition" },
    "value.item4": { es: "Claridad sobre lo que ofrecés", en: "Clarity about what you offer" },
    "value.item5": { es: "Más y mejores contactos", en: "More and better leads" },
    "value.item6": { es: "Un sitio que crece con tu negocio", en: "A site that grows with your business" },

    /* ---------------- faq ---------------- */
    "faq.title": { es: "Preguntas frecuentes.", en: "Frequently asked questions." },
    "faq.q1.q": { es: "¿Qué tipo de páginas hacen?", en: "What kind of websites do you build?" },
    "faq.q1.a": {
      es: "Sitios corporativos, páginas de alto impacto, presencia para restaurantes, clínicas, barberías, tiendas y marcas personales. Si necesitás presencia web, probablemente lo cubrimos.",
      en: "Corporate sites, high-impact landing pages, and web presence for restaurants, clinics, barbershops, stores, and personal brands. If you need a website, we probably cover it.",
    },
    "faq.q2.q": { es: "¿Trabajan solo en Costa Rica?", en: "Do you only work in Costa Rica?" },
    "faq.q2.a": {
      es: "Estamos basados en Costa Rica y ese es nuestro foco principal, pero al ser un servicio 100% remoto podemos trabajar con negocios en cualquier lugar.",
      en: "We're based in Costa Rica and that's our main focus, but since it's a fully remote service, we can work with businesses anywhere.",
    },
    "faq.q3.q": { es: "¿El sitio va a funcionar bien en celular?", en: "Will my site work well on mobile?" },
    "faq.q3.a": {
      es: "Sí. Diseñamos primero pensando en el celular, porque es desde ahí donde te va a ver la mayoría de tus visitas. Después nos aseguramos de que se vea igual de bien en tablet y computadora.",
      en: "Yes. We design for the phone first, since that's where most of your visitors will come from. Then we make sure it looks just as good on tablet and desktop.",
    },
    "faq.q4.q": { es: "¿Ayudan con rediseños de sitios existentes?", en: "Do you help redesign existing websites?" },
    "faq.q4.a": {
      es: "Sí. Si ya tenés un sitio pero sentís que no te representa, lo evaluamos y lo llevamos a otro nivel sin necesariamente partir de cero.",
      en: "Yes. If you already have a site that doesn't feel like it represents you, we evaluate it and take it to the next level, without necessarily starting from scratch.",
    },
    "faq.q5.q": { es: "¿Cómo empiezo un proyecto con Krevyon?", en: "How do I start a project with Krevyon?" },
    "faq.q5.a": {
      es: "Escribinos por WhatsApp contándonos qué necesitás. Te respondemos con preguntas puntuales y una idea clara de cómo seguir, sin presión.",
      en: "Message us on WhatsApp and tell us what you need. We'll reply with specific questions and a clear idea of next steps, no pressure.",
    },

    /* ---------------- CTA final ---------------- */
    "cta.title": { es: "Tu negocio merece un sitio tan bueno como lo que ofrecés.", en: "Your business deserves a site as good as what you offer." },
    "cta.lead": {
      es: "Contanos qué necesitás y te respondemos con una propuesta clara. Sin vueltas, sin presión.",
      en: "Tell us what you need and we'll respond with a clear proposal. No runaround, no pressure.",
    },
    "cta.whatsapp": { es: "Escribir por WhatsApp", en: "Message us on WhatsApp" },
    "cta.instagram": { es: "Ver Instagram", en: "See our Instagram" },
    "cta.email": { es: "Escribir un correo", en: "Send an email" },

    /* ---------------- footer ---------------- */
    "footer.tagline": { es: "Diseño y desarrollo web premium para negocios reales.", en: "Premium web design and development for real businesses." },
    "footer.navWhy": { es: "Por qué Krevyon", en: "Why Krevyon" },
    "footer.navBuild": { es: "Lo que construimos", en: "What we build" },
    "footer.email": { es: "Correo", en: "Email" },
    "footer.copyrightPre": { es: "© ", en: "© " },
    "footer.copyrightPost": { es: " Krevyon. Diseñado y construido por Krevyon.", en: " Krevyon. Designed and built by Krevyon." },
    "footer.signature": { es: "Sitios web que se sienten premium.", en: "Websites that feel premium." },
  };
