# Centro de Estudiantes IPET N° 424: sitio web

[![Estado del despliegue](https://github.com/ce-ipet424/CE-IPET424/actions/workflows/static.yml/badge.svg)](https://github.com/ce-ipet424/CE-IPET424/actions/workflows/static.yml)
![Versión](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/ce-ipet424/CE-IPET424/main/data/version.json&query=$.label&label=versi%C3%B3n&color=blue)
![Licencia](https://img.shields.io/badge/licencia-MIT-green)

Sitio web oficial del Centro de Estudiantes del IPET N° 424, de Villa Dolores (Córdoba). Reúne en un solo lugar la información del colegio y del Centro: trámites, formularios, horarios, calendario, integrantes y recursos para estudiantes.

Está hecho con HTML, CSS y JavaScript, sin frameworks ni proceso de compilación. El sitio se publica desde la rama `main`.

## Índice

- [Estado del proyecto](#estado-del-proyecto)
- [Qué hay en el sitio](#qué-hay-en-el-sitio)
- [Funciones destacadas](#funciones-destacadas)
- [Panel de administración](#panel-de-administración)
- [Tecnologías y servicios externos](#tecnologías-y-servicios-externos)
- [Instalación local](#instalación-local)
- [Despliegue](#despliegue)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Versiones y cambios](#versiones-y-cambios)
- [Pendientes conocidos](#pendientes-conocidos)
- [Datos personales](#datos-personales)
- [Seguridad](#seguridad)
- [Contribuir](#contribuir)
- [Créditos y licencia](#créditos-y-licencia)

## Estado del proyecto

| Dato                        | Detalle                         |
| :-------------------------- | :------------------------------ |
| Versión actual              | 0.50-alpha (26/11/2026)         |
| Inicio del desarrollo       | 7 de agosto de 2026             |
| Lanzamiento previsto (v1.0) | 9 de marzo de 2027              |
| Fase                        | Alpha                           |
| Publicación                 | GitHub Pages y Cloudflare Pages |
| Licencia                    | MIT                             |

La fase alpha significa que el sitio ya funciona, pero algunas secciones todavía están vacías o incompletas, y la estructura puede cambiar de una versión a otra. El plan de cada versión está en [docs/ROADMAP.md](./docs/ROADMAP.md).

## Qué hay en el sitio

| Página              | Contenido                                                                                          |
| :------------------ | :------------------------------------------------------------------------------------------------- |
| `index.html`        | Portal principal, con accesos a trámites, reglamento, herramientas y el Centro                     |
| `nosotros.html`     | Quiénes somos, comisión directiva e integrantes, cargados desde `data/members.json`                |
| `horarios.html`     | Horarios por año y curso, con colores, tipografía, visibilidad de docentes y descarga en PNG o PDF |
| `calendario.html`   | Generador de calendario anual personalizable, con descarga                                         |
| `tramites.html`     | Trámites, formularios y documentos escolares                                                       |
| `recursos.html`     | Descargas, símbolos patrios, mapas, teléfonos de emergencia y guías rápidas                        |
| `contacto.html`     | Formulario de consultas (Google Forms), canales oficiales y ubicación                              |
| `escuela.html`      | Información institucional del IPET N° 424 y sus especialidades                                     |
| `herramientas.html` | Herramientas y utilidades para estudiantes                                                         |
| `proyectos.html`    | Proyectos, talleres, torneos y acción social del Centro                                            |
| `noticias.html`     | Sección de noticias preparada, todavía sin contenido                                               |
| `proyecto-web.html` | Información sobre el sitio web                                                                     |
| `aviso-legal.html`  | Aviso legal del sitio (Licencia)                                                                   |
| `terminos.html`     | Términos, condiciones y políticas de privacidad                                                    |
| `creditos.html`     | Créditos del proyecto y del equipo de desarrollo                                                   |
| `404.html`          | Página de error                                                                                    |

La mayoría de las páginas comparten el mismo encabezado y pie de página. Además tienen dos paneles laterales: uno de configuración (temas, accesibilidad y opciones) y otro de widgets (próximo feriado, efeméride del día, frase, datos curiosos, clima y hora, y vistas del sitio). Los paneles no aparecen en `terminos.html` ni en la página 404, que tiene diseño propio.

## Funciones destacadas

**Accesibilidad.** El tamaño del texto se ajusta en 10 niveles, de 85 % a 130 %. También hay una fuente pensada para dislexia (Atkinson Hyperlegible), modo de alto contraste, escala de grises y un modo descanso. La reducción de animaciones puede activarse a mano, y el sitio la respeta si el sistema operativo la tiene activada.

**Temas y temporadas.** El sitio detecta si el sistema está en modo oscuro y lo aplica por defecto. Además hay un modo código y temas de temporada: verano, mes rosa, misterio y festividades. Cada temporada cambia también los logos.

**Horarios y calendario.** Las dos páginas generan una versión personalizada que se puede descargar. La descarga de horarios usa html2canvas y jsPDF, y está en `js/modules/schedules.js`.

**Buscador.** Se abre desde el encabezado o con `Alt + B`. Busca en `data/search-index.json` por título, descripción, tipo y palabras clave, sin recargar la página.

**Visor de PDF.** Los documentos de trámites y recursos se abren en una ventana modal, sin salir de la página.

**Novedades por versión.** Al cambiar de versión, el sitio muestra un aviso con los cambios leídos de `CHANGELOG.md`.

**Atajos de teclado.** Todos usan `Alt` más una letra.

**Sonidos.** Hay efectos de sonido para la interfaz, con un interruptor que se guarda en el navegador.

Además hay algunos easter eggs escondidos en el sitio. No se documentan acá.

## Panel de administración

El contenido de `data/` se puede editar desde el navegador en `/admin`, con Decap CMS. Para entrar hace falta una cuenta de GitHub con permiso sobre el repositorio. El inicio de sesión pasa por las funciones de `functions/api/`, que corren en Cloudflare Pages.

El panel usa flujo editorial: los cambios quedan como borradores hasta que se publican.

Las imágenes se suben a través de Cloudinary, configurado como Media Library en `admin/config.yml`.

## Tecnologías y servicios externos

El sitio usa HTML5 semántico, CSS3 con variables y módulos por carpeta, y JavaScript ES6+ con módulos nativos del navegador. No hay dependencias instaladas con npm ni paso de compilación.

Las librerías html2canvas y jsPDF están incluidas en `assets/libs/`. Las tipografías están en `assets/fonts/` en formato .woff2, así que el sitio no depende de Google Fonts.

Algunos servicios externos forman parte del funcionamiento:

| Servicio         | Para qué                                                  | Dónde se configura                                                  |
| :--------------- | :-------------------------------------------------------- | :------------------------------------------------------------------ |
| Open-Meteo       | Temperatura actual de Villa Dolores en el widget de clima | `js/ui/buttons.js` (no requiere clave)                              |
| Google Forms     | Formulario de consultas en `contacto.html`                | Dentro de `contacto.html`                                           |
| Decap CMS 3.18.0 | Panel de edición de contenido, cargado desde unpkg        | `admin/index.html`                                                  |
| GitHub (OAuth)   | Inicio de sesión del panel                                | Variables `GITHUB_CLIENT_ID` y `GITHUB_CLIENT_SECRET` en Cloudflare |
| Cloudinary       | Biblioteca de imágenes del panel                          | `admin/config.yml`                                                  |

## Instalación local

Se necesita Git y cualquier servidor de archivos estáticos. No conviene abrir `index.html` con doble clic: los módulos de JavaScript y las llamadas `fetch` no funcionan desde `file://`.

```bash
git clone https://github.com/ce-ipet424/CE-IPET424.git
cd CE-IPET424
python3 -m http.server 8000
```

Después se abre `http://localhost:8000` en el navegador. También sirve la extensión Live Server de VS Code.

El panel de administración y el inicio de sesión con GitHub no funcionan en local, porque dependen de las funciones de Cloudflare Pages.

## Despliegue

El sitio se publica en dos lugares:

- **GitHub Pages.** El workflow `.github/workflows/static.yml` se ejecuta con cada push a `main` y publica todo el repositorio. Hoy el workflow no tiene paso de validación: solo copia los archivos y los despliega.
- **Cloudflare Pages.** La URL configurada en `admin/config.yml` es `https://ceipet424.pages.dev`. La configuración de este despliegue no está en el repositorio.

Como cada push a `main` llega a producción, conviene trabajar en ramas aparte y revisar los cambios antes de integrarlos.

## Estructura del proyecto

Las carpetas principales son `components/` (fragmentos HTML compartidos), `css/` (hojas de estilo organizadas por base, componentes, layout, misc y módulos), `js/` (módulos de interfaz, utilidades, subpáginas y easter eggs), `data/` (contenido en JSON), `assets/` (imágenes, fuentes, audio y documentos), `admin/` (panel de administración) y `functions/` (funciones de Cloudflare Pages).

El árbol completo, con la función de cada archivo, está en [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md).

## Versiones y cambios

El número de versión sigue un esquema semántico adaptado a la fase alpha. Un cambio grande sube el número del medio (0.47.0 a 0.48.0) y un arreglo sube el último número (0.48.2 a 0.48.3). La versión vigente se lee desde `data/version.json`, y el historial completo está en [CHANGELOG.md](./CHANGELOG.md).

La última versión, 0.50.0-alpha, añadió un nuevo modal de navegación rápida, gradientes aleatorios para las tarjetas (basados en ángulos y paletas de colores), y cambió estilos de elementos.

## Datos personales

El archivo `data/members.json` contiene el nombre y el curso de los integrantes del Centro, que en su mayoría son estudiantes. Esos datos quedan públicos en el repositorio y en el sitio. Actualizarlos solo con autorización de cada persona.

## Seguridad

Si encontrás una falla de seguridad, reportala por correo a `ceipet424@gmail.com` antes de hacerla pública. La política completa está en `.well-known/security.txt`.

Las credenciales secretas, como `GITHUB_CLIENT_SECRET`, se guardan como variables de entorno en Cloudflare y no van en el repositorio.

## Contribuir

Antes de programar, revisá la guía en [docs/CONTRIBUTING.md](./docs/CONTRIBUTING.md). En resumen: los identificadores de código van en inglés, los comentarios en español, y cada commit empieza con la versión y la fase, por ejemplo `[0.48.4-alpha]`.

Para reportar errores o proponer funciones hay plantillas de issue en `.github/ISSUE_TEMPLATE/`.

## Créditos y licencia

Desarrollado por Juan Martín Rodríguez Bizón, presidente del Centro de Estudiantes (gestión 2026), y Gabriel Esteban Campana, secretario del Centro. Los créditos completos están en `humans.txt`.

El código se distribuye bajo licencia MIT. Ver [LICENSE](./LICENSE).
