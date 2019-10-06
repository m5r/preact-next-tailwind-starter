import { h } from "preact";
import App from "next/app";

import "../tailwind.css";

class NextApp extends App {
	public render() {
		const { Component, pageProps } = this.props;

		return (
			<Component {...pageProps} />
		);
	}
}

export default NextApp;
