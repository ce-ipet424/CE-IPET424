## Roadmap de desarrollo

> **Planificación de versiones y ciclo de vida del Portal Institucional**
> **Fecha de lanzamiento oficial (v1.0):** 16 de marzo de 2027

Este documento refleja el estado real del proyecto según el [CHANGELOG](../CHANGELOG.md). Las versiones completadas se marcan con `[x]`. Las pendientes se renumeraron a partir de la 0.49, siguiendo el orden original de prioridades. Cuando una función está hecha solo en parte, se aclara entre paréntesis.

---

## Fase 3: Ciclo Alpha (v0.26 a v0.40)

_Enfoque: arquitectura base, modularización, sistema de temas, accesibilidad y componentes interactivos._

### Completado

- [x] **v0.26 - Feedback sonoro**
    - Motor de audio liviano para interacciones de la interfaz.
    - Sonidos para los switches de modo oscuro y claro, clics en botones principales y apertura de modales.
    - Control de sonido con persistencia en `localStorage`.

- [x] **v0.27 - Sistema de novedades**
    - Modal que aparece al detectar una nueva versión.
    - Lectura dinámica del changelog para mostrar las últimas mejoras.

- [x] **v0.28 - Arquitectura CSS y rework de variables**
    - `variables.css` como sistema de design tokens.
    - Estandarización de espaciados, bordes, escalas tipográficas y tiempos de transición.

- [x] **v0.29 - Accesibilidad ampliada y refactorización modular**
    - Controles para ajustar el tamaño del texto, alto contraste y fuente para dislexia.
    - Mejoras en la navegación por teclado (`:focus-visible`) y atributos ARIA.
    - CSS separado en `base/`, `layout/`, `components/` y `misc/`, unificado por `styles.css`.

- [x] **v0.30 - Aside con widget de datos curiosos y documentación en Markdown**
    - Panel lateral dedicado al widget "Sabías qué...".
    - Archivos `.md` en la raíz con la documentación del repositorio.

- [x] **v0.31 - Consolidación de nombres e interfaz base**
    - Subpáginas adaptadas al español y tarjetas principales ampliadas.
    - Pantalla de carga dinámica según la subpágina.

- [x] **v0.32 - Rediseño estructural del footer**
    - Pie de página en tres columnas: identidad, contacto y proyecto.

- [x] **v0.33 - Módulos interactivos en el aside de novedades**
    - Widgets de próximo feriado y frase diaria, con datos desde JSON.
    - Modal para compartir el sitio y nuevos atajos de teclado.

- [x] **v0.34 - Nuevas subpáginas institucionales**
    - Páginas Recursos, Escuela y Herramientas.
    - Persistencia del estado abierto o cerrado de los paneles laterales.

- [x] **v0.35 - Términos y condiciones**
    - Subpágina de términos con modal de aceptación obligatoria al ingresar.

- [x] **v0.36 - Temas estacionales**
    - Temas de verano, mes rosa, misterio (Halloween) y festividades (Navidad).
    - Modo escala de grises como capa visual independiente.

- [x] **v0.37 - Personalización y descarga de horarios y calendario**
    - Selector de cursos, divisiones y materias.
    - Personalización de fuentes, paletas y visibilidad de docentes.
    - Exportación a PNG y PDF.

- [x] **v0.39 - Widgets de efeméride y vistas del sitio**
    - Widget de efeméride diaria, con datos en `days.json`.
    - Widget de vistas: diarias, mensuales, anuales y totales.

- [x] **v0.40 - Rediseño integral del header y menú de navegación (hito principal)**
    - Header renovado, con logos juntos, menús desplegables y botones con modales.
    - Aside de configuración renombrado a `aside-news` y aside de widgets a `aside-widgets`.
    - Texturas tecnológicas de fondo y nuevos cursores `.cur`.

---

## Fase 4: Ciclo Alpha (v0.41 a v0.50)

_Enfoque: contenido institucional, búsqueda, lectura de documentos y experiencia visual._

### Completado

- [x] **v0.41 - Términos actualizados y página de noticias**
    - Términos y condiciones reescritos.
    - Subpágina `noticias.html` creada vacía, para evitar enlaces rotos.

- [x] **v0.42 - Versionado automático y toast de actualización**
    - La versión se lee desde `data/version.json` y la usan el footer y los modales.
    - Easter eggs en archivos individuales dentro de `js/extras/`.
    - Toast para recargar la página cuando hay una nueva versión.

- [x] **v0.43 - Animaciones de scroll reveal**
    - Animación de entrada para las tarjetas del sitio.
    - Efemérides nacionales y mundiales, con campo `tipo` en `days.json`.
    - Carpeta `docs/` con ARCHITECTURE, CONTRIBUTING y ROADMAP.

- [x] **v0.44 - Lectura de PDF dentro del sitio**
    - Botón "Leer PDF" junto a "Descargar", que abre un visor en modal (`js/ui/pdf-reader.js`).

- [x] **v0.45 - Buscador en el header**
    - Modal de búsqueda que cubre subpáginas, PDFs, herramientas y documentación.
    - Índice en `data/search-index.json`.
    - Se abre con `Alt + B`. El atajo `Ctrl + K` todavía no existe (ver v0.54).

- [x] **v0.46 - Reorganización de atajos de teclado y sección de integrantes**
    - Atajos rediseñados con prefijo `Alt`.
    - Sección de integrantes en `nosotros.html`, con `members.json`.

- [x] **v0.47 - Reorganización de archivos**
    - CSS y JS específicos de subpáginas movidos a `css/modules/` y `js/modules/`, y se cargan solo donde se usan.

- [x] **v0.48 - Panel de administración (en curso, ver abajo)**
    - Acceso desde el header, Decap CMS y configuración inicial de colecciones.

---

## En curso

- [ ] **Panel de administración con Decap CMS (0.48.x)**
    - Colecciones activas: frases, datos curiosos, efemérides, feriados e integrantes.
    - Media Library con Cloudinary (0.48.3).
    - Pendiente: incorporar noticias, eventos, FAQs y equipo al CMS (pasa a la v0.49).
    - Pendiente: corregir la ruta del botón de admin del header (ver "Correcciones pendientes").

---

## Fase 5: Ciclo Alpha (v0.49 a v0.62)

_Enfoque: completar el contenido dinámico, mejorar la navegación y pulir la experiencia._

- [ ] **v0.49 - Panel de administración completo**
    - Noticias, eventos, FAQs y equipo editables desde el CMS.
    - Revisión del flujo editorial y de los permisos del repositorio.

- [ ] **v0.50 - Subpágina de noticias y comunicados**
    - Listado de noticias del Centro, con filtros por etiqueta: Urgente, Eventos e Institucional.
    - Carga desde `data/news.json` (hoy vacío). La página `noticias.html` ya existe.

- [ ] **v0.51 - Avisos flotantes urgentes**
    - Notificaciones temporales para asambleas, avisos de preceptoría o cambios de taller.
    - Reutiliza el sistema de toasts existente (`js/ui/toasts.js`).

- [ ] **v0.52 - Contador de eventos y exámenes**
    - Cuenta regresiva para fechas clave: mesas de examen, entregas de carpetas, feriados o estudiantina.
    - Ya existe una cuenta regresiva para el próximo feriado en el widget (parcial).

- [ ] **v0.53 - Guía escolar y directorio de aulas y talleres**
    - Lista de aulas, talleres de especialidad (Electromecánica e Informática) y horarios de consulta docente.

- [ ] **v0.54 - Búsqueda rápida con `Ctrl + K`**
    - Atajo `Ctrl + K` para el buscador, además de `Alt + B`.
    - Filtrado de trámites, PDFs, docentes y subpáginas sin recargar.

- [ ] **v0.55 - Galería multimedia y archivo de eventos**
    - Visor a pantalla completa (lightbox) para fotos de actividades, muestras técnicas y torneos.
    - Carpetas `assets/img/gallery/` ya preparadas (parcial).

- [ ] **v0.56 - Modo enfoque para documentos**
    - Botón de lectura sin distracciones para reglamentos (AEC) y estatutos, pensado para celular.

- [ ] **v0.57 - Sugerencias categorizadas y votación estudiantil**
    - Evolución del buzón de contacto: categorías (Talleres, Edificio, Deportes) y sistema de propuestas.

- [ ] **v0.58 - Microinteracciones y transiciones entre páginas**
    - Efectos de hover en tarjetas y transiciones suaves al navegar (el scroll reveal ya está hecho, desde v0.43).

- [ ] **v0.59 - Fondos visuales dinámicos**
    - Motor para alternar entre fondos, patrones y gradientes institucionales.
    - Opciones de personalización guardadas en `localStorage`.

- [ ] **v0.60 - Auditoría de rendimiento y limpieza de CSS**
    - Compresión de imágenes y eliminación de CSS obsoleto tras los rediseños.
    - Preparación de assets para la PWA.

- [ ] **v0.61 - Paleta base con tonos Calipso y tokens temáticos**
    - Tonos Calipso en la paleta principal.
    - Variables `--color-theme-*` para temas como alto contraste, modo código y daltonismo.

- [ ] **v0.62 - Menú hamburguesa y panel de configuración en celular**
    - Menú de navegación colapsable para celulares.
    - Panel de configuración centralizado para audio, temas y accesibilidad (el panel de configuración ya existe en escritorio).

---

## Fase de desarrollo serio: Ciclo Beta

_Enfoque: carga de contenido institucional real, participación estudiantil y pruebas con alumnos._
_Período: mediados de enero de 2027 a febrero de 2027._

- [ ] **Integración de contenido real institucional (enero 2027)**
    - Reemplazo de los textos de prueba por información verificada del IPET N° 424: talleres, especialidades, autoridades, horarios y reglamentos.

- [ ] **Módulo de feedback estudiantil y encuestas (enero 2027)**
    - Formulario e interfaz para recolectar opiniones, sugerencias y consultas de los alumnos.

- [ ] **Pruebas de usabilidad y control de calidad (febrero 2027)**
    - Versiones beta cerradas con el alumnado, para revisar la experiencia en celulares y computadoras de la escuela.

---

## Pre-lanzamiento y versión oficial (v0.90 a v1.0)

_Enfoque: rendimiento, SEO, funcionamiento sin conexión y publicación final._
_Período: fines de febrero de 2027 a marzo de 2027._

- [ ] **v0.90 - Modo sin conexión y optimización PWA (febrero 2027)**
    - Registro de un Service Worker (`sw.js`) para que el sitio funcione sin conexión en zonas del colegio con poca señal.
    - El manifest ya existe (`data/manifest.json`). Falta el registro del Service Worker y la caché local.

- [ ] **v0.95 - Optimización SEO, indexación y metadatos OpenGraph (febrero 2027)**
    - Creación de `sitemap.xml`, verificación en Google Search Console y etiquetas OpenGraph y Twitter Cards.
    - Auditoría con Google Lighthouse (puntaje objetivo mayor a 90 en Performance, Accesibilidad y SEO).
    - Requiere cambiar `robots.txt`, que hoy bloquea a todos los buscadores.

- [ ] **v1.0 - Lanzamiento oficial (9 de marzo de 2027)**
    - Versión estable para el inicio del ciclo lectivo 2027.
    - Presentación pública del portal a la comunidad educativa del IPET N° 424.

---

## Correcciones pendientes

Estas tareas no tienen versión asignada. Son arreglos chicos que conviene hacer antes de la v0.90.

- [ ] Agregar los nueve archivos que enlaza `recursos.html` (letras de himnos, audios y banderas), o quitar los enlaces.
- [ ] Corregir la ruta del botón de admin del header (`../admin//index.html` debe ser `admin/`).
- [ ] Renombrar `aside-news` o cambiar su contenido: hoy el panel tiene las opciones de configuración, no novedades.
- [ ] Asignar una función al botón de información (`Alt + I`) o quitarlo.
- [ ] Quitar `notes.txt` del repositorio, si fue subido alguna vez.
- [ ] Unificar el nombre de la organización del repositorio en `humans.txt`, `robots.txt` y `security.txt`.
- [ ] Revisar la publicación de los datos de integrantes en `data/members.json`.
- [ ] Revisar la clave de Cloudinary guardada en `admin/config.yml`.
