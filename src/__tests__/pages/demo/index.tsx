import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/preact";
import userEvent from "@testing-library/user-event";

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

	beforeEach(() => {
		mockedRouterPush.mockReset();
	});

	test("sets loading state after submitting form", async () => {
		const { getByLabelText, getByTestId } = render(<DemoIndexPage />);
		const ghUsername = "m5r";

		await userEvent.type(getByLabelText("GitHub Username"), ghUsername);
		await fireEvent.click(getByTestId("github-stars-form"));

		expect(mockedRouterPush).toHaveBeenCalledWith("/demo/starred/m5r");
	});
});
