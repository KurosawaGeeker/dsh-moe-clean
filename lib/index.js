// dsh-moe-clean — host half: serves the maid artwork to the browser.
import { createReadStream, existsSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const name = "dsh-moe-clean";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ASSETS_DIR = path.join(HERE, "..", "assets");

const MIME = {
	".webp": "image/webp",
	".png": "image/png",
	".svg": "image/svg+xml",
};

export async function apply(ctx) {
	// webServer may not be alive yet when apply() runs — inject it.
	ctx.inject(["webServer"], (wctx) => {
		const webServer = wctx.get("webServer");
		const dispose = webServer.register({
			kind: "exact",
			path: "/api/dsh-moe-clean/assets",
			handler: async (req, res) => {
				try {
					const url = new URL(req.url, "http://127.0.0.1");
					const rel = (url.searchParams.get("f") ?? "").split("?")[0];
					const file = path.normalize(path.join(ASSETS_DIR, rel));
					if (!file.startsWith(ASSETS_DIR + path.sep) || !existsSync(file) || !statSync(file).isFile()) {
						res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
						res.end("not found");
						return;
					}
					res.writeHead(200, {
						"Content-Type": MIME[path.extname(file).toLowerCase()] ?? "application/octet-stream",
						"Cache-Control": "public, max-age=86400",
					});
					createReadStream(file).pipe(res);
				} catch (error) {
					res.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" });
					res.end(String(error?.message ?? error));
				}
			},
		});
		wctx.effect(() => dispose, "dsh-moe-clean: asset route");
	});
}
