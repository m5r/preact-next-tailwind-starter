const plugins = ["tailwindcss", "postcss-preset-env", "postcss-easy-import"];

if (process.env.NODE_ENV === "production") {
	plugins.push([
		"@fullhuman/postcss-purgecss",
		{
			content: ["./src/**/*.tsx"],
			defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
		},
	]);
}

module.exports = { plugins };
