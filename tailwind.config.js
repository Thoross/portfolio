import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		container: {
			center: true
		},
		extend: {
			fontFamily: {
				sans: ['Ysabeau', 'sans-serif', ...defaultTheme.fontFamily.sans],
				sigmar: ['Sigmar', 'cursive']
			}
		}
	},
	plugins: []
}

