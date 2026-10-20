# Changelog

All notable changes to this theme. The plugin is intentionally small: no build
step, no runtime dependencies, only CSS tokens plus a few DOM decorations.

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
