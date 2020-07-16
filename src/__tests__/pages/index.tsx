import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/preact";

import Index from "../../pages";

describe("/", () => {
	test("landing page snapshot", () => {
		const { asFragment } = render(<Index />);

		expect(asFragment()).toMatchSnapshot();
	});
});
