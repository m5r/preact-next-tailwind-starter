import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/preact";

import UserStarredPage from "../../../../pages/demo/starred/[username]";

jest.mock("next/router", () => ({
	__esModule: true,
	useRouter: () => ({
		pathname: "",
		query: { username: "m5r " },
	}),
}));

describe("/demo/starred/:username", () => {
	test("user has no starred projects", async () => {
		const { getByText } = render(
			<UserStarredPage
				projects={[]}
				lastPage={null}
				nextPage={null}
				prevPage={null}
			/>,
		);

		expect(getByText("m5r has no starred projects")).toBeInTheDocument();
	});
});
