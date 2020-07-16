import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, waitFor } from "@testing-library/preact";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { setupServer } from "msw/node";

import Router from "next/router";

import DemoIndexPage from "../../../pages/demo/index";

jest.mock("next/router", () => ({
	__esModule: true,
	useRouter: () => ({ pathname: "" }),
	default: {
		push: jest.fn(),
	},
}));

describe("/demo", () => {
	const mockedRouterPush = Router.push as ReturnType<typeof jest.fn>;

	const server = setupServer(
		rest.get("/api/users-history", (req, res, ctx) => {
			return res(ctx.json({ users: ["dddd"] }));
		}),
	);

	beforeEach(() => {
		mockedRouterPush.mockReset();
	});
	beforeAll(() => {
		server.listen();
	});
	afterAll(() => {
		server.close();
	});

	test("redirect user to /demo/starred/:username after submitting form", async () => {
		const { getByLabelText, getByText } = render(<DemoIndexPage />);
		const ghUsername = "m5r";

		await waitFor(() => {
			expect(getByText("Recent searches")).toBeInTheDocument();
		});

		await userEvent.type(getByLabelText("GitHub Username"), ghUsername);
		await fireEvent.click(getByText("Submit"));

		expect(mockedRouterPush).toHaveBeenCalledWith("/demo/starred/m5r");
	});
});
