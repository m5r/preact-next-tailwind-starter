const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter var", ...defaultTheme.fontFamily.sans],
			},
			spacing: {
				33: "8.25rem",
				34: "8.5rem",
				38: "9.5rem",
			},
		},
	},
	variants: {},
	plugins: [
		require("@tailwindcss/ui"),
	],
	purge: [
		"./src/components/**/*.tsx",
		"./src/pages/**/*.tsx",
	],
};
