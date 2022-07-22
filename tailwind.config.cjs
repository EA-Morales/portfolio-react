/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#e96269",
				primaryaccent: "#ff4747",
				secondary: "#696969",
				secondaryaccent: "#b3b3b3",
			},
			fontFamily: {
				sans: ["Karla", "sans-serif"],
				script: ["Nanum Pen Script", "cursive"],
			},
		},
	},
	plugins: [require("prettier-plugin-tailwindcss")],
};
