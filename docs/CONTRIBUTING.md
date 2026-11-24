# Guía de contribución y convenciones: CE-IPET424

¡Bienvenido al equipo de desarrollo del sitio web del Centro de Estudiantes del IPET N° 424!

Este documento fija las pautas de trabajo para mantener el código limpio, ordenado y sin conflictos cuando se programa en equipo. Para entender cómo está organizado el proyecto, antes conviene leer [ARCHITECTURE.md](./ARCHITECTURE.md).

---

## 1. Flujo de trabajo en Git y GitHub

Cada push a `main` se publica en producción mediante GitHub Pages. Por eso no se trabaja directamente sobre `main`.

1. **Antes de empezar.** Actualizá tu copia local con `git pull origin main`.
2. **Crear una rama para cada tarea.** Usá un nombre corto en kebab-case con el tipo de cambio, por ejemplo `fix/ruta-admin-header` o `feat/buscador-ctrl-k`.
3. **Mientras programás.** Tus cambios tienen que corresponder a la tarea asignada. Si necesitás tocar un archivo no relacionado, o si surge una función nueva, consultalo antes con el equipo.
4. **Al terminar la tarea.** Hacé un commit siguiendo el formato de la sección 2, subí la rama con `git push` y abrí un pull request hacia `main`.
5. **Revisión.** Antes de integrar, revisá el pull request en el navegador: probá la página afectada en celular y en computadora, y en modo claro y oscuro.

Si tenés dudas con el número de versión que corresponde al commit, revisá el historial del repositorio y el [CHANGELOG](../CHANGELOG.md) antes de enviar los cambios.

---

## 2. Mensajes de commit y versionado

El proyecto usa versionado semántico adaptado a la fase alfa: `MAYOR.MENOR.PARCHE-fase`. Un cambio grande sube el número del medio, y una corrección sube el último número.

### Formato del mensaje

Cada commit empieza con la versión y la fase entre corchetes, seguida de una descripción clara en español, en infinitivo o en pasado. Así:

```text
[VERSIÓN-FASE] Descripción de lo que se modificó o agregó
```

Ejemplos:

```text
[0.48.4-alpha] Se corrigió la ruta del botón de admin en el header
[0.49.0-alpha] Se agregó la colección de noticias al panel de administración
[0.48.5-alpha] Se ajustó el padding de las tarjetas en celular
```

### Cómo se sube la versión

Cuando una versión está lista para publicarse, hay que actualizar estos archivos en el mismo pull request:

- `data/version.json`: cambiar `label`, `version`, `type` y `date`. El footer y los modales leen este archivo, así que no hay que tocar nada más para mostrar la versión nueva.
- `CHANGELOG.md`: agregar la sección de la versión arriba de todo, con los cambios en viñetas.
- `README.md`: actualizar la tabla de estado y la sección de versiones, que hoy tienen el número escrito a mano.
- `humans.txt`: actualizar la fecha de `Last update`.

---

## 3. Convenciones de código y nomenclatura

Para facilitar el mantenimiento, se siguen estas reglas según la tecnología.

### HTML y CSS

- **Clases e IDs.** Se escriben en inglés, en `kebab-case`: `.button-primary`, `#main-header`, `.card-title`.
- **Variables CSS (design tokens).** Se definen en `css/base/variables.css`, también en `kebab-case`. Usá siempre las variables globales en lugar de valores fijos, como colores, espaciados o tiempos de transición.
- **Hojas de estilo.** Un estilo nuevo va en la carpeta que corresponde: `base/` para variables y tipografía, `components/` para componentes reutilizables, `layout/` para la estructura de la página y `modules/` solo para subpáginas con lógica propia.

### JavaScript (ES6+)

- **Variables y funciones.** En inglés, en `camelCase`: `const darkModeButton`, `function toggleAccessibility()`.
- **Constantes globales.** En mayúsculas con guiones bajos: `MAX_FONT_SIZE`.
- **Módulos.** Cada archivo exporta sus funciones de inicialización (por ejemplo `initWidgets`) y `js/main.js` las llama. No agregues lógica nueva en `main.js` más allá de la inicialización.
- **Claves de `localStorage`.** Usá `camelCase`. Las claves que ya existen no se renombran, porque cambiarlas borra la preferencia guardada de todos los visitantes.

### Nombres de archivos

Los archivos y carpetas se escriben en `kebab-case`: `pdf-reader.js`, `search-index.json`. Los fragmentos de `components/` empiezan con guion bajo (`_header.html`), porque se cargan con `fetch` y no son páginas.

### Comentarios y documentación

Todos los comentarios dentro del código, como explicaciones de funciones o bloques de CSS, se escriben en **español**. Los nombres de variables, clases y funciones siguen en inglés.

Cada cambio que agregue una función visible para el usuario tiene que quedar en el CHANGELOG. Si cambia la estructura de carpetas, actualizá también ARCHITECTURE.md.

### Accesibilidad

Todo componente nuevo tiene que poder usarse con teclado, mostrar el foco con `:focus-visible` y tener atributos ARIA cuando lo necesite. Antes de integrar, probalo con la fuente de dislexia y con el tamaño de texto al 130 %.

---

## 4. Estructura de archivos y carpetas

La estructura completa, con la función de cada archivo, está en [ARCHITECTURE.md](./ARCHITECTURE.md). Estas son las carpetas principales:

```text
CE-IPET424/
├── admin/                 # Panel de administración (Decap CMS)
├── assets/                # Imágenes, fuentes, audio, documentos y librerías
├── components/            # Fragmentos HTML compartidos (header, footer, paneles)
├── css/                   # Hojas de estilo: base, components, layout, misc y modules
├── data/                  # Contenido del sitio en JSON
├── docs/                  # Documentación del proyecto
├── functions/             # Funciones de Cloudflare Pages (inicio de sesión del CMS)
└── js/                    # Módulos: ui, utils, modules, extras y main.js
```

Respetá la carpeta que corresponde a cada archivo nuevo. Si no encontrás un lugar claro, consultalo antes de crear una carpeta.

---

## 5. Herramientas recomendadas en VS Code

Estas extensiones son recomendadas, pero no obligatorias:

- **Prettier - Code formatter:** mantiene el formato, la sangría y el espaciado en HTML, CSS y JS.
- **Live Server:** levanta un servidor local para ver los cambios en el navegador. Como el sitio usa módulos y `fetch`, no conviene abrir los archivos con doble clic.
- **Error Lens:** muestra los errores y advertencias en la misma línea del código.
- **Code Spell Checker:** avisa de errores de ortografía en comentarios y nombres.

Para revisar los PDF de trámites desde el editor, también sirve cualquier visor de PDF, aunque no sea una extensión de VS Code.
