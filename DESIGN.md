# Hommie Design System

> Co-living PropTech. Madrid-first. Trust through restraint, warmth through typography.

---

## 1. Visual Theme & Atmosphere

Hommie's design communicates **institutional trust with human warmth** — a platform that handles money, contracts, and insurance, yet facilitates living with other people. The aesthetic sits between Vercel's engineering precision and a residential warmth that generic SaaS lacks.

**Dual-surface architecture**: Dark hero/CTA sections (deep indigo-black) contrast with warm-neutral content sections (off-white with stone undertones). This alternation creates visual rhythm without relying on decorative elements.

**Serif-sans pairing as identity**: Instrument Serif italic for emotional/aspirational statements ("*que encajan*", "*Tú descansas*") paired with Inter for functional/informational text. The serif signals humanity; the sans signals reliability.

**Glass-morphism on dark, clean borders on light**: Dark sections use translucent white surfaces (`rgba(255,255,255,0.04-0.08)`) with backdrop-blur. Light sections use opaque white cards with subtle warm-gray borders.

**Motion philosophy**: Entrance animations only (fade-in on scroll). No looping animations, no parallax, no decorative motion. The carousel is the single exception — it serves a functional purpose.

---

## 2. Color Palette & Roles

### Dark Surfaces (Hero, Waitlist, CTAs)
| Role | Value | Usage |
|------|-------|-------|
| Hero Background | `#0C0A1A` | Primary dark surface |
| Hero Mid | `#141230` | Gradient midpoint |
| Hero Deep | `#0E1225` | Gradient end |
| Glass Surface | `rgba(255,255,255,0.04)` | Cards on dark |
| Glass Border | `rgba(255,255,255,0.08)` | Borders on dark |
| Glass Hover | `rgba(255,255,255,0.07)` | Hover state on dark |

### Light Surfaces (Content sections)
| Role | Value | Usage |
|------|-------|-------|
| Background | `#FAFAF8` | Page background (warm off-white) |
| Card | `#FFFFFF` | Card surfaces |
| Muted | `#F2F0ED` | Alternate section background |
| Border | `#E8E5E0` | Card borders, dividers |

### Text
| Role | Value | Context |
|------|-------|---------|
| Foreground | `#1A1A1A` | Primary text on light |
| Muted Foreground | `#6B6B6B` | Secondary text on light |
| White | `#FFFFFF` | Text on dark surfaces |
| Slate 400 | `#94A3B8` | Body text on dark |
| Slate 500 | `#64748B` | Labels on dark |
| Indigo 300 | `#A5B4FC` | Accent text on dark |

### Brand & Accent
| Role | Value | Usage |
|------|-------|-------|
| Primary | `#4F46E5` | CTAs, links, active states — used sparingly |
| Primary Hover | `#4338CA` | Button hover |
| Primary Light | `#EEF2FF` | Badge backgrounds on light |
| Primary Ghost | `rgba(79,70,229,0.07)` | Icon backgrounds |
| Indigo 400 | `#818CF8` | Hero serif italic text |
| Purple 600 | `#9333EA` | Inquilinos section accent (differentiation) |

### Functional
| Role | Value | Usage |
|------|-------|-------|
| Emerald 400 | `#34D399` | Match %, success states, availability |
| Amber 500 | `#F59E0B` | Warnings (not currently used) |
| Red 500 | `#EF4444` | Errors (not currently used) |

### Gradient Blobs (Hero only)
Three animated radial gradients with heavy blur (60-90px):
- `rgba(99,102,241,0.25)` — indigo primary
- `rgba(139,92,246,0.18)` — purple secondary
- `rgba(59,130,246,0.15)` — blue tertiary

These are atmospheric, never sharp. Opacity stays under 0.25. Animation is slow (18-25s cycles).

---

## 3. Typography Rules

### Font Families
- **Display/Emotional**: `"Instrument Serif"`, Georgia, serif — used ONLY for italic emphasis in headings
- **UI/Body**: `"Inter"`, system-ui, -apple-system, sans-serif — everything else
- **Weights available**: Inter 400, 500, 600, 700, 800

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Hero H1 | Inter | `clamp(2.5rem,6vw,5rem)` | 800 | 1.05 | tight | Mixed with Instrument Serif italic |
| Section H2 | Inter | 2.5rem–3rem | 800 | 1.1 | tight | May contain `<span class="font-display italic">` |
| Card H3 | Inter | 15px | 700 | 1.4 | normal | Feature titles |
| Body Large | Inter | 18px | 400 | 1.6 | normal | Section descriptions |
| Body | Inter | 15px | 400 | 1.6 | normal | Card descriptions |
| Body Small | Inter | 14px | 400 | 1.5 | normal | FAQ answers |
| Label | Inter | 13px | 600 | 1.0 | 0.1em (widest) | Section labels, uppercase |
| Caption | Inter | 13px | 500 | 1.4 | normal | Navbar links |
| Micro | Inter | 11px | 600 | 1.0 | normal | Badges ("Verificado", "Producto separado") |

### Typography Principles
- **Serif = emotion, sans = function**: Instrument Serif italic appears ONLY inside H1/H2 as `<span>` for the aspirational/emotional fragment. Never for body text, labels, or CTAs.
- **Weight contrast over size contrast**: Headings at 800 vs body at 400 creates hierarchy even when sizes are close.
- **Uppercase sparingly**: Only for section labels ("PARA PROPIETARIOS", "PROCESO") at 13px with widest tracking.
- **No letter-spacing on body text**: Only headings get `tracking-tight`. Body text at normal.

---

## 4. Component Stylings

### Buttons

**Primary CTA (Dark BG)**
- Background: `#4F46E5` (indigo-600)
- Text: `#FFFFFF`, 14px, weight 600
- Padding: 12px 24px
- Radius: 9999px (full pill)
- Shadow: `0 10px 25px rgba(79,70,229,0.25)`
- Hover: bg `#4338CA`, shadow intensifies to `0.30`
- Active: `scale(0.97)`

**Secondary/Ghost (Dark BG)**
- Background: `rgba(255,255,255,0.04)`
- Text: `rgba(255,255,255,0.8)`, 14px, weight 600
- Border: `1px solid rgba(255,255,255,0.10)`
- Padding: 12px 24px
- Radius: 9999px
- Hover: bg `rgba(255,255,255,0.08)`, text white
- Active: `scale(0.97)`

**Text Link (Light BG)**
- Text: `#4F46E5`, 14px, weight 600
- No background, no border
- Hover: opacity 0.8
- Append: ` →` arrow character

**Nav CTA**
- Background: `#4F46E5`
- Text: `#FFFFFF`, 13px, weight 600
- Padding: 8px 20px
- Radius: 9999px

### Cards

**Feature Card (Light BG)**
- Background: `#FFFFFF`
- Border: `1px solid #E8E5E0`
- Radius: 16px (rounded-2xl)
- Padding: 24px
- Hover: border `rgba(79,70,229,0.20)`, shadow `0 4px 12px rgba(79,70,229,0.05)`
- Transition: 200ms all

**Listing Card (Dark BG — carousel)**
- Background: `rgba(255,255,255,0.04)`
- Border: `1px solid rgba(255,255,255,0.08)`
- Radius: 16px
- Width: 280px fixed
- Hover: border `rgba(99,102,241,0.30)`, bg `rgba(255,255,255,0.07)`

**FAQ Accordion Container**
- Background: `#FFFFFF`
- Border: `1px solid #E8E5E0`
- Radius: 16px
- Padding: 0 24px (items handle vertical spacing)

### Icon Containers
- Size: 44px (h-11 w-11) or 40px (h-10 w-10)
- Background: `rgba(79,70,229,0.07)` (primary ghost)
- Text: `#4F46E5`
- Radius: 12px (rounded-xl)
- Hover (group): bg `#4F46E5`, text `#FFFFFF`
- Transition: colors 200ms

### Badges
**Section Label Badge (Dark BG)**
- Background: `rgba(255,255,255,0.07)`
- Text: indigo-300, 13px, weight 500
- Border: `1px solid rgba(255,255,255,0.08)`
- Radius: 9999px
- Padding: 6px 16px
- Backdrop-blur: sm

**Product Badge ("Producto separado")**
- Background: `rgba(79,70,229,0.10)`
- Text: `#4F46E5`, 11px, weight 600
- Radius: 9999px
- Padding: 2px 8px

**Listing Match Badge**
- Dot: 6px circle, `#34D399` (emerald)
- Text: `#34D399`, 12px, weight 500
- Format: "● Match 95%"

**Listing Verified Badge**
- Background: `rgba(255,255,255,0.06)`
- Text: `#CBD5E1` (slate-300), 10px, weight 500
- Icon: BadgeCheck or ShieldCheck, 10px, indigo-400
- Radius: 9999px

### Navigation

**Desktop**
- Position: fixed, full-width, z-50
- Height: 64px
- Transparent on dark hero; `bg-white/80 backdrop-blur-xl border-b border-border shadow-sm` after scroll
- Logo: "Hommie." — 21px, weight 700, tracking-tight. Dot is `text-primary`
- Links: 13px, weight 500, uppercase, tracking-wide
- CTA: pill button (see above)

**Mobile**
- Hamburger icon, AnimatePresence slide-down menu
- Dark background matching hero

### Form Elements (Waitlist)
- Input height: 48px
- Background: `rgba(255,255,255,0.05)` on dark
- Border: `1px solid rgba(255,255,255,0.10)`
- Text: white, placeholder `rgba(255,255,255,0.30)`
- Focus: border indigo-500/50, ring `2px indigo-500/20`
- Radius: 12px

---

## 5. Layout Principles

### Spacing
- Base unit: 4px (Tailwind default with `--spacing: 0.25rem`)
- Section padding: `py-28` (112px vertical) for content, `py-32` (128px) for Waitlist
- Inner card padding: 24px (p-6)
- Gap between cards: 16px (gap-4) or 20px (gap-5)
- Max content width: `max-w-6xl` (72rem / 1152px) for content, `max-w-7xl` for navbar

### Grid Patterns
Each section uses a DIFFERENT layout — never repeat the same pattern consecutively:

1. **Hero**: Single column, left-aligned text, full-width carousel below
2. **Metrics**: 4-column grid (2-column on mobile), inline value+label
3. **How It Works**: 2-column split — sticky heading left, vertical timeline right
4. **Propietarios**: 2-column split — heading+CTA left, stacked feature cards right
5. **Inquilinos**: 2-column reversed — staggered 2x2 card grid left, sticky heading right
6. **FAQ**: 2-column split — sticky heading left, accordion right
7. **Waitlist**: Centered single column on dark

### Section Backgrounds (Rhythm)
```
Hero        → dark gradient (#0C0A1A)
Metrics     → light with border-b (#FAFAF8)
How It Works → light (#FAFAF8)
Propietarios → muted (#F2F0ED at 50% opacity)
Inquilinos  → light (#FAFAF8)
FAQ         → muted (#F2F0ED at 30% opacity)
Waitlist    → dark gradient (#0C0A1A)
Footer      → light with border-t (#FAFAF8)
```

### Scroll Behavior
- `scroll-behavior: smooth` on html
- Section IDs for anchor navigation: `#como-funciona`, `#propietarios`, `#inquilinos`, `#faq`, `#waitlist`
- Sticky headings with `lg:sticky lg:top-32 lg:self-start` in split layouts

---

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (0) | No shadow | Page background, text areas |
| Subtle Border (1) | `1px solid #E8E5E0` | Cards on light bg |
| Hover Lift (2) | border `rgba(79,70,229,0.20)` + `shadow-sm` | Card hover on light |
| Glass Border (1-dark) | `1px solid rgba(255,255,255,0.08)` | Cards on dark bg |
| Glass Hover (2-dark) | border `rgba(99,102,241,0.30)` | Card hover on dark |
| Dashboard (3) | `shadow-2xl shadow-indigo-500/10` + border glass | Hero carousel area |
| CTA Shadow (3) | `shadow-lg shadow-indigo-600/25` | Primary buttons |
| Nav Scrolled (2) | `shadow-sm` + `bg-white/80 backdrop-blur-xl` | Navbar after scroll |
| Blob Glow | `filter: blur(60-90px)` on radial gradients | Hero background atmosphere |

**Philosophy**: Shadows used only for interactive feedback (hover/focus) and atmospheric effects (blobs). Never decorative. On dark, elevation = increased white opacity. On light, elevation = subtle shadow + border color shift.

---

## 7. Do's and Don'ts

### Do
- Use Instrument Serif italic ONLY inside H1/H2 headings for the emotional/aspirational fragment
- Keep the primary indigo (`#4F46E5`) for interactive elements only — buttons, links, active states, icons on hover
- Use warm off-white (`#FAFAF8`) not pure white (`#FFFFFF`) for page backgrounds
- Alternate section backgrounds (light/muted/dark) for visual rhythm
- Use different layout patterns per section — never two consecutive identical grids
- Keep buttons as full pills (9999px radius) on dark, rounded-2xl (16px) for cards
- Use `font-extrabold` (800) for headings — weight contrast is the hierarchy tool
- Keep blob animations slow (18-25s) and low opacity (<0.25)
- Use group-hover patterns on cards (icon bg switches from ghost to solid on card hover)

### Don't
- Don't use Instrument Serif for body text, labels, buttons, or anything below H2
- Don't use purple/violet gradients on text — only `text-indigo-400` on dark for the serif italic
- Don't apply indigo to backgrounds of content sections — it's reserved for buttons, icons, and the dark hero
- Don't use 4 identical cards in a row — vary the layout (list, staggered grid, timeline)
- Don't add decorative animations — motion is only for entrance (scroll reveal) and the carousel
- Don't use pure black (`#000000`) — darkest color is `#0C0A1A` (warm dark)
- Don't use generic gray borders — borders are warm (`#E8E5E0`) on light, translucent white on dark
- Don't center-align everything — left-align text in split layouts, center only waitlist/hero heading
- Don't use the word "integrado" for the insurance — it's a separate product

---

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, stacked layouts, hamburger nav |
| Tablet | 640-1024px | 2-column grids, split layouts begin |
| Desktop | 1024-1440px | Full layouts, sticky sidebars, carousel shows 3-4 cards |
| Large | >1440px | Centered with generous margins |

### Collapsing Strategy
- **Hero**: `clamp(2.5rem,6vw,5rem)` H1 scales fluid. CTAs stack on mobile.
- **Carousel**: Scrollable at all sizes. Shows 1.3 cards mobile, 4 desktop.
- **Split layouts**: Stack vertically on mobile (heading first, content second). Sticky disabled.
- **Metrics**: 2x2 grid mobile → 4-column desktop
- **Inquilinos stagger**: Cards lose the `mt-6` offset on mobile (straight grid)
- **FAQ accordion**: Full-width on mobile, contained in 60% column on desktop
- **Navigation**: Hamburger below `md` (768px), AnimatePresence slide-down

### Touch Targets
- All buttons: minimum 44px height on mobile
- Carousel cards: 280px minimum width, touch-scrollable
- FAQ accordion buttons: full-width, 56px minimum height
- Nav links: adequate spacing, 44px touch targets

---

## 9. Agent Prompt Guide

### Quick Start
```
Stack: Vite + React + TypeScript + Tailwind CSS v4 + Framer Motion
Fonts: Inter (400-800) + Instrument Serif (italic only)
Primary: #4F46E5 (indigo-600), used sparingly
Background: #FAFAF8 (warm off-white)
Dark sections: #0C0A1A gradient
Border: #E8E5E0 (warm gray)
Buttons: pill shape (9999px radius) on dark, cards 16px radius
```

### Component Prompts

1. **Feature Card**: "White bg, 1px solid #E8E5E0 border, 16px radius, p-6. Icon container: 44px, rounded-xl, bg rgba(79,70,229,0.07), text #4F46E5. On group-hover: icon bg switches to #4F46E5, icon text to white. Border shifts to rgba(79,70,229,0.20). Title: 15px Inter weight 700. Description: 14px Inter weight 400, #6B6B6B."

2. **Section Heading**: "Label: 13px Inter weight 600, uppercase, tracking-widest, text #4F46E5. H2: 2.5-3rem Inter weight 800, tracking-tight, #1A1A1A. Emotional fragment in `<span class='font-display italic text-muted-foreground'>`. Subtitle: 18px Inter weight 400, #6B6B6B, max-w-md."

3. **Dark CTA Button**: "bg #4F46E5, text white, 14px weight 600, px-6 py-3, rounded-full, shadow-lg shadow-indigo-600/25. Hover: bg #4338CA, shadow intensifies. Active: scale(0.97). Include ArrowRight icon with group-hover translate."

4. **Listing Card (Dark)**: "bg rgba(255,255,255,0.04), border 1px solid rgba(255,255,255,0.08), rounded-2xl, 280px width. Image 160px height object-cover. Zone with MapPin icon indigo-400. Price: 18px bold white. Match: emerald dot + percentage. Badges: 10px text, rounded-full, glass bg."

5. **Split Layout Section**: "grid lg:grid-cols-2 gap-20. Left: sticky heading (lg:sticky lg:top-32 lg:self-start) with label + H2 + description + text link. Right: content (cards, timeline, accordion). Reverse order variant: content left, heading right."
