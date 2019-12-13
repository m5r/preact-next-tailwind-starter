import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

export const pageTitle = "Preact Next Tailwind Starter";
const defaultDescription = "Default description";
const defaultOGURL = "https://github.com/m5r/preact-next-tailwind-starter";
const defaultOGImage = "";

class NextDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="UTF-8" />
					<meta name="description" content={defaultDescription} />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
					<link rel="apple-touch-icon" href="/static/touch-icon.png" />
					<link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
					<link rel="icon" href="/static/favicon.ico" />
					<meta property="og:url" content={defaultOGURL} />
					<meta property="og:title" content={pageTitle} />
					<meta property="og:description" content={defaultDescription} />
					<meta name="twitter:site" content={defaultOGURL} />
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:image" content={defaultOGImage} />
					<meta property="og:image" content={defaultOGImage} />
					<meta property="og:image:width" content="1200" />
					<meta property="og:image:height" content="630" />
				</Head>
				<body>
				<Main />
				<NextScript />
				</body>
			</Html>
		);
	}
}

export default NextDocument;