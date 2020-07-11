import { NextApiRequest, NextApiResponse } from "next";
import http, { RequestListener } from "http";
import { __ApiPreviewProps, apiResolver } from "next/dist/next-server/server/api-utils";
import listen from "test-listen";
import fetch from "isomorphic-fetch";
import crypto from "crypto";

type Handler = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

type Options = {
	headers?: Record<string, string>;
	query?: Record<string, string>;
	cookie?: Record<string, string>;
}

type Params = {
	method: string;
	body?: any;
	options?: Options;
}

const apiPreviewProps: __ApiPreviewProps = {
	previewModeEncryptionKey: crypto.randomBytes(16).toString("hex"),
	previewModeId: crypto.randomBytes(32).toString("hex"),
	previewModeSigningKey: crypto.randomBytes(32).toString("hex"),
};

export async function callNowHandler(handler: Handler, params: Params): Promise<any> {
	const {
		method,
		body,
		options = {},
	} = params;
	const requestHandler: RequestListener = (req, res) => {
		if (options.headers) {
			const enhancedHeaders = Object.assign(
				{},
				req.headers,
				options.headers,
			);

			Object.assign(req.headers, enhancedHeaders);
		}

		if (options.cookie) {
			let cookie = "";

			for (const [key, value] of Object.entries(options.cookie)) {
				cookie += `${key}=${value};`;
			}

			const enhancedHeaders = Object.assign(
				{},
				req.headers,
				{ cookie },
			);

			Object.assign(req.headers, enhancedHeaders);
		}

		return apiResolver(req, res, options.query, handler, apiPreviewProps);
	};
	const server = http.createServer(requestHandler);
	const url = await listen(server);
	let fetchOptions: any = { method };
	if (body) {
		fetchOptions.body = JSON.stringify(body);
		fetchOptions.headers = { "Content-Type": "application/json" };
	}

	const response = await fetch(url, fetchOptions);
	server.close();

	return response;
}
