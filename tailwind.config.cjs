const aft = require('./aft.config.cjs');

// why do this? Stops VSCode from
// complaining about unknown tailwindcss
// theme colors.
const colors = {
	...aft.defaultColors,
	...aft.generateTailwindVars(aft.defaultColors)
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors
		}
	},
	plugins: [
		require('@tailwindcss/forms')({
			strategy: 'class'
		}),
		aft.plugin()
	]
};
