import { NextApiRequest, NextApiResponse } from "next";

import * as cache from "./_cache";

type Data = {
	users: string[];
}

type ApiError = {
	errorMessage: string;
}

type Response = Data | ApiError;

export default async function usersHistory(req: NextApiRequest, res: NextApiResponse<Response>): Promise<void> {
	switch (req.method) {
		case "PUT":
			return insertUser(req, res);
		case "GET":
			return getUsersHistory(res);
		default:
			const error = {
				errorMessage: `Method ${req.method} Not Allowed for /api/users-history`,
			};
			console.error(error);

			res.setHeader("Allow", ["PUT", "GET"]);
			res.status(405).send(error);
			return;
	}
}

function getUsersHistory(res: NextApiResponse<Response>): void {
	res.status(200).json({ users: cache.getAll().reverse() });
}

type Body = {
	user: string;
};

function isValidBody(body: any): body is Body {
	return body.hasOwnProperty("user") && body.user === null || typeof body.user === "string";
}

function insertUser(req: NextApiRequest, res: NextApiResponse<Response>): void {
	const body = req.body;

	if (!isValidBody(body)) {
		const error: ApiError = {
			errorMessage: "Malformed body",
		};
		console.error(error);

		res.status(500).send(error);
		return;
	}

	try {
		cache.add(body.user);
	} catch (e) {
		console.error(e);
		return res.status(500).end();
	}

	res.setHeader("Content-Type", "application/json");
	res.status(200).end();
}
