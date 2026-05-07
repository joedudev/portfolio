# Manifest Técnico: Proyecto Nocturne Neon

Este documento es la **Fuente de Verdad (Single Source of Truth)** para el desarrollo del portafolio personal. Está diseñado para guiar tanto al desarrollador humano como a agentes de IA en la implementación, mantenimiento y escalado del sistema.

---

## 1. Filosofía del Proyecto: "Soberanía Profesional"
- **Minimalismo Extremo:** Eliminación de abstracciones innecesarias. Se prefiere el estándar web sobre librerías de terceros [cite: 1.1].
- **Rendimiento Nativo:** Objetivo de Core Web Vitals en "verde" constante (LCP < 1.2s, INP < 200ms) [cite: 1.1].
- **Estética Nocturne Neon:** Alta densidad funcional, contraste quirúrgico y elegancia técnica [cite: 1.2].

---

## 2. Stack Tecnológico (The Core)

### Desarrollo
- **Lenguaje:** Vanilla JavaScript (ES6+). No se permiten frameworks como React, Vue o Angular [cite: 1.1].
- **Arquitectura:** **Web Components** nativos (Custom Elements + Shadow DOM) para encapsulamiento de UI y lógica [cite: 1.1, 1.2].
- **Bundler:** **Vite** para HMR, optimización de compilación y soporte nativo de módulos [cite: 1.1].
- **Estilos:** **SASS (SCSS)** con arquitectura de variables y mixins basada en tokens de diseño [cite: 1.2].

### Internacionalización (i18n)
- **Fuente de Verdad:** Un único archivo `translations.json` centralizado [cite: 3.1].
- **Lógica:** Inyección dinámica de textos mediante una clase `AppController` y uso de la **API Intl** del navegador para formateo de monedas y fechas [cite: 3.2, 3.5].

### Activos (Icons & Media)
- **Iconos:** **Font Awesome** (vía npm) utilizando *Tree-Shaking* estricto para importar solo los SVGs necesarios [cite: 2.1, 2.2].
- **Media:** Almacenamiento externo. No se guardan imágenes o videos pesados en el repositorio de Git [cite: 2.1].

---

## 3. Diseño & Estética (Nocturne Neon) [cite: 1.2]

### Paleta de Colores
- **Fondo:** `#121414` (Surface) [cite: 1.2].
- **Acento Primario:** `#9D5CFF` (Electric Purple) - Uso limitado al 5% de la pantalla [cite: 1.2].
- **Texto:** `#FFFFFF` (On-Surface) para alta legibilidad.
- **Bordes/Divisores:** `#262626` (Outline sutil) [cite: 1.2].

### Tipografía
- **Fuente:** **Inter** (Google Fonts o Auto-alojada en Bunny.net).
- **H1:** 40px, Semi-bold, -0.02em tracking [cite: 1.2].
- **Body:** 16px, Line-height 1.6 para airear el contenido [cite: 1.2].

### Layout & Espaciado
- **Unidad Base:** Escala de **8px** (8, 16, 24, 32, 40...) [cite: 1.2].
- **Contenedor:** Máximo de `1280px` centrado [cite: 1.2].
- **Bordes:** Radio de curvatura estándar de `8px` para todos los componentes (botones, cards, inputs) [cite: 1.2].

---

## 4. Infraestructura & Red

### Alojamiento y Backend Serverless
- **Hosting de Código:** **Netlify** con despliegue automático desde GitHub [cite: 1.1].
- **Formularios:** **Netlify Forms** nativo mediante atributos HTML (`data-netlify="true"`) [cite: 2.4].

### Gestión de Red (Bunny.net)
- **DNS:** **Bunny DNS** (Anycast) para resolución ultra-rápida.
- **CDN:** **Bunny Storage + CDN** para entrega de activos estáticos.
- **WAF (Shield):** Protección perimetral activa contra bots y ataques.
- **Optimizer:** Compresión automática de imágenes a formatos **WebP/Avif** dinámicamente.

---

## 5. Accesibilidad (A11y)
- **Contraste:** Todo el texto debe superar el ratio **WCAG AA** contra el fondo `#121414` [cite: 2.2].
- **Semántica:** Uso obligatorio de etiquetas HTML5 (`<main>`, `<nav>`, `<section>`, `<article>`) [cite: 2.4].
- **Interactividad:** Estados de `:focus-visible` claramente definidos con el color Electric Purple [cite: 2.7].

---

## 6. SEO & Resiliencia
- **Meta Tags:** Inyección dinámica de títulos y descripciones bilingües según el locale activo.
- **Open Graph:** Configuración de `og:image` y `twitter:card` alojados en el CDN para previsualizaciones elegantes.
- **Manejo de Errores:** Página **404 personalizada** (`/404.html`) que mantiene la identidad visual y redirige al usuario al inicio.

---

## 7. Instrucciones para Agentes de IA
- **Modularidad:** Al crear nuevos componentes, siempre extender de `HTMLElement` y usar Shadow DOM con `mode: 'open'`.
- **Estilos:** No usar estilos en línea. Todas las propiedades visuales deben referenciar variables SCSS de `_tokens.scss`.
- **Traducciones:** No "hardcodear" texto. Siempre añadir una nueva llave al `translations.json` y usar el atributo `data-i18n` para la vinculación.
