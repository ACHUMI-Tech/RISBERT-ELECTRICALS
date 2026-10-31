---
name: Precision Retail Commerce
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#5c403c'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#916f6b'
  outline-variant: '#e6bdb8'
  surface-tint: '#bf0715'
  primary: '#b70011'
  on-primary: '#ffffff'
  primary-container: '#dc2626'
  on-primary-container: '#fff6f5'
  inverse-primary: '#ffb4ab'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#7f4f00'
  on-tertiary: '#ffffff'
  tertiary-container: '#a06500'
  on-tertiary-container: '#fff7f1'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad6'
  primary-fixed-dim: '#ffb4ab'
  on-primary-fixed: '#410002'
  on-primary-fixed-variant: '#93000b'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 42px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 30px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.03em
  label-technical:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.06em
  currency-display:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: -0.01em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes an authoritative, high-energy retail aesthetic suited for precision trade, commercial procurement, and consumer electrical shopping. It targets contractors, engineers, real estate developers, and Lagos homeowners seeking authentic, high-grade electrical hardware, cabling, solar infrastructure, and premium home appliances.

The emotional tone balances engineering discipline with accessible retail hospitality: dependable, authentic, rigorous, and dynamic. Visual execution bridges **Modern Corporate Commerce** and **High-Contrast Editorial Grid**:
- Razor-sharp structural definition with high-contrast neutral foundations.
- Urgent, vibrant vermilion red focal points to guide navigation and commercial actions.
- Uncluttered, expansive white product backdrops that communicate equipment safety and stock authenticity.

## Colors

The palette leverages an uncompromising balance between dynamic red energy and solid structural darks, grounded in pristine white surfaces:

- **Primary (`#DC2626`)**: The operational core. Used strictly for high-priority calls to action, active tab indicators, price callouts, urgency/in-stock flags, and key transaction moments. The darker step (`#B91C1C`) serves as the hover and active pressed state.
- **Secondary (`#0F172A`)**: The authority color. Provides contrast for main navigation ribbons, primary typography, deep high-spec tech sheets, and dark brand anchors.
- **Tertiary (`#F59E0B`)**: Industrial amber used sparingly for technical ratings, warranty certifications, and real-time inventory warnings (e.g., "Low Stock").
- **Neutral (`#64748B`)**: Structural steel tone providing balanced secondary copy, subtle spec labels, and muted border geometry.
- **Surfaces**: Pure Canvas (`#FFFFFF`) for product display and input fields; Off-White Layer 1 (`#F8FAFC`) for page backgrounds, section alternation, and disabled states; Layer 2 (`#F1F5F9`) for nested specification panels and structural dividers.

## Typography

The type system blends the energetic curves of **Plus Jakarta Sans** with the technical clarity of **Inter**:

- **Plus Jakarta Sans** handles editorial promotions, major category titling, and primary marketing headlines. Its open apertures convey friendly retail warmth without compromising geometric discipline.
- **Inter** executes all high-density utility tasks: spec tables (voltage, wattage, amperage), SKU codes, micro-labels, system breadcrumbs, and pricing formats.
- **Currency & Numbers**: Tabular numeral formatting (`font-feature-settings: 'tnum' 1`) must be enforced on all financial and technical specification tables for clean vertical alignment in Nigerian Naira figures (₦) and electrical dimensions.

## Layout & Spacing

A structured 12-column responsive fluid grid aligns all catalog arrays, trade quote forms, and checkout pathways:

- **Desktop (≥ 1280px)**: 12-column layout, `margin: 2rem` (clamped to max container width of 1440px), `gutter: 1.5rem`.
- **Tablet (768px – 1279px)**: 8-column layout, `margin: 1.5rem`, `gutter: 1.25rem`.
- **Mobile (< 768px)**: 4-column layout, `margin: 1rem`, `gutter: 1rem`. E-commerce lists reflow smoothly to single- or two-column product tiles.

The vertical rhythm adheres strictly to an 8px base grid (`0.5rem = 8px`, `1rem = 16px`, `1.5rem = 24px`, `2.5rem = 40px`). Component content pads generously to ensure industrial equipment and complex consumer appliances have visual breathing room against structural borders.

## Elevation & Depth

Visual hierarchy uses crisp, low-contrast boundary lines reinforced by disciplined kinetic hover lifts rather than diffuse, muddy drop shadows:

- **Surface Treatment**: Flat white cards bounded by a sharp `1px solid #E2E8F0` border.
- **Ambient Floor Shadows**: Restrained ambient occlusion for idle elements:
  - *Resting Card*: `0 1px 3px 0 rgba(15, 23, 42, 0.05), 0 1px 2px -1px rgba(15, 23, 42, 0.03)`
  - *Hover Elevation*: `0 10px 20px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.03)` alongside a subtle -2px Y-axis lift and border tint shift to `#CBD5E1`.
  - *Active Popovers / Cart Drawer*: `0 20px 25px -5px rgba(15, 23, 42, 0.12), 0 8px 10px -6px rgba(15, 23, 42, 0.06)`
- **Physical Feedback**: Primary action buttons discard bottom drop shadows in favor of a crisp internal perimeter highlight (`inset 0 1px 0 rgba(255, 255, 255, 0.15)`) for tactile precision.

## Shapes

The design system embraces a **Soft (Level 1)** radius architecture to communicate architectural stability, engineered equipment enclosures, and clean-cut professionalism:

- Base inputs, buttons, and specification tags use a crisp `0.25rem` (4px) corner radius.
- Cards, modal dialogues, and preview containers utilize `0.5rem` (8px).
- Large category banners and structural hero containers cap at `0.75rem` (12px).
- Fully rounded pills (`9999px`) are reserved solely for live status chips, trade certification badges, and circular thumbnail carousels.

## Components

### Buttons
- **Primary CTA**: Background `#DC2626`, text `#FFFFFF`, font `label-lg`, padding `0.75rem 1.5rem`, border radius `0.25rem`. Hover shifts to `#B91C1C` with a 1px Y-axis translation. Active state locks at `#991B1B`.
- **Secondary (Direct Action)**: Background `#0F172A`, text `#FFFFFF`. Hover shifts to `#1E293B`.
- **Outline / Contractor Action**: Transparent background, `1.5px solid #0F172A` outline, text `#0F172A`. Hover shifts background to `#F8FAFC`.

### Product Cards
- Built on `#FFFFFF` surfaces with a 1px `#E2E8F0` border.
- Features generous internal padding (`space-md` to `space-lg`).
- The upper region reserves a high-contrast `#F8FAFC` image frame with an instant stock indicator badge pinned top-left.
- Content zone neatly stacks category breadcrumb (`label-technical`), product title (`headline-sm`), spec highlights (Inter 12px), and bottom pricing row with high-impact bold red callout alongside a quick "Add to Cart" icon button.

### Chips & Status Badges
- **Technical Spec Chips**: Subtle `#F1F5F9` background, `#334155` text, 1px `#E2E8F0` border, `0.25rem` radius.
- **Stock & Urgency Badges**: 
  - *In Stock / Genuine Guarantee*: Subtle emerald tint (`#ECFDF5`), `#065F46` text, `#A7F3D0` border.
  - *Clearance / Sale / High Demand*: Solid `#DC2626` background, `#FFFFFF` text, `label-technical` tracking uppercase.

### Inputs & Forms
- Height `44px` (touch & desktop friendly). Background `#FFFFFF`, border `1px solid #CBD5E1`, text `#0F172A`, padding `0.625rem 0.875rem`.
- Focus ring: `2px solid #DC2626` outline with zero offset.
- Floating technical unit labels (e.g., "mm²", "Amps", "Watts") sit docked on the right side using `#64748B` in `Inter`.

### Checkboxes & Radio Selectors
- Checkboxes feature a 2px solid border (`#94A3B8`). Checked state fills solid `#DC2626` with a crisp white tick mark.
- Radio buttons feature a 2px solid border (`#94A3B8`). Selected state displays a central `#DC2626` dot surrounded by clean white padding.

### Lists & Technical Data Tables
- Alternating subtle rows (`#FFFFFF` to `#F8FAFC`).
- High-contrast, uppercase header bar (`#0F172A` background with `#F8FAFC` text in `label-technical`).
- Subtle dividers in `1px solid #E2E8F0`. Tabular alignment keeps numerical values strictly right-aligned.

### Electrical Specification Strip (Specialized Component)
- High-density horizontal ribbon pinned below product titles displaying voltage, phase, IP weather rating, and genuine certification stamp, styled using Inter medium with vertical `#E2E8F0` pipe separators.