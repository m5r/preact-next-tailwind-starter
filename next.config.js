const withCSS = require("@zeit/next-css");
const BundleAnalyzerPlugin = require("@bundle-analyzer/webpack-plugin");
require("dotenv").config();

// from https://github.com/zeit/next-plugins/issues/541#issuecomment-534863391
function HACK_removeMinimizeOptionFromCssLoaders(config) {
	console.warn(
		"HACK: Removing `minimize` option from `css-loader` entries in Webpack config",
	);
	config.module.rules.forEach(rule => {
		if (Array.isArray(rule.use)) {
			rule.use.forEach(u => {
				if (u.loader === "css-loader" && u.options) {
					delete u.options.minimize;
				}
			});
		}
	});
}

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
		HACK_removeMinimizeOptionFromCssLoaders(config);

		const plugins = config.plugins;
		if (process.env.BUNDLE_ANALYZER_TOKEN) {
			plugins.push(
				new BundleAnalyzerPlugin({ token: process.env.BUNDLE_ANALYZER_TOKEN }),
			);
		}

		return {
			...config,
			plugins,
		};
	},
}));
