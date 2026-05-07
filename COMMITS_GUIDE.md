# 🌌 Guía de Commits - Nocturne Neon

Este documento establece el estándar para los mensajes de confirmación (commits) del proyecto **Nocturne Neon**. El objetivo es mantener un historial limpio, legible y profesional, siguiendo la filosofía de "Soberanía Profesional".

## 🛠️ Estructura del Mensaje

Utilizaremos una combinación de **Conventional Commits** y **Gitmoji**.

**Formato:**
`tipo(alcance): <emoji> descripción corta en minúsculas`

---

## 🏗️ Tipos (Type)

Basado en el estándar de Conventional Commits:

| Tipo | Descripción |
| :--- | :--- |
| `feat` | Una nueva característica o funcionalidad. |
| `fix` | Corrección de un error (bug). |
| `docs` | Cambios en la documentación (README, MANIFEST, etc). |
| `style` | Cambios que no afectan la lógica (espacios, formato, comas). |
| `refactor` | Cambio de código que ni corrige un error ni añade una función. |
| `perf` | Mejora de rendimiento (Core Web Vitals). |
| `build` | Cambios en el sistema de construcción o dependencias (Vite, npm). |
| `ci` | Cambios en archivos de configuración de despliegue (Netlify). |
| `chore` | Tareas de mantenimiento general. |

---

## 🎯 Alcances (Scope)

El alcance define qué parte del sistema se está tocando:

- `ui`: Componentes, estilos SASS o sistema de diseño.
- `core`: Lógica principal del portafolio (Vanilla JS).
- `i18n`: Traducciones y sistema multi-idioma.
- `config`: Archivos de configuración (`vite.config.js`, `package.json`).
- `assets`: Imágenes, fuentes o vectores en el CDN.
- `global`: Cambios que afectan a todo el proyecto.

---

## 🎨 Gitmojis Seleccionados

Usamos emojis para identificar visualmente la intención del commit:

- ✨ `:sparkles:` -> Nueva característica.
- 🐛 `:bug:` -> Solución de error.
- 📝 `:memo:` -> Documentación.
- 💄 `:lipstick:` -> Cambios de UI/CSS (estética neon).
- ♻️ `:recycle:` -> Refactorización de código.
- ⚡️ `:zap:` -> Mejora de rendimiento.
- 🔧 `:wrench:` -> Configuración.
- 📦 `:package:` -> Dependencias.
- 🚀 `:rocket:` -> Despliegue o producción.
- 🌐 `:globe_with_meridians:` -> Internacionalización (i18n).

---

## 📝 Ejemplos

- `feat(ui): ✨ añadir componente de tarjeta de proyecto con efecto neon`
- `fix(core): 🐛 corregir error en el renderizado de web components`
- `perf(global): ⚡️ optimizar carga de imágenes para mejorar LCP`
- `docs(config): 📝 actualizar manifest técnico con nuevas reglas de commit`
- `style(ui): 💄 ajustar espaciado de la barra de navegación (8px radius)`
- `i18n(global): 🌐 añadir soporte para idioma inglés en sección sobre mí`

---

## 🔌 Extensión de VS Code Recomendada

Para facilitar este proceso, se recomienda instalar:
**"Conventional Commits"** de *vivaxy* o **"Gitmoji"** de *Carlos Cuesta*.

**Tip:** Puedes configurar el plugin para que te pida primero el tipo, luego el alcance y finalmente el emoji automáticamente.
