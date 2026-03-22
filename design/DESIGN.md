# Luminous Moss Design System

## 1. Overview & Creative North Star
**Creative North Star: The Mindful Sanctuary**
Luminous Moss is a design system crafted for professional clinical services, emphasizing clarity, growth, and psychological safety. It breaks the rigid "medical" aesthetic by utilizing organic, vibrant accent colors and editorial-style typography. The system rejects the generic grid in favor of intentional whitespace, asymmetrical image placements, and soft, overlapping elements that mimic the natural flow of human conversation and thought.

## 2. Colors
The palette is rooted in a vibrant "Electric Moss" primary color, balanced by soothing sky blues and warm beige accents.
- **Primary Roles:** Used for high-priority CTAs and brand identifiers. The high-saturation green signifies vitality and growth.
- **Accent Palette:** `accent-blue` (#e0f2fe) and `accent-beige` (#fef3c7) are used as soft washes behind imagery or secondary markers to provide visual relief and warmth.
- **The "No-Line" Rule:** Sectioning is achieved through background color shifts (e.g., transition from `surface-bright` to `surface-container-low`) rather than borders. Visible borders are reserved for interactive form elements or discrete cards.
- **Surface Hierarchy:** Depth is created by nesting `surface-container` (lowest) for the main canvas, and using `surface-container-low` for subtle sectioning.
- **The "Glass & Gradient" Rule:** The header and floating navigation utilize a `white/80` background with a `backdrop-blur-md` to maintain context while ensuring legibility.

## 3. Typography
The system uses a sophisticated duo-font approach to balance authority with accessibility.
- **Display & Headlines (Manrope):** A modern sans-serif with a wide character set. 
  - *Hero Headlines:* 3.75rem (60px) to 4.5rem (72px) with a tight 1.1 line-height for maximum impact.
  - *Section Titles:* 2.25rem (36px) or 3rem (48px) with bold weights (700-800).
- **Body & Labels (Inter):** A high-legibility font for long-form content.
  - *Primary Body:* 1.125rem (18px) for comfortable reading.
  - *Small/Utility Text:* 0.875rem (14px) or 0.75rem (12px) for metadata and labels.
  - *Micro-labels:* 10px uppercase tracking-tighter for legal disclaimers.

## 4. Elevation & Depth
Elevation is communicated through soft, expansive shadows and tonal layering rather than high-contrast borders.
- **The Layering Principle:** Components are layered using `surface-container` tiers. Cards typically sit on `surface-container-low` with a `shadow-sm` or `shadow-lg` depending on their interactive state.
- **Ambient Shadows:** 
  - `shadow-sm`: Used for static cards.
  - `shadow-lg`: Used for interactive hover states and floating buttons.
  - `shadow-2xl`: Reserved for large hero elements (e.g., primary profile photography).
- **Glassmorphism:** Navigation bars use 80% opacity with a blur effect to create a "frosted glass" depth, allowing content to pass underneath without losing focus.

## 5. Components
- **Buttons:** 
  - *Primary:* Pill-shaped (rounded-full) or generously rounded (rounded-xl), featuring a 20% primary-colored shadow.
  - *Secondary:* `bg-slate-100` with high-contrast text, transitioning to primary on hover.
- **Cards:** Use `rounded-2xl` (1rem) or `rounded-3xl` (1.5rem) corners. Borders should be minimal (`border-slate-100`) and only used on light backgrounds.
- **Inputs:** Soft background fills (`bg-slate-50`) with `rounded-xl` corners and `focus:ring-primary` for clear state indication.
- **Chips/Badges:** Pill-shaped with a 10% opacity version of the primary color and bold text.

## 6. Do's and Don'ts
- **Do:** Use asymmetrical layouts where images overlap section boundaries.
- **Do:** Use large-scale typography for key value propositions.
- **Do:** Prioritize whitespace; sections should have at least 6rem (96px) of vertical padding.
- **Don't:** Use 1px black borders. If a border is needed, use `slate-100` or a transparent primary stroke.
- **Don't:** Overuse the primary green. It is an "accent of vitality," not a background fill.
- **Don't:** Use sharp corners (0px); everything must feel approachable and soft.