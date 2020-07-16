import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/preact";

import UserStarredPage, { GithubProject } from "../../../../pages/demo/starred/[username]";

jest.mock("next/router", () => ({
	useRouter: () => ({
		pathname: "",
		query: { username: "m5r " },
	}),
}));

jest.mock("../../../../hooks/useRequest", () => ({
	__esModule: true,
	default: (request: any, options: { initialData: any }) => ({ data: options.initialData }),
}));

type DeepPartial<T> = {
	[P in keyof T]?: DeepPartial<T[P]>;
};

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

	test("user has starred projects", async () => {
		const projects: DeepPartial<GithubProject>[] = [
			{
				id: 29,
				html_url: "html_url",
				name: "Project 29",
				license: {
					name: "MIT",
				},
				stargazers_count: 3147,
				open_issues_count: 12,
				updated_at: "2020-07-15T20:33:56Z",
			},
			{
				id: 30,
				html_url: "html_url",
				name: "30th project",
				stargazers_count: 1,
				open_issues_count: 0,
				updated_at: "2020-07-02T10:19:05Z",
			},
		];

		const { getByText } = render(
			<UserStarredPage
				projects={projects as GithubProject[]}
				lastPage={null}
				nextPage={null}
				prevPage={null}
			/>,
		);

		expect(getByText("Project 29")).toBeInTheDocument();
		expect(getByText("30th project")).toBeInTheDocument();
	});
});
