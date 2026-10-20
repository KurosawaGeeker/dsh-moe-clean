window.__ModuleLoader__.load({
	id: "dsh-moe-clean",
	factory: () => {
		var module = { exports: {} };
		var exports = module.exports;

		const ASSET = "/api/dsh-moe-clean/assets?f=";

		// DeepSeek chat-outline mark used for every "new session" button.
		const NEW_CHAT_PATHS = "<path d=\"M31 44.6 C33 37.4 35.8 32.27 40.5 27.95 C41.5 27.05 41.2 26.24 39.8 25.52 C36.3 23.72 33.4 21.65 30.5 19.85 C29.3 18.86 29.7 17.69 31.4 17.69 C38.3 17.33 45.2 18.59 50.8 21.47 C64 16.52 78.5 19.85 86.8 29.03 C95.5 38.66 96 53.15 88.3 63.95 C82.1 72.77 73.4 76.64 63.8 76.28 C59.2 76.1 55.9 78.17 51.3 78.08 C49.8 78.08 49.4 77.18 50.6 76.28 C52.1 75.11 52.5 74.03 50.7 72.59 C44.3 67.55 39.2 63.95 34 61.52 C31.4 60.26 29.5 61.16 28.8 63.59 C27.3 68.99 28.6 73.94 31 79.7 C31.4 80.78 30.4 81.32 29.2 80.87 C21 77.9 16.4 72.77 14.8 66.74 C14.3 64.94 11.5 64.4 9.7 65.12 L7.4 66.02 C6.4 66.38 5.8 65.84 6 64.85 C7.8 55.85 15.5 50 23.5 50.9 C27.5 51.35 29.5 50 31 44.6Z\"/><path d=\"M64 36.4v20M54 46.4h20\"/>";
		const PLUGIN_ICON_PATHS = "<path transform=\"translate(44 44) rotate(-45)\" d=\"M0-40 C-4-40-9-30-14-20 C-18-12-20-5-18 0 C-16 5-9 7-6 10 C-4 12-4 15-4 18 C-14 16-25 22-28 34 C-28.5 35.5-27.5 36.2-26 35.7 C-17 33-9 32-3 27 C-1.3 25.6 1.3 25.6 3 27 C9 32 17 33 26 35.7 C27.5 36.2 28.5 35.5 28 34 C25 22 14 16 4 18 C4 15 4 12 6 10 C9 7 16 5 18 0 C20-5 18-12 14-20 C9-30 4-40 0-40Z\"/>";

		// Cool blue-white neutral ramp: white first, blue-gray shadows.
		const RAMP = `
			--dsw-static-neutral-bluish-00: #ffffff;
			--dsw-static-neutral-bluish-50: #f9fbff;
			--dsw-static-neutral-bluish-60: #f4f8fe;
			--dsw-static-neutral-bluish-75: #eef4fc;
			--dsw-static-neutral-bluish-100: #e7eff9;
			--dsw-static-neutral-bluish-150: #dfe9f5;
			--dsw-static-neutral-bluish-200: #d3dfef;
			--dsw-static-neutral-bluish-300: #bccbe0;
			--dsw-static-neutral-bluish-400: #9aacc4;
			--dsw-static-neutral-bluish-500: #7d90a9;
			--dsw-static-neutral-bluish-600: #62748e;
			--dsw-static-neutral-bluish-700: #4c5c74;
			--dsw-static-neutral-bluish-750: #405067;
			--dsw-static-neutral-bluish-800: #344257;
			--dsw-static-neutral-bluish-850: #2a3647;
			--dsw-static-neutral-bluish-875: #233040;
			--dsw-static-neutral-bluish-900: #1c2735;
			--dsw-static-neutral-bluish-950: #151d28;
			--dsw-static-neutral-bluish-1000: #0e131b;
		`;

		// White glass surfaces; the page gradient reads through them.
		const LIGHT = `
			--dsw-alias-bg-base: rgba(255, 255, 255, 0.55);
			--dsw-alias-bg-layer-1: rgba(255, 255, 255, 0.72);
			--dsw-alias-bg-layer-2: rgba(246, 250, 255, 0.6);
			--dsw-alias-bg-layer-3: rgba(238, 245, 253, 0.66);
			--dsw-alias-bg-overlay: rgba(255, 255, 255, 0.9);
			--dsw-alias-label-primary: #122033;
			--dsw-alias-label-secondary: #4e6079;
			--dsw-alias-label-tertiary: #7c8da4;
			--dsw-alias-label-caption: #95a5b9;
			--dsw-alias-border-l1: rgba(40, 80, 140, 0.14);
			--dsw-alias-border-l2: rgba(40, 80, 140, 0.2);
			--dsw-alias-border-l3: rgba(40, 80, 140, 0.26);
			--dsw-specific-sidebar-fill: rgba(255, 255, 255, 0.52);
			--dsw-specific-input-major: rgba(255, 255, 255, 0.66);
			--dsw-specific-selector: rgba(230, 240, 252, 0.7);
		`;

		const DARK = `
			--dsw-alias-bg-base: rgba(13, 20, 31, 0.62);
			--dsw-alias-bg-layer-1: rgba(18, 27, 41, 0.66);
			--dsw-alias-bg-layer-2: rgba(24, 34, 50, 0.64);
			--dsw-alias-bg-layer-3: rgba(30, 42, 60, 0.66);
			--dsw-alias-bg-overlay: rgba(15, 23, 35, 0.92);
			--dsw-alias-label-primary: #eef4fc;
			--dsw-alias-label-secondary: #b0c0d6;
			--dsw-alias-label-tertiary: #8396ad;
			--dsw-alias-label-caption: #6a7d94;
			--dsw-alias-border-l1: rgba(170, 205, 255, 0.1);
			--dsw-alias-border-l2: rgba(170, 205, 255, 0.14);
			--dsw-alias-border-l3: rgba(170, 205, 255, 0.2);
			--dsw-specific-sidebar-fill: rgba(14, 22, 34, 0.6);
			--dsw-specific-input-major: rgba(255, 255, 255, 0.05);
			--dsw-specific-selector: rgba(30, 42, 60, 0.66);
		`;

		const CSS = `
			html body { ${RAMP}${LIGHT} }
			html body[data-ds-dark-theme] { ${RAMP}${DARK} }

			/* ---------- canvas: white with a cool blue bloom ---------- */
			html body {
				background-color: #f4f8ff !important;
				background-image:
					radial-gradient(1100px 780px at 86% 0%, rgba(78, 132, 232, 0.16), transparent 62%),
					radial-gradient(900px 720px at 4% 96%, rgba(104, 168, 236, 0.14), transparent 62%),
					linear-gradient(160deg, #ffffff 0%, #f8fbff 55%, #edf4fe 100%) !important;
				background-attachment: fixed !important;
			}
			html body[data-ds-dark-theme] {
				background-color: #0c131e !important;
				background-image:
					radial-gradient(1000px 740px at 86% 0%, rgba(56, 104, 210, 0.24), transparent 62%),
					radial-gradient(880px 700px at 2% 98%, rgba(26, 72, 130, 0.2), transparent 62%),
					linear-gradient(160deg, #0d1420 0%, #0b111b 55%, #0a1019 100%) !important;
			}
			#root {
				position: relative;
				z-index: 1;
				background: transparent !important;
			}
			[data-slot="main"] { background: transparent !important; }
			[data-conversation-scroll] { background: transparent !important; }

			/* ---------- right maid: kept at 60%, faded into the page ---------- */
			.dsh-moe-maid {
				position: fixed;
				right: max(-3.5vw, -34px);
				bottom: -3vh;
				height: min(86vh, 66vw);
				width: auto;
				z-index: 0;
				pointer-events: none;
				user-select: none;
				opacity: 0.6;
				filter: saturate(0.95) contrast(0.98);
				-webkit-mask-image:
					linear-gradient(to left, #000 60%, rgba(0, 0, 0, 0) 97%),
					linear-gradient(to top, rgba(0, 0, 0, 0) 0%, #000 15%);
				-webkit-mask-composite: source-in;
				mask-image:
					linear-gradient(to left, #000 60%, transparent 97%),
					linear-gradient(to top, transparent 0%, #000 15%);
				mask-composite: intersect;
			}
			html body[data-ds-dark-theme] .dsh-moe-maid {
				opacity: 0.72;
				filter: saturate(1.02) brightness(1.18) contrast(1.02);
			}

			/* cool haze over the right edge, so text never fights the artwork */
			html body::after {
				content: "";
				position: fixed;
				inset: 0;
				z-index: 0;
				pointer-events: none;
				background: linear-gradient(
					90deg,
					rgba(248, 251, 255, 0) 52%,
					rgba(248, 251, 255, 0.1) 78%,
					rgba(248, 251, 255, 0.2) 100%
				);
			}
			html body[data-ds-dark-theme]::after {
				background: linear-gradient(
					90deg,
					rgba(11, 17, 27, 0) 52%,
					rgba(11, 17, 27, 0.12) 78%,
					rgba(11, 17, 27, 0.24) 100%
				);
			}

			/* ---------- sidebar: left maid as a faint backdrop ---------- */
			[class*="sidebarCol"] {
				background-color: var(--dsw-specific-sidebar-fill) !important;
				background-image: url("${ASSET}maid-left.webp") !important;
				background-size: 110% auto !important;
				background-position: 50% 100% !important;
				background-repeat: no-repeat !important;
				-webkit-backdrop-filter: blur(26px) saturate(1.35);
				backdrop-filter: blur(26px) saturate(1.35);
				border-right: 1px solid rgba(255, 255, 255, 0.6);
				box-shadow:
					inset -1px 0 0 rgba(40, 80, 140, 0.06),
					inset 0 1px 0 rgba(255, 255, 255, 0.5);
			}
			[data-sidebar-collapsed="true"] [class*="sidebarCol"] {
				background-image: none !important;
			}
			html body[data-ds-dark-theme] [class*="sidebarCol"] {
				background-image:
					linear-gradient(rgba(10, 16, 26, 0.45), rgba(10, 16, 26, 0.45)),
					url("${ASSET}maid-left.webp") !important;
				background-size: 100% 100%, 110% auto !important;
				background-position: center, 50% 100% !important;
				border-right-color: rgba(255, 255, 255, 0.08);
			}

			/* ---------- tiny whale mark, bottom-left of the canvas ---------- */
			.dsh-moe-whale {
				position: fixed;
				left: 300px;
				bottom: 32px;
				width: 110px;
				z-index: 0;
				pointer-events: none;
				user-select: none;
				opacity: 0.2;
			}
			html body[data-ds-dark-theme] .dsh-moe-whale {
				opacity: 0.3;
			}
			@media (max-width: 1320px) {
				.dsh-moe-whale { display: none; }
			}

			/* ---------- composer: white frosted glass ---------- */
			[data-composer-card] {
				background-color: transparent !important;
				background-image: linear-gradient(
					180deg,
					rgba(255, 255, 255, 0.72),
					rgba(255, 255, 255, 0.44)
				) !important;
				-webkit-backdrop-filter: blur(22px) saturate(1.3);
				backdrop-filter: blur(22px) saturate(1.3);
				border: 1px solid rgba(255, 255, 255, 0.7) !important;
				box-shadow:
					0 18px 50px rgba(48, 84, 140, 0.12),
					inset 0 1px 0 rgba(255, 255, 255, 0.8) !important;
			}
			html body[data-ds-dark-theme] [data-composer-card] {
				background-image: linear-gradient(
					180deg,
					rgba(255, 255, 255, 0.08),
					rgba(255, 255, 255, 0.03)
				) !important;
				border-color: rgba(255, 255, 255, 0.12) !important;
				box-shadow:
					0 18px 50px rgba(0, 0, 0, 0.35),
					inset 0 1px 0 rgba(255, 255, 255, 0.08) !important;
			}

			/* ---------- brand wordmark in DeepSeek blue ---------- */
			button[class*="brand"] {
				color: #2f6bf0 !important;
			}
			html body[data-ds-dark-theme] button[class*="brand"] {
				color: #9cc2ff !important;
			}

			/* ---------- popovers / menus: 80% floor, still frosted ---------- */
			[class*="_material_"] {
				background-color: rgba(255, 255, 255, 0.82) !important;
			}
			html body[data-ds-dark-theme] [class*="_material_"] {
				background-color: rgba(38, 48, 64, 0.84) !important;
			}

			/* ---------- dialogs: frosted glass, never see-through ---------- */
			[role="dialog"] {
				background-color: rgba(255, 255, 255, 0.55) !important;
				background-image: url("${ASSET}maid-chibi.webp") !important;
				background-size: 52% auto !important;
				background-position: right 12px bottom 12px !important;
				background-repeat: no-repeat !important;
				-webkit-backdrop-filter: blur(44px) saturate(1.35);
				backdrop-filter: blur(44px) saturate(1.35);
			}
			html body[data-ds-dark-theme] [role="dialog"] {
				background-color: rgba(18, 26, 38, 0.55) !important;
			}

			/* ---------- quiet blue details ---------- */
			::selection {
				background: color-mix(in srgb, #2f6bf0 20%, transparent);
			}

			html body { color-scheme: light; }
			html body[data-ds-dark-theme] { color-scheme: dark; }

			* {
				scrollbar-width: thin;
				scrollbar-color: #c6d5e8 transparent;
			}
			[data-ds-dark-theme] * {
				scrollbar-color: #33455c transparent;
			}

			:focus-visible {
				outline-color: #2f6bf0;
			}

			/* swapped "new session" icon: keep it legible at button size */
			svg[data-moe-chat-icon] {
				width: 24px !important;
				height: 24px !important;
			}
			svg[data-moe-plug-icon],
			svg[data-moe-nav-icon] {
				width: 20px !important;
				height: 20px !important;
			}
			button[data-moe-plug-hover] {
				position: relative;
			}
			img.dsh-moe-plug-gif {
				position: absolute;
				z-index: 3;
				pointer-events: none;
				object-fit: contain;
			}
			html body[data-ds-dark-theme] img.dsh-moe-plug-gif {
				filter: invert(1) hue-rotate(180deg) saturate(1.6) brightness(1.1);
			}
		`;

		const swappedIcons = [];

		function swapIcon(svg, paths, attr, strokeWidth) {
			swappedIcons.push({
				svg,
				html: svg.innerHTML,
				strokeWidth: svg.getAttribute("stroke-width"),
				attr,
			});
			svg.setAttribute("viewBox", "0 0 100 100");
			svg.setAttribute("fill", "none");
			svg.setAttribute("stroke", "currentColor");
			svg.setAttribute("stroke-width", strokeWidth);
			svg.setAttribute("stroke-linecap", "round");
			svg.setAttribute("stroke-linejoin", "round");
			svg.setAttribute(attr, "1");
			svg.innerHTML = paths;
		}

		function decorateIcons() {
			document.querySelectorAll('button[aria-label*="新建会话"]').forEach((button) => {
				const svg = button.querySelector("svg");
				if (!svg || svg.getAttribute("viewBox") !== "0 0 16 16") return;
				swapIcon(svg, NEW_CHAT_PATHS, "data-moe-chat-icon", "5.4");
			});
			document.querySelectorAll("button").forEach((button) => {
				if (!/^(插件|Plugins?)$/i.test(button.getAttribute("aria-label") || "")) return;
				const svg = button.querySelector("svg");
				if (!svg || svg.getAttribute("viewBox") !== "0 0 16 16") return;
				swapIcon(svg, PLUGIN_ICON_PATHS, "data-moe-plug-icon", "5.4");
				attachPlugHover(button);
			});
			document.querySelectorAll("button").forEach((button) => {
				if (!/^(自动化任务|Automations?)$/i.test(button.getAttribute("aria-label") || "")) return;
				const svg = button.querySelector("svg");
				if (svg) svg.setAttribute("data-moe-nav-icon", "1");
			});
		}

		const PLUG_GIF = ASSET + "whale-tail-wiggle.gif";

		function showPlugGif(button) {
			const svg = button.querySelector("svg");
			if (!svg || button.querySelector(".dsh-moe-plug-gif")) return;
			const br = button.getBoundingClientRect();
			const r = svg.getBoundingClientRect();
			const img = document.createElement("img");
			img.className = "dsh-moe-plug-gif";
			img.alt = "";
			img.decoding = "async";
			img.src = PLUG_GIF;
			const size = r.width * 1.15;
			img.style.width = size + "px";
			img.style.height = size + "px";
			img.style.left = (r.left - br.left - (size - r.width) / 2) + "px";
			img.style.top = (r.top - br.top - (size - r.height) / 2) + "px";
			button.append(img);
			svg.style.visibility = "hidden";
		}

		function hidePlugGif(button) {
			button.querySelector(".dsh-moe-plug-gif")?.remove();
			const svg = button.querySelector("svg");
			if (svg) svg.style.visibility = "";
		}

		function attachPlugHover(button) {
			if (button.dataset.moePlugHover === "1") return;
			button.dataset.moePlugHover = "1";
			button.addEventListener("pointerenter", () => showPlugGif(button));
			button.addEventListener("pointerleave", () => hidePlugGif(button));
		}

		function apply(ctx) {
			ctx.effect(() => {
				const style = document.createElement("style");
				style.dataset.dshMoeClean = "theme";
				style.textContent = CSS;
				document.head.append(style);

				const maid = document.createElement("img");
				maid.className = "dsh-moe-maid";
				maid.alt = "";
				maid.decoding = "async";
				maid.src = ASSET + "maid-right.webp";
				document.body.append(maid);

				decorateIcons();
				let scheduled = false;
				const observer = new MutationObserver(() => {
					if (scheduled) return;
					scheduled = true;
					requestAnimationFrame(() => {
						scheduled = false;
						decorateIcons();
					});
				});
				observer.observe(document.body, { childList: true, subtree: true });

				const whale = document.createElement("img");
				whale.className = "dsh-moe-whale";
				whale.alt = "";
				whale.decoding = "async";
				whale.src = ASSET + "whale.svg";
				document.body.append(whale);

				document.body.dataset.dshMoeClean = "on";
				return () => {
					observer.disconnect();
					for (const record of swappedIcons) {
						if (!record.svg.isConnected) continue;
						record.svg.innerHTML = record.html;
						record.svg.setAttribute("viewBox", "0 0 16 16");
						if (record.strokeWidth === null) record.svg.removeAttribute("stroke-width");
						else record.svg.setAttribute("stroke-width", record.strokeWidth);
						record.svg.removeAttribute("data-moe-chat-icon");
						record.svg.removeAttribute("data-moe-plug-icon");
					}
					document.querySelectorAll("svg[data-moe-nav-icon]").forEach((svg) => svg.removeAttribute("data-moe-nav-icon"));
					document.querySelectorAll(".dsh-moe-plug-gif").forEach((img) => img.remove());
					style.remove();
					maid.remove();
					whale.remove();
					delete document.body.dataset.dshMoeClean;
				};
			}, "dsh-moe-clean: blue-white glass theme");
		}

		exports.apply = apply;
		return module.exports;
	}
});
