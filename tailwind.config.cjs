/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#e96269',
				primaryaccent: '#ff4747',
				secondary: '#696969',
				secondaryaccent: '#b3b3b3',
				menuprimary: '#ff868c',
				menuactive: '#ca323e',
			},
			fontFamily: {
				sans: ['Karla', 'sans-serif'],
				script: ['Nanum Pen Script', 'cursive'],
			},
			dropShadow: {
				'3xl': '0px 10px 10px rgba(233, 98, 105, 0.35)',
			},
		},
	},
	plugins: [require('prettier-plugin-tailwindcss')],
};
