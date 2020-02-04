import App from "next/app";
import Head from "next/head";
import Amplify from "aws-amplify";
import config from "../aws-exports";

Amplify.configure(config);

import { pageTitle } from "./_document";

import "../tailwind.css";

class NextApp extends App {
	public render() {
		const { Component, pageProps } = this.props;

		return (
			<>
				<Head>
					<title>{pageTitle}</title>
				</Head>
				<Component {...pageProps} />
			</>
		);
	}
}

export default NextApp;
