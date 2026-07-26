# Design — OxideTerm

A locked design system for the OxideTerm marketing and documentation site. Every
page reads this file before visual changes are made. Content, factual claims,
routes, localisation data, and application screenshots remain source material;
this system controls only presentation and interaction.

## Genre

Modern-minimal, expressed as a technical field manual rather than a generic SaaS
landing page.

## Macrostructure family

- Marketing pages: **Workbench** with real product media, asymmetric section
  rhythm, and compact technical captions.
- Content pages: **Index-First** navigation inside Starlight, followed by a
  restrained Long Document reading surface.
- Localised landing pages: the same Workbench composition and tokens as the
  English landing page.

## Theme

- `--color-paper`: `oklch(97.5% 0.006 45)`
- `--color-paper-2`: `oklch(94% 0.008 45)`
- `--color-paper-3`: `oklch(90% 0.009 45)`
- `--color-ink`: `oklch(19% 0.010 40)`
- `--color-ink-2`: `oklch(32% 0.012 40)`
- `--color-rule`: `oklch(79% 0.012 45)`
- `--color-accent`: `oklch(52% 0.180 35)`
- `--color-focus`: `oklch(60% 0.210 35)`

The accent is an oxide-red signal and must occupy no more than five percent of a
viewport. It marks actions, selected states, focus, and small brand details; it
does not fill entire sections.

## Typography

- Display: Space Grotesk, weight 700, roman.
- Body: IBM Plex Sans, weight 400.
- Mono: JetBrains Mono, weight 400.
- Display tracking: `-0.035em`.
- Type scale anchor: `--text-display = clamp(2.75rem, 5vw + 1rem, 5.25rem)`.
- CJK glyphs fall through to locally available Noto Sans CJK, Source Han Sans,
  PingFang, Hiragino Sans, or Microsoft YaHei.

## Spacing

A four-point named scale lives in `tokens.css`. Components use named tokens
instead of raw spacing values. Section rhythm alternates between compact proof
bands and generous product-tour sections.

## Motion

- Easings: `--ease-out`, `--ease-in`, and `--ease-in-out`.
- Motion primitives: button press, tab crossfade, and one page-load hero reveal.
- Reduced-motion fallback: opacity-only transitions of at most 150 ms.
- No parallax, ambient loops, universal scroll reveals, or layout-property
  animation.

## Microinteractions stance

- Successful navigation and tab changes are silent.
- Focus rings appear immediately and never animate.
- Hover feedback has an equivalent focus state.
- Touch targets are at least 44 × 44 CSS pixels.

## CTA voice

- Primary CTA: dark ink fill, compact rectangular shape, 6 px radius, explicit
  verb copied from the existing localisation data.
- Secondary CTA: paper fill with an ink rule.
- Press feedback: one-pixel downward translation; no glow or bounce.

## Per-page allowances

- Marketing pages may use existing real screenshots and the existing demo video.
- Documentation pages use typography, code, diagrams, and Starlight navigation
  only.
- Fake browser, terminal, phone, and IDE chrome is not used.

## What pages MUST share

- OxideTerm wordmark construction.
- Oxide-red accent placement.
- Space Grotesk, IBM Plex Sans, and JetBrains Mono roles.
- Button geometry, focus treatment, rules, and spacing scale.
- Technical field-manual section rhythm.

## What pages MAY differ on

- Marketing sections may alternate screenshot and copy placement.
- Documentation pages may use denser navigation and longer reading measures.
- Existing real media may determine a section's aspect ratio.

## Exports

### tokens.css

```css
:root {
  --color-paper: oklch(97.5% 0.006 45);
  --color-paper-2: oklch(94% 0.008 45);
  --color-paper-3: oklch(90% 0.009 45);
  --color-ink: oklch(19% 0.010 40);
  --color-ink-2: oklch(32% 0.012 40);
  --color-rule: oklch(79% 0.012 45);
  --color-accent: oklch(52% 0.180 35);
  --color-focus: oklch(60% 0.210 35);

  --font-display: "Space Grotesk", sans-serif;
  --font-body: "IBM Plex Sans", sans-serif;
  --font-mono: "JetBrains Mono", monospace;

  --space-3xs: 0.125rem;
  --space-2xs: 0.25rem;
  --space-xs: 0.5rem;
  --space-sm: 0.75rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2.5rem;
  --space-2xl: 4rem;
  --space-3xl: 6rem;
  --space-4xl: 9rem;

  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in: cubic-bezier(0.7, 0, 0.84, 0);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
}
```

### Tailwind v4 `@theme`

```css
@theme {
  --color-paper: oklch(97.5% 0.006 45);
  --color-paper-2: oklch(94% 0.008 45);
  --color-ink: oklch(19% 0.010 40);
  --color-accent: oklch(52% 0.180 35);
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "IBM Plex Sans", sans-serif;
  --font-mono: "JetBrains Mono", monospace;
  --spacing-md: 1rem;
  --text-md: 1.25rem;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
}
```

### DTCG `tokens.json`

```json
{
  "color": {
    "paper": { "$value": "oklch(97.5% 0.006 45)", "$type": "color" },
    "ink": { "$value": "oklch(19% 0.010 40)", "$type": "color" },
    "accent": { "$value": "oklch(52% 0.180 35)", "$type": "color" }
  },
  "font": {
    "display": { "$value": "Space Grotesk", "$type": "fontFamily" },
    "body": { "$value": "IBM Plex Sans", "$type": "fontFamily" },
    "mono": { "$value": "JetBrains Mono", "$type": "fontFamily" }
  },
  "space": {
    "md": { "$value": "1rem", "$type": "dimension" }
  }
}
```

### shadcn/ui CSS variables

```css
:root {
  --background: 0.975 0.006 45;
  --foreground: 0.19 0.010 40;
  --primary: 0.52 0.180 35;
  --primary-foreground: 0.975 0.006 45;
  --muted: 0.90 0.009 45;
  --muted-foreground: 0.48 0.012 42;
  --border: 0.79 0.012 45;
  --input: 0.79 0.012 45;
  --ring: 0.60 0.210 35;
  --radius: 0.375rem;
}
```
