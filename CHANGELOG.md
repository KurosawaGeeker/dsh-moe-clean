# Changelog

All notable changes to this theme. The plugin is intentionally small: no build
step, no runtime dependencies, only CSS tokens plus a few DOM decorations.

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
