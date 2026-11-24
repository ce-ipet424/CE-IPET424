# Hitos del desarrollo

Este documento registra los momentos más importantes en la vida del sitio: el inicio del desarrollo, los cambios de hosting, la incorporación de la licencia, el cambio de organización del repositorio y las versiones principales. No reemplaza al [CHANGELOG](../CHANGELOG.md), que tiene el detalle de cada cambio. Acá solo aparecen los hitos que marcaron un antes y un después.

Las fechas de versión salen del CHANGELOG. Las fechas de hosting salen de la revisión del autor en los paneles de Cloudflare. Cuando una fecha no tiene fuente, figura como `[PENDIENTE]`.

---

## Cómo se usa este documento

La línea de tiempo resume todos los hitos en una tabla, y cada uno tiene su detalle en la sección siguiente. Si necesitás saber qué pasó en una versión concreta, seguí el enlace al CHANGELOG.

---

## Criterios para incluir un hito

Un hito entra en este documento si cumple al menos uno de estos puntos:

- Cambió la infraestructura del sitio: repositorio, hosting, dominio o forma de publicación.
- Cambió la situación legal o de licencia del proyecto.
- Cambió la organización que mantiene el repositorio.
- Salió una versión que el CHANGELOG marca como "Versión Principal Mayor".

Lo que no entra: correcciones menores, cambios visuales puntuales, actualizaciones de contenido y versiones de parche. Eso va en el CHANGELOG.

---

## Categorías

| Categoría   | Qué incluye                                                   |
| :---------- | :------------------------------------------------------------ |
| Repositorio | Creación del repositorio, cambios de nombre o de organización |
| Hosting     | Alojamiento del sitio y cambios de proveedor o de dominio     |
| Licencia    | Incorporación o cambio de la licencia                         |
| Versión     | Versiones principales del sitio                               |

---

## Línea de tiempo

| Fecha       | Hito                                                                                                                          | Categoría   | Versión     | Verificado        |
| :---------- | :---------------------------------------------------------------------------------------------------------------------------- | :---------- | :---------- | :---------------- |
| 07/08/2026  | Inicio del desarrollo                                                                                                         | Versión     | 0.1-alfa    | Sí (CHANGELOG)    |
| [PENDIENTE] | Creación del repositorio                                                                                                      | Repositorio | -           | No                |
| 09/08/2026  | Primera versión con contenido completo                                                                                        | Versión     | 0.6-alfa    | Sí (CHANGELOG)    |
| 11/08/2026  | Primer alojamiento en Cloudflare, con el dominio `ceipet424.juanmarodribizon.workers.dev`                                     | Hosting     | 0.7-alfa    | Sí (autor, panel) |
| 16/08/2026  | Migración del sitio de Workers a Cloudflare Pages (`ceipet424.pages.dev`), que es la dirección actual                         | Hosting     | -           | Sí (autor, panel) |
| 23/08/2026  | Incorporación de la licencia                                                                                                  | Licencia    | 0.17-alfa   | Sí (CHANGELOG)    |
| 30/08/2026  | Versión principal mayor. Enlaces al repositorio y a la licencia en el footer, y primer flujo de despliegue con GitHub Actions | Versión     | 0.20-alfa   | Sí (CHANGELOG)    |
| 04/10/2026  | Versión principal mayor. Se fija la fecha provisional de lanzamiento                                                          | Versión     | 0.30        | Sí (CHANGELOG)    |
| 07/11/2026  | Versión principal mayor                                                                                                       | Versión     | 0.40        | Sí (CHANGELOG)    |
| 21/11/2026  | El repositorio pasa a la organización del C.E. IPET 424                                                                       | Repositorio | 0.48.0-alfa | Sí (CHANGELOG)    |

La tabla está ordenada por fecha. La fila de la versión 0.10 no aparece porque el CHANGELOG no la describe como un hito. Si la querés incluir, hay que decidir qué la hace relevante.

---

## Detalle de los hitos

### 07/08/2026: Inicio del desarrollo

- **Categoría:** Versión
- **Versión:** 0.1-alfa
- **Qué pasó:** Se registra la primera entrada del CHANGELOG, que marca el comienzo del proyecto.
- **Por qué importó:** A partir de acá el sitio tiene un historial de versiones.
- **Fuente:** [CHANGELOG, entrada 0.1-alfa](../CHANGELOG.md)
- **Verificado:** Sí. La fecha es la de la entrada del CHANGELOG. Si se quiere la fecha del primer commit, hay que sacarla del historial de Git.

### 11/08/2026: Primer alojamiento en Cloudflare

- **Categoría:** Hosting
- **Versión:** 0.7-alfa (misma fecha en el CHANGELOG)
- **Qué pasó:** El sitio se aloja por primera vez en Cloudflare, con el dominio `ceipet424.juanmarodribizon.workers.dev`.
- **Por qué importó:** Fue la primera dirección pública del sitio.
- **Fuente:** Revisión del autor en el panel de Cloudflare.
- **Verificado:** Sí, por el autor.

### 16/08/2026: Migración a Cloudflare Pages

- **Categoría:** Hosting
- **Versión:** No corresponde (la entrada del CHANGELOG de esa fecha es la 0.10 a la 0.13)
- **Qué pasó:** El sitio pasa del dominio de Workers a `ceipet424.pages.dev`, que es la dirección actual.
- **Por qué importó:** Es el alojamiento vigente y la dirección que figura en la configuración del panel de administración.
- **Fuente:** Revisión del autor en el panel de Cloudflare.
- **Verificado:** Sí, por el autor.

### 23/08/2026: Incorporación de la licencia

- **Categoría:** Licencia
- **Versión:** 0.17-alfa
- **Qué pasó:** Se agrega el archivo `LICENSE` con protección legal para el sitio web. Desde la versión 0.20 el footer enlaza a la licencia MIT.
- **Por qué importó:** Define en qué condiciones se puede reutilizar el código.
- **Fuente:** [CHANGELOG, entrada 0.17-alfa](../CHANGELOG.md)
- **Verificado:** Sí (CHANGELOG).

### 30/08/2026: Versión 0.20, primer despliegue automatizado

- **Categoría:** Versión
- **Versión:** 0.20-alfa (Versión Principal Mayor)
- **Qué pasó:** El footer suma enlaces al repositorio y a la licencia MIT. Se agrega el workflow `.github/workflows/static.yml`, que automatiza el despliegue.
- **Por qué importó:** Es el primer cambio grande en la forma de publicar el sitio.
- **Fuente:** [CHANGELOG, entrada 0.20-alfa](../CHANGELOG.md)
- **Verificado:** Sí (CHANGELOG).

### 04/10/2026: Versión 0.30 y fecha provisional de lanzamiento

- **Categoría:** Versión
- **Versión:** 0.30 (Versión Principal Mayor)
- **Qué pasó:** Se fija como fecha provisional de lanzamiento el 9 de marzo de 2027.
- **Por qué importó:** Es la referencia para planificar la versión 1.0.
- **Fuente:** [CHANGELOG, entrada 0.30](../CHANGELOG.md)
- **Verificado:** Sí (CHANGELOG).

### 07/11/2026: Versión 0.40

- **Categoría:** Versión
- **Versión:** 0.40.0-alfa (Versión Principal Mayor)
- **Qué pasó:** Se publica la versión 0.40 como versión principal mayor.
- **Por qué importó:** Es una de las tres versiones principales mayores del ciclo alfa hasta la fecha.
- **Fuente:** [CHANGELOG, entrada 0.40.0-alfa](../CHANGELOG.md)
- **Verificado:** Sí (CHANGELOG).

### 21/11/2026: El repositorio pasa a la organización del C.E.

- **Categoría:** Repositorio
- **Versión:** 0.48.0-alfa
- **Qué pasó:** El repositorio se mueve a una organización a nombre del C.E. IPET 424. Se actualizan los enlaces del README y del índice de búsqueda a la nueva ubicación.
- **Por qué importó:** El repositorio queda bajo la institución y no bajo una cuenta personal.
- **Fuente:** [CHANGELOG, entrada 0.48.0-alfa](../CHANGELOG.md)
- **Verificado:** Sí (CHANGELOG).

---

## Fuentes de verificación

Estas son las fuentes posibles, de mayor a menor confiabilidad:

1. Historial de commits del repositorio, con `git log --format='%ad %s' --date=short`.
2. Paneles de los proveedores de hosting.
3. Entradas del CHANGELOG, siempre que tengan fecha.
4. Registros internos del equipo, que se marcan como no verificados.
