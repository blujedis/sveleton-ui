// const sveleton = require('@sveleton/config').plugin;

// const defaultColors = {
// 	frame: {
// 		DEFAULT: '#64748B',
// 		50: '#E7EAEE',
// 		100: '#D8DDE3',
// 		200: '#BAC2CE',
// 		300: '#9DA8B8',
// 		400: '#7F8EA3',
// 		500: '#64748B',
// 		600: '#4A5667',
// 		700: '#313944',
// 		800: '#1E232A',
// 		900: '#15191E',
// 		950: '#0F1115'
// 	},
// 	primary: {
// 		DEFAULT: '#0D4C87',
// 		50: '#C2DEF9',
// 		100: '#A6CFF7',
// 		200: '#81BBF3',
// 		300: '#57A5EF',
// 		400: '#126BBF',
// 		500: '#0D4C87',
// 		600: '#0A3F70',
// 		700: '#083259',
// 		800: '#062541',
// 		900: '#04182A',
// 		950: '#03111E'
// 	},
// 	secondary: {
// 		DEFAULT: '#EF4444',
// 		50: '#FEF6F6',
// 		100: '#FCDADA',
// 		200: '#F9B5B5',
// 		300: '#F58F8F',
// 		400: '#F26A6A',
// 		500: '#EF4444',
// 		600: '#E71414',
// 		700: '#B30F0F',
// 		800: '#800B0B',
// 		900: '#4C0707',
// 		950: '#320404'
// 	},
// 	tertiary: {
// 		DEFAULT: '#7F7570',
// 		50: '#E9E7E6',
// 		100: '#E0DDDB',
// 		200: '#CCC8C6',
// 		300: '#B9B3B0',
// 		400: '#A69E9A',
// 		500: '#938985',
// 		600: '#6F6662',
// 		700: '#4F4845',
// 		800: '#2E2A29',
// 		900: '#1E1B1A',
// 		950: '#100F0E'
// 	},
// 	danger: {
// 		50: '#fff1f2',
// 		100: '#ffe4e6',
// 		200: '#fecdd3',
// 		300: '#fda4af',
// 		400: '#fb7185',
// 		500: '#f43f5e',
// 		600: '#e11d48',
// 		700: '#be123c',
// 		800: '#9f1239',
// 		900: '#881337',
// 		950: '#4c0519',
// 		DEFAULT: '#f43f5e'
// 	},
// 	warning: {
// 		50: '#fffbeb',
// 		100: '#fef3c7',
// 		200: '#fde68a',
// 		300: '#fcd34d',
// 		400: '#fbbf24',
// 		500: '#f59e0b',
// 		600: '#d97706',
// 		700: '#b45309',
// 		800: '#92400e',
// 		900: '#78350f',
// 		950: '#451a03',
// 		DEFAULT: '#f59e0b'
// 	},
// 	success: {
// 		50: '#ecfdf5',
// 		100: '#d1fae5',
// 		200: '#a7f3d0',
// 		300: '#6ee7b7',
// 		400: '#34d399',
// 		500: '#10b981',
// 		600: '#059669',
// 		700: '#047857',
// 		800: '#065f46',
// 		900: '#064e3b',
// 		950: '#022c22',
// 		DEFAULT: '#10b981'
// 	},
// 	info: {
// 		50: '#ecfeff',
// 		100: '#cffafe',
// 		200: '#a5f3fc',
// 		300: '#67e8f9',
// 		400: '#22d3ee',
// 		500: '#06b6d4',
// 		600: '#0891b2',
// 		700: '#0e7490',
// 		800: '#155e75',
// 		900: '#164e63',
// 		950: '#083344',
// 		DEFAULT: '#06b6d4'
// 	}
// };

// /** @type {import('@sveleton/config').PluginOptions} */
// const options = {
// 	output: false,
// 	outdir: './src/lib/theme/palettes',
// 	outname: 'app',
// 	dynamic: true,
// 	outsrc: false,
// 	colors: {
// 		...defaultColors
// 	}
// };

// module.exports = sveleton(options);

const tinycolor = require('tinycolor2');
const defaultTailwindColors = require('tailwindcss/colors');

const defaultColors = {
	frame: {
		DEFAULT: '#64748B',
		50: '#E7EAEE',
		100: '#D8DDE3',
		200: '#BAC2CE',
		300: '#9DA8B8',
		400: '#7F8EA3',
		500: '#64748B',
		600: '#4A5667',
		700: '#313944',
		800: '#1E232A',
		900: '#15191E',
		950: '#0F1115'
	},
	primary: {
		DEFAULT: '#0D4C87',
		50: '#C2DEF9',
		100: '#A6CFF7',
		200: '#81BBF3',
		300: '#57A5EF',
		400: '#126BBF',
		500: '#0D4C87',
		600: '#0A3F70',
		700: '#083259',
		800: '#062541',
		900: '#04182A',
		950: '#03111E'
	},
	secondary: {
		DEFAULT: '#EF4444',
		50: '#FEF6F6',
		100: '#FCDADA',
		200: '#F9B5B5',
		300: '#F58F8F',
		400: '#F26A6A',
		500: '#EF4444',
		600: '#E71414',
		700: '#B30F0F',
		800: '#800B0B',
		900: '#4C0707',
		950: '#320404'
	},
	tertiary: {
		DEFAULT: '#7F7570',
		50: '#E9E7E6',
		100: '#E0DDDB',
		200: '#CCC8C6',
		300: '#B9B3B0',
		400: '#A69E9A',
		500: '#938985',
		600: '#6F6662',
		700: '#4F4845',
		800: '#2E2A29',
		900: '#1E1B1A',
		950: '#100F0E'
	},
	danger: {
		50: '#fff1f2',
		100: '#ffe4e6',
		200: '#fecdd3',
		300: '#fda4af',
		400: '#fb7185',
		500: '#f43f5e',
		600: '#e11d48',
		700: '#be123c',
		800: '#9f1239',
		900: '#881337',
		950: '#4c0519',
		DEFAULT: '#f43f5e'
	},
	warning: {
		50: '#fffbeb',
		100: '#fef3c7',
		200: '#fde68a',
		300: '#fcd34d',
		400: '#fbbf24',
		500: '#f59e0b',
		600: '#d97706',
		700: '#b45309',
		800: '#92400e',
		900: '#78350f',
		950: '#451a03',
		DEFAULT: '#f59e0b'
	},
	success: {
		50: '#ecfdf5',
		100: '#d1fae5',
		200: '#a7f3d0',
		300: '#6ee7b7',
		400: '#34d399',
		500: '#10b981',
		600: '#059669',
		700: '#047857',
		800: '#065f46',
		900: '#064e3b',
		950: '#022c22',
		DEFAULT: '#10b981'
	},
	info: {
		50: '#ecfeff',
		100: '#cffafe',
		200: '#a5f3fc',
		300: '#67e8f9',
		400: '#22d3ee',
		500: '#06b6d4',
		600: '#0891b2',
		700: '#0e7490',
		800: '#155e75',
		900: '#164e63',
		950: '#083344',
		DEFAULT: '#06b6d4'
	}
};

/** 
 * @param {import('tinycolor2').ColorInput} color
 */
function getRgbChannels(color) {
	const c = tinycolor(color).toRgb();
	return `${c.r} ${c.g} ${c.b}`;
}

function generateRootVars(colors = defaultColors, name = '') {
	return Object.keys(colors).reduce((result, shadeOrObj) => {
		const value = colors[shadeOrObj];
		const key = shadeOrObj === 'DEFAULT' ? `--color${name}` : `--color${name}-${shadeOrObj}`;
		const currentResult =
			typeof value === 'string'
				? { [key]: getRgbChannels(value) }
				: generateRootVars(value, `-${shadeOrObj}`);
		return { ...result, ...currentResult };
	}, {});
}

function generateTailwindVars(colors = defaultColors, parent = '') {
	return Object.entries(colors).reduce((result, [key, value]) => {
		const colorName = parent === '' ? `${key}` : key === 'DEFAULT' ? `${parent}` : `${parent}-${key}`;
		const formattedValue = `rgb(var(--color-${colorName})/<alpha-value>)`
		const currentResult =
			typeof value === 'string'
				? { [key]: formattedValue }
				: { [key]: generateTailwindVars(value, key) };
		return { ...result, ...currentResult };

	}, {});
}

const plugin = (colors) => ({ addBase, theme }) => {
	addBase({
		':root': {
			...generateRootVars(colors),
		}
	});
};

exports.defaultColors = defaultColors;
exports.defaultTailwindColors = defaultTailwindColors;
exports.generateRootVars = generateRootVars;
exports.generateTailwindVars = generateTailwindVars;
exports.plugin = plugin;

