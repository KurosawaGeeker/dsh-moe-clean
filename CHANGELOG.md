# Changelog

All notable changes to this theme. The plugin is intentionally small: no build
step, no runtime dependencies, only CSS tokens plus a few DOM decorations.

## 0.15.2

- The crest now carries the official DeepSeek whale at its base, centered between
  the two bows. The viewBox grows from 106 to 125 units so the mark gets its own
  band below `HARNESS` instead of overlapping the ribbon.
- The crest image URL carries a version query so a refreshed SVG replaces the
  cached one without a hard reload.
- Native brand nodes that survive as siblings of the brand button are hidden
  too, so the old whale cannot sit at the logo row's left edge.

## 0.15.1

- The crest now centers on the new-session button's axis (50% of the logo row)
  instead of sitting at the brand button's left edge; `新会话` and the crest share
  one vertical centerline.
- The old whale/wordmark/badge is hidden unconditionally, both by CSS and by an
  inline hide on every sibling, so a hot update can no longer leave both
  lockups on screen.
- The collapsed icon rail no longer swaps back to the native whale mark; it
  starts with the new-session glyph instead.

## 0.15.0

- The top-left lockup is now one stacked crest: `deepseek` rides the upper lace
  band, `HARNESS` the lower one, with a maid bow on each side. It replaces the
  whale + wordmark + HARNESS badge overlay as a single SVG
  (`assets/deepseek-harness-maid-stacked.svg`).
- The crest is sized at 64px tall and keeps the original brand button as its
  click target; the old `harness-banner.webp` and its badge-positioning code are
  gone.

## 0.14.0

- Transparency audit for every surface that floats over the transcript. The
  theme had faded tokens that DSH itself treats as solid, so popovers read as
  clear panels with text showing through.
- `bg-layer-1/2/3` go to 94–95% (light and dark). Base DSH maps them to solid
  white; at 72/60/66% every card, input, code banner and detail panel that
  paints one was a window onto the text behind it.
- Hover previews (the diff / session peek card) were the worst case: they paint
  `bg-layer-1` and carry no backdrop blur at all. They now use the shared
  elevated-surface recipe — `--dsw-specific-menu` plus
  `--dsw-menu-backdrop-filter` — so the card is opaque-ish glass, not a filter.
- The menu material goes back to the 94% floor it ships with (was 82%); the
  40px backdrop blur stays, so menus are still frosted, just not readable
  through.
- Dialogs lift to 86% light / 80% dark (was 72% / 55%); 44px of blur cannot
  rescue a fill that low, and rows behind the panel were still legible as text.
- The full-access confirm button's disabled state goes from 40% to 80% opacity,
  so the pointing chibi no longer reads through the label.
- The HARNESS ribbon tucks 8px closer to the wordmark, closing the gap left by
  the original badge slot.

## 0.13.9

- The composer seat is 60% frosted glass. Its native gradient (transparent →
  full `bg-base` at 36px, no blur) is replaced by a masked pane on
  `[data-composer-seat]::before`: the same 36px fade-in, `rgba(255,255,255,.6)`
  in light and `rgba(13,20,31,.6)` in dark, plus a 20px backdrop blur that rides
  the mask with it. The seat is isolated and painted transparent so the pane
  sits under the composer card and the stats strip instead of over them.

## 0.13.5

- Scope fix: the pointing chibi belongs to the "enable full access" warning only.
  It is keyed on that dialog's own `aria-label` (`完全权限` / `Full access`);
  every other dialog goes back to the seated maid (`maid-chibi.webp`, 58%, 17%).
- Both keep the shared corner treatment: the box overhangs the rounded edge and
  the panel trims it, plus the 135° top-left → bottom-right mask.

## 0.12.3

- Dialog chibi is brighter (baked alpha 0.26 → 0.40) and is pushed further into
  the bottom-right corner (`right: -9.3%`, `bottom: -7.4%`), so the panel's own
  `overflow: hidden` trims her tail and shoes and her raised finger lands above
  the dialog's buttons instead of beside them.

## 0.11.3

- Dialog chibi moved from a 12 px-inset watermark to a corner illustration: her
  box overhangs the panel's bottom-right edge, so the rounded trim clips her a
  little.
- The fade is now one 135° mask (top-left → bottom-right) on the artwork itself
  instead of no mask at all, so she dissolves into the glass on the diagonal.
- Dialog carries `isolation: isolate`; the artwork is its `::after` at
  `z-index: -1`, which keeps it above the frosted surface and below the content.

## 0.13.8

- Light-mode dialogs stop reading yellow: the frosted surface goes from
  `rgba(255,255,255,.55)` to a cool milk white `rgba(250,252,255,.72)`, and the
  backdrop's `saturate(1.35)` drops to `1.15` so the warm backdrop is no longer
  amplified. Measured surface moves from a neutral #e2e2e2 to a cool #eaebec,
  sitting just under the dialog's own white cards.

## 0.13.7

- The composer popups (slash / command palette) lose their transparency: inside
  `[data-composer-overlay]` both the popup card and the shared menu material are
  painted solid (`#ffffff` light, `#263040` dark), so conversation text no longer
  ghosts through the rows. Other menus and dialogs keep the frosted glass.

## 0.13.6

- Ribbon scaled to 1.9x badge width (99px) and rendered with
  `-webkit-optimize-contrast` so the HARNESS letters read better.

## 0.13.4

- Swap the ribbon artwork for the whale-tail variant (246x90); height follows
  the new aspect ratio.

## 0.13.3

- New HARNESS ribbon artwork (whale-tail version), sized 1.5x the badge width
  and left-aligned to the badge so it never covers "deepseek".

## 0.13.1

- Key the brand colour, badge hiding and ribbon on the wordmark SVG
  (`viewBox="26 0 156 24"`) instead of `button[class*="brand"]`; the desktop
  shell's brand wrapper does not carry that class.
- Ribbon geometry is derived from the SVG viewBox, so it scales with the
  wordmark and no longer needs the badge element to be measurable.

## 0.13.0

- Reinstall release: fresh copy in the desktop profile (no symlink) and a
  version bump to force the client bundle revision to change.

## 0.12.2

- Rebuild the HARNESS ribbon as pure CSS: a `::after` pseudo-element on the
  brand button plus attribute selectors hiding the old rect/letters.
- No JS timing or DOM-query dependency left for this decoration.

## 0.12.0

- Replace the HARNESS badge in the sidebar wordmark with a hand-drawn lace
  ribbon + blue bow image; the original rect and letters are hidden, the ribbon
  is positioned from the badge's own geometry (1.35x width).
- Brand button opts into `overflow: visible` so the arch is not clipped.

## 0.11.2

- Keep the static frame hidden while hovering, so the animation is not
  composited over an identical still frame.

## 0.11.1

- Static icon fixed at 22 px, matching the previous visual size.

## 0.11.0

- The plugins icon now uses the GIF's first frame as its static state instead of
  the line-art SVG; hovering swaps in the animated GIF.

## 0.10.0

- Popovers/menus (command palette, model dropdown, etc.) get a surface opacity
  floor: 82% light / 84% dark, keeping their 40px backdrop blur.
- Fixes page headings showing through the slash-command palette.

## 0.9.3

- Cooler dark-mode filter for the hover GIF (invert + hue-rotate + saturate),
  so the cream invert does not clash with the blue theme.

## 0.9.2

- Serve `.gif` with `image/gif`; the hover animation now actually plays.

## 0.9.1

- GIF MIME type added to the host asset route.

## 0.9.0

- Hover-to-play wiggle GIF for the plugins icon; static SVG stays by default.
- GIF is inserted on `pointerenter` and removed on `pointerleave`, so it always
  restarts from the first frame.

## 0.8.2

- Packaging: the tarball no longer sweeps the repository's `.git` directory.
- README asset count / package size corrected.

## 0.8.1

- Dialog chibi background now uses `!important`, so the settings panel's own
  class rule cannot blank it out.

## 0.8.0

- Add a chibi maid watermark to the bottom-right of dialogs
  (`maid-chibi.webp`, 52% width, 17% alpha, top/left gradient).

## 0.7.4

- Dark mode: right maid raised from 50% to 72% opacity with a brightness lift,
  so she is actually visible on the near-black canvas.

## 0.7.3

- Dark-mode brand wordmark brightened from `#7aa7ff` to `#9cc2ff`.

## 0.7.2

- Sidebar brand wordmark (whale + "deepseek" + HARNESS badge) recoloured to
  DeepSeek blue `#2f6bf0`; dark mode uses `#7aa7ff`.
- Badge text keeps the inverted token, so it stays legible on blue.

## 0.7.1

- Dialogs become more translucent: 55% surface + `blur(44px)` (was 86% + 28px).
- Text behind a dialog stays unreadable; shapes read as a soft wash.

## 0.7.0

- Dialogs (settings, login, etc.) are now frosted glass instead of see-through:
  86% surface + `blur(28px) saturate(1.3)`, light and dark.
- Fixes page text showing through the settings panel.

## 0.6.3

- Automation-tasks nav icon scaled to 20 px so it matches the plugins icon.
- Cleanup removes the temporary `data-moe-nav-icon` marker on unload.

## 0.6.2

- New-session icon enlarged to 24 px (native 5.4 stroke of the 100×100 source).

## 0.6.1

- Plugins icon enlarged from 18 px to 20 px.

## 0.6.0

- Replace the plugins nav icon with a whale-tail mark (`whale-tail-plug.svg`).
- Shared icon-swap helper; icons are restored when the plugin unloads.

## 0.5.1

- New-session icon set to 20 px with the source's 5.4 stroke.

## 0.5.0

- Replace the native new-session icon (both sidebar and workspace buttons) with
  the whale-shaped chat outline from `deepseek-chat-outline-180.svg`.
- Match buttons by `aria-label` and skip anything whose SVG is not 16×16, so
  the DeepSeek brand logo is untouched.
- `MutationObserver` re-applies the icon after React re-renders.

## 0.4.3

- Whale watermark hidden below 1320 px to avoid the composer.
- Narrow layout verified at 840 px.

## 0.4.2

- Serve `.svg` with `image/svg+xml` (validated whale mark).

## 0.4.1

- Sidebar artwork sized by width (110%) and bottom-anchored, so the whole figure
  — head included — stays visible.
- Sidebar artwork hidden when the sidebar collapses into the icon rail.
- Right maid capped at `min(86vh, 66vw)`.

## 0.4.0

- Verified against a real `dsh web` instance with headless screenshots
  (1440×900, 840×900, light and dark).
- Plus sign centred on the whale body's area centroid.

## 0.3.0

- Palette switched from warm beige to white + DeepSeek blue.
- Left maid illustration used as the sidebar backdrop.
- Faint DeepSeek whale watermark added bottom-left.
- Right maid kept at 60% opacity.

## 0.2.0

- Frosted-glass sidebar and composer, translucent DeepSeek tokens.
- Right maid illustration added with gradient masks and a cool haze.

## 0.1.0

- First local build: warm stone palette, no ornaments, no artwork.
