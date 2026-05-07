---
name: Nocturne Neon
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#37393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#cdc2d7'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#968da0'
  outline-variant: '#4b4454'
  surface-tint: '#d6baff'
  primary: '#d6baff'
  on-primary: '#420089'
  primary-container: '#aa73ff'
  on-primary-container: '#3a0079'
  inverse-primary: '#7832d9'
  secondary: '#c9c6c5'
  on-secondary: '#313030'
  secondary-container: '#4a4949'
  on-secondary-container: '#bab8b7'
  tertiary: '#c8c6c5'
  on-tertiary: '#313030'
  tertiary-container: '#929090'
  on-tertiary-container: '#2a2a2a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ecdcff'
  primary-fixed-dim: '#d6baff'
  on-primary-fixed: '#280057'
  on-primary-fixed-variant: '#5f00c0'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c9c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  h1:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h3:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-page: 40px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

This design system is defined by a "Sober Professionalism" philosophy, evolved through a high-contrast, dark-mode lens. The aesthetic is strictly minimalist, prioritizing legibility and functional density. By anchoring the interface in a near-black environment, we create a sense of infinite depth and high-end prestige.

The "Electric Purple" serves as a precise surgical tool—it is not a primary fill color but a beacon for interaction and focus. The emotional response is one of quiet confidence, technical authority, and modern elegance. The design style leans heavily into **Minimalism** with a touch of **Glassmorphism** used only where necessary to define structural layers without breaking the monochromatic sobriety.

## Colors

The palette is intentionally restrictive to maintain a premium feel. 

- **Base:** The primary background is #0E0E0E. Pure black (#000000) may be used for deep background fills or OLED optimization in mobile contexts.
- **Primary Accent:** "Electric Purple" (#9D5CFF) is used exclusively for primary actions, active states, and critical highlights. It must never exceed 5% of the total screen real estate.
- **Neutrals:** Text is rendered in pure white (#FFFFFF) for high contrast. Secondary text and borders utilize a scale of cool greys to maintain the dark atmosphere without appearing washed out.
- **Functional Gradients:** Subtle gradients utilizing the primary purple are permitted for hover states or very thin (1px) decorative borders to suggest energy and movement.

## Typography

This design system exclusively employs **Inter** for its utilitarian precision and neutral character. 

- **Headlines:** Use tighter letter-spacing and semi-bold weights to command attention against the dark background.
- **Body:** Standardized at 16px for optimal readability with generous line-height to ensure the interface feels "airy" despite the dark palette.
- **Labels:** Small caps or uppercase transformations with increased tracking are used for micro-copy and metadata to create a technical, organized appearance.
- **Color Application:** All primary copy is White. Diminished hierarchy is achieved through opacity (60-70%) rather than moving to mid-tone greys, preserving the color harmony.

## Layout & Spacing

The layout follows a strict **Fixed Grid** system for desktop and a fluid model for mobile. Content is contained within a 1280px centered wrapper.

- **Rhythm:** An 8px base unit (linear scale) dictates all spatial relationships.
- **Density:** Use generous margins (40px+) to frame content blocks, allowing the "Electric Purple" accents to pop without competing with cluttered layouts.
- **Alignment:** Elements should adhere to a rigorous 12-column structure. Vertical spacing between logical sections should be significant (stack-lg) to reinforce the minimalist, "gallery-like" aesthetic.

## Elevation & Depth

Depth is conveyed through **Tonal Layers** and **Low-Contrast Outlines**. Avoid heavy drop shadows which can look muddy on near-black backgrounds.

- **Layering:** Level 0 is #0E0E0E. Level 1 (cards, menus) is #1A1A1A.
- **Borders:** Subtle 1px borders (#262626) define shapes more effectively than shadows in this system.
- **Interaction Depth:** On hover, elements may gain a subtle "Electric Purple" outer glow (4px blur, 20% opacity) to simulate a soft neon emission without appearing garish.
- **Backdrop:** Use `backdrop-filter: blur(12px)` for floating navigation bars to maintain context of the content beneath while providing legibility.

## Shapes

The design system utilizes **ROUND_EIGHT (8px)** as the standard radius for all structural components.

- **Buttons & Inputs:** Fixed at 8px to maintain a professional, balanced geometry that is neither too sharp (aggressive) nor too round (playful).
- **Cards:** Larger containers also use the 8px radius to maintain consistency across scales.
- **Icons:** Should feature slightly rounded terminals to match the 8px component logic.

## Components

- **Buttons:** 
  - *Primary:* Solid #9D5CFF with white text. 
  - *Secondary:* Ghost style with a 1px white or #262626 border. 
  - *Tertiary:* Text-only with "Electric Purple" on hover.
- **Inputs:** Dark fills (#1A1A1A) with 1px borders. The border transitions to "Electric Purple" only upon focus.
- **Chips:** Small, low-profile badges with #1A1A1A backgrounds. Use a 2px purple dot next to the label for "active" or "live" statuses.
- **Lists:** Separated by thin #262626 dividers. Hover states should use a subtle #151515 background shift.
- **Progress Bars & Sliders:** The track remains #262626, while the fill is a vibrant "Electric Purple" gradient to draw the eye to completion states.
- **Cards:** No shadows; use #1A1A1A fill and an 8px corner radius. A 1px top-border in purple can be used to denote "featured" content.