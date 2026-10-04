# Image Prompts — La Flora D'El Patron

15 bespoke prompts, one per image slot — 4 collections, 9 portfolio plates,
1 hero backdrop, 1 atelier panel. Written against the site's actual
rendering pipeline, not generic "pretty flower" text.

> **Status: generated and shipped.** See [As built](#as-built) at the bottom
> for the committed filenames, the 4:5 workaround, and the seams to edit if
> you want to regenerate at higher quality.

## Before you generate: read this

Every image on this site is displayed through `.plate img`, which applies
**before you ever see it**:

| Treatment | Value | Effect on your source image |
|---|---|---|
| `filter` | `grayscale(0.42) contrast(1.14) brightness(0.92) saturate(1.06)` | Muted, contrasty. Midtones get crushed. |
| `::after` overlay | `rgba(183,132,167,0.24)` mauve gradient, `mix-blend-mode: multiply` | Tints everything mauve. Already-purple sources go radioactive. |
| `::after` overlay | `rgba(8,8,8,0.82)` → transparent, bottom-up | **The bottom third goes almost black.** |
| `object-fit` | `cover` | Centre-cropped. Edge detail is always lost. |

Four rules follow, and every prompt below obeys them:

1. **Keep the lower third empty and dark.** That gradient reaches 82%
   black. Detail there is simply gone.
2. **Put the subject in the upper two-thirds**, with margin around it, so
   a centre-crop never clips it.
3. **No white backgrounds and no saturated violet.** The multiply overlay
   turns white muddy and doubles any purple you bake in.
4. **Push value contrast, not saturation.** Colour is being drained by the
   filter regardless of what you give it.

**Collections are 96–112px squares.** At that size only one bold
silhouette survives. Fine detail is invisible, so there is none.

---

## Style anchor A — Collections (1:1, ~96px)

> Fine-art editorial still life, shot on full-frame with an 85mm lens at
> f/2.0. Single large window as key light from the upper left, falling
> into deep unfilled shadow on the lower right. Charcoal-black
> background. Subject in ivory, dusted mauve and deep garden green.
> Matte surface, fine film grain, restrained and expensive, never glossy
> or ornamental. One clear silhouette centred in frame, nothing in the
> lower third but dark surface, generous empty margin so a square
> centre-crop never clips it. Photorealistic. No text, no watermark, no
> logo, no faces.

## Style anchor B — Portfolio (4:5 / 3:4 / 1:1, ~30vw)

> Fine-art editorial photograph of a luxury florist's work, shot on
> full-frame with an 85mm lens at f/2.0. Single large window as key light
> from the upper left, deep shadow falloff, no fill, no flash.
> Charcoal-black or pale-stone setting. Palette of ivory, dusty mauve,
> blush and deep garden green. Matte finish, fine film grain, restrained
> luxury, never kitsch. Subject occupies the upper two-thirds and falls
> into darkness at the bottom, composed to survive a centre-crop to 4:5
> and 3:4. High value contrast, luminous highlights. Photorealistic. No
> text, no watermark, no logo, no identifiable faces.

---

## Collections — `src/lib/collections.ts` (1:1 plates)

### 1. `bouquet-personnalise` — Le Bouquet Sur Mesure
*Alt: Bouquet personnalisé noué à la main, collection de bouquets de luxe*

> **Style anchor A** + A hand-tied bouquet of garden roses and trailing
> eucalyptus, loosely gathered with a raw silk ribbon, resting on a dark
> slate surface. Slightly irregular, hand-wrapped, visibly not
> mass-produced.

**Ratio** 1:1 · **replaces** `photo-1519378058457-4c29a0a2efac`

### 2. `boite-nounours` — La Boîte & Le Nounours
*Alt: Boîte à fleurs signature et sculpture florale de luxe*

> **Style anchor A** + An ivory hat-box brimming with pale roses beside a
> small sculptural figure made of preserved flowers in dusty rose. Two
> objects, clearly separated, both fully inside the frame.

**Ratio** 1:1 · **replaces** `photo-1457089328109-e5d9bd499191`

### 3. `cadeaux-coffrets` — Coffrets & Cadeaux
*Alt: Coffrets et cadeaux de luxe floraux, sélection de cadeaux*

> **Style anchor A** + Two stacked ivory gift boxes tied with a gilded
> ribbon, a few garden roses laid beside them. Simple, geometric, calm.

**Ratio** 1:1 · **replaces** `photo-1490750967868-88aa4486c946`

### 4. `interieur-paysage` — Plantes & Paysage
*Alt: Plantes d'intérieur et aménagement paysager pour villa de luxe*

> **Style anchor A** + A single sculptural indoor plant with broad dark
> leaves in a matte ceramic vessel, lit from one side against near-black.
> Architectural, quiet, one plant only.

**Ratio** 1:1 · **replaces** `photo-1441974231531-c6227db76b6e`

---

## Portfolio — `src/lib/portfolio.ts`

### 5. Wedding bouquet
*Alt: Bouquet de mariée personnalisé aux pivoines et roses anciennes*

> **Style anchor B** + A bride's bouquet of peonies and garden roses in
> ivory and soft blush, silk ribbon trailing, held at waist height by
> hands in an ivory dress. No face in frame. Dark background falling to
> black at the bottom.

**Ratio** 4:5 · **replaces** `photo-1519378058457-4c29a0a2efac`

### 6. Gradient rose bouquet
*Alt: Bouquet personnalisé de roses en dégradé, composition florale de luxe*

> **Style anchor B** + A bouquet arranged as a deliberate gradient — ivory
> roses at the centre deepening to dusty blush at the outer edge. Shot
> slightly from above on a dark surface.

**Ratio** 4:5 · **replaces** `photo-1462275646964-a0e3386b89fa`

### 7. Ceremony arrangement
*Alt: Composition florale de cérémonie aux roses anciennes*

> **Style anchor B** + A low, wide ceremony arrangement of garden roses and
> trailing greenery on a pale stone ledge, candles unlit. Horizontal
> emphasis, generous dark space below.

**Ratio** 3:4 · **replaces** `photo-1470509037663-253afd7f0f51`

### 8. Signature hat-box
*Alt: Boîte à fleurs signature de luxe remplie de roses et lisianthus*

> **Style anchor B** + An ivory hat-box filled with roses and lisianthus,
> lid resting beside it, ribbon spilling over the edge. Three-quarter
> view, subject in the upper two-thirds.

**Ratio** 3:4 · **replaces** `photo-1457089328109-e5d9bd499191`

### 9. Preserved-flower sculpture
*Alt: Sculpture florale en fleurs stabilisées, poupée florale de luxe*

> **Style anchor B** + A sculptural figure formed entirely from preserved
> flowers in dusty rose and bone, matte and papery in texture, standing
> against near-black. Centre-frame, whole object inside the square.

**Ratio** 1:1 · **replaces** `photo-1522748906645-95d8adfd52c7`

### 10. Luxury gift case
*Alt: Coffret cadeau de luxe avec fleurs, dorure et accessoires*

> **Style anchor B** + An open rigid gift case lined with gilded velvet,
> holding dried blooms and small gold accessories, lid propped behind.
> Warm gilt catching a single light source.

**Ratio** 4:3 · **replaces** `photo-1490750967868-88aa4486c946`

### 11. Corporate arrangements
*Alt: Coffrets cadeaux d'entreprise fleuris pour une réception*

> **Style anchor B** + A row of five small, identical floral arrangements
> evenly spaced along a dark reception table, receding into shadow.
> Repetitive, orderly, restrained.

**Ratio** 4:5 · **replaces** `photo-1513151233558-d860c5398176`

### 12. Villa planting
*Alt: Aménagement paysager et végétation suspendue pour une villa de luxe*

> **Style anchor B** + Trailing greenery and suspended planting cascading
> down a pale stone wall of a modern villa, shot looking slightly upward.
> Strong vertical lines, foliage concentrated in the upper two-thirds.

**Ratio** 4:5 · **replaces** `photo-1441974231531-c6227db76b6e`

### 13. Ivory floral arch
*Alt: Portique floral ivoire pour un mariage*

> **Style anchor B** + An ivory floral arch at a wedding at dusk, asymmetric
> arrangement of garden roses and greenery weighted to one side. Warm
> low light behind, ground falling to black. No people in focus.

**Ratio** 4:5 · **replaces** `photo-1469371670807-013ccf25f16a`

---

## 14. Hero backdrop

*Alt: (decorative — the hero image sits behind the headline, so it carries
`alt=""` deliberately)*

> **Style anchor B** + A florist's atelier at dusk. Charcoal-black
> surroundings, a single shaft of low warm window light from the upper left,
> a worktable of ivory garden roses and trailing eucalyptus, one tall
> arrangement rising on the right. 35mm at f/2.0. Subject held in the upper
> two-thirds so the lower half can fall into darkness, generous empty space.

**Ratio** 16:9 · **replaces** `photo-1469371670807-013ccf25f16a` (also served
as the social share image — Hero and `og:image` are deliberately the same
asset)

Two overlays sit on top of this in `src/components/Hero.tsx`: a
bottom-to-top void gradient and a radial reaching `rgba(8,8,8,0.92)`. It
needs high value contrast in the **upper** half or the headline reads as
mush.

## 15. Atelier

*Alt: Table de réception fleurie et éclairée à la chandelle, installation
florale de luxe par La Flora D'El Patron à Rabat*

> **Style anchor B** + A long reception table dressed with a low, dense run
> of ivory garden roses and blush blooms, candle-and-lantern key light from
> the lower left, glassware glinting. 85mm at f/2.0. Warm amber points
> against near-black, nothing above the table line but darkness. Horizontal
> emphasis, subject in the upper two-thirds.

**Ratio** 3:4 · **replaces** `photo-1519225421980-715cb0215aed`

---

## Note on duplication

Four Unsplash photos previously served **two slots each with contradictory
alt text** — a bouquet photo was labelled both "bouquet personnalisé" and
"bouquet de mariée"; a plant photo was labelled both "plantes d'intérieur"
and "aménagement paysager". 15 distinct images fix that and remove the
accessibility problem of one photo describing two different things.

---

## As built

All 15 prompts above were generated with Higgsfield `z_image` and committed
to `public/images/`:

| Slot | File | Source px | Target ratio |
|---|---|---|---|
| 1–4 | `c1`–`c4-*.jpg` | 480×480 | 1:1 |
| 5–8, 11–13 | `p5`–`p13-*.jpg` | 1400×1867 | 4:5 / 3:4 |
| 9 | `p9-sculpture-fleurs.jpg` | 1400×1400 | 1:1 |
| 10 | `p10-coffret-cadeau.jpg` | 1400×1050 | 4:3 |
| 14 | `hero.jpg` | 1920×1080 | 16:9 |
| 15 | `atelier.jpg` | 1200×1600 | 3:4 |

`z_image` supports only `1:1`, `4:3`, `3:4`, `16:9`, `9:16` — it has **no
4:5**. The four 4:5 portfolio targets were therefore generated at 3:4 and
relied on `.plate img { object-fit: cover }` to crop. If you re-generate
these with a model that supports 4:5 natively, the swap is a straight
file-for-file replacement; nothing in the code depends on the source ratio.

Total on the wire: **2.79 MB** for all 15 (down from ~70 MB of raw PNG).
`next/image` re-encodes per viewport, so the 480px collection sources still
ship crisp at 2× for their 96–112px slots.

### Seams

`img()` is the single indirection for the gallery:

- `src/lib/collections.ts` → `const img = (file) => \`/images/${file}\``
- `src/lib/portfolio.ts` → same helper
- `src/components/Hero.tsx` → `HERO_IMAGE = "/images/hero.jpg"`
- `src/components/About.tsx` → inline `src="/images/atelier.jpg"`
- `src/lib/site.ts` → `ogImage`, **absolute** because JSON-LD
  `schema.ts` reuses it and a relative URL is invalid there

`index.html` is hand-maintained (git-tracked, not a build artifact) and must
be mirrored by hand. It uses `public/images/...` (repo-root-relative) while
the Next app uses `/images/...` (web-root-relative) — do not unify these.

Verified after the swap: 15/15 assets referenced in the DOM, 0 Unsplash
refs in source or output, all `content-type: image/jpeg`, no duplicate
`alt` strings, French copy intact, no horizontal overflow.

---

Prompts curated from the open community by [YouMind.com](https://youmind.com) ❤️
