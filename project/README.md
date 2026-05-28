# Jerusalem East & West Orchestra — Design System

> **תזמורת ירושלים מזרח ומערב**
> Chief conductor & musical director: Tom Cohen (תום כהן)

A design system for an orchestra whose music — and whose visual identity — is built around the deliberate **fusion of Eastern and Western traditions**. The system uses warm paper-stock terracotta, deep contemplative navy, hand-cut illustrative wings, and a typographic voice that is unapologetically Hebrew-first.

---

## About the orchestra

The Jerusalem East & West Orchestra is a **multicultural ensemble** of musicians from the three Abrahamic faiths, from every region and every demographic sector of Israeli society. In **September 2022** it was designated by the Ministry of Culture and Sport as a leading orchestra of Israel.

Its arrangements — written by music director **Tom Cohen** — are built on a musical language developed over many years that *melts together* Eastern and Western methodology into a single coherent organic language, putting maqāmāt and Arab/Islamic rhythms in conversation with Western harmony and aesthetics. The orchestra is also unique in combining artistic-musical quality with **entertainment as agenda** — a deliberate refusal of the high/low art divide.

This design system aims to make the same fusion possible in the brand work: program books, posters, social, web, slide decks, signage. Hebrew is the primary language; Latin secondary; Arabic supported.

---

## Source materials

All inputs are stored in `uploads/`:

| File | What it is |
|---|---|
| `EWO-logoBLACK-TOM.pdf` | Master logo (dark roundel with white wordmark and conductor credit) |
| `EWO26postcard21X15.pdf` | 2026/2027 season postcard, 21×15cm — front: 4-concert grid + season wordmark; back: ticket info |
| `EWO26-1440.jpg` | Poster: *Back to "Shotei HaNevua"* — Avraham Tal |
| `EWO26-14402.jpg` | Poster: *Artist's Portrait / Stations in Time* — Itzik Kala |
| `EWO26-14403.jpg` | Poster: *Pop Icon* — Valerie Hamati & Liraz Tsardeli |
| `EWO26-14404.jpg` | Poster: *HaYahalom III* — Tom Cohen |
| `EWO26-800X534.jpg` | Season social card (composite of all 4 concerts) |
| `EzerFranzisca-Regular.otf` | Brand Hebrew typeface, regular weight |
| `EzerFranzisca-Black.otf` | Brand Hebrew typeface, black weight |

These have been processed into `assets/`, `fonts/`, and the visual specimens in `preview/`. The raw uploads are preserved.

---

## Index

```
/
├── README.md                ← you are here
├── SKILL.md                 ← invocation contract (use this as an Agent Skill)
├── colors_and_type.css      ← canonical tokens + semantic CSS (import this)
│
├── fonts/                   ← Ezer Franzisca (.otf, regular + black)
├── assets/                  ← logos, poster reference, paper texture, portraits
│   ├── logo-dark.png        ←   navy roundel / cream wordmark (for cream bgs)
│   ├── logo-light.png       ←   cream roundel / navy wordmark (for terracotta)
│   ├── paper-texture.jpg    ←   real scanned paper, multiplied over every surface
│   ├── portrait-avraham-tal.png ← transparent soloist cutout (alpha PNG)
│   ├── postcard-front.png
│   ├── poster-*.jpg         ←   four 2026/2027 concert posters
│   └── postcard-season.jpg
│
├── preview/                 ← design-system specimen cards (rendered in the DS tab)
├── slides/                  ← 16:9 slide kit (title, poster, agenda, …)
└── ui_kits/
    └── website/             ← marketing-site components + index showcase
```

---

## CONTENT FUNDAMENTALS

How the brand speaks.

### Language hierarchy
1. **Hebrew first.** RTL layouts are the default; Latin scripts are an accommodation, not a peer. When both appear, Hebrew leads in size and weight.
2. **Arabic when relevant.** Maqām names, song titles from the Arab repertoire, guest-artist names from the Arab world — use the original Arabic alongside Hebrew, never just transliteration.
3. **English for international touring & program notes.** Kept short, secondary in size.

### Voice
- **Confident, not promotional.** The orchestra is established and award-winning; the copy doesn't oversell. We name the program, the conductor, the soloist — and trust the audience.
- **Warm, declarative, present-tense.** *"בחזרה אל שוטי הנבואה"* — "Back to Shotei HaNevua." Not "Don't miss…", not exclamation marks.
- **Programmatic.** Names of programs are titles, not headlines. They get **quotation marks** (curly: `"…"` in Hebrew) when they cite an external work (an album, a song, a poem). Standalone concept titles are unquoted: *פוף אייקון*, *היהלום III*, *דיוקן אמן*.
- **Credits are part of the title block.** After the program title, the **soloist's name** appears below in smaller weight, separated by a centered dot-and-diamond ornament (see *Iconography*). The conductor is credited under the badge logo, not in body copy.
- **Numerals are Western (1, 2, 3)** even in Hebrew copy. Years use full four digits with an en-dash range: `2026–2027`.

### Casing & punctuation
- Hebrew has no case, so visual hierarchy comes from **weight and size**, never from ALL-CAPS Latin tricks.
- For Latin secondary text, **Title Case** in display; **sentence case** in body. Reserve ALL CAPS for `.micro` labels (dates, section markers) with tracking `0.08em`.
- **No exclamation points.** Ever. Wonder is communicated visually.
- **No emoji.** The dot-and-diamond ornament is the *only* decoration that appears inside text runs.

### Examples (real, from the 2026/2027 season)
> **בחזרה אל "שוטי הנבואה"** — אברהם טל
> *Back to "Shotei HaNevua" — Avraham Tal*

> **דיוקן אמן / תחנות בזמן** — איציק קלה
> *Artist's Portrait / Stations in Time — Itzik Kala*

> **פוף אייקון** — ואלרי חמאתי וליראז צ'רדלי
> *Pop Icon — Valerie Hamati & Liraz Tsarcheli*

> **היהלום III** — תום כהן
> *HaYahalom III — Tom Cohen*

> **עונת הקונצרטים — 2026/2027**
> *Concert Season — 2026/2027*

> Conductor credit (under logo): *מנצח ראשי ומנהל מוזיקלי: תום כהן*
> *Chief conductor and musical director: Tom Cohen*

### What we don't do
- No marketing superlatives ("incredible", "unforgettable", "must-see").
- No countdown urgency ("Last 3 tickets!").
- No first-person ("we believe", "join us"). The orchestra speaks by *performing*, not by addressing the reader.
- No call-out boxes, no badges, no "NEW!" stickers.

---

## VISUAL FOUNDATIONS

How the brand looks.

### Palette
The system has **four colors**, plus a cream that does the work white does in most brands.

| Token | Hex | Use |
|---|---|---|
| `--ewo-terracotta` | `#C56351` | Brand field. The poster background. Always shown with paper grain. |
| `--ewo-terracotta-deep` | `#B05745` | Pressed states, shadow side of warm shapes. |
| `--ewo-terracotta-light` | `#D27867` | Hover states, soft accent. |
| `--ewo-navy` | `#2E5588` | Primary ink on warm fields, decorative diamonds & half-discs, logo fill. Clearly blue — never gray or steel. |
| `--ewo-navy-deep` | `#1F3F6A` | Strongest contrast on cream. **The brand has no black** — this is still clearly blue. |
| `--ewo-cream` | `#F2F0E8` | The brand's "white". Used for wings illustration, light-mode surfaces. Never pure `#fff`. |
| `--ewo-peach` | `#E1957F` | The decorative orb/bead row. Soft coral. |

**The 60/30/10 rule, for EWO:** terracotta 60%, cream + navy together 30%, peach 10%. The peach should feel like a grace note, not a primary color.

### Typography
- **Display & all UI:** **Ezer Franzisca** (custom Hebrew face, very modern, slightly geometric with flared terminals; supports a Black weight that does the heavy lifting on titles).
- **Body & secondary UI:** **Editor Sans PRO** (Hebrew + Latin sans-serif, regular and bold with matching italics). Files in `fonts/EditorSans_PRO-*.otf`.
- **Latin display pairing:** Cormorant Garamond — *flagged: substitute pending the official Latin display face.*
- **Type rules:**
  - Line-height **1.0–1.05** for display, **1.5–1.55** for body. Hebrew tolerates tighter leading than Latin.
  - No italics in Hebrew (the script doesn't have a native italic; sloped Hebrew looks broken). Emphasis comes from weight only.
  - Tracking: `-0.01em` on display, `0` on body, `+0.08em` on `.micro` labels.
  - Numerals are tabular in lists, proportional in prose.

### Backgrounds
- **The dominant background is terracotta with paper grain.** Always. It's the brand. The grain comes from `assets/paper-texture.jpg` — a real scanned comic-paper stock multiplied over the flat color (`--paper-texture` token). An inline SVG noise (`--paper-noise`) is the lightweight fallback for contexts where the JPG can't load.
- A **cream paper field** is the secondary surface — for body-copy-heavy contexts (program notes, long reads). It carries the same grain at lower amplitude.
- **No gradients.** The brand is flat-paper, not glass. Cards that read as "elevated" do so through paper-stock shadow + grain, not via gradients.
- **No bluish-purple gradients. No glassmorphism. No neon. No tech-product tropes of any kind.**

### Imagery
- **Cut-out portraits.** Every soloist is photographed against a neutral seamless, then **silhouetted** and composited over the wings illustration. Photography style: **direct studio lighting, warm grade, slight contrast lift**, neutral or muted wardrobe so the warm background does the work.
- **No grain on portraits** (the paper grain is on the background, not the subject — important).
- **No environmental photography in the master brand.** Stage shots and rehearsal photos are reserved for editorial contexts (program notes, social), never for hero compositions.

### The wings motif
The signature illustration is a **set of stylized wings** in cream, spreading symmetrically from behind the soloist. They read as part halo, part shofar, part archaic plumage — deliberately ambiguous. Each concert poster recomposes the wings to feel **specific to that program**:
- Avraham Tal: feathered wings, classical phoenix
- HaYahalom III: angular flame-wings
- Pop Icon: rounded petal-wings with a central pot/vase silhouette
- Itzik Kala: tall flame-towers with dot accents

**The wings are not interchangeable assets**; each program gets its own composition. Use the existing four as reference, and commission new variants for new programs.

### Decorative shape vocabulary
On top of the wings, the system uses three small motifs to anchor portraits to the bottom of the frame:
- **Navy half-discs** (semicircle below the wings, behind the portrait shoulders)
- **Peach orb rows** (5–7 circles in a line, like prayer beads or beans on a string)
- **Diamond clusters** (navy + peach + terracotta squares-on-point)

These never appear standalone; they always sit *under* a portrait, framing it.

### Borders, rules, dividers
- **No card outlines.** The system relies on color blocks and paper shadow.
- **Where a rule is needed**, it is a dotted line of **navy diamonds and dots**: `· · ·  ◆  · · ·` (see `.ornament-dots`).
- Rule color is always navy at ~85% opacity over terracotta, never against cream.

### Shadows & elevation
- `--shadow-paper`: a hair-line + a soft 16px drop; what a printed card on a wood table casts.
- `--shadow-card`: a hair-line + a 40px drop; the elevated-card state.
- No inner shadows except `--shadow-inset` for occasional 1-pixel rules on cream.

### Radii
- **Default is 0px.** The brand reads as printed paper; cards, surfaces, and posters use sharp corners.
- **Buttons:** square (0px) by default, single weight, no scale on press. Pill (`--r-pill`) is reserved for tags and icon-only affordances.
- **Roundels** (the logo, badges, social icons): `--r-circle`.
- **`--r-md` (8px) and `--r-lg` (16px)** exist as escape hatches for rare soft-chip contexts. Reach for them last; they're not the brand default.

### Layout rules
- **RTL by default.** All margins, alignment, and grid flow assume right-to-left.
- **Symmetry over alignment.** Hero compositions are centered (the wings demand it). Editorial and list contexts use a clean right-aligned grid.
- **Generous vertical rhythm.** Use the `--s-7` (48px) and `--s-8` (64px) tokens between sections; `--s-5` (24px) within sections.
- **Optical sizing:** poster headlines run very large (>96px); body copy stays at 17px. There is no in-between "subtitle" size that's bigger than 24px in body contexts — the dot-ornament does the job instead.

### Animation
- **Quiet.** Fades and small drifts; no spring bounce.
- Default duration **280ms**, easing **`var(--ease-quiet)`** which is a slow-in slow-out (decelerated). Hover transitions are 140ms.
- The wings can drift on long-form web pages (very subtle parallax), but never animate on first paint — the brand reads as printed, not animated.
- Reduced-motion preference disables drift and parallax; keeps fades.

### Hover & press states
- **Hover** on links and buttons: opacity 0.75. *Never* a color shift, never an underline-appearing trick.
- **Hover** on cards: tiny lift (`translateY(-2px)`) + bump to `--shadow-card`.
- **Press** (active): no scale, no color change — only opacity 0.6 for 60ms.
- **Focus**: a 2px navy outline at 3px offset over terracotta; same color on cream backgrounds. No glow, no double-ring.

### Transparency & blur
- **Almost none.** A single semi-transparent state exists: the navy-on-terracotta dotted ornament uses 85% opacity. There is no scrim, no backdrop-blur, no glass.
- Exception: in the website's full-bleed hero, a 30%-opacity navy gradient *bottom-up* protects caption legibility. This is the only protection gradient in the system.

### Iconography vibe
- See **ICONOGRAPHY** section below.

---

## ICONOGRAPHY

The brand has, by design, **almost no iconography**. The wings are the only illustrative element; everything else is type, geometry, and the dot ornament.

**What we use:**
- **The logo roundel** — `assets/logo-dark.png` (navy circle, cream wordmark) and `assets/logo-light.png` (cream circle, navy wordmark). The "TOM" variant (filename `EWO-logoBLACK-TOM.pdf`) includes Tom Cohen's name as conductor credit underneath; this is the *primary, current* mark.
- **The wings illustration** — see `Visual Foundations / The wings motif`. Treat as commissioned art, not as an icon.
- **The diamond-and-dot ornament** — Unicode characters: `·` U+00B7 and `◆` U+25C6, in navy, used as a decorative rule.
- **Decorative shapes** — half-discs, peach orbs, navy diamond clusters — drawn inline as SVG `<circle>` and `<rect transform="rotate(45)">` primitives. No imported icon set.

**What we don't use:**
- **No icon font.** No Material Icons, no Font Awesome, no Lucide. UI iconography (calendar, ticket, location, play) is rendered as **small line-drawn SVGs at 1.5px stroke**, in navy on cream / cream on terracotta, only where strictly needed (ticket booking, social links).
- **No emoji.** None. Not in marketing, not in tickets, not in social copy.
- **No flags.** Even when programs feature artists from different traditions, we don't symbolize regions with flags.
- **No Unicode pictographs** other than `·` and `◆`.

When a UI needs an icon and the system doesn't supply one, **substitute Lucide** (line, 1.5px) — it's the nearest match to the brand's hand-drawn-feeling line illustrations. Flagged as a substitute. Document any new icon added.

---

## Caveats / open questions

The Design System is built from the 2026/2027 season visual package alone. Open items that need user input to lock down:

- **Latin display face.** The Hebrew uses Ezer Franzisca; no Latin display pairing was supplied. Cormorant Garamond is a placeholder.
- **Arabic face.** Not supplied. The system declares structural support but no specimen exists yet.
- **Logo lockups for other contexts** — square, horizontal-wordmark, app-icon — not in the kit. The roundel is the only mark provided.
- **Other brand collateral** (program book interior, ticket design, merch, social templates) was not in the upload set and is not represented in the system.
- **Color exactness.** All values were sampled from JPEGs; small drift is expected vs. the print master.

---

## Using this system

Drop `colors_and_type.css` into the head of any HTML you make for the orchestra, and you get the tokens and base type for free. For richer surfaces, import a UI kit (see `ui_kits/website/`). For slide work, copy a layout from `slides/`. For more guidance, read `SKILL.md`.
