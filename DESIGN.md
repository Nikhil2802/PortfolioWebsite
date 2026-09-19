---
name: Nikhil Patel — Event Display
description: A collider event display as a portfolio: near-black vacuum, steel instrument chrome, and two validated signal jets that route to their own evidence.
colors:
  vacuum: "#07090D"
  vacuum-raised: "#0C1016"
  vacuum-sunk: "#04060A"
  vacuum-lift: "#10161F"
  steel: "#6E8FAC"
  steel-bright: "#93A6B8"
  steel-dim: "#2C3B49"
  detector-arc: "#3C5568"
  ink: "#D6DDE4"
  infra: "#A8861B"
  software: "#0095AA"
  calor: "#C0392B"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 8vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.92
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.375
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  lede:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "Martian Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "0.08em"
rounded:
  none: "0px"
  focus: "1px"
  full: "9999px"
spacing:
  hair: "2px"
  xs: "8px"
  sm: "12px"
  md: "20px"
  lg: "40px"
  gutter: "24px"
  gutter-wide: "48px"
  band: "80px"
  band-wide: "112px"
components:
  control:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "10px 16px"
  control-hover:
    textColor: "{colors.software}"
  control-primary:
    backgroundColor: "transparent"
    textColor: "{colors.software}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "10px 16px"
  control-primary-hover:
    backgroundColor: "{colors.software}"
    textColor: "{colors.vacuum}"
  control-compact:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "6px 12px"
  track-chip:
    backgroundColor: "transparent"
    textColor: "{colors.steel-bright}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "6px 12px"
  track-chip-active-infra:
    textColor: "{colors.infra}"
  track-chip-active-software:
    textColor: "{colors.software}"
  status-tag:
    backgroundColor: "transparent"
    textColor: "{colors.steel-bright}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "4px 10px"
  input:
    backgroundColor: "{colors.vacuum-raised}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "10px 12px"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.steel}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "4px 0"
  nav-link-current:
    textColor: "{colors.software}"
  legend:
    backgroundColor: "transparent"
    textColor: "{colors.steel-bright}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0px"
---

# Design System: Nikhil Patel — Event Display

## Overview

**Creative North Star: "The Reconstructed Event"**

The page is one particle-collision event already reconstructed on screen. A single interaction point sits left of centre; two jets fan out of it to the right, one for secure infrastructure and one for shipped software, drawn at the same scale with the same track count because the claim being made is that neither half is a footnote. Everything around that graphic is instrument chrome rather than product UI: hairline arcs, engraved letterspaced mono labels pinned to what they measure, tabular figures, and a near-black vacuum ground that is alive rather than flat.

The event is no longer decoration. Every one of the sixteen tracks points at the exact element on this page that evidences it, hovering or focusing one lights every track that shares a destination, and following it scrolls to the proof and marks it once on arrival. The graphic mirrors that state and stays out of the tab order; the chips beneath it are the real links. The three detector arcs carry no labels, because they never measured anything and labelling them implied an axis that did not exist.

The density is high in the measurement layer and generous in the reading layer. Labels, metadata and status run at a 12px mono floor with wide tracking; prose runs at a comfortable 16–20px capped at a 68-character measure. Colour is scarce by construction, and it is also deliberately dim: the signal pair was darkened until both members sat inside a validated lightness band for a near-black surface, because the brighter pair glared. Almost the entire surface is four values of near-black and three values of steel blue.

Confirmed rejections, all held by the build: no cards, no rounded product-UI containers, no elevation shadows, no glow used as decoration, and no second motion curve. The one authored moment is the event reconstructing itself once per page load, and the finished state is always the default, so a reader who asks for stillness gets the complete event with no animation attached at all.

**Key Characteristics:**
- Near-black vacuum ground, painted inline on `<html>` and `<body>` so it never waits for a stylesheet
- Two signal colours at permanently equal weight, validated as a categorical pair rather than picked by eye
- Every graphic track is a route: a destination id, a human destination label, and a one-shot arrival marker
- Zero elevation: depth comes from tonal layering, 1px hairlines and a shader vignette
- Square corners everywhere; circles only for real instrument marks
- A two-voice type system, Archivo for structure and Martian Mono for measurement
- One authored entrance, one easing curve, fully still under reduced motion

## Colors

A near-monochrome instrument palette: four steps of near-black vacuum, three steps of steel blue for chrome and text, and three saturated signal colours that are spent sparingly. Tailwind classes carry every colour expressible as a class; `components/site/palette.js` is the single source for the literals that SVG and inline styles need, and `styles/globals.css` mirrors the same scale as custom properties on `:root`.

### Primary
- **Infrastructure Yellow** (`{colors.infra}`): The infrastructure jet. Track strokes and end marks in the event display, the jet's chip labels and dot, the Infrastructure section heading and its left rule, the in-progress status tag, and the "sending" console status. A deep ochre rather than a bright yellow, at L 0.635 in OKLCH. Never used as a general highlight.
- **Software Cyan** (`{colors.software}`): The software jet, and the system's interactive voice. Track strokes and marks, the Software heading, the current nav item, every hover and focus state, the primary control, the focus ring, the text caret, the selection background, the evidence arrival marker, the custom cursor ring, and the interaction-point core glow. A dark teal at L 0.615, one step off its partner.

### Secondary
- **Calorimeter Red** (`{colors.calor}`): Deposited energy and failure only. The fourteen grade bars, the hovered grade number, the left rule beside the degree definition list, and the console's error message. It never marks a jet, never decorates, and never sets a heading.

### Neutral
- **Vacuum** (`{colors.vacuum}`): The page ground, the theme colour, the inline first-paint background on `<html>` and `<body>`, the scrollbar track, and the knocked-out label on a filled primary control.
- **Vacuum Raised** (`{colors.vacuum-raised}`): Input and textarea fills — the only place in the system where a surface is filled lighter than the ground.
- **Vacuum Sunk** (`{colors.vacuum-sunk}`): The outer stop of the ground gradient, deepening the corners.
- **Vacuum Lift** (`{colors.vacuum-lift}`): The inner stop of the ground gradient at 18% 45%, carried as a literal in the ground's own background image. It is the brightest point of the ground and therefore the value every contrast decision is measured against.
- **Ink** (`{colors.ink}`): Headings, the display name, high-emphasis definition values, and input text. 13.3:1 on the lightest ground.
- **Steel Bright** (`{colors.steel-bright}`): Body prose, readout values, inactive chip and track labels, external link text. The workhorse reading colour at 7.3:1.
- **Steel** (`{colors.steel}`): Legends, metadata, axis notes, default nav items, captions, and the readout's resting prompt. Secondary by role, not by accident.
- **Steel Dim** (`{colors.steel-dim}`): Every hairline — section rules, container borders, list dividers, the dashed beamline, image frames, the scrollbar thumb.
- **Detector Steel** (`{colors.detector-arc}`): The three concentric detector arcs. One step brighter than the hairline colour so detector geometry reads above layout rules, and still well below text contrast because it is chrome.

### Named Rules
**The Equal Jets Rule.** Infrastructure yellow and software cyan always carry identical visual weight: same stroke weights, same arc span, same chip treatment, same heading scale, same track count. Neither may be given more saturation, more area, or earlier position. If a change makes one jet read as the main one, the change is wrong.

**The Validated Pair Rule.** The two signal colours are a categorical pair in fixed order — infrastructure first, software second — never cycled, never generated, never extended to a third member. They hold because they were run through the data-visualisation palette validator against the vacuum ground and against the lightest point of its gradient: both sit inside the L 0.48–0.67 band for a dark surface (infra 0.635, software 0.615), with chroma above the grey floor and colour-vision-deficiency separation past threshold. The earlier pair failed that band outright at L 0.862 and L 0.743, which is why the page read as glaring. Any future change to either colour is re-validated the same way, never eyeballed.

**The Ground-First Rule.** The ground may never depend on a stylesheet arriving. Vacuum and ink are set as inline styles on `<html>` and `<body>` in `pages/_document.js`, and `color-scheme: dark` is declared both there and on `:root`, so the browser paints its own canvas, scrollbars and form controls dark before any CSS is parsed. A near-black world that gets its background from an external stylesheet flashes a white page with unreadable text; that is a defect, not a loading state.

**The Ground-Gradient Contrast Rule.** Text contrast is measured against Vacuum Lift (`{colors.vacuum-lift}`), the lightest point of the ground gradient, never against pure black. Steel is the darkest colour permitted to carry text, at 5.4:1 measured that way; anything dimmer is chrome, not text. The signal colours clear the same floor as text (infra 5.3:1, software 5.1:1).

**The Status-Not-Identity Rule.** Status colours never set a heading. Calor red measures 3.3:1 against the lightest ground, which only clears the large-text floor, and it means energy or error rather than section identity — so the Calorimeter heading is ink, like every other non-jet heading. Only the two jets name themselves in their own colour, because for them the colour *is* the identity.

**The Signal Scarcity Rule.** A signal colour means active, latched, current, or measured. It never means "important". Outside the two jets, the calorimeter bars, status tags and interaction states, the whole page is vacuum and steel.

## Typography

**Display Font:** Archivo (with `system-ui`, `sans-serif`), loaded through `next/font` as `--font-archivo`
**Body Font:** Archivo — the same face carries structure and prose
**Label/Mono Font:** Martian Mono (with `ui-monospace`, `monospace`) at weights 400 and 600, loaded as `--font-martian`

**Character:** Archivo is wide, grotesque and unglamorous; set at 600 with negative tracking it reads as engineered signage rather than a brand wordmark. Martian Mono is narrow, mechanical and unapologetically technical, and it is confined to the measurement layer, where its width and letterspacing make identifiers and numbers read as instrument output. Tabular figures are enabled globally on the body, because this is an instrument.

### Hierarchy
- **Display** (600, `clamp(2.75rem, 8vw, 6rem)`, 0.92 leading, -0.035em tracking): the name, once, in the first viewport. Capped at 6rem so it never outgrows the event beside it.
- **Headline** (600, 1.875rem rising to 2.25rem from 768, tight leading, -0.02em): the four section headings. Infrastructure and Software take their own jet colour; Calorimeter and the console heading are ink.
- **Title** (600, 1.5rem rising to 1.875rem, -0.015em): project names. A second title register at 1.125rem/600 carries the nine responsibility leads and the sixth-form award.
- **Body** (400, 1rem rising to 1.125rem, 1.625 leading, capped at the 68ch measure): all prose. The first-viewport positioning line runs one step up (1.125rem rising to 1.25rem) and is the only lede on the page.
- **Label** (400, 0.75rem, 1.1 leading, 0.08em base tracking, uppercase): the whole measurement layer — legends, nav items, controls, chips, status tags, run metadata, the readout, the footer. Per-use tracking widens from 0.06em to 0.22em depending on how engraved the label must read; 0.22em is reserved for the two jet names. Track labels inside the SVG are the one mono exception to uppercase: they are 13px at 0.04em in the content's own casing, because they are product names.

### Named Rules
**The Two Voices Rule.** Archivo carries structure and prose; Martian Mono carries measurement. There is no third face and no decorative face. If a string is an identifier, a number, a status, or a control, it is mono, uppercase and letterspaced; if it is a sentence, it is Archivo in sentence case.

**The 12px Floor Rule.** The measurement layer runs small but never below 0.75rem (12px). Small type earns its size with letterspacing and tabular figures, never by shrinking.

**The Measure Rule.** Prose is capped at `68ch` (`max-w-measure`). No paragraph on this page runs the full width of its column.

## Layout

A single scrolling page of full-width bands. Every band is centred in a 1600px maximum container with 24px side gutters rising to 48px from 768, and vertical padding of 80px rising to 112px. Section rhythm is that band padding alone; there are no wrapper panels between the band and its content.

The recurring content grid is asymmetric two-column at `lg` (1024): a narrower left column holding the heading, the definition list and the summary, and a wider right column holding the evidence — 0.8fr / 1.2fr for Infrastructure, Calorimeter and Console, 0.75fr / 1.25fr for projects, 0.85fr / 1.15fr for the first viewport, which is left-light because the event needs the room. The left column sticks at `top: 6rem` while the evidence scrolls past it. Below `lg` every grid collapses to a single column in source order. The Operator band uses a fixed portrait track (220px, 260px at `lg`) against a flexible prose column.

Breakpoints are Tailwind's defaults and each one has a job: **640** swaps the nav's short labels for full labels and reveals the nav contact control; **768** switches the event display to its labelled full variant, widens gutters and bands, and is the floor for the WebGL ground; **1024** turns on the two-column grids, the sticky left rails, the site name in the nav, and the custom cursor. Sections scroll-target with a 5rem top margin to clear the sticky header, individual evidence items with a 6rem margin, and smooth scrolling is disabled under reduced motion.

Image delivery is capped deliberately: device sizes stop at 1280 with image sizes of 256/384 and WebP output, because no shipped raster is wider than 1280 and the larger buckets could only produce upscales.

### Named Rules
**The One Row Rule.** The navigation holds exactly one row at every width. Below 640 it uses short labels with the full section label as the accessible name; the site name waits for `lg` rather than being allowed to wrap the bar.

**The Two Variants Rule.** The event display ships in exactly two forms: a labelled full variant (1000×660 viewBox, three arcs at r180/310/440, track names at r490) from 768 up, and a label-free compact variant (420×400, r110/188/266) below it, where the chips underneath carry the names. The signature image shrinks; it never disappears. Labels in the full variant name tracks only — the arcs are never labelled.

## Elevation & Depth

This system has no elevation. Nothing lifts, nothing casts. Depth is built three other ways: **tonal layering** in the near-black family (sunk ground, vacuum, raised input fills), **1px hairlines** in steel-dim that bound every container and divide every list, and **the ground itself** — a fullscreen fragment shader with two octaves of value noise, a radial vignette that darkens the frame by up to 35%, and a faint cyan bloom that follows the pointer. The shader is bounded hard (fine pointers only, 768 and up, half resolution, paused when the tab is hidden, never under reduced motion) and its CSS fallback — a radial gradient from Vacuum Lift at 18% 45% through Vacuum to Vacuum Sunk — is treated as the real design rather than a degradation. One translucent layer exists, the sticky header at 85% vacuum with a medium backdrop blur, and that is the only blur in the system.

### Shadow Vocabulary
- **Evidence marker** (`box-shadow: inset 2px 0 0 var(--software)`): the system's only box-shadow. Zero blur, zero offset, inset — a 2px cyan left rule drawn on the element a visitor has just arrived at, in the same hairline vocabulary as every other rule, without shifting layout. It is a rule rendered as a shadow, not a lift, and it is the only permitted use of the property.

### Named Rules
**The No-Elevation Rule.** Surfaces never lift. There is no outer, blurred, offset or hard-offset shadow anywhere in the build and none may be added. If something needs to separate from the ground, give it a hairline, a tonal step, or nothing.

**The Field-Only Glow Rule.** Soft light exists in exactly two places: the interaction-point core (a white-to-cyan radial gradient fading to zero) and the pointer bloom in the shader ground. Text, headings, borders, controls and images never glow.

## Shapes

Square by default. Radius is 0 on every control, chip, tag, input, image frame, form container and nav item; the form language is drawn entirely with 1px hairlines and right angles. Circles appear only where the instrument genuinely has a round mark: the jet dots beside each jet label (8px), the status-tag dots (6px), the track end marks in the event display (4px, 5px when active), and the interaction point (a 4.5px white core inside a 46px gradient bloom, 3.5px inside 30px compact). The only softened corner in the system is the focus ring's 1px radius, which keeps the outline from looking chipped at its corners.

Recurring geometry: hairline arcs and quadratic curves. Charged tracks are always quadratic Bézier curves bending in the field — never straight rays — with a 3.5° bend off the jet axis, fanning across a 28° window per jet inside a 44° arc span. The beamline is a `2 8` dashed hairline running the full viewBox width. Calorimeter bars are 6px-tall rectangles on a 40%-opacity steel-dim track, scaled from a declared 60% floor to 100% with the axis note printed beneath them.

## Components

### Buttons (Controls)
Latching instrument controls, not product buttons.
- **Shape:** hard square corners (0 radius), 1px border.
- **Default (`.control`):** transparent fill, steel-dim border, ink label in mono uppercase at 0.14em tracking, 16px / 10px padding with an 8px gap.
- **Primary (`.control-primary`):** software-cyan border and label at rest; on hover it fills with cyan and knocks the label out to vacuum. This is the only filled surface in the system.
- **Hover / Focus:** border and text move to software cyan over 200ms on the single expo curve. Focus additionally draws the global 2px cyan outline at 3px offset; focus is never removed.
- **Compact:** the nav's contact control drops to 12px / 6px padding, unchanged otherwise.
- **Disabled:** 50% opacity and a not-allowed cursor (the console submit while sending).

### Chips (Track chips and status tags)
- **Track chips:** real anchors, one per track, each linking to the id of the element that evidences it and named for it in its accessible label ("PowerShell, evidenced in Automation and scripting"). 1px steel-dim border, transparent fill, mono label at 0.06em, 12px / 6px padding, inactive text steel-bright.
- **State:** hover or focus takes the chip's border and text to its jet colour, lights every chip and track sharing the same destination, and drops everything else to 40% opacity. Blur or pointer-leave restores. There is no pressed or latched state: the chip's job is to go somewhere, so activation navigates rather than toggling.
- **Stack chips:** the same silhouette without state, listing a project's stack in steel-bright.
- **Status tags:** the same silhouette with a leading dot, coloured by state — Offline in steel-bright, Shipped in cyan, In progress in infra yellow — with the border at 33% alpha of the text colour.

### Containers
There are no cards. Content sits directly on the vacuum inside the band, separated by full-width hairline rules.
- **Corner Style:** square (0 radius).
- **Background:** the vacuum ground shows through; containers are not filled.
- **Shadow Strategy:** none — see Elevation & Depth.
- **Border:** 1px steel-dim, most often a single top or bottom rule per list item (24px vertical padding) or a left rule in the subject's own colour at 40% alpha beside a definition list.
- **Internal Padding:** 24px rising to 32px for the one truly bounded container, the console form.
- **Empty state:** a dashed steel-dim hairline box with a steel line of prose, used where a project genuinely has nothing to show yet.
- **Images:** framed with a 1px steel-dim hairline and no radius. Within a project's evidence stack, shots after the first sit at 92% opacity so the lead shot stays the lead.

### Inputs / Fields
- **Style:** vacuum-raised fill, 1px steel-dim border, no radius, ink text at body size, 12px / 10px padding, with a mono uppercase legend label above at an 8px offset. Textareas are vertically resizable at 6 rows.
- **Hover:** border brightens to steel.
- **Focus:** border moves to software cyan and the native outline is suppressed on the field itself, because the border shift is the focus signal; the caret is cyan.
- **Status:** one polite live-region line under the submit, in infra yellow while sending, cyan on success, calor red on failure. It does not vanish on a timer.

### Navigation
Sticky header at z-index 30, 85% vacuum with backdrop blur, bounded below by a steel-dim hairline at 70% alpha. Items are mono uppercase 12px at 0.1em tracking (0.12em from 768): steel at rest, ink on hover, software cyan when current, resolved by an intersection observer with a -20% / -65% root margin and marked with `aria-current`. A skip link precedes everything, invisible until focused, then drawn as a cyan-bordered vacuum chip 16px from the top left.

### The Event Display
The signature component and the visual thesis: a decorative, `aria-hidden` SVG whose geometry is computed deterministically from the content data so server and client markup match. Three concentric hairline arcs in detector steel carrying no labels; a dashed hairline beamline; two jets of quadratic tracks in their signal colours, core tracks at 1.9px and 0.85 opacity and ordinary tracks at 1px and 0.5; an end mark per track; the interaction point at the origin; and in the full variant a track name at r490 in steel-bright.

Each track is a link to the id of the element that evidences it, with a transparent hit path (14px, 10px compact) wider than the mark it covers, and `tabIndex -1` so the graphic contributes no tab stops. Hover or pointer-enter raises the hovered track to 3px at full opacity, raises every track sharing its destination to 2.2px, and drops the rest to 16%. The graphic is never the only route to its content: the chips below are the same sixteen destinations as real focusable links.

### The Instrument Rail
Run metadata as a definition list in the flow of the first viewport, never floating. Three rows on a 5.5rem label column with hairline rules — **Tracks** (the total track count), **Routes** (the count of distinct destinations those tracks resolve to), and the live **Readout**, which renders the hovered track name, a steel arrow, and the human name of its destination. The readout value takes the colour of the jet being read and falls back to the steel prompt "Hover a track to find its proof". The whole list is a polite live region, and it only ever repeats labels that exist in the content data.

### Named Rules
**The Route-Not-Decoration Rule.** Nothing in the event display encodes a quantity it does not have. Every track resolves to a real destination id and a human destination label in the content data; a track with no proof to point at does not get drawn, and a piece of chrome with nothing to measure does not get a label. The arcs lost their names for exactly this reason.

**The One Arrival Rule.** Following a track marks its destination once: a 2.4s one-shot `.evidence:target` marker — a faint steel wash plus the 2px inset cyan left rule — fading to the element's normal state. Under reduced motion the rule is drawn statically instead of animated. Nothing is hidden when `:target` does not match.

**The One Authored Moment Rule.** There is exactly one entrance per page load: the event reconstructs itself, tracks drawing outward from the origin at 70ms per step and end marks and labels arriving 620ms behind their own track. It is gated by a three-state phase — `idle` is what the server renders (the finished event, no animation attached), `run` plays it once on mount, `done` strips the animation classes permanently so no resize, rotation or style recalculation can replay it. Nothing else on the page has an entrance.

**The Single Curve Rule.** One easing curve, `cubic-bezier(0.16, 1, 0.3, 1)`, on every transition and every keyframe in the system, exposed as the `expo` timing function. Durations: 200ms for colour, 260ms for track isolation, 300–700ms for opacity fades, 520–900ms for the entrance, 2.4s for the arrival marker. No other curve, no springs.

**The Finished-State-Default Rule.** Entrance rules live only inside `prefers-reduced-motion: no-preference`, and reduced motion additionally collapses all animation and transition durations to 0.001ms, disables smooth scrolling, and keeps the shader and the custom cursor from mounting at all. Nothing is ever hidden waiting to animate in.

## Do's and Don'ts

### Do:
- **Do** give any new evidence type the asymmetric band grid: a narrow sticky left rail for heading, definition list and summary; a wide right column for the proof.
- **Do** bound and divide with 1px steel-dim hairlines and square corners, and let the vacuum ground show through instead of filling a panel.
- **Do** paint any new ground inline in the document alongside `color-scheme: dark`, so the first paint is already dark without the stylesheet.
- **Do** measure text contrast against Vacuum Lift (`{colors.vacuum-lift}`), and keep body prose on steel-bright or ink with steel reserved for legends and metadata.
- **Do** re-validate both signal colours together against the ground and its lightest point if either is ever changed, keeping them inside the L 0.48–0.67 band and in fixed order.
- **Do** set every identifier, number, status, label and control in Martian Mono, uppercase, at the 12px floor with tracking between 0.06em and 0.22em, and keep tabular figures on.
- **Do** cap prose at the 68ch measure, and set section headings in ink unless the section *is* a jet.
- **Do** point every graphic affordance at a real destination id with a human destination label, mirror it with a real focusable link, and mark the destination once on arrival.
- **Do** tone-grade bright third-party imagery into the ground before shipping it: the facial-recognition screenshot and its poster hold a white point near 0.65 with a slight cool cast, because a near-white desktop capture glares on a near-black page.
- **Do** use `cubic-bezier(0.16, 1, 0.3, 1)` for every transition, and make any new animation one-shot, non-replaying and absent under reduced motion.
- **Do** state the scale when a chart is not zero-based, the way the calorimeter prints its 60%-to-100% floor beneath the bars.

### Don't:
- **Don't** add an elevation shadow: no outer, blurred, offset or hard-offset `box-shadow` anywhere. The one permitted use of the property is the zero-blur 2px inset cyan left rule on `.evidence:target`, which is a hairline rule rendered without layout shift, not a lift.
- **Don't** round a corner. Radius stays at 0 for controls, chips, tags, inputs, images and containers; circles are only for real instrument marks.
- **Don't** wrap content in a card or a rounded product-UI panel, and don't build a grid of identically sized project tiles — evidence is sized by what it has to show.
- **Don't** let either signal colour outrank the other in weight, area, saturation or order, don't introduce a third jet colour, and don't brighten either one back toward the pre-validation pair.
- **Don't** set a heading, a nav item or any identity element in a status colour; calor red is energy and error only.
- **Don't** spend a signal colour on decoration. If it is not active, current, latched or measured, it is steel.
- **Don't** label a piece of chrome that measures nothing, and don't draw a track that points at no evidence.
- **Don't** let the same destination be reachable only through the graphic; the chips are the keyboard and screen-reader path, and the SVG's anchors stay at `tabIndex -1` so there is one set of tab stops.
- **Don't** ship a near-white raster onto the ground ungraded.
- **Don't** add glow, bloom or a light effect outside the interaction-point core and the shader's pointer field.
- **Don't** introduce a third typeface, a display serif, or a system display face; Archivo and Martian Mono are the whole voice.
- **Don't** add a kicker, eyebrow or floating category label above a heading. Mono letterspaced labels are legitimate only when attached to what they measure — definition terms, form labels, chips, status tags, rail rows, axis notes.
- **Don't** use an icon font or a glyph character as an icon; inline SVG is the only permitted form.
- **Don't** add a second easing curve, a spring, a scroll-driven reveal, or any entrance beyond the one event reconstruction.
- **Don't** remove a focus outline without replacing it in the world's own vocabulary (2px software cyan at 3px offset, or a border shift to cyan on a bordered field).
