import { createServer } from "http";
import { parse } from "url";
import next from "next";

const port = parseInt(process.env.PORT || "9029", 10);
const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
	.then(() => {
		createServer((req, res) => {
			const parsedUrl = parse(req.url!, true);
			handle(req, res, parsedUrl);
		})
			.listen(port)
			.on("listening", () => {
				console.log(`> Server listening on http://localhost:${port} as ${process.env.NODE_ENV}`);
			});
	});