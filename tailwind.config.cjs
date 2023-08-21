/** @type {import('tailwindcss').Config}*/
const config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				rubik: ["Rubik", "sans-serif"],
			},
			colors: {
				"moderate-blue": "#4448C5",
				"soft-red": "#ED6468",
				"light-grayish": "#C3C4EF",
				"pale-red": "#FFB8BB",
				"dark-blue": "#324152",
				"grayish-blue": "#67727E",
				"light-gray": "#EAECF1",
				"very-light-gray": "#F5F6FA",
			},
			screens: {
				xs: "450px",
				desktop: "1440px",
			},
		},
	},

	plugins: [],
};

module.exports = config;
