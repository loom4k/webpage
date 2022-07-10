/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
			white: "#fff",
			"epic-black": "#131212",
			"epic-black-light": "#1c1b1b",
			"gray": "#969696",
			pastel: {
				green: "#6dcc93",
				"green-light": "#8ad1a6",
				red: "#FF6666",
				blue: "#77DDFF",
				yellow: "#EEAC42",
				orange: "#FFCC66",
				blurple: "#7777FF",
				pink: "#FF77FF",
				white: "#FFFFFF",
				black: "#000000",
			},
			"transparent-pastel": {
				green: "#8fddae99",
			},
		},
		letterSpacing: {
			tightest: "-0.075em",
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
			"custom-md": "1200px",
		},
		extend: {},
	},
	plugins: [],
};
