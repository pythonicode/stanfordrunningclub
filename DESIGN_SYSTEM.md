# Stanford Running Club Design System

## Overview

This design system is built on **Swiss Design principles** (also known as International Typographic Style), characterized by:
- Clean, sharp geometric forms
- Grid-based layouts
- Sans-serif typography
- Asymmetric layouts with mathematical precision
- Emphasis on readability and objectivity
- Bold use of photography and minimal decoration
- Strategic use of white space

## Color Palette

### Primary Colors

Our primary palette consists of Cardinal red, white, black and cool grey. Layouts lean heavily on these colors, with strategic use to create complementary and balanced color schemes.

#### Cardinal Red
The signature Stanford color - use boldly and confidently.

```css
--cardinal-red: #8C1515;
--cardinal-red-light: #B83A4B;
--cardinal-red-dark: #820000;
```

**Usage:**
- Primary CTAs and interactive elements
- Section dividers and accent lines
- Hover states and active indicators
- Brand moments and headers

**Pantone:** PMS 201 C (coated) | 201 U (uncoated)  
**CMYK:** 0, 100, 65, 34  
**RGB:** 140, 21, 21  
**HEX:** #8C1515

#### White
An indispensable color. View white space as a break, not a blank area. Don't rush to fill it - it focuses attention on what is present.

```css
--white: #FFFFFF;
```

**Usage:**
- Primary background color
- Text on dark backgrounds
- Breathing room between elements
- Card and container backgrounds

#### Black
Stanford's black has warmth - it's not pure black but a rich, dark tone.

```css
--black: #2E2D29;
```

**Pantone:** Process Black  
**CMYK:** 0, 0, 0, 100  
**RGB:** 46, 45, 41  
**HEX:** #2E2D29

**Usage:**
- Primary text color
- Headlines and bold statements
- Icons and graphic elements

#### Cool Grey

```css
--cool-grey: #53565A;
```

**Pantone:** Cool Grey 11 C  
**CMYK:** 63, 52, 44, 33  
**RGB:** 83, 86, 90  
**HEX:** #53565A

**Usage:**
- Secondary text
- Subtle borders
- Disabled states

### Black Tints

Use tints of black in increments of 10% to expand the grey palette and achieve functional contrast.

```css
--black-100: #2E2D29; /* 100% Black */
--black-90: #43423E;
--black-80: #585754;
--black-70: #6D6C69;
--black-60: #767674;
--black-50: #979694;
--black-40: #ABABA9;
--black-30: #C0C0BF;
--black-20: #D5D5D4;
--black-10: #EAEAEA;
```

**Usage:**
- Text hierarchy (body text, captions, metadata)
- Borders and dividers
- Background tints
- Hover and focus states

## Typography

### Principles
Swiss design emphasizes **clarity and readability** through systematic use of sans-serif typefaces.

### Type Scale

```css
/* Display - For hero sections and major headings */
--text-7xl: 4.5rem;    /* 72px */
--text-6xl: 3.75rem;   /* 60px */
--text-5xl: 3rem;      /* 48px */

/* Headings */
--text-4xl: 2.25rem;   /* 36px */
--text-3xl: 1.875rem;  /* 30px */
--text-2xl: 1.5rem;    /* 24px */
--text-xl: 1.25rem;    /* 20px */

/* Body */
--text-lg: 1.125rem;   /* 18px */
--text-base: 1rem;     /* 16px */
--text-sm: 0.875rem;   /* 14px */
--text-xs: 0.75rem;    /* 12px */
```

### Font Weights

```css
--font-black: 900;     /* Bold headlines, major emphasis */
--font-bold: 700;      /* Subheadings, strong emphasis */
--font-semibold: 600;  /* Buttons, labels */
--font-medium: 500;    /* Subtle emphasis */
--font-normal: 400;    /* Body text */
```

### Line Heights

```css
--leading-none: 1;
--leading-tight: 1.25;
--leading-snug: 1.375;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 2;
```

### Typography Rules

1. **Hierarchy is King**: Use size and weight to create clear visual hierarchy
2. **Limited Weights**: Stick to 2-3 font weights per page
3. **Generous Leading**: Body text should use 1.5-1.625 line height
4. **Tight Headlines**: Display text can use 1-1.25 line height
5. **Measure**: Body text should be 45-75 characters per line (65 optimal)

## Layout & Grid

### Container Widths

```css
--container-sm: 640px;   /* Small content */
--container-md: 768px;   /* Standard content */
--container-lg: 1024px;  /* Wide content */
--container-xl: 1280px;  /* Full-width sections */
```

### Spacing Scale

Based on a **4px base unit** for mathematical precision.

```css
--spacing-0: 0;
--spacing-1: 0.25rem;  /* 4px */
--spacing-2: 0.5rem;   /* 8px */
--spacing-3: 0.75rem;  /* 12px */
--spacing-4: 1rem;     /* 16px */
--spacing-5: 1.25rem;  /* 20px */
--spacing-6: 1.5rem;   /* 24px */
--spacing-8: 2rem;     /* 32px */
--spacing-10: 2.5rem;  /* 40px */
--spacing-12: 3rem;    /* 48px */
--spacing-16: 4rem;    /* 64px */
--spacing-20: 5rem;    /* 80px */
--spacing-24: 6rem;    /* 96px */
--spacing-32: 8rem;    /* 128px */
```

### Grid System

Use a **12-column grid** with consistent gutters.

```css
--grid-columns: 12;
--grid-gap: 1rem;      /* 16px on mobile */
--grid-gap-md: 1.5rem; /* 24px on tablet+ */
```

### Layout Principles

1. **Asymmetric Balance**: Don't center everything - use asymmetry with purpose
2. **Grid Adherence**: Align all elements to the grid
3. **White Space**: Use generous margins and padding
4. **Rhythm**: Maintain consistent vertical spacing
5. **Edge-to-Edge**: Allow images and color blocks to bleed to edges

## Components

### Buttons

#### Primary Button
```css
.button-primary {
  background: var(--cardinal-red);
  color: var(--white);
  padding: 0.5rem 1rem;
  font-weight: 600;
  font-size: 0.875rem;
  border-radius: 0.25rem;
  border: none;
  border-bottom: 2px solid var(--cardinal-red-dark);
  transition: background-color 150ms;
}

.button-primary:hover {
  background: var(--cardinal-red-dark);
}
```

#### Secondary Button
```css
.button-secondary {
  background: transparent;
  color: var(--black);
  padding: 0.5rem 1rem;
  font-weight: 600;
  font-size: 0.875rem;
  border-radius: 0.25rem;
  border: 2px solid var(--black-20);
  transition: all 150ms;
}

.button-secondary:hover {
  background: var(--black-10);
  border-color: var(--black-30);
}
```

### Cards

```css
.card {
  background: var(--white);
  border: 1px solid var(--black-20);
  border-radius: 0.5rem;
  overflow: hidden;
}

.card-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.card-content {
  padding: 1.5rem;
}
```

### Tags/Badges

```css
.tag {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 0.25rem;
  background: var(--black-10);
  color: var(--black);
}

.tag-cardinal {
  background: #FEE2E2; /* Cardinal red at 10% */
  color: #7F1D1D;      /* Dark red for contrast */
}
```

### Dividers

```css
.divider-bold {
  height: 4px;
  width: 8rem;
  background: var(--cardinal-red);
  border: none;
  margin: 2rem auto;
}

.divider-thin {
  height: 1px;
  background: var(--black-20);
  border: none;
  margin: 2rem 0;
}
```

## Design Patterns

### Hero Sections

```
┌─────────────────────────────────────┐
│                                     │
│     BOLD HEADLINE                   │
│     Supporting text in grey         │
│     ━━━━ (Cardinal divider)         │
│                                     │
└─────────────────────────────────────┘
```

**Rules:**
- Black, bold, oversized headlines (3-7xl)
- Grey supporting text (black-60 or black-70)
- Cardinal red accent divider
- Generous white space above and below

### Content Sections

```
┌─────────────────────────────────────┐
│  Section Heading                    │
│  ┌────┐  ┌────┐  ┌────┐            │
│  │    │  │    │  │    │            │
│  └────┘  └────┘  └────┘            │
└─────────────────────────────────────┘
```

**Rules:**
- Clear section headings (2xl-4xl, black)
- Grid-based card layouts
- Consistent card spacing
- 1-3 columns depending on screen size

### Image Galleries

```
┌──┬───┬──┐
│  │   │  │
├──┼───┼──┤
│  │   │  │
└──┴───┴──┘
```

**Rules:**
- Masonry or column-based layouts
- Minimal gaps (0.5-1rem)
- Rounded corners (0.5rem)
- No borders on images

## Interaction Design

### Transitions

```css
--transition-fast: 150ms;
--transition-base: 200ms;
--transition-slow: 300ms;

/* Easing */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
```

### Hover States

1. **Buttons**: Darken background, maintain sharp edges
2. **Cards**: Subtle lift with shadow (optional) or border color change
3. **Links**: Underline or color shift to cardinal red
4. **Images**: No zoom effects - keep it static and Swiss

### Focus States

```css
.focus-visible {
  outline: 2px solid var(--cardinal-red);
  outline-offset: 2px;
}
```

## Accessibility

### Color Contrast

All text must meet WCAG AA standards:
- Normal text: 4.5:1 contrast ratio
- Large text (18px+): 3:1 contrast ratio

**Safe Combinations:**
- ✅ Black (#2E2D29) on White (#FFFFFF) - 15.5:1
- ✅ Cardinal Red (#8C1515) on White (#FFFFFF) - 6.3:1
- ✅ Cool Grey (#53565A) on White (#FFFFFF) - 7.5:1
- ✅ White (#FFFFFF) on Cardinal Red (#8C1515) - 6.3:1
- ✅ White (#FFFFFF) on Black (#2E2D29) - 15.5:1

**Avoid:**
- ❌ Cardinal Red on Black (low contrast)
- ❌ Light grey text on white backgrounds

### Typography Accessibility

- Minimum body text size: 16px (1rem)
- Minimum line height: 1.5 for body text
- Maximum line length: 75 characters
- Sufficient spacing between interactive elements (44px minimum touch target)

## Responsive Breakpoints

```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
```

### Mobile-First Approach

1. Design for mobile (320px-640px) first
2. Enhance for tablet (640px-1024px)
3. Optimize for desktop (1024px+)

### Responsive Typography

```css
/* Mobile */
h1 { font-size: 2.25rem; } /* 36px */

/* Tablet */
@media (min-width: 768px) {
  h1 { font-size: 3rem; } /* 48px */
}

/* Desktop */
@media (min-width: 1024px) {
  h1 { font-size: 4.5rem; } /* 72px */
}
```

## Best Practices

### Do's ✅

1. **Use the grid**: Align everything to a consistent grid system
2. **Embrace white space**: Don't fill every pixel
3. **Be bold with type**: Large, black, confident headlines
4. **Use cardinal red sparingly**: It's powerful - use it for emphasis
5. **Keep it sharp**: No rounded corners on major elements (buttons can be subtle)
6. **Photography over illustration**: Use high-quality, documentary-style photos
7. **Asymmetric layouts**: Break the grid intentionally, not accidentally
8. **Consistent spacing**: Use the spacing scale religiously

### Don'ts ❌

1. **Don't center everything**: Swiss design uses asymmetry
2. **Don't use gradients**: Keep colors flat and bold
3. **Don't add drop shadows**: Keep it flat (subtle shadows on cards are OK)
4. **Don't use decorative fonts**: Stick to clean sans-serifs
5. **Don't overcrowd**: White space is your friend
6. **Don't use thin borders**: When you need borders, make them visible (1-2px minimum)
7. **Don't add unnecessary decoration**: Every element should serve a purpose
8. **Don't use multiple reds**: Stick to the cardinal red palette

## Implementation

### CSS Custom Properties

Create a global CSS file with all design tokens:

```css
:root {
  /* Colors */
  --cardinal-red: #8C1515;
  --cardinal-red-light: #B83A4B;
  --cardinal-red-dark: #820000;
  --white: #FFFFFF;
  --black: #2E2D29;
  --cool-grey: #53565A;
  
  --black-100: #2E2D29;
  --black-90: #43423E;
  --black-80: #585754;
  --black-70: #6D6C69;
  --black-60: #767674;
  --black-50: #979694;
  --black-40: #ABABA9;
  --black-30: #C0C0BF;
  --black-20: #D5D5D4;
  --black-10: #EAEAEA;
  
  /* Typography */
  --font-black: 900;
  --font-bold: 700;
  --font-semibold: 600;
  --font-normal: 400;
  
  /* Spacing */
  --spacing-4: 1rem;
  --spacing-8: 2rem;
  --spacing-16: 4rem;
  
  /* Transitions */
  --transition-base: 200ms;
}
```

### Component Naming

Use BEM (Block Element Modifier) methodology:

```css
.card { }
.card__image { }
.card__content { }
.card--featured { }
```

## Examples

### Page Header

```html
<section class="hero">
  <h1 class="hero__heading">WE DO IT ALL</h1>
  <p class="hero__description">
    Whether you're a total newbie or a seasoned marathoner...
  </p>
  <hr class="divider-bold" />
</section>
```

### Tradition Card

```html
<article class="card">
  <img src="..." alt="..." class="card__image" />
  <div class="card__content">
    <h3 class="card__title">Dish Run</h3>
    <p class="card__description">3.25 mile run...</p>
    <div class="card__tags">
      <span class="tag tag-cardinal">Winter</span>
    </div>
  </div>
</article>
```

## Resources

- **Swiss Design References**: Josef Müller-Brockmann, Massimo Vignelli
- **Stanford Brand Guidelines**: [identity.stanford.edu](https://identity.stanford.edu)
- **Grid Systems**: "Grid Systems in Graphic Design" by Josef Müller-Brockmann
- **Accessibility**: WCAG 2.1 AA Standards

---

**Version:** 1.0  
**Last Updated:** February 2026  
**Maintained by:** Stanford Running Club Development Team
