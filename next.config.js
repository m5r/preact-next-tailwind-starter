const withCSS = require("@zeit/next-css");
const BundleAnalyzerPlugin = require("@bundle-analyzer/webpack-plugin");
require("dotenv").config();

function withPreact(nextConfig = {}) {
	return Object.assign({}, nextConfig, {
		webpack(config, options) {
			if (!options.defaultLoaders) {
				throw new Error(
					"This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade",
				);
			}

			if (options.isServer) {
				config.externals = ["react", "react-dom", ...config.externals];
			}

			config.resolve.alias = Object.assign({}, config.resolve.alias, {
				react: "preact/compat",
				react$: "preact/compat",
				"react-dom": "preact/compat",
				"react-dom$": "preact/compat",
			});

			if (typeof nextConfig.webpack === "function") {
				return nextConfig.webpack(config, options);
			}

			return config;
		},
	});
}

module.exports = withCSS(withPreact({
	webpack(config) {
		if (process.env.BUNDLE_ANALYZER_TOKEN) {
			config.plugins.push(
				new BundleAnalyzerPlugin({ token: process.env.BUNDLE_ANALYZER_TOKEN }),
			);
		}

		return {
			...config,
			plugins: config.plugins,
		};
	},
}));
