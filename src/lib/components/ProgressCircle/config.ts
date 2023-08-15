import { fill, stroke } from '$lib/constants';
import { mergeConfigs } from '$lib/theme';

const baseTrackVariant = {
	$base: 'stroke-frame-100 dark:stroke-frame-600',
	light: '',
	dark: '',
	primary: '',
	secondary: '',
	tertiary: '',
	danger: '',
	warning: '',
	success: '',
	info: ''
};

const baseValueVariant = mergeConfigs(stroke, {
	dark: 'dark:stroke-frame-700'
});

const baseTextVariant = mergeConfigs(fill, {
	$base: 'text-[.85em]'
});

export const progressCircleTrack = {
	filled: { ...baseTrackVariant }
};

export const progressCircleValue = {
	filled: { ...baseValueVariant }
};

export const progressCircleText = {
	filled: { ...baseTextVariant }
};
