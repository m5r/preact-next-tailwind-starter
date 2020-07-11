import { callNowHandler } from "../../../../jest/helpers";
import usersHistory from "../../../pages/api/users-history";

describe("/api/users-history", () => {
	test("GET /api/users-history", async () => {
		const response = await callNowHandler(usersHistory);

		expect(response.status).toBe(200);
	});
});
