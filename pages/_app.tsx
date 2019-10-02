import { h } from "preact";
import App, { Container } from "next/app";

import "../tailwind.css";

class NextApp extends App {
	public render() {
		const { Component, pageProps } = this.props;

		return (
			<Container>
				<Component {...pageProps} />
			</Container>
		);
	}
}

export default NextApp;
