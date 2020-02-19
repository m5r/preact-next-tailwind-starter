require("dotenv").config();

const withBundleAnalyzer = require("@next/bundle-analyzer")({ enabled: process.env.ANALYZE === "true" });
const BundleAnalyzerPlugin = require("@bundle-analyzer/webpack-plugin");

const nextConfig = {
	experimental: {
		modern: true,
	},
	webpack(config) {
		if (process.env.BUNDLE_ANALYZER_TOKEN) {
			config.plugins.push(
				new BundleAnalyzerPlugin({ token: process.env.BUNDLE_ANALYZER_TOKEN }),
			);
		}

		const splitChunks = config.optimization && config.optimization.splitChunks;
		if (splitChunks) {
			const cacheGroups = splitChunks.cacheGroups;
			const preactModules = /[\\/]node_modules[\\/](preact|preact-render-to-string|preact-context-provider)[\\/]/;
			if (cacheGroups.framework) {
				cacheGroups.preact = Object.assign({}, cacheGroups.framework, { test: preactModules });
				cacheGroups.commons.name = "framework";
			} else {
				cacheGroups.preact = {
					name: "commons",
					chunks: "all",
					test: preactModules,
				};
			}
		}

		return config;
	},
};

module.exports = withBundleAnalyzer(nextConfig);
