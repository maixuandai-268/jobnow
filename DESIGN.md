# JobNow Seasonal Job Platform - Comprehensive Design System

This document is the absolute source of truth for the **JobNow Seasonal Job Platform** ("Phù Đổng Blue" theme). It contains the fully extracted design tokens, component styles, typography, and spacing rules from the Stitch project.

---

## 1. Core Philosophy: The Seasonal Pulse

The overarching philosophy of this design system is **"The Digital Curator."** In the context of seasonal work in Vietnam, we move beyond the cluttered, "bulletin board" aesthetic of traditional job portals. 

The Creative North Star focuses on **intentional asymmetry and editorial breathing room.** We reject the "standard grid" in favor of a layout that feels curated and high-end. By utilizing sophisticated, layered surfaces and authoritative typography, we transform a simple job search into a professional journey.

---

## 2. Comprehensive Color Palette

Our palette uses deep blues to establish authority and high-energy oranges to signal urgency. 

### Custom & Override Tokens
*   **Base Custom Color:** `#1E40AF`
*   **Override Primary:** `#1E40AF`
*   **Override Tertiary:** `#F97316`
*   **Color Variant:** `FIDELITY` (High-fidelity extraction)
*   **Color Mode:** `LIGHT`

### Named Color Tokens (Hex Values)

**Brand Primary (Authority & Trust):**
*   `primary`: `#00288e`
*   `primary_container`: `#1e40af`
*   `primary_fixed`: `#dde1ff`
*   `primary_fixed_dim`: `#b8c4ff`
*   `on_primary`: `#ffffff`
*   `on_primary_container`: `#a8b8ff`
*   `on_primary_fixed`: `#001453`
*   `on_primary_fixed_variant`: `#173bab`
*   `inverse_primary`: `#b8c4ff`

**Brand Secondary (Subtle Accents):**
*   `secondary`: `#525c87`
*   `secondary_container`: `#c3ccfe`
*   `secondary_fixed`: `#dde1ff`
*   `secondary_fixed_dim`: `#bbc4f6`
*   `on_secondary`: `#ffffff`
*   `on_secondary_container`: `#4c5680`
*   `on_secondary_fixed`: `#0e1840`
*   `on_secondary_fixed_variant`: `#3b446e`

**Brand Tertiary (Urgency & Energy):**
*   `tertiary`: `#5b2400`
*   `tertiary_container`: `#7f3500`
*   `tertiary_fixed`: `#ffdbca`
*   `tertiary_fixed_dim`: `#ffb690`
*   `on_tertiary`: `#ffffff`
*   `on_tertiary_container`: `#ffa677`
*   `on_tertiary_fixed`: `#341100`
*   `on_tertiary_fixed_variant`: `#783200`

**Surfaces & Backgrounds (The Layering System):**
*   `background`: `#fbf8ff`
*   `surface`: `#fbf8ff`
*   `surface_bright`: `#fbf8ff`
*   `surface_dim`: `#dad9e3`
*   `surface_variant`: `#e3e1eb`
*   `surface_tint`: `#3755c3`
*   `surface_container_lowest`: `#ffffff` (Use for top-level cards)
*   `surface_container_low`: `#f4f2fc` (Use for sub-sections/sidebars)
*   `surface_container`: `#eeedf7`
*   `surface_container_high`: `#e8e7f1`
*   `surface_container_highest`: `#e3e1eb`
*   `inverse_surface`: `#2f3037`
*   `inverse_on_surface`: `#f1f0fa`

**Text & Outlines:**
*   `on_background`: `#1a1b22`
*   `on_surface`: `#1a1b22`
*   `on_surface_variant`: `#444653`
*   `outline`: `#757684`
*   `outline_variant`: `#c4c5d5`

**Semantic (Errors):**
*   `error`: `#ba1a1a`
*   `error_container`: `#ffdad6`
*   `on_error`: `#ffffff`
*   `on_error_container`: `#93000a`

---

## 3. Typography Rules

We utilize two distinct typefaces to create a "Newsroom" feel that commands attention while remaining highly legible.

*   **Display & Headlines Font:** `BE_VIETNAM_PRO`
    *   *Usage:* This is our "Editorial" voice. Use `display-lg` and `headline-md` with generous tracking to lead the user's eye. The geometric nature of Be Vietnam Pro reflects modern Vietnamese innovation.
*   **Body Font:** `INTER`
    *   *Usage:* Our "Workhorse." Inter is used for all functional data (salary, location, time). It provides maximum readability at small sizes.
*   **Label Font:** `INTER`
    *   *Usage:* Form labels, tiny badges, utility text.

**Hierarchy Principle:** Use extreme scale contrast. A `display-sm` headline next to a `body-md` description creates an intentional, high-end asymmetric balance that feels modern and custom.

---

## 4. Spacing, Border Radius & Shadows

### Spacing Scale
*   **Scale Factor:** `2`
*   **Execution:** Use generous padding (e.g., `p-6`, `p-8`) to allow content to breathe. Do not cram elements together. Asymmetry is encouraged.

### Border Radius (Roundness)
*   **Global Roundness Token:** `ROUND_EIGHT`
*   **Execution:** Forbid sharp corners. Every element should have a minimum radius of `sm` (0.25rem). Standard cards use `xl` (1.5rem) or `2xl` to maintain a "Friendly" tone.

### Shadows & Elevation
*   **Tonal Layering Principle:** Traditional shadows are often heavy and dated. Instead of shadows, stack `surface_container_lowest` cards on `surface_container_low` sections. This creates a soft, natural lift without drawing black borders.
*   **Ambient Shadows:** If a card must float (e.g., a "Quick Apply" modal or dropdown), use a shadow with a 32px blur at 6% opacity, tinted with the `on_surface` color. **Never use pure black shadows.**

---

## 5. Component Styles

### The "No-Line" Rule
**Strict Mandate:** Designers and developers are prohibited from using 1px solid borders to section content. Boundaries must be defined through background color shifts (e.g. `surface_container_low` vs `surface`).
*   **Fallback ("Ghost Border"):** If a border is required for accessibility, use the `outline_variant` token at 15% opacity. It should be felt, not seen.

### Job Cards (The Signature Component)
*   **Structure:** Forbid divider lines. Use vertical whitespace (1.5rem) to separate the job title from the company info.
*   **Badges:** Use `tertiary_container` (Orange) for "Urgent/Hot" jobs and `secondary_container` (Blue/Grey) for standard badges.
*   **Visual Soul:** Apply a `surface_container_lowest` background with a `xl` or `2xl` corner radius.

### Buttons
*   **Primary:** Gradient of `primary` to `primary_container`. Radius: `md` (0.75rem).
*   **Secondary:** Ghost style using `outline` token at 20% opacity. 
*   **States:** On hover, increase the `surface_tint` overlay rather than just darkening the color.

### Input Fields
*   **Visuals:** No bottom-line-only inputs. Use a solid `surface_container_high` background with no border. On focus, transition to a `ghost-border` using the `primary` color at 40% opacity.

### Navigation & Headers
*   **Lists:** Use `surface_container_low` for the list container. Individual items are separated by a 1px gap showing the background color.
*   **The "Glass & Gradient" Rule:** Top navigation bars use a semi-transparent `surface` color with a 12px-20px backdrop-blur (`backdrop-blur-md` in Tailwind) to allow content to bleed through, softening the interface.

---

## 6. Language & Tone
*   **Tone:** Efficient, Professional, Encouraging.
*   **Vietnamese Context:** Use action-oriented verbs (e.g., "Ứng tuyển ngay" thay vì "Gửi").
*   **Formatting:** Ensure that salary displays (VND) use the standard `.` separator for readability (e.g., `15.000.000đ`). Ensure line-height for `headline-lg` is at least 1.2x to accommodate Vietnamese diacritics.
