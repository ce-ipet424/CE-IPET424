# Arquitectura del proyecto

Este documento describe cómo está organizado el repositorio, qué hace cada carpeta y cada archivo importante, y cómo se conectan entre sí las piezas principales. Las carpetas marcadas como vacías tienen solo un archivo `.gitkeep`: están reservadas para contenido futuro.

## Árbol de carpetas

```text
CE-IPET424/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.yml                          # Plantilla para reportar errores
│   │   └── feature_request.yml                     # Plantilla para proponer funciones
│   ├── workflows/
│   │   └── static.yml                              # Despliegue automático a GitHub Pages al hacer push a main
│   ├── CODE_OF_CONDUCT.md                      # Código de conducta
│   └── PULL_REQUEST_TEMPLATE.md                # Plantilla para pull requests
├── .well-known/
│   └── security.txt                            # Contacto para reportar fallas de seguridad
├── admin/                                  # Panel de administración (Decap CMS)
│   ├── config.yml                              # Colecciones del CMS, conexión con GitHub y Cloudinary
│   └── index.html                              # Página que carga Decap CMS
├── assets/                                 # Recursos estáticos
│   ├── audio/
│   │   ├── effects/                                # Efectos de sonido de la interfaz (.mp3)
│   │   └── music/                                  # Reservado para música de fondo (vacío)
│   ├── docs/                                   # PDFs descargables
│   │   ├── arg/                                    # Reservado para normativa nacional (vacío)
│   │   └── school/                                 # Documentos del colegio: estatuto, AEC, CUS, ISA, matrícula, etc.
│   ├── fonts/                                  # Tipografías locales en formato .woff2
│   ├── img/
│   │   ├── bg/                                     # Fondos de pantalla
│   │   ├── cursors/                                # Cursores personalizados (.cur)
│   │   ├── favicons/                               # Ícono de pestaña para modo claro y oscuro
│   │   ├── gallery/
│   │   │   ├── members/                                # Fotos de integrantes del Centro
│   │   │   └── school/                                 # Fotos de la escuela (vacío)
│   │   ├── icons/
│   │   │   ├── buttons/                                # Reservado para íconos de botones (vacío)
│   │   │   ├── footer/                                 # Íconos del pie de página
│   │   │   ├── header/                                 # Íconos del encabezado
│   │   │   └── widget/                                 # Íconos de los widgets
│   │   ├── logos/
│   │   │   ├── app/                                    # Logos para la app instalable (PWA)
│   │   │   ├── ce/                                     # Insignias del Centro de Estudiantes, por temporada
│   │   │   ├── channel/                                # Logos de canales de difusión
│   │   │   └── ig/                                     # Logos para Instagram
│   │   ├── mascot/                                 # Ilustraciones de la mascota en distintas variantes
│   │   ├── resources/                              # Mapas, bandera, escudo y otros recursos gráficos
│   │   └── plano.jpg                               # Plano de las instalaciones
│   ├── libs/                                   # Librerías de terceros incluidas en el repo (html2canvas, jsPDF)
│   ├── models/                                 # Reservado para modelos 3D (vacío)
│   └── videos/                                 # Reservado para videos (vacío)
├── components/                             # Fragmentos HTML que se insertan en todas las páginas
│   ├── _aside-news.html                        # Panel de configuración: temas, accesibilidad y opciones
│   ├── _aside-widgets.html                     # Panel de widgets: feriados, efemérides, frase, clima y vistas
│   ├── _footer.html                            # Pie de página
│   ├── _header.html                            # Encabezado, navegación y botones de herramientas
│   ├── _modal-in-dev.html                      # Aviso de sitio en fase alpha
│   ├── _modal-terms.html                       # Términos y condiciones con aceptación obligatoria
│   └── _modal-whats-new.html                   # Ventana de novedades al cambiar de versión
├── css/                                    # Hojas de estilo
│   ├── base/                                   # Variables, temas, tipografía y reset
│   │   ├── accessibility.css                       # Estilos de las opciones de accesibilidad
│   │   ├── fonts.css                               # Declaración de las tipografías locales
│   │   ├── normalize.css                           # Normalización de estilos entre navegadores
│   │   ├── reset.css                               # Reset y estilos globales base
│   │   ├── seasonal.css                            # Estilos de las temporadas
│   │   ├── themes.css                              # Paletas de color de cada tema
│   │   ├── typography.css                          # Jerarquía y estilos de texto
│   │   └── variables.css                           # Design tokens: colores, espaciados y tiempos
│   ├── components/                             # Estilos de componentes reutilizables
│   │   ├── accordion.css                           # Acordeones
│   │   ├── banners.css                             # Banners de aviso
│   │   ├── buttons.css                             # Botones
│   │   ├── cards.css                               # Tarjetas
│   │   ├── inputs.css                              # Campos de formulario y controles
│   │   ├── loader.css                              # Pantalla de carga
│   │   ├── modals.css                              # Ventanas modales
│   │   ├── scrollbar.css                           # Barra de desplazamiento
│   │   ├── toasts.css                              # Notificaciones flotantes
│   │   └── widgets.css                             # Widgets del panel lateral
│   ├── layout/                                 # Estructura general de la página
│   │   ├── asides.css                              # Paneles laterales
│   │   ├── content.css                             # Contenedor principal
│   │   ├── footer.css                              # Pie de página
│   │   ├── header.css                              # Encabezado
│   │   └── nav.css                                 # Navegación
│   ├── misc/                                   # Estilos sueltos
│   │   ├── error.css                               # Página 404 y errores
│   │   ├── extras.css                              # Easter eggs
│   │   └── specific.css                            # Estilos de casos particulares
│   ├── modules/                                # Estilos de subpáginas con lógica propia
│   │   ├── calendar.css                            # Calendario
│   │   ├── controls.css                            # Paneles de personalización
│   │   ├── members.css                             # Grilla de integrantes
│   │   └── schedules.css                           # Horarios
│   └── styles.css                              # Punto de entrada: importa el resto de las hojas
├── data/                                   # Contenido del sitio en JSON
│   ├── days.json                               # Efemérides
│   ├── events.json                             # Eventos (vacío)
│   ├── facts.json                              # Datos curiosos
│   ├── faqs.json                               # Preguntas frecuentes (vacío)
│   ├── holidays.json                           # Feriados
│   ├── manifest.json                           # Manifiesto para instalar el sitio como app
│   ├── members.json                            # Integrantes del Centro: nombre y curso
│   ├── news.json                               # Noticias (vacío)
│   ├── quotes.json                             # Frases del día
│   ├── schedules.json                          # Horarios por año y curso
│   ├── search-index.json                       # Índice que usa el buscador
│   ├── team.json                               # Reservado para el equipo (vacío)
│   └── version.json                            # Versión y fecha, leídas por el footer
├── docs/                                   # Documentación del proyecto
│   ├── ARCHITECTURE.md                         # Este archivo: estructura del proyecto
│   ├── CONTRIBUTING.md                         # Guía de contribución y convenciones
│   ├── CONTRIBUTING.md                         # Hitos en el desarrollo
│   └── ROADMAP.md                              # Plan de versiones hasta la 1.0
├── functions/                              # Funciones de Cloudflare Pages (backend mínimo)
│   └── api/                                    # Endpoints de inicio de sesión para Decap CMS
│       ├── auth.js                                 # Redirige a GitHub para autorizar el acceso
│       └── callback.js                             # Recibe el código de GitHub y devuelve el token al CMS
├── js/                                     # Lógica del sitio (módulos ES)
│   ├── extras/                                 # Easter eggs
│   │   ├── extras.js                               # Inicializa los easter eggs
│   │   ├── flip.js                                 # Giro de pantalla
│   │   ├── konami.js                               # Código Konami
│   │   ├── matrix.js                               # Efecto Matrix
│   │   ├── menu.js                                 # Toast secreto
│   │   ├── paint.js                                # Modo paint
│   │   ├── party.js                                # Modo fiesta
│   │   └── terminal.js                             # Terminal de consola
│   ├── modules/                                # Lógica de subpáginas específicas
│   │   ├── calendar.js                             # Calendario descargable
│   │   ├── members.js                              # Carga y muestra a los integrantes
│   │   └── schedules.js                            # Horarios: filtros, colores y descarga
│   ├── ui/                                     # Interfaz: componentes, widgets y temas
│   │   ├── banners.js                              # Banners de aviso
│   │   ├── buttons.js                              # Botones, paneles laterales y clima
│   │   ├── components.js                           # Carga de los fragmentos HTML de header, footer y paneles
│   │   ├── header.js                               # Menús del encabezado y buscador
│   │   ├── modals.js                               # Modales: aviso, términos y novedades
│   │   ├── pdf-reader.js                           # Visor de PDF en ventana modal
│   │   ├── theme.js                                # Cambio de temas, temporadas y modos
│   │   ├── toasts.js                               # Notificaciones flotantes
│   │   ├── version.js                              # Muestra la versión leída de version.json
│   │   └── widgets.js                              # Widgets: feriados, efemérides, frase, datos y vistas
│   ├── utils/                                  # Utilidades transversales
│   │   ├── accessibility.js                        # Fuente para dislexia y reducción de animaciones
│   │   ├── animations.js                           # Animaciones al hacer scroll
│   │   ├── changelog.js                            # Convierte el CHANGELOG en HTML para el modal
│   │   ├── font-size.js                            # Ajuste del tamaño de texto
│   │   ├── shortcuts.js                            # Atajos de teclado Alt + letra
│   │   └── sound.js                                # Efectos de sonido y su interruptor
│   └── main.js                                 # Punto de entrada: inicializa todos los módulos
├── .gitignore                              # Archivos que Git no sigue
├── .nojekyll                               # Evita que GitHub Pages ignore carpetas con guion bajo
├── 404.html                                # Página de error 404
├── CHANGELOG.md                            # Historial de cambios
├── LICENSE                                 # Licencia MIT
├── README.md                               # Documentación principal
├── calendario.html                         # Calendario descargable
├── contacto.html                           # Formulario (Google Forms) y datos de contacto
├── creditos.html                           # Créditos del equipo de desarrollo
├── escuela.html                            # Información institucional de la escuela
├── herramientas.html                       # Herramientas útiles para estudiantes
├── horarios.html                           # Horarios con personalización y descarga
├── humans.txt                              # Créditos del equipo y datos técnicos del sitio
├── index.html                              # Portal principal
├── nosotros.html                           # Quiénes somos e integrantes del Centro
├── noticias.html                           # Noticias (sección preparada, sin contenido todavía)
├── notes.txt                               # Notas personales de trabajo (ignorado por Git)
├── proyectos.html                          # Proyectos e iniciativas del Centro
├── recursos.html                           # Descargas y enlaces útiles (faltan algunos archivos)
├── robots.txt                              # Indicaciones para buscadores (bloquea la indexación)
├── terminos.html                           # Términos y condiciones de uso
└── tramites.html                           # Trámites y formularios en PDF
```

## Cómo se conectan las piezas

Cada página carga `css/styles.css` y `js/main.js`, este último como módulo. `main.js` arranca primero los componentes y después el resto de los módulos de `js/ui/`, `js/utils/` y `js/extras/`.

Header, footer y paneles laterales no están escritos en cada página. Están en `components/` y `js/ui/components.js` los descarga con `fetch` y los inserta antes de iniciar los demás módulos.

El contenido que cambia con frecuencia (frases, efemérides, feriados, integrantes) vive en `data/*.json`. Los widgets y el buscador leen esos archivos con `fetch`, y el panel de administración los edita desde el navegador.

Las subpáginas con lógica propia (horarios, calendario, integrantes) importan sus módulos desde `js/modules/` y sus estilos desde `css/modules/`. Así no se cargan en todo el sitio.

El clima se consulta a Open-Meteo desde `js/ui/buttons.js`, con coordenadas fijas de Villa Dolores.

El panel de administración usa `admin/` para cargar Decap CMS. El inicio de sesión con GitHub pasa por `functions/api/`, que son funciones de Cloudflare Pages. Por eso el panel no funciona abriendo los archivos directamente ni con un servidor local simple.
