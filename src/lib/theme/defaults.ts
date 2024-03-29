import type { ThemeDefaults } from './types';

const component = {
	// focused: true,
	// rounded: 'sm',
	// shadowed: undefined,
	// size: 'md',
	// theme: 'default',
	// transitioned: true
} as ThemeDefaults['component'];

const defaults: ThemeDefaults = {
	global: {
		bg: 'bg-white',
		text: 'text-default-700'
	},
	component
};

export default defaults;
