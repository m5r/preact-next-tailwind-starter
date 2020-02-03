module.exports = {
	plugins: [
		"postcss-easy-import",
		"tailwindcss",
		"postcss-preset-env",
		process.env.NODE_ENV === "production" ?
			[
				"@fullhuman/postcss-purgecss",
				{
					content: [
						"./src/pages/**/*.{js,jsx,ts,tsx}",
						"./src/components/**/*.{js,jsx,ts,tsx}",
					],
					defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
				},
			] :
			undefined,
	],
};
