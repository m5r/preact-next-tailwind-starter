require("dotenv").config();

const withPrefresh = require("@prefresh/next");
const withBundleAnalyzer = require("@next/bundle-analyzer")({ enabled: process.env.ANALYZE === "true" });
const BundleAnalyzerPlugin = require("@bundle-analyzer/webpack-plugin");

const nextConfig = {
	experimental: {
		modern: true,
		polyfillsOptimization: true,
	},
	webpack(config, { dev, isServer }) {
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

		// install webpack aliases:
		const aliases = config.resolve.alias || (config.resolve.alias = {});
		aliases.react = aliases["react-dom"] = "preact/compat";

		// inject Preact DevTools
		if (dev && !isServer) {
			const entry = config.entry;
			config.entry = () => entry().then(entries => {
				entries["main.js"] = ["preact/debug"].concat(entries["main.js"] || []);
				return entries;
			});
		}

		return config;
	},
};

module.exports = withBundleAnalyzer(withPrefresh(nextConfig));
