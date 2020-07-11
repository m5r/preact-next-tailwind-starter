import { callNowHandler } from "../../../../jest/helpers";
import usersHistory from "../../../pages/api/users-history";

const consoleError = console.error;

describe("/api/users-history", () => {
	afterEach(() => {
		console.error = consoleError;
	});

	test("Nominal test case", async () => {
		const usernamesToInsert = ["m5r", "mokhtar", "m5r", "dj-khaled"]
		await Promise.all(usernamesToInsert.map(async (user) => {
			const putResponse = await callNowHandler(usersHistory, {
				method: "PUT",
				body: { user },
			});

			expect(putResponse.status).toBe(200);
		}))

		const getResponse = await callNowHandler(usersHistory, { method: "GET" });
		const body = await getResponse.json();

		expect(getResponse.status).toBe(200);
		expect(body).toStrictEqual({ users: ["dj-khaled", "m5r", "mokhtar"] });
	});

	test("PUT /api/users-history - malformed body error", async () => {
		console.error = jest.fn();
		const response = await callNowHandler(usersHistory, { method: "PUT" });

		expect(console.error).toHaveBeenCalled();
		expect(response.status).toBe(500);
	});

	test("POST /api/users-history", async () => {
		console.error = jest.fn();
		const response = await callNowHandler(usersHistory, { method: "POST" });

		expect(console.error).toHaveBeenCalled();
		expect(response.status).toBe(405);
	});
});
