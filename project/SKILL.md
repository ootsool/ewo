---
name: ewo-design
description: Use this skill to generate well-branded interfaces and assets for the Jerusalem East & West Orchestra (תזמורת ירושלים מזרח ומערב), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill first — it covers the company context, the content voice, the visual foundations, and an index of every asset.

Then explore the other available files:

- `colors_and_type.css` — drop-in stylesheet. Contains all color tokens (`--ewo-terracotta`, `--ewo-navy`, `--ewo-cream`, `--ewo-peach`, …), the type ramp, spacing, radii, shadows, motion, and the `--paper-noise` SVG background. Import it and you get sensible base styles for free.
- `fonts/` — Ezer Franzisca Regular and Black (the brand Hebrew face). `colors_and_type.css` declares them with `@font-face`; just keep them at this path.
- `assets/` — logos (`logo-light.png` for terracotta backgrounds, `logo-dark.png` for cream backgrounds), four 2026/2027 concert posters, and the season postcard.
- `preview/` — small specimen cards (colors, type, shapes, components). Read these to see how tokens compose.
- `ui_kits/website/` — a hi-fi React-as-Babel recreation of the orchestra's homepage. Use components from here when you need hero / season-grid / concert-card / footer structures.
- `SKILL.md` — this file.

### When creating visual artifacts (slides, posters, mocks, throwaway prototypes)
- Copy whichever assets and CSS you need into your output file, or reference them with relative paths.
- Always use the **terracotta + paper-grain** background unless there is a specific reason not to (the navy About strip is the only existing exception).
- Use **Ezer Franzisca Black** at very large sizes for display Hebrew; **Editor Sans PRO** for body. For Latin, use Cormorant Garamond display + Editor Sans body (Cormorant flagged as a substitute).
- Hebrew is **RTL and primary**. Latin and Arabic are secondary; never lead with English.
- Decorative vocabulary is **strictly**: the wings illustration, navy half-discs, peach orb rows, navy+peach diamond clusters, and the `· · · ◆ · · ·` dot-and-diamond text ornament. No emoji. No gradients. No glass. No icon fonts.

### When working on production code
- Read the design tokens out of `colors_and_type.css` and either import the file directly or copy the values into your design system layer (Tailwind config, Style Dictionary, etc.).
- Match the typographic and decorative rules in `README.md` § **Content fundamentals** and § **Visual foundations** before committing UI.
- If you need an icon and none exists in the brand, substitute Lucide (line, 1.5px stroke) and flag it.

### If the user invokes this skill without other guidance
Ask them what they want to build or design — a poster, a slide, a concert page, a social tile, a program book, etc. Ask a few targeted questions (audience, language, where it will appear, deadline) and act as an expert designer who outputs **HTML artifacts** (for visual exploration) or **production code** (when they're working on a real site/app), depending on the need.

### Caveats to surface
- The Latin display face is a substitute (Cormorant Garamond) pending the official one.
- The wings illustration in this kit is the **complete poster image** rather than a clean SVG; commission an isolated wings asset before composing new programs.
- Color values were sampled from JPEGs; ±2 RGB drift vs. print master is possible.
- No Arabic specimen exists yet. The tokens declare structural support, no content.
